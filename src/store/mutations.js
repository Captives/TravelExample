export default {
  changeCity(state, item){
    state.city = item;
    try {
      if (localStorage.city) {
        localStorage.city = JSON.stringify(item);
      }
    } catch (e) {
      console.warn('Browsers disabled local storage.');
    }
  },
  broadcast(state, item){
    console.log('mutations # broadcast', item);
    // this.$socket.emit('broadcast', item);
  },//连接成功
  SOCKET_CONNECT: (state, status) => {
    console.log('socket connected', state, status);
    state.connect = true;
  },//断开
  SOCKET_DISCONNECT: (state, status) => {
    console.log('socket disconnect', status);
    state.connect = false;
  },//登入成功
  SOCKET_SUCCESS: (state, data) => {
    state.message = data[0];
    console.log('SUCCESS', state.message);
  },//首屏广告推送
  SOCKET_INDEX: (state, data) => {
    state.list = data[0];
  },//聊天消息
  SOCKET_BROADCAST: (state, data) => {
    console.log('mutations # SOCKET_BROADCAST', data[0]);
  }
}
