<template>
  <main class="main-container">
    <CxHeader
      v-if="!hidePageHeader"
      :title="pageTitle"
      :subtitle="pageSubtitle"
      :is-loading="pageIsLoading"
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

<script lang="ts">
import { defineAsyncComponent } from 'vue'
import { mapState } from 'pinia'
import { usePageStore } from '@/store/page'

const CxHeader = defineAsyncComponent(() => import('@/components/CxHeader.vue'))

export default {
  components: {
    CxHeader
  },
  computed: {
    ...mapState(usePageStore, [
      'pageIsLoading',
      'pageTitle',
      'pageSubtitle',
      'hidePageHeader'
    ])
  }
}
</script>

<style scoped lang="scss">
.main-container {
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 0 20px 20px;
  height: 100vh;
  max-width: 1600px;
  .main-container__component {
    flex: 1;
  }
}

@media (max-width: 600px) {
  .main-container {
    padding: 0;
  }
}
</style>
