"use strict";

var _database = require("firebase/database");

var _index = require("./index.js");

// import { onValue, ref } from "firebase/database";
// import { db } from "./index.js";
// // import {  getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// // const auth = getAuth();
// let otpCode  = 0;
// const generateOTP  = () => {
//   let otp = '';
//  for (let i = 0; i < 6; i++) {
//   otp += Math.floor(Math.random() * 10);
//  }
//  otpCode = Number(otp);
//   console.log(otp);
//   return otp;
// }
// generateOTP();
// console.log(otpCode);
// const requiredEmail = document.getElementById('required-email');
// function sendEmail() {
//   // Replace these placeholders with your actual email address, subject, and message
//   const emailAddress = 'lanre.mohammed23@gmail.com';
//   const subject = 'PIATRON-AFC Login details';
//   const message = 'Your OTP code is: ' + otpCode;
//   // URL-encode the subject and message
//   const encodedSubject = encodeURIComponent(subject);
//   const encodedMessage = encodeURIComponent(message);
//   // Create a `mailto` URL with subject and body parameters
//   const mailtoUrl = `mailto:${emailAddress}?subject=${encodedSubject}&body=${encodedMessage}`;
//   // Create an anchor element
//   const emailLink = document.createElement('a');
//   emailLink.href = mailtoUrl;
//   emailLink.innerText = 'Send Email';
//   // Trigger a click event on the anchor to open the user's default email client
//   emailLink.click();
// }
// const loginRef = ref(db, 'UsersList/');
// let loginData = [];
// onValue(loginRef, (snapshot) => {
//   if (snapshot.val()) {
//     // snapshot.forEach((snap) => {
//       loginData.push(snapshot.val());
//     // })
//   }
// })
// console.log(loginData);
// loginData.forEach((data) => {
//   let userName = '';
//   console.log(data);
//   Object.keys(data).forEach((item) => {
//     userName = item;
//     console.log('User', userName);
//   })
// });
// // const getData = () => {
// //   loginData.forEach((data) => {
// //     let userName = '';
// //     console.log(data);
// //     Object.keys(data).forEach((item) => {
// //       userName = item;
// //       console.log('User', userName);
// //     })
// //   });
// // };
// // getData();
// // requiredEmail.addEventListener('change', () => {
// //   if (requiredEmail.value === 'lanre.mohammed23@gmail.com') {
// //     sendEmail();
// //   }
// //   else {
// //     console.log('Email Not sent');
// //   }
// // });
// // const createForm = () => {
// //   const sendForm = document.createElement('form');
// //   sendForm.setAttribute('action', "https://formsubmit.co/el/letamo");
// //   sendForm.setAttribute('method', "POST");
// //   document.createElement('input');
// // }
// Function to generate a random 6-digit OTP
var generateOTP = function generateOTP() {
  var otp = '';

  for (var i = 0; i < 6; i++) {
    otp += Math.floor(Math.random() * 10);
  }

  return otp;
}; // Function to send an OTP email


function sendEmail(emailAddress, otp) {
  var subject = 'PIATRON-AFC Login details';
  var message = 'Your OTP code is: ' + otp;
  var encodedSubject = encodeURIComponent(subject);
  var encodedMessage = encodeURIComponent(message);
  var mailtoUrl = "mailto:".concat(emailAddress, "?subject=").concat(encodedSubject, "&body=").concat(encodedMessage);
  var emailLink = document.createElement('a');
  emailLink.href = mailtoUrl;
  emailLink.innerText = 'Send Email';
  emailLink.click();
}

var requiredEmail = document.getElementById('required-email'); // Function to validate email and OTP status

function validateEmail() {
  var email, loginRef, snapshot, userData, cafeteria, otp;
  return regeneratorRuntime.async(function validateEmail$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          email = requiredEmail.value; // Retrieve data from the database

          loginRef = (0, _database.ref)(_index.db, 'UsersList/');
          _context.next = 4;
          return regeneratorRuntime.awrap((0, _database.get)(loginRef));

        case 4:
          snapshot = _context.sent;

          if (!snapshot.exists()) {
            _context.next = 14;
            break;
          }

          userData = snapshot.val();

          if (!userData.hasOwnProperty('Cafeteria')) {
            _context.next = 14;
            break;
          }

          cafeteria = userData.Cafeteria; // Check if otpEnabled is false

          if (cafeteria.otpEnabled) {
            _context.next = 14;
            break;
          }

          otp = generateOTP(); // Update the OTP and otpEnabled in the database

          _context.next = 13;
          return regeneratorRuntime.awrap((0, _database.update)((0, _database.ref)(_index.db, 'UsersList/Cafeteria/'), {
            pin: otp,
            otpEnabled: true
          }));

        case 13:
          // Send the OTP to the cafeteria email
          sendEmail(cafeteria.email, otp);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  });
} // Listen for changes in the requiredEmail input field


requiredEmail.addEventListener('change', validateEmail); // Handle form submission

document.querySelector('form').addEventListener('submit', function _callee(e) {
  var email, pin, loginRef, snapshot, usersList, key, user;
  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          e.preventDefault();
          email = requiredEmail.value;
          pin = document.querySelector('#userPin').value; // Retrieve data from the database

          loginRef = (0, _database.ref)(_index.db, 'UsersList/');
          _context2.next = 6;
          return regeneratorRuntime.awrap((0, _database.get)(loginRef));

        case 6:
          snapshot = _context2.sent;

          if (!snapshot.exists()) {
            _context2.next = 24;
            break;
          }

          usersList = snapshot.val();
          _context2.t0 = regeneratorRuntime.keys(usersList);

        case 10:
          if ((_context2.t1 = _context2.t0()).done) {
            _context2.next = 24;
            break;
          }

          key = _context2.t1.value;

          if (!usersList.hasOwnProperty(key)) {
            _context2.next = 22;
            break;
          }

          user = usersList[key];

          if (!(key === 'Cafeteria' && user.email === email && user.pin === pin)) {
            _context2.next = 19;
            break;
          }

          // Redirect the user to the admin page for cafeteria
          window.location.href = '/pages/Admin.html';
          return _context2.abrupt("return");

        case 19:
          if (!(key !== 'Cafeteria' && user.email === email && user.pin === pin)) {
            _context2.next = 22;
            break;
          }

          // Redirect the user to the admin page for regular users
          window.location.href = '/pages/Order.html';
          return _context2.abrupt("return");

        case 22:
          _context2.next = 10;
          break;

        case 24:
          // If no match found or conditions not met, show an error message
          alert('Invalid email or pin. Please try again.');

        case 25:
        case "end":
          return _context2.stop();
      }
    }
  });
});