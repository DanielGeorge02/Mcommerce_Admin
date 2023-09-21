// import admin from "firebase-admin";
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getMessaging } from "firebase-admin/messaging";
import express, { json } from "express";
import cors from "cors";
process.env.GOOGLE_APPLICATION_CREDENTIALS;

initializeApp({
  credential: applicationDefault(),
  projectId: "cathartic-gofer",
});

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

app.get("/", (req, res) => {
  res.send({ message: "API is working successfully" });
});

app.post("/send", (req, res) => {
  const message = {
    notification: {
      title: req.body.title,
      body: req.body.message,
    },
    token: req.body.fcmToken,
  };

  getMessaging()
    .send(message)
    .then((response) => {
      res.status(200).json({
        message: "Successfully sent message",
      }),
        console.log("Successfully sent message:", response);
    })
    .catch((error) => {
      res.status(400);
      res.send(error);
      console.log("Error sending message:", error);
    });
});

app.listen(8000, (req, res) => {
  console.log("Server running on the port 8000");
});
