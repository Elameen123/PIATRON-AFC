import { db } from '../Javascript/index.js';
import { ref, get, child, update, onValue, set } from 'firebase/database';

let listCart = [];
const Enter  = document.querySelector('.Enter');

const cartItem = document.querySelector('#cartItem');

// const app = initializeApp(firebaseConfig);

// const db = getDatabase();

const cart = document.querySelector('.cart-icon');


// let initialFetchComplete = false;

// const dbref = ref(db, "PAU/Location/SST/" );

var Menu = [];

// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);

// if (urlParams.has('data')) {
//   const dataStr = urlParams.get('data');
//   const data = JSON.parse(dataStr);
//   console.log(data);
// }


// Get the URL query parameters
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

let data;

// Check if the "data" parameter is present in the URL
if (urlParams.has('data')) {
  // Get the value of the "data" parameter and parse it as JSON
  const dataStr = urlParams.get('data');
  data = JSON.parse(dataStr);

} else {
  console.log("No data parameter found in the URL.");
}

// Now, you can access the data properties
const location = data.location;
const clickedMenuItem = data.clickedMenuItem; 
const dataLocation = data.dataLocation;

const locationHeader = document.querySelector('.bucket-list');

locationHeader.innerText = clickedMenuItem;


function getAllData(){

  const dbRef =ref(db);

  get(child(dbRef, location)).then((snapshot) => {

    if (snapshot.exists()) {

      console.log(snapshot.val());
      snapshot.forEach(food => {
          Menu.push(food.val());
      });

      // displayCart(Menu);
    } 
    
    else {
      console.log("No data available");
    }

    // displayCart(Menu);

  })
  .catch((error) => {
    console.error(error);
  });

}

getAllData();
console.log(Menu);
console.log(Menu.price);

// displayCart(Menu);

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

  const cartContainer = document.getElementById('cart-container');
  cartContainer.innerHTML = ' ';

  MenuItem.forEach((item) => {
    const cartCard = document.createElement('div');
    cartCard.classList.add('cart-card');
    cartCard.innerHTML = `
        <div hidden>${item.id}</div>
        <img class='img1' src="${item.image}" alt="food" />
        <div class="food-container">
          <h3>${item.name}</h3>
          <p>&#8358;${item.price}</p>
        </div>
        <p style="color: red">Quantity Available : ${item.qty - item.sales}</p>
        <div class="clickButtons">
          <button type="button" class="number1" data-item="1">1</button>
          <button type="button" class="number2" data-item="2">2</button>
          <button type="button" class="number3" data-item="3">3</button>
          <button type="button" class="number4" data-item="4">4</button>
          <button type="button" class="number5" data-item="5">5</button>
        </div>
     `;

     cartContainer.append(cartCard);

     const clickButtons = cartCard.querySelector('.clickButtons');
    
     const number1 = clickButtons.querySelector('.number1');
     const number2 = clickButtons.querySelector('.number2');
     const number3 = clickButtons.querySelector('.number3');
     const number4 = clickButtons.querySelector('.number4');
     const number5 = clickButtons.querySelector('.number5');



     number1.addEventListener('click', () => {
      const itemOne = parseInt(number1.getAttribute("data-item"));
      // console.log ('item is clicking');

      if (listCart[item.id] == null) {
        addToCart(item.id, MenuItem);
        // changeQuantity(item.id, itemOne);
        listCart[item.id].quantity = itemOne;
        reloadCart();

      }
  
      else {
        // listCart[item.id].quantity = listCart[item.id].quantity + itemName;
        // changeQuantity(item.id, itemName);
        listCart[item.id].quantity = itemOne;
        reloadCart();

      }

      // quantity.innerText = itemName;
      // reloadCart();

      // console.log(itemName);
   });


   number2.addEventListener('click', () => {
    const itemTwo = parseInt(number2.getAttribute("data-item"));
    console.log ('item is clicking');

    if (listCart[item.id] == null) {
      addToCart(item.id, MenuItem);
      listCart[item.id].quantity = itemTwo;
      reloadCart();

    }

    else {
      listCart[item.id].quantity = itemTwo;
      reloadCart();

    }
    // quantity.innerText = itemName;
    // reloadCart();

    // console.log(itemName);
 });
 
 number3.addEventListener('click', () => {
  const itemThree = parseInt(number3.getAttribute("data-item"));
  console.log ('item is clicking');

  if (listCart[item.id] == null) {
    addToCart(item.id, MenuItem);
    listCart[item.id].quantity = itemThree;
    reloadCart();

  }

  else {
    listCart[item.id].quantity = itemThree;
    reloadCart();

  }
  // quantity.innerText = itemName;
  // reloadCart();

  // console.log(itemName);
}); 

number4.addEventListener('click', () => {
  const itemFour = parseInt(number4.getAttribute("data-item"));
  console.log ('item is clicking');

  if (listCart[item.id] == null) {
    addToCart(item.id, MenuItem);
    listCart[item.id].quantity = itemFour;
    reloadCart();

  }

  else {
    // quantity.innerText = itemFour;
    listCart[item.id].quantity = itemFour;
    reloadCart();

  }
  // reloadCart();

  // console.log(itemName);
}); 

number5.addEventListener('click', () => {
  const itemFive = parseInt(number5.getAttribute("data-item"));
  console.log ('item is clicking');

  if (listCart[item.id] == null) {
    addToCart(item.id, MenuItem);
    listCart[item.id].quantity = itemFive;
    reloadCart();

    // console.log(listCart[item.id].quantity);
  }

  else {
    listCart[item.id].quantity = itemFive;
    reloadCart();

    // console.log(listCart[item.id].quantity);

  }
});

    //  cartCard.addEventListener('click', () => {
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

}

// function addToCart(id, Menu) {
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
  console.log('Item ' + id + ' is added to cart')
  if (listCart[id] == null) {
    Menu.forEach((item) => {
      if (item.id == id) {
        listCart[id] = item;
        listCart[id].quantity = 1;
        console.log(item.name + ' is added to cart');
      }
    }
    );
  }

    reloadCart();
    console.log(listCart);
}

const printList  = document.createElement('div');
printList.setAttribute('id', 'printList');

// function reloadCart() {
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
  const total = document.querySelector('#total');

  const quantity  = document.querySelector('#cart-count');

  printList.innerHTML = ' ';

  cartItem.innerHTML = " ";
  let count = 0;
  let totalPrice = 0.00;

  // if (listCart.length = 0) {
  //   printList.innerHTML = ' ';

  //   cartItem.innerHTML = " ";
  //   count = 0;
  //   totalPrice = 0.00;
  // }

  for (const id in listCart) {
    if (listCart.hasOwnProperty(id)) {
      const item = listCart[id];

      totalPrice += item.price * item.quantity;
      count += item.quantity;

      let cartList = document.createElement('div');
      cartList.setAttribute('id', 'cartLists');
      cartList.innerHTML = `
        <h3>${item.name}</h3>
        <div hidden>${item.id}</div>

        <div class="count">
          <button class='minus' type="button">-</button>
          <p>${item.quantity}</p>
          <button class='plus' type="button">+</button>
        </div>
      `;

      cartItem.appendChild(cartList);

      // Print List

      const printCard = document.createElement('div');
      printCard.setAttribute('class', 'printCard');
      printCard.innerHTML = `
        <h5>${item.name}</h5>
        <p>${item.quantity}</p>
        <p>${item.price}</p>
      `;

      printList.appendChild(printCard);

      // Attach event listeners to the buttons
      const minusButton = cartList.querySelector('.minus');
      const plusButton = cartList.querySelector('.plus');

      // Add a click event listener for the minus button
      minusButton.addEventListener('click', () => {
        // Call a function with the item ID and the action you want (e.g., decrement quantity)
        changeQuantity(item.id, item.quantity - 1);
      });

      // Add a click event listener for the plus button
      plusButton.addEventListener('click', () => {
        // Call a function with the item ID and the action you want (e.g., increment quantity)
        changeQuantity(item.id, item.quantity + 1);
      });
    }

  }

  total.innerText = totalPrice.toFixed(2);
  quantity.innerText = count;
}



const printSection = document.getElementById('printSection'); 


// function printReceipt() {
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
  } 
  else if (listCart[id]) {
    listCart[id].quantity = quantity;
  }
  reloadCart();
}

function updateAndDisplayData() {
  const dbrefactive = ref(db, location );

  onValue(dbrefactive, (snapshot) => {
    const newMenu = [];

    if (snapshot.val()) {
      snapshot.forEach(item => {
        newMenu.push(item.val());
        // console.log(item.val());
      });


      displayCart(newMenu);
      // console.log(newMenu);
      reloadCart();
    }

      
    
    // console.log(Menu); 
    });
}


const sideBar = document.querySelector('.cart-sidebar');

const cartCount  = document.querySelector('#cart-count');

const container = document.querySelector('.cart-container');

// const hidden = document.querySelector('.hidden');

cart.addEventListener('click', () => {

  sideBar.style.display = 'flex';
  container.style.width = '73.5%';
});

cartCount.addEventListener('click', () => {
  sideBar.style.display = 'none';
  container.style.width = '97.75%';
  container.style.marginRight = '0px';
});

const uploadToDataBase = () => {
  listCart.forEach((list) => {

    update(ref(db, "PAU/Location/"+ dataLocation + "/" + list.name), {
      sales: list.sales + list.quantity
    }).then(() => {
      // reloadCart();
      // console.log(snapshot);
      console.log('Upload Successful');
      // reloadCart();
      // window.location.reload();
    })
    .catch((error) => {
      alert('Unsuccessful , error: ' + error);
    })
  })
    
  }

const updateSalesReport = () => {
  const date = new Date();
  const currentDate = `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}`;
  const entryDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
  const timeStamp = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
  listCart.forEach((item) => {
    set(ref(db, "PAU-sales-report/" + currentDate + "/"+ item.name + '/'), {
      name : item.name,
      timestamp : timeStamp,
      date : entryDate,
      price : item.price,
      quantity : item.quantity,
      location : dataLocation,
      qty: item.qty
    }).then(() =>{
      console.log('Sales Report updated');
    }).catch(() =>{
      'Sales report upload unsuccessful , error: ' + error
    })
  })
}

const orderAlert = () => {
  const alert = document.getElementById("alert");
  const close = document.getElementById("close");

  // Function to show the alert
  function showAlert() {
      alert.style.display = "block";
      setTimeout(hideAlert, 10000); // Hide after 10 seconds
  }

  // Function to hide the alert
  function hideAlert() {
      alert.style.display = "none";
  }

  // Show the alert when the page loads
  showAlert();

  // Close the alert when the close button is clicked
  close.addEventListener("click", hideAlert);
}

const handleOrderClick = () => {
  uploadToDataBase();
  updateSalesReport();
  orderAlert();
  // listCart.length = 0;
  // printReceipt();
  // console.log('Upload Successful');
  listCart = [];
  reloadCart();
  
};

const orderButton = document.querySelector(".Enter");
orderButton.addEventListener('click', handleOrderClick);

// Enter.addEventListener('click', () => {
//     // reloadCart();
//     uploadToDataBase();
//     updateSalesReport();
//     orderAlert();
//     // listCart.length = 0;
//     // printReceipt();
//     // console.log('Upload Successful');
//     listCart = [];
//     reloadCart();
    
//   });


// reloadCart();
updateAndDisplayData();


// windows.onload = () => {
//   sideBar.style.display = 'none';
//   container.style.width = '97.75%';
//   container.style.marginRight = '0px';
// };




