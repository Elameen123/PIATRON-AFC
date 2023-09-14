"use strict";

var _database = require("firebase/database");

var _index = require("./index.js");

var _auth = require("firebase/auth");

// ... Import statements ...
var auth = (0, _auth.getAuth)(); // ------------REFERENCES--------------

var firstname = document.getElementById('firstname');
var lastname = document.getElementById('lastname'); // Fixed the duplicate ID

var email = document.getElementById('email');
var phoneNumber = document.getElementById('phoneNumber');
var school = document.getElementById('school');
var department = document.getElementById('department');
var occupation = document.getElementById('occupation');
var title = document.getElementById('title');
var userPin = document.getElementById('userPin');
var confirmPin = document.getElementById('confirmPin'); // -------- Validation ------------ 

function formValidation() {
  var nameregex = /^[a-zA-Z]+$/;
  var emailregex = /^[a-zA-Z0-9._-]+@pau\.edu\.ng$/;
  var pinregex = /^[0-9]{4}$/;

  if (!nameregex.test(firstname.value) || !nameregex.test(lastname.value)) {
    alert('Names should only contain alphabets');
    return false;
  }

  if (!emailregex.test(email.value)) {
    // Fixed email validation
    alert('Enter a valid email address ending with @pau.edu.ng');
    return false;
  }

  if (!pinregex.test(userPin.value) || !pinregex.test(confirmPin.value)) {
    // Fixed pin validation
    alert('Your pin must be four numbers');
    return false;
  }

  if (userPin.value !== confirmPin.value) {
    alert('Please re-confirm your pin');
    return false;
  }

  return true;
} // ------------- Register USER to FIREBASE ----------


function RegisterUser() {
  if (!formValidation()) {
    return;
  }

  var usersRef = (0, _database.ref)(_index.db, 'UsersList/' + firstname.value); // Use a constant for the reference

  (0, _database.get)(usersRef).then(function (snapshot) {
    if (snapshot.exists()) {
      alert('Account already exists');
    } else {
      (0, _database.set)(usersRef, {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        pin: userPin.value,
        school: school.value,
        phoneNumber: phoneNumber.value,
        department: department.value,
        occupation: occupation.value,
        title: title.value
      }).then(function () {
        console.log('Successful');
        alert('User added successfully');
        window.location.href = '/index.html';
      })["catch"](function (error) {
        alert('Error: ' + error.message);
      });
    }
  });
} // Assign The EVENT LISTENER TO THE BUTTON 


var submitRegister = document.getElementById('submitRegister');
submitRegister.addEventListener('click', function (e) {
  e.preventDefault();
  RegisterUser(); // window.location.href = '/index.html';
});