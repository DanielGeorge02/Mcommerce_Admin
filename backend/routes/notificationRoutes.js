const express = require("express");
const {
  SendNotification,
  ScheduleNotification,
} = require("../controllers/notificationControllers");
const router = express.Router();

router.route("/send").post(SendNotification);
router.route("/schedule").post(ScheduleNotification);

module.exports = router;
