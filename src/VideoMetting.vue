<template>
  <div class="wrapper">
    <span class="srvinfo" v-if="!this.$store.state.connect">
      请先连接服务器 {{show ? 'true' : 'false'}}- {{this.$store.state.connect}}
    </span>
    <router-view v-if="this.$store.state.connect"
                 v-show="login" :user="user" :list="list"/>
    <login v-if="this.$store.state.connect" v-show="!login" @login="loginHandler"></login>
  </div>
</template>

<script>
  import LoginPage from './pages/web/LoginPage.vue'
  export default {
    name: 'VideoMetting',
    data(){
      return {
        login: false,
        user:{},
        list:[]
      }
    },
    components: {
      login: LoginPage
    },
    computed:{
      show(){
        return this.$store.state.connect;
      }
    },
    methods:{
      loginHandler(name, data){
        var that = this;
        this.$socket.on('connected', function (data) {
          this.user = data;
        });

        this.$socket.on('success', function(data){
          that.login = true;
          that.list = data;
        });

        console.log(name, data);
        this.$socket.emit('join', name, data);
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  html, body, .wrapper
    width 100%
    height 100%
    margin 0
    padding 0
    position  absolute

  .srvinfo
    text-align center
</style>
