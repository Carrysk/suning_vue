<template>
  <div class="headerToolbar">
	<!--顶部工具栏-->
	<div class='top clear'>
		<div class="top-nav" :class="isLarge ? 'w-1400':''">
			<ul class='top-left'>
				<li v-show='isIndex'>
					<a href="javascript:void(0)" @click.prevent.stop='jumpIndex'>返回首页</a>
				</li>
				<li class='drop drop-1'>
					<a href="#">网站导航<span class='btn'></span></a>
					<div class='drop-1'>
						<span class='close'>x</span>
						<ul class='all-items'>
							<li>
								<h3>特色购物</h3>
								<ul class='item'>
									<li><a href="#">苏宁互联</a></li>
									<li><a href="#">苏宁达人</a></li>
									<li><a href="#">苏宁卡</a></li>
									<li><a href="#">海外购</a></li>
									<li><a href="#">大聚惠<span class='hot'></span></a></li>
									<li><a href="#">以旧换新</a></li>
									<li><a href="#">二手优品</a></li>
									<li><a href="#">领卷中心</a></li>
									<li><a href="#">香港苏宁</a></li>
									<li><a href="#">苏宁Outlets</a></li>
									<li><a href="#">节能超市</a></li>
									<li><a href="#">导购指南</a></li>
								</ul>
							</li>
							<li>
								<h3>主题频道</h3>
									<ul class='item'>
										<li><a href="#">电器城</a></li>
										<li><a href="#">苏宁超市</a></li>
										<li><a href="#">手机</a></li>
										<li><a href="#">运动馆</a></li>
										<li><a href="#">图书</a></li>
										<li><a href="#">红孩子母婴</a></li>
										<li><a href="#">美妆个护</a></li>
										<li><a href="#">电脑</a></li>
										<li><a href="#">服装城</a></li>
										<li><a href="#">智能生活</a></li>
										<li><a href="#">家装馆</a></li>
										<li><a href="#">汽车用品</a></li>
										<li><a href="#">排行榜</a></li>
										<li><a href="#">医药馆</a></li>
									</ul>
							</li>
							<li>
								<h3>生活助手</h3>
									<ul class='item'>
										<li><a href="#">零钱宝<span class='hot'></span></a></li>
										<li><a href="#">手机充值</a></li>
										<li><a href="#">转账还款</a></li>
										<li><a href="#">约服务</a></li>
										<li><a href="#">水电煤</a></li>
										<li><a href="#">保险</a></li>
										<li><a href="#">机票</a></li>
										<li><a href="#">门店查询</a></li>
									</ul>
							</li>
							<li>
								<h3>会员服务</h3>
									<ul class='item'>
										<li><a href="#">会员联盟<span class="hot"></span></a></li>
										<li><a href="#">延长保修</a></li>
										<li><a href="#">免费书城</a></li>
										<li><a href="#">易付宝</a></li>
										<li><a href="#">苏宁理财</a></li>
										<li><a href="#">苏宁金融</a></li>
									</ul>
							</li>
							<li>
								<h3>更多热点</h3>
									<ul class='item'>
										<li><a href="#">PP视频</a></li>
										<li><a href="#">客户端</a></li>
										<li><a href="#">商家入驻<span class="hot"></span></a></li>
										<li><a href="#">苏宁联盟</a></li>
										<li><a href="#">用户体验</a></li>
										<li><a href="#">校园先锋</a></li>
										<li><a href="#">苏宁云</a></li>
										<li><a href="#">苏宁足球</a></li>
										<li><a href="#">苏宁公益</a></li>
									</ul>
							</li>
						</ul>
					</div>
				</li>
				<li class='drop drop-2'>
					 <a href="#">商家入驻<span class='btn'></span></a>
					 <div class='drop-2'>
								<ul class="item clear">
									<li><a href="#">合作招商</a></li>
									<li><a href="#">服务市场</a></li>
									<li><a href="#">金融中心</a></li>
									<li><a href="#">商家论坛</a></li>
									<li><a href="#">培训中心</a></li>
									<li><a href="#">增值服务</a></li>
									<li><a href="#">规则中心</a></li>
								</ul>
					 </div>
				</li>
				<li class='drop drop-3'>
					<a href="#">客户服务<span class='btn'></span></a>
					<div class='drop-3'>
						<ul class="item">
							<li><a href="#">苏宁帮课</a></li>
							<li><a href="#">帮助中心</a></li>
							<li><a href="#">查找门店</a></li>
							<li><a href="#">退换/维修</a></li>
							<li><a href="#">建议反馈</a></li>
							<li><a href="#">30天包退</a></li>
							<li><a href="#">苏宁服务</a></li>
							<li><a href="#">在线咨询<span class="ask"></span></a></li>
						</ul>
					</div>
				</li>
				<li class='location-sp'>
					<a href="#"><b class='loc'></b>西安<span class='btn'></span></a>
				</li>
			</ul>
			<ul class='top-right'>
				<li>
					<a href="login.html" @click.prevent.stop="jumpLogin">请登录</a>
				</li>
				<li>
					<a href="registry.html" class='active' @click.prevent.stop='jumpSignIn'>注册有礼</a>
				</li>
				<li class='drop drop-4'>
					<a href="#">我的订单<span class='btn'></span></a>
					<div class='drop-4 clear'>
						<ul class="item">
							<li><a href="#">待支付</a></li>
							<li><a href="#">待收货</a></li>
							<li><a href="#">待评价</a></li>
							<li><a href="#">修改订单</a></li>
						</ul>
					</div>
				</li>
				<li class='drop drop-5'>
					<a href="#">我的易购<span class='btn'></span></a>
					<div class="drop-5">
						<p class='clear'>
							<a href="#" class='logo'></a>
							<b class='login'>
								<a href='#' @click.prevent.stop='login'>请登录</a>
								<button>点击打卡</button>
							</b>
							
						</p>
						<ul class="item clear">
							<li><a href="#">我的二手</a></li>
							<li><a href="#">我的收藏</a></li>
							<li><a href="#">我的金融</a></li>
							<li><a href="#">苏宁会员<span class="sp"></span></a></li>
							<li><a href="#">我的任性付</a></li>
							<li><a href="#">我的优惠卷</a></li>
						</ul>
					</div>
				</li>
				<li>
					<a href="#">苏宁会员</a>
				</li>
				<li class='drop drop-6'>
					<a href="#" class='active'><b></b>购物车<i></i><span class='btn'></span></a>
					<div class="drop-6">
						<p class='empty'></p>
						<p>不要让您的购物车空着哦，快去逛逛吧</p>
						<p>如果您已添加过宝贝，那就赶紧登录查看吧</p>
						<button>登陆</button>
					</div>
				</li>
				<li>
					<a href="#">易付宝</a>
				</li>
				<li>
					<a href="#">企业采购</a>
				</li>
				<li class='drop drop-7'>
					<a href="#">手机苏宁<span class='btn'></span></a>
					<div class="drop-7">
						<ul>
							<li>
								<img v-lazy="server+'img/index/sntk-top-code.png'">
								<p>关注苏宁推客人<br />自购省钱 分享赚钱</p>
							</li>
							<li>
								<img v-lazy="server+'img/index/yfb-top-code.png'">
								<p>扫一扫<br />下载苏宁金融APP</p>
							</li>
							<li>
								<img v-lazy="server+'img/index/wxcode.jpg'">
								<p>扫一扫<br/>关注苏宁易购服务号</p>
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</div>
	</div>
  </div>
</template>
<script>
export default {
  name: "headerToolbar",
  data() {
    return {
			server: 'http://127.0.0.1:3000/',
			// isLarge: false
		};
	},
	props:[ 'isLarge', 'isIndex'],
	methods:{
		jumpLogin(){
			this.$router.push({
				name:'LoginContainer',
				params:{
					from: this.$route.path
				}
			})
		},
		jumpIndex(){
			this.$router.push('/index')
		},
		jumpSignIn(){
			this.$router.push('/register')
		}
	}
};
</script>
<style scoped>
 @import '../../../static/css/headerToolbar.css';

	.headerToolbar .w-1400{
		width: 1390px; 
	}
</style>


