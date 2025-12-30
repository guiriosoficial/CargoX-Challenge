<template>
  <div class="delivery-container">
    <DetailsPartial class="delivery-container__info-details" />
    <MapPartial
      :isLoading="isLoadingDelivery"
      class="delivery-container__info-map"
    />
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent } from 'vue'
import { mapActions, mapState } from 'pinia'
import { useDeliveryStore } from "@/store/delivery/index.js";
import { usePageStore } from "@/store/page/index.js";
import { toast } from 'vue3-toastify'

const DetailsPartial = defineAsyncComponent(() => import('./DetailsPartial.vue'))
const MapPartial = defineAsyncComponent(() => import('./MapPartial.vue'))

export default {
  components: {
    DetailsPartial,
    MapPartial,
  },
  computed: {
    ...mapState(useDeliveryStore, [
      'customer',
      'isLoadingDelivery'
    ])
  },
  async beforeMount () {
    this.clearDelivery()

    this.setPageIsLoading(true)
    this.getDelivery(this.$route.params.id)
      .catch(() => {
        toast.error(`Ops! ${this.$t('errors.delivery-not-found')}.`)
        this.$router.push('/')
      })

    this.setPageTitle(this.customer?.name)
    this.setPageSubtitle(`ID do cliente: ${this.customer?.id}`)
    this.setPageIsLoading(false)
  },
  methods: {
    ...mapActions(useDeliveryStore, [
      'getDelivery',
      'clearDelivery'
    ]),
    ...mapActions(usePageStore, [
      'setPageTitle',
      'setPageSubtitle',
      'setPageIsLoading'
    ])
  }
}
</script>

<style lang="scss" scoped>
.delivery-container {
  display: flex;
  gap: 20px;

  .delivery-container__info-details {
    flex: 1;
  }

  .delivery-container__info-map {
    width: 480px;
    height: fit-content;
    position: sticky;
    top: 20px;
  }
}

@media (max-width: 1080px) {
  .delivery-container {
    flex-direction: column;

    .delivery-container__info-map { width: 100%; }
  }
}

@media (max-width: 600px) {
  .delivery-container {
    gap: 10px;
  }
}
</style>
