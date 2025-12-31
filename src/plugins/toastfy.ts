import Vue3Toastify, { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css';

const toastOptions = {
  autoClose: 4000,
  position: 'top-right',
  hideProgressBar: true,
}

export { toastOptions, toast }
export default Vue3Toastify
