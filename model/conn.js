const mongoose = require('mongoose');
async function connect() {
  await mongoose.connect('mongodb://localhost:27017/BookMark', {
    //user: 'username',
    //pass: 'password'
  })
};

async function close() {
  await mongoose.connection.close()
};
module.exports = {
  mongoose,
  connect,
  close
};