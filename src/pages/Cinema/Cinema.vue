<template>
  <div class="wrapper01" ref="wrapper01">
    <div class="cinema">
      <!-- 头部 -->
      <div class="cinema-header">剧院</div>
      <!-- 主体 -->
      <ul class="cinema-list">
        <!-- 大项目 -->
        <li class="cinema-item" v-for="(cinema,index) in cinemas" :key="index">
          <!-- 剧院头部名称 -->
          <div class="list-header">
            <div class="left-img">
              <img
                :src="cinema.cinemaImg"
                alt
              />
            </div>
            <div class="right-text">
              <p>{{cinema.cinemaName}}</p>
              <p>{{cinema.performNum}}场在售演出</p>
              <span class="iconfont icon-gengduo"></span>
            </div>
          </div>
          <!-- 剧场影片列表 -->
          <div class="list-content">
            <!-- 剧 -->
            <div class="list-item" v-for="(item,index) in cinema.performs" :key="index">
              <!-- 剧-时间 -->
              <div class="top-time">
                <span>{{item.time}}</span>
                <span></span>
              </div>
              <!-- 剧-图片 -->
              <div class="bottom-img" @click="goDetail(item.title)">
                <img
                  :src="item.imgUrl"
                  alt
                />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// 引入better-scroll
import Bscroll from "better-scroll";
// 引入接口
import { reqCinemasInfo,reqDetailInfo } from "../../api/index.js";
export default {
  data () {
    return {
      cinemas:[],
      detail:{}
    }
  },
  async mounted() {
    // 滑动配置
    this.$nextTick(() => {
      this.scroll01 = new Bscroll(this.$refs.wrapper01, {
        scrollY: true,
        click: true,
        startY: 0,
        bounce: {
          top: false,
          bottom: true,
          left: true,
          right: true
        }
      });
    });

    // 发送请求，获取场馆信息
    const result = await reqCinemasInfo();
    // 保存到当前Vue实例对象的cinemas数组
    this.cinemas = result.cinemasInfo.Cinemas
  },
  methods: {
    async goDetail(title){
      // 获取title
      // console.log(title);
      // 发送请求，获取商品列表
      const result = await reqDetailInfo()
      // console.log(result.detail);
      // 遍历匹配title
      result.detail.forEach((item)=>{
        // console.log(item);
        // 判断
        if(title===item.title){
          // 匹配成功，把这个item（匹配的商品对象）存到Vuex中
          this.$store.dispatch('saveDetail',item)
        }
      })
      // this.$store.dispatch("saveDetail", detail);
    }
  }
};
</script>

<style lang='stylus' rel='stylesheet/stylus' >
.wrapper01
  width 100%
  height 100%
  .cinema
    width 100%
    padding-bottom 50px
    // 剧场大头样式
    .cinema-header
      width 100%
      height 43px
      border-bottom 1px solid #cccccc
      line-height 43px
      text-align center
    // 剧场主内容
    .cinema-list
      width 92%
      margin 16px auto 0 auto
      // 大项目样式
      .cinema-item
        background-color #ffffff
        margin-bottom 16px
        width 100%
        border-top 1px solid #ffffff
        border-bottom 1px solid #ffffff
        // 阴影属性  x   y   扩散   color
        box-shadow 0px 0px 8px #888888
        // 大项目小头
        .list-header
          width 92%
          margin 15px auto 0 auto
          overflow hidden
          // 头像
          .left-img
            float left
            margin-right 20px
            img
              width 50px
              height 50px
              border-radius 3px
          // 文字
          .right-text
            position relative
            p
              padding 0 20px
              margin-top 8px
              margin-left 20px
              &:nth-child(2)
                font-size 12px
            span
              position absolute
              right 6px
              top 5px
              font-weight 700
              font-size 20px
        // 大项目横向列表样式
        .list-content
          display flex
          margin 0 16px 18px 16px
          overflow hidden
          // 小项目样式
          .list-item
            margin-right 8px
            .top-time
              width 110px
              height 25px
              margin-top 10px
              text-align center
              margin-bottom 10px
              border-bottom 1px solid #F5F5F5
              position relative
              color #B3B3B3
              font-size 13px
              span
                &:nth-child(2)
                  position absolute
                  width 7px
                  height 7px
                  background #CCCCCC
                  left 53px
                  top 22px
                  border-radius 50%
            img
              width 110px
              height 150px
              border-radius 3px
</style>