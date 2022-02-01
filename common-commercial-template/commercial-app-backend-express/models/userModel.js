const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_first_name: {
    type: String,
    required: true,
  },
  user_last_name: {
    type: String,
    required: true,
  },
  user_nickname: {
    type: String,
    required: true,
  },
  user_mobile: {
    type: String,
    required: true,
  },
  user_email: {
    type: String,
    required: true,
  },
  user_address: {
    type: String,
    required: true,
  },
  user_dateofbirth: {
    type: String,
    required: true,
  },
  user_Gender: {
    type: String,
    required: true,
  },
  user_password: {
    type: String,
    required: true,
  },
  user_wishList: {
    type: Array,
    required: true,
  },
  user_wouldLikeUpdate: {
    type: Boolean,
    required: true,
  },
  user_account_type: {
    type: String,
    required: true,
  },
});

const NewUser = mongoose.model("user", userSchema);

module.exports = NewUser;
