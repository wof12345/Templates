const userModel = require("../models/userModel");

// let data = {
//   admin_first_name: "Atif",
//   admin_last_name: "Bin ferdous",
//   admin_nickname: "wof",
//   admin_mobile: "01680793142",
//   admin_email: "lsampercot@gmail.com",
//   admin_address: "Mymensingh ,Bangladesh",
//   admin_password: "HumanityRules1234567890!",
// };

exports.getAdmin = async (req, res) => {
  try {
    const userData = await userModel.find();

    res.status("200").json({
      status: "success",
      length: userData.length,
      data: { userData },
    });
  } catch (error) {
    res.status("400").json({
      status: "failure",
    });
  }
};

exports.createAdmin = async (req, res) => {
  try {
    const newUser = await userModel.create(req.body);

    res.status("200").json({
      status: "success",
    });
  } catch (error) {
    res.status("400").json({
      status: "failure",
    });
  }
};
