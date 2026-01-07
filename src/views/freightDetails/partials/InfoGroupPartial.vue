<template>
  <section class="details-container cx-card">
    <div class="details-container__column">
      <InfoPartial
        v-for="detail in detailsListLeft"
        :key="detail.key"
        :is-loading="isLoadingFreightDetails"
        :detail="detail"
      />
    </div>

    <div class="details-container__column">
      <InfoPartial
        v-for="detail in detailsListRight"
        :key="detail.key"
        :is-loading="isLoadingFreightDetails"
        :detail="detail"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import InfoPartial from './InfoPartial.vue'
import CxList from '@/components/CxList.vue'
import CxPlainText from '@/components/CxPlainText.vue'
import CxTags from '@/components/CxTags.vue'
import CxTimeline from '@/components/CxTimeline.vue'
import { computed, markRaw } from 'vue'
import { useI18n } from 'vue-i18n'
import { storeToRefs } from 'pinia'
import { useFreightDetailsStore } from '@/store/freightDetails.ts'
import { dateTime, phoneNumber } from '@/filters'
import type { IDocument, ILocation, IPayment, ITruck, ITrucker } from '@/types/base'
import type { IColumnDetail } from './InfoPartial.vue'

const COMPONENT_MAP = {
  text: markRaw(CxPlainText),
  tags: markRaw(CxTags),
  list: markRaw(CxList),
  timeline: markRaw(CxTimeline)
}

const { t } = useI18n()
const freightDetailsStore = useFreightDetailsStore()

const {
  freightDetails,
  isLoadingFreightDetails
} = storeToRefs(freightDetailsStore)

const detailsListLeft = computed<IColumnDetail[]>(() => {
  const details = freightDetails.value

  return [
    {
      key: 'freight-id',
      text: String(details.id),
      icon: 'orcid',
      iconType: 'fab',
      component: COMPONENT_MAP.text
    },
    {
      key: 'customer-tracking-number',
      text: details.customer_tracking_number,
      icon: 'orcid',
      iconType: 'fab',
      component: COMPONENT_MAP.text
    },
    {
      key: 'driver',
      text: details.trucker?.name,
      icon: 'user-astronaut',
      component: COMPONENT_MAP.text
    },
    {
      key: 'phone',
      text: phoneNumber(details.trucker?.phone),
      noContent: 'no-phone',
      icon: 'phone-alt',
      component: COMPONENT_MAP.text
    },
    {
      key: 'app',
      list: appDataList.value,
      noContent: 'no-app',
      icon: 'mobile-alt',
      component: COMPONENT_MAP.list
    },
    {
      key: 'trucks',
      text: handleTrucksList(details.trucks),
      noContent: 'no-trucks',
      icon: 'truck',
      component: COMPONENT_MAP.text
    },
    {
      key: 'origin',
      text: handleAddress(details.origin),
      noContent: 'no-location',
      icon: 'map-marker-alt',
      component: COMPONENT_MAP.text
    },
    {
      key: 'destination',
      text: handleAddress(details.destination),
      noContent: 'no-location',
      icon: 'flag',
      component: COMPONENT_MAP.text
    },
    {
      key: 'operation',
      text: details.trucker_seeker?.name,
      icon: 'user-cog',
      component: COMPONENT_MAP.text
    },
    {
      key: 'sale',
      text: details.salesperson?.name,
      icon: 'user-tag',
      component: COMPONENT_MAP.text
    }
  ]
})

const detailsListRight = computed<IColumnDetail[]>(() => {
  const details = freightDetails.value

  return [
    {
      key: 'pickup-date',
      text: dateTime(details.pickup_date),
      noContent: 'no-date',
      icon: 'calendar-day',
      component: COMPONENT_MAP.text
    },
    {
      key: 'freight-date',
      text: dateTime(details.delivery_date),
      noContent: 'no-date',
      tooltip: t('tooltips.freight-date'),
      component: COMPONENT_MAP.text
    },
    {
      key: 'estimated-arrival',
      text: dateTime(details.estimated_time_of_arrival),
      noContent: 'no-date',
      tooltip: t('tooltips.estimated-time-of-arrival'),
      component: COMPONENT_MAP.text
    },
    {
      key: 'manual-arrival',
      text: dateTime(details.manual_input_estimated_time_of_arrival),
      noContent: 'no-date',
      tooltip: t('tooltips.manual-input-estimated-time-of-arrival'),
      component: COMPONENT_MAP.text
    },
    {
      key: 'documents',
      tags: handleTags(details.documents, 'documents'),
      noContent: 'no-documents',
      icon: 'file-alt',
      component: COMPONENT_MAP.tags
    },
    {
      key: 'payments',
      tags: handleTags(details.payments, 'payments'),
      noContent: 'no-payments',
      icon: 'hand-holding-usd',
      component: COMPONENT_MAP.tags
    },
    {
      key: 'status',
      timeline: timelineSteps.value,
      icon: 'ellipsis-v',
      component: COMPONENT_MAP.timeline
    }
  ]
})

const appDataList = computed(() => {
  const { trucker } = freightDetails.value

  const dataKeys: (keyof ITrucker)[] = [
    'last_app_open_at',
    'last_app_position_at',
    'first_login_at',
    'app_version'
  ]

  if (!trucker?.has_app) return []

  return dataKeys.map((key) => {
    const label = t(`labels.${key.replace(/_/g, '-')}`)
    const value = dateTime(String(trucker[key]), 'DD/MM/YYYY')
    return `${label} ${value}`
  })
})

const timelineSteps = computed(() => {
  const history = freightDetails.value?.status_history

  if (!history) return []

  return history.map((step) => ({
    key: step.status,
    label: step.translation || '',
    time: dateTime(step.at)
  }))
})

function handleTrucksList(trucks: ITruck[] = []) {
  return trucks.map((truck) => `${truck.type?.name} - ${truck.plate}`)
}

function handleTags(list: IDocument[] | IPayment[] = [], i18n: string) {
  return list.map(({ name, status, at }) => ({
    label: t(`${i18n}.${name}`),
    isActive: ['emitted', 'ok'].includes(status) && Boolean(at)
  }))
}

function handleAddress(locale: ILocation = {} as ILocation) {
  if (!locale.address) return []

  const { address, number, city, state, zip_code } = locale

  return [
    `${address}, ${number}`,
    `${city} - ${state} - CEP: ${zip_code}`
  ]
}
</script>

<style scoped lang="scss">
.details-container {
  display: flex;
  flex-direction: row;
  gap: 20px;

  .details-container__column {
    &:first-child { flex: 5; }
    &:last-child { flex: 4; }
  }
}

@media (max-width: 1200px) {
  .details-container {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .details-container__column {
      &:first-child { flex: 5; }
      &:last-child { flex: 4; }
    }
  }
}
</style>
