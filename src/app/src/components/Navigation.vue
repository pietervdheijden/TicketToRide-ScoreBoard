<template>
  <div>
    <b-navbar type="light">
      <b-navbar-nav>
        <b-navbar-brand :href="urls.Scoreboard">Scoreboard</b-navbar-brand>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-navbar-brand :href="urls.NewGame">New game</b-navbar-brand>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>


<script>
export default {
  name: 'Navigation',
  data() {
    return {
      urls: {
        Scoreboard: this.$router.resolve({name: 'Scoreboard'}).href,
        NewGame: this.$router.resolve({name: 'NewGame'}).href,
      }
    }
  } 
}
</script>

<style scoped>
.navbar {
  padding-left: 0px;
  padding-right: 0px;
}
</style>