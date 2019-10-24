<template>
  <div class="shows_container">
    <SearchInput />
    <div class="shows_footer">
      <!-- <ShowsList/> -->
      <div class="page-tab-container">
        <mt-tab-container-item >
          <!-- cell组件 -->
          <mt-cell v-for="(movie,index) in newItemList" :key="index" >
            <img :src="movie.coverUrl" alt  @click="goDetail(movie.name)"/>
            <div class="list_right" @click="goDetail(movie.name)">
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
/* eslint-disable */
//引入searchList组件
import SearchInput from "../../components/SearchInput/index";
import { reqSearch } from "../../api/index.js";
// 引入BScroll
import Bscroll from "better-scroll";

export default {
  name: "",
  props: [""],
  data() {
    return {
      newMoviesList:{},
      newItemList:[]
    };
  },

  components: {
    SearchInput
  },

  computed: {},

  beforeMount() {},

  async mounted() {
    let newInputText = await reqSearch();
    //console.log(newInputText.detail);
    const moviesList = newInputText.detail;
    const newMoviesList = moviesList.filter((item, index) => { 
      //console.log(item, index);
    item.name.includes(newInputText.detail);
      //判断
      if (
        item.name.includes(this.$route.query.name) ||
        item.title.includes(this.$route.query.name)
      ) {
        //console.log(item)
        return item;
      }
    });
    // console.log(newMoviesList);
    this.newItemList = newMoviesList;
    //console.log(this.newItemList);
    
    
  },
  
  methods: {
     // 点跳转详情页
    goDetail(name) {
      // console.log(this.$router);
      //遍历匹配每一个li的name
      const result = this.newItemList;
      //console.log(result)
      result.forEach((item) => {
        //console.log(item.name);
        //判断当前的名字是否等于每一项的title
        if (name === item.name) {
          //如果匹配成功，就把这个把匹配到的对象存到vuex中
          this.$store.dispatch('saveDetail',item)
          //跳转详情页路由
          this.$router.push('/detail')
          //console.log("haha");
        }
      });
    }
  },

  watch: {}
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
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