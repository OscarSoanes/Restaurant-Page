/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/content/contact.js":
/*!********************************!*\
  !*** ./src/content/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setAsContact\": () => (/* binding */ setAsContact)\n/* harmony export */ });\nfunction setAsContact() {\n    const container = document.getElementById(\"content\")\n    const mainEl = document.querySelector(\"main\");\n\n    const contactContainer = document.createElement(\"div\");\n    contactContainer.classList.add(\"contact\");\n\n    const telephone = document.createElement(\"p\");\n    telephone.textContent = \"07123456789\";\n\n    const address = document.createElement(\"p\");\n    address.textContent = \"Buckingham Palace, London SW1A 1AA\";\n\n    const map = document.createElement(\"img\");\n    map.src = \"assets/map.png\";\n    map.alt = \"A map of where Dragon Roll is located.\"   \n    \n    contactContainer.append(telephone, address, map);\n    mainEl.appendChild(contactContainer);\n    container.appendChild(mainEl);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/content/contact.js?");

/***/ }),

/***/ "./src/content/home.js":
/*!*****************************!*\
  !*** ./src/content/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setAsHome\": () => (/* binding */ setAsHome)\n/* harmony export */ });\nfunction setAsHome() {\n    const container = document.getElementById(\"content\")\n    const mainEl = document.querySelector(\"main\");\n    const slogan = document.createElement(\"p\");\n    slogan.textContent = \"Fresh fish, expertly rolled\";\n\n    const date = document.createElement(\"p\");\n    date.textContent = \"Established in 2023\";\n\n    const img = document.createElement(\"img\");\n    img.src = \"assets/home-sushi.jpg\";\n    img.alt = \"Sushi\";\n\n    const orderMsg = document.createElement(\"p\");\n    orderMsg.textContent = \"Order online or visit us!\"\n\n    mainEl.append(slogan, date, img, orderMsg)\n    container.appendChild(mainEl);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/content/home.js?");

/***/ }),

/***/ "./src/content/menu.js":
/*!*****************************!*\
  !*** ./src/content/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setAsMenu\": () => (/* binding */ setAsMenu)\n/* harmony export */ });\nfunction setAsMenu() {\n    addElementToMain(\"dragon-roll.jpg\", \"Dragon Roll Sushi\", \"Dragon Roll Sushi\", \"Panko prawn and cucumber roll with grilled eel top and Teriyaki, sweet spicy sauce and ginger.\");\n    addElementToMain(\"cucumb-avacado-maki.jpg\", \"Cucumber Avacado Maki\", \"Cucumber Avacado Maki\", \"Sushi roll with avocado cucumber and sesame.\");\n    addElementToMain(\"salmon-maki.jpg\", \"California Maki\", \"California Maki\", \"Sushi roll with crabmeat, avocado, cucumber and tobiko.\");\n    addElementToMain(\"salmon-sashimi.jpg\", \"Salmon Sashimi (Small)\", \"Salmon Sashimi (Small)\", \"7 piece Salmon sashimi\");\n    addElementToMain(\"salmon-sashimi-xl.jpg\", \"Salmon Sashimi (Large)\", \"Salmon Sashimi (Large)\", \"15 piece Salmon sashimi\");\n    addElementToMain(\"salmon-tuna-sashimi.jpg\", \"Salmon Tuna Sashimi\", \"Salmon TUna Sashimi\", \"4 piece salmon sashimi and 3 piece tuna sashimi\");\n    addElementToMain(\"sushi-delight.jpg\", \"Salmon Delight Roll Box\", \"Salmon Delight Roll Box\", \"Red cabbage, avo cucumber roll, topped with fresh salmon, wasabi mayo, furikage and tobiko.\");\n    addElementToMain(\"tuna-roll.jpg\", \"Tuna Delight Roll Box\", \"Tune Delight Roll Box\", \"Red cabbage, avo cucumber roll, topped with fresh salmon, wasabi mayo, furikage and tobiko.\");\n}\n\nfunction addElementToMain(imgSrc, imgAlt, productName, productDescription) {\n    const mainEl = document.querySelector(\"main\");\n    const productContainer = document.createElement(\"div\");\n    productContainer.classList.add(\"product\");\n\n    const productImgEl = document.createElement(\"img\");\n    const productNameEl = document.createElement(\"p\");\n    const productDescEl = document.createElement(\"p\");\n    productDescEl.classList.add(\"small\");\n\n    productImgEl.src = `assets/${imgSrc}`;\n    productImgEl.alt = imgAlt;\n\n    productNameEl.textContent = productName;\n    productDescEl.textContent = productDescription;\n\n    productContainer.append(productImgEl, productNameEl, productDescEl);\n    mainEl.appendChild(productContainer);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/content/menu.js?");

/***/ }),

/***/ "./src/heading.js":
/*!************************!*\
  !*** ./src/heading.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeHeading\": () => (/* binding */ changeHeading),\n/* harmony export */   \"createHeading\": () => (/* binding */ createHeading)\n/* harmony export */ });\nfunction createHeading(index) {\n    const container = document.getElementById(\"content\");\n    const headerEl = document.createElement(\"header\");\n    const logo = document.createElement(\"h1\");\n    logo.textContent = \"Dragon Roll\";\n\n    const navbar = document.createElement(\"nav\");\n    const navbarTextEl = [\"Home\", \"Menu\", \"Contact\"];\n\n    navbarTextEl.forEach(element => {\n        const button = document.createElement(\"button\");\n        button.type = \"button\";\n        button.classList.add(\"nav-button\");\n        button.textContent = element;\n\n        if (index === element) {\n            button.setAttribute(\"id\", \"selected\");\n        }\n\n        navbar.appendChild(button);\n    });\n\n    headerEl.append(logo, navbar);\n    container.appendChild(headerEl);\n}\n\nfunction changeHeading (nav2Text) {\n    const selected = document.getElementById(\"selected\");\n    const changeTo = document.querySelectorAll(\".nav-button\");\n\n    changeTo.forEach(element => {\n        console.log(nav2Text, element.textContent);\n        if (element.textContent === nav2Text) {\n            selected.removeAttribute(\"id\");\n            element.setAttribute(\"id\", \"selected\");\n        }\n    })\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/heading.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _heading_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heading.js */ \"./src/heading.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ \"./src/main.js\");\n\n\n\nlet currentHeading = \"Home\"\n;(0,_heading_js__WEBPACK_IMPORTED_MODULE_0__.createHeading)(currentHeading)\n;(0,_main_js__WEBPACK_IMPORTED_MODULE_1__.createBody)()\n\nconst navBarButtons = document.querySelectorAll(\".nav-button\")\nnavBarButtons.forEach(button => button.addEventListener('click', () => {\n    ;(0,_heading_js__WEBPACK_IMPORTED_MODULE_0__.changeHeading)(button.textContent);\n    (0,_main_js__WEBPACK_IMPORTED_MODULE_1__.changeBody)(button.textContent);\n    currentHeading = button.textContent;\n}))\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeBody\": () => (/* binding */ changeBody),\n/* harmony export */   \"createBody\": () => (/* binding */ createBody)\n/* harmony export */ });\n/* harmony import */ var _content_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content/home.js */ \"./src/content/home.js\");\n/* harmony import */ var _content_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content/menu.js */ \"./src/content/menu.js\");\n/* harmony import */ var _content_contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content/contact.js */ \"./src/content/contact.js\");\n\n\n\n\nfunction createBody() {\n    const container = document.getElementById(\"content\");\n    const mainEl = document.createElement(\"main\");\n    container.appendChild(mainEl);\n    (0,_content_home_js__WEBPACK_IMPORTED_MODULE_0__.setAsHome)();\n}\n\nfunction changeBody(changeTo) {\n    const empty = (parent) => {\n        while (parent.firstChild) {\n        parent.removeChild(parent.firstChild);\n        }\n    };\n    const mainEl = document.querySelector(\"main\");\n    empty(mainEl);\n\n    if (changeTo === \"Home\") {\n        (0,_content_home_js__WEBPACK_IMPORTED_MODULE_0__.setAsHome)();\n    } else if (changeTo === \"Menu\") {\n        (0,_content_menu_js__WEBPACK_IMPORTED_MODULE_1__.setAsMenu)();\n    } else {\n        (0,_content_contact_js__WEBPACK_IMPORTED_MODULE_2__.setAsContact)();\n    }\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;