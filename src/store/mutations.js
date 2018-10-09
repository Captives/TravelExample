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
  SOCKET_CONNECT: (state, status) => {
    console.log('socket connected', state);
    state.connect = true;
  },
  SOCKET_DISCONNECT: (state, status) => {
    console.log('socket disconnect', status);
    state.connect = false;
  },
  SOCKET_SUCCESS: (state, data) => {
    state.message = data[0];
    console.log('SUCCESS', state.message);
  },
  SOCKET_INDEX: (state, data) => {
    state.list = data[0];
    console.log('SOCKET_INDEX', state.list);
  }
}
