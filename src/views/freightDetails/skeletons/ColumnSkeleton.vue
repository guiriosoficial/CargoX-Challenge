<template>
  <article class="column-container">
    <Icon class="column-container__icon skeleton-loading" />
    <div class="column-container__container">
      <h5 class="column-container__label skeleton-loading" />
      <div class="column-container__component skeleton-loading" />
    </div>
  </article>
</template>

<style lang="scss" scoped>
.column-container {
  display: flex;
  gap: 14px;
  margin-bottom: 20px;
  &:last-child { margin-bottom: 0; }

  .column-container__icon {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }

  .column-container__container {
    display: flex;
    flex-direction: column;
    gap: 6px;

    .column-container__label {
      margin: 6px 0;
      height: 14px;
      width: 120px;
    }

    .column-container__component {
      height: 20px;
      width: 200px;
    }
  }
}
</style>
