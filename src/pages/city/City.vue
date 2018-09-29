<!-- Vue Created by Administrator on 2018/9/28. -->
<template>
  <div>
    <city-header></city-header>
    <city-search :list="cities"></city-search>
    <city-list :hotlist="hotCities" :list="cities" :selecteValue="selecteValue"></city-list>
    <alphabet :list="alphabetList" @change="alphabetChangeHandler"></alphabet>
  </div>
</template>

<script>
    import CityHeader from './components/CityHeader'
    import CitySearch from './components/CitySearch'
    import CityList from './components/CityList'
    import Alphabet from './components/Alphabet'

    import axios from 'axios'
    export default {
        name: 'City',
        components:{
          CityHeader,
          CitySearch,
          CityList,
          Alphabet
        },
      data(){
        return {
          cities:{},
          hotCities:[],
          alphabetList:[],
          selecteValue:''
        };
      },
      mounted:function () {
        this.getCityInfo();
      },
      methods:{
        getCityInfo:function(){
          axios.get('static/data/city.json').then(this.cityInfoHandler);
        },
        cityInfoHandler:function (res) {
          res = res.data;
          if(res.ret && res.data){
            this.cities = res.data.cities;
            this.hotCities = res.data.hotCities;
            this.alphabetList = Object.keys(this.cities);
          }
        },
        alphabetChangeHandler:function (val) {
          this.selecteValue = val;
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
