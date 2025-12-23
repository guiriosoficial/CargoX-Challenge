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
    <tbody class="table-container__body">
      <tr
        v-for="n in 3"
        :key="n"
        class="table-container__row"
      >
        <td><span class="skeleton-loading" /></td>
        <td><span class="skeleton-loading" /></td>
        <td><span class="skeleton-loading" /></td>
        <td><span class="skeleton-loading" /></td>
      </tr>
    </tbody>
  </table>
</template>

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
      }
    }
  }

  .table-container__body {
    .table-container__row {
      display: flex;
      padding: 14px 0;
      border-bottom: 1px solid colors.$color-background-light;
      &:nth-child(even) {
        background-color: color.mix(colors.$color-background-light, colors.$color-white, 30%);
      }
      & > td {
        flex: 1;
        .skeleton-loading {
          display: block;
          height: 16px;
          width: 200px;
        }
      }
    }
  }
}

@media (max-width: 600px) {
  .table-container {
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
