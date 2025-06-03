const fs = require('fs');
const path = require('path');

// 配置：只生成这些文件夹的 sidebar
const includeDirs = [
  'React 通关秘籍',
  'SVG 动画开发实战手册',
  '深入浅出 SVG',
  'Web 动画之旅'
];

// Function to get all markdown files in a directory recursively
function getMarkdownFiles(dir, basePath = '') {
  const items = [];
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Skip node_modules and .git directories
      if (file === 'node_modules' || file === '.git' || file === '.vitepress') {
        return;
      }

      const subItems = getMarkdownFiles(fullPath, path.join(basePath, file));
      if (subItems.length > 0) {
        items.push({
          text: file,
          items: subItems
        });
      }
    } else if (file.endsWith('.md')) {
      // Skip README.md files
      if (file.toLowerCase() === 'readme.md') {
        return;
      }

      const relativePath = path.join(basePath, file);
      items.push({
        text: file.replace('.md', ''),
        link: '/' + relativePath.replace(/\\/g, '/')
      });
    }
  });

  // Sort items: directories first, then files
  return items.sort((a, b) => {
    if ('items' in a && !('items' in b)) return -1;
    if (!('items' in a) && 'items' in b) return 1;
    return a.text.localeCompare(b.text);
  }).sort((a, b) => {
    const numA = parseInt(a.text.match(/\d+/)[0]);  
    const numB = parseInt(b.text.match(/\d+/)[0]);
    return numA - numB;
  });
}

// Function to generate sidebar configuration
function generateSidebar() {
  const rootDir = path.resolve(__dirname, '..');
  const sidebar = {};

  // 只处理 includeDirs 中存在的目录
  const dirs = includeDirs.filter(dir => {
    const fullPath = path.join(rootDir, dir);
    return fs.existsSync(fullPath) && fs.statSync(fullPath).isDirectory();
  });

  // Generate sidebar for each directory
  dirs.forEach(dir => {
    const dirPath = path.join(rootDir, dir);
    const items = getMarkdownFiles(dirPath);
    if (items.length > 0) {
      sidebar[`/${dir}/`] = [{
        text: dir,
        items: items.map(item => {
          return {
            text: item.text,
            link: '/' + dir + item.link.replace(/\\/g, '/')
          }
        })
      }];
    }
  });

  return sidebar;
}

// Function to update the VitePress config file
function updateConfig() {
  const configPath = path.resolve(__dirname, '../.vitepress/config.mts');
  const sidebar = generateSidebar();
  
  // Read the current config file
  let configContent = fs.readFileSync(configPath, 'utf-8');
  
  // Replace the sidebar configuration
  const sidebarStr = JSON.stringify(sidebar, null, 2)
    .replace(/"([^"]+)":/g, "'$1':") // Convert property names to single quotes
    .replace(/"([^"]+)"/g, "'$1'");   // Convert string values to single quotes
  
  // Use regex to replace the sidebar configuration
  const newConfig = configContent.replace(
    /sidebar:\s*{[^}]*}/s,
    `sidebar: ${sidebarStr}`
  );
  
  // Write the updated config back to the file
  fs.writeFileSync(configPath, newConfig);
  console.log('Sidebar configuration has been updated successfully!');
}

// Run the update
updateConfig(); 