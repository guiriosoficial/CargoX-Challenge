<template>
  <div class="tags-container">
    <ul
      v-if="tags.length"
      class="tags-container__content"
      role="listbox"
    >
      <li
        v-for="tag in tags"
        :key="tag.label"
        :aria-selected="tag.isActive"
        :class="{ 'tags-container__tag--active': tag.isActive }"
        class="tags-container__tag"
        role="option"
      >
        {{ tag.label }}
      </li>
    </ul>
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
export interface ITag {
  isActive: boolean
  label: string
}

interface ITagsProps {
  tags?: ITag[]
  emptyState?: string
}

const {
  tags = [],
  emptyState = 'noData'
} = defineProps<ITagsProps>()
</script>

<style scoped lang="scss">
@use '@/styles/variables/colors' as *;

.tags-container {
  .tags-container__content {
    display: flex;
    list-style: none;

    .tags-container__tag {
      font-size: 0.83em;
      color: $color-text-placeholder;
      border: 1px solid $color-text-placeholder;
      border-radius: 6px;
      padding: 4px 6px;
      margin-left: 6px;

      &:first-child { margin-left: 0; }

      &--active {
        background-color: $color-success;
        border: 1px solid $color-success;
        color: $color-white;
      }
    }
  }
}
</style>
