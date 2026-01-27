import { createI18n } from 'vue-i18n'
import pt_br from '@/locales/pt-br'
import en_us from '@/locales/en-us'

function getInitialLocale() {
  const savedLocale = localStorage.getItem('cx-user-locale');
  if (savedLocale) return savedLocale;

  const navLang = navigator.language || 'pt-BR';

  if (navLang.startsWith('pt')) return 'pt-BR';
  if (navLang.startsWith('en')) return 'en-US';

  return import.meta.env.VITE_I18N_LOCALE || 'pt-BR';
}

export const i18n = createI18n({
  locale: getInitialLocale(),
  fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || 'en-US',
  messages: {
    'en-US': en_us,
    'pt-BR': pt_br
  }
})
