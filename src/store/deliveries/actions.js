import axios from '@/plugins/axios'

// return new Promise((resolve, reject) => {
//   axios.get('e5072b7e-46a2-461e-8338-0f55325bf893')
//     .then(response => {
//       commit('setDeliveries', response.data)
//       resolve(response.data)
//     })
//     .catch(error => reject(error))
//     .finally(() => commit('setIsLoadingDeliveries', false))
// })
// }

export default {
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
  setDeliveries (deliveries) {
    this.deliveries = deliveries
  }
}
