import { defineConfig } from 'vitepress'
import nav from "./nav";
import sidebar from "./sidebar";


// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Utility Libraries",
  // titleTemplate: "",
  description: "different small but powerful utility libraries",
  srcDir: 'src/',
  srcExclude: ['**/README.md', '**/TODO.md'],
  lastUpdated: true,
  cleanUrls: true,
  head: [
    ['link', {rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg'}],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      dark: '/utility-libraries-light.svg',
      light: '/utility-libraries-dark.svg',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/utility-libraries/' }
    ],
    search: {
      provider: "local",
    },

    // @own-files
    nav: nav,
    sidebar: sidebar,

    footer: {
      copyright: "Copyright © 2024-present Utility-Libraries",
    },
  }
})
