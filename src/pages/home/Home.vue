<!-- Vue Created by Administrator on 2018/9/21. -->
<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-hotlist></home-hotlist>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
  import HomeHeader from './components/HomeHeader'
  import HomeSwiper from './components/HomeSwiper'
  import HomeIcons from './components/HomeIcons'
  import HomeRecommend from './components/HomeRecommend'
  import HomeWeekend from './components/HomeWeekend'
  import HomeHotlist from './components/HomeHotlist'
  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend,
      HomeHotlist
    }
  }
</script>

<style>

</style>
