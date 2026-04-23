import { describe, it, expect, vi, afterEach } from 'vitest'
import { generateRandomNumber } from '@/utils'

describe('generateRandomNumber', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('returns a number within the given range', () => {
    const result = generateRandomNumber(1, 10)

    expect(result).toBeGreaterThanOrEqual(1)
    expect(result).toBeLessThanOrEqual(10)
  })

  it('returns min when Math.random is 0', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0)

    const result = generateRandomNumber(5, 10)

    expect(result).toBe(5)
  })

  it('returns max when Math.random is close to 1', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.999999)

    const result = generateRandomNumber(5, 10)

    expect(result).toBe(10)
  })

  it('works with negative ranges', () => {
    const result = generateRandomNumber(-10, -1)

    expect(result).toBeGreaterThanOrEqual(-10)
    expect(result).toBeLessThanOrEqual(-1)
  })

  it('works when min equals max', () => {
    const result = generateRandomNumber(7, 7)

    expect(result).toBe(7)
  })

  it('returns NaN when using default Infinity values', () => {
    const result = generateRandomNumber()

    expect(Number.isNaN(result)).toBe(true)
  })
})
