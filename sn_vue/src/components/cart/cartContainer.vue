<template>
  <div class="cart">
    <header-toolbar :isLarge="false"></header-toolbar>
    <header-search :isIndex="true" :isAd="false"></header-search>
    <section class="cartList">
      <div class="isLogin">
        <p>
          现在
          <a class="login_btn">登录</a>，您的商品将被永久保存，并可查看之前加入的商品
        </p>
      </div>
      <div class="listTitle">
        <ul>
          <li class="chb">
            <input type="checkbox">全选
          </li>
          <li class="title">商品信息</li>
          <li class="spec">规格</li>
          <li class="price">单价（元）</li>
          <li class="count">数量</li>
          <li class="sumPrice">小计（元）</li>
          <li class="delete">操作</li>
        </ul>
      </div>
      <div class="carriage">
        <p>
          <input type="checkbox">选择苏宁自营
        </p>
        <p>运费：￥0.00</p>
      </div>
      <div class="product">
        <div class="product_itme" style='height:200px;background:yellow'></div>
      </div>
      <div class="total">
        <ul>
          <li class='allChoose'><input type="checkbox">全选</li>
          <li class='deleteChose'>删除选中商品</li>
          <li class='totalPrice'>
            <p class='payMoney'>总价（含运费）：<span>￥<em>0.00</em></span></p>
            <p class='payCar'>运费（以结算页为准）：￥0.00</p>
            </li>
          <li class='checkCount'>已选商品<em class='count'>0</em>件 <span>已享满减：-￥0.00</span></li>
        </ul>
        <a class='btn_pay'>去结算</a>
      </div>
    </section>
  </div>
</template>
<script>
import headerToolbar from "../header/headerToolbar";
import headerSearch from "../header/headerSearch";

export default {
  name: "cartContainer",
  data() {
    return {
      isLogin
    };
  },
  components: {
    headerToolbar,
    headerSearch
  }
};
</script>
<style scoped>
div.cart {
  background-color: #fff;
}
div.cart .cartList {
  width: 1190px;
  margin: 10px auto;
}
.cart .cartList .isLogin {
  padding: 0 10px;
  height: 28px;
  line-height: 28px;
  font-size: 12px;
  color: #333;
}
.cart .cartList .isLogin .login_btn {
  display: inline-block;
  margin: 0 4px;
  height: 28px;
  line-height: 28px;
  padding: 0 14px;
  font-size: 14px;
  color: #fff;
  background: #f60;
  border-radius: 3px;
}
.cartList .listTitle > ul {
  margin: 4px 0;
  display: flex;
  justify-content: space-between;
  border: 1px solid #ddd;
  border-top-width: 3px;
}
.cartList .listTitle > ul > li {
  height: 32px;
  line-height: 32px;
  padding-left: 10px;
  text-align: left;
  color: #666;
}
.cartList .listTitle .chb {
  width: 250px;
}
.cartList .listTitle .chb > input {
  float: left;
  margin: 9px 4px;
}
.cartList .listTitle .title {
  width: 218px;
}
.cartList .listTitle .spec {
  width: 145px;
}
.cartList .listTitle .price {
  width: 153px;
}
.cartList .listTitle .count {
  width: 130px;
}
.cartList .listTitle .sumPrice {
  width: 190px;
}
.cartList .listTitle .delete {
  width: 100px;
}
.cartList .carriage {
  margin: 20px 0 6px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #333;
  height: 26px;
  line-height: 26px;
}
.cartList .carriage > p {
  padding: 0 10px;
}
.cartList .carriage > p > input {
  float: left;
  height: 14px;
  width: 14px;
  margin: 5px 3px;
}
.cartList .carriage>p:first-child{
  color: #222;
  font-size: 14px;
  font-weight: 700;
}
.cartList .total{
  width: 1190px;
  margin-top: 20px;
  border: 1px solid #ddd;
  color: #666;
  position: relative;
}
.cartList .total>ul{
  padding: 10px;
  margin-right: 119px;
  height: 38px;
  line-height: 38px;
}
.cartList .total .allChoose{
  float: left;
}
.cartList .total .allChoose>input{
  float: left;
  height: 14px; width: 14px;
  margin-right: 6px;
  margin-top: 12px;
}
.cartList .total .deleteChose{
  float: left;
  margin-left: 40px;
  cursor: pointer;
}
.cartList .total .checkCount{
  float: right;
  border-right: 1px solid #ccc;
  padding: 0 14px;
  color: #333;
}
.cartList .total .checkCount .count{
  display: inline-block;
  margin: 0 2px;
  font-weight: 700;
  color: #f60;
}
.cartList .total .checkCount>span{
  display: inline-block;
  padding-left: 20px;
  color: #999;
}
.cartList .total .totalPrice{
  float: right;
  padding: 0 14px;
  color: #333;
  line-height: 20px;
  text-align: right;
}
.cartList .total .btn_pay{
  position: absolute;
  right: -1px;
  top: -1px;
  height: 60px; line-height: 60px;
  width: 120px;
  background: #f60;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
}
.total .totalPrice .payMoney>span{
  color: #f60;
  font-weight: 700;
}
.total .totalPrice .payMoney em{
  font-size: 20px;
}
.cartList .total .totalPrice .payCar{
  color: #999;
}
.cartList .total>ul:after{
  content: '';
  display: block;
  clear: both;
}

/*   product_item*/

.cart .product{
  border: 1px solid #ddd;
  border-bottom: 0;
}
.cart .product>:nth-child(n){
  border-bottom: 1px solid #ddd;
}
</style>

