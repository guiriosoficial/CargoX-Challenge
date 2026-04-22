import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import CxIcon from '@/components/CxIcon.vue'

describe('CxIcon', () => {
  it('should render icon component', () => {
    const wrapper = shallowMount(CxIcon, {
      props: {
        icon: 'arrow-left'
      }
    })

    expect(wrapper.exists()).toBe(true)
  })
})
