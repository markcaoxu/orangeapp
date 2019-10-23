<template>
  <div class="seach-wrap"> 
    <!-- 搜索框组件 -->
    <SearchInput/>
    <section class="hotWord-wrap">
      <div class="hotWord-conent">
        <h3 class="hot-h3">热门推荐</h3>
        <ul class="hot-ul">
          <li
            class="hot-item"
            @click="goDetail(item.name)"
            v-for="(item,index) in itemInput"
            :key="index"
          >{{item.name}}</li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
//引入searchList组件
import SearchInput from '../../components/SearchInput/index'
/* eslint-disable */
// 引入商品列表信息
import { reqSearch } from "../../api/index.js";
export default {
  props: [""],
  data() {
    return {
      
      itemInput: [], //每一项的li的内容 
    }
  },

  components: {
    SearchInput
  },

  computed: {},

  beforeMount() {},

  async mounted() {
    let result = await reqSearch();
    //console.log(result)
    this.itemInput = result.detail;
    //console.log(this.itemInput)
  },

  methods: {
    // 点跳转详情页
    goDetail(name) {
      // console.log(this.$router);
      //遍历匹配每一个li的name
      const result = this.itemInput;
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
<style lang="stylus" rel="stylesheet/stylus" scoped>
// 引入混合
@import '../../common/stylus/mixins.styl'
.seach-wrap
  width 100%
  height 100%
  .hotWord-wrap
    width 100%
    height 80%
    margin-top 30px
    .hotWord-conent
      width 382px
      height 204px
      margin 0 auto
      .hot-h3
        color #808080
        font-size 15px
      .hot-ul
        width 100%
        display flex
        flex-wrap wrap-reverse
        .hot-item
          display block
          padding 0 28px
          background-color #F5F5F5
          margin 10px 15px
          border-radius 15px
          text-align center
          line-height 39px
          color #FF4500
          white-space nowrap
</style>