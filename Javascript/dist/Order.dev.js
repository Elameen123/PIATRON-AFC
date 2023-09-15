"use strict";

var _index = require("../Javascript/index.js");

var _database = require("firebase/database");

var listCart = [];
var Enter = document.querySelector('.Enter');
var cartItem = document.querySelector('#cartItem'); // const app = initializeApp(firebaseConfig);
// const db = getDatabase();

var cart = document.querySelector('.cart-icon'); // let initialFetchComplete = false;
// const dbref = ref(db, "PAU/Location/SST/" );

var Menu = []; // const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// if (urlParams.has('data')) {
//   const dataStr = urlParams.get('data');
//   const data = JSON.parse(dataStr);
//   console.log(data);
// }
// Get the URL query parameters

var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var data; // Check if the "data" parameter is present in the URL

if (urlParams.has('data')) {
  // Get the value of the "data" parameter and parse it as JSON
  var dataStr = urlParams.get('data');
  data = JSON.parse(dataStr);
} else {
  console.log("No data parameter found in the URL.");
} // Now, you can access the data properties


var location = data.location;
var clickedMenuItem = data.clickedMenuItem;
var dataLocation = data.dataLocation;
var locationHeader = document.querySelector('.bucket-list');
locationHeader.innerText = clickedMenuItem;

function getAllData() {
  var dbRef = (0, _database.ref)(_index.db);
  (0, _database.get)((0, _database.child)(dbRef, location)).then(function (snapshot) {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      snapshot.forEach(function (food) {
        Menu.push(food.val());
      }); // displayCart(Menu);
    } else {
      console.log("No data available");
    } // displayCart(Menu);

  })["catch"](function (error) {
    console.error(error);
  });
}

getAllData();
console.log(Menu);
console.log(Menu.price); // displayCart(Menu);
// const dbrefactive = ref(db,"PAU/Location/SST/" );
// onValue(dbrefactive, (snapshot) => {
//   var newMenu = [];
//   snapshot.forEach(newfood => {
//       newMenu.push(newfood.val());
//   });
//         // console.log(newMenu);
//         // reloadCart();
//   });
// onValue();

function displayCart(MenuItem) {
  var cartContainer = document.getElementById('cart-container');
  cartContainer.innerHTML = ' ';
  MenuItem.forEach(function (item) {
    var cartCard = document.createElement('div');
    cartCard.classList.add('cart-card');
    cartCard.innerHTML = "\n        <div hidden>".concat(item.id, "</div>\n        <img class='img1' src=\"").concat(item.image, "\" alt=\"food\" />\n        <div class=\"food-container\">\n          <h3>").concat(item.name, "</h3>\n          <p>&#8358;").concat(item.price, "</p>\n        </div>\n        <p style=\"color: red\">Quantity Available : ").concat(item.qty - item.sales, "</p>\n        <div class=\"clickButtons\">\n          <button type=\"button\" class=\"number1\" data-item=\"1\">1</button>\n          <button type=\"button\" class=\"number2\" data-item=\"2\">2</button>\n          <button type=\"button\" class=\"number3\" data-item=\"3\">3</button>\n          <button type=\"button\" class=\"number4\" data-item=\"4\">4</button>\n          <button type=\"button\" class=\"number5\" data-item=\"5\">5</button>\n        </div>\n     ");
    cartContainer.append(cartCard);
    var clickButtons = cartCard.querySelector('.clickButtons');
    var number1 = clickButtons.querySelector('.number1');
    var number2 = clickButtons.querySelector('.number2');
    var number3 = clickButtons.querySelector('.number3');
    var number4 = clickButtons.querySelector('.number4');
    var number5 = clickButtons.querySelector('.number5');
    number1.addEventListener('click', function () {
      var itemOne = parseInt(number1.getAttribute("data-item")); // console.log ('item is clicking');

      if (listCart[item.id] == null) {
        addToCart(item.id, MenuItem); // changeQuantity(item.id, itemOne);

        listCart[item.id].quantity = itemOne;
        reloadCart();
      } else {
        // listCart[item.id].quantity = listCart[item.id].quantity + itemName;
        // changeQuantity(item.id, itemName);
        listCart[item.id].quantity = itemOne;
        reloadCart();
      } // quantity.innerText = itemName;
      // reloadCart();
      // console.log(itemName);

    });
    number2.addEventListener('click', function () {
      var itemTwo = parseInt(number2.getAttribute("data-item"));
      console.log('item is clicking');

      if (listCart[item.id] == null) {
        addToCart(item.id, MenuItem);
        listCart[item.id].quantity = itemTwo;
        reloadCart();
      } else {
        listCart[item.id].quantity = itemTwo;
        reloadCart();
      } // quantity.innerText = itemName;
      // reloadCart();
      // console.log(itemName);

    });
    number3.addEventListener('click', function () {
      var itemThree = parseInt(number3.getAttribute("data-item"));
      console.log('item is clicking');

      if (listCart[item.id] == null) {
        addToCart(item.id, MenuItem);
        listCart[item.id].quantity = itemThree;
        reloadCart();
      } else {
        listCart[item.id].quantity = itemThree;
        reloadCart();
      } // quantity.innerText = itemName;
      // reloadCart();
      // console.log(itemName);

    });
    number4.addEventListener('click', function () {
      var itemFour = parseInt(number4.getAttribute("data-item"));
      console.log('item is clicking');

      if (listCart[item.id] == null) {
        addToCart(item.id, MenuItem);
        listCart[item.id].quantity = itemFour;
        reloadCart();
      } else {
        // quantity.innerText = itemFour;
        listCart[item.id].quantity = itemFour;
        reloadCart();
      } // reloadCart();
      // console.log(itemName);

    });
    number5.addEventListener('click', function () {
      var itemFive = parseInt(number5.getAttribute("data-item"));
      console.log('item is clicking');

      if (listCart[item.id] == null) {
        addToCart(item.id, MenuItem);
        listCart[item.id].quantity = itemFive;
        reloadCart(); // console.log(listCart[item.id].quantity);
      } else {
        listCart[item.id].quantity = itemFive;
        reloadCart(); // console.log(listCart[item.id].quantity);
      }
    }); //  cartCard.addEventListener('click', () => {
    //   if (listCart[item.id] == null) {
    //     addToCart(item.id);
    //   }
    //   else  {
    //     listCart[item.id].quantity = listCart[item.id].quantity + 1;
    //   }
    //   reloadCart();
    //  });
    //  cartCard.addEventListener('click', addToCart(item.id))
  });
} // function addToCart(id, Menu) {
//   console.log('Item ' + id + ' is added to cart')
//   const existingItem = listCart.find(item => item.id === id);
//   if (!existingItem) {
//     const newItem = { ...Menu[id], quantity: 1 };
//     listCart.push(newItem);
//   } else {
//     existingItem.quantity++;
//   }
//   reloadCart();
// }


function addToCart(id, Menu) {
  console.log('Item ' + id + ' is added to cart');

  if (listCart[id] == null) {
    Menu.forEach(function (item) {
      if (item.id == id) {
        listCart[id] = item;
        listCart[id].quantity = 1;
        console.log(item.name + ' is added to cart');
      }
    });
  }

  reloadCart();
  console.log(listCart);
}

var printList = document.createElement('div');
printList.setAttribute('id', 'printList'); // function reloadCart() {
//   const total = document.querySelector('#total');
//   const quantity = document.querySelector('#cart-count');
//   printList.innerHTML = ' ';
//   cartItem.innerHTML = " ";
//   let count = 0;
//   let totalPrice = 0.00;
//   for (let i = 0; i < listCart.length; i++) {
//     const item = listCart[i];
//     totalPrice += item.price * item.quantity;
//     count += item.quantity;
//     let cartList = document.createElement('div');
//     cartList.setAttribute('id', 'cartLists');
//     cartList.innerHTML = `
//       <h3>${item.name}</h3>
//       <div hidden>${item.id}</div>
//       <div class="count">
//         <button class='minus' type="button">-</button>
//         <p>${item.quantity}</p>
//         <button class='plus' type="button">+</button>
//       </div>
//     `;
//     cartItem.appendChild(cartList);
//     // Print List
//     const printCard = document.createElement('div');
//     printCard.setAttribute('class', 'printCard');
//     printCard.innerHTML = `
//       <h5>${item.name}</h5>
//       <p>${item.quantity}</p>
//       <p>${item.price}</p>
//     `;
//     printList.appendChild(printCard);
//     // Attach event listeners to the buttons
//     const minusButton = cartList.querySelector('.minus');
//     const plusButton = cartList.querySelector('.plus');
//     // Add a click event listener for the minus button
//     minusButton.addEventListener('click', () => {
//       // Call a function with the item ID and the action you want (e.g., decrement quantity)
//       changeQuantity(item.id, item.quantity - 1);
//     });
//     // Add a click event listener for the plus button
//     plusButton.addEventListener('click', () => {
//       // Call a function with the item ID and the action you want (e.g., increment quantity)
//       changeQuantity(item.id, item.quantity + 1);
//     });
//   }
//   total.innerText = totalPrice.toFixed(2);
//   quantity.innerText = count;
// }

function reloadCart() {
  var total = document.querySelector('#total');
  var quantity = document.querySelector('#cart-count');
  printList.innerHTML = ' ';
  cartItem.innerHTML = " ";
  var count = 0;
  var totalPrice = 0.00; // if (listCart.length = 0) {
  //   printList.innerHTML = ' ';
  //   cartItem.innerHTML = " ";
  //   count = 0;
  //   totalPrice = 0.00;
  // }

  for (var id in listCart) {
    if (listCart.hasOwnProperty(id)) {
      (function () {
        var item = listCart[id];
        totalPrice += item.price * item.quantity;
        count += item.quantity;
        var cartList = document.createElement('div');
        cartList.setAttribute('id', 'cartLists');
        cartList.innerHTML = "\n        <h3>".concat(item.name, "</h3>\n        <div hidden>").concat(item.id, "</div>\n\n        <div class=\"count\">\n          <button class='minus' type=\"button\">-</button>\n          <p>").concat(item.quantity, "</p>\n          <button class='plus' type=\"button\">+</button>\n        </div>\n      ");
        cartItem.appendChild(cartList); // Print List

        var printCard = document.createElement('div');
        printCard.setAttribute('class', 'printCard');
        printCard.innerHTML = "\n        <h5>".concat(item.name, "</h5>\n        <p>").concat(item.quantity, "</p>\n        <p>").concat(item.price, "</p>\n      ");
        printList.appendChild(printCard); // Attach event listeners to the buttons

        var minusButton = cartList.querySelector('.minus');
        var plusButton = cartList.querySelector('.plus'); // Add a click event listener for the minus button

        minusButton.addEventListener('click', function () {
          // Call a function with the item ID and the action you want (e.g., decrement quantity)
          changeQuantity(item.id, item.quantity - 1);
        }); // Add a click event listener for the plus button

        plusButton.addEventListener('click', function () {
          // Call a function with the item ID and the action you want (e.g., increment quantity)
          changeQuantity(item.id, item.quantity + 1);
        });
      })();
    }
  }

  total.innerText = totalPrice.toFixed(2);
  quantity.innerText = count;
}

var printSection = document.getElementById('printSection'); // function printReceipt() {
//   const orderReceipt = document.createElement('div');
//   orderReceipt.setAttribute('id', 'orderReceipt');
//   orderReceipt.innerHTML = `
//     <h2>PAU CAFETERIA </h2>
//     <h3>Order</h3>
//     <div class="printItem">
//       <h4>Item</h4>
//       <h4>Qty</h4>
//       <h4>Price</h4>
//     </div>
//     <hr/>
//     ${printList.innerHTML}
//     <hr>
//     <div class="printTotal">
//     <p>Total</p>
//     <b>&#8358;<span id="total">${total.innerHTML}</span></b>
//     </div>
//   `;
//   printSection.appendChild(orderReceipt);
//   const bodyElements = document.querySelectorAll("body > *");
//   bodyElements.forEach(element => {
//       if (element !== printSection) {
//           element.style.display = "none";
//       }
//   });
//   // Print the section
//   window.print();
//   // Restore the visibility of all elements
//   bodyElements.forEach(element => {
//       element.style.display = "";
//   });
//   // Remove the added orderReceipt element
//   printSection.removeChild(orderReceipt);
// }

function changeQuantity(id, quantity) {
  if (quantity === 0) {
    delete listCart[id];
  } else if (listCart[id]) {
    listCart[id].quantity = quantity;
  }

  reloadCart();
}

function updateAndDisplayData() {
  var dbrefactive = (0, _database.ref)(_index.db, location);
  (0, _database.onValue)(dbrefactive, function (snapshot) {
    var newMenu = [];

    if (snapshot.val()) {
      snapshot.forEach(function (item) {
        newMenu.push(item.val()); // console.log(item.val());
      });
      displayCart(newMenu); // console.log(newMenu);

      reloadCart();
    } // console.log(Menu); 

  });
}

var sideBar = document.querySelector('.cart-sidebar');
var cartCount = document.querySelector('#cart-count');
var container = document.querySelector('.cart-container'); // const hidden = document.querySelector('.hidden');

cart.addEventListener('click', function () {
  sideBar.style.display = 'flex';
  container.style.width = '73.5%';
});
cartCount.addEventListener('click', function () {
  sideBar.style.display = 'none';
  container.style.width = '97.75%';
  container.style.marginRight = '0px';
});

var uploadToDataBase = function uploadToDataBase() {
  listCart.forEach(function (list) {
    (0, _database.update)((0, _database.ref)(_index.db, "PAU/Location/" + dataLocation + "/" + list.name), {
      sales: list.sales + list.quantity
    }).then(function () {
      // reloadCart();
      // console.log(snapshot);
      console.log('Upload Successful'); // reloadCart();
      // window.location.reload();
    })["catch"](function (error) {
      alert('Unsuccessful , error: ' + error);
    });
  });
};

var updateSalesReport = function updateSalesReport() {
  var date = new Date();
  var currentDate = "".concat(date.getFullYear()).concat((date.getMonth() + 1).toString().padStart(2, '0')).concat(date.getDate().toString().padStart(2, '0'));
  var entryDate = "".concat(date.getFullYear(), "-").concat((date.getMonth() + 1).toString().padStart(2, '0'), "-").concat(date.getDate().toString().padStart(2, '0'));
  var timeStamp = "".concat(date.getHours().toString().padStart(2, '0'), ":").concat(date.getMinutes().toString().padStart(2, '0'), ":").concat(date.getSeconds().toString().padStart(2, '0'));
  listCart.forEach(function (item) {
    (0, _database.set)((0, _database.ref)(_index.db, "PAU-sales-report/" + currentDate + "/" + item.name + '/'), {
      name: item.name,
      timestamp: timeStamp,
      date: entryDate,
      price: item.price,
      quantity: item.quantity,
      location: dataLocation,
      qty: item.qty
    }).then(function () {
      console.log('Sales Report updated');
    })["catch"](function () {
      'Sales report upload unsuccessful , error: ' + error;
    });
  });
};

var orderAlert = function orderAlert() {
  var alert = document.getElementById("alert");
  var close = document.getElementById("close"); // Function to show the alert

  function showAlert() {
    alert.style.display = "block";
    setTimeout(hideAlert, 1500); // Hide after 10 seconds
  } // Function to hide the alert


  function hideAlert() {
    alert.style.display = "none";
  } // Show the alert when the page loads


  showAlert(); // Close the alert when the close button is clicked

  close.addEventListener("click", hideAlert);
}; // Initialize orderHistory from localStorage, or an empty array if it doesn't exist


var orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the modal and button
  var orderModal = document.querySelector("#orderModal");
  var orderBtn = document.querySelector("#cart-history"); // Function to open the modal

  function openModal() {
    orderModal.style.display = "block";
    console.log('Working on modal');
  } // Function to close the modal


  function closeModal() {
    orderModal.style.display = "none";
  } // Attach a click event listener to the button


  orderBtn.addEventListener("click", openModal); // Attach a click event listener to close the modal when clicking outside

  window.addEventListener("click", function (event) {
    if (event.target == orderModal) {
      closeModal();
    }
  }); // Rest of your code, including orderButton click handler and displayOrderHistory function
});

var handleOrderClick = function handleOrderClick() {
  var orderDate = new Date();
  var orderTimeStamp = "".concat(orderDate.getHours().toString().padStart(2, '0'), ":").concat(orderDate.getMinutes().toString().padStart(2, '0'), ":").concat(orderDate.getSeconds().toString().padStart(2, '0'));
  uploadToDataBase();
  var order = {
    items: listCart,
    timestamp: orderTimeStamp
  }; // Push the order to orderHistory

  orderHistory.push(order); // Store the updated orderHistory in localStorage

  localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
  updateSalesReport();
  orderAlert();
  displayOrderHistory(); // Clear the cart

  listCart = [];
  reloadCart();
};

var orderButton = document.querySelector(".Enter");
orderButton.addEventListener('click', handleOrderClick);
console.log(orderHistory);
var modalContent = document.querySelector('.order-modal-content');

var displayOrderHistory = function displayOrderHistory() {
  var historyContent = modalContent.querySelector('.history-container'); // const historyContent = document.createElement('div');
  // historyContent.setAttribute('class', 'history-content');
  // Render order history using orderHistory array

  orderHistory.forEach(function (item) {
    var historyContainer = document.createElement('div');
    historyContent.setAttribute('class', 'history-content');
    historyContainer.innerHTML = "\n      <div class=\"history-list>\n        <small>Jollof Rice &times;2</small>\n\n      </div>\n\n      <bold>".concat(item.timestamp, "</bold>\n      <i class='bx bxs-trash-alt' id=\"history-delete\"></i>\n\n    ");
    historyContent.appendChild(historyContainer); // You can render order history items here as needed
  });
}; // Attach a click event listener to the window to close the modal when clicking outside
// document.addEventListener("DOMContentLoaded", function () {
//   // Get references to the modal and button
//   var orderModal = document.querySelector("#orderModal");
//   var orderBtn = document.querySelector("#cart-history");
//   // Function to open the modal
//   function openModal() {
//     orderModal.style.display = "block";
//     console.log('Working on modal');
//   }
//   // Function to close the modal
//   function closeModal() {
//     orderModal.style.display = "none";
//   }
//   // Attach a click event listener to the button
//   orderBtn.addEventListener("click", openModal);
//   // Attach a click event listener to close the modal when clicking outside
//   window.addEventListener("click", function(event) {
//     if (event.target == orderModal) {
//       closeModal();
//     }
//   });
//   // Rest of your code, including orderButton click handler and displayOrderHistory function
// });
// reloadCart();


updateAndDisplayData(); // windows.onload = () => {
//   sideBar.style.display = 'none';
//   container.style.width = '97.75%';
//   container.style.marginRight = '0px';
// };