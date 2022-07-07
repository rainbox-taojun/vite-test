import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from '@/router'
import directives from './directives'
import '@/styles/index.scss'

createApp(App)
  .use(createPinia())
  .use(router)
  .use(directives)
  .mount('#app')
