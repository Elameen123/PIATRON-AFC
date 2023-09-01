import { db } from '../Javascript/index.js';
import { ref, get, child, update, onValue } from 'firebase/database';

const listCart = [];
const Enter  = document.querySelector('.Enter');

const cartItem = document.querySelector('#cartItem');

// const app = initializeApp(firebaseConfig);

// const db = getDatabase();

const cart = document.querySelector('.cart-icon');


// let initialFetchComplete = false;

// const dbref = ref(db, "PAU/Location/SST/" );

var Menu = [];


function getAllData(){

  const dbRef =ref(db);

  get(child(dbRef, "PAU/Location/SST/")).then((snapshot) => {

    if (snapshot.exists()) {

    
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

function addToCart(id, Menu) {
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

function updateAndDisplayData() {
  const dbrefactive = ref(db,"PAU/Location/SST/" );

  onValue(dbrefactive, (snapshot) => {
    const newMenu = [];

    if (snapshot.val()) {
      snapshot.forEach(item => {
        newMenu.push(item.val());
      });

      Menu = newMenu;

      displayCart(Menu);
      // reloadCart();
    }

      
    // console.log(snapshot.val());
    // console.log(newMenu);
    // Menu = newMenu;
    // displayCart(Menu);
    console.log(Menu);      // console.log(newMenu);
    });
}


// function displayNewQuantity(id, qty) {

//   const dbrefactive = ref(db,"PAU/Location/SST/" );

//   onValue(dbrefactive, (snapshot) => {
//     var newMenu = [];
      
//     snapshot.forEach(newfood => {
//         newMenu.push(newfood.val());
//     });

//     newMenu.forEach(newfood => {
//       const newQty = 0;
//       if (newfood.id === id) {
//         newQty = newfood.qty;
//         return newQty;
//       }
//       else {
//         return qty;
//       }
//     })

//       })

// }


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

Enter.addEventListener('click', () => {
    // reloadCart();
    uploadToDataBase();
    // console.log('Upload Successful');
    // reloadCart();
  });


// reloadCart();
updateAndDisplayData();


// windows.onload = () => {
//   sideBar.style.display = 'none';
//   container.style.width = '97.75%';
//   container.style.marginRight = '0px';
// };




