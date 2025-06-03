import { createI18n } from 'vue-i18n'
import pt_br from '@/locales/pt-br'
import en from '@/locales/en'

const i18n = createI18n({
  locale: import.meta.env.VITE_I18N_LOCALE || 'pt-br',
  fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || 'en',
  messages: { en, 'pt-br': pt_br }
})

export default i18n
