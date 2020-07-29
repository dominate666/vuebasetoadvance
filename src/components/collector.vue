<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul> -->
     <ul>
       <li v-for="(item,index) in list" :key="index">{{item.name}}————{{item.age}}</li>
     </ul>
      <button @click="goPackage">package</button>
     <el-table
    :data="mock"
    style="width: 100%"
    @row-click="getId"
    >
    <el-table-column
      label="年龄"
      width="180">
       <template slot-scope="scope">
        {{scope.row.age}}
       </template>
    </el-table-column>
    <el-table-column
      label="姓名"
      width="180">
      <template slot-scope="scope">
        {{scope.row.name}}
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {
  name: 'collector',
  data(){
    return{
       list:[],
       age:0,
       mock:[
         {
           age:1,
           name:"lisi"
         },
         {
          age:2,
          name:"wer"
         }
       ]
    }
  },
  created(){
     this.$nextTick(()=>{
        //  this.getMode()
        this.getMock()
     })
  },
  methods:{
    getId(row,column,event){
      let index=this.mock.indexOf(row)
      console.log("555555",index)
    },
    getMode(){
      // console.log("000",$("#main").html())
      this.$instance.get("/adv/info",{
          params:{"id":2}
      }).then(res=>{
        console.log("特定",res.data)
        this.list=res.data.arr;
        this.list.map((item)=>{
          this.age=item.name
        })
      })
      

    },
    getMock(){
      this.$instance.get("/m/listmore.json?pageNo=2&pageSize=15").then(res=>{
          console.log("666",res)
      })
    },
    goPackage(){
      this.$router.push({
         path:"/package"
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
