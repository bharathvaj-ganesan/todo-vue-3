<template>
  <div class="todo__container">
    <h2 class="todo__title">ToDo App</h2>
    <p class="todo__caption">Powered by Vue 3 + Typescript + Vite + SCSS</p>
    <AddTodo @add="addTodo" />
    <TodoList :todos="todos" @remove="removeTodo" @toggle="toggleTodo" />
    <p class="todo__footer">
      Made with ❤️ by
      <a href="https://twitter.com/bharathvaj_g" target="_blank"
        >bharathvaj_g</a
      >
    </p>
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

    function toggleTodo(todo, idx) {
      todos.value[idx].done = !todos.value[idx].done;
      updateStorage();
    }


    function removeTodo(todo, idx) {
      todos.value = [...todos.value.slice(0, idx), ...todos.value.slice(idx + 1)];
      updateStorage();
    }

    function updateStorage() {
      storageService.updateTodos(todos.value);
    }


    return {
      todos,
      addTodo,
      removeTodo,
      toggleTodo
    }
  }
})
</script>

<style src="./styles/main.scss"></style>