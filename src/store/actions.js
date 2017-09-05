import axios from 'axios'
import * as types from './mutation-types.js'

export default {
  toggleFixedNav ({commit, state}) {
    let top = document.body.scrollTop
    if(top > 50) {
      commit(types.IS_FIXED_NAV, true)
    } else {
      commit(types.IS_FIXED_NAV, false)
    }
  },
  getSliders ({commit, state}) {
    axios.get('/static/mock/home/sliders.json').then((response) => {
      if(response.data.list) {
        commit(types.GET_SLIDERS, response.data.list)
      }
    })
  },
  getHomeGoods ({commit, state}) {
    axios.get('/static/mock/goods/goods.json').then((response) =>{
      let result = response.data.list
      if (result) {
        commit(types.GET_HOME_GOODS, result.slice(0,6))
      }
    })
  },
  getHomeShops ({commit, state}) {
    state.busy = true
    commit(types.IS_LOADING, true)
    axios.get('/static/mock/home/home_goods.json').then((response) => {
      commit(types.IS_LOADING, false)
      let result = response.data.list.slice(state.num-5,state.num)
      if(result.length !== 0){
				commit(types.GET_HOME_SHOPS, result)
				state.busy = false
				state.num += 5
			} else {
				commit(types.IS_OVER, true);
			}
    })
  },
  getGoods ({commit, state}) {
    state.busy = true
    commit(types.IS_LOADING, true)
    axios.get('/static/mock/goods/goods.json').then((response) => {
      commit(types.IS_LOADING, false)
      let result = response.data.list.slice(state.num-5,state.num)
      if(result.length !== 0){
				commit(types.GET_GOODS, result)
				state.busy = false
				state.num += 5
			} else {
				commit(types.IS_OVER, true)
			}
    })
  }
}