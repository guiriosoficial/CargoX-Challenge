import { shallowMount } from '@vue/test-utils'
import PlainText from '@/components/PlainText'

describe('PlainText', () => {
  const text = '<p>Im a test paragraph</p>'
  const wrapper = shallowMount(PlainText, {
    props: { text }
  })
  const recived = wrapper.find('.plain-text-container__content').text()
  
  test('Should be render', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  
  test('Should be shou prop message', () => {
    const expectedText = 'IM A TEST PARAGRAPH'
    expect(recived.text()).toBe(expectedText)
  })
  
  // test('Should be show no content message', () => {
  //   const wrapper = shallowMount(PlainText, {
  //     mocks: { '$t': () => 'Sem dados' }
  //   })
  //   expect(wrapper.find('.plain-text-container__content').text()).toMatch('Sem dados')
  // })
})
