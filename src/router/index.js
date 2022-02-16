import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/otels',
    name: 'otels',
    component: () => import('../pages/Otels.vue')
  },
  {
    path: '/rezervation/:stepId',
    name: 'Rezervation',
    component: () => import('../pages/Rezervation.vue')
  },
  {
    path: '/complete',
    name: 'Complete',
    component: () => import('../pages/complete.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
