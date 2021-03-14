<template>
  <div class="todo__list">
    <h2 class="todo__list__title">ToDo List</h2>
    <ul>
      <div class="todo__list--empty" v-if="!displayTodos.length">
        Add items to get started.
      </div>
      <template v-else>
        <TodoItem
          v-for="(todo, index) of displayTodos"
          :todo="todo"
          :key="index"
          @toggle="$emit('toggle', todo, index)"
          @remove="$emit('remove', todo, index)"
        />
      </template>
    </ul>
  </div>
</template>

<script lang="ts">
import TodoItem from '@/components/TodoItem.vue';
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'TodoList',
  props: {
    todos: {
      type: Array,
      default: () => []
    }
  },
  emits: ['remove', 'toggle'],
  components: {
    TodoItem
  },
  setup(props) {
    const displayTodos = computed(() => {
      return props.todos.sort((a: any, b: any) => {
        if (a.done && b.done) {
          return 0;
        } else if (a.done) {
          return 1;
        }
        return -1;
      });
    });

    return {
      displayTodos
    }
  }
});
</script>

<style>
</style>