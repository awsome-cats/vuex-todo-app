<template>
  <div>
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
    <div class="filterComplete">
      <input type="checkbox" id="completeFalse" value="completeFalse" v-model="checkedNames" @click="filterchecked($event)">
      <label for="completeFalse">complete false</label>
      <input type="checkbox" id="completeTrue" value="completeTrue" v-model="checkedNames">
      <label for="completeTrue">complete true</label>
    </div>
    <span>絞り込んでください{{ checkedNames }}</span>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'FilterTodo',
  data() {
    return {
      checkedNames:[]
    }
  },
  methods: {
    ...mapActions(['filterTodos']),
    filterchecked(event) {
     console.log(event.target, event.type, event.x, event.y, event.target.id)
      const todos = this.$store.state.todos
      console.log(todos)
     

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
</style>
