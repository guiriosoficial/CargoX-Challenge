<template>
  <TablePartial
    :is-loading="isLoadingFreightSummary"
    :table-data="freightSummary"
    class="home-container-table cx-card"
  />
</template>

<script setup lang="ts">
import { onBeforeMount, defineAsyncComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import { useFreightSummaryStore } from '@/store/freightSummary'
import { usePageStore } from '@/store/page'
import { toast } from '@/plugins/toastfy'

const TablePartial = defineAsyncComponent(() => import('./partials/TablePartial.vue'))

const { t } = useI18n()
const freightSummaryStore = useFreightSummaryStore()
const pageStore = usePageStore()

const {
  freightSummary,
  isLoadingFreightSummary
} = storeToRefs(freightSummaryStore)

onBeforeMount(() => {
  setPageHeaders()
  fetchData()
})

function setPageHeaders () {
  pageStore.setPageTitle(t('labels.welcome'))
  pageStore.setPageSubtitle(t('labels.select-freight'))
}

function notifyFetchError () {
  toast.error(t('errors.something-wrong'))
}

async function fetchData () {
  try {
    await freightSummaryStore.getFreightSummary()
  } catch {
    notifyFetchError()
  }
}
</script>
