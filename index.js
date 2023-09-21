var FCM = require("fcm-node");
const dotenv = require("dotenv").config();
const cors = require("cors");
const express = require("express");
const serverKey = process.env.SERVER_KEY;
const fcm = new FCM(serverKey);

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use(cors({ methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"] }));

app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
});

app.post("/send", (req, res) => {
  var message = {
    to: req.body.receiverToken,
    notification: {
      title: req.body.title,
      body: req.body.body,
    },

    data: {
      //you can send only notification or only data(or include both)
      title: "ok cdfsdsdfsd",
      body: '{"name" : "okg ooggle ogrlrl","product_id" : "123","final_price" : "0.00035"}',
    },
  };

  fcm.send(message, function (err, response) {
    if (err) {
      console.log("Something has gone wrong!" + err);
      console.log("Respponse:! " + response);
    } else {
      // showToast("Successfully sent with response");
      console.log("Successfully sent with response: ", response);
      res.json(response);
    }
  });
});

app.listen(8000, (req, res) => {
  console.log("listening to port 8000");
});
