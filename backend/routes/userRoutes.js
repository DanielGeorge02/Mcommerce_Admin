const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  addUser,
  updateUser,
  getUsersByType,
} = require("../controllers/userControllers");

router.route("/all").get(getAllUsers);
router.route("/:usertype").get(getUsersByType);
router.route("/").post(addUser).put(updateUser);

module.exports = router;
