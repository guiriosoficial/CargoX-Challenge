<template>
  <main class="delivery-container">
    <component
      :is="isLoadingDelivery ? 'HeaderSkeleton' : 'Header'"
      :title="customer?.name"
      :subtitle="`ID do cliente ${customer.id}`"
      class="delivery-container__header"
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

const Details = defineAsyncComponent(() => import('./Details' /* webpackChunkName: 'Details' */))
const Header = defineAsyncComponent(() => import('@/components/Header' /* webpackChunkName: 'Header' */))
const HeaderSkeleton = defineAsyncComponent(() => import('@/components/skeleton/HeaderSkeleton' /* webpackChunkName: 'HeaderSkeleton' */))
const Map = defineAsyncComponent(() => import('./Map' /* webpackChunkName: 'Map' */))
const MapSkeleton = defineAsyncComponent(() => import('./skeleton/MapSkeleton' /* webpackChunkName: 'MapSkeleton' */))

export default {
  name: 'App',
  components: {
    Details,
    Header,
    HeaderSkeleton,
    Map,
    MapSkeleton
  },
  computed: {
    ...mapGetters({
      customer: 'getCostumer',
      isLoadingDelivery: 'getIsLoadingDelivery'
    })
  },
  async beforeMount () {
    this.clearDelivery()

    await this.getDelivery(this.$route.params.id)
      .catch(() => {
        useToast().error(`Ops! ${this.$t('errors.delivery-not-found')}.`)
        this.$router.push('/')
      })
  },
  methods: {
    ...mapActions([
      'getDelivery',
      'clearDelivery'
    ])
  }
}
</script>

<style lang="scss" scoped>
.delivery-container {
  .delivery-container__info {
    display: flex;
    gap: 20px;

    .delivery-container__info-details {
      flex: 3;
    }

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
