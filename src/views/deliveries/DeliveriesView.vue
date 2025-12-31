<template>
  <TablePartial
    :is-loading="isLoadingDeliveries"
    :table-data="deliveries"
    class="home-container__table cx-card"
  />
</template>

<script lang="ts">
import { defineAsyncComponent } from 'vue'
import { mapActions, mapState } from 'pinia'
import { useDeliveriesStore } from '@/store/deliveries'
import { usePageStore } from '@/store/page'
import { toast } from '@/plugins/toastfy'

const TablePartial = defineAsyncComponent(() => import('./partials/TablePartial.vue'))

export default {
  components: {
    TablePartial,
  },
  computed: {
    ...mapState(useDeliveriesStore, [
      'deliveries',
      'isLoadingDeliveries'
    ])
  },
  async beforeMount () {
    this.setPageTitle(this.$t('labels.welcome'))
    this.setPageSubtitle(this.$t('labels.select-delivery'))

    this.getDeliveries()
      .catch(() => {
        toast.error(`Ops! ${this.$t('errors.something-wrong')}.`)
      })
  },
  methods: {
    ...mapActions(useDeliveriesStore, [
      'getDeliveries',
    ]),
    ...mapActions(usePageStore, [
      'setPageTitle',
      'setPageSubtitle'
    ])
  }
}
</script>

<style scoped lang="scss">
.home-container {
  .home-container__table {
    flex: 1;
    overflow: hidden;
  }
}

@media (max-width: 600px) {
  .home-container {
    height: calc(100vh);

    .home-container__table.cx-card {
      padding: 30px 0;
    }
  }
}
</style>
