import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      { id: 1, text: "buy a car", checked: true },
      { id: 2, text: "play game", checked: false },
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
