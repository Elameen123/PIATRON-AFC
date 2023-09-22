"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storage = exports.db = void 0;

var _app = require("firebase/app");

var _database = require("firebase/database");

var _storage = require("firebase/storage");

// import { getDatabase } from "firebase/database";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCQ34GgMwoq85P34gsRQT0bo6PK7Tpf6yc",
  authDomain: "piatron-a9a6d.firebaseapp.com",
  databaseURL: "https://piatron-a9a6d-default-rtdb.firebaseio.com",
  projectId: "piatron-a9a6d",
  storageBucket: "piatron-a9a6d.appspot.com",
  messagingSenderId: "1065060850773",
  appId: "1:1065060850773:web:83866aa3bac2f552e808dc",
  measurementId: "G-F8CJX083LX" // apiKey: "AIzaSyBCeegciD2bXW37p_Hry-h6fzM7WroRd5E",
  // authDomain: "food-counter-4a98e.firebaseapp.com",
  // databaseURL: "https://food-counter-4a98e-default-rtdb.firebaseio.com",
  // projectId: "food-counter-4a98e",
  // storageBucket: "food-counter-4a98e.appspot.com",
  // messagingSenderId: "70051237930",
  // appId: "1:70051237930:web:ff7e037109c8d32d837353",
  // measurementId: "G-L6ZLN8M7QL"

};
var app = (0, _app.initializeApp)(firebaseConfig);
var db = (0, _database.getDatabase)(app); // const fire = getFirestore

exports.db = db;
var storage = (0, _storage.getStorage)(app);
exports.storage = storage;