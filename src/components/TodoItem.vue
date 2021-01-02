<template>
  <li class="todo__list-item" :class="todo.done ? `todo__list-item--done` : ''">
    <span class="todo__list-item__title" @click="$emit('toggle')">
      {{ todo.message }}</span
    >
    <button class="todo__list-item__action" @click="$emit('remove')">
      Remove
    </button>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TodoItem",
  props: ['todo'],
  emits: ['remove', 'toggle']
});
</script>

<style>
</style>