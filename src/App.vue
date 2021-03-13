<template>
  <div>
    <h2>TODO APP</h2>
    <AddTodo @add="addTodo" />
    <TodoList :todos="todos" @remove="removeTodo" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import AddTodo from './components/AddTodo.vue';
import TodoList from './components/TodoList.vue';

export default defineComponent({
  name: 'App',
  components: {
    AddTodo,
    TodoList
  },
  setup() {
    const todos = ref([]);

    function addTodo(todo) {
      todos.value.unshift(todo);
    }

    function removeTodo(idx) {
      todos.value = [...todos.value.slice(0, idx), ...todos.value.slice(idx + 1)]
    }

    return {
      todos,
      addTodo,
      removeTodo
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>