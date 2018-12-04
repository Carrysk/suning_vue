<template>
  <div id="app">
    <router-view/>
    <side-bar></side-bar>
    <footer-container></footer-container>
  </div>
</template>

<script>
import footerContainer from "@/components/footer/footerContainer";
import sideBar from "@/components/sub/sideBar";

export default {
  name: "App",
  components: {
    footerContainer,
    sideBar
  }
};
</script>

<style>
@import "../static/css/common.css";
#app {
  background-color: #f7f7f7;
}
</style>
