<template>
  <form @submit.prevent="addTodo">
    <label for="new-todo">New Todo</label>
    <input id="new-todo" type="text" v-model="newTodo" />
    <button>Add Todo</button>
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
      emit('add', newTodo.value);
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