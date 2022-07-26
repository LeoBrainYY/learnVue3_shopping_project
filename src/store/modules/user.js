// 用户模块

export default {
  namespaced: true,
  state () {
    return {
      // 用户信息
      profile: {
        id: '',
        avatar: '',
        nickname: '',
        account: '',
        mobile: '',
        token: ''
      }
    }
  },
  mutations: {
    setUser (state, payload) {
      // console.log(payload, 'payload')
      state.profile = payload
      // console.log(payload, 'payload')
      // console.log(profile, 'profile')
      // console.log(state, 'state')
    }
  }
}
