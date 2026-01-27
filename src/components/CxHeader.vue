<template>
  <HeaderSkeleton v-if="isLoading" />

  <header
    v-else
    class="header-container"
  >
    <button
      v-if="showBackButton"
      class="header-container__back-icon"
      aria-label="Back to previous page"
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
  </header>

  <CxSelectLang class="main-container__lang-selector" />
</template>

<script setup lang="ts">
import HeaderSkeleton from '@/components/skeletons/HeaderSkeleton.vue'
import CxSelectLang from '@/components/CxSelectLang.vue'
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

const showBackButton = computed(() => route.path !== '/')

function goBack() {
  router.go(-1)
}
</script>

<style scoped lang="scss">
@use '@/styles/variables/colors' as *;

.header-container {
  margin: 30px 0;
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
    margin: 30px 20px
  }
}
</style>
