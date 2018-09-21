<!-- Vue Created by Administrator on 2018/9/21. -->
<template>
  <div class="header">
    <div class="header-left">左</div>
    <div class="header-input">中</div>
    <div class="header-right">右</div>
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
    background: red
    .header-left
      width: .64rem
      float: left
      background: green
    .header-input
      flex: 1
    .header-right
      width: 1.24rem
      float: right
      background: yellow
</style>
