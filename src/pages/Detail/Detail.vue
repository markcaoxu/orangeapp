<template>
  <div class="wrapper" ref="wrapper">
    <div class="detail">
      <!-- 演出详情 perform -->
      <div class="detail-perform">
        <!-- 头 -->
        <div class="perform-header">
          <!-- 上半部分 -->
          <div class="header-top">
            <span class="iconfont icon-arrow-left" @click="$router.back()"></span>
            <span class="header-text">演出详情</span>
            <span class="iconfont icon-fenxiang"></span>
            <span class="iconfont icon-home" @click="$router.replace('/profile')"></span>
          </div>
          <!-- 下半部分 -->
          <div class="header-bottom">
            <div class="left-img">
              <img class="img-big" :src="detail.coverUrl" alt />
              <img
                class="img-small"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAABGCAYAAACdW4eSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ1MjYyNjY3RjhBNzExRTZBQ0M4QjMyMDRDMkNENjk5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ1MjYyNjY4RjhBNzExRTZBQ0M4QjMyMDRDMkNENjk5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDUyNjI2NjVGOEE3MTFFNkFDQzhCMzIwNEMyQ0Q2OTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDUyNjI2NjZGOEE3MTFFNkFDQzhCMzIwNEMyQ0Q2OTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4a1BqAAAAEuUlEQVR42uxaSWgUQRStnhkVRAQ1egieRHAB8ShINCrugUgUxEgMKOTiyaMgeBACHj15CSiEYFTQSCCKCmo0CB5VcAHxFHLQuICimGSm/a+mftvTVC81052ZmCp4TKanl3p/efXrd5yp/S2umAcjJ+bJsEQtUUvUErVELVFL1BK1RC1RSzTDUbjUJxF5zsCQyHWelH/nz/VKGD0j6YlO6x5ROHs+8pzS2FORa9ke+vv0gW3xlicy+e5TFcfcL5PCfftG5LZsFbm2dnms2Hc5G6Lu6EMxTYBlSyPDojR4tcLafKyouRbWdzZsTPQc3CN4b5AsjT2RhnbfvxMzZ3rMo6aaUIPFg1bnseDeMzFz8YI0jOcl8jK8rQtHZ0VTxbUg4qxbL4r9V4SzZm3Ze73nykZo2eEZDNdizHR1JItI0w5DlEfdifHyd7I8iGGC8CaIRoUtE/R7CsckkYDRkMtsCDzP/9useZQfyiHOk8WkonJfJ06c81IXAtoAo+D5MEKmoYuJBz1a7XCaV5c/yUsyl1euEqKpyYuAYow4Ful6/1xSJRoMI/YycopFg1WWJ4TfONcqVJaUFKoqJidliAdDNU4cExs0aY7qlhf2LOcoyIRNFmEcjAR/fsrJf/4kPYrPqGWKw9dEfZ0s2p1BNQ3zEtZMGEeGK86jifNyAnUNU1TOYROihVpJhFl7OoHsY/HHwp/vOPrPKHSdadWTCVG/laVlSThwjCsaXlbi1lY5KC/lMR9RL9TImKzaYcbMtNYFIUxA5hblUrAUQ8hxTcrn6oqFqNCDoaRhSKQgaH7wsmNaHRnXuvxwP/GCEhr2OMjxOptURbVrMnkaqcJRxCGtU+/UPCrlnAjyQ0GcCQWrHnyXhTiFVzUk/R5HCHsRQkocVXxkJkZRZR3nra68ixq6vPRXYsGqLGnEFExyEw9Iqqj+nYhHmLwcV4Qn2cpVVYHZ14aW6Dwn6u/ppHGvuB5S3YiiPpU7GM3+8r/yKBZxuSHWlHONMIxUl9siVRcAIdu3NO6TasEArxVj1lnTSejWTa6Pg6WerhVqVbcRifpVlsXM/fghPIVIB0xDvu5EZZeBaufSi+eVKq5ap9oUGrrpXVu3DoOuPcl7SG1zrK1d1sDcS+KuYFSe4ze357RsrCXpANbcYahVjGR7k4zm7896XcG4DcPIsJEw1TV00Y0I7lnRPkXxoT1fvaLgnZF/M566R9Mcwegw7SCYbOkaZnlB6Ie9jKrIzwRh3bBEozqIFaGr+r+z0kpJe3BZGUuS1lfkb5zHa651k7zxjt3hBFopUa8U/e91vOurfAlsWymWqCVqiVqilqglaolaovWodb8T7ipwswd904OENsLSzPe+GZaAXwm3CbcIjwhTIectIuwiHCEcJiybC0R/EoYJg4QHEeREBOl9hE4C/l91cSMR/UO4r8iB5K+U5rZEkQXpvYSF9SCKhv0o4ZoKz28Zp9hyFdbHCa3ViKgp0ZeEfsJ1wkSdBLSZ0KWwKU2i48pzA4TXDbZqbCZ0E44pAxgT/aHUEuQeE0oNvkzmCbsJJwiHVH6HEi0qUQG5O4Tfc7Q2AMkO5emdygiS6Cv6RDf4Rh3zLst8hoB1/xVgAOy8jTaoIQsHAAAAAElFTkSuQmCC"
                alt
              />
            </div>
            <div class="right-text">
              <div class="top-text">{{detail.title}}</div>
              <div class="bottom-text">¥{{detail.priceRange}}</div>
            </div>
          </div>
        </div>
        <!-- 脚 -->
        <div class="perform-footer">
          <p class="line01">
            {{detail.performanceTime}}
            <span class="iconfont icon-arrow-right"></span>
          </p>
          <p class="line02">{{detail.performancePlace}}</p>
          <p class="line03">{{detail.performanceDetailedPlace}}</p>
          <div class="img04"></div>
        </div>
      </div>
      <!-- 会员 VIP -->
      <div class="detail-vip">
        <div class="vip-inner">
          <span>橙PLUS卡</span>
          <span>开通送¥100 最高省108元</span>
          <span>立即开卡</span>
          <span class="iconfont icon-arrow-right"></span>
        </div>
      </div>
      <!--选项 options -->
      <div class="detail-options">
        <ul>
          <li>
            <span class="span01">领 券</span>
            <span>：</span>
            <span class="bgimg" v-for="(ticket,index) in detail.ticket" :key="index*10+1">{{ticket}}</span>
            <span class="iconfont icon-gengduo three-point"></span>
          </li>
          <li>
            <span class="span01">VIP+</span>
            <span>：</span>
            <span class="span02">V+会员享</span>
            <span class="span03">{{detail.vip}}</span>
            <span class="iconfont icon-arrow-right three-point"></span>
          </li>
          <li>
            <span class="span01">入场</span>
            <span>：</span>
            <span class="span02">{{detail.childrenRules}}</span>
          </li>
          <li>
            <span class="span01">支持</span>
            <span>：</span>
            <span
              class="span04"
              v-for="(support,index) in detail.support"
              :key="index*100+100"
            >{{support}}</span>
          </li>
        </ul>
      </div>
      <!-- 描述 describe -->
      <div class="detail-describe">
        <p class="desc-title">演出介绍</p>
        <p class="first-line">{{detail.performDescribeTitle}}</p>

        <p class="other-line">{{detail.performDescribeContent01}}</p>
        <p class="other-line">{{detail.performDescribeContent02}}</p>
        <p>
          <img class="img01" :src="detail.performDescribeImg01" alt />
        </p>
        <p class="other-line">{{detail.performDescribeContent03}}</p>
        <p class="other-line">{{detail.performDescribeContent04}}</p>
        <p>
          <img class="img01" :src="detail.performDescribeImg02" alt />
        </p>
      </div>
      <!-- 温馨提示 remind -->
      <div class="detail-remind">
        <span class="remind-title">温馨提示</span>
        <span class="iconfont icon-arrow-right"></span>
        <div>
          <span class="re-item">· 配送说明</span>
          <span class="re-item">· 订票说明</span>
          <span class="re-item">· 确认订单</span>
          <span class="re-item">· 购票提醒</span>
        </div>
      </div>
      <!-- 查看更多 more -->
      <div class="detail-more">
        <div class="more-btn">
          查看更多演出
          <span class="iconfont icon-arrow-right"></span>
        </div>
      </div>
    </div>
    <!-- 选座购买 footer -->
    <div class="detail-footer">
      <div class="footer-left">
        <span class="iconfont icon-kefu-ermai"></span>
        <span>客服</span>
      </div>
      <div class="footer-right" v-show="!isShowOptions" @click="showOptions">选座购买</div>
      <div class="footer-right" v-show="isShowOptions" @click="goToTicket">确认购买</div>
    </div>

    <!-- 遮罩层 -->
    <div class="cover" v-show="isShowOptions" @click="showOptions"></div>
    <!-- 独立界面，选座 -->
    <transition name="fade">
      <!-- <div class="options-list" v-show="isShowOptions"></div> -->
      <div class="options-list" v-show="isShowOptions">
        <p class="date_title">选择日期</p>
        <ul class="choose_date">
          <li
            class="date_item"
            :class="{on:thisDateIndex===index}"
            v-for="(date,index) in detail.dateOptions"
            :key="index*100000+1"
            @click="chooseDateItem(index)"
          >{{date}}</li>
        </ul>

        <p class="time_title">选择场次</p>
        <ul class="choose_time">
          <li
            class="time_item"
            :class="{on:thisTimeIndex===index}"
            v-for="(time,index) in detail.timeOption"
            :key="index*100000+1"
            @click="chooseTimeItem(index)"
          >{{time}}</li>
        </ul>

        <p class="price_title">选择价格</p>
        <ul class="choose_price">
          <li
            class="price_item"
            :class="{on:thisPriceIndex===index}"
            v-for="(price,index) in detail.priceOption"
            :key="index*10000000+1"
            @click="choosePriceItem(index)"
          >{{price}}</li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
// 引入better-scroll
import BScroll from "better-scroll";
// 引入utils工具
import GetOrSetLocalStorageChooses from "../../utils/utils.js";
// 引入MessageBxo插件
import { MessageBox, Toast } from "mint-ui";

export default {
  data() {
    return {
      isShowOptions: false, // 选票界面是否显示   默认不显示
      dateId: -1, // 日期标识
      timeId: -1, // 时间标识
      priceId: -1, // 价格标识
      thisDateIndex: -1, // 当前日期索引
      thisTimeIndex: -1, // 当前时间索引
      thisPriceIndex: -1 // 当前价格索引
    };
  },
  async mounted() {
    // 页面滚动事件
    this.$nextTick(() => {
      // 创建一个滑动包含块
      this.scroll = new BScroll(this.$refs.wrapper, {
        scrollY: true,
        // 点击事件会禁用
        click: true,
        startY: 0,
        // 配置四个方向是否允许滑动
        bounce: {
          top: false,
          bottom: true,
          left: true,
          right: true
        }
      });
    });
<<<<<<< HEAD
    // 如果已经请求了数据，刷新将再次请求----vuex中shop模块----发送请求匹配商品详情对象
    // console.log(this.$store.dispatch('autoGetDetail'));   // 返回的是一个promise对象
    this.$store.dispatch("autoGetDetail");
=======
    // 计算属性中监视vuex中的数据变化，如果有变化，则遍历更新到页面
    // 如果已经请求了数据，刷新将再次请求----vuex中shop模块
    // this.$store.dispatch("autoGetDetail");
    // 发送请求匹配商品详情对象
    // console.log(this.$store.dispatch('autoGetDetail'));
    this.$store.dispatch('autoGetDetail')
>>>>>>> b00919fe2e6e791df520364088ac24b11af5ccea
  },
  // 计算属性
  computed: {
    // 监视商品信息的变化
    detail: {
      get() {
        return this.$store.state.shop.detail;
      },
      set(val) {
        console.log("hahah sdnashdo");
      }
    }
  },
  // 方法
  methods: {
    // 显示选票
    showOptions() {
      this.isShowOptions = !this.isShowOptions;
    },
    // 选择的日期时间
    chooseDateItem(index) {
      if (this.thisDateIndex === index) {
        // 相等无操作
      } else {
        // 切换日期，清空二级选项
        this.thisTimeIndex = -1;
        this.thisPriceIndex = -1;
        // 更新日期标志
        this.thisDateIndex = index;
      }
    },
    // 选择时间
    chooseTimeItem(index) {
      if (this.thisTimeIndex === index) {
        // 相等无操作
      } else {
        // 切换时间，清空三级选项
        this.thisPriceIndex = -1;
        // 更新时间标志
        this.thisTimeIndex = index;
      }
    },
    // 选择价格
    choosePriceItem(index) {
      if (this.thisPriceIndex === index) {
        // 相等无操作
      } else {
        // 没有下级，直接更新价格标识
        this.thisPriceIndex = index;
      }
    },
    // 收揽数据，存储当前影剧到vuex，跳转路由到Ticket组件
    goToTicket() {
      const chooseResultObj = {
        date: this.detail.dateOptions[this.thisDateIndex],
        time: this.detail.timeOption[this.thisTimeIndex],
        price: this.detail.priceOption[this.thisPriceIndex]
      };
      // console.log(chooseResultObj);
      // 存储到localStorage   使用utils工具中的封装方法
      GetOrSetLocalStorageChooses.setChooses(chooseResultObj);
      // 保存当前对象标识
      this.$store.dispatch("saveDetail", this.detail);

      // 提示
      Toast({
        message: "正在跳转自动支付...",
        position: "middle"
      });
      // 延时跳转
      window.timeId = setTimeout(() => {
        delete window.timeId;
        // 提示
        Toast({
          message: "支付成功！",
          position: "middle"
        });
        window.timeId = setTimeout(() => {
          delete window.timeId;
          // 跳转到Ticket组件
          this.$router.push("/ticket");
        }, 3000);
      }, 2000);
    }
  }
};
</script>

<style lang="stylus">
.wrapper
  width 100%
  height 100%
  // 商品详情
  .detail
    width 100%
    background-color #F5F5F5
    // 演出详情
    .detail-perform
      width 100%
      height 50%
      position relative
      background-color #fff
      .perform-header
        width 100%
        height 336px
        line-height 45px
        position relative
        .header-top
          width 100%
          position absolute
          left 0
          top 0
          z-index 6
          span
            font-size 18px
            color #ffffff
            vertical-align middle
          .icon-arrow-left
            position absolute
            top 0
            left 10px
            font-size 20px
          .header-text
            display block
            width 100%
            font-weight 700
            text-align center
          .icon-fenxiang
            position absolute
            top 0
            right 45px
            font-size 24px
          .icon-home
            position absolute
            top -1px
            right 15px
            font-size 20px
        .header-bottom
          width 100%
          height 225px
          background-size cover
          background-position 0 -40px
          display flex
          justify-content space-between
          // background-color #02a794
          background-color #604F3A
          .left-img
            position relative
            width 35%
            height 150px
            margin-top 58px
            margin-left 15px
            .img-big
              width 110px
              height 150px
            .img-small
              width 30px
              height 35px
              position absolute
              left 4px
              top -2px
          .right-text
            width 65%
            height 143px
            margin 58px 15px 0 5px
            padding-bottom 7px
            display flex
            flex-direction column
            justify-content space-between
            .top-text
              color #ffffff
              font-weight 700
              font-size 17px
              word-break break-all
              line-height 19px
            .bottom-text
              color #ffffff
              font-weight 700
              font-size 17px
              word-break break-all
              line-height 19px
      .perform-footer
        width 100%
        position absolute
        bottom 0
        left 0
        height 110px
        .line01
          font-weight 700
          font-size 17px
          display block
          width 100%
          height 50px
          line-height 50px
          padding-left 15px
          span
            font-size 12px
            vertical-align top
        .line02
          font-weight 600
          font-size 15px
          padding-left 15px
        .line03
          font-size 12px
          height 30px
          line-height 30px
          padding-left 15px
        .img04
          width 40px
          height 40px
          border-radius 50%
          background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAsCAMAAAA6jerHAAABUFBMVEUAAAD/b0D/dj7/dD//dD//bkD/hjn/gzr/gzr/jTf/cj//hjr/YUT/cUD/fjz/fjz/cED/iDn/fTz/dT7/aUL/cj//ej3/bkH/YUT/jjj/a0H/hzn/YkT/b0D/ej3/YkT/iDn/fTz/ZET/dz7/akL/jjf/YUT/cz//jjf/akH/YEX/a0H/X0X/jTj/eT3/hDr/jTf/ezz/fD3/eT3/ZkP/ijn/Y0T/eT7/fD3/iDn/dz7/gDz/Z0P/izj/fD3/gTv/bEH/jTj/YEX/dT//hzn/fzz/YUX/gjv/aEP/gjv/YEX/a0L/gDz/fTz/X0X/dz7/b0D/YEX/YEX/YUX/X0X/X0X/jjj/X0X/aUL/ZEP/hDr/a0H/Z0P/gjv/hzn/YkT/bUH/dD//fjz/iTn/gDv/b0D/ckD/izj/eD7/dj7/ej3/ZkP/hjr/YUX/fD3/jTjE6Qr8AAAAWHRSTlMAAwsJBlEtIte/vayUd3dsa09LNy3+/ff29vPy8OjZ1dTOv7KxsK6opKGdjIiHg3BsVCkb+fn29vTz8u7j4+Dg2c7NyMbDtbOoqKWXl5eNiYN9cXBuSTYm/xOd2QAAAeBJREFUOMt90ldbIjEUBuBvGiIg3d7L6trddXvvvdhFURRQGQvy/+9MDMlJxhm/6/dJToOejpXk2MvK1WA8melAeHKdjXq9Urna3z88PDn5mgshOx8b3ChUq40XAsRabHFT18z1dc+SpRv7ATONgLm48CcdMm5nqxUwNW7884Sr0MMoc16dkWZFGYmUqVaz7en0hxQtzVmvmFhE0f6tOTud4iZmFPT+Tzr99538jJnT4yKvWjPxPG6THyFzPAs4/WS+22pwk8wIVB5wkKNtfHG10X2WD5XLHhapsRi0PO6WpjQPWv1PGJmRpjSBt6qxRybypDl4g6dqQKsmWpXm4AnohCwTWRyVGLrcA03aNpEtH2JoUG0jZqKiMkMYUxtLm6hLmr1RJNUJjVhGSR+kOZrGMkfizDI6yipztIkYncfzAplCL0PCNItAnE7olZqnN0APjQJY1m864TmA4yXKZJobfB6vybDNdw8P8wGRGbLBklFGnJBpmlui2XHDqG0I88lqn84LhsgYD/Xtop18j++Hm+Y2VJbo7k3zD1r+hxedCqwzrOgFBJJVnwnD0DrupCtY0AJCsmaaFEIzr5s5ROQ3mV8WojIrG5uONrB+CPTNxT1xp7iZcIB7VepZ31zQ3AD3qlOhjBDHJAAAAABJRU5ErkJggg==') no-repeat
          background-size 18px
          background-color #EDEDED
          background-position 11px 9px
          position absolute
          right 15px
          bottom 20px
    // 橙PLUS卡
    .detail-vip
      width 100%
      height 40px
      padding 10px 0
      background-color #fff
      .vip-inner
        width 93%
        margin 0 auto
        height 40px
        line-height 40px
        background-color #373735
        border-radius 5px
        span
          display inline-block
          font-size 13px
          color #F7D992
          &:nth-child(1)
            height 20px
            line-height 20px
            padding 0 5px 1px 5px
            background-color #F7D688
            font-size 12px
            margin-left 12px
            color #000000
            border-radius 2px
          &:nth-child(2)
            padding-right 30px
            padding-left 10px
            color #F7D992
          &:nth-child(4)
            padding-left 5px
    // 选项
    .detail-options
      width 100%
      height 32%
      margin-top 12px
      background-color #ffffff
      ul
        padding 0 14px
        li
          width 100%
          height 50px
          line-height 50px
          border-bottom 1px solid #F6F6F6
          span
            color #999999
            font-size 14px
            &.span01
              padding 0 5px
            &.span02
              color #000000
              padding-right 5px
            &.span03
              color #FF6743
            &.span04
              padding 2px
              margin 0 14px
              font-size 12px
              border 1px solid #999999
              border-radius 4px
            &.bgimg
              display inline-block
              width 90px
              background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAAuCAMAAAC27sMlAAAAM1BMVEUAAAD/Z0P/Z0P/Z0P/Z0P/Z0P/Z0P/Z0P/Z0P/Z0P/Z0P/Z0P/Z0P/Z0P/Z0P/Z0P/Z0NvQ9IYAAAAEHRSTlMABg320G4urMfr6n15G8urlF+gTgAAAK9JREFUaN7t2UsOwyAMRdFnCIR86/2vtkmlKkzC/Eo+K7gDDEiWZKVlh8itmC7H5CjTIRms+ao2Fccpao7ThJnBR5YDRfSLiI7ogYiO6IGIvsnqtjjIslfTJc2OMSf9YapnPdLqCGtSZ3eETb3qCFU9cwRTLzmC8Y8HcRCRVx7wcSE945/0KyZ+mBwool9EdEQPRHRED0T0jbm+QC6KkCs55PITuWaWrJyYacxnMekL/575apnVEBYAAAAASUVORK5CYII=') no-repeat
              background-size contain
              text-align center
              background-position 0 14px
              margin-left 3px
              margin-right 7px
              font-size 12px
              color #ffffff
            &.three-point
              float right
              padding-right 10px
    // 演出介绍
    .detail-describe
      width 100%
      height 110%
      margin-top 12px
      background-color #ffffff
      overflow hidden
      box-sizing content-box
      &.open
        height 240%
      p
        &.desc-title
          padding 20px 0 30px 15px
          font-size 19px
          font-weight 700
        &.first-line
          padding 0 15px 5px 15px
          font-size 15px
        &.other-line
          font-size 13px
          padding 5px 14px
          line-height 20px
        .img01
          width 90%
          margin 0 18px
    // 温馨提醒
    .detail-remind
      width 100%
      height 90px
      margin-top 12px
      background-color #ffffff
      .remind-title
        display inline-block
        font-size 19px
        font-weight 700
        padding 16px 0 16px 15px
      .icon-arrow-right
        float right
        margin-top 18px
        margin-right 20px
      div
        padding 0 10px
        span
          display block
          float left
          &.re-item
            width 20%
            font-size 13px
            padding 10px 8px
            color #999999
    // 查看更多
    .detail-more
      width 100%
      height 50px
      margin-top 12px
      padding-bottom 55px
      background-color #ffffff
      padding-top 13px
      .more-btn
        width 150px
        height 34px
        margin 0 auto
        line-height 34px
        text-align center
        border 1px solid #FF6743
        border-radius 3px
        font-size 15px
        color #FF6743
  // 选座购票
  .detail-footer
    width 100%
    height 38px
    position fixed
    bottom 0
    left 0
    background-color #ffffff
    padding 8px
    border-top 2px solid #F1F1F1
    z-index 888
    .footer-left
      float left
      display flex
      flex-direction column
      align-items center
      margin-left 10px
      span
        color #666666
        &:nth-child(1)
          font-size 22px
        &:nth-child(2)
          font-size 12px
    .footer-right
      float right
      width 80%
      height 38px
      margin-right 20px
      background-image linear-gradient(to right, #FF9635, #FF5149)
      line-height 38px
      text-align center
      color #ffffff
      font-weight 700
      border-radius 19px
.cover
  width 100%
  height 80%
  background-color rgba(0, 0, 0, 0.5)
  position fixed
  top 0
  left 0
// 选项列表
.options-list
  width 100%
  height 470px
  background-color #ffffff
  position fixed
  left 0
  bottom 55px
  opacity 1
  border-radius 8px 8px 0 0
  &.fade-enter-active, &.fade-leave-active
    transition all 0.5s
  &.fade-enter, &.fade-leave-to
    height 0
  // 选项
  p
    font-size 18px
    padding 30px 0 15px 15px
    font-weight 600
  ul
    display flex
    flex-wrap wrap
    padding 0 15px
    width 100%
    li
      margin-top 15px
      height 45px
      background-color #F5F5F5
      line-height 45px
      text-align center
      padding 0 20px
      margin-right 10px
      border-radius 3px
      &.on
        background-color #FEF2EF
        color #FF8E73
        font-weight 500
    .time_item
      padding 0 35px
    .price_item
      padding 0 0
      width 110px
</style>