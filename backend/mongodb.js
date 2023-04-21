const express = require("express");
const mongoose = require("mongoose");
const app = express();
const admin = require("firebase-admin");
const Cards = require("./cards");
const serviceAccount = require("./serviceAccountKey.json");
//const { cardsData } = require("../frontend/src/Data/Data");

mongoose
  .connect(
    "mongodb+srv://sulakshaa04:GW1fiDlnG4QIWoKK@userdata.zqek2ja.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(5000, () => {
      console.log("Node API app is running on port 5000");
    });

    const cardsCollection = mongoose.connection.collection("cards");
    
    // cardsCollection.find({}).toArray((err, docs) => {
    //   if (err) {
    //     console.error(err);
    //     return;
    //   }
    
    //   // Iterate over the documents and log the desired properties
    //   docs.forEach(doc => {
    //     console.log(doc.name, doc.user_id);
    //     // Add more properties here as needed
    //   });
    // });

    // cardsCollection.findOne({}, function(err, doc) {
    //   console.log(doc);
    // });

    // cardsCollection.find().forEach(function(doc) {
    //   console.log('Name:', doc.name);
    //   console.log('User ID:', doc.user_id);
    //   console.log('Phone Number:', doc.phn);
    // });

    // app.get('/cards', (req, res) => {
    //   const cardsCollection = mongoose.connection.collection('cards');
    //   cardsCollection.find({}).toArray((err, docs) => {
    //     if (err) {
    //       console.error(err);
    //       return res.status(500).json({ error: 'Failed to fetch cards data' });
    //     }
    //     res.json(docs);
    //   });
    // });

    app.get("/cards", (req, res) => {
      Cards.find((err, data) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send(data);
        }
      });
    });
    
    

    cardsCollection
      .find({}, { user_id: 1 })
      .toArray()
      .then((docs) => {
        const mongoUserId = docs[0].user_id;
        console.log("MongoDB User ID:", mongoUserId);

        const db = admin.database();
        const ref = db.ref("user_id");
        ref.on(
          "value",
          (snapshot) => {
            const firebaseUserId = snapshot.val();
            console.log("Firebase User ID:", firebaseUserId);

            if (mongoUserId === firebaseUserId) {
              console.log("User IDs Matched!");
            } else {
              console.log("User IDs Did Not Match!");
            }
          },
          (error) => {
            console.log(`Error fetching data: ${error}`);
          }
        );
      })
      .catch((error) => {
        console.log(error);
      });

      module.exports = {
        cardsCollection: cardsCollection
      };

  })
  .catch((error) => {
    console.log(error);
  });

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://rfid-3a790-default-rtdb.firebaseio.com/",
});

