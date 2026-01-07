<template>
  <MapSkeleton v-if="isLoadingFreightDetails" />
  <aside
    v-else
    class="map-container cx-card"
  >
    <map class="map-container__content">
      <iframe
        :src="routeUrl"
        title="Google Direction Map"
        width="100%"
        height="480"
        loading="lazy"
        class="map-container__iframe"
        allowfullscreen
      />
    </map>

    <footer class="map-container__footer">
      {{ $t('labels.last-update') }}: {{ dateTime(freightDetailsRoute.lastAppUpdateAt) || $t('no-content.no-date') }}
    </footer>
  </aside>
</template>

<script setup lang="ts">
import MapSkeleton from '@/views/freightDetails/skeletons/MapSkeleton.vue'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useFreightDetailsStore } from '@/store/freightDetails'
import { dateTime } from '@/filters'
const API_KEY = import.meta.env.VITE_API_KEY

const freightDetailsStore = useFreightDetailsStore()

const {
  freightDetailsRoute,
  isLoadingFreightDetails
} = storeToRefs(freightDetailsStore)

const routeUrl = computed(() => {
  const { origin, destination } = freightDetailsRoute.value

  return `
    https://www.google.com/maps/embed/v1/directions?key=${API_KEY}
    &origin=${origin?.latitude},+${origin?.longitude}
    &destination=${destination?.latitude},+${destination?.longitude}
  `
})
</script>

<style scoped lang="scss">
@use '@/styles/variables/colors' as * ;

.map-container {
  padding: 0;

  .map-container__footer {
    padding: 30px;
    color: $color-text-footer;
  }
}
</style>
