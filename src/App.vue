<template>
  <div id="app" class="wrapper">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '~@style/varibles.styl'
  .wrapper
    position: absolute;
    width 100%
    height 100%
    padding 0
    margin 0
  #app
    background $them_bg_color
</style>
