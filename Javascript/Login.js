// import { onValue, ref, update, get } from "firebase/database";
// import { db } from "./index.js";

const { update, ref, get } = require('firebase/database');
const { db } = require('./index.js');

const requiredEmail = document.getElementById('required-email');

// // Function to validate email and OTP status
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
document.querySelector('form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = requiredEmail.value;
  const pin = document.querySelector('#userPin').value;

  // Retrieve data from the database
  const loginRef = ref(db, 'UsersList/');
  const snapshot = await get(loginRef);

  if (snapshot.exists()) {
    const usersList = snapshot.val();

    for (const key in usersList) {
      if (usersList.hasOwnProperty(key)) {
        const user = usersList[key];

        if (key === 'Cafeteria' && user.email === email && user.pin === pin) {
          // Redirect the user to the admin page for cafeteria
          window.location.href = '/pages/Admin.html';
          return;
        } else if (key !== 'Cafeteria' && user.email === email && user.pin === pin) {
          // Redirect the user to the admin page for regular users
          window.location.href = '/pages/Order.html';
          return;
        }
      }
    }
  }

  // If no match found or conditions not met, show an error message
  alert('Invalid email or pin. Please try again.');
});


