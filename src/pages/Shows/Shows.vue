<template>
  <div class="shows_container">
    <div class="shows_header">
      <span class="iconfont icon-arrow-left"></span>
      <p class="header_center">演出</p>
      <span class="iconfont icon-gengduo"></span>
    </div>
    <div class="shows_center">
      <!-- <div class="center_left" ref="wrapper">
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
      </div>-->
      <div class="center_left" >
        <div class="nav">
          <mt-button size="small" @click.native.prevent="active = 'tab-container1'">全部</mt-button>
          <mt-button size="small" @click.native.prevent="active = 'tab-container2'">演唱会</mt-button>
          <mt-button size="small" @click.native.prevent="active = 'tab-container3'">音乐会</mt-button>
          <mt-button size="small" @click.native.prevent="active = 'tab-container4'">话剧歌剧</mt-button>
          <mt-button size="small" @click.native.prevent="active = 'tab-container5'">儿童亲子</mt-button>
          <mt-button size="small" @click.native.prevent="active = 'tab-container6'">音乐剧</mt-button>
          <mt-button size="small" @click.native.prevent="active = 'tab-container7'">戏曲综艺</mt-button>
          <mt-button size="small" @click.native.prevent="active = 'tab-container8'">展览</mt-button>
          <mt-button size="small" @click.native.prevent="active = 'tab-container9'">芭蕾舞蹈</mt-button>
        </div>
      </div>
      <div class="center_right">
        <span class="rightOne">|</span>
        <span>全国</span>
        <span class="iconfont icon-dingwei"></span>
      </div>
    <div class="shows_footer">
      <!-- <ShowsList/> -->
      <div class="page-tab-container">
        <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
          <mt-tab-container-item id="tab-container1">
            <!-- cell组件 -->
            <mt-cell v-for="(show,index) in shows" :key="index">
              <img :src="show.coverUrl" alt />
              <div class="list_right">
                <span class="right_time">{{show.performanceTime}}</span>
                <span class="right_day">{{show.performanceDate}}</span>
                <h3>{{show.title}}</h3>
                <p>{{show.performancePlace}}</p>
                <strong class="money">￥{{show.priceMin}}</strong>
                <span class="money_right">起</span>
              </div>
            </mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="tab-container2">
            <!-- cell组件 -->
            <mt-cell v-for="(show,index) in shows" :key="index">
              <img :src="show.coverUrl" alt />
              <div class="list_right">
                <span>{{show.performanceTime}}</span>
                <span>{{show.performanceDate}}</span>
                <h3>{{show.title}}</h3>
                <p>{{show.performancePlace}}</p>
                <strong class="howMoney">￥{{show.priceMin}}</strong>
                <span>起</span>
              </div>
            </mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="tab-container3">
            <!-- cell组件 -->
            <mt-cell v-for="(show,index) in shows" :key="index">
              <img :src="show.coverUrl" alt />
              <div class="list_right">
                <span>{{show.performanceTime}}</span>
                <span>{{show.performanceDate}}</span>
                <h3>{{show.title}}</h3>
                <p>{{show.performancePlace}}</p>
                <strong class="howMoney">￥{{show.priceMin}}</strong>
                <span>起</span>
              </div>
            </mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="tab-container4">
            <!-- cell组件 -->
            <mt-cell v-for="(show,index) in shows" :key="index">
              <img :src="show.coverUrl" alt />
              <div class="list_right">
                <span>{{show.performanceTime}}</span>
                <span>{{show.performanceDate}}</span>
                <h3>{{show.title}}</h3>
                <p>{{show.performancePlace}}</p>
                <strong class="howMoney">￥{{show.priceMin}}</strong>
                <span>起</span>
              </div>
            </mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="tab-container5">
            <!-- cell组件 -->
            <mt-cell v-for="(show,index) in shows" :key="index">
              <img :src="show.coverUrl" alt />
              <div class="list_right">
                <span>{{show.performanceTime}}</span>
                <span>{{show.performanceDate}}</span>
                <h3>{{show.title}}</h3>
                <p>{{show.performancePlace}}</p>
                <strong class="howMoney">￥{{show.priceMin}}</strong>
                <span>起</span>
              </div>
            </mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="tab-container6">
            <!-- cell组件 -->
            <mt-cell v-for="(show,index) in shows" :key="index">
              <img :src="show.coverUrl" alt />
              <div class="list_right">
                <span>{{show.performanceTime}}</span>
                <span>{{show.performanceDate}}</span>
                <h3>{{show.title}}</h3>
                <p>{{show.performancePlace}}</p>
                <strong class="howMoney">￥{{show.priceMin}}</strong>
                <span>起</span>
              </div>
            </mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="tab-container7">
            <!-- cell组件 -->
            <mt-cell v-for="(show,index) in shows" :key="index">
              <img :src="show.coverUrl" alt />
              <div class="list_right">
                <span>{{show.performanceTime}}</span>
                <span>{{show.performanceDate}}</span>
                <h3>{{show.title}}</h3>
                <p>{{show.performancePlace}}</p>
                <strong class="howMoney">￥{{show.priceMin}}</strong>
                <span>起</span>
              </div>
            </mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="tab-container8">
            <!-- cell组件 -->
            <mt-cell v-for="(show,index) in shows" :key="index">
              <img :src="show.coverUrl" alt />
              <div class="list_right">
                <span>{{show.performanceTime}}</span>
                <span>{{show.performanceDate}}</span>
                <h3>{{show.title}}</h3>
                <p>{{show.performancePlace}}</p>
                <strong class="howMoney">￥{{show.priceMin}}</strong>
                <span>起</span>
              </div>
            </mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="tab-container9">
            <!-- cell组件 -->
            <mt-cell v-for="(show,index) in shows" :key="index">
              <img :src="show.coverUrl" alt />
              <div class="list_right">
                <span>{{show.performanceTime}}</span>
                <span>{{show.performanceDate}}</span>
                <h3>{{show.title}}</h3>
                <p>{{show.performancePlace}}</p>
                <strong class="howMoney">￥{{show.priceMin}}</strong>
                <span>起</span>
              </div>
            </mt-cell>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
// 引入BScroll
import BScroll from "better-scroll";
// 引入reqShows
import { reqShows } from "../../api/index.js";
export default {
  data() {
    return {
      shows: [], // 遍历的数据
      active: "tab-container1"
    };
  },
  components: {
    //ShowsList
  },
  created() {
    this.$nextTick(() => {
      this.contentScroll();
    });
  },
  async mounted() {
    let result = await reqShows();
    this.shows = result.detail;
    console.log(result);
  },
  methods: {
    contentScroll() {
      //this.$nextTick是一个异步函数，为了确保DOM已经渲染
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll('.center_left', {
            startX: 0,
            click: true,
            scrollX: true,
            scrollY: false
          });
        } else {
          this.scroll.refresh();
        }
      });
    }
  }
};
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
    height 50px
    overflow hidden
    float left
    // background-color pink
    .nav
      width 700px
      display flex
      padding 10px 0
      .mint-button
        background-color white
        border 1px solid white
        margin 0 3px
  .center_right
    float right
    width 20%
    padding-top 18px
    span
      color #666666
    .rightOne
      margin-right 8px
      color #F0F0F0
.shows_footer
  width 100%
  padding 53px 0
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
          .right_time
            color black
            font-weight 600
            padding-right 10px
          .right_day
            font-size 12px
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