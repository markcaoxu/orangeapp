<template>
  <div id='app'>
    <header class="head">

      <!-- 定位部分 -->
      <div class="Location" @click="goTo('/msite/location')">
        <span class="Location-text">
          <img src="../../pages/Msite/img/nav_icon_search.f194288.png" class="Location-img">
          &nbsp;&nbsp;全国
        </span>
      </div>

      <!-- 搜索框部分 -->
      <div class="search-input" @click="goTo('/seach')">
        <p class="search-text">
					<img src="../../pages/Msite/img/nav_icon_search.f194288.png" class="search-img">
					搜索热门信息
					</p>
      </div>

      <!-- 分享部分 -->
      <div class="share" @click="goTo('/msite/share')">
        <img  class="share-img" src="https://image.juooo.com/group1/M00/02/65/rAoKmVyvD7iAHJX4AAADmpmoUeI150.png" alt="">
      </div>

    </header>
  </div>
</template>
<script>
export default {
  methods: {
    goTo (path) {
        this.$router.push(path)
    }
  }
}
</script>
<style lang='stylus'>
.head
  width 100%
  height 100%
  display flex
  justify-content space-around
  align-items center
  opacity 0.4
  .Location
    height 100%
    width 21%
    box-sizing border-box
    padding 1%
    text-align center
		color white	
		.Location-text
			border .5px solid white
			width 15%
			height 79%
			border-radius 20px
			line-height 145%
			position absolute
			top 15%
			left 3%
			background-color black
			.Location-img
				width 20px
				height 20px
				padding 5px
				position absolute
				top -10%
				left -10%
  .search-input
    height 100%
    width 60%
    box-sizing border-box
    padding 3px
    text-align center
		color white
		.search-text
			border .5px solid white
			width 100%
			height 100%
			border-radius 20px
			line-height 160%
			position relative
			background-color black
			.search-img
				width 12%
				height 100%
				position absolute
				top 1%
				left 1%
  .share
    height 100%
    width 20%
    box-sizing border-box
    padding 1%
    text-align center
		color white
		border .5px solid white
		.share-img
			width 50%
			height 100%
</style>