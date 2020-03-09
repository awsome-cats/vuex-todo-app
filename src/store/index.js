import Vuex from 'vuex'
import Vue from 'vue'
import todos from './modules/todos'
import comments from './modules/comments'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    todos,
    comments
  }
})
