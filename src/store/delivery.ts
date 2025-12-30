import { defineStore } from 'pinia'

export const useDeliveryStore = defineStore('delivery', {
  state: () => ({
    route: {},
    costumer: {},
    details: {},
    isLoadingDelivery: false
  }),
  // getters: {
  //   getDelivery: (state) => state.delivery,
  //   getRoute: (state) => {
  //     const { origin, destination, trucker } = state.delivery
  //     return {
  //       origin,
  //       destination,
  //       lastAppUpdateAt: trucker?.last_app_update_at
  //     }
  //   },
  //   getCostumer: (state) => state.delivery.customer || {},
  //   getIsLoadingDelivery: (state) => state.isLoadingDelivery
  // },
  actions: {
    getDelivery (deliveryId) {
      this.isLoadingDelivery = true

      return new Promise((resolve, reject) => {
        // axios.get(deliveryId)
        fetch('/mocks/delivery.json')
          .then(async (response) => {
            const json = await response.json()
            this.setDelivery(json)
            resolve(json)
          })
          .catch((error) => reject(error))
          .finally(() => this.isLoadingDelivery = false)
      })
    },
    setDelivery (payload) {
      const { origin, destination, trucker } = payload
      this.route = {
        origin,
        destination,
        lastAppUpdateAt: trucker?.last_app_update_at
      }
      this.costumer = payload.customer || {}
      this.details = payload
    },
    clearDelivery ()  {
      this.delivery = {}
    }
  }
})