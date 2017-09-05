// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'

import { InfiniteScroll } from 'mint-ui';

Vue.use(InfiniteScroll);

import './assets/font-awesome-4.7.0/css/font-awesome.min.css'

import lazy_img from './assets/images/loading.gif'

Vue.use(VueLazyLoad,{
	loading: lazy_img
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
