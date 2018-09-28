<!-- Vue Created by Administrator on 2018/9/25. -->
<template>
  <div class="warpper" v-if="show">
    <swiper :options="swiperOption" v-if="show">
      <!--slides-->
      <swiper-slide v-for="item in list" :key="item.id">
        <img class="swiper-img" :src="item.src">
      </swiper-slide>
      <!--Optional controls-->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    props:['list'],
    data: function () {
      return {
        swiperOption: {
          pagination:'.swiper-pagination',//添加圆点
          loop:true //循环
        }
      };
    },
    computed:{
      show:function () {
        return this.list.length;
      }
    }
  }

  /**
   var list = [];
   $('#img-slider .mpw-swipe-item').forEach(function (li, index) {
      list.push({
        id: '10'+ index,
        title:$(li).find('img').attr('alt'),
        src:$(li).find('img').attr('src'),
      });
  });
   console.log(JSON.stringify(list));
   */
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /** >>> 穿透设置 **/
  .warpper >>> .swiper-pagination-bullet-active
    background: #FFF
  .warpper
    overflow: hidden
    width: 100%
    height: 0
    background: #CECECE
    padding-bottom: 25.57% /*高占宽的百分比*/
    .swiper-img
      width: 100%
</style>
