import { createRouter, createWebHistory } from 'vue-router'

import IndexPage from '@/pages/IndexPage.vue'

const routes = [
  {
    path: '/',
    component: IndexPage,
    meta: {
      title: '汽车渲染',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
