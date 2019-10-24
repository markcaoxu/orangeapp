<template>
  <div id="app">
    <div class="Location">
      <div class="Location-content">
        <span class="Location-text">即将跳转到百度地图，为您定位</span>
        <a class="Location-true" href="https://map.baidu.com/@12959238.56,4825347.47,12z">确定</a>
        <span class="Location-false" @click="goTo('/msite')">返回</span>
      </div>
    </div>
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
.Location
  height 100%
  width 100%
  background-color black
  opacity 0.5
  display flex
  justify-content center
  align-items center
  background-color gray
  .Location-content
    display inline-block
    border 1px solid blue
    width 70%
    height 25%
    background-color skyblue
    // background-color orange
    border-radius 10px
    opacity 1
    .Location-text
      display inline-block
      border-radius 30px
      width 100%
      height 65%
      line-height 220%
      font-size 23px
      // background-color red
      text-align center
    .Location-true
      display inline-block
      border-top 1px solid blue
      width 50%
      height 35%
      line-height 190%
      font-size 25px
      color green
      // background-color blue
      text-align center
    .Location-false
      display inline-block
      border-left 1px solid blue
      border-top 1px solid blue 
      width 49%
      height 35%
      line-height 190%
      font-size 25px
      color red
      // background-color gold
      text-align center
</style>