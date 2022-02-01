var express = require("express");
const userController = require(".././controllers/userController");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/admin/createadmin", userController.createAdmin);
router.get("/admin/getadmin", userController.getAdmin);

module.exports = router;
