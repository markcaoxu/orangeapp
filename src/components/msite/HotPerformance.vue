<template>
  <div id='app'>
    <section class="HotPerformance-section">
      <ul class="HotPerformance-header">
        <li class="HotPerformance-title">热门演出</li>
        <li class="HotPerformance-glt"> > </li>
      </ul>
      <div class="wrapper">
        <!-- better-scroll 只处理容器（wrapper）的第一个子元素（content）的滚动，其它的元素都会被忽略。-->
        <ul class="HotPerformance-list">
          <li class="HotPerformance-item" v-for="(item,index) in HotPerformance" :key="index">
						<img :src=item.img alt="">
            <span class="HotPerformance-name">{{item.name}}</span>
          </li>
        </ul>
        <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
      </div>
    </section>
  </div>
</template>
<script>
// 引入BScroll组件
import BScroll from 'better-scroll'
export default {
  props: ['HotPerformance'],
  mounted(){
    this.$nextTick(() => {
      this.scroll = new BScroll(".warrper", {
        scrollY: true,
        click: true,
        startY: 0,
        bounce: {
          top: false,
          bottom: true,
          left: true,
          right: true
        }
      })
    })
  }
}
</script>
<style lang='stylus' scoped>
#app
  width 100%
  height 100%
  .HotPerformance-section
    width 90%
    height 300px
    margin 0 auto
    .HotPerformance-header
      width 100%
      height 30px
      padding 10px
      margin-top 10px
      .HotPerformance-title
        width 20%
        height 100%
        float left
      .HotPerformance-glt
        width 10%
        height 100%
        float right
  .wrapper
    height 202px
    margin 10px auto
    overflow hidden
    .HotPerformance-list
      height 100%
      margin 10px auto
      .HotPerformance-item
        width 30%
        height 90%
        margin 0 auto
        background-color green
        float left
        .HotPerformance-img
          width 107px
          height 145px
        .HotPerformance-name
          width 100%
          height 30%
</style>