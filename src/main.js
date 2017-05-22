// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
/**
 * 异步请求都放在actions里面
 */


Vue.use(Vuex)
const userModel={
  state:{},
  getters:{},
  mutations:{},
  actions:{}
}
let store = new Vuex.Store({
  state: {
    count: 0,
    totalPrice: 0
  },
  getters:{
    getTotal (state) {
      return state.totalPrice
    }
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
    addPrice: (state, price) => state.totalPrice += price,
    reducePrice: (state, price) => state.totalPrice -= price
  },
  actions: {
    add:(context,price) => context.commit('addPrice',price)
  },
  modules:{
    userModel
  }
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
