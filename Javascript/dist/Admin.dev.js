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
    var errors, menuList, fetchData, riceList, sideList, swallowList, proteinList, drinksList, data, _i, _data, item, itemName, itemData, dataToWrite, menuGroupRef;

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
            console.log('PAU/timetable/' + mealCategory[0] + '/' + mealLocation[0] + '/' + mealName[0] + '/');
            data = [{
              "Jollof Rice": {
                "food": "Jollof Rice",
                "id": "1",
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
            }];
            _i = 0, _data = data;

          case 25:
            if (!(_i < _data.length)) {
              _context2.next = 44;
              break;
            }

            item = _data[_i];
            itemName = Object.keys(item)[0];
            itemData = item[itemName];
            dataToWrite = _defineProperty({}, itemName, itemData);
            console.log(dataToWrite); // Write data to the database

            _context2.prev = 31;
            menuGroupRef = (0, _database.ref)(_index.db, 'PAU/timetable/' + mealCategory[0] + '/' + mealLocation[0] + '/' + mealName[0] + '/');
            _context2.next = 35;
            return regeneratorRuntime.awrap((0, _database.set)(menuGroupRef, dataToWrite));

          case 35:
            console.log('Item uploaded to the database');
            _context2.next = 41;
            break;

          case 38:
            _context2.prev = 38;
            _context2.t0 = _context2["catch"](31);
            console.error('Error uploading to the database', _context2.t0);

          case 41:
            _i++;
            _context2.next = 25;
            break;

          case 44:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[31, 38]]);
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
      $(".food-form").reset();
    }
  });
});