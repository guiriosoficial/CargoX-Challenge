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
import type { ITimeline } from '@/components/CxTimeline.vue'

const { t } = useI18n()
const freightDetailsStore = useFreightDetailsStore()

const {
  freightDetails,
  isLoadingFreightDetails
} = storeToRefs(freightDetailsStore)

const detailsListLeft = computed<IColumnDetail[]>(() => {
  const {
    id,
    customer_tracking_number,
    trucker,
    trucks,
    origin,
    destination,
    trucker_seeker,
    salesperson
  } = freightDetails.value

  return [
    {
      key: 'freight-id',
      text: id,
      icon: 'orcid',
      iconType: 'fab',
      component: markRaw(CxPlainText)
    },
    {
      key: 'customer-tracking-number',
      text: customer_tracking_number,
      icon: 'orcid',
      iconType: 'fab',
      component: markRaw(CxPlainText)
    },
    {
      key: 'driver',
      text: trucker?.name,
      icon: 'user-astronaut',
      component: markRaw(CxPlainText)
    },
    {
      key: 'phone',
      text: phoneNumber(trucker?.phone),
      noContent: 'no-phone',
      icon: 'phone-alt',
      component: markRaw(CxPlainText)
    },
    {
      key: 'app',
      list: appDataList.value,
      noContent: 'no-app',
      icon: 'mobile-alt',
      component: markRaw(CxList)
    },
    {
      key: 'trucks',
      text: handleTrucksList(trucks),
      noContent: 'no-trucks',
      icon: 'truck',
      component: markRaw(CxPlainText)
    },
    {
      key: 'origin',
      text: handleAddress(origin),
      noContent: 'no-location',
      icon: 'map-marker-alt',
      component: markRaw(CxPlainText)
    },
    {
      key: 'destination',
      text: handleAddress(destination),
      noContent: 'no-location',
      icon: 'flag',
      component: markRaw(CxPlainText)
    },
    {
      key: 'operation',
      text: trucker_seeker?.name,
      icon: 'user-cog',
      component: markRaw(CxPlainText)
    },
    {
      key: 'sale',
      text: salesperson?.name,
      icon: 'user-tag',
      component: markRaw(CxPlainText)
    }
  ]
})

const detailsListRight = computed<IColumnDetail[]>(() => {
  const {
    pickup_date,
    delivery_date,
    estimated_time_of_arrival,
    manual_input_estimated_time_of_arrival,
    documents,
    payments
  } = freightDetails.value

  return [
    {
      key: 'pickup-date',
      text: dateTime(pickup_date),
      noContent: 'no-date',
      icon: 'calendar-day',
      component: markRaw(CxPlainText)
    },
    {
      key: 'freight-date',
      text: dateTime(delivery_date),
      noContent: 'no-date',
      tooltip: t('tooltips.freight-date'),
      component: markRaw(CxPlainText)
    },
    {
      key: 'estimated-arrival',
      text: dateTime(estimated_time_of_arrival),
      noContent: 'no-date',
      tooltip: t('tooltips.estimated-time-of-arrival'),
      component: markRaw(CxPlainText)
    },
    {
      key: 'manual-arrival',
      text: dateTime(manual_input_estimated_time_of_arrival),
      noContent: 'no-date',
      tooltip: t('tooltips.manual-input-estimated-time-of-arrival'),
      component: markRaw(CxPlainText)
    },
    {
      key: 'documents',
      tags: handleTags(documents, 'documents'),
      noContent: 'no-documents',
      icon: 'file-alt',
      component: markRaw(CxTags)
    },
    {
      key: 'payments',
      tags: handleTags(payments, 'payments'),
      noContent: 'no-payments',
      icon: 'hand-holding-usd',
      component: markRaw(CxTags)
    },
    {
      key: 'status',
      timeline: timelineSteps.value,
      icon: 'ellipsis-v',
      component: markRaw(CxTimeline)
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

const timelineSteps = computed<ITimeline[]>(() => {
  const history = freightDetails.value?.status_history

  if (!history) return []

  return history.map((step) => ({
    key: step.status,
    label: step.translation || '',
    time: dateTime(step.at)
  }))
})

function handleTrucksList (trucks: ITruck[] = []) {
  let trucksString = ''
  trucks.forEach((truck) => {
    const { plate, type } = truck
    trucksString += `<p>${type?.name} - ${plate}</p>`
  })
  return trucksString
}

function handleAddress (locale: ILocation = {} as ILocation) {
  const { address, number, city, state, zip_code } = locale
  return `
    <p>${address}, ${number}</p>
    <p>${city} - ${state} - CEP: ${zip_code}</p>
  `
}

function handleTags (list: IDocument[] | IPayment[] = [], i18n: string) {
  return list.map(({ name, status, at }) => ({
    label: t(`${i18n}.${name}`),
    isActive: ['emitted', 'ok'].includes(status) && Boolean(at)
  })) ?? []
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
