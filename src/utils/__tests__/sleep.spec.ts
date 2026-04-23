import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import * as randomModule from '@/utils/generateRandomNumber'
import { sleep } from '@/utils/sleep'

describe('sleep', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  it('resolves after the given delay', async () => {
    const promise = sleep(500)

    // ainda não resolveu
    let resolved = false
    promise.then(() => (resolved = true))

    await vi.advanceTimersByTimeAsync(499)
    expect(resolved).toBe(false)

    await vi.advanceTimersByTimeAsync(1)
    expect(resolved).toBe(true)
  })

  it('uses generateRandomNumber when delay is not provided', async () => {
    const spy = vi
      .spyOn(randomModule, 'generateRandomNumber')
      .mockReturnValue(800)

    const promise = sleep()

    expect(spy).toHaveBeenCalledWith(400, 1200)

    await vi.advanceTimersByTimeAsync(800)

    await expect(promise).resolves.toBeUndefined()
  })

  it('resolves immediately when delay is 0', async () => {
    const promise = sleep(0)

    await vi.advanceTimersByTimeAsync(0)

    await expect(promise).resolves.toBeUndefined()
  })
})
