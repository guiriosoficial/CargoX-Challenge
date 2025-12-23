<template>
  <aside class="map-container cx-card">
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

<script>
import { mapGetters } from 'vuex'
import { dateTime } from '@/filters'
const API_KEY = import.meta.env.VITE_API_KEY

export default {
  computed: {
    ...mapGetters({
      route: 'getRoute'
    }),

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
.map-container {
  height: 100%;
  padding: 0;

  .map-container__footer {
    padding: 30px;
    color: colors.$color-text-footer;
  }
}
</style>
