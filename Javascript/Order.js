// console.log('Order.js is bundled');

import { initializeApp } from 'firebase/app';
import {getDatabase, ref, set, child, update, remove, get} from 'firebase/database';
// import { getDatabase } from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQ34GgMwoq85P34gsRQT0bo6PK7Tpf6yc",
  authDomain: "piatron-a9a6d.firebaseapp.com",
  projectId: "piatron-a9a6d",
  storageBucket: "piatron-a9a6d.appspot.com",
  messagingSenderId: "1065060850773",
  appId: "1:1065060850773:web:83866aa3bac2f552e808dc",
  measurementId: "G-F8CJX083LX"

  // databaseURL: "food-counter-4a98e-default-rtdb.firebaseio.com",
};

const listCart = [];
const Enter  = document.querySelector('.Enter');

const cartItem = document.querySelector('#cartItem');

const app = initializeApp(firebaseConfig);

const db = getDatabase();

const cart = document.querySelector('.cart-icon');

const dbref = ref(db);

get(child(dbref, "PAU/Location/SST/")).then((snapshot) => {
var Menu = [];

    // console.log(snapshot);

snapshot.forEach(food => {
    Menu.push(food.val());
});

console.log(Menu);

const cartContainer = document.getElementById('cart-container');


function displayCart() {

  Menu.forEach((item) => {
    const cartCard = document.createElement('div');
    cartCard.classList.add('cart-card');
    cartCard.innerHTML = `
        <div hidden>${item.id}</div>
        <img class='img1' src="${item.image}" alt="food" />
        <div class="food-container">
          <h3>${item.name}</h3>
          <p>&#8358;${item.price}</p>
        </div>
        <p style="color: red">Quantity Available : ${item.qty}</p>
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
        addToCart(item.id);
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
      addToCart(item.id);
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
    addToCart(item.id);
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
    addToCart(item.id);
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
    addToCart(item.id);
    listCart[item.id].quantity = itemFive;
    reloadCart();

    // console.log(listCart[item.id].quantity);
  }

  else {
    listCart[item.id].quantity = itemFive;
    reloadCart();

    // console.log(listCart[item.id].quantity);

  }
  // quantity.innerText = itemName;
  // reloadCart();

  // console.log(itemName);
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

console.log(Menu);

displayCart();
function addToCart(id) {
  console.log('Item ' + id + ' is added to cart')
  if (listCart[id] == null) {
    listCart[id] = Menu[id];
    listCart[id].quantity = 1;
  }

    reloadCart();
    console.log(listCart);
}

function reloadCart() {
  const total = document.querySelector('#total');

  const quantity  = document.querySelector('#cart-count');

  cartItem.innerHTML = " ";
  let count = 0;
  let totalPrice = 0.00;

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

  total.innerText = totalPrice;
  quantity.innerText = count;
}

function changeQuantity(id, quantity) {
  if (quantity === 0) {
    delete listCart[id];
  } 
  else if (listCart[id]) {
    listCart[id].quantity = quantity;
  }
  reloadCart();
}

});

// console.log(listCart);


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
    update(ref(db, "PAU/Location/SST/" + list.name), {
      qty: list.qty - list.quantity
    }).then(() => {
      // console.log(snapshot);
      console.log('Upload Successful');
      window.location.reload();
    })
    .catch((error) => {
      alert('unsuccessful , error: ' + error);
    })
  })
    
  }

Enter.addEventListener('click', () => {
    uploadToDataBase();
    console.log('Upload Successful');
  });

// windows.onload = () => {
//   sideBar.style.display = 'none';
//   container.style.width = '97.75%';
//   container.style.marginRight = '0px';
// };




