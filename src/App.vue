<template>
  <div id="app">
    <div v-if="$store.getters.loggedIn">
      <iccs340-left-sidenav></iccs340-left-sidenav>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    Iccs340LeftSidenav: require('./LeftSidenav')
  }
}
</script>

<style>
</style>
