<!-- Vue Created by Administrator on 2018/9/25. -->
<template>
  <div class="warpper">
    <swiper :options="swiperOption">
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
    data: function () {
      return {
        swiperOption: {
          pagination:'.swiper-pagination',//添加圆点
          loop:true //循环
        },
        list:[
          {id:1001, src:"http://img1.qunarzz.com/piao/fusion/1809/b8/16b0e9c77a76e102.jpg_750x200_4863de12.jpg"},
          {id:1002, src:"http://img1.qunarzz.com/piao/fusion/1809/dc/61caf680f5ddbc02.jpg_750x200_c619ed45.jpg"},
          {id:1003, src:"http://img1.qunarzz.com/piao/fusion/1809/83/a77595fb02eed602.jpg_750x200_1627b072.jpg"},
          {id:1004, src:"http://img1.qunarzz.com/piao/fusion/1809/6a/847ac7b98f10e202.jpg_750x200_f0593cb5.jpg"},
          {id:1005, src:"http://img1.qunarzz.com/piao/fusion/1712/51/36632b2cb850e902.jpg_750x200_fa4120db.jpg"},
          {id:1006, src:"http://img1.qunarzz.com/piao/fusion/1807/78/0a6355bcbbf89502.jpg_750x200_fc738633.jpg"}
        ]
      };
    }
  }
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
