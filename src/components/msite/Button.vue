<template>
  <div id='app'>
    <section class="button-list">

      <!-- 演唱会 -->
      <div class="button-item" @click="goTo('/detail')" :vocal="buttons.VocalConcert">
        <img class="button-img" :src=buttons.VocalConcert.img alt="">
        <span class="button-text">{{buttons.VocalConcert.name}}</span>
      </div>

      <!-- 音乐剧 -->
      <div class="button-item" @click="goTo('/detail')" :play="buttons.MusicalPlay">
        <img class="button-img" :src=buttons.MusicalPlay.img alt="">
        <span class="button-text">{{buttons.MusicalPlay.name}}</span>
      </div>

      <!-- 舞台剧 -->
      <div class="button-item" @click="goTo('/detail')" :living="buttons.LivingTheatre">
        <img class="button-img" :src=buttons.LivingTheatre.img alt="">
        <span class="button-text">{{buttons.LivingTheatre.name}}</span>
      </div>

      <!-- 儿童剧 -->
      <div class="button-item" @click="goTo('/detail')" :children="buttons.DramaForChildren">
        <img class="button-img" :src=buttons.DramaForChildren.img alt="">
        <span class="button-text">{{buttons.DramaForChildren.name}}</span>
      </div>

      <!-- 音乐会 -->
      <div class="button-item" @click="goTo('/detail')" :music="buttons.Concert">
        <img class="button-img" :src=buttons.Concert.img alt="">
        <span class="button-text">{{buttons.Concert.name}}</span>
      </div>

    </section>
  </div>
</template>
<script>
export default {
  data () {
    return {
      buttons: {
				"VocalConcert":{
				"name":"演唱会",
				"img":"https://image.juooo.com/group1/M00/03/26/rAoKNVzId-KAX9CzAAAG-I4FmRM978.png"
			},
			"MusicalPlay":{
				"name":"音乐剧",
				"img":"https://image.juooo.com/group1/M00/03/26/rAoKNVzIeBeAScMUAAAEhJWVzNA919.png"
			},
			"LivingTheatre":{
				"name":"舞台剧",
				"img":"https://image.juooo.com/group1/M00/03/26/rAoKNVzIeCKAMJQ7AAAGkw6V6Ms752.png"
			},
			"DramaForChildren":{
				"name":"儿童剧",
				"img":"https://image.juooo.com/group1/M00/02/7D/rAoKmVzIeCyAB0jKAAAFxM4aS44306.png"
			},
			"Concert":{
				"name":"音乐会",
				"img":"https://image.juooo.com/group1/M00/03/26/rAoKNVzIeDSATtBuAAAFFfAO9uw344.png"
			}
			}
    }
  },
  methods: {
    goTo (path) {
      if (this.$router.path !== path) {
        this.$router.push(path)
      }
    }
  }
}
</script>
<style lang='stylus'>
.button-list
  width 100%
  height 100%
  margin 10px 0
  background-color lightgray
  text-align center
  .button-item
    box-sizing border-box
    padding 2%
    width 20%
    height 100%
    display inline-block
    .button-img
      box-sizing border-box
      width 100%
      height 60%
      display block
    .button-text
      margin-top 5px
      width 60%
      height 20%
</style>