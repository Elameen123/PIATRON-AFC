"use strict";

var Lunch = [// Location: 'PAU CAFETERIA',
{
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
}]; // export default Lunch;

/* The code you provided is a JavaScript code that creates a dynamic menu display based on the data
stored in the `Lunch` array. */

var menu = document.getElementById('display');

var hideFunction = function hideFunction() {
  document.getElementsByClassName("menu.name").style.display = "none";
  document.getElementsById("card-container").style.display = "none";
}; // const display = Menu.forEach()
// <i class="fa fa-caret-down dropdown" aria-hidden="false"></i>


var displayMenu = Lunch.map(function (data) {
  var Location = data.Location,
      Menu = data.Menu;
  return "\n    <div class=\"location\">\n      Location: ".concat(Location, "\n\n    </div>\n\n    <div class=\"menu id=\"menu>\n      ").concat(Menu.map(function (list) {
    return "\n\n          <h1 class=\"menu-name\">\n            ".concat(list.menuType, "\n          </h1>\n\n          <div id=\"card-container\">\n              ").concat(list.menuList.map(function (item) {
      return "\n              <div class=\"card\">\n                <img src=\"".concat(item.image, "\" alt=\"food\" />\n                <h3>").concat(item.name, "</h3>\n                <p>&#8358;").concat(item.price, "</p>\n              </div>\n            ");
    }).join(''), "\n          </div>\n\n        ");
  }).join(''), "\n    </div>\n  ");
}).join("");
display.innerHTML = displayMenu;