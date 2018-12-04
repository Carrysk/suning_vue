<template>
  <div class="login">
    <header>
      <a href="#" class='logo'></a>
      <div>
        <p>为确保您账户的安全及正常使用，依《网络安全法》相关要求，6月1日起会员账户需绑定手机。如您还未绑定，请尽快完成，感谢您的理解及支持！</p>
      </div>
      <a href="#"><span></span>我对“登录”提意见</a>
    </header>
    <section>
      <div class="main">
        <a href="#"></a>
        <div class="forms">
          <div class="login-tab">
            <a href="#"><span>扫码登录</span><i></i></a>
            <a href="#" class='active'><span>账户登录</span><i></i></a>
          </div>
          <div class="pc-login">
            <div class="uname-login">
              <div class="blank"></div>
              <div class="loginWarn" v-if='loginWarn' v-text='loginWarn'></div>
              <div class="uname">
                <i></i>
                <input type="text" name="uname" placeholder='用户名' v-model='uname'>
                <em></em>
              </div>
              <div v-if='unameWarn.length' class='unameWarn' v-text='unameWarn'></div>
              <div class="upwd">
                <i></i>
                <input type="password" name="upwd" placeholder="密码" v-model='upwd'>
                <em></em>
              </div>
              <div v-if='upwdWarn.length' class='upwdWarn' v-text='upwdWarn'></div>
            </div>
            <div class="login-help">
              <a href="#" class='mesg'><i></i> 短信验证码登录</a>
              <a href="#" class='forgot'>忘记密码？</a>
            </div>
            <div class="login-btn">
              <a href="" @click.prevent.stop='login'>登 录</a>
            </div>
          </div>
          <div class="registry">
            <a href="registry.html">免费注册 有惊喜 ></a>
          </div>
          <div class="bind-login">
            <span>使用以下账号登录</span>
            <a href="#" class="qq"><i></i>QQ</a>
            <a href="#" class='wx'><i></i>微信</a>
            <a href="#" class='yfb'><i></i>易付宝</a>
            <a href="#" class='hyk'>门店会员卡</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      uname: '123',
      upwd: '123456',
      unameWarn: '',
      upwdWarn: '',
      loginWarn: ''
    };
  },
  methods:{
    login(){
      if(this.uname.length==0){
        this.unameWarn = '用户名不能为空' 
        return
        }
      else this.unameWarn = '' 
      if(!(this.upwd.length>=6&&this.upwd.length<=13)){
        this.upwdWarn = '请输入6~13位密码'
        return  
      }
      else this.upwdWarn = ''
      this.$axios.post('/user/login',{
      data:{
        'uname': this.uname,
        'upwd': this.upwd
      }}).then(res=>{
        console.log(res)
        if(res.data.code!=200){
          this.loginWarn = '登陆失败，用户名或密码错误'
          return
        }else{
          this.loginWarn = ''
          this.$axios.pop(-1)
        }
      }).catch(err=>{
        if(err) console.log(err)
      })
    }
  }
};
</script>
<style scoped>
  @import url('../../../static/css/login.css');
</style>



