<template>
  <div class="shows_container">
    <div class="shows_footer">
      <!-- <ShowsList/> -->
      <div class="page-tab-container">
        <mt-tab-container-item>
          <!-- cell组件 -->
          <mt-cell v-for="(movie,index) in newItemList" :key="index">
            <img :src="movie.coverUrl" alt @click="goDetail(item.title)" />
            <div class="list_right" @click="goDetail(item.title)">
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
    async goDetail (title) {
      // 获取title
      // console.log(title);
      // 发送请求，获取商品列表
      const result = await reqShows()
      // console.log(result.detail);
      // 遍历匹配title
      result.detail.forEach((item) => {
        // console.log(item);
        // 判断
        if (title === item.title) {
          // 匹配成功，把这个item（匹配的商品对象）存到Vuex中
          this.$store.dispatch('saveDetail', item)
          // 跳转到商品详情页

          // console.log(this)
          this.$router.push('/detail')
        }
      })
    }
  },
  async mounted () {
    // 获取工厂服务信息 // 获取推荐商品
    let result = await reqShows()
    // 用已有变量接数组
		this.newItemList = result.showsDetail
		// console.log(this.newItemList)
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