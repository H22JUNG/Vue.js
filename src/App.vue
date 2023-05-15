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

    <Todo v-for="todo in todos" :key="todo.id" :todo="todo"
    @toggle-checkbox="toggleCheckbox"
    @click-delete="deleteTodo"/>

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
    deleteTodo(id) {
      //todos에서 인덱스 찾아 해당 아이디를 리턴,
      const index = this.todos.findIndex(todo => {
        return todo.id === id;
      })
      //항목 없애기
      this.todos.splice(index, 1);

      //항목 없애기 기능 동일,
      //인덱스에서 찾은 id만 제외하고 나머지를 다시 배열에 재배치
      this.todos = this.todos.filter(todo => todo.id != id);
    },
    addTodo(e) {
      this.todos.push({
        id : Math.random(),
        text : e.target.value,
        checked : false
      })
      this.todoText = '';
    },
    toggleCheckbox({id, checked}) {
      //todos에서 인덱스 찾아 해당 아이디를 리턴,
      const index = this.todos.findIndex(todo => {
        return todo.id === id;
      })
      //그에 맞는 배열 인덱스의 checked를 찾아 앞에 글자 바꿔줌
      this.todos[index].checked = checked;
    }
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
