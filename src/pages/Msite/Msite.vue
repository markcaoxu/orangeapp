<template>
  <div class="content">
    <mt-swipe :auto="5000">
      <mt-swipe-item v-for="(item,index) in arrItem" :key="index">
				<img class="swiperImg" :src=item.img alt="">
			</mt-swipe-item>
    </mt-swipe>
    <div class="search">
      <div class="local"></div>
      <Search v-model="value" class="mint-searchbar" placeholder="搜索热门演出"></Search>
			<div></div>
    </div>

  </div>
</template>

<script>
// import  from ""
export default {
	components:{

	},
  data () {
    return {
      arrItem: [
        { "img": "https://image.juooo.com/group1/M00/02/D0/rAoKmV0jZLGAJdhoAAC7oyPNYIU699.png" },
        { "img": "https://image.juooo.com/group1/M00/03/D1/rAoKNV2hj3WAa1r3AAD7rN0NU3M686.jpg" },
        { "img": "https://image.juooo.com/group1/M00/02/97/rAoKNVxjdjKAFQokAAGe8ctbisc973.jpg" },
        { "img": "https://image.juooo.com/group1/M00/03/CD/rAoKNV2eopmAWAq5AAFgaTUu0hI903.jpg" },
        { "img": "https://image.juooo.com/group1/M00/03/20/rAoKmV2RcbKAFGy-AACn2tMeRXE082.jpg" },
        { "img": "https://image.juooo.com/group1/M00/03/CB/rAoKNV2b61OAAXSQAAE2p_m5Kn0012.jpg" },
        { "img": "https://image.juooo.com/group1/M00/03/BE/rAoKNV2B46GAM6TMAAE2152MCko633.jpg" },
        { "img": "https://image.juooo.com/group1/M00/03/11/rAoKmV1-54yAKQl1AAEOjBe2O2g630.jpg" },
      ]
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.content
	width 100%
	height 100%
	position relative
	.mint-swipe
		width 100%
		height 25%
		.mint-swipe-items-wrap
			width 100%
			height 100%
			.mint-swipe-item
				width 100%
				height 100%
				.swiperImg
					width 100%
					height 100%
		.mint-swipe-indicators
			margin 0 auto 
	.search
		width 100%
		height 30px
		position absolute
		left 0
		height 0
		.mint-searchbar
			background-color rgba(255,255,255,0.3)
		.local
			background-color rgba(255,255,255,0.1)
			font-size 14px
			width 60px
			height 30px
</style>