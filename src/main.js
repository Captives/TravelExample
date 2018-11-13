// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './VideoMetting'
import router from './router/main'
import store from './store/main'

//引用外部ui组件
import ui from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ui);

//页面的全局组件
import pages from './pages/main'
Vue.use(pages);

//Socket.io消息通讯
import VueSocketio from 'vue-socket.io'
import socketio from 'socket.io-client'
Vue.use(VueSocketio, socketio('ws://' + window.location.hostname + ':3000', {transports: ['websocket'], path:'/cluster'}), store);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
