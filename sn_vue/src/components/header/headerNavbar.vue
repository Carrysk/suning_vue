<template>
  <div class="headerNavbar">
    <nav>
      <table></table>
      <div class="nav-bar clear" :class="isLarge?'w-1400':''">
        <!--left nav bar-->
        <div class="nav-left">
          <a href="javascript:void(0)">
            <span class="left-icon"></span>全部商品分类
          </a>
          <ul class="list" :class="isShow?'showList':''">
            <li class="list-1">
              <span></span>
              <a href="#">手机</a>/
              <a href="#">运营商</a>/
              <a href="#">智能数码</a>
              <div class="list-1">
                <div class="list-left">
                  <ul class="list-left-top clear">
                    <li>
                      <a href="#">手机频道</a>
                    </li>
                    <li>
                      <a href="#">智能数码</a>
                    </li>
                    <li>
                      <a href="#">以旧换新</a>
                    </li>
                    <li>
                      <a href="#">网上营业厅</a>
                    </li>
                    <li>
                      <a href="#">企业采购</a>
                    </li>
                    <li>
                      <a href="#">海外购</a>
                    </li>
                    <li>
                      <a href="#">二手优品</a>
                    </li>
                  </ul>
                  <ul class="list-left-bottom">
                    <li class="clear">
                      <h4>手机通讯</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">【iPhone XS新品开抢赠无限充礼包】</a>
                        </li>
                        <li>
                          <a href="#">全部手机</a>
                        </li>
                        <li>
                          <a href="#">iPhone</a>
                        </li>
                        <li>
                          <a href="#" class="active">小米</a>
                        </li>
                        <li>
                          <a href="#">荣耀</a>
                        </li>
                        <li>
                          <a href="#" class="active">华为</a>
                        </li>
                        <li>
                          <a href="#">三星</a>
                        </li>
                        <li>
                          <a href="#">魅族</a>
                        </li>
                        <li>
                          <a href="#" class="active">OPPO</a>
                        </li>
                        <li>
                          <a href="#">vivo</a>
                        </li>
                        <li>
                          <a href="#">美图</a>
                        </li>
                        <li>
                          <a href="#" class="active">努比亚</a>
                        </li>
                        <li>
                          <a href="#">飞利浦</a>
                        </li>
                        <li>
                          <a href="#">金立</a>
                        </li>
                        <li>
                          <a href="#">守护宝</a>
                        </li>
                        <li>
                          <a href="#" class="active">正品好货</a>
                        </li>
                        <li>
                          <a href="#">以旧换新</a>
                        </li>
                        <li>
                          <a href="#">手机维修</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>手机配件</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">【智能爆款最高直降600】</a>
                        </li>
                        <li>
                          <a href="#">手机壳</a>
                        </li>
                        <li>
                          <a href="#">手机贴膜</a>
                        </li>
                        <li>
                          <a href="#">手机存储卡</a>
                        </li>
                        <li>
                          <a href="#">数据线</a>
                        </li>
                        <li>
                          <a href="#">充电器</a>
                        </li>
                        <li>
                          <a href="#">无线充电器</a>
                        </li>
                        <li>
                          <a href="#">手机耳环</a>
                        </li>
                        <li>
                          <a href="#">手机电视</a>
                        </li>
                        <li>
                          <a href="#">苹果周边</a>
                        </li>
                        <li>
                          <a href="#">移动电源</a>
                        </li>
                        <li>
                          <a href="#">蓝牙耳机</a>
                        </li>
                        <li>
                          <a href="#">自拍杆</a>
                        </li>
                        <li>
                          <a href="#">手机支架</a>
                        </li>
                        <li>
                          <a href="#">手机U盘</a>
                        </li>
                        <li>
                          <a href="#">蓝牙音箱</a>
                        </li>
                        <li>
                          <a href="#">车载配件</a>
                        </li>
                        <li>
                          <a href="#">手机饰品</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>智能设备</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">【贩米日 各种爆款秒杀 一分抽大牌】</a>
                        </li>
                        <li>
                          <a href="#">智能手环</a>
                        </li>
                        <li>
                          <a href="#">智能手表</a>
                        </li>
                        <li>
                          <a href="#">体感车</a>
                        </li>
                        <li>
                          <a href="#">VR眼镜</a>
                        </li>
                        <li>
                          <a href="#">智能摄像头</a>
                        </li>
                        <li>
                          <a href="#">智能家居</a>
                        </li>
                        <li>
                          <a href="#">智能门锁</a>
                        </li>
                        <li>
                          <a href="#">无人机</a>
                        </li>
                        <li>
                          <a href="#">智能机器人</a>
                        </li>
                        <li>
                          <a href="#">智能健康监测</a>
                        </li>
                        <li>
                          <a href="#" class="active">玩客云</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>影音电子</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">音响</a>
                        </li>
                        <li>
                          <a href="#">耳机/耳麦</a>
                        </li>
                        <li>
                          <a href="#" class="active">智能音箱</a>
                        </li>
                        <li>
                          <a href="#">运动耳机</a>
                        </li>
                        <li>
                          <a href="#">MP3/MP4</a>
                        </li>
                        <li>
                          <a href="#">收音/收音机</a>
                        </li>
                        <li>
                          <a href="#">录音笔</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>电子教育</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">儿童手表</a>
                        </li>
                        <li>
                          <a href="#">学生电脑/学习机</a>
                        </li>
                        <li>
                          <a href="#">故事机</a>
                        </li>
                        <li>
                          <a href="#">翻译机</a>
                        </li>
                        <li>
                          <a href="#">智能才儿童手表</a>
                        </li>
                        <li>
                          <a href="#">点读机/笔</a>
                        </li>
                        <li>
                          <a href="#">电子书</a>
                        </li>
                        <li>
                          <a href="#">电子词典</a>
                        </li>
                        <li>
                          <a href="#">复读机</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>二手优品</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">【献礼国庆 二手全场立减最高1000】</a>
                        </li>
                        <li>
                          <a href="#">iphone 7</a>
                        </li>
                        <li>
                          <a href="#">iphone 8</a>
                        </li>
                        <li>
                          <a href="#">iPhone X</a>
                        </li>
                        <li>
                          <a href="#">iphone 8p</a>
                        </li>
                        <li>
                          <a href="#">iphone 7p</a>
                        </li>
                        <li>
                          <a href="#">oppo</a>
                        </li>
                        <li>
                          <a href="#">vivo</a>
                        </li>
                        <li>
                          <a href="#">三星</a>
                        </li>
                        <li>
                          <a href="#">华为</a>
                        </li>
                        <li>
                          <a href="#">小米</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>营业厅</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">焕新节</a>
                        </li>
                        <li>
                          <a href="#">选号码</a>
                        </li>
                        <li>
                          <a href="#">办套餐</a>
                        </li>
                        <li>
                          <a href="#">充话费/流量</a>
                        </li>
                        <li>
                          <a href="#" class="active">办宽带</a>
                        </li>
                        <li>
                          <a href="#">中国移动</a>
                        </li>
                        <li>
                          <a href="#" class="active">29元60GB</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="list-right">
                  <ul class="list-right-top">
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-1.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-2.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-3.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-4.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-5.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-6.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-7.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-8.jpg'" alt>
                      </a>
                    </li>
                  </ul>
                  <a href="#">
                    <img v-lazy="server+'img/index/nav-bar/1-9.jpg'" alt>
                  </a>
                  <a href="#">
                    <img v-lazy="server+'img/index/nav-bar/1-10.jpg'" alt>
                  </a>
                </div>
              </div>
            </li>
            <li class="list-2">
              <span></span>
              <a href="#">电视</a>/
              <a href="#">冰箱</a>/
              <a href="#">空调</a>/
              <a href="#">洗衣机</a>
              <div class="list-2">
                <div class="list-left">
                  <ul class="list-left-top clear">
                    <li>
                      <a href="#">电器城</a>
                    </li>
                    <li>
                      <a href="#">彩电频道</a>
                    </li>
                    <li>
                      <a href="#">冰箱/洗衣机频道</a>
                    </li>
                    <li>
                      <a href="#">空调频道</a>
                    </li>
                    <li>
                      <a href="#">以旧换新</a>
                    </li>
                    <li>
                      <a href="#">智能家电</a>
                    </li>
                    <li>
                      <a href="#">企业采购</a>
                    </li>
                  </ul>
                  <ul class="list-left-bottom">
                    <li class="clear">
                      <h4>电器</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">【电视家影 下单送电动牙刷】</a>
                        </li>
                        <li>
                          <a href="#">65英寸</a>
                        </li>
                        <li>
                          <a href="#">55英寸</a>
                        </li>
                        <li>
                          <a href="#" class="active">32英寸及以下</a>
                        </li>
                        <li>
                          <a href="#">海信</a>
                        </li>
                        <li>
                          <a href="#" class="active">小米</a>
                        </li>
                        <li>
                          <a href="#">长虹</a>
                        </li>
                        <li>
                          <a href="#">夏普</a>
                        </li>
                        <li>
                          <a href="#" class="active">TCL</a>
                        </li>
                        <li>
                          <a href="#">索尼</a>
                        </li>
                        <li>
                          <a href="#">4K超高清</a>
                        </li>
                        <li>
                          <a href="#">智能</a>
                        </li>
                        <li>
                          <a href="#">曲面</a>
                        </li>
                        <li>
                          <a href="#">OLED</a>
                        </li>
                        <li>
                          <a href="#" class="active">店铺热卖</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>冰箱</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">【冰洗智享新净界 入场领1000元卷】</a>
                        </li>
                        <li>
                          <a href="#">对开门</a>
                        </li>
                        <li>
                          <a href="#">多门</a>
                        </li>
                        <li>
                          <a href="#">十字对开</a>
                        </li>
                        <li>
                          <a href="#">三门</a>
                        </li>
                        <li>
                          <a href="#">双门</a>
                        </li>
                        <li>
                          <a href="#">风冷（无霜）</a>
                        </li>
                        <li>
                          <a href="#">海尔</a>
                        </li>
                        <li>
                          <a href="#">西门子</a>
                        </li>
                        <li>
                          <a href="#">容声</a>
                        </li>
                        <li>
                          <a href="#">美的</a>
                        </li>
                        <li>
                          <a href="#">美菱</a>
                        </li>
                        <li>
                          <a href="#">海信</a>
                        </li>
                        <li>
                          <a href="#">三星</a>
                        </li>
                        <li>
                          <a href="#">松下</a>
                        </li>
                        <li>
                          <a href="#">博世</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>空调</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">【空调金秋 用券减1200】</a>
                        </li>
                        <li>
                          <a href="#">挂壁式空调</a>
                        </li>
                        <li>
                          <a href="#">立柜式空调</a>
                        </li>
                        <li>
                          <a href="#">变频空调</a>
                        </li>
                        <li>
                          <a href="#">自清洁空调</a>
                        </li>
                        <li>
                          <a href="#">美的</a>
                        </li>
                        <li>
                          <a href="#">奥克斯</a>
                        </li>
                        <li>
                          <a href="#">格力</a>
                        </li>
                        <li>
                          <a href="#">合资空调</a>
                        </li>
                        <li>
                          <a href="#">移动空调</a>
                        </li>
                        <li>
                          <a href="#">中央空调</a>
                        </li>
                        <li>
                          <a href="#" class="active">品质为先 空调优惠</a>
                        </li>
                        <li>
                          <a href="#" class="active">以旧换新</a>
                        </li>
                        <li>
                          <a href="#">0元安装空调</a>
                        </li>
                        <li>
                          <a href="#" class="active">空调安维</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>洗衣机</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">【冰洗净智提前享 定金10倍翻】</a>
                        </li>
                        <li>
                          <a href="#" class="active">滚筒</a>
                        </li>
                        <li>
                          <a href="#" class="active">洗干一体机</a>
                        </li>
                        <li>
                          <a href="#">波轮</a>
                        </li>
                        <li>
                          <a href="#">大容量</a>
                        </li>
                        <li>
                          <a href="#">迷你洗衣机</a>
                        </li>
                        <li>
                          <a href="#">变频</a>
                        </li>
                        <li>
                          <a href="#">海尔</a>
                        </li>
                        <li>
                          <a href="#">西门子</a>
                        </li>
                        <li>
                          <a href="#" class="active">美的</a>
                        </li>
                        <li>
                          <a href="#">小天鹅</a>
                        </li>
                        <li>
                          <a href="#">海信</a>
                        </li>
                        <li>
                          <a href="#">松下</a>
                        </li>
                        <li>
                          <a href="#">三洋</a>
                        </li>
                        <li>
                          <a href="#">三星</a>
                        </li>
                        <li>
                          <a href="#">博世</a>
                        </li>
                        <li>
                          <a href="#">LG</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>冷柜</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">【冰箱低至99元】</a>
                        </li>
                        <li>
                          <a href="#">卧式冷柜</a>
                        </li>
                        <li>
                          <a href="#">商用展示柜</a>
                        </li>
                        <li>
                          <a href="#">冰吧</a>
                        </li>
                        <li>
                          <a href="#">酒柜</a>
                        </li>
                        <li>
                          <a href="#">立式冷柜</a>
                        </li>
                        <li>
                          <a href="#">点菜柜</a>
                        </li>
                        <li>
                          <a href="#">厨房操作台</a>
                        </li>
                        <li>
                          <a href="#">海鲜柜</a>
                        </li>
                        <li>
                          <a href="#">星星</a>
                        </li>
                        <li>
                          <a href="#">海尔</a>
                        </li>
                        <li>
                          <a href="#">美菱</a>
                        </li>
                        <li>
                          <a href="#">美的</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>家庭影音</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">【影音热卖，低至39元起】</a>
                        </li>
                        <li>
                          <a href="#">家庭影院</a>
                        </li>
                        <li>
                          <a href="#">回音壁</a>
                        </li>
                        <li>
                          <a href="#">迷你音响</a>
                        </li>
                        <li>
                          <a href="#">DVD</a>
                        </li>
                        <li>
                          <a href="#">功放</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>帮客服务</h4>
                      <ul>
                        <li>
                          <a href="#">安装服务</a>
                        </li>
                        <li>
                          <a href="#">清洗服务</a>
                        </li>
                        <li>
                          <a href="#">维修服务</a>
                        </li>
                        <li>
                          <a href="#">上门服务卡</a>
                        </li>
                        <li>
                          <a href="#">清洗产品</a>
                        </li>
                        <li>
                          <a href="#">帮客材配</a>
                        </li>
                        <li>
                          <a href="#">帮客蓝狮</a>
                        </li>
                        <li>
                          <a href="#">家电医保卡</a>
                        </li>
                        <li>
                          <a href="#">日常保洁</a>
                        </li>
                        <li>
                          <a href="#">深度清洁</a>
                        </li>
                        <li>
                          <a href="#">开荒保洁</a>
                        </li>
                        <li>
                          <a href="#">玻璃清洁</a>
                        </li>
                        <li>
                          <a href="#">洗衣服务</a>
                        </li>
                        <li>
                          <a href="#">租凭服务</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="list-right">
                  <ul class="list-right-top">
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-1.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-2.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-3.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-4.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-5.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-6.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-7.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-8.jpg'" alt>
                      </a>
                    </li>
                  </ul>
                  <a href="#">
                    <img v-lazy="server+'img/index/nav-bar/1-9.jpg'" alt>
                  </a>
                  <a href="#">
                    <img v-lazy="server+'img/index/nav-bar/1-10.jpg'" alt>
                  </a>
                </div>
              </div>
            </li>
            <li class="list-3">
              <span></span>
              <a href="#">厨卫大电</a>/
              <a href="#">生活家电</a>/
              <a href="#">厨具</a>
              <div class="list-3">
                <div class="list-left">
                  <ul class="list-left-top clear">
                    <li>
                      <a href="#">电器城</a>
                    </li>
                    <li>
                      <a href="#">厨卫家装馆</a>
                    </li>
                    <li>
                      <a href="#">生活家电频道</a>
                    </li>
                    <li>
                      <a href="#">个护健康</a>
                    </li>
                    <li>
                      <a href="#">厨具达人</a>
                    </li>
                    <li>
                      <a href="#">企业采购</a>
                    </li>
                    <li>
                      <a href="#">海外购</a>
                    </li>
                  </ul>
                  <ul class="list-left-bottom">
                    <li class="clear">
                      <h4>厨卫大电</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">【厨卫领券最高减200】</a>
                        </li>
                        <li>
                          <a href="#">烟灶套餐</a>
                        </li>
                        <li>
                          <a href="#">油烟机</a>
                        </li>
                        <li>
                          <a href="#" class="active">集成灶</a>
                        </li>
                        <li>
                          <a href="#">燃气灶</a>
                        </li>
                        <li>
                          <a href="#" class="active">消毒柜</a>
                        </li>
                        <li>
                          <a href="#">洗碗机</a>
                        </li>
                        <li>
                          <a href="#">嵌入式厨电</a>
                        </li>
                        <li>
                          <a href="#" class="active">垃圾处理器</a>
                        </li>
                        <li>
                          <a href="#">商用厨房电器</a>
                        </li>
                        <li>
                          <a href="#">老板</a>
                        </li>
                        <li>
                          <a href="#" class="active">西门子</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>卫浴电器</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">热水器</a>
                        </li>
                        <li>
                          <a href="#">电热水器</a>
                        </li>
                        <li>
                          <a href="#">燃气热水器</a>
                        </li>
                        <li>
                          <a href="#">厨宝</a>
                        </li>
                        <li>
                          <a href="#">浴霸/排气扇</a>
                        </li>
                        <li>
                          <a href="#">智能马桶盖</a>
                        </li>
                        <li>
                          <a href="#">空气能</a>
                        </li>
                        <li>
                          <a href="#">采暖炉</a>
                        </li>
                        <li>
                          <a href="#">家电配件</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>中式厨房</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">电饭煲</a>
                        </li>
                        <li>
                          <a href="#">电压力锅</a>
                        </li>
                        <li>
                          <a href="#">榨汁机/原汁机</a>
                        </li>
                        <li>
                          <a href="#">豆浆机</a>
                        </li>
                        <li>
                          <a href="#">电磁炉</a>
                        </li>
                        <li>
                          <a href="#">电水壶</a>
                        </li>
                        <li>
                          <a href="#">电饼档</a>
                        </li>
                        <li>
                          <a href="#">电炖锅</a>
                        </li>
                        <li>
                          <a href="#">电蒸锅</a>
                        </li>
                        <li>
                          <a href="#">煮蛋器</a>
                        </li>
                        <li>
                          <a href="#">养生壶/煎药壶</a>
                        </li>
                        <li>
                          <a href="#" class="active">电热饭盒</a>
                        </li>
                        <li>
                          <a href="#">电陶炉</a>
                        </li>
                        <li>
                          <a href="#" class="active">电火锅</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>西式厨房</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">电烤箱</a>
                        </li>
                        <li>
                          <a href="#">微波炉</a>
                        </li>
                        <li>
                          <a href="#" class="active">破壁机</a>
                        </li>
                        <li>
                          <a href="#">面包机</a>
                        </li>
                        <li>
                          <a href="#">酸奶机</a>
                        </li>
                        <li>
                          <a href="#">咖啡机</a>
                        </li>
                        <li>
                          <a href="#">空气炸锅</a>
                        </li>
                        <li>
                          <a href="#">搅拌机</a>
                        </li>
                        <li>
                          <a href="#">打蛋器</a>
                        </li>
                        <li>
                          <a href="#">面条机</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>生活电器</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">【买吸尘器送加湿器】</a>
                        </li>
                        <li>
                          <a href="#">空气净化器</a>
                        </li>
                        <li>
                          <a href="#">取暖器</a>
                        </li>
                        <li>
                          <a href="#">加湿器</a>
                        </li>
                        <li>
                          <a href="#">吸尘器</a>
                        </li>
                        <li>
                          <a href="#">扫地机器人</a>
                        </li>
                        <li>
                          <a href="#">干衣机</a>
                        </li>
                        <li>
                          <a href="#">除湿机</a>
                        </li>
                        <li>
                          <a href="#">挂烫机</a>
                        </li>
                        <li>
                          <a href="#">电风扇</a>
                        </li>
                        <li>
                          <a href="#">清洁机</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>个护健康</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">剃须刀</a>
                        </li>
                        <li>
                          <a href="#">电吹风</a>
                        </li>
                        <li>
                          <a href="#">美容仪</a>
                        </li>
                        <li>
                          <a href="#">电动牙刷</a>
                        </li>
                        <li>
                          <a href="#">脱毛仪</a>
                        </li>
                        <li>
                          <a href="#">美发器</a>
                        </li>
                        <li>
                          <a href="#">按摩椅</a>
                        </li>
                        <li>
                          <a href="#">足浴盆</a>
                        </li>
                        <li>
                          <a href="#">体脂秤</a>
                        </li>
                        <li>
                          <a href="#">按摩器</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>厨具</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">炒锅</a>
                        </li>
                        <li>
                          <a href="#">压力锅</a>
                        </li>
                        <li>
                          <a href="#">蒸锅</a>
                        </li>
                        <li>
                          <a href="#">煎锅</a>
                        </li>
                        <li>
                          <a href="#" class="active">汤锅</a>
                        </li>
                        <li>
                          <a href="#">奶锅</a>
                        </li>
                        <li>
                          <a href="#" class="active">锅具套装</a>
                        </li>
                        <li>
                          <a href="#">砂锅</a>
                        </li>
                        <li>
                          <a href="#">刀具</a>
                        </li>
                        <li>
                          <a href="#">餐具</a>
                        </li>
                        <li>
                          <a href="#" class="active">厨房工具</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>饮水设备</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">净水器</a>
                        </li>
                        <li>
                          <a href="#">饮水机</a>
                        </li>
                        <li>
                          <a href="#">净水杯</a>
                        </li>
                        <li>
                          <a href="#">净水滤芯</a>
                        </li>
                        <li>
                          <a href="#" class="active">A.O.史密斯</a>
                        </li>
                        <li>
                          <a href="#">沁园</a>
                        </li>
                        <li>
                          <a href="#" class="active">美的</a>
                        </li>
                        <li>
                          <a href="#">安吉尔</a>
                        </li>
                        <li>
                          <a href="#">3M</a>
                        </li>
                        <li>
                          <a href="#">海尔</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>进口专区</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">剃须刀</a>
                        </li>
                        <li>
                          <a href="#">电饭锅</a>
                        </li>
                        <li>
                          <a href="#">电动牙刷</a>
                        </li>
                        <li>
                          <a href="#">美容仪</a>
                        </li>
                        <li>
                          <a href="#" class="active">进口咖啡机</a>
                        </li>
                        <li>
                          <a href="#">戴森</a>
                        </li>
                        <li>
                          <a href="#" class="active">空气净化器</a>
                        </li>
                        <li>
                          <a href="#">吸尘器</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="list-right">
                  <ul class="list-right-top">
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-1.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-2.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-3.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-4.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-5.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-6.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-7.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-8.jpg'" alt>
                      </a>
                    </li>
                  </ul>
                  <a href="#">
                    <img v-lazy="server+'img/index/nav-bar/1-9.jpg'" alt>
                  </a>
                  <a href="#">
                    <img v-lazy="server+'img/index/nav-bar/1-10.jpg'" alt>
                  </a>
                </div>
              </div>
            </li>
            <li class="list-4">
              <span></span>
              <a href="#">电脑办公</a>/
              <a href="#">相机</a>/
              <a href="#">DIY</a>
              <div class="list-4">
                <div class="list-left">
                  <ul class="list-left-top clear">
                    <li>
                      <a href="#">电器城</a>
                    </li>
                    <li>
                      <a href="#">电脑频道</a>
                    </li>
                    <li>
                      <a href="#">相机频道</a>
                    </li>
                    <li>
                      <a href="#">以旧换新</a>
                    </li>
                    <li>
                      <a href="#">企业采购</a>
                    </li>
                    <li>
                      <a href="#">海外购</a>
                    </li>
                    <li>
                      <a href="#">二手优品</a>
                    </li>
                  </ul>
                  <ul class="list-left-bottom">
                    <li class="clear">
                      <h4>电脑整机</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">【游戏本最高直降3000元】</a>
                        </li>
                        <li>
                          <a href="#">笔记本</a>
                        </li>
                        <li>
                          <a href="#">游戏本</a>
                        </li>
                        <li>
                          <a href="#" class="active">轻薄本</a>
                        </li>
                        <li>
                          <a href="#">台式电脑</a>
                        </li>
                        <li>
                          <a href="#" class="active">电脑一体机</a>
                        </li>
                        <li>
                          <a href="#">服务器/工作站</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>平板电脑</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">iPad</a>
                        </li>
                        <li>
                          <a href="#">小米平板</a>
                        </li>
                        <li>
                          <a href="#">华为平板</a>
                        </li>
                        <li>
                          <a href="#">iPad套餐</a>
                        </li>
                        <li>
                          <a href="#">Kindle</a>
                        </li>
                        <li>
                          <a href="#">二合一</a>
                        </li>
                        <li>
                          <a href="#">微软平板</a>
                        </li>
                        <li>
                          <a href="#">荣耀平板</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>电脑配件</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">显示器</a>
                        </li>
                        <li>
                          <a href="#">CPU</a>
                        </li>
                        <li>
                          <a href="#">主板</a>
                        </li>
                        <li>
                          <a href="#">显卡</a>
                        </li>
                        <li>
                          <a href="#">硬盘</a>
                        </li>
                        <li>
                          <a href="#">SSD固态硬盘</a>
                        </li>
                        <li>
                          <a href="#">内存</a>
                        </li>
                        <li>
                          <a href="#">迹象</a>
                        </li>
                        <li>
                          <a href="#">散热器</a>
                        </li>
                        <li>
                          <a href="#">电源</a>
                        </li>
                        <li>
                          <a href="#">组装电脑</a>
                        </li>
                        <li>
                          <a href="#" class="active">刻录机/光驱</a>
                        </li>
                        <li>
                          <a href="#" class="active">声卡/扩展卡</a>
                        </li>
                        <li>
                          <a href="#" class="active">装机配件</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>网络设备</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">路由器</a>
                        </li>
                        <li>
                          <a href="#">无线网卡</a>
                        </li>
                        <li>
                          <a href="#" class="active">交换机</a>
                        </li>
                        <li>
                          <a href="#">随身wifi</a>
                        </li>
                        <li>
                          <a href="#">网络储存</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>外设附件</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">鼠标</a>
                        </li>
                        <li>
                          <a href="#">键盘</a>
                        </li>
                        <li>
                          <a href="#">键鼠套装</a>
                        </li>
                        <li>
                          <a href="#">U盘</a>
                        </li>
                        <li>
                          <a href="#">移动硬盘</a>
                        </li>
                        <li>
                          <a href="#">鼠标垫</a>
                        </li>
                        <li>
                          <a href="#">电脑包</a>
                        </li>
                        <li>
                          <a href="#">电脑音箱</a>
                        </li>
                        <li>
                          <a href="#">插线板</a>
                        </li>
                        <li>
                          <a href="#">摄像头</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>摄影摄像</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">【潮机好店 爆款直降1000元】</a>
                        </li>
                        <li>
                          <a href="#">数码相机</a>
                        </li>
                        <li>
                          <a href="#">单反</a>
                        </li>
                        <li>
                          <a href="#">微单/单电</a>
                        </li>
                        <li>
                          <a href="#">拍立得</a>
                        </li>
                        <li>
                          <a href="#">佳能</a>
                        </li>
                        <li>
                          <a href="#">索尼</a>
                        </li>
                        <li>
                          <a href="#">尼康</a>
                        </li>
                        <li>
                          <a href="#">摄像机</a>
                        </li>
                        <li>
                          <a href="#">镜头</a>
                        </li>
                        <li>
                          <a href="#">运动相机</a>
                        </li>
                        <li>
                          <a href="#">数码相框</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>数码配件</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">三脚架/云台</a>
                        </li>
                        <li>
                          <a href="#">相机包</a>
                        </li>
                        <li>
                          <a href="#">闪光灯手柄</a>
                        </li>
                        <li>
                          <a href="#">滤镜</a>
                        </li>
                        <li>
                          <a href="#" class="active">电池/充电器</a>
                        </li>
                        <li>
                          <a href="#">机身附件</a>
                        </li>
                        <li>
                          <a href="#" class="active">望远镜</a>
                        </li>
                        <li>
                          <a href="#">读卡器</a>
                        </li>
                        <li>
                          <a href="#">相机清洁/贴膜</a>
                        </li>
                        <li>
                          <a href="#">储存卡</a>
                        </li>
                        <li>
                          <a href="#">相机胶片</a>
                        </li>
                        <li>
                          <a href="#" class="active">影棚器材</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>办公文具</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">投影仪</a>
                        </li>
                        <li>
                          <a href="#">打印机</a>
                        </li>
                        <li>
                          <a href="#">复印/复合机</a>
                        </li>
                        <li>
                          <a href="#">保险柜</a>
                        </li>
                        <li>
                          <a href="#" class="active">扫描仪</a>
                        </li>
                        <li>
                          <a href="#">点验钞机</a>
                        </li>
                        <li>
                          <a href="#" class="active">电话机</a>
                        </li>
                        <li>
                          <a href="#">标签机</a>
                        </li>
                        <li>
                          <a href="#">复印纸</a>
                        </li>
                        <li>
                          <a href="#">投影幕布</a>
                        </li>
                        <li>
                          <a href="#">硒鼓</a>
                        </li>
                        <li>
                          <a href="#" class="active">墨盒</a>
                        </li>
                        <li>
                          <a href="#">办公文具</a>
                        </li>
                        <li>
                          <a href="#">本册/便签</a>
                        </li>
                        <li>
                          <a href="#">财务用品</a>
                        </li>
                        <li>
                          <a href="#">文件管理</a>
                        </li>
                        <li>
                          <a href="#">得力</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>电脑服务</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">【以旧换新最低低500】</a>
                        </li>
                        <li>
                          <a href="#">以旧换新服务</a>
                        </li>
                        <li>
                          <a href="#">30天退180换</a>
                        </li>
                        <li>
                          <a href="#">帮客电脑上门服务</a>
                        </li>
                        <li>
                          <a href="#" class="active">二手优品</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="list-right">
                  <ul class="list-right-top">
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-1.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-2.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-3.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-4.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-5.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-6.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-7.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-8.jpg'" alt>
                      </a>
                    </li>
                  </ul>
                  <a href="#">
                    <img v-lazy="server+'img/index/nav-bar/1-9.jpg'" alt>
                  </a>
                  <a href="#">
                    <img v-lazy="server+'img/index/nav-bar/1-10.jpg'" alt>
                  </a>
                </div>
              </div>
            </li>
            <li class="list-5">
              <span></span>
              <a href="#">家居</a>/
              <a href="#">家具</a>/
              <a href="#">家装</a>/
              <a href="#">家纺</a>
              <div class="list-5">
                <div class="list-left">
                  <ul class="list-left-top clear">
                    <li>
                      <a href="#">居家家纺</a>
                    </li>
                    <li>
                      <a href="#">家居馆</a>
                    </li>
                    <li>
                      <a href="#">卫浴馆</a>
                    </li>
                    <li>
                      <a href="#">家装馆</a>
                    </li>
                    <li>
                      <a href="#">维修馆</a>
                    </li>
                    <li>
                      <a href="#">苏宁极物</a>
                    </li>
                    <li>
                      <a href="#">生活日用</a>
                    </li>
                  </ul>
                  <ul class="list-left-bottom">
                    <li class="clear">
                      <h4>家纺</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">床品套件</a>
                        </li>
                        <li>
                          <a href="#">被子</a>
                        </li>
                        <li>
                          <a href="#">毛巾</a>
                        </li>
                        <li>
                          <a href="#" class="active">枕芯</a>
                        </li>
                        <li>
                          <a href="#">蚕丝被</a>
                        </li>
                        <li>
                          <a href="#" class="active">毛巾被/毯</a>
                        </li>
                        <li>
                          <a href="#">凉席</a>
                        </li>
                        <li>
                          <a href="#">蚊帐</a>
                        </li>
                        <li>
                          <a href="#" class="active">床垫/床褥</a>
                        </li>
                        <li>
                          <a href="#">坐垫/抱枕</a>
                        </li>
                        <li>
                          <a href="#">床单/被罩/床笠</a>
                        </li>
                        <li>
                          <a href="#" class="active">地毯/地垫</a>
                        </li>
                        <li>
                          <a href="#">餐桌布艺</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>家具</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">沙发</a>
                        </li>
                        <li>
                          <a href="#">床</a>
                        </li>
                        <li>
                          <a href="#">床垫</a>
                        </li>
                        <li>
                          <a href="#">电视柜</a>
                        </li>
                        <li>
                          <a href="#">电脑椅</a>
                        </li>
                        <li>
                          <a href="#">茶几</a>
                        </li>
                        <li>
                          <a href="#">餐桌</a>
                        </li>
                        <li>
                          <a href="#">电脑桌</a>
                        </li>
                        <li>
                          <a href="#">置物架</a>
                        </li>
                        <li>
                          <a href="#">阳台/户外</a>
                        </li>
                        <li>
                          <a href="#">客厅成套家具</a>
                        </li>
                        <li>
                          <a href="#">餐厅成套家具</a>
                        </li>
                        <li>
                          <a href="#">卧室成套家具</a>
                        </li>
                        <li>
                          <a href="#">儿童成套家具</a>
                        </li>
                        <li>
                          <a href="#">书房家具</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>灯具灯饰</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">客厅灯</a>
                        </li>
                        <li>
                          <a href="#">水晶灯</a>
                        </li>
                        <li>
                          <a href="#">卧室灯</a>
                        </li>
                        <li>
                          <a href="#">吸顶灯</a>
                        </li>
                        <li>
                          <a href="#">吊灯</a>
                        </li>
                        <li>
                          <a href="#">灯具套餐</a>
                        </li>
                        <li>
                          <a href="#">台灯</a>
                        </li>
                        <li>
                          <a href="#">集成吊顶</a>
                        </li>
                        <li>
                          <a href="#">筒灯</a>
                        </li>
                        <li>
                          <a href="#">射灯</a>
                        </li>
                        <li>
                          <a href="#">灯带</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>厨房卫浴</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">花洒</a>
                        </li>
                        <li>
                          <a href="#">水槽</a>
                        </li>
                        <li>
                          <a href="#" class="active">马桶</a>
                        </li>
                        <li>
                          <a href="#">坐便器盖板</a>
                        </li>
                        <li>
                          <a href="#">龙头</a>
                        </li>
                        <li>
                          <a href="#">地漏</a>
                        </li>
                        <li>
                          <a href="#">浴室柜</a>
                        </li>
                        <li>
                          <a href="#">卫浴挂件</a>
                        </li>
                        <li>
                          <a href="#">浴缸</a>
                        </li>
                        <li>
                          <a href="#">淋浴花洒</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>五金建材</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">插座</a>
                        </li>
                        <li>
                          <a href="#">开关</a>
                        </li>
                        <li>
                          <a href="#">指纹锁</a>
                        </li>
                        <li>
                          <a href="#">电钻</a>
                        </li>
                        <li>
                          <a href="#">工具箱</a>
                        </li>
                        <li>
                          <a href="#">电动晾衣架</a>
                        </li>
                        <li>
                          <a href="#">监控摄像头</a>
                        </li>
                        <li>
                          <a href="#">电线</a>
                        </li>
                        <li>
                          <a href="#">接线板</a>
                        </li>
                        <li>
                          <a href="#">家具五金</a>
                        </li>
                        <li>
                          <a href="#">手动工具</a>
                        </li>
                        <li>
                          <a href="#">电动工具</a>
                        </li>
                        <li>
                          <a href="#">油漆涂料</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>定制装修</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">定制衣柜</a>
                        </li>
                        <li>
                          <a href="#">定制电视柜</a>
                        </li>
                        <li>
                          <a href="#">定制柜类</a>
                        </li>
                        <li>
                          <a href="#">全屋定制</a>
                        </li>
                        <li>
                          <a href="#">门</a>
                        </li>
                        <li>
                          <a href="#">木门</a>
                        </li>
                        <li>
                          <a href="#">整体橱柜</a>
                        </li>
                        <li>
                          <a href="#">特权定金</a>
                        </li>
                        <li>
                          <a href="#">榻榻米</a>
                        </li>
                        <li>
                          <a href="#">装修服务</a>
                        </li>
                        <li>
                          <a href="#">设计服务</a>
                        </li>
                        <li>
                          <a href="#">暖气片</a>
                        </li>
                        <li>
                          <a href="#">楼梯</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>生活日用</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">收纳用品</a>
                        </li>
                        <li>
                          <a href="#">保温杯</a>
                        </li>
                        <li>
                          <a href="#">晾衣架</a>
                        </li>
                        <li>
                          <a href="#">活性炭</a>
                        </li>
                        <li>
                          <a href="#" class="active">雨伞雨具</a>
                        </li>
                        <li>
                          <a href="#">口罩</a>
                        </li>
                        <li>
                          <a href="#" class="active">绿植园艺</a>
                        </li>
                        <li>
                          <a href="#">浴室用品</a>
                        </li>
                        <li>
                          <a href="#">保温器皿</a>
                        </li>
                        <li>
                          <a href="#">水杯水壶</a>
                        </li>
                        <li>
                          <a href="#">家具器皿</a>
                        </li>
                        <li>
                          <a href="#">香薰用品</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>成人用品</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">情爱玩具</a>
                        </li>
                        <li>
                          <a href="#">验孕测孕</a>
                        </li>
                        <li>
                          <a href="#">情趣内衣</a>
                        </li>
                        <li>
                          <a href="#">飞机杯</a>
                        </li>
                        <li>
                          <a href="#" class="active">震动棒</a>
                        </li>
                        <li>
                          <a href="#">延迟喷剂</a>
                        </li>
                        <li>
                          <a href="#" class="active">安全避孕</a>
                        </li>
                        <li>
                          <a href="#">男性用品</a>
                        </li>
                        <li>
                          <a href="#">人体润滑</a>
                        </li>
                        <li>
                          <a href="#">女性用品</a>
                        </li>
                        <li>
                          <a href="#">SM用品</a>
                        </li>
                        <li>
                          <a href="#">跳蛋</a>
                        </li>
                        <li>
                          <a href="#">缩阴球</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>器械隐形</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">制氧机</a>
                        </li>
                        <li>
                          <a href="#">血糖仪</a>
                        </li>
                        <li>
                          <a href="#">体温计</a>
                        </li>
                        <li>
                          <a href="#">呼吸机</a>
                        </li>
                        <li>
                          <a href="#" class="active">血压计</a>
                        </li>
                        <li>
                          <a href="#">雾化器</a>
                        </li>
                        <li>
                          <a href="#" class="active">拔罐器</a>
                        </li>
                        <li>
                          <a href="#">洗鼻器</a>
                        </li>
                        <li>
                          <a href="#">棉签/棉球</a>
                        </li>
                        <li>
                          <a href="#">坐厕椅</a>
                        </li>
                        <li>
                          <a href="#">轮椅</a>
                        </li>
                        <li>
                          <a href="#">护理床</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="list-right">
                  <ul class="list-right-top">
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-1.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-2.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-3.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-4.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-5.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-6.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-7.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-8.jpg'" alt>
                      </a>
                    </li>
                  </ul>
                  <a href="#">
                    <img v-lazy="server+'img/index/nav-bar/1-9.jpg'" alt>
                  </a>
                  <a href="#">
                    <img v-lazy="server+'img/index/nav-bar/1-10.jpg'" alt>
                  </a>
                </div>
              </div>
            </li>
            <li class="list-6">
              <span></span>
              <a href="#">食品</a>/
              <a href="#">酒水</a>/
              <a href="#">生鲜</a>/
              <a href="#">特产</a>
              <div class="list-6">
                <div class="list-left">
                  <ul class="list-left-top clear">
                    <li>
                      <a href="#">苏宁超市</a>
                    </li>
                    <li>
                      <a href="#">苏宁生鲜</a>
                    </li>
                    <li>
                      <a href="#">中华特色馆</a>
                    </li>
                    <li>
                      <a href="#">医药馆</a>
                    </li>
                    <li>
                      <a href="#">企业采购</a>
                    </li>
                    <li>
                      <a href="#">海外购</a>
                    </li>
                  </ul>
                  <ul class="list-left-bottom">
                    <li class="clear">
                      <h4>饮料冲乳</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">纯牛奶</a>
                        </li>
                        <li>
                          <a href="#" class="active">饮用水</a>
                        </li>
                        <li>
                          <a href="#">酸奶</a>
                        </li>
                        <li>
                          <a href="#">成人奶粉</a>
                        </li>
                        <li>
                          <a href="#">速溶咖啡</a>
                        </li>
                        <li>
                          <a href="#" class="active">饮料</a>
                        </li>
                        <li>
                          <a href="#">谷物麦片</a>
                        </li>
                        <li>
                          <a href="#">茶饮料</a>
                        </li>
                        <li>
                          <a href="#" class="active">碳酸饮料</a>
                        </li>
                        <li>
                          <a href="#">蜂蜜</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>进口食品</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">进口牛奶</a>
                        </li>
                        <li>
                          <a href="#">进口休闲零食</a>
                        </li>
                        <li>
                          <a href="#">进口饼干糕点</a>
                        </li>
                        <li>
                          <a href="#">进口葡萄酒/果酒</a>
                        </li>
                        <li>
                          <a href="#">进口膨化食品</a>
                        </li>
                        <li>
                          <a href="#">进口橄榄油</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>生鲜食品</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">大闸蟹</a>
                        </li>
                        <li>
                          <a href="#">牛排</a>
                        </li>
                        <li>
                          <a href="#">榴莲</a>
                        </li>
                        <li>
                          <a href="#">鸡肉</a>
                        </li>
                        <li>
                          <a href="#">鸭肉</a>
                        </li>
                        <li>
                          <a href="#">蔬菜</a>
                        </li>
                        <li>
                          <a href="#">牛肉</a>
                        </li>
                        <li>
                          <a href="#">蛋</a>
                        </li>
                        <li>
                          <a href="#">羊肉</a>
                        </li>
                        <li>
                          <a href="#">水果</a>
                        </li>
                        <li>
                          <a href="#">虾类</a>
                        </li>
                        <li>
                          <a href="#" class="active">鱼类</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>中外名酒</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">白酒</a>
                        </li>
                        <li>
                          <a href="#">啤酒</a>
                        </li>
                        <li>
                          <a href="#" class="active">葡萄酒</a>
                        </li>
                        <li>
                          <a href="#">黄酒</a>
                        </li>
                        <li>
                          <a href="#">洋酒</a>
                        </li>
                        <li>
                          <a href="#">年份老酒</a>
                        </li>
                        <li>
                          <a href="#">气泡酒</a>
                        </li>
                        <li>
                          <a href="#">预调酒</a>
                        </li>
                        <li>
                          <a href="#">保健酒</a>
                        </li>
                        <li>
                          <a href="#">精酿啤酒</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>休闲食品</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">饼干</a>
                        </li>
                        <li>
                          <a href="#">礼盒</a>
                        </li>
                        <li>
                          <a href="#">零食</a>
                        </li>
                        <li>
                          <a href="#">面包</a>
                        </li>
                        <li>
                          <a href="#">巧克力</a>
                        </li>
                        <li>
                          <a href="#">坚果</a>
                        </li>
                        <li>
                          <a href="#">蜜饯</a>
                        </li>
                        <li>
                          <a href="#">糕点</a>
                        </li>
                        <li>
                          <a href="#">肉松肉脯</a>
                        </li>
                        <li>
                          <a href="#">膨化食品</a>
                        </li>
                        <li>
                          <a href="#">糖果</a>
                        </li>
                        <li>
                          <a href="#">薯片</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>粮油调味</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">食用油</a>
                        </li>
                        <li>
                          <a href="#">大米</a>
                        </li>
                        <li>
                          <a href="#">厨房调料</a>
                        </li>
                        <li>
                          <a href="#">杂粮</a>
                        </li>
                        <li>
                          <a href="#">大枣</a>
                        </li>
                        <li>
                          <a href="#">酱油</a>
                        </li>
                        <li>
                          <a href="#">方便速食</a>
                        </li>
                        <li>
                          <a href="#">面粉</a>
                        </li>
                        <li>
                          <a href="#">面条</a>
                        </li>
                        <li>
                          <a href="#">白木耳/银耳</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>营养保健</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">减肥瘦身</a>
                        </li>
                        <li>
                          <a href="#">提高免疫</a>
                        </li>
                        <li>
                          <a href="#">美容养颜</a>
                        </li>
                        <li>
                          <a href="#">补肾强身</a>
                        </li>
                        <li>
                          <a href="#" class="active">蜂制品</a>
                        </li>
                        <li>
                          <a href="#">枸杞</a>
                        </li>
                        <li>
                          <a href="#" class="active">三七</a>
                        </li>
                        <li>
                          <a href="#">燕窝</a>
                        </li>
                        <li>
                          <a href="#">阿胶膏</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>中华特色馆</h4>
                      <ul>
                        <li>
                          <a href="#">华北</a>
                        </li>
                        <li>
                          <a href="#">华东</a>
                        </li>
                        <li>
                          <a href="#">华南</a>
                        </li>
                        <li>
                          <a href="#">华中</a>
                        </li>
                        <li>
                          <a href="#">东北</a>
                        </li>
                        <li>
                          <a href="#">西北</a>
                        </li>
                        <li>
                          <a href="#">西南</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>茗茶</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">铁观音</a>
                        </li>
                        <li>
                          <a href="#">龙井</a>
                        </li>
                        <li>
                          <a href="#">红茶</a>
                        </li>
                        <li>
                          <a href="#">乌龙茶</a>
                        </li>
                        <li>
                          <a href="#" class="active">花草茶</a>
                        </li>
                        <li>
                          <a href="#">花果茶</a>
                        </li>
                        <li>
                          <a href="#" class="active">黑茶</a>
                        </li>
                        <li>
                          <a href="#" class="active">白茶</a>
                        </li>
                        <li>
                          <a href="#" class="active">养生茶</a>
                        </li>
                        <li>
                          <a href="#" class="active">茶礼盒</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="list-right">
                  <ul class="list-right-top">
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-1.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-2.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-3.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-4.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-5.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-6.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-7.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-8.jpg'" alt>
                      </a>
                    </li>
                  </ul>
                  <a href="#">
                    <img v-lazy="server+'img/index/nav-bar/1-9.jpg'" alt>
                  </a>
                  <a href="#">
                    <img v-lazy="server+'img/index/nav-bar/1-10.jpg'" alt>
                  </a>
                </div>
              </div>
            </li>
            <li class="list-7">
              <span></span>
              <a href="#">个护化妆</a>/
              <a href="#">纸品清洁</a>/
              <a href="#">宠物</a>
              <div class="list-7">
                <div class="list-left">
                  <ul class="list-left-top clear">
                    <li>
                      <a href="#">苏宁超市</a>
                    </li>
                    <li>
                      <a href="#">美妆个护</a>
                    </li>
                    <li>
                      <a href="#">医药馆</a>
                    </li>
                    <li>
                      <a href="#">海外购护肤</a>
                    </li>
                    <li>
                      <a href="#">家清</a>
                    </li>
                  </ul>
                  <ul class="list-left-bottom">
                    <li class="clear">
                      <h4>面部护肤</h4>
                      <ul>
                        <li>
                          <a href="#">护肤套装</a>
                        </li>
                        <li>
                          <a href="#">面膜</a>
                        </li>
                        <li>
                          <a href="#">洗面奶</a>
                        </li>
                        <li>
                          <a href="#" class="active">爽肤水</a>
                        </li>
                        <li>
                          <a href="#">乳液</a>
                        </li>
                        <li>
                          <a href="#" class="active">面霜</a>
                        </li>
                        <li>
                          <a href="#">眼霜</a>
                        </li>
                        <li>
                          <a href="#">进口护肤</a>
                        </li>
                        <li>
                          <a href="#" class="active">进口水乳套装</a>
                        </li>
                        <li>
                          <a href="#">海外尖货</a>
                        </li>
                        <li>
                          <a href="#">卸妆</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>口腔护理</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">牙刷</a>
                        </li>
                        <li>
                          <a href="#">口腔套装</a>
                        </li>
                        <li>
                          <a href="#">漱口水/口喷</a>
                        </li>
                        <li>
                          <a href="#">儿童牙膏</a>
                        </li>
                        <li>
                          <a href="#">牙膏</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>洗发护理</h4>
                      <ul>
                        <li>
                          <a href="#">护发素</a>
                        </li>
                        <li>
                          <a href="#">洗护套装</a>
                        </li>
                        <li>
                          <a href="#">洗发水</a>
                        </li>
                        <li>
                          <a href="#">造型</a>
                        </li>
                        <li>
                          <a href="#">无硅油</a>
                        </li>
                        <li>
                          <a href="#">去屑</a>
                        </li>
                        <li>
                          <a href="#">染发</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>身体护理</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">沐浴露</a>
                        </li>
                        <li>
                          <a href="#">润体乳</a>
                        </li>
                        <li>
                          <a href="#" class="active">护手霜</a>
                        </li>
                        <li>
                          <a href="#">足部护理</a>
                        </li>
                        <li>
                          <a href="#">瘦身纤体</a>
                        </li>
                        <li>
                          <a href="#">洗手液</a>
                        </li>
                        <li>
                          <a href="#">首部护理</a>
                        </li>
                        <li>
                          <a href="#">防蚊露/花露水</a>
                        </li>
                        <li>
                          <a href="#">脱毛膏</a>
                        </li>
                        <li>
                          <a href="#">走珠</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>彩妆香氛</h4>
                      <ul>
                        <li>
                          <a href="#">眼部</a>
                        </li>
                        <li>
                          <a href="#" class="active">口红</a>
                        </li>
                        <li>
                          <a href="#">精油</a>
                        </li>
                        <li>
                          <a href="#">气垫BB</a>
                        </li>
                        <li>
                          <a href="#">面部底妆</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>女性护理</h4>
                      <ul>
                        <li>
                          <a href="#">日用</a>
                        </li>
                        <li>
                          <a href="#">夜用</a>
                        </li>
                        <li>
                          <a href="#">组合套装</a>
                        </li>
                        <li>
                          <a href="#">护垫</a>
                        </li>
                        <li>
                          <a href="#" class="active">卫生巾</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>清洁洗护</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">洗衣液</a>
                        </li>
                        <li>
                          <a href="#">洗衣粉/皂</a>
                        </li>
                        <li>
                          <a href="#">家庭清洁</a>
                        </li>
                        <li>
                          <a href="#">洗洁精</a>
                        </li>
                        <li>
                          <a href="#" class="active">洁厕剂</a>
                        </li>
                        <li>
                          <a href="#">消毒液</a>
                        </li>
                        <li>
                          <a href="#" class="active">衣物洗护</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>生活用纸</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">卷纸</a>
                        </li>
                        <li>
                          <a href="#">湿纸巾</a>
                        </li>
                        <li>
                          <a href="#">手帕纸</a>
                        </li>
                        <li>
                          <a href="#">厨房用纸</a>
                        </li>
                        <li>
                          <a href="#" class="active">平板纸</a>
                        </li>
                        <li>
                          <a href="#">抽纸</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>宠物生活</h4>
                      <ul>
                        <li>
                          <a href="#">宠物主食</a>
                        </li>
                        <li>
                          <a href="#">宠物零食</a>
                        </li>
                        <li>
                          <a href="#">宠物玩具</a>
                        </li>
                        <li>
                          <a href="#">宠物日用</a>
                        </li>
                        <li>
                          <a href="#">出行装备</a>
                        </li>
                        <li>
                          <a href="#">宠物服饰</a>
                        </li>
                        <li>
                          <a href="#">宠物保健</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="list-right">
                  <ul class="list-right-top">
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-1.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-2.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-3.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-4.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-5.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-6.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-7.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-8.jpg'" alt>
                      </a>
                    </li>
                  </ul>
                  <a href="#">
                    <img v-lazy="server+'img/index/nav-bar/1-9.jpg'" alt>
                  </a>
                  <a href="#">
                    <img v-lazy="server+'img/index/nav-bar/1-10.jpg'" alt>
                  </a>
                </div>
              </div>
            </li>
            <li class="list-8">
              <span></span>
              <a href="#">母婴</a>/
              <a href="#">玩具</a>/
              <a href="#">车床</a>/
              <a href="#">童装</a>
              <div class="list-8">
                <div class="list-left">
                  <ul class="list-left-top clear">
                    <li>
                      <a href="#">车床座椅</a>
                    </li>
                    <li>
                      <a href="#">儿童玩具</a>
                    </li>
                    <li>
                      <a href="#">奶粉辅食</a>
                    </li>
                    <li>
                      <a href="#">孕产/摄影</a>
                    </li>
                    <li>
                      <a href="#">海外购</a>
                    </li>
                  </ul>
                  <ul class="list-left-bottom">
                    <li class="clear">
                      <h4>奶粉</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">1段</a>
                        </li>
                        <li>
                          <a href="#">2段</a>
                        </li>
                        <li>
                          <a href="#">3段</a>
                        </li>
                        <li>
                          <a href="#" class="active">4段</a>
                        </li>
                        <li>
                          <a href="#">孕妈奶粉</a>
                        </li>
                        <li>
                          <a href="#" class="active">特配奶粉</a>
                        </li>
                        <li>
                          <a href="#">有机奶粉</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>宝宝尿裤</h4>
                      <ul>
                        <li>
                          <a href="#">新生儿</a>
                        </li>
                        <li>
                          <a href="#">S</a>
                        </li>
                        <li>
                          <a href="#">M</a>
                        </li>
                        <li>
                          <a href="#" class="active">L</a>
                        </li>
                        <li>
                          <a href="#">XL</a>
                        </li>
                        <li>
                          <a href="#">XXL</a>
                        </li>
                        <li>
                          <a href="#">拉拉裤</a>
                        </li>
                        <li>
                          <a href="#" class="active">宝宝湿巾</a>
                        </li>
                        <li>
                          <a href="#">成人尿裤</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>营养辅食</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">米粉</a>
                        </li>
                        <li>
                          <a href="#">肉松</a>
                        </li>
                        <li>
                          <a href="#">饼干</a>
                        </li>
                        <li>
                          <a href="#">果汁果泥</a>
                        </li>
                        <li>
                          <a href="#">零食</a>
                        </li>
                        <li>
                          <a href="#">钙铁锌</a>
                        </li>
                        <li>
                          <a href="#">清火开胃</a>
                        </li>
                        <li>
                          <a href="#">DHA</a>
                        </li>
                        <li>
                          <a href="#">孕婴营养品</a>
                        </li>
                        <li>
                          <a href="#">宝宝面食</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>喂养用品</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">奶瓶</a>
                        </li>
                        <li>
                          <a href="#">奶嘴</a>
                        </li>
                        <li>
                          <a href="#" class="active">吸奶器</a>
                        </li>
                        <li>
                          <a href="#">牙胶安抚</a>
                        </li>
                        <li>
                          <a href="#">暖奶消食</a>
                        </li>
                        <li>
                          <a href="#">儿童餐具</a>
                        </li>
                        <li>
                          <a href="#">水杯/水壶</a>
                        </li>
                        <li>
                          <a href="#">口腔清洁</a>
                        </li>
                        <li>
                          <a href="#">围兜/口水巾</a>
                        </li>
                        <li>
                          <a href="#">辅食机/料理机</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>孕婴洗护</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">防晒</a>
                        </li>
                        <li>
                          <a href="#">洗衣液</a>
                        </li>
                        <li>
                          <a href="#">洗发/淋浴</a>
                        </li>
                        <li>
                          <a href="#">防蚊/驱蚊</a>
                        </li>
                        <li>
                          <a href="#">浴盆/浴桶</a>
                        </li>
                        <li>
                          <a href="#">孕婴童护肤</a>
                        </li>
                        <li>
                          <a href="#">理发器</a>
                        </li>
                        <li>
                          <a href="#">婴童护臀</a>
                        </li>
                        <li>
                          <a href="#">坐便器</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>童装童鞋</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">儿童套装</a>
                        </li>
                        <li>
                          <a href="#">T恤/衬衫</a>
                        </li>
                        <li>
                          <a href="#">儿童运动鞋</a>
                        </li>
                        <li>
                          <a href="#">学步鞋</a>
                        </li>
                        <li>
                          <a href="#">裙子</a>
                        </li>
                        <li>
                          <a href="#">家居床品</a>
                        </li>
                        <li>
                          <a href="#">睡袋/抱枕</a>
                        </li>
                        <li>
                          <a href="#">婴童内衣</a>
                        </li>
                        <li>
                          <a href="#">婴儿内衣</a>
                        </li>
                        <li>
                          <a href="#">婴儿礼盒</a>
                        </li>
                        <li>
                          <a href="#">尿布/尿垫</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>童车童床</h4>
                      <ul>
                        <li>
                          <a href="#">安全座椅</a>
                        </li>
                        <li>
                          <a href="#" class="active">婴儿推车</a>
                        </li>
                        <li>
                          <a href="#">婴儿床</a>
                        </li>
                        <li>
                          <a href="#">自行车</a>
                        </li>
                        <li>
                          <a href="#" class="active">电动车</a>
                        </li>
                        <li>
                          <a href="#">滑板车</a>
                        </li>
                        <li>
                          <a href="#" class="active">学步车</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>儿童玩具</h4>
                      <ul>
                        <li>
                          <a href="#">爬行垫</a>
                        </li>
                        <li>
                          <a href="#">益智玩具</a>
                        </li>
                        <li>
                          <a href="#" class="active">户外玩具</a>
                        </li>
                        <li>
                          <a href="#">模型玩具</a>
                        </li>
                        <li>
                          <a href="#" class="active">遥控玩具</a>
                        </li>
                        <li>
                          <a href="#">积木玩具</a>
                        </li>
                        <li>
                          <a href="#">毛绒玩具</a>
                        </li>
                        <li>
                          <a href="#">DIY玩具</a>
                        </li>
                        <li>
                          <a href="#">电动玩具</a>
                        </li>
                        <li>
                          <a href="#">轨道车</a>
                        </li>
                        <li>
                          <a href="#">音乐玩具</a>
                        </li>
                        <li>
                          <a href="#">儿童玩具</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>孕妈专区</h4>
                      <ul>
                        <li>
                          <a href="#">孕妈护肤</a>
                        </li>
                        <li>
                          <a href="#" class="active">孕妇装</a>
                        </li>
                        <li>
                          <a href="#">防辐射服</a>
                        </li>
                        <li>
                          <a href="#">文胸/内裤</a>
                        </li>
                        <li>
                          <a href="#" class="active">待产包</a>
                        </li>
                        <li>
                          <a href="#">月子服</a>
                        </li>
                        <li>
                          <a href="#" class="active">产后塑身</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="list-right">
                  <ul class="list-right-top">
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-1.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-2.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-3.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-4.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-5.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-6.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-7.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-8.jpg'" alt>
                      </a>
                    </li>
                  </ul>
                  <a href="#">
                    <img v-lazy="server+'img/index/nav-bar/1-9.jpg'" alt>
                  </a>
                  <a href="#">
                    <img v-lazy="server+'img/index/nav-bar/1-10.jpg'" alt>
                  </a>
                </div>
              </div>
            </li>
            <li class="list-9">
              <span></span>
              <a href="#">运动</a>/
              <a href="#">户外</a>/
              <a href="#">足球</a>/
              <a href="#">跑步机</a>
              <div class="list-9">
                <div class="list-left">
                  <ul class="list-left-top clear">
                    <li>
                      <a href="#">运动馆</a>
                    </li>
                    <li>
                      <a href="#">服装城</a>
                    </li>
                    <li>
                      <a href="#">大牌特卖</a>
                    </li>
                    <li>
                      <a href="#">皮具箱包</a>
                    </li>
                    <li>
                      <a href="#">珠宝馆</a>
                    </li>
                    <li>
                      <a href="#">海外购运动鞋</a>
                    </li>
                    <li>
                      <a href="#">钟表馆</a>
                    </li>
                  </ul>
                  <ul class="list-left-bottom">
                    <li class="clear">
                      <h4>运动户外馆</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">阿迪达斯</a>
                        </li>
                        <li>
                          <a href="#">耐克</a>
                        </li>
                        <li>
                          <a href="#">斯凯奇</a>
                        </li>
                        <li>
                          <a href="#" class="active">新百伦</a>
                        </li>
                        <li>
                          <a href="#">彪马</a>
                        </li>
                        <li>
                          <a href="#" class="active">特步</a>
                        </li>
                        <li>
                          <a href="#">鸿星尔克</a>
                        </li>
                        <li>
                          <a href="#">李宁</a>
                        </li>
                        <li>
                          <a href="#" class="active">安踏</a>
                        </li>
                        <li>
                          <a href="#">匡威</a>
                        </li>
                        <li>
                          <a href="#">361°</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>运动鞋</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">跑步鞋</a>
                        </li>
                        <li>
                          <a href="#">休闲板鞋</a>
                        </li>
                        <li>
                          <a href="#">篮球鞋</a>
                        </li>
                        <li>
                          <a href="#">足球鞋</a>
                        </li>
                        <li>
                          <a href="#">羽毛球鞋</a>
                        </li>
                        <li>
                          <a href="#">训练鞋</a>
                        </li>
                        <li>
                          <a href="#">帆布鞋</a>
                        </li>
                        <li>
                          <a href="#">运动凉鞋/拖鞋</a>
                        </li>
                        <li>
                          <a href="#">涉水鞋</a>
                        </li>
                        <li>
                          <a href="#">滑板鞋</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>运动服饰</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">卫衣</a>
                        </li>
                        <li>
                          <a href="#">运动夹克</a>
                        </li>
                        <li>
                          <a href="#">运动长裤</a>
                        </li>
                        <li>
                          <a href="#">运动T恤</a>
                        </li>
                        <li>
                          <a href="#">运动短裤</a>
                        </li>
                        <li>
                          <a href="#">POLO衫</a>
                        </li>
                        <li>
                          <a href="#">运动套装</a>
                        </li>
                        <li>
                          <a href="#">健身裤</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>健身训练</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">跑步机</a>
                        </li>
                        <li>
                          <a href="#">健身车</a>
                        </li>
                        <li>
                          <a href="#" class="active">甩脂机</a>
                        </li>
                        <li>
                          <a href="#">仰卧板</a>
                        </li>
                        <li>
                          <a href="#">踏步机</a>
                        </li>
                        <li>
                          <a href="#">哑铃</a>
                        </li>
                        <li>
                          <a href="#">综合训练器</a>
                        </li>
                        <li>
                          <a href="#">椭圆机</a>
                        </li>
                        <li>
                          <a href="#">臂力器</a>
                        </li>
                        <li>
                          <a href="#">动感单车</a>
                        </li>
                        <li>
                          <a href="#" class="active">划船机</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>户外鞋服</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">皮肤风衣</a>
                        </li>
                        <li>
                          <a href="#">徒步鞋</a>
                        </li>
                        <li>
                          <a href="#">登山鞋</a>
                        </li>
                        <li>
                          <a href="#">户外休闲鞋</a>
                        </li>
                        <li>
                          <a href="#">冲锋衣</a>
                        </li>
                        <li>
                          <a href="#">溯溪鞋</a>
                        </li>
                        <li>
                          <a href="#">速干衣裤</a>
                        </li>
                        <li>
                          <a href="#">户外T恤</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>户外装备</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">帐篷</a>
                        </li>
                        <li>
                          <a href="#">手电筒</a>
                        </li>
                        <li>
                          <a href="#">望远镜</a>
                        </li>
                        <li>
                          <a href="#">野餐炊具</a>
                        </li>
                        <li>
                          <a href="#">睡袋</a>
                        </li>
                        <li>
                          <a href="#">吊床</a>
                        </li>
                        <li>
                          <a href="#">户外包</a>
                        </li>
                        <li>
                          <a href="#">野餐垫</a>
                        </li>
                        <li>
                          <a href="#">便携桌椅床</a>
                        </li>
                        <li>
                          <a href="#">军迷用品</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>骑行/垂钓</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">自行车</a>
                        </li>
                        <li>
                          <a href="#">公路车</a>
                        </li>
                        <li>
                          <a href="#">通勤车</a>
                        </li>
                        <li>
                          <a href="#">思维车</a>
                        </li>
                        <li>
                          <a href="#" class="active">骑行服饰</a>
                        </li>
                        <li>
                          <a href="#">鱼竿</a>
                        </li>
                        <li>
                          <a href="#" class="active">鱼饵</a>
                        </li>
                        <li>
                          <a href="#">鱼线</a>
                        </li>
                        <li>
                          <a href="#">浮漂</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>体育用品</h4>
                      <ul>
                        <li>
                          <a href="#">乒乓球</a>
                        </li>
                        <li>
                          <a href="#">羽毛球</a>
                        </li>
                        <li>
                          <a href="#" class="active">篮球</a>
                        </li>
                        <li>
                          <a href="#" class="active">足球</a>
                        </li>
                        <li>
                          <a href="#">轮滑滑板</a>
                        </li>
                        <li>
                          <a href="#">瑜伽用品</a>
                        </li>
                        <li>
                          <a href="#" class="active">网球</a>
                        </li>
                        <li>
                          <a href="#">排球</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>游泳用品</h4>
                      <ul>
                        <li>
                          <a href="#">女士泳衣</a>
                        </li>
                        <li>
                          <a href="#">比基尼</a>
                        </li>
                        <li>
                          <a href="#">男士泳衣</a>
                        </li>
                        <li>
                          <a href="#">泳镜</a>
                        </li>
                        <li>
                          <a href="#">游泳圈</a>
                        </li>
                        <li>
                          <a href="#">游泳包</a>
                        </li>
                        <li>
                          <a href="#">泳帽</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="list-right">
                  <ul class="list-right-top">
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-1.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-2.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-3.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-4.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-5.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-6.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-7.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-8.jpg'" alt>
                      </a>
                    </li>
                  </ul>
                  <a href="#">
                    <img v-lazy="server+'img/index/nav-bar/1-9.jpg'" alt>
                  </a>
                  <a href="#">
                    <img v-lazy="server+'img/index/nav-bar/1-10.jpg'" alt>
                  </a>
                </div>
              </div>
            </li>
            <li class="list-10">
              <span></span>
              <a href="#">男装</a>/
              <a href="#">女装</a>/
              <a href="#">内衣</a>
              <div class="list-10">
                <div class="list-left">
                  <ul class="list-left-top clear">
                    <li>
                      <a href="#">服装城</a>
                    </li>
                    <li>
                      <a href="#">大牌特卖</a>
                    </li>
                    <li>
                      <a href="#">皮具箱包</a>
                    </li>
                    <li>
                      <a href="#">珠宝馆</a>
                    </li>
                    <li>
                      <a href="#">运动馆</a>
                    </li>
                    <li>
                      <a href="#">钟表馆</a>
                    </li>
                    <li>
                      <a href="#">海外购潮服</a>
                    </li>
                  </ul>
                  <ul class="list-left-bottom">
                    <li class="clear">
                      <h4>当季流行</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">【海澜之家超级品牌日每满300减30】</a>
                        </li>
                        <li>
                          <a href="#">卫衣女</a>
                        </li>
                        <li>
                          <a href="#">连衣裙</a>
                        </li>
                        <li>
                          <a href="#" class="active">夹克男</a>
                        </li>
                        <li>
                          <a href="#">男士衬衫</a>
                        </li>
                        <li>
                          <a href="#" class="active">文胸</a>
                        </li>
                        <li>
                          <a href="#">牛奶裤</a>
                        </li>
                        <li>
                          <a href="#">时髦外套</a>
                        </li>
                        <li>
                          <a href="#" class="active">牛仔裤女</a>
                        </li>
                        <li>
                          <a href="#">运动文胸</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>女士上装</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">T恤</a>
                        </li>
                        <li>
                          <a href="#">雪纺衫</a>
                        </li>
                        <li>
                          <a href="#">秋冬新品</a>
                        </li>
                        <li>
                          <a href="#">荷叶边衬衫</a>
                        </li>
                        <li>
                          <a href="#">衬衫</a>
                        </li>
                        <li>
                          <a href="#">针织衫</a>
                        </li>
                        <li>
                          <a href="#">短外套</a>
                        </li>
                        <li>
                          <a href="#">个性卫衣</a>
                        </li>
                        <li>
                          <a href="#">牛奶外套</a>
                        </li>
                        <li>
                          <a href="#">小西装</a>
                        </li>
                        <li>
                          <a href="#">风衣</a>
                        </li>
                        <li>
                          <a href="#">皮衣</a>
                        </li>
                        <li>
                          <a href="#">毛呢大衣</a>
                        </li>
                        <li>
                          <a href="#">羽绒服</a>
                        </li>
                        <li>
                          <a href="#">棉服</a>
                        </li>
                        <li>
                          <a href="#">毛衣</a>
                        </li>
                        <li>
                          <a href="#">羊绒衫</a>
                        </li>
                        <li>
                          <a href="#">时尚套装</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>女士下装</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">半身裙</a>
                        </li>
                        <li>
                          <a href="#">荷叶短裙</a>
                        </li>
                        <li>
                          <a href="#">牛仔裤</a>
                        </li>
                        <li>
                          <a href="#">皮裤</a>
                        </li>
                        <li>
                          <a href="#">小脚裤</a>
                        </li>
                        <li>
                          <a href="#">休闲裤</a>
                        </li>
                        <li>
                          <a href="#">阔腿裤</a>
                        </li>
                        <li>
                          <a href="#">哈伦裤</a>
                        </li>
                        <li>
                          <a href="#">打底裤</a>
                        </li>
                        <li>
                          <a href="#">包臀裙</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>男士上装</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">男士长袖T恤</a>
                        </li>
                        <li>
                          <a href="#">POLO衫</a>
                        </li>
                        <li>
                          <a href="#" class="active">长袖</a>
                        </li>
                        <li>
                          <a href="#">衬衫</a>
                        </li>
                        <li>
                          <a href="#">卫衣</a>
                        </li>
                        <li>
                          <a href="#">针织衫</a>
                        </li>
                        <li>
                          <a href="#">夹克</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>男士裤装</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">牛仔裤</a>
                        </li>
                        <li>
                          <a href="#">休闲裤</a>
                        </li>
                        <li>
                          <a href="#">小脚裤</a>
                        </li>
                        <li>
                          <a href="#">工装裤</a>
                        </li>
                        <li>
                          <a href="#">九分裤</a>
                        </li>
                        <li>
                          <a href="#">哈伦裤</a>
                        </li>
                        <li>
                          <a href="#">运动裤</a>
                        </li>
                        <li>
                          <a href="#">针织裤</a>
                        </li>
                        <li>
                          <a href="#">束脚裤</a>
                        </li>
                        <li>
                          <a href="#">长裤</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>文胸睡衣</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">聚拢文胸</a>
                        </li>
                        <li>
                          <a href="#">无痕文胸</a>
                        </li>
                        <li>
                          <a href="#">蕾丝文胸</a>
                        </li>
                        <li>
                          <a href="#">调整型文胸</a>
                        </li>
                        <li>
                          <a href="#">运动文胸</a>
                        </li>
                        <li>
                          <a href="#">美背文胸</a>
                        </li>
                        <li>
                          <a href="#">纯棉睡衣</a>
                        </li>
                        <li>
                          <a href="#">春夏睡裙</a>
                        </li>
                        <li>
                          <a href="#">情侣睡衣</a>
                        </li>
                        <li>
                          <a href="#">性感睡裙</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>内衣内裤</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">纯棉内裤</a>
                        </li>
                        <li>
                          <a href="#">莫代尔内裤</a>
                        </li>
                        <li>
                          <a href="#">女士内裤</a>
                        </li>
                        <li>
                          <a href="#">男士内裤</a>
                        </li>
                        <li>
                          <a href="#" class="active">无痕内裤</a>
                        </li>
                        <li>
                          <a href="#">保暖内衣</a>
                        </li>
                        <li>
                          <a href="#" class="active">秋衣秋裤</a>
                        </li>
                        <li>
                          <a href="#">船袜</a>
                        </li>
                        <li>
                          <a href="#">棉袜</a>
                        </li>
                        <li>
                          <a href="#">男袜</a>
                        </li>
                        <li>
                          <a href="#">女袜</a>
                        </li>
                        <li>
                          <a href="#">连裤袜</a>
                        </li>
                        <li>
                          <a href="#">瘦身袜</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>童装童鞋</h4>
                      <ul>
                        <li>
                          <a href="#">T恤</a>
                        </li>
                        <li>
                          <a href="#">童装</a>
                        </li>
                        <li>
                          <a href="#">毛衣/针织衫</a>
                        </li>
                        <li>
                          <a href="#">裤子</a>
                        </li>
                        <li>
                          <a href="#">卫衣</a>
                        </li>
                        <li>
                          <a href="#">棉服</a>
                        </li>
                        <li>
                          <a href="#">羽绒服</a>
                        </li>
                        <li>
                          <a href="#">运动鞋</a>
                        </li>
                        <li>
                          <a href="#">皮鞋</a>
                        </li>
                        <li>
                          <a href="#">帆布鞋</a>
                        </li>
                        <li>
                          <a href="#">内裤</a>
                        </li>
                        <li>
                          <a href="#">袜/袜裤</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>特色服装</h4>
                      <ul>
                        <li>
                          <a href="#">妈妈装</a>
                        </li>
                        <li>
                          <a href="#">大码女装</a>
                        </li>
                        <li>
                          <a href="#">职业套装</a>
                        </li>
                        <li>
                          <a href="#">婚纱礼服</a>
                        </li>
                        <li>
                          <a href="#" class="active">运动套装</a>
                        </li>
                        <li>
                          <a href="#">唐装</a>
                        </li>
                        <li>
                          <a href="#">旗袍</a>
                        </li>
                        <li>
                          <a href="#" class="active">情趣内衣</a>
                        </li>
                        <li>
                          <a href="#">塑身衣</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="list-right">
                  <ul class="list-right-top">
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-1.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-2.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-3.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-4.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-5.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-6.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-7.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-8.jpg'" alt>
                      </a>
                    </li>
                  </ul>
                  <a href="#">
                    <img v-lazy="server+'img/index/nav-bar/1-9.jpg'" alt>
                  </a>
                  <a href="#">
                    <img v-lazy="server+'img/index/nav-bar/1-10.jpg'" alt>
                  </a>
                </div>
              </div>
            </li>
            <li class="list-11">
              <span></span>
              <a href="#">鞋靴</a>/
              <a href="#">箱包</a>/
              <a href="#">钟表</a>/
              <a href="#">珠宝</a>
              <div class="list-11">
                <div class="list-left">
                  <ul class="list-left-top clear">
                    <li>
                      <a href="#">皮具箱包</a>
                    </li>
                    <li>
                      <a href="#">钟表馆</a>
                    </li>
                    <li>
                      <a href="#">玉器频道</a>
                    </li>
                    <li>
                      <a href="#">大牌特卖</a>
                    </li>
                    <li>
                      <a href="#">服装城</a>
                    </li>
                    <li>
                      <a href="#">运动馆</a>
                    </li>
                    <li>
                      <a href="#">海外购手表</a>
                    </li>
                  </ul>
                  <ul class="list-left-bottom">
                    <li class="clear">
                      <h4>时尚男鞋</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">【足力健品牌日满300减30】</a>
                        </li>
                        <li>
                          <a href="#">商务鞋</a>
                        </li>
                        <li>
                          <a href="#">商务休闲鞋</a>
                        </li>
                        <li>
                          <a href="#" class="active">板鞋</a>
                        </li>
                        <li>
                          <a href="#">高跟鞋</a>
                        </li>
                        <li>
                          <a href="#" class="active">乐福鞋</a>
                        </li>
                        <li>
                          <a href="#">豆豆鞋男</a>
                        </li>
                        <li>
                          <a href="#">正装皮鞋</a>
                        </li>
                        <li>
                          <a href="#" class="active">布洛克</a>
                        </li>
                        <li>
                          <a href="#">帆布鞋</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>女鞋</h4>
                      <ul>
                        <li>
                          <a href="#">秋冬鞋品</a>
                        </li>
                        <li>
                          <a href="#">单鞋</a>
                        </li>
                        <li>
                          <a href="#">休闲鞋</a>
                        </li>
                        <li>
                          <a href="#">帆布鞋</a>
                        </li>
                        <li>
                          <a href="#">乐福鞋</a>
                        </li>
                        <li>
                          <a href="#">居家鞋/室内拖鞋</a>
                        </li>
                        <li>
                          <a href="#">高跟鞋</a>
                        </li>
                        <li>
                          <a href="#">小白鞋</a>
                        </li>
                        <li>
                          <a href="#">凉鞋</a>
                        </li>
                        <li>
                          <a href="#">鱼嘴鞋</a>
                        </li>
                        <li>
                          <a href="#">坡跟鞋</a>
                        </li>
                        <li>
                          <a href="#">拖鞋/人字拖1</a>
                        </li>
                        <li>
                          <a href="#">秋冬新品</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>时尚女包</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">双肩包</a>
                        </li>
                        <li>
                          <a href="#">单肩包</a>
                        </li>
                        <li>
                          <a href="#">斜挎包</a>
                        </li>
                        <li>
                          <a href="#">手提包</a>
                        </li>
                        <li>
                          <a href="#">手拿包</a>
                        </li>
                        <li>
                          <a href="#">女士钱包</a>
                        </li>
                        <li>
                          <a href="#">卡包</a>
                        </li>
                        <li>
                          <a href="#">钥匙包</a>
                        </li>
                        <li>
                          <a href="#">胸包</a>
                        </li>
                        <li>
                          <a href="#">腰包</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>精品男包</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">单肩包</a>
                        </li>
                        <li>
                          <a href="#">双肩包</a>
                        </li>
                        <li>
                          <a href="#" class="active">斜挎包</a>
                        </li>
                        <li>
                          <a href="#">手提包</a>
                        </li>
                        <li>
                          <a href="#">商务公文包</a>
                        </li>
                        <li>
                          <a href="#">手拿包</a>
                        </li>
                        <li>
                          <a href="#">男士钱包</a>
                        </li>
                        <li>
                          <a href="#">卡包</a>
                        </li>
                        <li>
                          <a href="#">腰包</a>
                        </li>
                        <li>
                          <a href="#">胸包</a>
                        </li>
                        <li>
                          <a href="#">钥匙包</a>
                        </li>
                        <li>
                          <a href="#">皮具套装</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>功能箱包</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">女士拉杆箱</a>
                        </li>
                        <li>
                          <a href="#">拉杆箱</a>
                        </li>
                        <li>
                          <a href="#">拉杆包</a>
                        </li>
                        <li>
                          <a href="#">旅行包</a>
                        </li>
                        <li>
                          <a href="#">万向轮箱</a>
                        </li>
                        <li>
                          <a href="#">运动休闲包</a>
                        </li>
                        <li>
                          <a href="#">电脑包</a>
                        </li>
                        <li>
                          <a href="#">登山包</a>
                        </li>
                        <li>
                          <a href="#">书包</a>
                        </li>
                        <li>
                          <a href="#">箱包配件</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>钟表眼镜</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">天梭</a>
                        </li>
                        <li>
                          <a href="#">浪琴</a>
                        </li>
                        <li>
                          <a href="#">飞亚达</a>
                        </li>
                        <li>
                          <a href="#">欧米伽</a>
                        </li>
                        <li>
                          <a href="#">DW</a>
                        </li>
                        <li>
                          <a href="#">卡西欧</a>
                        </li>
                        <li>
                          <a href="#">西铁城</a>
                        </li>
                        <li>
                          <a href="#">天王</a>
                        </li>
                        <li>
                          <a href="#">瑞士名表</a>
                        </li>
                        <li>
                          <a href="#">国产名表</a>
                        </li>
                        <li>
                          <a href="#">日韩名表</a>
                        </li>
                        <li>
                          <a href="#">欧美名表</a>
                        </li>
                        <li>
                          <a href="#">电子表</a>
                        </li>
                        <li>
                          <a href="#">智能手表</a>
                        </li>
                        <li>
                          <a href="#">闹钟</a>
                        </li>
                        <li>
                          <a href="#">挂钟</a>
                        </li>
                        <li>
                          <a href="#">座钟</a>
                        </li>
                        <li>
                          <a href="#">钟表配件</a>
                        </li>
                        <li>
                          <a href="#">太阳镜</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>珠宝饰品</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">黄金</a>
                        </li>
                        <li>
                          <a href="#">钻戒</a>
                        </li>
                        <li>
                          <a href="#">铂金</a>
                        </li>
                        <li>
                          <a href="#">翡翠玉石</a>
                        </li>
                        <li>
                          <a href="#" class="active">钻石</a>
                        </li>
                        <li>
                          <a href="#">彩宝</a>
                        </li>
                        <li>
                          <a href="#" class="active">珍珠项链</a>
                        </li>
                        <li>
                          <a href="#">金银投资</a>
                        </li>
                        <li>
                          <a href="#">银饰</a>
                        </li>
                        <li>
                          <a href="#">木手串</a>
                        </li>
                        <li>
                          <a href="#">施华洛世奇</a>
                        </li>
                        <li>
                          <a href="#">水晶玛瑙</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>礼品乐器</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">打火机</a>
                        </li>
                        <li>
                          <a href="#">瑞士军刀</a>
                        </li>
                        <li>
                          <a href="#">电子烟</a>
                        </li>
                        <li>
                          <a href="#">zippo</a>
                        </li>
                        <li>
                          <a href="#" class="active">烟盒</a>
                        </li>
                        <li>
                          <a href="#">电钢琴</a>
                        </li>
                        <li>
                          <a href="#" class="active">电子琴</a>
                        </li>
                        <li>
                          <a href="#">钢琴</a>
                        </li>
                        <li>
                          <a href="#">吉他</a>
                        </li>
                        <li>
                          <a href="#">尤克里里</a>
                        </li>
                        <li>
                          <a href="#">乐器配件</a>
                        </li>
                        <li>
                          <a href="#">烟斗</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>邮币商城</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">钱币</a>
                        </li>
                        <li>
                          <a href="#">纪念币</a>
                        </li>
                        <li>
                          <a href="#">纪念钞</a>
                        </li>
                        <li>
                          <a href="#">古币</a>
                        </li>
                        <li>
                          <a href="#" class="active">连体钞</a>
                        </li>
                        <li>
                          <a href="#">金银币</a>
                        </li>
                        <li>
                          <a href="#" class="active">外币</a>
                        </li>
                        <li>
                          <a href="#">铜元</a>
                        </li>
                        <li>
                          <a href="#">邮票</a>
                        </li>
                        <li>
                          <a href="#">琉璃</a>
                        </li>
                        <li>
                          <a href="#">陶瓷</a>
                        </li>
                        <li>
                          <a href="#">雕刻</a>
                        </li>
                        <li>
                          <a href="#">刺绣</a>
                        </li>
                        <li>
                          <a href="#">布艺品</a>
                        </li>
                        <li>
                          <a href="#">漆器</a>
                        </li>
                        <li>
                          <a href="#">青铜器</a>
                        </li>
                        <li>
                          <a href="#">书画</a>
                        </li>
                        <li>
                          <a href="#">影视周边</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="list-right">
                  <ul class="list-right-top">
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-1.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-2.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-3.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-4.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-5.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-6.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-7.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-8.jpg'" alt>
                      </a>
                    </li>
                  </ul>
                  <a href="#">
                    <img v-lazy="server+'img/index/nav-bar/1-9.jpg'" alt>
                  </a>
                  <a href="#">
                    <img v-lazy="server+'img/index/nav-bar/1-10.jpg'" alt>
                  </a>
                </div>
              </div>
            </li>
            <li class="list-12">
              <span></span>
              <a href="#">汽摩</a>/
              <a href="#">二手车</a>/
              <a href="#">汽车用品</a>
              <div class="list-12">
                <div class="list-left">
                  <ul class="list-left-top clear">
                    <li>
                      <a href="#">苏宁汽车</a>
                    </li>
                    <li>
                      <a href="#">特价新年</a>
                    </li>
                    <li>
                      <a href="#">品质二手车</a>
                    </li>
                    <li>
                      <a href="#">汽车用品</a>
                    </li>
                    <li>
                      <a href="#">苏宁车管家</a>
                    </li>
                  </ul>
                  <ul class="list-left-bottom">
                    <li class="clear">
                      <h4>汽车电摩</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">【新旧电单车 L1MINI新品首发】</a>
                        </li>
                        <li>
                          <a href="#">汽车</a>
                        </li>
                        <li>
                          <a href="#">定金购车</a>
                        </li>
                        <li>
                          <a href="#" class="active">分期购车</a>
                        </li>
                        <li>
                          <a href="#">二手车</a>
                        </li>
                        <li>
                          <a href="#" class="active">电动车</a>
                        </li>
                        <li>
                          <a href="#">摩托车</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>系统养护</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">【车品踏秋焕新 电子满300减30】</a>
                        </li>
                        <li>
                          <a href="#">机油</a>
                        </li>
                        <li>
                          <a href="#">燃油添加剂</a>
                        </li>
                        <li>
                          <a href="#">机油添加剂</a>
                        </li>
                        <li>
                          <a href="#">系统清洁剂</a>
                        </li>
                        <li>
                          <a href="#">防冻液/附属油</a>
                        </li>
                        <li>
                          <a href="#">美孚</a>
                        </li>
                        <li>
                          <a href="#">胜牌</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>电子/电器</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">行车记录仪</a>
                        </li>
                        <li>
                          <a href="#">车载冰箱</a>
                        </li>
                        <li>
                          <a href="#">空气净化器</a>
                        </li>
                        <li>
                          <a href="#">车载充电器</a>
                        </li>
                        <li>
                          <a href="#">车载生活电器</a>
                        </li>
                        <li>
                          <a href="#">车载吸尘器</a>
                        </li>
                        <li>
                          <a href="#">车载蓝牙</a>
                        </li>
                        <li>
                          <a href="#">手机支架</a>
                        </li>
                        <li>
                          <a href="#">数据线</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>清洁美容</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">【龟牌金秋盛惠 满99减30】</a>
                        </li>
                        <li>
                          <a href="#">玻璃水</a>
                        </li>
                        <li>
                          <a href="#" class="active">洗车机</a>
                        </li>
                        <li>
                          <a href="#">洗车水枪</a>
                        </li>
                        <li>
                          <a href="#">车蜡</a>
                        </li>
                        <li>
                          <a href="#">漆面修复</a>
                        </li>
                        <li>
                          <a href="#">点漆笔</a>
                        </li>
                        <li>
                          <a href="#">内饰清洁</a>
                        </li>
                        <li>
                          <a href="#">外部清洁</a>
                        </li>
                        <li>
                          <a href="#">清洁工具</a>
                        </li>
                        <li>
                          <a href="#">毛巾掸子</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>汽车装饰</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">座垫/套</a>
                        </li>
                        <li>
                          <a href="#">脚垫</a>
                        </li>
                        <li>
                          <a href="#">头枕腰靠</a>
                        </li>
                        <li>
                          <a href="#">香水</a>
                        </li>
                        <li>
                          <a href="#">挂件摆件</a>
                        </li>
                        <li>
                          <a href="#">方向盘套</a>
                        </li>
                        <li>
                          <a href="#">后备箱垫</a>
                        </li>
                        <li>
                          <a href="#">车载充气床</a>
                        </li>
                        <li>
                          <a href="#">车钥匙扣</a>
                        </li>
                        <li>
                          <a href="#">炭包/净化剂</a>
                        </li>
                        <li>
                          <a href="#">车用收纳袋/盒</a>
                        </li>
                        <li>
                          <a href="#">车衣</a>
                        </li>
                        <li>
                          <a href="#">车贴</a>
                        </li>
                        <li>
                          <a href="#">雨眉</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>安全座椅</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">惠尔顿</a>
                        </li>
                        <li>
                          <a href="#">瑞贝乐</a>
                        </li>
                        <li>
                          <a href="#">路途乐</a>
                        </li>
                        <li>
                          <a href="#">猫头鹰</a>
                        </li>
                        <li>
                          <a href="#">15个月以下</a>
                        </li>
                        <li>
                          <a href="#">0-12周岁</a>
                        </li>
                        <li>
                          <a href="#">isofix接口</a>
                        </li>
                        <li>
                          <a href="#">安全带固定</a>
                        </li>
                        <li>
                          <a href="#">LATCH接口</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>汽车配件</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">雨刮/雨刷</a>
                        </li>
                        <li>
                          <a href="#">轮胎</a>
                        </li>
                        <li>
                          <a href="#">滤清器</a>
                        </li>
                        <li>
                          <a href="#">空滤</a>
                        </li>
                        <li>
                          <a href="#" class="active">车灯</a>
                        </li>
                        <li>
                          <a href="#">刹车片</a>
                        </li>
                        <li>
                          <a href="#">刹车盘</a>
                        </li>
                        <li>
                          <a href="#">火花塞</a>
                        </li>
                        <li>
                          <a href="#">轮毂</a>
                        </li>
                        <li>
                          <a href="#">喇叭</a>
                        </li>
                        <li>
                          <a href="#">电瓶</a>
                        </li>
                        <li>
                          <a href="#">防爆膜</a>
                        </li>
                        <li>
                          <a href="#">千斤顶</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>安全自驾</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">车载灭火器</a>
                        </li>
                        <li>
                          <a href="#">维修工具</a>
                        </li>
                        <li>
                          <a href="#">自驾野营</a>
                        </li>
                        <li>
                          <a href="#">应急救援</a>
                        </li>
                        <li>
                          <a href="#" class="active">车锁/地锁</a>
                        </li>
                        <li>
                          <a href="#">摩托用品</a>
                        </li>
                        <li>
                          <a href="#" class="active">保温箱</a>
                        </li>
                        <li>
                          <a href="#">充气泵</a>
                        </li>
                        <li>
                          <a href="#">胎压监测</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>汽车服务</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">加油卡</a>
                        </li>
                        <li>
                          <a href="#">保养服务</a>
                        </li>
                        <li>
                          <a href="#">安全服务</a>
                        </li>
                        <li>
                          <a href="#">保养套餐</a>
                        </li>
                        <li>
                          <a href="#" class="active">车猪猪</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="list-right">
                  <ul class="list-right-top">
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-1.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-2.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-3.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-4.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-5.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-6.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-7.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-8.jpg'" alt>
                      </a>
                    </li>
                  </ul>
                  <a href="#">
                    <img v-lazy="server+'img/index/nav-bar/1-9.jpg'" alt>
                  </a>
                  <a href="#">
                    <img v-lazy="server+'img/index/nav-bar/1-10.jpg'" alt>
                  </a>
                </div>
              </div>
            </li>
            <li class="list-13">
              <span></span>
              <a href="#">图书</a>/
              <a href="#">童书</a>/
              <a href="#">教辅教材</a>
              <div class="list-13">
                <div class="list-left">
                  <ul class="list-left-top clear">
                    <li>
                      <a href="#">品阅网 部分满100-50</a>
                    </li>
                    <li>
                      <a href="#">如懿传</a>
                    </li>
                    <li>
                      <a href="#">沙海</a>
                    </li>
                    <li>
                      <a href="#">当当网</a>
                    </li>
                    <li>
                      <a href="#">文轩网</a>
                    </li>
                    <li>
                      <a href="#">少儿图书</a>
                    </li>
                    <li>
                      <a href="#">图书频道</a>
                    </li>
                  </ul>
                  <ul class="list-left-bottom">
                    <li class="clear">
                      <h4>少儿频道</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">0-2岁</a>
                        </li>
                        <li>
                          <a href="#">3-6岁</a>
                        </li>
                        <li>
                          <a href="#">7-10岁</a>
                        </li>
                        <li>
                          <a href="#" class="active">10-14岁</a>
                        </li>
                        <li>
                          <a href="#">幼儿启蒙</a>
                        </li>
                        <li>
                          <a href="#" class="active">绘本</a>
                        </li>
                        <li>
                          <a href="#">益智游戏</a>
                        </li>
                        <li>
                          <a href="#">玩具书</a>
                        </li>
                        <li>
                          <a href="#" class="active">中国儿童文学</a>
                        </li>
                        <li>
                          <a href="#">外国儿童文学</a>
                        </li>
                        <li>
                          <a href="#">科普百科</a>
                        </li>
                        <li>
                          <a href="#" class="active">少儿英语</a>
                        </li>
                        <li>
                          <a href="#">励志成长</a>
                        </li>
                        <li>
                          <a href="#">动漫卡通</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>文学</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">散文随笔</a>
                        </li>
                        <li>
                          <a href="#">名人传记</a>
                        </li>
                        <li>
                          <a href="#">青春文学</a>
                        </li>
                        <li>
                          <a href="#">心理学</a>
                        </li>
                        <li>
                          <a href="#">哲学/宗教</a>
                        </li>
                        <li>
                          <a href="#">政治/军事</a>
                        </li>
                        <li>
                          <a href="#">地域文化</a>
                        </li>
                        <li>
                          <a href="#">法律</a>
                        </li>
                        <li>
                          <a href="#">社会教学</a>
                        </li>
                        <li>
                          <a href="#">军事</a>
                        </li>
                        <li>
                          <a href="#">中国民俗</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>小说</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">当代小说</a>
                        </li>
                        <li>
                          <a href="#">近代小说</a>
                        </li>
                        <li>
                          <a href="#">古典小说</a>
                        </li>
                        <li>
                          <a href="#">四大名著</a>
                        </li>
                        <li>
                          <a href="#">外国小说</a>
                        </li>
                        <li>
                          <a href="#">历史小说</a>
                        </li>
                        <li>
                          <a href="#">科幻小说</a>
                        </li>
                        <li>
                          <a href="#">言情小说</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>期刊/杂志</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">时尚/美妆</a>
                        </li>
                        <li>
                          <a href="#">生活休闲</a>
                        </li>
                        <li>
                          <a href="#" class="active">健康美食</a>
                        </li>
                        <li>
                          <a href="#">母婴育儿</a>
                        </li>
                        <li>
                          <a href="#">旅游地理</a>
                        </li>
                        <li>
                          <a href="#">财经管理</a>
                        </li>
                        <li>
                          <a href="#">数码/计算机</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>经管励志</h4>
                      <ul>
                        <li>
                          <a href="#">经济</a>
                        </li>
                        <li>
                          <a href="#">美食</a>
                        </li>
                        <li>
                          <a href="#">孕产育儿</a>
                        </li>
                        <li>
                          <a href="#">塑身美颜</a>
                        </li>
                        <li>
                          <a href="#">居家休闲</a>
                        </li>
                        <li>
                          <a href="#" class="active">性</a>
                        </li>
                        <li>
                          <a href="#">体育运动</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>教育辅助</h4>
                      <ul>
                        <li>
                          <a href="#">外语</a>
                        </li>
                        <li>
                          <a href="#">英语四六级</a>
                        </li>
                        <li>
                          <a href="#">国家公务员</a>
                        </li>
                        <li>
                          <a href="#">会计类考试</a>
                        </li>
                        <li>
                          <a href="#">office办公</a>
                        </li>
                        <li>
                          <a href="#">IT互联网</a>
                        </li>
                        <li>
                          <a href="#">工具书</a>
                        </li>
                        <li>
                          <a href="#" class="active">中小学教辅</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>艺术</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">绘画</a>
                        </li>
                        <li>
                          <a href="#">摄影</a>
                        </li>
                        <li>
                          <a href="#">音乐</a>
                        </li>
                        <li>
                          <a href="#">书法</a>
                        </li>
                        <li>
                          <a href="#" class="active">连环画</a>
                        </li>
                        <li>
                          <a href="#">建筑艺术</a>
                        </li>
                        <li>
                          <a href="#">影视</a>
                        </li>
                        <li>
                          <a href="#">艺术理论</a>
                        </li>
                        <li>
                          <a href="#">设计</a>
                        </li>
                        <li>
                          <a href="#">艺术类考试</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="list-right">
                  <ul class="list-right-top">
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-1.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-2.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-3.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-4.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-5.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-6.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-7.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-8.jpg'" alt>
                      </a>
                    </li>
                  </ul>
                  <a href="#">
                    <img v-lazy="server+'img/index/nav-bar/1-9.jpg'" alt>
                  </a>
                  <a href="#">
                    <img v-lazy="server+'img/index/nav-bar/1-10.jpg'" alt>
                  </a>
                </div>
              </div>
            </li>
            <li class="list-14">
              <span></span>
              <a href="#">理财</a>/
              <a href="#">分期</a>/
              <a href="#">保险</a>/
              <a href="#">房产</a>
              <div class="list-14">
                <div class="list-left">
                  <ul class="list-left-top clear">
                    <li>
                      <a href="#">手机频道</a>
                    </li>
                    <li>
                      <a href="#">智能数码</a>
                    </li>
                    <li>
                      <a href="#">以旧换新</a>
                    </li>
                    <li>
                      <a href="#">网上营业厅</a>
                    </li>
                    <li>
                      <a href="#">企业采购</a>
                    </li>
                    <li>
                      <a href="#">海外购</a>
                    </li>
                    <li>
                      <a href="#">二手优品</a>
                    </li>
                  </ul>
                  <ul class="list-left-bottom">
                    <li class="clear">
                      <h4>手机通讯</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">【iPhone XS新品开抢赠无限充礼包】</a>
                        </li>
                        <li>
                          <a href="#">全部手机</a>
                        </li>
                        <li>
                          <a href="#">iPhone</a>
                        </li>
                        <li>
                          <a href="#" class="active">小米</a>
                        </li>
                        <li>
                          <a href="#">荣耀</a>
                        </li>
                        <li>
                          <a href="#" class="active">华为</a>
                        </li>
                        <li>
                          <a href="#">三星</a>
                        </li>
                        <li>
                          <a href="#">魅族</a>
                        </li>
                        <li>
                          <a href="#" class="active">OPPO</a>
                        </li>
                        <li>
                          <a href="#">vivo</a>
                        </li>
                        <li>
                          <a href="#">美图</a>
                        </li>
                        <li>
                          <a href="#" class="active">努比亚</a>
                        </li>
                        <li>
                          <a href="#">飞利浦</a>
                        </li>
                        <li>
                          <a href="#">金立</a>
                        </li>
                        <li>
                          <a href="#">守护宝</a>
                        </li>
                        <li>
                          <a href="#" class="active">正品好货</a>
                        </li>
                        <li>
                          <a href="#">以旧换新</a>
                        </li>
                        <li>
                          <a href="#">手机维修</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>手机配件</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">【智能爆款最高直降600】</a>
                        </li>
                        <li>
                          <a href="#">手机壳</a>
                        </li>
                        <li>
                          <a href="#">手机贴膜</a>
                        </li>
                        <li>
                          <a href="#">手机存储卡</a>
                        </li>
                        <li>
                          <a href="#">数据线</a>
                        </li>
                        <li>
                          <a href="#">充电器</a>
                        </li>
                        <li>
                          <a href="#">无线充电器</a>
                        </li>
                        <li>
                          <a href="#">手机耳环</a>
                        </li>
                        <li>
                          <a href="#">手机电视</a>
                        </li>
                        <li>
                          <a href="#">苹果周边</a>
                        </li>
                        <li>
                          <a href="#">移动电源</a>
                        </li>
                        <li>
                          <a href="#">蓝牙耳机</a>
                        </li>
                        <li>
                          <a href="#">自拍杆</a>
                        </li>
                        <li>
                          <a href="#">手机支架</a>
                        </li>
                        <li>
                          <a href="#">手机U盘</a>
                        </li>
                        <li>
                          <a href="#">蓝牙音箱</a>
                        </li>
                        <li>
                          <a href="#">车载配件</a>
                        </li>
                        <li>
                          <a href="#">手机饰品</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>智能设备</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">【贩米日 各种爆款秒杀 一分抽大牌】</a>
                        </li>
                        <li>
                          <a href="#">智能手环</a>
                        </li>
                        <li>
                          <a href="#">智能手表</a>
                        </li>
                        <li>
                          <a href="#">体感车</a>
                        </li>
                        <li>
                          <a href="#">VR眼镜</a>
                        </li>
                        <li>
                          <a href="#">智能摄像头</a>
                        </li>
                        <li>
                          <a href="#">智能家居</a>
                        </li>
                        <li>
                          <a href="#">智能门锁</a>
                        </li>
                        <li>
                          <a href="#">无人机</a>
                        </li>
                        <li>
                          <a href="#">智能机器人</a>
                        </li>
                        <li>
                          <a href="#">智能健康监测</a>
                        </li>
                        <li>
                          <a href="#" class="active">玩客云</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>影音电子</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">音响</a>
                        </li>
                        <li>
                          <a href="#">耳机/耳麦</a>
                        </li>
                        <li>
                          <a href="#" class="active">智能音箱</a>
                        </li>
                        <li>
                          <a href="#">运动耳机</a>
                        </li>
                        <li>
                          <a href="#">MP3/MP4</a>
                        </li>
                        <li>
                          <a href="#">收音/收音机</a>
                        </li>
                        <li>
                          <a href="#">录音笔</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>电子教育</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">儿童手表</a>
                        </li>
                        <li>
                          <a href="#">学生电脑/学习机</a>
                        </li>
                        <li>
                          <a href="#">故事机</a>
                        </li>
                        <li>
                          <a href="#">翻译机</a>
                        </li>
                        <li>
                          <a href="#">智能才儿童手表</a>
                        </li>
                        <li>
                          <a href="#">点读机/笔</a>
                        </li>
                        <li>
                          <a href="#">电子书</a>
                        </li>
                        <li>
                          <a href="#">电子词典</a>
                        </li>
                        <li>
                          <a href="#">复读机</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>二手优品</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">【献礼国庆 二手全场立减最高1000】</a>
                        </li>
                        <li>
                          <a href="#">iphone 7</a>
                        </li>
                        <li>
                          <a href="#">iphone 8</a>
                        </li>
                        <li>
                          <a href="#">iPhone X</a>
                        </li>
                        <li>
                          <a href="#">iphone 8p</a>
                        </li>
                        <li>
                          <a href="#">iphone 7p</a>
                        </li>
                        <li>
                          <a href="#">oppo</a>
                        </li>
                        <li>
                          <a href="#">vivo</a>
                        </li>
                        <li>
                          <a href="#">三星</a>
                        </li>
                        <li>
                          <a href="#">华为</a>
                        </li>
                        <li>
                          <a href="#">小米</a>
                        </li>
                      </ul>
                    </li>
                    <li class="clear">
                      <h4>营业厅</h4>
                      <ul>
                        <li>
                          <a href="#" class="active">焕新节</a>
                        </li>
                        <li>
                          <a href="#">选号码</a>
                        </li>
                        <li>
                          <a href="#">办套餐</a>
                        </li>
                        <li>
                          <a href="#">充话费/流量</a>
                        </li>
                        <li>
                          <a href="#" class="active">办宽带</a>
                        </li>
                        <li>
                          <a href="#">中国移动</a>
                        </li>
                        <li>
                          <a href="#" class="active">29元60GB</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="list-right">
                  <ul class="list-right-top">
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-1.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-2.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-3.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-4.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-5.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-6.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-7.jpg'" alt>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img v-lazy="server+'img/index/nav-bar/1-8.jpg'" alt>
                      </a>
                    </li>
                  </ul>
                  <a href="#">
                    <img v-lazy="server+'img/index/nav-bar/1-9.jpg'" alt>
                  </a>
                  <a href="#">
                    <img v-lazy="server+'img/index/nav-bar/1-10.jpg'" alt>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="nav-middle">
          <ul>
            <li>
              <a href="#">大聚会</a>
              <span></span>
            </li>
            <li>
              <a href="#">红孩子</a>
              <span></span>
            </li>
            <li>
              <a href="#">苏宁超市</a>
              <span></span>
            </li>
            <li>
              <a href="#">电器城</a>
              <span></span>
            </li>
            <li>
              <a href="#">生活家电</a>
              <b class="hot"></b>
              <span></span>
            </li>
            <li>
              <a href="#">时尚服饰</a>
              <span></span>
            </li>
            <li>
              <a href="#">苏宁国际</a>
              <span></span>
            </li>
            <li>
              <a href="#">苏宁Outlets</a>
              <span></span>
            </li>
            <li>
              <a href="#">苏宁金融</a>
              <span></span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "headerNavbar",
  data() {
    return {
      server: "http://127.0.0.1:3000/"
    };
  },
  props: ['isLarge','isShow']
};
</script>
<style scoped>
@import "../../../static/css/headerNavbar.css";
.headerNavbar {
  background: #fff;
}
.headerNavbar .w-1400{
	width: 1390px !important;
}
.headerNavbar .showList{
	height: 0;
	overflow: hidden;
}
.headerNavbar .nav-left>a:hover+.showList{
	height: 440px !important;
}
.headerNavbar .showList:hover{
	height: 440px !important;
	overflow: visible;
}
</style>

