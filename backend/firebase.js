const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
 // databaseURL: "https://test-7cb5d-default-rtdb.firebaseio.com/",
 databaseURL: "https://rfid-3a790-default-rtdb.firebaseio.com/",
});

const db = admin.database();
const ref = db.ref("user_id");

ref.on(
  "value",
  (snapshot) => {
    console.log(snapshot.val());
  },
  (error) => {
    console.log(`Error fetching data: ${error}`);
  }
);
