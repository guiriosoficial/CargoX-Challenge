<template>
  <div class="plain-text-container">
    <div
      v-if="text"
      class="plain-text-container__content"
    >
      <p
        v-for="(line, index) in normalizedText"
        :key="line + index"
      >
        {{ line }}
      </p>
    </div>
    <p
      v-else
      class="emptyState"
      role="status"
    >
      {{ $t(`emptyState.${emptyState}`) }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface IPlainTextProps {
  text?: string[] | string
  emptyState?: string
}

const {
  text = '',
  emptyState = 'noData'
} = defineProps<IPlainTextProps>()

const normalizedText = computed(() => {
  return !Array.isArray(text) ? [text] : text
})
</script>

<style scoped lang="scss">
.plain-text-container {
  .plain-text-container__content {
    & > p {
      display: block;
      margin-bottom: 4px;
      text-transform: uppercase;
      &:last-child { margin-bottom: 0; }
    }
  }
}
</style>
