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

/***/ "./src/assets/js/index.js":
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
/***/ (function() {

eval("// карусель изображений в материалах\r\nfunction setupGallery(carousel) {\r\n  const prevButton = carousel.querySelector('.prev');\r\n  const nextButton = carousel.querySelector('.next');\r\n  const imgNav = carousel.querySelector('.img__nav');\r\n  const imgThumbs = imgNav.querySelectorAll('.img__thumb');\r\n  let currentIndex = 0;\r\n\r\n  function showImage(index) {\r\n    imgThumbs.forEach((img, i) => {\r\n      img.classList.remove('active__image', 'prev', 'next');\r\n      img.style.display = 'none';\r\n      if (i === index) {\r\n        img.style.display = 'block';\r\n        img.classList.add('active__image');\r\n      } else if (i === (index + 1) % imgThumbs.length) {\r\n        img.classList.add('next');\r\n      } else if (i === (index - 1 + imgThumbs.length) % imgThumbs.length) {\r\n        img.classList.add('prev');\r\n      }\r\n    });\r\n  }\r\n\r\n  prevButton.addEventListener('click', function() {\r\n    currentIndex = (currentIndex === 0) ? imgThumbs.length - 1 : currentIndex - 1;\r\n    showImage(currentIndex);\r\n  });\r\n\r\n  nextButton.addEventListener('click', function() {\r\n    currentIndex = (currentIndex === imgThumbs.length - 1) ? 0 : currentIndex + 1;\r\n    showImage(currentIndex);\r\n  });\r\n\r\n  let startX = 0;\r\n  let currentX = 0;\r\n\r\n  imgNav.addEventListener('touchstart', function(e) {\r\n    startX = e.touches[0].clientX;\r\n  });\r\n\r\n  imgNav.addEventListener('touchmove', function(e) {\r\n    currentX = e.touches[0].clientX;\r\n  });\r\n\r\n  imgNav.addEventListener('touchend', function() {\r\n    if (currentX < startX) {\r\n      nextButton.click();\r\n    } else if (currentX > startX) {\r\n      prevButton.click();\r\n    }\r\n  });\r\n\r\n  // Добавляем CSS-переходы\r\n  imgThumbs.forEach(img => {\r\n    img.style.transition = 'opacity 0.5s';\r\n  });\r\n\r\n  showImage(currentIndex);\r\n}\r\n\r\ndocument.addEventListener('DOMContentLoaded', function() {\r\n  const carousels = document.querySelectorAll('.materials__carousel');\r\n  carousels.forEach(carousel => {\r\n    setupGallery(carousel);\r\n  });\r\n});\r\n\r\n// карусель изображений в материалах\r\n\r\n\r\n\r\n// одинаковая высота блоков\r\nfunction setMaxHeight() {\r\n  // Получаем все элементы .about__item-content\r\n  const itemContents = document.querySelectorAll('.about__item-content');\r\n\r\n  // Инициализируем переменную для хранения максимальной высоты\r\n  let maxHeight = 0;\r\n\r\n  // Проходимся по всем элементам и находим максимальную высоту\r\n  itemContents.forEach(itemContent => {\r\n    itemContent.style.height = 'auto'; // Сначала сбрасываем высоту до автоматического расчета\r\n    const height = itemContent.offsetHeight;\r\n    if (height > maxHeight) {\r\n      maxHeight = height;\r\n    }\r\n  });\r\n\r\n  // Устанавливаем максимальную высоту для всех элементов .about__item-content\r\n  itemContents.forEach(itemContent => {\r\n    itemContent.style.height = `${maxHeight}px`;\r\n  });\r\n}\r\n\r\n// Вызываем функцию при загрузке страницы и при изменении размеров окна\r\nwindow.addEventListener('load', setMaxHeight);\r\nwindow.addEventListener('resize', setMaxHeight);\r\n\r\n// одинаковая высота блоков\r\n\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/index.js?");

/***/ }),

/***/ "./src/assets/js/matherial.js":
/*!************************************!*\
  !*** ./src/assets/js/matherial.js ***!
  \************************************/
/***/ (function() {

eval("$(document).ready(function() {\r\n  $('.materials__item').hide(); // Скрываем все materials__item\r\n\r\n  $('#' + $('.materials__names li.math__active').data('target')).fadeIn(); // Показываем первый элемент\r\n\r\n  $('.materials__names li').click(function() {\r\n    var targetItemId = $(this).data('target');\r\n\r\n    $('.materials__names li').removeClass('math__active');\r\n    $(this).addClass('math__active');\r\n\r\n    var $targetItem = $('#' + targetItemId);\r\n\r\n    // Плавно скрываем остальные элементы и затем показываем целевой элемент\r\n    $('.materials__item').not($targetItem).fadeOut(300);\r\n    $targetItem.delay(300).fadeIn(300);\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/matherial.js?");

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

eval("let lastScrollPosition = window.pageYOffset;\r\n\r\nfunction handleScroll() {\r\n  const currentScrollPosition = window.pageYOffset;\r\n  const header = document.querySelector('.layer__header');\r\n\r\n  if (currentScrollPosition > lastScrollPosition) {\r\n    // Скролл вниз\r\n    header.classList.add('hidden');\r\n  } else {\r\n    // Скролл вверх\r\n    if (currentScrollPosition === 0) {\r\n      header.classList.remove('hidden');\r\n    }\r\n  }\r\n\r\n  lastScrollPosition = currentScrollPosition;\r\n}\r\n\r\nwindow.addEventListener('scroll', handleScroll);\r\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', function() {\r\n  var machine = document.querySelector('.machine');\r\n  var gradient = document.querySelector('.gradient');\r\n  \r\n  window.addEventListener('scroll', function() {\r\n    var scrollY = window.scrollY;\r\n    var translateY = Math.min(scrollY, 100);\r\n    machine.style.backgroundPosition = '0 ' + (280 - translateY) + 'px';\r\n\r\n    if (scrollY >= 50) {\r\n      gradient.style.opacity = '1';\r\n    } else {\r\n      gradient.style.opacity = '0';\r\n    }\r\n  });\r\n});\r\n\r\ndocument.addEventListener('DOMContentLoaded', function() {\r\n  var thread = document.querySelector('.thread');\r\n  \r\n  window.addEventListener('scroll', function() {\r\n    var scrollY = window.scrollY;\r\n    var translateY = Math.min(scrollY, 100);\r\n    thread.style.transform = 'translateY(' + (-translateY) + 'px)';\r\n  });\r\n});\r\n\r\n\r\n\r\n\r\n// скролл cta\r\ndocument.addEventListener('DOMContentLoaded', function() {\r\n  var ctaSection = document.querySelector('.section_cta');\r\n  var atTop = true; // Флаг для отслеживания, находится ли пользователь в самом верху страницы\r\n\r\n  var observer = new IntersectionObserver(function(entries) {\r\n    entries.forEach(function(entry) {\r\n      if (entry.isIntersecting) {\r\n        ctaSection.style.marginTop = '-280px';\r\n        atTop = false; // Пользователь не находится в самом верху страницы\r\n      } else {\r\n        if (atTop) {\r\n          ctaSection.style.marginTop = '0';\r\n        }\r\n      }\r\n    });\r\n  }, { threshold: [0.5] }); // Здесь threshold изменен на [1], чтобы обработчик сработал, когда элемент полностью виден\r\n\r\n  observer.observe(ctaSection);\r\n\r\n  // Обработчик события для отслеживания прокрутки страницы\r\n  window.addEventListener('scroll', function() {\r\n    if (window.scrollY === 0) {\r\n      atTop = true; // Пользователь находится в самом верху страницы\r\n      ctaSection.style.marginTop = '0'; // Возвращаем на исходное положение\r\n    }\r\n  });\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/parallax.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	__webpack_modules__["./src/assets/js/file2.js"]();
/******/ 	__webpack_modules__["./src/assets/js/index.js"]();
/******/ 	__webpack_modules__["./src/assets/js/matherial.js"]();
/******/ 	__webpack_modules__["./src/assets/js/modal.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/parallax.js"]();
/******/ 	
/******/ })()
;