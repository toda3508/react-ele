// 模拟后台数据
var express = require('express')
var app = express()
// 引入json数据模拟后台
// 移入data.json文件数据
var appData = require('./dd.json')
// 分解json对象 拿到数据
var getSeller = appData.seller
var getGoods = appData.goods
var getRatings = appData.ratings
// 调用express router方法
var apiRoutes = express.Router()
apiRoutes.get('/getSeller',function(req,res){
  res.json({
    errno:0,
    data:getSeller
  })
})
apiRoutes.get('/getGoods',function(req,res){
  res.json({
    errno:0,
    data:getGoods
  })
})
apiRoutes.get('/getRatings',function(req,res){
  res.json({
    errno:0,
    data:getRatings
  })
})
// 调用api 因为express是app 所以用app.use
app.use('/api',apiRoutes)

var server = app.listen(3001);





  