import type { IFreightDetails, IFreightSummary } from '@/types/freight'

export const freightService = {
  async fetchSummary(): Promise<IFreightSummary[]> {
    const response = await fetch('/mocks/freight-summary.json')

    if (!response.ok) {
      const errorMsg = `Erro na API: ${response.status} ${response.statusText}`
      throw new Error(errorMsg)
    }

    return response.json()
  },

  async fetchDetails(freightId: number): Promise<IFreightDetails> {
    const response = await fetch(`/mocks/freight-details-${freightId}.json`)

    if (!response.ok) {
      const errorMsg = `Erro na API: ${response.status} ${response.statusText}`
      throw new Error(errorMsg)
    }

    return response.json()
  }
}
