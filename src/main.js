import "@babel/polyfill"
import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import router from "./router"
import instance from "../api/instance"
Vue.prototype.$instance=instance
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
