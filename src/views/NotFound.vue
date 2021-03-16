<template>
  <div class="error-container">
    <h1>{{ $t('errors.404.code') }}</h1>
    <h4>{{ $t('errors.404.message') }}</h4>
    <Button
      placeholder="go-back"
      @click="$router.push('/')"
    />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

const Button = defineAsyncComponent(() => import('@/components/Button' /* webpackChunkName: 'Button' */))

export default {
  name: 'NotFound',
  components: {
    Button
  }
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
}
</style>
