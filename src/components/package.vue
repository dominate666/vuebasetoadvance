<template>
    <div id="main">
       <p> {{msg}}</p>
         <button @click="goCollector">ccollector</button>
    </div>
</template>
<script>
 export default {
     data(){
        return{
            msg:"我是package"
        }
     },
     methods:{
         goCollector(){
             this.$router.push({
                 path:"/collector"
             })
         }
     }
 }

</script>