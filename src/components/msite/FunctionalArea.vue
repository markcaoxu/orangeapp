<template>
    <div id='app'>
      <section class="fuction">

        <!-- 第一行两个内容 -->
        <ul class="fuction-first">

          <!-- 橙PLUS卡 -->
          <li class="fuction-item">
            <h3 class="fuction-title">{{FunctionalArea.Plus.name}}</h3>
            <img class="fuction-img" :src=FunctionalArea.Plus.img alt="">
            <p class="fuction-text">{{FunctionalArea.Plus.Discount.first}}</p>
						<span class="fuction-red">{{FunctionalArea.Plus.Discount.second}}</span>
						<span class="fuction-text">{{FunctionalArea.Plus.Discount.third}}</span>
          </li>

          <!-- VIP+专区 -->
          <li class="fuction-item">
            <h3 class="fuction-title">{{FunctionalArea.VIP.name}}</h3>
            <img class="fuction-img" :src=FunctionalArea.VIP.img alt="">
            <p class="fuction-text">{{FunctionalArea.VIP.Discount.first}}</p>
						<span class="fuction-red">{{FunctionalArea.VIP.Discount.second}}</span><span class="fuction-text">{{FunctionalArea.VIP.Discount.third}}</span>
          </li>

        </ul>

        <!-- 第二行三个内容 -->
        <ul class="fuction-second">
          <li class="fuction-item">
            <h3 class="fuction-title">{{FunctionalArea.Integral.name}}</h3>
            <p class="fuction-text">{{FunctionalArea.Integral.Discount.first}}<span
                class="fuction-red">{{FunctionalArea.Integral.Discount.second}}</span>{{FunctionalArea.Integral.Discount.third}}
            </p>
            <img class="fuction-img" :src=FunctionalArea.Integral.img alt="">
          </li>
          <li class="fuction-item">
            <h3 class="fuction-title">{{FunctionalArea.Calendar.name}}</h3>
            <p class="fuction-text">{{FunctionalArea.Calendar.Discount.first}}<span
                class="fuction-red">{{FunctionalArea.Calendar.Discount.second}}</span>{{FunctionalArea.Calendar.Discount.third}}
            </p>
            <img class="fuction-img" :src=FunctionalArea.Calendar.img alt="">
          </li>
          <li class="fuction-item">
            <h3 class="fuction-title">{{FunctionalArea.OrangeCard.name}}</h3>
            <p class="fuction-text">{{FunctionalArea.OrangeCard.Discount.first}}<span
                class="fuction-red">{{FunctionalArea.OrangeCard.Discount.second}}</span>{{FunctionalArea.OrangeCard.Discount.third}}
            </p>
            <img class="fuction-img" :src=FunctionalArea.OrangeCard.img alt="">
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
      FunctionalArea: {
        "Plus": {
          "name": "橙PLUS卡",
          "Discount": {
            "first": "送",
            "second": "100元",
            "third": ",享V+权益"
          },
          "img": "https://image.juooo.com/group1/M00/02/D0/rAoKmV0jZBGAD_e4AAAE27hwBgs927.png"
        },
        "VIP": {
          "name": "VIP+专区",
          "Discount": {
            "first": "尊享",
            "second": "10",
            "third": "大权益"
          },
          "img": "https://image.juooo.com/group1/M00/03/79/rAoKNV0jY8iAQBUmAAAHfP7uF9k662.png"
        },
        "Integral": {
          "name": "积分商城",
          "Discount": {
            "first": "用积分,",
            "second": "0元",
            "third": "购票"
          },
          "img": "https://image.juooo.com/group1/M00/02/63/rAoKmVyul4KAN4xIAAAGqNi5vq4366.png"
        },
        "Calendar": {
          "name": "日历",
          "Discount": {
            "first": "演出信息,",
            "second": "一目了然",
            "third": ""
          },
          "img": "https://image.juooo.com/group1/M00/02/63/rAoKmVyumJuADezsAAAFQQ7pzxI319.png"
        },
        "OrangeCard": {
          "name": "欢聚橙卡",
          "Discount": {
            "first": "",
            "second": "33元",
            "third": "看演出"
          },
          "img": "https://image.juooo.com/group1/M00/03/0D/rAoKNVyumKiAfP1qAAACYTizNOw440.png"
        }
      }
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