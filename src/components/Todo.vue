<template>
  <div>
    <div class="mb-2">
      {{ todo.checked }}
      <input type="checkbox" :checked="todo.checked"
      @change="toggleCheckbox">
      <span class="ml-3"
      :class="todo.checked ? 'text-muted' : ''"
      :style="todo.checked ? 'text-decoration:line-through' : ''">{{ todo.text }}
      <!-- 체크가 되면 클래스 넣어주기, style 넣어주기 -->
      </span>

      <button class="btn btn-danger btn-sm"
      @click="clickDelete">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    }
  },
  methods: {
    toggleCheckbox(e) {
      this.$emit('toggle-checkbox', {
        id: this.todo.id,
        checked: e.target.checked
      })
    },
    clickDelete() {
      this.$emit('click-delete', this.todo.id)
    }
  }
};
</script>