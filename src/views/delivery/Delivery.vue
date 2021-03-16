<template>
  <main class="delivery-container">
    <component
      :is="isLoadingDelivery ? 'HeaderSkeleton' : 'Header'"
      :title="customer?.name"
      :subtitle="`ID do cliente ${customer.id}`"
    />
    <section class="delivery-container__info">
      <Details class="delivery-container__info-details" />
      <component
        :is="isLoadingDelivery ? 'MapSkeleton' : 'Map'"
        class="delivery-container__info-map"
      />
    </section>
  </main>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex'
import { useToast } from 'vue-toastification'

import HeaderSkeleton from '@/components/skeleton/HeaderSkeleton'
import MapSkeleton from './skeleton/MapSkeleton'
const Details = defineAsyncComponent(() => import('./Details' /* webpackChunkName: 'Details' */))
const Header = defineAsyncComponent(() => import('@/components/Header' /* webpackChunkName: 'Header' */))
const Map = defineAsyncComponent(() => import('./Map' /* webpackChunkName: 'Map' */))

export default {
  name: 'App',
  components: {
    Details,
    Header,
    Map,
    MapSkeleton,
    HeaderSkeleton
  },
  computed: {
    ...mapGetters({
      customer: 'getCostumer',
      isLoadingDelivery: 'getIsLoadingDelivery'
    }),
    deliveryId () {
      return this.$route.params.id
    }
  },
  methods: {
    ...mapActions(['getDelivery']),

    }
  }
}
</script>

<style lang="scss" scoped>
.delivery-container {
  .delivery-container__info {
    display: flex;
    gap: 20px;

    .delivery-container__info-details { flex: 3; }
    .delivery-container__info-map {
      flex: 2;
      position: sticky;
      top: 20px;
    }
  }
}

@media (max-width: 1080px) {
  .delivery-container {
    .delivery-container__info {
      .delivery-container__info-details { flex: 1; }
      .delivery-container__info-map { flex: 1; }
    }
  }
}

@media (max-width: 900px) {
  .delivery-container {
    .delivery-container__info {
      flex-direction: column;
    }
  }
}

@media (max-width: 600px) {
  .delivery-container {
    .delivery-container__info {
      gap: 10px
    }
  }
}
</style>
