import { fileURLToPath, URL } from 'node:url'
import { readFileSync } from 'node:fs'
import Vue from '@vitejs/plugin-vue'

import Unocss from 'unocss/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import VueRouter from 'vue-router/vite'
import { siteAssets, sitePages } from './src/data/site-scope.ts'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': fileURLToPath(new URL('./src/', import.meta.url)),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~/styles/element/index.scss" as *;`,
        api: 'modern-compiler',
      },
    },
  },

  plugins: [
    Inspect(),
    VueRouter({
      extensions: ['.vue'],
      filePatterns: sitePages,
      dts: 'src/route-map.d.ts',
    }),
    {
      name: 'seismic-site-assets',
      apply: 'build',
      generateBundle() {
        for (const fileName of siteAssets) {
          this.emitFile({
            type: 'asset',
            fileName,
            source: readFileSync(
              new URL(`./public/${fileName}`, import.meta.url),
            ),
          })
        }
      },
    },
    Vue(),

    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],
      dts: 'src/components.d.ts',
    }),
    Unocss(),
  ],

  ssr: {
    // TODO: workaround until they support native ESM
    noExternal: ['element-plus'],
  },
  build: {
    copyPublicDir: false,
  },

  assetsInclude: ['**/*.pdf'],
})
