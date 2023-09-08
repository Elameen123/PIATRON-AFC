/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Javascript/configure.js":
/*!*********************************!*\
  !*** ./Javascript/configure.js ***!
  \*********************************/
/***/ (() => {

eval("// alert(\"Script is working properly\")\r\n// console.log(\"Script is working properly\");\r\n\r\nconsole.log('configure.js is bundled');\r\n  // Get the modal\r\nvar modal = document.getElementById(\"myModal\");\r\n\r\n// Get the button that opens the modal\r\nvar btn = document.getElementById(\"add-menu-group\");\r\n\r\nconst menuname = document.getElementById(\"menuName\");\r\n\r\nconst form  = document.querySelector(\"form\");\r\n\r\nconst nameError  = document.getElementById(\"nameError\");\r\n\r\nconst menuList = ['Rice & Pasta Dishes', 'Side Dishes', 'Soups & Swallows', 'Proteins', 'Drinks']\r\n\r\n// Get the <span> element that closes the modal\r\nvar span = document.getElementsByClassName(\"close-menu-group\")[0];\r\n\r\n// When the user clicks on the button, open the modal\r\nbtn.onclick = function() {\r\n  modal.style.display = \"block\";\r\n  \r\n}\r\n\r\n// When the user clicks on <span> (x), close the modal\r\nspan.onclick = function() {\r\n  modal.style.display = \"none\";\r\n}\r\n\r\nform.addEventListener('submit',  function(e){\r\n\r\n  // Form Validation for the Menu Group Name \r\n  const errors = [];\r\n\r\n  if (menuname.value.length < 4){\r\n    errors.push (\"Menu Group Name must be at least 4 characters\")\r\n  }\r\n\r\n  if (menuname.value.length === 0 || menuname.value.trim() === \"\"){\r\n    errors.push(\"Menu Group Name required\")\r\n  }\r\n\r\n  if (errors.length > 0) {\r\n    e.preventDefault();\r\n    nameError.toggleAttribute('hidden')\r\n    nameError.innerHTML = errors.join(', ');\r\n  }\r\n\r\n  //Form Validation for Checkboxes\r\nvar rice = document.getElementsByName('rice');\r\nvar side = document.getElementsByName('side');\r\nvar swallow = document.getElementsByName('swallow');\r\nvar protein = document.getElementsByName('protein');\r\nvar drinks = document.getElementsByName('drinks');\r\n\r\nconsole.log(rice);\r\n\r\n    const menuListData = [];\r\n\r\n  var riceList = [];\r\n\r\n  var sideList = [];\r\n\r\n  var swallowList = [];\r\n\r\n  var proteinList = [];\r\n\r\n  var drinksList = [];\r\n\r\n  for (var i = 0; i < rice.length; i++) {\r\n    if (rice[i].checked === true) {\r\n      riceList.push(rice[i].value);\r\n    }\r\n  }\r\n\r\n  for (var i = 0; i < side.length; i++) {\r\n    if (side[i].checked === true) {\r\n      sideList.push(side[i].value);\r\n    }\r\n  }\r\n\r\n  for (var i = 0; i < swallow.length; i++) {\r\n    if (swallow[i].checked === true) {\r\n      swallowList.push(swallow[i].value);\r\n    }\r\n  }\r\n\r\n  for (var i = 0; i < protein.length; i++) {\r\n    if (protein[i].checked === true) {\r\n      proteinList.push(protein[i].value);\r\n    }\r\n  }\r\n\r\n  for (var i = 0; i < drinks.length; i++) {\r\n    if (drinks[i].checked === true) {\r\n      drinksList.push(drinks[i].value);\r\n    }\r\n  }\r\n\r\n  console.log(riceList);\r\n\r\n  menuListData.push(riceList);\r\n  menuListData.push(sideList);\r\n  menuListData.push(swallowList);\r\n  menuListData.push(proteinList);\r\n  menuListData.push(drinksList);\r\n\r\n  console.log(menuListData);\r\n\r\n  const groupList = [];\r\n\r\n  for (j = 0; j < menuList.length; j++) {\r\n    lists = {name:menuList[j], data:menuListData[j]}\r\n\r\n    groupList.push(lists);\r\n  }\r\n\r\n  const newMenuGroup = {name: menuname.value,\r\n  item: groupList}\r\n\r\n  console.log(newMenuGroup);\r\n\r\n  // Storing all formed New Menu Group Objects \r\n  Groups = [];\r\n  Groups.push(newMenuGroup);\r\n\r\n  window.sessionStorage.setItem('Groups', JSON.stringify(Groups));\r\n\r\n  // Clearing all Arrays\r\n  sideList.length = 0;\r\n  riceList.length = 0;\r\n  proteinList.length = 0;\r\n  drinksList.length = 0;\r\n  swallowList.length = 0;\r\n  menuListData.length = 0;\r\n  groupList.length = 0;\r\n\r\n  // Clearing all Objects\r\n  newMenuGroup = {};\r\n  lists = {};\r\n\r\n});\r\n\r\n// When the user clicks anywhere outside of the modal, close it\r\nwindow.onclick = function(event) {\r\n  if (event.target == modal) {\r\n    modal.style.display = \"none\";\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://piatron-afc/./Javascript/configure.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./Javascript/configure.js"]();
/******/ 	
/******/ })()
;