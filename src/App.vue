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
import AddTodo from './components/AddTodo.vue'
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

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
html,
body {
  height: 100%;
  box-sizing: border-box;
}

.todo {
  &__ {
    &container {
    }

    &title {
    }

    &caption {
    }

    &add {
      &- {
        &item {
          &__ {
            &label {
            }
            &input {
            }
            &action {
            }
          }
        }
      }
    }

    &list {
      &-item {
        &__ {
          &title {
          }
          &remove {
          }
        }
      }
    }
  }
}
</style>