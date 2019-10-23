/**
 * Login组件相关
 */

// 引入mutation-types
/* eslint-disable */
import {
  UPDATE_DETAIL
} from '../mutation-types.js'

// 状态数据
const state = {
  // 存储商品对象
  detail:{}
}

// 直接修改状态数据的方法
const mutations = {
  // 保存商品数据的方法
  [UPDATE_DETAIL](state,detail){
    state.detail = detail
  }
}

// 间接修改状态数据的方法
const actions = {
  // 保存商品
  saveDetail({commit},detail){
    commit(UPDATE_DETAIL,detail)
  }
}

// getter方法
const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}