import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Header from '@/components/CxHeader.vue'

// mocks do router
const push = vi.fn()

const mockRoute = {
  path: '/'
}

vi.mock('vue-router', () => ({
  useRouter: () => ({
    push
  }),
  useRoute: () => mockRoute
}))

function mountComponent(props = {}) {
  return mount(Header, {
    props,
    global: {
      mocks: {
        $t: (key: string) => key
      },
      stubs: {
        HeaderSkeleton: { template: '<div data-test="skeleton" />' },
        CxLangSelect: { template: '<div data-test="lang-select" />' },
        CxIcon: { template: '<span />' }
      }
    }
  })
}

describe('Header', () => {
  beforeEach(() => {
    push.mockClear()
    mockRoute.path = '/'
  })

  it('renders skeleton when loading', () => {
    const wrapper = mountComponent({ isLoading: true })

    expect(wrapper.find('[data-test="skeleton"]').exists()).toBe(true)
    expect(wrapper.find('header').exists()).toBe(false)
  })

  it('renders header when not loading', () => {
    const wrapper = mountComponent({
      title: 'Title',
      subtitle: 'Subtitle'
    })

    expect(wrapper.find('header').exists()).toBe(true)
    expect(wrapper.text()).toContain('Title')
    expect(wrapper.text()).toContain('Subtitle')
  })

  it('renders back button when not on root route', () => {
    mockRoute.path = '/details'

    const wrapper = mountComponent()

    expect(
      wrapper.find('.header-container__back-icon').exists()
    ).toBe(true)
  })

  it('does not render back button on root route', () => {
    mockRoute.path = '/'

    const wrapper = mountComponent()

    expect(
      wrapper.find('.header-container__back-icon').exists()
    ).toBe(false)
  })

  it('calls router.push when clicking back button', async () => {
    mockRoute.path = '/details'

    const wrapper = mountComponent()

    const button = wrapper.get('.header-container__back-icon')

    await button.trigger('click')

    expect(push).toHaveBeenCalledWith({ name: 'FreightSummary' })
  })

  it('renders language selector', () => {
    const wrapper = mountComponent()

    expect(wrapper.find('[data-test="lang-select"]').exists()).toBe(true)
  })

  it('renders accessible aria-label on back button', () => {
    mockRoute.path = '/details'

    const wrapper = mountComponent()

    const button = wrapper.get('.header-container__back-icon')

    expect(button.attributes('aria-label')).toBe('a11y.labels.goBack')
  })
})
