<template>
  <div class="shows_list">
    <ul class="footerUl">
      <li class="footerLi">
        <img src="../images/1.jpg" alt />
        <div class="list_right">
          <span class="date">10/22</span>
          <span class="day">周二</span>
          <h3>【万有音乐系】《胡德夫——山谷的呼唤演唱会》--上海站</h3>
          <p class="address">上海|上海交响乐团音乐团</p>
          <p class="money">
            <strong class="howMoney">￥280</strong>起
          </p>
        </div>
      </li>
      <li>
        <img src="../images/1.jpg" alt />
        <div class="list_right">
          <span>10/25</span>
          <span>周五</span>
          <h3>【万有音乐系】《小城故事》——陈佳2019个人演唱会-武...</h3>
          <p>武汉|湖北剧院</p>
          <p>￥100起</p>
        </div>
      </li>
      <li>
        <img src="../images/1.jpg" alt />
        <div class="list_right">
          <span>11/30</span>
          <span>周六</span>
          <h3>【万有音乐系】《小城故事》——陈佳2019个人演唱会-武...</h3>
          <p>深圳|新桥文化艺术中心大剧院</p>
          <p>￥100起</p>
        </div>
      </li>
      <li>
        <img src="../images/1.jpg" alt />
        <div class="list_right">
          <span>12/06</span>
          <span>周五</span>
          <h3>【万有音乐系】《小城故事》——陈佳2019个人演唱会-武...</h3>
          <p>合肥|合肥瑶海大剧院</p>
          <p>￥100起</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "ShowsList"
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.shows_list
  width 100%
  .footerUl
    width 90%
    margin-left 5%
    .footerLi
      width 100%
      display flex
      height 180px
      img 
        height 80%
        width 29%
        margin 18px 0
      .list_right
        width 62%
        height 74%
        margin 22px 15px
        .date
          display inline-block
          color #232323
          font-weight 600
        .day
          display inline-block
          color #7B7B7B
          font-size 13px
          padding-left 6px
        h3
          font-weight 700
          margin-top 16px
          height 44px
          line-height 22px
        .address
          font-size 13px
          color #7B7B7B
          margin-top 14px
        .money
          font-size 13px
          color #7B7B7B
          margin-top 14px
          .howMoney
            color red
            font-size 16px
            margin-right 4px
</style>
