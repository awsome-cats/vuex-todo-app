<template>
  <div>
    <h3>Todos</h3>
    <div class="legend">
      <span>ダブルクリックでマークします</span>
      <span>
        <span class="incomplete-box"></span> = Incomple
      </span>
      <span>
        <span class="complete-box"></span> = Complete
      </span>
    </div>
    <div class="todos">
      <div 
        @dblclick="onDblClick(todo)" 
        
        class="todo" v-for="todo in allTodos" 
        
        :key="todo.id"
        
        :class="{'is-complete': todo.completed}"
      >
       {{todo.title}}
       <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Todos',
  computed :{
    ...mapGetters(['allTodos'])
  },
   created(){
      this.fetchTodos()
    },
  methods: {
    ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),
    onDblClick(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title, //todo.title
        completed: !todo.completed
      }
      this.updateTodo(updTodo)
    }
  }
  
}
</script>

<style scoped>
h3 {
  font-size:1.6rem;
  font-weight:600;
  color:#fff;
}
.todos {
  display:grid;
  grid-template-columns: repeat(3,1fr);
  justify-content: center;
  grid-gap:1rem;
  width:100%;
  /* max-width:680px; */
  
}

.todo {
  border:1px solid #ccc;
  background:rgb(185, 184, 184);
  padding:1rem;
  border-radius: 5px;
  text-align: center;
  position:relative;
  cursor: pointer;
  box-shadow:2px 5px  3px 2px rgb(105, 104, 104);
}

i {
  position: absolute;
  bottom:10px;
  right:10px;
  color:#fff;
  cursor:pointer;
}

.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom:1rem;
}

.legend span:first-child {
  color:white;
}

.complete-box {
  display: inline-block;
  width:10px;
  height:10px;
  background:rgb(219, 146, 146);
}

.incomplete-box {
  display: inline-block;
  width:10px;
  height:10px;
  background:rgb(185, 184, 184);
}

.is-complete {
  background:rgb(219, 146, 146);
}

@media screen and (max-width:768px) {
  .todos {
    grid-template-columns:repeat(2, 1fr);
    max-width:780px;
  }
}
</style>