import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
export default new VueRouter({
     mode:"history",
     routes:[
         {
             path:"/",
             redirect:"/helloWorld"
         },
         {
             path:"/helloWorld",
             name:"HelloWorld",
             component:()=>import("@/components/HelloWorld")
         }
     ]
})