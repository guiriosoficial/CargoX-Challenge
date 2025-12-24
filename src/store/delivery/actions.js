import axios from '@/plugins/axios'

// return new Promise((resolve, reject) => {
//   axios.get(deliveryId)
//     .then(response => {
//       commit('setDelivery', response.data)
//       resolve(response.data)
//     })
//     .catch(error => reject(error))
//     .finally(() => commit('setIsLoadingDelivery', false))
// })

export default {
  getDelivery (deliveryId) {
    this.isLoadingDelivery = true

    this.setDelivery(
      {
        "id": 204058,
        "customer_tracking_number": 276375,
        "customer": {
          "name": "Shawn Champlin",
          "id": 430810
        },
        "trucker": {
          "id": 609096,
          "name": "Maryann Hessel",
          "phone": "(12) 99198-2668",
          "last_app_update_at": "2025-06-13T14:13:58.248Z",
          "last_app_open_at": "2023-10-27T14:30:00Z",
          "last_app_position_at": "2023-10-27T14:35:00Z",
          "first_login_at": "2023-01-15T10:00:00Z",
          "app_version": "2.4.1"
        },
        "trucks": [
          {
            "plate": "ABC-1234",
            "type": {
              "id": null,
              "name": "Caminhão Baú"
            }
          },
          {
            "plate": "DEF-5678",
            "type": {
              "id": null,
              "name": "Van"
            }
          }
        ],
        "origin": {
          "address": "Rua das Indústrias",
          "number": "500",
          "city": "São Paulo",
          "state": "SP",
          "zip_code": "01234-567",
          "latitude": -23.5505,
          "longitude": -46.6333,
        },
        "destination": {
          "address": "Av. Porto Marítimo",
          "number": "sn",
          "city": "Santos",
          "state": "SP",
          "zip_code": "11000-000",
          "latitude": -23.9608,
          "longitude": -46.3339,
        },
        "trucker_seeker": {
          "name": "Operador Logístico Alpha",
          "id": 101559
        },
        "salesperson": {
          "name": "Maria Vendedora",
          "id": 101218
        },
        "pickup_date": "2025-06-13T14:13:58.247Z",
        "delivery_date": "2025-06-13T14:13:58.248Z",
        "estimated_time_of_arrival": "2023-10-28T16:00:00Z",
        "manual_input_estimated_time_of_arrival": "2023-10-28T17:30:00Z",
        "documents": [
          {
            "name": "cte",
            "status": "emitted",
            "at": "2025-06-13T07:04:38.471Z"
          },
          {
            "name": "mdfe",
            "status": "ok",
            "at": "2025-06-12T17:34:51.673Z"
          },
          {
            "name": "ct",
            "status": "",
            "at": ""
          },
          {
            "name": "ciot",
            "status": "",
            "at": ""
          },
        ],
        "payments": [
          {
            "name": "canh",
            "status": "emitted",
            "at": "2025-06-12T14:22:59.637Z"
          },
          {
            "name": "canh",
            "status": "ok",
            "at": "2025-06-13T10:42:52.147Z"
          },
          {
            "name": "sald",
            "status": "",
            "at": ""
          }
        ],
        "status_history": [
          {
            "status": "scheduled",
            "translation": "Agendado",
            "at": "2025-06-13T10:42:52.147Z"
          },
          {
            "status": "going-collect",
            "translation": "Indo Coletar",
            "at": "2025-06-13T10:42:52.147Z"
          },
          {
            "status": "queue",
            "translation": "Fila coleta",
            "at": ""
          },
          {
            "status": "chargind",
            "translation": "Carregando",
            "at": ""
          },
          // { "status": "created", "translation": "Pedido Criado", "at": "2023-10-25T10:00:00Z" },
          // { "status": "in_transit", "translation": "Em Trânsito", "at": "2023-10-26T08:30:00Z" }
        ]
      }
    )

    this.isLoadingDelivery = false
  },
  setDelivery (payload) {
    this.delivery = payload
  },
  clearDelivery ()  {
    this.delivery = {}
  }
}
