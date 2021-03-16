<template>
  <main class="home-container">
    <Header
      :title="$t('labels.welcome')"
      :subtitle="$t('labels.select-delivery')"
      class="home-container__header"
    />

    <component
      :is="isLoadingDeliveries ? 'TableSkeleton' : 'Table'"
      :table-data="deliveries"
      class="home-container__table cx-card"
    />
  </main>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex'
import { useToast } from 'vue-toastification'
import TableSkeleton from './skeleton/TableSkeleton'

const Header = defineAsyncComponent(() => import('@/components/Header' /* webpackChunkName: 'Header' */))
const Table = defineAsyncComponent(() => import('./Table' /* webpackChunkName: 'Table' */))

export default {
  name: 'Home',
  components: {
    Header,
    Table,
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
        useToast().error(`Ops! ${this.$t('errors.somethig-wrong')}.`)
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
@import '@/styles/variables/colors.scss';

.home-container {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 20px);

  .home-container__table {
    flex: 1;
    overflow: hidden;
  }
}
</style>
