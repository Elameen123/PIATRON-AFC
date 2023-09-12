"use strict";

var _index = require("./index.js");

var _auth = require("firebase/auth");

var auth = (0, _auth.getAuth)();
var otpCode = 0;

var generateOTP = function generateOTP() {
  var otp = '';

  for (var i = 0; i < 6; i++) {
    otp += Math.floor(Math.random() * 10);
  }

  otpCode = Number(otp);
  console.log(otp);
  return otp;
};

generateOTP();
console.log(otpCode); // const createForm = () => {
//   const sendForm = document.createElement('form');
//   sendForm.setAttribute('action', "https://formsubmit.co/el/letamo");
//   sendForm.setAttribute('method', "POST");
//   document.createElement('input');
// }