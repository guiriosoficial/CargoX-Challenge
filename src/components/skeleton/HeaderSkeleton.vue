<template>
  <header class="header-skeleton-container">
    <h1 class="header-skeleton-container__title skeleton-loading" />
    <h2 class="header-skeleton-container__sub-title skeleton-loading" />
  </header>
</template>

<style scoped lang="scss">
.header-skeleton-container {
  margin: 30px 0;

  .header-skeleton-container__title {
    width: 340px;
    height: 34px;
    margin-bottom: 5px;
  }

  .header-skeleton-container__sub-title {
    width: 240px;
    height: 18px;
  }
}

@media (max-width: 768px) {
  .header-skeleton-container {
    margin: 30px 20px
  }
}
</style>
