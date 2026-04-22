import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import CxTags from '@/components/CxTags.vue'

describe('CxTags', () => {
  it('should render tags', () => {
    const wrapper = shallowMount(CxTags, {
      props: {
        tags: ['A', 'B']
      }
    })

    expect(wrapper.text()).toContain('A')
    expect(wrapper.text()).toContain('B')
  })
})
