<template>
  <div id='app'>
    <section class="section-swiper">
      <mt-swipe :auto="5000">
        <mt-swipe-item v-for="(item,index) in arrImg" :key="index">
          <img class="swiperImg" :src="item" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </section>
  </div>
</template>
<script>
export default {
	props:['arrImg'],
  data () {
		return {
			// "arrImg":[]
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