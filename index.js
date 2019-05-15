const Koa = require('koa');
const path = require('path');
const nunjucks = require('koa-nunjucks-2');
const bodyParser=require('koa-bodyparser');
const router = require('./router');
let app=new Koa();
app.use(bodyParser());
app.use(nunjucks({
    ext: 'html',
    path: path.join(__dirname, 'views'),// 指定视图目录
    nunjucksConfig: {
        trimBlocks: true // 开启转义 防Xss
    }
}));
router(app);
app.listen(3456,()=>{
    console.log('server is running');
})