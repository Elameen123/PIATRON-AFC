// // Import required modules
// const express = require('express');
// const serverless = require('serverless-http');
// const sendGridEmail = require('@sendgrid/mail');
// const { update, ref } = require('firebase/database');
// const { db } = require('../Javascript/index.js');
// const cron = require('node-cron');

// // const cron = require('node-cron');

// const { scheduleEmailSending } = require('./sendEmail.js');

// require('dotenv').config();

// // Create an Express application
// const app = express();

// // Set up SendGrid API key
// sendGridEmail.setApiKey(process.env.SENDGRID_API_KEY);

// // Function to generate a random 6-digit OTP securely
// const generateOTP = () => {
//   let otp = '';
//   const characters = '0123456789';
//   for (let i = 0; i < 6; i++) {
//     const randomIndex = Math.floor(Math.random() * characters.length);
//     otp += characters[randomIndex];
//   }
//   return otp;
// };

// // // Function to send an email
// // const sendEmail = (recipientEmail, callback) => {
// //   const otp = generateOTP();

// //   const message = {
// //     to: recipientEmail,
// //     from: 'mohammedalhameen@gmail.com',
// //     subject: 'PIATRON-AFC LOGIN CREDENTIALS',
// //     text: 'Test Message from SendGrid by PIATRON',
// //     html: `<strong>Your PIATRON-AFC Login OTP is ${otp}</strong>`,
// //   };

// //   sendGridEmail.send(message)
// //     .then(() => {
// //       callback(null, 'Email Successfully Sent');
// //     })
// //     .catch((error) => {
// //       callback(error);
// //     });
// // };

// // const sendEmail = (recipientEmail, callback) => {
// //   const otp = generateOTP();

// //   update(ref(db, 'UsersList/Cafeteria/'), { pin: otp })
// //     .then(() => {
// //       const message = {
// //         to: recipientEmail,
// //         from: 'mohammedalhameen@gmail.com',
// //         subject: 'PIATRON-AFC LOGIN CREDENTIALS',
// //         text: 'Test Message from SendGrid by PIATRON',
// //         html: `<strong>Your PIATRON-AFC Login OTP is ${otp}</strong>`,
// //       };

// //       sendGridEmail.send(message)
// //         .then(() => {
// //           console.log('Email Successfully Sent'); // Add this line
// //           callback(null, 'Email Successfully Sent');
// //         })
// //         .catch((error) => {
// //           console.error('Error sending email:', error); // Add this line
// //           callback(error);
// //         });
// //     })
// //     .catch((error) => {
// //       console.error('Error updating OTP:', error); // Add this line
// //       callback(error);
// //     });
// // };


// // // Export the sendEmail function
// // module.exports = { sendEmail };

// // // Endpoint to send an email
// // app.get('/send-email', (req, res) => {
// //   const email = 'lanre.mohammed23@gmail.com'; // Replace with the recipient's email

// //   sendEmail(email, (error, result) => {
// //     if (error) {
// //       res.status(500).send('Error sending email: ' + error.message);
// //     } else {
// //       res.send(result);
// //     }
// //   });
// // });

// // // // Function to schedule email sending
// // // const scheduleEmailSending = () => {
// // //   const now = new Date();
// // //   const hours = now.getHours();
// // //   const minutes = now.getMinutes();
// // //   const seconds = now.getSeconds();

// // //   // Check if the current time is 10:00:01 AM
// // //   if (hours === 19 && minutes === 25 && seconds === 1) {
// // //     const email = 'lanre.mohammed23@gmail.com'; // Replace with the recipient's email
    
// // //     sendEmail(email, (error, result) => {
// // //       if (error) {
// // //         console.error('Error sending email:', error);
// // //       } else {
// // //         console.log('Email result:', result);
// // //       }
// // //     });
// // //   }
// // // };

// // // // Schedule the email sending function to run every second
// // // cron.schedule('* * * * *', scheduleEmailSending);


// // // Start the Express server
// // const port = process.env.PORT || 3000; // Use the specified PORT or default to 3000
// // app.listen(port, () => {
// //   console.log(`Server is running on port ${port}`);
// // });


// const sendEmail = (recipientEmails, callback) => {
//   const otp = generateOTP();
//   const sendToNextRecipient = (index) => {
//     if (index >= recipientEmails.length) {
//       // All emails sent successfully
//       console.log('Emails Successfully Sent');
//       return callback(null, 'Emails Successfully Sent');
//     }

//     const recipientEmail = recipientEmails[index];

//     update(ref(db, 'UsersList/Cafeteria/'), { pin: otp })
//       .then(() => {
//         const message = {
//           to: recipientEmail,
//           from: 'mohammedalhameen@gmail.com',
//           subject: 'PIATRON-AFC LOGIN CREDENTIALS',
//           text: 'Test Message from SendGrid by PIATRON',
//           html: `<strong>Your PIATRON-AFC Login OTP is ${otp}</strong>`,
//         };

//         sendGridEmail.send(message)
//           .then(() => {
//             console.log(`Email Successfully Sent to ${recipientEmail}`);
//             sendToNextRecipient(index + 1); // Send email to the next recipient
//           })
//           .catch((error) => {
//             console.error(`Error sending email to ${recipientEmail}:`, error);
//             callback(error);
//           });
//       })
//       .catch((error) => {
//         console.error('Error updating OTP:', error);
//         callback(error);
//       });
//   };

//   sendToNextRecipient(0); // Start sending emails to the first recipient
// };

// async function updateOtpEnabled(enabled) {
//   try {
//     await update(ref(db, 'UsersList/Cafeteria/'), {
//       otpEnabled: enabled,
//     });
//     console.log(`Cafeteria.otpEnabled set to ${enabled}`);
//   } catch (error) {
//     console.error('Error updating otpEnabled:', error.message);
//     throw error;
//   }
// }

// // Define constants for time values
// const EMAIL_HOUR = 14;
// const EMAIL_MINUTE = 55;
// const EMAIL_SECOND = 1;
// const DISABLE_OTP_HOUR = 17;

// // ...

// // Function to schedule email sending and OTP disabling
// const scheduleEmailSendingAndOTPDisabling = async () => {
//   const now = new Date();
//   const hours = now.getHours();
//   const minutes = now.getMinutes();
//   const seconds = now.getSeconds();

//   if (hours === EMAIL_HOUR && minutes === EMAIL_MINUTE && seconds === EMAIL_SECOND) {
//     try {
//       // Set otpEnabled to true at 8:37:01 PM
//       await updateOtpEnabled(true);
//       const recipientEmails = ['lanre.mohammed23@gmail.com', 'al-hameen.mohammed@pau.edu.ng'];
//       sendEmail(recipientEmails, (error, result) => {
//         if (error) {
//           console.error('Error sending email:', error);
//         } else {
//           console.log('Email result:', result);
//         }
//       });
//       console.log('Emails sent at', now);
//     } catch (error) {
//       console.error('Error scheduling email:', error.message);
//     }
//   } else if (hours === DISABLE_OTP_HOUR) {
//     try {
//       // Set otpEnabled to false at 7:00:00 PM
//       await updateOtpEnabled(false);
//       console.log('OTP Disabled at', now);
//     } catch (error) {
//       console.error('Error scheduling otpDisabled:', error.message);
//     }
//   }
//   // else {
//   //   console.log('Its not yet Time to send the email');
//   // }
// };

// // Schedule the combined function to run every second
// function scheduleEmailSending () {
//   cron.schedule('* * * * * *', scheduleEmailSendingAndOTPDisabling);
// }

// // scheduleEmailSending();


// // Export the sendEmail function
// // module.exports = { sendEmail };

// // // Endpoint to send an email to multiple recipients
// // app.get('/send-email', (req, res) => {
// //   const recipientEmails = ['lanre.mohammed23@gmail.com', 'al-hameen.mohammed@pau.edu.ng']; // Replace with recipient email addresses

// //   sendEmail(recipientEmails, (error, result) => {
// //     if (error) {
// //       res.status(500).send('Error sending email: ' + error.message);
// //     } else {
// //       res.send(result);
// //     }
// //   });
// // });

// const router  = express.Router();

// router.get('/', (req, res) => {
//   res.json({
//     'hello': 'h1',
//   }
//   );
// });

// // router.get('/send-email', (req, res) => {

// //   // cron.schedule('10 * * * * *', scheduleEmailSendingAndOTPDisabling);

// //   // const recipientEmails = ['lanre.mohammed23@gmail.com']; // Replace with recipient email addresses

// //   // sendEmail(recipientEmails, (error, result) => {
// //   //   if (error) {
// //   //     res.status(500).send('Error sending email: ' + error.message);
// //   //   } else {
// //   //     res.send(result);
// //   //   }
// //   // });

// //   scheduleEmailSending;
// // });

// router.get('/send-email', (req, res) => {
//   scheduleEmailSending(); // Call the function to trigger the schedule
//   res.json({ message: 'Email scheduling started' });
// });


// app.use('/.netlify/functions/server', router)

// module.exports.handler = serverless(app);

// Import required modules
const express = require('express');
const serverless = require('serverless-http');
const sendGridEmail = require('@sendgrid/mail');
const { update, ref } = require('firebase/database');
const { db } = require('../Javascript/index.js');
const cron = require('node-cron');

// Set up SendGrid API key
sendGridEmail.setApiKey(process.env.SENDGRID_API_KEY);

// Function to generate a random 6-digit OTP securely
const generateOTP = () => {
  let otp = '';
  const characters = '0123456789';
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    otp += characters[randomIndex];
  }
  return otp;
};

// Function to send an email to multiple recipients
const sendEmail = (recipientEmails, callback) => {
  const otp = generateOTP();
  const sendToNextRecipient = (index) => {
    if (index >= recipientEmails.length) {
      // All emails sent successfully
      console.log('Emails Successfully Sent');
      return callback(null, 'Emails Successfully Sent');
    }

    const recipientEmail = recipientEmails[index];

    update(ref(db, 'UsersList/Cafeteria/'), { pin: otp })
      .then(() => {
        const message = {
          to: recipientEmail,
          from: 'mohammedalhameen@gmail.com',
          subject: 'PIATRON-AFC LOGIN CREDENTIALS',
          text: 'Test Message from SendGrid by PIATRON',
          html: `<strong>Your PIATRON-AFC Login OTP is ${otp}</strong>`,
        };

        sendGridEmail.send(message)
          .then(() => {
            console.log(`Email Successfully Sent to ${recipientEmail}`);
            sendToNextRecipient(index + 1); // Send email to the next recipient
          })
          .catch((error) => {
            console.error(`Error sending email to ${recipientEmail}:`, error);
            callback(error);
          });
      })
      .catch((error) => {
        console.error('Error updating OTP:', error);
        callback(error);
      });
  };

  sendToNextRecipient(0); // Start sending emails to the first recipient
};

// Function to schedule email sending and OTP disabling
const scheduleEmailSendingAndOTPDisabling = async () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  if (hours === 14 && minutes === 55 && seconds === 1) {
    try {
      // Set otpEnabled to true at 2:55:01 PM
      await updateOtpEnabled(true);
      const recipientEmails = ['lanre.mohammed23@gmail.com', 'al-hameen.mohammed@pau.edu.ng'];
      sendEmail(recipientEmails, (error, result) => {
        if (error) {
          console.error('Error sending email:', error);
        } else {
          console.log('Email result:', result);
        }
      });
      console.log('Emails sent at', now);
    } catch (error) {
      console.error('Error scheduling email:', error.message);
    }
  } else if (hours === 17) {
    try {
      // Set otpEnabled to false at 5:00:00 PM
      await updateOtpEnabled(false);
      console.log('OTP Disabled at', now);
    } catch (error) {
      console.error('Error scheduling otpDisabled:', error.message);
    }
  }
};

// Schedule the combined function to run every second
cron.schedule('* * * * * *', scheduleEmailSendingAndOTPDisabling);

// Create an Express application
const app = express();
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ 'hello': 'h1' });
});

router.get('/send-email', (req, res) => {
  const recipientEmails = ['lanre.mohammed23@gmail.com', 'al-hameen.mohammed@pau.edu.ng'];
  
  sendEmail(recipientEmails, (error, result) => {
    if (error) {
      res.status(500).send('Error sending email: ' + error.message);
    } else {
      res.send(result);
    }
  });
});

app.use('/.netlify/functions/server', router);

module.exports.handler = serverless(app);
