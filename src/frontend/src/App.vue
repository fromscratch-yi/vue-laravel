<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view />
  </div>
</template>
<style lang="scss">
  .error_list {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      font-size: 13px;
      color: #eb9c9c;
    }
  }
</style>
<script>
import Navigation from '@/components/Navigation'

export default {
  components: {
    Navigation
  }
}
</script>
