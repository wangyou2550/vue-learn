
import { login } from '@/api/login'
const user = {
  state: {
    token: ''
  },
  // 变化
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    }

  },
  actions: {
    Login ({ commit }, userInfo) {
      const username = userInfo.username.trim()
      const password = userInfo.password
      const code = userInfo.code
      const uuid = userInfo.uuid
      // login(username, password, code, uuid).then(res => {
      //   console.log('abcd', res)
      //   commit('SET_TOKEN',res.token)
      // })
      // 正常传递，用promise
      return new Promise((resolve, reject) => {
        login(username, password, code, uuid).then(res => {
          console.log('abcd', res)
          commit('SET_TOKEN', res.token)
          // 成功后调用resolve
          resolve(res)
        }).catch(error => {
          // 捕获异常自己处理
          reject(error)
        })
      })
    }

  }

}
// user导出去给别人用
export default user
