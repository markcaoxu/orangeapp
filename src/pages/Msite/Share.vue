<template>
  <div id="app">
    <div class="Share">
      <div class="Share-content">
        <span class="Share-text">确定跳转到微信客户端</span>
        <a class="Share-true" href="https://weixin.qq.com/">确定</a>
        <span class="Share-false" @click="goTo('/msite')">返回</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
	data(){
		return {
			timeId:null
		}
	},
  mounted () {
    this.timeId = setTimeout(() => {
      this.$router.replace('/msite')
      window.clearTimeOut(this.timeId)
    }, 5000)
  },
  methods: {
    goTo (path) {
      window.clearTimeOut(this.timeId)
      this.$router.push(path)

    }
  }
}
</script>
<style lang='stylus' scoped>
.Share
  height 100%
  width 100%
  background-color black
  opacity 0.5
  display flex
  justify-content center
  align-items center
  background-color gray
  .Share-content
    display inline-block
    border 1px solid blue
    width 70%
    height 25%
    background-color skyblue
    // background-color orange
    border-radius 10px
    opacity 1
    .Share-text
      display inline-block
      border-radius 30px
      width 100%
      height 65%
      line-height 220%
      font-size 23px
      // background-color red
      text-align center
    .Share-true
      display inline-block
      border-top 1px solid blue
      width 50%
      height 35%
      line-height 190%
      font-size 25px
      color green
      // background-color blue
      text-align center
    .Share-false
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