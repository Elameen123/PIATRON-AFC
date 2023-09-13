"use strict";

var _index = require("../Javascript/index.js");

var _database = require("firebase/database");

var dateInput = document.getElementById('date-input');
var searchButton = document.getElementById('search-button');
var results = document.getElementById('results');
searchButton.addEventListener('click', function () {
  var date = dateInput.value; // Get a reference to the Firebase Realtime Database
  // const database = firebase.database();
  // Filter through the data and search if the data with the date exists

  var dataRef = (0, _database.ref)(_index.db, 'PAU-sales-report/' + date);
  (0, _database.onValue)(dataRef, function (snapshot) {
    if (snapshot.exists()) {
      // Get all the data under that date
      var data = snapshot.val(); // Send the data to a function that prepares it for printing

      var html = prepareDataForPrinting(data); // Print out the HTML details of the function in PDF format and download it on the user's computer

      printToPDF(html);
    } else {
      // No data found for the given date
      results.innerHTML = 'No data found for the given date.';
    }
  });
});

function prepareDataForPrinting(data) {
  // Prepare the data for printing in HTML format
  var html = "\n    <h1>Data for ".concat(data.date, "</h1>\n    <ul>");

  for (var key in data) {
    if (key !== 'date') {
      html += "<li>".concat(key, ": ").concat(data[key], "</li>");
    }
  }

  html += "</ul>";
  return html;
}

function printToPDF(html) {
  // Print the HTML details of the function in PDF format and download it on the user's computer
  var pdf = new jsPDF();
  html2canvas(html).then(function (canvas) {
    // Convert the canvas to a data URL
    var imgData = canvas.toDataURL('image/png'); // Add the image to the PDF

    pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);
    pdf.save('data.pdf');
  });
}