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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _heading_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heading.js */ \"./src/heading.js\");\n\n\nlet currentHeading = \"Home\"\n;(0,_heading_js__WEBPACK_IMPORTED_MODULE_0__.createHeading)(currentHeading)\n\nconst navBarButtons = document.querySelectorAll(\".nav-button\")\nnavBarButtons.forEach(button => button.addEventListener('click', () => {\n    ;(0,_heading_js__WEBPACK_IMPORTED_MODULE_0__.changeHeading)(button.textContent);\n    currentHeading = button.textContent;\n}))\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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