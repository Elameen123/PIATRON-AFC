"use strict";

var _database = require("firebase/database");

var _index = require("../Javascript/index.js");

var _storage = require("firebase/storage");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Ensure the document is ready
$(document).ready(function () {
  var modal = $("#myModal");
  var btn = $("#add-menu-group");
  var menuname = $("#menuName");
  var form = $(".modal-content form");
  var nameError = $("#nameError");
  var mealLocation = [];
  var mealCategory = [];
  var mealName = []; // const menuList = ['Rice & Pasta Dishes', 'Side Dishes', 'Soups & Swallows', 'Proteins', 'Drinks'];

  var rice = $("input[name='rice']");
  var side = $("input[name='side']");
  var swallow = $("input[name='swallow']");
  var protein = $("input[name='protein']");
  var snacks = $("input[name='snacks']");
  var drinks = $("input[name='drinks']");
  $('#sidebar-container').on('click', '.sideMenu > ul > li', function () {
    $(this).siblings().removeClass('active');
    $(this).toggleClass('active');
    $(this).find('ul').slideToggle();
    $(this).siblings().find('ul').slideUp();
    $(this).siblings().find('ul').find('li').removeClass('active');
  });
  $('#sidebar-container').on('click', '.sub-side-menu > li', function (e) {
    e.stopPropagation();
    $(this).toggleClass('active');
    $(this).find('.sub-sub-side-menu').slideToggle();
    $(this).siblings().find('.sub-sub-side-menu').slideUp();
    $(this).siblings().find('.sub-sub-side-menu li').removeClass('active');
  });
  btn.click(function (e) {
    e.stopPropagation();
    modal.css("display", "block");
  });
  modal.find(".close-menu-group").click(function (e) {
    e.stopPropagation();
    modal.css("display", "none");
  }); // Prevent event propagation inside the modal content

  modal.find(".modal-content").click(function (e) {
    e.stopPropagation();
  }); // Function to handle radio button click within a group

  function handleRadioGroupClick(event) {
    var clickedRadio = event.target;
    var groupName = clickedRadio.getAttribute("name"); // Get the data attribute value (data-category or data-location)

    var dataAttribute = groupName === "location" ? "data-location" : "data-category";
    var selectedValue = clickedRadio.getAttribute(dataAttribute); // Get all radio buttons within the same group

    var radios = document.querySelectorAll("input[name=\"".concat(groupName, "\"]")); // Deselect other radio buttons in the same group

    radios.forEach(function (radio) {
      if (radio !== clickedRadio) {
        radio.checked = false;
      }
    });

    if (groupName === 'location') {
      mealLocation.length = 0;
      mealLocation.push(selectedValue);
      console.log(mealLocation);
    } else {
      mealCategory.length = 0;
      mealCategory.push(selectedValue);
      console.log(mealCategory);
    }
  } // Add event listeners to radio buttons in "choose-location" and "choose-category"


  var locationRadios = document.querySelectorAll('#choose-location input[type="radio"]');
  locationRadios.forEach(function (radio) {
    radio.addEventListener("click", handleRadioGroupClick);
  });
  var categoryRadios = document.querySelectorAll('#choose-category input[type="radio"]');
  categoryRadios.forEach(function (radio) {
    radio.addEventListener("click", handleRadioGroupClick);
  });
  form.submit(function _callee(e) {
    var errors, menuList, fetchData, riceList, sideList, swallowList, proteinList, drinksList, snacksList, data, _i, _menuList, item, itemName, itemData, dataToWrite, menuGroupRef;

    return regeneratorRuntime.async(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            fetchData = function _ref(data, menuType) {
              var snapshot, item, menuObject;
              return regeneratorRuntime.async(function fetchData$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return regeneratorRuntime.awrap((0, _database.get)((0, _database.ref)(_index.db, 'PAU_all_foods/' + data)));

                    case 2:
                      snapshot = _context.sent;
                      item = snapshot.val().food;
                      menuObject = _defineProperty({}, item, _objectSpread({}, snapshot.val(), {
                        menuType: menuType
                      }));
                      console.log(item);
                      menuList.push(menuObject);
                      return _context.abrupt("return", snapshot.val());

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              });
            };

            errors = [];
            menuList = [];

            if (menuname.val().length < 4) {
              errors.push("Menu Group Name must be at least 4 characters");
            }

            if (menuname.val().length === 0 || menuname.val().trim() === "") {
              errors.push("Menu Group Name required");
            }

            if (errors.length > 0) {
              e.preventDefault();
              nameError.removeAttr("hidden");
              nameError.html(errors.join(', '));
            }

            mealName.push(menuname.val()); // Rest of your form submission logic
            // const menuListData = [];

            riceList = [];
            sideList = [];
            swallowList = [];
            proteinList = [];
            drinksList = [];
            snacksList = [];
            rice.each(function () {
              if ($(this).prop("checked")) {
                var menuType = "Rice & Pasta Dishes";
                fetchData($(this).val(), menuType);
                riceList.push($(this).val());
              }
            });
            side.each(function () {
              if ($(this).prop("checked")) {
                var menuType = "Side Dishes";
                fetchData($(this).val(), menuType);
                sideList.push($(this).val());
              }
            });
            snacks.each(function () {
              if ($(this).prop("checked")) {
                var menuType = "Snacks";
                fetchData($(this).val(), menuType);
                snacksList.push($(this).val());
              }
            });
            swallow.each(function () {
              if ($(this).prop("checked")) {
                var menuType = "Soups & Swallows";
                fetchData($(this).val(), menuType);
                swallowList.push($(this).val());
              }
            });
            protein.each(function () {
              if ($(this).prop("checked")) {
                var menuType = "Proteins";
                fetchData($(this).val(), menuType);
                proteinList.push($(this).val());
              }
            });
            drinks.each(function () {
              if ($(this).prop("checked")) {
                var menuType = "Drinks";
                fetchData($(this).val(), menuType);
                drinksList.push($(this).val());
              }
            }); // console.log(test);

            console.log(menuList);
            console.log('Working');
            console.log(mealCategory);
            console.log(mealLocation);
            console.log(mealName);
            console.log('PAU/timetable/' + mealCategory[0] + '/' + mealLocation[0] + '/' + mealName[0] + '/'); //   const data = [
            //     {
            //         "Jollof Rice": {
            //             "food": "Jollof Rice",
            //             "id": "1",
            //             "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2FjollofRice.jpg?alt=media&token=846bbe69-8d87-4e74-8f9a-ce16dc4b792b",
            //             "mass_per_portion": "185g",
            //             "price": "300",
            //             "menuType": "Rice & Pasta Dishes"
            //         }
            //     },
            //     {
            //         "Jollof Spaghetti": {
            //             "food": "Jollof Spaghetti",
            //             "id": 3,
            //             "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2FjollofSpaghetti.jpg?alt=media&token=d019f587-2a95-487e-ae17-c3e0b8d825c6",
            //             "mass_per_portion": "180g",
            //             "price": "300",
            //             "menuType": "Rice & Pasta Dishes"
            //         }
            //     }
            // ];

            data = [{
              "Fried Rice": {
                "food": "Fried Rice",
                "id": 32,
                "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2FfriedRice.jpg?alt=media&token=2df8e544-a5f0-4393-88ba-07a2aa996996",
                "mass_per_portion": "185g",
                "price": "300",
                "menuType": "Rice & Pasta Dishes"
              }
            }, {
              "Jollof Rice": {
                "food": "Jollof Rice",
                "id": 1,
                "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2FjollofRice.jpg?alt=media&token=846bbe69-8d87-4e74-8f9a-ce16dc4b792b",
                "mass_per_portion": "185g",
                "price": "300",
                "menuType": "Rice & Pasta Dishes"
              }
            }, {
              "Jollof Spaghetti": {
                "food": "Jollof Spaghetti",
                "id": 3,
                "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2FjollofSpaghetti.jpg?alt=media&token=d019f587-2a95-487e-ae17-c3e0b8d825c6",
                "mass_per_portion": "180g",
                "price": "300",
                "menuType": "Rice & Pasta Dishes"
              }
            }, {
              "Fried Plantain": {
                "food": "Fried Plantain",
                "id": 30,
                "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2FfriedPlantain.jpg?alt=media&token=6022d2a0-1ef0-46f6-b270-d4e382bebcc7",
                "mass_per_portion": "25g",
                "price": "100",
                "menuType": "Side Dishes"
              }
            }, {
              "Yam Pottage": {
                "food": "Yam Pottage",
                "id": 10,
                "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2FyamPottage.jpg?alt=media&token=1cb10fce-f70c-43df-871f-64dd4c34de79",
                "mass_per_portion": "135g",
                "price": "250",
                "menuType": "Side Dishes"
              }
            }, {
              "Sweet Potato": {
                "food": "Sweet Potato",
                "id": 4,
                "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2FsweetPotato.jpg?alt=media&token=681abe93-e038-45e5-bf1f-c0d46ff546a1",
                "mass_per_portion": "110g",
                "price": "150",
                "menuType": "Side Dishes"
              }
            }, {
              "Savoury Beans": {
                "food": "Savoury Beans",
                "id": 2,
                "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2FsavouryBeans.jpg?alt=media&token=1915718a-483e-4e8d-8c43-826233de0f80",
                "mass_per_portion": "150g",
                "price": "185",
                "menuType": "Side Dishes"
              }
            }, {
              "Yam & Egg": {
                "food": "Yam & Egg",
                "id": 10,
                "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2FyamEgg.jpg?alt=media&token=ef8109e8-f878-4275-b99f-ca72e9b8383d",
                "mass_per_portion": "150g",
                "price": "250",
                "menuType": "Side Dishes"
              }
            }, {
              "Akara": {
                "food": "Akara",
                "id": 0,
                "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2Fakara.jpg?alt=media&token=15024891-21d2-409d-8f72-a1fbad8c541e",
                "mass_per_portion": "40g",
                "price": "150",
                "menuType": "Side Dishes"
              }
            }, {
              "Oat Meal": {
                "food": "Oat Meal",
                "id": 32,
                "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2Foatmeal.jpg?alt=media&token=3c0a82b1-339d-4349-935e-b6b00bfcd771",
                "mass_per_portion": "70g",
                "price": "200",
                "menuType": "Side Dishes"
              }
            }, {
              "Sausage": {
                "food": "Sausage",
                "id": 38,
                "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2Fsausage.jpg?alt=media&token=94c4a65a-9faf-43e9-8b4b-4c27662bb442",
                "mass_per_portion": "100g",
                "price": "300",
                "menuType": "Snacks"
              }
            }, {
              "Meat Pie": {
                "food": "Meat Pie",
                "id": 32,
                "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2Fmeatpie.jpg?alt=media&token=0d58606b-8b16-4c0b-a53d-58de9231e6d5",
                "mass_per_portion": "60g",
                "price": "550",
                "menuType": "Snacks"
              }
            }, {
              "Chicken Pie": {
                "food": "Chicken Pie",
                "id": 32,
                "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2Fchickenpie.jpg?alt=media&token=fc890037-0cd2-4326-ba1c-182606c5969a",
                "mass_per_portion": "70g",
                "price": "550",
                "menuType": "Snacks"
              }
            }, {
              "Egg Roll": {
                "food": "Egg Roll",
                "id": 32,
                "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2Feggroll.jpg?alt=media&token=73079544-fa87-4808-9df1-f87d393be74c",
                "mass_per_portion": "60g",
                "price": "250",
                "menuType": "Snacks"
              }
            }, {
              "Doughnut": {
                "food": "Doughnut",
                "id": 32,
                "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2Fdoughnut.jpg?alt=media&token=d7265c0c-982b-4345-82a7-a128733f14be",
                "mass_per_portion": "45g",
                "price": "150",
                "menuType": "Snacks"
              }
            }, {
              "Eba": {
                "food": "Eba",
                "id": 32,
                "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2Feba.jpg?alt=media&token=b35e2af4-ac62-4e0a-b1e9-77021f1ba3a3",
                "mass_per_portion": "50g",
                "price": "150",
                "menuType": "Soups & Swallows"
              }
            }, {
              "Semo": {
                "food": "Semo",
                "id": 38,
                "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2Fsemo.jpg?alt=media&token=7408b37f-24a0-46a7-8a5f-4fa0e8644cca",
                "mass_per_portion": "40g",
                "price": "150",
                "menuType": "Soups & Swallows"
              }
            }, {
              "Egusi Soup": {
                "food": "Egusi Soup",
                "id": 32,
                "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2Fegusi.jpg?alt=media&token=1ae3242f-692e-4be4-a798-c7a2d4353fad",
                "mass_per_portion": "30g",
                "price": "200",
                "menuType": "Soups & Swallows"
              }
            }, {
              "Oha Soup": {
                "food": "Oha Soup",
                "id": 32,
                "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2Foha.jpg?alt=media&token=3afeb84d-2a3b-46fd-9d18-e602b577c543",
                "mass_per_portion": "60g",
                "price": "200",
                "menuType": "Soups & Swallows"
              }
            }, {
              "Okro Soup": {
                "food": "Okro Soup",
                "id": 32,
                "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2Fokro.jpg?alt=media&token=604384d7-5887-4f2a-8630-4ddeb00679e6",
                "mass_per_portion": "50g",
                "price": "200",
                "menuType": "Soups & Swallows"
              }
            }, {
              "Nsala Soup": {
                "food": "Nsala Soup",
                "id": 32,
                "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2Fnsala.jpg?alt=media&token=b5c46fc0-3d7c-43db-8240-56e9b30f65a8",
                "mass_per_portion": "50g",
                "price": "200",
                "menuType": "Soups & Swallows"
              }
            }, {
              "Chicken Casserole": {
                "food": "Chicken Casserole",
                "id": 32,
                "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2FchickenCasserole.jpg?alt=media&token=334f7f55-4786-4364-95c4-4f29a8fe6b3f",
                "mass_per_portion": "120g",
                "price": "900",
                "menuType": "Proteins"
              }
            }, {
              "Hotdog": {
                "food": "Hotdog",
                "id": 32,
                "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2Fhotdog.jpg?alt=media&token=6ace6a52-a760-4e00-9fa7-d82c613bd964",
                "mass_per_portion": "30g",
                "price": "150",
                "menuType": "Proteins"
              }
            }, {
              "Boiled Egg": {
                "food": "Boiled Egg",
                "id": 10,
                "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2FboiledEgg.jpg?alt=media&token=96c391f9-392f-4fca-bc0e-049d59583d92",
                "mass_per_portion": "30g",
                "price": "100",
                "menuType": "Proteins"
              }
            }, {
              "Fried Beef": {
                "food": "Fried Beef",
                "id": 10,
                "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2FfriedBeef.jpg?alt=media&token=c809e956-f24a-45a8-a951-09f08071819a",
                "mass_per_portion": "40g",
                "price": "200",
                "menuType": "Proteins"
              }
            }, {
              "Fried Fish": {
                "food": "Fried Fish",
                "id": 32,
                "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2FfriedFish.jpg?alt=media&token=ed1a4990-c927-490e-a31f-007e1801b3a7",
                "mass_per_portion": "40g",
                "price": "300",
                "menuType": "Proteins"
              }
            }, {
              "Bottled Water": {
                "food": "Bottled Water",
                "id": 9,
                "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2FbottledWater.jpg?alt=media&token=58101c2a-53f7-4052-93bf-3e8b2d39482e",
                "mass_per_portion": "75g",
                "price": "100",
                "menuType": "Drinks"
              }
            }, {
              "Freshyo": {
                "food": "Freshyo",
                "id": 32,
                "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2Ffreshyo.jpg?alt=media&token=0684761e-b1e0-4aea-aa7c-bcd32d8472a5",
                "mass_per_portion": "70g",
                "price": "400",
                "menuType": "Drinks"
              }
            }, {
              "Viju Choco": {
                "food": "Viju Choco",
                "id": 38,
                "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2FvijuChoco.jpg?alt=media&token=ca2b647b-211b-4d05-93ca-8577ef8360fc",
                "mass_per_portion": "75g",
                "price": "500",
                "menuType": "Drinks"
              }
            }, {
              "Zobo": {
                "food": "Zobo",
                "id": 37,
                "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2Fzobo.jpg?alt=media&token=db3a59b8-9bd2-48d5-a640-1c2e690bfecf",
                "mass_per_portion": "50g",
                "price": "300",
                "menuType": "Drinks"
              }
            }, {
              "Pineapple Juice": {
                "food": "Pineapple Juice",
                "id": 31,
                "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2Fpineapple.jpg?alt=media&token=b25299ef-ad34-4182-bc95-e29ec471881c",
                "mass_per_portion": "50g",
                "price": "300",
                "menuType": "Drinks"
              }
            }];
            _i = 0, _menuList = menuList;

          case 27:
            if (!(_i < _menuList.length)) {
              _context2.next = 46;
              break;
            }

            item = _menuList[_i];
            itemName = Object.keys(item)[0];
            itemData = item[itemName];
            dataToWrite = _defineProperty({}, itemName, itemData);
            console.log(dataToWrite); // Write data to the database

            _context2.prev = 33;
            menuGroupRef = (0, _database.ref)(_index.db, 'PAU/timetable/' + mealCategory[0] + '/' + mealLocation[0] + '/' + mealName[0] + '/');
            _context2.next = 37;
            return regeneratorRuntime.awrap((0, _database.set)(menuGroupRef, dataToWrite));

          case 37:
            console.log('Menu Group uploaded to the database');
            _context2.next = 43;
            break;

          case 40:
            _context2.prev = 40;
            _context2.t0 = _context2["catch"](33);
            console.error('Error uploading to the database', _context2.t0);

          case 43:
            _i++;
            _context2.next = 27;
            break;

          case 46:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[33, 40]]);
  }); // When the user clicks anywhere outside of the modal, close it

  $(window).click(function (event) {
    if (event.target === modal[0]) {
      modal.css("display", "none");
    }
  });
});
$('#sidebar-container').on('click', '.admin-order > li', function (e) {
  var location = $(this).data('location');
  var clickedMenuItem = $(this).text();
  console.log(clickedMenuItem);
  console.log(location);
  var dataToSend = {
    location: "PAU/Location/" + location + "/",
    clickedMenuItem: clickedMenuItem,
    dataLocation: location
  };
  var newPageURL = "/pages/Order.html?data=" + JSON.stringify(dataToSend);
  window.location.href = newPageURL;
});
var foodModal = $('#foodModal');
var cancel = $('#cancelModal');
var addFoodItem = $('#add-food-item');
addFoodItem.click(function (e) {
  foodModal.css("display", "block");
});
foodModal.find("#cancelModal").click(function (e) {
  foodModal.css("display", "none");
});
$(document).ready(function () {
  $(".food-form").submit(function (event) {
    event.preventDefault();
    var foodName = $("#food-name").val();
    var foodUnitMass = $("#food-unit-mass").val();
    var foodPrice = $("#food-price").val();
    var foodImageFile = $("#food-image")[0].files[0];

    if (foodName === "" || foodUnitMass === "" || foodPrice === "" || !foodImageFile) {
      alert("Please fill in all the fields and select an image.");
    } else {
      var UploadProcess = function UploadProcess() {
        var metaData, fileName, storageRef, UploadTask;
        return regeneratorRuntime.async(function UploadProcess$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                metaData = {
                  contentType: foodImageFile.type
                }; // Extract just the file name from the full path

                fileName = foodImageFile.name;
                storageRef = (0, _storage.ref)(_index.storage, "All-Foods/" + fileName);
                UploadTask = (0, _storage.uploadBytesResumable)(storageRef, foodImageFile, metaData);
                UploadTask.on('state_changed', function (snapshot) {
                  var progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                  console.log(progress);
                }, function (error) {
                  console.log('error: image not uploaded' + error);
                }, function () {
                  (0, _storage.getDownloadURL)(UploadTask.snapshot.ref).then(function (downloadURL) {
                    foodImage = downloadURL;
                    console.log("Food Image: " + foodImage);
                    createID();
                  });
                });

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        });
      };

      var createID = function createID() {
        var uploadRef = (0, _database.ref)(_index.db, "PAU_all_foods/");
        var foodID = [];
        (0, _database.onValue)(uploadRef, function (snapshot) {
          if (snapshot.val()) {
            var itemCount = Object.keys(snapshot.val()).length;
            foodID.push(itemCount);
            console.log(foodID);
            console.log(foodID[0]);
            AddToDatabase(foodID[0]);
            foodID.length = 0;
            console.log(foodID);
          } else {
            console.log('Could Not create ID');
          }
        });
      };

      var AddToDatabase = function AddToDatabase(foodID) {
        (0, _database.set)((0, _database.ref)(_index.db, "PAU_all_foods/" + foodName + "/"), {
          id: foodID,
          food: foodName,
          img: foodImage,
          mass_per_portion: foodUnitMass + 'g',
          price: foodPrice
        }).then(function () {
          console.log("Upload Successful");
        })["catch"](function (error) {
          console.log("Upload Error: " + error);
        });
      };

      var foodImage = '';
      UploadProcess();
      foodModal.css("display", "none");
      console.clear();
      $("input[type='text'], input[type='file'], input[type='number']").val('');
    }
  });
});
var salesDate = new Date();
var currentDate = "".concat(salesDate.getFullYear()).concat((salesDate.getMonth() + 1).toString().padStart(2, '0')).concat(salesDate.getDate().toString().padStart(2, '0'));

var readSalesReport = function readSalesReport() {
  var salesList = document.getElementById('salesData');
  (0, _database.onValue)((0, _database.ref)(_index.db, "PAU-sales-report/" + currentDate + "/"), function (snapshot) {
    var salesData = [];
    console.log(snapshot.val());

    if (snapshot.val()) {
      snapshot.forEach(function (item) {
        salesData.push(item.val());
      });
    }

    console.log(salesData);
    salesData.reverse();
    var income = document.getElementById('income');
    var order = document.getElementById('order');
    var Quantity = document.getElementById('totalQuantity');
    var totalIncome = 0;
    var totalOrder = 0;
    var totalQuantity = 0;
    salesData.forEach(function (sales) {
      totalIncome = totalIncome + parseInt(sales.price * sales.quantity);
      totalOrder++;
      totalQuantity = totalQuantity + sales.quantity;
      var salesRow = document.createElement('tr');
      salesRow.innerHTML = "\n          <td>".concat(sales.date, "</td>\n          <td>").concat(sales.name, "</td>\n          <td>").concat(sales.quantity, "</td>\n          <td>").concat(sales.timestamp, "</td>\n          <td>&#8358;").concat(sales.price * sales.quantity, ".00</td>\n          <td>").concat(sales.location, "</td>\n          <td>Moderate</td>\n          <td><button type=\"button\">\n            Edit\n          </button></td>\n      ");
      salesList.appendChild(salesRow);
    });
    income.innerHTML = '&#8358;' + totalIncome.toFixed(2);
    order.innerHTML = totalOrder;
    Quantity.innerHTML = totalQuantity;
  });
};

readSalesReport();