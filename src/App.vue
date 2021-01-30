<template>
  <div class="todo__container">
    <h2 class="todo__title">ToDo App</h2>
    <p class="todo__caption">Powered by Vue 3</p>
    <AddTodo @add="addTodo" />
    <TodoList :todos="todos" @remove="removeTodo" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import AddTodo from '@/components/AddTodo.vue'
import TodoList from '@/components/TodoList.vue';
import storageService from '@/helpers/storage';

export default defineComponent({
  name: 'App',
  components: {
    AddTodo,
    TodoList
  },
  setup() {
    const storedTodos = storageService.getTodos();
    const todos = ref(storedTodos);

    function addTodo(todo) {
      todos.value.unshift(todo);
      updateStorage();
    }

    function removeTodo(idx) {
      todos.value = [...todos.value.slice(0, idx), ...todos.value.slice(idx + 1)];
      updateStorage();
    }

    function updateStorage() {
      storageService.updateTodos(todos.value);
    }

    return {
      todos,
      addTodo,
      removeTodo
    }
  }
})
</script>

<style src="./styles/main.scss"></style>