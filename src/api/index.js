// dao到处一个配置好的挂在给man.js
import axios from 'axios'
import local from '@/utils/local'
import router from '@/router'
import JSONBIG from 'json-bigint'
// dui axios 配置
// baseURL基准地
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'
axios.defaults.transformResponse = [(data) => {
  try {
    return JSONBIG.parse(data)
  } catch (e) {
    return data
  }
}]
// 其它配置...请求头
// 如果local.getuser存在值才会拿,
// if (local.getUser()) {
//   axios.defaults.headers.Authorization = `Bearer ${local.getUser().token}`
// }

// 请求拦截器
axios.interceptors.request.use(config => {
  // 1 获取token
  const user = local.getUser() || {}
  // 2 头部设置token
  config.headers.Authorization = `Bearer ${user.token}`
  return config
}, err => {
  return Promise.reject(err)
})
// 相应拦截器
axios.interceptors.response.use(res => res, err => {
  // 请求失败
  if (err.response.status === 401) {
    // 舔砖登录界面
    // 使用vue-ruter跳转 push跳转
    return router.push('login')
  }
  return Promise.reject(err)
})
export default axios
