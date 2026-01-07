<template>
  <header class="header-container">
    <h1 class="header-container__title skeleton-loading" />
    <h2 class="header-container__sub-title skeleton-loading" />
  </header>
</template>

<style lang="scss" scoped>
.header-container {
  margin: 30px 0;
  display: block;

  .header-container__title {
    width: 340px;
    height: 34px;
    margin-bottom: 5px;
  }

  .header-container__sub-title {
    width: 240px;
    height: 18px;
  }
}

@media (max-width: 768px) {
  .header-container {
    margin: 30px 20px
  }
}
</style>
