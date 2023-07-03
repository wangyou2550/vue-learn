import axios from 'axios'
import { Message } from 'element-ui'

// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: process.env.VUE_APP_BASE_API,
  // 超时
  timeout: 10000
})

// 响应拦截器，状态200返回
service.interceptors.response.use(res => {
  console.log('iii', res)
  // 得到code
  const code = res.data.code
  const msg = res.data.msg
  console.log('123', msg)
  if (code === 500) {
    // return Promise.reject(new Error(msg))
    Message({
      message: msg,
      type: 'error'
    })
  } else if (code !== 200) {
    return Promise.reject(new Error('!err'))
  } else {
    return res.data
  }
})

export default service
