import {TodoItemModel} from '@/types';
import {ActionTree, GetterTree, Module, MutationTree} from 'vuex';
import {RootState} from '@/store';

interface TodosState {
  newTodo: string;
  todos: TodoItemModel[];
}

export default <Module<TodosState, RootState>>{
  state: <TodosState>{
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
  mutations: <MutationTree<TodosState>>{
    addTodo(state: TodosState, newTodo: TodoItemModel) {
      state.todos.push(newTodo);
    },
    setNewTodo(state: TodosState, value: string) {
      state.newTodo = value;
    },
  },
  actions: <ActionTree<TodosState, RootState>>{
    addNewTodo({commit}, newTodo: TodoItemModel) {
      commit('addTodo', newTodo);
    },
  },
  getters: <GetterTree<TodosState, RootState>>{
    newTodo: (state: TodosState) => state.newTodo,
    todos: (state: TodosState) => state.todos,
    uncompletedTodos: (state: TodosState) =>
      state.todos.filter((todo: TodoItemModel) => !todo.completed),
    todosCount: (state: TodosState, getters: any) =>
      getters.uncompletedTodos.length,
  },
};
