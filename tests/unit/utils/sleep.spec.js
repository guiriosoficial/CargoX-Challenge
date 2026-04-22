import { describe, it, expect, vi, afterEach } from 'vitest'
import { sleep } from '@/utils/sleep'

describe('sleep', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    vi.clearAllTimers()
  })

  it('should resolve after the informed delay', async () => {
    vi.useFakeTimers()

    const promise = sleep(500)
    vi.advanceTimersByTime(500)

    await expect(promise).resolves.toBeUndefined()
  })

  it('should call setTimeout with a random delay when no argument is passed', async () => {
    vi.useFakeTimers()
    const setTimeoutSpy = vi.spyOn(globalThis, 'setTimeout')

    const promise = sleep()

    expect(setTimeoutSpy).toHaveBeenCalledTimes(1)
    expect(setTimeoutSpy.mock.calls[0][0]).toEqual(expect.any(Function))
    expect(setTimeoutSpy.mock.calls[0][1]).toEqual(expect.any(Number))

    vi.runAllTimers()
    await promise
  })
})
