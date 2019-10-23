<template>
  <section class="loginContainer">
    <div class="loginInner">
      <!-- 切换登录状态 -->
      <div class="login_header">
        <h2 class="login_logo">欢迎来到聚橙网</h2>
        <div class="login_header_title">
          <a href="javascript:;" :class="{on:loginWay}" @click="loginWay=true">短信登录</a>
          <a href="javascript:;" :class="{on:!loginWay}" @click="loginWay=false">密码登录</a>
        </div>
      </div>
      <!-- 登录内容 -->
      <div class="login_content">
        <form>
          <!-- 短信登录 -->
          <div :class="{on:loginWay}">
            <section class="login_message">
              <input type="tel" placeholder="手机号" />
              <span style="color:red" class="help is-danger">phone</span>
              <button class="get_verification">获取验证码</button>
            </section>
            <section class="login_verification">
              <input type="tel" placeholder="验证码" />
              <span style="color:red" class="help is-danger">code</span>
            </section>
          </div>

          <!-- 密码登录 -->
          <div :class="{on:!loginWay}">
            <section>
              <section class="login_message">
                <input type="tel" placeholder="手机/邮箱/用户名" />
                <span style="color:red" class="help is-danger">name</span>
              </section>
              <section class="login_verification">
                <input type="text" placeholder="密码" />
                <span style="color:red" class="help is-danger">pwd</span>
                <div class="switch_button" :class="isPwdShow?'on':'off'" @click="isPwdShow=!isPwdShow">
                  <div class="switch_circle" :class="{right:isPwdShow}"></div>
                  <span class="switch_text">{{isPwdShow?'abc':'...'}}</span>
                </div>
              </section>
              <section class="login_message">
                <input type="text" placeholder="验证码" name="captcha" />
                <span style="color:red" class="help is-danger">error</span>
                <img class="get_verification" src="http://localhost:5000/captcha" alt="captcha" />
              </section>
            </section>
          </div>

          <!-- 下方按钮 -->
          <button class="login_submit">登录</button>
        </form>
      </div>

      <a href="javascript:" class="go_back" @click="$router.back()">
        <span class="iconfont icon-arrow-left"></span>
      </a>
    </div>
  </section>
</template>
<script>
// 引入接口
// import { reqSendCode, reqSmsLogin, reqPwdLogin } from '../../api'
// import { MessageBox, Toast } from 'mint-ui'
export default {
  data() {
    return {
      loginWay: true, // 默认是true,手机号码的方式是显示的,false--用户名
      // phone: '', // 用来存储手机号
      // computedTime: 0, // 用来倒计时的
      isPwdShow: false // 用来切换密码是否明文
      // code: '', // 短信验证码
      // name: '', // 用户名
      // pwd: '', // 密码
      // captcha: '' // 图形验证码
    };
  },
  // computed: {
  //   isRightPhone() {
  //     return /[1]\d{10}/.test(this.phone)
  //   }
  // },

  // methods: {
  //   // 发送验证码
  //   async sendCode() {
  //     this.computedTime = 10
  //     this.timeId = setInterval(() => {
  //       this.computedTime--
  //       if (this.computedTime <= 0) {
  //         this.computedTime = 0
  //         // 清除定时器
  //         clearInterval(this.timeId)
  //       }
  //     }, 1000)
  //     // 发送验证码
  //     const result = await reqSendCode(this.phone)
  //     if (result.code === 0) {
  //       // 断言
  //       Toast('发送成功')
  //     } else {
  //       MessageBox.alert('发送失败')
  //       // 定时器归0
  //       this.computedTime = 0
  //       // 清理定时器
  //       // clearInterval(this.timeId)
  //     }
  //   },
  //   // 登录操作
  //   async login() {
  //     //console.log('哈哈')
  //     // 必须要先判断是哪种登录方式?
  //     // 必须要表单验证都通过才能进行请求

  //     // 手机和验证码---2个------用户名和密码和图形验证码---3个
  //     const { loginWay, phone, code, name, pwd, captcha } = this
  //     let names
  //     if (loginWay) {
  //       // 手机方式登录
  //       names = ['phone', 'code']
  //     } else {
  //       // 用户名的方式登录
  //       names = ['name', 'pwd', 'captcha']
  //     }
  //     // 多个表单的验证
  //     const success = this.$validator.validateAll(names)
  //     // 判断验证是否通过
  //     if (success) {
  //       // 发送请求了
  //       let result
  //       // 还要判断是哪种登录方式-----发的请求不同
  //       if (loginWay) {
  //         // 手机
  //         result = await reqSmsLogin(phone, code)
  //         this.computedTime = 0
  //       } else {
  //         // 用户名
  //         result = await reqPwdLogin({ name, pwd, captcha })
  //         if (result.code === 1) {
  //           // 失败了,重新刷新图形验证码
  //           this.sendCaptcha()
  //           this.captcha = ''
  //         }
  //       }

  //       // 无论是手机登录还是用户名登录,此时必须判断是否登录成功
  //       if (result.code === 0) {
  //         // 保存用户信息------
  //         const user = result.data
  //         // user中有name或者phone,_id,token
  //         this.$store.dispatch('saveUser', user)
  //         // 跳转---个人中心---profile组件界面
  //         this.$router.replace('/profile')
  //       } else {
  //         // 登录失败的提示
  //         MessageBox.alert(result.msg)
  //       }
  //     }
  //   },

  //   // 发送图形验证码
  //   sendCaptcha() {
  //     this.$refs.im.src = 'http://localhost:5000/captcha?time=' + Date.now()
  //   }
  // },

  // 组件内的路由守卫
  // beforeRouteEnter(to, from, next) {
  //   // 该路由守卫中的this是undefined
  //   // console.log(this)
  //   next(vm => {
  //     // 通过 `vm` 访问组件实例
  //     // console.log(vm)
  //     if(vm.$store.state.user.user._id){
  //       next('/profile')
  //     }else{
  //       next()
  //     }
  //   })
  //  // next()
  // }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.loginContainer
  width 100%
  height 100%
  background url('./imgs/login_bg.png') no-repeat
  background-position center
  background-size 100%
  .loginInner
    padding-top 60px
    width 80%
    margin 0 auto
    .login_header
      .login_logo
        margin-top 50px
        font-size 24px
        font-weight bold
        color black
        text-align center
      .login_header_title
        padding-top 70px
        text-align center
        >a
          color #333
          font-size 14px
          padding-bottom 4px
          &:first-child
            margin-right 40px
          &.on
            color #ff9a34
            font-weight 700
            border-bottom 2px solid #ff9a34
    .login_content
      >form
        >div
          display none
          &.on
            display block
          input
            width 100%
            height 100%
            padding-left 10px
            box-sizing border-box
            border 1px solid #ddd
            border-radius 4px
            outline 0
            font 400 14px Arial
            &:focus
              border 1px solid #FF9A34
          .login_message
            position relative
            margin-top 25px
            margin-bottom 25px
            height 48px
            font-size 14px
            background #fff
            .get_verification
              position absolute
              top 50%
              right 10px
              transform translateY(-50%)
              border 0
              color #ccc
              font-size 14px
              background transparent
              &.right
                color black
          .login_verification
            position relative
            margin-top 16px
            height 48px
            font-size 14px
            background #fff
            .switch_button
              font-size 12px
              border 1px solid #ddd
              border-radius 8px
              transition background-color 0.3s, border-color 0.3s
              padding 0 6px
              width 30px
              height 16px
              line-height 16px
              color #fff
              position absolute
              top 50%
              right 10px
              transform translateY(-50%)
              &.off
                background #fff
                .switch_text
                  float right
                  color #ddd
              &.on
                background #FF9A34
              >.switch_circle
                // transform translateX(27px)
                position absolute
                top -1px
                left -1px
                width 16px
                height 16px
                border 1px solid #ddd
                border-radius 50%
                background #fff
                box-shadow 0 2px 4px 0 rgba(0, 0, 0, 0.1)
                transition transform 0.3s
                &.right
                  transform translateX(27px)
          .login_hint
            margin-top 12px
            color #999
            font-size 14px
            line-height 20px
            >a
              color #FF9A34
        .login_submit
          display block
          width 100%
          height 42px
          margin-top 30px
          border-radius 45px
          background -webkit-linear-gradient(left, #ff9a34, #ff4d4a)
          color #fff
          text-align center
          font-size 16px
          line-height 42px
          border 0
    .go_back
      position absolute
      top 5px
      left 5px
      width 30px
      height 30px
      >.iconfont
        font-size 20px
        color #999
</style>
