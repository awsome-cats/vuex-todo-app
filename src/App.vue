<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="container">
      <AddTodo/>
      <FilterTodo />
     <Todos/> 
    </div>
  </div>
</template>

<script>
import Todos from './components/Todos.vue'
import AddTodo from './components/AddTodo'
import FilterTodo from './components/FilterTodo'

export default {
  name: 'App',
  components: {
    Todos, AddTodo,FilterTodo
  }
}
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  line-height:1.6;
  background:linear-gradient(110deg, #2e2866, rgba(79, 147, 156));
  height:500vh;
}

.container {
  max-width:1200px;
  margin:auto;
  overflow: auto;
  padding:0 2rem;
  display:flex;
  flex-direction: column;
  /* grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr; */
}
img {
  display:block;
  margin-left:80px;
  width:100%;
  height:auto;
  max-width: 160px;
}

@media screen and (max-width:768px) {
  img {
   margin:0 auto;
  }
}


</style>
