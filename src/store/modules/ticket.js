/**
 * Ticket组件相关
 */

// 引入mutation-types
/* eslint-disable */
import {
  SAVE_TICKET,
  SAVE_TICKET_ID
} from '../mutation-types.js'
import {reqAutoGetDetail} from '../../api/index'
// 状态数据
const state = {
  // 存储商品对象
  ticket:{},
  // 存储用于自动获取商品的名字   （形如自动登录）
  id:localStorage.getItem('ticket_id')
}

// 直接修改状态数据的方法
const mutations = {
  // 保存商品数据的方法
  [SAVE_TICKET](state,ticket){
    state.ticket = ticket
  },
  // 保存商品标识
  [SAVE_TICKET_ID](state,id){
    // 将商品标识放到localStorage
    window.localStorage.setItem('ticket_id',id)
    state.id = id
  }

}

// 间接修改状态数据的方法
const actions = {
  // 保存商品
  saveTicket({commit},ticket){
    // 取id
    const id = detail.id
    // id保存到vuex中
    commit(SAVE_TICKET_ID, id)
    // id保存在localStorage中
    window.localStorage.setItem('ticket_id',id)
    // 将商品保存到vuex中
    commit(SAVE_TICKET,ticket)
  },
  // 保存商品标识name到localStorage
  // saveDetailName({commit},name){
  //   commit(SAVE_DETAIL_NAME,name)
  // },
  // 自动获取商品详情   从vuex中获取自带的commit和state（用于获取标志name）
  async autoGetTicket({commit,state}){
    // 首先判断是否有name
    if(state.id){
      // 有  发送请求自动获取商品详情信息   ---> 服务器
      const result = await reqAutoGetTicket(state.id)
      // 清除localStorage中的detail_name
      // window.localStorage.removeItem('detail_name')
      
      // console.log(result);
      commit(SAVE_TICKET,result.ticket)
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