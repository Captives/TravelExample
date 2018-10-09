<!-- Vue Created by Administrator on 2018/9/21. -->
<template>
  <div>
    <home-header :city="city"></home-header>

    <loading v-show="!complated"></loading>

    <home-swiper :dataprovider="swiperlist" v-show="complated"></home-swiper>
    <home-icons :dataprovider="iconlist" v-show="complated"></home-icons>
    <home-hotlist :dataprovider="hotlist" v-show="complated"></home-hotlist>
    <home-recommend :dataprovider="likelist" v-show="complated"></home-recommend>
    <home-weekend :dataprovider="weeklist" v-show="complated"></home-weekend>

    <h-footer class="footer" v-show="complated">版权底部</h-footer>
  </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'
  import HomeRecommend from './components/Recommend'
  import HomeWeekend from './components/Weekend'
  import HomeHotlist from './components/Hotlist'
  import HFooter from '../common/Footer'
  import Loading from '../common/Loading'

  import axios from 'axios'
  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend,
      HomeHotlist,
      HFooter, Loading
    },
    data: function () {
      return {
        city:{},
        complated: false,
        likelist: [],
        iconlist: [],
        hotlist: [],
        weeklist: [],
        swiperlist: [],
      }
    },
    computed:{
      list(){
        return this.$store.state.list || [];
      }
    },
    watch:{
      list(data){
          this.complated = true;
          this.likelist = data['likelist'];
          this.iconlist = data['iconlist'];
          this.hotlist = data['hotlist'];
          this.weeklist = data['weeklist'];
          this.swiperlist = data['swiperlist'];
      }
    },
    methods: {
      getHomeInfo: function () {
        axios.get('static/data/index.json?city=' + this.$store.state.city.name).then(this.homeInfo);
      },
      homeInfo: function (res) {
        if (res.status == 200) {
          this.likelist = res.data.likelist;
          this.iconlist = res.data.iconlist;
          this.hotlist = res.data.hotlist;
          this.weeklist = res.data.weeklist;
          this.swiperlist = res.data.swiperlist;
          this.complated = true;
        }
      }
    },
    mounted () {
      this.city = this.$store.state.city;
      this.getHomeInfo();
    },
    activated(){
      if(this.city !== this.$store.state.city){
        this.city = this.$store.state.city;
          this.getHomeInfo();
      }
    }
  }
</script>
