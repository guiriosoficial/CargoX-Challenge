export default {
  getDelivery: (state) => state.delivery,
  getRoute: (state) => {
    const { origin, destination, trucker } = state.delivery
    return {
      origin,
      destination,
      lastAppUpdateAt: trucker?.last_app_update_at
    }
  },
  getCostumer: (state) => state.delivery.customer || {},
  getIsLoadingDelivery: (state) => state.isLoadingDelivery
}
