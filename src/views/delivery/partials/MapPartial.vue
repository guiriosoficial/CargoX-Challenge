<template>
  <MapSkeleton v-if="isLoadingDelivery" />
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
      Última atualização: {{ dateTime(route.lastAppUpdateAt) }}
    </footer>
  </aside>
</template>

<script lang="ts">
import { defineAsyncComponent } from 'vue'
import { mapState } from 'pinia'
import { useDeliveryStore } from '@/store/delivery.ts'
import { dateTime } from '@/filters'
const API_KEY = import.meta.env.VITE_API_KEY

const MapSkeleton = defineAsyncComponent(() => import('../skeleton/MapSkeleton.vue'))

export default {
  components: {
    MapSkeleton
  },
  computed: {
    ...mapState(useDeliveryStore, [
      'route',
      'isLoadingDelivery'
    ]),

    routeUrl () {
      const { origin, destination } = this.route
      return `
        https://www.google.com/maps/embed/v1/directions?key=${API_KEY}
        &origin=${origin?.latitude},+${origin?.longitude}
        &destination=${destination?.latitude},+${destination?.longitude}
      `
    }
  },
  methods:{
    dateTime
  }
}
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
