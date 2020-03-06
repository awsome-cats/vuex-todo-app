import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import axios from 'axios'
import router from './router'

axios.defaults.baseURL= 'https://jsonplaceholder.typicode.com'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
