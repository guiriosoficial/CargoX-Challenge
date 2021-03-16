<template>
  <header class="header-container">
    <h1 class="header-container__title skeleton-loading" />
    <h4 class="header-container__sub-title skeleton-loading" />
  </header>
</template>

<script>

export default {
  name: 'HeaderSkeleton'
}
</script>

<style lang="scss" scoped>
.header-container {
  margin: 30px 0;

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

@media (max-width: 600px) {
  .header-container {
    margin: 30px 20px
  }
}
</style>
