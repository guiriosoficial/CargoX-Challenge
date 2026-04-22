import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useFreightDetailsStore } from '@/store/freightDetails'
import { freightService } from '@/services/freightService'

vi.mock('@/services/freightService', () => ({
  freightService: {
    fetchFreightDetailsById: vi.fn()
  }
}))

vi.mock('@/utils', () => ({
  sleep: vi.fn(() => Promise.resolve())
}))

describe('freightDetails store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should initialize with default values', () => {
    const store = useFreightDetailsStore()

    expect(store.freightDetails).toEqual({})
    expect(store.isLoadingFreightDetails).toBe(false)
  })

  it('should load freight details and update state', async () => {
    const mockData = {
      origin: { city: 'São Paulo' },
      destination: { city: 'Rio de Janeiro' },
      trucker: { last_app_update_at: '2024-01-01T10:00:00Z' },
      customer: { name: 'Cliente' }
    }

    freightService.fetchFreightDetailsById.mockResolvedValueOnce(mockData)

    const store = useFreightDetailsStore()
    const result = await store.getFreightDetailsById(10)

    expect(freightService.fetchFreightDetailsById).toHaveBeenCalledWith(10)
    expect(result).toEqual(mockData)
    expect(store.freightDetails).toEqual(mockData)
    expect(store.freightDetailsRoute).toEqual({
      origin: mockData.origin,
      destination: mockData.destination,
      lastAppUpdateAt: '2024-01-01T10:00:00Z'
    })
    expect(store.freightDetailsCustomer).toEqual(mockData.customer)
    expect(store.isLoadingFreightDetails).toBe(false)
  })

  it('should clear details and rethrow error on failure', async () => {
    freightService.fetchFreightDetailsById.mockRejectedValueOnce(new Error('API Error'))

    const store = useFreightDetailsStore()

    await expect(store.getFreightDetailsById(10)).rejects.toThrow('API Error')
    expect(store.freightDetails).toEqual({})
    expect(store.isLoadingFreightDetails).toBe(false)
  })

  it('should clear freight details manually', () => {
    const store = useFreightDetailsStore()
    store.freightDetails = { id: 1 }

    store.clearFreightDetails()

    expect(store.freightDetails).toEqual({})
  })
})
