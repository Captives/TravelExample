<template>
  <div class="header">
    <div class="thead">
      <div class="button back">
        <slot name="back"></slot>
      </div>
      <div class="title">
        <slot name="title"></slot>
      </div>
      <div class="button action">
        <slot name="action"></slot>
      </div>
    </div>
    <div class="tbody">
      <!--标题的扩展部分-->
      <slot name="extend"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavigatorPanel',
    methods: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~@style/varibles.styl"
  @import "~@style/mixins.styl"
  .header
    color: #FFF
    background: $bg_color
    min-height: .66rem
    line-height: .66rem
    padding: .1rem
    .thead
      display: flex
      height: .66rem
      line-height: .66rem
      .button
        min-width: 0.5rem
        max-width: 1.5rem
        ellipsis()
      .title
        flex 1
    .tbody
      width 100%
      display: flex
      min-height 0
      span
        height 2rem
</style>
