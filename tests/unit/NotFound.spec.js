import { shallowMount } from '@vue/test-utils'
import NotFound from '@/views/NotFound'

describe('NotFound', () => {
  const wrapper = shallowMount(NotFound)

  test('Should be render', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
