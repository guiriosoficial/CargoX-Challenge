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

<script lang="ts">
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core'

export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'fas'
    }
  },
  computed: {
    definition() {
      const { type, icon } = this

      return findIconDefinition({
        prefix: type,
        iconName: icon
      })
    },
    width() {
      return this.definition?.icon[0] || 0
    },
    height() {
      return this.definition?.icon[1] || 0
    },
    svgPath() {
      return this.definition?.icon[4]
    }
  }
}
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
