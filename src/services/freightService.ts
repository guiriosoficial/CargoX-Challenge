import type { IFreightDetails, IFreightSummary } from '@/types/freight'

const freightPath = '/mocks'

export const freightService = {
  async fetchFreightSummary(): Promise<IFreightSummary[]> {
    const response = await fetch(`${freightPath}/freight-summary.json`)

    if (!response.ok) {
      const errorMsg = `API Error: ${response.status} ${response.statusText}`
      throw new Error(errorMsg)
    }

    return response.json()
  },

  async fetchFreightDetailsById(freightId: number): Promise<IFreightDetails> {
    const response = await fetch(`${freightPath}/freight-details-${freightId}.json`)

    if (!response.ok) {
      const errorMsg = `API Error: ${response.status} ${response.statusText}`
      throw new Error(errorMsg)
    }

    return response.json()
  }
}
