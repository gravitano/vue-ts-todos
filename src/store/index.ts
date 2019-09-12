import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        title: 'Go to store',
        completed: true,
      },
      {
        title: 'Go to library',
        completed: false,
      },
      {
        title: 'Go to school',
        completed: false,
      },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    todos: state => state.todos,
  },
});
