<template>
  <ul class="nav_list">
    <li>
      <router-link :to="{ name: 'home' }">HOME</router-link>
    </li>
    <li v-if="!isLogin">
      <router-link :to="{ name: 'login' }">Login</router-link>
    </li>
    <li v-if="!isLogin">
      <router-link :to="{ name: 'register' }">Register</router-link>
    </li>
    <li v-if="isLogin">
      <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'navigation',
  computed: {
    isLogin () {
      return this.$store.getters['auth/check']
    }
  }
}
</script>
<style lang="scss">
  .nav_list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px auto;
    max-width: 300px;
    li {
      list-style: none;
    }
  }
</style>
