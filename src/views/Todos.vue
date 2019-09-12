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

@Component({
  components: {
    TodoItem,
  },
})
export default class Todos extends Vue {
  newTodo = '';

  get todos() {
    return this.$store.state.todos;
  }

  get uncompleted() {
    return this.todos.filter((todo: TodoItemModel) => !todo.completed);
  }

  get todosCount() {
    return this.uncompleted.length;
  }

  addTodo() {
    this.todos.push({
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
