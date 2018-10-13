<template>
  <div id="app" class="fill">
    <keep-alive>
      <router-view v-if="show"/>
    </keep-alive>
    <login v-if="!show"></login>
  </div>
</template>

<script>
  import Login from './pages/user/Login.vue'
  export default {
    name: 'App',
    components:{
      Login
    },
    computed:{
      show(){
        return this.$store.state.login;
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '~@style/varibles.styl'
  .nav
    color: #FFF
    background: $them_color
    min-height: .66rem
    line-height: .66rem
    padding: .1rem

  .fill,.content
    background $them_bg_color
    position: absolute;
    top 0
    bottom 0
    left 0
    right 0
    padding 0
    margin 0

  .content
    top 0.86rem
    overflow-x hidden
    overflow-y auto
    -webkit-overflow-scrolling:touch

  #app
    position fixed
</style>
