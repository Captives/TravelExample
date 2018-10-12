<template>
  <div id="app" class="wrapper">
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
