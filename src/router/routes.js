const Deliveries = () => import('@/views/deliveries/DeliveriesView.vue')
const Delivery = () => import('@/views/delivery/DeliveryView.vue')
const NotFound = () => import('@/views/NotFound.vue')

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

export { routes }
