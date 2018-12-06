const express = require('express')
const pool = require('../pool.js')

var router = express.Router()

router.post('/login', (req, res) => {
  // console.log(req.body)
  var uname = req.body.uname
  // console.log(uname)
  if (!uname) {
    res.send(JSON.stringify({ code: 301, msg: '用户名不能为空' }))
    return
  }
  var upwd = req.body.upwd
  if (!upwd) {
    res.send(JSON.stringify({ code: 302, msg: '密码不能为空' }))
    return
  }
  // console.log(uname,upwd)
  var sql = "SELECT uid FROM sn_user WHERE uname=? AND upwd = md5(?)"
  pool.query(sql, [uname, upwd], (err, result) => {
    if (err) throw err
    if (result.length > 0) {
      //保存在session中
      req.session.uid = result[0].uid
      res.send(JSON.stringify({ code: 200, msg: '登录成功' }))
      return
    } else {
      res.send(JSON.stringify({ code: 300, msg: '用户名或密码错误' }))
      return
    }
  })
})

//发送验证码 并查看是否有当前手机号
router.get('/phoneCode', (req, res) => {
  var phone = req.query.phone
  var sql = "SELECT phone FROM sn_user WHERE phone=?"
  pool.query(sql,[phone],(err,result)=>{
    if(err) throw err
    if(result.length>0) res.send(JSON.stringify({ code:100,msg:'手机号已存在'}))
    else res.send(JSON.stringify({ code: 200, phoneCode: '验证码为：100861' }))
  })
})

router.post('/register', (req, res) => {
  console.log(req.body)
  var phone = Number(req.body.phone)
  if (!(/^1[34578]\d{9}$/).test(phone)) {
    res.send(JSON.stringify({ code: 100, msg: '手机号格式有误' }))
    return
  }
  var upwd = req.body.upwd
  if (!(/^(\w){6,20}$/).test(upwd)) {
    res.send(JSON.stringify({ code: 101, msg: '密码格式有误' }))
    return
  }
  var phoneCode = req.body.phoneCode
  if (phoneCode != '100861') {
    res.send(JSON.stringify({ code: 103, msg: '验证码有误' }))
    return
  }
  //默认将手机号注册为用户名
  var uname = phone
  var sql = 'INSERT INTO sn_user(uid,uname,upwd,phone) VALUES(null,?,?,?)'
  pool.query(sql,[uname,upwd,phone],(err,result)=>{
    if(err) throw err
    console.log(result)
    if(result.affectedRows>0) res.send(JSON.stringify({code:200, msg:`注册成功，您的用户名为${phone}`}))
  })
})

router.post('/isLogin',(req,res)=>{
  var uid = req.session.uid
  var sql = 'SELECT uid,uname FROM sn_user WHERE uid = ?'
  pool.query(sql,[uid],(err,result)=>{
    if(err) throw err
    if(result.length>0)
      res.send(JSON.stringify({code:200,uname:result[0].uname}))
    else
      res.send(JSON.stringify({code:300,msg:'尚未登录'}))
  })
})

//注销
router.post('/logout',(req,res)=>{
  //判断是否session.uid 是否为undefined
  if(typeof(req.session.uid)=='undefined'){
    res.send(JSON.stringify({code:300, msg:'已注销'}))
    return 
  }
  req.session.uid = null
  res.send(JSON.stringify({code: 200, msg:'成功注销'}))
})

module.exports = router;