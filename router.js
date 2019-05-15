const router=require('koa-router')();
const {adduser}=require('./controller/login');
module.exports=(app)=>{
    router.post('/usr/login',adduser);
    app.use(router.routes()).use(router.allowedMethods());
}