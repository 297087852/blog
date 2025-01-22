const fs = require('fs');
const path = require('path');
const https = require('https');

// 导入 node-fetch
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// 配置
const config = {
  github: {
    owner: 'star8085',
    repo: 'picture',
    token: '',
    branch: process.env.GITHUB_BRANCH || 'main',
    imagePath: process.env.GITHUB_IMAGE_PATH || 'images/2025/react通过秘籍/'
  },
  proxy: {
    http: 'http://127.0.0.1:7890',
    https: 'https://127.0.0.1:7890',
    socks5: 'socks5://127.0.0.1:7890'
  }
};

// 下载图片
async function downloadImage(url) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const options = {
      hostname: urlObj.hostname,
      path: urlObj.pathname + urlObj.search,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      agent: new https.Agent({
        proxy: config.proxy.https,
        rejectUnauthorized: false
      })
    };

    https.get(options, (res) => {
      if (res.statusCode !== 200) {
        return reject(new Error(`下载失败: ${res.statusCode}`));
      }

      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

// 上传到 GitHub
async function uploadToGitHub(buffer, fileName) {
  const content = buffer.toString('base64');
  const uploadPath = `${config.github.imagePath}${fileName}`;

  // 设置代理环境变量
  process.env.HTTPS_PROXY = config.proxy.https;
  process.env.HTTP_PROXY = config.proxy.http;
  process.env.ALL_PROXY = config.proxy.socks5;

  try {
    const response = await fetch(
      `https://api.github.com/repos/${config.github.owner}/${config.github.repo}/contents/${uploadPath}`,
      {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${config.github.token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'GitHub-Image-Migration-Script'
        },
        body: JSON.stringify({
          message: `Upload image: ${fileName}`,
          content: content,
          branch: config.github.branch
        })
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`GitHub API 错误: ${response.status}\n${errorText}`);
    }

    return `https://raw.githubusercontent.com/${config.github.owner}/${config.github.repo}/${config.github.branch}/${uploadPath}`;
  } catch (error) {
    console.error('上传失败:', error.message);
    throw error;
  }
}

// 验证配置
function validateConfig() {
  const required = ['owner', 'repo', 'token'];
  const missing = required.filter(key => !config.github[key]);
  
  if (missing.length > 0) {
    console.error('缺少必要的环境变量:');
    console.error(`请设置以下环境变量: ${missing.map(key => `GITHUB_${key.toUpperCase()}`).join(', ')}`);
    process.exit(1);
  }
}

// 处理单个文件
async function processFile(filePath) {
  try {
    console.log(`处理文件: ${filePath}`);
    const content = fs.readFileSync(filePath, 'utf8');
    const imgRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
    let newContent = content;
    let matches = [...content.matchAll(imgRegex)];

    for (let i = 0; i < matches.length; i++) {
      const [fullMatch, altText, imgUrl] = matches[i];
      if (!imgUrl.startsWith('http')) continue;

      console.log(`处理图片 ${i + 1}/${matches.length}: ${imgUrl}`);
      
      try {
        const imgBuffer = await downloadImage(imgUrl);
        const fileName = `${Date.now()}-${path.basename(imgUrl).replace(/[^a-zA-Z0-9.-]/g, '')}`;
        const newUrl = await uploadToGitHub(imgBuffer, fileName);
        newContent = newContent.replace(fullMatch, `![${altText}](${newUrl})`);
        console.log(`✓ 图片处理成功: ${newUrl}`);
      } catch (error) {
        console.error(`处理图片失败: ${imgUrl}`, error);
      }
    }

    fs.writeFileSync(filePath, newContent);
    console.log(`文件处理完成: ${filePath}`);
  } catch (error) {
    console.error(`处理文件失败: ${filePath}`, error);
  }
}

// 处理目录
async function processDirectory(dirPath) {
  try {
    const files = fs.readdirSync(dirPath);
    
    for (const file of files) {
      const fullPath = path.join(dirPath, file);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        await processDirectory(fullPath);
      } else if (path.extname(file).toLowerCase() === '.md') {
        await processFile(fullPath);
      }
    }
  } catch (error) {
    console.error(`处理目录失败: ${dirPath}`, error);
  }
}

// 处理输入路径
async function processPath(inputPath) {
  try {
    const stat = fs.statSync(inputPath);
    
    if (stat.isDirectory()) {
      await processDirectory(inputPath);
    } else if (stat.isFile() && path.extname(inputPath).toLowerCase() === '.md') {
      await processFile(inputPath);
    } else {
      console.log('请提供有效的 markdown 文件或目录路径');
      process.exit(1);
    }
  } catch (error) {
    console.error(`处理路径失败: ${inputPath}`, error);
    process.exit(1);
  }
}

// 主函数
async function main() {
  validateConfig();

  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.log('请提供文件或目录路径');
    process.exit(1);
  }

  // 处理带空格的文件路径
  const inputPaths = args.map(arg => arg.replace(/\\ /g, ' ')); // 处理转义的空格
  
  for (const inputPath of inputPaths) {
    console.log(`开始处理: ${inputPath}`);
    await processPath(inputPath);
  }
}

// 运行脚本
main().catch(error => {
  console.error('程序执行失败:', error);
  process.exit(1);
});
