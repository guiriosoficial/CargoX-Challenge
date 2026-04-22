import { describe, it, expect } from 'vitest'
import { dateTime } from '@/filters/dateTime'

describe('dateTime filter', () => {
  it('should format a valid date using default format', () => {
    const result = dateTime('2024-01-15T10:30:00Z')

    expect(result).toMatch(/\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}/)
  })

  it('should format a valid date using a custom format', () => {
    const result = dateTime('2024-01-15T10:30:00Z', 'YYYY')

    expect(result).toBe('2024')
  })

  it('should return the original value when date is invalid', () => {
    const result = dateTime('invalid-date')

    expect(result).toBe('invalid-date')
  })
})
