import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from '@/router'
import axios from '@/api'
// import myBread from '@/components/my-bread'
// Vue.component('my-bread', myBread)
import plugin from '@/components'
Vue.use(plugin)
Vue.prototype.$http = axios // 挂在axios
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
