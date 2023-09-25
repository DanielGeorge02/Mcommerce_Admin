const asyncHandler = require("express-async-handler");
const FCM = require("fcm-node");
const dotenv = require("dotenv").config();

const serverKey = process.env.SERVER_KEY;
// console.log(serverKey);
const fcm = new FCM(serverKey);

const SendNotification = asyncHandler(async (req, res) => {
  var message = {
    to: req.body.receiverToken,
    notification: {
      title: req.body.title,
      body: req.body.body,
    },

    data: {
      title: "ok cdfsdsdfsd",
      body: '{"name" : "okg ooggle ogrlrl","product_id" : "123","final_price" : "0.00035"}',
    },
  };

  fcm.send(message, function (err, response) {
    if (err) {
      console.log("Something has gone wrong!" + err);
      console.log("Response:! " + response);
      res.send("notsent");
    } else {
      // showToast("Successfully sent with response");
      console.log("Successfully sent with response: ", response);
      res.send("sent");
    }
  });

  // var FCM = require("fcm-node");
  // var serverKey =
  //   "AAAA3wIEKJo:APA91bFsRgM-OUJ_vCW7vWGwyCODSnF6P5j78D2fKuxXDnLI29fG7ZCF6hEODxHeeDG4ftImnOgCKjGhR5qFgcZ0AJVpz0mPrsawp9ZLA7jiHsAq8yxVv39jg-QpZIaz6U79u__NtSo-";
  // var fcm = new FCM(serverKey);

  // var message = {
  //   to: "cRIt5BdlSHC3BKKGiIpzmk:APA91bFFHlDb4FLsZLoFgePrlPGhHH1ozune3aATZLJHH53jvIZKzCvsphwKxaxBO0Was1XX-9Ke-KrdYFMUZTi3TA2r_6U6wAxhIDGDgGSH1X0SnuWLxJwSF0uT5umNF2fV85rfUmQ2",
  //   notification: {
  //     title: "Yo bro",
  //     body: "whats up bro :-)",
  //   },

  //   data: {
  //     //you can send only notification or only data(or include both)
  //     title: "ok cdfsdsdfsd",
  //     body: '{"name" : "okg ooggle ogrlrl","product_id" : "123","final_price" : "0.00035"}',
  //   },
  // };

  // fcm.send(message, function (err, response) {
  //   if (err) {
  //     console.log("Something has gone wrong!" + err);
  //     console.log("Respponse:! " + response);
  //   } else {
  //     // showToast("Successfully sent with response");
  //     console.log("Successfully sent with response: ", response);
  //   }
  // });
});

const ScheduleNotification = asyncHandler(async (req, res) => {
  const now = new Date();
  const targetTime = new Date(req.body.time);
  const millisecondsToWait = targetTime.getTime() - now;
  console.log(now.toISOString("en-US", { timeZone: "Asia/Kolkata" }));
  console.log(targetTime);
  console.log(millisecondsToWait);
  if (millisecondsToWait < 0) {
    res.status(400).json({ message: "Select a future date and time" });
  } else {
    setTimeout(() => {
      // Your code here

      var message = {
        to: req.body.receiverToken,
        notification: {
          title: req.body.title,
          body: req.body.body,
        },

        data: {
          title: "ok cdfsdsdfsd",
          body: '{"name" : "okg ooggle ogrlrl","product_id" : "123","final_price" : "0.00035"}',
        },
      };

      fcm.send(message, function (err, response) {
        if (err) {
          console.log("Something has gone wrong!" + err);
          console.log("Respponse:! " + response);
        } else {
          console.log("Successfully sent with response: ", response);
        }
      });
    }, millisecondsToWait);
    res.json({ message: "Message scheduled successfully" });
  }
});

module.exports = { SendNotification, ScheduleNotification };
