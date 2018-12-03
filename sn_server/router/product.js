const express = require('express')
const pool = require('../pool.js')
const CircularJSON = require('circular-json')

var router = express.Router()


//http://127.0.0.1:3000/product/search?msg=iPhone&pageSize=5&pno=1
router.get('/search',(req,res)=>{
  // console.log('请求')
  //前端输入 msg/pno/pageSize
  if(req.query.msg!==undefined)
    var msg = req.query.msg.split(' ')
  else
    var msg = ''
  if(msg ==='')
    var where =  ` title LIKE '%${msg}'`
  else{
    for(var i=0,len=msg.length;i<len;i++)
      msg[i] = ` title LIKE '%${msg[i]}%' `
    var where = msg.join(' AND ')
  }
  
  var pno = req.query.pno
  var pageSize = req.query.pageSize

  var sql = "SELECT sn_product.pid,fid,bid,title,price,sm,lg FROM sn_product LEFT OUTER JOIN sn_product_pic ON sn_product.pid=sn_product_pic.pid WHERE "
  //输出 
  var output = {
    pageSize,
    pno
  }
  //{"pid":1000,"fid":1,"bid":10,"title":"【赠无线充】Apple iPhone XS 64GB 金色移动联通电信4G手机","price":8699,"sm":"img/products/sm/iPhoneXS05.jpg","lg":"img/products/lg/iPhoneXS05.jpg"}
  pool.query(sql+where,[],(err,result)=>{
    if(err) throw err;

    for(var item of result){
      if(item.sm)
        item.sm ='http://127.0.0.1:3000/'+item.sm
      if(item.lg)
        item.lg ='http://127.0.0.1:3000/'+item.lg
    }
    // var newArr = []
    var hash = {}
    var newArr = result.reduce(function(item, next) {
      hash[next.pid] ? "" : hash[next.pid] = true && item.push(next)
      return item
    }, []) 

    // for(let item of newArr){
    //   item.sm = []
    //   item.lg = []
    // }
    // console.log(newArr[0])
    // for(let item of result){
    //   for(var key of newArr){
    //     if(key.pid == item.pid){
    //       key.sm.push(item.sm)
    //       key.lg.push(item.lg)
    //     }
    //   }
    // }
    // console.log(newArr[0])



    output.count = newArr.length;
    output.pageCount = Math.ceil(output.count/output.pageSize);
    output.products = newArr.slice((output.pno-1)*output.pageSize,output.pageSize*output.pno)
    res.send(JSON.stringify(output))
  })
})


module.exports = router
