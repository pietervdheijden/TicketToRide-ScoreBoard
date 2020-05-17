<template>
  <div>
    <h2>Scoreboard</h2>
  
    <p>Overall classification</p>
    <b-table hover :items="items" :fields="fields"></b-table>

    <p>Classification per game</p>

    <p>Trendanalysis (classification per month)</p>
    <p>Trendanalysis (classification per year)</p>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      fields: [
        {
          key: 'name',
          label: 'Name',
          sortable: true
        },
        {
          key: 'games',
          label: 'Games',
          sortable: true
        },
        {
          key: 'wins',
          label: 'Wins',
          sortable: true
        },
        {
          key: 'points',
          label: 'Points',
          sortable: true
        },
      ],
      items: [
        // Note 'isActive' is left out and will not appear in the rendered table
        { isActive: true, name: 'Juliette', games: 30, wins: 10 },
        { isActive: true, name: 'Anneke', games: 40, wins: 20 },
        { isActive: true, name: 'Frans', games: 20, wins: 5 },
      ]
    }
  }
}
</script>