import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

export const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes
})
