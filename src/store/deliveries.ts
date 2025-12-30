import { defineStore } from 'pinia'

export const useDeliveriesStore = defineStore('deliveries', {
  state: () => ({
    deliveries: [],
    isLoadingDeliveries: false
  }),
  // getters: {
  //   getDeliveries: (state) => state.deliveries || [],
  //   getIsLoadingDeliveries: (state) => state.isLoadingDeliveries
  // },
  actions: {
    getDeliveries() {
      this.isLoadingDeliveries = true

      return new Promise((resolve, reject) => {
        fetch('/mocks/deliveries.json')
          .then(async (response) => {
            const json = await response.json()
            this.setDeliveries(json)
            resolve(json)
          })
          .catch((error) => reject(error))
          .finally(() => this.isLoadingDeliveries = false)
      })
    },
    setDeliveries(payload) {
      this.deliveries = payload
    }
  }
})
