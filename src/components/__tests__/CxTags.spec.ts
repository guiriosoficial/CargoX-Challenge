import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Tags from '@/components/CxTags.vue'

function mountComponent(props = {}) {
  return mount(Tags, {
    props,
    global: {
      mocks: {
        $t: (key: string) => key // mock simples
      }
    }
  })
}

describe('Tags', () => {
  it('renders list when tags are provided', () => {
    const wrapper = mountComponent({
      tags: [
        { label: 'Tag 1', isActive: false },
        { label: 'Tag 2', isActive: true }
      ]
    })

    const items = wrapper.findAll('[role="option"]')

    expect(items).toHaveLength(2)
    expect(wrapper.find('[role="listbox"]').exists()).toBe(true)
  })

  it('renders tag labels', () => {
    const wrapper = mountComponent({
      tags: [
        { label: 'Tag A', isActive: false }
      ]
    })

    expect(wrapper.text()).toContain('Tag A')
  })

  it('applies active class when tag is active', () => {
    const wrapper = mountComponent({
      tags: [
        { label: 'Active Tag', isActive: true }
      ]
    })

    const item = wrapper.get('[role="option"]')

    expect(item.classes()).toContain('tags-container__tag--active')
  })

  it('sets aria-selected correctly', () => {
    const wrapper = mountComponent({
      tags: [
        { label: 'Tag 1', isActive: true },
        { label: 'Tag 2', isActive: false }
      ]
    })

    const items = wrapper.findAll('[role="option"]')

    expect(items[0]!.attributes('aria-selected')).toBe('true')
    expect(items[1]!.attributes('aria-selected')).toBe('false')
  })

  it('renders empty state when no tags', () => {
    const wrapper = mountComponent({
      tags: [],
      emptyState: 'noResults'
    })

    const empty = wrapper.get('[role="status"]')

    expect(empty.text()).toBe('emptyState.noResults')
  })

  it('uses default emptyState when not provided', () => {
    const wrapper = mountComponent({
      tags: []
    })

    const empty = wrapper.get('[role="status"]')

    expect(empty.text()).toBe('emptyState.noData')
  })

  it('does not render list when tags are empty', () => {
    const wrapper = mountComponent({
      tags: []
    })

    expect(wrapper.find('[role="listbox"]').exists()).toBe(false)
  })
})
