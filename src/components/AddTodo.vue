<template>
  <form class="todo__add-item" @submit.prevent="addTodo">
    <label class="todo__add-item__label" for="new-todo">New Todo</label>
    <input
      class="todo__add-item__input"
      id="new-todo"
      type="text"
      v-model="newTodo"
    />
    <button class="todo__add-item__action" :disabled="!newTodo">Add</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'AddTodo',
  emits: ['add'],
  setup(_, { emit }) {
    const newTodo = ref('');

    function addTodo() {
      emit('add', {
        done: false,
        message: newTodo.value
      });
      newTodo.value = "";
    }

    return {
      newTodo,
      addTodo
    }
  }
});
</script>

<style>
</style>