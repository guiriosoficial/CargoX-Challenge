import { describe, it, expect, vi, beforeEach } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import App from '@/App.vue'
import { usePageStore } from '@/store/page'

vi.mock('@/components/CxHeader.vue', () => ({
  default: {
    name: 'CxHeader',
    template: '<header class="cx-header-stub" />'
  }
}))

describe('App', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should render the app container', () => {
    const wrapper = shallowMount(App, {
      global: {
        plugins: [createPinia()],
        stubs: {
          RouterView: {
            template: '<div class="router-view-stub"><slot :Component="component" /></div>',
            data() {
              return {
                component: {
                  template: '<div class="route-component-stub" />'
                }
              }
            }
          },
          Transition: false
        }
      }
    })

    expect(wrapper.find('.main-container').exists()).toBe(true)
  })

  it('should render header when hidePageHeader is false', () => {
    const pageStore = usePageStore()
    pageStore.hidePageHeader = false

    const wrapper = shallowMount(App, {
      global: {
        plugins: [createPinia()],
        stubs: {
          RouterView: {
            template: '<div class="router-view-stub"><slot :Component="component" /></div>',
            data() {
              return {
                component: {
                  template: '<div class="route-component-stub" />'
                }
              }
            }
          },
          Transition: false
        }
      }
    })

    expect(wrapper.find('.cx-header-stub').exists()).toBe(true)
  })

  it('should not render header when hidePageHeader is true', () => {
    const pageStore = usePageStore()
    pageStore.hidePageHeader = true

    const wrapper = shallowMount(App, {
      global: {
        plugins: [createPinia()],
        stubs: {
          RouterView: {
            template: '<div class="router-view-stub"><slot :Component="component" /></div>',
            data() {
              return {
                component: {
                  template: '<div class="route-component-stub" />'
                }
              }
            }
          },
          Transition: false
        }
      }
    })

    expect(wrapper.find('.cx-header-stub').exists()).toBe(false)
  })
})
