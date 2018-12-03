import Vue from 'vue'
import Router from 'vue-router'
import IndexContainer from '@/components/index/indexContainer'
import SearchContainer from '@/components/search/search'
import ProductContainer from '@/components/product/product'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: IndexContainer },
    { path: '/index', name: 'IndexContainer', component: IndexContainer },
    { path: '/search', name: 'SearchContainer', component: SearchContainer },
    { path: '/product/', name: 'ProductContainer', component: ProductContainer }
  ]
})
