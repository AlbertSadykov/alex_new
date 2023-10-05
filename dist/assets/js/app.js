/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("console.log('file 1');\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/***/ (function() {

eval("console.log('file 2');\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/file2.js?");

/***/ }),

/***/ "./src/assets/js/modal.js":
/*!********************************!*\
  !*** ./src/assets/js/modal.js ***!
  \********************************/
/***/ (function() {

eval("\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/modal.js?");

/***/ }),

/***/ "./src/assets/js/parallax.js":
/*!***********************************!*\
  !*** ./src/assets/js/parallax.js ***!
  \***********************************/
/***/ (function() {

eval("let lastScrollPosition = window.pageYOffset;\r\n\r\nfunction handleScroll() {\r\n  const currentScrollPosition = window.pageYOffset;\r\n  const header = document.querySelector('.layer__header');\r\n\r\n  if (currentScrollPosition > lastScrollPosition) {\r\n    // Скролл вниз\r\n    header.classList.add('hidden');\r\n  } else {\r\n    // Скролл вверх\r\n    header.classList.remove('hidden');\r\n  }\r\n\r\n  lastScrollPosition = currentScrollPosition;\r\n}\r\n\r\nwindow.addEventListener('scroll', handleScroll);\r\n\r\ndocument.addEventListener('DOMContentLoaded', function() {\r\n  var machine = document.querySelector('.machine');\r\n  \r\n  window.addEventListener('scroll', function() {\r\n    var scrollY = window.scrollY;\r\n    var translateY = Math.min(scrollY, 200);\r\n    var backgroundPositionY = Math.max(280 - translateY, 0); // Убедимся, что значение не становится отрицательным\r\n    machine.style.backgroundPositionY = backgroundPositionY + 'px';\r\n  });\r\n});\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', function() {\r\n  var machine = document.querySelector('.machine');\r\n  var gradient = document.querySelector('.gradient');\r\n  \r\n  window.addEventListener('scroll', function() {\r\n    var scrollY = window.scrollY;\r\n    var translateY = Math.min(scrollY, 100);\r\n    machine.style.backgroundPosition = '0 ' + (280 - translateY) + 'px';\r\n\r\n    if (scrollY >= 100) {\r\n      gradient.style.opacity = '1';\r\n    } else {\r\n      gradient.style.opacity = '0';\r\n    }\r\n  });\r\n});\r\n\r\ndocument.addEventListener('DOMContentLoaded', function() {\r\n  var thread = document.querySelector('.thread');\r\n  \r\n  window.addEventListener('scroll', function() {\r\n    var scrollY = window.scrollY;\r\n    var translateY = Math.min(scrollY, 100);\r\n    thread.style.transform = 'translateY(' + (-translateY) + 'px)';\r\n  });\r\n});\r\n\r\n\r\n\r\n\r\n// скролл cta\r\ndocument.addEventListener('DOMContentLoaded', function() {\r\n  var sectionCta = document.querySelector('.section_cta');\r\n\r\n  window.addEventListener('scroll', function() {\r\n    var scrollY = window.scrollY;\r\n    var sectionCtaOffset = sectionCta.offsetTop;\r\n    var windowHeight = window.innerHeight;\r\n\r\n    if (scrollY > sectionCtaOffset - windowHeight + 100) {\r\n      sectionCta.style.opacity = '1';\r\n      sectionCta.style.transform = 'translateY(0)';\r\n    }\r\n  });\r\n});\r\n\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/parallax.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	__webpack_modules__["./src/assets/js/file2.js"]();
/******/ 	__webpack_modules__["./src/assets/js/modal.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/parallax.js"]();
/******/ 	
/******/ })()
;