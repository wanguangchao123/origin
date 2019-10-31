// 封装一个插件,注册所有的全局组件
import myBread from '@/components/my-bread'
export default {
  install (Vue) {
    Vue.component(myBread.name, myBread)
  }
}
