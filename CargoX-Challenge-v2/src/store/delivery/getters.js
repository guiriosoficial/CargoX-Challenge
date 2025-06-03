export default {
  getDelivery: ({ delivery }) => delivery,
  getRoute: ({ delivery }) => {
    const { origin, destination, trucker } = delivery
    return {
      origin,
      destination,
      lastAppUpdateAt: trucker?.last_app_update_at
    }
  },
  getCostumer: ({ delivery }) => delivery.customer || {},
  getIsLoadingDelivery: ({ isLoadingDelivery }) => isLoadingDelivery
}
