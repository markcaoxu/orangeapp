<template>
<div class="seach-wrap">
   <header class="head">
    <div class="search-input">
      <span class="search-icon">
        <img
          class="search-icon-img"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFODEwQTUzRDU2QkMxMUU5QjkxMUI3QkM2ODQ4MzU1MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFODEwQTUzRTU2QkMxMUU5QjkxMUI3QkM2ODQ4MzU1MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU4MTBBNTNCNTZCQzExRTlCOTExQjdCQzY4NDgzNTUxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU4MTBBNTNDNTZCQzExRTlCOTExQjdCQzY4NDgzNTUxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+2ZZSUwAAAsVJREFUeNrsmE9IFGEYh0exlFUSFAShWjSCAm+yhyAUvEQwkEFkFCxegk5KCXXwEBTCWucEwUA0a8n2tAt5CSGoU+LZS+JqGB00FiJJnO33wm/gZdhdd/i+AQ/zwsN+M7sz++z7/XtnG8rlsnOSo9E54RELxoKx4DHRVCgUar3fCoaBC/pBj1wDPFAEa2AF5FzX3Y9CsCGfz1c63wImwCPQUcd9/oBXYAqipagF+8B7cDlwfhtsgj3QDpKgN/CZHTACya9RjcEB8EXJSWZegkvgPBgEN8EQuEDJp5SWOAtWMWxuRCEomZN0nuHxJ4o9BhtVri8iW8/wehF84LnTYBmSAzYFW9itvtwbcI1ddmxAUjJ4G7zgqVMgC8kOW4ITqlslc6PgKMyNIFkGT9B8x1Pd4LkNwVbOVn/MhZYLxAPwk+37yGK3qeCwWkpm6u3WGpmUZSajujptKuiq49eWJt8iOGT7uqlgv1rnNmzYcdJ842HKVLCH7U3Lu9QWXxMYh10mgk1s71kW/KXaCRNBj+12y4Kdqn1gIlhkO2lZ0L/fv0A2Qwuusd3L/dY4MOba1ORYx6TxTARX1PGopeyNgGa2P5rO4hx3EInxOuu/WtmTfX2Shx7XRCPBfRabDuVmpU40uGdGLV1ZdO93G8XClNribqmtKmz2xtkLEr9Zqpk9k/C1xHGzynpObnyOG3+pzm7NKDmJeWTvh+2SXyrhZW7yDquSDMdRpYW8jT9sUnWro8ZfGpJLtp9JpBLOsp7z45B76xbXtE6ucyk1W/1unQdjahMwkqz0XPyZ5f+Mqkgko1fAHX75PXBVyYnIW7kOMg9ZYnm8/wKGwF3bj52OqorTLJlSgT1Vdoh1rnOLwdkKKfkRC5T8i/cTJpOkWuyCaSLRRckDdrWHL65Wci1BUv58nAtsBuEyGP+BGQvGgrFgtPFfgAEAtbi9NiQCJM8AAAAASUVORK5CYII"
          alt
        />
      </span>
      <input
        v-model="inputText"
        class="input-text"
        @keyup.13="centerText"
        type="text"
        placeholder="请输入搜索内容"
      />
      <span @click="deleteTExt" class="cancel-icon">
        <img
          class="cancel-icon-img"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGMDJDNTU4MzU2QkMxMUU5OEM3RUM1OUI4Q0VFRUUwNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGMDJDNTU4NDU2QkMxMUU5OEM3RUM1OUI4Q0VFRUUwNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkYwMkM1NTgxNTZCQzExRTk4QzdFQzU5QjhDRUVFRTA3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkYwMkM1NTgyNTZCQzExRTk4QzdFQzU5QjhDRUVFRTA3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m2nlzQAAAexJREFUeNrsmDFrAjEUx08RR2c/glO7tzg4KehREAf7CVy7dXB26OjoXqiDCFIFnRyk3XXyG+js6GL/kWc50iTe+Z4gJYE/QnL553cvl+TF1OFwCG65pIMbLx7QA3rAMyXDNRiPx7amB6gOFaEClKP6HbSGFtCwVqt9u/xT3H3QAFiFOtB9TIsl1Abo5NqAKkI9qHmhVR9qAXR3jW8wT1PWZHiovgu8cF4aUEVuBt0JeCmPGSBzkoA9IbgoZE8EEG9aNUzrBnqB5jEs5vTsRp9u8mZHsGOoe4O6UAX6dPRVbRUsii71MXpfvIrxhmqf+7JERcHtoSw0gEIDXCPyzBQqGbweORGsW+pLBJUlgIYWSR1uYIE7jsEBLDraQgukCS50jcE56gpn2k+QjQhkkADuOEaauf8FMSFPkUwCdxzjX6dbuxjP6N+cbeFYx+AArhPCDc6sbuMYHMBFQrjQsbqtY3AAh47jy7WVmCBtx+LwYkDKhJeGplGM1foLCZ899fmTyKoxuCl/W516Wt0r/T45TogT5BRH5ijSR/cWyag/mImqMbtG9J6l8sEWtBKEW5GnWMKq9sOyEKTyKEfvJVInyZaShz5nWpUH4Lai92Itkuq7eZe8dmYC+TIh3cbF3f955AE9oAd0lx8BBgBFlKtTdbJrowAAAABJRU5ErkJggg=="
          alt
        />
      </span>
    </div>
    <span class="cancel" @click="goMsite('/msite')">取消</span>
  </header>
  <section class="hotWord-wrap">
    <div class="hotWord-conent">
      <h3 class="hot-h3">热词搜索</h3>
      <ul class="hot-ul">
        <li class="hot-item">摇滚红与黑</li>
        <li class="hot-item">腿毛叔叔</li>
        <li class="hot-item">来自远方</li>
        <li class="hot-item">永不消逝的电波</li>
        <li class="hot-item" >王心凌</li>
        <li class="hot-item">音乐剧猫</li>
      </ul>
    </div>
  </section>
</div>
</template>
<script>
/* eslint-disable */
export default {
  name: "",
  props: [""],
  data() {
    return {
      inputText: "" //输入框输入的内容
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    //输入完成 ，center键确定
    centerText() {
      console.log(this.inputText);
    },
    //点击清除图标，清空inputText内容
    deleteTExt() {
      this.inputText = "";
      console.log(this.inputText);
    },
    //点击取消返回msite路由
    goMsite() {
      // console.log(this)
      console.log(this.$router);
      this.$router.push("/msite");
    }
  },

  watch: {}
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.seach-wrap
  width 100%
  height 100%
  .head
    width 100%
    height 50px
    .search-input
      position relative
      top 8px
      left 10px
      width 334px
      height 34px
      border 1px solid #cccccc
      border-radius 20px
      .search-icon
        width 22px
        height 22px
        display block
        margin 5px 0 0 10px
        .search-icon-img
          width 22px
          height 22px
          display flex
          text-align center
          flex-direction column
          align-items center
          margin 5px
      .input-text
        position relative
        bottom 22px
        left 35px
        width 260px
        height 22px
        float left
        line-height 22px
        outline none
        border none
      .cancel-icon
        width 22px
        height 22px
        display block
        position relative
        bottom 25px
        right 18px
        float right
        .cancel-icon-img
          width 22px
          height 22px
          display flex
          text-align center
          flex-direction column
          align-items center
          margin 5px
    .cancel
      width 40px
      height 25px
      float right
      position relative
      bottom 20px
      left 80px
      font-size 17px
      color white
      background-color #808080
      text-align center
      line-height 25px
      border-radius 10px
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
          width 139px
          height 39px
          background-color #F5F5F5 
          margin 10px 15px
          border-radius 15px
          text-align center
          line-height 39px
          color #FF4500

</style>