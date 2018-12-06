// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueLazyLoad from 'vue-lazyload'
import querystring from 'querystring'
import store from './vuex/store'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://127.0.0.1:3000/'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.withCredentials = true
Vue.prototype.$axios = axios

//引入lazyload
Vue.use(VueLazyLoad, {
  preLoad: 1.3, 
  error: '../static/loading.gif',
  loading: '../static/loading.gif',
  attempt: 1,
  listenEvents: [ 'scroll' ]
})
Vue.prototype.$qs = querystring

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, //将store对象提供给‘store’选项， 这可以把store 的实例注入所有的子组件
  components: { App },
  template: '<App/>'
})
