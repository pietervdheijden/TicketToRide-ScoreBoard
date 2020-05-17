<template>
  <div>
    <h2>New game</h2>
    <b-form @submit="onSubmit">

      <b-form-group label="Game:">
        <b-form-select v-model="form.game" :options="games" required></b-form-select>
      </b-form-group>

      <b-form-group label="Player scores:">
        <b-input-group id="player-input-group" inline v-for="(player,counter) in form.players" v-bind:key="counter">
            <b-input
              class="mb-2 mr-sm-2 mb-sm-0"
              placeholder="Jane Doe"
              type="text"
              v-model="player.name"
              required/>
            <b-input
              class="mb-2 mr-sm-2 mb-sm-0"
              placeholder="Points"
              type="number"
              v-model="player.points"
              required/>
            <b-button variant="danger" @click="removePlayer()">X</b-button>
          </b-input-group>

          <b-button variant="success" @click="addPlayer()">+</b-button>
      </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          game: null,
          players: [
            {name: null, points: null},
            {name: null, points: null},
          ],
        },
        games: [
          { text: 'Select One', value: null },
          'Europa',
          'US',
          'Frankrijk',
          'Duitsland',
          'Japan',
          'Italie'
        ],
      }
    },
    methods: {
      addPlayer() {
        this.form.players.push({
          name: null,
          points: null
        });
      },
      removePlayer(counter) {
        this.form.players.splice(counter, 1)
      },
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      }
    }
  }
</script>

<style scoped>
#player-input-group {
  margin: 10px 0px;
}
</style>