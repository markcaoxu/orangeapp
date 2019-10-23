// 引入koa
let Koa = require('koa')
// 引入koa-router
let KoaRouter = require('koa-router')
// 实例化koa
let koa = new Koa()
// 实例化koa-router
let koaRouter = new KoaRouter()

// 引入datas数据   商品数据
let datas = require('./datas/datas.json')
// 引入登录数据
let login = require('./datas/login.json')
// 引入首页数据
let msite = require('./datas/msite.json')
// 引入剧场数据
let cinemaInfo = require('./datas/cinema.json')


// 登录接口
koaRouter.get('/login_pwd',(ctx)=>{
  // 匹配账号密码
  login.users.forEach((item)=>{
      ctx.body={
        message:'登录成功',
        code:"0",
        // 数据
        login:item
      }
  })
})

// 商品信息的接口
koaRouter.get('/get_detail_info',(ctx)=>{
  const detail = datas.detail
  ctx.body={
    detail
  }
})


// 轮播图信息的接口
koaRouter.get('/get_swiper',(ctx)=>{
  const swiper = datas.swiperDetail
  ctx.body={
    swiper
  }
})

// 请求首页信息的接口
koaRouter.get('/get_msite_detail',(ctx)=>{
  const msiteDetail = msite.Home
  ctx.body={
    msiteDetail
  }
})

// 请求剧院页面的剧场信息的接口
koaRouter.get('/cinemas_info',(ctx)=>{
  const cinemasInfo = cinemaInfo
  ctx.body={
    cinemasInfo
  }
})
// 请求详情列表的接口
// koaRouter.get('get_msite_detail',(ctx)=>{
//   const msiteDetail = msite.Home
//   ctx.body={
//     msiteDetail
//   }
// })

// 声明使用所有的路由及路由的相关的所有的方法
koa
  .use(koaRouter.routes())
  .use(koaRouter.allowedMethods())
  
// 监听端口,启动服务器
koa.listen('5000', () => {
  // console.log('服务器启动了')
  // console.log('服务器的地址为:http://localhost:5000')
})
