<template>
  <div id='app'>
    <section class="section-swiper">
      <mt-swipe :auto="5000">
        <mt-swipe-item v-for="(item,index) in arrImg" :key="index">
          <img class="swiperImg" :src="item.img" alt="" @click="goDetail(item.title)">
        </mt-swipe-item>
      </mt-swipe>
    </section>
  </div>
</template>
<script>
// 引入接口
import { reqCinemasInfo, reqDetailInfo } from "../../api/index.js"
export default {
  data () {
    return {
      "arrImg":{}
    }
  },
  async mounted () {
    // 发送请求，获取场馆信息
    const result = await reqCinemasInfo();
    this.arrImg = result.msiteDetail.Rotation
    // console.log(this.arrImg)
  },
  methods: {
    async goDetail (title) {
      // 获取title
      // console.log(title);
      // 发送请求，获取商品列表
      const result = await reqDetailInfo()
      // console.log(result.detail);
      // 遍历匹配title
      result.detail.forEach((item) => {
        // console.log(item);
        // 判断
        if (title === item.title) {
          // 匹配成功，把这个item（匹配的商品对象）存到Vuex中
          this.$store.dispatch('saveDetail', item)
          // 跳转到商品详情页

          // console.log(this)
          this.$router.push('/detail')
        }
      })
    }
  }
}
</script>
<style lang='stylus'>
#app
  height 100%
  width 100%
  .section-swiper
    width 100%
    height 100%
    .mint-swipe-indicators
      left 47%
    .mint-swipe
      height 100%
      width 100%
      .mint-swipe-items-wrap
        background-color white
        height 100%
        width 100%
        .mint-swipe-item
          width 100%
          height 100%
          background-color blue
          .swiperImg
            width 100%
            height 100%
</style>