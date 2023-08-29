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

/***/ "./Javascript/Admin.js":
/*!*****************************!*\
  !*** ./Javascript/Admin.js ***!
  \*****************************/
/***/ (() => {

eval("// window.onload = function() {\r\n//   if (window.jQuery) {  \r\n//       // jQuery is loaded  \r\n//       alert(\"Yeah!\");\r\n//   } else {\r\n//       // jQuery is not loaded\r\n//       alert(\"Doesn't Work\");\r\n//   }\r\n// }\r\nconsole.log('Admin.js is bundled');\r\n\r\n$('.sideMenu > ul > li').click(function () {\r\n\r\n  $('.sideMenu > ul > li > ul > li').click(function () {\r\n    // remove active from already active \r\n  $(this).siblings().removeClass('active'); \r\n  // Add active to Clicked \r\n  $(this).toggleClass('active');\r\n  // If it has sub menu, open it \r\n  $(this).find('ul').slideToggle();\r\n  // Close other sub menu if any is open \r\n  $(this).siblings().find('ul').slideUp();\r\n  // remove active class of sub menu items \r\n  $(this).siblings().find('ul').find('li').removeClass('active');\r\n  });\r\n  \r\n  // remove active from already active \r\n  $(this).siblings().removeClass('active'); \r\n  // Add active to Clicked \r\n  $(this).toggleClass('active');\r\n  // If it has sub menu, open it \r\n  $(this).find('ul').slideToggle();\r\n  // Close other sub menu if any is open \r\n  $(this).siblings().find('ul').slideUp();\r\n  // remove active class of sub menu items \r\n  $(this).siblings().find('ul').find('li').removeClass('active');\r\n});\r\n\r\n// $('.sub-side-menu > li').click(function () {\r\n//   // remove active from already active \r\n//   $(this).siblings().removeClass('active');\r\n//   // $(this).siblings().find('ul').removeClass('active'); \r\n//   // Add active to Clicked \r\n//   $(this).toggleClass('active');\r\n//   // $(this).siblings('ul').toggleClass('active');\r\n//   // If it has sub menu, open it \r\n//   $(this).find('ul').slideToggle();\r\n//   // Close other sub menu if any is open \r\n//   $(this).siblings().find('ul').find('li').slideToggle();\r\n//   // Close other sub menu if any is open \r\n//   $(this).siblings().find('ul').slideUp();\r\n//   // remove active class of sub menu items \r\n//   $(this).siblings().find('ul').find('li').removeClass('active');\r\n// });\r\n\r\n\r\n\r\n// $(document).ready(function(){\r\n//   $('').click(function (){\r\n//     // remove active from already active \r\n//     $(this).siblings().removeClass('active');\r\n//     // Add active to Clicked \r\n//     $(this).toggleClass('active');\r\n//     // If it has sub menu, open it \r\n//     $(this).find('ul').slideToggle();\r\n//   });\r\n// });\n\n//# sourceURL=webpack://piatron-afc/./Javascript/Admin.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./Javascript/Admin.js"]();
/******/ 	
/******/ })()
;