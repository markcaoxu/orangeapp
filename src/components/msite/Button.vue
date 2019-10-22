<template>
  <div id='app'>
    <section class="button-list">
      <div class="button-item">
        <img class="button-img" :src=button.VocalConcert.img alt="">
        <span class="button-text">{{button.VocalConcert.name}}</span>
      </div>
			<div class="button-item">
        <img class="button-img" :src=button.MusicalPlay.img alt="">
        <span class="button-text">{{button.MusicalPlay.name}}</span>
      </div>
			<div class="button-item">
        <img class="button-img" :src=button.LivingTheatre.img alt="">
        <span class="button-text">{{button.LivingTheatre.name}}</span>
      </div>
			<div class="button-item">
        <img class="button-img" :src=button.DramaForChildren.img alt="">
        <span class="button-text">{{button.DramaForChildren.name}}</span>
      </div>
			<div class="button-item">
        <img class="button-img" :src=button.Concert.img alt="">
        <span class="button-text">{{button.Concert.name}}</span>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data () {
    return {
      "button": {
        "VocalConcert": {
          "name": "演唱会",
          "img": "https://image.juooo.com/group1/M00/03/26/rAoKNVzId-KAX9CzAAAG-I4FmRM978.png"
        },
        "MusicalPlay": {
          "name": "音乐剧",
          "img": "https://image.juooo.com/group1/M00/03/26/rAoKNVzIeBeAScMUAAAEhJWVzNA919.png"
        },
        "LivingTheatre": {
          "name": "舞台剧",
          "img": "https://image.juooo.com/group1/M00/03/26/rAoKNVzIeCKAMJQ7AAAGkw6V6Ms752.png"
        },
        "DramaForChildren": {
          "name": "儿童剧",
          "img": "https://image.juooo.com/group1/M00/02/7D/rAoKmVzIeCyAB0jKAAAFxM4aS44306.png"
        },
        "Concert": {
          "name": "音乐会",
          "img": "https://image.juooo.com/group1/M00/03/26/rAoKNVzIeDSATtBuAAAFFfAO9uw344.png"
        }
      }
    }
  }
}
</script>
<style lang='stylus'>
#app
	width 100%
	height 100%
	.button-list
		width 100%
		height 15%
		margin 10px 0
		background-color lightgray 
		text-align center
		.button-item
			box-sizing border-box
			padding 5px
			width 20%
			height 100%
			display inline-block
			.button-img
				box-sizing border-box
				width 60%
				height 60%
				display block
				margin 3px 12px 
			.button-text
				margin-top 5px
				width 60%
				height 20%
</style>