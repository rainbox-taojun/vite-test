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
import { svgBuilder } from './build/svg/svgBuilder.ts'

const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default ({ command }) => {
  let prodMock = false
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
        },
        '/basic': {
          target: 'http://122.228.7.96:10010/',
          changeOrigin: true,
          pathRewrite: { '^/basic': '' },
          secure: false
        }
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/element/index.scss" as *;`
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
            prefix: 'Icon'
          })
        ],
        dts: path.resolve(pathSrc, 'auto-imports.d.ts')
      }),
      Components({
        dirs: ['src/components', 'src/components/*/'],
        deep: false,
        extensions: ['vue'],
        include: [/\.vue$/, /\.vue\?vue/],
        resolvers: [
          IconsResolver({
            enabledCollections: ['ep']
          }),
          ElementPlusResolver({
            importStyle: 'sass'
          })
        ],
        dts: 'src/components.d.ts'
      }),
      Icons({
        autoInstall: true
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
        `
      }),
      svgBuilder('./src/icons/svg/')
    ]
  }
}


http://122.228.7.96:10010/basic/driver/map/list?orgcode=1.1.14.
http://localhost:3000/basic/driver/map/list?orgcode=1.1.14.