import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
const router= new VueRouter({
    //  mode:"history",
     routes:[
         {
             path:"/",
             redirect:"/collector"
         },
         {
             path:"/collector",
             name:"collector",
             component:()=>import("@/components/collector")
         },
         {
            path:"/package",
            name:"package",
            component:()=>import("@/components/package")
        }
     ]
})
// router.beforeEach((to,from,next)=>{
// //    console.log("666",to)
// // next
// })
export default router;