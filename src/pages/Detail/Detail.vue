<template>
  <div class="wrapper" ref="wrapper">
    <div class="detail">
      <!-- 演出详情 perform -->
      <div class="detail-perform">
        <!-- 头 -->
        <div class="perform-header">
          <!-- 上半部分 -->
          <div class="header-top">
            <span class="iconfont icon-arrow-left"></span>
            <span class="header-text">演出详情</span>
            <span class="iconfont icon-fenxiang"></span>
            <span class="iconfont icon-home"></span>
          </div>
          <!-- 下半部分 -->
          <div class="header-bottom">
            <div class="left-img">
              <img
                class="img-big"
                src="https://image.juooo.com/group1/M00/02/7B/rAoKNVwkpY-AaofYAACqKCpweuU926.jpg"
                alt
              />
              <img
                class="img-small"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAABGCAYAAACdW4eSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ1MjYyNjY3RjhBNzExRTZBQ0M4QjMyMDRDMkNENjk5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ1MjYyNjY4RjhBNzExRTZBQ0M4QjMyMDRDMkNENjk5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDUyNjI2NjVGOEE3MTFFNkFDQzhCMzIwNEMyQ0Q2OTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDUyNjI2NjZGOEE3MTFFNkFDQzhCMzIwNEMyQ0Q2OTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4a1BqAAAAEuUlEQVR42uxaSWgUQRStnhkVRAQ1egieRHAB8ShINCrugUgUxEgMKOTiyaMgeBACHj15CSiEYFTQSCCKCmo0CB5VcAHxFHLQuICimGSm/a+mftvTVC81052ZmCp4TKanl3p/efXrd5yp/S2umAcjJ+bJsEQtUUvUErVELVFL1BK1RC1RSzTDUbjUJxF5zsCQyHWelH/nz/VKGD0j6YlO6x5ROHs+8pzS2FORa9ke+vv0gW3xlicy+e5TFcfcL5PCfftG5LZsFbm2dnms2Hc5G6Lu6EMxTYBlSyPDojR4tcLafKyouRbWdzZsTPQc3CN4b5AsjT2RhnbfvxMzZ3rMo6aaUIPFg1bnseDeMzFz8YI0jOcl8jK8rQtHZ0VTxbUg4qxbL4r9V4SzZm3Ze73nykZo2eEZDNdizHR1JItI0w5DlEfdifHyd7I8iGGC8CaIRoUtE/R7CsckkYDRkMtsCDzP/9useZQfyiHOk8WkonJfJ06c81IXAtoAo+D5MEKmoYuJBz1a7XCaV5c/yUsyl1euEqKpyYuAYow4Ful6/1xSJRoMI/YycopFg1WWJ4TfONcqVJaUFKoqJidliAdDNU4cExs0aY7qlhf2LOcoyIRNFmEcjAR/fsrJf/4kPYrPqGWKw9dEfZ0s2p1BNQ3zEtZMGEeGK86jifNyAnUNU1TOYROihVpJhFl7OoHsY/HHwp/vOPrPKHSdadWTCVG/laVlSThwjCsaXlbi1lY5KC/lMR9RL9TImKzaYcbMtNYFIUxA5hblUrAUQ8hxTcrn6oqFqNCDoaRhSKQgaH7wsmNaHRnXuvxwP/GCEhr2OMjxOptURbVrMnkaqcJRxCGtU+/UPCrlnAjyQ0GcCQWrHnyXhTiFVzUk/R5HCHsRQkocVXxkJkZRZR3nra68ixq6vPRXYsGqLGnEFExyEw9Iqqj+nYhHmLwcV4Qn2cpVVYHZ14aW6Dwn6u/ppHGvuB5S3YiiPpU7GM3+8r/yKBZxuSHWlHONMIxUl9siVRcAIdu3NO6TasEArxVj1lnTSejWTa6Pg6WerhVqVbcRifpVlsXM/fghPIVIB0xDvu5EZZeBaufSi+eVKq5ap9oUGrrpXVu3DoOuPcl7SG1zrK1d1sDcS+KuYFSe4ze357RsrCXpANbcYahVjGR7k4zm7896XcG4DcPIsJEw1TV00Y0I7lnRPkXxoT1fvaLgnZF/M566R9Mcwegw7SCYbOkaZnlB6Ie9jKrIzwRh3bBEozqIFaGr+r+z0kpJe3BZGUuS1lfkb5zHa651k7zxjt3hBFopUa8U/e91vOurfAlsWymWqCVqiVqilqglaolaovWodb8T7ipwswd904OENsLSzPe+GZaAXwm3CbcIjwhTIectIuwiHCEcJiybC0R/EoYJg4QHEeREBOl9hE4C/l91cSMR/UO4r8iB5K+U5rZEkQXpvYSF9SCKhv0o4ZoKz28Zp9hyFdbHCa3ViKgp0ZeEfsJ1wkSdBLSZ0KWwKU2i48pzA4TXDbZqbCZ0E44pAxgT/aHUEuQeE0oNvkzmCbsJJwiHVH6HEi0qUQG5O4Tfc7Q2AMkO5emdygiS6Cv6RDf4Rh3zLst8hoB1/xVgAOy8jTaoIQsHAAAAAElFTkSuQmCC"
                alt
              />
            </div>
            <div class="right-text">
              <div class="top-text">陈佩斯、杨立新主演喜剧《戏台》-石家庄</div>
              <div class="bottom-text">¥180-1080</div>
            </div>
          </div>
        </div>
        <!-- 脚 -->
        <div class="perform-footer">
          <p class="line01">
            10/31 - 11/01
            <span class="iconfont icon-arrow-right"></span>
          </p>
          <p class="line02">石家庄 | 石家庄大剧院-大剧场</p>
          <p class="line03">河北省石家庄市裕华区塔南路72号</p>
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
            <span class="bgimg">满500减40</span>
            <span class="bgimg">满11减10</span>
            <span class="iconfont icon-gengduo three-point"></span>
          </li>
          <li>
            <span class="span01">VIP+</span>
            <span>：</span>
            <span class="span02">V+会员享</span>
            <span class="span03">国内包邮 + 双倍积分</span>
            <span class="iconfont icon-arrow-right three-point"></span>
          </li>
          <li>
            <span class="span01">入场</span>
            <span>：</span>
            <span class="span02">1.1米以上或5周岁以上儿童凭票入场</span>
          </li>
          <li>
            <span class="span01">支持</span>
            <span>：</span>
            <span class="span04">在线选座</span>
            <span>|</span>
            <span class="span04">电子票</span>
            <span>|</span>
            <span class="span04">同城满200包邮</span>
          </li>
        </ul>
      </div>
      <!-- 描述 describe -->
      <div class="detail-describe">
        <p class="desc-title">演出介绍</p>
        <p class="first-line">《戏台》唱念做打演历史，历史风云变化筑《戏台》</p>
        <p class="other-line">一部被誉为“当代舞台喜剧的又一座高峰”的原创舞台喜剧作品；</p>
        <p class="other-line">一部一经演轰动京城，口碑载道，场场爆满的原创舞台喜剧作品；</p>
        <p class="other-line">一部杨立新说剧本“四十年难遇”，陈佩斯说“等了它60年”的剧本；</p>
        <p>
          <br />
        </p>
        <p>
          <img
            class="img01"
            src="https://image.juooo.com/group1/M00/01/D2/rAoKmVwkpimAVgJfAAW7gYL9pAw045.png"
            alt
          />
        </p>
        <p>
          <br />
        </p>
        <p class="other-line">《戏台》是一部思想精深、艺术精湛的喜剧作品，是一部从文本上就叫得响、留得下的好戏。</p>
        <p
          class="other-line"
        >在选材上，《戏台》可谓是“台上见台，戏中有戏”。它将舞台进行180度大翻转，一向神秘的后台变成向观众开放的舞台，深入后台众生相，360度全景式呈现戏台幕后故事。</p>
        <p
          class="other-line"
        >在形式上，《戏台》首次将话剧和京剧艺术融合在一起。《戏台》中，对白混杂念白、台词穿插唱段，京剧和话剧在同一时空里融汇交合，互为推进。在剧作技术层面，《戏台》人物性格鲜明生动、台词语言地道幽默、故事架构智慧精彩：整部作品浑然一体，编剧之功力令人赞叹。</p>
        <p class="other-line">在剧作主题上，《戏台》以小见大，以方寸舞台演历史变迁，以一代戏班的多舛命途，见“文化之传承”这一古老而永不过时的命题，立意深远，耐人回味。</p>
        <p>&nbsp;</p>
        <p>
          <img
            class="img01"
            src="https://image.juooo.com/group1/M00/02/7B/rAoKNVwkpjyAFADxAAYlVnt1oq4859.png"
            alt
          />
        </p>
        <p
          class="other-line"
        >大道文化倾力邀请实力派演员加盟演出，深入挖掘戏曲行艺人，来自北京人民艺术剧院、中国国家话剧院、中国戏曲学院、北京市曲剧团等各大著名院团的精英演员们纷纷加盟，倾情出演。</p>
        <p
          class="other-line"
        >在舞台制作上，国内著名舞美设计师刘科栋、灯光设计师邢辛、服装造型师龚元等均为此戏倾注了各自的心血，使得整部舞台呈现考究、精致、大气，完美的传递出作品的精髓，引人入胜。</p>
        <p class="other-line">而现场戏曲锣鼓场的乐队演奏，将音乐融汇在情节之中，运用出色。</p>
        <p></p>
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
      <div class="footer-right">选座购买</div>
    </div>
  </div>
</template>

<script>
// 引入better-scroll
import Bscroll from "better-scroll";

export default {
  async mounted() {
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.wrapper, {
        scrollY: true,
        click: true,
        startY: 0,
        bounce: {
          top: false,
          bottom: true,
          left: true,
          right: true
        }
      });
    });
  },
  

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
          background url('https://image.juooo.com/group1/M00/02/7B/rAoKNVwkpY-AaofYAACqKCpweuU926.jpg') no-repeat
          filter 2px
          background-size cover
          background-position 0 -40px
          display flex
          justify-content space-between
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
              padding 0 14px
              font-size 12px
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
    border-top 1px solid #F1F1F1
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
</style>