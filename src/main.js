import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引用axios触发其中的代码
import './utils/axios'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
