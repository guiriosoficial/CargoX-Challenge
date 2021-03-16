import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from '@/plugins/i18n'
import FaIcon from '@/plugins/fa'
import Toast from 'vue-toastification'
import './registerServiceWorker'

import '@/styles/core.scss'
import 'vue-toastification/dist/index.css'

const toastOptions = {
  timeout: 4000,
  position: 'bottom-right',
  hideProgressBar: true,
  transition: 'Vue-Toastification__fade'
}

createApp(App)
  .use(store)
  .use(router)
  .use(i18n)
  .use(Toast, toastOptions)
  .component('fa', FaIcon)
  .mount('#app')
