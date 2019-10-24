<template>
  <div class="profileContainer">
    <!-- 个人中心 -->
    <div class="profileBody">
      <div class="profileHeader">
        <a class="setting" @click="$router.push('/security')">
          <!--设置的 icon 图标 -->
          <span class="iconfont icon-shezhi"></span>
        </a>
        <div class="headcontent">
          <div class="headTop">
            <a href="javascript:;">
              <img :src="user._id?user.userImage:''" alt @click="$router.push('/security')"/>
              <div class="profileMessage" @click="$router.push('/login')">
                <span class="profileName" >{{user._id?user.username:'登录'}}</span>
                <span class="profileId">{{user._id?user.username:'|注册'}}</span>
              </div>
            </a>
          </div>
          <div class="headVip">
            <div class="vipContent">
              <span>普通会员</span>
            </div>
          </div>
          <div class="headItem">
            <ul class="headLists">
              <li class="headList">
                <a href="javascript:;">
                  <p class="count">0</p>
                  <p class="desc">账户余额</p>
                </a>
              </li>
              <li class="headList">
                <a href="javascript:;">
                  <p class="count">0</p>
                  <p class="desc">积分</p>
                </a>
              </li>
              <li class="headList">
                <a href="javascript:;">
                  <p class="count">0</p>
                  <p class="desc">优惠券</p>
                </a>
              </li>
              <li class="headList">
                <a href="https://m.juooo.com/shop/vip/buy">
                  <p class="headInfo">立即开通</p>
                  <p class="desc">橙PLUS卡</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="profileVip">
        <a href="https://m.juooo.com/shop/vip/buy">
          <img src="./imgs/buyTickets.png" alt />
        </a>
      </div>
      <div class="profileSetting">
        <ul class="setTop">
          <li class="setLists">
            <a href="javascript:;">
              <img src="./imgs/settingImg/order.png" alt class="listImg" />
              <p class="listName">我的订单</p>
            </a>
          </li>
          <li class="setLists">
            <a href="javascript:;" @click="$router.push('/ticket')">
              <img src="./imgs/settingImg/ticket.png" alt class="listImg" />
              <p class="listName">我的票夹</p>
            </a>
          </li>
          <li class="setLists">
            <a href="javascript:;">
              <img src="./imgs/settingImg/cardpackage.png" alt class="listImg" />
              <p class="listName">我的卡包</p>
            </a>
          </li>
        </ul>
        <ul class="setBott">
          <li class="setLists">
            <a href="javascript:;">
              <img src="./imgs/settingImg/people.png" alt class="listImg" />
              <p class="listName">实名购票人</p>
            </a>
          </li>
          <li class="setLists">
            <a href="javascript:;">
              <img src="./imgs/settingImg/address.png" alt class="listImg" />
              <p class="listName">收货地址</p>
            </a>
          </li>
          <li class="setLists">
            <a href="javascript:;">
              <img src="./imgs/settingImg/feedback.png" alt class="listImg" />
              <p class="listName">意见反馈</p>
            </a>
          </li>
          <li class="setLists">
            <a href="javascript:;">
              <img src="./imgs/settingImg/help.png" alt class="listImg" />
              <p class="listHelp">客服帮助</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      user: state => state.login.user
    })
  },
  methods:{
    
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.profileContainer
  width 100%
  height 100%
  background-color #f5f5f5
  .profileBody
    position relative
    display flex
    flex-direction column
    align-items center
    width 100%
    height 80%
    .profileHeader
      width 100%
      background url('./imgs/head.png') no-repeat top
      background-position relative
      position relative
      overflow hidden
      background-size 100%
      .setting
        span 
          position absolute
          right 20px
          top 15px
          font-size 25px
          color white
      .headcontent
        width 90%
        height 100%
        border-radius 5px
        background-color white
        margin-top 50px
        margin-left 18px
        .headTop
          background-color white
          width 100%
          height 18%
          border-radius 10px
          margin 15px auto
          a
            width 100%
            height 58px
            position relative
            display inline-block
            img
              position absolute
              left 5%
              top -10px
              display inline-block
              width 58px
              height 58px
            .profileMessage
              position absolute
              display inline-block
              position absolute
              left 25%
              .profileName
                display block
                font-size 15px
                color #232323
                margin 10px 0
                font-weight 700
              .profileId
                display block
                font-size 10px
                color #999999
        .headVip
          position relative
          background-color white
          width 100%
          height 30px
          margin 3px 0
          .vipContent
            display inline-block
            padding 8px 10px
            border-radius 20px 0 0 20px
            position absolute
            right 0
            overflow hidden
            font-size 14px
            color #454545
            background-color #f8d583
            span
              font-weight 700
        .headItem
          width 100%
          .headLists
            display flex
            align-items center
            .headList
              margin 0 auto
              text-align center
              display flex
              align-items center
              flex-direction column
              a
                padding 10px 0
                .count
                  margin-bottom 10px
                  color #FF6743
                  font-size 20px
                .desc
                  font-size 12px
                  color #666
                .headInfo
                  font-size 13px
                  color black
                  margin 9px 0
    .profileVip
      width 100%
      a
        display inline-block
        width 100%
        img
          width 100%
          height 90px
    .profileSetting
      width 100%
      height 200px
      ul
        display flex
        align-items center
        width 90%
        height 40%
        margin 8px auto
        background-color white
        border-radius 8px
        li
          margin 10px
          a
            padding 0 10px
            img  
              width 33px
              height 33px
            p
              font-size 12px
              color black 
      .setTop
        margin-bottom 20px
      .setBott
        .listHelp
          color #ff6743
</style>
