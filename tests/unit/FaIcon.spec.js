import { shallowMount } from '@vue/test-utils'
import FaIcon from '@/components/FaIcon'

describe('FaIcon', () => {
  const wrapper = shallowMount(FaIcon, {
    props: { icon: 'robot' }
  })
  const recived = wrapper.find('.icon-container__icon')
  
  test('Should be render', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  
  test('Should render icon defined in prop', () => {
    expect(recived.isVisible()).toBeTruthy()
  })

  test('Should hidden icon has modifier class', () => {
    const localWrapper = shallowMount(FaIcon)
    const recivedHidden = localWrapper.find('.icon-container__icon')
    expect(recivedHidden.classes()).toContain('icon-container__icon--hidden')
    // expect(recivedHidden.wrapperElement).not.toBeVisible()
  })
})
