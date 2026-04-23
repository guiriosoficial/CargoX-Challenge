import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PlainText from '@/components/CxPlainText.vue'

function mountComponent(props = {}) {
  return mount(PlainText, {
    props,
    global: {
      mocks: {
        $t: (key: string) => key
      }
    }
  })
}

describe('PlainText', () => {
  it('renders a single string as one paragraph', () => {
    const wrapper = mountComponent({
      text: 'Hello world'
    })

    const paragraphs = wrapper.findAll('p')

    expect(paragraphs).toHaveLength(1)
    expect(paragraphs[0]!.text()).toBe('Hello world')
  })

  it('renders multiple lines when text is an array', () => {
    const wrapper = mountComponent({
      text: ['Line 1', 'Line 2']
    })

    const paragraphs = wrapper.findAll('.plain-text-container__content p')

    expect(paragraphs).toHaveLength(2)
    expect(paragraphs[0]!.text()).toBe('Line 1')
    expect(paragraphs[1]!.text()).toBe('Line 2')
  })

  it('normalizes string into array internally', () => {
    const wrapper = mountComponent({
      text: 'Only one'
    })

    const paragraphs = wrapper.findAll('.plain-text-container__content p')

    expect(paragraphs).toHaveLength(1)
  })

  it('renders empty state when text is empty string', () => {
    const wrapper = mountComponent({
      text: ''
    })

    const empty = wrapper.get('[role="status"]')

    expect(empty.text()).toBe('emptyState.noData')
  })

  it('renders empty state when text is undefined', () => {
    const wrapper = mountComponent()

    const empty = wrapper.get('[role="status"]')

    expect(empty.text()).toBe('emptyState.noData')
  })

  it('uses custom emptyState', () => {
    const wrapper = mountComponent({
      text: '',
      emptyState: 'noResults'
    })

    const empty = wrapper.get('[role="status"]')

    expect(empty.text()).toBe('emptyState.noResults')
  })

  it('does not render content when empty', () => {
    const wrapper = mountComponent({
      text: ''
    })

    expect(
      wrapper.find('.plain-text-container__content').exists()
    ).toBe(false)
  })
})
