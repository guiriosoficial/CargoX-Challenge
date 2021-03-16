<template>
  <aside class="map-container cx-card">
    <map class="map-container__content">
      <iframe
        :src="routeUrl"
        width="100%"
        height="480"
        loading="lazy"
        class="map-container__iframe"
        allowfullscreen
      />
    </map>
    <footer class="map-container__footer">
      Última atualização: {{ route.lastAppUpdateAt }}
    </footer>
  </aside>
</template>

<script>
import { mapGetters } from 'vuex'
const API_KEY = process.env.VUE_APP_API_KEY

export default {
  name: 'Map',
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
      // &mode=transit
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables/colors.scss';

.map-container {
  height: 100%;
  padding: 0;

  .map-container__footer {
    padding: 30px;
    color: $--color-text-footer;
  }
}
</style>
