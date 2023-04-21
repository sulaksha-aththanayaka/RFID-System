const cors = require("cors");
// const Cards = require("./cards");
// // const stripe = require("stripe")(
// //   "sk_test_51KUDBXSE1AGsrDtwPrEyIlUO6MdKE5YUC77sdqUjLmrwjiEXxcGQPtkEDYlKmlaT6Ll0IIfMtBxaRYoWTEfdXYAh00tng8EKHY"
// // );

// const app = express();
// const port = process.env.PORT || 8000;

// // Middlewares
// app.use(express.json());


// // connection url

// const connection_url =
//   "mongodb+srv://Pdpatel267:admin@cluster0.wiq7i.mongodb.net/Cluster0?retryWrites=true&w=majority";

// mongoose.connect(connection_url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// // API

// app.get("/", (req, res) => res.status(200).send("Home Page"));

// // add product

// app.post("/products/add", (req, res) => {
//   const productDetail = req.body;

//   console.log("Product Detail >>>>", productDetail);

//   Cards.create(productDetail, (err, data) => {
//     if (err) {
//       res.status(500).send(err.message);
//       console.log(err);
//     } else {
//       res.status(201).send(data);
//     }
//   });
// });

// app.get("/products/get", (req, res) => {
//   Cards.find((err, data) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).send(data);
//     }
//   });
// });
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const admin = require("firebase-admin");
const Cards = require("./cards");
const Keys = require("./keys");
const Combined = require("./combinedData");
const serviceAccount = require("./serviceAccountKey.json");

app.use(cors());


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
   // const combinedCollection = mongoose.connection.collection("combinedData");
  
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

    app.get("/cards", async (req, res) => {
      const result = await Cards.find();
      // console.log(result);
      res.status(200).send(JSON.stringify(result));
    });

    app.get("/keys", async (req, res) => {
      const result = await Keys.find();
      // console.log(result);
      res.status(200).send(JSON.stringify(result));
    });

    // app.post("/combinedData", async (req, res) => {

    // })
    

    // cardsCollection
    //   .find({}, { user_id: 1 })
    //   .toArray()
    //   .then((docs) => {
    //     const mongoUserId = docs[0].user_id;
    //     console.log("MongoDB User ID:", mongoUserId);


    //     const db = admin.database();
    //     const ref = db.ref("user_id");
    //     ref.on(
    //       "value",
    //       (snapshot) => {
    //         const firebaseUserId = snapshot.val();
    //         console.log("Firebase User ID:", firebaseUserId);

    //         if (mongoUserId === firebaseUserId) {
    //           console.log("User IDs Matched!");
    //         } else {
    //           console.log("User IDs Did Not Match!");
    //         }
    //       },
    //       (error) => {
    //         console.log(`Error fetching data: ${error}`);
    //       }
    //     );
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // keysCollection
    //   .find({}, { key_id: 1 })
    //   .toArray()
    //   .then((docs) => {
    //     const mongoKeyId = docs[0].key_id;
    //     console.log("MongoDB Key ID:", mongoKeyId);

    //     const db = admin.database();
    //     const ref = db.ref("key_id");
    //     ref.on(
    //       "value",
    //       (snapshot) => {
    //         const firebaseKeyId = snapshot.val();
    //         console.log("Firebase Key ID:", firebaseKeyId);

    //         if (mongoKeyId === firebaseKeyId) {
    //           console.log("Key IDs Matched!");
    //         } else {
    //           console.log("Key IDs Did Not Match!");
    //         }
    //       },
    //       (error) => {
    //         console.log(`Error fetching data: ${error}`);
    //       }
    //     );
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // 




//     cardsCollection
//   .find({}, { user_id: 1 })
//   .toArray()
//   .then((docs) => {
//     const mongoUserId = docs[0].user_id;
//     console.log("MongoDB User ID:", mongoUserId);

//     const db = admin.database();
//     const ref = db.ref("user_id");
//     ref.on(
//       "value",
//       (snapshot) => {
//         const firebaseUserId = snapshot.val();
//         console.log("Firebase User ID:", firebaseUserId);

//         if (mongoUserId === firebaseUserId) {
//           console.log("User IDs Matched!");
//           keysCollection
//             .find({}, { key_id: 1 })
//             .toArray()
//             .then((docs) => {
//               const mongoKeyId = docs[0].key_id;
//               console.log("MongoDB Key ID:", mongoKeyId);

//               const db = admin.database();
//               const ref = db.ref("key_id");
//               ref.on(
//                 "value",
//                 (snapshot) => {
//                   const firebaseKeyId = snapshot.val();
//                   console.log("Firebase Key ID:", firebaseKeyId);

//                   if (mongoKeyId === firebaseKeyId) {
//                     console.log("Key IDs Matched!");
//                     saveCombinedData(mongoUserId, mongoKeyId); // call the new function
//                   } else {
//                     console.log("Key IDs Did Not Match!");
//                   }
//                 },
//                 (error) => {
//                   console.log(`Error fetching data: ${error}`);
//                 }
//               );
//             })
//             .catch((error) => {
//               console.log(error);
//             });
//         } else {
//           console.log("User IDs Did Not Match!");
//         }
//       },
//       (error) => {
//         console.log(`Error fetching data: ${error}`);
//       }
//     );
//   })
//   .catch((error) => {
//     console.log(error);
//   });


// function saveCombinedData(mongoUserId, mongoKeyId) {
//   const newData = new Combined({
//     user_id: mongoUserId,
//     key_id: mongoKeyId
//   });

//   newData.save()
//     .then(() => {
//       console.log("Combined data saved to MongoDB!");
//     })
//     .catch((error) => {
//       console.log(`Error saving data: ${error}`);
//     });
// }

cardsCollection
  .find({}, { user_id: 1 })
  .toArray()
  .then((cardsDocs) => {
    const db = admin.database();
    const ref = db.ref("user_id");
    ref.on(
      "value",
      (snapshot) => {
        const firebaseUserId = snapshot.val();
        console.log("Firebase User ID:", firebaseUserId);

        let foundMatch = false;
        for (let i = 0; i < cardsDocs.length; i++) {
          const mongoUserId = cardsDocs[i].user_id;
          console.log("MongoDB User ID:", mongoUserId);
          if (mongoUserId === firebaseUserId) {
            console.log("User IDs Matched!");
            foundMatch = true;
            break;
          }
        }

        if (foundMatch) {
          keysCollection
            .find({}, { key_id: 1 })
            .toArray()
            .then((keysDocs) => {
              const ref = db.ref("key_id");
              ref.on(
                "value",
                (snapshot) => {
                  const firebaseKeyId = snapshot.val();
                  console.log("Firebase Key ID:", firebaseKeyId);

                  let foundMatch = false;
                  for (let i = 0; i < keysDocs.length; i++) {
                    const mongoKeyId = keysDocs[i].key_id;
                    console.log("MongoDB Key ID:", mongoKeyId);
                    if (mongoKeyId === firebaseKeyId) {
                      console.log("Key IDs Matched!");
                      foundMatch = true;
                      saveCombinedData(cardsDocs[i].user_id, mongoKeyId);
                      break;
                    }
                  }

                  if (!foundMatch) {
                    console.log("Key IDs Did Not Match!");
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

function saveCombinedData(mongoUserId, mongoKeyId) {
  const newData = new Combined({
    user_id: mongoUserId,
    key_id: mongoKeyId
  });

  newData.save()
    .then(() => {
      console.log("Combined data saved to MongoDB!");
    })
    .catch((error) => {
      console.log(`Error saving data: ${error}`);
    });
}

// cardsCollection
//   .find({}, { user_id: 1 })
//   .toArray()
//   .then((cardsDocs) => {
//     const db = admin.database();
//     const ref = db.ref("user_id");
//     ref.on(
//       "value",
//       (snapshot) => {
//         const firebaseUserId = snapshot.val();
//         console.log("Firebase User ID:", firebaseUserId);

//         let foundMatch = false;
//         for (let i = 0; i < cardsDocs.length; i++) {
//           const mongoUserId = cardsDocs[i].user_id;
//           console.log("MongoDB User ID:", mongoUserId);
//           if (mongoUserId === firebaseUserId) {
//             console.log("User IDs Matched!");
//             foundMatch = true;
//             break;
//           }
//         }

//         if (foundMatch) {
//           keysCollection
//             .find({}, { key_id: 1 })
//             .toArray()
//             .then((keysDocs) => {
//               const ref = db.ref("key_id");
//               ref.on(
//                 "value",
//                 (snapshot) => {
//                   const firebaseKeyId = snapshot.val();
//                   console.log("Firebase Key ID:", firebaseKeyId);

//                   let foundMatch = false;
//                   for (let i = 0; i < keysDocs.length; i++) {
//                     const mongoKeyId = keysDocs[i].key_id;
//                     console.log("MongoDB Key ID:", mongoKeyId);
//                     if (mongoKeyId === firebaseKeyId) {
//                       console.log("Key IDs Matched!");
//                       foundMatch = true;
//                       saveCombinedData(cardsDocs[i].user_id, mongoKeyId);
//                       break;
//                     }
//                   }

//                   if (!foundMatch) {
//                     console.log("Key IDs Did Not Match!");
//                   }
//                 },
//                 (error) => {
//                   console.log(`Error fetching data: ${error}`);
//                 }
//               );
//             })
//             .catch((error) => {
//               console.log(error);
//             });
//         } else {
//           console.log("User IDs Did Not Match!");
//         }
//       },
//       (error) => {
//         console.log(`Error fetching data: ${error}`);
//       }
//     );
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// function saveCombinedData(mongoUserId, mongoKeyId) {
//   const newData = new Combined({
//     user_id: mongoUserId,
//     key_id: mongoKeyId
//   });

//   newData.save()
//     .then(() => {
//       console.log("Combined data saved to MongoDB!");
//     })
//     .catch((error) => {
//       console.log(`Error saving data: ${error}`);
//     });
// }

    

  

      // Retrieve user_id and key_id from MongoDB and Firebase Realtime Database...
      
      // Create a new instance of the combinedData model
      // const newData = new Combined({
      //   user_id: mongoUserId,
      //   key_id: mongoKeyId
      // });
  

    // combinedCollection

      // module.exports = {
      //   cardsCollection: cardsCollection
      // };

  })
  .catch((error) => {
    console.log(error);
  });

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://rfid-3a790-default-rtdb.firebaseio.com/",
});

