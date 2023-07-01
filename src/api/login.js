import request from '@/utils/request'

export function getCodeImg () {
  return request({
    url: '/captchaImage',
    method: 'get',
    timeout: 20000
  })
}
// 登录方法
export function login (username, password, code, uuid) {
  const data = {
    username,
    password,
    code,
    uuid
  }
  return request({
    url: '/login',
    headers: {
      isToken: false
    },
    method: 'post',
    data: data
  })
}

// 获取用户详细信息
export function getInfo () {
  return request({
    url: '/getInfo',
    method: 'get'
  })
}
