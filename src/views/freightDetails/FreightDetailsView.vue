<template>
  <div class="delivery-container">
    <DetailsPartial class="delivery-container__info-details" />
    <MapPartial
      :is-loading="isLoadingFreightDetails"
      class="delivery-container__info-map"
    />
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent } from 'vue'
import { mapActions, mapState } from 'pinia'
import { useFreightDetailsStore } from '@/store/freightDetails.ts'
import { usePageStore } from '@/store/page'
import { toast } from '@/plugins/toastfy'

const DetailsPartial = defineAsyncComponent(() => import('./partials/DetailsPartial.vue'))
const MapPartial = defineAsyncComponent(() => import('./partials/MapPartial.vue'))

export default {
  components: {
    DetailsPartial,
    MapPartial,
  },
  computed: {
    ...mapState(useFreightDetailsStore, [
      'freightDetailsCustomer',
      'isLoadingFreightDetails'
    ])
  },
  async beforeMount () {
    this.setPageIsLoading(true)

    const deliveryId = Number(this.$route.params.id ?? 0)
    await this.getFreightDetails(deliveryId)
      .catch(() => {
        toast.error(`Ops! ${this.$t('errors.freight-not-found')}.`)
        this.$router.push('/')
      })

    this.setPageTitle(this.freightDetailsCustomer?.name)
    this.setPageSubtitle(`ID do cliente: ${this.freightDetailsCustomer?.id}`)
    this.setPageIsLoading(false)
  },
  methods: {
    ...mapActions(useFreightDetailsStore, [
      'getFreightDetails'
    ]),
    ...mapActions(usePageStore, [
      'setPageTitle',
      'setPageSubtitle',
      'setPageIsLoading'
    ])
  }
}
</script>

<style scoped lang="scss">
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
