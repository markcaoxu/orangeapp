<template>

  <div id="app">

    <!-- 路由匹配到的组件将显示在这里  <router-view></router-view> -->
    <router-view></router-view>

    <div class="footer">
      <!-- 公共组件  携带判断 -->
      <FooterGuide v-show="$route.meta.isShowFooter" />
    </div>

  </div>

</template>

<script>
// 公共组件FooterGuide
import FooterGuide from "./components/FooterGuide/FooterGuide.vue";

export default {
  name: "app",
  components: {
    // 注册组件
    FooterGuide
  }
};
</script>

<style lang='stylus' rel='stylesheet/stylus'>
#app
	height 100%
	width 100%
	overflow hidden
</style>