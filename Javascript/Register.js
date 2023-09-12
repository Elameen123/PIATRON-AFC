import { child, ref, set, get} from "firebase/database";
import { db } from "./index.js";

import {  getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

// ------------REFERENCES--------------

const firstname = document.getElementById('firstname');
const lastname = document.getElementById('firstname');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phoneNumber');
// const school = document.getElementById('school');
const department = document.getElementById('department');
const occupation = document.getElementById('occupation');
const title = document.getElementById('title');
const userPin = document.getElementById('userPin');
const confirmPin = document.getElementById('confirmPin');


// -------- Validation ------------ 

function formValidation() {
  let nameregex = /^[a-zA-Z]+$/;
  let emailregex = /^[a-z.]+[a-z]+@(pau)\.edu\.ng$/;

  let pingregex = /^[0-9]{4}$/;

  if (!nameregex.test(firstname.value) || !nameregex.test(lastname.value)){
    alert('The name should only contain alphabets');
    return false;
    
  }

  if (emailregex.test(email.value)){
    alert('enter a valid email address');
    return false;
  }

  if (pinregex.test(userPin.value) || pinregex.test(confirmPin.value)){
    alert('Your pin must be four numbers');
    return false;
  }

  if(userPin.value !== confirmPin.value) {
    alert('Please Re-confirm your pin')
  }

  return true;
}

// ------------- Register USER to FIREBASE ----------

function RegisterUser() {
  if(!formValidation()){
    return;
  };
  const dbref = ref(db);

  get(child(dbref, 'UsersList/'+ firstname.value + '/' )).then((snapshot) => {
    if(snapshot.exists()) {
      alert('Account already exists');
    }
    else {
      set(ref(db, "UsersList/"+ firstname.value + '/'), {
        fullname: firstname.value + " " + lastname.value,
        email: email.value,
        pin: userPin.value,
        school: school.value,
        phoneNumber: phoneNumber.value,
        department: department.value,
        occupation: occupation.value,
        title: title.value

      }).then(() => {
        console.log('Successful');
        alert(' User Added successfully');
      })
      .catch((error) => {
        alert('Error: ' + error.message)
      })
    }
  })
}

// Assign The EVENT LISTENER TO THE BUTTON 
const submitRegister = document.getElementById('submitRegister');

submitRegister.addEventListener('click', function (e) {
 RegisterUser()
})

