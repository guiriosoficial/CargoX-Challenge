import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { sleep } from '@/utils'
import { freightService } from '@/services/freightService'
import type { IFreightDetails, ICustomer, IRoute } from '@/types/freight'

const STORE_ID = 'freightDetails'

export const useFreightDetailsStore = defineStore(STORE_ID, () => {
  const freightDetails = ref<IFreightDetails>({} as IFreightDetails)
  const isLoadingFreightDetails = ref<boolean>(false)

  const freightDetailsRoute = computed<IRoute>(() => {
    const {
      origin,
      destination,
      trucker
    } = freightDetails.value

    return {
      origin,
      destination,
      lastAppUpdateAt: trucker?.last_app_update_at
    }
  })

  const freightDetailsCustomer = computed<ICustomer>(() => {
    return freightDetails.value.customer
  })

  async function getFreightDetails (freightId: number): Promise<IFreightDetails> {
    isLoadingFreightDetails.value = true

    try {
      const data = await freightService.fetchDetails(freightId)
      await sleep()
      freightDetails.value = data
      return data
    } catch (error) {
      freightDetails.value = {} as IFreightDetails
      throw error
    } finally {
      isLoadingFreightDetails.value = false
    }
  }

  function clearFreightDetails() {
    freightDetails.value = {} as IFreightDetails
  }

  return ({
    freightDetails,
    isLoadingFreightDetails,
    freightDetailsRoute,
    freightDetailsCustomer,
    clearFreightDetails,
    getFreightDetails
  })
})