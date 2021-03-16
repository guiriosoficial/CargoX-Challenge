<template>
  <header class="header-container">
    <h1>
      {{ String(title).toUpperCase() }}
    </h1>
    <h2 class="header-container__sub-title">
      {{ subtitle }}
    </h2>
  </header>
</template>

<script>

export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables/colors';

.header-container {
  margin: 30px 0;

  .header-container__sub-title {
    font-weight: 500;
    font-size: 1em;
  }
}

@media (max-width: 600px) {
  .header-container {
    margin: 30px 20px
  }
}
</style>
