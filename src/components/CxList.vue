<template>
  <div class="list-container">
    <ul
      v-if="list.length"
      class="list-container__list"
    >
      <li
        v-for="item in list"
        :key="item"
        class="list-container__list-item"
      >
        {{ item }}
      </li>
    </ul>
    <span
      v-else
      class="no-content"
    >
      {{ $t(`no-content.${noContent}`) }}
    </span>
  </div>
</template>

<script lang="ts">
import type { PropType } from "vue"

export default {
  props: {
    list: {
      type: Array as PropType<string[]>,
      required: true
    },
    noContent: {
      type: String,
      default: 'no-data'
    }
  }
}
</script>

<style scoped lang="scss">
.list-container {
  .list-container__list {
    margin-left: 18px;

    .list-container__list-item {
      margin-bottom: 6px;
      &:last-child { margin-bottom: 0; }
    }
  }
}
</style>
