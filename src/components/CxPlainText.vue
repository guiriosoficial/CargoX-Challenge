<template>
  <div class="plain-text-container">
    <span
      v-if="text"
      class="plain-text-container__content"
      v-html="upperCaseText"
    />
    <span
      v-else
      class="no-content"
    >
      {{ $t(`no-content.${noContent}`) }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface IPlainTextProps {
  text?: string | number
  noContent?: string
}

const {
  text = '',
  noContent = 'no-data'
} = defineProps<IPlainTextProps>()

const upperCaseText = computed(() => String(text).toUpperCase())
</script>

<style scoped lang="scss">
.plain-text-container {
  .plain-text-container__content {
    & > p {
      display: block;
      margin-block-end: 6px;
      margin-bottom: 6px !important;
      &:last-child { margin-bottom: 0; }
    }
  }
}
</style>
