import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from '@/views/login'
import Home from '@/views/home'
import Welcome from '@/views/welcome'
import NotFind from '@/views/404'
Vue.use(VueRouter)
const router = new VueRouter({
  // 路由配置对象
  // 关键选项:routes作用,配置路由规则
  routes: [
    // 登录L
    {
      path: '/login',
      component: Login
    },
    // 首页
    {
      path: '/',
      component: Home,
      children: [
        // 欢迎
        {
          path: '/',
          component: Welcome
        }
      ]
    },
    // 404处理
    {
      path: '*',
      component: NotFind
    }
  ]
})
export default router
