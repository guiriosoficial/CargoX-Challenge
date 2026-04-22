import { describe, it, expect, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { nextTick, ref } from 'vue'
import CxLangSelect from '@/components/CxLangSelect.vue'

const locale = ref('pt-BR')

vi.mock('vue-i18n', () => ({
  useI18n: () => ({ locale })
}))

describe('CxLangSelect', () => {
  it('should render language select', () => {
    const wrapper = shallowMount(CxLangSelect, {
      global: {
        mocks: {
          $t: (key) => key
        }
      }
    })

    expect(wrapper.find('select').exists()).toBe(true)
    expect(wrapper.findAll('option')).toHaveLength(2)
  })

  it('should update locale when select changes', async () => {
    const wrapper = shallowMount(CxLangSelect, {
      global: {
        mocks: {
          $t: (key) => key
        }
      }
    })

    await wrapper.find('select').setValue('en-US')

    expect(locale.value).toBe('en-US')
  })

  it('should update html lang attribute when locale changes', async () => {
    const wrapper = shallowMount(CxLangSelect, {
      global: {
        mocks: {
          $t: (key) => key
        }
      }
    })

    locale.value = 'en-US'
    await nextTick()

    expect(document.documentElement.lang).toBe('en-US')
    expect(wrapper.exists()).toBe(true)
  })
})
