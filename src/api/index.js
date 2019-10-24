/**
 * 以ajax之名，引入包装的axios,发送ajax请求
 * 
 * 页面所有的ajax请求都将陈列于此
 */

// 引入ajax
import ajax from './ajax.js'

// 定义一个前缀地址
// const BASE = 'http://localhost:5000'   这里没有/api的接口
// 前面http://localhost:5000 不用书写了，因为在解决跨域的时候，有target目标地址了
// 但是必须要有/api作为接口！！！
const BASE = '/api'

// -------------------------------------请求模板---------------------
// 请求用户名和密码登录
export const reqPwdLogin = ({name,pwd})=>ajax({
  method:'POST',
  url: BASE + `/login_pwd?username=${name}&password=${pwd}`
})

// 自动登录接口，要携带token
export const reqAutoLogin = () => ajax({
  method: 'GET',
  url: BASE + `/autologin`,
  headers: {
    needToken:true
  }
})
// -------------------------------------请求模板---------------------


//请求商品信息

export const reqSearch = () => ajax({
  method: 'GET',
  url: BASE + '/get_detail_info'
})

// -------------------------------------请求模板---------------------
// export const reqPwdLogin = ()=>ajax({
  // get请求
//   method:'GET', // 请求类型
//   url: BASE + '/login_pwd/'// 请求地址，携带参数
// })
// post请求
// 	method: 'POST', // 请求类型
// 	url: BASE + `/login_pwd?username=${username}&password=${password}` // 请求地址，携带参数
// })
// -------------------------------------请求模板---------------------

// 请求 msite首页  信息
export const reqMessage = () => ajax({
	method: 'GET',
	url: BASE + '/get_msite_detail'
})


// 请求剧院页面的场馆信息
export const reqCinemasInfo =()=>ajax({
  method:'GET',
  url: BASE+'/cinemas_info'
})

// 请求商品列表
export const reqDetailInfo = ()=>ajax({
  method:'GET',
  url: BASE+'/get_detail_info'
})

// 请求自动获取商品信息的
export const reqAutoGetDetail=(name)=>ajax({
  method:'GET',
  url:BASE+`/autoGetDetail?name=${name}`
})

// 请求商品列表
export const reqShows = ()=>ajax({
  method:'GET',
  url: BASE+'/shows'
})

// 请求票劵信息
export const reqTicketInfo = ()=>ajax({
  method:'GET',
  url:BASE+'/get_ticket_info'
})