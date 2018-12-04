<template>
  <div class="index">
    <div class="top-ad">
      <a class="top-close" :class="isAdShow?'top-close2':''" @click.prevent.stop='handleAdShow()'></a>
      <div class="top-img" :class="isAdShow?'show':''">
        <a href="#">
          <img v-lazy="server+'img/index/153846434662748440.png'" >
        </a>
      </div>
    </div>
    <header-tool-bar :isLarge='false' :isIndex='true'></header-tool-bar>
    <header-search class="search" :isLarge='false'></header-search>
    <header-nav-bar :isLarge='false'></header-nav-bar>
    <!--轮播图-->
    <section class="carousel-floor">
      <div class="carousel-bg">
        <ul>
          <li v-for="item of carouselList" :key="item.cid" :class="item.cid==cid?'active':''"></li>
        </ul>
      </div>
      <div class="carousel" @mouseenter.prevent.stop="stopCarousel()" @mouseleave="beginCarousel()">
        <!---->
        <div class="carousel-item">
          <ul>
            <li v-for="item of carouselList" :key="item.cid" :class="item.cid==cid?'active':''">
              <a href="javascript:">
                <img src="" v-lazy='item.img'>
              </a>
            </li>
          </ul>
        </div>
        <ul class="carousel-nav">
          <li
            v-for="item of carouselList"
            :key="item.cid"
            :class="item.cid==cid?'active':''"
            @mouseenter="changeCarousel(item.cid)"
          >
            <a href="#"></a>
          </li>
        </ul>
        <a
          href="javascript:"
          class="btn btn-left"
          :class=" btnShow ? 'btn-show' : ''"
          @click.prevent.stop="btnCarousel(-1)"
        ></a>
        <a
          href="javascript:"
          class="btn btn-right"
          :class=" btnShow ? 'btn-show' : ''"
          @click.prevent.stop="btnCarousel(1)"
        ></a>
      </div>
      <div class="recom">
        <div class="rec-cover"></div>
        <div class="rec-item">
          <ul>
            <li>
              <p class="title">营养奶粉</p>
              <p class="desc">爆款8折起</p>
              <img src="http://127.0.0.1:3000/img/index/recom/rec1.jpg">
            </li>
            <li>
              <p class="title">冰箱洗衣机</p>
              <p class="desc">最高立减1500</p>
              <img src="http://127.0.0.1:3000/img/index/recom/rec2.jpg">
            </li>
            <li>
              <p class="title">家装建材</p>
              <p class="desc">爆款1件7折</p>
              <img src="http://127.0.0.1:3000/img/index/recom/rec3.jpg">
            </li>
            <li>
              <p class="title">电脑换新季</p>
              <p class="desc">旧机抵500起</p>
              <img src="http://127.0.0.1:3000/img/index/recom/rec4.jpg">
            </li>
          </ul>
        </div>
        <div class="rec-tabs"></div>
      </div>
      <div class="right-carousel">
        <div class="user-info">
          <div class="img"></div>
          <p>Hi,你好</p>
          <p class="btn">
            <a href="#">新人有礼</a>
            <a href="#"></a>
          </p>
          <p class="enter">
            <a href="#">
              <em></em>
              <span>领云钻&nbsp;></span>
            </a>
            <a href="#">
              <em></em>
              <span>领券&nbsp;></span>
            </a>
          </p>
        </div>
        <div class="news">
          <ul>
            <li>
              <a href="#">
                <span>[家电]</span>干货&nbsp;|&nbsp;这才是适合中国人的现代厨房，你的家只是摆设
              </a>
            </li>
            <li>
              <a href="#">
                <span>[活动]</span>苏宁红孩子&nbsp;新丝路少儿型秀大赛
              </a>
            </li>
            <li>
              <a href="#">
                <span>[穿搭]</span>入秋后哟怎样挑外套？这四款保暖还不臃肿
              </a>
            </li>
            <li>
              <a href="#">
                <span>[家电]</span>干货|这才是适合中国人的现代厨房，你的家只是摆设
              </a>
            </li>
          </ul>
        </div>
        <div class="living">
          <ul>
            <li>
              <a href>
                <p>话费</p>
              </a>
            </li>
            <li>
              <a href>
                <p>水电煤</p>
              </a>
            </li>
            <li>
              <a href>
                <p>苏宁卡</p>
              </a>
            </li>
            <li>
              <a href>
                <p>理财</p>
              </a>
            </li>
            <li>
              <a href>
                <p>分期</p>
              </a>
            </li>
            <li>
              <a href>
                <p>苏宁公益</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="container">
      <div class="activity-floor">
        <div class="act-bg">
          <a href="#">
            <img src="http://127.0.0.1:3000/img/index/activity/top-at.png">
          </a>
        </div>
        <div class="act-ad">
          <a href="#">
            <img src="http://127.0.0.1:3000/img/index/activity/1.png">
          </a>
          <a href="#">
            <img src="http://127.0.0.1:3000/img/index/activity/2.png">
          </a>
          <a href="#">
            <img src="http://127.0.0.1:3000/img/index/activity/3.png">
          </a>
          <a href="#">
            <img src="http://127.0.0.1:3000/img/index/activity/4.png">
          </a>
          <a href="#">
            <img src="http://127.0.0.1:3000/img/index/activity/5.png">
          </a>
        </div>
      </div>
    </section>
    <section class="container" v-if="scrollTop>0">
      <nav class="floatbar" v-if="scrollTop>2000">
        <div class="barImg"></div>
        <ul>
          <li :class=" scrollTop >2000&&scrollTop<2900 ? 'active':''" v-anchor="1">
            <a href="javascript:void(0)">手机电脑</a>
          </li>
          <li :class=" scrollTop >2900&&scrollTop<3600 ? 'active':''" v-anchor="2">
            <a href="javascript:void(0)">家用电器</a>
          </li>
          <li :class=" scrollTop >3600&&scrollTop<4150 ? 'active':''" v-anchor="3">
            <a href="javascript:void(0)">数码汽车</a>
          </li>
          <li :class=" scrollTop >4150&&scrollTop<4750 ? 'active':''" v-anchor="4">
            <a href="javascript:void(0)">生活家装</a>
          </li>
          <li :class=" scrollTop >4750&&scrollTop<5350 ? 'active':''" v-anchor="5">
            <a href="javascript:void(0)">美味生活</a>
          </li>
          <li :class=" scrollTop >5350&&scrollTop<5850 ? 'active':''" v-anchor="6">
            <a href="javascript:void(0)">母婴美妆</a>
          </li>
          <li :class=" scrollTop >5850&&scrollTop<6350 ? 'active':''" v-anchor="7">
            <a href="javascript:void(0)">服饰运动</a>
          </li>
          <li :class=" scrollTop >6350&&scrollTop<6950 ? 'active':''" v-anchor="8">
            <a href="javascript:void(0)">金融阅读</a>
          </li>
          <li :class=" scrollTop >6950&&scrollTop<7550 ? 'active':''" v-anchor="9">
            <a href="javascript:void(0)">清单拼购</a>
          </li>
          <li :class=" scrollTop >7550 ? 'active':''" v-anchor="10">
            <a href="javascript:void(0)">猜你喜欢</a>
          </li>
        </ul>
        <!-- <ul>
          <li :class=" scrollTop >2000&&scrollTop<2900 ? 'active':''">
            <a href="#anchor-1">手机电脑</a>
          </li>
          <li :class=" scrollTop >2900&&scrollTop<3600 ? 'active':''">
            <a href="#anchor-2">家用电器</a>
          </li>
          <li :class=" scrollTop >3600&&scrollTop<4150 ? 'active':''">
            <a href="#anchor-3">数码汽车</a>
          </li>
          <li :class=" scrollTop >4150&&scrollTop<4750 ? 'active':''">
            <a href="#anchor-4">生活家装</a>
          </li>
          <li :class=" scrollTop >4750&&scrollTop<5350 ? 'active':''">
            <a href="#anchor-5">美味生活</a>
          </li>
          <li :class=" scrollTop >5350&&scrollTop<5850 ? 'active':''">
            <a href="#anchor-6">母婴美妆</a>
          </li>
          <li :class=" scrollTop >5850&&scrollTop<6350 ? 'active':''">
            <a href="#anchor-7">服饰运动</a>
          </li>
          <li :class=" scrollTop >6350&&scrollTop<6950 ? 'active':''">
            <a href="#anchor-8">金融阅读</a>
          </li>
          <li :class=" scrollTop >6950&&scrollTop<7550 ? 'active':''">
            <a href="#anchor-9">清单拼购</a>
          </li>
          <li :class=" scrollTop >7550 ? 'active':''">
            <a href="#anchor-10">猜你喜欢</a>
          </li>
        </ul> -->
        <a href="#" class="toTop"></a>
      </nav>

      <div class="rush-floor">
        <div class="rush-title">
          <img src="http://127.0.0.1:3000/img/index/rush.png">
          <p>距离下场</p>
          <p class="title-time">
            <span class="hour">00</span>
            :
            <span class="minute">00</span>
            :
            <span class="second">00</span>
          </p>
          <ul class="title-times">
            <li class="at">
              <i>10:00场-</i>正在疯抢
            </li>
            <li>
              <i>12:00场-</i>即将开抢
            </li>
            <li>
              <i>14:00场-</i>即将开抢
            </li>
          </ul>
          <a href="#" class="title-more">
            更多抢购
            <i></i>
          </a>
        </div>
        <div class="rush-tabs" v-cloak>
          <div class="tabs">
            <ul :style="qgLeftObj">
              <li v-for="product of qgProduct" :key="product.pid">
                <a href="javascript:">
                  <img :src="product.pic">
                  <p class="item-title" :title="product.title">{{product.title}}</p>
                  <p class="item-price">
                    <span class="price">￥{{product.price}}</span>
                    <span class="old-price">￥{{product.old_price}}</span>
                  </p>
                  <div class="item-count">
                    <p class="line">
                      <span></span>
                    </p>
                    <p>已抢{{product.seld_count}}%</p>
                  </div>
                </a>
              </li>
            </ul>
            <a href="#" class="left-btn" @click.prevent.stop="handleQgProduct(1)"></a>
            <a href="#" class="right-btn" @click.prevent.stop="handleQgProduct(-1)"></a>
          </div>
          <a href="#" class="special-item">
            <img src="http://127.0.0.1:3000/img/index/rush-purchase/special.jpg">
          </a>
        </div>
      </div>
      <!-- 人气好货 生活部落 -->
      <div class="floor-3">
        <ul>
          <li class="floor-hh">
            <div class="title">
              <h5>人气好货</h5>
              <a href="#">
                更多精选
                <i></i>
              </a>
            </div>
            <div class="content">
              <ul>
                <li>
                  <a href="#">
                    <p class="name">雅培幼儿配方奶粉</p>
                    <p class="desc">
                      <span>346</span>人说好
                    </p>
                    <img src="http://127.0.0.1:3000/img/index/floor/1.webp">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p class="name">戴森扫地机器人</p>
                    <p class="desc">
                      <span>472</span>人说好
                    </p>
                    <img src="http://127.0.0.1:3000/img/index/floor/2.webp">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p class="name">雅培金装奶粉</p>
                    <p class="desc">
                      <span>142</span>人说好
                    </p>
                    <img src="http://127.0.0.1:3000/img/index/floor/3.webp">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p class="name">飞科全身水洗电须刀</p>
                    <p class="desc">
                      <span>256</span>人说好
                    </p>
                    <img src="http://127.0.0.1:3000/img/index/floor/4.webp">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p class="name">可爱多婴儿手口湿巾</p>
                    <p class="desc">
                      <span>768</span>人说好
                    </p>
                    <img src="http://127.0.0.1:3000/img/index/floor/5.webp">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p class="name">iPad Pro平板电脑</p>
                    <p class="desc">
                      <span>581</span>人说好
                    </p>
                    <img src="http://127.0.0.1:3000/img/index/floor/6.webp">
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="floor-hot">
            <div class="title">
              <h5>生活部落</h5>
              <a href="#">
                进入专属部部落
                <i></i>
              </a>
              <em></em>
            </div>
            <div class="content">
              <ul>
                <li>
                  <a href="#">
                    <p class="name">爪机党</p>
                    <p class="desc">承包你的爱机</p>
                    <img src="http://127.0.0.1:3000/img/index/floor/hot011.webp">
                    <img src="http://127.0.0.1:3000/img/index/floor/hot01.webp">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p class="name">坚果小当家</p>
                    <p class="desc">坚果我只吃精品</p>
                    <img src="http://127.0.0.1:3000/img/index/floor/hot022.png">
                    <img src="http://127.0.0.1:3000/img/index/floor/hot02.webp">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p class="name">怕冷星人</p>
                    <p class="desc">冷热生活随心</p>
                    <img src="http://127.0.0.1:3000/img/index/floor/hot033.webp">
                    <img src="http://127.0.0.1:3000/img/index/floor/hot03.webp">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p class="name">宝宝营养师</p>
                    <p class="desc">强身健体优选</p>
                    <img src="http://127.0.0.1:3000/img/index/floor/hot044.webp">
                    <img src="http://127.0.0.1:3000/img/index/floor/hot04.webp">
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="floor-rank">
            <div class="title">
              <h5>排行榜</h5>
              <a href="#">
                精品风向标
                <i></i>
              </a>
            </div>
            <div class="content">
              <ul class="rank-list">
                <li class="list-item">
                  <p class="name">休闲食品</p>
                  <ul>
                    <li>
                      <a href="#">
                        <img src="http://127.0.0.1:3000/img/index/floor/rank01.jpg">
                        <p class="title">好吃点 饼干零食香脆腰果饼108g</p>
                        <p class="price">
                          <span>￥</span>4
                          <em>.90</em>
                        </p>
                        <span class="first-rank">1</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="http://127.0.0.1:3000/img/index/floor/rank02.jpg">
                        <p class="title">憨豆熊 (SillyfunnyBear)</p>
                        <p class="price">
                          <span>￥</span>10
                          <em>.90</em>
                        </p>
                        <span class="second-rank">2</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="http://127.0.0.1:3000/img/index/floor/rank03.jpg">
                        <p class="title">憨豆熊 (SillyfunnyBear)</p>
                        <p class="price">
                          <span>￥</span>17
                          <em>.90</em>
                        </p>
                        <span class="third-rank">3</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="list-item">
                  <p class="name">休闲食品</p>
                  <ul>
                    <li>
                      <a href="#">
                        <img src="http://127.0.0.1:3000/img/index/floor/rank01.jpg">
                        <p class="title">好吃点 饼干零食香脆腰果饼108g</p>
                        <p class="price">
                          <span>￥</span>4
                          <em>.90</em>
                        </p>
                        <span class="first-rank">1</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="http://127.0.0.1:3000/img/index/floor/rank02.jpg">
                        <p class="title">憨豆熊 (SillyfunnyBear)</p>
                        <p class="price">
                          <span>￥</span>10
                          <em>.90</em>
                        </p>
                        <span class="second-rank">2</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="http://127.0.0.1:3000/img/index/floor/rank03.jpg">
                        <p class="title">憨豆熊 (SillyfunnyBear)</p>
                        <p class="price">
                          <span>￥</span>17
                          <em>.90</em>
                        </p>
                        <span class="third-rank">3</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <a href="#" class="btn left-btn"></a>
              <a href="#" class="btn right-btn"></a>
              <ul class="page">
                <li class="active"></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <!-- 苏宁Outlets 苏宁国际 -->
      <div class="floor-3 floor-outlets">
        <ul>
          <li class="floor-left">
            <div class="title">
              <h5>苏宁Outlets</h5>
              <a href="#">
                更多大牌特卖
                <i></i>
              </a>
            </div>
            <div class="content">
              <ul>
                <li class="first">
                  <a href="#">
                    <p class="name">大牌特卖</p>
                    <p class="desc">
                      <span>限量抢50元叠加券</span>
                    </p>
                    <img src="http://127.0.0.1:3000/img/index/floor/floorLeft01.jpg">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p class="name">初语 质感秋冬</p>
                    <p class="desc">满298减100</p>
                    <img src="http://127.0.0.1:3000/img/index/floor/floorLeft02.jpg">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p class="name">MK 时尚尖货</p>
                    <p class="desc">满198减100</p>
                    <img src="http://127.0.0.1:3000/img/index/floor/floorLeft03.jpg">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p class="name">李宁 为潮而聚</p>
                    <p class="desc">低至3.8折</p>
                    <img src="http://127.0.0.1:3000/img/index/floor/floorLeft04.jpg">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p class="name">才子男装 型感秋冬</p>
                    <p class="desc">满469减150</p>
                    <img src="http://127.0.0.1:3000/img/index/floor/floorLeft05.jpg">
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="floor-center">
            <div class="title">
              <h5>苏宁国际</h5>
              <a href="#">
                更多国际尖货
                <i></i>
              </a>
            </div>
            <div class="content">
              <ul>
                <li class="first">
                  <a href="#">
                    <p class="name">苏宁国际</p>
                    <p class="desc">
                      <span>海外正品 假一赔十</span>
                    </p>
                    <img src="http://127.0.0.1:3000/img/index/floor/floorCenter01.jpg">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p class="name">营养保健 享健康生活</p>
                    <p class="desc">不到1块钱</p>
                    <img src="http://127.0.0.1:3000/img/index/floor/floorCenter02.jpg">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p class="name">最强剁手榜爆款汇聚</p>
                    <p class="desc">尖货不得不败</p>
                    <img src="http://127.0.0.1:3000/img/index/floor/floorCenter03.jpg">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p class="name">国际直营 正品报障</p>
                    <p class="desc">闪电发货</p>
                    <img src="http://127.0.0.1:3000/img/index/floor/floorCenter04.jpg">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p class="name">家电焕新季 净享深呼吸</p>
                    <p class="desc">低至6折</p>
                    <img src="http://127.0.0.1:3000/img/index/floor/floorCenter05.jpg">
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="floor-right">
            <div class="title">
              <h5>生活家电</h5>
              <a href="#">
                更多生活家电
                <i></i>
              </a>
            </div>
            <div class="content">
              <ul>
                <li class="first">
                  <a href="#">
                    <p class="name">食惠主义 美味来袭</p>
                    <p class="desc">
                      <span>爆款烤箱5折购</span>
                    </p>
                    <img src="http://127.0.0.1:3000/img/index/floor/floorRight01.jpg">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p class="name">生活家电 超值优惠</p>
                    <p class="desc">9.9元抢好货</p>
                    <img src="http://127.0.0.1:3000/img/index/floor/floorRight02.jpg">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p class="name">九阳 好物精选</p>
                    <p class="desc">最高立减600</p>
                    <img src="http://127.0.0.1:3000/img/index/floor/floorRight03.jpg">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p class="name">暖冬开盘特惠</p>
                    <p class="desc">低至89元</p>
                    <img src="http://127.0.0.1:3000/img/index/floor/floorRight04.jpg">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p class="name">"飞" 凡科技净享自信</p>
                    <p class="desc">2件8.8折</p>
                    <img src="http://127.0.0.1:3000/img/index/floor/floorRight05.jpg">
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="enter">
        <div class="enter-left">
          <ul>
            <li class="item-1">
              <a href="#">
                <span class="line line-short"></span>
                <p class="name">苏宁生鲜</p>
                <span class="line line-long"></span>
                <p class="desc">满99减30</p>
                <img v-lazy="server+'img/index/enter/1.png'">
              </a>
            </li>
            <li class="item-2">
              <a href="#">
                <span class="line line-short"></span>
                <p class="name">企业采购</p>
                <span class="line line-long"></span>
                <p class="desc">小家电1件9折 2件8.5折</p>
                <img v-lazy="server+'img/index/enter/2.png'">
              </a>
            </li>
            <li class="item-3">
              <a href="#">
                <span class="line line-short"></span>
                <p class="name">智能生活</p>
                <span class="line line-long"></span>
                <p class="desc">0元预约智能音箱</p>
                <img v-lazy="server+'img/index/enter/3.png'">
              </a>
            </li>
            <li class="item-4">
              <a href="#">
                <span class="line line-short"></span>
                <p class="name">苏宁众筹</p>
                <span class="line line-long"></span>
                <p class="desc">萌小宠陪伴灯</p>
                <img v-lazy="server+'img/index/enter/4.png'">
              </a>
            </li>
            <li class="item-5">
              <a href="#">
                <span class="line line-short"></span>
                <p class="name">二手优品</p>
                <span class="line line-long"></span>
                <p class="desc">iPhone X低价抢</p>
                <img v-lazy="server+'img/index/enter/5.png'">
              </a>
            </li>
            <li class="item-6">
              <a href="#">
                <span class="line line-short"></span>
                <p class="name">领券中心</p>
                <span class="line line-long"></span>
                <p class="desc">外交官箱包满399减200</p>
                <img v-lazy="server+'img/index/enter/6.png'">
              </a>
            </li>
          </ul>
        </div>
        <div class="enter-sp">
          <div class="title">
            <h5>视频</h5>
          </div>
          <div class="big-sp">
            <ul>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/enter/sp1.jpg'">
                  <div class="opacity-mask"></div>
                  <span></span>
                  <i class="hf">回放</i>
                  <div class="dark-bg"></div>
                  <p class="name">天润网红酸奶，随时随地享美味！</p>
                </a>
              </li>
            </ul>
          </div>
          <div class="item-sp">
            <ul>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/enter/sp1.jpg'">
                  <div class="opacity-mask"></div>
                  <span></span>
                  <p class="name"># 天润网红酸奶，随时随地享美味！</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/enter/sp2.jpg'">
                  <div class="opacity-mask"></div>
                  <span></span>
                  <p class="name"># 花姿芳内衣，女神们的首选！</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/enter/sp3.jpg'">
                  <div class="opacity-mask"></div>
                  <span></span>
                  <p class="name"># 网红小姐姐安利，精致生活好物199-50</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/enter/sp4.jpg'">
                  <div class="opacity-mask"></div>
                  <span></span>
                  <p class="name"># 美女主播的良品吃吃小屋</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/enter/sp5.jpg'">
                  <div class="opacity-mask"></div>
                  <span></span>
                  <p class="name"># 进口扫地机面对国内复杂的家居能靠谱吗？</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/enter/sp6.jpg'">
                  <div class="opacity-mask"></div>
                  <span></span>
                  <p class="name"># 最潮流，最IN的潮物，尽在直播间</p>
                </a>
              </li>
            </ul>
            <a class="btn left-btn" href="#"></a>
            <a class="btn right-btn" href="#"></a>
          </div>
        </div>
        <div class="enter-right">
          <ul>
            <li class="item-7">
              <a href="#">
                <p class="name">苏宁金融</p>
                <p class="desc">中信银行满99减50</p>
                <img v-lazy="server+'img/index/enter/7.png'">
              </a>
            </li>
            <li class="item-8">
              <a href="#">
                <p class="name">中华特色馆</p>
                <img v-lazy="server+'img/index/enter/8.png'">
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="floor-ad">
        <a href="#">
          <img v-lazy="server+'img/index/adList/1.jpg'">
        </a>
        <a href="#">
          <img v-lazy="server+'img/index/adList/2.jpg'">
        </a>
        <a href="#">
          <img v-lazy="server+'img/index/adList/3.jpg'">
        </a>
      </div>
      <div class="floor-2" id="anchor-1">
        <div class="floor-t floor-left floor-shouji">
          <div class="title">
            <div class="title-name">
              <h5>热门手机</h5>
              <div class="code"></div>
            </div>
            <div class="title-keywords">
              <ul>
                <li>
                  <a href="#">正品好店</a>
                </li>
                <li>
                  <a href="#">手机周边</a>
                </li>
                <li>
                  <a href="#">手机维修</a>
                </li>
                <li>
                  <a href="#">以旧换新</a>
                </li>
                <li>
                  <a href="#">号卡宽带</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="content clear">
            <div class="left-content">
              <a href="javascript:void(0)">
                <img v-lazy="indexProduct[0].pic">
              </a>
              <div class="left-bottom">
                <p class="name" v-text="indexProduct[0].title">爆款手机5折起</p>
                <p class="desc" v-text="indexProduct[0].det">iPhone XS新品享12期免息</p>
              </div>
            </div>
            <div class="right-content">
              <ul>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[1].title">vivo Z3抢先预定</p>
                    <p class="desc" v-text="indexProduct[1].det">新品预定赢新机</p>
                    <img v-lazy="indexProduct[1].pic">
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[2].title">小米8限时直降</p>
                    <p class="desc" v-text="indexProduct[2].det">立省200元</p>
                    <img v-lazy="indexProduct[2].pic">
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[3].title">iPhone X 64GB</p>
                    <p class="desc" v-text="indexProduct[3].det">深空灰低至6878元</p>
                    <img v-lazy="indexProduct[3].pic">
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[4].title">华为Mate20</p>
                    <p class="desc" v-text="indexProduct[4].det">新品预定享6重礼</p>
                    <img v-lazy="indexProduct[4].pic">
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="bottom-list">
            <ul>
              <li>
                <a href="javascript:void(0)">
                  <p class="name" v-text="indexProduct[5].title">荣耀8C</p>
                  <p class="desc" v-text="indexProduct[5].det">新品限量抢</p>
                  <img v-lazy="indexProduct[5].pic">
                </a>
              </li>
              <li>
                <a href="#">
                  <p class="name" v-text="indexProduct[6].title">OPPO K1</p>
                  <p class="desc" v-text="indexProduct[6].det">新品赠豪礼</p>
                  <img v-lazy="indexProduct[6].pic">
                </a>
              </li>
              <li>
                <a href="#">
                  <p class="name" v-text="indexProduct[7].title">诺基亚x5</p>
                  <p class="desc" v-text="indexProduct[7].det">3期免息</p>
                  <img v-lazy="indexProduct[7].pic">
                </a>
              </li>
            </ul>
          </div>
          <div class="brand">
            <ul>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/01.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/02.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/03.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/04.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/05.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/06.jpg'">
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="floor-t floor-right floor-diannao">
          <div class="title">
            <div class="title-name">
              <h5>电脑办公</h5>
              <div class="code"></div>
            </div>
            <div class="title-keywords">
              <ul>
                <li>
                  <a href="#">以旧换新</a>
                </li>
                <li>
                  <a href="#">电竞馆</a>
                </li>
                <li>
                  <a href="#">学生惠</a>
                </li>
                <li>
                  <a href="#">女神馆</a>
                </li>
                <li>
                  <a href="#">企业馆</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="content clear">
            <div class="left-content">
              <a href="#">
                <img src="" v-lazy='indexProduct[0].pic'>
              </a>
              <div class="left-bottom">
                <p class="name" v-text='indexProduct[0].title'>爆款手机5折起</p>
                <p class="desc" v-text='indexProduct[0].det'>iPhone XS新品享12期免息</p>
              </div>
            </div>
            <div class="right-content">
              <ul>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[1].title">vivo Z3抢先预定</p>
                    <p class="desc" v-text="indexProduct[1].det">新品预定赢新机</p>
                    <img v-lazy="indexProduct[1].pic">
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[2].title">小米8限时直降</p>
                    <p class="desc" v-text="indexProduct[2].det">立省200元</p>
                    <img v-lazy="indexProduct[2].pic">
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[3].title">iPhone X 64GB</p>
                    <p class="desc" v-text="indexProduct[3].det">深空灰低至6878元</p>
                    <img v-lazy="indexProduct[3].pic">
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[4].title">华为Mate20</p>
                    <p class="desc" v-text="indexProduct[4].det">新品预定享6重礼</p>
                    <img v-lazy="indexProduct[4].pic">
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="bottom-list">
            <ul>
              <li>
                <a href="javascript:void(0)">
                  <p class="name" v-text="indexProduct[5].title">荣耀8C</p>
                  <p class="desc" v-text="indexProduct[5].det">新品限量抢</p>
                  <img v-lazy="indexProduct[5].pic">
                </a>
              </li>
              <li>
                <a href="#">
                  <p class="name" v-text="indexProduct[6].title">OPPO K1</p>
                  <p class="desc" v-text="indexProduct[6].det">新品赠豪礼</p>
                  <img v-lazy="indexProduct[6].pic">
                </a>
              </li>
              <li>
                <a href="#">
                  <p class="name" v-text="indexProduct[7].title">诺基亚x5</p>
                  <p class="desc" v-text="indexProduct[7].det">3期免息</p>
                  <img v-lazy="indexProduct[7].pic">
                </a>
              </li>
            </ul>
          </div>
          <div class="brand">
            <ul>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/01.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/02.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/03.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/04.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/05.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/06.jpg'">
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="floor-ad">
        <a href="#" class="one">
          <img v-lazy="server+'img/index/adList/11.jpg'">
        </a>
      </div>
      <div class="floor-1" id="anchor-2">
        <div class="floor-t floor-dianqi">
          <div class="title">
            <div class="title-name">
              <h5>家用电器</h5>
              <div class="code"></div>
            </div>
            <div class="title-keywords">
              <ul>
                <li>
                  <a href="#">冰箱洗衣机</a>
                </li>
                <li>
                  <a href="#">热水器</a>
                </li>
                <li>
                  <a href="#">平板电视</a>
                </li>
                <li>
                  <a href="#">空调</a>
                </li>
                <li>
                  <a href="#">智能影音</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="content clear">
            <div class="left">
              <div class="left-content">
                <a href="#">
                  <img v-lazy="indexProduct[0].pic">
                </a>
                <div class="left-bottom">
                  <p class="name" v-text='indexProduct[0].title'>爆款手机5折起</p>
                  <p class="desc" v-text='indexProduct[0].det'>iPhone XS新品享12期免息</p>
                </div>
              </div>
              <div class="right-content">
                <ul>
                  <li>
                    <a href="javascript:void(0)">
                      <p class="name" v-text="indexProduct[1].title">vivo Z3抢先预定</p>
                      <p class="desc" v-text="indexProduct[1].det">新品预定赢新机</p>
                      <img v-lazy="indexProduct[1].pic">
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <p class="name" v-text="indexProduct[2].title">小米8限时直降</p>
                      <p class="desc" v-text="indexProduct[2].det">立省200元</p>
                      <img v-lazy="indexProduct[2].pic">
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <p class="name" v-text="indexProduct[3].title">iPhone X 64GB</p>
                      <p class="desc" v-text="indexProduct[3].det">深空灰低至6878元</p>
                      <img v-lazy="indexProduct[3].pic">
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <p class="name" v-text="indexProduct[4].title">华为Mate20</p>
                      <p class="desc" v-text="indexProduct[4].det">新品预定享6重礼</p>
                      <img v-lazy="indexProduct[4].pic">
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="right">
              <div class="left-content">
                <a href="#">
                  <img v-lazy="indexProduct[0].pic">
                </a>
                <div class="left-top">
                  <p class="name" v-text='indexProduct[0].title'>爆款手机5折起</p>
                  <p class="desc" v-text='indexProduct[0].det'>iPhone XS新品享12期免息</p>
                </div>
              </div>
              <div class="right-content">
                <ul>
                  <li>
                    <a href="javascript:void(0)">
                      <p class="name" v-text="indexProduct[1].title">vivo Z3抢先预定</p>
                      <p class="desc" v-text="indexProduct[1].det">新品预定赢新机</p>
                      <img v-lazy="indexProduct[1].pic">
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <p class="name" v-text="indexProduct[2].title">小米8限时直降</p>
                      <p class="desc" v-text="indexProduct[2].det">立省200元</p>
                      <img v-lazy="indexProduct[2].pic">
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <p class="name" v-text="indexProduct[3].title">iPhone X 64GB</p>
                      <p class="desc" v-text="indexProduct[3].det">深空灰低至6878元</p>
                      <img v-lazy="indexProduct[3].pic">
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <p class="name" v-text="indexProduct[4].title">华为Mate20</p>
                      <p class="desc" v-text="indexProduct[4].det">新品预定享6重礼</p>
                      <img v-lazy="indexProduct[4].pic">
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="brand">
            <ul>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/01.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/02.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/03.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/04.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/05.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/06.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/01.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/02.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/03.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/04.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/05.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/06.jpg'">
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="floor-ad">
        <a href="#">
          <img v-lazy="server+'img/index/adList/111.jpg'">
        </a>
        <a href="#">
          <img v-lazy="server+'img/index/adList/222.jpg'">
        </a>
        <a href="#">
          <img v-lazy="server+'img/index/adList/333.jpg'">
        </a>
      </div>
      <div class="floor-2" id="anchor-3">
        <div class="floor-t floor-left floor-shuma">
          <div class="title">
            <div class="title-name">
              <h5>智能数码</h5>
              <div class="code"></div>
            </div>
            <div class="title-keywords">
              <ul>
                <li>
                  <a href="#">相机频道</a>
                </li>
                <li>
                  <a href="#">智能频道</a>
                </li>
                <li>
                  <a href="#">单反相机</a>
                </li>
                <li>
                  <a href="#">平衡车</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="content clear">
            <div class="left-content">
              <a href="javascript:void(0)">
                <img v-lazy="indexProduct[0].pic">
              </a>
              <div class="left-bottom">
                <p class="name" v-text="indexProduct[0].title">爆款手机5折起</p>
                <p class="desc" v-text="indexProduct[0].det">iPhone XS新品享12期免息</p>
              </div>
            </div>
            <div class="right-content">
              <ul>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[1].title">vivo Z3抢先预定</p>
                    <p class="desc" v-text="indexProduct[1].det">新品预定赢新机</p>
                    <img v-lazy="indexProduct[1].pic">
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[2].title">小米8限时直降</p>
                    <p class="desc" v-text="indexProduct[2].det">立省200元</p>
                    <img v-lazy="indexProduct[2].pic">
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[3].title">iPhone X 64GB</p>
                    <p class="desc" v-text="indexProduct[3].det">深空灰低至6878元</p>
                    <img v-lazy="indexProduct[3].pic">
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[4].title">华为Mate20</p>
                    <p class="desc" v-text="indexProduct[4].det">新品预定享6重礼</p>
                    <img v-lazy="indexProduct[4].pic">
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="bottom-list">
            <ul>
              <li>
                <a href="javascript:void(0)">
                  <p class="name" v-text="indexProduct[5].title">荣耀8C</p>
                  <p class="desc" v-text="indexProduct[5].det">新品限量抢</p>
                  <img v-lazy="indexProduct[5].pic">
                </a>
              </li>
              <li>
                <a href="#">
                  <p class="name" v-text="indexProduct[6].title">OPPO K1</p>
                  <p class="desc" v-text="indexProduct[6].det">新品赠豪礼</p>
                  <img v-lazy="indexProduct[6].pic">
                </a>
              </li>
              <li>
                <a href="#">
                  <p class="name" v-text="indexProduct[7].title">诺基亚x5</p>
                  <p class="desc" v-text="indexProduct[7].det">3期免息</p>
                  <img v-lazy="indexProduct[7].pic">
                </a>
              </li>
            </ul>
          </div>
          <div class="brand">
            <ul>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/01.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/02.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/03.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/04.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/05.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/06.jpg'">
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="floor-t floor-right floor-qiche">
          <div class="title">
            <div class="title-name">
              <h5>汽车用品</h5>
              <div class="code"></div>
            </div>
            <div class="title-keywords">
              <ul>
                <li>
                  <a href="#">苏宁汽车</a>
                </li>
                <li>
                  <a href="#">特价新车</a>
                </li>
                <li>
                  <a href="#">品质二手车</a>
                </li>
                <li>
                  <a href="#">汽车用品</a>
                </li>
                <li>
                  <a href="#">车管家</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="content clear">
            <div class="left-content">
              <a href="javascript:void(0)">
                <img v-lazy="indexProduct[0].pic">
              </a>
              <div class="left-bottom">
                <p class="name" v-text="indexProduct[0].title">爆款手机5折起</p>
                <p class="desc" v-text="indexProduct[0].det">iPhone XS新品享12期免息</p>
              </div>
            </div>
            <div class="right-content">
              <ul>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[1].title">vivo Z3抢先预定</p>
                    <p class="desc" v-text="indexProduct[1].det">新品预定赢新机</p>
                    <img v-lazy="indexProduct[1].pic">
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[2].title">小米8限时直降</p>
                    <p class="desc" v-text="indexProduct[2].det">立省200元</p>
                    <img v-lazy="indexProduct[2].pic">
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[3].title">iPhone X 64GB</p>
                    <p class="desc" v-text="indexProduct[3].det">深空灰低至6878元</p>
                    <img v-lazy="indexProduct[3].pic">
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[4].title">华为Mate20</p>
                    <p class="desc" v-text="indexProduct[4].det">新品预定享6重礼</p>
                    <img v-lazy="indexProduct[4].pic">
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="bottom-list">
            <ul>
              <li>
                <a href="javascript:void(0)">
                  <p class="name" v-text="indexProduct[5].title">荣耀8C</p>
                  <p class="desc" v-text="indexProduct[5].det">新品限量抢</p>
                  <img v-lazy="indexProduct[5].pic">
                </a>
              </li>
              <li>
                <a href="#">
                  <p class="name" v-text="indexProduct[6].title">OPPO K1</p>
                  <p class="desc" v-text="indexProduct[6].det">新品赠豪礼</p>
                  <img v-lazy="indexProduct[6].pic">
                </a>
              </li>
              <li>
                <a href="#">
                  <p class="name" v-text="indexProduct[7].title">诺基亚x5</p>
                  <p class="desc" v-text="indexProduct[7].det">3期免息</p>
                  <img v-lazy="indexProduct[7].pic">
                </a>
              </li>
            </ul>
          </div>
          <div class="brand">
            <ul>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/01.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/02.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/03.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/04.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/05.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/06.jpg'">
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="floor-2" id="anchor-4">
        <div class="floor-t floor-left floor-jiadian">
          <div class="title">
            <div class="title-name">
              <h5>生活家电</h5>
              <div class="code"></div>
            </div>
            <div class="title-keywords">
              <ul>
                <li>
                  <a href="#">生活家电</a>
                </li>
                <li>
                  <a href="#">日用家纺</a>
                </li>
                <li>
                  <a href="#">厨具频道</a>
                </li>
                <li>
                  <a href="#">个护健康</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="content clear">
            <div class="left-content">
              <a href="javascript:void(0)">
                <img v-lazy="indexProduct[0].pic">
              </a>
              <div class="left-bottom">
                <p class="name" v-text="indexProduct[0].title">爆款手机5折起</p>
                <p class="desc" v-text="indexProduct[0].det">iPhone XS新品享12期免息</p>
              </div>
            </div>
            <div class="right-content">
              <ul>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[1].title">vivo Z3抢先预定</p>
                    <p class="desc" v-text="indexProduct[1].det">新品预定赢新机</p>
                    <img v-lazy="indexProduct[1].pic">
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[2].title">小米8限时直降</p>
                    <p class="desc" v-text="indexProduct[2].det">立省200元</p>
                    <img v-lazy="indexProduct[2].pic">
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[3].title">iPhone X 64GB</p>
                    <p class="desc" v-text="indexProduct[3].det">深空灰低至6878元</p>
                    <img v-lazy="indexProduct[3].pic">
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[4].title">华为Mate20</p>
                    <p class="desc" v-text="indexProduct[4].det">新品预定享6重礼</p>
                    <img v-lazy="indexProduct[4].pic">
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="bottom-list">
            <ul>
              <li>
                <a href="javascript:void(0)">
                  <p class="name" v-text="indexProduct[5].title">荣耀8C</p>
                  <p class="desc" v-text="indexProduct[5].det">新品限量抢</p>
                  <img v-lazy="indexProduct[5].pic">
                </a>
              </li>
              <li>
                <a href="#">
                  <p class="name" v-text="indexProduct[6].title">OPPO K1</p>
                  <p class="desc" v-text="indexProduct[6].det">新品赠豪礼</p>
                  <img v-lazy="indexProduct[6].pic">
                </a>
              </li>
              <li>
                <a href="#">
                  <p class="name" v-text="indexProduct[7].title">诺基亚x5</p>
                  <p class="desc" v-text="indexProduct[7].det">3期免息</p>
                  <img v-lazy="indexProduct[7].pic">
                </a>
              </li>
            </ul>
          </div>
          <div class="brand">
            <ul>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/01.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/02.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/03.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/04.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/05.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/06.jpg'">
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="floor-t floor-right floor-jiancai">
          <div class="title">
            <div class="title-name">
              <h5>家装建材</h5>
              <div class="code"></div>
            </div>
            <div class="title-keywords">
              <ul>
                <li>
                  <a href="#">正家装狂欢购</a>
                </li>
                <li>
                  <a href="#">家具馆</a>
                </li>
                <li>
                  <a href="#">卫浴馆</a>
                </li>
                <li>
                  <a href="#">家装馆</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="content clear">
            <div class="left-content">
              <a href="javascript:void(0)">
                <img v-lazy="indexProduct[0].pic">
              </a>
              <div class="left-bottom">
                <p class="name" v-text="indexProduct[0].title">爆款手机5折起</p>
                <p class="desc" v-text="indexProduct[0].det">iPhone XS新品享12期免息</p>
              </div>
            </div>
            <div class="right-content">
              <ul>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[1].title">vivo Z3抢先预定</p>
                    <p class="desc" v-text="indexProduct[1].det">新品预定赢新机</p>
                    <img v-lazy="indexProduct[1].pic">
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[2].title">小米8限时直降</p>
                    <p class="desc" v-text="indexProduct[2].det">立省200元</p>
                    <img v-lazy="indexProduct[2].pic">
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[3].title">iPhone X 64GB</p>
                    <p class="desc" v-text="indexProduct[3].det">深空灰低至6878元</p>
                    <img v-lazy="indexProduct[3].pic">
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[4].title">华为Mate20</p>
                    <p class="desc" v-text="indexProduct[4].det">新品预定享6重礼</p>
                    <img v-lazy="indexProduct[4].pic">
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="bottom-list">
            <ul>
              <li>
                <a href="javascript:void(0)">
                  <p class="name" v-text="indexProduct[5].title">荣耀8C</p>
                  <p class="desc" v-text="indexProduct[5].det">新品限量抢</p>
                  <img v-lazy="indexProduct[5].pic">
                </a>
              </li>
              <li>
                <a href="#">
                  <p class="name" v-text="indexProduct[6].title">OPPO K1</p>
                  <p class="desc" v-text="indexProduct[6].det">新品赠豪礼</p>
                  <img v-lazy="indexProduct[6].pic">
                </a>
              </li>
              <li>
                <a href="#">
                  <p class="name" v-text="indexProduct[7].title">诺基亚x5</p>
                  <p class="desc" v-text="indexProduct[7].det">3期免息</p>
                  <img v-lazy="indexProduct[7].pic">
                </a>
              </li>
            </ul>
          </div>
          <div class="brand">
            <ul>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/01.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/02.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/03.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/04.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/05.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/06.jpg'">
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="floor-1" id="anchor-5">
        <div class="floor-t floor-shenghuo">
          <div class="title">
            <div class="title-name">
              <h5>美味生活</h5>
              <div class="code"></div>
            </div>
            <div class="title-keywords">
              <ul>
                <li>
                  <a href="#">生鲜水果</a>
                </li>
                <li>
                  <a href="#">白酒</a>
                </li>
                <li>
                  <a href="#">食用油</a>
                </li>
                <li>
                  <a href="#">生活用纸</a>
                </li>
                <li>
                  <a href="#">水壶水杯</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="content clear">
            <div class="left">
              <div class="left-content">
                <a href="#">
                  <img v-lazy="indexProduct[0].pic">
                </a>
                <div class="left-bottom">
                  <p class="name" v-text='indexProduct[0].title'>爆款手机5折起</p>
                  <p class="desc" v-text='indexProduct[0].det'>iPhone XS新品享12期免息</p>
                </div>
              </div>
              <div class="right-content">
                <ul>
                  <li>
                    <a href="javascript:void(0)">
                      <p class="name" v-text="indexProduct[1].title">vivo Z3抢先预定</p>
                      <p class="desc" v-text="indexProduct[1].det">新品预定赢新机</p>
                      <img v-lazy="indexProduct[1].pic">
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <p class="name" v-text="indexProduct[2].title">小米8限时直降</p>
                      <p class="desc" v-text="indexProduct[2].det">立省200元</p>
                      <img v-lazy="indexProduct[2].pic">
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <p class="name" v-text="indexProduct[3].title">iPhone X 64GB</p>
                      <p class="desc" v-text="indexProduct[3].det">深空灰低至6878元</p>
                      <img v-lazy="indexProduct[3].pic">
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <p class="name" v-text="indexProduct[4].title">华为Mate20</p>
                      <p class="desc" v-text="indexProduct[4].det">新品预定享6重礼</p>
                      <img v-lazy="indexProduct[4].pic">
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="right">
              <div class="left-content">
                <a href="#">
                  <img v-lazy="indexProduct[0].pic">
                </a>
                <div class="left-top">
                  <p class="name" v-text='indexProduct[0].title'>爆款手机5折起</p>
                  <p class="desc" v-text='indexProduct[0].det'>iPhone XS新品享12期免息</p>
                </div>
              </div>
              <div class="right-content">
                <ul>
                  <li>
                    <a href="javascript:void(0)">
                      <p class="name" v-text="indexProduct[1].title">vivo Z3抢先预定</p>
                      <p class="desc" v-text="indexProduct[1].det">新品预定赢新机</p>
                      <img v-lazy="indexProduct[1].pic">
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <p class="name" v-text="indexProduct[2].title">小米8限时直降</p>
                      <p class="desc" v-text="indexProduct[2].det">立省200元</p>
                      <img v-lazy="indexProduct[2].pic">
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <p class="name" v-text="indexProduct[3].title">iPhone X 64GB</p>
                      <p class="desc" v-text="indexProduct[3].det">深空灰低至6878元</p>
                      <img v-lazy="indexProduct[3].pic">
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <p class="name" v-text="indexProduct[4].title">华为Mate20</p>
                      <p class="desc" v-text="indexProduct[4].det">新品预定享6重礼</p>
                      <img v-lazy="indexProduct[4].pic">
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="brand">
            <ul>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/01.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/02.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/03.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/04.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/05.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/06.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/01.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/02.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/03.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/04.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/05.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/06.jpg'">
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="floor-2" id="anchor-6">
        <div class="floor-t floor-left floor-mengwa">
          <div class="title">
            <div class="title-name">
              <h5>美妈萌娃</h5>
              <div class="code"></div>
            </div>
            <div class="title-keywords">
              <ul>
                <li>
                  <a href="#">车床座椅</a>
                </li>
                <li>
                  <a href="#">玩具装备</a>
                </li>
                <li>
                  <a href="#">尿裤精选</a>
                </li>
                <li>
                  <a href="#">营养奶粉</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="content clear">
            <div class="left-content">
              <a href="javascript:void(0)">
                <img v-lazy="indexProduct[0].pic">
              </a>
              <div class="left-bottom">
                <p class="name" v-text="indexProduct[0].title">爆款手机5折起</p>
                <p class="desc" v-text="indexProduct[0].det">iPhone XS新品享12期免息</p>
              </div>
            </div>
            <div class="right-content">
              <ul>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[1].title">vivo Z3抢先预定</p>
                    <p class="desc" v-text="indexProduct[1].det">新品预定赢新机</p>
                    <img v-lazy="indexProduct[1].pic">
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[2].title">小米8限时直降</p>
                    <p class="desc" v-text="indexProduct[2].det">立省200元</p>
                    <img v-lazy="indexProduct[2].pic">
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[3].title">iPhone X 64GB</p>
                    <p class="desc" v-text="indexProduct[3].det">深空灰低至6878元</p>
                    <img v-lazy="indexProduct[3].pic">
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[4].title">华为Mate20</p>
                    <p class="desc" v-text="indexProduct[4].det">新品预定享6重礼</p>
                    <img v-lazy="indexProduct[4].pic">
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="bottom-list">
            <ul>
              <li>
                <a href="javascript:void(0)">
                  <p class="name" v-text="indexProduct[5].title">荣耀8C</p>
                  <p class="desc" v-text="indexProduct[5].det">新品限量抢</p>
                  <img v-lazy="indexProduct[5].pic">
                </a>
              </li>
              <li>
                <a href="#">
                  <p class="name" v-text="indexProduct[6].title">OPPO K1</p>
                  <p class="desc" v-text="indexProduct[6].det">新品赠豪礼</p>
                  <img v-lazy="indexProduct[6].pic">
                </a>
              </li>
              <li>
                <a href="#">
                  <p class="name" v-text="indexProduct[7].title">诺基亚x5</p>
                  <p class="desc" v-text="indexProduct[7].det">3期免息</p>
                  <img v-lazy="indexProduct[7].pic">
                </a>
              </li>
            </ul>
          </div>
          <div class="brand">
            <ul>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/01.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/02.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/03.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/04.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/05.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/06.jpg'">
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="floor-t floor-right floor-gehu">
          <div class="title">
            <div class="title-name">
              <h5>美妆个护</h5>
              <div class="code"></div>
            </div>
            <div class="title-keywords">
              <ul>
                <li>
                  <a href="#">面膜</a>
                </li>
                <li>
                  <a href="#">卫生巾</a>
                </li>
                <li>
                  <a href="#">面霜</a>
                </li>
                <li>
                  <a href="#">洗护发</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="content clear">
            <div class="left-content">
              <a href="javascript:void(0)">
                <img v-lazy="indexProduct[0].pic">
              </a>
              <div class="left-bottom">
                <p class="name" v-text="indexProduct[0].title">爆款手机5折起</p>
                <p class="desc" v-text="indexProduct[0].det">iPhone XS新品享12期免息</p>
              </div>
            </div>
            <div class="right-content">
              <ul>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[1].title">vivo Z3抢先预定</p>
                    <p class="desc" v-text="indexProduct[1].det">新品预定赢新机</p>
                    <img v-lazy="indexProduct[1].pic">
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[2].title">小米8限时直降</p>
                    <p class="desc" v-text="indexProduct[2].det">立省200元</p>
                    <img v-lazy="indexProduct[2].pic">
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[3].title">iPhone X 64GB</p>
                    <p class="desc" v-text="indexProduct[3].det">深空灰低至6878元</p>
                    <img v-lazy="indexProduct[3].pic">
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[4].title">华为Mate20</p>
                    <p class="desc" v-text="indexProduct[4].det">新品预定享6重礼</p>
                    <img v-lazy="indexProduct[4].pic">
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="bottom-list">
            <ul>
              <li>
                <a href="javascript:void(0)">
                  <p class="name" v-text="indexProduct[5].title">荣耀8C</p>
                  <p class="desc" v-text="indexProduct[5].det">新品限量抢</p>
                  <img v-lazy="indexProduct[5].pic">
                </a>
              </li>
              <li>
                <a href="#">
                  <p class="name" v-text="indexProduct[6].title">OPPO K1</p>
                  <p class="desc" v-text="indexProduct[6].det">新品赠豪礼</p>
                  <img v-lazy="indexProduct[6].pic">
                </a>
              </li>
              <li>
                <a href="#">
                  <p class="name" v-text="indexProduct[7].title">诺基亚x5</p>
                  <p class="desc" v-text="indexProduct[7].det">3期免息</p>
                  <img v-lazy="indexProduct[7].pic">
                </a>
              </li>
            </ul>
          </div>
          <div class="brand">
            <ul>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/01.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/02.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/03.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/04.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/05.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/06.jpg'">
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="floor-2" id="anchor-7">
        <div class="floor-t floor-left floor-peishi">
          <div class="title">
            <div class="title-name">
              <h5>服装配饰</h5>
              <div class="code"></div>
            </div>
            <div class="title-keywords">
              <ul>
                <li>
                  <a href="#">太平鸟男装</a>
                </li>
                <li>
                  <a href="#">周大福</a>
                </li>
                <li>
                  <a href="#">森马</a>
                </li>
                <li>
                  <a href="#">天王品牌日</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="content clear">
            <div class="left-content">
              <a href="javascript:void(0)">
                <img v-lazy="indexProduct[0].pic">
              </a>
              <div class="left-bottom">
                <p class="name" v-text="indexProduct[0].title">爆款手机5折起</p>
                <p class="desc" v-text="indexProduct[0].det">iPhone XS新品享12期免息</p>
              </div>
            </div>
            <div class="right-content">
              <ul>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[1].title">vivo Z3抢先预定</p>
                    <p class="desc" v-text="indexProduct[1].det">新品预定赢新机</p>
                    <img v-lazy="indexProduct[1].pic">
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[2].title">小米8限时直降</p>
                    <p class="desc" v-text="indexProduct[2].det">立省200元</p>
                    <img v-lazy="indexProduct[2].pic">
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[3].title">iPhone X 64GB</p>
                    <p class="desc" v-text="indexProduct[3].det">深空灰低至6878元</p>
                    <img v-lazy="indexProduct[3].pic">
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[4].title">华为Mate20</p>
                    <p class="desc" v-text="indexProduct[4].det">新品预定享6重礼</p>
                    <img v-lazy="indexProduct[4].pic">
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="bottom-list">
            <ul>
              <li>
                <a href="javascript:void(0)">
                  <p class="name" v-text="indexProduct[5].title">荣耀8C</p>
                  <p class="desc" v-text="indexProduct[5].det">新品限量抢</p>
                  <img v-lazy="indexProduct[5].pic">
                </a>
              </li>
              <li>
                <a href="#">
                  <p class="name" v-text="indexProduct[6].title">OPPO K1</p>
                  <p class="desc" v-text="indexProduct[6].det">新品赠豪礼</p>
                  <img v-lazy="indexProduct[6].pic">
                </a>
              </li>
              <li>
                <a href="#">
                  <p class="name" v-text="indexProduct[7].title">诺基亚x5</p>
                  <p class="desc" v-text="indexProduct[7].det">3期免息</p>
                  <img v-lazy="indexProduct[7].pic">
                </a>
              </li>
            </ul>
          </div>
          <div class="brand">
            <ul>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/01.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/02.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/03.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/04.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/05.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/06.jpg'">
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="floor-t floor-right floor-yundong">
          <div class="title">
            <div class="title-name">
              <h5>运动户外</h5>
              <div class="code"></div>
            </div>
            <div class="title-keywords">
              <ul>
                <li>
                  <a href="#">国米</a>
                </li>
                <li>
                  <a href="#">耐克</a>
                </li>
                <li>
                  <a href="#">安踏</a>
                </li>
                <li>
                  <a href="#">阿迪达斯</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="content clear">
            <div class="left-content">
              <a href="javascript:void(0)">
                <img v-lazy="indexProduct[0].pic">
              </a>
              <div class="left-bottom">
                <p class="name" v-text="indexProduct[0].title">爆款手机5折起</p>
                <p class="desc" v-text="indexProduct[0].det">iPhone XS新品享12期免息</p>
              </div>
            </div>
            <div class="right-content">
              <ul>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[1].title">vivo Z3抢先预定</p>
                    <p class="desc" v-text="indexProduct[1].det">新品预定赢新机</p>
                    <img v-lazy="indexProduct[1].pic">
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[2].title">小米8限时直降</p>
                    <p class="desc" v-text="indexProduct[2].det">立省200元</p>
                    <img v-lazy="indexProduct[2].pic">
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[3].title">iPhone X 64GB</p>
                    <p class="desc" v-text="indexProduct[3].det">深空灰低至6878元</p>
                    <img v-lazy="indexProduct[3].pic">
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[4].title">华为Mate20</p>
                    <p class="desc" v-text="indexProduct[4].det">新品预定享6重礼</p>
                    <img v-lazy="indexProduct[4].pic">
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="bottom-list">
            <ul>
              <li>
                <a href="javascript:void(0)">
                  <p class="name" v-text="indexProduct[5].title">荣耀8C</p>
                  <p class="desc" v-text="indexProduct[5].det">新品限量抢</p>
                  <img v-lazy="indexProduct[5].pic">
                </a>
              </li>
              <li>
                <a href="#">
                  <p class="name" v-text="indexProduct[6].title">OPPO K1</p>
                  <p class="desc" v-text="indexProduct[6].det">新品赠豪礼</p>
                  <img v-lazy="indexProduct[6].pic">
                </a>
              </li>
              <li>
                <a href="#">
                  <p class="name" v-text="indexProduct[7].title">诺基亚x5</p>
                  <p class="desc" v-text="indexProduct[7].det">3期免息</p>
                  <img v-lazy="indexProduct[7].pic">
                </a>
              </li>
            </ul>
          </div>
          <div class="brand">
            <ul>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/01.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/02.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/03.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/04.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/05.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/06.jpg'">
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="floor-2" id="anchor-8">
        <div class="floor-t floor-left floor-jinrong">
          <div class="title">
            <div class="title-name">
              <h5>金融</h5>
              <div class="code"></div>
            </div>
            <div class="title-keywords">
              <ul>
                <li>
                  <a href="#">5元红包</a>
                </li>
                <li>
                  <a href="#">抽￥4999苏宁卡</a>
                </li>
                <li>
                  <a href="#">送super会员</a>
                </li>
                <li>
                  <a href="#">踏实赚钱</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="content clear">
            <div class="left-content">
              <a href="javascript:void(0)">
                <img v-lazy="indexProduct[0].pic">
              </a>
              <div class="left-bottom">
                <p class="name" v-text="indexProduct[0].title">爆款手机5折起</p>
                <p class="desc" v-text="indexProduct[0].det">iPhone XS新品享12期免息</p>
              </div>
            </div>
            <div class="right-content">
              <ul>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[1].title">vivo Z3抢先预定</p>
                    <p class="desc" v-text="indexProduct[1].det">新品预定赢新机</p>
                    <img v-lazy="indexProduct[1].pic">
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[2].title">小米8限时直降</p>
                    <p class="desc" v-text="indexProduct[2].det">立省200元</p>
                    <img v-lazy="indexProduct[2].pic">
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[3].title">iPhone X 64GB</p>
                    <p class="desc" v-text="indexProduct[3].det">深空灰低至6878元</p>
                    <img v-lazy="indexProduct[3].pic">
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[4].title">华为Mate20</p>
                    <p class="desc" v-text="indexProduct[4].det">新品预定享6重礼</p>
                    <img v-lazy="indexProduct[4].pic">
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="bottom-list">
            <ul>
              <li>
                <a href="javascript:void(0)">
                  <p class="name" v-text="indexProduct[5].title">荣耀8C</p>
                  <p class="desc" v-text="indexProduct[5].det">新品限量抢</p>
                  <img v-lazy="indexProduct[5].pic">
                </a>
              </li>
              <li>
                <a href="#">
                  <p class="name" v-text="indexProduct[6].title">OPPO K1</p>
                  <p class="desc" v-text="indexProduct[6].det">新品赠豪礼</p>
                  <img v-lazy="indexProduct[6].pic">
                </a>
              </li>
              <li>
                <a href="#">
                  <p class="name" v-text="indexProduct[7].title">诺基亚x5</p>
                  <p class="desc" v-text="indexProduct[7].det">3期免息</p>
                  <img v-lazy="indexProduct[7].pic">
                </a>
              </li>
            </ul>
          </div>
          <div class="brand">
            <ul>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/01.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/02.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/03.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/04.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/05.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/06.jpg'">
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="floor-t floor-right floor-yuedu">
          <div class="title">
            <div class="title-name">
              <h5>阅读</h5>
              <div class="code"></div>
            </div>
            <div class="title-keywords">
              <ul>
                <li>
                  <a href="#">童书</a>
                </li>
                <li>
                  <a href="#">文学</a>
                </li>
                <li>
                  <a href="#">教辅</a>
                </li>
                <li>
                  <a href="#">人文社科</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="content clear">
            <div class="left-content">
              <a href="javascript:void(0)">
                <img v-lazy="indexProduct[0].pic">
              </a>
              <div class="left-bottom">
                <p class="name" v-text="indexProduct[0].title">爆款手机5折起</p>
                <p class="desc" v-text="indexProduct[0].det">iPhone XS新品享12期免息</p>
              </div>
            </div>
            <div class="right-content">
              <ul>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[1].title">vivo Z3抢先预定</p>
                    <p class="desc" v-text="indexProduct[1].det">新品预定赢新机</p>
                    <img v-lazy="indexProduct[1].pic">
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[2].title">小米8限时直降</p>
                    <p class="desc" v-text="indexProduct[2].det">立省200元</p>
                    <img v-lazy="indexProduct[2].pic">
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[3].title">iPhone X 64GB</p>
                    <p class="desc" v-text="indexProduct[3].det">深空灰低至6878元</p>
                    <img v-lazy="indexProduct[3].pic">
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <p class="name" v-text="indexProduct[4].title">华为Mate20</p>
                    <p class="desc" v-text="indexProduct[4].det">新品预定享6重礼</p>
                    <img v-lazy="indexProduct[4].pic">
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="bottom-list">
            <ul>
              <li>
                <a href="javascript:void(0)">
                  <p class="name" v-text="indexProduct[5].title">荣耀8C</p>
                  <p class="desc" v-text="indexProduct[5].det">新品限量抢</p>
                  <img v-lazy="indexProduct[5].pic">
                </a>
              </li>
              <li>
                <a href="#">
                  <p class="name" v-text="indexProduct[6].title">OPPO K1</p>
                  <p class="desc" v-text="indexProduct[6].det">新品赠豪礼</p>
                  <img v-lazy="indexProduct[6].pic">
                </a>
              </li>
              <li>
                <a href="#">
                  <p class="name" v-text="indexProduct[7].title">诺基亚x5</p>
                  <p class="desc" v-text="indexProduct[7].det">3期免息</p>
                  <img v-lazy="indexProduct[7].pic">
                </a>
              </li>
            </ul>
          </div>
          <div class="brand">
            <ul>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/01.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/02.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/03.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/04.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/05.jpg'">
                </a>
              </li>
              <li>
                <a href="#">
                  <img v-lazy="server+'img/index/sj/06.jpg'">
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="floor-qdpg" id="anchor-9">
        <div class="floor-t floor-left">
          <div class="title">
            <h5>必抢清单</h5>
            <a href="#">更多精选 ></a>
          </div>
          <ul class="content clear">
            <li>
              <a href="javascript:">
                <p class="name">不会用单反，照样能拍好照片</p>
                <p class="desc">
                  <span>酷机</span>
                  <i>在如今的时代里，拍出充满大片感的照片是越</i>
                </p>
                <img v-lazy="server+'img/index/biqiang/1.webp'">
                <img v-lazy="server+'img/index/biqiang/2.webp'">
                <img v-lazy="server+'img/index/biqiang/3.webp'">
              </a>
            </li>
            <li>
              <a href="javascript:">
                <p class="name">智能可对话，体贴AI上演读心术</p>
                <p class="desc">
                  <span>家电</span>
                  <i>现在很多电子设备加入了AI虚拟可对话功能</i>
                </p>
                <img v-lazy="server+'img/index/biqiang/4.webp'">
                <img v-lazy="server+'img/index/biqiang/5.webp'">
                <img v-lazy="server+'img/index/biqiang/6.webp'">
              </a>
            </li>
            <li>
              <a href="javascript:">
                <p class="name">家中待客，以茶代酒更有面子</p>
                <p class="desc">
                  <span>超市</span>
                  <i>无论何时家里来客，沏一壶好茶代替酒来招待</i>
                </p>
                <img v-lazy="server+'img/index/biqiang/7.webp'">
                <img v-lazy="server+'img/index/biqiang/8.webp'">
                <img v-lazy="server+'img/index/biqiang/9.webp'">
              </a>
            </li>
            <li>
              <a href="javascript:">
                <p class="name">呵护宝宝娇嫩肌，选择温和沐浴露</p>
                <p class="desc">
                  <span>育儿</span>
                  <i>为宝宝洗澡时，沐浴露是必不可少的，宝宝肌</i>
                </p>
                <img v-lazy="server+'img/index/biqiang/10.webp'">
                <img v-lazy="server+'img/index/biqiang/11.webp'">
                <img v-lazy="server+'img/index/biqiang/12.webp'">
              </a>
            </li>
          </ul>
        </div>
        <div class="floor-t floor-right">
          <div class="title">
            <h5>阅读</h5>
          </div>
          <div class="wraper">
            <div class="content">
              <ul>
                <li>
                  <a href="javascript:">
                    <img v-lazy="server+'img/index/pingou/1.webp'">
                    <span class="code-icon"></span>
                    <img v-lazy="server+'mg/index/pingou/code.jpg'" class="code">
                    <p class="name">【1暖蛋+10暖芯】自发热迷你暖手蛋</p>
                    <p class="pg-price">
                      拼购价￥
                      <i>9.90</i>
                    </p>
                    <p class="sn-price">
                      参考价
                      <span>售罄</span>
                    </p>
                    <p class="pg-number">
                      <i>2</i>人团
                    </p>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <img v-lazy="server+'img/index/pingou/2.webp'">
                    <span class="code-icon"></span>
                    <img v-lazy="server+'img/index/pingou/code.jpg'" class="code">
                    <p class="name">【限时亏本】10支装竹炭软毛牙刷成人家用超细软牙刷家庭装</p>
                    <p class="pg-price">
                      拼购价￥
                      <i>5.90</i>
                    </p>
                    <p class="sn-price">
                      参考价
                      <span>售罄</span>
                    </p>
                    <p class="pg-number">
                      <i>2</i>人团
                    </p>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <img v-lazy="server+'img/index/pingou/3.webp'">
                    <span class="code-icon"></span>
                    <img v-lazy="server+'img/index/pingou/code.jpg'" class="code">
                    <p class="name">【爆款】美的6.5 公斤全自动波轮洗衣机 时尚外观 节能静音洗</p>
                    <p class="pg-price">
                      拼购价￥
                      <i>819.00</i>
                    </p>
                    <p class="sn-price">
                      参考价
                      <span>899.00</span>
                    </p>
                    <p class="pg-number">
                      <i>2</i>人团
                    </p>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <img v-lazy="server+'img/index/pingou/4.webp'">
                    <span class="code-icon"></span>
                    <img v-lazy="server+'img/index/pingou/code.jpg'" class="code">
                    <p class="name">九种口味燕麦巧克力 1000g 袋装</p>
                    <p class="pg-price">
                      拼购价￥
                      <i>16.90</i>
                    </p>
                    <p class="sn-price">
                      参考价
                      <span>售罄</span>
                    </p>
                    <p class="pg-number">
                      <i>2</i>人团
                    </p>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <img v-lazy="server+'img/index/pingou/5.webp'">
                    <span class="code-icon"></span>
                    <img v-lazy="server+'img/index/pingou/code.jpg'" class="code">
                    <p class="name">【买2件减3元 买3件减5元】三合一数据线多功能多头安卓苹果Type-c电源线</p>
                    <p class="pg-price">
                      拼购价￥
                      <i>8.00</i>
                    </p>
                    <p class="sn-price">
                      参考价
                      <span>8.00</span>
                    </p>
                    <p class="pg-number">
                      <i>2</i>人团
                    </p>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <img v-lazy="server+'img/index/pingou/6.webp'">
                    <span class="code-icon"></span>
                    <img v-lazy="server+'img/index/pingou/code.jpg'" class="code">
                    <p class="name">厨房置物架调料架厨房用品用具储物架砧板双层架子双层带砧板架带筷子筒</p>
                    <p class="pg-price">
                      拼购价￥
                      <i>23.90</i>
                    </p>
                    <p class="sn-price">
                      参考价
                      <span>售罄</span>
                    </p>
                    <p class="pg-number">
                      <i>2</i>人团
                    </p>
                  </a>
                </li>
              </ul>
            </div>
            <a href="#" class="btn left-btn"></a>
            <a href="#" class="btn right-btn"></a>
          </div>
        </div>
      </div>
      <div class="floor-guess" id="anchor-10">
        <div class="floor-title">
          <h5>猜你喜欢</h5>
        </div>
        <div class="content">
          <ul class="clear">
            <li>
              <a href="#">
                <img v-lazy="server+'img/index/guess/1.jpg'">
                <p class="title">
                  <i class="zyIcon"></i>湖中勇士【礼券】阳澄湖 湖中勇士大闸蟹礼券2988型提货券 公4.0两/只 母3.0两/只 4对装
                </p>
                <p class="price">
                  <i>￥</i>238.00
                </p>
                <a href="#" class="find">找相似</a>
              </a>
            </li>
            <li>
              <a href="#">
                <img v-lazy="server+'img/index/guess/1.jpg'">
                <p class="title">
                  <i class="zyIcon"></i>湖中勇士【礼券】阳澄湖 湖中勇士大闸蟹礼券2988型提货券 公4.0两/只 母3.0两/只 4对装
                </p>
                <p class="price">
                  <i>￥</i>238.00
                </p>
                <a href="#" class="find">找相似</a>
              </a>
            </li>
            <li>
              <a href="#">
                <img v-lazy="server+'img/index/guess/1.jpg'">
                <p class="title">
                  <i class="zyIcon"></i>湖中勇士【礼券】阳澄湖 湖中勇士大闸蟹礼券2988型提货券 公4.0两/只 母3.0两/只 4对装
                </p>
                <p class="price">
                  <i>￥</i>238.00
                </p>
                <a href="#" class="find">找相似</a>
              </a>
            </li>
            <li>
              <a href="#">
                <img v-lazy="server+'img/index/guess/1.jpg'">
                <p class="title">
                  <i class="zyIcon"></i>湖中勇士【礼券】阳澄湖 湖中勇士大闸蟹礼券2988型提货券 公4.0两/只 母3.0两/只 4对装
                </p>
                <p class="price">
                  <i>￥</i>238.00
                </p>
                <a href="#" class="find">找相似</a>
              </a>
            </li>
            <li>
              <a href="#">
                <img v-lazy="server+'img/index/guess/1.jpg'">
                <p class="title">
                  <i class="zyIcon"></i>湖中勇士【礼券】阳澄湖 湖中勇士大闸蟹礼券2988型提货券 公4.0两/只 母3.0两/只 4对装
                </p>
                <p class="price">
                  <i>￥</i>238.00
                </p>
                <a href="#" class="find">找相似</a>
              </a>
            </li>
          </ul>
          <div class="end">
            <span class="line-left"></span>
            <i>END</i>
            <span class="line-right"></span>
          </div>
        </div>
      </div>
    </section>
    <div class="serve">
      <div class="promise">
        <a href="#">
          <img v-lazy="server+'img/footer/promise1.jpg'">
          <div>
            <h6>正品保障</h6>
            <p>正品保障、提供发票</p>
          </div>
        </a>
        <a href="#">
          <img v-lazy="server+'img/footer/promise2.jpg'">
          <div>
            <h6>急速物流</h6>
            <p>如约送货、送货入户</p>
          </div>
        </a>
        <a href="#">
          <img v-lazy="server+'img/footer/promise3.jpg'">
          <div>
            <h6>售后无忧</h6>
            <p>30天包退、365天包换</p>
          </div>
        </a>
        <a href="#">
          <img v-lazy="server+'img/footer/promise4.jpg'">
          <div>
            <h6>特色服务</h6>
            <p>私人定制家电套餐</p>
          </div>
        </a>
        <a href="#">
          <img v-lazy="server+'img/footer/promise5.jpg'">
          <div>
            <h6>帮助中心</h6>
            <p>您的购物指南</p>
          </div>
        </a>
      </div>
      <div class="help">
        <dl>
          <dt>购物指南</dt>
          <dd>
            <a href="#">导购演示</a>
          </dd>
          <dd>
            <a href="#">免费注册</a>
          </dd>
          <dd>
            <a href="#">会员等级</a>
          </dd>
          <dd>
            <a href="#">常见问题</a>
          </dd>
          <dd>
            <a href="#">品牌大全</a>
          </dd>
        </dl>
        <dl>
          <dt>支付方式</dt>
          <dd>
            <a href="#">苏宁支付</a>
          </dd>
          <dd>
            <a href="#">网银支付</a>
          </dd>
          <dd>
            <a href="#">快捷支付</a>
          </dd>
          <dd>
            <a href="#">分期付款</a>
          </dd>
          <dd>
            <a href="#">货到付款</a>
          </dd>
          <dd>
            <a href="#">任性付支付</a>
          </dd>
        </dl>
        <dl>
          <dt>物流配送</dt>
          <dd>
            <a href="#">免运费政策</a>
          </dd>
          <dd>
            <a href="#">物流配送服务</a>
          </dd>
          <dd>
            <a href="#">签收验货</a>
          </dd>
          <dd>
            <a href="#">物流查询</a>
          </dd>
        </dl>
        <dl>
          <dt>售后服务</dt>
          <dd>
            <a href="#">退换货政策</a>
          </dd>
          <dd>
            <a href="#">贵就陪</a>
          </dd>
          <dd>
            <a href="#">维修/安装</a>
          </dd>
          <dd>
            <a href="#">订单修改</a>
          </dd>
          <dd>
            <a href="#">退换货申请</a>
          </dd>
          <dd>
            <a href="#">我的发票</a>
          </dd>
        </dl>
        <dl>
          <dt>商家服务</dt>
          <dd>
            <a href="#">商家入驻</a>
          </dd>
          <dd>
            <a href="#">培训中心</a>
          </dd>
          <dd>
            <a href="#">广告服务</a>
          </dd>
          <dd>
            <a href="#">商家帮助</a>
          </dd>
          <dd>
            <a href="#">服务市场</a>
          </dd>
          <dd>
            <a href="#">规则中心</a>
          </dd>
        </dl>
        <dl>
          <dt>身边苏宁</dt>
          <dd>
            <a href="#">全国300多个城市，上万个门店和服务终端期待您的光临，为您提供最贴心的服务！</a>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>
<script>
import headerToolBar from "@/components/header/headerToolbar";
import headerSearch from "@/components/header/headerSearch";
import headerNavBar from "@/components/header/headerNavbar";
export default {
  name: "IndexContainer",
  data() {
    return {
      timer: null, // 轮播计时器
      carouselList: [],
      cid: 1, //当前显示的img
      btnShow: false, // 轮播图显示与否
      scrollTop: 1,
      qgProduct: [],
      qgLeft: 0,
      qgLeftObj: {
        left: '0px',
        transform: 'all 0.5s ease-in'
      },
      indexProduct:[],
      isAdShow: false,
      server: 'http://127.0.0.1:3000/'
    };
  },
  directives: {
    anchor: {
      inserted(el,binding){
        el.onclick = function(){
          //设置高度
          document.documentElement.scrollTop = document.getElementById('anchor-'+binding.value).offsetTop +document.documentElement.clientHeight;
          // console.log(this.cliHeight)
        }
      }
    }
  },
  mounted() {
    //获取 轮播图表
    this.$axios.get("/index/getCarousel").then(res => {
      this.carouselList = res.data;
      // console.log(this.carouselList)
    });
    this.timer = setInterval(this.carouselAuto, 3500);
    this.getQgProduct();
    //获取scrollTop
    window.addEventListener("scroll", this.getScrollTop);
    this.getIndexProduct()
    //抢购

  },
  destroyed() {
    window.removeEventListener("scroll", this.getScrollTop);
  },
  methods: {
    carouselAuto() {
      this.cid++;
      if (this.cid > 8) this.cid = 1;
    },
    stopCarousel() {
      clearInterval(this.timer);
      this.timer = null;
      this.btnShow = true;
    },
    beginCarousel() {
      this.timer = setInterval(this.carouselAuto, 3500);
      this.btnShow = false;
    },
    btnCarousel(num) {
      this.cid += num;
      if (this.cid > 8) this.cid = 1;
      else if (this.cid < 1) this.cid = 8;
    },
    changeCarousel(num) {
      this.cid = num;
    },
    getScrollTop() {
      //获得 滚动的高度
      this.scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
      // console.log(this.scrollTop)
    },
    //获得抢购
    getQgProduct() {
      this.$axios.get("/index/getQgProduct").then(res => {
        this.qgProduct = res.data;
      });
    },
    //抢购 轮播
    handleQgProduct(n) {
      if(this.qgLeft>=0 && n==1){
        this.qgLeft = 0
        return 
      }else if(this.qgLeft<=5-this.qgProductLength && n==-1) {
        this.qgLeft = -5
        return
      }
      this.qgLeft +=n
      console.log(this.qgLeft)
      var old = parseInt(this.qgLeftObj.left)
      var target = this.qgLeft*200
      var step = (target- old)/14
      var timer = setInterval(()=>{
        if( n*(target-old) < n*step){
          //setTimeout(()=>{
          this.qgLeftObj.left = target +'px'
          clearInterval(timer)
          timer = null
          return
          //},17)
        }
        old +=step
        // console.log(this.qgLeft)
        this.qgLeftObj.left = old +'px'
      },17)
      // console.log(this.qgLeft)
    },
    //获取首页商品列表
    getIndexProduct(){
      this.$axios.get('/index/getProduct').then((res)=>{
        this.indexProduct = res.data
        // console.log(this.indexProduct)
      })
    },
    handleAdShow(){
      if(this.isAdShow) this.isAdShow = false
      else this.isAdShow = true
    }
  },
  computed: {
    qgProductLength: function() {
      return this.qgProduct.length;
    },
    cliHeight: function() {
      return document.documentElement.clientHeight; 
    }
  },
  components: {
    headerToolBar,
    headerSearch,
    headerNavBar
  }
};
</script>
<style scoped>
@import "../../../static/css/index.css";
div.index {
  background-color: #f1f1f1;
}
.index > .search {
  background-color: #fff;
}
</style>


