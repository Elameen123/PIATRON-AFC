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
// script.js
var progressBar = document.getElementById('progress-bar');

function updateProgressBar(value) {
  // Define your color ranges and corresponding colors
  var colorRanges = [{
    min: 0,
    max: 25,
    color: 'red'
  }, {
    min: 25,
    max: 50,
    color: 'orange'
  }, {
    min: 50,
    max: 75,
    color: 'limegreen'
  }, {
    min: 75,
    max: 100,
    color: 'green'
  }]; // Find the matching color for the value

  var barColor = 'blue'; // Default color

  for (var _i = 0, _colorRanges = colorRanges; _i < _colorRanges.length; _i++) {
    var range = _colorRanges[_i];

    if (value >= range.min && value <= range.max) {
      barColor = range.color;
      break;
    }
  } // Update the progress bar's width and color


  progressBar.style.width = value + '%';
  progressBar.style.backgroundColor = barColor;
} // Example usage:


var updateButton = document.getElementById('update-button');
updateButton.addEventListener('click', function () {
  var newValue = Math.random() * 100; // Replace this with your actual value

  updateProgressBar(90);
});