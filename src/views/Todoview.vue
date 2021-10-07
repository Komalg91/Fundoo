<template>
    <div class="todo_container">
        <AddTodo />
        <Todos />
    </div>
</template>

<script>
import Todos from '../components/Todos.vue';
import AddTodo from '../components/AddTodo.vue';

export default {
  name: 'Todoview',
  components: {
    Todos, AddTodo
  }
}
</script>

<style lang="scss" scoped>

</style>