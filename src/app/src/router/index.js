import Vue from "vue";
import VueRouter from "vue-router";
import Scoreboard from '@/views/Scoreboard.vue';
import PageNotFound from '@/views/PageNotFound.vue';
import NewGame from '@/views/NewGame.vue'

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history', // removes # from URL
  routes: [
    {
      name: 'Scoreboard',
      path: '/',
      component: Scoreboard
    },
    {
      name: 'NewGame',
      path: '/new-game',
      component: NewGame
    },
    {
      name: 'PageNotFound',
      path: '*',
      component: PageNotFound
    }
  ]
});