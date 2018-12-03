<template>
  <div class="search">
    <header-tool-bar :isLarge='true' :isIndex='true'></header-tool-bar>
    <header-search :isLarge='true' :hasMsg='hasMsg' :pno='pno' :pageSize='pageSize' @searchProduct='handleSearch($event)'></header-search>
    <header-nav-bar :isShow='true' :isLarge='true'></header-nav-bar>
    <div class="container">
      <div class="hr"></div>
      <div class="brandbar">
          <a href="#">
            <img v-lazy="server+'img/search/brand/apple_brand.jpg'">
          </a>
      </div>
      <div class="search_path">
        <div class='left_path'>
          <a href="#" class='path'>全部结果</a>
          <span></span>
          <a href="#" class='path'>手机/数码配件</a>
          <span></span>
          <a href="#" class='path'>手机通讯</a>
          <span></span>
          <a href="#" class='path'>手机</a>
          <span></span>
          <a href='#' class='p_brand'>品牌: <em>Apple</em></a>
          <span v-if='hasMsg'></span>
          <a href='#' class='search_word' v-text='msg' v-if='hasMsg'>iphone</a>
          <a href='javascript:' class='clearWord' @click.prevent.stop='clearSearch' v-if='hasMsg'>清空筛选</a>      
        </div>
        <div class='btn_detail' @click.prevent.stop="handleShowChoose">
          <span v-if='showChoose'>收起筛选</span>
          <span v-else>显示筛选</span>
          <em :class="!showChoose?'rotate':''"></em>
        </div>
      </div>
      <div class='search_choose' :class="showChoose?'showChoose':'hideChoose'">
        <ul>
          <li>
            <div class='item_choose'>价格</div>
            <div class="details_choose">
              <a href='javascript:'>0-1000</a>
              <a href='javascript:'>1000-1700</a>
              <a href='javascript:'>1700-2800</a>
              <a href='javascript:'>2800-4500</a>
              <a href='javascript:'>4500-8000</a>
              <a href='javascript:'>8000以上</a>
            </div>
          </li>
          <li>
            <div class='item_choose'>网络制式</div>
            <div class="details_choose">
              <a href='javascript:'>全网通</a>
              <a href='javascript:'>其他</a>
            </div>
          </li>
          <li>
            <div class='item_choose'>机身内存</div>
            <div class="details_choose">
              <a href='javascript:'>512GB</a>
              <a href='javascript:'>128GB</a>
              <a href='javascript:'>64GB</a>
              <a href='javascript:'>32GB</a>
              <a href='javascript:'>16GB</a>
            </div>
          </li>
          <li>
            <div class='item_choose'>屏幕尺寸</div>
            <div class="details_choose">
              <a href='javascript:'>6.1英寸以上</a>
              <a href='javascript:'>5.6-6.0英寸</a>
              <a href='javascript:'>5.5英寸</a>
              <a href='javascript:'>5.1-5.4英寸</a>
              <a href='javascript:'>4.6-4.9英寸</a>
              <a href='javascript:'>4.0英寸及以下</a>
            </div>
          </li>
          <li>
            <div class='item_choose'>其他选项</div>
            <div class="details_choose">
              <a href='javascript:'>操作系统</a>
              <a href='javascript:'>运行内存</a>
              <a href='javascript:'>CPU</a>
              <a href='javascript:'>后置摄像头</a>
              <a href='javascript:'>前置摄像头</a>
              <a href='javascript:'>电池容量</a>
              <a href='javascript:'>大家说</a>
              <a href='javascript:'>颜色</a>
            </div>
          </li>
        </ul>
      </div>
      <div class="search_rank">
        <div class="left_rank">
          <a href='javascript:' class='active'>综合</a>
          <a href='javascript:'>销量<em class='down'></em></a>
          <a href="javascript:">评价数<em class="down"></em></a>
          <a href="javascript:">价格<em class="down"></em></a>
          <div class="range">
            <form>
              <div>
                <p>          
                  <span>￥</span>
                  <input type="text">
                </p>
                <p>-</p>
                <p>          
                  <span>￥</span>
                  <input type="text">
                </p> 
              </div>
              <div>
                <button type='submit' class='confirm'>确定</button>
                <button type='reset' class='cancel'>取消</button> 
              </div>
            </form>
          </div>
          <div class="address">
            <span>收货地</span>
            <a href='javascript:' class='location'>
              <span>陕西</span>
              <span>西安</span>
              <i></i>
            </a>
          </div>
        </div>
        <div class="right_rank">
          <div class="page">
            <em class='left_btn' @click='changePage(-1)'></em>
            <span class='pageNumber'><i>1</i>/{{pageSize}}</span>
            <em class='right_btn' @click='changePage(1)'></em>
          </div>
          <div class='serve'>
            <div>
              <a href="#" class='chose'><em></em>苏宁服务</a>
              <a href="#" class='chose'><em></em>有货商品</a>
              <a href="#" class='chose'><em></em>苏宁国际</a>
              <a href="#" class='chose'><em></em>苏宁益品</a>            
            </div>
            <span class='more'>更多<i></i></span>
          </div>
        </div>

      </div>
      <div class="product_list">
        <ul>
          <search-product v-for=" item of products" :key='item.pid' :product='item'></search-product>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import headerToolBar from '../header/headerToolbar.vue'
import headerSearch from '../header/headerSearch.vue'
import headerNavBar from '../header/headerNavbar.vue'
import searchProduct from './search_product.vue'
export default {
  name:'search',
  data(){
    return {
      server:'http://127.0.0.1:3000/',
      pno: 1,
      pageCount: 1,
      products: [],
      pageSize: 15,
      appendMsg: '' , //多重筛选
      hasMsg: true,
      msg: '',
      showChoose: true
    }
  },
  computed:{
    
  },
  components:{
    headerToolBar,
    headerSearch,
    headerNavBar,
    searchProduct
  },
  created(){
    // this.msg = this.$route.params.msg
    // this.hasMag()
  },
  mounted(){
    // this.msg = this.$route.params.msg
    // console.log(this.route.params)
    // console.log(this.msg)
    // this.search()
  },
  methods:{
    // hasMsg(){
    //   if(this.$route.params.msg)
    //     return this.$route.params.msg
    //   return 'iPhone'
    // },
    handleSearch(res){
      console.log(res)
      this.pageCount = res.pageCount
      this.products = res.products
      this.pno = res.pno
      this.msg = res.msg
      this.hasMsg = true
    },
    changePage(n){
      this.pno +=n;
      console.log(this.pno)
    },
    clearSearch(){
      this.pno = 1
      this.pageCount =  1
      this.products = []
      this.msg = 'iPhone'
      this.hasMsg = false
    },
    handleShowChoose(){
      if(this.showChoose) this.showChoose = false
      else this.showChoose = true
    }
  }
}
</script>
<style scoped>
@import '../../../static/css/search.css';
.search .showChoose{
  height: 205px;
}
.search .hideChoose{
  height: 0;
}
.search .rotate{
  transform:  rotate(-135deg) !important;
}
</style>


