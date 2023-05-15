<template>
  <div id="app" class="container">
    <h1>Todo App</h1>
    <input
    v-model="todoText"
      type="text"
      class="w-100 p-2"
      placeholder="Type todo"
      @keyup.enter="addTodo"
    />
    <hr />

    <Todo v-for="todo in todos" :key="todo.id" :todo="todo" />
    <!-- <Todo /> -->
  </div>
</template>
<script>
import Todo from "@/components/Todo.vue";
export default {
  components: {
    Todo
  },
  data() {
    return {
      todoText : '',
      todos: [
        { id: 1, text: "buy a car", checked: true },
        { id: 2, text: "play game", checked: false },
      ]
    }
  },

  methods: {
    addTodo(e) {
      this.todos.push({
        id : Math.random(),
        text : e.target.value,
        checked : false
      })
      this.todoText = '';
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
