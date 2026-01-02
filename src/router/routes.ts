const FreightSummary = () => import('@/views/freightSummary/FreightSummaryView.vue')
const FreightDetails = () => import('@/views/freightDetails/FreightDetailsView.vue')
const NotFound = () => import('@/views/NotFound.vue')

const routes = [
  {
    path: '/',
    name: 'FreightSummary',
    component: FreightSummary
  },
  {
    path: '/freight/:id',
    name: 'FreightDetails',
    component: FreightDetails
  },
  {
    path: '/freight',
    redirect: '/'
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound
  }
]

export { routes }
