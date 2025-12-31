import { defineStore } from 'pinia'
import type { IDeliverie } from '@/types/deliveries'

const STORE_ID = 'deliveries'

export const useDeliveriesStore = defineStore(STORE_ID, {
  state: () => ({
    deliveries: [] as IDeliverie[],
    isLoadingDeliveries: false
  }),
  // getters: {
  //   getDeliveries: (state) => state.deliveries || [],
  //   getIsLoadingDeliveries: (state) => state.isLoadingDeliveries
  // },
  actions: {
    getDeliveries(): Promise<IDeliverie[]> {
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
    setDeliveries(payload: IDeliverie[]): void {
      this.deliveries = payload
    }
  }
})
