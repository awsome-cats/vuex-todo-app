<template>
  <div>
    <h3>Other Todo</h3>
    <router-link to="/">Homeへ戻る</router-link>
    <div class="todos">
      
      <div class="todo" 
        v-for="comment in allComments" 
        :key="comment.id">
        {{ comment.name}}<br>
        {{comment.email}}
       <i class="fas fa-trash-alt"></i>
      
      </div>
      
    
    </div>
  </div>
  
</template>



<script>
import { mapActions, mapGetters } from 'vuex'



export default {
  name:'OtherTodo',

  data() {
    return {
      
    }
  },

  computed: {
    ...mapGetters(['allComments'])
  },

  created(){
    this.otherFetch()
    console.log(this.otherFetch())
  },
  methods: {
    ...mapActions(['otherFetch'])
  }
}
</script>

<style>

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
  margin-top:150px;
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

.is-complete {
  background:rgb(219, 146, 146);
}
</style>