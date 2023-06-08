import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引用axios触发其中的代码
import './utils/axios'

import axios from 'axios'
import VueAxios from 'vue-axios'

import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(VueRouter)

// 默认路径前缀
axios.defaults.baseURL = "http://localhost:8080"

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
