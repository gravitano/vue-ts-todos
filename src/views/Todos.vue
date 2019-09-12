<template>
  <div>
    <ul>
      <li v-for="todo in todos" :key="todo.title">
        {{ todo.title }}
      </li>
    </ul>
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
}
</script>

<style scoped></style>
