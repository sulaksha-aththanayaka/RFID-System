// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPLmgs6Yc9fEsz1dCc9xdf95eQFj8Z7UM",
  authDomain: "test-7cb5d.firebaseapp.com",
  databaseURL: "https://rfid-3a790-default-rtdb.firebaseio.com/",
  projectId: "rfid-3a790",
  storageBucket: "test-7cb5d.appspot.com",
  messagingSenderId: "729629451338",
  appId: "1:729629451338:web:212718a1ff6bb0465eb2b3",
  measurementId: "G-Z4GDWYPY7D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Connect to the Firebase Realtime Database
const database = firebase.database();

// Get a reference to the RFID data
const rfidRef = database.ref("rfid");

// Retrieve the most recent data from the database
rfidRef.limitToLast(1).on("child_added", (snapshot) => {
  const data = snapshot.val();
  // TODO: Compare the most recent data with the existing data in your MongoDB database
});
