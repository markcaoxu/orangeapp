<template>
<div class="shows_container">
  <div class="shows_header">
    <span class="iconfont icon-arrow-left"></span>
    <p class="header_center">演出</p>
    <span class="iconfont icon-gengduo"></span>
  </div>
  <div class="shows_center">
    <div class="center_left" ref="wrapper">
      <ul class="content" ref="wrapperUl">
        <li class="contentLi">
          <a href="javascript:;">全部</a>
        </li>
        <li>
          <a href="javascript:;">演唱会</a>
        </li>
        <li>
          <a href="javascript:;">音乐会</a>
        </li>
        <li>
          <a href="javascript:;">话剧歌剧</a>
        </li>
        <li>
          <a href="javascript:;">儿童亲子</a>
        </li>
        <li>
          <a href="javascript:;">音乐剧</a>
        </li>
        <li>
          <a href="javascript:;">戏曲综艺</a>
        </li>
        <li>
          <a href="javascript:;">展览</a>
        </li>
        <li>
          <a href="javascript:;">芭蕾舞蹈</a>
        </li>
    </ul>
    </div>
    <div class="center_right">
      <span class="rightOne">|</span>
      <span>全国</span>
      <span class="iconfont icon-dingwei"></span>
    </div>
    <div class="shows_footer">
      <ShowsList/>
    </div>
  </div>
</div>
</template>
<script>
// 引入组件
import ShowsList from './ShowsList/ShowsList.vue'
// 引入BScroll
import BScroll from 'better-scroll'
export default {
  components:{
    ShowsList
  },
  created(){
    this.$nextTick(()=>{
      this.contentScroll()
    })
  },
  methods:{
    contentScroll() {
      //this.$nextTick是一个异步函数，为了确保DOM已经渲染
      this.$nextTick(()=>{
        if(!this.scroll){
          this.scroll=new BScroll(this.$refs.wrapper,{
            startX:0,
            click:true,
            scrollX:true,
            scrollY:false
          })
        }else{
          this.scroll.refresh()
        }
      })
    }
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.shows_header
  height 40px
  display flex
  border-bottom 1px solid #DBDBDD
  .icon-arrow-left
    height 36px
    width 16%
    font-size 18px
    padding 10px 8px 
    color #272727
  .header_center
    height 40px
    width 60%
    font-size 18px
    text-align center
    line-height 40px
    color #272727
  .icon-gengduo
    width 20%
    text-align center
    line-height 40px 
    font-weight 600
    margin 2px 0
.shows_center
  width 100%
  height 50px
  .center_left
    width 80%
    float left
    height 50px
    overflow hidden
    .content
      width 670px
      float left
      display flex
      padding-top 20px
      padding-left 22px
      a
        display inline-block
        //margin-left 22px
        color #474747
        margin-right 22px
        &.current 
          color #ff6743
  .center_right
    float right
    height 20%
    padding 20px 4px
    span 
      color #666666
    .rightOne
      margin-right 8px
      color #F0F0F0
</style>