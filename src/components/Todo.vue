<template>
  <div>
    <div>
      <input type="checkbox" :checked="todo.checked">
      <span class="ml-3">{{ todo.text }}</span>
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
  }
};
</script>