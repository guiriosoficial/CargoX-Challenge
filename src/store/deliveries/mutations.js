export default {
  setDeliveries: (state, { data }) => (state.deliveries = data),
  setIsLoadingDeliveries: (state, status) => (state.isLoadingDeliveries = status)
}
