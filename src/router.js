import Vue from 'vue'
import VueRouter from 'vue-router'
import Todos from '@/components/Todos'
import OtherTodo from '@/components/OtherTodo'

const routes = [
 
    {
      path:'/todos',
      name:'Todos',
      component: Todos
    },
    {
      path:'/',
      name:'OtherTodo',
      component: OtherTodo
    }
  
]

Vue.use(VueRouter)


const router =  new VueRouter({
  base: process.env.BASE_URL,
  mode: 'history',
  routes
  
})

export default router