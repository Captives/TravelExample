<!-- Vue Created by Administrator on 2018/9/29. -->
<template>
  <div class="list" ref="warpper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button" @click="clickHanlder"><span>杭州</span></div>
        </div>
      </div>

      <div class="area" v-if="historyShow" ref="历">
        <div class="title border-topbottom">历史城市</div>
        <div class="button-list">
          <div class="button"
               @click="clickHanlder"
               v-for="item in historylist"
               :key="item.id"><span>{{item.name}}</span>
          </div>
        </div>
      </div>

      <div class="area" v-if="hotShow" ref="热">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button"
               @click="clickHanlder"
               v-for="item in hotlist"
               :key="item.id"><span>{{item.name}}</span>
          </div>
        </div>
      </div>

      <div class="area" v-for="(item, key) of list" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-rightbottom"
               @click="clickHanlder"
               v-for="addr of item"
               :key="addr.id">
            <span>{{addr.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BetterScroll from 'better-scroll'
  export default {
    name: 'CityList',
    props: {
      list:Object,
      hotlist:Array,
      historylist:Array,
      selecteValue:String
    },
    computed:{
      historyShow:function (e) {
        var list = this.historylist || [];
        return list.length;
      },
      hotShow:function () {
        var list = this.hotlist || [];
        return list.length;
      }
    },
    methods: {
      clickHanlder(e){
        console.log(e.target);
      }
    },
    watch:{
      selecteValue:function () {
        if(this.selecteValue){
          var $dom = this.$refs[this.selecteValue];
          const element = $dom[0] ? $dom[0] :$dom;
          this.scroll.scrollToElement(element);
        }
      }
    },
    mounted:function () {
      this.scroll = new BetterScroll(this.$refs.warpper);
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .border-topbottom
    &:before
      border-color #CCC
    &:after
      border-color #CCC

  .border-rightbottom
    &:before
      border-color #CCC

  .list
    user-select none
    overflow hidden
    position absolute
    top 1.58rem
    right 0
    bottom 0
    left 0
    .title
      height .64rem
      line-height .64rem
      background #EEEEEE
      text-indent .2rem
      color #666
      font-size .26rem
    .button-list
      padding .1rem
      overflow hidden
      .button
        float left
        width 33.33%
        span
          display block
          margin .1rem
          padding .1rem 0
          text-align center
          border-radius .06rem
          border .02rem solid #CCC
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
