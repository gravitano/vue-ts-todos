<template>
  <div>
    <h3>
      Todos <span v-if="todosCount">({{ todosCount }})</span>
    </h3>
    <ul>
      <li v-for="todo in todos" :key="todo.title">
        <s v-if="todo.completed">
          {{ todo.title }}
        </s>
        <span v-else>
          {{ todo.title }}
        </span>
        <input
          type="checkbox"
          v-model="todo.completed"
          @click="toggleCompleted(todo)"
        />
        <!--        <button-->
        <!--          v-if="!todo.completed"-->
        <!--          title="Mark as completed"-->
        <!--          @click="markAsCompleted(todo)"-->
        <!--        >-->
        <!--          &#10004;-->
        <!--        </button>-->
        <!--        <span-->
        <!--          title="Mark as uncompleted"-->
        <!--          @click="markAsUncompleted(todo)"-->
        <!--          v-else-->
        <!--          >&#10004;</span-->
        <!--        >-->
      </li>
    </ul>
    <input
      type="text"
      placeholder="Type new todo and press enter..."
      v-model="newTodo"
      @keydown.enter="addTodo"
    />
  </div>
</template>

<script>
import {Vue, Component, Watch} from 'vue-property-decorator';

@Component
export default class Todos extends Vue {
  todos = [
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
  ];

  newTodo = '';

  get uncompleted() {
    return this.todos.filter(todo => !todo.completed);
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

  markAsCompleted(todo) {
    todo.completed = true;
  }

  markAsUncompleted(todo) {
    todo.completed = false;
  }

  toggleCompleted(todo) {
    todo.completed = !todo.completed;
  }

  @Watch('newTodo')
  onNewTodoChanged(newVal, oldVal) {
    console.log({newVal, oldVal});
  }
}
</script>

<style scoped></style>
