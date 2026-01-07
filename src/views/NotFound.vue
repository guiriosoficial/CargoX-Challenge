<template>
  <div class="not-found-container">
    <h1 class="not-found-container__title">
      {{ $t('errors.404.code') }}
    </h1>
    <h2 class="not-found-container__sub-title">
      {{ $t('errors.404.message') }}
    </h2>
    <button
      class="not-found-container__button cx-button"
      @click="goToSummary"
    >
      {{ $t(`buttons.go-back`) }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { usePageStore } from '@/store/page'

const router = useRouter()
const pageStore = usePageStore()

onBeforeMount(() => {
  pageStore.setHidePageHeader(true)
})

onBeforeUnmount(() => {
  pageStore.setHidePageHeader(false)
})

function goToSummary() {
  router.push({
    name: 'FreightSummary'
  })
}
</script>

<style scoped lang="scss">
.not-found-container {
  font-size: 1.4em;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;

  .not-found-container__sub-title {
    font-size: 1em;
  }
}
</style>
