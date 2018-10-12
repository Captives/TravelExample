<template>
  <div class="fill">
    <div class="content">
      <banner></banner>

    </div>
    <navigator-bar>
      <action-button slot="back" class="iconfont" to="/">
        &#xe624;
      </action-button>
      <span slot="title">详情页</span>
    </navigator-bar>
  </div>
</template>

<script>
    import Banner from './Banner'
    export default {
        name: 'Detail',
        components: {
          Banner
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .nav
    position absolute
    top 0
    z-index 3
    width 100%
  .content
    top:0

</style>
