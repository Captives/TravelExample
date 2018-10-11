import Loading from './common/Loading.vue'
import Footer from './common/Footer.vue'
import BaseButton from './common/BaseButton.vue'
import ActionButton from './common/ActionButton.vue'
import NavigatorBar from './common/NavigatorBar.vue'

//全局组件注册
export default {
  install(Vue){
    Vue.component('Loading', Loading);
    Vue.component('HFooter', Footer);
    Vue.component('BaseButton', BaseButton);
    Vue.component('ActionButton', ActionButton);
    Vue.component('NavigatorBar', NavigatorBar);
  }
}
