import { describe, it, expect, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import NotFound from '@/views/NotFound.vue'

const push = vi.fn()

vi.mock('vue-router', () => ({
  useRouter: () => ({ push })
}))

describe('NotFound', () => {
  it('should render 404 content', () => {
    const wrapper = shallowMount(NotFound, {
      global: {
        mocks: {
          $t: (key) => key
        },
        stubs: ['CxIcon']
      }
    })

    expect(wrapper.text()).toContain('404')
  })

  it('should call go back action when button is clicked', async () => {
    const wrapper = shallowMount(NotFound, {
      global: {
        mocks: {
          $t: (key) => key
        },
        stubs: ['CxIcon']
      }
    })

    const button = wrapper.find('button')
    if (button.exists()) {
      await button.trigger('click')
    }

    expect(push).toHaveBeenCalled()
  })
})
