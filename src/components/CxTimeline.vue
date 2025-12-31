<template>
  <article class="timeline-container">
    <div
      v-for="(step, index) in timeline"
      :key="step.key"
      class="timeline-container__step"
    >
      <div class="timeline-container__progress-bar">
        <span
          :class="{
            'timeline-container__progress-dot--done': step.time,
            'timeline-container__progress-dot--doing': !step.time && timeline[index - 1]?.time
          }"
          class="timeline-container__progress-dot"
        />
        <span
          :class="{
            'timeline-container__progress-line--done': timeline[index + 1]?.time,
            'timeline-container__progress-line--doing': step.time && !timeline[index + 1]?.time
          }"
          class="timeline-container__progress-line"
        />
      </div>
      <div class="timeline-container__step-info">
        <h4 class="timeline-container__step-title">
          {{ step.label }}
        </h4>
        <span class="timeline-container__step-time">
          {{ step.time }}
        </span>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import type { PropType } from 'vue'

interface ITimeline {
  key: string
  label: string
  time: Date
}

export default {
  props: {
    timeline: {
      type: Array as PropType<ITimeline[]>,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">
@use '@/styles/variables/colors' as *;

.timeline-container {
  .timeline-container__step {
    margin-bottom: 6px;
    display: flex;
    gap: 12px;

    &:last-child {
      margin-bottom: 0;

      .timeline-container__progress-bar {
        .timeline-container__progress-line {
          display: none;
        }
      }
    }

    .timeline-container__progress-bar {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 6px;

      .timeline-container__progress-dot {
        display: inline-block;
        border-radius: 50%;
        border: 2px solid $color-gray;
        width: 24px;
        height: 24px;
        position: relative;
        &--done {
          background-color: $color-warning;
          border-color: $color-warning;
          &:before {
            content: '';
            position: absolute;
            display: inline-block;
            width: 8px;
            height: 5px;
            border-bottom: 3px solid $color-white;
            border-left: 3px solid $color-white;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -70%) rotate(-45deg);
          }
        }
        &--doing {
          border-color: $color-info;
        }
      }

      .timeline-container__progress-line {
        display: inline-block;
        background-color: $color-gray;
        width: 2px;
        flex: 1;
        &--done {
          background-color: $color-warning;
        }
        &--doing {
          background-color: $color-info;
        }
      }
    }

    .timeline-container__step-info {
      display: flex;
      flex-direction: column;
      gap: 6px;

      .timeline-container__step-title {
        display: flex;
        align-items: center;
        height: 24px;
        color: $color-text-regular;
        font-weight: 600;
      }

      .timeline-container__step-time {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
