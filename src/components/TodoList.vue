<template>
  <ul class="todo__list">
    <TodoItem
      v-for="(todo, index) of todos"
      :todo="todo"
      :key="index"
      @remove="$emit('remove', index)"
    />
  </ul>
</template>

<script lang="ts">
import TodoItem from './TodoItem.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TodoList',
  props: {
    todos: {
      type: Array,
      default: () => []
    }
  },
  emits: ['remove'],
  components: {
    TodoItem
  }
});
</script>

<style>
</style>