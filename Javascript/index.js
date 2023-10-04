// import { initializeApp } from 'firebase/app';
// import {getDatabase} from 'firebase/database';
// import { getStorage } from 'firebase/storage';
// // import { getDatabase } from "firebase/database";

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCQ34GgMwoq85P34gsRQT0bo6PK7Tpf6yc",
//   authDomain: "piatron-a9a6d.firebaseapp.com",
//   databaseURL: "https://piatron-a9a6d-default-rtdb.firebaseio.com",
//   projectId: "piatron-a9a6d",
//   storageBucket: "piatron-a9a6d.appspot.com",
//   messagingSenderId: "1065060850773",
//   appId: "1:1065060850773:web:83866aa3bac2f552e808dc",
//   measurementId: "G-F8CJX083LX"

//   // apiKey: "AIzaSyBCeegciD2bXW37p_Hry-h6fzM7WroRd5E",
//   // authDomain: "food-counter-4a98e.firebaseapp.com",
//   // databaseURL: "https://food-counter-4a98e-default-rtdb.firebaseio.com",
//   // projectId: "food-counter-4a98e",
//   // storageBucket: "food-counter-4a98e.appspot.com",
//   // messagingSenderId: "70051237930",
//   // appId: "1:70051237930:web:ff7e037109c8d32d837353",
//   // measurementId: "G-L6ZLN8M7QL"

// };

// const app = initializeApp(firebaseConfig);

// const db = getDatabase(app);

// // const fire = getFirestore

// const storage = getStorage(app);

// export {db, storage};

const { initializeApp } = require('firebase/app');
const { getDatabase } = require('firebase/database');
const { getStorage } = require('firebase/storage');

const firebaseConfig = {
  apiKey: "AIzaSyCQ34GgMwoq85P34gsRQT0bo6PK7Tpf6yc",
  authDomain: "piatron-a9a6d.firebaseapp.com",
  databaseURL: "https://piatron-a9a6d-default-rtdb.firebaseio.com",
  projectId: "piatron-a9a6d",
  storageBucket: "piatron-a9a6d.appspot.com",
  messagingSenderId: "1065060850773",
  appId: "1:1065060850773:web:83866aa3bac2f552e808dc",
  measurementId: "G-F8CJX083LX"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app);

module.exports = { db, storage };




