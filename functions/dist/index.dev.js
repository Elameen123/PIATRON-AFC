"use strict";

/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started
// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
// const functions = require("firebase-functions");

// const admin = require("firebase-admin");

// const nodemailer = require("nodemailer");

// const cron = require("node-cron");

// admin.initializeApp(); // Configure a service account for Firebase Admin SDK

// const serviceAccount = require("../firebase.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://piatron-a9a6d-default-rtdb.firebaseio.com",
// }); // Initialize Nodemailer

// const transporter = nodemailer.createTransport({
//   service: "Gmail",
//   auth: {
//     user: "mohammedalhameen@gmail.com",
//     pass: "Wilmar.jr7",
//   },
// }); // Function to generate OTP


// function generateOTP() {
//   const digits = "0123456789";
//   let OTP = "";

//   for (let i = 0; i < 6; i++) {
//     OTP += digits[Math.floor(Math.random() * 10)];
//   }

//   return OTP;
// } // Schedule the OTP generation and sending at 7 AM every morning


// cron.schedule("0 12 04 * *", function () {
//   const otp = generateOTP();
//   const mailOptions = {
//     from: "mohammedalhameen@gmail.com",
//     to: "lanre.mohammed23@gmail.com",
//     subject: "Your OTP for Today",
//     text: "Your OTP for today is: ".concat(otp),
//   }; // Send the OTP email

//   transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("OTP email sent: " + info.response);

//       admin.database().ref("otp").set({
//         value: otp,
//       });
//     }
//   });
// }); // Schedule to disable OTP at 5 PM every day

// cron.schedule("0 17 * * *", function () {
//   admin.database().ref("otp").remove();
// });
// exports.scheduledOTP = fu
//   response.status(200).send("Scheduled OTPs enabled.");
// });


const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const cron = require("node-cron");

admin.initializeApp();

const serviceAccount = require("../firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://piatron-a9a6d-default-rtdb.firebaseio.com",
});

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "mohammedalhameen@gmail.com",
    pass: "Wilmar.jr7",
  },
});

/**
 * Generates a random OTP (One-Time Password) consisting of 6 digits.
 *
 * @return {string} A 6-digit OTP.
 */
function generateOTP() {
  const digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < 6; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}

cron.schedule("0 12 04 * *", () => {
  const otp = generateOTP();
  const mailOptions = {
    from: "mohammedalhameen@gmail.com",
    to: "lanre.mohammed23@gmail.com",
    subject: "Your OTP for Today",
    text: `Your OTP for today is: ${otp}`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("OTP email sent: " + info.response);
      admin.database().ref("otp").set({value: otp});
    }
  });
});

cron.schedule("0 17 * * *", () => {
  admin.database().ref("otp").remove();
});

exports.scheduledOTP = functions.https.onRequest((_request, response) => {
  response.status(200).send("Scheduled OTPs enabled.");
});
