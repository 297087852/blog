import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/blog/',
  title: 'My Awesome Project',
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      {
        text: '武功秘籍',
        items: [
          { text: 'React 通关秘籍', link: '/React 通关秘籍/1.关于本小册.md' },
          {
            text: '深入浅出 SVG',
            link: '/深入浅出 SVG/1-开篇：神奇的 SVG 技术之旅.md',
          },
          {
            text: 'Web 动画之旅',
            link: '/Web 动画之旅/1-Web 动画基础：从发展史中了解 Web 动画及动画的作用.md',
          },
        ],
      },
    ],

    sidebar: {
  '/React 通关秘籍/': [
    {
      'text': 'React 通关秘籍',
      'items': [
        {
          'text': '1.关于本小册',
          'link': '/React 通关秘籍/1.关于本小册.md'
        },
        {
          'text': '2.一网打尽组件常用 Hook',
          'link': '/React 通关秘籍/2.一网打尽组件常用 Hook.md'
        },
        {
          'text': '3.Hook 的闭包陷阱的成因和解决方案',
          'link': '/React 通关秘籍/3.Hook 的闭包陷阱的成因和解决方案.md'
        },
        {
          'text': '4.React 组件如何写 TypeScript 类型',
          'link': '/React 通关秘籍/4.React 组件如何写 TypeScript 类型.md'
        },
        {
          'text': '5.React 组件如何调试',
          'link': '/React 通关秘籍/5.React 组件如何调试.md'
        },
        {
          'text': '6.受控模式 VS 非受控模式',
          'link': '/React 通关秘籍/6.受控模式 VS 非受控模式.md'
        },
        {
          'text': '7.组件实战：迷你 Calendar',
          'link': '/React 通关秘籍/7.组件实战：迷你 Calendar.md'
        },
        {
          'text': '8.组件实战：Calendar 日历组件（上',
          'link': '/React 通关秘籍/8.组件实战：Calendar 日历组件（上.md'
        },
        {
          'text': '9.组件实战：Calendar 日历组件（下',
          'link': '/React 通关秘籍/9.组件实战：Calendar 日历组件（下.md'
        },
        {
          'text': '10.快速掌握 Storybook',
          'link': '/React 通关秘籍/10.快速掌握 Storybook.md'
        },
        {
          'text': '11.React 组件如何写单测？',
          'link': '/React 通关秘籍/11.React 组件如何写单测？.md'
        },
        {
          'text': '12.深入理解 Suspense 和 ErrorBoundary',
          'link': '/React 通关秘籍/12.深入理解 Suspense 和 ErrorBoundary.md'
        },
        {
          'text': '13.组件实战：Icon 图标组件',
          'link': '/React 通关秘籍/13.组件实战：Icon 图标组件.md'
        },
        {
          'text': '14.组件实战：Space 间距组件',
          'link': '/React 通关秘籍/14.组件实战：Space 间距组件.md'
        },
        {
          'text': '15.React.Children 和它的两种替代方案',
          'link': '/React 通关秘籍/15.React.Children 和它的两种替代方案.md'
        },
        {
          'text': '16.三个简单组件的封装',
          'link': '/React 通关秘籍/16.三个简单组件的封装.md'
        },
        {
          'text': '17.浏览器的 5 种 Observer',
          'link': '/React 通关秘籍/17.浏览器的 5 种 Observer.md'
        },
        {
          'text': '18.组件实战：Watermark 防删除水印组件',
          'link': '/React 通关秘籍/18.组件实战：Watermark 防删除水印组件.md'
        },
        {
          'text': '19.手写 react-lazyload',
          'link': '/React 通关秘籍/19.手写 react-lazyload.md'
        },
        {
          'text': '20.图解网页的各种距离',
          'link': '/React 通关秘籍/20.图解网页的各种距离.md'
        },
        {
          'text': '21.自定义 hook 练习',
          'link': '/React 通关秘籍/21.自定义 hook 练习.md'
        },
        {
          'text': '22.自定义 hook 练习（二）',
          'link': '/React 通关秘籍/22.自定义 hook 练习（二）.md'
        },
        {
          'text': '23.用 react-spring 做弹簧动画',
          'link': '/React 通关秘籍/23.用 react-spring 做弹簧动画.md'
        },
        {
          'text': '24.react-spring 结合 use-gesture 手势库实现交互动画',
          'link': '/React 通关秘籍/24.react-spring 结合 use-gesture 手势库实现交互动画.md'
        },
        {
          'text': '25.用 react-transition-group 和 react-spring 做过渡动画',
          'link': '/React 通关秘籍/25.用 react-transition-group 和 react-spring 做过渡动画.md'
        },
        {
          'text': '26.快速掌握 Tailwind：最流行的原子化 CSS 框架',
          'link': '/React 通关秘籍/26.快速掌握 Tailwind：最流行的原子化 CSS 框架.md'
        },
        {
          'text': '27.用 CSS Modules 避免样式冲突',
          'link': '/React 通关秘籍/27.用 CSS Modules 避免样式冲突.md'
        },
        {
          'text': '28.CSS In JS：快速掌握 styled-components',
          'link': '/React 通关秘籍/28.CSS In JS：快速掌握 styled-components.md'
        },
        {
          'text': '29.react-spring 实现滑入滑出的转场动画',
          'link': '/React 通关秘籍/29.react-spring 实现滑入滑出的转场动画.md'
        },
        {
          'text': '30.组件实战：Message 全局提示组件',
          'link': '/React 通关秘籍/30.组件实战：Message 全局提示组件.md'
        },
        {
          'text': '31.组件实战：Popover 气泡卡片组件',
          'link': '/React 通关秘籍/31.组件实战：Popover 气泡卡片组件.md'
        },
        {
          'text': '32.项目里如何快速定位组件源码？',
          'link': '/React 通关秘籍/32.项目里如何快速定位组件源码？.md'
        },
        {
          'text': '33.一次超爽的 React 调试体验',
          'link': '/React 通关秘籍/33.一次超爽的 React 调试体验.md'
        },
        {
          'text': '34.组件实战：ColorPicker 颜色选择器（一）',
          'link': '/React 通关秘籍/34.组件实战：ColorPicker 颜色选择器（一）.md'
        },
        {
          'text': '35.组件实战：ColorPicker 颜色选择器（二）',
          'link': '/React 通关秘籍/35.组件实战：ColorPicker 颜色选择器（二）.md'
        },
        {
          'text': '36.组件实战：onBoarding 漫游式引导组件',
          'link': '/React 通关秘籍/36.组件实战：onBoarding 漫游式引导组件.md'
        },
        {
          'text': '37.组件实战：Upload 拖拽上传',
          'link': '/React 通关秘籍/37.组件实战：Upload 拖拽上传.md'
        },
        {
          'text': '38.组件实战：Form 表单组件',
          'link': '/React 通关秘籍/38.组件实战：Form 表单组件.md'
        },
        {
          'text': '39.React 组件库都是怎么构建的',
          'link': '/React 通关秘籍/39.React 组件库都是怎么构建的.md'
        },
        {
          'text': '40.组件库实战：构建 esm 和 cjs 产物，发布到 npm',
          'link': '/React 通关秘籍/40.组件库实战：构建 esm 和 cjs 产物，发布到 npm.md'
        },
        {
          'text': '41.组件库实战：构建 umd 产物，通过 unpkg 访问',
          'link': '/React 通关秘籍/41.组件库实战：构建 umd 产物，通过 unpkg 访问.md'
        },
        {
          'text': '42.数据不可变：immutable 和 immer',
          'link': '/React 通关秘籍/42.数据不可变：immutable 和 immer.md'
        },
        {
          'text': '43.基于 React Router 实现 keepalive',
          'link': '/React 通关秘籍/43.基于 React Router 实现 keepalive.md'
        },
        {
          'text': '44.History api 和 React Router 实现原理',
          'link': '/React 通关秘籍/44.History api 和 React Router 实现原理.md'
        },
        {
          'text': '45.React Context 的实现原理和在 antd 里的应用',
          'link': '/React 通关秘籍/45.React Context 的实现原理和在 antd 里的应用.md'
        },
        {
          'text': '46.React Context 的性能缺点和解决方案',
          'link': '/React 通关秘籍/46.React Context 的性能缺点和解决方案.md'
        },
        {
          'text': '47.手写一个 Zustand',
          'link': '/React 通关秘籍/47.手写一个 Zustand.md'
        },
        {
          'text': '48.原子化状态管理库 Jotai',
          'link': '/React 通关秘籍/48.原子化状态管理库 Jotai.md'
        },
        {
          'text': '49.用 react-intl 实现国际化',
          'link': '/React 通关秘籍/49.用 react-intl 实现国际化.md'
        },
        {
          'text': '50.国际化资源包如何通过 Excel 和 Google Sheet 分享给产品经理？',
          'link': '/React 通关秘籍/50.国际化资源包如何通过 Excel 和 Google Sheet 分享给产品经理？.md'
        },
        {
          'text': '51.基于 react-dnd 实现拖拽排序',
          'link': '/React 通关秘籍/51.基于 react-dnd 实现拖拽排序.md'
        },
        {
          'text': '52.react-dnd  实战：拖拽版 TodoList',
          'link': '/React 通关秘籍/52.react-dnd  实战：拖拽版 TodoList.md'
        },
        {
          'text': '53.React Playground 项目实战：需求分析、实现原理',
          'link': '/React 通关秘籍/53.React Playground 项目实战：需求分析、实现原理.md'
        },
        {
          'text': '54.React Playground 项目实战：布局、代码编辑器',
          'link': '/React 通关秘籍/54.React Playground 项目实战：布局、代码编辑器.md'
        },
        {
          'text': '55.React Playground 项目实战：多文件切换',
          'link': '/React 通关秘籍/55.React Playground 项目实战：多文件切换.md'
        },
        {
          'text': '56.React Playground 项目实战：babel 编译、iframe 预览',
          'link': '/React 通关秘籍/56.React Playground 项目实战：babel 编译、iframe 预览.md'
        },
        {
          'text': '57.React Playground 项目实战：文件增删改',
          'link': '/React 通关秘籍/57.React Playground 项目实战：文件增删改.md'
        },
        {
          'text': '58.React Playground 项目实战：错误显示、主题切换',
          'link': '/React 通关秘籍/58.React Playground 项目实战：错误显示、主题切换.md'
        },
        {
          'text': '59.React Playground 项目实战：链接分享、代码下载',
          'link': '/React 通关秘籍/59.React Playground 项目实战：链接分享、代码下载.md'
        },
        {
          'text': '60.React Playground 项目实战：Web Worker 性能优化',
          'link': '/React 通关秘籍/60.React Playground 项目实战：Web Worker 性能优化.md'
        },
        {
          'text': '61.React Playground 项目实战：总结',
          'link': '/React 通关秘籍/61.React Playground 项目实战：总结.md'
        },
        {
          'text': '62.手写 Mini React：思路分析',
          'link': '/React 通关秘籍/62.手写 Mini React：思路分析.md'
        },
        {
          'text': '63.手写 Mini React：代码实现',
          'link': '/React 通关秘籍/63.手写 Mini React：代码实现.md'
        },
        {
          'text': '64.手写 Mini React：和真实 React 源码的对比',
          'link': '/React 通关秘籍/64.手写 Mini React：和真实 React 源码的对比.md'
        },
        {
          'text': '65.React 18 的并发机制是怎么实现的？',
          'link': '/React 通关秘籍/65.React 18 的并发机制是怎么实现的？.md'
        },
        {
          'text': '66.Ref 的实现原理',
          'link': '/React 通关秘籍/66.Ref 的实现原理.md'
        },
        {
          'text': '67.低代码编辑器：核心数据结构、全局 store',
          'link': '/React 通关秘籍/67.低代码编辑器：核心数据结构、全局 store.md'
        },
        {
          'text': '68.低代码编辑器：拖拽组件到画布、拖拽编辑 json',
          'link': '/React 通关秘籍/68.低代码编辑器：拖拽组件到画布、拖拽编辑 json.md'
        },
        {
          'text': '69.低代码编辑器：画布区 hover 展示高亮框',
          'link': '/React 通关秘籍/69.低代码编辑器：画布区 hover 展示高亮框.md'
        },
        {
          'text': '70.低代码编辑器：画布区 click 展示编辑框',
          'link': '/React 通关秘籍/70.低代码编辑器：画布区 click 展示编辑框.md'
        },
        {
          'text': '71.低代码编辑器：组件属性、样式编辑',
          'link': '/React 通关秘籍/71.低代码编辑器：组件属性、样式编辑.md'
        },
        {
          'text': '72.低代码编辑器：预览、大纲',
          'link': '/React 通关秘籍/72.低代码编辑器：预览、大纲.md'
        },
        {
          'text': '73.低代码编辑器：事件绑定',
          'link': '/React 通关秘籍/73.低代码编辑器：事件绑定.md'
        },
        {
          'text': '74.低代码编辑器：动作弹窗',
          'link': '/React 通关秘籍/74.低代码编辑器：动作弹窗.md'
        },
        {
          'text': '75.低代码编辑器：自定义 JS',
          'link': '/React 通关秘籍/75.低代码编辑器：自定义 JS.md'
        },
        {
          'text': '76.低代码编辑器：组件联动',
          'link': '/React 通关秘籍/76.低代码编辑器：组件联动.md'
        },
        {
          'text': '77.低代码编辑器：拖拽优化、Table 组件',
          'link': '/React 通关秘籍/77.低代码编辑器：拖拽优化、Table 组件.md'
        },
        {
          'text': '78.低代码编辑器：Form 组件、store 持久化',
          'link': '/React 通关秘籍/78.低代码编辑器：Form 组件、store 持久化.md'
        },
        {
          'text': '79.低代码编辑器：项目总结',
          'link': '/React 通关秘籍/79.低代码编辑器：项目总结.md'
        },
        {
          'text': '80.快速掌握 React Flow 画流程图',
          'link': '/React 通关秘籍/80.快速掌握 React Flow 画流程图.md'
        },
        {
          'text': '81.React Flow 振荡器调音：项目介绍',
          'link': '/React 通关秘籍/81.React Flow 振荡器调音：项目介绍.md'
        },
        {
          'text': '82.React Flow 振荡器调音：流程图绘制',
          'link': '/React 通关秘籍/82.React Flow 振荡器调音：流程图绘制.md'
        },
        {
          'text': '83.React Flow 振荡器调音：合成声音',
          'link': '/React 通关秘籍/83.React Flow 振荡器调音：合成声音.md'
        },
        {
          'text': '84.AudioContext 实现在线钢琴',
          'link': '/React 通关秘籍/84.AudioContext 实现在线钢琴.md'
        },
        {
          'text': '85.React 服务端渲染：从 SSR 到 hydrate',
          'link': '/React 通关秘籍/85.React 服务端渲染：从 SSR 到 hydrate.md'
        }
      ]
    }
  ],
  '/SVG 动画开发实战手册/': [
    {
      'text': 'SVG 动画开发实战手册',
      'items': [
        {
          'text': '1 SVG 基本知识介绍',
          'link': '/SVG 动画开发实战手册/1 SVG 基本知识介绍.md'
        },
        {
          'text': '2 SVG 输出流程和文件优化',
          'link': '/SVG 动画开发实战手册/2 SVG 输出流程和文件优化.md'
        },
        {
          'text': '3 SVG CSS 描边动画实战',
          'link': '/SVG 动画开发实战手册/3 SVG CSS 描边动画实战.md'
        },
        {
          'text': '4 SVG CSS 蒙版动画实战',
          'link': '/SVG 动画开发实战手册/4 SVG CSS 蒙版动画实战.md'
        },
        {
          'text': '5 SVG SMIL 动画实战',
          'link': '/SVG 动画开发实战手册/5 SVG SMIL 动画实战.md'
        },
        {
          'text': '6 Anime.js 基本知识入门',
          'link': '/SVG 动画开发实战手册/6 Anime.js 基本知识入门.md'
        },
        {
          'text': '7 Anime.js SVG 描边动画实战',
          'link': '/SVG 动画开发实战手册/7 Anime.js SVG 描边动画实战.md'
        },
        {
          'text': '8 Anime.js SVG 路径动画实战',
          'link': '/SVG 动画开发实战手册/8 Anime.js SVG 路径动画实战.md'
        },
        {
          'text': '9 Anime.js SVG 蒙版动画实战',
          'link': '/SVG 动画开发实战手册/9 Anime.js SVG 蒙版动画实战.md'
        },
        {
          'text': '10 Anime.js SVG Morphing动画实战',
          'link': '/SVG 动画开发实战手册/10 Anime.js SVG Morphing动画实战.md'
        }
      ]
    }
  ],
  '/深入浅出 SVG/': [
    {
      'text': '深入浅出 SVG',
      'items': [
        {
          'text': '1-开篇：神奇的 SVG 技术之旅',
          'link': '/深入浅出 SVG/1-开篇：神奇的 SVG 技术之旅.md'
        },
        {
          'text': '2-初级篇：SVG 简介',
          'link': '/深入浅出 SVG/2-初级篇：SVG 简介.md'
        },
        {
          'text': '5-初级篇：如何使用 SVG',
          'link': '/深入浅出 SVG/5-初级篇：如何使用 SVG.md'
        },
        {
          'text': '6-初级篇：SVG 坐标系统',
          'link': '/深入浅出 SVG/6-初级篇：SVG 坐标系统.md'
        },
        {
          'text': '7-初级篇：SVG 基本图形元素',
          'link': '/深入浅出 SVG/7-初级篇：SVG 基本图形元素.md'
        },
        {
          'text': '8-初级篇：SVG 文本元素',
          'link': '/深入浅出 SVG/8-初级篇：SVG 文本元素.md'
        },
        {
          'text': '9-初级篇：SVG 图像元素',
          'link': '/深入浅出 SVG/9-初级篇：SVG 图像元素.md'
        },
        {
          'text': '10-初级篇：组织 SVG',
          'link': '/深入浅出 SVG/10-初级篇：组织 SVG.md'
        },
        {
          'text': '14-初级篇：矢量图和光栅图谁更适合你的项目',
          'link': '/深入浅出 SVG/14-初级篇：矢量图和光栅图谁更适合你的项目.md'
        },
        {
          'text': '15-实战篇：使用 SVG 创建自己的图标系统',
          'link': '/深入浅出 SVG/15-实战篇：使用 SVG 创建自己的图标系统.md'
        },
        {
          'text': '16-中级篇：SVG 渐变',
          'link': '/深入浅出 SVG/16-中级篇：SVG 渐变.md'
        },
        {
          'text': '17-中级篇：SVG Pattern',
          'link': '/深入浅出 SVG/17-中级篇：SVG Pattern.md'
        },
        {
          'text': '18-中级篇：SVG 的变换属性',
          'link': '/深入浅出 SVG/18-中级篇：SVG 的变换属性.md'
        },
        {
          'text': '19-中级篇：SVG 坐标系变换',
          'link': '/深入浅出 SVG/19-中级篇：SVG 坐标系变换.md'
        },
        {
          'text': '21-中级篇：SVG 剪切',
          'link': '/深入浅出 SVG/21-中级篇：SVG 剪切.md'
        },
        {
          'text': '22-中级篇：SVG 遮罩',
          'link': '/深入浅出 SVG/22-中级篇：SVG 遮罩.md'
        },
        {
          'text': '23- 中级篇：初探 SVG 滤镜',
          'link': '/深入浅出 SVG/23- 中级篇：初探 SVG 滤镜.md'
        },
        {
          'text': '24-中级篇：SVG 中的可访问性',
          'link': '/深入浅出 SVG/24-中级篇：SVG 中的可访问性.md'
        },
        {
          'text': '26-中级篇：SVG 构建工具',
          'link': '/深入浅出 SVG/26-中级篇：SVG 构建工具.md'
        },
        {
          'text': '27-中级篇：SVG 优雅降级',
          'link': '/深入浅出 SVG/27-中级篇：SVG 优雅降级.md'
        },
        {
          'text': '28-实战篇：SVG 与 Web 开发之 SVG vs. CSS',
          'link': '/深入浅出 SVG/28-实战篇：SVG 与 Web 开发之 SVG vs. CSS.md'
        },
        {
          'text': '29-实战篇：SVG 与 Web 开发之 SVG vs. Canvas',
          'link': '/深入浅出 SVG/29-实战篇：SVG 与 Web 开发之 SVG vs. Canvas.md'
        },
        {
          'text': '30-实战篇：SVG 与 Web 开发之利用 WebGL 创建更高级的图形效果',
          'link': '/深入浅出 SVG/30-实战篇：SVG 与 Web 开发之利用 WebGL 创建更高级的图形效果.md'
        },
        {
          'text': '31-实战篇：SVG 与 Web 开发之使用 CSS 混合模式增强 SVG 图形',
          'link': '/深入浅出 SVG/31-实战篇：SVG 与 Web 开发之使用 CSS 混合模式增强 SVG 图形.md'
        },
        {
          'text': '32-实战篇：SVG 与 Web 开发之 SVG 在 Vue 中的应用',
          'link': '/深入浅出 SVG/32-实战篇：SVG 与 Web 开发之 SVG 在 Vue 中的应用.md'
        },
        {
          'text': '33-实战篇：SVG 与 Web 开发之 SVG 在 React 的应用',
          'link': '/深入浅出 SVG/33-实战篇：SVG 与 Web 开发之 SVG 在 React 的应用.md'
        },
        {
          'text': '34-实战篇： SVG 与 Web 开发之 SVG 在 Next.js 的应用',
          'link': '/深入浅出 SVG/34-实战篇： SVG 与 Web 开发之 SVG 在 Next.js 的应用.md'
        },
        {
          'text': '35-高级篇：SVG 路径的高级技术',
          'link': '/深入浅出 SVG/35-高级篇：SVG 路径的高级技术.md'
        },
        {
          'text': '36-高级篇：SVG 滤镜的进阶之高阶颜色矩阵',
          'link': '/深入浅出 SVG/36-高级篇：SVG 滤镜的进阶之高阶颜色矩阵.md'
        },
        {
          'text': '37-高级篇：SVG 滤镜的进阶之文本描边',
          'link': '/深入浅出 SVG/37-高级篇：SVG 滤镜的进阶之文本描边.md'
        },
        {
          'text': '38-高级篇：SVG 滤镜的进阶之创建图像特效',
          'link': '/深入浅出 SVG/38-高级篇：SVG 滤镜的进阶之创建图像特效.md'
        },
        {
          'text': '39-高级篇：SVG 滤镜的进阶之奇妙的位移滤镜',
          'link': '/深入浅出 SVG/39-高级篇：SVG 滤镜的进阶之奇妙的位移滤镜.md'
        },
        {
          'text': '40-高级篇：SVG 滤镜的进阶之创造纹理',
          'link': '/深入浅出 SVG/40-高级篇：SVG 滤镜的进阶之创造纹理.md'
        },
        {
          'text': '41-高级篇：SVG 滤镜的进阶之创建颗粒效果',
          'link': '/深入浅出 SVG/41-高级篇：SVG 滤镜的进阶之创建颗粒效果.md'
        },
        {
          'text': '42-高级篇：SVG 滤镜的进阶之模糊与阴影效果',
          'link': '/深入浅出 SVG/42-高级篇：SVG 滤镜的进阶之模糊与阴影效果.md'
        },
        {
          'text': '43-高级篇：SVG 滤镜的进阶之黏糊效果',
          'link': '/深入浅出 SVG/43-高级篇：SVG 滤镜的进阶之黏糊效果.md'
        },
        {
          'text': '44-高级篇：SVG 滤镜的进阶之混合模式',
          'link': '/深入浅出 SVG/44-高级篇：SVG 滤镜的进阶之混合模式.md'
        },
        {
          'text': '45-高级篇：SVG 动画之 SMIL 动画',
          'link': '/深入浅出 SVG/45-高级篇：SVG 动画之 SMIL 动画.md'
        },
        {
          'text': '46-高级篇：SVG 动画之使用 CSS 实现动画',
          'link': '/深入浅出 SVG/46-高级篇：SVG 动画之使用 CSS 实现动画.md'
        },
        {
          'text': '48-高级篇：SVG 与 3D 效果',
          'link': '/深入浅出 SVG/48-高级篇：SVG 与 3D 效果.md'
        },
        {
          'text': '49-高级篇：SVG 与响应式设计',
          'link': '/深入浅出 SVG/49-高级篇：SVG 与响应式设计.md'
        },
        {
          'text': '50-SVG 库和工具',
          'link': '/深入浅出 SVG/50-SVG 库和工具.md'
        },
        {
          'text': '51-SVG 未来发展趋势',
          'link': '/深入浅出 SVG/51-SVG 未来发展趋势.md'
        }
      ]
    }
  ],
  '/Web 动画之旅/': [
    {
      'text': 'Web 动画之旅',
      'items': [
        {
          'text': '1-Web 动画基础：从发展史中了解 Web 动画及动画的作用',
          'link': '/Web 动画之旅/1-Web 动画基础：从发展史中了解 Web 动画及动画的作用.md'
        },
        {
          'text': '2-动画的精髓：理解 Web 动画基本原理',
          'link': '/Web 动画之旅/2-动画的精髓：理解 Web 动画基本原理.md'
        },
        {
          'text': '3-流畅之美：掌握 Web 动画设计原则',
          'link': '/Web 动画之旅/3-流畅之美：掌握 Web 动画设计原则.md'
        },
        {
          'text': '4-CSS 动画基础：如何让网页更生动？',
          'link': '/Web 动画之旅/4-CSS 动画基础：如何让网页更生动？.md'
        },
        {
          'text': '5-帧动画与过渡动画：谁更适合你的业务场景？',
          'link': '/Web 动画之旅/5-帧动画与过渡动画：谁更适合你的业务场景？.md'
        },
        {
          'text': '6-CSS 变换的世界：创建流畅的 Web 动画',
          'link': '/Web 动画之旅/6-CSS 变换的世界：创建流畅的 Web 动画.md'
        },
        {
          'text': '7-你所不知道的 @keyframes：剖析 CSS 帧动画',
          'link': '/Web 动画之旅/7-你所不知道的 @keyframes：剖析 CSS 帧动画.md'
        },
        {
          'text': '8-CSS 缓动函数基础：为 Web 动画注入灵魂',
          'link': '/Web 动画之旅/8-CSS 缓动函数基础：为 Web 动画注入灵魂.md'
        },
        {
          'text': '9-使用 cubic-bezier() 函数创建高级动画',
          'link': '/Web 动画之旅/9-使用 cubic-bezier() 函数创建高级动画.md'
        },
        {
          'text': '10-使用 steps() 函数创建分段动画',
          'link': '/Web 动画之旅/10-使用 steps() 函数创建分段动画.md'
        },
        {
          'text': '11-使用 linear() 函数创建令人惊叹的动画曲线',
          'link': '/Web 动画之旅/11-使用 linear() 函数创建令人惊叹的动画曲线.md'
        },
        {
          'text': '12-深入了解 CSS 动画的持续时间和延迟时间',
          'link': '/Web 动画之旅/12-深入了解 CSS 动画的持续时间和延迟时间.md'
        },
        {
          'text': '13-CSS 动画的播放方式：暂停、恢复和重播',
          'link': '/Web 动画之旅/13-CSS 动画的播放方式：暂停、恢复和重播.md'
        },
        {
          'text': '14-深度解析 CSS 动画的填充模式',
          'link': '/Web 动画之旅/14-深度解析 CSS 动画的填充模式.md'
        },
        {
          'text': '15-如何使用 animation-direction 更好的控制动画方向',
          'link': '/Web 动画之旅/15-如何使用 animation-direction 更好的控制动画方向.md'
        },
        {
          'text': '16-多个 CSS 动画与动画合成：创造更复杂的动画效果',
          'link': '/Web 动画之旅/16-多个 CSS 动画与动画合成：创造更复杂的动画效果.md'
        },
        {
          'text': '17-数学的魔法：探索数学在动画中的应用',
          'link': '/Web 动画之旅/17-数学的魔法：探索数学在动画中的应用.md'
        },
        {
          'text': '18-CSS 路径动画：动画对象沿指定路径运动',
          'link': '/Web 动画之旅/18-CSS 路径动画：动画对象沿指定路径运动.md'
        },
        {
          'text': '19-使用 CSS 视图过渡创造流畅的界面动效',
          'link': '/Web 动画之旅/19-使用 CSS 视图过渡创造流畅的界面动效.md'
        },
        {
          'text': '20-CSS 滚动驱动动效的艺术',
          'link': '/Web 动画之旅/20-CSS 滚动驱动动效的艺术.md'
        },
        {
          'text': '21-制作流畅动画的技巧与实践',
          'link': '/Web 动画之旅/21-制作流畅动画的技巧与实践.md'
        },
        {
          'text': '22-探索动画中的JavaScript事件',
          'link': '/Web 动画之旅/22-探索动画中的JavaScript事件.md'
        },
        {
          'text': '23-提升可访问性动画的关键技巧',
          'link': '/Web 动画之旅/23-提升可访问性动画的关键技巧.md'
        },
        {
          'text': '24-深度解析动画调试的精髓',
          'link': '/Web 动画之旅/24-深度解析动画调试的精髓.md'
        },
        {
          'text': '25-创建 CSS 动画的小技巧',
          'link': '/Web 动画之旅/25-创建 CSS 动画的小技巧.md'
        },
        {
          'text': '26-CSS 动画实战',
          'link': '/Web 动画之旅/26-CSS 动画实战.md'
        },
        {
          'text': '27-初探 Web Animations API',
          'link': '/Web 动画之旅/27-初探 Web Animations API.md'
        },
        {
          'text': '28-掌握 Web Animations API 的精髓',
          'link': '/Web 动画之旅/28-掌握 Web Animations API 的精髓.md'
        },
        {
          'text': '29-CSS Animations vs Web Animations API ：选择最佳的动画方法',
          'link': '/Web 动画之旅/29-CSS Animations vs Web Animations API ：选择最佳的动画方法.md'
        },
        {
          'text': '30-WAAPI 综合案例：如何使用 WAAPI 创建一个动画库或组件',
          'link': '/Web 动画之旅/30-WAAPI 综合案例：如何使用 WAAPI 创建一个动画库或组件.md'
        },
        {
          'text': '31-SVG 动画基础入门',
          'link': '/Web 动画之旅/31-SVG 动画基础入门.md'
        },
        {
          'text': '32-探索 SVG 动画的奇妙世界：深入了解 SMIL 动画',
          'link': '/Web 动画之旅/32-探索 SVG 动画的奇妙世界：深入了解 SMIL 动画.md'
        },
        {
          'text': '33-创造视觉奇迹：深入理解带有 CSS 的 SVG 动画',
          'link': '/Web 动画之旅/33-创造视觉奇迹：深入理解带有 CSS 的 SVG 动画.md'
        },
        {
          'text': '34-Web 上引人入胜的各种 SVG 动画效果',
          'link': '/Web 动画之旅/34-Web 上引人入胜的各种 SVG 动画效果.md'
        },
        {
          'text': '35-SVG 动画综合案例：从简单的插图中创建看似复杂的动画',
          'link': '/Web 动画之旅/35-SVG 动画综合案例：从简单的插图中创建看似复杂的动画.md'
        },
        {
          'text': '36-无缝创造：深入探讨 Web 动画的开发流程',
          'link': '/Web 动画之旅/36-无缝创造：深入探讨 Web 动画的开发流程.md'
        },
        {
          'text': '37-精通 Web 动画：探索最佳 Web 动画库',
          'link': '/Web 动画之旅/37-精通 Web 动画：探索最佳 Web 动画库.md'
        }
      ]
    }
  ]
},
        {
          'text': '10.快速掌握 Storybook',
          'link': '/React 通关秘籍/10.快速掌握 Storybook.md'
        },
        {
          'text': '11.React 组件如何写单测？',
          'link': '/React 通关秘籍/11.React 组件如何写单测？.md'
        },
        {
          'text': '12.深入理解 Suspense 和 ErrorBoundary',
          'link': '/React 通关秘籍/12.深入理解 Suspense 和 ErrorBoundary.md'
        },
        {
          'text': '13.组件实战：Icon 图标组件',
          'link': '/React 通关秘籍/13.组件实战：Icon 图标组件.md'
        },
        {
          'text': '14.组件实战：Space 间距组件',
          'link': '/React 通关秘籍/14.组件实战：Space 间距组件.md'
        },
        {
          'text': '15.React.Children 和它的两种替代方案',
          'link': '/React 通关秘籍/15.React.Children 和它的两种替代方案.md'
        },
        {
          'text': '16.三个简单组件的封装',
          'link': '/React 通关秘籍/16.三个简单组件的封装.md'
        },
        {
          'text': '17.浏览器的 5 种 Observer',
          'link': '/React 通关秘籍/17.浏览器的 5 种 Observer.md'
        },
        {
          'text': '18.组件实战：Watermark 防删除水印组件',
          'link': '/React 通关秘籍/18.组件实战：Watermark 防删除水印组件.md'
        },
        {
          'text': '19.手写 react-lazyload',
          'link': '/React 通关秘籍/19.手写 react-lazyload.md'
        },
        {
          'text': '2.一网打尽组件常用 Hook',
          'link': '/React 通关秘籍/2.一网打尽组件常用 Hook.md'
        },
        {
          'text': '20.图解网页的各种距离',
          'link': '/React 通关秘籍/20.图解网页的各种距离.md'
        },
        {
          'text': '21.自定义 hook 练习',
          'link': '/React 通关秘籍/21.自定义 hook 练习.md'
        },
        {
          'text': '22.自定义 hook 练习（二）',
          'link': '/React 通关秘籍/22.自定义 hook 练习（二）.md'
        },
        {
          'text': '23.用 react-spring 做弹簧动画',
          'link': '/React 通关秘籍/23.用 react-spring 做弹簧动画.md'
        },
        {
          'text': '24.react-spring 结合 use-gesture 手势库实现交互动画',
          'link': '/React 通关秘籍/24.react-spring 结合 use-gesture 手势库实现交互动画.md'
        },
        {
          'text': '25.用 react-transition-group 和 react-spring 做过渡动画',
          'link': '/React 通关秘籍/25.用 react-transition-group 和 react-spring 做过渡动画.md'
        },
        {
          'text': '26.快速掌握 Tailwind：最流行的原子化 CSS 框架',
          'link': '/React 通关秘籍/26.快速掌握 Tailwind：最流行的原子化 CSS 框架.md'
        },
        {
          'text': '27.用 CSS Modules 避免样式冲突',
          'link': '/React 通关秘籍/27.用 CSS Modules 避免样式冲突.md'
        },
        {
          'text': '28.CSS In JS：快速掌握 styled-components',
          'link': '/React 通关秘籍/28.CSS In JS：快速掌握 styled-components.md'
        },
        {
          'text': '29.react-spring 实现滑入滑出的转场动画',
          'link': '/React 通关秘籍/29.react-spring 实现滑入滑出的转场动画.md'
        },
        {
          'text': '3.Hook 的闭包陷阱的成因和解决方案',
          'link': '/React 通关秘籍/3.Hook 的闭包陷阱的成因和解决方案.md'
        },
        {
          'text': '30.组件实战：Message 全局提示组件',
          'link': '/React 通关秘籍/30.组件实战：Message 全局提示组件.md'
        },
        {
          'text': '31.组件实战：Popover 气泡卡片组件',
          'link': '/React 通关秘籍/31.组件实战：Popover 气泡卡片组件.md'
        },
        {
          'text': '32.项目里如何快速定位组件源码？',
          'link': '/React 通关秘籍/32.项目里如何快速定位组件源码？.md'
        },
        {
          'text': '33.一次超爽的 React 调试体验',
          'link': '/React 通关秘籍/33.一次超爽的 React 调试体验.md'
        },
        {
          'text': '34.组件实战：ColorPicker 颜色选择器（一）',
          'link': '/React 通关秘籍/34.组件实战：ColorPicker 颜色选择器（一）.md'
        },
        {
          'text': '35.组件实战：ColorPicker 颜色选择器（二）',
          'link': '/React 通关秘籍/35.组件实战：ColorPicker 颜色选择器（二）.md'
        },
        {
          'text': '36.组件实战：onBoarding 漫游式引导组件',
          'link': '/React 通关秘籍/36.组件实战：onBoarding 漫游式引导组件.md'
        },
        {
          'text': '37.组件实战：Upload 拖拽上传',
          'link': '/React 通关秘籍/37.组件实战：Upload 拖拽上传.md'
        },
        {
          'text': '38.组件实战：Form 表单组件',
          'link': '/React 通关秘籍/38.组件实战：Form 表单组件.md'
        },
        {
          'text': '39.React 组件库都是怎么构建的',
          'link': '/React 通关秘籍/39.React 组件库都是怎么构建的.md'
        },
        {
          'text': '4.React 组件如何写 TypeScript 类型',
          'link': '/React 通关秘籍/4.React 组件如何写 TypeScript 类型.md'
        },
        {
          'text': '40.组件库实战：构建 esm 和 cjs 产物，发布到 npm',
          'link': '/React 通关秘籍/40.组件库实战：构建 esm 和 cjs 产物，发布到 npm.md'
        },
        {
          'text': '41.组件库实战：构建 umd 产物，通过 unpkg 访问',
          'link': '/React 通关秘籍/41.组件库实战：构建 umd 产物，通过 unpkg 访问.md'
        },
        {
          'text': '42.数据不可变：immutable 和 immer',
          'link': '/React 通关秘籍/42.数据不可变：immutable 和 immer.md'
        },
        {
          'text': '43.基于 React Router 实现 keepalive',
          'link': '/React 通关秘籍/43.基于 React Router 实现 keepalive.md'
        },
        {
          'text': '44.History api 和 React Router 实现原理',
          'link': '/React 通关秘籍/44.History api 和 React Router 实现原理.md'
        },
        {
          'text': '45.React Context 的实现原理和在 antd 里的应用',
          'link': '/React 通关秘籍/45.React Context 的实现原理和在 antd 里的应用.md'
        },
        {
          'text': '46.React Context 的性能缺点和解决方案',
          'link': '/React 通关秘籍/46.React Context 的性能缺点和解决方案.md'
        },
        {
          'text': '47.手写一个 Zustand',
          'link': '/React 通关秘籍/47.手写一个 Zustand.md'
        },
        {
          'text': '48.原子化状态管理库 Jotai',
          'link': '/React 通关秘籍/48.原子化状态管理库 Jotai.md'
        },
        {
          'text': '49.用 react-intl 实现国际化',
          'link': '/React 通关秘籍/49.用 react-intl 实现国际化.md'
        },
        {
          'text': '5.React 组件如何调试',
          'link': '/React 通关秘籍/5.React 组件如何调试.md'
        },
        {
          'text': '50.国际化资源包如何通过 Excel 和 Google Sheet 分享给产品经理？',
          'link': '/React 通关秘籍/50.国际化资源包如何通过 Excel 和 Google Sheet 分享给产品经理？.md'
        },
        {
          'text': '51.基于 react-dnd 实现拖拽排序',
          'link': '/React 通关秘籍/51.基于 react-dnd 实现拖拽排序.md'
        },
        {
          'text': '52.react-dnd  实战：拖拽版 TodoList',
          'link': '/React 通关秘籍/52.react-dnd  实战：拖拽版 TodoList.md'
        },
        {
          'text': '53.React Playground 项目实战：需求分析、实现原理',
          'link': '/React 通关秘籍/53.React Playground 项目实战：需求分析、实现原理.md'
        },
        {
          'text': '54.React Playground 项目实战：布局、代码编辑器',
          'link': '/React 通关秘籍/54.React Playground 项目实战：布局、代码编辑器.md'
        },
        {
          'text': '55.React Playground 项目实战：多文件切换',
          'link': '/React 通关秘籍/55.React Playground 项目实战：多文件切换.md'
        },
        {
          'text': '56.React Playground 项目实战：babel 编译、iframe 预览',
          'link': '/React 通关秘籍/56.React Playground 项目实战：babel 编译、iframe 预览.md'
        },
        {
          'text': '57.React Playground 项目实战：文件增删改',
          'link': '/React 通关秘籍/57.React Playground 项目实战：文件增删改.md'
        },
        {
          'text': '58.React Playground 项目实战：错误显示、主题切换',
          'link': '/React 通关秘籍/58.React Playground 项目实战：错误显示、主题切换.md'
        },
        {
          'text': '59.React Playground 项目实战：链接分享、代码下载',
          'link': '/React 通关秘籍/59.React Playground 项目实战：链接分享、代码下载.md'
        },
        {
          'text': '6.受控模式 VS 非受控模式',
          'link': '/React 通关秘籍/6.受控模式 VS 非受控模式.md'
        },
        {
          'text': '60.React Playground 项目实战：Web Worker 性能优化',
          'link': '/React 通关秘籍/60.React Playground 项目实战：Web Worker 性能优化.md'
        },
        {
          'text': '61.React Playground 项目实战：总结',
          'link': '/React 通关秘籍/61.React Playground 项目实战：总结.md'
        },
        {
          'text': '62.手写 Mini React：思路分析',
          'link': '/React 通关秘籍/62.手写 Mini React：思路分析.md'
        },
        {
          'text': '63.手写 Mini React：代码实现',
          'link': '/React 通关秘籍/63.手写 Mini React：代码实现.md'
        },
        {
          'text': '64.手写 Mini React：和真实 React 源码的对比',
          'link': '/React 通关秘籍/64.手写 Mini React：和真实 React 源码的对比.md'
        },
        {
          'text': '65.React 18 的并发机制是怎么实现的？',
          'link': '/React 通关秘籍/65.React 18 的并发机制是怎么实现的？.md'
        },
        {
          'text': '66.Ref 的实现原理',
          'link': '/React 通关秘籍/66.Ref 的实现原理.md'
        },
        {
          'text': '67.低代码编辑器：核心数据结构、全局 store',
          'link': '/React 通关秘籍/67.低代码编辑器：核心数据结构、全局 store.md'
        },
        {
          'text': '68.低代码编辑器：拖拽组件到画布、拖拽编辑 json',
          'link': '/React 通关秘籍/68.低代码编辑器：拖拽组件到画布、拖拽编辑 json.md'
        },
        {
          'text': '69.低代码编辑器：画布区 hover 展示高亮框',
          'link': '/React 通关秘籍/69.低代码编辑器：画布区 hover 展示高亮框.md'
        },
        {
          'text': '7.组件实战：迷你 Calendar',
          'link': '/React 通关秘籍/7.组件实战：迷你 Calendar.md'
        },
        {
          'text': '70.低代码编辑器：画布区 click 展示编辑框',
          'link': '/React 通关秘籍/70.低代码编辑器：画布区 click 展示编辑框.md'
        },
        {
          'text': '71.低代码编辑器：组件属性、样式编辑',
          'link': '/React 通关秘籍/71.低代码编辑器：组件属性、样式编辑.md'
        },
        {
          'text': '72.低代码编辑器：预览、大纲',
          'link': '/React 通关秘籍/72.低代码编辑器：预览、大纲.md'
        },
        {
          'text': '73.低代码编辑器：事件绑定',
          'link': '/React 通关秘籍/73.低代码编辑器：事件绑定.md'
        },
        {
          'text': '74.低代码编辑器：动作弹窗',
          'link': '/React 通关秘籍/74.低代码编辑器：动作弹窗.md'
        },
        {
          'text': '75.低代码编辑器：自定义 JS',
          'link': '/React 通关秘籍/75.低代码编辑器：自定义 JS.md'
        },
        {
          'text': '76.低代码编辑器：组件联动',
          'link': '/React 通关秘籍/76.低代码编辑器：组件联动.md'
        },
        {
          'text': '77.低代码编辑器：拖拽优化、Table 组件',
          'link': '/React 通关秘籍/77.低代码编辑器：拖拽优化、Table 组件.md'
        },
        {
          'text': '78.低代码编辑器：Form 组件、store 持久化',
          'link': '/React 通关秘籍/78.低代码编辑器：Form 组件、store 持久化.md'
        },
        {
          'text': '79.低代码编辑器：项目总结',
          'link': '/React 通关秘籍/79.低代码编辑器：项目总结.md'
        },
        {
          'text': '8.组件实战：Calendar 日历组件（上',
          'link': '/React 通关秘籍/8.组件实战：Calendar 日历组件（上.md'
        },
        {
          'text': '80.快速掌握 React Flow 画流程图',
          'link': '/React 通关秘籍/80.快速掌握 React Flow 画流程图.md'
        },
        {
          'text': '81.React Flow 振荡器调音：项目介绍',
          'link': '/React 通关秘籍/81.React Flow 振荡器调音：项目介绍.md'
        },
        {
          'text': '82.React Flow 振荡器调音：流程图绘制',
          'link': '/React 通关秘籍/82.React Flow 振荡器调音：流程图绘制.md'
        },
        {
          'text': '83.React Flow 振荡器调音：合成声音',
          'link': '/React 通关秘籍/83.React Flow 振荡器调音：合成声音.md'
        },
        {
          'text': '84.AudioContext 实现在线钢琴',
          'link': '/React 通关秘籍/84.AudioContext 实现在线钢琴.md'
        },
        {
          'text': '85.React 服务端渲染：从 SSR 到 hydrate',
          'link': '/React 通关秘籍/85.React 服务端渲染：从 SSR 到 hydrate.md'
        },
        {
          'text': '9.组件实战：Calendar 日历组件（下',
          'link': '/React 通关秘籍/9.组件实战：Calendar 日历组件（下.md'
        }
      ]
    }
  ],
  '/SVG 动画开发实战手册/': [
    {
      'text': 'SVG 动画开发实战手册',
      'items': [
        {
          'text': '1 SVG 基本知识介绍',
          'link': '/SVG 动画开发实战手册/1 SVG 基本知识介绍.md'
        },
        {
          'text': '10 Anime.js SVG Morphing动画实战',
          'link': '/SVG 动画开发实战手册/10 Anime.js SVG Morphing动画实战.md'
        },
        {
          'text': '2 SVG 输出流程和文件优化',
          'link': '/SVG 动画开发实战手册/2 SVG 输出流程和文件优化.md'
        },
        {
          'text': '3 SVG CSS 描边动画实战',
          'link': '/SVG 动画开发实战手册/3 SVG CSS 描边动画实战.md'
        },
        {
          'text': '4 SVG CSS 蒙版动画实战',
          'link': '/SVG 动画开发实战手册/4 SVG CSS 蒙版动画实战.md'
        },
        {
          'text': '5 SVG SMIL 动画实战',
          'link': '/SVG 动画开发实战手册/5 SVG SMIL 动画实战.md'
        },
        {
          'text': '6 Anime.js 基本知识入门',
          'link': '/SVG 动画开发实战手册/6 Anime.js 基本知识入门.md'
        },
        {
          'text': '7 Anime.js SVG 描边动画实战',
          'link': '/SVG 动画开发实战手册/7 Anime.js SVG 描边动画实战.md'
        },
        {
          'text': '8 Anime.js SVG 路径动画实战',
          'link': '/SVG 动画开发实战手册/8 Anime.js SVG 路径动画实战.md'
        },
        {
          'text': '9 Anime.js SVG 蒙版动画实战',
          'link': '/SVG 动画开发实战手册/9 Anime.js SVG 蒙版动画实战.md'
        }
      ]
    }
  ],
  '/深入浅出 SVG/': [
    {
      'text': '深入浅出 SVG',
      'items': [
        {
          'text': '1-开篇：神奇的 SVG 技术之旅',
          'link': '/深入浅出 SVG/1-开篇：神奇的 SVG 技术之旅.md'
        },
        {
          'text': '10-初级篇：组织 SVG',
          'link': '/深入浅出 SVG/10-初级篇：组织 SVG.md'
        },
        {
          'text': '14-初级篇：矢量图和光栅图谁更适合你的项目',
          'link': '/深入浅出 SVG/14-初级篇：矢量图和光栅图谁更适合你的项目.md'
        },
        {
          'text': '15-实战篇：使用 SVG 创建自己的图标系统',
          'link': '/深入浅出 SVG/15-实战篇：使用 SVG 创建自己的图标系统.md'
        },
        {
          'text': '16-中级篇：SVG 渐变',
          'link': '/深入浅出 SVG/16-中级篇：SVG 渐变.md'
        },
        {
          'text': '17-中级篇：SVG Pattern',
          'link': '/深入浅出 SVG/17-中级篇：SVG Pattern.md'
        },
        {
          'text': '18-中级篇：SVG 的变换属性',
          'link': '/深入浅出 SVG/18-中级篇：SVG 的变换属性.md'
        },
        {
          'text': '19-中级篇：SVG 坐标系变换',
          'link': '/深入浅出 SVG/19-中级篇：SVG 坐标系变换.md'
        },
        {
          'text': '2-初级篇：SVG 简介',
          'link': '/深入浅出 SVG/2-初级篇：SVG 简介.md'
        },
        {
          'text': '21-中级篇：SVG 剪切',
          'link': '/深入浅出 SVG/21-中级篇：SVG 剪切.md'
        },
        {
          'text': '22-中级篇：SVG 遮罩',
          'link': '/深入浅出 SVG/22-中级篇：SVG 遮罩.md'
        },
        {
          'text': '23- 中级篇：初探 SVG 滤镜',
          'link': '/深入浅出 SVG/23- 中级篇：初探 SVG 滤镜.md'
        },
        {
          'text': '24-中级篇：SVG 中的可访问性',
          'link': '/深入浅出 SVG/24-中级篇：SVG 中的可访问性.md'
        },
        {
          'text': '26-中级篇：SVG 构建工具',
          'link': '/深入浅出 SVG/26-中级篇：SVG 构建工具.md'
        },
        {
          'text': '27-中级篇：SVG 优雅降级',
          'link': '/深入浅出 SVG/27-中级篇：SVG 优雅降级.md'
        },
        {
          'text': '28-实战篇：SVG 与 Web 开发之 SVG vs. CSS',
          'link': '/深入浅出 SVG/28-实战篇：SVG 与 Web 开发之 SVG vs. CSS.md'
        },
        {
          'text': '29-实战篇：SVG 与 Web 开发之 SVG vs. Canvas',
          'link': '/深入浅出 SVG/29-实战篇：SVG 与 Web 开发之 SVG vs. Canvas.md'
        },
        {
          'text': '30-实战篇：SVG 与 Web 开发之利用 WebGL 创建更高级的图形效果',
          'link': '/深入浅出 SVG/30-实战篇：SVG 与 Web 开发之利用 WebGL 创建更高级的图形效果.md'
        },
        {
          'text': '31-实战篇：SVG 与 Web 开发之使用 CSS 混合模式增强 SVG 图形',
          'link': '/深入浅出 SVG/31-实战篇：SVG 与 Web 开发之使用 CSS 混合模式增强 SVG 图形.md'
        },
        {
          'text': '32-实战篇：SVG 与 Web 开发之 SVG 在 Vue 中的应用',
          'link': '/深入浅出 SVG/32-实战篇：SVG 与 Web 开发之 SVG 在 Vue 中的应用.md'
        },
        {
          'text': '33-实战篇：SVG 与 Web 开发之 SVG 在 React 的应用',
          'link': '/深入浅出 SVG/33-实战篇：SVG 与 Web 开发之 SVG 在 React 的应用.md'
        },
        {
          'text': '34-实战篇： SVG 与 Web 开发之 SVG 在 Next.js 的应用',
          'link': '/深入浅出 SVG/34-实战篇： SVG 与 Web 开发之 SVG 在 Next.js 的应用.md'
        },
        {
          'text': '35-高级篇：SVG 路径的高级技术',
          'link': '/深入浅出 SVG/35-高级篇：SVG 路径的高级技术.md'
        },
        {
          'text': '36-高级篇：SVG 滤镜的进阶之高阶颜色矩阵',
          'link': '/深入浅出 SVG/36-高级篇：SVG 滤镜的进阶之高阶颜色矩阵.md'
        },
        {
          'text': '37-高级篇：SVG 滤镜的进阶之文本描边',
          'link': '/深入浅出 SVG/37-高级篇：SVG 滤镜的进阶之文本描边.md'
        },
        {
          'text': '38-高级篇：SVG 滤镜的进阶之创建图像特效',
          'link': '/深入浅出 SVG/38-高级篇：SVG 滤镜的进阶之创建图像特效.md'
        },
        {
          'text': '39-高级篇：SVG 滤镜的进阶之奇妙的位移滤镜',
          'link': '/深入浅出 SVG/39-高级篇：SVG 滤镜的进阶之奇妙的位移滤镜.md'
        },
        {
          'text': '40-高级篇：SVG 滤镜的进阶之创造纹理',
          'link': '/深入浅出 SVG/40-高级篇：SVG 滤镜的进阶之创造纹理.md'
        },
        {
          'text': '41-高级篇：SVG 滤镜的进阶之创建颗粒效果',
          'link': '/深入浅出 SVG/41-高级篇：SVG 滤镜的进阶之创建颗粒效果.md'
        },
        {
          'text': '42-高级篇：SVG 滤镜的进阶之模糊与阴影效果',
          'link': '/深入浅出 SVG/42-高级篇：SVG 滤镜的进阶之模糊与阴影效果.md'
        },
        {
          'text': '43-高级篇：SVG 滤镜的进阶之黏糊效果',
          'link': '/深入浅出 SVG/43-高级篇：SVG 滤镜的进阶之黏糊效果.md'
        },
        {
          'text': '44-高级篇：SVG 滤镜的进阶之混合模式',
          'link': '/深入浅出 SVG/44-高级篇：SVG 滤镜的进阶之混合模式.md'
        },
        {
          'text': '45-高级篇：SVG 动画之 SMIL 动画',
          'link': '/深入浅出 SVG/45-高级篇：SVG 动画之 SMIL 动画.md'
        },
        {
          'text': '46-高级篇：SVG 动画之使用 CSS 实现动画',
          'link': '/深入浅出 SVG/46-高级篇：SVG 动画之使用 CSS 实现动画.md'
        },
        {
          'text': '48-高级篇：SVG 与 3D 效果',
          'link': '/深入浅出 SVG/48-高级篇：SVG 与 3D 效果.md'
        },
        {
          'text': '49-高级篇：SVG 与响应式设计',
          'link': '/深入浅出 SVG/49-高级篇：SVG 与响应式设计.md'
        },
        {
          'text': '5-初级篇：如何使用 SVG',
          'link': '/深入浅出 SVG/5-初级篇：如何使用 SVG.md'
        },
        {
          'text': '50-SVG 库和工具',
          'link': '/深入浅出 SVG/50-SVG 库和工具.md'
        },
        {
          'text': '51-SVG 未来发展趋势',
          'link': '/深入浅出 SVG/51-SVG 未来发展趋势.md'
        },
        {
          'text': '6-初级篇：SVG 坐标系统',
          'link': '/深入浅出 SVG/6-初级篇：SVG 坐标系统.md'
        },
        {
          'text': '7-初级篇：SVG 基本图形元素',
          'link': '/深入浅出 SVG/7-初级篇：SVG 基本图形元素.md'
        },
        {
          'text': '8-初级篇：SVG 文本元素',
          'link': '/深入浅出 SVG/8-初级篇：SVG 文本元素.md'
        },
        {
          'text': '9-初级篇：SVG 图像元素',
          'link': '/深入浅出 SVG/9-初级篇：SVG 图像元素.md'
        }
      ]
    }
  ],
  '/Web 动画之旅/': [
    {
      'text': 'Web 动画之旅',
      'items': [
        {
          'text': '1-Web 动画基础：从发展史中了解 Web 动画及动画的作用',
          'link': '/Web 动画之旅/1-Web 动画基础：从发展史中了解 Web 动画及动画的作用.md'
        },
        {
          'text': '10-使用 steps() 函数创建分段动画',
          'link': '/Web 动画之旅/10-使用 steps() 函数创建分段动画.md'
        },
        {
          'text': '11-使用 linear() 函数创建令人惊叹的动画曲线',
          'link': '/Web 动画之旅/11-使用 linear() 函数创建令人惊叹的动画曲线.md'
        },
        {
          'text': '12-深入了解 CSS 动画的持续时间和延迟时间',
          'link': '/Web 动画之旅/12-深入了解 CSS 动画的持续时间和延迟时间.md'
        },
        {
          'text': '13-CSS 动画的播放方式：暂停、恢复和重播',
          'link': '/Web 动画之旅/13-CSS 动画的播放方式：暂停、恢复和重播.md'
        },
        {
          'text': '14-深度解析 CSS 动画的填充模式',
          'link': '/Web 动画之旅/14-深度解析 CSS 动画的填充模式.md'
        },
        {
          'text': '15-如何使用 animation-direction 更好的控制动画方向',
          'link': '/Web 动画之旅/15-如何使用 animation-direction 更好的控制动画方向.md'
        },
        {
          'text': '16-多个 CSS 动画与动画合成：创造更复杂的动画效果',
          'link': '/Web 动画之旅/16-多个 CSS 动画与动画合成：创造更复杂的动画效果.md'
        },
        {
          'text': '17-数学的魔法：探索数学在动画中的应用',
          'link': '/Web 动画之旅/17-数学的魔法：探索数学在动画中的应用.md'
        },
        {
          'text': '18-CSS 路径动画：动画对象沿指定路径运动',
          'link': '/Web 动画之旅/18-CSS 路径动画：动画对象沿指定路径运动.md'
        },
        {
          'text': '19-使用 CSS 视图过渡创造流畅的界面动效',
          'link': '/Web 动画之旅/19-使用 CSS 视图过渡创造流畅的界面动效.md'
        },
        {
          'text': '2-动画的精髓：理解 Web 动画基本原理',
          'link': '/Web 动画之旅/2-动画的精髓：理解 Web 动画基本原理.md'
        },
        {
          'text': '20-CSS 滚动驱动动效的艺术',
          'link': '/Web 动画之旅/20-CSS 滚动驱动动效的艺术.md'
        },
        {
          'text': '21-制作流畅动画的技巧与实践',
          'link': '/Web 动画之旅/21-制作流畅动画的技巧与实践.md'
        },
        {
          'text': '22-探索动画中的JavaScript事件',
          'link': '/Web 动画之旅/22-探索动画中的JavaScript事件.md'
        },
        {
          'text': '23-提升可访问性动画的关键技巧',
          'link': '/Web 动画之旅/23-提升可访问性动画的关键技巧.md'
        },
        {
          'text': '24-深度解析动画调试的精髓',
          'link': '/Web 动画之旅/24-深度解析动画调试的精髓.md'
        },
        {
          'text': '25-创建 CSS 动画的小技巧',
          'link': '/Web 动画之旅/25-创建 CSS 动画的小技巧.md'
        },
        {
          'text': '26-CSS 动画实战',
          'link': '/Web 动画之旅/26-CSS 动画实战.md'
        },
        {
          'text': '27-初探 Web Animations API',
          'link': '/Web 动画之旅/27-初探 Web Animations API.md'
        },
        {
          'text': '28-掌握 Web Animations API 的精髓',
          'link': '/Web 动画之旅/28-掌握 Web Animations API 的精髓.md'
        },
        {
          'text': '29-CSS Animations vs Web Animations API ：选择最佳的动画方法',
          'link': '/Web 动画之旅/29-CSS Animations vs Web Animations API ：选择最佳的动画方法.md'
        },
        {
          'text': '3-流畅之美：掌握 Web 动画设计原则',
          'link': '/Web 动画之旅/3-流畅之美：掌握 Web 动画设计原则.md'
        },
        {
          'text': '30-WAAPI 综合案例：如何使用 WAAPI 创建一个动画库或组件',
          'link': '/Web 动画之旅/30-WAAPI 综合案例：如何使用 WAAPI 创建一个动画库或组件.md'
        },
        {
          'text': '31-SVG 动画基础入门',
          'link': '/Web 动画之旅/31-SVG 动画基础入门.md'
        },
        {
          'text': '32-探索 SVG 动画的奇妙世界：深入了解 SMIL 动画',
          'link': '/Web 动画之旅/32-探索 SVG 动画的奇妙世界：深入了解 SMIL 动画.md'
        },
        {
          'text': '33-创造视觉奇迹：深入理解带有 CSS 的 SVG 动画',
          'link': '/Web 动画之旅/33-创造视觉奇迹：深入理解带有 CSS 的 SVG 动画.md'
        },
        {
          'text': '34-Web 上引人入胜的各种 SVG 动画效果',
          'link': '/Web 动画之旅/34-Web 上引人入胜的各种 SVG 动画效果.md'
        },
        {
          'text': '35-SVG 动画综合案例：从简单的插图中创建看似复杂的动画',
          'link': '/Web 动画之旅/35-SVG 动画综合案例：从简单的插图中创建看似复杂的动画.md'
        },
        {
          'text': '36-无缝创造：深入探讨 Web 动画的开发流程',
          'link': '/Web 动画之旅/36-无缝创造：深入探讨 Web 动画的开发流程.md'
        },
        {
          'text': '37-精通 Web 动画：探索最佳 Web 动画库',
          'link': '/Web 动画之旅/37-精通 Web 动画：探索最佳 Web 动画库.md'
        },
        {
          'text': '4-CSS 动画基础：如何让网页更生动？',
          'link': '/Web 动画之旅/4-CSS 动画基础：如何让网页更生动？.md'
        },
        {
          'text': '5-帧动画与过渡动画：谁更适合你的业务场景？',
          'link': '/Web 动画之旅/5-帧动画与过渡动画：谁更适合你的业务场景？.md'
        },
        {
          'text': '6-CSS 变换的世界：创建流畅的 Web 动画',
          'link': '/Web 动画之旅/6-CSS 变换的世界：创建流畅的 Web 动画.md'
        },
        {
          'text': '7-你所不知道的 @keyframes：剖析 CSS 帧动画',
          'link': '/Web 动画之旅/7-你所不知道的 @keyframes：剖析 CSS 帧动画.md'
        },
        {
          'text': '8-CSS 缓动函数基础：为 Web 动画注入灵魂',
          'link': '/Web 动画之旅/8-CSS 缓动函数基础：为 Web 动画注入灵魂.md'
        },
        {
          'text': '9-使用 cubic-bezier() 函数创建高级动画',
          'link': '/Web 动画之旅/9-使用 cubic-bezier() 函数创建高级动画.md'
        }
      ]
    }
  ]
},
        {
          'text': '10.快速掌握 Storybook',
          'link': '/React 通关秘籍//10.快速掌握 Storybook.md'
        },
        {
          'text': '11.React 组件如何写单测？',
          'link': '/React 通关秘籍//11.React 组件如何写单测？.md'
        },
        {
          'text': '12.深入理解 Suspense 和 ErrorBoundary',
          'link': '/React 通关秘籍//12.深入理解 Suspense 和 ErrorBoundary.md'
        },
        {
          'text': '13.组件实战：Icon 图标组件',
          'link': '/React 通关秘籍//13.组件实战：Icon 图标组件.md'
        },
        {
          'text': '14.组件实战：Space 间距组件',
          'link': '/React 通关秘籍//14.组件实战：Space 间距组件.md'
        },
        {
          'text': '15.React.Children 和它的两种替代方案',
          'link': '/React 通关秘籍//15.React.Children 和它的两种替代方案.md'
        },
        {
          'text': '16.三个简单组件的封装',
          'link': '/React 通关秘籍//16.三个简单组件的封装.md'
        },
        {
          'text': '17.浏览器的 5 种 Observer',
          'link': '/React 通关秘籍//17.浏览器的 5 种 Observer.md'
        },
        {
          'text': '18.组件实战：Watermark 防删除水印组件',
          'link': '/React 通关秘籍//18.组件实战：Watermark 防删除水印组件.md'
        },
        {
          'text': '19.手写 react-lazyload',
          'link': '/React 通关秘籍//19.手写 react-lazyload.md'
        },
        {
          'text': '2.一网打尽组件常用 Hook',
          'link': '/React 通关秘籍//2.一网打尽组件常用 Hook.md'
        },
        {
          'text': '20.图解网页的各种距离',
          'link': '/React 通关秘籍//20.图解网页的各种距离.md'
        },
        {
          'text': '21.自定义 hook 练习',
          'link': '/React 通关秘籍//21.自定义 hook 练习.md'
        },
        {
          'text': '22.自定义 hook 练习（二）',
          'link': '/React 通关秘籍//22.自定义 hook 练习（二）.md'
        },
        {
          'text': '23.用 react-spring 做弹簧动画',
          'link': '/React 通关秘籍//23.用 react-spring 做弹簧动画.md'
        },
        {
          'text': '24.react-spring 结合 use-gesture 手势库实现交互动画',
          'link': '/React 通关秘籍//24.react-spring 结合 use-gesture 手势库实现交互动画.md'
        },
        {
          'text': '25.用 react-transition-group 和 react-spring 做过渡动画',
          'link': '/React 通关秘籍//25.用 react-transition-group 和 react-spring 做过渡动画.md'
        },
        {
          'text': '26.快速掌握 Tailwind：最流行的原子化 CSS 框架',
          'link': '/React 通关秘籍//26.快速掌握 Tailwind：最流行的原子化 CSS 框架.md'
        },
        {
          'text': '27.用 CSS Modules 避免样式冲突',
          'link': '/React 通关秘籍//27.用 CSS Modules 避免样式冲突.md'
        },
        {
          'text': '28.CSS In JS：快速掌握 styled-components',
          'link': '/React 通关秘籍//28.CSS In JS：快速掌握 styled-components.md'
        },
        {
          'text': '29.react-spring 实现滑入滑出的转场动画',
          'link': '/React 通关秘籍//29.react-spring 实现滑入滑出的转场动画.md'
        },
        {
          'text': '3.Hook 的闭包陷阱的成因和解决方案',
          'link': '/React 通关秘籍//3.Hook 的闭包陷阱的成因和解决方案.md'
        },
        {
          'text': '30.组件实战：Message 全局提示组件',
          'link': '/React 通关秘籍//30.组件实战：Message 全局提示组件.md'
        },
        {
          'text': '31.组件实战：Popover 气泡卡片组件',
          'link': '/React 通关秘籍//31.组件实战：Popover 气泡卡片组件.md'
        },
        {
          'text': '32.项目里如何快速定位组件源码？',
          'link': '/React 通关秘籍//32.项目里如何快速定位组件源码？.md'
        },
        {
          'text': '33.一次超爽的 React 调试体验',
          'link': '/React 通关秘籍//33.一次超爽的 React 调试体验.md'
        },
        {
          'text': '34.组件实战：ColorPicker 颜色选择器（一）',
          'link': '/React 通关秘籍//34.组件实战：ColorPicker 颜色选择器（一）.md'
        },
        {
          'text': '35.组件实战：ColorPicker 颜色选择器（二）',
          'link': '/React 通关秘籍//35.组件实战：ColorPicker 颜色选择器（二）.md'
        },
        {
          'text': '36.组件实战：onBoarding 漫游式引导组件',
          'link': '/React 通关秘籍//36.组件实战：onBoarding 漫游式引导组件.md'
        },
        {
          'text': '37.组件实战：Upload 拖拽上传',
          'link': '/React 通关秘籍//37.组件实战：Upload 拖拽上传.md'
        },
        {
          'text': '38.组件实战：Form 表单组件',
          'link': '/React 通关秘籍//38.组件实战：Form 表单组件.md'
        },
        {
          'text': '39.React 组件库都是怎么构建的',
          'link': '/React 通关秘籍//39.React 组件库都是怎么构建的.md'
        },
        {
          'text': '4.React 组件如何写 TypeScript 类型',
          'link': '/React 通关秘籍//4.React 组件如何写 TypeScript 类型.md'
        },
        {
          'text': '40.组件库实战：构建 esm 和 cjs 产物，发布到 npm',
          'link': '/React 通关秘籍//40.组件库实战：构建 esm 和 cjs 产物，发布到 npm.md'
        },
        {
          'text': '41.组件库实战：构建 umd 产物，通过 unpkg 访问',
          'link': '/React 通关秘籍//41.组件库实战：构建 umd 产物，通过 unpkg 访问.md'
        },
        {
          'text': '42.数据不可变：immutable 和 immer',
          'link': '/React 通关秘籍//42.数据不可变：immutable 和 immer.md'
        },
        {
          'text': '43.基于 React Router 实现 keepalive',
          'link': '/React 通关秘籍//43.基于 React Router 实现 keepalive.md'
        },
        {
          'text': '44.History api 和 React Router 实现原理',
          'link': '/React 通关秘籍//44.History api 和 React Router 实现原理.md'
        },
        {
          'text': '45.React Context 的实现原理和在 antd 里的应用',
          'link': '/React 通关秘籍//45.React Context 的实现原理和在 antd 里的应用.md'
        },
        {
          'text': '46.React Context 的性能缺点和解决方案',
          'link': '/React 通关秘籍//46.React Context 的性能缺点和解决方案.md'
        },
        {
          'text': '47.手写一个 Zustand',
          'link': '/React 通关秘籍//47.手写一个 Zustand.md'
        },
        {
          'text': '48.原子化状态管理库 Jotai',
          'link': '/React 通关秘籍//48.原子化状态管理库 Jotai.md'
        },
        {
          'text': '49.用 react-intl 实现国际化',
          'link': '/React 通关秘籍//49.用 react-intl 实现国际化.md'
        },
        {
          'text': '5.React 组件如何调试',
          'link': '/React 通关秘籍//5.React 组件如何调试.md'
        },
        {
          'text': '50.国际化资源包如何通过 Excel 和 Google Sheet 分享给产品经理？',
          'link': '/React 通关秘籍//50.国际化资源包如何通过 Excel 和 Google Sheet 分享给产品经理？.md'
        },
        {
          'text': '51.基于 react-dnd 实现拖拽排序',
          'link': '/React 通关秘籍//51.基于 react-dnd 实现拖拽排序.md'
        },
        {
          'text': '52.react-dnd  实战：拖拽版 TodoList',
          'link': '/React 通关秘籍//52.react-dnd  实战：拖拽版 TodoList.md'
        },
        {
          'text': '53.React Playground 项目实战：需求分析、实现原理',
          'link': '/React 通关秘籍//53.React Playground 项目实战：需求分析、实现原理.md'
        },
        {
          'text': '54.React Playground 项目实战：布局、代码编辑器',
          'link': '/React 通关秘籍//54.React Playground 项目实战：布局、代码编辑器.md'
        },
        {
          'text': '55.React Playground 项目实战：多文件切换',
          'link': '/React 通关秘籍//55.React Playground 项目实战：多文件切换.md'
        },
        {
          'text': '56.React Playground 项目实战：babel 编译、iframe 预览',
          'link': '/React 通关秘籍//56.React Playground 项目实战：babel 编译、iframe 预览.md'
        },
        {
          'text': '57.React Playground 项目实战：文件增删改',
          'link': '/React 通关秘籍//57.React Playground 项目实战：文件增删改.md'
        },
        {
          'text': '58.React Playground 项目实战：错误显示、主题切换',
          'link': '/React 通关秘籍//58.React Playground 项目实战：错误显示、主题切换.md'
        },
        {
          'text': '59.React Playground 项目实战：链接分享、代码下载',
          'link': '/React 通关秘籍//59.React Playground 项目实战：链接分享、代码下载.md'
        },
        {
          'text': '6.受控模式 VS 非受控模式',
          'link': '/React 通关秘籍//6.受控模式 VS 非受控模式.md'
        },
        {
          'text': '60.React Playground 项目实战：Web Worker 性能优化',
          'link': '/React 通关秘籍//60.React Playground 项目实战：Web Worker 性能优化.md'
        },
        {
          'text': '61.React Playground 项目实战：总结',
          'link': '/React 通关秘籍//61.React Playground 项目实战：总结.md'
        },
        {
          'text': '62.手写 Mini React：思路分析',
          'link': '/React 通关秘籍//62.手写 Mini React：思路分析.md'
        },
        {
          'text': '63.手写 Mini React：代码实现',
          'link': '/React 通关秘籍//63.手写 Mini React：代码实现.md'
        },
        {
          'text': '64.手写 Mini React：和真实 React 源码的对比',
          'link': '/React 通关秘籍//64.手写 Mini React：和真实 React 源码的对比.md'
        },
        {
          'text': '65.React 18 的并发机制是怎么实现的？',
          'link': '/React 通关秘籍//65.React 18 的并发机制是怎么实现的？.md'
        },
        {
          'text': '66.Ref 的实现原理',
          'link': '/React 通关秘籍//66.Ref 的实现原理.md'
        },
        {
          'text': '67.低代码编辑器：核心数据结构、全局 store',
          'link': '/React 通关秘籍//67.低代码编辑器：核心数据结构、全局 store.md'
        },
        {
          'text': '68.低代码编辑器：拖拽组件到画布、拖拽编辑 json',
          'link': '/React 通关秘籍//68.低代码编辑器：拖拽组件到画布、拖拽编辑 json.md'
        },
        {
          'text': '69.低代码编辑器：画布区 hover 展示高亮框',
          'link': '/React 通关秘籍//69.低代码编辑器：画布区 hover 展示高亮框.md'
        },
        {
          'text': '7.组件实战：迷你 Calendar',
          'link': '/React 通关秘籍//7.组件实战：迷你 Calendar.md'
        },
        {
          'text': '70.低代码编辑器：画布区 click 展示编辑框',
          'link': '/React 通关秘籍//70.低代码编辑器：画布区 click 展示编辑框.md'
        },
        {
          'text': '71.低代码编辑器：组件属性、样式编辑',
          'link': '/React 通关秘籍//71.低代码编辑器：组件属性、样式编辑.md'
        },
        {
          'text': '72.低代码编辑器：预览、大纲',
          'link': '/React 通关秘籍//72.低代码编辑器：预览、大纲.md'
        },
        {
          'text': '73.低代码编辑器：事件绑定',
          'link': '/React 通关秘籍//73.低代码编辑器：事件绑定.md'
        },
        {
          'text': '74.低代码编辑器：动作弹窗',
          'link': '/React 通关秘籍//74.低代码编辑器：动作弹窗.md'
        },
        {
          'text': '75.低代码编辑器：自定义 JS',
          'link': '/React 通关秘籍//75.低代码编辑器：自定义 JS.md'
        },
        {
          'text': '76.低代码编辑器：组件联动',
          'link': '/React 通关秘籍//76.低代码编辑器：组件联动.md'
        },
        {
          'text': '77.低代码编辑器：拖拽优化、Table 组件',
          'link': '/React 通关秘籍//77.低代码编辑器：拖拽优化、Table 组件.md'
        },
        {
          'text': '78.低代码编辑器：Form 组件、store 持久化',
          'link': '/React 通关秘籍//78.低代码编辑器：Form 组件、store 持久化.md'
        },
        {
          'text': '79.低代码编辑器：项目总结',
          'link': '/React 通关秘籍//79.低代码编辑器：项目总结.md'
        },
        {
          'text': '8.组件实战：Calendar 日历组件（上',
          'link': '/React 通关秘籍//8.组件实战：Calendar 日历组件（上.md'
        },
        {
          'text': '80.快速掌握 React Flow 画流程图',
          'link': '/React 通关秘籍//80.快速掌握 React Flow 画流程图.md'
        },
        {
          'text': '81.React Flow 振荡器调音：项目介绍',
          'link': '/React 通关秘籍//81.React Flow 振荡器调音：项目介绍.md'
        },
        {
          'text': '82.React Flow 振荡器调音：流程图绘制',
          'link': '/React 通关秘籍//82.React Flow 振荡器调音：流程图绘制.md'
        },
        {
          'text': '83.React Flow 振荡器调音：合成声音',
          'link': '/React 通关秘籍//83.React Flow 振荡器调音：合成声音.md'
        },
        {
          'text': '84.AudioContext 实现在线钢琴',
          'link': '/React 通关秘籍//84.AudioContext 实现在线钢琴.md'
        },
        {
          'text': '85.React 服务端渲染：从 SSR 到 hydrate',
          'link': '/React 通关秘籍//85.React 服务端渲染：从 SSR 到 hydrate.md'
        },
        {
          'text': '9.组件实战：Calendar 日历组件（下',
          'link': '/React 通关秘籍//9.组件实战：Calendar 日历组件（下.md'
        }
      ]
    }
  ],
  '/SVG 动画开发实战手册/': [
    {
      'text': 'SVG 动画开发实战手册',
      'items': [
        {
          'text': '1 SVG 基本知识介绍',
          'link': '/SVG 动画开发实战手册//1 SVG 基本知识介绍.md'
        },
        {
          'text': '10 Anime.js SVG Morphing动画实战',
          'link': '/SVG 动画开发实战手册//10 Anime.js SVG Morphing动画实战.md'
        },
        {
          'text': '2 SVG 输出流程和文件优化',
          'link': '/SVG 动画开发实战手册//2 SVG 输出流程和文件优化.md'
        },
        {
          'text': '3 SVG CSS 描边动画实战',
          'link': '/SVG 动画开发实战手册//3 SVG CSS 描边动画实战.md'
        },
        {
          'text': '4 SVG CSS 蒙版动画实战',
          'link': '/SVG 动画开发实战手册//4 SVG CSS 蒙版动画实战.md'
        },
        {
          'text': '5 SVG SMIL 动画实战',
          'link': '/SVG 动画开发实战手册//5 SVG SMIL 动画实战.md'
        },
        {
          'text': '6 Anime.js 基本知识入门',
          'link': '/SVG 动画开发实战手册//6 Anime.js 基本知识入门.md'
        },
        {
          'text': '7 Anime.js SVG 描边动画实战',
          'link': '/SVG 动画开发实战手册//7 Anime.js SVG 描边动画实战.md'
        },
        {
          'text': '8 Anime.js SVG 路径动画实战',
          'link': '/SVG 动画开发实战手册//8 Anime.js SVG 路径动画实战.md'
        },
        {
          'text': '9 Anime.js SVG 蒙版动画实战',
          'link': '/SVG 动画开发实战手册//9 Anime.js SVG 蒙版动画实战.md'
        }
      ]
    }
  ],
  '/深入浅出 SVG/': [
    {
      'text': '深入浅出 SVG',
      'items': [
        {
          'text': '1-开篇：神奇的 SVG 技术之旅',
          'link': '/深入浅出 SVG//1-开篇：神奇的 SVG 技术之旅.md'
        },
        {
          'text': '10-初级篇：组织 SVG',
          'link': '/深入浅出 SVG//10-初级篇：组织 SVG.md'
        },
        {
          'text': '14-初级篇：矢量图和光栅图谁更适合你的项目',
          'link': '/深入浅出 SVG//14-初级篇：矢量图和光栅图谁更适合你的项目.md'
        },
        {
          'text': '15-实战篇：使用 SVG 创建自己的图标系统',
          'link': '/深入浅出 SVG//15-实战篇：使用 SVG 创建自己的图标系统.md'
        },
        {
          'text': '16-中级篇：SVG 渐变',
          'link': '/深入浅出 SVG//16-中级篇：SVG 渐变.md'
        },
        {
          'text': '17-中级篇：SVG Pattern',
          'link': '/深入浅出 SVG//17-中级篇：SVG Pattern.md'
        },
        {
          'text': '18-中级篇：SVG 的变换属性',
          'link': '/深入浅出 SVG//18-中级篇：SVG 的变换属性.md'
        },
        {
          'text': '19-中级篇：SVG 坐标系变换',
          'link': '/深入浅出 SVG//19-中级篇：SVG 坐标系变换.md'
        },
        {
          'text': '2-初级篇：SVG 简介',
          'link': '/深入浅出 SVG//2-初级篇：SVG 简介.md'
        },
        {
          'text': '21-中级篇：SVG 剪切',
          'link': '/深入浅出 SVG//21-中级篇：SVG 剪切.md'
        },
        {
          'text': '22-中级篇：SVG 遮罩',
          'link': '/深入浅出 SVG//22-中级篇：SVG 遮罩.md'
        },
        {
          'text': '23- 中级篇：初探 SVG 滤镜',
          'link': '/深入浅出 SVG//23- 中级篇：初探 SVG 滤镜.md'
        },
        {
          'text': '24-中级篇：SVG 中的可访问性',
          'link': '/深入浅出 SVG//24-中级篇：SVG 中的可访问性.md'
        },
        {
          'text': '26-中级篇：SVG 构建工具',
          'link': '/深入浅出 SVG//26-中级篇：SVG 构建工具.md'
        },
        {
          'text': '27-中级篇：SVG 优雅降级',
          'link': '/深入浅出 SVG//27-中级篇：SVG 优雅降级.md'
        },
        {
          'text': '28-实战篇：SVG 与 Web 开发之 SVG vs. CSS',
          'link': '/深入浅出 SVG//28-实战篇：SVG 与 Web 开发之 SVG vs. CSS.md'
        },
        {
          'text': '29-实战篇：SVG 与 Web 开发之 SVG vs. Canvas',
          'link': '/深入浅出 SVG//29-实战篇：SVG 与 Web 开发之 SVG vs. Canvas.md'
        },
        {
          'text': '30-实战篇：SVG 与 Web 开发之利用 WebGL 创建更高级的图形效果',
          'link': '/深入浅出 SVG//30-实战篇：SVG 与 Web 开发之利用 WebGL 创建更高级的图形效果.md'
        },
        {
          'text': '31-实战篇：SVG 与 Web 开发之使用 CSS 混合模式增强 SVG 图形',
          'link': '/深入浅出 SVG//31-实战篇：SVG 与 Web 开发之使用 CSS 混合模式增强 SVG 图形.md'
        },
        {
          'text': '32-实战篇：SVG 与 Web 开发之 SVG 在 Vue 中的应用',
          'link': '/深入浅出 SVG//32-实战篇：SVG 与 Web 开发之 SVG 在 Vue 中的应用.md'
        },
        {
          'text': '33-实战篇：SVG 与 Web 开发之 SVG 在 React 的应用',
          'link': '/深入浅出 SVG//33-实战篇：SVG 与 Web 开发之 SVG 在 React 的应用.md'
        },
        {
          'text': '34-实战篇： SVG 与 Web 开发之 SVG 在 Next.js 的应用',
          'link': '/深入浅出 SVG//34-实战篇： SVG 与 Web 开发之 SVG 在 Next.js 的应用.md'
        },
        {
          'text': '35-高级篇：SVG 路径的高级技术',
          'link': '/深入浅出 SVG//35-高级篇：SVG 路径的高级技术.md'
        },
        {
          'text': '36-高级篇：SVG 滤镜的进阶之高阶颜色矩阵',
          'link': '/深入浅出 SVG//36-高级篇：SVG 滤镜的进阶之高阶颜色矩阵.md'
        },
        {
          'text': '37-高级篇：SVG 滤镜的进阶之文本描边',
          'link': '/深入浅出 SVG//37-高级篇：SVG 滤镜的进阶之文本描边.md'
        },
        {
          'text': '38-高级篇：SVG 滤镜的进阶之创建图像特效',
          'link': '/深入浅出 SVG//38-高级篇：SVG 滤镜的进阶之创建图像特效.md'
        },
        {
          'text': '39-高级篇：SVG 滤镜的进阶之奇妙的位移滤镜',
          'link': '/深入浅出 SVG//39-高级篇：SVG 滤镜的进阶之奇妙的位移滤镜.md'
        },
        {
          'text': '40-高级篇：SVG 滤镜的进阶之创造纹理',
          'link': '/深入浅出 SVG//40-高级篇：SVG 滤镜的进阶之创造纹理.md'
        },
        {
          'text': '41-高级篇：SVG 滤镜的进阶之创建颗粒效果',
          'link': '/深入浅出 SVG//41-高级篇：SVG 滤镜的进阶之创建颗粒效果.md'
        },
        {
          'text': '42-高级篇：SVG 滤镜的进阶之模糊与阴影效果',
          'link': '/深入浅出 SVG//42-高级篇：SVG 滤镜的进阶之模糊与阴影效果.md'
        },
        {
          'text': '43-高级篇：SVG 滤镜的进阶之黏糊效果',
          'link': '/深入浅出 SVG//43-高级篇：SVG 滤镜的进阶之黏糊效果.md'
        },
        {
          'text': '44-高级篇：SVG 滤镜的进阶之混合模式',
          'link': '/深入浅出 SVG//44-高级篇：SVG 滤镜的进阶之混合模式.md'
        },
        {
          'text': '45-高级篇：SVG 动画之 SMIL 动画',
          'link': '/深入浅出 SVG//45-高级篇：SVG 动画之 SMIL 动画.md'
        },
        {
          'text': '46-高级篇：SVG 动画之使用 CSS 实现动画',
          'link': '/深入浅出 SVG//46-高级篇：SVG 动画之使用 CSS 实现动画.md'
        },
        {
          'text': '48-高级篇：SVG 与 3D 效果',
          'link': '/深入浅出 SVG//48-高级篇：SVG 与 3D 效果.md'
        },
        {
          'text': '49-高级篇：SVG 与响应式设计',
          'link': '/深入浅出 SVG//49-高级篇：SVG 与响应式设计.md'
        },
        {
          'text': '5-初级篇：如何使用 SVG',
          'link': '/深入浅出 SVG//5-初级篇：如何使用 SVG.md'
        },
        {
          'text': '50-SVG 库和工具',
          'link': '/深入浅出 SVG//50-SVG 库和工具.md'
        },
        {
          'text': '51-SVG 未来发展趋势',
          'link': '/深入浅出 SVG//51-SVG 未来发展趋势.md'
        },
        {
          'text': '6-初级篇：SVG 坐标系统',
          'link': '/深入浅出 SVG//6-初级篇：SVG 坐标系统.md'
        },
        {
          'text': '7-初级篇：SVG 基本图形元素',
          'link': '/深入浅出 SVG//7-初级篇：SVG 基本图形元素.md'
        },
        {
          'text': '8-初级篇：SVG 文本元素',
          'link': '/深入浅出 SVG//8-初级篇：SVG 文本元素.md'
        },
        {
          'text': '9-初级篇：SVG 图像元素',
          'link': '/深入浅出 SVG//9-初级篇：SVG 图像元素.md'
        }
      ]
    }
  ],
  '/Web 动画之旅/': [
    {
      'text': 'Web 动画之旅',
      'items': [
        {
          'text': '1-Web 动画基础：从发展史中了解 Web 动画及动画的作用',
          'link': '/Web 动画之旅//1-Web 动画基础：从发展史中了解 Web 动画及动画的作用.md'
        },
        {
          'text': '10-使用 steps() 函数创建分段动画',
          'link': '/Web 动画之旅//10-使用 steps() 函数创建分段动画.md'
        },
        {
          'text': '11-使用 linear() 函数创建令人惊叹的动画曲线',
          'link': '/Web 动画之旅//11-使用 linear() 函数创建令人惊叹的动画曲线.md'
        },
        {
          'text': '12-深入了解 CSS 动画的持续时间和延迟时间',
          'link': '/Web 动画之旅//12-深入了解 CSS 动画的持续时间和延迟时间.md'
        },
        {
          'text': '13-CSS 动画的播放方式：暂停、恢复和重播',
          'link': '/Web 动画之旅//13-CSS 动画的播放方式：暂停、恢复和重播.md'
        },
        {
          'text': '14-深度解析 CSS 动画的填充模式',
          'link': '/Web 动画之旅//14-深度解析 CSS 动画的填充模式.md'
        },
        {
          'text': '15-如何使用 animation-direction 更好的控制动画方向',
          'link': '/Web 动画之旅//15-如何使用 animation-direction 更好的控制动画方向.md'
        },
        {
          'text': '16-多个 CSS 动画与动画合成：创造更复杂的动画效果',
          'link': '/Web 动画之旅//16-多个 CSS 动画与动画合成：创造更复杂的动画效果.md'
        },
        {
          'text': '17-数学的魔法：探索数学在动画中的应用',
          'link': '/Web 动画之旅//17-数学的魔法：探索数学在动画中的应用.md'
        },
        {
          'text': '18-CSS 路径动画：动画对象沿指定路径运动',
          'link': '/Web 动画之旅//18-CSS 路径动画：动画对象沿指定路径运动.md'
        },
        {
          'text': '19-使用 CSS 视图过渡创造流畅的界面动效',
          'link': '/Web 动画之旅//19-使用 CSS 视图过渡创造流畅的界面动效.md'
        },
        {
          'text': '2-动画的精髓：理解 Web 动画基本原理',
          'link': '/Web 动画之旅//2-动画的精髓：理解 Web 动画基本原理.md'
        },
        {
          'text': '20-CSS 滚动驱动动效的艺术',
          'link': '/Web 动画之旅//20-CSS 滚动驱动动效的艺术.md'
        },
        {
          'text': '21-制作流畅动画的技巧与实践',
          'link': '/Web 动画之旅//21-制作流畅动画的技巧与实践.md'
        },
        {
          'text': '22-探索动画中的JavaScript事件',
          'link': '/Web 动画之旅//22-探索动画中的JavaScript事件.md'
        },
        {
          'text': '23-提升可访问性动画的关键技巧',
          'link': '/Web 动画之旅//23-提升可访问性动画的关键技巧.md'
        },
        {
          'text': '24-深度解析动画调试的精髓',
          'link': '/Web 动画之旅//24-深度解析动画调试的精髓.md'
        },
        {
          'text': '25-创建 CSS 动画的小技巧',
          'link': '/Web 动画之旅//25-创建 CSS 动画的小技巧.md'
        },
        {
          'text': '26-CSS 动画实战',
          'link': '/Web 动画之旅//26-CSS 动画实战.md'
        },
        {
          'text': '27-初探 Web Animations API',
          'link': '/Web 动画之旅//27-初探 Web Animations API.md'
        },
        {
          'text': '28-掌握 Web Animations API 的精髓',
          'link': '/Web 动画之旅//28-掌握 Web Animations API 的精髓.md'
        },
        {
          'text': '29-CSS Animations vs Web Animations API ：选择最佳的动画方法',
          'link': '/Web 动画之旅//29-CSS Animations vs Web Animations API ：选择最佳的动画方法.md'
        },
        {
          'text': '3-流畅之美：掌握 Web 动画设计原则',
          'link': '/Web 动画之旅//3-流畅之美：掌握 Web 动画设计原则.md'
        },
        {
          'text': '30-WAAPI 综合案例：如何使用 WAAPI 创建一个动画库或组件',
          'link': '/Web 动画之旅//30-WAAPI 综合案例：如何使用 WAAPI 创建一个动画库或组件.md'
        },
        {
          'text': '31-SVG 动画基础入门',
          'link': '/Web 动画之旅//31-SVG 动画基础入门.md'
        },
        {
          'text': '32-探索 SVG 动画的奇妙世界：深入了解 SMIL 动画',
          'link': '/Web 动画之旅//32-探索 SVG 动画的奇妙世界：深入了解 SMIL 动画.md'
        },
        {
          'text': '33-创造视觉奇迹：深入理解带有 CSS 的 SVG 动画',
          'link': '/Web 动画之旅//33-创造视觉奇迹：深入理解带有 CSS 的 SVG 动画.md'
        },
        {
          'text': '34-Web 上引人入胜的各种 SVG 动画效果',
          'link': '/Web 动画之旅//34-Web 上引人入胜的各种 SVG 动画效果.md'
        },
        {
          'text': '35-SVG 动画综合案例：从简单的插图中创建看似复杂的动画',
          'link': '/Web 动画之旅//35-SVG 动画综合案例：从简单的插图中创建看似复杂的动画.md'
        },
        {
          'text': '36-无缝创造：深入探讨 Web 动画的开发流程',
          'link': '/Web 动画之旅//36-无缝创造：深入探讨 Web 动画的开发流程.md'
        },
        {
          'text': '37-精通 Web 动画：探索最佳 Web 动画库',
          'link': '/Web 动画之旅//37-精通 Web 动画：探索最佳 Web 动画库.md'
        },
        {
          'text': '4-CSS 动画基础：如何让网页更生动？',
          'link': '/Web 动画之旅//4-CSS 动画基础：如何让网页更生动？.md'
        },
        {
          'text': '5-帧动画与过渡动画：谁更适合你的业务场景？',
          'link': '/Web 动画之旅//5-帧动画与过渡动画：谁更适合你的业务场景？.md'
        },
        {
          'text': '6-CSS 变换的世界：创建流畅的 Web 动画',
          'link': '/Web 动画之旅//6-CSS 变换的世界：创建流畅的 Web 动画.md'
        },
        {
          'text': '7-你所不知道的 @keyframes：剖析 CSS 帧动画',
          'link': '/Web 动画之旅//7-你所不知道的 @keyframes：剖析 CSS 帧动画.md'
        },
        {
          'text': '8-CSS 缓动函数基础：为 Web 动画注入灵魂',
          'link': '/Web 动画之旅//8-CSS 缓动函数基础：为 Web 动画注入灵魂.md'
        },
        {
          'text': '9-使用 cubic-bezier() 函数创建高级动画',
          'link': '/Web 动画之旅//9-使用 cubic-bezier() 函数创建高级动画.md'
        }
      ]
    }
  ]
},
        {
          'text': '10.快速掌握 Storybook',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/10.快速掌握 Storybook.md'
        },
        {
          'text': '11.React 组件如何写单测？',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/11.React 组件如何写单测？.md'
        },
        {
          'text': '12.深入理解 Suspense 和 ErrorBoundary',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/12.深入理解 Suspense 和 ErrorBoundary.md'
        },
        {
          'text': '13.组件实战：Icon 图标组件',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/13.组件实战：Icon 图标组件.md'
        },
        {
          'text': '14.组件实战：Space 间距组件',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/14.组件实战：Space 间距组件.md'
        },
        {
          'text': '15.React.Children 和它的两种替代方案',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/15.React.Children 和它的两种替代方案.md'
        },
        {
          'text': '16.三个简单组件的封装',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/16.三个简单组件的封装.md'
        },
        {
          'text': '17.浏览器的 5 种 Observer',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/17.浏览器的 5 种 Observer.md'
        },
        {
          'text': '18.组件实战：Watermark 防删除水印组件',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/18.组件实战：Watermark 防删除水印组件.md'
        },
        {
          'text': '19.手写 react-lazyload',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/19.手写 react-lazyload.md'
        },
        {
          'text': '2.一网打尽组件常用 Hook',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/2.一网打尽组件常用 Hook.md'
        },
        {
          'text': '20.图解网页的各种距离',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/20.图解网页的各种距离.md'
        },
        {
          'text': '21.自定义 hook 练习',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/21.自定义 hook 练习.md'
        },
        {
          'text': '22.自定义 hook 练习（二）',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/22.自定义 hook 练习（二）.md'
        },
        {
          'text': '23.用 react-spring 做弹簧动画',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/23.用 react-spring 做弹簧动画.md'
        },
        {
          'text': '24.react-spring 结合 use-gesture 手势库实现交互动画',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/24.react-spring 结合 use-gesture 手势库实现交互动画.md'
        },
        {
          'text': '25.用 react-transition-group 和 react-spring 做过渡动画',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/25.用 react-transition-group 和 react-spring 做过渡动画.md'
        },
        {
          'text': '26.快速掌握 Tailwind：最流行的原子化 CSS 框架',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/26.快速掌握 Tailwind：最流行的原子化 CSS 框架.md'
        },
        {
          'text': '27.用 CSS Modules 避免样式冲突',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/27.用 CSS Modules 避免样式冲突.md'
        },
        {
          'text': '28.CSS In JS：快速掌握 styled-components',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/28.CSS In JS：快速掌握 styled-components.md'
        },
        {
          'text': '29.react-spring 实现滑入滑出的转场动画',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/29.react-spring 实现滑入滑出的转场动画.md'
        },
        {
          'text': '3.Hook 的闭包陷阱的成因和解决方案',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/3.Hook 的闭包陷阱的成因和解决方案.md'
        },
        {
          'text': '30.组件实战：Message 全局提示组件',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/30.组件实战：Message 全局提示组件.md'
        },
        {
          'text': '31.组件实战：Popover 气泡卡片组件',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/31.组件实战：Popover 气泡卡片组件.md'
        },
        {
          'text': '32.项目里如何快速定位组件源码？',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/32.项目里如何快速定位组件源码？.md'
        },
        {
          'text': '33.一次超爽的 React 调试体验',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/33.一次超爽的 React 调试体验.md'
        },
        {
          'text': '34.组件实战：ColorPicker 颜色选择器（一）',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/34.组件实战：ColorPicker 颜色选择器（一）.md'
        },
        {
          'text': '35.组件实战：ColorPicker 颜色选择器（二）',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/35.组件实战：ColorPicker 颜色选择器（二）.md'
        },
        {
          'text': '36.组件实战：onBoarding 漫游式引导组件',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/36.组件实战：onBoarding 漫游式引导组件.md'
        },
        {
          'text': '37.组件实战：Upload 拖拽上传',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/37.组件实战：Upload 拖拽上传.md'
        },
        {
          'text': '38.组件实战：Form 表单组件',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/38.组件实战：Form 表单组件.md'
        },
        {
          'text': '39.React 组件库都是怎么构建的',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/39.React 组件库都是怎么构建的.md'
        },
        {
          'text': '4.React 组件如何写 TypeScript 类型',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/4.React 组件如何写 TypeScript 类型.md'
        },
        {
          'text': '40.组件库实战：构建 esm 和 cjs 产物，发布到 npm',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/40.组件库实战：构建 esm 和 cjs 产物，发布到 npm.md'
        },
        {
          'text': '41.组件库实战：构建 umd 产物，通过 unpkg 访问',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/41.组件库实战：构建 umd 产物，通过 unpkg 访问.md'
        },
        {
          'text': '42.数据不可变：immutable 和 immer',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/42.数据不可变：immutable 和 immer.md'
        },
        {
          'text': '43.基于 React Router 实现 keepalive',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/43.基于 React Router 实现 keepalive.md'
        },
        {
          'text': '44.History api 和 React Router 实现原理',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/44.History api 和 React Router 实现原理.md'
        },
        {
          'text': '45.React Context 的实现原理和在 antd 里的应用',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/45.React Context 的实现原理和在 antd 里的应用.md'
        },
        {
          'text': '46.React Context 的性能缺点和解决方案',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/46.React Context 的性能缺点和解决方案.md'
        },
        {
          'text': '47.手写一个 Zustand',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/47.手写一个 Zustand.md'
        },
        {
          'text': '48.原子化状态管理库 Jotai',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/48.原子化状态管理库 Jotai.md'
        },
        {
          'text': '49.用 react-intl 实现国际化',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/49.用 react-intl 实现国际化.md'
        },
        {
          'text': '5.React 组件如何调试',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/5.React 组件如何调试.md'
        },
        {
          'text': '50.国际化资源包如何通过 Excel 和 Google Sheet 分享给产品经理？',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/50.国际化资源包如何通过 Excel 和 Google Sheet 分享给产品经理？.md'
        },
        {
          'text': '51.基于 react-dnd 实现拖拽排序',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/51.基于 react-dnd 实现拖拽排序.md'
        },
        {
          'text': '52.react-dnd  实战：拖拽版 TodoList',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/52.react-dnd  实战：拖拽版 TodoList.md'
        },
        {
          'text': '53.React Playground 项目实战：需求分析、实现原理',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/53.React Playground 项目实战：需求分析、实现原理.md'
        },
        {
          'text': '54.React Playground 项目实战：布局、代码编辑器',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/54.React Playground 项目实战：布局、代码编辑器.md'
        },
        {
          'text': '55.React Playground 项目实战：多文件切换',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/55.React Playground 项目实战：多文件切换.md'
        },
        {
          'text': '56.React Playground 项目实战：babel 编译、iframe 预览',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/56.React Playground 项目实战：babel 编译、iframe 预览.md'
        },
        {
          'text': '57.React Playground 项目实战：文件增删改',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/57.React Playground 项目实战：文件增删改.md'
        },
        {
          'text': '58.React Playground 项目实战：错误显示、主题切换',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/58.React Playground 项目实战：错误显示、主题切换.md'
        },
        {
          'text': '59.React Playground 项目实战：链接分享、代码下载',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/59.React Playground 项目实战：链接分享、代码下载.md'
        },
        {
          'text': '6.受控模式 VS 非受控模式',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/6.受控模式 VS 非受控模式.md'
        },
        {
          'text': '60.React Playground 项目实战：Web Worker 性能优化',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/60.React Playground 项目实战：Web Worker 性能优化.md'
        },
        {
          'text': '61.React Playground 项目实战：总结',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/61.React Playground 项目实战：总结.md'
        },
        {
          'text': '62.手写 Mini React：思路分析',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/62.手写 Mini React：思路分析.md'
        },
        {
          'text': '63.手写 Mini React：代码实现',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/63.手写 Mini React：代码实现.md'
        },
        {
          'text': '64.手写 Mini React：和真实 React 源码的对比',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/64.手写 Mini React：和真实 React 源码的对比.md'
        },
        {
          'text': '65.React 18 的并发机制是怎么实现的？',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/65.React 18 的并发机制是怎么实现的？.md'
        },
        {
          'text': '66.Ref 的实现原理',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/66.Ref 的实现原理.md'
        },
        {
          'text': '67.低代码编辑器：核心数据结构、全局 store',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/67.低代码编辑器：核心数据结构、全局 store.md'
        },
        {
          'text': '68.低代码编辑器：拖拽组件到画布、拖拽编辑 json',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/68.低代码编辑器：拖拽组件到画布、拖拽编辑 json.md'
        },
        {
          'text': '69.低代码编辑器：画布区 hover 展示高亮框',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/69.低代码编辑器：画布区 hover 展示高亮框.md'
        },
        {
          'text': '7.组件实战：迷你 Calendar',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/7.组件实战：迷你 Calendar.md'
        },
        {
          'text': '70.低代码编辑器：画布区 click 展示编辑框',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/70.低代码编辑器：画布区 click 展示编辑框.md'
        },
        {
          'text': '71.低代码编辑器：组件属性、样式编辑',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/71.低代码编辑器：组件属性、样式编辑.md'
        },
        {
          'text': '72.低代码编辑器：预览、大纲',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/72.低代码编辑器：预览、大纲.md'
        },
        {
          'text': '73.低代码编辑器：事件绑定',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/73.低代码编辑器：事件绑定.md'
        },
        {
          'text': '74.低代码编辑器：动作弹窗',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/74.低代码编辑器：动作弹窗.md'
        },
        {
          'text': '75.低代码编辑器：自定义 JS',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/75.低代码编辑器：自定义 JS.md'
        },
        {
          'text': '76.低代码编辑器：组件联动',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/76.低代码编辑器：组件联动.md'
        },
        {
          'text': '77.低代码编辑器：拖拽优化、Table 组件',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/77.低代码编辑器：拖拽优化、Table 组件.md'
        },
        {
          'text': '78.低代码编辑器：Form 组件、store 持久化',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/78.低代码编辑器：Form 组件、store 持久化.md'
        },
        {
          'text': '79.低代码编辑器：项目总结',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/79.低代码编辑器：项目总结.md'
        },
        {
          'text': '8.组件实战：Calendar 日历组件（上',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/8.组件实战：Calendar 日历组件（上.md'
        },
        {
          'text': '80.快速掌握 React Flow 画流程图',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/80.快速掌握 React Flow 画流程图.md'
        },
        {
          'text': '81.React Flow 振荡器调音：项目介绍',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/81.React Flow 振荡器调音：项目介绍.md'
        },
        {
          'text': '82.React Flow 振荡器调音：流程图绘制',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/82.React Flow 振荡器调音：流程图绘制.md'
        },
        {
          'text': '83.React Flow 振荡器调音：合成声音',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/83.React Flow 振荡器调音：合成声音.md'
        },
        {
          'text': '84.AudioContext 实现在线钢琴',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/84.AudioContext 实现在线钢琴.md'
        },
        {
          'text': '85.React 服务端渲染：从 SSR 到 hydrate',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/85.React 服务端渲染：从 SSR 到 hydrate.md'
        },
        {
          'text': '9.组件实战：Calendar 日历组件（下',
          'link': '//Users/star/Work/Code/1info/vitepress/React 通关秘籍/9.组件实战：Calendar 日历组件（下.md'
        }
      ]
    }
  ],
  '/SVG 动画开发实战手册/': [
    {
      'text': 'SVG 动画开发实战手册',
      'items': [
        {
          'text': '1 SVG 基本知识介绍',
          'link': '//Users/star/Work/Code/1info/vitepress/SVG 动画开发实战手册/1 SVG 基本知识介绍.md'
        },
        {
          'text': '10 Anime.js SVG Morphing动画实战',
          'link': '//Users/star/Work/Code/1info/vitepress/SVG 动画开发实战手册/10 Anime.js SVG Morphing动画实战.md'
        },
        {
          'text': '2 SVG 输出流程和文件优化',
          'link': '//Users/star/Work/Code/1info/vitepress/SVG 动画开发实战手册/2 SVG 输出流程和文件优化.md'
        },
        {
          'text': '3 SVG CSS 描边动画实战',
          'link': '//Users/star/Work/Code/1info/vitepress/SVG 动画开发实战手册/3 SVG CSS 描边动画实战.md'
        },
        {
          'text': '4 SVG CSS 蒙版动画实战',
          'link': '//Users/star/Work/Code/1info/vitepress/SVG 动画开发实战手册/4 SVG CSS 蒙版动画实战.md'
        },
        {
          'text': '5 SVG SMIL 动画实战',
          'link': '//Users/star/Work/Code/1info/vitepress/SVG 动画开发实战手册/5 SVG SMIL 动画实战.md'
        },
        {
          'text': '6 Anime.js 基本知识入门',
          'link': '//Users/star/Work/Code/1info/vitepress/SVG 动画开发实战手册/6 Anime.js 基本知识入门.md'
        },
        {
          'text': '7 Anime.js SVG 描边动画实战',
          'link': '//Users/star/Work/Code/1info/vitepress/SVG 动画开发实战手册/7 Anime.js SVG 描边动画实战.md'
        },
        {
          'text': '8 Anime.js SVG 路径动画实战',
          'link': '//Users/star/Work/Code/1info/vitepress/SVG 动画开发实战手册/8 Anime.js SVG 路径动画实战.md'
        },
        {
          'text': '9 Anime.js SVG 蒙版动画实战',
          'link': '//Users/star/Work/Code/1info/vitepress/SVG 动画开发实战手册/9 Anime.js SVG 蒙版动画实战.md'
        }
      ]
    }
  ],
  '/深入浅出 SVG/': [
    {
      'text': '深入浅出 SVG',
      'items': [
        {
          'text': '1-开篇：神奇的 SVG 技术之旅',
          'link': '//Users/star/Work/Code/1info/vitepress/深入浅出 SVG/1-开篇：神奇的 SVG 技术之旅.md'
        },
        {
          'text': '10-初级篇：组织 SVG',
          'link': '//Users/star/Work/Code/1info/vitepress/深入浅出 SVG/10-初级篇：组织 SVG.md'
        },
        {
          'text': '14-初级篇：矢量图和光栅图谁更适合你的项目',
          'link': '//Users/star/Work/Code/1info/vitepress/深入浅出 SVG/14-初级篇：矢量图和光栅图谁更适合你的项目.md'
        },
        {
          'text': '15-实战篇：使用 SVG 创建自己的图标系统',
          'link': '//Users/star/Work/Code/1info/vitepress/深入浅出 SVG/15-实战篇：使用 SVG 创建自己的图标系统.md'
        },
        {
          'text': '16-中级篇：SVG 渐变',
          'link': '//Users/star/Work/Code/1info/vitepress/深入浅出 SVG/16-中级篇：SVG 渐变.md'
        },
        {
          'text': '17-中级篇：SVG Pattern',
          'link': '//Users/star/Work/Code/1info/vitepress/深入浅出 SVG/17-中级篇：SVG Pattern.md'
        },
        {
          'text': '18-中级篇：SVG 的变换属性',
          'link': '//Users/star/Work/Code/1info/vitepress/深入浅出 SVG/18-中级篇：SVG 的变换属性.md'
        },
        {
          'text': '19-中级篇：SVG 坐标系变换',
          'link': '//Users/star/Work/Code/1info/vitepress/深入浅出 SVG/19-中级篇：SVG 坐标系变换.md'
        },
        {
          'text': '2-初级篇：SVG 简介',
          'link': '//Users/star/Work/Code/1info/vitepress/深入浅出 SVG/2-初级篇：SVG 简介.md'
        },
        {
          'text': '21-中级篇：SVG 剪切',
          'link': '//Users/star/Work/Code/1info/vitepress/深入浅出 SVG/21-中级篇：SVG 剪切.md'
        },
        {
          'text': '22-中级篇：SVG 遮罩',
          'link': '//Users/star/Work/Code/1info/vitepress/深入浅出 SVG/22-中级篇：SVG 遮罩.md'
        },
        {
          'text': '23- 中级篇：初探 SVG 滤镜',
          'link': '//Users/star/Work/Code/1info/vitepress/深入浅出 SVG/23- 中级篇：初探 SVG 滤镜.md'
        },
        {
          'text': '24-中级篇：SVG 中的可访问性',
          'link': '//Users/star/Work/Code/1info/vitepress/深入浅出 SVG/24-中级篇：SVG 中的可访问性.md'
        },
        {
          'text': '26-中级篇：SVG 构建工具',
          'link': '//Users/star/Work/Code/1info/vitepress/深入浅出 SVG/26-中级篇：SVG 构建工具.md'
        },
        {
          'text': '27-中级篇：SVG 优雅降级',
          'link': '//Users/star/Work/Code/1info/vitepress/深入浅出 SVG/27-中级篇：SVG 优雅降级.md'
        },
        {
          'text': '28-实战篇：SVG 与 Web 开发之 SVG vs. CSS',
          'link': '//Users/star/Work/Code/1info/vitepress/深入浅出 SVG/28-实战篇：SVG 与 Web 开发之 SVG vs. CSS.md'
        },
        {
          'text': '29-实战篇：SVG 与 Web 开发之 SVG vs. Canvas',
          'link': '//Users/star/Work/Code/1info/vitepress/深入浅出 SVG/29-实战篇：SVG 与 Web 开发之 SVG vs. Canvas.md'
        },
        {
          'text': '30-实战篇：SVG 与 Web 开发之利用 WebGL 创建更高级的图形效果',
          'link': '//Users/star/Work/Code/1info/vitepress/深入浅出 SVG/30-实战篇：SVG 与 Web 开发之利用 WebGL 创建更高级的图形效果.md'
        },
        {
          'text': '31-实战篇：SVG 与 Web 开发之使用 CSS 混合模式增强 SVG 图形',
          'link': '//Users/star/Work/Code/1info/vitepress/深入浅出 SVG/31-实战篇：SVG 与 Web 开发之使用 CSS 混合模式增强 SVG 图形.md'
        },
        {
          'text': '32-实战篇：SVG 与 Web 开发之 SVG 在 Vue 中的应用',
          'link': '//Users/star/Work/Code/1info/vitepress/深入浅出 SVG/32-实战篇：SVG 与 Web 开发之 SVG 在 Vue 中的应用.md'
        },
        {
          'text': '33-实战篇：SVG 与 Web 开发之 SVG 在 React 的应用',
          'link': '//Users/star/Work/Code/1info/vitepress/深入浅出 SVG/33-实战篇：SVG 与 Web 开发之 SVG 在 React 的应用.md'
        },
        {
          'text': '34-实战篇： SVG 与 Web 开发之 SVG 在 Next.js 的应用',
          'link': '//Users/star/Work/Code/1info/vitepress/深入浅出 SVG/34-实战篇： SVG 与 Web 开发之 SVG 在 Next.js 的应用.md'
        },
        {
          'text': '35-高级篇：SVG 路径的高级技术',
          'link': '//Users/star/Work/Code/1info/vitepress/深入浅出 SVG/35-高级篇：SVG 路径的高级技术.md'
        },
        {
          'text': '36-高级篇：SVG 滤镜的进阶之高阶颜色矩阵',
          'link': '//Users/star/Work/Code/1info/vitepress/深入浅出 SVG/36-高级篇：SVG 滤镜的进阶之高阶颜色矩阵.md'
        },
        {
          'text': '37-高级篇：SVG 滤镜的进阶之文本描边',
          'link': '//Users/star/Work/Code/1info/vitepress/深入浅出 SVG/37-高级篇：SVG 滤镜的进阶之文本描边.md'
        },
        {
          'text': '38-高级篇：SVG 滤镜的进阶之创建图像特效',
          'link': '//Users/star/Work/Code/1info/vitepress/深入浅出 SVG/38-高级篇：SVG 滤镜的进阶之创建图像特效.md'
        },
        {
          'text': '39-高级篇：SVG 滤镜的进阶之奇妙的位移滤镜',
          'link': '//Users/star/Work/Code/1info/vitepress/深入浅出 SVG/39-高级篇：SVG 滤镜的进阶之奇妙的位移滤镜.md'
        },
        {
          'text': '40-高级篇：SVG 滤镜的进阶之创造纹理',
          'link': '//Users/star/Work/Code/1info/vitepress/深入浅出 SVG/40-高级篇：SVG 滤镜的进阶之创造纹理.md'
        },
        {
          'text': '41-高级篇：SVG 滤镜的进阶之创建颗粒效果',
          'link': '//Users/star/Work/Code/1info/vitepress/深入浅出 SVG/41-高级篇：SVG 滤镜的进阶之创建颗粒效果.md'
        },
        {
          'text': '42-高级篇：SVG 滤镜的进阶之模糊与阴影效果',
          'link': '//Users/star/Work/Code/1info/vitepress/深入浅出 SVG/42-高级篇：SVG 滤镜的进阶之模糊与阴影效果.md'
        },
        {
          'text': '43-高级篇：SVG 滤镜的进阶之黏糊效果',
          'link': '//Users/star/Work/Code/1info/vitepress/深入浅出 SVG/43-高级篇：SVG 滤镜的进阶之黏糊效果.md'
        },
        {
          'text': '44-高级篇：SVG 滤镜的进阶之混合模式',
          'link': '//Users/star/Work/Code/1info/vitepress/深入浅出 SVG/44-高级篇：SVG 滤镜的进阶之混合模式.md'
        },
        {
          'text': '45-高级篇：SVG 动画之 SMIL 动画',
          'link': '//Users/star/Work/Code/1info/vitepress/深入浅出 SVG/45-高级篇：SVG 动画之 SMIL 动画.md'
        },
        {
          'text': '46-高级篇：SVG 动画之使用 CSS 实现动画',
          'link': '//Users/star/Work/Code/1info/vitepress/深入浅出 SVG/46-高级篇：SVG 动画之使用 CSS 实现动画.md'
        },
        {
          'text': '48-高级篇：SVG 与 3D 效果',
          'link': '//Users/star/Work/Code/1info/vitepress/深入浅出 SVG/48-高级篇：SVG 与 3D 效果.md'
        },
        {
          'text': '49-高级篇：SVG 与响应式设计',
          'link': '//Users/star/Work/Code/1info/vitepress/深入浅出 SVG/49-高级篇：SVG 与响应式设计.md'
        },
        {
          'text': '5-初级篇：如何使用 SVG',
          'link': '//Users/star/Work/Code/1info/vitepress/深入浅出 SVG/5-初级篇：如何使用 SVG.md'
        },
        {
          'text': '50-SVG 库和工具',
          'link': '//Users/star/Work/Code/1info/vitepress/深入浅出 SVG/50-SVG 库和工具.md'
        },
        {
          'text': '51-SVG 未来发展趋势',
          'link': '//Users/star/Work/Code/1info/vitepress/深入浅出 SVG/51-SVG 未来发展趋势.md'
        },
        {
          'text': '6-初级篇：SVG 坐标系统',
          'link': '//Users/star/Work/Code/1info/vitepress/深入浅出 SVG/6-初级篇：SVG 坐标系统.md'
        },
        {
          'text': '7-初级篇：SVG 基本图形元素',
          'link': '//Users/star/Work/Code/1info/vitepress/深入浅出 SVG/7-初级篇：SVG 基本图形元素.md'
        },
        {
          'text': '8-初级篇：SVG 文本元素',
          'link': '//Users/star/Work/Code/1info/vitepress/深入浅出 SVG/8-初级篇：SVG 文本元素.md'
        },
        {
          'text': '9-初级篇：SVG 图像元素',
          'link': '//Users/star/Work/Code/1info/vitepress/深入浅出 SVG/9-初级篇：SVG 图像元素.md'
        }
      ]
    }
  ],
  '/Web 动画之旅/': [
    {
      'text': 'Web 动画之旅',
      'items': [
        {
          'text': '1-Web 动画基础：从发展史中了解 Web 动画及动画的作用',
          'link': '//Users/star/Work/Code/1info/vitepress/Web 动画之旅/1-Web 动画基础：从发展史中了解 Web 动画及动画的作用.md'
        },
        {
          'text': '10-使用 steps() 函数创建分段动画',
          'link': '//Users/star/Work/Code/1info/vitepress/Web 动画之旅/10-使用 steps() 函数创建分段动画.md'
        },
        {
          'text': '11-使用 linear() 函数创建令人惊叹的动画曲线',
          'link': '//Users/star/Work/Code/1info/vitepress/Web 动画之旅/11-使用 linear() 函数创建令人惊叹的动画曲线.md'
        },
        {
          'text': '12-深入了解 CSS 动画的持续时间和延迟时间',
          'link': '//Users/star/Work/Code/1info/vitepress/Web 动画之旅/12-深入了解 CSS 动画的持续时间和延迟时间.md'
        },
        {
          'text': '13-CSS 动画的播放方式：暂停、恢复和重播',
          'link': '//Users/star/Work/Code/1info/vitepress/Web 动画之旅/13-CSS 动画的播放方式：暂停、恢复和重播.md'
        },
        {
          'text': '14-深度解析 CSS 动画的填充模式',
          'link': '//Users/star/Work/Code/1info/vitepress/Web 动画之旅/14-深度解析 CSS 动画的填充模式.md'
        },
        {
          'text': '15-如何使用 animation-direction 更好的控制动画方向',
          'link': '//Users/star/Work/Code/1info/vitepress/Web 动画之旅/15-如何使用 animation-direction 更好的控制动画方向.md'
        },
        {
          'text': '16-多个 CSS 动画与动画合成：创造更复杂的动画效果',
          'link': '//Users/star/Work/Code/1info/vitepress/Web 动画之旅/16-多个 CSS 动画与动画合成：创造更复杂的动画效果.md'
        },
        {
          'text': '17-数学的魔法：探索数学在动画中的应用',
          'link': '//Users/star/Work/Code/1info/vitepress/Web 动画之旅/17-数学的魔法：探索数学在动画中的应用.md'
        },
        {
          'text': '18-CSS 路径动画：动画对象沿指定路径运动',
          'link': '//Users/star/Work/Code/1info/vitepress/Web 动画之旅/18-CSS 路径动画：动画对象沿指定路径运动.md'
        },
        {
          'text': '19-使用 CSS 视图过渡创造流畅的界面动效',
          'link': '//Users/star/Work/Code/1info/vitepress/Web 动画之旅/19-使用 CSS 视图过渡创造流畅的界面动效.md'
        },
        {
          'text': '2-动画的精髓：理解 Web 动画基本原理',
          'link': '//Users/star/Work/Code/1info/vitepress/Web 动画之旅/2-动画的精髓：理解 Web 动画基本原理.md'
        },
        {
          'text': '20-CSS 滚动驱动动效的艺术',
          'link': '//Users/star/Work/Code/1info/vitepress/Web 动画之旅/20-CSS 滚动驱动动效的艺术.md'
        },
        {
          'text': '21-制作流畅动画的技巧与实践',
          'link': '//Users/star/Work/Code/1info/vitepress/Web 动画之旅/21-制作流畅动画的技巧与实践.md'
        },
        {
          'text': '22-探索动画中的JavaScript事件',
          'link': '//Users/star/Work/Code/1info/vitepress/Web 动画之旅/22-探索动画中的JavaScript事件.md'
        },
        {
          'text': '23-提升可访问性动画的关键技巧',
          'link': '//Users/star/Work/Code/1info/vitepress/Web 动画之旅/23-提升可访问性动画的关键技巧.md'
        },
        {
          'text': '24-深度解析动画调试的精髓',
          'link': '//Users/star/Work/Code/1info/vitepress/Web 动画之旅/24-深度解析动画调试的精髓.md'
        },
        {
          'text': '25-创建 CSS 动画的小技巧',
          'link': '//Users/star/Work/Code/1info/vitepress/Web 动画之旅/25-创建 CSS 动画的小技巧.md'
        },
        {
          'text': '26-CSS 动画实战',
          'link': '//Users/star/Work/Code/1info/vitepress/Web 动画之旅/26-CSS 动画实战.md'
        },
        {
          'text': '27-初探 Web Animations API',
          'link': '//Users/star/Work/Code/1info/vitepress/Web 动画之旅/27-初探 Web Animations API.md'
        },
        {
          'text': '28-掌握 Web Animations API 的精髓',
          'link': '//Users/star/Work/Code/1info/vitepress/Web 动画之旅/28-掌握 Web Animations API 的精髓.md'
        },
        {
          'text': '29-CSS Animations vs Web Animations API ：选择最佳的动画方法',
          'link': '//Users/star/Work/Code/1info/vitepress/Web 动画之旅/29-CSS Animations vs Web Animations API ：选择最佳的动画方法.md'
        },
        {
          'text': '3-流畅之美：掌握 Web 动画设计原则',
          'link': '//Users/star/Work/Code/1info/vitepress/Web 动画之旅/3-流畅之美：掌握 Web 动画设计原则.md'
        },
        {
          'text': '30-WAAPI 综合案例：如何使用 WAAPI 创建一个动画库或组件',
          'link': '//Users/star/Work/Code/1info/vitepress/Web 动画之旅/30-WAAPI 综合案例：如何使用 WAAPI 创建一个动画库或组件.md'
        },
        {
          'text': '31-SVG 动画基础入门',
          'link': '//Users/star/Work/Code/1info/vitepress/Web 动画之旅/31-SVG 动画基础入门.md'
        },
        {
          'text': '32-探索 SVG 动画的奇妙世界：深入了解 SMIL 动画',
          'link': '//Users/star/Work/Code/1info/vitepress/Web 动画之旅/32-探索 SVG 动画的奇妙世界：深入了解 SMIL 动画.md'
        },
        {
          'text': '33-创造视觉奇迹：深入理解带有 CSS 的 SVG 动画',
          'link': '//Users/star/Work/Code/1info/vitepress/Web 动画之旅/33-创造视觉奇迹：深入理解带有 CSS 的 SVG 动画.md'
        },
        {
          'text': '34-Web 上引人入胜的各种 SVG 动画效果',
          'link': '//Users/star/Work/Code/1info/vitepress/Web 动画之旅/34-Web 上引人入胜的各种 SVG 动画效果.md'
        },
        {
          'text': '35-SVG 动画综合案例：从简单的插图中创建看似复杂的动画',
          'link': '//Users/star/Work/Code/1info/vitepress/Web 动画之旅/35-SVG 动画综合案例：从简单的插图中创建看似复杂的动画.md'
        },
        {
          'text': '36-无缝创造：深入探讨 Web 动画的开发流程',
          'link': '//Users/star/Work/Code/1info/vitepress/Web 动画之旅/36-无缝创造：深入探讨 Web 动画的开发流程.md'
        },
        {
          'text': '37-精通 Web 动画：探索最佳 Web 动画库',
          'link': '//Users/star/Work/Code/1info/vitepress/Web 动画之旅/37-精通 Web 动画：探索最佳 Web 动画库.md'
        },
        {
          'text': '4-CSS 动画基础：如何让网页更生动？',
          'link': '//Users/star/Work/Code/1info/vitepress/Web 动画之旅/4-CSS 动画基础：如何让网页更生动？.md'
        },
        {
          'text': '5-帧动画与过渡动画：谁更适合你的业务场景？',
          'link': '//Users/star/Work/Code/1info/vitepress/Web 动画之旅/5-帧动画与过渡动画：谁更适合你的业务场景？.md'
        },
        {
          'text': '6-CSS 变换的世界：创建流畅的 Web 动画',
          'link': '//Users/star/Work/Code/1info/vitepress/Web 动画之旅/6-CSS 变换的世界：创建流畅的 Web 动画.md'
        },
        {
          'text': '7-你所不知道的 @keyframes：剖析 CSS 帧动画',
          'link': '//Users/star/Work/Code/1info/vitepress/Web 动画之旅/7-你所不知道的 @keyframes：剖析 CSS 帧动画.md'
        },
        {
          'text': '8-CSS 缓动函数基础：为 Web 动画注入灵魂',
          'link': '//Users/star/Work/Code/1info/vitepress/Web 动画之旅/8-CSS 缓动函数基础：为 Web 动画注入灵魂.md'
        },
        {
          'text': '9-使用 cubic-bezier() 函数创建高级动画',
          'link': '//Users/star/Work/Code/1info/vitepress/Web 动画之旅/9-使用 cubic-bezier() 函数创建高级动画.md'
        }
      ]
    }
  ]
},
        {
          'text': '10.快速掌握 Storybook',
          'link': '/10.快速掌握 Storybook.md'
        },
        {
          'text': '11.React 组件如何写单测？',
          'link': '/11.React 组件如何写单测？.md'
        },
        {
          'text': '12.深入理解 Suspense 和 ErrorBoundary',
          'link': '/12.深入理解 Suspense 和 ErrorBoundary.md'
        },
        {
          'text': '13.组件实战：Icon 图标组件',
          'link': '/13.组件实战：Icon 图标组件.md'
        },
        {
          'text': '14.组件实战：Space 间距组件',
          'link': '/14.组件实战：Space 间距组件.md'
        },
        {
          'text': '15.React.Children 和它的两种替代方案',
          'link': '/15.React.Children 和它的两种替代方案.md'
        },
        {
          'text': '16.三个简单组件的封装',
          'link': '/16.三个简单组件的封装.md'
        },
        {
          'text': '17.浏览器的 5 种 Observer',
          'link': '/17.浏览器的 5 种 Observer.md'
        },
        {
          'text': '18.组件实战：Watermark 防删除水印组件',
          'link': '/18.组件实战：Watermark 防删除水印组件.md'
        },
        {
          'text': '19.手写 react-lazyload',
          'link': '/19.手写 react-lazyload.md'
        },
        {
          'text': '2.一网打尽组件常用 Hook',
          'link': '/2.一网打尽组件常用 Hook.md'
        },
        {
          'text': '20.图解网页的各种距离',
          'link': '/20.图解网页的各种距离.md'
        },
        {
          'text': '21.自定义 hook 练习',
          'link': '/21.自定义 hook 练习.md'
        },
        {
          'text': '22.自定义 hook 练习（二）',
          'link': '/22.自定义 hook 练习（二）.md'
        },
        {
          'text': '23.用 react-spring 做弹簧动画',
          'link': '/23.用 react-spring 做弹簧动画.md'
        },
        {
          'text': '24.react-spring 结合 use-gesture 手势库实现交互动画',
          'link': '/24.react-spring 结合 use-gesture 手势库实现交互动画.md'
        },
        {
          'text': '25.用 react-transition-group 和 react-spring 做过渡动画',
          'link': '/25.用 react-transition-group 和 react-spring 做过渡动画.md'
        },
        {
          'text': '26.快速掌握 Tailwind：最流行的原子化 CSS 框架',
          'link': '/26.快速掌握 Tailwind：最流行的原子化 CSS 框架.md'
        },
        {
          'text': '27.用 CSS Modules 避免样式冲突',
          'link': '/27.用 CSS Modules 避免样式冲突.md'
        },
        {
          'text': '28.CSS In JS：快速掌握 styled-components',
          'link': '/28.CSS In JS：快速掌握 styled-components.md'
        },
        {
          'text': '29.react-spring 实现滑入滑出的转场动画',
          'link': '/29.react-spring 实现滑入滑出的转场动画.md'
        },
        {
          'text': '3.Hook 的闭包陷阱的成因和解决方案',
          'link': '/3.Hook 的闭包陷阱的成因和解决方案.md'
        },
        {
          'text': '30.组件实战：Message 全局提示组件',
          'link': '/30.组件实战：Message 全局提示组件.md'
        },
        {
          'text': '31.组件实战：Popover 气泡卡片组件',
          'link': '/31.组件实战：Popover 气泡卡片组件.md'
        },
        {
          'text': '32.项目里如何快速定位组件源码？',
          'link': '/32.项目里如何快速定位组件源码？.md'
        },
        {
          'text': '33.一次超爽的 React 调试体验',
          'link': '/33.一次超爽的 React 调试体验.md'
        },
        {
          'text': '34.组件实战：ColorPicker 颜色选择器（一）',
          'link': '/34.组件实战：ColorPicker 颜色选择器（一）.md'
        },
        {
          'text': '35.组件实战：ColorPicker 颜色选择器（二）',
          'link': '/35.组件实战：ColorPicker 颜色选择器（二）.md'
        },
        {
          'text': '36.组件实战：onBoarding 漫游式引导组件',
          'link': '/36.组件实战：onBoarding 漫游式引导组件.md'
        },
        {
          'text': '37.组件实战：Upload 拖拽上传',
          'link': '/37.组件实战：Upload 拖拽上传.md'
        },
        {
          'text': '38.组件实战：Form 表单组件',
          'link': '/38.组件实战：Form 表单组件.md'
        },
        {
          'text': '39.React 组件库都是怎么构建的',
          'link': '/39.React 组件库都是怎么构建的.md'
        },
        {
          'text': '4.React 组件如何写 TypeScript 类型',
          'link': '/4.React 组件如何写 TypeScript 类型.md'
        },
        {
          'text': '40.组件库实战：构建 esm 和 cjs 产物，发布到 npm',
          'link': '/40.组件库实战：构建 esm 和 cjs 产物，发布到 npm.md'
        },
        {
          'text': '41.组件库实战：构建 umd 产物，通过 unpkg 访问',
          'link': '/41.组件库实战：构建 umd 产物，通过 unpkg 访问.md'
        },
        {
          'text': '42.数据不可变：immutable 和 immer',
          'link': '/42.数据不可变：immutable 和 immer.md'
        },
        {
          'text': '43.基于 React Router 实现 keepalive',
          'link': '/43.基于 React Router 实现 keepalive.md'
        },
        {
          'text': '44.History api 和 React Router 实现原理',
          'link': '/44.History api 和 React Router 实现原理.md'
        },
        {
          'text': '45.React Context 的实现原理和在 antd 里的应用',
          'link': '/45.React Context 的实现原理和在 antd 里的应用.md'
        },
        {
          'text': '46.React Context 的性能缺点和解决方案',
          'link': '/46.React Context 的性能缺点和解决方案.md'
        },
        {
          'text': '47.手写一个 Zustand',
          'link': '/47.手写一个 Zustand.md'
        },
        {
          'text': '48.原子化状态管理库 Jotai',
          'link': '/48.原子化状态管理库 Jotai.md'
        },
        {
          'text': '49.用 react-intl 实现国际化',
          'link': '/49.用 react-intl 实现国际化.md'
        },
        {
          'text': '5.React 组件如何调试',
          'link': '/5.React 组件如何调试.md'
        },
        {
          'text': '50.国际化资源包如何通过 Excel 和 Google Sheet 分享给产品经理？',
          'link': '/50.国际化资源包如何通过 Excel 和 Google Sheet 分享给产品经理？.md'
        },
        {
          'text': '51.基于 react-dnd 实现拖拽排序',
          'link': '/51.基于 react-dnd 实现拖拽排序.md'
        },
        {
          'text': '52.react-dnd  实战：拖拽版 TodoList',
          'link': '/52.react-dnd  实战：拖拽版 TodoList.md'
        },
        {
          'text': '53.React Playground 项目实战：需求分析、实现原理',
          'link': '/53.React Playground 项目实战：需求分析、实现原理.md'
        },
        {
          'text': '54.React Playground 项目实战：布局、代码编辑器',
          'link': '/54.React Playground 项目实战：布局、代码编辑器.md'
        },
        {
          'text': '55.React Playground 项目实战：多文件切换',
          'link': '/55.React Playground 项目实战：多文件切换.md'
        },
        {
          'text': '56.React Playground 项目实战：babel 编译、iframe 预览',
          'link': '/56.React Playground 项目实战：babel 编译、iframe 预览.md'
        },
        {
          'text': '57.React Playground 项目实战：文件增删改',
          'link': '/57.React Playground 项目实战：文件增删改.md'
        },
        {
          'text': '58.React Playground 项目实战：错误显示、主题切换',
          'link': '/58.React Playground 项目实战：错误显示、主题切换.md'
        },
        {
          'text': '59.React Playground 项目实战：链接分享、代码下载',
          'link': '/59.React Playground 项目实战：链接分享、代码下载.md'
        },
        {
          'text': '6.受控模式 VS 非受控模式',
          'link': '/6.受控模式 VS 非受控模式.md'
        },
        {
          'text': '60.React Playground 项目实战：Web Worker 性能优化',
          'link': '/60.React Playground 项目实战：Web Worker 性能优化.md'
        },
        {
          'text': '61.React Playground 项目实战：总结',
          'link': '/61.React Playground 项目实战：总结.md'
        },
        {
          'text': '62.手写 Mini React：思路分析',
          'link': '/62.手写 Mini React：思路分析.md'
        },
        {
          'text': '63.手写 Mini React：代码实现',
          'link': '/63.手写 Mini React：代码实现.md'
        },
        {
          'text': '64.手写 Mini React：和真实 React 源码的对比',
          'link': '/64.手写 Mini React：和真实 React 源码的对比.md'
        },
        {
          'text': '65.React 18 的并发机制是怎么实现的？',
          'link': '/65.React 18 的并发机制是怎么实现的？.md'
        },
        {
          'text': '66.Ref 的实现原理',
          'link': '/66.Ref 的实现原理.md'
        },
        {
          'text': '67.低代码编辑器：核心数据结构、全局 store',
          'link': '/67.低代码编辑器：核心数据结构、全局 store.md'
        },
        {
          'text': '68.低代码编辑器：拖拽组件到画布、拖拽编辑 json',
          'link': '/68.低代码编辑器：拖拽组件到画布、拖拽编辑 json.md'
        },
        {
          'text': '69.低代码编辑器：画布区 hover 展示高亮框',
          'link': '/69.低代码编辑器：画布区 hover 展示高亮框.md'
        },
        {
          'text': '7.组件实战：迷你 Calendar',
          'link': '/7.组件实战：迷你 Calendar.md'
        },
        {
          'text': '70.低代码编辑器：画布区 click 展示编辑框',
          'link': '/70.低代码编辑器：画布区 click 展示编辑框.md'
        },
        {
          'text': '71.低代码编辑器：组件属性、样式编辑',
          'link': '/71.低代码编辑器：组件属性、样式编辑.md'
        },
        {
          'text': '72.低代码编辑器：预览、大纲',
          'link': '/72.低代码编辑器：预览、大纲.md'
        },
        {
          'text': '73.低代码编辑器：事件绑定',
          'link': '/73.低代码编辑器：事件绑定.md'
        },
        {
          'text': '74.低代码编辑器：动作弹窗',
          'link': '/74.低代码编辑器：动作弹窗.md'
        },
        {
          'text': '75.低代码编辑器：自定义 JS',
          'link': '/75.低代码编辑器：自定义 JS.md'
        },
        {
          'text': '76.低代码编辑器：组件联动',
          'link': '/76.低代码编辑器：组件联动.md'
        },
        {
          'text': '77.低代码编辑器：拖拽优化、Table 组件',
          'link': '/77.低代码编辑器：拖拽优化、Table 组件.md'
        },
        {
          'text': '78.低代码编辑器：Form 组件、store 持久化',
          'link': '/78.低代码编辑器：Form 组件、store 持久化.md'
        },
        {
          'text': '79.低代码编辑器：项目总结',
          'link': '/79.低代码编辑器：项目总结.md'
        },
        {
          'text': '8.组件实战：Calendar 日历组件（上',
          'link': '/8.组件实战：Calendar 日历组件（上.md'
        },
        {
          'text': '80.快速掌握 React Flow 画流程图',
          'link': '/80.快速掌握 React Flow 画流程图.md'
        },
        {
          'text': '81.React Flow 振荡器调音：项目介绍',
          'link': '/81.React Flow 振荡器调音：项目介绍.md'
        },
        {
          'text': '82.React Flow 振荡器调音：流程图绘制',
          'link': '/82.React Flow 振荡器调音：流程图绘制.md'
        },
        {
          'text': '83.React Flow 振荡器调音：合成声音',
          'link': '/83.React Flow 振荡器调音：合成声音.md'
        },
        {
          'text': '84.AudioContext 实现在线钢琴',
          'link': '/84.AudioContext 实现在线钢琴.md'
        },
        {
          'text': '85.React 服务端渲染：从 SSR 到 hydrate',
          'link': '/85.React 服务端渲染：从 SSR 到 hydrate.md'
        },
        {
          'text': '9.组件实战：Calendar 日历组件（下',
          'link': '/9.组件实战：Calendar 日历组件（下.md'
        }
      ]
    }
  ],
  '/SVG 动画开发实战手册/': [
    {
      'text': 'SVG 动画开发实战手册',
      'items': [
        {
          'text': '1 SVG 基本知识介绍',
          'link': '/1 SVG 基本知识介绍.md'
        },
        {
          'text': '10 Anime.js SVG Morphing动画实战',
          'link': '/10 Anime.js SVG Morphing动画实战.md'
        },
        {
          'text': '2 SVG 输出流程和文件优化',
          'link': '/2 SVG 输出流程和文件优化.md'
        },
        {
          'text': '3 SVG CSS 描边动画实战',
          'link': '/3 SVG CSS 描边动画实战.md'
        },
        {
          'text': '4 SVG CSS 蒙版动画实战',
          'link': '/4 SVG CSS 蒙版动画实战.md'
        },
        {
          'text': '5 SVG SMIL 动画实战',
          'link': '/5 SVG SMIL 动画实战.md'
        },
        {
          'text': '6 Anime.js 基本知识入门',
          'link': '/6 Anime.js 基本知识入门.md'
        },
        {
          'text': '7 Anime.js SVG 描边动画实战',
          'link': '/7 Anime.js SVG 描边动画实战.md'
        },
        {
          'text': '8 Anime.js SVG 路径动画实战',
          'link': '/8 Anime.js SVG 路径动画实战.md'
        },
        {
          'text': '9 Anime.js SVG 蒙版动画实战',
          'link': '/9 Anime.js SVG 蒙版动画实战.md'
        }
      ]
    }
  ],
  '/深入浅出 SVG/': [
    {
      'text': '深入浅出 SVG',
      'items': [
        {
          'text': '1-开篇：神奇的 SVG 技术之旅',
          'link': '/1-开篇：神奇的 SVG 技术之旅.md'
        },
        {
          'text': '10-初级篇：组织 SVG',
          'link': '/10-初级篇：组织 SVG.md'
        },
        {
          'text': '14-初级篇：矢量图和光栅图谁更适合你的项目',
          'link': '/14-初级篇：矢量图和光栅图谁更适合你的项目.md'
        },
        {
          'text': '15-实战篇：使用 SVG 创建自己的图标系统',
          'link': '/15-实战篇：使用 SVG 创建自己的图标系统.md'
        },
        {
          'text': '16-中级篇：SVG 渐变',
          'link': '/16-中级篇：SVG 渐变.md'
        },
        {
          'text': '17-中级篇：SVG Pattern',
          'link': '/17-中级篇：SVG Pattern.md'
        },
        {
          'text': '18-中级篇：SVG 的变换属性',
          'link': '/18-中级篇：SVG 的变换属性.md'
        },
        {
          'text': '19-中级篇：SVG 坐标系变换',
          'link': '/19-中级篇：SVG 坐标系变换.md'
        },
        {
          'text': '2-初级篇：SVG 简介',
          'link': '/2-初级篇：SVG 简介.md'
        },
        {
          'text': '21-中级篇：SVG 剪切',
          'link': '/21-中级篇：SVG 剪切.md'
        },
        {
          'text': '22-中级篇：SVG 遮罩',
          'link': '/22-中级篇：SVG 遮罩.md'
        },
        {
          'text': '23- 中级篇：初探 SVG 滤镜',
          'link': '/23- 中级篇：初探 SVG 滤镜.md'
        },
        {
          'text': '24-中级篇：SVG 中的可访问性',
          'link': '/24-中级篇：SVG 中的可访问性.md'
        },
        {
          'text': '26-中级篇：SVG 构建工具',
          'link': '/26-中级篇：SVG 构建工具.md'
        },
        {
          'text': '27-中级篇：SVG 优雅降级',
          'link': '/27-中级篇：SVG 优雅降级.md'
        },
        {
          'text': '28-实战篇：SVG 与 Web 开发之 SVG vs. CSS',
          'link': '/28-实战篇：SVG 与 Web 开发之 SVG vs. CSS.md'
        },
        {
          'text': '29-实战篇：SVG 与 Web 开发之 SVG vs. Canvas',
          'link': '/29-实战篇：SVG 与 Web 开发之 SVG vs. Canvas.md'
        },
        {
          'text': '30-实战篇：SVG 与 Web 开发之利用 WebGL 创建更高级的图形效果',
          'link': '/30-实战篇：SVG 与 Web 开发之利用 WebGL 创建更高级的图形效果.md'
        },
        {
          'text': '31-实战篇：SVG 与 Web 开发之使用 CSS 混合模式增强 SVG 图形',
          'link': '/31-实战篇：SVG 与 Web 开发之使用 CSS 混合模式增强 SVG 图形.md'
        },
        {
          'text': '32-实战篇：SVG 与 Web 开发之 SVG 在 Vue 中的应用',
          'link': '/32-实战篇：SVG 与 Web 开发之 SVG 在 Vue 中的应用.md'
        },
        {
          'text': '33-实战篇：SVG 与 Web 开发之 SVG 在 React 的应用',
          'link': '/33-实战篇：SVG 与 Web 开发之 SVG 在 React 的应用.md'
        },
        {
          'text': '34-实战篇： SVG 与 Web 开发之 SVG 在 Next.js 的应用',
          'link': '/34-实战篇： SVG 与 Web 开发之 SVG 在 Next.js 的应用.md'
        },
        {
          'text': '35-高级篇：SVG 路径的高级技术',
          'link': '/35-高级篇：SVG 路径的高级技术.md'
        },
        {
          'text': '36-高级篇：SVG 滤镜的进阶之高阶颜色矩阵',
          'link': '/36-高级篇：SVG 滤镜的进阶之高阶颜色矩阵.md'
        },
        {
          'text': '37-高级篇：SVG 滤镜的进阶之文本描边',
          'link': '/37-高级篇：SVG 滤镜的进阶之文本描边.md'
        },
        {
          'text': '38-高级篇：SVG 滤镜的进阶之创建图像特效',
          'link': '/38-高级篇：SVG 滤镜的进阶之创建图像特效.md'
        },
        {
          'text': '39-高级篇：SVG 滤镜的进阶之奇妙的位移滤镜',
          'link': '/39-高级篇：SVG 滤镜的进阶之奇妙的位移滤镜.md'
        },
        {
          'text': '40-高级篇：SVG 滤镜的进阶之创造纹理',
          'link': '/40-高级篇：SVG 滤镜的进阶之创造纹理.md'
        },
        {
          'text': '41-高级篇：SVG 滤镜的进阶之创建颗粒效果',
          'link': '/41-高级篇：SVG 滤镜的进阶之创建颗粒效果.md'
        },
        {
          'text': '42-高级篇：SVG 滤镜的进阶之模糊与阴影效果',
          'link': '/42-高级篇：SVG 滤镜的进阶之模糊与阴影效果.md'
        },
        {
          'text': '43-高级篇：SVG 滤镜的进阶之黏糊效果',
          'link': '/43-高级篇：SVG 滤镜的进阶之黏糊效果.md'
        },
        {
          'text': '44-高级篇：SVG 滤镜的进阶之混合模式',
          'link': '/44-高级篇：SVG 滤镜的进阶之混合模式.md'
        },
        {
          'text': '45-高级篇：SVG 动画之 SMIL 动画',
          'link': '/45-高级篇：SVG 动画之 SMIL 动画.md'
        },
        {
          'text': '46-高级篇：SVG 动画之使用 CSS 实现动画',
          'link': '/46-高级篇：SVG 动画之使用 CSS 实现动画.md'
        },
        {
          'text': '48-高级篇：SVG 与 3D 效果',
          'link': '/48-高级篇：SVG 与 3D 效果.md'
        },
        {
          'text': '49-高级篇：SVG 与响应式设计',
          'link': '/49-高级篇：SVG 与响应式设计.md'
        },
        {
          'text': '5-初级篇：如何使用 SVG',
          'link': '/5-初级篇：如何使用 SVG.md'
        },
        {
          'text': '50-SVG 库和工具',
          'link': '/50-SVG 库和工具.md'
        },
        {
          'text': '51-SVG 未来发展趋势',
          'link': '/51-SVG 未来发展趋势.md'
        },
        {
          'text': '6-初级篇：SVG 坐标系统',
          'link': '/6-初级篇：SVG 坐标系统.md'
        },
        {
          'text': '7-初级篇：SVG 基本图形元素',
          'link': '/7-初级篇：SVG 基本图形元素.md'
        },
        {
          'text': '8-初级篇：SVG 文本元素',
          'link': '/8-初级篇：SVG 文本元素.md'
        },
        {
          'text': '9-初级篇：SVG 图像元素',
          'link': '/9-初级篇：SVG 图像元素.md'
        }
      ]
    }
  ],
  '/Web 动画之旅/': [
    {
      'text': 'Web 动画之旅',
      'items': [
        {
          'text': '1-Web 动画基础：从发展史中了解 Web 动画及动画的作用',
          'link': '/1-Web 动画基础：从发展史中了解 Web 动画及动画的作用.md'
        },
        {
          'text': '10-使用 steps() 函数创建分段动画',
          'link': '/10-使用 steps() 函数创建分段动画.md'
        },
        {
          'text': '11-使用 linear() 函数创建令人惊叹的动画曲线',
          'link': '/11-使用 linear() 函数创建令人惊叹的动画曲线.md'
        },
        {
          'text': '12-深入了解 CSS 动画的持续时间和延迟时间',
          'link': '/12-深入了解 CSS 动画的持续时间和延迟时间.md'
        },
        {
          'text': '13-CSS 动画的播放方式：暂停、恢复和重播',
          'link': '/13-CSS 动画的播放方式：暂停、恢复和重播.md'
        },
        {
          'text': '14-深度解析 CSS 动画的填充模式',
          'link': '/14-深度解析 CSS 动画的填充模式.md'
        },
        {
          'text': '15-如何使用 animation-direction 更好的控制动画方向',
          'link': '/15-如何使用 animation-direction 更好的控制动画方向.md'
        },
        {
          'text': '16-多个 CSS 动画与动画合成：创造更复杂的动画效果',
          'link': '/16-多个 CSS 动画与动画合成：创造更复杂的动画效果.md'
        },
        {
          'text': '17-数学的魔法：探索数学在动画中的应用',
          'link': '/17-数学的魔法：探索数学在动画中的应用.md'
        },
        {
          'text': '18-CSS 路径动画：动画对象沿指定路径运动',
          'link': '/18-CSS 路径动画：动画对象沿指定路径运动.md'
        },
        {
          'text': '19-使用 CSS 视图过渡创造流畅的界面动效',
          'link': '/19-使用 CSS 视图过渡创造流畅的界面动效.md'
        },
        {
          'text': '2-动画的精髓：理解 Web 动画基本原理',
          'link': '/2-动画的精髓：理解 Web 动画基本原理.md'
        },
        {
          'text': '20-CSS 滚动驱动动效的艺术',
          'link': '/20-CSS 滚动驱动动效的艺术.md'
        },
        {
          'text': '21-制作流畅动画的技巧与实践',
          'link': '/21-制作流畅动画的技巧与实践.md'
        },
        {
          'text': '22-探索动画中的JavaScript事件',
          'link': '/22-探索动画中的JavaScript事件.md'
        },
        {
          'text': '23-提升可访问性动画的关键技巧',
          'link': '/23-提升可访问性动画的关键技巧.md'
        },
        {
          'text': '24-深度解析动画调试的精髓',
          'link': '/24-深度解析动画调试的精髓.md'
        },
        {
          'text': '25-创建 CSS 动画的小技巧',
          'link': '/25-创建 CSS 动画的小技巧.md'
        },
        {
          'text': '26-CSS 动画实战',
          'link': '/26-CSS 动画实战.md'
        },
        {
          'text': '27-初探 Web Animations API',
          'link': '/27-初探 Web Animations API.md'
        },
        {
          'text': '28-掌握 Web Animations API 的精髓',
          'link': '/28-掌握 Web Animations API 的精髓.md'
        },
        {
          'text': '29-CSS Animations vs Web Animations API ：选择最佳的动画方法',
          'link': '/29-CSS Animations vs Web Animations API ：选择最佳的动画方法.md'
        },
        {
          'text': '3-流畅之美：掌握 Web 动画设计原则',
          'link': '/3-流畅之美：掌握 Web 动画设计原则.md'
        },
        {
          'text': '30-WAAPI 综合案例：如何使用 WAAPI 创建一个动画库或组件',
          'link': '/30-WAAPI 综合案例：如何使用 WAAPI 创建一个动画库或组件.md'
        },
        {
          'text': '31-SVG 动画基础入门',
          'link': '/31-SVG 动画基础入门.md'
        },
        {
          'text': '32-探索 SVG 动画的奇妙世界：深入了解 SMIL 动画',
          'link': '/32-探索 SVG 动画的奇妙世界：深入了解 SMIL 动画.md'
        },
        {
          'text': '33-创造视觉奇迹：深入理解带有 CSS 的 SVG 动画',
          'link': '/33-创造视觉奇迹：深入理解带有 CSS 的 SVG 动画.md'
        },
        {
          'text': '34-Web 上引人入胜的各种 SVG 动画效果',
          'link': '/34-Web 上引人入胜的各种 SVG 动画效果.md'
        },
        {
          'text': '35-SVG 动画综合案例：从简单的插图中创建看似复杂的动画',
          'link': '/35-SVG 动画综合案例：从简单的插图中创建看似复杂的动画.md'
        },
        {
          'text': '36-无缝创造：深入探讨 Web 动画的开发流程',
          'link': '/36-无缝创造：深入探讨 Web 动画的开发流程.md'
        },
        {
          'text': '37-精通 Web 动画：探索最佳 Web 动画库',
          'link': '/37-精通 Web 动画：探索最佳 Web 动画库.md'
        },
        {
          'text': '4-CSS 动画基础：如何让网页更生动？',
          'link': '/4-CSS 动画基础：如何让网页更生动？.md'
        },
        {
          'text': '5-帧动画与过渡动画：谁更适合你的业务场景？',
          'link': '/5-帧动画与过渡动画：谁更适合你的业务场景？.md'
        },
        {
          'text': '6-CSS 变换的世界：创建流畅的 Web 动画',
          'link': '/6-CSS 变换的世界：创建流畅的 Web 动画.md'
        },
        {
          'text': '7-你所不知道的 @keyframes：剖析 CSS 帧动画',
          'link': '/7-你所不知道的 @keyframes：剖析 CSS 帧动画.md'
        },
        {
          'text': '8-CSS 缓动函数基础：为 Web 动画注入灵魂',
          'link': '/8-CSS 缓动函数基础：为 Web 动画注入灵魂.md'
        },
        {
          'text': '9-使用 cubic-bezier() 函数创建高级动画',
          'link': '/9-使用 cubic-bezier() 函数创建高级动画.md'
        }
      ]
    }
  ]
},
  },
})
