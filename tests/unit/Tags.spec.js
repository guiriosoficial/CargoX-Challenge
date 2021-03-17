import { shallowMount } from '@vue/test-utils'
import Tags from '@/components/Tags'

describe('Tags', () => {
  const wrapper = shallowMount(Tags, {
    props: { 
      tags: [
        { label: 'ActiveTest', isActive: true },
        { label: 'InactiveTest', isActive: false }
      ]
    }
  })
  const recived = wrapper.findAll('.tags-container__tag')

  test('Should be render', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  test('Should be visible', () => {
    expect(recived[0].wrapperElement).toBeVisible()
    expect(recived[1].wrapperElement).toBeVisible()
  })

  test('Should be show label props', () => {
    expect(recived[0].text()).toBe('ActiveTest')
    expect(recived[1].text()).toBe('InactiveTest')
  })

  test('Should active has modifies class', () => {
    const activeRecived = recived[0]
    expect(activeRecived.classes()).toContain('tags-container__tag--active')
    // expect(activeRecived.wrapperElement).toHaveStyle('background-color: rgb(46, 205, 112)')
  })
})