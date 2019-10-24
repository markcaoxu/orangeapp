<template>
    <div id='app'>
      <section class="fuction">

        <!-- 第一行两个内容 -->
        <ul class="fuction-first">

          <!-- 橙PLUS卡 -->
          <li class="fuction-item">
            <h3 class="fuction-title">{{FunctionalAreas.Plus.name}}</h3>
            <img class="fuction-img" :src=FunctionalAreas.Plus.img alt="">
            <p class="fuction-text">{{FunctionalAreas.Plus.Discount.first}}</p>
						<span class="fuction-red">{{FunctionalAreas.Plus.Discount.second}}</span>
						<span class="fuction-text">{{FunctionalAreas.Plus.Discount.third}}</span>
          </li>

          <!-- VIP+专区 -->
          <li class="fuction-item">
            <h3 class="fuction-title">{{FunctionalAreas.VIP.name}}</h3>
            <img class="fuction-img" :src=FunctionalAreas.VIP.img alt="">
            <p class="fuction-text">{{FunctionalAreas.VIP.Discount.first}}</p>
						<span class="fuction-red">{{FunctionalAreas.VIP.Discount.second}}</span><span class="fuction-text">{{FunctionalAreas.VIP.Discount.third}}</span>
          </li>

        </ul>

        <!-- 第二行三个内容 -->
        <ul class="fuction-second">
          <li class="fuction-item">
            <h3 class="fuction-title">{{FunctionalAreas.Integral.name}}</h3>
            <p class="fuction-text">{{FunctionalAreas.Integral.Discount.first}}<span
                class="fuction-red">{{FunctionalAreas.Integral.Discount.second}}</span>{{FunctionalAreas.Integral.Discount.third}}
            </p>
            <img class="fuction-img" :src=FunctionalAreas.Integral.img alt="">
          </li>
          <li class="fuction-item">
            <h3 class="fuction-title">{{FunctionalAreas.Calendar.name}}</h3>
            <p class="fuction-text">{{FunctionalAreas.Calendar.Discount.first}}<span
                class="fuction-red">{{FunctionalAreas.Calendar.Discount.second}}</span>{{FunctionalAreas.Calendar.Discount.third}}
            </p>
            <img class="fuction-img" :src=FunctionalAreas.Calendar.img alt="">
          </li>
          <li class="fuction-item">
            <h3 class="fuction-title">{{FunctionalAreas.OrangeCard.name}}</h3>
            <p class="fuction-text">{{FunctionalAreas.OrangeCard.Discount.first}}<span
                class="fuction-red">{{FunctionalAreas.OrangeCard.Discount.second}}</span>{{FunctionalAreas.OrangeCard.Discount.third}}
            </p>
            <img class="fuction-img" :src=FunctionalAreas.OrangeCard.img alt="">
          </li>
        </ul>
      </section>
    </div>
</template>
<script>

export default {
	props:['FunctionalAreas'],
  data () {
    return {
      
    
    }
  }
}
</script>
<style lang='stylus' scoped>
#app
	width 100%
	height 100%
	padding-bottom 60px
	.fuction
		width 100%
		height 100%
		background-color lightgray
		display flex
		flex-direction column
		justify-content space-around
		.fuction-first
			display flex
			justify-content space-around
			.fuction-item
				width 175px
				height 100px
				display inline-block
				text-align center
				line-height 16px
				box-sizing border-box
				padding 2px
				background-color white
				margin 5px
			.fuction-title
				width 65%
				height 30px
				font-size 16px
				font-weight 700
				display inline
				float left
			.fuction-text
				width 120px
				height 20px
				font-size 12px
				display inline-block
				float left
				word-wrap break-word
			.fuction-red
				color red
				display inline-block
				font-size 14px
			.fuction-img
				width 50px
				height 65px
				float right
		.fuction-second
			width 100%
			height 200px
			display flex
			justify-content space-around
			.fuction-item
				width 120px
				height 100px
				display inline-block
				background-color white
				display flex
				justify-content space-around
				flex-direction column
				align-items center
				box-sizing border-box
				padding 2px
				margin 5px
			.fuction-title
				width 65px
				font-size 16px
				font-weight 700
				display block
			.fuction-text
				width 100px
				height 12px
				font-size 12px
				display block
				word-wrap break-word
			.fuction-red
				font-size 14px
				color red
				display inline-block
			.fuction-img
				width 50px
				height 50px
</style>