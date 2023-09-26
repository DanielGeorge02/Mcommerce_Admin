const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({ methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"] }));

app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
});

// app.use(express.static(__dirname + "/frontend", { index: false }));
// app.get(/^((?!(api)).)*$/, function (req, res) {
//   res.sendFile(__dirname + "/attendance-management/index.html");
// });

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/notification", require("./routes/notificationRoutes"));
app.use("/api/queries", require("./routes/queryRoutes"));

app.listen(8000, (req, res) => {
  console.log("listening to port:", process.env.PORT);
});
