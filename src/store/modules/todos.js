
import axios from "axios"


const state = {
  todos:[],
  comments:[]
}


const getters = {
  
  
  allTodos: state => state.todos,


  
}


const mutations = {
  
  // ----------------------
  // Todosで使用するMutation START
  // ------------------------
  
  setTodos (state, todos) {
    state.todos = todos
  },
  
  
  newTodo (state, todo) {
    state.todos.unshift(todo)
  },
  
  
  removeTodo(state, id) {
    state.todos = state.todos.filter(todo => {
      return todo.id !== id
    })
  },
  
  
  updateTodo(state, updTodo) {
    const index = state.todos.findIndex(todo => todo.id === updTodo.id)
    if (index !== -1) {
      state.todos.splice(index, 1, updTodo)
    }
  },



}


const actions = {
  

  

  //------------------------------
  // ここからOtherTodosで使うAPI end
  //------------------------------
  // 一時的にリミットをつけた
  
  async fetchTodos({ commit }) {
      
      const response = await axios.get('/todos')
      
      commit('setTodos', response.data)
      
    },


  async addTodo({ commit}, title){
    const response = await axios.post('/todos', {title, complete:false})
    commit('newTodo', response.data )
  },



  async deleteTodo({ commit }, id) {
    await axios.delete(`/todos/${id}`)
    commit('removeTodo', id)
  },



  async filterTodos({ commit },e) {
    // Get select number
    const limit = parseInt(e.target.options[e.currentTarget.options.selectedIndex].innerText);
    console.log(limit)
    const response = await axios.get(`/todos?_limit=${limit}`)
    commit('setTodos', response.data)
  },
  // async filterTodoscheckBox関数

  //配列todosからcomplete= falseを抜き取る

  async updateTodo({ commit }, updTodo) {
    const response = await axios.put(`/todos/${updTodo.id}`, updTodo)
    console.log(response.data)
    commit('updateTodo', response.data)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}