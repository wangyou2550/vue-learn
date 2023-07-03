import router from './router'
import { getToken } from './utils/auth'
const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  if (getToken()) {
    next()
  } else {
    // 没有token，无限循环
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})
