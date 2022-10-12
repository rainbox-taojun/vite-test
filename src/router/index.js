import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/gov-leaders',
    children: [
      {
        path: '/gov-leaders',
        name: 'GovLeaders',
        component: () => import(/* webpackChunkName: "gov-leaders" */ '@/views/gov-leaders/index.vue'),
        meta: { title: '党建统领' }
      }
    ]
  }
]

// 创建路由工厂方法
const createRouterFactory = () => {
  return createRouter({
    history: createWebHashHistory(),
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })
}

const router = createRouterFactory()

export default router
