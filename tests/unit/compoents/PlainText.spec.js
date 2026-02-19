import { shallowMount } from '@vue/test-utils'
import PlainText from '@/components/PlainText'

describe('PlainText', () => {
  const text = '<p>Im a test paragraph</p>'
  const wrapper = shallowMount(PlainText, {
    props: { text },
    global: {
      mocks: { $t: () => 'Sem dados' }
    }
  })
  const recived = wrapper.find('.plain-text-container__content')

  test('Should be render', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  test('Should be shou prop message', () => {
    const expectedText = 'IM A TEST PARAGRAPH'
    expect(recived.text()).toBe(expectedText)
    expect(recived.isVisible()).toBeTruthy()
    expect(wrapper.find('.emptyState').exists()).toBeFalsy()
  })

  test('Should be show no content message', () => {
    const emptyStateWrapper = shallowMount(PlainText, {
      global: {
        mocks: { $t: () => 'Sem dados' }
      }
    })
    const emptyStateRecived = emptyStateWrapper.find('.emptyState')
    const contentRecived = emptyStateWrapper.find('.plain-text-container__content')

    expect(emptyStateRecived.text()).toBe('Sem dados')
    expect(contentRecived.exists()).toBeFalsy()
  })
})
