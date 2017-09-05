import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  isFixedNav: false,
  isLoading: false,
  isOver: false,
  sliders: [],
  homeGoods: [],
  goods: [],
  num: 5,
  busy: false,
  homeShops: []
  // isShowSearchBar
  // isShowMask
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
