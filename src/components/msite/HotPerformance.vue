<template>
  <div id='app'>
    <section class="HotPerformance-section">
      <ul class="HotPerformance-header">
        <li class="HotPerformance-title">热门演出</li>
        <li class="HotPerformance-glt"> > </li>
      </ul>
      <div class="HotPerformance-wrapper">
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
  mounted () {
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
    width 96%
    height 300px
    margin 0 auto
    .HotPerformance-header
      width 100%
      height 30px
      padding 10px
      margin-top 10px
      .HotPerformance-title
        display inline-block
        font-size 20px 
				line-height 20px
				width 40%
        height 100%
        float left
      .HotPerformance-glt
        display inline-block
        width 10%
        height 100%
        float right
		.HotPerformance-wrapper
			height 202px
			margin 0 auto
			overflow hidden
			.HotPerformance-list
				height 100%
				margin 0px auto
				.HotPerformance-item
					width 30%
					height 90%
					background-color green
					float left
          padding-bottom 60px
					.HotPerformance-img
						width 90%
						height 70%
					.HotPerformance-name
						width 90%
						height 30%
</style>