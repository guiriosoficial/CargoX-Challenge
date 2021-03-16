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

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
