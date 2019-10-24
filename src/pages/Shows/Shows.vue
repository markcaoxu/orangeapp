<template>
  <div class="showsContainer">
    <div class="showsHeader">
      <span class="iconfont icon-arrow-left" @click="$router.back()"></span>
      <p class="header_center">演出</p>
      <span class="iconfont icon-gengduo"></span>
    </div>
    <div class="showsCenter">
      <div class="centerLeft">
        <van-tabs v-model="active" class="nav">
          <van-tab title="全国"></van-tab>
          <van-tab title="演唱会"></van-tab>
          <van-tab title="音乐剧"></van-tab>
          <van-tab title="话剧歌剧"></van-tab>
          <van-tab title="儿童亲子"></van-tab>
          <van-tab title="音乐剧"></van-tab>
          <van-tab title="戏曲综艺"></van-tab>
          <van-tab title="展览"></van-tab>
          <van-tab title="舞蹈芭蕾"></van-tab>
        </van-tabs>
      </div>
      <div class="centerRight">
        <span class="rightOne">|</span>
        <span>全国</span>
        <span class="iconfont icon-dingwei"></span>
      </div>
    </div>
    <ShowsList/>
  </div>
</template>
<script>
// 引入组件
import ShowsList from "./ShowsList/ShowsList";
export default {
  components: {
    ShowsList
  },
  data() {
    return {
      active: 0, // 默认值为0
      scrollY: 0 // 滑动的距离值
    };
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.showsContainer
  width 100%
  height 100%
  position relative
  .showsHeader
    width 100%
    height 40px
    display flex
    border-bottom 1px solid #DBDBDD
    position fixed
    .icon-arrow-left
      height 36px
      width 16%
      font-size 18px
      padding 10px 8px
      color #272727
    .header_center
      height 40px
      width 60%
      font-size 18px
      text-align center
      line-height 40px
      color #272727
    .icon-gengduo
      width 20%
      text-align center
      line-height 40px
      font-weight 600
      margin 2px 0
  .showsCenter
    width 100%
    position fixed
    padding-top 41px
    .centerLeft
      width 80%
      float left
      overflow hidden
      .nav
        width 300px
    .centerRight
      float right
      width 20%
      padding-top 14px
      float right
      span
        color #666666
      .rightOne
        margin-right 8px
        color #F0F0F0
  .showsFooter
    width 100%
    height 85%
    padding-top 80px
    .contentList
      width 95%
      margin-left 16px
      overflow visible
      ul
        width 100%
        li
          width 100%
          height 200px
          display flex
          img
            width 32%
            height 75%
            padding-top 24px
            padding-left 0
          .listRight
            margin-left 12px
            padding-top 30px
            .date
              font-weight 600
            .time
              font-size 12px
              padding-left 8px
            h3
              font-weight 700
              margin 20px 0
              line-height 100%
            p
              font-size 12px
              padding-bottom 10px
            .money
              color #ff6743
            .more
              font-size 12px
              padding-left 5px
</style>
