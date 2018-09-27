<!-- Vue Created by Administrator on 2018/9/27. -->
<template>
  <div class="warpper">
    <div class="title">本周热门榜单</div>
    <ul>
      <li class="item" v-for="item in list" :key="item.id">
        <div class="item-img-warpper">
          <img class="item-img" :src="item.src" :alt="item.desc"/>
        </div>
        <div class="item-info">
          <p class="icon-title">{{item.title}}</p>
          <p class="icon-price"><span>￥{{item.price}}</span>起</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: 'HomeHotlist',
        data:function () {
          return {
            list: [{
              "id": "100",
              "title": "杭州飞来峰",
              "price": "45",
              "src": "http://img1.qunarzz.com/sight/p0/1603/57/57ee153a3441d35190.water.jpg_150x150_75528c36.jpg"
            }, {
              "id": "101",
              "title": "灵隐寺",
              "price": "45",
              "src": "http://img1.qunarzz.com/sight/p0/1703/e3/e3d2c4a62fdc54aaa3.img.jpg_150x150_008f8351.jpg"
            }, {
              "id": "102",
              "title": "西溪国家湿地公园",
              "price": "138",
              "src": "http://img1.qunarzz.com/wugc/p3/201206/02/45e5e7cf0c1ee5b393835fbb.jpg_150x150_88243f06.jpg"
            }, {
              "id": "103",
              "title": "杭州宋城景区",
              "price": "0.1",
              "src": "http://img1.qunarzz.com/sight/p0/1809/20/200086313333516ba3.water.jpg_150x150_b683fd3a.jpg"
            }, {
              "id": "104",
              "title": "千岛湖",
              "price": "23",
              "src": "http://img1.qunarzz.com/sight/p0/201405/27/8211cadd5d9fefeaa044c5b7eefc695d.jpg_150x150_184fbe07.jpg"
            }, {
              "id": "105",
              "title": "杭州野生动物世界",
              "price": "170",
              "src": "http://img1.qunarzz.com/sight/p0/1603/ae/aecef86d7655873f90.water.jpg_150x150_da975344.jpg"
            }, {
              "id": "106",
              "title": "宋城千古情",
              "price": "99",
              "src": "http://img1.qunarzz.com/sight/p0/1809/20/200086313333516ba3.water.jpg_150x150_b683fd3a.jpg"
            }, {
              "id": "107",
              "title": "“最忆是杭州”- G20峰会特别版《印象西湖》",
              "price": "340",
              "src": "http://img1.qunarzz.com/sight/p0/1709/28/288fbeccc335f774a3.img.jpg_150x150_1df64606.jpg"
            }, {
              "id": "108",
              "title": "梅峰岛",
              "price": "195",
              "src": "http://img1.qunarzz.com/sight/p0/1604/e3/e31e236ddd71e31b90.water.jpg_150x150_71b7f2f3.jpg"
            }, {
              "id": "109",
              "title": "杭州动物园",
              "price": "20",
              "src": "http://img1.qunarzz.com/sight/p0/1505/95/95db58d0da425616.water.jpg_150x150_dadd2877.jpg"
            }]
          };
        }
    }
/**
var list = [];
$('.mp-hotsale-list li').forEach(function (li, index) {
   list.push({
      id: '10'+ index,
      title:$(li).find('.mp-hotsale-sight').text(),
      price:$(li).find('.mpg-price-num').text(),
      src:$(li).find('.mp-hotsale-imgcon img').attr('src'),
  });
});
console.log(JSON.stringify(list));
*/
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '~@style/mixins.styl'
  .warpper
    .title
      line-height .8rem
      background #EEEEEE
      text-indent .2rem
    ul
      padding: 0 .24rem;
      overflow-x: scroll;
      white-space: nowrap;
      li
        position: relative;
        display: inline-block;
        padding: .06rem 0 .2rem;
        width: 2rem;
        margin-left: .12rem;
        .item-img-warpper
          overflow: hidden;
          width: 2rem;
          height: 0;
          padding-bottom: 100%;
          img
            width 100%
        .item-info
          .icon-title
            margin-top: .12rem;
            color: #212121;
            font-size: .24rem;
            line-height: .32rem;
            text-align: center;
            ellipsis()
          .icon-price
            color: #616161;
            font-size: .24rem;
            line-height: .36rem;
            text-align: center;
            span
              color #FF8300
</style>
