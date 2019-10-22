<template>
  <div id="app">
    <section class="section-swiper">
      <mt-swipe :auto="5000">
        <mt-swipe-item v-for="(item,index) in arrItem" :key="index">
          <img class="swiperImg" :src=item.img alt="">
        </mt-swipe-item>
      </mt-swipe>
    </section>
    <Button />
		<SeachHeader />

  </div>
</template>
<script>
// 引入button组件
import Button from "../../components/msite/Button"
//引入SeachHeader组件
import SeachHeader from "../../components/msite/SeachHeader"

export default {
  components: {
		Button,
		SeachHeader
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
#app
  height 100%
  position relative
.section-swiper
  width 100%
  height 30%
  .mint-swipe
    height 100%
    .mint-swipe-items-wrap
      background-color red
      .mint-swipe-item
        width 100%
        background-color blue
        .swiperImg
          width 100%
          height 100%
    .mint-swipe-indicators
      color white
</style>