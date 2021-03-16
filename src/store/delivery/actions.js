import axios from '@/plugins/axios'

export default {
  getDelivery: ({ commit }, deliveryId) => {
    commit('setIsLoadingDelivery', true)

    return new Promise((resolve, reject) => {
      axios.get(deliveryId)
        .then(response => {
          commit('setDelivery', response)
          resolve(response.data)
        })
        .catch(error => reject(error))
        .finally(() => commit('setIsLoadingDelivery', false))
    })
  },

  clearDelivery: ({ commit }) => {
    commit('clearDelivery')
  }
}
