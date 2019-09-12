import {TodoItemModel} from '@/types';

export default {
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
    newTodo: state => state.newTodo,
    todos: state => state.todos,
    uncompletedTodos: state =>
      state.todos.filter((todo: TodoItemModel) => !todo.completed),
    todosCount: (state, getters) => getters.uncompletedTodos.length,
  },
};
