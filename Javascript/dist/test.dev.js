"use strict";

// You can use JavaScript to dynamically update the availability and appearance of items.
// Example:
var isItemAvailable = false; // Set to true if the item is available, false if it's out of stock

var items = document.querySelectorAll('.item');
items.forEach(function (item) {
  if (!isItemAvailable) {
    item.classList.add('out-of-stock');
    var buyButton = item.querySelector('button');
    buyButton.disabled = true;
  }
});