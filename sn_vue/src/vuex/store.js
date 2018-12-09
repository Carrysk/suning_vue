import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1,
    product:[]
  },
  mutations: {
    increment:(state, num) =>{
      console.log(state)
      state.count += num
    }
  }
})