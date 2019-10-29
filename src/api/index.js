// dao到处一个配置好的挂在给man.js
import axios from 'axios'
import local from '@/utils/local'
// dui axios 配置
// baseURL基准地
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'
// 其它配置...请求头
// 如果local.getuser存在
if (local.getUser()) {
  axios.defaults.headers.Authorization = `Bearer ${local.getUser().token}`
}
export default axios
