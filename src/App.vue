<template>
  <main class="main-container">
    <CxHeader
      v-if="!hidePageHeader"
      :title="pageTitle"
      :subtitle="pageSubtitle"
      :is-loading="isLoadingPage"
    />
    <router-view v-slot="{ Component }">
      <transition
        name="fade"
        mode="out-in"
      >
        <component
          :is="Component"
          class="main-container__component"
        />
      </transition>
    </router-view>
  </main>
</template>

<script setup lang="ts">
import CxHeader from '@/components/CxHeader.vue'
import { usePageStore } from '@/store/page'
import { storeToRefs } from 'pinia'

const pageStore = usePageStore()

const {
  isLoadingPage,
  pageTitle,
  pageSubtitle,
  hidePageHeader
} = storeToRefs(pageStore)
</script>

<style scoped lang="scss">
.main-container {
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 0 20px 20px;
  min-height: 100vh;
  max-width: 1600px;
  .main-container__component {
    flex: 1;
  }
}

@media (max-width: 768px) {
  .main-container {
    padding: 0;
  }
}
</style>
