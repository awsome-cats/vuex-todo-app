



import axios from 'axios'


const state = {
  comments:[]
}

const getters = {
  allComments: state => state.comments
}

const mutations = {


  setComments(state, comments) {
    
    state.comments = comments
    
  }
}

const actions = {


  async otherFetch({commit}) {

    const response = await axios.get('/comments')
    console.log(response)
    commit('setComments', response.data)


  },
}


export default {
  state,
  getters,
  mutations,
  actions
}