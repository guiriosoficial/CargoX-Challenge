<template>
  <div class="list-container">
    <ul
      v-if="list.length"
      class="list-container__list"
    >
      <li
        v-for="(item, index) in list"
        :key="item + index"
        class="list-container__list-item"
      >
        {{ item }}
      </li>
    </ul>
    <p
      v-else
      role="status"
      aria-live="polite"
      class="emptyState"
    >
      {{ $t(`emptyState.${emptyState}`) }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface IListProps {
  list: string[]
  emptyState?: string
}

const {
  list,
  emptyState = 'noData'
} = defineProps<IListProps>()
</script>

<style scoped lang="scss">
.list-container {
  .list-container__list {
    margin-left: 16px;

    .list-container__list-item {
      margin-bottom: 4px;
      &:last-child { margin-bottom: 0; }
    }
  }
}
</style>
