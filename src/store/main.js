var Vue = require('vue');
var Vuex = require('vuex');

Vue.use(Vuex);

module.exports = new Vuex.Store({
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
