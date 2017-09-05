import {
  IS_FIXED_NAV,
  IS_LOADING,
  IS_OVER,
  GET_SLIDERS,
  GET_HOME_GOODS,
  GET_HOME_SHOPS,
  // IS_SHOW_SEARCH_BAR
  // IS_SHOW_MASK
  GET_GOODS
} from './mutation-types.js'

export default {
  [IS_FIXED_NAV] (state, bool) {
    state.isFixedNav = bool
  },
  [GET_SLIDERS] (state, list) {
    state.sliders = list
  },
  [GET_HOME_GOODS] (state, list) {
    state.homeGoods = list
  },
  [IS_LOADING] (state, bool) {
    state.isLoading = bool
  },
  [IS_OVER] (state, bool) {
    state.isOver = bool
  },
  [GET_HOME_SHOPS] (state, list) {
    state.homeShops = state.homeShops.concat(list)
  },
  // IS_SHOW_SEARCH_BAR
  // IS_SHOW_MASK
  [GET_GOODS] (state, list) {
    state.goods = state.goods.concat(list)
  }
}