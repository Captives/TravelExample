<template>
  <div class="wrapper">
    <span class="srvinfo" v-if="!this.$store.state.connect">
      请先连接服务器 {{show ? 'true' : 'false'}}- {{this.$store.state.connect}}
    </span>
    <router-view v-if="this.$store.state.connect"
                 v-show="login" :user="user" :list="list"/>
    <login v-if="this.$store.state.connect"
           v-show="!login" :error="error"
           @login="loginHandler"></login>
  </div>
</template>

<script>
  import LoginPage from './pages/web/LoginPage.vue'

  export default {
    name: 'VideoMetting',
    data(){
      return {
        error:'',
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
    mounted(){
      var that = this;
      this.$socket.on('connected', function (data) {
        that.user = data;
        that.login = true;
        console.log('connected', that.user);
      });

      this.$socket.on('success', function (data) {
        that.list = data;
      });

      var localData = {
        td: localStorage.getItem("td") || null,
        token: localStorage.getItem("token") || null
      };

      //检查登录状态
      this.$axios('/chklogin', localData).then(function (res) {
        if (res.data.success) {
          that.$socket.emit('join', localData.td, localData.token);
        } else {
          that.login = false;
          that.error = res.data.info;
          console.warn('ERROR', res.data.info);
        }
      });
    },
    methods:{
      loginHandler(name, data){
        var that = this;
        this.$axios('/login',{
          td:data.id,
          name:data.name,
          userName: name
        }).then(function (res) {
          if(res.data.success){
            localStorage.setItem("td", data.id);
            localStorage.setItem("token", res.data.info);
            that.$socket.emit('join', data.id, res.data.info);
          }else{
            that.login = false;
            that.error = res.data.info;
            console.error('ERROR', res.data.info);
          }
        });
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
