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

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Data = [\r\n    {\r\n    key : 'cb4972b5f850e6de34f41d1f3ff1405b'\r\n    \r\n},\r\n{\r\n    UnsplashData: 'LJ_7Dd0rvTga70cFbbx8ziJVs0ipRPK8sZLPKQOuO1g'\r\n}\r\n]\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);\r\n\n\n//# sourceURL=webpack://04.modern-javascript/./src/config.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getSearchfieldInput\": () => (/* binding */ getSearchfieldInput),\n/* harmony export */   \"getSunriseTime\": () => (/* binding */ getSunriseTime),\n/* harmony export */   \"getSunsetTime\": () => (/* binding */ getSunsetTime)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/config.js\");\n/* harmony import */ var _modules_cardcreate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cardcreate.js */ \"./src/modules/cardcreate.js\");\n//import from config.js\r\n\r\n\r\n\r\nconsole.log(\"hello Webpack\")\r\nconst fetchImage = () => {\r\n    fetch(\"https://api.unsplash.com/search/photos?query=\"\r\n        + getSearchfieldInput() + \r\n        \"&client_id=\" + _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][1].UnsplashData)\r\n        .then(response => response.json())\r\n        .then(CreateImgOfCity);\r\n}\r\n\r\nconst getSearchfieldInput = () => {\r\n    //get value of inputfield\r\n    const searchField = document.getElementById(\"searchfield\");\r\n    const searchFieldInput = searchField.value;\r\n    return searchFieldInput;\r\n}\r\n\r\nconst CreateImgOfCity = (image) =>{\r\n    //select body for background change\r\n    const body = document.querySelector(\"body\");\r\n    let background = image.results[1].urls.raw;\r\n    body.style.backgroundImage = \"url(\" + background + \")\";\r\n}\r\n\r\nconst fetchData = (cityInput) => {\r\n    //fetch api + value of input field + metric + api key\r\n    //console log this info\r\n    // console.log(lonAndLat);\r\n    // get longitude from first api and stor in variable\r\n    fetch(\"http://api.openweathermap.org/data/2.5/weather?q=\" + cityInput + \"&appid=\" + _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][0].key + \"&units=metric\")\r\n    .then(response => response.json())\r\n    .then(data => {\r\n        //store data from fetch inside a variable\r\n        const firstApi = data;\r\n        fetchWeatherdata(firstApi);\r\n        \r\n        return firstApi;\r\n    });\r\n    \r\n}\r\n\r\nconst fetchWeatherdata = (firstApi) => {\r\n    \r\n    //get Longitude from first api and store in variable\r\n    const lon = firstApi.coord.lon;\r\n    //get latitude from first api and store in variable\r\n    const lat = firstApi.coord.lat;\r\n\r\n    fetch(\"https://api.openweathermap.org/data/2.5/onecall?lat=\" + lat + \"&lon=\" + lon + \"&exclude=&appid=\" + _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][0].key + \"&units=metric\")\r\n    .then(response => response.json())\r\n    .then(info => {\r\n        let weatherInfo = info;\r\n        const days = weatherInfo.daily;\r\n        getWeekDaysInOrder(days, firstApi); \r\n    });\r\n}\r\n//display the data fetched\r\nconst displayfetchData = (event) => {\r\n    //prevent default\r\n    event.preventDefault();\r\n    const cityInput = getSearchfieldInput();\r\n    fetchImage(cityInput);\r\n    fetchData(cityInput);\r\n    \r\n}\r\n\r\n\r\nconst getWeekDaysInOrder = (days, firstApi) => {\r\n    //array of weekdays\r\n    const weekdays = [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"];\r\n    //d = date\r\n    let d = new Date();\r\n    // n = date in number 0->6\r\n    let n = d.getDay();\r\n    for(let i = 0; i < 5 ; i++){\r\n        let x = (n+i) % weekdays.length;\r\n        let weekday = weekdays[x];\r\n        (0,_modules_cardcreate_js__WEBPACK_IMPORTED_MODULE_1__.cardCreater)(days[i],weekday, firstApi);\r\n    }\r\n\r\n}\r\n\r\nconst getSunriseTime = (sunriseOffset) => {\r\n    \r\n    // Create a new JavaScript Date object based on the timestamp\r\n    // multiplied by 1000 so that the argument is in milliseconds, not seconds.\r\n    let date = new Date(sunriseOffset * 1000);\r\n    // Hours part from the timestamp\r\n    let hours = date.getHours();\r\n    // Minutes part from the timestamp\r\n    let minutes = \"0\" + date.getMinutes();\r\n    // Seconds part from the timestamp\r\n    //let seconds = \"0\" + date.getSeconds();\r\n\r\n    // Will display time in 10:30:23 format\r\n    let formattedTime = hours + ':' + minutes.substr(-2);\r\n    return formattedTime;\r\n}\r\n\r\n\r\nconst getSunsetTime = (sunsetOffset) =>{\r\n    // Create a new JavaScript Date object based on the timestamp\r\n    // multiplied by 1000 so that the argument is in milliseconds, not seconds.\r\n    let date = new Date(sunsetOffset * 1000);\r\n    // Hours part from the timestamp\r\n    let hours = date.getHours();\r\n    // Minutes part from the timestamp\r\n    let minutes = \"0\" + date.getMinutes();\r\n    // Seconds part from the timestamp\r\n    //let seconds = \"0\" + date.getSeconds();\r\n    // Will display time in 10:30 format\r\n    let formattedTime = hours + ':' + minutes.substr(-2)\r\n    return formattedTime;\r\n}\r\n\r\n//addEventListener on click use event\r\ndocument.querySelector(\"button\").addEventListener('click', displayfetchData);\r\n\r\n//event at Enter\r\ndocument.getElementById(\"searchfield\").addEventListener(\"keyup\", function (KeyboardEvent) {\r\n    if (KeyboardEvent === 13) {\r\n        displayfetchData();\r\n        };\r\n    })\n\n//# sourceURL=webpack://04.modern-javascript/./src/index.js?");

/***/ }),

/***/ "./src/modules/cardcreate.js":
/*!***********************************!*\
  !*** ./src/modules/cardcreate.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cardCreater\": () => (/* binding */ cardCreater)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n\r\n\r\n\r\n\r\nconst cardCreater = (day, weekday, firstApi) => {\r\n    \r\n    //get section\r\n    const section = document.querySelector(\"section\");\r\n\r\n    const newCard = document.createElement(\"article\");\r\n    newCard.classList.add(\"card\");\r\n    section.prepend(newCard);\r\n\r\n    //create cardTitle\r\n    const cardTitle = document.createElement(\"h2\");\r\n    cardTitle.classList.add('cardTitle');\r\n    cardTitle.innerText = \"The weather in\" + \" \" + (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.getSearchfieldInput)();\r\n    newCard.appendChild(cardTitle);\r\n\r\n\r\n    //adding days to card\r\n    const dayTitle = document.createElement(\"h2\");\r\n    dayTitle.innerText = \"on\" + \" \" + weekday + \" is\";\r\n    newCard.appendChild(dayTitle);\r\n\r\n    //icon + description div\r\n    const iconHolder = document.createElement(\"div\");\r\n    iconHolder.classList.add(\"iconholder\");\r\n    newCard.appendChild(iconHolder);\r\n\r\n\r\n    //card icon\r\n    const icon = document.createElement(\"img\");\r\n    icon.src = \"http://openweathermap.org/img/wn/\" + day.weather[0].icon + \"@2x.png\";\r\n    iconHolder.appendChild(icon);\r\n\r\n    //weather description\r\n    const description = document.createElement(\"p\");\r\n    description.innerText = day.weather[0].description;\r\n    iconHolder.appendChild(description);\r\n\r\n    //container for text containers\r\n    const textContainer = document.createElement(\"div\");\r\n    textContainer.classList.add(\"textcontainer\");\r\n    newCard.appendChild(textContainer);\r\n\r\n    // text container left = temp + description\r\n    const textContainerLeft = document.createElement(\"div\");\r\n    textContainerLeft.classList.add(\"textcontainerleft\");\r\n    textContainer.appendChild(textContainerLeft);\r\n\r\n    //create h3 for the temprature\r\n    const temp = document.createElement(\"h1\");\r\n    temp.innerText = day.temp.day + \"°C\";\r\n    textContainerLeft.appendChild(temp);\r\n\r\n    //min max temp\r\n    const feelsLike = document.createElement(\"span\");\r\n    feelsLike.innerText = \"Feels like:\" + \" \" + day.feels_like.day + \"°C\";\r\n    textContainerLeft.appendChild(feelsLike);\r\n\r\n    //create textcontainer right for spans\r\n    const textContainerRight = document.createElement(\"div\");\r\n    textContainerRight.classList.add(\"textcontainerright\");\r\n    textContainer.appendChild(textContainerRight);\r\n    \r\n    //create sunrise  \r\n    let sunrise = day.sunrise;\r\n    let sunset = day.sunset;\r\n    let timezone = firstApi.timezone;\r\n    let sunriseOffset = (sunrise + timezone) - 3600;\r\n    let sunsetOffset = (sunset + timezone)- 3600;\r\n\r\n\r\n    const sunriseDisplay = document.createElement(\"span\");\r\n    sunriseDisplay.innerText = \"The sun will rise @\" + \" \" + (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.getSunriseTime)(sunriseOffset);\r\n    textContainerRight.appendChild(sunriseDisplay);\r\n    //sunset\r\n    const sunsetDisplay = document.createElement(\"span\");\r\n    sunsetDisplay.innerText = \"The sun will set @\" + \" \" + (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.getSunsetTime)(sunsetOffset);\r\n    textContainerRight.appendChild(sunsetDisplay);\r\n}\n\n//# sourceURL=webpack://04.modern-javascript/./src/modules/cardcreate.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;