"use strict";

// const variable = "my_variable";
// const setId = (items, variable) => {
//   for (let i, item of enumerate(items)) {
//     item["id"] = variable + str(i);
//   }
// };
// import { db } from '../Javascript/index.js';
// import { ref, get, child, update  } from 'firebase/database';
// setId(items, variable);
var Lunch = [// Location: 'PAU CAFETERIA',
{
  id: 1,
  Location: 'PAU CAFETERIA',
  Menu: [{
    id: 1,
    menuType: 'Rice and Pasta Dishes',
    menuList: [{
      id: 1,
      name: 'Fried Rice',
      image: './img/friedRice.jpg',
      price: 300,
      unitMassPortion: 180 + 'g'
    }, {
      id: 2,
      name: 'Jollof Rice',
      image: './img/jollofRice.jpg',
      price: 300,
      unitMassPortion: 180 + 'g'
    }, {
      id: 3,
      name: 'Rice and Beans',
      image: './img/riceBeans.jpg',
      price: 300,
      unitMassPortion: 180 + 'g'
    }, {
      id: 4,
      name: 'Jollof Spaghetti',
      image: './img/jollofSpaghetti.jpg',
      price: 300,
      unitMassPortion: 180 + 'g'
    }]
  }, {
    id: 2,
    menuType: 'Side Dishes',
    menuList: [{
      id: 1,
      name: 'Fried Plantain',
      image: './img/friedPlantain.jpg',
      price: 150,
      unitMassPortion: 100 + 'g'
    }, {
      id: 2,
      name: 'Yam Pottage',
      image: './img/yamPottage.jpg',
      price: 300,
      unitMassPortion: 180 + 'g'
    }, {
      id: 3,
      name: 'Sweet Potato',
      image: './img/sweetPotato.jpg',
      price: 250,
      unitMassPortion: 180 + 'g'
    }, {
      id: 4,
      name: 'Savoury Beans',
      image: './img/savouryBeans.jpg',
      price: 300,
      unitMassPortion: 180 + 'g'
    }]
  }, {
    id: 3,
    menuType: 'Soups and Swallows',
    menuList: [{
      id: 1,
      name: 'Eba',
      image: './img/eba.jpg',
      price: 100,
      unitMassPortion: 150 + 'g'
    }, {
      id: 2,
      name: 'Semo',
      image: './img/semo.jpg',
      price: 100,
      unitMassPortion: 150 + 'g'
    }, {
      id: 3,
      name: 'Egusi Soup',
      image: './img/egusi.jpg',
      price: 350,
      unitMassPortion: 100 + 'g'
    }, {
      id: 4,
      name: 'Okro Soup',
      image: './img/okro.jpg',
      price: 350,
      unitMassPortion: 100 + 'g'
    }, {
      id: 5,
      name: 'Oha Soup',
      image: './img/oha.jpg',
      price: 350,
      unitMassPortion: 100 + 'g'
    }, {
      id: 6,
      name: 'Nsala Soup',
      image: './img/nsala.jpg',
      price: 350,
      unitMassPortion: 100 + 'g'
    }]
  }, {
    id: 4,
    menuType: 'Proteins',
    menuList: [{
      id: 1,
      name: 'Fried Beef',
      image: './img/friedBeef.jpg',
      price: 250,
      unitMassPortion: 50 + 'g'
    }, {
      id: 2,
      name: 'fried Fish',
      image: './img/friedFish.jpg',
      price: 250,
      unitMassPortion: 50 + 'g'
    }, {
      id: 3,
      name: 'Hotdog',
      image: './img/hotdog.jpg',
      price: 150,
      unitMassPortion: 50 + 'g'
    }, {
      id: 4,
      name: 'Chicken Casserole',
      image: './img/chickenCasserole.jpg',
      price: 900,
      unitMassPortion: 50 + 'g'
    }, {
      id: 5,
      name: 'Chicken Wing',
      image: './img/chickenWings.jpg',
      price: 350,
      unitMassPortion: 50 + 'g'
    }, {
      id: 6,
      name: 'Boiled Egg',
      image: './img/boiledEgg.jpg',
      price: 150,
      unitMassPortion: 50 + 'g'
    }]
  }, {
    id: 5,
    menuType: 'Beverages',
    menuList: [{
      id: 1,
      name: 'Bottled Water',
      image: './img/bottledWater.jpg',
      price: 100
    }, {
      id: 2,
      name: 'Freshyo',
      image: './img/freshyo.jpg',
      price: 400
    }, {
      id: 3,
      name: 'Viju Choco',
      image: './img/vijuChoco.jpg',
      price: 400
    }, {
      id: 4,
      name: 'Can Malt',
      image: './img/canMalt.jpg',
      price: 300
    }, {
      id: 5,
      name: 'Pineapple Juice',
      image: './img/pineapple.jpg',
      price: 300
    }, {
      id: 6,
      name: 'Zobo',
      image: './img/zobo.jpg',
      price: 300
    }]
  }]
}, {
  id: 2,
  Location: 'SST Snack Bar',
  Menu: [{
    id: 1,
    menuType: 'Pastries',
    menuList: [{
      id: 1,
      name: 'Meatpie',
      image: './img/meatpie.jpg',
      price: 250,
      unitMassPortion: 50 + 'g'
    }, {
      id: 2,
      name: 'Chicken pie',
      image: './img/chickenpie.jpg',
      price: 250,
      unitMassPortion: 50 + 'g'
    }, {
      id: 3,
      name: 'Sausage',
      image: './img/sausage.jpg',
      price: 150,
      unitMassPortion: 50 + 'g'
    }, {
      id: 4,
      name: 'Eggroll',
      image: './img/eggroll.jpg',
      price: 900,
      unitMassPortion: 50 + 'g'
    }, {
      id: 5,
      name: 'Doughnut',
      image: './img/doughnut.jpg',
      price: 350,
      unitMassPortion: 50 + 'g'
    }]
  }, {
    id: 2,
    menuType: 'Beverages',
    menuList: [{
      id: 1,
      name: 'Bottled Water',
      image: './img/bottledWater.jpg',
      price: 100
    }, {
      id: 2,
      name: 'Freshyo',
      image: './img/freshyo.jpg',
      price: 400
    }, {
      id: 3,
      name: 'Viju Choco',
      image: './img/vijuChoco.jpg',
      price: 400
    }, {
      id: 4,
      name: 'Zobo',
      image: './img/zobo.jpg',
      price: 300
    }, {
      id: 5,
      name: 'Chi Exotic',
      image: './img/chiExotic.jpg',
      price: 300
    }]
  }]
}, {
  id: 3,
  Location: 'TYD ROOFTOP',
  Menu: [{
    id: 1,
    menuType: 'Pastries',
    menuList: [{
      id: 1,
      name: 'Meatpie',
      image: './img/meatpie.jpg',
      price: 250,
      unitMassPortion: 50 + 'g'
    }, {
      id: 2,
      name: 'Chicken pie',
      image: './img/chickenpie.jpg',
      price: 250,
      unitMassPortion: 50 + 'g'
    }, {
      id: 3,
      name: 'Sausage',
      image: './img/sausage.jpg',
      price: 150,
      unitMassPortion: 50 + 'g'
    }, {
      id: 4,
      name: 'Eggroll',
      image: './img/eggroll.jpg',
      price: 900,
      unitMassPortion: 50 + 'g'
    }, {
      id: 5,
      name: 'Doughnut',
      image: './img/doughnut.jpg',
      price: 350,
      unitMassPortion: 50 + 'g'
    }]
  }, {
    id: 2,
    menuType: 'Beverages',
    menuList: [{
      id: 1,
      name: 'Bottled Water',
      image: './img/bottledWater.jpg',
      price: 100
    }, {
      id: 2,
      name: 'Freshyo',
      image: './img/freshyo.jpg',
      price: 400
    }, {
      id: 3,
      name: 'Viju Choco',
      image: './img/vijuChoco.jpg',
      price: 400
    }, {
      id: 4,
      name: 'Zobo',
      image: './img/zobo.jpg',
      price: 300
    }, {
      id: 5,
      name: 'Pineapple Juice',
      image: './img/pineapple.jpg',
      price: 300
    }]
  }]
}]; // import { db } from '../Javascript/index.js';
// import { onValue, ref } from 'firebase/database';
// // const Data = [];
// const itemLocation = ['SST', 'cafeteria', 'roof-top'];
// function displayCurrentData() {
//   // const Data = [];
//   const dbmain = ref(db,"PAU/Location/" );
//   onValue(dbmain, (snapshot) => {
//     const newData = [];
//     console.log(snapshot.val());
//     if (snapshot.val()) {
//       snapshot.forEach(item => {
//         newData.push(item.val());
//         // oldData.append(item.val());
//       });
//       // Data = newData;
//       const Data = newData.map(obj => Object.values(obj));
//       displayData(Data, itemLocation);
//     }
//     });
// };

function displayData(data, itemLocation) {
  // console.log(itemLocation);
  var menu = document.getElementById('display');
  menu.innerHTML = " ";
  var itemContainer = document.createElement('div');
  itemContainer.setAttribute('id', 'card-container');
  itemContainer.innerHTML = " ";

  for (var i = 0; i < data.length; i++) {
    var Location = document.createElement('div');
    Location.classList.add('location');
    Location.innerHTML = "\n    <div class=\"location\">\n      Location: ".concat(itemLocation[i], "\n    </div>\n    ");
    data[i].forEach(function (listItem) {
      var itemCard = document.createElement('div');
      itemCard.classList.add('card');
      itemCard.innerHTML = "\n              <img src=\"".concat(listItem.image, "\" alt=\"food\" />\n              <h3>").concat(listItem.name, "</h3>\n              <p>&#8358;").concat(listItem.price, "</p>\n              <p style=\"color: red\">Quantity Available : ").concat(listItem.qty - listItem.sales, "</p>\n    ");
      itemContainer.appendChild(itemCard);
    });
    menu.appendChild(Location);
    menu.appendChild(itemContainer);
  } // console.log(testArray)
  // console.log(itemLocation)
  //   for (var i = 0; i < data.length; i++) {
  //     const testArray = data[i].map(obj => Object.values(obj));
  //     // console.log(testArray[i]);
  //     // testArray = Object.values(data);
  // let Location = document.createElement('div');
  // Location.classList.add('location');
  // Location.innerHTML = `
  // <div class="location">
  //   Location: ${itemLocation[i]}
  // </div>
  // `;
  // let itemCard = document.createElement('div');
  // itemCard.classList.add('item-display');
  // itemCard.innerHTML =  `
  // <div class="menu id="menu>
  //   <div id="card-container">
  //     ${
  //       testArray[i].map(list => `
  //         <div class="card">
  //           <img src="${list.image}" alt="food" />
  //           <h3>${list.name}</h3>
  //           <p>&#8358;${list.price}</p>
  //           <p style="color: red">Quantity Available : ${list.qty - list.sales}</p>
  //         </div>
  //       `).join('')
  //     }
  //   </div>
  // </div>
  // `;
  // menu.append(Location);
  // menu.append(itemCard);
  //   // const itemLocation = ['SST', 'cafeteria', 'roof-top'];
  // }
  // display.innerHTML = displayMenu;

}

; // var dataRef = db.ref('PAU/Location/');
// var save = [];
// dataRef.on('value', function(getData1){
//   var Data = getData1.val();
//   save.push(Data);
// });
// console.log(save);

var idName = "location";

var setId = function setId(items, variable) {
  items.forEach(function (item, index) {
    item["id"] = variable + index;
  });
};

setId(Lunch, idName); // console.log(Lunch);
// export default Lunch;

/* The code you provided is a JavaScript code that creates a dynamic menu display based on the data
stored in the `Lunch` array. */
// const menu = document.getElementById('display');

var hideFunction = function hideFunction() {
  document.getElementsByClassName("menu.name").style.display = "none";
  document.getElementsById("card-container").style.display = "none";
}; // const display = Menu.forEach()
// <i class="fa fa-caret-down dropdown" aria-hidden="false"></i>


function displayMenu(Lunch) {
  var menu = document.getElementById('display');
  menu.innerHTML = ' ';
  Lunch.forEach(function (data) {
    var id = data.id,
        Location = data.Location,
        Menu = data.Menu;
    var container = document.createElement('div');
    container.innerHTML = "\n        <div class=\"location\" id=\"".concat(id, "\">\n        Location: ").concat(Location, "\n  \n      </div>\n  \n      <div class=\"menu id=\"menu>\n        ").concat(Menu.map(function (list) {
      return "\n  \n            <h1 class=\"menu-name\">\n              ".concat(list.menuType, "\n            </h1>\n  \n            <div id=\"card-container\">\n                ").concat(list.menuList.map(function (item) {
        return "\n                <div class=\"card\">\n                  <img src=\"".concat(item.image, "\" alt=\"food\" />\n                  <h3>").concat(item.name, "</h3>\n                  <p>&#8358;").concat(item.price, "</p>\n                </div>\n              ");
      }).join(''), "\n            </div>\n  \n          ");
    }).join(''), "\n      </div>\n        ");
    menu.append(container);
  });
}

displayMenu(Lunch); // const displayMenu = Lunch.forEach((data) => {
//   const we = 0;
//   const {id, Location, Menu} = data;
//   // const giveID = (id) => {
//   //   id = "location" + id;
//   //   id = id.toString()
//   //   return id;
//   // }
//   // const lid = id;
//     return `
//       <div class="location" id="${id}">
//       Location: ${Location}
//     </div>
//     <div class="menu id="menu>
//       ${
//         Menu.map(list => `
//           <h1 class="menu-name">
//             ${list.menuType}
//           </h1>
//           <div id="card-container">
//               ${list.menuList.map(item => `
//               <div class="card">
//                 <img src="${item.image}" alt="food" />
//                 <h3>${item.name}</h3>
//                 <p>&#8358;${item.price}</p>
//               </div>
//             `).join('')}
//           </div>
//         `).join('')
//       }
//     </div>
//   ` 
// })
// display.innerHTML = displayMenu;
// displayCurrentData();