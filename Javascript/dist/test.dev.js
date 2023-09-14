"use strict";

// import { db } from '../Javascript/index.js';
// import { ref, get, child, update, onValue, set } from 'firebase/database';
// const dateInput = document.getElementById('date-input');
// const searchButton = document.getElementById('search-button');
// const results = document.getElementById('results');
// searchButton.addEventListener('click', () => {
//   const date = dateInput.value;
//   // Get a reference to the Firebase Realtime Database
//   // const database = firebase.database();
//   // Filter through the data and search if the data with the date exists
//   const dataRef = ref(db, 'PAU-sales-report/'+ date);
//   onValue(dataRef, (snapshot) => {
//     if (snapshot.exists()) {
//       // Get all the data under that date
//       const data = snapshot.val();
//       // Send the data to a function that prepares it for printing
//       const html = prepareDataForPrinting(data);
//       // Print out the HTML details of the function in PDF format and download it on the user's computer
//       printToPDF(html);
//     } else {
//       // No data found for the given date
//       results.innerHTML = 'No data found for the given date.';
//     }
//   });
// });
// function prepareDataForPrinting(data) {
//   // Prepare the data for printing in HTML format
//   let html = `
//     <h1>Data for ${data.date}</h1>
//     <ul>`;
//   for (const key in data) {
//     if (key !== 'date') {
//       html += `<li>${key}: ${data[key]}</li>`;
//     }
//   }
//   html += `</ul>`;
//   return html;
// }
// function printToPDF(html) {
//   // Print the HTML details of the function in PDF format and download it on the user's computer
//   const pdf = new jsPDF();
//   html2canvas(html).then(canvas => {
//     // Convert the canvas to a data URL
//     const imgData = canvas.toDataURL('image/png');
//     // Add the image to the PDF
//     pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);
//     pdf.save('data.pdf');
// });
// }
document.addEventListener("DOMContentLoaded", function () {
  var alert = document.getElementById("alert");
  var close = document.getElementById("close"); // Function to show the alert

  function showAlert() {
    alert.style.display = "block";
    setTimeout(hideAlert, 1000); // Hide after 10 seconds
  } // Function to hide the alert


  function hideAlert() {
    alert.style.display = "none";
  } // Show the alert when the page loads


  showAlert(); // Close the alert when the close button is clicked

  close.addEventListener("click", hideAlert);
});