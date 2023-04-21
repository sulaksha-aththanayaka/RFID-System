import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

function StartFirebase() {
  const firebaseConfig = {
    apiKey: 'AIzaSyDx3sFoHn7IaEzg4B2v0IJxYXbpl_6XRKg',
    authDomain: 'rfidkeyhandoversystem.firebaseapp.com',
    databaseURL:
      'https://rfidkeyhandoversystem-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'rfidkeyhandoversystem',
    storageBucket: 'rfidkeyhandoversystem.appspot.com',
    messagingSenderId: '589260498775',
    appId: '1:589260498775:web:0cc01a44090f9fc675c012',
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
}

export default StartFirebase;
