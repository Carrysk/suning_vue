const express = require('express')
const pool = require('../pool')

var router = express.Router()

router.get('/getDetails', (req, res) => {
  var pid = req.query.pid
  if (!pid) {
    res.send(JSON.stringify({ pid: null }))
    return
  }
  var output = {
    detail: '',
    colors: [],
    size: []
  }
  var progress = 0;
  var sql = 'SELECT pid,fid,bid,title,subtitle,referPrice,price,color,size,details,sold_count,is_onsale FROM sn_product WHERE pid = ? ';
  pool.query(sql, [pid], (err, result) => {
    if (err) throw err
    output.detail = result
    progress += 25;
    if (progress == 100) res.send(JSON.stringify(output))
  })
  var sql2 = 'SELECT  pic_id,pid,sm,lg FROM sn_product_pic WHERE pid=?';
  pool.query(sql2, [pid], (err, result) => {
    if (err) throw err
    for (var i = 0, len = result.length; i < len; i++) {
      result[i].sm = 'http://127.0.0.1:3000/' + result[i].sm
      result[i].lg = 'http://127.0.0.1:3000/' + result[i].lg
    }
    output.pic = result
    progress += 25;
    if (progress == 100) res.send(JSON.stringify(output))
  })
  var sql3 = 'SELECT color FROM sn_product WHERE fid = (SELECT fid FROM sn_product WHERE pid = ? ) ';
  pool.query(sql3, [pid], (err, result) => {
    if (err) throw err
    for (var key of result) {
      if (output.colors.indexOf(key.color) == -1)
        output.colors.push(key.color)
    }
    progress += 25;
    if (progress == 100) res.send(JSON.stringify(output))
  })
  //查询内存大小 根据 pid
  var sql4 = 'SELECT size FROM sn_product WHERE fid = (SELECT fid FROM sn_product WHERE pid = ? ) ';
  pool.query(sql4, [pid], (err, result) => {
    if (err) throw err
    for (var key of result) {
      if (output.size.indexOf(key.size) == -1) {
        output.size.push(key.size)
      }
    }
    progress += 25;
    if (progress == 100) res.send(JSON.stringify(output))
  })
})


module.exports = router
