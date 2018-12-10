<template>
  <div class="headerSearch">
    <div class="top-header clear" :class="isLarge ? 'w-1400':''">
      <div class="top-logo">
        <a href="#">
          <img v-lazy="server+'img/index/logo.png'" alt="logo">
        </a>
      </div>
      <!-- 促销动图-->
      <div class="top-info">
        <a href="#">
          <img v-lazy="server+'img/index/info.gif'" v-if="isAd">
        </a>
      </div>
      <!--搜索框-->
      <div class="top-search">
        <i class="search-icon"></i>
        <form action="get">
          <div class="search-keyword" :class=" isLarge?'w-1400-search':''">
            <input type="text" value="把酒欢庆 149减30" v-model="msg">
          </div>
          <input type="submit" class="btn" value="搜索" @click.13.prevent.stop="handleSearch">
        </form>
        <ul class="search-word">
          <li>
            <a href="#">电饭煲</a>
          </li>
          <li>
            <a href="#" class="active">冰洗每千减百</a>
          </li>
          <li>
            <a href="#">iPhone XS</a>
          </li>
          <li>
            <a href="#">耳机</a>
          </li>
          <li>
            <a href="#" class="active">海尔烟灶套餐</a>
          </li>
          <li>
            <a href="#">游戏本</a>
          </li>
          <li>
            <a href="#">白酒</a>
          </li>
          <li>
            <a href="#">手机</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "headerSearch",
  data() {
    return {
      server: "http://127.0.0.1:3000/",
      // msg: 'iPhone',
      pageCount: 0,
      msg: ""
    };
  },
  computed: {
    // msg :function(){
    //   if(!this.msg)
    //     return 'iPhone'
    // }
  },
  watch: {
    pno(val, oldVal) {
      this.search();
      // console.log('pno is change'+this.pno)
    },
    hasMsg(val, oldVal) {
      this.search();
    }
  },
  props: ["isLarge", "pno", "pageSize", "hasMsg", "isAd"],
  mounted() {
    if (this.$route.params.msg != undefined) this.msg = this.$route.params.msg;
    // this.search()
    this.msg = "iPhone";
    if (this.pno >= 1) this.search();
  },
  methods: {
    handleSearch() {
      this.$router.push({
        // path: `/search/${this.msg}`,
        name: "SearchContainer",
        params: {
          msg: this.msg
        }
      });
      this.search();
    },
    search() {
      // console.log(this.route.params)
      // console.log(this.msg)
      //http://127.0.0.1:3000/product/search?msg=iPhone&pageSize=5&pno=1
      this.$axios
        .get("/product/search", {
          params: {
            msg: this.msg,
            pageSize: this.pageSize,
            pno: this.pno
          }
        })
        .then(res => {
          console.log(this.msg);
          console.log(res.data);
          this.pageCount = res.data.pageCount;
          this.products = res.data.products;
        })
        .then(() => {
          this.$emit("searchProduct", {
            pno: this.pno,
            pageCount: this.pageCount,
            products: this.products,
            msg: this.msg
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style>
@import "../../../static/css/headerSearch.css";
.headerSearch {
  background: #fff;
}
.headerSearch .w-1400 {
  width: 1390px;
}
.headerSearch .w-1400-search {
  width: 650px !important;
}
.headerSearch .w-1400-search > input {
  width: 600px;
}
</style>


