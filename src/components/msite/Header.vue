<template>
  <div id='app'>
    <header class="head">

      <!-- 定位部分 -->
      <div class="Location" @click="goTo('/location')">
        <span class="Location-text">
          <img src="../../pages/Msite/img/nav_icon_search.f194288.png" class="Location-img">
          全国
        </span>
      </div>

      <!-- 搜索框部分 -->
      <div class="search-input" @click="goTo('/seach')">
        <p class="search-text">搜索热门信息</p>
      </div>

      <!-- 分享部分 -->
      <div class="share" @click="goTo('/share')">
        <p class="share-text">
          <span class="share-up">分享</span>
          <span class="share-down">赚佣金</span>
        </p>
      </div>

    </header>
  </div>
</template>
<script>
export default {
  methods: {
    goTo (path) {
      if (this.$router.path !== path) {
        this.$router.path = path
      }
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
  background-color black
  opacity 0.7
  .Location
    height 100%
    width 21%
    box-sizing border-box
    padding 1%
    text-align center
		color white
		.Location-text
			border .5px solid white
			width 100%
			height 100%
			border-radius 20px
			.Location-img
				width 20px
				height 20px
				padding 5px
  .search-input
    height 80%
    width 60%
    box-sizing border-box
    padding 1%
    text-align center
		color white
		.search-text
			border .5px solid white
			width 100%
			height 100%
			border-radius 20px
  .share
    height 80%
    width 20%
    box-sizing border-box
    padding 1%
    text-align center
		color white
		border .5px solid white
		.share-text
			border 1px solid white
			border-radius 20px
			width 100%
			height 100%
			.share-up
				font-size 13px
				display block
			.share-down
				font-size 12px
</style>