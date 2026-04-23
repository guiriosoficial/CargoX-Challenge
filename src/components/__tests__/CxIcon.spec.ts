import { describe, it, expect, vi, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import CxIcon from '@/components/CxIcon.vue'
import * as faCore from '@fortawesome/fontawesome-svg-core'

vi.mock('@fortawesome/fontawesome-svg-core', () => ({
  findIconDefinition: vi.fn()
}))

describe('CxIcon', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('renders svg with correct viewBox and path', () => {
    vi.spyOn(faCore, 'findIconDefinition').mockReturnValue({
      icon: [24, 24, [], '', 'M10 10']
    } as any)

    const wrapper = mount(CxIcon, {
      props: {
        icon: 'plus'
      }
    })

    const svg = wrapper.get('svg')
    const path = wrapper.get('path')

    expect(svg.attributes('viewBox')).toBe('0 0 24 24')
    expect(path.attributes('d')).toBe('M10 10')
  })

  it('applies hidden class when icon is not provided', () => {
    vi.spyOn(faCore, 'findIconDefinition').mockReturnValue(undefined)

    const wrapper = mount(CxIcon, {
      props: {
        icon: 'plus'
      }
    })

    const svg = wrapper.get('svg')

    expect(svg.classes()).toContain('icon-container__icon--hidden')
  })

  it('uses default type "fas" when not provided', () => {
    const spy = vi
      .spyOn(faCore, 'findIconDefinition')
      .mockReturnValue(undefined)

    mount(CxIcon, {
      props: {
        icon: 'plus'
      }
    })

    expect(spy).toHaveBeenCalledWith({
      prefix: 'fas',
      iconName: 'plus'
    })
  })

  it('uses provided type', () => {
    const spy = vi
      .spyOn(faCore, 'findIconDefinition')
      .mockReturnValue(undefined)

    mount(CxIcon, {
      props: {
        icon: 'plus',
        type: 'fab'
      }
    })

    expect(spy).toHaveBeenCalledWith({
      prefix: 'fab',
      iconName: 'plus'
    })
  })

  it('falls back to 0 width and height when no definition', () => {
    vi.spyOn(faCore, 'findIconDefinition').mockReturnValue(undefined)

    const wrapper = mount(CxIcon, {
      props: {
        icon: 'plus'
      }
    })

    const svg = wrapper.get('svg')

    expect(svg.attributes('viewBox')).toBe('0 0 0 0')
  })

  it('falls back to empty path when no definition', () => {
    vi.spyOn(faCore, 'findIconDefinition').mockReturnValue(undefined)

    const wrapper = mount(CxIcon, {
      props: {
        icon: 'plus'
      }
    })

    const path = wrapper.get('path')

    expect(path.attributes('d')).toBe('')
  })
})
