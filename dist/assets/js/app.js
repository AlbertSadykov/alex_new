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

eval("var image = document.getElementsByClassName('machine');\r\nnew simpleParallax(image, {\r\n\tdelay: .6,\r\n\ttransition: 'cubic-bezier(0,0,0,3)'\r\n});\r\n\r\nvar image = document.getElementsByClassName('thread');\r\nnew simpleParallax(image, {\r\n  delay: .2,\r\n\ttransition: 'cubic-bezier(0,0,0,5)'\r\n});\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', function() {\r\n  window.addEventListener('scroll', function() {\r\n    var layersCaption = document.querySelector('.layers__caption');\r\n    var layersCaptionOffsetTop = layersCaption.offsetTop;\r\n    var scrollPosition = window.scrollY;\r\n\r\n    if (scrollPosition > layersCaptionOffsetTop) {\r\n      layersCaption.classList.add('hidden');\r\n    } else {\r\n      layersCaption.classList.remove('hidden');\r\n    }\r\n  });\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/parallax.js?");

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