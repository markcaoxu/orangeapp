<template>
  <!-- 票夹 -->
  <div class="ticket">
    <!-- 头部 -->
    <div class="ticket-header" @click="$router.back()">
      <span class="iconfont icon-arrow-left"></span>
      <span>票夹</span>
      <span class="iconfont icon-gengduo"></span>
    </div>
    <!-- 主体 -->
    <div class="main-warp">
      <div class="ticket-main" v-show="!detail.id">
        <!-- <input type="text" @keyup.13="search" v-model="searchName" class="searchInput" /> -->
        <img
          class="logoImg"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAACcCAMAAABhn0ZIAAAA9lBMVEUAAAClm5Olm5Olm5Olm5Olm5Olm5Olm5Olm5Olm5Olm5Olm5Olm5Olm5Olm5Olm5Olm5Olm5Olm5Olm5Olm5Olm5Olm5Olm5Olm5Olm5Olm5Olm5Olm5Olm5Olm5Olm5Olm5Olm5Olm5Olm5Olm5Olm5Olm5Olm5P+/v6lm5P4+Pfc2db/uIPHwby1rafz8vH29fTMxsK7s62wp6DY09D8+/uso5ypn5jo5uTBurT++vbj393/0rH/xZr+5NHTzsu4sKnr6efx7+7g3Nna1tPQy8fKxL/+8ujl4uCyqqP+6df/1rn/vIrW0c3Fvrnv7eu+t7H+7uJwyFuWAAAAKHRSTlMA0ODwoJBAsfwwDAbqwQP1anQoEMhEOxbZX+aWTzWAeR66WPiohZxKMW1WOAAABq1JREFUeNrt3QlT00AYxvG31JL0vu9CAUH3KfZukipqTxBUUL//l3HT1h7kKM60NmbzmxHt1Az8CbvNbpgpef53oaIUASJSIkSCuShhIVIkoQSwphwjcVwBiFRT4XCqGgEQIGFkAZynF2NeAvCWROEDomFaiJ0DBVF+5HPA6zNayseBLInhCnhFa8rijHYJuKA1FSBKYsgAOVpzAvhIDNFnYzsnTvorIElrEoBEYuCpvmcDIEliyMtAcWOWk89IEGUgnqOFoF9/rRNF+gh4nQgTF0vEgUiehKGfaUTeVJNvSgDiJySQVAFLR0KVE4VOI5jxnx58myacyh1vCsboZYxHvqQmnE0GAtVsmA6sIsVhEC/nX1CQPIKBnPlfttxSGZjzbx2GeatDSxX6D7yNg1OHnU1dvf2MbMWi+pGdZx6guyLHy+nldz+Ywb0KXJKtIoCBwp5rPaoAquRwoRKgjpiZPiCnt60/b5mZWgeQc+RsV4A2ZuaGQNF2pAOoMVPK0PFL0bAfmDILA0DasgbrMAtjAMfkZFlAVay/fPtFlQ/oMSt1p2+5nQJ3zFIHeEOWKoDWYlZugAw52SvrE8fdA3KQLIQKQJtZGgMlcjKefs1sT3shRObKNiedqwF++ndOyrndpo81QIpZzXGYMsekF3C0y3RuCuAybFH+njkn3Q//TtO5NoCMYZoPlwE0FHenszvwhsTmic8W9PIWc3k6G4A7Si7PfOgiCu59jTkkPRf1+XwyZP4xerzDdK7fhc73ppooJgPR1+A0/pLolPRzrJzvMp1TBio21ZvMOekJGX/Iid2mc8p1B0uNAR/lDkqncDqd5mOdfwzTztO5Wr/Xvqu3H2/0bmel72uaM/LSnZVeQkTU9EQhIWo656V76V66l+6le+leupfupXvpXrqX7qUv1IzclN6BkfpjVjSE0UPTNektmLlj3ARmbl2eXmfcNcy0XZX+eL2hu5Y+vd6gui392fBtrKXX2Iaul+6luyL9w6e5r8b0L4unfrk1/d3cZ5P0xVNfvXQv3Uv30r10h7JNVz7O/TKmf1g89cWl6QJf0njpwqXX2wsj8/TmbXtBc1v6klYzTW+4c6uihnVNxnUWfTeAxnQq1gxck87aD90/HuZZo+HPFuOUemPCdDeN7tL7mnvSvX14L91LFyNdaa4s7zctnmrNHinr/09xT7rSwEpnFnYNrc+4Vle/CzOFNuIPmipm1JZr0ltY94Nxw7UbT4r+SH+Vn2Lh3p3pD4rxaq4xT+9hTnPX7cZJf0Fhtul9rumesW5Yudmku2yGf0n6Q71eHwKocz2x0jeM3Jb+4fuccVuyg01916Vb7siOOo11T4o46e69kN2errj1N6i2pk80rOu660LWNn2IOXdeyNqmt7Hpxm3pyrc5kxtP99crqgvTX3oLQqj0Wm/C/z0ajMVLfwKmrKlBVdyY/vP9Bs24crsB0NxTeiiZJVP7Tzf6t+kByHky2n96zfrXn+8BdXYbasBGixlvuIfliwQEyWDv6dx13WjAM7np3YixZnvAR3nv54RxY/7APekH34cXMz0UkCSpBEQl6bJCKwKkJ7ESpxUB0o9lLEVpRYB0ygeDwShwEQymYrQiQrq405zo6Zfipr+NR8O0SZR0Iy/dS9eFBE1PvfLj9XlWwPS3ccycCpee0sv1P7gQLf0NcJSjs3P+l2jpEeBYn+j8QOqfpLfGP5qKI9IBLN8RcN/pyv1dQ4Ou+3R9+JvMi7MdKwHB/aa3blWs0Z5+HDhdAjJ5CpcBf2yf6cqjhplIwVeSMVNvHTT9RAbimQiAKu0xvTkEVwpk08SFT5IZcOr94dK5JOak2B7TRyqAwkVs/XsugesdLp176wNQSsZof+kjDZBPw7SpEtHbD5jOneVSPHx/6U2VFxybfF4fgImbV27KkAcEyUQ6A2hjF6cPAPmYTOWPgM5/nj5llloaULV7gZnYHAtEyMkCwK3t23/4YnbHPjBLfaBATlYEhtYjXQMqZCkfB/rMyi1wSU6Wl4ERszDZcuLKQJ1ZUFSgSI4m2bx1zdOWXZATQLUZKxGHv21nSgbem7fXtC3rolgEuGGmHgEkyOGSABp9s/KfQGHrJKmOmVHzCcB5jJyuDO6h/djbNFunVshW3g9o9d4ztx1wmTQ5X/I1LFzRFtk4LFw6fKAvpF6ZxkeKtNWJD2aiWfpfpCungWdOK2F6iVw18MxV8Yw8Ho/H4/HsTNm/VCUu5HOYKOku/EvS7vadlk6JS8Nh/KQrYim6r/TQkcP4/j79N5TT/YnI5Mx4AAAAAElFTkSuQmCC"
          alt
        />
        <span class="emptySpan">暂无电子票</span>
      </div>
      <div class="ticket-main" v-show="detail.id">
        <ul>
          <li>
            <div class="main-header">
              <div class="main-left">
                <p>{{detail.title}}</p>
                <p>{{chooseResult.date}} - {{chooseResult.time}}</p>
                <p>{{detail.performancePlace}}</p>
              </div>
              <div class="main-right">
                <p>已支付</p>
                <img :src="detail.coverUrl" alt />
              </div>
            </div>
            <div class="ticket-footer">
              <span>￥{{detail.priceMin}}</span>
              <span>|</span>
              <span>1张</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// 引入mint-ui
import { Toast } from "mint-ui";
// 引入接口
import { reqDetailInfo } from "../../api/index.js";
// 引入utils工具
import GetOrSetLocalStorageChooses from "../../utils/utils.js";
// 引入接口
import { reqAutoGetDetail } from "../../api/index.js";

export default {
  data() {
    return {
      searchName: "",
      newMovie: {},
      chooseResult: {}
    };
  },
  methods: {
    async search() {
      // 这个是请求所有的电影数据，返回的是一个数组，里面每一个电影都是一个对象
      const infoes = await reqDetailInfo();
      // console.log(infoes);

      // 遍历这个数组   item是每个电影对象
      infoes.detail.forEach(element => {
        if (
          element.name.includes(this.searchName) ||
          element.title.includes(this.searchName)
        ) {
          // 匹配成功，存储
          this.newMovie = element;
          console.log(this.newMovie);

          // 匹配成功，把这个this.newMovie（匹配的电影）存到Vuex中
          this.$store.dispatch("saveDetail", this.newMovie);
        }
      });

      if (this.newMovie === {}) {
        Toast({
          message: "没有匹配到数据",
          position: "middle"
        });
      }
    }
  },
  mounted() {
    // localStorage中取出chooses
    this.chooseResult = GetOrSetLocalStorageChooses.getChooses();
    // localStorage中取出detail_name
    const detailNameResult = localStorage.getItem("detail_name");
    // 有  发送请求自动获取商品详情信息   ---> 服务器
    reqAutoGetDetail(detailNameResult);

    // console.log(this.detailResult);
    // console.log(this.$store.state.shop.detail);
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
  }
};
</script>

<style lang='stylus' rel='stylesheet/stylus' >
// 引入混合
@import '../../common/stylus/mixins.styl'
.ticket
  width 100%
  height 91%
  margin 0 auto
  overflow hidden
  clearFix()
  .ticket-header
    width 100%
    height 7%
    background-color #ffffff
    bottom-border-1px(#000000)
    position fixed
    left 0
    top 0
    span
      display inline-block
      height 40px
      font-size 18px
      line-height 40px
      text-align center
      &:nth-child(1)
        width 10%
      &:nth-child(2)
        width 80%
      &:nth-child(3)
        width 10%
  .main-warp
    width 100%
    height 100%
    padding-top 44px
    padding-bottom 45px
    background-color #F5F5F5
    .ticket-main
      width 100%
      display flex
      flex-direction column
      align-items center
      .searchInput
        position fixed
        bottom 80px
      .logoImg
        width 110px
        height 78px
        margin-top 150px
      .emptySpan
        margin-top 25px
        font-size 13px
        color #999999
      ul
        width 100%
        margin-top 13px
        li
          overflow hidden
          width 100%
          background-color #ffffff
          .main-header
            width 100%
            overflow hidden
            .main-left
              float left
              padding 30px 0 18px 18px
              width 60%
              p
                &:nth-child(1)
                  font-size 19px
                  font-weight 700
                  line-height 27px
                &:nth-child(2)
                  margin-top 30px
                  font-size 12px
                  color #666666
                &:nth-child(3)
                  margin-top 15px
                  font-size 12px
                  color #666666
            .main-right
              float right
              width 30%
              padding-top 20px
              p
                text-align center
              img
                width 80px
                height 100px
                margin 10px auto
                padding-left 14px
          .ticket-footer
            width 92%
            height 40px
            background-color #fff
            margin 0 auto
            border-top 2px solid #F5F5F5
            padding-top 14px
            span
              padding 0 5px
              font-size 12px
              color #9A9A9A
              &:nth-child(1)
                font-size 16px
                padding-left 0
                font-weight 600
                color #000000

</style>