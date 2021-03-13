<template>
  <li>
    <span> {{ todo }}</span>
    <button @click="$emit('remove')">Remove</button>
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