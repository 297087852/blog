import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/blog/',
  title: 'My Awesome Project',
  description: 'A VitePress Site',
  ignoreDeadLinks: [/^https?:\/\/localhost(:\d+)?(\/|$)/],
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
            text: 'Nest 通关秘籍',
            link: '/Nest 通关秘籍/1. 开篇词.md',
          },
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
  '/Nest 通关秘籍/': [
    {
      'text': 'Nest 通关秘籍',
      'items': [
        {
          'text': '1. 开篇词',
          'link': '/Nest 通关秘籍/1. 开篇词.md'
        },
        {
          'text': '2. 给你 5 个学习 Nest 的理由，你会心动么',
          'link': '/Nest 通关秘籍/2. 给你 5 个学习 Nest 的理由，你会心动么.md'
        },
        {
          'text': '3. Nest 基础概念扫盲',
          'link': '/Nest 通关秘籍/3. Nest 基础概念扫盲.md'
        },
        {
          'text': '4. 快速掌握 Nest CLI',
          'link': '/Nest 通关秘籍/4. 快速掌握 Nest CLI.md'
        },
        {
          'text': '5. 5 种 HTTP 数据传输方式',
          'link': '/Nest 通关秘籍/5. 5 种 HTTP 数据传输方式.md'
        },
        {
          'text': '6. IoC 解决了什么痛点问题？',
          'link': '/Nest 通关秘籍/6. IoC 解决了什么痛点问题？.md'
        },
        {
          'text': '7. 如何调试 Nest 项目',
          'link': '/Nest 通关秘籍/7. 如何调试 Nest 项目.md'
        },
        {
          'text': '8. 使用多种 Provider，灵活注入对象',
          'link': '/Nest 通关秘籍/8. 使用多种 Provider，灵活注入对象.md'
        },
        {
          'text': '9. 全局模块和生命周期',
          'link': '/Nest 通关秘籍/9. 全局模块和生命周期.md'
        },
        {
          'text': '10. AOP 架构有什么好处？',
          'link': '/Nest 通关秘籍/10. AOP 架构有什么好处？.md'
        },
        {
          'text': '11. 一网打尽 Nest 全部装饰器',
          'link': '/Nest 通关秘籍/11. 一网打尽 Nest 全部装饰器.md'
        },
        {
          'text': '12. Nest 如何自定义装饰器',
          'link': '/Nest 通关秘籍/12. Nest 如何自定义装饰器.md'
        },
        {
          'text': '13. Metadata 和 Reflector',
          'link': '/Nest 通关秘籍/13. Metadata 和 Reflector.md'
        },
        {
          'text': '14. ExecutionContext：切换不同上下文',
          'link': '/Nest 通关秘籍/14. ExecutionContext：切换不同上下文.md'
        },
        {
          'text': '15. Module 和 Provider 的循环依赖怎么处理？',
          'link': '/Nest 通关秘籍/15. Module 和 Provider 的循环依赖怎么处理？.md'
        },
        {
          'text': '16. 如何创建动态模块',
          'link': '/Nest 通关秘籍/16. 如何创建动态模块.md'
        },
        {
          'text': '17. Nest 和 Express 的关系，如何切到 fastify',
          'link': '/Nest 通关秘籍/17. Nest 和 Express 的关系，如何切到 fastify.md'
        },
        {
          'text': '18. Nest 的 Middleware ',
          'link': '/Nest 通关秘籍/18. Nest 的 Middleware .md'
        },
        {
          'text': '19. RxJS 和 Interceptor',
          'link': '/Nest 通关秘籍/19. RxJS 和 Interceptor.md'
        },
        {
          'text': '20. 内置 Pipe 和自定义 Pipe',
          'link': '/Nest 通关秘籍/20. 内置 Pipe 和自定义 Pipe.md'
        },
        {
          'text': '21. 如何使用 ValidationPipe 验证 post 请求参数',
          'link': '/Nest 通关秘籍/21. 如何使用 ValidationPipe 验证 post 请求参数.md'
        },
        {
          'text': '22. 如何自定义 Exception Filter',
          'link': '/Nest 通关秘籍/22. 如何自定义 Exception Filter.md'
        },
        {
          'text': '23. 图解串一串 Nest 核心概念',
          'link': '/Nest 通关秘籍/23. 图解串一串 Nest 核心概念.md'
        },
        {
          'text': '24. 接口如何实现多版本共存',
          'link': '/Nest 通关秘籍/24. 接口如何实现多版本共存.md'
        },
        {
          'text': '25. Express 如何使用 multer 实现文件上传',
          'link': '/Nest 通关秘籍/25. Express 如何使用 multer 实现文件上传.md'
        },
        {
          'text': '26. Nest 如何使用 multer 实现文件上传',
          'link': '/Nest 通关秘籍/26. Nest 如何使用 multer 实现文件上传.md'
        },
        {
          'text': '27. 图书管理系统：需求分析和原型图',
          'link': '/Nest 通关秘籍/27. 图书管理系统：需求分析和原型图.md'
        },
        {
          'text': '28. 图书管理系统：用户模块后端开发',
          'link': '/Nest 通关秘籍/28. 图书管理系统：用户模块后端开发.md'
        },
        {
          'text': '29. 图书管理系统：图书模块后端开发',
          'link': '/Nest 通关秘籍/29. 图书管理系统：图书模块后端开发.md'
        },
        {
          'text': '30. 图书管理系统：用户模块前端开发',
          'link': '/Nest 通关秘籍/30. 图书管理系统：用户模块前端开发.md'
        },
        {
          'text': '31. 图书管理系统：图书模块前端开发--图书搜索',
          'link': '/Nest 通关秘籍/31. 图书管理系统：图书模块前端开发--图书搜索.md'
        },
        {
          'text': '32. 图书管理系统：图书模块前端开发--图书增删改',
          'link': '/Nest 通关秘籍/32. 图书管理系统：图书模块前端开发--图书增删改.md'
        },
        {
          'text': '33. 图书管理系统：项目总结',
          'link': '/Nest 通关秘籍/33. 图书管理系统：项目总结.md'
        },
        {
          'text': '34. 大文件分片上传',
          'link': '/Nest 通关秘籍/34. 大文件分片上传.md'
        },
        {
          'text': '35. 最完美的 OSS 上传方案',
          'link': '/Nest 通关秘籍/35. 最完美的 OSS 上传方案.md'
        },
        {
          'text': '36. Nest 里如何打印日志？',
          'link': '/Nest 通关秘籍/36. Nest 里如何打印日志？.md'
        },
        {
          'text': '37. 为什么 Node 里要用 Winston 打印日志？',
          'link': '/Nest 通关秘籍/37. 为什么 Node 里要用 Winston 打印日志？.md'
        },
        {
          'text': '38. Nest 集成日志框架 Winston',
          'link': '/Nest 通关秘籍/38. Nest 集成日志框架 Winston.md'
        },
        {
          'text': '39. 通过 Desktop 学 Docker 也太简单了',
          'link': '/Nest 通关秘籍/39. 通过 Desktop 学 Docker 也太简单了.md'
        },
        {
          'text': '40. 你的第一个 Dockerfile',
          'link': '/Nest 通关秘籍/40. 你的第一个 Dockerfile.md'
        },
        {
          'text': '41. Nest 项目如何编写 Dockerfile',
          'link': '/Nest 通关秘籍/41. Nest 项目如何编写 Dockerfile.md'
        },
        {
          'text': '42. 提升 Dockerfile 水平的 5 个技巧',
          'link': '/Nest 通关秘籍/42. 提升 Dockerfile 水平的 5 个技巧.md'
        },
        {
          'text': '43. Docker 是怎么实现的？',
          'link': '/Nest 通关秘籍/43. Docker 是怎么实现的？.md'
        },
        {
          'text': '44. 为什么 Node 应用要用 PM2 来跑？',
          'link': '/Nest 通关秘籍/44. 为什么 Node 应用要用 PM2 来跑？.md'
        },
        {
          'text': '45. 快速入门 MySQL',
          'link': '/Nest 通关秘籍/45. 快速入门 MySQL.md'
        },
        {
          'text': '46. SQL 查询语句的所有语法和函数',
          'link': '/Nest 通关秘籍/46. SQL 查询语句的所有语法和函数.md'
        },
        {
          'text': '47. 一对一、join 查询、级联方式',
          'link': '/Nest 通关秘籍/47. 一对一、join 查询、级联方式.md'
        },
        {
          'text': '48. 一对多、多对多关系的表设计',
          'link': '/Nest 通关秘籍/48. 一对多、多对多关系的表设计.md'
        },
        {
          'text': '49. 子查询和 EXISTS',
          'link': '/Nest 通关秘籍/49. 子查询和 EXISTS.md'
        },
        {
          'text': '50. SQL 综合练习',
          'link': '/Nest 通关秘籍/50. SQL 综合练习.md'
        },
        {
          'text': '51. MySQL 的事务和隔离级别',
          'link': '/Nest 通关秘籍/51. MySQL 的事务和隔离级别.md'
        },
        {
          'text': '52. MySQL 的视图、存储过程和函数',
          'link': '/Nest 通关秘籍/52. MySQL 的视图、存储过程和函数.md'
        },
        {
          'text': '53. 使用 Node 操作 MySQL 的两种方式',
          'link': '/Nest 通关秘籍/53. 使用 Node 操作 MySQL 的两种方式.md'
        },
        {
          'text': '54. 快速掌握 TypeORM',
          'link': '/Nest 通关秘籍/54. 快速掌握 TypeORM.md'
        },
        {
          'text': '55. TypeORM 一对一的映射和关联 CRUD',
          'link': '/Nest 通关秘籍/55. TypeORM 一对一的映射和关联 CRUD.md'
        },
        {
          'text': '56. TypeORM 一对多的映射和关联 CRUD',
          'link': '/Nest 通关秘籍/56. TypeORM 一对多的映射和关联 CRUD.md'
        },
        {
          'text': '57. TypeORM 多对多的映射和关联 CRUD',
          'link': '/Nest 通关秘籍/57. TypeORM 多对多的映射和关联 CRUD.md'
        },
        {
          'text': '58. 在 Nest 里集成 TypeORM',
          'link': '/Nest 通关秘籍/58. 在 Nest 里集成 TypeORM.md'
        },
        {
          'text': '59. TypeORM 如何保存任意层级的关系？',
          'link': '/Nest 通关秘籍/59. TypeORM 如何保存任意层级的关系？.md'
        },
        {
          'text': '60. 为什么生产环境要用 TypeORM 的 migration 迁移功能？',
          'link': '/Nest 通关秘籍/60. 为什么生产环境要用 TypeORM 的 migration 迁移功能？.md'
        },
        {
          'text': '61. Nest 项目里如何使用 TypeORM 迁移',
          'link': '/Nest 通关秘籍/61. Nest 项目里如何使用 TypeORM 迁移.md'
        },
        {
          'text': '62. 如何动态读取不同环境的配置？',
          'link': '/Nest 通关秘籍/62. 如何动态读取不同环境的配置？.md'
        },
        {
          'text': '63. 快速入门 Redis',
          'link': '/Nest 通关秘籍/63. 快速入门 Redis.md'
        },
        {
          'text': '64. 在 Nest 里操作 Redis',
          'link': '/Nest 通关秘籍/64. 在 Nest 里操作 Redis.md'
        },
        {
          'text': '65. 为什么不用 cache-manager 操作 Redis？',
          'link': '/Nest 通关秘籍/65. 为什么不用 cache-manager 操作 Redis？.md'
        },
        {
          'text': '66. 两种登录状态保存方式：JWT、Session',
          'link': '/Nest 通关秘籍/66. 两种登录状态保存方式：JWT、Session.md'
        },
        {
          'text': '67. Nest 里实现 Session 和 JWT',
          'link': '/Nest 通关秘籍/67. Nest 里实现 Session 和 JWT.md'
        },
        {
          'text': '68. MySQL + TypeORM + JWT 实现登录注册',
          'link': '/Nest 通关秘籍/68. MySQL + TypeORM + JWT 实现登录注册.md'
        },
        {
          'text': '69. 基于 ACL 实现权限控制',
          'link': '/Nest 通关秘籍/69. 基于 ACL 实现权限控制.md'
        },
        {
          'text': '70. 基于 RBAC 实现权限控制',
          'link': '/Nest 通关秘籍/70. 基于 RBAC 实现权限控制.md'
        },
        {
          'text': '71. 基于 access_token 和 refresh_token 实现登录状态无感刷新',
          'link': '/Nest 通关秘籍/71. 基于 access_token 和 refresh_token 实现登录状态无感刷新.md'
        },
        {
          'text': '72. 单 token 无限续期，实现登录状态无感刷新',
          'link': '/Nest 通关秘籍/72. 单 token 无限续期，实现登录状态无感刷新.md'
        },
        {
          'text': '73. 使用 passport 做身份认证',
          'link': '/Nest 通关秘籍/73. 使用 passport 做身份认证.md'
        },
        {
          'text': '74. passport 实现 GitHub 三方账号登录',
          'link': '/Nest 通关秘籍/74. passport 实现 GitHub 三方账号登录.md'
        },
        {
          'text': '75. passport 实现 Google 三方账号登录',
          'link': '/Nest 通关秘籍/75. passport 实现 Google 三方账号登录.md'
        },
        {
          'text': '76. 为什么要使用 Docker Compose ？',
          'link': '/Nest 通关秘籍/76. 为什么要使用 Docker Compose ？.md'
        },
        {
          'text': '77. Docker 容器通信的最简单方式：桥接网络',
          'link': '/Nest 通关秘籍/77. Docker 容器通信的最简单方式：桥接网络.md'
        },
        {
          'text': '78. Docker 支持重启策略，是否还需要 PM2',
          'link': '/Nest 通关秘籍/78. Docker 支持重启策略，是否还需要 PM2.md'
        },
        {
          'text': '79. 快速掌握 Nginx 的 2 大核心用法',
          'link': '/Nest 通关秘籍/79. 快速掌握 Nginx 的 2 大核心用法.md'
        },
        {
          'text': '80. 基于 Nginx 实现灰度系统',
          'link': '/Nest 通关秘籍/80. 基于 Nginx 实现灰度系统.md'
        },
        {
          'text': '81. 基于 Redis 实现分布式 session',
          'link': '/Nest 通关秘籍/81. 基于 Redis 实现分布式 session.md'
        },
        {
          'text': '82. Redis + 高德地图，实现附近的充电宝',
          'link': '/Nest 通关秘籍/82. Redis + 高德地图，实现附近的充电宝.md'
        },
        {
          'text': '83. 用 Swagger 自动生成 api 文档',
          'link': '/Nest 通关秘籍/83. 用 Swagger 自动生成 api 文档.md'
        },
        {
          'text': '84. 如何灵活创建 DTO',
          'link': '/Nest 通关秘籍/84. 如何灵活创建 DTO.md'
        },
        {
          'text': '85. class- validator 的内置装饰器，如何自定义装饰器',
          'link': '/Nest 通关秘籍/85. class- validator 的内置装饰器，如何自定义装饰器.md'
        },
        {
          'text': '86.  序列化 Entity，你不需要 VO 对象',
          'link': '/Nest 通关秘籍/86.  序列化 Entity，你不需要 VO 对象.md'
        },
        {
          'text': '87. 手写序列化 Entity 的拦截器',
          'link': '/Nest 通关秘籍/87. 手写序列化 Entity 的拦截器.md'
        },
        {
          'text': '88. 使用 compodoc 生成文档',
          'link': '/Nest 通关秘籍/88. 使用 compodoc 生成文档.md'
        },
        {
          'text': '89. Node 如何发邮件？',
          'link': '/Nest 通关秘籍/89. Node 如何发邮件？.md'
        },
        {
          'text': '90. 实现基于邮箱验证码的登录',
          'link': '/Nest 通关秘籍/90. 实现基于邮箱验证码的登录.md'
        },
        {
          'text': '91. 定时任务 + Redis 实现阅读量计数',
          'link': '/Nest 通关秘籍/91. 定时任务 + Redis 实现阅读量计数.md'
        },
        {
          'text': '92. Nest 的 3 种定时任务',
          'link': '/Nest 通关秘籍/92. Nest 的 3 种定时任务.md'
        },
        {
          'text': '93. Nest 里如何实现事件通信？',
          'link': '/Nest 通关秘籍/93. Nest 里如何实现事件通信？.md'
        },
        {
          'text': '94. HttpModule + pinyin 实现天气预报查询服务',
          'link': '/Nest 通关秘籍/94. HttpModule + pinyin 实现天气预报查询服务.md'
        },
        {
          'text': '95. 如何记录请求日志',
          'link': '/Nest 通关秘籍/95. 如何记录请求日志.md'
        },
        {
          'text': '96. 短链服务？自己写一个',
          'link': '/Nest 通关秘籍/96. 短链服务？自己写一个.md'
        },
        {
          'text': '97. Nest 实现 Server Sent Event 数据推送',
          'link': '/Nest 通关秘籍/97. Nest 实现 Server Sent Event 数据推送.md'
        },
        {
          'text': '98. 用 minio 自己搭一个 OSS 服务',
          'link': '/Nest 通关秘籍/98. 用 minio 自己搭一个 OSS 服务.md'
        },
        {
          'text': '99. 前端如何直传文件到 Minio',
          'link': '/Nest 通关秘籍/99. 前端如何直传文件到 Minio.md'
        },
        {
          'text': '100. 基于 sharp 实现 gif 压缩工具',
          'link': '/Nest 通关秘籍/100. 基于 sharp 实现 gif 压缩工具.md'
        },
        {
          'text': '101. 大文件如何实现流式下载？',
          'link': '/Nest 通关秘籍/101. 大文件如何实现流式下载？.md'
        },
        {
          'text': '102. Puppeteer 实现爬虫，爬取 BOSS 直聘全部前端岗位',
          'link': '/Nest 通关秘籍/102. Puppeteer 实现爬虫，爬取 BOSS 直聘全部前端岗位.md'
        },
        {
          'text': '103. 实现扫二维码登录',
          'link': '/Nest 通关秘籍/103. 实现扫二维码登录.md'
        },
        {
          'text': '104. Nest 的 REPL 模式',
          'link': '/Nest 通关秘籍/104. Nest 的 REPL 模式.md'
        },
        {
          'text': '105. 实现 Excel 导入导出',
          'link': '/Nest 通关秘籍/105. 实现 Excel 导入导出.md'
        },
        {
          'text': '106. 如何用代码动态生成 PPT',
          'link': '/Nest 通关秘籍/106. 如何用代码动态生成 PPT.md'
        },
        {
          'text': '107. 如何拿到服务器 CPU、内存、磁盘状态',
          'link': '/Nest 通关秘籍/107. 如何拿到服务器 CPU、内存、磁盘状态.md'
        },
        {
          'text': '108. Nest 如何实现国际化？',
          'link': '/Nest 通关秘籍/108. Nest 如何实现国际化？.md'
        },
        {
          'text': '109. 会议室预订系统：需求分析和原型图',
          'link': '/Nest 通关秘籍/109. 会议室预订系统：需求分析和原型图.md'
        },
        {
          'text': '110. 会议室预订系统：技术方案和数据库设计',
          'link': '/Nest 通关秘籍/110. 会议室预订系统：技术方案和数据库设计.md'
        },
        {
          'text': '111. 会议室预订系统：用户管理模块--用户注册',
          'link': '/Nest 通关秘籍/111. 会议室预订系统：用户管理模块--用户注册.md'
        },
        {
          'text': '112. 会议室预订系统：用户管理模块--配置抽离、登录认证鉴权',
          'link': '/Nest 通关秘籍/112. 会议室预订系统：用户管理模块--配置抽离、登录认证鉴权.md'
        },
        {
          'text': '113. 会议室预订系统：用户管理模块-- interceptor、修改信息接口',
          'link': '/Nest 通关秘籍/113. 会议室预订系统：用户管理模块-- interceptor、修改信息接口.md'
        },
        {
          'text': '114. 会议室预订系统：用户管理模块--用户列表和分页查询',
          'link': '/Nest 通关秘籍/114. 会议室预订系统：用户管理模块--用户列表和分页查询.md'
        },
        {
          'text': '115. 会议室预订系统：用户管理模块-- swagger 接口文档',
          'link': '/Nest 通关秘籍/115. 会议室预订系统：用户管理模块-- swagger 接口文档.md'
        },
        {
          'text': '116. 会议室预订系统：用户管理模块-- 用户端登录注册页面',
          'link': '/Nest 通关秘籍/116. 会议室预订系统：用户管理模块-- 用户端登录注册页面.md'
        },
        {
          'text': '117. 会议室预订系统：用户管理模块-- 用户端信息修改页面',
          'link': '/Nest 通关秘籍/117. 会议室预订系统：用户管理模块-- 用户端信息修改页面.md'
        },
        {
          'text': '118. 会议室预订系统：用户管理模块-- 头像上传',
          'link': '/Nest 通关秘籍/118. 会议室预订系统：用户管理模块-- 头像上传.md'
        },
        {
          'text': '119. 会议室预订系统：用户管理模块-- 管理端用户列表页面',
          'link': '/Nest 通关秘籍/119. 会议室预订系统：用户管理模块-- 管理端用户列表页面.md'
        },
        {
          'text': '120. 会议室预订系统：用户管理模块-- 管理端信息修改页面',
          'link': '/Nest 通关秘籍/120. 会议室预订系统：用户管理模块-- 管理端信息修改页面.md'
        },
        {
          'text': '121. 会议室预订系统：会议室管理模块-后端开发',
          'link': '/Nest 通关秘籍/121. 会议室预订系统：会议室管理模块-后端开发.md'
        },
        {
          'text': '122. 会议室预订系统：会议室管理模块-管理端前端开发',
          'link': '/Nest 通关秘籍/122. 会议室预订系统：会议室管理模块-管理端前端开发.md'
        },
        {
          'text': '123. 会议室预订系统：会议室管理模块-用户端前端开发',
          'link': '/Nest 通关秘籍/123. 会议室预订系统：会议室管理模块-用户端前端开发.md'
        },
        {
          'text': '124. 会议室预订系统：预定管理模块-后端开发',
          'link': '/Nest 通关秘籍/124. 会议室预订系统：预定管理模块-后端开发.md'
        },
        {
          'text': '125. 会议室预订系统：预定管理模块-管理端前端开发',
          'link': '/Nest 通关秘籍/125. 会议室预订系统：预定管理模块-管理端前端开发.md'
        },
        {
          'text': '126. 会议室预订系统：预定管理模块-用户端前端开发',
          'link': '/Nest 通关秘籍/126. 会议室预订系统：预定管理模块-用户端前端开发.md'
        },
        {
          'text': '127. 会议室预订系统：统计管理模块-后端开发',
          'link': '/Nest 通关秘籍/127. 会议室预订系统：统计管理模块-后端开发.md'
        },
        {
          'text': '128. 会议室预订系统：统计管理模块-前端开发',
          'link': '/Nest 通关秘籍/128. 会议室预订系统：统计管理模块-前端开发.md'
        },
        {
          'text': '129. 会议室预订系统：后端项目部署到阿里云',
          'link': '/Nest 通关秘籍/129. 会议室预订系统：后端项目部署到阿里云.md'
        },
        {
          'text': '130. 会议室预订系统：前端项目部署到阿里云',
          'link': '/Nest 通关秘籍/130. 会议室预订系统：前端项目部署到阿里云.md'
        },
        {
          'text': '131. 会议室预定系统：用 migration 初始化表和数据',
          'link': '/Nest 通关秘籍/131. 会议室预定系统：用 migration 初始化表和数据.md'
        },
        {
          'text': '132. 会议室预定系统：文件上传 OSS',
          'link': '/Nest 通关秘籍/132. 会议室预定系统：文件上传 OSS.md'
        },
        {
          'text': '133. 会议室预定系统：Google 账号登录后端开发',
          'link': '/Nest 通关秘籍/133. 会议室预定系统：Google 账号登录后端开发.md'
        },
        {
          'text': '134. 会议室预定系统：Google 账号登录前端开发',
          'link': '/Nest 通关秘籍/134. 会议室预定系统：Google 账号登录前端开发.md'
        },
        {
          'text': '135. 会议室预定系统：后端代码优化',
          'link': '/Nest 通关秘籍/135. 会议室预定系统：后端代码优化.md'
        },
        {
          'text': '136. 会议室预定系统：集成日志框架 winston',
          'link': '/Nest 通关秘籍/136. 会议室预定系统：集成日志框架 winston.md'
        },
        {
          'text': '137. 会议室预定系统：前端代码优化',
          'link': '/Nest 通关秘籍/137. 会议室预定系统：前端代码优化.md'
        },
        {
          'text': '138. 会议室预定系统：全部功能测试',
          'link': '/Nest 通关秘籍/138. 会议室预定系统：全部功能测试.md'
        },
        {
          'text': '139. 会议室预定系统：项目总结',
          'link': '/Nest 通关秘籍/139. 会议室预定系统：项目总结.md'
        },
        {
          'text': '140. Nest 如何创建微服务？',
          'link': '/Nest 通关秘籍/140. Nest 如何创建微服务？.md'
        },
        {
          'text': '141. Nest 的 Monorepo 和 Library',
          'link': '/Nest 通关秘籍/141. Nest 的 Monorepo 和 Library.md'
        },
        {
          'text': '142. 用 Etcd 实现微服务配置中心和注册中心',
          'link': '/Nest 通关秘籍/142. 用 Etcd 实现微服务配置中心和注册中心.md'
        },
        {
          'text': '143. Nest 集成 Etcd 做注册中心、配置中心',
          'link': '/Nest 通关秘籍/143. Nest 集成 Etcd 做注册中心、配置中心.md'
        },
        {
          'text': '144. 用 Nacos 实现微服务配置中心和注册中心',
          'link': '/Nest 通关秘籍/144. 用 Nacos 实现微服务配置中心和注册中心.md'
        },
        {
          'text': '145. 基于 gRPC 实现跨语言的微服务通信',
          'link': '/Nest 通关秘籍/145. 基于 gRPC 实现跨语言的微服务通信.md'
        },
        {
          'text': '146. 快速入门 ORM 框架 Prisma ',
          'link': '/Nest 通关秘籍/146. 快速入门 ORM 框架 Prisma .md'
        },
        {
          'text': '147. Prisma 的全部命令',
          'link': '/Nest 通关秘籍/147. Prisma 的全部命令.md'
        },
        {
          'text': '148. Prisma 的全部 schema 语法',
          'link': '/Nest 通关秘籍/148. Prisma 的全部 schema 语法.md'
        },
        {
          'text': '149. Primsa Client 单表 CRUD 的全部 api',
          'link': '/Nest 通关秘籍/149. Primsa Client 单表 CRUD 的全部 api.md'
        },
        {
          'text': '150. Prisma Client 多表 CRUD 的全部 api',
          'link': '/Nest 通关秘籍/150. Prisma Client 多表 CRUD 的全部 api.md'
        },
        {
          'text': '151. 在 Nest 里集成 Prisma',
          'link': '/Nest 通关秘籍/151. 在 Nest 里集成 Prisma.md'
        },
        {
          'text': '152. 为什么前端监控系统要用 RabbitMQ？',
          'link': '/Nest 通关秘籍/152. 为什么前端监控系统要用 RabbitMQ？.md'
        },
        {
          'text': '153. 基于 Redis 实现关注关系',
          'link': '/Nest 通关秘籍/153. 基于 Redis 实现关注关系.md'
        },
        {
          'text': '154. 基于 Redis 实现各种排行榜（周榜、月榜、年榜）',
          'link': '/Nest 通关秘籍/154. 基于 Redis 实现各种排行榜（周榜、月榜、年榜）.md'
        },
        {
          'text': '155. 考试系统：需求分析',
          'link': '/Nest 通关秘籍/155. 考试系统：需求分析.md'
        },
        {
          'text': '156. 考试系统：技术方案和数据库设计',
          'link': '/Nest 通关秘籍/156. 考试系统：技术方案和数据库设计.md'
        },
        {
          'text': '157. 考试系统：微服务、Lib 拆分',
          'link': '/Nest 通关秘籍/157. 考试系统：微服务、Lib 拆分.md'
        },
        {
          'text': '158. 考试系统；用户注册',
          'link': '/Nest 通关秘籍/158. 考试系统；用户注册.md'
        },
        {
          'text': '159. 考试系统：用户登录、修改密码',
          'link': '/Nest 通关秘籍/159. 考试系统：用户登录、修改密码.md'
        },
        {
          'text': '160. 考试系统：考试微服务',
          'link': '/Nest 通关秘籍/160. 考试系统：考试微服务.md'
        },
        {
          'text': '161. 考试系统：登录、注册页面',
          'link': '/Nest 通关秘籍/161. 考试系统：登录、注册页面.md'
        },
        {
          'text': '162. 考试系统：修改密码、试卷列表页面',
          'link': '/Nest 通关秘籍/162. 考试系统：修改密码、试卷列表页面.md'
        },
        {
          'text': '163. 考试系统：新增试卷、回收站',
          'link': '/Nest 通关秘籍/163. 考试系统：新增试卷、回收站.md'
        },
        {
          'text': '164. 考试系统：试卷编辑器',
          'link': '/Nest 通关秘籍/164. 考试系统：试卷编辑器.md'
        },
        {
          'text': '165. 考试系统：试卷回显、预览、保存',
          'link': '/Nest 通关秘籍/165. 考试系统：试卷回显、预览、保存.md'
        },
        {
          'text': '166. 考试系统：答卷微服务',
          'link': '/Nest 通关秘籍/166. 考试系统：答卷微服务.md'
        },
        {
          'text': '167. 考试系统：答题页面',
          'link': '/Nest 通关秘籍/167. 考试系统：答题页面.md'
        },
        {
          'text': '168. 考试系统：自动判卷',
          'link': '/Nest 通关秘籍/168. 考试系统：自动判卷.md'
        },
        {
          'text': '169. 考试系统：分析微服务、排行榜页面',
          'link': '/Nest 通关秘籍/169. 考试系统：分析微服务、排行榜页面.md'
        },
        {
          'text': '170. 考试系统：整体测试',
          'link': '/Nest 通关秘籍/170. 考试系统：整体测试.md'
        },
        {
          'text': '171. 考试系统：项目总结',
          'link': '/Nest 通关秘籍/171. 考试系统：项目总结.md'
        },
        {
          'text': '172. 用 Node.js 手写 WebSocket 协议',
          'link': '/Nest 通关秘籍/172. 用 Node.js 手写 WebSocket 协议.md'
        },
        {
          'text': '173. Nest 开发 WebSocket 服务',
          'link': '/Nest 通关秘籍/173. Nest 开发 WebSocket 服务.md'
        },
        {
          'text': '174. 基于 Socket.io 的 room 实现群聊',
          'link': '/Nest 通关秘籍/174. 基于 Socket.io 的 room 实现群聊.md'
        },
        {
          'text': '175. 聊天室：需求分析和原型图',
          'link': '/Nest 通关秘籍/175. 聊天室：需求分析和原型图.md'
        },
        {
          'text': '176. 聊天室：技术选型和数据库设计',
          'link': '/Nest 通关秘籍/176. 聊天室：技术选型和数据库设计.md'
        },
        {
          'text': '177. 聊天室：用户注册',
          'link': '/Nest 通关秘籍/177. 聊天室：用户注册.md'
        },
        {
          'text': '178. 聊天室：用户登录',
          'link': '/Nest 通关秘籍/178. 聊天室：用户登录.md'
        },
        {
          'text': '179. 聊天室：修改密码、修改信息',
          'link': '/Nest 通关秘籍/179. 聊天室：修改密码、修改信息.md'
        },
        {
          'text': '180. 聊天室：好友列表、发送好友申请',
          'link': '/Nest 通关秘籍/180. 聊天室：好友列表、发送好友申请.md'
        },
        {
          'text': '181. 聊天室：创建聊天室、加入群聊',
          'link': '/Nest 通关秘籍/181. 聊天室：创建聊天室、加入群聊.md'
        },
        {
          'text': '182. 聊天室：登录、注册页面开发',
          'link': '/Nest 通关秘籍/182. 聊天室：登录、注册页面开发.md'
        },
        {
          'text': '183. 聊天室：修改密码、信息页面开发',
          'link': '/Nest 通关秘籍/183. 聊天室：修改密码、信息页面开发.md'
        },
        {
          'text': '184. 聊天室：头像上传',
          'link': '/Nest 通关秘籍/184. 聊天室：头像上传.md'
        },
        {
          'text': '185. 聊天室：好友∕群聊列表页面',
          'link': '/Nest 通关秘籍/185. 聊天室：好友∕群聊列表页面.md'
        },
        {
          'text': '186. 聊天室：添加好友弹窗、通知页面',
          'link': '/Nest 通关秘籍/186. 聊天室：添加好友弹窗、通知页面.md'
        },
        {
          'text': '187. 聊天室：聊天功能后端开发',
          'link': '/Nest 通关秘籍/187. 聊天室：聊天功能后端开发.md'
        },
        {
          'text': '188. 聊天室：聊天功能前端开发',
          'link': '/Nest 通关秘籍/188. 聊天室：聊天功能前端开发.md'
        },
        {
          'text': '189. 聊天室：一对一聊天',
          'link': '/Nest 通关秘籍/189. 聊天室：一对一聊天.md'
        },
        {
          'text': '190. 聊天室：创建群聊、进入群聊',
          'link': '/Nest 通关秘籍/190. 聊天室：创建群聊、进入群聊.md'
        },
        {
          'text': '191. 聊天室：发送表情、图片、文件',
          'link': '/Nest 通关秘籍/191. 聊天室：发送表情、图片、文件.md'
        },
        {
          'text': '192. 聊天室：收藏',
          'link': '/Nest 通关秘籍/192. 聊天室：收藏.md'
        },
        {
          'text': '193. 聊天室：全部功能测试',
          'link': '/Nest 通关秘籍/193. 聊天室：全部功能测试.md'
        },
        {
          'text': '194. 聊天室：项目总结',
          'link': '/Nest 通关秘籍/194. 聊天室：项目总结.md'
        },
        {
          'text': '195. MongoDB 快速入门',
          'link': '/Nest 通关秘籍/195. MongoDB 快速入门.md'
        },
        {
          'text': '196. 使用 mongoose 操作 MongoDB 数据库',
          'link': '/Nest 通关秘籍/196. 使用 mongoose 操作 MongoDB 数据库.md'
        },
        {
          'text': '197. GraphQL 快速入门',
          'link': '/Nest 通关秘籍/197. GraphQL 快速入门.md'
        },
        {
          'text': '198. Nest 开发 GraphQL 服务：实现 CRUD',
          'link': '/Nest 通关秘籍/198. Nest 开发 GraphQL 服务：实现 CRUD.md'
        },
        {
          'text': '199. GraphQL + Primsa + React 实现 TodoList',
          'link': '/Nest 通关秘籍/199. GraphQL + Primsa + React 实现 TodoList.md'
        },
        {
          'text': '200. 如何调试 Nest 源码？',
          'link': '/Nest 通关秘籍/200. 如何调试 Nest 源码？.md'
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
  },
})
