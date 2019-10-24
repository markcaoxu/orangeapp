<template>
  <div id="app">
    <section class="button-list">
      <!-- 演唱会 -->
      <div class="button-item" @click="goTo(buttons.VocalConcert.name)" >
        <img class="button-img" :src="buttons.VocalConcert.img" alt />
        <span class="button-text">{{buttons.VocalConcert.name}}</span>
      </div>

      <!-- 音乐剧 -->
      <div class="button-item" @click="goTo(buttons.MusicalPlay.name)" >
        <img class="button-img" :src="buttons.MusicalPlay.img" alt />
        <span class="button-text">{{buttons.MusicalPlay.name}}</span>
      </div>

      <!-- 舞台剧 -->
      <div class="button-item" @click="goTo(buttons.LivingTheatre.name)" >
        <img class="button-img" :src="buttons.LivingTheatre.img" alt />
        <span class="button-text">{{buttons.LivingTheatre.name}}</span>
      </div>

      <!-- 儿童剧 -->
      <div class="button-item" @click="goTo(buttons.DramaForChildren.name)">
        <img class="button-img" :src="buttons.DramaForChildren.img" alt />
        <span class="button-text">{{buttons.DramaForChildren.name}}</span>
      </div>

      <!-- 音乐会 -->
      <div class="button-item" @click="goTo(buttons.Concert.name)">
        <img class="button-img" :src="buttons.Concert.img" alt />
        <span class="button-text">{{buttons.Concert.name}}</span>
      </div>
    </section>
  </div>
</template>
<script>
export default {
	props:['buttons'],
  data () {
    return {
     
    }
  },
  methods: {
    goTo (id) {
        this.$router.push({ path: `/shows/${id}`, })
    }
  }
};
</script>
<style lang='stylus'>
.button-list
  width 100%
  height 100%
  margin 10px 0
  // background-color lightgray
  text-align center
  .button-item
    box-sizing border-box
    padding 2%
    width 20%
    height 100%
    display inline-block
    .button-img
      box-sizing border-box
      width 95%
      height 60%
      display block
    .button-text
      margin-top 5px
      width 60%
      height 20%
</style>