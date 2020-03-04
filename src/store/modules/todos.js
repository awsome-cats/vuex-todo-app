
import axios from "axios"

const state = {
  // todos: [
  //   {
  //     id: 1,
  //   title: 'todo 1'
  //   },
  //   {
  //     id: 2,
  //   title: 'todo 2'
  //   },
  //   {
  //     id: 3,
  //   title: 'todo 3'
  //   },
  //   {
  //     id: 4,
  //   title: 'todo 4'
  //   },
  //   {
  //     id: 5,
  //   title: 'todo 5'
  //   }
  // ],
  count: 1
}

const getters = {
  allTodos: state => state.todos,
  count: state => state.count
}

const mutations = {
  setTodos (state, todos) {
    state.todos = todos
  },
  increment(state, number) {
    state.count+=number
  }
}

const actions = {
  
  async fetchTodos() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    // commit('setTodos', response)
    console.log(response.data)
  }
  
}

export default {
  state,
  getters,
  mutations,
  actions
}