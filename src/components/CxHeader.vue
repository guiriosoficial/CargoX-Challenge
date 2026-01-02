<template>
  <HeaderSkeleton v-if="isLoading" />

  <header
    v-else
    class="header-container"
  >
    <CxFaIcon
      v-if="$route.path !== '/'"
      icon="arrow-left"
      class="header-container__back-icon"
      @click="$router.go(-1)"
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

<script lang="ts">
import { defineAsyncComponent } from 'vue'
import CxFaIcon from "@/components/CxFaIcon.vue";

const HeaderSkeleton = defineAsyncComponent(() => import('./skeleton/HeaderSkeleton.vue'))

export default {
  components: {
    CxFaIcon,
    HeaderSkeleton
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  }
}
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

@media (max-width: 600px) {
  .header-container {
    margin: 30px 20px
  }
}
</style>
