const admin = require("firebase-admin");
const credentials = require("./cathartic-gofer-firebase-adminsdk-ues9s-491ddd9378.json");
const { getStorage } = require("firebase-admin/storage");

admin.initializeApp({
  credential: admin.credential.cert(credentials),
  storageBucket: "https://cathartic-gofer-default-rtdb.firebaseio.com",
});

const auth = admin.auth();
const db = admin.firestore();
const storage = admin.storage().bucket();

module.exports = { auth, db, storage };
