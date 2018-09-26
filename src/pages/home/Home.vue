<!-- Vue Created by Administrator on 2018/9/21. -->
<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <div> list </div>
  </div>
</template>

<script>
  import HomeHeader from './components/HomeHeader'
  import HomeSwiper from './components/HomeSwiper'
  import HomeIcons from './components/HomeIcons'
  export default {
    name: 'Home',
    components: {
      HomeHeader: HomeHeader,
      HomeSwiper: HomeSwiper,
      HomeIcons:HomeIcons
    }
  }
</script>

<style>

</style>
