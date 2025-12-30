import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store'
import i18n from '@/plugins/i18n'
import FaIcon from '@/plugins/fa'
import toast, { toastOptions } from '@/plugins/toastfy'
import './plugins/registerServiceWorker'

import '@/styles/core.scss'


createApp(App)
  .use(pinia)
  .use(router)
  .use(i18n)
  .use(toast, toastOptions)
  .component('Icon', FaIcon)
  .mount('#app')

// import { toast as toastFunc } from 'vue3-toastify';
// app.config.globalProperties.$toast = toastFunc;