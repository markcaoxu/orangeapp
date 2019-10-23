<template>
  <div>
   <SearchInput/>
   <ul class="resultList">
   <li class="resultItem"></li>
   </ul>
  </div>
</template>

<script>
//引入searchList组件
import SearchInput from '../../components/SearchInput/index'
  export default {
    name:'',
    props:[''],
    data () {
      return {
      
      };
    },

    components: {
    SearchInput
    },

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
// 引入混合
@import '../../common/stylus/mixins.styl'
.resultList
  width 100%
  height 100%
  .resultItem
    width 345px
    height 145px
    background-color pink 
</style>