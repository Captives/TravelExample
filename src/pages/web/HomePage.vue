<!-- Vue Created by Administrator on 2018/11/13. -->
<template>
    <div class="wrapper">
      <el-container>
        <el-header> 你好{{userInfo.userName}}, 欢迎来到{{userInfo.name}} || {{userInfo.uuid}}</el-header>
        <el-container>
          <el-container>
            <el-main>
              <ul>
                <li v-for="(item, index) in list" :key="index">{{item}}</li>
              </ul>
            </el-main>
            <el-footer>
              <el-input placeholder="请输入内容" v-model="input5"
                        @change="textChangeHandler"
                        class="input-with-select">

                <el-select v-model="select" slot="prepend"
                           @change="textSelectHandler"
                           placeholder="请选择">

                  <el-option label="所有人" value=""></el-option>
                  <el-option v-for="item in users" :label="item.userName" :value="item.uuid" :key="item.uuid"></el-option>
                </el-select>

                <el-button slot="append" icon="el-icon-message" @click="textSendHandler">发送</el-button>
              </el-input>
            </el-footer>
          </el-container>

          <el-aside width="300px">
            <ul>
              <li v-for="item in users" :label="item.userName" :value="item.uuid" :key="item.uuid">
                <el-button icon="el-icon-message" @click="sendToUser(item)">{{item.userName}}</el-button>
              </li>
            </ul>
          </el-aside>
        </el-container>
      </el-container>
    </div>
</template>

<script>
    export default {
        name: 'HomePage',
        props:['user', 'list'],
        data(){
          return {
            chatList:[],
            input5: '',
            select: '',
            userList: []
          };
        },
        computed:{
          users(){
            console.log(JSON.stringify(this.list), this.userList);
            return this.list.concat(this.userList);
          },
          userInfo(){
            return this.user || {region:{}};
          }
        },
      mounted(){
        var that = this;
        this.$socket.on('userEntry', function(data){
          that.userList.push({uuid: data.uuid, userName: data.userName, name: data.name});
        });
        this.$socket.on('userLeave', function(data){
          for(var i=0; i< that.userList.length; i++){
            if(that.userList[i].value === data.id){
              that.userList.splice(i, 1);
            }
          }
          console.log('userLeave', data);
        });
      },
      methods:{
        textChangeHandler(text){
          console.log('输入中....', text);
        },
        textSendHandler(text){
          this.chatList.push(this.select + '' + this.input5);
          this.input5 = '';
        },
        textSelectHandler(text){
          console.log('textSelectHandler', text);
        },
        sendToUser(item){
          this.select = item.uuid;
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside
    color: #333;
    background-color: #D3DCE6;


  .el-main
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    overflow-y auto
    overflow-x hidden

  body .el-container {
    position: relative;
    width 100%
    height 100%
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .el-footer
    .el-select
    .el-input
      text-align center
      width: 120px;
    .input-with-select
      width 100%
  ul
    margin 0
    padding: 0 15px;
    li
      list-style none
      text-align left
      .el-button
        width 100%
        text-align left
        background none
        padding 10px
        border none
</style>
