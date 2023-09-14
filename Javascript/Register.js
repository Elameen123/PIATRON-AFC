import { child, ref, set, get} from "firebase/database";
import { db } from "./index.js";

import {  getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// ... Import statements ...

const auth = getAuth();

// ------------REFERENCES--------------
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname'); // Fixed the duplicate ID
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phoneNumber');
const school = document.getElementById('school');
const department = document.getElementById('department');
const occupation = document.getElementById('occupation');
const title = document.getElementById('title');
const userPin = document.getElementById('userPin');
const confirmPin = document.getElementById('confirmPin');

// -------- Validation ------------ 
function formValidation() {
  let nameregex = /^[a-zA-Z]+$/;
  let emailregex = /^[a-zA-Z0-9._-]+@pau\.edu\.ng$/;
  let pinregex = /^[0-9]{4}$/;

  if (!nameregex.test(firstname.value) || !nameregex.test(lastname.value)){
    alert('Names should only contain alphabets');
    return false;
  }

  if (!emailregex.test(email.value)){ // Fixed email validation
    alert('Enter a valid email address ending with @pau.edu.ng');
    return false;
  }

  if (!pinregex.test(userPin.value) || !pinregex.test(confirmPin.value)){ // Fixed pin validation
    alert('Your pin must be four numbers');
    return false;
  }

  if (userPin.value !== confirmPin.value) {
    alert('Please re-confirm your pin');
    return false;
  }

  return true;
}

// ------------- Register USER to FIREBASE ----------
function RegisterUser() {
  if (!formValidation()){
    return;
  }

  const usersRef = ref(db, 'UsersList/' + firstname.value); // Use a constant for the reference

  get(usersRef).then((snapshot) => {
    if (snapshot.exists()) {
      alert('Account already exists');
    } else {
      set(usersRef, {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        pin: userPin.value,
        school: school.value,
        phoneNumber: phoneNumber.value,
        department: department.value,
        occupation: occupation.value,
        title: title.value
      }).then(() => {
        console.log('Successful');
        alert('User added successfully');
        window.location.href = '/index.html';

      })
      .catch((error) => {
        alert('Error: ' + error.message);
      });
    }
  });
}

// Assign The EVENT LISTENER TO THE BUTTON 
const submitRegister = document.getElementById('submitRegister');

submitRegister.addEventListener('click', function (e) {
  e.preventDefault();
  RegisterUser();
  // window.location.href = '/index.html';
});
