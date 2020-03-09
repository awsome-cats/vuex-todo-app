<template>
  <div>
    
    <h3>Home </h3>
    
    <img alt="Vue logo" src="../assets/logo.png">

    <router-link to="/other">別のページへ</router-link><br/>
    <router-link to="user">ユーザー</router-link>
    
    <div class="container">
     
      <AddTodo/>
      
      <FilterTodo />
      
      <Todos/> 
    
    </div>
  
  </div>
</template>

<script>

import Todos from './Todos.vue'
import AddTodo from './AddTodo'
import FilterTodo from './FilterTodo'

export default {
  name: 'Home',
  components:{
    Todos, AddTodo,FilterTodo
  }
}
</script>

<style>

a {
  color:#fff;
}

</style>