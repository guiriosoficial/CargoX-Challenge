<template>
  <article class="info-skeleton-container">
    <div class="info-skeleton-container__icon skeleton-loading" />
    <div class="info-skeleton-container__container">
      <h5 class="info-skeleton-container__label skeleton-loading" />
      <div class="info-skeleton-container__component skeleton-loading" />
    </div>
  </article>
</template>

<style scoped lang="scss">
.info-skeleton-container {
  display: flex;
  gap: 14px;
  margin-bottom: 20px;
  &:last-child { margin-bottom: 0; }

  .info-skeleton-container__icon {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }

  .info-skeleton-container__container {
    display: flex;
    flex-direction: column;
    gap: 6px;

    .info-skeleton-container__label {
      margin: 6px 0;
      height: 14px;
      width: 120px;
    }

    .info-skeleton-container__component {
      height: 20px;
      width: 200px;
    }
  }
}
</style>
