const fs = require('fs');
const path = require('path');
const https = require('https');
const crypto = require('crypto');
const os = require('os');

// 导入 node-fetch
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// 配置
const config = {
  github: {
    owner: 'star8085',
    repo: 'picture',
    token: process.env.GITHUB_TOKEN || '',
    branch: process.env.GITHUB_BRANCH || 'main',
    imagePath: process.env.GITHUB_IMAGE_PATH || 'images/2025/react通过秘籍/'
  },
  // 并发数（下载 + 上传）
  concurrency: Number(process.env.MIGRATE_CONCURRENCY || 4),
  // 迁移结果缓存，用于断点续跑
  cacheFile: process.env.MIGRATE_CACHE || path.join(os.tmpdir(), 'github-image-migration-cache.json'),
  // 本地目录模式：图片只写入本地 git 仓库，后续用 git push 批量提交（绕开 API 限流）
  localDir: process.env.MIGRATE_LOCAL_DIR || ''
};

const EXT_BY_TYPE = {
  'image/png': '.png',
  'image/jpeg': '.jpg',
  'image/gif': '.gif',
  'image/webp': '.webp',
  'image/svg+xml': '.svg',
  'image/bmp': '.bmp',
  'image/avif': '.avif'
};

// url -> 新地址 的缓存，避免重复上传
let cache = {};
if (fs.existsSync(config.cacheFile)) {
  try {
    cache = JSON.parse(fs.readFileSync(config.cacheFile, 'utf8'));
    console.log(`加载迁移缓存: ${Object.keys(cache).length} 条`);
  } catch (error) {
    console.warn(`缓存文件解析失败，忽略: ${config.cacheFile}`);
    cache = {};
  }
}

function saveCache() {
  fs.writeFileSync(config.cacheFile, JSON.stringify(cache, null, 2));
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 复用连接，避免每次请求都重新握手
const keepAliveAgent = new https.Agent({ keepAlive: true, maxSockets: 128 });

// 下载图片（支持重试）
async function downloadImage(url, retries = 3) {
  for (let attempt = 1; ; attempt++) {
    try {
      return await new Promise((resolve, reject) => {
        const urlObj = new URL(url);
        const client = urlObj.protocol === 'http:' ? require('http') : https;

        const req = client.get(urlObj, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
          },
          agent: keepAliveAgent,
          rejectUnauthorized: false
        }, (res) => {
          if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
            res.resume();
            return resolve(downloadImage(new URL(res.headers.location, url).href, retries));
          }
          if (res.statusCode !== 200) {
            res.resume();
            return reject(new Error(`下载失败: ${res.statusCode}`));
          }

          const chunks = [];
          res.on('data', chunk => chunks.push(chunk));
          res.on('end', () => resolve({
            buffer: Buffer.concat(chunks),
            contentType: (res.headers['content-type'] || '').split(';')[0].trim()
          }));
          res.on('error', reject);
        });

        req.setTimeout(60000, () => req.destroy(new Error('下载超时')));
        req.on('error', reject);
      });
    } catch (error) {
      if (attempt >= retries) throw error;
      await sleep(1000 * attempt);
    }
  }
}

// 生成稳定的文件名：内容无关、同一 URL 始终一致，便于断点续跑
function buildFileName(url, contentType) {
  const hash = crypto.createHash('sha1').update(url).digest('hex').slice(0, 16);
  const base = path.basename(new URL(url).pathname).replace(/[^a-zA-Z0-9.-]/g, '');
  const ext = EXT_BY_TYPE[contentType] || (path.extname(base).match(/^\.(png|jpe?g|gif|webp|svg|bmp|avif)$/i) ? path.extname(base) : '.png');
  return `${hash}-${base.replace(/\.[^.]*$/, '')}${ext}`;
}

function rawUrl(uploadPath) {
  return `https://raw.githubusercontent.com/${config.github.owner}/${config.github.repo}/${config.github.branch}/${uploadPath}`;
}

// 遇到限流时等待配额重置
async function waitForRateLimit(response) {
  const remaining = response.headers.get('x-ratelimit-remaining');
  const reset = response.headers.get('x-ratelimit-reset');
  if (remaining !== '0' || !reset) return false;

  const waitMs = Math.max(Number(reset) * 1000 - Date.now(), 1000) + 1000;
  console.warn(`触发 GitHub 限流，等待 ${Math.ceil(waitMs / 1000)}s 后继续`);
  await sleep(waitMs);
  return true;
}

// 上传到 GitHub
async function uploadToGitHub(buffer, fileName, retries = 3) {
  const uploadPath = `${config.github.imagePath}${fileName}`;
  const content = buffer.toString('base64');

  for (let attempt = 1; ; attempt++) {
    try {
      const response = await fetch(
        `https://api.github.com/repos/${config.github.owner}/${config.github.repo}/contents/${encodeURI(uploadPath)}`,
        {
          method: 'PUT',
          agent: keepAliveAgent,
          headers: {
            'Authorization': `Bearer ${config.github.token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'GitHub-Image-Migration-Script'
          },
          body: JSON.stringify({
            message: `Upload image: ${fileName}`,
            content,
            branch: config.github.branch
          })
        }
      );

      if (response.ok) {
        return rawUrl(uploadPath);
      }

      // 文件已存在（内容相同会返回 422，内容不同会返回 409）
      if (response.status === 422 || response.status === 409) {
        return rawUrl(uploadPath);
      }

      // 次级限流（内容创建频率过高）会带 retry-after
      if (response.status === 403 || response.status === 429) {
        const retryAfter = Number(response.headers.get('retry-after'));
        if (retryAfter > 0) {
          console.warn(`触发次级限流，等待 ${retryAfter}s 后重试`);
          await sleep(retryAfter * 1000 + 1000);
          continue;
        }
        if (await waitForRateLimit(response)) continue;
      }

      if (response.status >= 500 && attempt < retries) {
        await sleep(1000 * attempt);
        continue;
      }

      const errorText = await response.text();
      throw new Error(`GitHub API 错误: ${response.status}\n${errorText}`);
    } catch (error) {
      if (attempt >= retries) throw error;
      await sleep(1000 * attempt);
    }
  }
}

// 文件名 -> 原始地址，用于补下载已经改写过、但文件实际缺失的图片
const reverseCache = {};
for (const [source, target] of Object.entries(cache)) {
  reverseCache[decodeURIComponent(path.basename(target))] = source;
}

async function migrateImage(url) {
  // 已迁移地址但文件缺失：按文件名找回原始地址重新下载
  if (url.includes('raw.githubusercontent.com')) {
    const fileName = decodeURIComponent(path.basename(url));
    const source = reverseCache[fileName];
    if (!source) throw new Error('缓存中找不到原始地址');

    const { buffer } = await downloadImage(source);
    fs.mkdirSync(config.localDir, { recursive: true });
    fs.writeFileSync(path.join(config.localDir, fileName), buffer);
    return url;
  }

  const cached = cache[url];

  // 本地模式下以磁盘文件为准，避免缓存里有映射但文件实际不存在
  if (cached && config.localDir) {
    if (fs.existsSync(path.join(config.localDir, path.basename(cached)))) return cached;
  } else if (cached) {
    return cached;
  }

  const { buffer, contentType } = await downloadImage(url);
  const fileName = buildFileName(url, contentType);

  if (config.localDir) {
    fs.mkdirSync(config.localDir, { recursive: true });
    fs.writeFileSync(path.join(config.localDir, fileName), buffer);
    cache[url] = rawUrl(`${config.github.imagePath}${fileName}`);
  } else {
    cache[url] = await uploadToGitHub(buffer, fileName);
  }

  const newUrl = cache[url];
  if (Object.keys(cache).length % 50 === 0) saveCache();
  return newUrl;
}

// 并发池
async function mapWithConcurrency(items, limit, worker) {
  const results = new Array(items.length);
  let index = 0;

  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (index < items.length) {
      const current = index++;
      results[current] = await worker(items[current], current);
    }
  });

  await Promise.all(workers);
  return results;
}

// 兼容 ![](url)、![](<url>)、[](url) 三种写法
const imgRegex = /(!?)\[([^\]]*)\]\(\s*<?(https?:\/\/[^\s)>]+)>?\s*\)/g;

// 收集待处理的 markdown 文件
function collectFiles(inputPath, files = []) {
  const stat = fs.statSync(inputPath);

  if (stat.isDirectory()) {
    for (const file of fs.readdirSync(inputPath)) {
      collectFiles(path.join(inputPath, file), files);
    }
  } else if (stat.isFile() && path.extname(inputPath).toLowerCase() === '.md') {
    files.push(inputPath);
  }

  return files;
}

// 解析文件中的待迁移图片
function collectJobs(files) {
  const jobs = [];

  for (const filePath of files) {
    const content = fs.readFileSync(filePath, 'utf8');
    const matches = [...content.matchAll(imgRegex)]
      .filter(([, bang, , imgUrl]) => {
        // 已迁移的地址：本地模式下再检查文件是否真的存在，缺失则补下载
        if (imgUrl.includes('raw.githubusercontent.com')) {
          if (!config.localDir || !imgUrl.includes(config.github.imagePath)) return false;
          const fileName = decodeURIComponent(path.basename(imgUrl));
          return !fs.existsSync(path.join(config.localDir, fileName));
        }

        // 只处理图片：带 ! 前缀，或指向掘金图床（正文里存在 []() 形式的图片链接）
        return bang === '!' || imgUrl.includes('byteimg.com') || imgUrl.includes('juejin.cn');
      });

    if (matches.length > 0) {
      console.log(`待处理: ${filePath}（${matches.length} 张）`);
      jobs.push({ filePath, content, matches });
    }
  }

  return jobs;
}

// 处理文件列表：全局并发迁移，再统一写回
async function processFiles(files, stats) {
  const jobFiles = collectJobs(files);
  const queue = [];

  for (const file of jobFiles) {
    for (const match of file.matches) {
      queue.push({ file, match });
    }
  }

  stats.total = queue.length;
  if (queue.length === 0) return;

  console.log(`共 ${queue.length} 张图片待迁移，并发 ${config.concurrency}`);

  const results = await mapWithConcurrency(queue, config.concurrency, async ({ match }) => {
    const imgUrl = match[3];
    try {
      const newUrl = await migrateImage(imgUrl);
      stats.success++;
      if (stats.success % 20 === 0) {
        console.log(`  进度 ${stats.success}/${queue.length}`);
      }
      return newUrl;
    } catch (error) {
      stats.failed++;
      console.error(`  ✗ ${imgUrl} 失败: ${error.message}`);
      return null;
    }
  });

  saveCache();

  let currentFile = null;
  let content = '';

  for (let i = 0; i < queue.length; i++) {
    const { file, match } = queue[i];
    if (file !== currentFile) {
      if (currentFile) writeFile(currentFile.filePath, content);
      currentFile = file;
      content = file.content;
    }
    if (results[i]) {
      content = content.replace(match[0], `${match[1]}[${match[2]}](${results[i]})`);
    }
  }
  if (currentFile) writeFile(currentFile.filePath, content);
}

function writeFile(filePath, newContent) {
  const oldContent = fs.readFileSync(filePath, 'utf8');
  if (newContent !== oldContent) {
    fs.writeFileSync(filePath, newContent);
    console.log(`文件已更新: ${filePath}`);
  }
}

// 处理输入路径
function processPath(inputPath) {
  const stat = fs.statSync(inputPath);
  const isMarkdown = stat.isFile() && path.extname(inputPath).toLowerCase() === '.md';

  if (!stat.isDirectory() && !isMarkdown) {
    console.log(`请提供有效的 markdown 文件或目录路径: ${inputPath}`);
    process.exit(1);
  }

  return stat.isDirectory() ? collectFiles(inputPath) : [inputPath];
}

// 主函数
async function main() {
  if (!config.github.token && !config.localDir) {
    console.error('缺少 GITHUB_TOKEN，请先设置后重试：export GITHUB_TOKEN=xxx');
    process.exit(1);
  }

  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.log('请提供文件或目录路径');
    process.exit(1);
  }

  console.log(`目标目录: ${config.github.imagePath}`);

  // 处理带空格的文件路径
  const inputPaths = args.map(arg => arg.replace(/\\ /g, ' '));
  const stats = { total: 0, success: 0, failed: 0 };
  const files = [];

  for (const inputPath of inputPaths) {
    console.log(`开始处理: ${inputPath}`);
    files.push(...processPath(inputPath));
  }

  await processFiles(files, stats);

  console.log(`\n完成：共 ${stats.total} 张，成功 ${stats.success} 张，失败 ${stats.failed} 张`);
  if (stats.failed > 0) process.exitCode = 1;
}

main().catch(error => {
  console.error('程序执行失败:', error);
  process.exit(1);
});
