import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import CxPlainText from '@/components/CxPlainText.vue'

describe('CxPlainText', () => {
  it('should render the provided text', () => {
    const wrapper = shallowMount(CxPlainText, {
      props: {
        label: 'Label',
        value: 'Value'
      }
    })

    expect(wrapper.text()).toContain('Label')
    expect(wrapper.text()).toContain('Value')
  })
})
