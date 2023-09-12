import { db } from "./index.js";

import {  getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

let otpCode  = 0;

const generateOTP  = () => {
  let otp = '';

 for (let i = 0; i < 6; i++) {
  otp += Math.floor(Math.random() * 10);
 }

 otpCode = Number(otp);
  console.log(otp);

  return otp;
}

generateOTP();

console.log(otpCode);

// const createForm = () => {
//   const sendForm = document.createElement('form');
//   sendForm.setAttribute('action', "https://formsubmit.co/el/letamo");
//   sendForm.setAttribute('method', "POST");

//   document.createElement('input');


// }