import axios from '@/plugins/axios'

export default {
  getDeliveries: ({ commit }) => {
    commit('setIsLoadingDeliveries', true)

    return new Promise((resolve, reject) => {
      axios.get('1e985b3b-8543-4406-b8df-dd65baac501c')
        .then(response => {
          commit('setDeliveries', response)
          resolve(response.data)
        })
        .catch(error => reject(error))
        .finally(() => commit('setIsLoadingDeliveries', false))
    })
  }
}
