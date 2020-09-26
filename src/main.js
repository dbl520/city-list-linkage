import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/style/reset.css' // css 样式初始化
import './assets/style/border.css' // 解决移动端 1px 边框问题

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
