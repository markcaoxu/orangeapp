<template>
  <div id='app'>
    <header class="head">

      <!-- 定位部分 -->
      <div class="Location" @click="goTo('/')">
        <img src="" class="Location-img">
        <span class="Location-text">全国</span>
      </div>

      <!-- 搜索框部分 -->
      <div class="search-input" @click="goTo('/seach')">
        搜索热门信息
      </div>

      <!-- 分享部分 -->
      <div class="share">
        <span class="share-up">分享</span>
        <span class="share-down">赚佣金</span>
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
<style lang='stylus'></style>