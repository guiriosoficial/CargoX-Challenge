<template>
  <aside class="map-container cx-card">
    <map class="map-container__content skeleton-loading" />
    <footer class="map-container__footer">
      <span class="map-container__footer-placeholder skeleton-loading" />
    </footer>
  </aside>
</template>

<style lang="scss" scoped>
.map-container {
  height: 100%;
  padding: 0;

  .map-container__content {
    height: 480px;
    width: 100%;
  }

  .map-container__footer {
    padding: 32px 30px;

    .map-container__footer-placeholder {
      display: block;
      margin-top: 1px;
      height: 18px;
      width: 240px;
    }
  }
}
</style>
