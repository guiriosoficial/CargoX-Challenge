<template>
  <article class="info-container">
    <fa class="info-container__icon skeleton-loading" />
    <div class="info-container__container">
      <h5 class="info-container__label skeleton-loading" />
      <div class="info-container__component skeleton-loading" />
    </div>
  </article>
</template>

<style lang="scss" scoped>
.info-container {
  display: flex;
  gap: 14px;
  margin-bottom: 20px;
  &:last-child { margin-bottom: 0; }

  .info-container__icon {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }

  .info-container__container {
    display: flex;
    flex-direction: column;
    gap: 6px;

    .info-container__label {
      margin: 6px 0;
      height: 14px;
      width: 120px;
    }

    .info-container__component {
      height: 20px;
      width: 200px;
    }
  }
}
</style>
