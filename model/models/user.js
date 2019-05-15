const mongoose = require('../conn').mongoose;
const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: {
    type: String,
    require: true
  },
  username: {
    type: String,
    require: true
  },
  bookmarks: [{
    type: Schema.Types.ObjectId,
    ref: 'bookmark'
  }],
  password: {
    type: String,
    require: true
  },
  pic: {
    type: String
  }
});


// 导出 user 模型
module.exports = mongoose.model('user', userSchema);