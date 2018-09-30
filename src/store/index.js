import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex);

export default new Vuex.Store({
  state:state,
  actions:{
    changeCityAction(ctx, item){
      ctx.commit('changeCity', item);
    }
  },
  mutations: mutations
});
