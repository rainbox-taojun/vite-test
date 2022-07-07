import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': pathSrc
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    VueSetupExtend(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
    }),
    Components({
      // relative paths to the directory to search for components.
      dirs: ['src/components', 'src/components/*/'],
      // search for subdirectories
      deep: false,
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'src/components.d.ts',
    }),
  ]
})
