<template>
  <article class="timeline-container">
    <ol class="timeline-container__list">
      <li
        v-for="(step, index) in timeline"
        :key="step.key"
        class="timeline-container__step"
      >
        <div class="timeline-container__progress-bar">
          <span
            :class="{
              'timeline-container__progress-dot--done': isStepDone(index),
              'timeline-container__progress-dot--doing': isStepDoing(index)
            }"
            class="timeline-container__progress-dot"
          />
          <span
            :class="{
              'timeline-container__progress-line--done': isStepDone(index + 1),
              'timeline-container__progress-line--doing': isStepDoing(index + 1),
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
      </li>
    </ol>
  </article>
</template>

<script setup lang="ts">
import type { HistoryStatus } from '@/types/status'

export interface ITimeline {
  key: HistoryStatus
  label: string
  time: string
}

interface ITimelineProps {
  timeline?: ITimeline[]
}

const {
  timeline = []
} = defineProps<ITimelineProps>()

function isStepDone(index: number) {
  const currentStep = timeline[index]
  return currentStep?.time && isNextStepStartedOrLast(index)
}

function isStepDoing(index: number) {
  const currentStep = timeline[index]
  return currentStep?.time && !isNextStepStartedOrLast(index)
}

function isNextStepStartedOrLast(index: number) {
  const nextStep = timeline[index + 1]
  const isLastStep = index === timeline.length - 1

  return nextStep?.time || isLastStep
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
