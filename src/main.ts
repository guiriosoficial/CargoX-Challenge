import { createApp } from 'vue'
import CxIcon from '@/components/CxIcon.vue'
import App from '@/App.vue'
import { router } from '@/router'
import { pinia } from '@/store'
import { i18n } from '@/plugins/i18n'
import { vue3Toastify, toastOptions } from '@/plugins/notify'
import '@/plugins/registerServiceWorker'
import '@/plugins/fa'
import '@/styles/core.scss'

createApp(App)
  .use(pinia)
  .use(router)
  .use(i18n)
  .use(vue3Toastify, toastOptions)
  .component('CxIcon', CxIcon)
  .mount('#app')

