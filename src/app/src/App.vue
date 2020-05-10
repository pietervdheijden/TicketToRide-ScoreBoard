<template>
  <div id="app">
    <img id="ttr-header" alt="Ticket to ride" src="./assets/ttr-header.png">
    
    <Navigation></Navigation>

    <div>
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
  /* text-align: center; */
  color: #2c3e50;
  margin: 30px;
  /* margin-left: 60px;
  margin-right: 60px; */
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  max-width: 60%;
  /* align-items:center; */
}
#ttr-header {
  max-width: 100%;
  /* height: auto; */
  max-height: 100px;
}
</style>
