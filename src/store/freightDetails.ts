import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { IFreightDetails, ICustomer, IRoute } from '@/types/freight.ts'

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

  function getFreightDetails (deliveryId: number): Promise<IFreightDetails> {
    isLoadingFreightDetails.value = true

    return new Promise((resolve, reject) => {
      fetch(`/mocks/freight-details-${deliveryId}.json`)
        .then(async (response) => {
          const json = await response.json()
          setFreightDetails(json)
          resolve(json)
        })
        .catch((error) => reject(error))
        .finally(() => isLoadingFreightDetails.value = false)
    })
  }

  function setFreightDetails (payload: IFreightDetails): void {
    freightDetails.value = payload
  }

  return ({
    freightDetails,
    isLoadingFreightDetails,
    freightDetailsRoute,
    freightDetailsCustomer,
    getFreightDetails
  })
})