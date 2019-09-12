<template>
  <div>
    <h3>
      Todos
      <span v-if="todosCount">({{ todosCount }})</span>
    </h3>
    <ul>
      <template v-for="todo in todos">
        <todo-item :todo="todo" :key="todo.title" />
      </template>
    </ul>
    <input
      type="text"
      placeholder="Type new todo and press enter..."
      v-model="newTodo"
      @keydown.enter="addTodo"
    />
  </div>
</template>

<script lang="ts">
import {Vue, Component, Watch} from 'vue-property-decorator';
import TodoItem from '@/components/TodoItem.vue';
import {TodoItemModel} from '@/types';
import {mapGetters, mapState} from 'vuex';
import {Action, Getter, Mutation} from 'vuex-class';

@Component({
  computed: {
    // ...mapState(['newTodo']), // ini tidak bisa reactive
    // ...mapGetters({
    // todos: 'todos',
    // uncompleted: 'uncompletedTodos',
    // todosCount: 'todosCount',
    // }),
  },
  components: {
    TodoItem,
  },
})
export default class Todos extends Vue {
  @Getter('todos') todos!: TodoItemModel[];
  @Getter('todosCount') todosCount!: number;
  @Action('addNewTodo') saveTodo!: (newTodo: TodoItemModel) => void;
  @Mutation('setNewTodo') setNewTodo!: (value: string) => void;
  // note: the "!" symbol is definite assignment assertion modifier [ts feature]
  // ref: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#strict-class-initialization

  get newTodo() {
    return this.$store.getters.newTodo;
  }

  set newTodo(value) {
    this.setNewTodo(value);
  }

  addTodo() {
    this.saveTodo({
      title: this.newTodo,
      completed: false,
    });
    this.newTodo = '';
  }

  @Watch('newTodo')
  onNewTodoChanged(newVal: TodoItemModel, oldVal: TodoItemModel) {
    console.log({newVal, oldVal});
  }
}
</script>

<style scoped></style>
