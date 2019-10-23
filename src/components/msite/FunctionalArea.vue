<template>
  <div id='app'>
    <section class="fuction">

      <!-- 第一行两个内容 -->
      <ul class="fuction-first">

        <!-- 橙PLUS卡 -->
        <li class="fuction-item">
          <h3 class="fuction-title">{{FunctionalArea.Plus.name}}</h3>
          <p class="fuction-text">{{FunctionalArea.Plus.Discount.first}}<span
              class="fuction-red">{{FunctionalArea.Plus.Discount.second}}</span>{{FunctionalArea.Plus.Discount.third}}
          </p>
          <img class="fuction-img" :src=FunctionalArea.Plus.img alt="">
        </li>

        <!-- VIP+专区 -->
        <li class="fuction-item">
          <h3 class="fuction-title">{{FunctionalArea.VIP.name}}</h3>
          <p class="fuction-text">{{FunctionalArea.VIP.Discount.first}}<span class="fuction-red">{{FunctionalArea.VIP.Discount.second}}</span>{{FunctionalArea.VIP.Discount.third}}</p>
          <img class="fuction-img" :src=FunctionalArea.VIP.img alt="">
        </li>

      </ul>

      <!-- 第二行三个内容 -->
      <ul class="fuction-second">
        <li>
          <h3 class="fuction-title">{{FunctionalArea.Integral.name}}</h3>
          <p class="fuction-text">{{FunctionalArea.Integral.Discount.first}}<span class="fuction-red">{{FunctionalArea.Integral.Discount.second}}</span>{{FunctionalArea.Integral.Discount.third}}</p>
          <img class="fuction-img" :src=FunctionalArea.Integral.img alt="">
        </li>
        <li>
          <h3 class="fuction-title">{{FunctionalArea.Calendar.name}}</h3>
          <p class="fuction-text">{{FunctionalArea.Calendar.Discount.first}}<span class="fuction-red">{{FunctionalArea.Calendar.Discount.second}}</span>{{FunctionalArea.Calendar.Discount.third}}</p>
          <img class="fuction-img" :src=FunctionalArea.Calendar.img alt="">
        </li>
        <li>
          <h3 class="fuction-title">{{FunctionalArea.OrangeCard.name}}</h3>
          <p class="fuction-text">{{FunctionalArea.OrangeCard.Discount.first}}<span class="fuction-red">{{FunctionalArea.OrangeCard.Discount.second}}</span>{{FunctionalArea.OrangeCard.Discount.third}}</p>
          <img class="fuction-img" :src=FunctionalArea.OrangeCard.img alt="">
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
export default {
  data () {
    return {
      FunctionalArea: {
        "Plus": {
          "name": "橙PLUS卡",
          "Discount": {
            "first": "送",
            "second": "100元",
            "third": ",享V+权益"
          },
          "img": "https://image.juooo.com/group1/M00/02/D0/rAoKmV0jZBGAD_e4AAAE27hwBgs927.png"
        },
        "VIP": {
          "name": "VIP+专区",
          "Discount": {
            "first": "尊享",
            "second": "10",
            "third": "大权益"
          },
          "img": "https://image.juooo.com/group1/M00/03/79/rAoKNV0jY8iAQBUmAAAHfP7uF9k662.png"
        },
        "Integral": {
          "name": "积分商城",
          "Discount": {
            "first": "用积分,",
            "second": "0元",
            "third": "购票"
          },
          "img": "https://image.juooo.com/group1/M00/02/63/rAoKmVyul4KAN4xIAAAGqNi5vq4366.png"
        },
        "Calendar": {
          "name": "日历",
          "Discount": {
            "first": "演出信息,",
            "second": "一目了然",
            "third": ""
          },
          "img": "https://image.juooo.com/group1/M00/02/63/rAoKmVyumJuADezsAAAFQQ7pzxI319.png"
        },
        "OrangeCard": {
          "name": "欢聚橙卡",
          "Discount": {
            "first": "",
            "second": "33元",
            "third": "看演出"
          },
          "img": "https://image.juooo.com/group1/M00/03/0D/rAoKNVyumKiAfP1qAAACYTizNOw440.png"
        }
      }
    }
  }
}
</script>
<style lang='stylus'>


</style>