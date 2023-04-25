const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const admin = require("firebase-admin");
const Cards = require("./cards");
const Keys = require("./keys");
const Combined = require("./combinedData");
const Returned = require("./returnedData");
const serviceAccount = require("./serviceAccountKey.json");

app.use(cors());
app.use(express.json());

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
    const keysCollection = mongoose.connection.collection("keys");
    const combinedCollection = mongoose.connection.collection("combineddatas");

    app.get("/cards", async (req, res) => {
      const result = await Cards.find();
      // console.log(result);
      res.status(200).send(JSON.stringify(result));
    });

    app.post("/addcarduser", async (request, response) => {
      try {
        const user_id = request.body.user_id;
        const fname = request.body.fname;
        const lname = request.body.lname;
        const gender = request.body.gender;
        const designature = request.body.designature;
        const phn = request.body.phn;
    
        const newAddItem = new Cards({
          user_id,
          fname,
          lname,
          gender,
          designature,
          phn,
        });
    
        await newAddItem.save();
    
        response.json("New User is Added.");
      } catch (error) {
        console.error(error);
        response.status(500).json({ message: "Server Error" });
      }
    });

    app.get("/keys", async (req, res) => {
      const result = await Keys.find();
      // console.log(result);
      res.status(200).send(JSON.stringify(result));
    });

    app.post("/addcardkey", async (request, response) => {
      try {
        const key_id = request.body.key_id;
        const place = request.body.place;
        
    
        const newAddItem = new Keys({
          key_id,
          place
        });
    
        await newAddItem.save();
    
        response.json("New Key is Added.");
      } catch (error) {
        console.error(error);
        response.status(500).json({ message: "Server Error" });
      }
    });

    app.get("/combineddatas", async (req, res) => {
      const result = await Combined.find();
      // console.log(result);
      res.status(200).send(JSON.stringify(result));
    });

    app.get('/user_id', (req, res) => {
      const myVariable = 'Hello, world!'; // replace with your variable
      res.json({ myVariable });
    });
    

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://rfid-3a790-default-rtdb.firebaseio.com/",
    });

    const db = admin.database();
    const ref = db.ref("user_id");

    ref.on(
      "value",
      async (snapshot) => {
        const firebaseUserId = snapshot.val();
        console.log("Firebase User ID:", firebaseUserId);
    
        if (!firebaseUserId) {
          console.log("No card detected.");
          return;
        }
    
        const cardDoc = await cardsCollection.findOne({ user_id: firebaseUserId });
        if (!cardDoc) {
          console.log(`Card with ID ${firebaseUserId} not found in database.`);
          return;
        }
    
        console.log("Please scan the key.");
    
        const keyRef = db.ref("key_id");
    
        // Remove old listener before adding a new one
        keyRef.off("value");
    
        keyRef.on(
          "value",
          async (keySnapshot) => {
            const firebaseKeyId = keySnapshot.val();
            console.log("Firebase Key ID:", firebaseKeyId);
    
            if (!firebaseKeyId) {
              console.log("No key detected.");
              return;
            }
    
            const keyDoc = await keysCollection.findOne({ key_id: firebaseKeyId });
            if (!keyDoc) {
              console.log(`Key with ID ${firebaseKeyId} not found in database.`);
              return;
            }

            const combinedDoc = await combinedCollection.findOne({ key_id: firebaseKeyId});
            if(combinedDoc) {
              console.log("Key has returned");
              saveReturnedData(combinedDoc.user_id, combinedDoc.key_id, combinedDoc.fname, combinedDoc.lname, combinedDoc.place);
              await combinedCollection.deleteOne({ key_id: firebaseKeyId });
              db.ref().remove();
            }else{
              saveCombinedData(cardDoc.user_id, keyDoc.key_id, cardDoc.fname, cardDoc.lname, keyDoc.place);
              db.ref().remove();
            }

            // const combinedDataRef = db.ref("combined_data");
            // combinedDataRef.remove();
    
            console.log(`Key with ID ${firebaseKeyId} found in database!`);
            
           
          },
          (error) => {
            console.log(`Error fetching key data: ${error}`);
          }
        );
      },
      (error) => {
        console.log(`Error fetching card data: ${error}`);
      }
    ); 
      },
      (error) => {
        console.log(`Error fetching card data: ${error}`);
      }
    )
  .catch((error) => {
    console.log(error);
  });


  function saveReturnedData(mongoUserId, mongoKeyId, mongoFName, mongoLName, mongoPlace){
    const newData = new Returned({
      user_id: mongoUserId,
      key_id: mongoKeyId,
      fname: mongoFName,
      lname: mongoLName,
      place: mongoPlace,
    });

    if(mongoFName) {
      newData
      .save()
      .then(() => {
        console.log("Returned data saved to MongoDB!");
        //remove data
        const db = admin.database();
        db.ref().remove();
        console.log("Data removed from Firebase!");
      })
      .catch((error) => {
        console.log(`Error saving data: ${error}`);
      });
    }
  }


function saveCombinedData(mongoUserId, mongoKeyId, mongoFName, mongoLName, mongoPlace) {
  const newData = new Combined({
    user_id: mongoUserId,
    key_id: mongoKeyId,
    fname: mongoFName,
    lname: mongoLName,
    place: mongoPlace,
  });


 if(mongoFName) {
  newData
  .save()
  .then(() => {
    console.log("Combined data saved to MongoDB!");
    //remove data
    const db = admin.database();
    db.ref().remove();
    console.log("Data removed from Firebase!");
  })
  .catch((error) => {
    console.log(`Error saving data: ${error}`);
  });
}
}


 
