// 1.创建实例 2.请求拦截 携带头部token 3.响应拦截 处理token失效
import axios from 'axios'
import store from '@/store'
import router from '@/router'

// 导出基准地址 其他地方不通过axios发送请求 也要用到基本地址
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const instance = axios.create({
  baseURL,
  timeout: 5000
})

instance.interceptors.request.use((config) => {
  // 拦截业务逻辑
  // 1.获取用户信息对象
  const profile = store.state.user.profile
  // 结构写法
  // const { profile } = store.state.user

  // 2.判断是否有token
  if (profile.token) {
    // 如果携带token 在发送之前拦截并携带token(设置token)
    config.headers.Authorization = `Bearer ${profile.token}`
  }
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截器
instance.interceptors.response.use((res) => {
  return res.data
}, error => {
  // 401状态码 进入该函数
  if (error.response && error.response.status === 401) {
    // 1.清空无效用户信息
    // 2.跳转登陆页面
    // 3.跳转需要传参(当前路由地址)给登陆页面
    store.commit('user/setUser', {})
    // 拿到当前路由地址
    // 组件里: `/user?a=10` $route.path === /user
    // $route.fullPath === /user?a=10 (需要拿到带参数的完整路由地址)

    // js模块: router.currentRoute.value.fullPath 就是当前路由地址
    // router.currentRoute是ref响应式数据
    // 需要注意的是如果携带参数 是需要进行转码的
    const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
    router.push('/login?redirectUrl=' + fullPath)
  }
  return Promise.reject(error)
})

// 请求函数
const request = (url, method, submitData) => {
  console.log(instance, 'instance')
  return instance({
    url,
    method,
    // get 传参params
    // 不是get请求 使用data传参
    // []设置一个动态的key js表达式的执行结果就是Key
    // 请求方法转换成小写
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}

export default request
