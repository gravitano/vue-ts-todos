import {TodoItemModel} from '@/types';
import {Module} from 'vuex';
import {RootState} from '@/store';

interface TodosState {
  newTodo: string;
  todos: TodoItemModel[];
}

export default <Module<TodosState, RootState>>{
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
    addTodo(state, newTodo: TodoItemModel) {
      state.todos.push(newTodo);
    },
    setNewTodo(state, value: string) {
      state.newTodo = value;
    },
  },
  actions: {
    addNewTodo({commit}, newTodo: TodoItemModel) {
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
