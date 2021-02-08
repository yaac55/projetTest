const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  Id: { type: String, required: true },
  Name: { type: Number, required: true }
});

module.exports = mongoose.model('User', UserSchema);