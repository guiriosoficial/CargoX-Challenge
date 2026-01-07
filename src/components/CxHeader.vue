<template>
  <HeaderSkeleton v-if="isLoading" />

  <header
    v-else
    class="header-container"
  >
    <CxFaIcon
      v-if="route.path !== '/'"
      icon="arrow-left"
      class="header-container__back-icon"
      @click="router.go(-1)"
    />
    <div>
      <h1 class="header-container__title">
        {{ title.toUpperCase() }}
      </h1>
      <h2 class="header-container__sub-title">
        {{ subtitle }}
      </h2>
    </div>
  </header>
</template>

<script setup lang="ts">
import HeaderSkeleton from '@/components/skeleton/HeaderSkeleton.vue'
import CxFaIcon from '@/components/CxFaIcon.vue'
import { useRouter, useRoute } from 'vue-router'

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
</script>

<style scoped lang="scss">
@use '@/styles/variables/colors' as *;

.header-container {
  margin: 30px 0;
  display: flex;
  align-items: center;
  gap: 12px;

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
