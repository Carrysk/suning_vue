<template>
  <div class="product">
    <header-tool-bar :isIndex="false"></header-tool-bar>

    <header>
      <div class="bottom clear">
        <div class="about">
          <a href="index.html">
            <img :src="server+'img/common/snlogo.png'" alt="suning logo">
          </a>
          <div class="shop">
            <div class="shop_name">
              <a href="#">
                苏宁Apple产品专营店
                <i class="sn_shop"></i>
              </a>
            </div>
            <div class="shop_score">
              <a href="#">
                店铺评分
                <i>4.94</i>
              </a>
            </div>
          </div>
        </div>
        <div class="search">
          <form method="get">
            <div class="search-inner">
              <input type="text" placeholder="iPhone XR新品开抢赠送无线充电盒" name="kword">
              <button class="search-btn search-sn">搜易购</button>
              <button class="search-btn search-here">搜本店</button>
            </div>
            <div class="search-kwd">
              <a href="#">
                <i class="sp">iPhone Xs</i>
              </a>
              <a href="#">
                <i>小米Mix3</i>
              </a>
              <a href="#">
                <i class="sp">华为Mate20</i>
              </a>
              <a href="#">
                <i>荣耀8c</i>
              </a>
              <a href="#">
                <i class="sp">魅族Note8</i>
              </a>
              <a href="#">
                <i class="sp">vivo Z3</i>
              </a>
              <a href="#">
                <i class="sp">OPPO K1</i>
              </a>
            </div>
          </form>
        </div>
      </div>
    </header>
    <div class="shop_header">
      <div class="shop_about">
        <div class="shop_search">
          <a href="#" class="shop_sc"></a>
          <form action="get">
            <input type="text" placeholder="请输入关键字">
            <button type="submit"></button>
          </form>
        </div>
      </div>
      <nav class="nav">
        <div class="shop_nav">
          <div class="left_nav drop-btn">
            <a href="#">
              本店全部产品
              <span class="left-list-icon">
                <i></i>
                <i></i>
                <i></i>
              </span>
            </a>
            <div class="drop-list">
              <div class="drop-item">
                <a href="#">所有商品</a>
                <div>
                  <a href="#">按销量</a>
                  <a href="#">按新品</a>
                  <a href="#">按价格</a>
                </div>
              </div>
              <div class="drop-item">
                <a href="#">Mac</a>
                <div>
                  <a href="#">iMac</a>
                  <a href="#">MacBook Pro</a>
                  <a href="#">MacBook</a>
                  <a href="#">MacBook Air</a>
                </div>
              </div>
              <div class="drop-item">
                <a href="#">iPad</a>
                <div>
                  <a href="#">iPad Pro</a>
                  <a href="#">iPad</a>
                  <a href="#">iPad mini 4</a>
                  <a href="#">iPad Air</a>
                </div>
              </div>
              <div class="drop-item">
                <a href="#">iPhone</a>
                <div>
                  <a href="#">iPhone X</a>
                  <a href="#">iPhone 8</a>
                  <a href="#">iPhone 7</a>
                </div>
              </div>
              <div class="drop-item">
                <a href="#">Beats</a>
              </div>
              <div class="drop-item">
                <a href="#">Apple 配件</a>
              </div>
            </div>
          </div>
          <div class="center_nav">
            <a href="#">首页</a>
            <a href="#">Mac</a>
            <a href="#">iPad</a>
            <a href="#">iPhone</a>
            <a href="#">Watch</a>
            <a href="#">Beats</a>
            <a href="#">配件</a>
            <a href="#">客户服务</a>
            <a href="#">关于我们</a>
          </div>
        </div>
      </nav>
    </div>

    <section class="main clear">
      <div class="left_main">
        <div class="zoomImg">
          <div
            class="supermask"
            @mousemove.prevent.stop="moveImgMask"
            @mouseleave.prevent.stop="leaveImgMask"
          ></div>
          <div class="mdImg">
            <a href="#">
              <img v-if="activeImgSrc" :src="activeImgSrc">/
            </a>
            <div class="mask" :style="canMove?moveMask:''"></div>
          </div>
          <div class="lgImg" v-show='canMove'>
            <img v-if="activeImgSrc" :src="activeImgSrc" :style="canMove?lgImg:''">
          </div>
          <div class="smImg">
            <ul>
              <li v-for="(tmp,i) of pic" :key="tmp.picId" :class="activeImg==i?'active_img':''">
                <a href="#">
                  <img :src="tmp.sm" @mouseenter.prevent.stop="changeImg(i)">
                </a>
              </li>
            </ul>
          </div>
          <div class="imgMemo">
            <ul>
              <li class="memo_compare">
                <a href="#">
                  <i></i>对比
                </a>
              </li>
              <li class="memo_share">
                <a href="#">
                  <i></i>分享
                </a>
              </li>
              <li class="memo_collect">
                <a href="#">
                  <i></i>收藏
                </a>
              </li>
              <li class="memo_search">
                <a href="#">
                  <i></i>有奖调查
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="shop_guide">
          <p class="title">
            <span>专属导购</span>
            <i>|</i>
            <em>实物体验 免费服务</em>
          </p>
          <div class="card">
            <img :src="server+'img/products/details_shop/1537896376025.png'">
            <div class="desc">
              <p class="name">
                王洋
                <span class="star">
                  <em></em>
                </span>
                <span class="jiedan">
                  已接
                  <i>366</i>单
                </span>
              </p>
              <p class="sn_shop">
                苏宁易购
                <span>(韩城黄河大街店)</span>
              </p>
              <a href="#" class="moreSn">更多门店 ></a>
              <a href="#" class="find">去门店找TA</a>
            </div>
          </div>
        </div>
      </div>
      <div class="right_main">
        <div class="right_title">
          <h1>
            <span class="isSn">自营</span>
            {{details[0].title}}
          </h1>
          <h2 v-text="details[0].subtitle">A12仿生处理器-6.1英寸-128GB内存-全面屏-面容识别-双卡双待</h2>
        </div>
        <div class="right_activity">
          <div class="djh"></div>
          <div class="timeout">
            <i class="time"></i>
            <em>距离抢购结束</em>
            <em class="qg_time">01天 00 时 30 分 31.8 秒</em>
          </div>
          <div class="yiqiang">
            <span>已抢</span>
            <span>2804件</span>
          </div>
        </div>
        <div class="price">
          <div class="row money">
            <div class="row_left w3">活动价</div>
            <div class="row_right">
              <p>
                ￥
                <span>{{details[0].price}}.00</span>
              </p>
              <p>
                <i></i>
                <span>加入会员返云钻，下单立返约139.98元</span>
                <a href="#">立即开通 ></a>
              </p>
            </div>
          </div>
          <div class="row guaquan">
            <div class="row_left w2">刮券</div>
            <div class="row_right">
              <p>
                <a href="#" class="gq_img"></a>
                <span>100%刮中券，最高50元无敌券</span>
                <a href="#">立即去刮奖 ></a>
              </p>
            </div>
          </div>
          <div class="row cuxiao">
            <div class="row_left w2">促销</div>
            <div class="row_right">
              <p>
                <span class="sm">实名有礼</span>
                <i></i>
                <span>实名认证领苏宁支付券</span>
                <a href="#">登录后查看 ></a>
              </p>
              <p>
                <span class="yz">云钻</span>
                <i></i>
                <span>
                  普通会员返
                  <a href="#">1049</a>云钻
                </span>
              </p>
            </div>
          </div>
          <div class="pingjia">
            <p>累计评价</p>
            <a href="#">600+</a>
          </div>
        </div>
        <div class="row support">
          <div class="row_left w2">支持</div>
          <div class="row_right">
            <span class="taocan">
              <i></i>18元30GB
            </span>
            <span class="yjhx">
              <i></i>以旧换新
            </span>
          </div>
        </div>
        <div class="row transport">
          <div class="row_left w2">送至</div>
          <div class="row_right">
            <p>
              <a href="#" class="address">
                <em>
                  <span>陕西</span>
                  <span>渭南</span>
                  <span>临渭区</span>
                </em>
                <b></b>
              </a>
              <span class="yh">有货</span>
              <a href="#" class="yf">86元免基础运费(50.00kg内)</a>
              <span class="zc">支持</span>
              <a href="#" class="zt">自提</a>
              <span class="zc">|</span>
              <a href="#" class="brd">半日达</a>
            </p>
            <p>
              <span>23:00前下单，预计明天（11月8日）送达&nbsp;&nbsp;&nbsp;由</span>
              <a href="#" class="sn">苏宁</a>
              <span>销售和发货，并提供售后服务</span>
              <a href="#" class="contact">
                <i></i>联系客服
              </a>
            </p>
          </div>
        </div>
        <div class="row">
          <div class="row_left w2">重量</div>
          <div class="row_right">
            <p>
              <span>0.463kg</span>
            </p>
          </div>
        </div>
        <hr class="row">
        <div class="choose">
          <div class="row">
            <div class="row_left w2">颜色</div>
            <div class="row_right">
              <ul class="color">
                <li v-for="(tmp,i) of colors" :key="i" :class="tmp==details[0].color ? 'active':''">
                  <a href="#">
                    <img v-lazy="pic[4].sm">
                    <i></i>
                    <span v-text="tmp">黑色</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="row_left w2">版本</div>
            <div class="row_right">
              <ul>
                <li v-for="(tmp,i) of size" :key="i" :class="tmp==details[0].size?'active':''">
                  <a href="#">
                    <i></i>
                    <span v-text="tmp">128GB</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="row_left w4">购买方式</div>
            <div class="row_right">
              <ul>
                <li class="active">
                  <a href>
                    <i></i>
                    <span>裸机</span>
                  </a>
                </li>
                <li>
                  <a href>
                    <i></i>
                    <span>移动老用户赠费</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="row_left w3">任性付</div>
            <div class="row_right">
              <ul>
                <li>
                  <a href>
                    <span>￥{{(details[0].price/3).toFixed(2)}}x3期</span>
                  </a>
                </li>
                <li>
                  <a href>
                    <span>￥{{(details[0].price/6).toFixed(2)}}x6期</span>
                  </a>
                </li>
                <li>
                  <a href>
                    <span>￥{{(details[0].price/12).toFixed(2)}}x12期</span>
                  </a>
                </li>
                <li>
                  <a href>
                    <span>￥{{(details[0].price/24).toFixed(2)}}x24期</span>
                  </a>
                </li>
              </ul>
              <a href="#" class="question"></a>
            </div>
          </div>
          <!-- <div class="row">
            <div class="row_left w4">增值服务</div>
            <div class="row_right">
              <ul>
                <li>
                  <a href="#">
                    <span>碎屏保6月 ￥129.00</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>原厂碎屏1年 ￥369.00</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>全保修2年 ￥328.30</span>
                  </a>
                </li>
              </ul>
              <a href class="question"></a>
            </div>
          </div> -->
          <div class="row">
            <div class="row_left w2 count">数量</div>
            <div class="row_right count">
              <a href="#" class="sub" @click.prevent.stop='changeCount(-1)'></a>
              <input type="text" value="1" v-model='count'>
              <a href="#" class="add" @click.prevent.stop='changeCount(1)'></a>
              <span>
                正在促销，每人限购
                <em>1</em>件
              </span>
            </div>
          </div>
          <div class="row">
            <div class="row_left"></div>
            <div class="row_right purchase">
              <a href="#" class="buy">立即购买</a>
              <a href="#" class="addCart">
                <span></span>加入购物车
              </a>
            </div>
          </div>
        </div>
        <hr class="row">
        <div class="row">
          <div class="row_left w4">特色服务</div>
          <div class="row_right fw">
            <span>
              <i class="th"></i>7天无理由退货
            </span>
            <span>
              <i class="cc"></i>商品保管说明
            </span>
            <span>
              <i class="qy"></i>企业采购
            </span>
            <span class="kj">
              <img src="img/products/details_shop/jiancha.jpg">代客检
            </span>
          </div>
        </div>
      </div>
      
      <div class="tabarea">
        <ul class="tabarea_item tj_about">
          <li class="active">
            <a href="#">看了又看</a>
          </li>
          <li>
            <a href="#">热门推荐</a>
          </li>
          <li>
            <a href="#">推荐搭配</a>
          </li>
        </ul>
        <div class="tabarea_detail klyk">
          <span class="left_btn">
            <i></i>
          </span>
          <span class="right_btn">
            <i></i>
          </span>
          <div class="klyk_list">
            <ul>
              <li>
                <a href="#" title="【到手价6299】Apple iPhone XR 128GB 珊瑚色 移动联通电信全网通4G手机 双卡双待">
                  <img src="img/products/mid/iPhoneXR11.jpg">
                </a>
                <p class="price">
                  <span>￥
                    <em>6999</em>.00
                  </span>
                  <span class="isZY">苏宁自营</span>
                </p>
                <p class="title">
                  <a
                    title="【到手价6299】Apple iPhone XR 128GB 珊瑚色 移动联通电信全网通4G手机 双卡双待"
                  >【到手价6299】Apple iPhone XR 128GB 珊瑚色 移动联通电信全网通4G手机 双卡双待</a>
                </p>
                <p class="p_huodong">
                  <span class="isDJH">大聚惠</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="about">
        <div class="left_about">
          <div class="item shop_about">
            <h3 class="item_title">
              <div class="line"></div>
              <div class="suning">
                <i></i>苏宁自营
              </div>
            </h3>
            <div class="item_content">
              <p class="shop_name">商家:
                <em>苏宁Apple产品专营店</em>
              </p>
              <p class="shop_contact">联系:
                <em>
                  <i></i>联系客服
                </em>
              </p>
              <ul class="shop_score">
                <li>
                  <span>商品</span>
                  <span class="score">4.93
                    <i class="up"></i>
                  </span>
                </li>
                <li>
                  <span>服务</span>
                  <span class="score">4.94
                    <i class="up"></i>
                  </span>
                </li>
                <li>
                  <span>物流</span>
                  <span class="score">4.95
                    <i class="up"></i>
                  </span>
                </li>
              </ul>
              <a href="#" class="enter_shop">进入店铺</a>
            </div>
          </div>
          <div class="item klzzm">
            <h3 class="item_title">看了最终买</h3>
            <div class="item_content">
              <ul>
                <li>
                  <a href="#">
                    <img
                      src="img/products/mid/iPhoneXR11.jpg"
                      title="【到手价6299】Apple iPhone XR 128GB 珊瑚色 移动联通电信全网通4G手机 双卡双待"
                    >
                    <p class="title" title="【到手价6299】Apple iPhone XR 128GB 珊瑚色 移动联通电信全网通4G手机 双卡双待">
                      <i>自营</i>【到手价6299】Apple iPhone XR 128GB 珊瑚色 移动联通电信全网通4G手机 双卡双待
                    </p>
                    <p class="price">
                      <span>￥6999.00</span>
                      <span class="isDJH">大聚惠</span>
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item search">
            <h3 class="item_title">相关分类</h3>
            <div class="item_content">
              <ul>
                <li>
                  <a href="#">手机</a>
                </li>
                <li>
                  <a href="#">iPhone</a>
                </li>
                <li>
                  <a href="#">三星</a>
                </li>
                <li>
                  <a href="#">诺基亚</a>
                </li>
                <li>
                  <a href="#">HTC</a>
                </li>
                <li>
                  <a href="#">索尼</a>
                </li>
                <li>
                  <a href="#">小米</a>
                </li>
                <li>
                  <a href="#">华为</a>
                </li>
                <li>
                  <a href="#">联想</a>
                </li>
                <li>
                  <a href="#">Android</a>
                </li>
                <li>
                  <a href="#">WP8</a>
                </li>
                <li>
                  <a href="#">手机频道</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item search">
            <h3 class="item_title">相关品牌</h3>
            <div class="item_content">
              <ul>
                <li>
                  <a href="#">Apple</a>
                </li>
                <li>
                  <a href="#">华为HUAWE</a>
                </li>
                <li>
                  <a href="#">小米mi</a>
                </li>
                <li>
                  <a href="#">荣耀honor</a>
                </li>
                <li>
                  <a href="#">vivo</a>
                </li>
                <li>
                  <a href="#">OPPO</a>
                </li>
                <li>
                  <a href="#">三星SAMSUNG</a>
                </li>
                <li>
                  <a href="#">魅族MEIZU</a>
                </li>
                <li>
                  <a href="#">诺基亚NOKIA</a>
                </li>
                <li>
                  <a href="#">努比亚nubia</a>
                </li>
                <li>
                  <a href="#">美图Meitu</a>
                </li>
                <li>
                  <a href="#">联想Lenovo</a>
                </li>
                <li>
                  <a href="#">中兴ZTE</a>
                </li>
                <li>
                  <a href="#">一加</a>
                </li>
                <li>
                  <a href="#">360手机</a>
                </li>
                <li>
                  <a href="#">锤子Smartisan</a>
                </li>
                <li>
                  <a href="#">摩托罗拉MOTOROLA</a>
                </li>
                <li>
                  <a href="#">守护宝</a>
                </li>
                <li>
                  <a href="#">金立</a>
                </li>
                <li>
                  <a href="#">飞利浦Philips</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item search">
            <h3 class="item_title">为您推荐大家关注的</h3>
            <div class="item_content">
              <ul>
                <li>
                  <a href="#">三星 双卡双待手机</a>
                </li>
                <li>
                  <a href="#">三星 双卡双待 联通</a>
                </li>
                <li>
                  <a href="#">三星 双卡双待 电信</a>
                </li>
                <li>
                  <a href="#">三星 双卡 手机</a>
                </li>
                <li>
                  <a href="#">三星g7008</a>
                </li>
                <li>
                  <a href="#">三星g7109金色</a>
                </li>
                <li>
                  <a href="#">三星g7508q</a>
                </li>
                <li>
                  <a href="#">三星g7200手机</a>
                </li>
                <li>
                  <a href="#">三星g7508手机</a>
                </li>
                <li>
                  <a href="#">三星g8508s手机</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="right_about">
          <div class="tabarea">
            <ul class="tabarea_item good_about">
              <li class="active">
                <a href="#">商品详情</a>
              </li>
              <li>
                <a href="#">包装及参数</a>
              </li>
              <li>
                <a href="#">评价 (2000+)</a>
              </li>
              <li>
                <a href="#" class="sp">问问已购用户</a>
              </li>
              <li>
                <a href="#">售后保障</a>
              </li>
            </ul>
            <div class="saoyisao">
              <span>扫一扫购买</span>
              <em></em>
              <i class="arrow1">﹀</i>
              <i class="arrow2">︿</i>
              <div class="code">
                <img src="img/products/details_shop/code.jpg" alt>
              </div>
            </div>
            <div class="inner_cart">
              <a href="#">
                <span></span>加入购物车
              </a>
              <div class="cart_good_about">
                <img src="img/products/sm/iPhoneXR11.jpg">
                <span class="title">【到手价6099】Apple iPhone XR 128GB 黑色 移动联通电信全网通4G手机 双卡双待</span>
                <span class="price">
                  <i>￥6999.00</i> ×1
                </span>
              </div>
            </div>
            <div class="tabarea_detail good_detail">
              <p class="ccc_auth">
                <i></i>商品获得
                <a href="#">中国强制性产品认证（CCC）证书</a>，符合国家强制性产品认证（CCC）标准
              </p>
              <div id="goodDetails">
                <img src="img/products/goodAbout/iphone.jpg">
                <img src="img/products/goodAbout/title.jpg">
                <img src="img/products/goodAbout/iphoneXR.jpg">
                <img src="img/products/goodAbout/iphoneXR1.jpg">
                <img src="img/products/goodAbout/iphoneXR2.jpg">
                <img src="img/products/goodAbout/iphoneXR3.jpg">
                <img src="img/products/goodAbout/iphoneXR4.jpg">
                <img src="img/products/goodAbout/iphoneXR5.jpg">
              </div>
              <div id="goodFuwu">
                <img src="img/products/goodAbout/fuwu.jpg">
              </div>
              <div id="goodCjwt">
                <img src="img/products/goodAbout/cjwt.jpg">
                <img src="img/products/goodAbout/iphoneCjwt.jpg">
              </div>
              <div class="anchor_list">
                <ul>
                  <li class="active">
                    <a href="#goodDetails">
                      <i></i>商品详情
                    </a>
                  </li>
                  <li>
                    <a href="#goodFuwu">
                      <i></i>售后服务
                    </a>
                  </li>
                  <li>
                    <a href="#goodCjwt">
                      <i></i>常见问题
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import headerToolBar from "../header/headerToolbar.vue";
export default {
  name: "product",
  data() {
    return {
      server: "http://127.0.0.1:3000/",
      pid: 0,
      details: [],
      colors: [],
      pic: [],
      size: [],
      title: "",
      activeImg: 0, //激活的小图
      activeImgSrc: "",
      offsetX: 0,
      offsetY: 0,
      moveMask: {
        top: 0,
        left: 0,
        display: "block"
      },
      lgImg: {
        top: 0,
        left: 0,
        display: "block"
      },
      canMove: false,
      count: 1 //商品个数
    };
  },
  components: {
    headerToolBar
  },
  mounted() {
    this.init();
  },
  watch: {
    // activeImg:{
    // 	function(oldNum, newNum){
    // 		this.activeImgSrc = this.pic[newNum].lg
    // 	}
    // }
  },
  methods: {
    init() {
      console.log(this.$route.params);
      this.pid = this.$route.params.pid;
      this.$axios
        .get("/detail//getDetails", {
          params: {
            pid: this.pid
          }
        })
        .then(res => {
          this.details = res.data.detail;
          this.colors = res.data.colors;
          this.pic = res.data.pic;
          this.size = res.data.size;
          this.activeImgSrc = this.pic[0].lg;
          // console.log(this.pic)
        })
        .catch(err => {
          console.log(err);
        });
    },
    changeImg(i) {
      //小图显示在大图上
      this.activeImg = i;
      this.activeImgSrc = this.pic[this.activeImg].lg;
    },
    moveImgMask(event) {
      this.canMove = true;
      this.offsetX = event.offsetX;
      this.offsetY = event.offsetY;
      this.moveMask.top = event.offsetY - 100;
      this.moveMask.left = event.offsetX - 100;
      if (this.moveMask.top < 0) this.moveMask.top = 0;
      else if (this.moveMask.top > 250) this.moveMask.top = 250;
      if (this.moveMask.left < 0) this.moveMask.left = 0;
      else if (this.moveMask.left > 250) this.moveMask.left = 250;
      // this.lgImg.top = (-800 / 450) * this.moveMask.top;
      // this.lgImg.left = (-800 / 450) * this.moveMask.left;
      this.lgImg.top = -(event.offsetY-100)*800/450
      this.lgImg.left = -(event.offsetX-100)*800/450
      if(this.lgImg.top < -400) this.lgImg.top = -400
      else if(this.lgImg.top>0) this.lgImg.top = 0
      if(this.lgImg.left < -400) this.lgImg.left =-400
      else if(this.lgImg.left >0) this.lgImg.left =0
      this.moveMask.top += "px";
      this.moveMask.left += "px";
      this.lgImg.top += "px";
      this.lgImg.left += "px";
    },
    leaveImgMask() {
      this.canMove = false;
    },
    changeCount(n){
      this.count += n
    }
  }
};
</script>
<style scoped>
@import "../../../static/css/details.css";
</style>



