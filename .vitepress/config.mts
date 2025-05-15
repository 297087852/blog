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
        ],
      },
    ],

    sidebar: {
      '/markdown': [
        {
          text: 'Markdown',
          link: '/markdown-examples',
        },
        {
          text: 'VuePress',
          link: '/vuepress',
        },
      ],
      '/React 通关秘籍/': [
        {
          text: 'React 通关秘籍',
          items: [
            {
              text: '1.关于本小册.md',
              link: '/React 通关秘籍/1.关于本小册.md',
            },
            {
              text: '2.一网打尽组件常用 Hook',
              link: '/React 通关秘籍/2.一网打尽组件常用 Hook.md',
            },
            {
              text: '3.Hook 的闭包陷阱的成因和解决方案',
              link: '/React 通关秘籍/3.Hook 的闭包陷阱的成因和解决方案.md',
            },
            {
              text: '4.React 组件如何写 TypeScript 类型',
              link: '/React 通关秘籍/4.React 组件如何写 TypeScript 类型.md',
            },
            {
              text: '5.React 组件如何调试',
              link: '/React 通关秘籍/5.React 组件如何调试.md',
            },
            {
              text: '6.受控模式 VS 非受控模式',
              link: '/React 通关秘籍/6.受控模式 VS 非受控模式.md',
            },
            {
              text: '7.组件实战：迷你 Calendar',
              link: '/React 通关秘籍/7.组件实战：迷你 Calendar.md',
            },
            {
              text: '8.组件实战：Calendar 日历组件（上）',
              link: '/React 通关秘籍/8.组件实战：Calendar 日历组件（上.md',
            },
            {
              text: '9.组件实战：Calendar 日历组件（下）',
              link: '/React 通关秘籍/9.组件实战：Calendar 日历组件（下）.md',
            },
            {
              text: '10.快速掌握 Storybook',
              link: '/React 通关秘籍/10.快速掌握 Storybook.md',
            },
            {
              text: '11.React 组件如何写单测？',
              link: '/React 通关秘籍/11.React 组件如何写单测？.md',
            },
            {
              text: '12.深入理解 Suspense 和 ErrorBoundary',
              link: '/React 通关秘籍/12.深入理解 Suspense 和 ErrorBoundary.md',
            },
            {
              text: '13.组件实战：Icon 图标组件',
              link: '/React 通关秘籍/13.组件实战：Icon 图标组件.md',
            },
            {
              text: '14.组件实战：Space 间距组件',
              link: '/React 通关秘籍/14.组件实战：Space 间距组件.md',
            },
            {
              text: '15.React.Children 和它的两种替代方案',
              link: '/React 通关秘籍/15.React.Children 和它的两种替代方案.md',
            },
            {
              text: '16.三个简单组件的封装',
              link: '/React 通关秘籍/16.三个简单组件的封装.md',
            },
            {
              text: '17.浏览器的 5 种 Observer',
              link: '/React 通关秘籍/17.浏览器的 5 种 Observer.md',
            },
            {
              text: '18.组件实战：Watermark 防删除水印组件',
              link: '/React 通关秘籍/18.组件实战：Watermark 防删除水印组件.md',
            },
            {
              text: '19.手写 react-lazyload',
              link: '/React 通关秘籍/19.手写 react-lazyload.md',
            },
            {
              text: '20.图解网页的各种距离',
              link: '/React 通关秘籍/20.图解网页的各种距离.md',
            },
            {
              text: '21.自定义 hook 练习',
              link: '/React 通关秘籍/21.自定义 hook 练习.md',
            },
            {
              text: '22.自定义 hook 练习（二）',
              link: '/React 通关秘籍/22.自定义 hook 练习（二）.md',
            },
            {
              text: '23.用 react-spring 做弹簧动画',
              link: '/React 通关秘籍/23.用 react-spring 做弹簧动画.md',
            },
            {
              text: '24.react-spring 结合 use-gesture 手势库实现交互动画',
              link: '/React 通关秘籍/24.react-spring 结合 use-gesture 手势库实现交互动画.md',
            },
            {
              text: '25.用 react-transition-group 和 react-spring 做过渡动画',
              link: '/React 通关秘籍/25.用 react-transition-group 和 react-spring 做过渡动画.md',
            },
            {
              text: '26.快速掌握 Tailwind：最流行的原子化 CSS 框架',
              link: '/React 通关秘籍/26.快速掌握 Tailwind：最流行的原子化 CSS 框架.md',
            },
            {
              text: '27.用 CSS Modules 避免样式冲突',
              link: '/React 通关秘籍/27.用 CSS Modules 避免样式冲突.md',
            },
            {
              text: '28.CSS In JS：快速掌握 styled-components',
              link: '/React 通关秘籍/28.CSS In JS：快速掌握 styled-components.md',
            },
            {
              text: '29.react-spring 实现滑入滑出的转场动画',
              link: '/React 通关秘籍/29.react-spring 实现滑入滑出的转场动画.md',
            },
            {
              text: '30.组件实战：Message 全局提示组件',
              link: '/React 通关秘籍/30.组件实战：Message 全局提示组件.md',
            },
            {
              text: '31.组件实战：Popover 气泡卡片组件',
              link: '/React 通关秘籍/31.组件实战：Popover 气泡卡片组件.md',
            },
            {
              text: '32.项目里如何快速定位组件源码？',
              link: '/React 通关秘籍/32.项目里如何快速定位组件源码？.md',
            },
            {
              text: '33.一次超爽的 React 调试体验',
              link: '/React 通关秘籍/33.一次超爽的 React 调试体验.md',
            },
            {
              text: '34.组件实战：ColorPicker 颜色选择器（一）',
              link: '/React 通关秘籍/34.组件实战：ColorPicker 颜色选择器（一）.md',
            },
            {
              text: '35.组件实战：ColorPicker 颜色选择器（二）',
              link: '/React 通关秘籍/35.组件实战：ColorPicker 颜色选择器（二）.md',
            },
            {
              text: '36.组件实战：onBoarding 漫游式引导组件',
              link: '/React 通关秘籍/36.组件实战：onBoarding 漫游式引导组件.md',
            },
            {
              text: '37.组件实战：Upload 拖拽上传',
              link: '/React 通关秘籍/37.组件实战：Upload 拖拽上传.md',
            },
            {
              text: '38.组件实战：Form 表单组件',
              link: '/React 通关秘籍/38.组件实战：Form 表单组件.md',
            },
            {
              text: '39.React 组件库都是怎么构建的',
              link: '/React 通关秘籍/39.React 组件库都是怎么构建的.md',
            },
            {
              text: '40.组件库实战：构建 esm 和 cjs 产物，发布到 npm',
              link: '/React 通关秘籍/40.组件库实战：构建 esm 和 cjs 产物，发布到 npm.md',
            },
            {
              text: '41.组件库实战：构建 umd 产物，通过 unpkg 访问',
              link: '/React 通关秘籍/41.组件库实战：构建 umd 产物，通过 unpkg 访问.md',
            },
            {
              text: '42.数据不可变：immutable 和 immer',
              link: '/React 通关秘籍/42.数据不可变：immutable 和 immer.md',
            },
            {
              text: '43.基于 React Router 实现 keepalive',
              link: '/React 通关秘籍/43.基于 React Router 实现 keepalive.md',
            },
            {
              text: '44.History api 和 React Router 实现原理',
              link: '/React 通关秘籍/44.History api 和 React Router 实现原理.md',
            },
            {
              text: '45.React Context 的实现原理和在 antd 里的应用',
              link: '/React 通关秘籍/45.React Context 的实现原理和在 antd 里的应用.md',
            },
            {
              text: '46.React Context 的性能缺点和解决方案',
              link: '/React 通关秘籍/46.React Context 的性能缺点和解决方案.md',
            },
            {
              text: '47.手写一个 Zustand',
              link: '/React 通关秘籍/47.手写一个 Zustand.md',
            },
            {
              text: '48.原子化状态管理库 Jotai',
              link: '/React 通关秘籍/48.原子化状态管理库 Jotai.md',
            },
            {
              text: '49.用 react-intl 实现国际化',
              link: '/React 通关秘籍/49.用 react-intl 实现国际化.md',
            },
            {
              text: '50.国际化资源包如何通过 Excel 和 Google Sheet 分享给产品经理？',
              link: '/React 通关秘籍/50.国际化资源包如何通过 Excel 和 Google Sheet 分享给产品经理？.md',
            },
            {
              text: '51.基于 react-dnd 实现拖拽排序',
              link: '/React 通关秘籍/51.基于 react-dnd 实现拖拽排序.md',
            },
            {
              text: '52.react-dnd  实战：拖拽版 TodoList',
              link: '/React 通关秘籍/52.react-dnd  实战：拖拽版 TodoList.md',
            },
            {
              text: '53.React Playground 项目实战：需求分析、实现原理',
              link: '/React 通关秘籍/53.React Playground 项目实战：需求分析、实现原理.md',
            },
            {
              text: '54.React Playground 项目实战：布局、代码编辑器',
              link: '/React 通关秘籍/54.React Playground 项目实战：布局、代码编辑器.md',
            },
            {
              text: '55.React Playground 项目实战：多文件切换',
              link: '/React 通关秘籍/55.React Playground 项目实战：多文件切换.md',
            },
            {
              text: '56.React Playground 项目实战：babel 编译、iframe 预览',
              link: '/React 通关秘籍/56.React Playground 项目实战：babel 编译、iframe 预览.md',
            },
            {
              text: '57.React Playground 项目实战：文件增删改',
              link: '/React 通关秘籍/57.React Playground 项目实战：文件增删改.md',
            },
            {
              text: '58.React Playground 项目实战：错误显示、主题切换',
              link: '/React 通关秘籍/58.React Playground 项目实战：错误显示、主题切换.md',
            },
            {
              text: '59.React Playground 项目实战：链接分享、代码下载',
              link: '/React 通关秘籍/59.React Playground 项目实战：链接分享、代码下载.md',
            },
            {
              text: '60.React Playground 项目实战：Web Worker 性能优化',
              link: '/React 通关秘籍/60.React Playground 项目实战：Web Worker 性能优化.md',
            },
            {
              text: '61.React Playground 项目实战：总结',
              link: '/React 通关秘籍/61.React Playground 项目实战：总结.md',
            },
            {
              text: '62.手写 Mini React：思路分析',
              link: '/React 通关秘籍/62.手写 Mini React：思路分析.md',
            },
            {
              text: '63.手写 Mini React：代码实现',
              link: '/React 通关秘籍/63.手写 Mini React：代码实现.md',
            },
            {
              text: '64.手写 Mini React：和真实 React 源码的对比',
              link: '/React 通关秘籍/64.手写 Mini React：和真实 React 源码的对比.md',
            },
            {
              text: '65.React 18 的并发机制是怎么实现的？',
              link: '/React 通关秘籍/65.React 18 的并发机制是怎么实现的？.md',
            },
            {
              text: '66.Ref 的实现原理',
              link: '/React 通关秘籍/66.Ref 的实现原理.md',
            },
            {
              text: '67.低代码编辑器：核心数据结构、全局 store',
              link: '/React 通关秘籍/67.低代码编辑器：核心数据结构、全局 store.md',
            },
            {
              text: '68.低代码编辑器：拖拽组件到画布、拖拽编辑 json',
              link: '/React 通关秘籍/68.低代码编辑器：拖拽组件到画布、拖拽编辑 json.md',
            },
            {
              text: '69.低代码编辑器：画布区 hover 展示高亮框',
              link: '/React 通关秘籍/69.低代码编辑器：画布区 hover 展示高亮框.md',
            },
            {
              text: '70.低代码编辑器：画布区 click 展示编辑框',
              link: '/React 通关秘籍/70.低代码编辑器：画布区 click 展示编辑框.md',
            },
            {
              text: '71.低代码编辑器：组件属性、样式编辑',
              link: '/React 通关秘籍/71.低代码编辑器：组件属性、样式编辑.md',
            },
            {
              text: '72.低代码编辑器：预览、大纲',
              link: '/React 通关秘籍/72.低代码编辑器：预览、大纲.md',
            },
            {
              text: '73.低代码编辑器：事件绑定',
              link: '/React 通关秘籍/73.低代码编辑器：事件绑定.md',
            },
            {
              text: '74.低代码编辑器：动作弹窗',
              link: '/React 通关秘籍/74.低代码编辑器：动作弹窗.md',
            },
            {
              text: '75.低代码编辑器：自定义 JS',
              link: '/React 通关秘籍/75.低代码编辑器：自定义 JS.md',
            },
            {
              text: '76.低代码编辑器：组件联动',
              link: '/React 通关秘籍/76.低代码编辑器：组件联动.md',
            },
            {
              text: '77.低代码编辑器：拖拽优化、Table 组件',
              link: '/React 通关秘籍/77.低代码编辑器：拖拽优化、Table 组件.md',
            },
            {
              text: '78.低代码编辑器：Form 组件、store 持久化',
              link: '/React 通关秘籍/78.低代码编辑器：Form 组件、store 持久化.md',
            },
            {
              text: '79.低代码编辑器：项目总结',
              link: '/React 通关秘籍/79.低代码编辑器：项目总结.md',
            },
            {
              text: '80.快速掌握 React Flow 画流程图',
              link: '/React 通关秘籍/80.快速掌握 React Flow 画流程图.md',
            },
            {
              text: '81.React Flow 振荡器调音：项目介绍',
              link: '/React 通关秘籍/81.React Flow 振荡器调音：项目介绍.md',
            },
            {
              text: '82.React Flow 振荡器调音：流程图绘制',
              link: '/React 通关秘籍/82.React Flow 振荡器调音：流程图绘制.md',
            },
            {
              text: '83.React Flow 振荡器调音：合成声音',
              link: '/React 通关秘籍/83.React Flow 振荡器调音：合成声音.md',
            },
            {
              text: '84.AudioContext 实现在线钢琴',
              link: '/React 通关秘籍/84.AudioContext 实现在线钢琴.md',
            },
            {
              text: '85.React 服务端渲染：从 SSR 到 hydrate',
              link: '/React 通关秘籍/85.React 服务端渲染：从 SSR 到 hydrate.md',
            },
          ],
        },
      ],
      'SVG 动画开发实战手册': [
        {
          text: 'SVG 动画开发实战手册',
          items: [
            {
              text: '1.关于本小册',
              link: '/SVG 动画开发实战手册/1.关于本小册.md',
            },
            {
              text: '2.SVG 动画的基本概念',
              link: '/SVG 动画开发实战手册/2.SVG 动画的基本概念.md',
            },
            {
              text: '3.SVG 动画的基本原理',
              link: '/SVG 动画开发实战手册/3.SVG 动画的基本原理.md',
            },
            {
              text: '4.SVG 动画的基本实现',
              link: '/SVG 动画开发实战手册/4.SVG 动画的基本实现.md',
            },
          ],
        },
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
})
