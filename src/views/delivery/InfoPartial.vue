<template>
  <InfoSkeleton v-if="isLoading" />
  <article
      v-else
      class="info-container"
  >
    <Icon
      :icon="detail.icon"
      :type="detail.iconType || 'fas'"
      class="info-container__icon"
    />

    <div class="info-container__container">
      <span class="info-container__label">
        {{ $t(`labels.${detail.key}`) }}
        <Icon
          v-if="detail.tooltip"
          :data-tooltip="detail.tooltip"
          icon="question-circle"
          class="info-container__icon tooltip"
        />
      </span>

      <component
        :is="detail.component"
        :text="detail.text"
        :tags="detail.tags"
        :list="detail.list"
        :timeline="detail.timeline"
        :no-content="detail.noContent"
        class="info-container__component"
      />
    </div>
  </article>
</template>

<script lang="ts">
import { defineAsyncComponent } from 'vue'

const List = defineAsyncComponent(() => import('@/components/CxList.vue'))
const PlainText = defineAsyncComponent(() => import('@/components/CxPlainText.vue'))
const Tags = defineAsyncComponent(() => import('@/components/CxTags.vue'))
const Timeline = defineAsyncComponent(() => import('@/components/CxTimeline.vue'))
const InfoSkeleton = defineAsyncComponent(() => import('./skeleton/InfoSkeleton.vue'))

export default {
  components: {
    List,
    PlainText,
    Tags,
    Timeline,
    InfoSkeleton
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

<style lang="scss" scoped>
@use '@/styles/variables/colors' as *;

.info-container {
  display: flex;
  gap: 14px;
  margin-bottom: 20px;
  &:last-child { margin-bottom: 0; }

  .info-container__icon {
    width: 26px;
    height: 26px;
    color: $color-text-placeholder;
  }

  .info-container__container {
    display: flex;
    flex-direction: column;
    gap: 6px;

    .info-container__label {
      display: flex;
      align-items: center;
      font-size: .84em;
      height: 26px;
      gap: 4px;
      color: $color-text-placeholder;
      font-weight: 500;

      .info-container__icon {
        height: 16px;
        width: 16px;
      }
    }
  }
}
</style>
