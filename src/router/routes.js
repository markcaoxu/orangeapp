// 引入路由组件
import Msite from '../pages/Msite/Msite.vue'
import Cinema from '../pages/Cinema/Cinema.vue'
import Ticket from '../pages/Ticket/Ticket.vue'
import Profile from '../pages/Profile/Profile.vue'
// 引入搜索框酷游组件
import Search from '../pages/Seach/Seach.vue'

// 商品详情页
import Detail from '../pages/Detail/Detail.vue'
// 个人信息页
import Security from '../pages/Profile/Security/Security.vue'
// 登录注册页面
import Login from '../pages/Login/Login.vue'


// 暴露路由
export default [
  // 首页
  {
    path: '/msite',
    component: Msite,
    meta: {
      isShowFooter: true
    }
  },
  // 剧院
  {
    path: '/cinema',
    component: Cinema,
    meta: {
      isShowFooter: true
    }
  },
  // 票夹
  {
    path: '/ticket',
    component: Ticket,
    meta: {
      isShowFooter: true
    }
  },
  // 个人中心
  {
    path: '/profile',
    component: Profile,
    meta: {
      isShowFooter: true
    }
  },
  // 搜索
  {
    path: '/seach',
    component: Search,
    meta: {
      isShowFooter: true
    }
  },
  // 商品详情页
  {
    path:'/detail',
    component: Detail
  },
  //  个人信息页
  {
    path: '/security',
    component: Security
  },
  {
    path: '/login',
    component: Login
  },
  // 重定向
  {
    path: '/',
    redirect: '/msite'
  }
]