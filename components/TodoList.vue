<template>
  <v-container data-cy="container">
    <v-row v-for="todo in todos" :key="todo.id">
      <v-alert>{{ todo.title }}</v-alert>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const todos = ref([]);

const fetchTodos = async () => {
  const res = await axios.get('http://localhost:5500/todos')
  todos.value = res.data;
}

onMounted(() => {
  fetchTodos()
})
</script>
