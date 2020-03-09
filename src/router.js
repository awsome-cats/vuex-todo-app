import Vue from 'vue'
import VueRouter from 'vue-router'
import OtherTodo from '@/components/OtherTodo'
import Home from '@/components/Home'
import User from '@/components/User'

const routes = [
 
    {
      path:'/other',
      name:'OtherTodo',
      component: OtherTodo
    },
    {
      path:'/',
      name:'Home',
      component: Home
    },
    {
      path:'/user',
      name:'User',
      component: User
    }
  
]

Vue.use(VueRouter)


const router =  new VueRouter({
  base: process.env.BASE_URL,
  mode: 'history',
  routes
  
})

export default router