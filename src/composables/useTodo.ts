import { ref } from 'vue';
import storageService from '@/helpers/storage';

export default function useTodo() {

  const storedTodos = storageService.getTodos();
  const todos = ref(storedTodos);

  function addTodo(todo: Todo) {
    todos.value.unshift(todo);
    updateStorage();
  }

  function toggleTodo(todo: Todo, idx: number) {
    todos.value[idx].done = !todos.value[idx].done;
    updateStorage();
  }


  function removeTodo(todo: Todo, idx: number) {
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
  };
}

