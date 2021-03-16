import { createRouter, createWebHistory } from 'vue-router'

const Deliveries = () => import('@/views/deliveries/Deliveries.vue' /* webpackChunkName: 'Deliveries' */)
const Delivery = () => import('@/views/delivery/Delivery.vue' /* webpackChunkName: 'Delivery' */)
const NotFound = () => import('@/views/NotFound.vue' /* webpackChunkName: 'NotFound' */)

const routes = [
  {
    path: '/',
    name: 'Deliveries',
    component: Deliveries
  },
  {
    path: '/delivery/:id',
    name: 'Delivery',
    component: Delivery
  },
  {
    path: '/delivery',
    redirect: '/'
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
