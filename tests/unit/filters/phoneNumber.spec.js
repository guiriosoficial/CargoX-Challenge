import { describe, it, expect, vi } from 'vitest'
import { phoneNumber } from '@/filters/phoneNumber'

vi.mock('libphonenumber-js', () => {
  return {
    default: vi.fn((value) => {
      if (value === '+5511999999999') {
        return {
          formatInternational: () => '+55 11 99999-9999'
        }
      }

      return undefined
    })
  }
})

describe('phoneNumber filter', () => {
  it('should format a valid phone number', () => {
    const result = phoneNumber('+5511999999999')

    expect(result).toBe('+55 11 99999-9999')
  })

  it('should return the original value when phone is invalid', () => {
    const result = phoneNumber('invalid')

    expect(result).toBe('invalid')
  })

  it('should return empty string by default', () => {
    const result = phoneNumber()

    expect(result).toBe('')
  })
})
