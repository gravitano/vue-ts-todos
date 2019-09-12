<template>
  <div>
    <ul>
      <li v-for="todo in todos" :key="todo.title">
        {{ todo.title }}
        <button
          v-if="!todo.completed"
          title="Mark as completed"
          @click="markAsCompleted(todo)"
        >
          &#10004;
        </button>
        <span
          title="Mark as uncompleted"
          @click="markAsUncompleted(todo)"
          v-else
          >&#10004;</span
        >
      </li>
    </ul>
    <input type="text" v-model="newTodo" @keydown.enter="addTodo" />
  </div>
</template>

<script>
import {Vue, Component} from 'vue-property-decorator';

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

  addTodo() {
    this.todos.push({
      title: this.newTodo,
    });
    this.newTodo = '';
  }

  markAsCompleted(todo) {
    todo.completed = true;
  }

  markAsUncompleted(todo) {
    todo.completed = false;
  }
}
</script>

<style scoped></style>
