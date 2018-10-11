<template>
    <div>
      <banner></banner>
      <navigator-bar class="nav">
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
        },
        methods: {}
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .nav
    position absolute
    top 0
    z-index 5
    width 100%
</style>
