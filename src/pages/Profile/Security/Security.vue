<template>
  <div class="securityContainer">
    <div class="secHead">
      <div class="left">
        <span @click="$router.back('/profile')">&lt;</span>
      </div>
      <div class="center">
        <span>账户设置</span>
      </div>
      <div class="right">
        <span>...</span>
      </div>
    </div>
    <div class="secMessage">
      <div class="top">
        <a href="javascript:;">
          <span>头像</span>
          <img :src="user._id?user.userImage:''" alt />
        </a>
      </div>
    </div>
    <div class="secField">
      <mt-field label="手机" placeholder="您的手机" type="tel" v-model="phone" class="proMess"></mt-field>
      <mt-field label="密码" placeholder="修改密码" type="password" v-model="password"></mt-field>
    </div>
    <div class="secExit" @click="secExit">
      <p>退出/登录</p>
    </div>
  </div>
</template>
<script>
import { MessageBox } from "mint-ui";
import { mapState } from 'vuex'
export default {
  data() {
    return {
      phone: "",
      password: "",
      birthday: "xx/xx/xx"
    };
  },
  computed: {
    ...mapState({
      user: state => state.login.user
    })
  },
  methods: {
    secExit() {
      MessageBox.confirm("确定要执行此操作吗?").then(() => {
        this.$router.push("/login");
      });
    }
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.securityContainer
  width 100%
  height 100%
  background-color #f5f5f5
  .secHead
    padding 15px 0
    overflow hidden
    width 100%
    display flex
    justify-content space-around
    font-size 20px
    background-color white
  .secMessage
    margin 15px 0
    width 100%
    background-color white
    a
      padding 3% 0
      position relative
      display flex
      justify-content space-between
      span
        display inline-block
        left 0px
        width 13%
        height 13%
        text-align center
        line-height 50px
        font-size 16px
        color black
      img
        width 13%
        height 13%
        vertical-align center
        padding-right 20px
    .top
      border 2px solid #f5f5f5
  .secExit
    background-color white
    margin 5% 0
    width 100%
    p
      margin 10px auto
      padding 5% 0
      width 100%
      text-align center
</style>
