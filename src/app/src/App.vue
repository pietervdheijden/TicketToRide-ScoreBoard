<template>
  <div id="app">
    <img id="ttr-header" alt="Ticket to ride" src="./assets/ttr-header.png">
    
    <Navigation></Navigation>

    <div id="router-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'App',
  components: {
    'Navigation': Navigation
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  max-width: 80%;
}
#ttr-header {
  max-width: 100%;
  max-height: 100px;
}
#router-view {
  margin-top: 10px
}
</style>
