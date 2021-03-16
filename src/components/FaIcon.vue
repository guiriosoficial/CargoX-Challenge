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
        :d="svg_path"
      />
    </svg>
  </span>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core'

export default defineComponent({
  name: 'FontAwesomeIcon',

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

  setup (props) {
    const { type, icon } = props
    const definition = computed(() => {
      return findIconDefinition({
        prefix: type,
        iconName: icon
      })
    })

    const width = computed(() => definition.value?.icon[0] || 0)
    const height = computed(() => definition.value?.icon[1] || 0)
    const svg_path = computed(() => definition.value?.icon[4])

    return { width, height, svg_path }
  }
})
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
