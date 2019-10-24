/**
 * Login组件相关
 */

 /* eslint-disable */
// 引入mutation-types
import { RECEIVE_USER, RESET_USER, RECEIVE_TOKEN, RESET_TOKEN} from '../mutation-types.js'

// 引入api
import { reqPwdLogin, reqAutoLogin} from '../../api/index.js'

// 状态数据
const state = {
  // 用户信息，
  user:{},
  // token标识
  token:localStorage.getItem('token')||""
}

// 直接修改状态数据的方法
const mutations = {
  // 保存用户信息
  [RECEIVE_USER](state, user) {
    state.user = user
  },
  // 重置用户信息
  [RESET_USER](state) {
    state.user ={}
  },
  // 更新token
  [RECEIVE_TOKEN](state, token) {
    window.localStorage.setItem('token', token)
    state.token=token
  },
  // 重置token
  [RESET_TOKEN](state) {
    state.token=''
  }
}

// 间接修改状态数据的方法
const actions = {
  // 保存用户信息
  saveUser({ commit }, user) {
    // 从user中获取token
    const token = user.token
    // 保存获取的token到Vuex中
    commit(RECEIVE_TOKEN, token)
    // 保存获取的token到本地localStorage中
    localStorage.setItem('token_key', token)
    // 删除user中的token
    delete user.token

    // 保存删除token之后的user
    commit(RECEIVE_TOKEN,user)
    commit(RECEIVE_USER,user)
  },
  // 重置用户信息
  resetUser({ commit }) {
    // 重置用户信息
    commit(RECEIVE_USER)
    // 重置token
    commit(RESET_TOKEN)
    // 清除本地存储的token
    localStorage.removeItem('token_key')
  },

  // 自动登录(异步请求)
  async autoLogin({commit,state}) {
    if (state.token) {
      // 判断是否有token，若有，进行异步请求
      const result = await reqAutoLogin()
      const user = result.datas.users[0]
      // 更新user
      commit(RECEIVE_USER,user)
    }
  },
}

// getter方法
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}