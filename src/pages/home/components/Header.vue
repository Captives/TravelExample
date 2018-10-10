<!-- Vue Created by Administrator on 2018/9/21. -->
<template>
  <div class="header">
    <router-link to="/chat">
      <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
      </div>
    </router-link>

    <router-link to="/about" class="header-input" tag="div">
        <span class="iconfont">&#xe632;</span>
        输入城市/景点/游玩主题
    </router-link>


    <router-link to="/city">
      <div class="header-right">
        {{city.name}}
        <span class="iconfont city-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'HomeHeader',
    props: {
      city: Object
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~@style/varibles.styl"
  @import "~@style/mixins.styl"
  .header
    display: flex
    height: .86rem
    background: $bg_color
    color: #FFF
    .header-left
      width: .64rem
      float: left
      color #FFF
      .back-icon
        padding-top: 0.25rem
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem;
      border-radius: .1rem
      background: #fff
      color: #CCC
    .header-right
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      min-width: 1.04rem
      float: right
      color: #FFF
      padding 0 .1rem
      .city-icon
        padding-left .05rem
        font-size .25rem
</style>
