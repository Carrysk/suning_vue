const express = require('express')
const pool = require('../pool.js')

var router = express.Router()

router.post('/login', (req, res) => {
  console.log(req)
  var uname = req.body.uname
  if(!uname){
    res.send(JSON.stringify({code:301, msg:'用户名不能为空'}))
    return
  }
  var upwd = req.body.upwd
  if(!upwd){
    res.send(JSON.stringify({code:302, msg:'密码不能为空'}))
    return
  }
  console.log(uname,upwd)
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

module.exports = router;