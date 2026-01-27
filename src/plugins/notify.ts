import vue3Toastify, { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export const toastOptions = {
  autoClose: 4000,
  position: 'top-right',
  hideProgressBar: true,
}

export const notify = {
  success: (message: string) => toast.success(message),
  error: (message: string) => toast.error(message),
  info: (message: string) => toast.info(message),
  warning: (message: string) => toast.warning(message),
}

export { vue3Toastify }
