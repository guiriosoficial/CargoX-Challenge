<template>
  <div class="freight-container">
    <InfoGroupPartial class="freight-container__info-details" />
    <MapPartial
      :is-loading="isLoadingFreightDetails"
      class="freight-container__info-map"
    />
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount, defineAsyncComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import { useFreightDetailsStore } from '@/store/freightDetails.ts'
import { usePageStore } from '@/store/page'
import { toast } from '@/plugins/toastfy'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()
const pageStore = usePageStore()
const freightDetailsStore = useFreightDetailsStore()

const InfoGroupPartial = defineAsyncComponent(() => import('./partials/InfoGroupPartial.vue'))
const MapPartial = defineAsyncComponent(() => import('./partials/MapPartial.vue'))

const {
  freightDetailsCustomer,
  isLoadingFreightDetails,
} = storeToRefs(freightDetailsStore)

onBeforeMount(async() => {
  pageStore.setPageIsLoading(true)
  await fetchData()
  setPageHeaders()
  pageStore.setPageIsLoading(false)
})

onBeforeUnmount(() => {
  freightDetailsStore.clearFreightDetails()
})

async function fetchData() {
  const freightId = Number(route.params.id ?? 0)

  try {
    await freightDetailsStore.getFreightDetails(freightId)
  } catch {
    goToSummary()
    notifyFetchError()
  }
}

function setPageHeaders() {
  pageStore.setPageTitle(freightDetailsCustomer.value?.name)
  pageStore.setPageSubtitle(`ID do cliente: ${freightDetailsCustomer.value?.id}`)
}

function goToSummary() {
  router.push({
    name: 'FreightSummary'
  })
}

function notifyFetchError() {
  toast.error(t('errors.freight-not-found'))
}
</script>

<style scoped lang="scss">
.freight-container {
  display: flex;
  gap: 20px;

  .freight-container__info-details {
    flex: 1;
  }

  .freight-container__info-map {
    width: 480px;
    height: fit-content;
    position: sticky;
    top: 20px;
  }
}

@media (max-width: 992px) {
  .freight-container {
    flex-direction: column;

    .freight-container__info-map { width: 100%; }
  }
}

@media (max-width: 768px) {
  .freight-container {
    gap: 0;
  }
}
</style>
