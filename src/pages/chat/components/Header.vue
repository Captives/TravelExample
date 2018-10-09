<!-- Vue Created by Administrator on 2018/9/28. -->
<template>
  <div class="wrapper">
    <router-link to="/">
      <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
      </div>
    </router-link>
    <div class="header-input">
      聊 天
    </div>
    <div class="header-right" @click="clearHandler">
      清屏
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    methods: {
      clearHandler(){
        this.$emit('clear');
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~@style/varibles.styl"
  .wrapper
    display: flex
    height: .86rem
    background: $bg_color
    color: #FFF
    .header-left
      width: .64rem
      float: left
      color: #FFF
      .back-icon
        padding-top: 0.25rem
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      padding-right: .64rem;
      text-align: center
    .header-right
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      min-width: 1rem
      color: #FFF
      text-align center
</style>
