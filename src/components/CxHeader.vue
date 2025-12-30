<template>
  <HeaderSkeleton v-if="isLoading" />

  <header
    v-else
    class="header-container"
  >
    <h1 class="header-container__title">
      {{ title.toUpperCase() }}
    </h1>
    <h2 class="header-container__sub-title">
      {{ subtitle }}
    </h2>
  </header>
</template>

<script lang="ts">
import { defineAsyncComponent } from 'vue'

const HeaderSkeleton = defineAsyncComponent(() => import('./skeleton/HeaderSkeleton.vue'))

export default {
  components: {
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
.header-container {
  margin: 30px 0;

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
