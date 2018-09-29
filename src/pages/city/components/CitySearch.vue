<!-- Vue Created by Administrator on 2018/9/29. -->
<template>
  <div class="warpper">
    <div class="search">
      <input type="text" class="search-input"
             v-model="keyword"
             v-on:input="inputChange"
             placeholder="输入城市或拼音">
    </div>

    <div class="search-content" ref="warpper">
      <div class="item-list">
        <div class="item border-rightbottom"
             v-for="item in result"
             :key="item.id">
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BetterScroll from 'better-scroll'
  export default {
    name: 'CitySearch',
    props: {
      list: Object
    },
    data(){
      return {
        keyword: '',
        result: []
      };
    },
    methods: {
      inputChange(event){
        var that = this;
        this.keyword = event.target.value;
        if(this.keyword){
          var list = [];
          for (let label in this.list) {
            this.list[label].forEach(function (item) {
              if(item['spell'].indexOf(that.keyword) > -1 || item['name'].indexOf(that.keyword) > -1){
                list.push(item);
              }
            });
          }
          this.result = list;
        }else{
          this.result = [];
        }
      }
    },
    mounted:function () {
      this.scroll = new BetterScroll(this.$refs.warpper);
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~@style/varibles.styl"
  .warpper
    background yellow
    .search
      height .72rem
      background $bg_color
      padding 0 .1rem
      .search-input
        width 100%
        height .62rem
        color #616161
        padding 0 .1rem
        box-sizing border-box
        line-height .62rem
        text-align center
        border-radius .06rem
    .search-content
      background #FFF
      top 1.58rem
      right 0
      bottom 0
      left 0
      position absolute
      z-index 1
      overflow hidden
      .item-list
        padding .1rem
        overflow hidden
        .item
          float left
          width 33.33%
          span
            display block
            line-height .76rem
            padding-left .2rem
            color #666
</style>
