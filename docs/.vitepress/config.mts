import { copyFile } from 'node:fs/promises'
import { join } from 'node:path'
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "lubin851.github.io",
  description: "My VitePress Site",

  async buildEnd({ srcDir, outDir }) {
    await copyFile(
      join(srcDir, '.vitepress', '404-player.html'),
      join(outDir, '404.html')
    )
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
