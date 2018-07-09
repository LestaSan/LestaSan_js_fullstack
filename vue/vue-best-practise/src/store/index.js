import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
// import getters from './getters'

Vue.use(Vuex)

const state = {
  totalTime: 0,
  list: []
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
