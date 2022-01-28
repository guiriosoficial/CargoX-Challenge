import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header'

describe('Header', () => {
  const title = 'Titulo da página'
  const subtitle = 'Subtitulo da página'
  const wrapper = shallowMount(Header, {
    props: { title, subtitle }
  })
  const recivedTitle = wrapper.find('.header-container__title')
  const recivedSubtitle = wrapper.find('.header-container__sub-title')

  test('Should be render', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  test('Should be visible', () => {
    expect(recivedTitle.isVisible()).toBeTruthy()
    expect(recivedSubtitle.isVisible()).toBeTruthy()
  })

  test('Should be have props value', () => {
    expect(recivedTitle.text()).toBe(title.toUpperCase())
    expect(recivedSubtitle.text()).toBe(subtitle)
  })
})
