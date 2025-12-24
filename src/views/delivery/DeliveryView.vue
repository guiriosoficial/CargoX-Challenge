<template>
  <main class="delivery-container">
    <CxHeader
      :title="customer?.name"
      :subtitle="`ID do cliente ${customer.id}`"
      :isLoading="isLoadingDelivery"
      class="delivery-container__header"
    />

    <section class="delivery-container__info">
      <DetailsPartial class="delivery-container__info-details" />
      <MapPartial
        :isLoading="isLoadingDelivery"
        class="delivery-container__info-map"
      />
    </section>
  </main>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex'
// import toast from 'vue3-toastify'

const DetailsPartial = defineAsyncComponent(() => import('./DetailsPartial.vue'))
const CxHeader = defineAsyncComponent(() => import('@/components/CxHeader.vue'))
const HeaderSkeleton = defineAsyncComponent(() => import('@/components/skeleton/HeaderSkeleton.vue'))
const MapPartial = defineAsyncComponent(() => import('./MapPartial.vue'))
const MapSkeleton = defineAsyncComponent(() => import('./skeleton/MapSkeleton.vue'))

export default {
  components: {
    DetailsPartial,
    CxHeader,
    HeaderSkeleton,
    MapPartial,
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
        this.$toast.error(`Ops! ${this.$t('errors.delivery-not-found')}.`)
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
