import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import cart from './modules/cart'
import user from './modules/user'
import category from './modules/category'

// vue2.0 创建仓库 new Vuex.store({})
// vue3.0 创建仓库 createStore({})
export default createStore({
  modules: {
    cart,
    user,
    category
  },
  plugins: [
    // 数据持久化插件 自动存储state的数据信息
    createPersistedState({
      // 本地存储
      key: 'rabbit-client-pc-124-store',
      // 指定需要存储的模块
      path: ['user', 'cart']
    })
  ],
  state: {

  },
  getters: {

  },
  mutations: {
  },
  actions: {
  }
})
