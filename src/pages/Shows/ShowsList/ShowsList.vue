<template>
  <div class="showsFooter">
    <div class="contentList" ref="contentList">
      <ul>
        <li v-for="(show,index) in shows" :key="index">
          <img :src="show.coverUrl" alt />
          <div class="listRight">
            <span class="date">{{show.performanceTime}}</span>
            <span class="time">{{show.performanceDate}}</span>
            <h3>{{show.title}}</h3>
            <p>{{show.performancePlace}}</p>
            <span class="money">￥{{show.priceMin}}</span>
            <span class="more">起</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// 引入reqShows
import { reqShows } from "../../../api/index.js";
// 引入BScroll
import BScroll from "better-scroll";
export default {
  data(){
    return {
      shows: [], // 遍历的数据
    }
  },
  name: "ShowsList",
  async mounted(){
    // 遍历的数据
    let result = await reqShows();
    this.shows = result.showsDetail;

    // 滑动
    this.$nextTick(()=>{
      this._initBScroll();
    })
  },
  methods:{
    _initBScroll(){
      //console.log(this.$refs.contentList)
      this.showsScroll = new BScroll(this.$refs.contentList,{
        click:true,
        probeType:3
      })
    }
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.contentList
  width 95%
  margin-left 16px
  overflow visible
  ul
    width 100%
    li
      width 100%
      height 200px
      display flex
      img
        width 32%
        height 75%
        padding-top 24px
        padding-left 0
      .listRight
        margin-left 12px
        padding-top 30px
        .date
          font-weight 600
        .time
          font-size 12px
          padding-left 8px
        h3
          font-weight 700
          margin 20px 0
          line-height 100%
        p
          font-size 12px
          padding-bottom 10px
        .money
          color #ff6743
        .more
          font-size 12px
          padding-left 5px
</style>