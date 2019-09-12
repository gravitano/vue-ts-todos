<template>
  <div>
    <h3>
      Todos <span v-if="todosCount">({{ todosCount }})</span>
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
import TodoItem from '@/components/TodoItem';
import {TodoItemModel} from '@/types';
import {mapGetters, mapState} from 'vuex';

@Component({
  computed: {
    ...mapGetters({
      todos: 'todos',
      uncompleted: 'uncompletedTodos',
      todosCount: 'todosCount',
    }),
  },
  components: {
    TodoItem,
  },
})
export default class Todos extends Vue {
  newTodo = '';

  addTodo() {
    this.$store.dispatch('addNewTodo', {
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
