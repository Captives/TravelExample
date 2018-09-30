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
  mutations: mutations,
  getters:{ //getter方法集合,类似vue的computed计算方法

  }
});
