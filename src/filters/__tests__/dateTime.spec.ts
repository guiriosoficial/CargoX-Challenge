import { describe, it, expect } from 'vitest'
import { dateTime } from '@/filters'

describe('dateTime', () => {
  it('formats a valid Date object', () => {
    const date = new Date('2023-01-01T10:30:00')

    const result = dateTime(date)

    expect(result).toBe('01/01/2023 10:30')
  })

  it('formats a valid ISO string', () => {
    const result = dateTime('2023-01-01T10:30:00')

    expect(result).toBe('01/01/2023 10:30')
  })

  it('formats a timestamp number', () => {
    const timestamp = new Date('2023-01-01T10:30:00').getTime()

    const result = dateTime(timestamp)

    expect(result).toBe('01/01/2023 10:30')
  })

  it('uses custom format when provided', () => {
    const date = new Date('2023-01-01T10:30:00')

    const result = dateTime(date, 'YYYY-MM-DD')

    expect(result).toBe('2023-01-01')
  })

  it('returns original value as string when date is invalid', () => {
    const result = dateTime('invalid-date')

    expect(result).toBe('invalid-date')
  })

  it('handles empty string as invalid date', () => {
    const result = dateTime('')

    expect(result).toBe('')
  })
})
