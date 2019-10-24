<template>
  <section class="loginContainer">
    <div class="loginInner">
      <!-- 切换登录状态 -->
      <div class="login_header">
        <h2 class="login_logo">欢迎来到聚橙网</h2>
      </div>
      <!-- 登录内容 -->
      <div class="login_content">
        <form method="POST">
          <!-- 密码登录 -->
          <div>
            <!-- 用户名：手机 -->
            <section class="login_message">
              <input
                type="tel"
                placeholder="用户名"
                v-model="name"
                name="name"
                v-validate="'required|phone2'"
              />
              <span style="color:red" class="help is-danger">{{ errors.first('name') }}</span>
            </section>
            
            <!-- 密码 -->
            <section class="login_password">
              <input
                :type="isPwdShow?'text':'password'"
                placeholder="密码"
                maxlength="8"
                v-model="pwd"
                name="pwd"
                v-validate="'required|min:6'"
              />
              <span style="color:red" class="help is-danger">{{ errors.first('pwd') }}</span>
              <div
                class="switch_button"
                :class="isPwdShow?'on':'off'"
                @click="isPwdShow=!isPwdShow"
              >
                <div class="switch_circle" :class="{right:isPwdShow}"></div>
                <span class="switch_text">{{isPwdShow?'abc':'...'}}</span>
              </div>
            </section>
            <!-- 验证码 -->
            <section class="login_captcha">
              <!-- 验证码 -->
              <input
                type="text"
                maxlength="11"
                placeholder="验证码"
                v-model="captcha"
                name="captcha"
                v-validate="'required'"
              />
              <span style="color:red" class="help is-danger">{{ errors.first('captcha') }}</span>
              <img
                ref="im"
                class="get_verification"
                src="http://localhost:5000/captcha"
                alt="captcha"
                
              />
            </section>
          </div>
          <!-- 下方按钮 -->
          <button class="login_submit"  @click.prevent="login">登录/注册</button>
          <p class="tips">未注册手机号验证成功后自动创建账户</p>
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
import { reqPwdLogin } from "../../api";
import { MessageBox, Toast } from "mint-ui";
export default {
  data() {
    return {
      isPwdShow: false, // 用来切换密码是否明文
      name: "1855387618", // 用户名
      pwd: "123456", // 密码
      captcha: "" // 图形验证码

    };
  },
  computed: {
    // 正则检验手机号是否正确
    isRightPhone() {
      return /[1]\d{10}/.test(this.name);
    }
  },
  methods: {
    // 登录操作
    async login() {
      // 获取用户名，密码，验证码
      const { name, pwd, captcha } = this;
      // 密码登录
      let names = ["name", "pwd",captcha];
      console.log(names)
      // 表单验证
      const success = this.$validator.validateAll(names);
      // 判断验证是否通过
      console.log(success)  //succe
      if (success) {
        // 验证成功，通过
        // 发送请求，接收数据
        let result = await reqPwdLogin({ name, pwd });
        console.log(result)
        // 判断是否登录成功 1失败，0成功
        // 登录失败，刷新验证码
        // if (result.code !== "0") {
        //   // 失败了,重新刷新图形验证码
        //   this.sendCaptcha();
        //   this.captcha = "";
        // }
 
        // 判断是否登录成功
        if (result.code === "0") {
          // 保存用户信息
          const user = result.users[0];
          // user中有name,img,phone,_id,token
          this.$store.dispatch("saveUser", user);

          Toast({
            message: result.message,
          });

          // 跳转---个人中心---profile组件界面
          this.$router.push("/profile");
        } else {
          // 登录失败的提示
          MessageBox.alert("用户名或密码不正确，请重新输入");
        }
      }
    },
    // 发送图形验证码
    sendCaptcha() {
      this.$refs.im.src = "http://localhost:5000/captcha?time=" + Date.now();
    }
  },
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
    .login_content
      >form
        >div
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
            height 48px
            font-size 14px
            background #fff
          .login_password
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
                background #02a774
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
          .login_captcha
            position relative
            margin-top 16px
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
        .tips
          font-size 1%
          margin-top 10px
          margin-left 18%
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
