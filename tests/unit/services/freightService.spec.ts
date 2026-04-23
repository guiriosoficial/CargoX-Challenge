import { describe, it, expect, vi, beforeEach } from 'vitest'
import { freightService } from '@/services/freightService'

describe('freightService', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('should fetch freight summary successfully', async () => {
    const mockData = [{ id: 1 }]
    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: vi.fn().mockResolvedValueOnce(mockData)
    })

    const result = await freightService.fetchFreightSummary()

    expect(global.fetch).toHaveBeenCalledWith('/mocks/freight-summary.json')
    expect(result).toEqual(mockData)
  })

  it('should throw error when freight summary request fails', async () => {
    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: false,
      status: 500,
      statusText: 'Internal Server Error'
    })

    await expect(freightService.fetchFreightSummary()).rejects.toThrow(
      'API Error: 500 Internal Server Error'
    )
  })

  it('should fetch freight details by id successfully', async () => {
    const mockData = { id: 10 }
    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: vi.fn().mockResolvedValueOnce(mockData)
    })

    const result = await freightService.fetchFreightDetailsById(10)

    expect(global.fetch).toHaveBeenCalledWith('/mocks/freight-details-10.json')
    expect(result).toEqual(mockData)
  })

  it('should throw error when freight details request fails', async () => {
    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: false,
      status: 404,
      statusText: 'Not Found'
    })

    await expect(freightService.fetchFreightDetailsById(10)).rejects.toThrow(
      'API Error: 404 Not Found'
    )
  })
})
