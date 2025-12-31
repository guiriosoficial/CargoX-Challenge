<template>
  <section class="details-container cx-card">
    <div class="details-container__column">
      <InfoPartial
        v-for="detail in detailsListLeft"
        :key="detail.key"
        :is-loading="isLoadingDelivery"
        :detail="detail"
      />
    </div>

    <div class="details-container__column">
      <InfoPartial
        v-for="detail in detailsListRight"
        :key="detail.key"
        :is-loading="isLoadingDelivery"
        :detail="detail"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineAsyncComponent } from 'vue'
import { mapState } from 'pinia'
import { useDeliveryStore } from '@/store/delivery'
import { dateTime, phoneNumber } from '@/filters'
import type { IDocument, ILocation, IPayment, ITruck } from '@/types/base.ts'

const InfoPartial = defineAsyncComponent(() => import('./InfoPartial.vue'))

export default {
  components: {
    InfoPartial
  },
  computed: {
    ...mapState(useDeliveryStore, [
      'details',
      'isLoadingDelivery'
    ]),

    detailsListLeft () {
      const {
        appDataList,
        handleTrucksList,
        handleAddress,
        details
      } = this
      const {
        id,
        customer_tracking_number,
        trucker,
        trucks,
        origin,
        destination,
        trucker_seeker,
        salesperson
      } = details

      return [
        {
          key: 'delivery-id',
          text: id,
          icon: 'orcid',
          iconType: 'fab',
          component: 'CxPlainText'
        },
        {
          key: 'customer-tracking-number',
          text: customer_tracking_number,
          icon: 'orcid',
          iconType: 'fab',
          component: 'CxPlainText'
        },
        {
          key: 'driver',
          text: trucker?.name,
          icon: 'user-astronaut',
          component: 'CxPlainText'
        },
        {
          key: 'phone',
          text: phoneNumber(trucker?.phone),
          noContent: 'no-phone',
          icon: 'phone-alt',
          component: 'CxPlainText'
        },
        {
          key: 'app',
          list: appDataList,
          noContent: 'no-app',
          icon: 'mobile-alt',
          component: 'CxList'
        },
        {
          key: 'trucks',
          text: handleTrucksList(trucks),
          noContent: 'no-trucks',
          icon: 'truck',
          component: 'CxPlainText'
        },
        {
          key: 'origin',
          text: handleAddress(origin),
          noContent: 'no-location',
          icon: 'map-marker-alt',
          component: 'CxPlainText'
        },
        {
          key: 'destination',
          text: handleAddress(destination),
          noContent: 'no-location',
          icon: 'flag',
          component: 'CxPlainText'
        },
        {
          key: 'operation',
          text: trucker_seeker?.name,
          icon: 'user-cog',
          component: 'CxPlainText'
        },
        {
          key: 'sale',
          text: salesperson?.name,
          icon: 'user-tag',
          component: 'CxPlainText'
        }
      ]
    },

    detailsListRight () {
      const {
        $t,
        handleTags,
        timelineSteps,
        details
      } = this
      const {
        pickup_date,
        delivery_date,
        estimated_time_of_arrival,
        manual_input_estimated_time_of_arrival,
        documents,
        payments
      } = details

      return [
        {
          key: 'pickup-date',
          text: dateTime(pickup_date),
          noContent: 'no-date',
          icon: 'calendar-day',
          component: 'CxPlainText'
        },
        {
          key: 'delivery-date',
          text: dateTime(delivery_date),
          noContent: 'no-date',
          tooltip: $t('tooltips.delivery_date'),
          component: 'CxPlainText'
        },
        {
          key: 'estimated-arrival',
          text: dateTime(estimated_time_of_arrival),
          noContent: 'no-date',
          tooltip: $t('tooltips.estimated_time_of_arrival'),
          component: 'PlainText'
        },
        {
          key: 'manual-arrival',
          text: dateTime(manual_input_estimated_time_of_arrival),
          noContent: 'no-date',
          tooltip: $t('tooltips.manual_input_estimated_time_of_arrival'),
          component: 'CxPlainText'
        },
        {
          key: 'documents',
          tags: handleTags(documents, 'documents'),
          noContent: 'no-documents',
          icon: 'file-alt',
          component: 'CxTags'
        },
        {
          key: 'payments',
          tags: handleTags(payments, 'payments'),
          noContent: 'no-payments',
          icon: 'hand-holding-usd',
          component: 'CxTags'
        },
        {
          key: 'status',
          timeline: timelineSteps,
          icon: 'ellipsis-v',
          component: 'CxTimeline'
        }
      ]
    },

    appDataList () {
      const { $t, details: { trucker } } = this
      const dataKeys = [
        'last_app_open_at',
        'last_app_position_at',
        'first_login_at',
        'app_version'
      ]

      if (trucker?.has_app) {
        return dataKeys.map(key => {
          const label = $t(`labels.${key.replace(/_/g, '-')}`)
          const value = dateTime(new Date(trucker[key]), 'DD/MM/YYYY') || trucker[key]
          return `${label} ${value}`
        })
      } return []
    },

    timelineSteps () {
      return this.details.status_history?.map(step => {
        const { status, translation, at } = step
        return {
          key: status,
          label: translation,
          time: dateTime(at)
        }
      })
    }
  },
  methods: {
    handleTrucksList (trucks: ITruck[] = []) {
      let trucksString = ''
      trucks.forEach(truck => {
        const { plate, type } = truck
        trucksString += `<p>${type?.name} - ${plate}</p>`
      })
      return trucksString
    },

    handleAddress (locale: ILocation = {} as ILocation) {
      const { address, number, city, state, zip_code } = locale
      return `
        <p>${address}, ${number}</p>
        <p>${city} - ${state} - CEP: ${zip_code}</p>
      `
    },

    handleTags (list: IDocument[] | IPayment[] = [], i18n: string) {
      return list.map(({ name, status, at }) => ({
        label: this.$t(`${i18n}.${name}`),
        isActive: ['emitted', 'ok'].includes(status) && Boolean(at)
      })) ?? []
    }
  }
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

@media (max-width: 1280px) {
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
