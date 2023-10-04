"use strict";

// import { onValue, ref, update, get } from "firebase/database";
// import { db } from "./index.js";
var _require = require('firebase/database'),
    update = _require.update,
    ref = _require.ref,
    get = _require.get;

var _require2 = require('./index.js'),
    db = _require2.db;

var requiredEmail = document.getElementById('required-email'); // // Function to validate email and OTP status
// async function validateEmail() {
//   const email = requiredEmail.value;
//   // Retrieve data from the database
//   const loginRef = ref(db, 'UsersList/');
//   const snapshot = await get(loginRef);
//   if (snapshot.exists()) {
//     const userData = snapshot.val();
//     if (userData.hasOwnProperty('Cafeteria')) {
//       const cafeteria = userData.Cafeteria;
//       // Check if otpEnabled is false
//       if (!cafeteria.otpEnabled) {
//         const otp = generateOTP();
//         // Update the OTP and otpEnabled in the database
//         await update(ref(db, 'UsersList/Cafeteria/'), {
//           pin: otp,
//           otpEnabled: true
//         });
//         // Send the OTP to the cafeteria email
//         sendEmail(cafeteria.email, otp);
//       }
//     }
//   }
// }
// Listen for changes in the requiredEmail input field
// requiredEmail.addEventListener('change', validateEmail);
// Handle form submission

document.querySelector('form').addEventListener('submit', function _callee(e) {
  var email, pin, loginRef, snapshot, usersList, key, user;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          e.preventDefault();
          email = requiredEmail.value;
          pin = document.querySelector('#userPin').value; // Retrieve data from the database

          loginRef = ref(db, 'UsersList/');
          _context.next = 6;
          return regeneratorRuntime.awrap(get(loginRef));

        case 6:
          snapshot = _context.sent;

          if (!snapshot.exists()) {
            _context.next = 24;
            break;
          }

          usersList = snapshot.val();
          _context.t0 = regeneratorRuntime.keys(usersList);

        case 10:
          if ((_context.t1 = _context.t0()).done) {
            _context.next = 24;
            break;
          }

          key = _context.t1.value;

          if (!usersList.hasOwnProperty(key)) {
            _context.next = 22;
            break;
          }

          user = usersList[key];

          if (!(key === 'Cafeteria' && user.email === email && user.pin === pin)) {
            _context.next = 19;
            break;
          }

          // Redirect the user to the admin page for cafeteria
          window.location.href = '/pages/Admin.html';
          return _context.abrupt("return");

        case 19:
          if (!(key !== 'Cafeteria' && user.email === email && user.pin === pin)) {
            _context.next = 22;
            break;
          }

          // Redirect the user to the admin page for regular users
          window.location.href = '/pages/Order.html';
          return _context.abrupt("return");

        case 22:
          _context.next = 10;
          break;

        case 24:
          // If no match found or conditions not met, show an error message
          alert('Invalid email or pin. Please try again.');

        case 25:
        case "end":
          return _context.stop();
      }
    }
  });
});