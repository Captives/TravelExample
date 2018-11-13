//全局组件注册
export default {
  install(Vue){
    //全局组件
    // Vue.component('Loading', Loading);
    //全局方法
    Vue.prototype.sendMessage = function (event, data, callback) {
      if(this.$socket){
        this.$socket.emit(event, data, callback);
      }
    };
  }
}
