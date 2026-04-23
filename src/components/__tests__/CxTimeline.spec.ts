import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Timeline from '@/components/CxTimeline.vue'

function mountComponent(props = {}) {
  return mount(Timeline, {
    props,
    global: {
      mocks: {
        $t: (key: string) => key
      }
    }
  })
}

const timelineMock = [
  { key: 'step1', label: 'Step 1', time: '10:00' },
  { key: 'step2', label: 'Step 2', time: '11:00' },
  { key: 'step3', label: 'Step 3', time: '' }
]

describe('Timeline', () => {
  it('renders all steps', () => {
    const wrapper = mountComponent({ timeline: timelineMock })

    const steps = wrapper.findAll('.timeline-container__step')

    expect(steps).toHaveLength(3)
  })

  it('renders labels and times', () => {
    const wrapper = mountComponent({ timeline: timelineMock })

    expect(wrapper.text()).toContain('Step 1')
    expect(wrapper.text()).toContain('10:00')
  })

  it('applies correct state classes', () => {
    const wrapper = mountComponent({ timeline: timelineMock })

    const dots = wrapper.findAll('.timeline-container__progress-dot')

    expect(dots[0]!.classes()).toContain('timeline-container__progress-dot--done')
    expect(dots[1]!.classes()).toContain('timeline-container__progress-dot--doing')
    expect(dots[2]!.classes()).toContain('timeline-container__progress-dot--pending')
  })

  it('applies correct line classes based on next step', () => {
    const wrapper = mountComponent({ timeline: timelineMock })

    const lines = wrapper.findAll('.timeline-container__progress-line')

    expect(lines[0]!.classes()).toContain('timeline-container__progress-line--doing')
    expect(lines[1]!.classes()).toContain('timeline-container__progress-line--pending')
  })

  it('sets aria-current only for doing step', () => {
    const wrapper = mountComponent({ timeline: timelineMock })

    const steps = wrapper.findAll('.timeline-container__step')

    expect(steps[0]!.attributes('aria-current')).toBe('false')
    expect(steps[1]!.attributes('aria-current')).toBe('step')
    expect(steps[2]!.attributes('aria-current')).toBe('false')
  })

  it('renders accessible title', () => {
    const wrapper = mountComponent()

    const title = wrapper.get('#timeline-title')

    expect(title.text()).toBe('a11y.labels.statusTimeline')
  })

  it('renders empty list when no timeline provided', () => {
    const wrapper = mountComponent()

    const steps = wrapper.findAll('.timeline-container__step')

    expect(steps).toHaveLength(0)
  })
})
