<template>
  <section class="details-container cx-card">
    <div class="details-container__column">
      <component
        :is="isLoadingDelivery ? 'InfoSkeleton' : 'Info'"
        v-for="detail in detailsListLeft"
        :key="detail.key"
        :detail="detail"
      />
    </div>
    <div class="details-container__column">
      <component
        :is="isLoadingDelivery ? 'InfoSkeleton' : 'Info'"
        v-for="detail in detailsListRight"
        :key="detail.key"
        :detail="detail"
      />
    </div>
  </section>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters } from 'vuex'
import { dateTime, phoneNumber } from '@/filters'

import InfoSkeleton from './skeleton/InfoSkeleton'
const Info = defineAsyncComponent(() => import('./Info' /* webpackChunkName: 'Info' */))

export default {
  name: 'Details',
  components: {
    Info,
    InfoSkeleton
  },
  computed: {
    ...mapGetters({
      details: 'getDelivery',
      isLoadingDelivery: 'getIsLoadingDelivery'
    }),

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
          component: 'PlainText'
        },
        {
          key: 'customer-tracking-number',
          text: customer_tracking_number,
          icon: 'orcid',
          iconType: 'fab',
          component: 'PlainText'
        },
        {
          key: 'driver',
          text: trucker?.name,
          icon: 'user-astronaut',
          component: 'PlainText'
        },
        {
          key: 'phone',
          text: phoneNumber(trucker?.phone),
          noContent: 'no-phone',
          icon: 'phone-alt',
          component: 'PlainText'
        },
        {
          key: 'app',
          list: appDataList,
          noContent: 'no-app',
          icon: 'mobile-alt',
          component: 'List'
        },
        {
          key: 'trucks',
          text: handleTrucksList(trucks),
          noContent: 'no-trucks',
          icon: 'truck',
          component: 'PlainText'
        },
        {
          key: 'origin',
          text: handleAddress(origin),
          noContent: 'no-location',
          icon: 'map-marker-alt',
          component: 'PlainText'
        },
        {
          key: 'destination',
          text: handleAddress(destination),
          noContent: 'no-location',
          icon: 'flag',
          component: 'PlainText'
        },
        {
          key: 'operation',
          text: trucker_seeker?.name,
          icon: 'user-cog',
          component: 'PlainText'
        },
        {
          key: 'sale',
          text: salesperson?.name,
          icon: 'user-tag',
          component: 'PlainText'
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
          component: 'PlainText'
        },
        {
          key: 'delivery-date',
          text: dateTime(delivery_date),
          noContent: 'no-date',
          tooltip: $t('tooltips.delivery_date'),
          component: 'PlainText'
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
          component: 'PlainText'
        },
        {
          key: 'documents',
          tags: handleTags(documents, 'documents'),
          noContent: 'no-documents',
          icon: 'file-alt',
          component: 'Tags'
        },
        {
          key: 'payments',
          tags: handleTags(payments, 'payments'),
          noContent: 'no-payments',
          icon: 'hand-holding-usd',
          component: 'Tags'
        },
        {
          key: 'status',
          timeline: timelineSteps,
          icon: 'ellipsis-v',
          component: 'Timeline'
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
    handleTrucksList (trucks = []) {
      let trucksString = ''
      trucks.forEach(truck => {
        const { plate, type } = truck
        trucksString += `<p>${type?.name} - ${plate}</p>`
      })
      return trucksString
    },

    handleAddress (locale = {}) {
      const { address, number, city, state, zip_code } = locale
      return `
        <p>${address}, ${number}</p>
        <p>${city} - ${state} - CEP: ${zip_code}</p>
      `
    },

    handleTags (list = [], i18n) {
      return list.map(({ name, status, at }) => ({
        label: this.$t(`${i18n}.${name}`),
        isActive: ['emitted', 'ok'].includes(status) && Boolean(at)
      })) || []
    }
  }
}
</script>

<style lang="scss" scoped>
.details-container {
  display: flex;
  flex-direction: row;
  gap: 20px;

  .details-container__column {
    &:first-child { flex: 5; }
    &:last-child { flex: 4; }
  }
}

@media (max-width: 1080px) {
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
