import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import List from '@/components/CxList.vue'

interface Props {
  list: string[]
  emptyState?: string
}

function mountComponent(props: Partial<Props> = {}) {
  return mount(List, {
    props: {
      list: [],
      ...props
    },
    global: {
      mocks: {
        $t: (key: string) => key
      }
    }
  })
}

describe('List', () => {
  it('renders list items', () => {
    const wrapper = mountComponent({
      list: ['Item 1', 'Item 2']
    })

    const items = wrapper.findAll('.list-container__list-item')

    expect(items).toHaveLength(2)
    expect(items[0]!.text()).toBe('Item 1')
    expect(items[1]!.text()).toBe('Item 2')
  })

  it('renders the list container when list has items', () => {
    const wrapper = mountComponent({
      list: ['Item']
    })

    expect(wrapper.find('.list-container__list').exists()).toBe(true)
  })

  it('does not render list when empty', () => {
    const wrapper = mountComponent({
      list: []
    })

    expect(wrapper.find('.list-container__list').exists()).toBe(false)
  })

  it('renders empty state when list is empty', () => {
    const wrapper = mountComponent({
      list: []
    })

    const empty = wrapper.get('[role="status"]')

    expect(empty.text()).toBe('emptyState.noData')
  })

  it('uses custom emptyState', () => {
    const wrapper = mountComponent({
      list: [],
      emptyState: 'noResults'
    })

    const empty = wrapper.get('[role="status"]')

    expect(empty.text()).toBe('emptyState.noResults')
  })

  it('has correct accessibility attributes on empty state', () => {
    const wrapper = mountComponent({
      list: []
    })

    const empty = wrapper.get('[role="status"]')

    expect(empty.attributes('aria-live')).toBe('polite')
  })
})
