<template>
  <MapSkeleton v-if="isLoading" />
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
import { defineComponent } from 'vue'
import { mapState } from 'pinia'
import { useDeliveryStore } from "@/store/delivery/index.ts";
import { dateTime } from '@/filters/index.js'
const API_KEY = import.meta.env.VITE_API_KEY

const MapSkeleton = defineComponent(() => import('./skeleton/MapSkeleton.vue'))

export default {
  components: {
    MapSkeleton
  },
  computed: {
    ...mapState(useDeliveryStore, [
      'route',
      'isLoading'
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

<style lang="scss" scoped>
@use '@/styles/variables/colors' as * ;

.map-container {
  padding: 0;

  .map-container__footer {
    padding: 30px;
    color: $color-text-footer;
  }
}
</style>
