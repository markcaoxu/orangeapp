<template>
<div class="shows_container">
  <div class="shows_header">
    <p class="header_left">&lt;</p>
    <p class="header_center">演出</p>
    <p class="header_right">···</p>
  </div>
  <div class="shows_center">
    <div class="center_left">
      <ul>
      <li>全部</li>
      <li>演唱会</li>
      <li>音乐会</li>
      <li>话剧歌剧</li>
      <li>儿童亲子</li>
      <li>音乐剧</li>
      <li>戏曲综艺</li>
      <li>展览</li>
      <li>舞蹈芭蕾</li>
    </ul>
    </div>
    <div class="center_right">
      <span>全国</span>
      <span></span>
    </div>
    <ShowsList/>
  </div>
</div>
</template>
<script>
import ShowsList from './ShowsList/ShowsList.vue'
export default {
  components:{
    ShowsList
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.shows_header
  height 40px
  display flex
  border-bottom 1px solid #DBDBDD
  .header_left
    height 36px
    width 17%
    font-size 30px
    padding 2px 4px 
    color #272727
  .header_center
    height 40px
    width 60%
    font-size 19px
    text-align center
    line-height 40px
    color #272727
  .header_right
    width 20%
    text-align center
    line-height 40px 
    font-weight 600
//.shows_center
</style>