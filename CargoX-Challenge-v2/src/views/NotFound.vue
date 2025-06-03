<template>
  <div class="error-container">
    <h1 class="error-container__title">
      {{ $t('errors.404.code') }}
    </h1>
    <h2 class="error-container__sub-title">
      {{ $t('errors.404.message') }}
    </h2>
    <button
      class="error-container__button cx-button"
      @click="$router.push('/')"
    >
      {{ $t(`buttons.go-back`) }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style lang="scss" scoped>
.error-container {
  font-size: 1.4em;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;

  .error-container__sub-title {
    font-size: 1em;
  }
}
</style>
