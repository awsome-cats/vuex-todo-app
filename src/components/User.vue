<template>
  <div>
    <h3>User </h3>
    <router-link class="router" @click.stop to="/">Home</router-link>
    

    <section class="error" v-if="error">
      <p>申し訳ございません。ネットワークに不具合が出ました。</p>
    </section>

    <section v-else>
      
      <div v-if="loading">
        loading中・・・・・
      </div>

    </section>

    


    

    <div>
      <SearchUsers :users="users"/>
    </div>
    
    
    <div class="lists">
      
      <ul class="list">
        
        <li 
          v-for="user in users"
          :key="user.id"
          class="user-list"
          >
          
          <router-link class="user-link" to="#">
          
          {{user.name}}<br>{{ user.email}}
          
          </router-link>
          
        </li>
        
      </ul>
      
    </div>
   
  
  </div>
</template>



<script>

import axios from 'axios'
import SearchUsers from '@/components/SearchUsers'

export default {
  
  name: 'User',
  components: {SearchUsers},
  
  data() {
    return {
      users: [],
      loading:true,
      error:false,
      search:''
    }
  },

  // watch: {
  //   search(value) {
  //       console.log(value)
  //   }
  
  // },
  
  async created() {

    this.users= []
    
    await axios.get('https://jsonplaceholder.typicode.com/users')
    
    .then(res => {
      this.users = res.data
      
    })
    .catch(err => {
      console.log(err)
      this.error = true
    })
    .finally(() => {
      this.loading = false
    })
   
  }
}
</script>

<style scoped>



.lists {
  
  margin:130px;
}

.list {
  /* display: flex;
  flex-wrap: wrap; */
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 120px;
  justify-content: center;
  
}

.user-list {
  width:100%;
  height:auto;
  list-style-type: none;
  margin:15px;
  padding:10px;
  background:rgb(182, 223, 185);
  text-align:center;
  
}

li.user-list a {
  text-decoration: none;
  color:black;
}

</style>