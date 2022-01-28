import { shallowMount } from '@vue/test-utils'
import NotFound from '@/views/NotFound'

const i18n = {
  buttons: {
    'go-back': 'Voltar'
  },
  errors: {
    404: {
      code: 'Erro 404',
      message: 'Página não encontrada'
    }
  }
}

describe('NotFound', () => {
  const wrapper = shallowMount(NotFound, {
    global: {
      mocks: {
        $t: (msg) => {
          const splitedMsg = msg.split('.')
          return i18n[splitedMsg[0]][splitedMsg[1]]
        }
      }
    }
  })

  test('Should be render', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  test('Should be show 404 error', () => {
    const recived = wrapper.find('.error-container__title')
    expect(recived.text()).toMatch('404')
  })

  test('Should hava Go Back button', () => {
    const recived = wrapper.find('.error-container__button')
    expect(recived.text()).toBe('Voltar')
  })
})
