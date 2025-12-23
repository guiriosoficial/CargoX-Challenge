<template>
  <table class="table-container">
    <thead class="table-container__head">
      <tr class="table-container__header">
        <th>{{ $t('labels.delivery-id') }}</th>
        <th>{{ $t('labels.customer-tracking-number') }}</th>
        <th>{{ $t('labels.customer-name') }}</th>
        <th>{{ $t('labels.delivery-status') }}</th>
      </tr>
    </thead>

    <tbody
      v-if="tableData.length"
      class="table-container__body"
    >
      <tr
        v-for="data in tableData"
        :key="data.token"
        class="table-container__row"
        @click="goToDelivery(data.id)"
      >
        <td>{{ data.id }}</td>
        <td>{{ data.customer_tracking_number }}</td>
        <td>{{ data.customer?.name.toUpperCase() }}</td>
        <td>
          <Tags
            :tags="[{
              label: data.last_status?.translation,
              isActive: data.last_status?.status === 'delivered'
            }]"
          />
        </td>
      </tr>
    </tbody>

    <div
      v-else
      class="table-container__empty-state"
    >
      <fa
        icon="folder-open"
        class="table-container__empty-state-icon"
      />
      Nada por aqui
    </div>
  </table>
</template>

<script>
import { defineAsyncComponent } from 'vue'

const Tags = defineAsyncComponent(() => import('@/components/CxTags.vue'))

export default {
  components: {
    Tags
  },
  props: {
    tableData: {
      type: Array,
      required: true
    }
  },
  methods: {
    goToDelivery (id) {
      this.$router.push({
        name: 'Delivery',
        params: { id }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@use 'sass:color';

.table-container {
  display: flex;
  flex-direction: column;
  height: 100%;

  .table-container__head {
    .table-container__header {
      display: flex;
      color: colors.$color-text-title;
      padding: 0 0 6px;
      text-align: left;
      border-bottom: 2px solid colors.$color-background-light;
      & > th {
        flex: 1;
        font-weight: 500;
        padding-right: 10px;
      }
    }
  }

  .table-container__body {
    overflow: auto;

    .table-container__row {
      display: flex;
      align-items: center;
      padding: 10px 0;
      border-bottom: 1px solid colors.$color-background-light;
      &:nth-child(even) {
        background-color: color.mix(colors.$color-background-light, colors.$color-white, 30%);
      }
      &:hover {
        cursor: pointer;
        background-color: color.mix(colors.$color-background-light, colors.$color-white, 50%);
      }
      & > td {
        flex: 1;
        padding-right: 10px;
      }
    }
  }

  .table-container__empty-state {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 6px;
    color: colors.$color-text-placeholder;
    font-size: 1.2em;

    .table-container__empty-state-icon {
      width: 110px;
    }
  }
}

@media (max-width: 600px) {
  .table-container {
    font-size: .89em;

    .table-container__head {
      .table-container__header > th {
        &:first-child { padding-left: 20px; }
        &:last-child { padding-right: 10px; }
      }
    }

    .table-container__body {
      .table-container__row  > td {
        &:first-child { padding-left: 20px; }
        &:last-child { padding-right: 10px; }
      }
    }
  }
}
</style>
