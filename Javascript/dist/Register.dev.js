"use strict";

var _database = require("firebase/database");

var _index = require("./index.js");

var _auth = require("firebase/auth");

var auth = (0, _auth.getAuth)(); // ------------REFERENCES--------------

var firstname = document.getElementById('firstname');
var lastname = document.getElementById('firstname');
var email = document.getElementById('email');
var phoneNumber = document.getElementById('phoneNumber'); // const school = document.getElementById('school');

var department = document.getElementById('department');
var occupation = document.getElementById('occupation');
var title = document.getElementById('title');
var userPin = document.getElementById('userPin');
var confirmPin = document.getElementById('confirmPin'); // -------- Validation ------------ 

function formValidation() {
  var nameregex = /^[a-zA-Z]+$/;
  var emailregex = /^[a-z.]+[a-z]+@(pau)\.edu\.ng$/;
  var pingregex = /^[0-9]{4}$/;

  if (!nameregex.test(firstname.value) || !nameregex.test(lastname.value)) {
    alert('The name should only contain alphabets');
    return false;
  }

  if (emailregex.test(email.value)) {
    alert('enter a valid email address');
    return false;
  }

  if (pinregex.test(userPin.value) || pinregex.test(confirmPin.value)) {
    alert('Your pin must be four numbers');
    return false;
  }

  if (userPin.value !== confirmPin.value) {
    alert('Please Re-confirm your pin');
  }

  return true;
} // ------------- Register USER to FIREBASE ----------


function RegisterUser() {
  if (!formValidation()) {
    return;
  }

  ;
  var dbref = (0, _database.ref)(_index.db);
  (0, _database.get)((0, _database.child)(dbref, 'UsersList/' + firstname.value + '/')).then(function (snapshot) {
    if (snapshot.exists()) {
      alert('Account already exists');
    } else {
      (0, _database.set)((0, _database.ref)(_index.db, "UsersList/" + firstname.value + '/'), {
        fullname: firstname.value + " " + lastname.value,
        email: email.value,
        pin: userPin.value,
        school: school.value,
        phoneNumber: phoneNumber.value,
        department: department.value,
        occupation: occupation.value,
        title: title.value
      }).then(function () {
        console.log('Successful');
        alert(' User Added successfully');
      })["catch"](function (error) {
        alert('Error: ' + error.message);
      });
    }
  });
} // Assign The EVENT LISTENER TO THE BUTTON 


var submitRegister = document.getElementById('submitRegister');
submitRegister.addEventListener('click', function (e) {
  RegisterUser();
});