import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { ref } from 'vue'
import LangSelect from '@/components/CxLangSelect.vue'

// mock do useI18n
const locale = ref('pt-BR')

vi.mock('vue-i18n', () => ({
  useI18n: () => ({
    locale
  })
}))

function mountComponent() {
  return mount(LangSelect, {
    global: {
      mocks: {
        $t: (key: string) => key
      }
    }
  })
}

describe('LangSelect', () => {
  beforeEach(() => {
    locale.value = 'pt-BR'
    document.documentElement.lang = ''
  })

  it('renders language options', () => {
    const wrapper = mountComponent()

    const options = wrapper.findAll('option')

    expect(options).toHaveLength(2)
    expect(options[0]!.text()).toContain('Português')
    expect(options[1]!.text()).toContain('English')
  })

  it('binds select value to locale', () => {
    const wrapper = mountComponent()

    const select = wrapper.get('select')

    expect((select.element as HTMLSelectElement).value).toBe('pt-BR')
  })

  it('updates locale when selecting a new option', async () => {
    const wrapper = mountComponent()

    const select = wrapper.get('select')

    await select.setValue('en-US')

    expect(locale.value).toBe('en-US')
  })

  it('updates document lang attribute when locale changes', async () => {
    mountComponent()

    locale.value = 'en-US'

    await Promise.resolve() // flush microtask

    expect(document.documentElement.lang).toBe('en-US')
  })

  it('renders accessible label', () => {
    const wrapper = mountComponent()

    const label = wrapper.get('label')

    expect(label.attributes('for')).toBe('lang-select')
    expect(label.text()).toBe('a11y.labels.selectLanguage')
  })
})
