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
        :text="detail.text"
        :tags="detail.tags"
        :list="detail.list"
        :timeline="detail.timeline"
        :no-content="detail.noContent"
        class="column-container__component"
      />
    </div>
  </article>
</template>

<script lang="ts">
import { defineAsyncComponent } from 'vue'

const CxList = defineAsyncComponent(() => import('@/components/CxList.vue'))
const CxPlainText = defineAsyncComponent(() => import('@/components/CxPlainText.vue'))
const CxTags = defineAsyncComponent(() => import('@/components/CxTags.vue'))
const CxTimeline = defineAsyncComponent(() => import('@/components/CxTimeline.vue'))
const ColumnSkeleton = defineAsyncComponent(() => import('@/views/freightDetails/skeletons/ColumnSkeleton.vue'))

export default {
  components: {
    CxList,
    CxPlainText,
    CxTags,
    CxTimeline,
    ColumnSkeleton
  },
  props: {
    detail: {
      type: Object,
      required: true
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  }
}
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
