/**
 * Login组件相关
 */

// 引入mutation-types
/* eslint-disable */
import {
  SAVE_DETAIL,
  SAVE_DETAIL_NAME
} from '../mutation-types.js'
import {reqAutoGetDetail} from '../../api/index'
// 状态数据
const state = {
  // 存储商品对象
  detail:{},
  // 存储用于自动获取商品的名字   （形如自动登录）
  name:localStorage.getItem('detail_name')
}

// 直接修改状态数据的方法
const mutations = {
  // 保存商品数据的方法
  [SAVE_DETAIL](state,detail){
    state.detail = detail
  },
  // 保存商品标识
  [SAVE_DETAIL_NAME](state,name){
    // 将商品标识放到localStorage
    window.localStorage.setItem('detail_name',name)
    state.name = name
  }

}

// 间接修改状态数据的方法
const actions = {
  // 保存商品
  saveDetail({commit},detail){
    // 取name
    const name = detail.name
    // name保存到vuex中
    commit(SAVE_DETAIL_NAME, name)
    // name保存在localStorage中
    window.localStorage.setItem('detail_name', name)
    // 将商品保存到vuex中
    commit(SAVE_DETAIL,detail)
  },
  // 保存商品标识name到localStorage
  // saveDetailName({commit},name){
  //   commit(SAVE_DETAIL_NAME,name)
  // },
  // 自动获取商品详情   从vuex中获取自带的commit和state（用于获取标志name）
  async autoGetDetail({commit,state}){
    // 首先判断是否有name
    if(state.name){
      // 有  发送请求自动获取商品详情信息   ---> 服务器
      const result = await reqAutoGetDetail(state.name)
      // 清除localStorage中的detail_name
      // window.localStorage.removeItem('detail_name')
      
      console.log(result);
      commit(SAVE_DETAIL,result.detail)
    }
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