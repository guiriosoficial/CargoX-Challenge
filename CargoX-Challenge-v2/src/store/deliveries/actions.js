import axios from '@/plugins/axios'

export default {
  getDeliveries: ({ commit }) => {
    commit('setIsLoadingDeliveries', true)

    return new Promise((resolve, reject) => {
      axios.get('e5072b7e-46a2-461e-8338-0f55325bf893')
        .then(response => {
          commit('setDeliveries', response.data)
          resolve(response.data)
        })
        .catch(error => reject(error))
        .finally(() => commit('setIsLoadingDeliveries', false))
    })
  }
}
