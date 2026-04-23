import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useFreightSummaryStore } from '@/store/freightSummary'
import { freightService } from '@/services/freightService'

vi.mock('@/services/freightService', () => ({
  freightService: {
    fetchFreightSummary: vi.fn()
  }
}))

vi.mock('@/utils', () => ({
  sleep: vi.fn(() => Promise.resolve())
}))

describe('freightSummary store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should initialize with default values', () => {
    const store = useFreightSummaryStore()

    expect(store.freightSummary).toEqual([])
    expect(store.isLoadingFreightSummary).toBe(false)
  })

  it('should load freight summary and update state', async () => {
    const mockData = [
      { id: 1, customer_name: 'Cliente 1' },
      { id: 2, customer_name: 'Cliente 2' }
    ]

    freightService.fetchFreightSummary.mockResolvedValueOnce(mockData)

    const store = useFreightSummaryStore()
    const result = await store.getFreightSummary()

    expect(freightService.fetchFreightSummary).toHaveBeenCalledTimes(1)
    expect(result).toEqual(mockData)
    expect(store.freightSummary).toEqual(mockData)
    expect(store.isLoadingFreightSummary).toBe(false)
  })

  it('should clear summary and rethrow error on failure', async () => {
    freightService.fetchFreightSummary.mockRejectedValueOnce(new Error('API Error'))

    const store = useFreightSummaryStore()

    await expect(store.getFreightSummary()).rejects.toThrow('API Error')
    expect(store.freightSummary).toEqual([])
    expect(store.isLoadingFreightSummary).toBe(false)
  })
})
