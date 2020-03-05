<template>
  <div class="filterTodos">
    <h3>表示を絞り込みます</h3>
    <select @change="filterTodos($event)">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'FilterTodo',
  methods: mapActions(['filterTodos'])
  
}
</script>

<style scoped>
h3 {
  font-size:1.3rem;
  font-weight:600;
  color:#fff;
}
</style>
