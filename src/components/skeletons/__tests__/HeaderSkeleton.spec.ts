import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HeaderSkeleton from '@/components/skeletons/HeaderSkeleton.vue'

describe('HeaderSkeleton', () => {
  function mountComponent() {
    return mount(HeaderSkeleton)
  }

  it('renders skeleton container', () => {
    const wrapper = mountComponent()

    expect(wrapper.find('.header-skeleton-container').exists()).toBe(true)
  })

  it('renders title skeleton', () => {
    const wrapper = mountComponent()

    const title = wrapper.get('.header-skeleton-container__title')

    expect(title.classes()).toContain('skeleton-loading')
  })

  it('renders subtitle skeleton', () => {
    const wrapper = mountComponent()

    const subtitle = wrapper.get('.header-skeleton-container__sub-title')

    expect(subtitle.classes()).toContain('skeleton-loading')
  })

  it('renders correct semantic structure', () => {
    const wrapper = mountComponent()

    expect(wrapper.find('header').exists()).toBe(true)
    expect(wrapper.find('h1').exists()).toBe(true)
    expect(wrapper.find('h2').exists()).toBe(true)
  })
})
