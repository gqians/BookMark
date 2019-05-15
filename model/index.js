//封装数据库CRUD接入口
const user = require('./models/user');
/**
 * 输入用户账户获取该用户的书签
 * @param {String} account 账号
 */
async function getMakerId(account) {
  await user.findById(account)
    .populate('roomMember')
    .exec((err,data)=>{
        console.log(data);
    });
};
/**
 * 创建用户
 * @param {*} account 账号
 * @param {*} password 密码
 * @param {*} username 昵称
 */
async function addUser(account,password,username) {
  await user.create({_id:account,username:username,password:password},(err,data)=>{
        if(err){
            console.log(handleError(err));
        }else{
            console.log(data);
        }
    })
};
module.exports = {
  addUser,
  getMakerId
};