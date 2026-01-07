<template>
  <aside class="map-skeleton-container cx-card">
    <map class="map-skeleton-container__content skeleton-loading" />
    <footer class="map-skeleton-container__footer">
      <span class="map-skeleton-container__footer-placeholder skeleton-loading" />
    </footer>
  </aside>
</template>

<style scoped lang="scss">
.map-skeleton-container {
  height: 100%;
  padding: 0;

  .map-skeleton-container__content {
    height: 480px;
    width: 100%;
  }

  .map-skeleton-container__footer {
    padding: 32px 30px;

    .map-skeleton-container__footer-placeholder {
      display: block;
      margin-top: 1px;
      height: 18px;
      width: 240px;
    }
  }
}
</style>
