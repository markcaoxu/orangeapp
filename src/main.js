// 引入Vue
import Vue from 'vue'
// 引入App组件
import App from './App.vue'
// 引入路由
import router from './router/index.js'
// 引入store
import store from './store/index.js'



// 引入mint-ui
import MintUI from 'mint-ui'
// 本地依赖包里mint-ui样式    也可以配置babel
import 'mint-ui/lib/style.css'
// 声明使用
Vue.use(MintUI)
// 引入mint-ui中的组件
import {
// 引入的组件

} from 'mint-ui'

/*
  引入后需要声明全局使用
  格式：Vue.component(组件名, 组件);
  例子：Vue.component(Field.name, Field);
*/
// 上面的内容在这写



// 表单验证 vee-validate的引入



// 设置vue配置信息
Vue.config.productionTip = false
// new不报错
/* eslint-disable no-new */
new Vue({
  el: '#app', // 实例元素
  components: {
    App // 注册组件
  },
  template: '<App/>', // 组件标签
  router, // 配置路由器
  store // 注册store
})