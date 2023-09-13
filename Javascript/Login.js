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


import { onValue, ref, update, get } from "firebase/database";
import { db } from "./index.js";

// Function to generate a random 6-digit OTP
const generateOTP = () => {
  let otp = '';
  for (let i = 0; i < 6; i++) {
    otp += Math.floor(Math.random() * 10);
  }
  return otp;
}

// Function to send an OTP email
function sendEmail(emailAddress, otp) {
  const subject = 'PIATRON-AFC Login details';
  const message = 'Your OTP code is: ' + otp;

  const encodedSubject = encodeURIComponent(subject);
  const encodedMessage = encodeURIComponent(message);

  const mailtoUrl = `mailto:${emailAddress}?subject=${encodedSubject}&body=${encodedMessage}`;

  const emailLink = document.createElement('a');
  emailLink.href = mailtoUrl;
  emailLink.innerText = 'Send Email';

  emailLink.click();
}

const requiredEmail = document.getElementById('required-email');

// Function to validate email and OTP status
async function validateEmail() {
  const email = requiredEmail.value;

  // Retrieve data from the database
  const loginRef = ref(db, 'UsersList/');
  const snapshot = await get(loginRef);

  if (snapshot.exists()) {
    const userData = snapshot.val();
    if (userData.hasOwnProperty('Cafeteria')) {
      const cafeteria = userData.Cafeteria;

      // Check if otpEnabled is false
      if (!cafeteria.otpEnabled) {
        const otp = generateOTP();

        // Update the OTP and otpEnabled in the database
        await update(ref(db, 'UsersList/Cafeteria/'), {
          pin: otp,
          otpEnabled: true
        });

        // Send the OTP to the cafeteria email
        sendEmail(cafeteria.email, otp);
      }
    }
  }
}

// Listen for changes in the requiredEmail input field
requiredEmail.addEventListener('change', validateEmail);

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
