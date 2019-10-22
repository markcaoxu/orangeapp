<template>
  <div class="wrapper" ref="scroll">
    <!-- 包裹元素 -->
    <div id="app">

      <!-- 引入header组件 -->
      <div class="header">
        <Header />
      </div>

      <!-- 引入swiper组件 -->
      <div class="section-swiper">
        <Swiper />
      </div>

      <!-- 引入button组件 -->
      <div class="button"><Button /></div>

      <!-- 引入FunctionalArea组件 -->
      <div class="FunctionalArea">
        <FunctionalArea />
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
import Swiper from "../../components/msite/Swiper"
// 引入Header组件
import Header from "../../components/msite/Header"


// 引入better-scroll
import Bscroll from "better-scroll";
export default {
  components: {
    Button,
    FunctionalArea,
    Swiper,
    Header
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.scroll, {
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
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.wrapper
  width 100%
  height 100%
	#app
		width 100%
		position relative
		.header
			width 100%
			height 10%
			position absolute
			top 0
			left 0
			z-index 5
		.section-swiper
			width 100%
			height 55%
			position absolute
			top 0
			left 0
			z-index 4
		.button
			width 100%
			height 20%
			position absolute
			top 30%
			left 0
			z-index 3
		.FunctionalArea
			width 100%
			height 50%
			position absolute
			top 90%
			left 0
			z-index 2
</style>