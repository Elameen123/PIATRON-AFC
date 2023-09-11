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
      // listCart.length = 0;
      // reloadCart();
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
  var currentDate = "".concat(date.getFullYear()).concat(date.getMonth() + 1).concat(date.getDate());
  var entryDate = "".concat(date.getFullYear(), "-").concat(date.getMonth() + 1, "-").concat(date.getDate());
  var timeStamp = "".concat(date.getHours(), ":").concat(date.getMinutes(), ":").concat(date.getSeconds());
  listCart.forEach(function (item) {
    (0, _database.set)((0, _database.ref)(_index.db, "PAU-sales-report/" + currentDate + "/" + item.name + '/'), {
      name: item.name,
      timestamp: timeStamp,
      date: entryDate,
      price: item.price,
      quantity: item.quantity,
      location: dataLocation
    }).then(function () {
      console.log('Sales Report updated');
    })["catch"](function () {
      'Sales report upload unsuccessful , error: ' + error;
    });
  });
};

Enter.addEventListener('click', function () {
  // reloadCart();
  uploadToDataBase();
  updateSalesReport(); // printReceipt();
  // console.log('Upload Successful');

  reloadCart();
}); // reloadCart();

updateAndDisplayData(); // windows.onload = () => {
//   sideBar.style.display = 'none';
//   container.style.width = '97.75%';
//   container.style.marginRight = '0px';
// };