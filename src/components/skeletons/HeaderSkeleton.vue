<template>
  <header class="header-skeleton-container">
    <h1 class="header-skeleton-container__title skeleton-loading" />
    <h2 class="header-skeleton-container__sub-title skeleton-loading" />
  </header>
</template>

<style scoped lang="scss">
@use '@/styles/mixins/breakpoints' as *;

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

@include max-width(md) {
  .header-skeleton-container {
    margin: 30px 20px
  }
}
</style>
