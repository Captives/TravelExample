// const Vue = require('vue');
// const vuex = require('vuex');
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    city:{
      "id": 125,
      "spell": "guilin",
      "name": "桂林"
    }
  },
  actions:{
    changeCityAction(ctx, item){
      ctx.commit('changeCity', item);
    }
  },
  mutations:{
    changeCity(state, item){
      state.city = item;
    }
  }
});
