<template>
  <div class="plain-text-container">
    <div
      v-if="text"
      class="plain-text-container__content"
    >
      <p
        v-for="line in upperCaseText"
        :key="line"
      >
        {{ line }}
      </p>
    </div>
    <p
      v-else
      class="no-content"
      role="status"
    >
      {{ $t(`no-content.${noContent}`) }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface IPlainTextProps {
  text?: string[] | string
  noContent?: string
}

const {
  text = '',
  noContent = 'no-data'
} = defineProps<IPlainTextProps>()

const upperCaseText = computed(() => {
  return !Array.isArray(text) ? [text] : text
})
</script>

<style scoped lang="scss">
.plain-text-container {
  .plain-text-container__content {
    & > p {
      display: block;
      margin-block-end: 6px;
      margin-bottom: 6px !important;
      text-transform: uppercase;
      &:last-child { margin-bottom: 0; }
    }
  }
}
</style>
