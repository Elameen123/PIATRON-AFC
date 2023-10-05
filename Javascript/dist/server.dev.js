"use strict";

// Import required modules
var express = require('express');

var sendGridEmail = require('@sendgrid/mail');

var _require = require('firebase/database'),
    update = _require.update,
    ref = _require.ref;

var _require2 = require('./index.js'),
    db = _require2.db; // const cron = require('node-cron');


require('dotenv').config(); // Create an Express application


var app = express(); // Set up SendGrid API key

sendGridEmail.setApiKey(process.env.SENDGRID_API_KEY); // Function to generate a random 6-digit OTP securely

var generateOTP = function generateOTP() {
  var otp = '';
  var characters = '0123456789';

  for (var i = 0; i < 6; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    otp += characters[randomIndex];
  }

  return otp;
}; // // Function to send an email
// const sendEmail = (recipientEmail, callback) => {
//   const otp = generateOTP();
//   const message = {
//     to: recipientEmail,
//     from: 'mohammedalhameen@gmail.com',
//     subject: 'PIATRON-AFC LOGIN CREDENTIALS',
//     text: 'Test Message from SendGrid by PIATRON',
//     html: `<strong>Your PIATRON-AFC Login OTP is ${otp}</strong>`,
//   };
//   sendGridEmail.send(message)
//     .then(() => {
//       callback(null, 'Email Successfully Sent');
//     })
//     .catch((error) => {
//       callback(error);
//     });
// };
// const sendEmail = (recipientEmail, callback) => {
//   const otp = generateOTP();
//   update(ref(db, 'UsersList/Cafeteria/'), { pin: otp })
//     .then(() => {
//       const message = {
//         to: recipientEmail,
//         from: 'mohammedalhameen@gmail.com',
//         subject: 'PIATRON-AFC LOGIN CREDENTIALS',
//         text: 'Test Message from SendGrid by PIATRON',
//         html: `<strong>Your PIATRON-AFC Login OTP is ${otp}</strong>`,
//       };
//       sendGridEmail.send(message)
//         .then(() => {
//           console.log('Email Successfully Sent'); // Add this line
//           callback(null, 'Email Successfully Sent');
//         })
//         .catch((error) => {
//           console.error('Error sending email:', error); // Add this line
//           callback(error);
//         });
//     })
//     .catch((error) => {
//       console.error('Error updating OTP:', error); // Add this line
//       callback(error);
//     });
// };
// // Export the sendEmail function
// module.exports = { sendEmail };
// // Endpoint to send an email
// app.get('/send-email', (req, res) => {
//   const email = 'lanre.mohammed23@gmail.com'; // Replace with the recipient's email
//   sendEmail(email, (error, result) => {
//     if (error) {
//       res.status(500).send('Error sending email: ' + error.message);
//     } else {
//       res.send(result);
//     }
//   });
// });
// // // Function to schedule email sending
// // const scheduleEmailSending = () => {
// //   const now = new Date();
// //   const hours = now.getHours();
// //   const minutes = now.getMinutes();
// //   const seconds = now.getSeconds();
// //   // Check if the current time is 10:00:01 AM
// //   if (hours === 19 && minutes === 25 && seconds === 1) {
// //     const email = 'lanre.mohammed23@gmail.com'; // Replace with the recipient's email
// //     sendEmail(email, (error, result) => {
// //       if (error) {
// //         console.error('Error sending email:', error);
// //       } else {
// //         console.log('Email result:', result);
// //       }
// //     });
// //   }
// // };
// // // Schedule the email sending function to run every second
// // cron.schedule('* * * * *', scheduleEmailSending);
// // Start the Express server
// const port = process.env.PORT || 3000; // Use the specified PORT or default to 3000
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


var sendEmail = function sendEmail(recipientEmails, callback) {
  var otp = generateOTP();

  var sendToNextRecipient = function sendToNextRecipient(index) {
    if (index >= recipientEmails.length) {
      // All emails sent successfully
      console.log('Emails Successfully Sent');
      return callback(null, 'Emails Successfully Sent');
    }

    var recipientEmail = recipientEmails[index];
    update(ref(db, 'UsersList/Cafeteria/'), {
      pin: otp
    }).then(function () {
      var message = {
        to: recipientEmail,
        from: 'mohammedalhameen@gmail.com',
        subject: 'PIATRON-AFC LOGIN CREDENTIALS',
        text: 'Test Message from SendGrid by PIATRON',
        html: "<strong>Your PIATRON-AFC Login OTP is ".concat(otp, "</strong>")
      };
      sendGridEmail.send(message).then(function () {
        console.log("Email Successfully Sent to ".concat(recipientEmail));
        sendToNextRecipient(index + 1); // Send email to the next recipient
      })["catch"](function (error) {
        console.error("Error sending email to ".concat(recipientEmail, ":"), error);
        callback(error);
      });
    })["catch"](function (error) {
      console.error('Error updating OTP:', error);
      callback(error);
    });
  };

  sendToNextRecipient(0); // Start sending emails to the first recipient
}; // Export the sendEmail function


module.exports = {
  sendEmail: sendEmail
}; // Endpoint to send an email to multiple recipients

app.get('/send-email', function (req, res) {
  var recipientEmails = ['lanre.mohammed23@gmail.com', 'another@example.com']; // Replace with recipient email addresses

  sendEmail(recipientEmails, function (error, result) {
    if (error) {
      res.status(500).send('Error sending emails: ' + error.message);
    } else {
      res.send(result);
    }
  });
});