<template>
  <div class="product">
    <li class="product_item" :data-id="product.pid">
      <img v-lazy="product.lg" :title="product.title" @click.prevent.stop="jumpProductDetail">
      <div class="shrink_img">
        <img v-lazy="product.sm" class="active">
      </div>
      <div class="price">
        ￥
        <i v-text="product.price">10999</i>.00
      </div>
      <a
        href="#"
        class="title"
        :title="product.title"
        v-text="product.title"
        @click.prevent.stop="jumpProductDetail"
      ></a>
      <div class="evaluate">
        <i>4.4万+</i>评价
      </div>
      <a href="javascript:" class="isSn">苏宁自营</a>
      <div class="favour">
        <a href="javascript:">大聚惠</a>
        <a href="javascript:">赠品</a>
      </div>
      <div class="btn">
        <a href="javascript:" class="contrast">
          <i></i>对比
        </a>
        <a href="javascript:" class="collect">
          <i></i>收藏
        </a>
        <a href="javascript:" class="addCart">
          <i></i>加入购物车
        </a>
      </div>
    </li>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["product"],
  methods: {
    jumpProductDetail(pid) {
      console.log('wo bei dian l')
      this.$router.push({
        // path:`/product/:${this.product.pid}`
        name:'ProductContainer',
        params:{
          pid: this.product.pid
        }
      });
    }
  }
};
</script>
<style scoped>
@import url("../../../static/css/search_product.css");
</style>
