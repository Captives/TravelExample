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
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'
  import HomeRecommend from './components/Recommend'
  import HomeWeekend from './components/Weekend'
  import HomeHotlist from './components/Hotlist'
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
        axios.get('static/data/index.json').then(this.homeInfo);
      },
      homeInfo: function (res) {
        if(res.status == 200){
          this.likelist = res.data.likelist;
          this.iconlist = res.data.iconlist;
          this.hotlist = res.data.hotlist;
          this.weeklist = res.data.weeklist;
          this.swiperlist = res.data.swiperlist;
        }
      }
    },
    mounted: function () {
      this.getHomeInfo();
    }
  }
</script>

<style>

</style>
