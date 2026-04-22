import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import HeaderSkeleton from '@/components/skeletons/HeaderSkeleton.vue'

describe('HeaderSkeleton', () => {
  it('should render skeleton container', () => {
    const wrapper = shallowMount(HeaderSkeleton)

    expect(wrapper.exists()).toBe(true)
  })
})
