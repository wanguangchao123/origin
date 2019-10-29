// 到处一个用户信息操作的模块 (设置用户,获取用户,清除用户)需要三个方法
const KEY = 'hm-toutiao-pc-85-user-key'
const local = {
  setUser (user) {
    // 存储 setItem(key, value) key将来获取的时候使用value字符串格式json
    const jsonStr = JSON.stringify(user)
    window.sessionStorage.setItem(KEY, jsonStr)
  },
  getUser () {
    const jsonStr = window.sessionStorage.getItem(KEY)
    return JSON.parse(jsonStr)
  },
  delUser () {
    window.sessionStorage.removeItem(KEY)
  }
}
export default local
