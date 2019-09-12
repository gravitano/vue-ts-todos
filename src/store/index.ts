import Vue from 'vue';
import Vuex from 'vuex';
import {TodoItemModel} from '@/types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    newTodo: '',
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
  mutations: {
    addTodo(state, newTodo) {
      state.todos.push(newTodo);
    },
    setNewTodo(state, value) {
      state.newTodo = value;
    },
  },
  actions: {
    addNewTodo({commit}, newTodo) {
      commit('addTodo', newTodo);
    },
  },
  getters: {
    todos: state => state.todos,
    uncompletedTodos: state =>
      state.todos.filter((todo: TodoItemModel) => !todo.completed),
    todosCount: (state, getters) => getters.uncompletedTodos.length,
  },
});
