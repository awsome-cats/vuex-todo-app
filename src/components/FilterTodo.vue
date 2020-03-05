<template>
  <div class="filterTodos">
    <h3> Fitler Todos:</h3>
   
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
.filterTodos {
  /* position: absolute;
  top:300px;
  left:50px; */
  
}

</style>