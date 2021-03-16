<template>
  <main class="main-container">
    <router-view v-slot="{ Component }">
      <transition
        name="fade"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss" scoped>
.main-container {
  padding: 0 20px 20px;
  max-width: 1600px;
  margin: auto;
}

@media (max-width: 600px) {
  .main-container {
    padding: 0;
  }
}
</style>
