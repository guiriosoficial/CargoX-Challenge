import { describe, it, expect, vi, afterEach } from 'vitest'
import { generateRandomNumber } from '@/utils/generateRandomNumber'

describe('generateRandomNumber', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should generate number within default infinite range when Math.random is 0', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0)

    const result = generateRandomNumber()

    expect(Number.isFinite(result)).toBeTruthy()
  })

  it('should generate the minimum value when Math.random is 0', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0)

    const result = generateRandomNumber(10, 20)

    expect(result).toBe(10)
  })

  it('should generate the maximum value when Math.random is very close to 1', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.999999)

    const result = generateRandomNumber(10, 20)

    expect(result).toBe(20)
  })

  it('should work with negative ranges', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.5)

    const result = generateRandomNumber(-10, -1)

    expect(result).toBeGreaterThanOrEqual(-10)
    expect(result).toBeLessThanOrEqual(-1)
  })
})
