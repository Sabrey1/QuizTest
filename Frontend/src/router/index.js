import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'subject',
    component: () => import('@/Subject/subject.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/Home/Home.vue')
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: () => import('@/Quiz/Quiz.vue')
  },
  {
  path: '/quiz/:id',
  name: 'QuizDetail',
  component: () => import('@/Quiz/Quiz.vue'),
  props: true
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
