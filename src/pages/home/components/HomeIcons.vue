<!-- Vue Created by Administrator on 2018/9/26. -->
<template>
  <div class="warpper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="img" :src="item.src" :alt="item.desc"/>
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
//数据源获取
//  var list = [];
//  $('.mpw-swipe-item .mp-category-item').find('img').forEach(function (img) {
//    list.push({desc:$(img).attr('alt'), src:$(img).attr('src')});
//  });
//  console.log(list);

    export default {
        name: 'HomeIcons',
        data:function () {
          return {
            swiperOption:{},
            list:[
              {id:1001, desc:"景点门票",src:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"},
              {id:1002, desc:"一日游",src:"http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png"},
              {id:1003, desc:"杭州必游",src:"http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png"},
              {id:1004, desc:"动植物园",src:"http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png"},
              {id:1005, desc:"赏秋色",src:"http://img1.qunarzz.com/piao/fusion/1803/ea/01d081dacb03cc02.png"},
              {id:1006, desc:"西湖",src:"http://img1.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png"},
              {id:1007, desc:"宋城千古情",src:"http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png"},
              {id:1008, desc:"主题乐园",src:"http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png"},
              {id:1009, desc:"千岛湖",src:"http://img1.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png"},
              {id:1010, desc:"全部玩乐",src:"http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png"}
            ]
          };
        },
      computed:{
        pages:function () {
          var pages = [];
          this.list.forEach(function (item, index) {
              const page = Math.floor(index/8);
              if(!pages[page]){
                pages[page] = [];
              }
              pages[page].push(item);
          });
          return pages;
        }
      },
      methods:{

      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '~@style/varibles.styl'
  @import '~@style/mixins.styl'

  .warpper >>> .swiper-container
    height 0
    padding-bottom 50%
  .icon
    position relative
    float left
    width 25%
    padding-bottom  25%
    .icon-img
      position absolute
      top 0
      left 0
      right 0
      bottom .44rem
      box-sizing border-box
      padding .1rem
      .img
        display block
        margin 0 auto
        height 100%
    .icon-desc
      position: absolute;
      text-align center
      left 0
      right 0
      bottom 0
      height .44rem
      line-height .44rem
      color $dark_text_color
      ellipsis()

</style>
