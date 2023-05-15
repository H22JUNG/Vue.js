<template>
  <Todo
    v-for="todo in todos"
    :key="todo.id"
    :todo="todo"
    @toggle-checkbox="toggleCheckbox"
    @click-delete="deleteTodo"
  />
</template>

<script>
import Todo from "@/components/Todo.vue";

export default {
  components: {
    Todo,
  },
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  methods: {
    toggleCheckbox() {

    },
    deleteTodo() {
        
    }
  }
};
</script>

<style>
</style>