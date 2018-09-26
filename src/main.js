// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'
import router from './router'
import '@style/reset.css'
import '@style/border.css'
import '@style/iconfont.css'

//轮播图组件
import swiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false;
fastclick.attach(document.body);

Vue.use(swiper);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  // components: {App},
  // template: '<App/>'
});
