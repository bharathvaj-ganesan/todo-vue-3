<template>
  <li class="todo__list-item">
    <span class="todo__list-item__title"> {{ todo }}</span>
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
  emits: ['remove']
});
</script>

<style>
</style>