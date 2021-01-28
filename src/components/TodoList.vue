<template>
  <div class="todo__list">
    <h2 class="todo__list__title">ToDo List</h2>
    <ul>
      <div class="todo__list--empty" v-if="!todos.length">
        Add item to get started.
      </div>
      <template v-else>
        <TodoItem
          v-for="(todo, index) of todos"
          :todo="todo"
          :key="index"
          @remove="$emit('remove', index)"
        />
      </template>
    </ul>
  </div>
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