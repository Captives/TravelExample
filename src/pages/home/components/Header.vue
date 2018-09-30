<!-- Vue Created by Administrator on 2018/9/21. -->
<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        <span class="city">{{this.$store.state.city.name}}</span>
        <span class="iconfont city-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'HomeHeader'
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
      padding-left .2rem
      width: 1.24rem
      float: right
      color: #FFF
      .city
        float left
        max-width .7rem
        white-space nowrap
      .city-icon
        padding-left 0.1rem
        font-size .25rem
</style>
