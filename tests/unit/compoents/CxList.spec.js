import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import CxList from '@/components/CxList.vue'

describe('CxList', () => {
  it('should render list items', () => {
    const wrapper = shallowMount(CxList, {
      props: {
        items: ['Item 1', 'Item 2']
      }
    })

    expect(wrapper.text()).toContain('Item 1')
    expect(wrapper.text()).toContain('Item 2')
  })
})
