const koa =  require('koa')
let koaBody = require('koa-body')
const app = new koa()
let productos = require('./productos')



app.use(koaBody())
app.use(productos.routes())



app.listen(3000)