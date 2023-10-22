// const { sendEmail } = require('./server.js'); // Replace with the correct path to your server-side file
// const cron = require('node-cron');
// const { update, ref } = require('firebase/database');
// const { db } = require('../Javascript/index.js');

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
// const EMAIL_MINUTE = 10;
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
//   else {
//     console.log('Its not yet Time to send the email');
//   }
// };

// // Schedule the combined function to run every second
// function scheduleEmailSending () {
//   cron.schedule('* * * * * *', scheduleEmailSendingAndOTPDisabling);
// }

// scheduleEmailSending();




// // // Export the function to be used as a Netlify function
// module.exports = scheduleEmailSending;

// // Export the function to be used as a Netlify function
// // module.exports = scheduleEmailSending;


const nodemailer = require('nodemailer');

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    service: 'Gmail', // Use the email service provider (e.g., Gmail, Outlook)
    auth: {
        user: 'mohammedalhameen@gmail.com', // Your email address
        pass: 'Wilmar.jr7' // Your email password or an application-specific password
    }
});

// Email data
const mailOptions = {
    from: 'mohammedalhameen@gmail.com', // Sender's email address
    to: 'lanre.mohammed23@gmail.com', // Recipient's email address
    subject: 'TEST PIATRON-AFC MAIL',
    text: 'From PIATRON Web App' // The text content of the email
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});

