import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header'

describe('Header', () => {
  const title = 'Titulo da página'
  const subtitle = 'Subtitulo da página'
  const wrapper = shallowMount(Header, {
    props: { title, subtitle }
  })

  test('Should be render', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  test('Should be show props messages', () => {
    const recivedTitle = wrapper.find('.header-container__title').text()
    const recivedSubtitle = wrapper.find('.header-container__sub-title').text()
    expect(recivedTitle).toBe(title.toUpperCase())
    expect(recivedSubtitle).toBe(subtitle)
  })
})
