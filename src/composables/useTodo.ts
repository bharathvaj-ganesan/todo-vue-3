import { computed, ref } from 'vue';
import storageService from '@/helpers/storage';

export default function useTodo() {

  const storedTodos: Todo[] = storageService.getTodos();
  const todos = ref(storedTodos);

  const sortedTodos = computed(() => {
    const completed = todos.value.filter(a => a.done);
    const tobedone = todos.value.filter(a => !a.done)
    return [...tobedone, ...completed]
  })

  function addTodo(todo: Todo) {
    todos.value = [todo, ...todos.value]
    updateStorage();
  }

  function findTodo(todo: Todo): Todo {
    return todos.value.find(t => t.message === todo.message)!;
  }

  function toggleTodo(todo: Todo, idx: number) {
    const currentTodo = findTodo(todo);
    currentTodo.done = !currentTodo.done;
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
    todos: sortedTodos,
    addTodo,
    removeTodo,
    toggleTodo
  };
}

