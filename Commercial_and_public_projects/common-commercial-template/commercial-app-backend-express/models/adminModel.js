const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  admin_first_name: {
    type: String,
    required: true,
  },
  admin_last_name: {
    type: String,
    required: true,
  },
  admin_nickname: {
    type: String,
    required: true,
  },
  admin_mobile: {
    type: String,
    required: true,
  },
  admin_email: {
    type: String,
    required: true,
  },
  admin_address: {
    type: String,
    required: true,
  },
  admin_dateofbirth: {
    type: String,
    required: true,
  },
  admin_Gender: {
    type: String,
    required: true,
  },
  admin_password: {
    type: String,
    required: true,
  },
});

const NewAdmin = mongoose.model("admin", adminSchema);

module.exports = NewAdmin;
