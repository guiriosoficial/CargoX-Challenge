export default {
  setDelivery: (state, data) => (state.delivery = data),
  clearDelivery: (state) => (state.delivery = {}),
  setIsLoadingDelivery: (state, status) => (state.isLoadingDelivery = status)
}
