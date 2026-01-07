import { defineStore } from 'pinia'
import { ref } from 'vue'
import { sleep } from '@/utils'
import { freightService } from '@/services/freightService'
import type { IFreightSummary } from '@/types/freight'

const STORE_ID = 'freightSummary'

export const useFreightSummaryStore = defineStore(STORE_ID, () => {
  const freightSummary = ref<IFreightSummary[]>([] as IFreightSummary[])
  const isLoadingFreightSummary = ref<boolean>(false)

  async function getFreightSummary(): Promise<IFreightSummary[]> {
    isLoadingFreightSummary.value = true

    try {
      const data = await freightService.fetchSummary()
      await sleep()
      freightSummary.value = data
      return data
    } catch (error) {
      freightSummary.value = [] as IFreightSummary[]
      throw error
    } finally {
      isLoadingFreightSummary.value = false
    }
  }

  return {
    freightSummary,
    isLoadingFreightSummary,
    getFreightSummary,
  }
})
