import Loading from './common/Loading.vue'
import Footer from './common/Footer.vue'
import ActionButton from './common/ActionButton.vue'
import NavigatorBar from './common/NavigatorBar.vue'

//全局组件注册
export default {
  install(Vue){
    Vue.component('Loading', Loading);
    Vue.component('Footer', Footer);
    Vue.component('ActionButton', ActionButton);
    Vue.component('NavigatorBar', NavigatorBar);
  }
}
