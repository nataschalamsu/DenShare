const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
  phase: String
},{
  timestamps: true
})

let user = mongoose.model('user', userSchema)

module.exports = user;
