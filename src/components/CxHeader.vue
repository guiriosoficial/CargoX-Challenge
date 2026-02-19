<template>
  <HeaderSkeleton v-if="isLoading" />

  <header
    v-else
    class="header-container"
  >
    <button
      v-if="canGoBack"
      :aria-label="$t('a11y.labels.goBack')"
      type="button"
      class="header-container__back-icon"
      @click="goBack"
    >
      <CxIcon icon="arrow-left" />
    </button>
    <div>
      <h1 class="header-container__title">
        {{ title }}
      </h1>
      <h2 class="header-container__sub-title">
        {{ subtitle }}
      </h2>
    </div>

    <CxLangSelect class="main-container__lang-selector" />
  </header>
</template>

<script setup lang="ts">
import HeaderSkeleton from '@/components/skeletons/HeaderSkeleton.vue'
import CxLangSelect from '@/components/CxLangSelect.vue'
import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'

interface IHeaderProps {
  title?: string
  subtitle?: string
  isLoading?: boolean
}

const router = useRouter()
const route = useRoute()

const {
  title = '',
  subtitle = '',
  isLoading = false
} = defineProps<IHeaderProps>()

const canGoBack = computed(() => route.path !== '/')

function goBack() {
  router.push({ name: 'FreightSummary' })
}
</script>

<style scoped lang="scss">
@use '@/styles/variables/colors' as *;

.header-container {
  margin: 32px 0;
  display: flex;
  align-items: center;
  gap: 12px;

  .header-container__title {
    text-transform: uppercase;
  }

  .header-container__back-icon {
    width: 32px;
    height: 32px;
    cursor: pointer;
    color: $color-text-title;
  }

  .header-container__sub-title {
    font-weight: 500;
    font-size: 1em;
  }
}

@media (max-width: 768px) {
  .header-container {
    margin: 32px 24px
  }
}
</style>
