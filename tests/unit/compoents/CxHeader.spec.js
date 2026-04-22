import { describe, it, expect, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import CxHeader from '@/components/CxHeader.vue'

const push = vi.fn()
const mockRoute = {
  path: '/'
}

vi.mock('vue-router', () => ({
  useRouter: () => ({ push }),
  useRoute: () => mockRoute
}))

vi.mock('vue-i18n', () => ({
  useI18n: () => ({
    t: (key) => key,
    locale: { value: 'pt-BR' }
  })
}))

describe('CxHeader', () => {
  it('should render title and subtitle', () => {
    const wrapper = shallowMount(CxHeader, {
      props: {
        title: 'Título',
        subtitle: 'Subtítulo'
      },
      global: {
        stubs: ['HeaderSkeleton', 'CxLangSelect', 'CxIcon']
      }
    })

    expect(wrapper.find('.header-container__title').text()).toBe('Título')
    expect(wrapper.find('.header-container__sub-title').text()).toBe('Subtítulo')
  })

  it('should not render back button when route path is /', () => {
    const wrapper = shallowMount(CxHeader, {
      props: {
        title: 'Título'
      },
      global: {
        stubs: ['HeaderSkeleton', 'CxLangSelect', 'CxIcon']
      }
    })

    expect(wrapper.find('button').exists()).toBe(false)
  })

  it('should render back button when route path is not /', async () => {
    mockRoute.path = '/details'

    const wrapper = shallowMount(CxHeader, {
      props: {
        title: 'Título'
      },
      global: {
        stubs: ['HeaderSkeleton', 'CxLangSelect', 'CxIcon']
      }
    })

    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('should call router.push when clicking back button', async () => {
    mockRoute.path = '/details'

    const wrapper = shallowMount(CxHeader, {
      props: {
        title: 'Título'
      },
      global: {
        stubs: ['HeaderSkeleton', 'CxLangSelect', 'CxIcon']
      }
    })

    await wrapper.find('button').trigger('click')

    expect(push).toHaveBeenCalledWith({ name: 'FreightSummary' })
  })
})
