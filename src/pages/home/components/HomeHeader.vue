<!-- Vue Created by Administrator on 2018/9/21. -->
<template>
  <div class="header">
    <div class="header-left"></div>
    <div class="header-input">输入城市/景点/游玩主题</div>
    <div class="header-right">城市</div>
  </div>
</template>

<script>
  export default {
    name: 'HomeHeader'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header
    display: flex
    height: .86rem
    background: #00bcd4
    .header-left
      width: .64rem
      float: left
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      border-radius: .1rem
      background: #fff
      color: #CCC
    .header-right
      width: 1.24rem
      float: right
</style>
