import router from './router'
import { getToken } from './utils/auth'
const whiteList = ['/login']
// 监听路由变化
router.beforeEach((to, from, next) => {
//   console.log('to', to)
  if (getToken()) {
    next()
  } else {
    // 没有token，无限循环
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?reditect=${to.fullPath}`)
    }
  }
})
