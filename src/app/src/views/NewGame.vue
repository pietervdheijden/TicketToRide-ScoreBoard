<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset">

      <b-form-group id="game" label="Game:" label-for="game">
        <b-form-select
          id="game"
          v-model="form.game"
          :options="games"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group
        id="players"
        label="Players:"
        label-for="players"
      >
        <b-form inline>
          <label class="sr-only" for="inline-form-input-name">Name</label>
          <b-input
            id="inline-form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Jane Doe"
          ></b-input>

          <label class="sr-only" for="inline-form-input-username">Username</label>
          <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
            <b-input id="inline-form-input-username" placeholder="Username"></b-input>
          </b-input-group>

          <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox>

          <b-button variant="primary">Save</b-button>
        </b-form>


        <b-button variant="primary" v-on:click="addPlayer()">Add player</b-button>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>



    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          game: null,
          players: [{name: '', points: null}],
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
        alert('addPlayer!')
        this.form.players.push({
          name: '',
          points: 0
        });
      },
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      }
    }
  }
</script>