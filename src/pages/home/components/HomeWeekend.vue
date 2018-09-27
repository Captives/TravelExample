<!-- Vue Created by Administrator on 2018/9/27. -->
<template>
  <div class="warpper">
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item in list" :key="item.id">
        <div class="item-img-warpper">
          <img class="item-img" :src="item.src" :alt="item.desc"/>
        </div>
        <div class="item-info">
          <p class="icon-title">{{item.title}}</p>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: 'HomeWeekend',
        data:function () {
          return {
            list: [{
              "id": "100",
              "title": "杭州必游TOP10",
              "desc": "杭州，前世今生与你有一场美丽约会",
              "src": "http://img1.qunarzz.com/sight/source/1505/4e/3e87ee62e59cdb.jpg_r_640x214_fe6cc902.jpg"
            }, {
              "id": "101",
              "title": "承载杭城的历史之地",
              "desc": "饱经沧桑的地方诉述着这座城的段段衷肠",
              "src": "http://img1.qunarzz.com/sight/source/1505/9f/7d45cc38259e0.jpg_r_640x214_156f4299.jpg"
            }, {
              "id": "102",
              "title": "杭州多样乐园",
              "desc": "这个周末终于可以陪宝贝去玩耍啦",
              "src": "http://img1.qunarzz.com/sight/source/1505/bc/83feb2e003d0dd.jpg_r_640x214_0b7269b8.jpg"
            }, {
              "id": "103",
              "title": "美仑美奂的演出",
              "desc": "一座有故事的城，天天有“戏”在上演",
              "src": "http://img1.qunarzz.com/sight/source/1505/ae/4fe23c6b6679e2.jpg_r_640x214_368a18d8.jpg"
            }, {
              "id": "104",
              "title": "杭州江南古镇",
              "desc": "古镇岂只有新叶？悠闲出游杭州古镇",
              "src": "http://img1.qunarzz.com/sight/source/1505/c1/1178c5696fcf57.jpg_r_640x214_a69542c6.jpg"
            }]
          }
        }
    }

/**
 var list = [];
 $('#weekend-trip .mp-product-item').forEach(function (li, index) {
  list.push({
    id: '10'+ index,
    title:$(li).find('.product-name').text(),
    desc:$(li).find('.product-desc').text(),
    src:$(li).find('img').attr('src'),
  });
});
 console.log(JSON.stringify(list));
 */
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .warpper
    .title
      line-height .8rem
      background #EEEEEE
      text-indent .2rem
    ul
      background #EEE
    li.item
      background #FFF
      margin-bottom: .1rem;
      img
        width 100%
    .item-info
      position: relative;
      padding: .14rem .2rem .2rem .2rem;
      .icon-title
      .icon-desc
        overflow: hidden;
        padding-right: 1.4rem;
        color: #212121;
        font-size: .28rem;
        line-height: .48rem;
        white-space: nowrap;
        text-overflow: ellipsis;
      .icon-desc
        font-size: .24rem;
        line-height: .42rem;
        color #616161
</style>
