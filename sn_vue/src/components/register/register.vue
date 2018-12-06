<template>
  <div class="register">
    <header>
      <a href="#" class="logo"></a>
      <p>欢迎注册</p>
      <a href="#" @click="jumpLogin">我已经注册，马上登录></a>
    </header>
    <section>
      <form method="post" action>
        <p class="gift">
          <i></i>注册领取
          <em>199</em>元大礼包
        </p>
        <div class="form-input phone-number">
          <div class="in">
            <span>手机号码</span>
            <input
              type="text"
              name="phoneNumber"
              placeholder="请输入手机号"
              maxlength="11"
              v-model="phone"
            >
            <i class="ok"></i>
          </div>
          <div class="tip" v-show="hasPhone">手机格式有误！请重新输入</div>
          <div class="tip" v-show="!hasPhone&&phoneHad">手机号已存在！请输入其他手机号</div>
        </div>
        <div class="form-input phone-verify">
          <div class="in">
            <span>手机验证码</span>
            <input
              type="text"
              name="phoneCode"
              placeholder="请输入验证码"
              maxlength="6"
              v-model="phoneCode"
            >
            <i class="ok"></i>
            <a href="#" @click.prevent.stop="getCode">获取短信验证码</a>
          </div>
          <div class="tip" v-if="hasPhoneCode">请输入6位数字验证码。</div>
        </div>
        <div class="form-input pwd">
          <div class="in">
            <span>设置密码</span>
            <input
              type="password"
              name="upwd"
              maxlength="20"
              placeholder="请输入密码"
              v-model="upwd"
              @blur="upwdBlur"
            >
            <i class="ok"></i>
          </div>
          <div class="tip">
            <p class="errorTip" v-if="upwdErr">密码格式有误!</p>
            <p class="importTip" v-if="upwdTip">
              6-20个字符，由字母，数字和下滑线的两种以上组合。
              <a href>密码设置建议</a>
            </p>
            <p class="safeRank" v-if="safeTip">
              安全程度：
              <span :class="safeTip>0?'act':''">低</span>
              <span :class="safeTip>1?'act':''">中</span>
              <span :class="safeTip>2?'act':''">高</span>
            </p>
          </div>
        </div>
        <div class="rule">
          <input type="checkbox" name="agreeRules" checked>
          <a href="#">《苏宁易购会员章程》</a>
          <a href="#">《易付宝协议》</a>及
          <a href="#">《苏宁广告联盟在线协议》</a>
        </div>
        <button class="submit" @click.prevent.stop="signIn">注 册</button>
        <a href="#" class="etp">
          <i></i>企业用户注册>
        </a>
      </form>
    </section>
  </div>
</template>
<script>
export default {
  name: "register",
  data() {
    return {
      phone: "", // 手机号
      upwd: "", //密码
      phoneCode: "", // 验证码
      hasPhoneCode: false, // 手机号验证码错误
      hasPhone: false, // 手机号码错误提示
      upwdErr: false, // 密码错误提示
      upwdTip: false, //密码提示
      safeTip: false, //安全提示等级
      phoneHad: false //是否存在当前注册的手机号
    };
  },
  watch: {
    upwd: function(val) {
      this.upwdErr = false;
      this.upwdTip = true;
      if (/^(\w){6,20}$/.test(val)) {
        this.safeTip = 0;
        if (/[0-9]+/i.test(val)) this.safeTip++;
        if (/[a-z]+/i.test(val)) this.safeTip++;
        if (/[\_]+/.test(val)) this.safeTip++;
      }
    }
  },
  methods: {
    getCode() {
      if (!/^1[34578]\d{9}$/.test(this.phone)) {
        this.hasPhone = true;
        return;
      }
      this.$axios
        .get("/user/phoneCode", { params: { phone: this.phone } })
        .then(res => {
          if (res.data.code == 200) {
            alert(res.data.phoneCode);
            this.phoneHad = false;
          } else {
            this.phoneHad = true;
          }
        });
    },
    signIn() {
      if (!/^1[34578]\d{9}$/.test(this.phone)) this.hasPhone = true;
      if (!/^(\d){6}$/.test(this.phoneCode)) this.hasPhoneCode = true;
      if (this.hasPhone || this.hasPhoneCode || this.upwdErr || this.phoneHad)
        return;
      this.$axios
        .post(
          "/user/register",
          this.$qs.stringify({
            phone: this.phone,
            upwd: this.upwd,
            phoneCode: this.phoneCode
          }),
          {
            headers: { "Content-Type": "application/x-www-form-urlencoded" }
          }
        )
        .then(res => {
          // console.log(res)
          if (res.data.code == 200) {
            alert('注册成功,1s后跳转登录页面')
            setTimeout(()=>{
              this.jumpLogin()
            },1000)
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    upwdBlur() {
      this.upwdTip = false;
      if (this.upwd.length == 0) return;
      if (!/^(\w){6,20}$/.test(this.upwd)) this.upwdErr = true;
    },
    jumpLogin(){
      this.$router.push('/login')
    }
  }
};
</script>
<style scoped>
@import url("../../../static/css/register.css");
form .pwd div.tip .safeRank .act {
  background: #fa0;
}
</style>


