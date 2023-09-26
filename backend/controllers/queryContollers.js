const asyncHandler = require("express-async-handler");
const { db } = require("../firebaseconfig");

const addQuery = asyncHandler(async (req, res) => {
  const details = req.body;
  db.collection("queries")
    .add(details)
    .then((response) => {
      console.log(`Query Added Successfully`);
    });
  res.status(200).send("Uploaded Successfully");
});

const getAllQueries = asyncHandler(async (req, res) => {
  const responseArr = [];
  await db
    .collection("queries")
    .get()
    .then((response) => {
      response.forEach((doc) => responseArr.push(doc.data()));
    })
    .then(() => {
      res.status(200).send(responseArr);
      console.log(responseArr.length + " documents fetched successfully");
    });
});

module.exports = { addQuery, getAllQueries };
