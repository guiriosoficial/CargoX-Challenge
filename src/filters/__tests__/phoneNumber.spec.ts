import { describe, it, expect, vi, afterEach } from 'vitest'
import { phoneNumber } from '@/filters'
import parsePhoneNumber from 'libphonenumber-js'

vi.mock('libphonenumber-js', () => ({
  default: vi.fn()
}))

describe('phoneNumber', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('formats a valid phone number', () => {
    const mockFormat = vi.fn().mockReturnValue('+55 11 99999-9999')

    ;(parsePhoneNumber as unknown as vi.Mock).mockReturnValue({
      formatInternational: mockFormat
    })

    const result = phoneNumber('11999999999')

    expect(result).toBe('+55 11 99999-9999')
    expect(mockFormat).toHaveBeenCalled()
  })

  it('returns original value when parsing fails', () => {
    ;(parsePhoneNumber as unknown as vi.Mock).mockReturnValue(undefined)

    const result = phoneNumber('invalid')

    expect(result).toBe('invalid')
  })

  it('returns original value when formatInternational is missing', () => {
    ;(parsePhoneNumber as unknown as vi.Mock).mockReturnValue({})

    const result = phoneNumber('11999999999')

    expect(result).toBe('11999999999')
  })

  it('handles empty string', () => {
    ;(parsePhoneNumber as unknown as vi.Mock).mockReturnValue(undefined)

    const result = phoneNumber()

    expect(result).toBe('')
  })
})
