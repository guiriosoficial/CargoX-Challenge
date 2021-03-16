import { createStore } from 'vuex'
import delivery from './delivery'
import deliveries from './deliveries'

export default createStore({
  modules: {
    delivery,
    deliveries
  }
})
