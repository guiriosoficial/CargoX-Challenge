import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import CxTimeline from '@/components/CxTimeline.vue'

describe('CxTimeline', () => {
  const timeline = [
    { key: 'created', label: 'Criado', time: '10:00' },
    { key: 'in_progress', label: 'Em progresso', time: '' },
    { key: 'done', label: 'Concluído', time: '' }
  ]

  it('should render timeline items', () => {
    const wrapper = shallowMount(CxTimeline, {
      props: { timeline },
      global: {
        mocks: { $t: (key) => key }
      }
    })

    expect(wrapper.findAll('li')).toHaveLength(3)
  })

  it('should mark the current item as aria-current step', () => {
    const wrapper = shallowMount(CxTimeline, {
      props: { timeline },
      global: {
        mocks: { $t: (key) => key }
      }
    })

    const items = wrapper.findAll('li')
    expect(items[0].attributes('aria-current')).toBe('false')
  })

  it('should render labels and times', () => {
    const wrapper = shallowMount(CxTimeline, {
      props: { timeline },
      global: {
        mocks: { $t: (key) => key }
      }
    })

    expect(wrapper.text()).toContain('Criado')
    expect(wrapper.text()).toContain('10:00')
  })
})
