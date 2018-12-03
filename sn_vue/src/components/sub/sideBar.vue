<template>
  <div class="sideBar">
	<nav class="sidebar">
		<div class="middle">
			<div class="user-cart">
				<div class="user">
					<a href="#"><i class='tab-icon user-icon'></i></a>
				</div>
				<div class="cart">
					<a href="#">
						<i class='tab-icon cart-icon'></i>
						<span class='cart-title'>购物车</span>
						<span class='cart-count'>0</span>
					</a>
				</div>
				<div class="msg">
					<a href="#">
						<i class="tab-icon msg-icon"></i>
						<span class='msg'>消息</span>						
					</a>
				</div>
			</div>
			<div class='middle-bottom-tabs'>
				<div class='finance'>
					<a href="#">
						<i class='tab-icon finance-icon'></i>
						<span class="finance">理财</span>
					</a>
				</div>
				<div class='foot'>
						<a href="#">
							<i class='tab-icon foot-icon'></i>
							<span class="foot">足迹</span>
						</a>
				</div>
					<div class="sign">
						<a href="#">
							<i class='tab-icon sign-icon'></i>
							<span class="sign">签到</span>
						</a>
					</div>
			</div>					
		</div>
		<div class="bottom">
				<div class='chart'>
						<a href="#">
						<i class='tab-icon chart-icon'></i>
						<span class="chart">在线咨询</span>
						</a>
				</div>
				<div class='suggest'>
						<a href="#">
						<i class='tab-icon suggest-icon'></i>
						<span class="suggest">意见反馈</span>
						</a>
				</div>
				<div class='code'>
						<a href="#">
						<i class='tab-icon code-icon'></i>
						<span class="code"><img v-lazy="server+'img/index/new-down-img.png'"></span>
						</a>
				</div>
				<div class='toTop'>
						<a href="#">
						<i class='tab-icon toTop-icon'></i>
						<span class="chart">返回顶部</span>
						</a>
				</div>
		</div>
	</nav>
  </div>
</template>
<script>
export default {
  name:'sideBar',
  data(){
    return {
			server: 'http://127.0.0.1:3000/'
		}
  }
}
</script>
<style scoped>
@import '../../../static/css/sideBar.css';
</style>


