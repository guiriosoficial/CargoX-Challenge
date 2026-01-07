<template>
  <TableSkeleton v-if="isLoading" />
  <table
    v-else
    class="table-container"
  >
    <thead class="table-container__head">
      <tr class="table-container__header">
        <th>{{ $t('labels.freight-id') }}</th>
        <th>{{ $t('labels.customer-tracking-number') }}</th>
        <th>{{ $t('labels.customer-name') }}</th>
        <th>{{ $t('labels.freight-status') }}</th>
      </tr>
    </thead>

    <tbody
      v-if="tableData?.length"
      class="table-container__body"
    >
      <tr
        v-for="data in tableData"
        :key="data.id"
        class="table-container__row"
        @click="goToFreight(data.id)"
      >
        <td>{{ data.id }}</td>
        <td>{{ data.customer_tracking_number }}</td>
        <td>{{ data.customer?.name.toUpperCase() }}</td>
        <td>
          <CxTags
            :tags="[{
              label: data.last_status?.translation,
              isActive: data.last_status?.status === 'delivered'
            }]"
          />
        </td>
      </tr>
    </tbody>

    <tbody
      v-else
      class="table-container__empty-state"
    >
      <Icon
        icon="folder-open"
        class="table-container__empty-state-icon"
      />
      Nada por aqui
    </tbody>
  </table>
</template>

<script setup lang="ts">
import TableSkeleton from '@/views/freightSummary/skeletons/TableSkeleton.vue'
import { defineAsyncComponent } from 'vue'
import { useRouter } from 'vue-router'
import type { IFreightSummary } from '@/types/freight'

interface ITablePartialProps {
  tableData: IFreightSummary[]
  isLoading: boolean
}

const CxTags = defineAsyncComponent(() => import('@/components/CxTags.vue'))

const router = useRouter()

const {
  tableData,
  isLoading
} = defineProps<ITablePartialProps>()

function goToFreight(id: number) {
  router.push({
    name: 'FreightDetails',
    params: { id }
  })
}
</script>

<style scoped lang="scss">
@use '@/styles/variables/colors' as *;
@use 'sass:color';

.table-container {
  display: flex;
  flex-direction: column;
  overflow: auto;

  .table-container__head {
    .table-container__header {
      display: flex;
      color: $color-text-title;
      padding: 0 0 6px;
      text-align: left;
      border-bottom: 2px solid $color-background-light;
      & > th {
        flex: 1;
        font-weight: 500;
        padding-right: 10px;
      }
    }
  }

  .table-container__body {
    .table-container__row {
      display: flex;
      align-items: center;
      padding: 10px 0;
      border-bottom: 1px solid $color-background-light;
      &:nth-child(even) {
        background-color: color.mix($color-background-light, $color-white, 30%);
      }
      &:hover {
        cursor: pointer;
        background-color: color.mix($color-background-light, $color-white, 50%);
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
    color: $color-text-placeholder;
    font-size: 1.2em;

    .table-container__empty-state-icon {
      width: 110px;
    }
  }
}

@media (max-width: 768px) {
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
