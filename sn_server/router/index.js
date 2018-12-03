const express = require('express')
const pool = require('../pool')

const router = express.Router()

//首页轮播图表
router.get('/getCarousel', (req, res) => {
  pool.query('SELECT cid,img FROM sn_index_carousel', [], (err, result) => {
    if (err) throw err
    for (var key of result) {
      key.img = 'http://127.0.0.1:3000' + key.img
    }
    res.send(result)
  })
})
//首页抢购轮播图商品
router.get('/getQgProduct', (req, res) => {
  pool.query('SELECT pid,title,pic,price,old_price,seld_count FROM sn_index_qgProduct', [], (err, result) => {
    if (err) throw err
    for (var key of result) { 
      key.pic = 'http://127.0.0.1:3000/' + key.pic
    }
    res.send(result)
  })
})
//首页商品数据
router.get('/getProduct', (req, res)=>{
  pool.query('SELECT pid,family,title,det,price,pic FROM sn_index_product',[],(err,result)=>{
    if(err) throw err
    for(var key of result){
      key.pic = 'http://127.0.0.1:3000/' + key.pic
    }
    res.send(result)
  })
})


module.exports = router;


