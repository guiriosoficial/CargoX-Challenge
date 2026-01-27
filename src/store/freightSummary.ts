import { defineStore } from 'pinia'
import { ref } from 'vue'
import { sleep } from '@/utils'
import { freightService } from '@/services/freightService'
import type { IFreightSummary } from '@/types/freight'

const storeId = 'freightSummary'

export const useFreightSummaryStore = defineStore(storeId, () => {
  const freightSummary = ref<IFreightSummary[]>([] as IFreightSummary[])
  const isLoadingFreightSummary = ref<boolean>(false)

  async function getFreightSummary(): Promise<IFreightSummary[]> {
    isLoadingFreightSummary.value = true

    try {
      const data = await freightService.fetchFreightSummary()
      await sleep()
      freightSummary.value = data
      return data
    } catch (error) {
      clearFreightSummary()
      throw error
    } finally {
      isLoadingFreightSummary.value = false
    }
  }

  function clearFreightSummary(): void {
    freightSummary.value = [] as IFreightSummary[]
  }

  return {
    freightSummary,
    isLoadingFreightSummary,
    getFreightSummary
  }
})
