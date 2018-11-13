<!-- Vue Created by Administrator on 2018/11/13. -->
<template>
    <div class="wrapper">
      <el-container>
        <el-header>hi {{userInfo.name}}, 欢迎来到{{userInfo.region.label}}聊天室</el-header>
        <el-container>
          <el-container>
            <el-main>
              <ul>
                <li v-for="(item,index) in list" :key="index">{{item}}</li>
              </ul>
            </el-main>
            <el-footer>
              <el-input placeholder="请输入内容" v-model="input5"
                        @change="textChangeHandler"
                        class="input-with-select">
                <el-select v-model="select" slot="prepend"
                           @change="textSelectHandler"
                           placeholder="请选择">
                  <el-option label="所有人" value="1"></el-option>
                  <el-option label="角色1" value="2"></el-option>
                  <el-option label="角色2" value="3"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-message" @click="textSendHandler">发送</el-button>
              </el-input>
            </el-footer>
          </el-container>
          <el-aside width="300px">{{userInfo.id}}</el-aside>
        </el-container>
      </el-container>
    </div>
</template>

<script>
    export default {
        name: 'HomePage',
        props:['user'],
        data(){
          return {
            list:[],
            input5: '',
            select:'',
          };
        },
        computed:{
          userInfo(){
            return this.user || {region:{}};
          }
        },
      methods:{
        textChangeHandler(text){
          console.log('输入中....', text);
        },
        textSendHandler(text){
          this.list.push(text);
        },
        textSelectHandler(text){
          console.log('textSelectHandler', text);
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

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

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
</style>
