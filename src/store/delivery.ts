import { defineStore } from 'pinia'
import type { IDelivery, ICustomer, IRoute } from '@/types/delivery'

const STORE_ID = 'delivery'

export const useDeliveryStore = defineStore(STORE_ID, {
  state: () => ({
    route: {} as IRoute,
    customer: {} as ICustomer,
    details: {} as IDelivery,
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
  //   getCustomer: (state) => state.delivery.customer || {},
  //   getIsLoadingDelivery: (state) => state.isLoadingDelivery
  // },
  actions: {
    getDelivery (deliveryId: number): Promise<IDelivery> {
      this.isLoadingDelivery = true

      return new Promise((resolve, reject) => {
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
    setDelivery (payload: IDelivery): void {
      const { origin, destination, trucker } = payload
      this.route = {
        origin,
        destination,
        lastAppUpdateAt: trucker?.last_app_update_at
      }
      this.customer = payload.customer || {}
      this.details = payload
    },
  }
})