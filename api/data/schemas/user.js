let mongoose = require('mongoose');

let UserSchema = mongoose.Schema({
  userFirstName: String,
  userLastName: String,
  username: String,
  userPhoneNumber: String,
  userPassword: String,
});

module.exports = UserSchema;
