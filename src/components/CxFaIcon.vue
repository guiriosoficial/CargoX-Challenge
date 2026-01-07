<template>
  <span class="icon-container">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 ${width} ${height}`"
      :class="{ 'icon-container__icon--hidden': !icon }"
      class="icon-container__icon"
    >
      <path
        fill="currentColor"
        :d="svgPath"
      />
    </svg>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core'
import type { IconName, IconPrefix } from '@fortawesome/free-brands-svg-icons'

interface ICxFaIconProps {
  icon: IconName
  type?: IconPrefix
}

const {
  icon,
  type = 'fas'
} = defineProps<ICxFaIconProps>()

const definition = computed(() => {
  return findIconDefinition({
    prefix: type,
    iconName: icon
  })
})

const width = computed(() => definition.value?.icon[0] || 0)

const height = computed(() => definition.value?.icon[1] || 0)

const svgPath = computed(() => String(definition.value?.icon[4] ?? ''))
</script>

<style lang="scss" scoped>
.icon-container {
  display: block;

  .icon-container__icon {
    width: 100%;
    height: 100%;

    &--hidden {
      visibility: hidden;
    }
  }
}
</style>
