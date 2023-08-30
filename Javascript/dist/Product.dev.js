"use strict";

// const variable = "my_variable";
// const setId = (items, variable) => {
//   for (let i, item of enumerate(items)) {
//     item["id"] = variable + str(i);
//   }
// };
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
}];
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

var menu = document.getElementById('display');

var hideFunction = function hideFunction() {
  document.getElementsByClassName("menu.name").style.display = "none";
  document.getElementsById("card-container").style.display = "none";
}; // const display = Menu.forEach()
// <i class="fa fa-caret-down dropdown" aria-hidden="false"></i>


var displayMenu = Lunch.map(function (data) {
  var id = data.id,
      Location = data.Location,
      Menu = data.Menu; // const giveID = (id) => {
  //   id = "location" + id;
  //   id = id.toString()
  //   return id;
  // }
  // const lid = id;

  return "\n      <div class=\"location\" id=\"".concat(id, "\">\n      Location: ").concat(Location, "\n\n    </div>\n\n    <div class=\"menu id=\"menu>\n      ").concat(Menu.map(function (list) {
    return "\n\n          <h1 class=\"menu-name\">\n            ".concat(list.menuType, "\n          </h1>\n\n          <div id=\"card-container\">\n              ").concat(list.menuList.map(function (item) {
      return "\n              <div class=\"card\">\n                <img src=\"".concat(item.image, "\" alt=\"food\" />\n                <h3>").concat(item.name, "</h3>\n                <p>&#8358;").concat(item.price, "</p>\n              </div>\n            ");
    }).join(''), "\n          </div>\n\n        ");
  }).join(''), "\n    </div>\n  ");
}).join(""); // const sst = document.querySelector('#sst');
// const rooftop = document.querySelector('#rooftop');
// // body = document.querySelector('display');
// sst.addEventListener('click', () => {
//   body = document.querySelector('.displayContent');
//   //  const divElement = document.querySelector('#location1')
//    body.style.marginTop = '8rem';
//    console.log('clicked')
// });

display.innerHTML = displayMenu; // const sst = document.querySelector('#sst');
// const rooftop = document.querySelector('#rooftop');
// // body = document.querySelector('display');
// sst.addEventListener('click', () => {
//   body = document.querySelector('#location1');
//   //  const divElement = document.querySelector('#location1')
//    body.style.paddingTop = '6rem';
//    console.log('clicked')
// });
// let foodLocation = document.querySelectorAll('.location');
// let navLinks = document.querySelectorAll('#scrollLocation')
// window.onscroll = () => {
//   foodLocation.forEach(loc => {
//     let top = window.scrollY;
//     let offset  = loc.offsetTop - 100;
//     let height  = loc.offsetHeight;
//     let id = loc.getAttribute('id');
//     if (top >= offset && top < offset + height) {
//       navLinks.forEach(links=> {
//         document.querySelector('#scrollLocation a[href*=' + id + ']')
//       });
//     }
//   });
// };
// const foodLocation = ('location');
// const giveID = (id) => {
//   const locationData = "location" + id;
//     const locationID = locationData.toString()
//     return locationID;
// }
// const setID = 
// const cafeteria = document.getElementById('PAU CAFETERIA');
// const sst = document.getElementById('SST SNACK BAR');
// const rooftop = document.getElementById('TYD ROOFTOP');
// const cafeteriaButton = document.getElementById('cafeteriaB');
// const sstButton = document.getElementById('sstB');
// const rooftopButton = document.getElementById('rooftopB');
// cafeteriaButton.addEventListener('click', () => {
//   const cafeteria = document.getElementById('location');
//     cafeteria.scrollIntoView();
// });
// sstButton.addEventListener('click', () => {
//   const sst = document.getElementById('SST SNACK BAR');
//   sst.scrollIntoView();
// });
// rooftopButton.addEventListener('click', () => {
//   const rooftop = document.getElementById('TYD ROOFTOP');
//   rooftop.scrollIntoView();
// });