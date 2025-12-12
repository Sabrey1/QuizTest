import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/Home/Home.vue')
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: () => import('@/Quiz/Quiz.vue')
  },
  {
    path: '/result',
    name: 'Result',
    component: () => import('@/Result/result.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
