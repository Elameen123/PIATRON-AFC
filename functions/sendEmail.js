const { sendEmail } = require('./server.js'); // Replace with the correct path to your server-side file
const cron = require('node-cron');
const { update, ref } = require('firebase/database');
const { db } = require('../../Javascript/index.js');

async function updateOtpEnabled(enabled) {
  try {
    await update(ref(db, 'UsersList/Cafeteria/'), {
      otpEnabled: enabled,
    });
    console.log(`Cafeteria.otpEnabled set to ${enabled}`);
  } catch (error) {
    console.error('Error updating otpEnabled:', error.message);
    throw error;
  }
}

// Define constants for time values
const EMAIL_HOUR = 13;
const EMAIL_MINUTE = 35;
const EMAIL_SECOND = 1;
const DISABLE_OTP_HOUR = 17;

// ...

// Function to schedule email sending and OTP disabling
const scheduleEmailSendingAndOTPDisabling = async () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  if (hours === EMAIL_HOUR && minutes === EMAIL_MINUTE && seconds === EMAIL_SECOND) {
    try {
      // Set otpEnabled to true at 8:37:01 PM
      await updateOtpEnabled(true);
      const recipientEmails = ['lanre.mohammed23@gmail.com', 'mohammedalhameen@gmail.com'];
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
  } else if (hours === DISABLE_OTP_HOUR) {
    try {
      // Set otpEnabled to false at 7:00:00 PM
      await updateOtpEnabled(false);
      console.log('OTP Disabled at', now);
    } catch (error) {
      console.error('Error scheduling otpDisabled:', error.message);
    }
  }
  else {
    console.log('Its not yet Time to send the email');
  }
};

// Schedule the combined function to run every second
function scheduleEmailSending () {
  cron.schedule('* * * * * *', scheduleEmailSendingAndOTPDisabling);
}




// // Export the function to be used as a Netlify function
// module.exports = scheduleEmailSendingAndOTPDisabling;

// Export the function to be used as a Netlify function
module.exports = scheduleEmailSending;

