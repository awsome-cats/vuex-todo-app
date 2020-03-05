<template>
  <div>
    <h3>Todoを追加する
    </h3>
    <div class="add">
      <form @submit="onSubmit">
        <input type="text" v-model="title" placeholder="addTodo...">
        <input type="submit" value="submit">
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions} from 'vuex'
export default {
  name: 'AddTodo',
  data() {
    return {
      title:''
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    onSubmit(e) {
      e.preventDefault();
      this.addTodo(this.title)
      
    }
  }
}
</script>

<style scoped>
h3 {
  font-size:1.3rem;
  font-weight:600;
  color:#fff;
}
.add {
  background-color:rgb(242, 248, 246);
  width:100%;
  height:auto;
  max-width: 350px;
  margin-right:150px;
}
form {
  width:100%;
  height:auto;
  display:flex;
  align-items: center;
  margin-right:40px;
}

form input[type="text"]{
  flex:9;
  padding:5px;
  outline: 0;
  border:1px solid lightgreen ;
}

input[type="submit"] {
  flex:3;
  cursor: pointer;
  width:100%;
  color:black;
  font-weight: bold;
  font-size:1.1rem;
  text-align: center;
  background:rgb(95, 223, 78);
}

</style>