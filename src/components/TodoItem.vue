<template>
  <li>
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
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import {TodoItemModel} from '@/types';

@Component
export default class TodoItem extends Vue {
  @Prop() todo!: TodoItemModel;

  toggleCompleted(todo: TodoItemModel) {
    todo.completed = !todo.completed;
  }
}
</script>

<style scoped></style>
