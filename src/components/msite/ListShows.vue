<template>
  <div class="shows_container">
    <div class="shows_footer">
      <!-- <ShowsList/> -->
      <div class="page-tab-container">
        <mt-tab-container-item>
          <!-- cell组件 -->
          <mt-cell v-for="(movie,index) in newItemList" :key="index">
            <img :src="movie.coverUrl" alt @click="goTo(index)" />
            <div class="list_right" @click="goTo(index)">
              <span class="name-text">{{movie.name}}</span>
              <span class="right_time">{{movie.performanceTime}}</span>
              <h3>{{movie.title}}</h3>
              <p>{{movie.performancePlace}}</p>
              <strong class="money">￥{{movie.priceRange}}</strong>
              <span class="money_right">起</span>
            </div>
          </mt-cell>
        </mt-tab-container-item>
      </div>
    </div>
  </div>
</template>
<script>
//引入reqShows方法，用来获取数据
import { reqShows } from '../../api/index.js'
export default {
  data () {
    return {
      newItemList: []
    }
	},
	methods: {
    goTo (index) {
        this.$router.push({
					path:`/detail/${index}`
				})
    }
  },
  async mounted () {
    // 获取工厂服务信息 // 获取推荐商品
    let result = await reqShows()
    // 用已有变量接数组
		this.newItemList = result.showsDetail
		console.log(this.newItemList)
  }
}
</script>
<style lang='stylus' scoped>
.shows_container
  width 100%
  height 100%
  .shows_footer
    width 100%
    height 100%
    .page-tab-container
      width 94%
      margin 0 3%
      .mint-tab-container-item
        width 100%
        .mint-cell
          height 170px
          img
            width 28%
            height 80%
            padding 7% 0
          .list_right
            width 70%
            padding 30px 0
            margin-left 10px
            .name-text
              color #FF0000
              font-size 25px
            .right_time
              color black
              font-weight 600
              padding-right 10px
            h3
              color black
              font-weight 700
              padding-top 10px
              height 45%
              line-height 20px
            p
              font-size 12px
              padding-bottom 10px
            .money
              color #ff6743
            .money_right
              font-size 12px
              padding-left 6px
</style>