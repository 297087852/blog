import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/blog/',
  title: 'My Awesome Project',
  description: 'A VitePress Site',
  vite: {
    plugins: [
      AutoSidebar({
        path: './'
      }),
    ],
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      {
        text: 'Dropdown Menu',
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
              text: '7.组件实战：迷你 Calendar ',
              link: '/React 通关秘籍/7.组件实战：迷你 Calendar .md',
            },
            {
              text: '8.组件实战：Calendar 日历组件（上）',
              link: '/React 通关秘籍/8.组件实战：Calendar 日历组件（上）.md',
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
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
})
