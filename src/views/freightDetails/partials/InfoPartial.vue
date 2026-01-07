<template>
  <ColumnSkeleton v-if="isLoading" />
  <article
    v-else
    class="column-container"
  >
    <Icon
      :icon="detail.icon"
      :type="detail.iconType || 'fas'"
      class="column-container__icon"
    />

    <div class="column-container__container">
      <span class="column-container__label">
        {{ $t(`labels.${detail.key}`) }}
        <Icon
          v-if="detail.tooltip"
          :data-tooltip="detail.tooltip"
          icon="question-circle"
          class="column-container__icon tooltip"
        />
      </span>

      <component
        :is="detail.component"
        v-bind="detail"
        class="column-container__component"
      />
    </div>
  </article>
</template>

<script setup lang="ts">
import ColumnSkeleton from '@/views/freightDetails/skeletons/ColumnSkeleton.vue'
import type { Raw, Component } from 'vue'
import type { ITag } from '@/components/CxTags.vue'
import type { ITimeline } from '@/components/CxTimeline.vue'

export interface IColumnDetail {
  key: string
  component: Raw<Component>
  icon?: string
  iconType?: string
  tooltip?: string
  noContent?: string
  text?: string | number
  list?: string[]
  tags?: ITag[]
  timeline?: ITimeline[]
}

interface IColumnPartialProps {
  isLoading?: boolean
  detail: IColumnDetail
}

const {
  detail,
  isLoading = false
} = defineProps<IColumnPartialProps>()
</script>

<style scoped lang="scss">
@use '@/styles/variables/colors' as *;

.column-container {
  display: flex;
  gap: 14px;
  margin-bottom: 20px;
  &:last-child { margin-bottom: 0; }

  .column-container__icon {
    width: 26px;
    height: 26px;
    color: $color-text-placeholder;
  }

  .column-container__container {
    display: flex;
    flex-direction: column;
    gap: 6px;

    .column-container__label {
      display: flex;
      align-items: center;
      font-size: .84em;
      height: 26px;
      gap: 4px;
      color: $color-text-placeholder;
      font-weight: 500;

      .column-container__icon {
        height: 16px;
        width: 16px;
      }
    }
  }
}
</style>
