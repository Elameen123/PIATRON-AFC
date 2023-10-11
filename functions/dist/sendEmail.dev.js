"use strict";

var _require = require('./server.js'),
    sendEmail = _require.sendEmail; // Replace with the correct path to your server-side file


var cron = require('node-cron');

var _require2 = require('firebase/database'),
    update = _require2.update,
    ref = _require2.ref;

var _require3 = require('../Javascript/index.js'),
    db = _require3.db;

function updateOtpEnabled(enabled) {
  return regeneratorRuntime.async(function updateOtpEnabled$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(update(ref(db, 'UsersList/Cafeteria/'), {
            otpEnabled: enabled
          }));

        case 3:
          console.log("Cafeteria.otpEnabled set to ".concat(enabled));
          _context.next = 10;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.error('Error updating otpEnabled:', _context.t0.message);
          throw _context.t0;

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
} // Define constants for time values


var EMAIL_HOUR = 14;
var EMAIL_MINUTE = 5;
var EMAIL_SECOND = 1;
var DISABLE_OTP_HOUR = 17; // ...
// Function to schedule email sending and OTP disabling

var scheduleEmailSendingAndOTPDisabling = function scheduleEmailSendingAndOTPDisabling() {
  var now, hours, minutes, seconds, recipientEmails;
  return regeneratorRuntime.async(function scheduleEmailSendingAndOTPDisabling$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          now = new Date();
          hours = now.getHours();
          minutes = now.getMinutes();
          seconds = now.getSeconds();

          if (!(hours === EMAIL_HOUR && minutes === EMAIL_MINUTE && seconds === EMAIL_SECOND)) {
            _context2.next = 18;
            break;
          }

          _context2.prev = 5;
          _context2.next = 8;
          return regeneratorRuntime.awrap(updateOtpEnabled(true));

        case 8:
          recipientEmails = ['lanre.mohammed23@gmail.com', 'mohammedalhameen@gmail.com'];
          sendEmail(recipientEmails, function (error, result) {
            if (error) {
              console.error('Error sending email:', error);
            } else {
              console.log('Email result:', result);
            }
          });
          console.log('Emails sent at', now);
          _context2.next = 16;
          break;

        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](5);
          console.error('Error scheduling email:', _context2.t0.message);

        case 16:
          _context2.next = 31;
          break;

        case 18:
          if (!(hours === DISABLE_OTP_HOUR)) {
            _context2.next = 30;
            break;
          }

          _context2.prev = 19;
          _context2.next = 22;
          return regeneratorRuntime.awrap(updateOtpEnabled(false));

        case 22:
          console.log('OTP Disabled at', now);
          _context2.next = 28;
          break;

        case 25:
          _context2.prev = 25;
          _context2.t1 = _context2["catch"](19);
          console.error('Error scheduling otpDisabled:', _context2.t1.message);

        case 28:
          _context2.next = 31;
          break;

        case 30:
          console.log('Its not yet Time to send the email');

        case 31:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[5, 13], [19, 25]]);
}; // Schedule the combined function to run every second


function scheduleEmailSending() {
  cron.schedule('* * * * * *', scheduleEmailSendingAndOTPDisabling);
} // // Export the function to be used as a Netlify function
// module.exports = scheduleEmailSendingAndOTPDisabling;
// Export the function to be used as a Netlify function


module.exports = scheduleEmailSending;