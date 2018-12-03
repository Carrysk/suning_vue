const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const session = require('express-session')
//循环数组


var user = require('./router/user')
var  product = require('./router/product')
var cart = require('./router/cart')
var index = require('./router/index')
var detail = require('./router/detail')

const pool = require('./pool')
// 构建web服务器
var app = express()
app.listen(3000)

app.use(bodyParser.urlencoded({
  extended: false
}))
//配置跨域
app.use(cors({
	origin: 'http://localhost:8080',
		credentials: true
}))
//session 配置
app.use(session({
	secret: 'carrysk',
	resave: false,
	saveUninitialized: true
}))

app.use(express.static('./public'))

app.use('/user',user)
app.use('/product',product)
app.use('/cart',cart)
app.use('/index',index)
app.use('/detail',detail)