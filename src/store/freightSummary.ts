import { defineStore } from 'pinia'
import type { IFreightSummary } from '@/types/freight.ts'
import {ref} from "vue";

const STORE_ID = 'freightSummary'

export const useFreightSummaryStore = defineStore(STORE_ID, () => {
  const freightSummary = ref<IFreightSummary[]>([] as IFreightSummary[])
  const isLoadingFreightSummary = ref<boolean>(false)

  function getFreightSummary(): Promise<IFreightSummary[]> {
    isLoadingFreightSummary.value = true

    return new Promise((resolve, reject) => {
      fetch('/mocks/freight-summary.json')
        .then(async (response) => {
          const json = await response.json()
          setFreightSummary(json)
          resolve(json)
        })
        .catch((error) => reject(error))
        .finally(() => isLoadingFreightSummary.value = false)
    })
  }

  function setFreightSummary(payload: IFreightSummary[]): void {
    freightSummary.value = payload
  }

  return {
    freightSummary,
    isLoadingFreightSummary,
    getFreightSummary,
  }
})
