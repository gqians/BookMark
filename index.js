const Koa = require('koa');
const path = require('path');
const nunjucks = require('koa-nunjucks-2');
const bodyParser=require('koa-bodyparser');
const router = require('./router');
let app = new Koa();
const {
  mongoose,
  connect,
  close
} = require('./model/conn');
app.use(bodyParser());
app.use(nunjucks({
    ext: 'html',
    path: path.join(__dirname, 'views'),// 指定视图目录
    nunjucksConfig: {
        trimBlocks: true // 开启转义 防Xss
    }
}));
app.use(async (context, next) => {
   connect();
  const db = mongoose.connection;
  db.on('error', () => {
    console.error("连接失败");
  });
  db.on('open', () => {
    console.log("连接成功");
  }); 
  await next();
  await close();
  console.log("连接断开");
});

router(app);
app.listen(3456,()=>{
    console.log('server is running');
})
