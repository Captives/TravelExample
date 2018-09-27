<!-- Vue Created by Administrator on 2018/9/21. -->
<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperlist"></home-swiper>
    <home-icons :list="iconlist"></home-icons>
    <home-hotlist :list="hotlist"></home-hotlist>
    <home-recommend :list="likelist"></home-recommend>
    <home-weekend :list="weeklist"></home-weekend>
  </div>
</template>

<script>
  import HomeHeader from './components/HomeHeader'
  import HomeSwiper from './components/HomeSwiper'
  import HomeIcons from './components/HomeIcons'
  import HomeRecommend from './components/HomeRecommend'
  import HomeWeekend from './components/HomeWeekend'
  import HomeHotlist from './components/HomeHotlist'
  import axios from 'axios'

  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend,
      HomeHotlist
    },
    data:function () {
      return {
        city:'杭州',
        likelist:[],
        iconlist:[],
        hotlist:[],
        weeklist:[],
        swiperlist:[],
      }
    },
    methods: {
      getHomeInfo: function () {
        axios.get('api/index.json').then(this.homeInfo);
      },
      homeInfo: function (res) {
        if(res.status == 200){
          this.likelist = res.data.likelist;
          this.iconlist = res.data.iconlist;
          this.hotlist = res.data.hotlist;
          this.weeklist = res.data.weeklist;
          this.swiperlist = res.data.swiperlist;
        }
        console.log(res);
      }
    },
    mounted: function () {
      this.getHomeInfo();
    }
  }
</script>

<style>

</style>
