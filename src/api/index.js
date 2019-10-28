// dao到处一个配置好的挂在给man.js
import axios from 'axios'
// dui axios 配置
// baseURL基准地
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'
// 其它配置...

export default axios
