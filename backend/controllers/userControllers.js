const asyncHandler = require("express-async-handler");
const { db } = require("../firebaseconfig");

const getAllUsers = asyncHandler(async (req, res) => {
  const responseArr = [];
  await db
    .collection("UserBio")
    .get()
    .then((response) => {
      response.forEach((doc) => responseArr.push(doc.data()));
    })
    .then(() => {
      res.send(responseArr);
      console.log("Totally " + responseArr.length + " fetched successfully");
    });
});

const getUsersByType = asyncHandler(async (req, res) => {
  const responseArr = [];
  await db
    .collection("UserBio")
    .where("userType", "==", req.params.usertype)
    .get()
    .then((response) => {
      response.forEach((doc) => responseArr.push(doc.data()));
    })
    .then(() => {
      res.send(responseArr);
      console.log(
        responseArr.length + req.params.usertype + " fetched successfully"
      );
    });
});

const addUser = asyncHandler(async (req, res) => {
  const itemDetails = req.body;
  db.collection("UserBio")
    .doc(`${itemDetails.phoneNo}`)
    .set(itemDetails)
    .then((response) => {
      console.log(`Item ${itemDetails.phoneNo} Added Successfully`);
    });
  res.send("Uploaded Successfully");
});

const updateUser = asyncHandler(async (req, res) => {
  await db
    .collection(`UserBio`)
    .doc(req.body.phoneNo)
    .update({ status: req.body.status })
    .then(() => {
      res.send({ message: "User updated successfully" });
    });
});

module.exports = { getAllUsers, getUsersByType, addUser, updateUser };
