const mongoose = require('../conn').mongoose;
const Schema = mongoose.Schema;

const bookmarkSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  URL: {
    type: String,
    require: true
  },
  catalog: {
    type: String,
    require: true
  },
  time: {
    type: Date,
    default: Date.now,
    require:true
  },
  label: [{
    type: String
  }],
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    require:true
  }
});


// 导出 bookmark 模型
module.exports = mongoose.model('bookmark', bookmarkSchema);