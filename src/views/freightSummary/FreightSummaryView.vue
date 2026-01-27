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
import { notify } from '@/plugins/notify'

const TablePartial = defineAsyncComponent(() => import('./partials/TablePartial.vue'))

const { t } = useI18n()
const freightSummaryStore = useFreightSummaryStore()
const pageStore = usePageStore()

const {
  freightSummary,
  isLoadingFreightSummary
} = storeToRefs(freightSummaryStore)

const {
  pageTitle,
  pageSubtitle
} = storeToRefs(pageStore)

onBeforeMount(() => {
  setPageHeaders()
  fetchData()
})

function setPageHeaders() {
  pageTitle.value = t('labels.welcome')
  pageSubtitle.value = t('labels.select-freight')
}

async function fetchData() {
  try {
    await freightSummaryStore.getFreightSummary()
  } catch {
    notify.error(t('errors.something-wrong'))
  }
}
</script>
