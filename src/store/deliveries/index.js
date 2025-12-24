import getters from './getters'
import actions from './actions'
import state from './state'

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
    getDeliveries () {
      this.isLoadingDeliveries = true

      this.setDeliveries(
        [
          {
            "id": 204058,
            "customer_tracking_number": 276377,
            "customer": {
              "id": 430855,
              "name": "Javier Bailey"
            },
            "last_status": {
              "translation": "Entregue",
              "status": "delivered"
            }
          },
          {
            "id": 204065,
            "customer_tracking_number": 276357,
            "customer": {
              "id": 430850,
              "name": "Peggy Pollich"
            },
            "last_status": {
              "translation": "Agendado",
              "status": "scheduled"
            }
          },
          {
            "id": 204060,
            "customer_tracking_number": 276367,
            "customer": {
              "id": 430840,
              "name": "Matthew Cormier"
            },
            "last_status": {
              "translation": "Em Trânsito",
              "status": "in_transit"
            }
          }
        ]
      )

      this.isLoadingDeliveries = false
    },
    setDeliveries (payload) {
      this.deliveries = payload
    }
  }
})
