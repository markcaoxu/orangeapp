<template>
  <div class="Purchase-jucheng">
    <!--内部整体div-->
    <div class="Purchase-ticket">
      <!--优先购票-->
      <div class="Purchase-head">
        <span class="Purchase-first">优先购票</span>
        <span class="Purchase-secend">VIP+会员尊享权益</span>
        <span class="Purchase-third">99元/年</span>
        <span class="Purchase-iconfont Purchase-icon-arrow-right"></span>
      </div>
      <!--轮播图-->
      <div class="Purchase-swiper">
        <mt-swipe :auto="4000" v-for="(item,index) in Purchase" :key="index">
          <mt-swipe-item class="Purchase-list_1">
            <!--左边图片-->
            <img class="Purchase-photo" :src=item.img>
            <!--右边列表-->
            <div class="Purchase-right">
              <!--第1页-->
              <a href="javascript:;">
                <p class="Purchase-zyj">{{item.Title}}</p>
              </a>
              <!--第2页-->
              <a href="javascript:;">
                <p class="Purchase-p1">{{item.Address}}</p>
              </a>
              <!--第3页-->
              <a href="javascript:;">
                <p class="Purchase-p2">{{item.LimitedTime}}<span class="Purchase-begin">{{item.State}}</span></p>
                <span class="Purchase-tixing" :class="{on:rembered}" @click="change">开售提醒</span>
              </a>
            </div>
          </mt-swipe-item>

        </mt-swipe>
      </div>
    </div>
  </div>
</template>
<script>
// 引入BScroll组件
import BScroll from 'better-scroll'
export default {
  props: ['Purchase'],
  data () {
    return {
			rembered: false
    }
  },
  methods:{
    change(){
			return this.rembered = !this.rembered
    }
  },
	mounted(){
		this.$nextTick(() => {
      this.scroll = new BScroll(".Purchase-swiper", {
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
  height 100%
  width 100%
.Purchase-jucheng
  width 350px
  height 210px
  margin 20px auto
  .Purchase-ticket
    width 100%
    height 90%
    border 1px solid lightgray
    .Purchase-head
      width 100%
      height 40px
      border-bottom 1px dashed orange
			.Purchase-first
				display inline-block
				font-size 16px
				font-weight 700
				margin-left 20px
				line-height 30px
				color #6B4218
				height 30px
				width 95px
			.Purchase-secend
				display inline-block
				margin-left 7px
				font-size 13px
				height 30px
				width 110px
			.Purchase-third
				margin-left 55px
				font-size 13px
				height 30px
				width 20px
			.Purchase-iconfont
				font-size 12px
				margin-left 5px
				color #6B4218
			.Purchase-swiper
				width 100%
				height 77%
				overflow hidden
				.Purchase-list_1
					width 319px
					height 93px
					margin-top 18px
					overflow hidden
					.Purchase-photo
						float left
						width 73px
						height 80px
						display block
					.Purchase-right
						float right
						width 72%
						height 100%
						margin-left 16px
						.Purchase-zyj
							font-size 15px
							font-weight 700
							margin-bottom 5px
							color black
							height 41%
						.Purchase-music
							color black
							font-weight 700
						.Purchase-p1
							font-size 13px
							margin-top 16px
						.Purchase-p2
							margin-top 13px
							font-size 13px
							position relative
							color red
						.Purchase-begin
							margin-left 10px
							font-size 13px
						.Purchase-tixing
							position absolute
							width 65px
							height 25px
							text-align center
							line-height 25px
							right 0
							top 66px
							border 1px solid orange
							border-radius 10px
							font-size 11px
							color orange
							font-weight 800
							&.on
								background-color red
</style>