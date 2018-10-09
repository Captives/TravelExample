<template>
  <div class="wrapper">
    <chat-header class="header" @clear="clearHandler"></chat-header>
    <chat-body class="body" :list="chatList"></chat-body>
    <chat-input class="send" @change="changeHanlder"></chat-input>
  </div>
</template>

<script>
  import ChatHeader from './components/Header'
  import ChatBody from './components/ChatBody'
  import ChatInput from './components/ChatInput'

  export default {
    name: 'Chat',
    data(){
      return {
        chatList: []
      }
    },
    components: {
      ChatHeader,
      ChatBody,
      ChatInput
    },
    computed:{
      list(){
        return this.$store.state.chatList;
      }
    },
    watch:{
      list(array){
        this.chatList = array;
      }
    },
    methods: {
      changeHanlder(text){
        this.$socket.emit('broadcast', text);
      },
      clearHandler(){
        this.$store.dispatch('clearMessage');
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header
    height 0.86rem
  .body
    position absolute
    top 0.86rem
    bottom .66rem
    left 0
    right 0
  .send
    bottom 0
    left 0
    right 0
    position absolute
</style>
