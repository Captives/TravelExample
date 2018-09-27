<!-- Vue Created by Administrator on 2018/9/26. -->
<template>
  <div class="warpper">
    <div class="title">猜你喜欢</div>
    <ul>
      <li class="item" v-for="item in list" :key="item.id">
          <div class="item-img-warpper">
            <img class="item-img" :src="item.src" :alt="item.desc"/>
          </div>
          <div class="item-info">
            <p class="icon-title">{{item.title}}</p>
            <p class="icon-desc">{{item.desc}}</p>
            <p class="icon-price">
              <span class="price">￥<em>{{item.price}}</em></span>起
              <span class="address">{{item.address}}</span>
            </p>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeRecommend',
    data: function () {
      return {
        list: [{
          "id": "100",
          "title": "杭州云曼温泉",
          "price": "128",
          "desc": "963条评论",
          "src": "http://img1.qunarzz.com/sight/p0/201401/06/3fbbddda915cb7637439d484440d36be.jpg_200x200_a54e87dd.jpg",
          "address": "萧山区"
        }, {
          "id": "101",
          "title": "杭州极地海洋世界",
          "price": "675",
          "desc": "1068条评论",
          "src": "http://img1.qunarzz.com/sight/p0/1508/12/4e6170303c63bdb7070fb1987480afab.water.jpg_200x200_0775a71c.jpg",
          "address": "萧山区"
        }, {
          "id": "102",
          "title": "千岛湖九龙溪漂流",
          "price": "70",
          "desc": "879条评论",
          "src": "http://img1.qunarzz.com/sight/p0/1808/d6/d6c567a31d0a5462a3.img.jpg_200x200_fe329041.jpg",
          "address": "千岛湖"
        }, {
          "id": "103",
          "title": "杭州野生动物世界",
          "price": "170",
          "desc": "5697条评论",
          "src": "http://img1.qunarzz.com/sight/p0/1603/ae/aecef86d7655873f90.water.jpg_200x200_22a0790e.jpg",
          "address": "富阳市"
        }, {
          "id": "104",
          "title": "杭州海底世界",
          "price": "115",
          "desc": "3093条评论",
          "src": "http://img1.qunarzz.com/sight/p0/201212/18/f195032e85740a4b93835fbb.jpg_200x200_77761d11.jpg",
          "address": "西湖区"
        }, {
          "id": "105",
          "title": "“最忆是杭州”- G20峰会特别版《印象西湖》",
          "price": "340",
          "desc": "4063条评论",
          "src": "http://img1.qunarzz.com/sight/p0/1709/28/288fbeccc335f774a3.img.jpg_200x200_4a81bde9.jpg",
          "address": "西湖"
        }, {
          "id": "106",
          "title": "大明山",
          "price": "90.6",
          "desc": "3196条评论",
          "src": "http://img1.qunarzz.com/sight/p0/1603/18/18ae748f826c5abe90.water.jpg_200x200_67503119.jpg",
          "address": "临安市"
        }, {
          "id": "107",
          "title": "杭州乐园",
          "price": "120",
          "desc": "5330条评论",
          "src": "http://img1.qunarzz.com/sight/p0/1809/6b/6b0d71ae741a583da3.img.jpg_200x200_dc19cbb1.jpg",
          "address": "萧山区"
        }, {
          "id": "108",
          "title": "杭州彻天彻地童玩中心",
          "price": "46",
          "desc": "264条评论",
          "src": "http://img1.qunarzz.com/sight/p0/1503/cf/cf48ed13186e39db.water.jpg_200x200_2706db68.jpg",
          "address": "余杭区"
        }, {
          "id": "109",
          "title": "千岛湖天迹热气球",
          "price": "255",
          "desc": "141条评论",
          "src": "http://img1.qunarzz.com/sight/p0/1603/c5/c5e2b211d10d4bb90.img.jpg_200x200_2a971b62.jpg",
          "address": "千岛湖"
        }, {
          "id": "1010",
          "title": "杭州江和美海洋公园",
          "price": "85",
          "desc": "263条评论",
          "src": "http://img1.qunarzz.com/sight/p0/1705/ed/ed3fe7a5e8616aeda3.img.jpg_200x200_4794c1a7.jpg",
          "address": "杭州"
        }, {
          "id": "1011",
          "title": "千岛湖",
          "price": "23",
          "desc": "7513条评论",
          "src": "http://img1.qunarzz.com/sight/p0/201405/27/8211cadd5d9fefeaa044c5b7eefc695d.jpg_200x200_38791bd1.jpg",
          "address": "淳安县"
        }, {
          "id": "1012",
          "title": "太湖源",
          "price": "55",
          "desc": "1145条评论",
          "src": "http://img1.qunarzz.com/sight/p0/1505/20/20403cbc90539b3c.water.jpg_200x200_763304fd.jpg",
          "address": "临安市"
        }, {
          "id": "1013",
          "title": "杭州动物园",
          "price": "20",
          "desc": "4122条评论",
          "src": "http://img1.qunarzz.com/sight/p0/1505/95/95db58d0da425616.water.jpg_200x200_631da622.jpg",
          "address": "西湖区"
        }, {
          "id": "1014",
          "title": "杭州国际博览中心（G20峰会体验馆）",
          "price": "88",
          "desc": "1056条评论",
          "src": "http://img1.qunarzz.com/sight/p0/1705/71/71815dd0ca83158aa3.water.jpg_200x200_7848a0a4.jpg",
          "address": "萧山区"
        }, {
          "id": "1015",
          "title": "瑶琳仙境",
          "price": "108.6",
          "desc": "1945条评论",
          "src": "http://img1.qunarzz.com/sight/p0/1603/33/337b483a8f5e76fb90.water.jpg_200x200_8f62ff4e.jpg",
          "address": "桐庐县"
        }, {
          "id": "1016",
          "title": "龙井峡漂流",
          "price": "160",
          "desc": "860条评论",
          "src": "http://img1.qunarzz.com/sight/p0/201301/16/5e3b1c2e19e8d4c693835fbb.jpg_200x200_93a8fd7f.jpg",
          "address": "大龙湾景..."
        }, {
          "id": "1017",
          "title": "西溪国家湿地公园",
          "price": "138",
          "desc": "13981条评论",
          "src": "http://img1.qunarzz.com/wugc/p3/201206/02/45e5e7cf0c1ee5b393835fbb.jpg_200x200_9c6e5b18.jpg",
          "address": "西湖区"
        }, {
          "id": "1018",
          "title": "杭州飞来峰",
          "price": "45",
          "desc": "9906条评论",
          "src": "http://img1.qunarzz.com/sight/p0/1603/57/57ee153a3441d35190.water.jpg_200x200_6626a45a.jpg",
          "address": "西湖"
        }, {
          "id": "1019",
          "title": "浙西大峡谷",
          "price": "122",
          "desc": "1628条评论",
          "src": "http://img1.qunarzz.com/sight/p0/1603/ef/ef59eec58fbf55d90.water.jpg_200x200_4733b471.jpg",
          "address": "临安市"
        }, {
          "id": "1020",
          "title": "杭州烂苹果乐园",
          "price": "140",
          "desc": "6452条评论",
          "src": "http://img1.qunarzz.com/sight/p0/1801/c9/c982eac885a4a1cfa3.img.jpg_200x200_b66574f9.jpg",
          "address": "萧山区"
        }, {
          "id": "1021",
          "title": "钱塘江夜游",
          "price": "90",
          "desc": "567条评论",
          "src": "http://img1.qunarzz.com/sight/p0/1603/38/38530bbf8ed47e490.water.jpg_200x200_b1556ec5.jpg",
          "address": "京杭大运..."
        }, {
          "id": "1022",
          "title": "千岛湖森林氧吧",
          "price": "40",
          "desc": "1913条评论",
          "src": "http://img1.qunarzz.com/sight/p0/201406/24/e2a5766e6e81793b2b518a7a08812a4a.jpg_200x200_66ce1370.jpg",
          "address": "千岛湖"
        }, {
          "id": "1023",
          "title": "海皇星生态园",
          "price": "23",
          "desc": "116条评论",
          "src": "http://img1.qunarzz.com/sight/p0/1506/a9/a91e8ad3cf63e8.water.jpg_200x200_ee949949.jpg",
          "address": "西湖区"
        }, {
          "id": "1024",
          "title": "西湖三潭印月游船",
          "price": "35",
          "desc": "2155条评论",
          "src": "http://img1.qunarzz.com/sight/p0/1511/d6/d6d55bf102b033ce90.water.jpg_200x200_af599d98.jpg",
          "address": "西湖"
        }]
      };
    }
  }

/*
    var list = [];
    $('.mp-like-list li').forEach(function (li, index) {
      list.push({
        id: '10'+ index,
        title:$(li).find('.mp-like-title').text(),
        price:$(li).find('.mpg-price-num').text(),
        desc:$(li).find('.mp-comment-num').text(),
        src:$(li).find('.mp-like-img').attr('src'),
        address:$(li).find('.mp-like-address').text(),
      });
    });
    console.log(JSON.stringify(list));
*/
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '~@style/varibles.styl'
  @import '~@style/mixins.styl'

  .warpper
    .title
      line-height .8rem
      background #EEEEEE
      text-indent .2rem
    ul
      padding-left .24rem
    li.item
      overflow hidden
      display flex
      height 2rem
      padding .2rem 0
      .item-img
        width 2rem
        height 2rem
      .item-info
        overflow hidden
        padding-left .22rem
        width 100%
        .icon-title
          margin-top .26rem
          height .44rem
          line-height .44rem
          color #212121
          font-size .32rem
          ellipsis()
        .icon-desc
          margin-top .14rem
          height .34rem
          font-size .24rem
        .icon-price
          position relative
          margin-top .22rem
          font-size .24rem
          line-height .4rem
          span.price
            color #FF8300
            em
              font-size .4rem
              padding 0 .07rem 0 0
          .address
            position absolute
            right 0.24rem
            bottom 0
            color #616161
            font-size .24rem
</style>
