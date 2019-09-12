<template>
  <div>
    <ul>
      <li v-for="todo in todos" :key="todo.title">
        {{ todo.title }}
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
    },
    {
      title: 'Go to library',
    },
    {
      title: 'Go to school',
    },
  ];

  newTodo = '';

  addTodo() {
    this.todos.push({
      title: this.newTodo,
    });
    this.newTodo = '';
  }
}
</script>

<style scoped></style>
