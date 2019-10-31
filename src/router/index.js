import VueRouter from 'vue-router'
import Vue from 'vue'
import local from '@/utils/local'
import Login from '@/views/login'
import Home from '@/views/home'
import Welcome from '@/views/welcome'
import NotFind from '@/views/404'
import Article from '@/views/article'
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
        },
        {
          path: '/article',
          component: Article
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
router.beforeEach((to, from, next) => {
  // console.log('执行了')
  // next()
  const user = local.getUser()
  // 如果跳转的页面不是登录页面且user不存在
  if (to.path !== '/login' && !user) return next('/login')
  next()
})
export default router
