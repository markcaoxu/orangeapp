<template>
  <div class="warrper">
    <div class="msite">
      <div class="msite-header">
        <!-- 引入header组件 -->
        <Header />
      </div>
      <div class="msite-sectionSwiperOne">
        <!-- 引入swiper组件 -->
        <SwiperFirst :arrImg="arrImg" />
      </div>
      <div class="msite-button">
        <!-- 引入button组件 -->
        <Button :buttons="buttons" />
      </div>
      <div class="msite-Purchase">
        <!-- 引入Purchase组件 -->
        <Purchase :Purchase="Purchase" />
      </div>
      <div class="msite-FunctionalArea" >
        <!-- 引入FunctionalArea组件 -->
        <FunctionalArea :functionalAreas="functionalAreas"/>
      </div>
			<div class="msite-HotPerformance" >
        <!-- 引入FunctionalArea组件 -->
        <HotPerformance :HotPerformance="HotPerformance"/>
      </div>
    </div>
  </div>
</template>
<script>
// 引入button组件
import Button from "../../components/msite/Button"
// 引入FunctionalArea组件
import FunctionalArea from "../../components/msite/FunctionalArea"
// 引入Swiper组件
import SwiperFirst from "../../components/msite/SwiperFirst"
// 引入Header组件
import Header from "../../components/msite/Header"
// 引入Header组件
import Purchase from "../../components/msite/Purchase"
// 引入HotPerformance组件
import HotPerformance from "../../components/msite/HotPerformance"
// 引入BScroll组件
import BScroll from 'better-scroll'
// 声明使用
// Vue.use(BScroll)
//引入reqMessage方法，用来获取数据
import { reqMessage } from '../../api/index.js'
export default {
  data () {
    return {
      // 空的数组，准备接值
      arrImg: [],
      buttons: {},
      functionalAreas: {},
			Purchase: {},
			HotPerformance:[]
    }
  },
  async mounted () {
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

    // 获取工厂服务信息 // 获取推荐商品
    let result = await reqMessage()
    // 用已有变量接数组
    this.arrImg = result.msiteDetail.Rotation
    // console.log(this.arrImg)
    this.buttons = result.msiteDetail.button
		// console.log(this.buttons)
		this.functionalAreas = result.msiteDetail.FunctionalArea
		// console.log(this.functionalArea)
		this.HotPerformance = result.msiteDetail.HotPerformance
    console.log(this.HotPerformance)

  },
  components: {
    Button,
    FunctionalArea,
    SwiperFirst,
    Header,
		Purchase,
		HotPerformance
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.warrper
  width 100%
  height 100%
  .msite
    width 100%
    position relative
    .msite-header
      width 100%
      height 30px
      position absolute
      top 0
      left 0
      z-index 5
    .msite-sectionSwiperOne
      width 100%
      height 196px
    .msite-button
      width 100%
      height 105px
    .msite-Purchase
      width 100%
      height 215px
      background-color red
    .msite-FunctionalArea
      width 100%
      height 220px
		.msite-HotPerformance
			width 100%
      height 250px
			background-color blue
</style>