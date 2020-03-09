<template>
  <div>

    <div class="search-users">
      <input 
      type="text" 
      placeholder="ユーザーを検索する"
      @keyup="getValue($event)"
      id="input"
      >
    </div>



  </div>
</template>

<script>
export default {
  
  props: ['users'],
  
    methods: {
      
      
      // usersのデータをフィルタリング
      // inputタグの中でvalueを入力する際に動く関数
      
      getValue (event) {
      
      // input を取得
      let input = document.getElementById('input')

      //liを取得
      let li = document.getElementsByClassName('user-list')

      // inputのvalueを取得
      let filter = input.value.toUpperCase()
      console.log('filter',filter, event)
      


      for (let i=0; i<li.length; i++) {


          let a = li[i].getElementsByClassName('user-link')[0]

          // console.log(a)

          let textValue = a.textContent || a.textHTML

          console.log(textValue)

          if (textValue.toUpperCase().indexOf(filter) > -1) {
            
            li[i].style.display = ''
          
          
          } else {
            li[i].style.display = 'none'
          }


      }


    },
  }

}
</script>

<style scoped>
*{
  box-sizing: border-box;
  margin:0;
  padding:0;
}


.search-users {
  width:100%;
  height:40px;
  background:#ddd;
  margin-top:40px;
}


#input {
  width:100%;
  height:40px;
  font-size:16px;
}
</style>