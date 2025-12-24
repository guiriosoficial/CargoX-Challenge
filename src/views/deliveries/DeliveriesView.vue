<template>
  <main class="home-container">
    <CxHeader
      :title="$t('labels.welcome')"
      :subtitle="$t('labels.select-delivery')"
      class="home-container__header"
    />

    <component
      :is="isLoadingDeliveries ? 'TableSkeleton' : 'TablePartial'"
      :table-data="deliveries"
      class="home-container__table cx-card"
    />
  </main>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex'

const CxHeader = defineAsyncComponent(() => import('@/components/CxHeader.vue'))
const TablePartial = defineAsyncComponent(() => import('./TablePartial.vue'))
const TableSkeleton = defineAsyncComponent(() => import('./skeleton/TableSkeleton.vue'))

export default {
  components: {
    CxHeader,
    TablePartial,
    TableSkeleton
  },
  computed: {
    ...mapGetters({
      deliveries: 'getDeliveries',
      isLoadingDeliveries: 'getIsLoadingDeliveries'
    })
  },
  async beforeMount () {
    this.clearDelivery()

    await this.getDeliveries()
      .catch(() => {
        this.$toast.error(`Ops! ${this.$t('errors.somethig-wrong')}.`)
      })
  },
  methods: {
    ...mapActions([
      'getDeliveries',
      'clearDelivery'
    ])
  }
}
</script>

<style lang="scss" scoped>
.home-container {
  display: flex;
  flex-direction: column;
  height: 100%;

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
