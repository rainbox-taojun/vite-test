import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite' // icon
import IconsResolver from 'unplugin-icons/resolver' // icon自动导入
import { viteMockServe } from 'vite-plugin-mock'

const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default ({ command }) => {
  return {
    resolve: {
      alias: {
        '@': pathSrc
      }
    },
    server: {
      proxy: {
        '/dev-api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/dev-api/, '')
        }
      }
    },
    plugins: [
      vue(),
      vueJsx(),
      VueSetupExtend(),
      AutoImport({
        imports: ['vue', 'vue-router'],
        resolvers: [
          ElementPlusResolver(),
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
        dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
      }),
      Components({
        dirs: ['src/components', 'src/components/*/'],
        deep: false,
        extensions: ['vue'],
        include: [/\.vue$/, /\.vue\?vue/],
        resolvers: [
          IconsResolver({
            enabledCollections: ['ep'],
          }),
          ElementPlusResolver({
            importStyle: 'sass',
          }),
        ],
        dts: 'src/components.d.ts',
      }),
      Icons({
        autoInstall: true,
      }),
      viteMockServe({
        supportTs: false,
        // default
        mockPath: 'mock',
        localEnabled: command === 'serve',
        prodEnabled: command !== 'serve' && prodMock,
        injectCode: `
          import { setupProdMockServer } from '/build/mock/mockProdServer';
          setupProdMockServer();
        `,
      }),
    ]
  }
}
