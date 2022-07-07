import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from '@/router'
import directives from './directives'
import Icons from './icons' // 这里注册了一个组件Icon
import '@/styles/index.scss'
import 'element-plus/dist/index.css'

createApp(App)
  .use(createPinia())
  .use(router)
  .use(directives)
  .use(Icons)
  .mount('#app')
