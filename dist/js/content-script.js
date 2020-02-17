/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"content-script": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/content-script.ts","common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/content-script.ts":
/*!*******************************!*\
  !*** ./src/content-script.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const icon_base64_1 = __webpack_require__(/*! ./icon-base64 */ "./src/icon-base64.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
const constants_1 = __webpack_require__(/*! ./constants */ "./src/constants.ts");
const GITHUB_SOURCE_CODE_URL = 'https://github.com/yes1am/essay-outline';
const HEADER_CLASS_PREFIX = 'CHROME_ESSAY_OUTLINE_EXTENSION_CLASS';
const CONTAINER_ID = 'CHROME_ESSAY_OUTLINE_EXTENSION_CONTAINER';
const CONTAINER_HEADER_CLASS = 'CHROME_ESSAY_OUTLINE_EXTENSION_HEADER';
const CONTAINER_BODY_CLASS = 'CHROME_ESSAY_OUTLINE_EXTENSION_BODY';
const CONTAINER_FOOTER_CLASS = 'CHROME_ESSAY_OUTLINE_EXTENSION_FOOTER';
const TOGGLE_CLASS = 'CHROME_ESSAY_OUTLINE_EXTENSION_TOGGLE';
const ACTIVE_CLASS = 'CHROME_ESSAY_OUTLINE_EXTENSION_ACTIVE';
const HEADER_SELECTOR_STRING = 'h1,h2,h3,h4,h5,h6';
const TOGGLE_TEXT = 'essay-outline';
let isActive = constants_1.DEFAULT_EXTENSION_ACTIVE;
function getOffsetToDocumentTop(ele) {
    return ele.getBoundingClientRect().top + document.documentElement.scrollTop;
}
function getEleDataTopAttribute(ele) {
    let result = ele.dataset.top;
    while (!result && ele.parentElement) {
        result = ele.parentElement.dataset.top;
        // eslint-disable-next-line no-param-reassign
        ele = ele.parentElement;
    }
    return Number(result);
}
function removeContainerIfAlreadyExist() {
    let prevContainer = document.querySelector(`.${CONTAINER_ID}`);
    if (!!prevContainer && prevContainer.parentNode) {
        // if already exist
        prevContainer.parentNode.removeChild(prevContainer);
        prevContainer = null;
    }
}
function generateDom() {
    removeContainerIfAlreadyExist();
    const currentSite = window.location.href;
    let matchedSite = null;
    utils_1.getStorageSites((configSites) => {
        configSites.forEach((site) => {
            if (new RegExp(site.urlRegExp).test(currentSite)) {
                matchedSite = site;
            }
        });
        if (!matchedSite) {
            utils_1.debug('essay-outline extension fail, no config');
            return;
        }
        const { document } = window;
        const markdownBody = document.querySelector(matchedSite.markdownBodySelector);
        if (!markdownBody) {
            utils_1.debug(`essay-outline extension fail, no ${matchedSite.markdownBodySelector} found`);
            return;
        }
        const headers = markdownBody.querySelectorAll(HEADER_SELECTOR_STRING);
        if (!headers.length) {
            utils_1.debug(`essay-outline extension fail, no header tag under ${matchedSite.markdownBodySelector}`);
            return;
        }
        const headersInfos = [];
        Array.from(headers).forEach((header) => {
            headersInfos.push({
                html: header.innerHTML,
                level: header.tagName,
                top: getOffsetToDocumentTop(header),
            });
        });
        const container = document.createElement('div');
        container.classList.add(CONTAINER_ID);
        if (isActive) {
            container.classList.add(ACTIVE_CLASS);
        }
        const fragment = document.createDocumentFragment();
        // header
        const containerHeader = document.createElement('div');
        containerHeader.innerHTML = `<a href="${GITHUB_SOURCE_CODE_URL}" target="_blank">${TOGGLE_TEXT}</a>`;
        containerHeader.classList.add(CONTAINER_HEADER_CLASS);
        // body
        const containerBody = document.createElement('div');
        containerBody.classList.add(CONTAINER_BODY_CLASS);
        let element;
        headersInfos.forEach(({ html, level, top }) => {
            element = document.createElement('div');
            element.classList.add(`${HEADER_CLASS_PREFIX}_${level}`);
            element.setAttribute('data-top', String(top));
            element.innerHTML = html;
            containerBody.appendChild(element);
        });
        // footer
        const containerFooter = document.createElement('div');
        containerFooter.classList.add(CONTAINER_FOOTER_CLASS);
        // toggle element
        const toggle = document.createElement('div');
        toggle.classList.add(TOGGLE_CLASS);
        toggle.innerHTML = icon_base64_1.default;
        // append
        fragment.appendChild(toggle);
        fragment.appendChild(containerHeader);
        fragment.appendChild(containerBody);
        fragment.appendChild(containerFooter);
        container.addEventListener('click', (e) => {
            e.stopPropagation();
            const { target } = e;
            if (target) {
                const top = getEleDataTopAttribute(target);
                document.documentElement.scrollTop = top - matchedSite.stickyHeight;
            }
        });
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            if (isActive) {
                container.classList.remove(ACTIVE_CLASS);
            }
            else {
                container.classList.add(ACTIVE_CLASS);
            }
            isActive = !isActive;
        });
        document.addEventListener('click', (e) => {
            e.stopPropagation();
            if (!e.target.contains(container) && isActive) {
                container.classList.remove(ACTIVE_CLASS);
                isActive = !isActive;
            }
        });
        container.appendChild(fragment);
        document.body.appendChild(container);
    });
}
function main() {
    utils_1.getStorageEnable((enabled) => {
        if (enabled) {
            generateDom();
        }
    });
    // support pjax:
    // pjax events fire order: pjax:start, pjax:success, pjax:complete, pjax:end
    document.addEventListener('pjax:end', () => {
        utils_1.getStorageEnable((enabled) => {
            if (enabled) {
                generateDom();
            }
        });
    });
}
window.addEventListener('load', () => {
    main();
});


/***/ }),

/***/ "./src/icon-base64.ts":
/*!****************************!*\
  !*** ./src/icon-base64.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const icon = `<img src='data:img/jpg;base64,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
TkSuQmCC'/>`;
exports.default = icon;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQtc2NyaXB0LnRzIiwid2VicGFjazovLy8uL3NyYy9pY29uLWJhc2U2NC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsdUJBQXVCO1FBQ3ZDOzs7UUFHQTtRQUNBO1FBQ0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZKYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELHNCQUFzQixtQkFBTyxDQUFDLDJDQUFlO0FBQzdDLGdCQUFnQixtQkFBTyxDQUFDLCtCQUFTO0FBQ2pDLG9CQUFvQixtQkFBTyxDQUFDLHVDQUFhO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxhQUFhO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsV0FBVztBQUMxQjtBQUNBO0FBQ0EsOERBQThELGlDQUFpQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpQ0FBaUM7QUFDaEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCx1QkFBdUIsb0JBQW9CLFlBQVk7QUFDdkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixtQkFBbUI7QUFDbEQ7QUFDQSxxQ0FBcUMsb0JBQW9CLEdBQUcsTUFBTTtBQUNsRTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNySlk7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJjb250ZW50LXNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJjb250ZW50LXNjcmlwdFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2NvbnRlbnQtc2NyaXB0LnRzXCIsXCJjb21tb25cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGljb25fYmFzZTY0XzEgPSByZXF1aXJlKFwiLi9pY29uLWJhc2U2NFwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcbmNvbnN0IGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4vY29uc3RhbnRzXCIpO1xuY29uc3QgR0lUSFVCX1NPVVJDRV9DT0RFX1VSTCA9ICdodHRwczovL2dpdGh1Yi5jb20veWVzMWFtL2Vzc2F5LW91dGxpbmUnO1xuY29uc3QgSEVBREVSX0NMQVNTX1BSRUZJWCA9ICdDSFJPTUVfRVNTQVlfT1VUTElORV9FWFRFTlNJT05fQ0xBU1MnO1xuY29uc3QgQ09OVEFJTkVSX0lEID0gJ0NIUk9NRV9FU1NBWV9PVVRMSU5FX0VYVEVOU0lPTl9DT05UQUlORVInO1xuY29uc3QgQ09OVEFJTkVSX0hFQURFUl9DTEFTUyA9ICdDSFJPTUVfRVNTQVlfT1VUTElORV9FWFRFTlNJT05fSEVBREVSJztcbmNvbnN0IENPTlRBSU5FUl9CT0RZX0NMQVNTID0gJ0NIUk9NRV9FU1NBWV9PVVRMSU5FX0VYVEVOU0lPTl9CT0RZJztcbmNvbnN0IENPTlRBSU5FUl9GT09URVJfQ0xBU1MgPSAnQ0hST01FX0VTU0FZX09VVExJTkVfRVhURU5TSU9OX0ZPT1RFUic7XG5jb25zdCBUT0dHTEVfQ0xBU1MgPSAnQ0hST01FX0VTU0FZX09VVExJTkVfRVhURU5TSU9OX1RPR0dMRSc7XG5jb25zdCBBQ1RJVkVfQ0xBU1MgPSAnQ0hST01FX0VTU0FZX09VVExJTkVfRVhURU5TSU9OX0FDVElWRSc7XG5jb25zdCBIRUFERVJfU0VMRUNUT1JfU1RSSU5HID0gJ2gxLGgyLGgzLGg0LGg1LGg2JztcbmNvbnN0IFRPR0dMRV9URVhUID0gJ2Vzc2F5LW91dGxpbmUnO1xubGV0IGlzQWN0aXZlID0gY29uc3RhbnRzXzEuREVGQVVMVF9FWFRFTlNJT05fQUNUSVZFO1xuZnVuY3Rpb24gZ2V0T2Zmc2V0VG9Eb2N1bWVudFRvcChlbGUpIHtcbiAgICByZXR1cm4gZWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG59XG5mdW5jdGlvbiBnZXRFbGVEYXRhVG9wQXR0cmlidXRlKGVsZSkge1xuICAgIGxldCByZXN1bHQgPSBlbGUuZGF0YXNldC50b3A7XG4gICAgd2hpbGUgKCFyZXN1bHQgJiYgZWxlLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgcmVzdWx0ID0gZWxlLnBhcmVudEVsZW1lbnQuZGF0YXNldC50b3A7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICBlbGUgPSBlbGUucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIE51bWJlcihyZXN1bHQpO1xufVxuZnVuY3Rpb24gcmVtb3ZlQ29udGFpbmVySWZBbHJlYWR5RXhpc3QoKSB7XG4gICAgbGV0IHByZXZDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtDT05UQUlORVJfSUR9YCk7XG4gICAgaWYgKCEhcHJldkNvbnRhaW5lciAmJiBwcmV2Q29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgICAgLy8gaWYgYWxyZWFkeSBleGlzdFxuICAgICAgICBwcmV2Q29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocHJldkNvbnRhaW5lcik7XG4gICAgICAgIHByZXZDb250YWluZXIgPSBudWxsO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdlbmVyYXRlRG9tKCkge1xuICAgIHJlbW92ZUNvbnRhaW5lcklmQWxyZWFkeUV4aXN0KCk7XG4gICAgY29uc3QgY3VycmVudFNpdGUgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICBsZXQgbWF0Y2hlZFNpdGUgPSBudWxsO1xuICAgIHV0aWxzXzEuZ2V0U3RvcmFnZVNpdGVzKChjb25maWdTaXRlcykgPT4ge1xuICAgICAgICBjb25maWdTaXRlcy5mb3JFYWNoKChzaXRlKSA9PiB7XG4gICAgICAgICAgICBpZiAobmV3IFJlZ0V4cChzaXRlLnVybFJlZ0V4cCkudGVzdChjdXJyZW50U2l0ZSkpIHtcbiAgICAgICAgICAgICAgICBtYXRjaGVkU2l0ZSA9IHNpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIW1hdGNoZWRTaXRlKSB7XG4gICAgICAgICAgICB1dGlsc18xLmRlYnVnKCdlc3NheS1vdXRsaW5lIGV4dGVuc2lvbiBmYWlsLCBubyBjb25maWcnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IGRvY3VtZW50IH0gPSB3aW5kb3c7XG4gICAgICAgIGNvbnN0IG1hcmtkb3duQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobWF0Y2hlZFNpdGUubWFya2Rvd25Cb2R5U2VsZWN0b3IpO1xuICAgICAgICBpZiAoIW1hcmtkb3duQm9keSkge1xuICAgICAgICAgICAgdXRpbHNfMS5kZWJ1ZyhgZXNzYXktb3V0bGluZSBleHRlbnNpb24gZmFpbCwgbm8gJHttYXRjaGVkU2l0ZS5tYXJrZG93bkJvZHlTZWxlY3Rvcn0gZm91bmRgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoZWFkZXJzID0gbWFya2Rvd25Cb2R5LnF1ZXJ5U2VsZWN0b3JBbGwoSEVBREVSX1NFTEVDVE9SX1NUUklORyk7XG4gICAgICAgIGlmICghaGVhZGVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHV0aWxzXzEuZGVidWcoYGVzc2F5LW91dGxpbmUgZXh0ZW5zaW9uIGZhaWwsIG5vIGhlYWRlciB0YWcgdW5kZXIgJHttYXRjaGVkU2l0ZS5tYXJrZG93bkJvZHlTZWxlY3Rvcn1gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoZWFkZXJzSW5mb3MgPSBbXTtcbiAgICAgICAgQXJyYXkuZnJvbShoZWFkZXJzKS5mb3JFYWNoKChoZWFkZXIpID0+IHtcbiAgICAgICAgICAgIGhlYWRlcnNJbmZvcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBodG1sOiBoZWFkZXIuaW5uZXJIVE1MLFxuICAgICAgICAgICAgICAgIGxldmVsOiBoZWFkZXIudGFnTmFtZSxcbiAgICAgICAgICAgICAgICB0b3A6IGdldE9mZnNldFRvRG9jdW1lbnRUb3AoaGVhZGVyKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKENPTlRBSU5FUl9JRCk7XG4gICAgICAgIGlmIChpc0FjdGl2ZSkge1xuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoQUNUSVZFX0NMQVNTKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgLy8gaGVhZGVyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXJIZWFkZXIuaW5uZXJIVE1MID0gYDxhIGhyZWY9XCIke0dJVEhVQl9TT1VSQ0VfQ09ERV9VUkx9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+JHtUT0dHTEVfVEVYVH08L2E+YDtcbiAgICAgICAgY29udGFpbmVySGVhZGVyLmNsYXNzTGlzdC5hZGQoQ09OVEFJTkVSX0hFQURFUl9DTEFTUyk7XG4gICAgICAgIC8vIGJvZHlcbiAgICAgICAgY29uc3QgY29udGFpbmVyQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXJCb2R5LmNsYXNzTGlzdC5hZGQoQ09OVEFJTkVSX0JPRFlfQ0xBU1MpO1xuICAgICAgICBsZXQgZWxlbWVudDtcbiAgICAgICAgaGVhZGVyc0luZm9zLmZvckVhY2goKHsgaHRtbCwgbGV2ZWwsIHRvcCB9KSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7SEVBREVSX0NMQVNTX1BSRUZJWH1fJHtsZXZlbH1gKTtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRvcCcsIFN0cmluZyh0b3ApKTtcbiAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgICAgICAgIGNvbnRhaW5lckJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBmb290ZXJcbiAgICAgICAgY29uc3QgY29udGFpbmVyRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lckZvb3Rlci5jbGFzc0xpc3QuYWRkKENPTlRBSU5FUl9GT09URVJfQ0xBU1MpO1xuICAgICAgICAvLyB0b2dnbGUgZWxlbWVudFxuICAgICAgICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoVE9HR0xFX0NMQVNTKTtcbiAgICAgICAgdG9nZ2xlLmlubmVySFRNTCA9IGljb25fYmFzZTY0XzEuZGVmYXVsdDtcbiAgICAgICAgLy8gYXBwZW5kXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHRvZ2dsZSk7XG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lckhlYWRlcik7XG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lckJvZHkpO1xuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChjb250YWluZXJGb290ZXIpO1xuICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBlO1xuICAgICAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvcCA9IGdldEVsZURhdGFUb3BBdHRyaWJ1dGUodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gdG9wIC0gbWF0Y2hlZFNpdGUuc3RpY2t5SGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShBQ1RJVkVfQ0xBU1MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoQUNUSVZFX0NMQVNTKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlzQWN0aXZlID0gIWlzQWN0aXZlO1xuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGlmICghZS50YXJnZXQuY29udGFpbnMoY29udGFpbmVyKSAmJiBpc0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKEFDVElWRV9DTEFTUyk7XG4gICAgICAgICAgICAgICAgaXNBY3RpdmUgPSAhaXNBY3RpdmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBtYWluKCkge1xuICAgIHV0aWxzXzEuZ2V0U3RvcmFnZUVuYWJsZSgoZW5hYmxlZCkgPT4ge1xuICAgICAgICBpZiAoZW5hYmxlZCkge1xuICAgICAgICAgICAgZ2VuZXJhdGVEb20oKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIHN1cHBvcnQgcGpheDpcbiAgICAvLyBwamF4IGV2ZW50cyBmaXJlIG9yZGVyOiBwamF4OnN0YXJ0LCBwamF4OnN1Y2Nlc3MsIHBqYXg6Y29tcGxldGUsIHBqYXg6ZW5kXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncGpheDplbmQnLCAoKSA9PiB7XG4gICAgICAgIHV0aWxzXzEuZ2V0U3RvcmFnZUVuYWJsZSgoZW5hYmxlZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZURvbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgIG1haW4oKTtcbn0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBpY29uID0gYDxpbWcgc3JjPSdkYXRhOmltZy9qcGc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFnQUFBQUlBQ0FZQUFBRDBlTlQ2QUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQUFsd1NGbHpcbkFBQU9TQUFBRGtnQmEyOE4vd0FBQUJsMFJWaDBVMjltZEhkaGNtVUFkM2QzTG1sdWEzTmpZWEJsTG05eVo1dnVQQm9BQURYWFNVUkJcblZIamE3ZDBMY0ZYbHZmN3hHcERCaWtoSForUk1xUzExUUxCanBZcXRGZjRWdkY5NmtLclU4VGdnSE9tTXg2azlsbHJicVIwTDFWSzFcblU2ZVhxVHFseHc3STVSUWhjZ0tWaER0RUlCREJnQUZDQWdsSkNrbUFKQVRZdWU2OTMvL3ZqU3R0U25QWmw3WFhldCsxdm12bU0zT21cbnA5WGtmZC8xUGsvMlhwZFBLYVUrQmNCc285WitmSWtZSVc0UXQ0dHA0aW54Z25oZExCUXJ4R3FSSjdhSW5XS1BLQlpsb2xMVWlrWVJcbkVWRkh4UG5QYXAzL1Rwbnp2OW5qL0RPMk9QL00xYzYvWTZIejczekIrUm1tT1QvVGw4Vm54V0RtRERBZmd3RDRHK3lEeERYaVRqRmJcbi9FSXNFUnRGa2FnV3pVSlpScGVLS3ZHUjJDQVdpNWZGaytJTzhVVnhNV3NBb0FBQVFRMzRMUEVGTVVuTUV2UEVJckhOQ2ZlWWhlSHVcbmxwaFRFclk2bnlyTUZUUEZiZUx6ZXV4WVF3QUZBTEFoN0QvamhOY3o0azlpdDZWL3ZadjBLY0l1OFVmeFhmRU5NWXkxQmxBQUFMK0NcbmZvQVlLeDUxUHJKZjQvd2xTMmg3bzlLNUh1RVh6aHlNMFhQQzJnUW9BSURiZ2Y4NUoyaCtKd3BGQ3lGc25CWm5ibjduek5YbldMc0FcbkJRQkk5cS83cnpnZk9TL2pMM3VyVlRseitGMW5Udm1VQUtBQUFIOFAvS0hpYnVmaVBIMjEram1DTTdET09YTTh6NW56b1p3RG9BQUFcbjRib3EveFluQkhhRi9DcjhzSXM1YTJDZXN5YTQ2d0FVQUNCZ29UOWNQT0Y4SEZ4UDhLRVg5YzRhMFd0bE9PY09LQUNBZllFLzBMbGxcbmJMN1lLK0tFRzVJVWQ5Yk9mR2N0RGVUY0FnVUFNRFAwTDNmK2Nsc3BtZ2d3dUt6SldWdDZqVjNPT1FjS0FPQnY2RjhtSGhjNW9vMlFcbmdrZmFuRFduMTk1bG5JdWdBQURlaFA2bHpuM2UyZHlQRDBPZVA1RHRyTWxMT1VkQkFRRGNEWDM5SnJ5SHhYTG44YkFFRDB4OWRQRnlcblo2MWV3cmtMQ2dDUSt1MTY5NHFsM0pzUFM1ODVzTlJadzl4ZUNBb0FrRUR3NjNmZXYrZzg3NTBnUVZEZVhhRFg5QWpPY1ZBQWdIOTlcbi9PNFU1d1V2VVFJREFSVjExdmdVSGtzTUNnRENIdndqeGN2aU9PR0FrRG51clAyUjdBV2dBQ0Fzb1greGVFU3M0d0U5UU9jNXNNNDVcbkp5NW1qd0FGQUVFTS9pdWQ3MEhyMlBTQkh0VTU1OGlWN0JtZ0FDQUl3VDlLdkNtYTJlQ0JoRFE3NTh3bzloQlFBR0JqOEU4VTcvRzJcblBTQ3R0eFhxYzJnaWV3b29BTERoYW43OVhXWUJtemZncWdMbjNPTHVBVkFBWU56amVaOFJSOW1vZ1l3cWQ4NDFIanNNQ2dCOERmNmhcbnprVkxEV3pNZ0tjYW5ITnZLSHNSS0FEdytpLytINGw2Tm1MQVYvWE91Y2duQXFBQUlLUEJQMWg4bjF2NUFDTnZJZFRuNW1EMktsQUFcbjRHYndEeEpQODhRK3dJb25ET3B6ZFJCN0Z5Z0FTQ2Y0QjRyWnZKZ0hzUElGUlByY0hjaGVCZ29Ba2dsKy9TcmU2ZUlJR3lsZ3RTUE9cbnVjd3JpVUVCUUwvaFAwa1VzWEVDZ2FMUDZVbnNjYUFBb0xjMzg2MWtvd1FDYlNWdklBUUZBRjNCUDBUTUY2MXNqa0FvdERybi9CRDJcblFBb0F3aG44RjRtWm9vWU5FUWlsR21jUHVJZzlrUUtBOElUL0JGSElCZ2pBMlFzbXNEZFNBQkRzNEw5YUxHUERBOUFEdlRkY3pWNUpcbkFVRHczdEwzbklpd3lRSG9ROFRaSzNqcklBVUFBUWovY2VKRE5qWUFTZEI3eGpqMlVBb0E3SDF1L3l1aWc4ME1RQW82bkQyRTl3dFFcbkFHRFp3M3hLMmNBQXVLQ1Vod2hSQUdCKzhBOFRDMFNjVFF1QWkrTE8zaktNdlpZQ0FQUEMveUZ4Z28wS1FBYnBQZVloOWx3S0FNd0lcbi91RWltNDBKZ0lmMG5qT2NQWmdDQVAvQ2Y0bzR4V1lFd0FkNjc1bkNYa3dCZ0xmQi8ybnhGaHNRQUFQb3ZlalQ3TTBVQUdRKy9HOFVcbkpXdzZBQXlpOTZRYjJhTXBBTWhNOEdlSjUwVTdtdzBBQTdVN2UxUVdlellGQU82Ri93aXhpUTBHZ0FYMFhqV0N2WnNDZ1BURGY1cG9cbllGTUJZQkc5WjAxakQ2Y0FJTFhnSHlMK3pFWUN3R0o2RHh2Q25rNEJRT0xoZjYwNHlPWUJJQUQwWG5ZdGV6c0ZBUDJILzFUUnhLWUJcbklFRDBuamFWUFo0Q2dONnY4cC9QYy93QkJQaDlBdk81UzRBQ2dIOE8veXRFSGhzRWdCRFFlOTBWN1AwVUFNTC9rd2Y3SEdOVEFCQWlcbngzaHdFQVVnN09FL1U3U3dHUUFJSWIzM3pTUUxLQUJoQy81QjRnMDJBQURvM0FzSGtRMFVnRENFLzFWaUJ5YzlBUHlkM2hPdklpTW9cbkFFRU8vN0dpZ3BNZEFQNkYzaHZIa2hVVWdDQ0cvMlRSeUVrT0FMM1NlK1JrTW9NQ0VLVHduekdLdC9nQlFDTDBYam1EN0tBQUJDSDhcbjUzSkNBMERTNXBJaEZBQ2JyL1JmeEVrTUFDbGJ4QjBDRkFEYnduK1kyTXpKQ3dCcDAzdnBNTEtGQW1CRCtJOGN4WnY4QU1CTmVrOGRcblNjWlFBRXdPLzV0RUhTY3JBTGhPNzYwM2tUVVVBQlBEZitJb1h1TUxBSm1rOTlpSlpBNEZ3S1R3djB0RU9Ea0JJT1AwWG5zWDJVTUJcbk1DSDhIeFN0bkpRQTRCbTk1ejVJQmxFQS9Bei94MFFISnlNQWVFN3Z2WStSUlJRQVA4Si90b2h4RWdLQWIvUWVQSnRNb2dCNEdmN1BcbmlqZ25Id0Q0VHUvRno1Sk5GQUF2d3Yrbm5IQUFZSnlma2xFVWdFeUcvNnVjWkFCZ3JGZkpLZ29BNFE4QWxBQlFBUGpZSHdENE9nQVVcbmdPUXYrT09FQWdDN2NHRWdCU0R0Vy8yNDJoOEE3THc3Z0ZzRUtRQXBQK1NIKy93QndPN25CUEN3SUFwQTBvLzM1UWwvQUJDTUp3YnlcbjJHQUtRTUl2OXVIWi9nQVFISHBQNXdWQ0ZJQitYK25MVy8wQUlIajAzczZyaENrQVBZYi9UYU0rZWRjMEp3b0FCSlBlNDI4aTh5Z0FcbjNjTi9wS2pqNUFDQXdOTjcvVWl5andLZ3czK1lPTWhKQVFDaG9mZjhZUlNBY0lmL0lMR1prd0VBUWtmdi9ZTW9BT0V0QUlzNENRQWdcbnRCWlJBTUlaL25OWi9BQVFlbk1wQU9FSy94a3NlZ0NBWXdZRklCemhQMW0wcytBQkFBNmRDWk1wQU1FTy83R2lrY1VPQUxpQXpvYXhcbkZJQmdodjlWb29KRkRnRG9oYzZJcXlnQXdidmRid2VMR3dEUWp4MWh1VDB3TEFYZ0RSWTFBQ0JCYjFBQWdoSCtNMW5NQUlBa3phUUFcbjJCMytONG9XRmpJQU45eXc3b0M2YSt0aDlSKzd5dFYvRjFXcHAvWWNVdy90T0tMKzMrWVNOU2EzbURFS0ZwMGROMUlBN0F6L0s4UXhcbkZqR0FWSHdwcjFqTktxeFFpNDZkVmtmT3RhcElOS2I2T3VLaXZxMUQ3YTQvcjE0cnFWSDM1WmN5anZiVEdYSUZCY0N1OE04U2VTeGVcbkFNbTRYdjdDLy9IK3Y2bDF0VTM5Qm40aVIxV2tUUzJVQXZGWVFUbmpheStkSlZrVUFIc0t3SHdXTFlCRWpjMHRWajg3Y0Z5ZGJPMVFcbm1UcDJuajZ2SHRsNWhQRzIwM3dLZ0IzaFAxWEVXYkFBK25OdDdzZnF1WDNWblgrcGUzV3NyMnRTRCtTWE1mNTIwWmt5bFFKZ2R2aGZcbks1cFlyQUQ2YzgrMlVsVnl0a1g1Y2NUaVNpMnByRmZYNVhIaG9FVjB0bHhMQVRBei9JZUlneXhTQVAzNXpvZkgxTG1PbVBMNzJOTVFcblVWL2ZlSWc1c1lmT21DRVVBUE1Ld0o5Wm5BRDY4NnZEdFoxL2dadHluR2hwVjFPM2MyMkFSZjVNQVRBci9LZXhLQUgwZDRWL3pvbEdcblplTFJFbzJwWjR1cW1DZDdUS01BbUJIK0kwUURDeEpBYjc0czRhK3Z3amY1MEI5SzZEc1JtQzhyNk13WlFRSHcvMzcvVFN4R0FEYUhcblB5WEFTcHRzZno2QTdRWGdlUlloZ0NDRVB5WEFTczlUQVB4N3puODdDeEJBVU1LZkVtQWRuVUUzVWdDOERmOVBpeElXSDRDZ2hUOGxcbndEbzZpejVOQWZDdUFMekZvZ01RMVBDbkJGam5MUXFBTitFL2hjVUdJT2poMzcwRXpLVUUyR0FLQlNDejRUOWNuR0toQVFoRCtGTUNcbnJLS3phVGdGSUhNRklKdEZCaUJNNFU4SnNFbzJCU0F6NGY4UWl3dEFHTU8vKzBFSk1ONURGQUIzdzMrWU9NSENBaERtOEtjRVdFRm5cbjFUQUtnSHNGWUFHTENnRGhUd213eEFJS2dEdmhQMG5FV1ZBQUNIOUtnQ1YwWmsyaUFLUVgvb05GS1lzSkFPRlBDYkNNenE3QkZJRFVcbkM4QXJMQ0lBaEQ4bHdGS3ZVQUJTQy85eG9vTUZCSUR3cHdSWVNtZllPQXBBY3VFL1FIekk0Z0ZBK0ZNQ0xLZXpiQUFGSVBFQzhCeUxcbkJnRGhUd2tJaU9jb0FJbUYvOVVpd29JQlFQaFRBZ0pDWjlyVkZJRCtDOEF5RmdzQXdwOFNFRERMS0FCOWgvOEVGZ2tBd3QrZFk5NkJcbkU2d25zMHlnQVBRYy9oZUpRaFlJUVBnVC9wU0FnTklaZHhFRjRGOEx3RXdXQjBENEUvNlVnSUNiU1FINDUvQWZJbXBZR0FEaHowRUpcbkNEaWRkVU1vQVA4b0FQTlpGQURoejBFSkNJbjVGSUJQd24ra2FHVkJBSVEvQnlVZ0pIVG1qYVFBclAxNEpZc0JJUHc1S0FFaHN6TFVcbkJXRFVKNi82WlNFQWhMK3hSK201VnBWWDI2UVdWOWFyMTB0cjFXL0w2dFRTcW5xMXZxNUpWVGUzV1ZzQ2ZuNlFFbUNBU2FFc0FQS0xcblo0a2lGZ0JBK0p0MjdHbUlkRDVJWjlLV2tuNS9sM3Z6UzlVckpUV3E1R3dMSlFESjBobVlGY1lDTUozSkJ3aC9rNDdpcG1iMVpHRkZcblNyL1hhREducUZwVlJkb29BVWpHOUZBVkFQbUZCNG9qVER4QStKdHdST1B4enUvRlI3dndPNDdOTFZZTHlrOVJBcEFvbllVRHcxUUFcblpqUHBBT0Z2d3RIWUhsWFRkNVc3L3Z2cVR3TmFvakZLQUJJeE94UUZRSDdSUWFLU0NRY0lmNytQdnpXM3E5dTNIczdZNy8ydEhVZlVcbkdTa1lsQUQwUTJmaW9EQVVnS2VaYklEd055SDhKMjA1blBIZmYrcDJTZ0FTOG5TZ0M0RDhnb1BGY1NZYUlQekRFUDYybG9DWEtBRitcbjBOazRPTWdGNFB0TU1rRDRoeW44S1FGSXd2Y0RXUURrRjd0VTFESEJBT0VmdHZDbkJDQkJPaU12RFdJQitCR1RDeEQrWVExL1NnQVNcbjlLTkFGUUQ1aFlhS2VpWVdJUHpESFA2VUFDUkFaK1hRSUJXQUY1bFVnUEFuL0NrQlNNaUxnU2dBem5mL0RVd29RUGdUL3BRQUpLVEJcbmkyc0J2Q2dBenpDWkFPRlArQWVqQkx4TUNmREtNMVlYQVBrRkJvaHlKaElnL0FsL1NnQ1Nvck56Z00wRjRCRW1FU0Q4Q1g5S0FGTHlcbmlNMEZvSUFKQkFoL3dwOFNnSlFVV0ZrQTVBZWZ5T1FCaEQvaFR3bEFXaWJhV0FEZVkrSUF3cC93cHdRZ0xlOVpWUURrQng0bFlrd2NcblFQZ1QvcFFBcEVWbjZTaWJDc0NiVEJwQStCUCs0U29CdnpoRUNjaVFONjBvQVBLRFhpbWFtVENBOENmOEtRRndoYzdVSzIwb0FEejJcbkZ5RDhDWDlLQU56MW90RUZRSDdBaTBmeHlsK0E4Q2Y4UTE4Q2ZyaXZtdlBJWFRwYkx6YTVBUERnSDREd0ovd3BBYW8xRmxjUDdUakNcbitXVHdnNEhjTGdEcm1DQ0E4Q2Y4S1FINnFHMXBWN2R1T3NSNTVaNTFSaFlBK2NGR2lqZ1RCQkQraEQ4bG9PdlkyeGhSMStVVk0yL3VcbjBCazcwc1FDOERLVEF4RCtoRDhsNE1KalNXVTljK2FlbDQwcUFLTStlZXZmY1NZR0lQd0pmMHJBaFVjc3J0UUQrV1hNbVR0MDFnNHdcbnFRQk1ZVklBd3Avd3B3VDBkcXl2YTJLKzNEUEZwQUt3bWdrQkNIL0NueExRMS9ISVR1NEtjTWxxSXdxQS9DQWpSSlFKQVFoL3dwOFNcbjBOZWgxeHR6NVFxZHVTTk1LQUE4K1E4Zy9BbC9Ta0JDeDJNRjVjeVZJVThHVERmOHMwUWxFd0VRL29RL0pTQ1JZK0d4MDh5VE8zVDJcblp2bFpBTzVsRWdEQ24vQTN5N2QySEZFdDBaaVJCYUFxMHNZY3VlZGVQd3ZBVWlZQUlQd0pmL1BNS2FvMjlsT0ErL0pMbVNOM0xQV2xcbkFNaS8rQkp4amdrQUNIL0MzMHdMeWs4WldRQmVLNmxoZnR5aE0vZ1NQd3JBd3d3K1FQZ1QvdVlhbTF2YytaRzdhY2Z1ZXU0R2NOSERcbmZoU0E1UXc4UVBnVC9ud1ZrT3h4dXEyRHVYSFBjazhMZ1B3TEx4VVJCaDRnL0FsL3M0MFdKV2RiakhzMDhKaGNYaERrRXAzRmwzcFpcbkFCNWwwQUhDbi9DM3d5c2xOY2F0QlY0VDdLcEh2U3dBMlF3NFFQZ1QvbmE0TjcvVXVQVXdaVHN2QjNKUnRpY0ZRUDVGbDRrV0Jod2dcbi9BbC9lMVEzbTNVeDRIOFdWakF2N3RHWmZKa1hCZUJ4QmhzZy9BbC91K2kzOFpsMC9OZWVTdWJGWFk5N1VRQnlHR2lBOENmODdiSzBcbnF0Nm90VEZ0NTFIbXhWMDVHUzBBOGkrNFhMUXgwQURoVC9qYjViZGxkVWF0ajhtc0RiZnBiTDQ4a3dYZ0NRWVpJUHdKZi91OFhscHJcbjFCcTVYdFl1OCtLNkp6SlpBRll5d0FEaFQvamJaM0dsT1Y4Qm5PdUlNU2Vac1RJakJVRCt3UU5GRXdNTUVQNkV2MzN5YXMyNUNMRHNcblhDdHpraGs2b3dkbW9nQjhnOEVGQ0gvQzMwNmxFcnFtSEl1T25XWk9NdWNibVNnQTh4bFlnUEFuL08wemFVdUpVZXRsRnM4QXlLVDVcbm1TZ0FleGxZd0QrakRieVhtL0Mzdzl3RHg0MVpMNUZvVEgwcGovY0FaTkJlVnd1QS9BT0hpemdEQy9qbkQwZE9FdjVJeVo2R2lERnJcblpsMXRFM09TV1Rxcmg3dFpBTGo5RC9EUjl6NnFJdnlSa2ljTEs0eGFOei9lL3pmbXhaRGJBUk10QU1zWVVNQWYrcVVwemRFWTRZK1VcbnZqWXFibW8yWnQyY2JPM2cvbjl2TEhPbEFNZy9LRXZVTTZDQVB4Zjk2YkFsL0pHS2VRZE9HTFYyZm5iZ09QUGlEWjNaV1c0VWdGc1lcblRNQWZ2ejVzMXRQYjlGOXdYb1gvOVRtRjZzYjN0cXV2cnR5bXZyNThrNXI0bC9YcTF1VWIxZGRXYkZIanN6OVE0MVlWcUd2ZjM4YzZcbjZjWDBYZVVxR284YnMzYXFJbTFxYkM0WC8zbm9GamNLd0R3R0V2RGUrQTBIVlZONzFKZ052QzBXeitnTFhFYS92MTk5WmRWT05lRXZcbkc5UmQ3K1NvZXhlK2w1QkpTM1BWelZJU3JsdXpsM1hqdUgzcllkVm8wTnJSeDNQN3Fwa2JiODF6b3dEc1lpQUI3NzExMUt5ci9wL2Zcbm41a05mUFRhL2VxbTdPM3F6bmRXSnh6NnZkSGxZV3pJaTREK2hNYTByNDFLenJhb2EzTTVwejIySzYwQ0lQK0FvU0xHUUFMZXVuWFRcbklhTXUvTlBQSDhqRTc2ay94cjlqOFpxMGc3KzdleGF0NnZ6S0lJeGZENWdZL3ZxNS8vZHNLK1c4OXA3TzdxSHBGSUI3R0VUQWV3dktcblR4bXpnY2ZpU2oyUVgrYjY3M2pMdTV0ZERmNEw2V0p4M1pvOWhML1BhK2M3SHg3am5QYlBQZWtVZ0o4emdJRDNqa1hhak5uRVZ4MXZcbmRQVjNHL1BYSW5YYnN0eU1obitYdXhmOVgrZW5ESVMvUDhldkR0ZHlQdnZyNStrVWdFME1JT0N0dTdlVkdyV0pQMVpRN3RydnByK2ZcblQrWWovL3NYclZLenN0ZXBPZTl2VmZNMkZhaWZyTnV1bnNyWnFCNWVsdHpYQnVOWDVoUCtIaDg1SnhvNW4vMjNLYVVDTU9xVDEvOUdcbkdFREFXNzg4VkdQTUpuNm1QYXJHdUhUcmxnNy9PeGYzZjZIZmZSTDZMMjNlcFRZZXJWSk5yVDEvRWhLUHg5V0J1dFBxN1QwSDFPUHZcbnJnMXRDVEExL1BVTHEzamdqeEYwaGc5TXBRRGN6T0FCM2l1b1B4KzR2K0lTRFg4ZC9KVm56aVozZTJJMHFsWWNLRlBmL3QrL2hxb0Vcbm1CeitYeWI4VFhKektnWGdXUVlPOE5hNDlRZU1lbmlML2pUQ2kvQ2Z1aVJINVI5TDc0MTFqUzJ0NmdkcnQvVmJBb0p3VFFEaGp5UThcbm0wb0JXTUhBQWQ2NlA5K3M3Ly9uRkZWblBQeG5yTWhWUnh2T3VQTHpkc1JpNmpjNzl2WjdZYUROZHdjUS9ralNpbFFLUUEwREIzaHJcbnh1NEtveloxL1RqWlRJYi9FeXZ6Vk4xNTkxOVYrOWJ1L2YzZUltampjd0lJZjZTZ0pxa0NJUCtEYXhnMHdIcy8yRmR0MU1hZTZxTi9cbi9Rei9SRXVBZmxnUTRVLzRoOFExeVJTQUdRd1lFTzQ3QVBUeDlONUtLOE8vNitqcjZ3RDl4RUJiSGh0TStDTk5NNUlwQUg5a3dJQndcblB3RlFIM09UZkgyclNlSGZkVTFBWHhjRzZuY0hFUDZFZndqOE1aa0M4REVEQm5qdjdRcXpDc0RiRmFldERmL3Vkd2YwZFl1Z3lXOFJcbkpQemhrbzhUS2dEeVh4d2tPaGd3d0h1dmxwajFGY0NSYzYxV2gzL1hvWjhUME52UHBWOGxUUGdUL2dHbk0zMVFJZ1hnQmdZTDhNY1BcbjkxY2J0K0ZQbGlDeU9meTdIaGJVMnhNREp5M05KZndKL3pDNElaRUNNSjJCQXZ3eHE3REN1RTMvdFpJYXE4UC83MTluN0RuUTY4OW9cbjBpMkJoRDh5WkhvaUJlQTFCZ3J3eHpjL0tETnU0MjlvaTNZK29kRG04TmVIZm5lQTZVOEhKUHlSUWE4bFVnQnlHU2pBSCtNM0hGUnhcblpkN3grN0k2cThOZkgvb0ZRcjI5UlhCODlnZUVQK0VmZExtSkZJQVREQlRnbjMxbm1vMExnVWcwcHU3YVZtcHQrSGNkK2xYQ1BmMjhcblgxdXhoZkFuL0lQdVJKOEZRUDRMVnpCSWdMOStVMXFuVER5T25tOVY0M09MckExL2ZmeGszZlllZitaYmwyOGsvQW4vTUxpaXJ3SXdcbm1RRUMvUFhnOWpJanc3UDJYRVI5ZS9sYWE4TmZIL00yRmZUNGMwLzh5M3JDbi9BUGc4bDlGWUR2TVVDQS8ycGIybzBML3hrcjhxd09cbmYzM01lWCtyTWU4RklQemhnKy8xVlFEK3hBQUIvbHRTV1UvNForQ1lsYjJ1eDUvL3F4NC9ESWp3aDAvKzFGY0IyTTBBQWY2N1krdGhcbkZZM0hDWDhYajZiV05uWC9vbFU5L2c0M3ZyZWQ4Q2Y4dzJCM2p3VkEvaDlaSXNJQUFXWllWbFZQK0x0NGJEeGExZXZ2Y1gxT0llRlBcbitJZUJ6dmlzbmdyQTV4a2N3QndUTmgxU0xkRVk0ZS9TOGRMbVhUMytIbmU5azBQNEUvNWg4dm1lQ3NCdERBeGdsai81OEhyZ0lJWi9cbjVabXo2cjVlUHY3MzRwWEFoRDhNY2x0UEJXQW1Bd09ZNWVZTkI5V1o5aWpobjZHLy9yV3ZyTnBKK0NOTVp2WlVBT1l5TUlCNVp1eXVcbjhPU0N3S0NHZi82eDQ3MytQbmUrczFxTmZuOC80WTh3bWR0VEFWakl3QUJtZXVuZ0NjSS9oZU5vd3hrMWRVbE9yNy9UVGRuYkNYK0VcbnpjS2VDc0JXQmdZdzE3dlZEWVIvRW9mK2VXZXN5TzMxZDdwajhSbzFldTErd2g5aHM3V25BbERGd0FEbXVpNnZXTzFwakJEK0NZYS9cbi9ybjcrcjB5OVFwZ3doK0dxL3FuQWlEL3djVWl4c0FBWnZ2cXhvUHE4TmtXd2ovTjhML2wzYzJFUDhKS1ovM0YzUXZBRnhrVXdBNWZcbjIzZ283UklRNXZDL2JWa3U0WSt3KzJMM0FuQUhBd0tFb3dTRU9mejE5LzVqL2xwRStDUHM3dWhlQUo1a1FJRGdsNEF3aC8rZGkxZXJcbnNXdjJFdjZBWkg3M0F2QXlBd0w4dzdqMUI5VDkrYVdkOStEL1lGKzErdVdoR3JXZy9KUjZ1K0tVZXJXa1J2MXdmN1dhVlZpaHZ2bEJcbm1ScS80YUFWSllEd0ovd0J4OHZkQzhCaUJnUmhkL2UyMHM2Z0w2Zy9uOVNEZC9SL2M5K1padldiMGpyMTRQWXlJMHNBNFUvNEE5MHNcbjdsNEFOakFnQ0tOYk54M3EvTXYrV0tUTnZWdnJXdHJWa3NyNnpsZjZtbEFDQ0gvQ0g3akFodTRGNENNR0JHR2lQN1ovNitoSjFaekJcbnQrM3BUeEgwSzMzMVcvMzhLZ0dFUCtFUDlPQ2o3Z1dBaHdBaEZQUUcrZXZEdGFySnd4ZnM2RmY2NnJmNjNlekJ0UUxkU3dEaFQvZ0RcbmZUME1xS3NBUkJnUUJOMlU3V1crYnQ3NnJYNzZva0l2U3NETzJnYkNuL0FIZWhQcExBRHlmd3htTUJCMDMvdW9LcU1mOXlmenRZQitcbnNVOG1mMWNkZm5jdlhrUDRFLzVBWHdickF2QlpCZ0pCTlZyODRjaEo0elp1L1dJZi9Xei9USVMvRGtIQ24vQUgrdkZaWFFDK3pFQWdcbnFOLzNyNjlyTWpiVTlJdDk5TFA5Q1gvQ24vQ0hENzZzQzhEdERBU0NHUDU2a3pUOTBCZnM2ZS9zQ1gvQ24vQ0h4MjdYQldBYUF3SENcbjM5NFNRUGdUL2tBS3B1a0M4QlFEQWNMZnpoSkErQlArUUlxZTBnWGdCUVlDaEw5OUpZRHdKL3lCTkx5Z0M4RHJEQVFJZjd0S0FPRlBcbitBTnBlbDBYZ0lVTUJBaC9lMG9BNFUvNEF5NVlxQXZBQ2dZQ2hMOGRKU0RNNGYvdDVXdlYrTndpMTlmUXRKMUgxY25XRHNJZlliTkNcbkY0RFZEQVFJZi9OTFFKakRYei9XV0wvYjRPajVWblhYdGxMWDF0RHorNnRWV3l4TytDT01WdXNDa01kQWdQQTN1d1FRL3YvNHZTTFJcbm1QcDlXWjBhdHo3MWdId2d2OHpZaDBRUi92QkluaTRBV3hnSUVQN21IdnJGUG1GOXR2K0Y0ZC85YUdpTHF0ZEthdFRrTFljVFdqZGpcbmNvdlZZd1hsYXRYeFJtWGdILzJFUDd5MlJSZUFuUXdFQ0g4emp6Qy8wcmV2OEwvd09IS3VWYjFkY1ZyTlBYQmNQYjIzc3ZONy9lbTdcbnl0V2NvbXIxeTBNMUt1ZEVZK2ZiR0kwdWVvUS92TFZURjRBOURBUUlmOExmMXZBUHhLYzhoRCs4dDBjWGdHSUdBb1EvNFUvNEUvNElcbmxXSmRBTW9ZQ0JEK2hEL2hUL2dqVk1wMEFhaGtJRUQ0RS82RVArR1BVS25VQmFDV2dRRGhUL2dUL29RL1FxVldGNEJHQmdLRVArRlBcbitCUCtDSlZHWFFBaURBUUlmOEtmOENmOEVTb1JYUUNpREFRSWY4S2Y4Q2Y4RVNwUkNnQUlmOEtmOENmOEVkSUN3RmNBSVB3SmY4S2ZcbjhFY0l2d0xnSWtBUS9vUS80VS80STRRWEFYSWJJQWgvd3Avd0ovd1J3dHNBZVJBUUNIL0NuL0FuL0JIQ0J3SHhLR0FRL29RLzRVLzRcbkk0U1BBdVpsUUNEOENYL0NuL0JIdUJUek9tQVEvb1EvNFUvNEkzdzZYd2U4azRFQTRmL0pjYVk5cW5KT05LcGZIcXBSYzRxcTFmUmRcbjVXcmF6cVBxNmIyVmF1NkI0K3J0aXRQcXlMbFd3cC93Si94aHU1MjZBR3hoSUJEbThJL0ZsVnAxdkZFOVZsQ3V4dVFXSi9UN1RONXlcbldMMVdVcU1hMnFLRS93WHVYcnhHN2F4dElQd0JzMjNSQlNDUGdVQll3Mzk5WFpONklMOHM1ZDl0M1BvRDZ2ZGxkU29TalJIKzRzN0ZcbnE5WFlOWHZWMXpZZVVvZlB0aEQrZ0xueWRBRll6VUFnYk9IZkpuLzJQNysvMnJYZjg2NXRwZXJvK1ZiQ1g4Sy9hMHlDWGdJSWYxaHVcbnRTNEFLeGdJaENuOFQ3WjJkSDZ2Ny9idk96NjNTSDE3K1ZyQ3Y1dWdsZ0RDSHdHd1FoZUFoUXdFd2hMK2YydHVWNU8ySEhiOTk5WGhcbnAwT1E4UDg0OENXQThFZEFMTlFGNEhVR0FvUS80WitKOEE5YUNTRDhFU0N2NndMd0FnTUJ3cC93ejFUNEI2VUVFUDRJbUJkMEFYaUtcbmdRRGhUL2huTXZ4dEx3R0VQd0xvS1YwQXBqRVFJUHdKLzB5SHY2MGxnUEJIUUUzVEJlQjJCZ0tFUCtIdlJmamJWZ0lJZndUWTdib0FcbjNNQkFnUEFuL0wwSy95NWYzWGhRN1drMGQ1ejBRNklJZndUWURib0FqR0FnUVBnVC9sNkdmNWZyOG9yVnU5WG1QVGI0RDBkT3F0R2NcbjR3aTJFYm9BWE1KQWdQQW4vUHQ2dG44bXdyKzdsdzZlVU5GNDNQZnhhSTdHMVBjK3F1SWNSeGhjOGlsWjg3b0VORE1ZSVB3Si81N2VcbjZxZGY3S08vczgvMHVwcXh1Nkx6Yll4K3JwOHAyOHM0eHhFR3pUcjd1d3BBTlFNQ3dwL3c3KzJWdnZxQ1BTOUt3TTBiRHFvL2xaOVNcbkxkMWVycFRwbzBsS3g2OFAxL0o5UDhLa3Vuc0JLR0pBUVBnVC9qMkZmOWZoVlFuUUptdzZwSlpWMVdmMGF3SDljZjliUjArcThWSTZcbk9MOFJNa1hkQzhCR0JnU0VQK0hmVy9qN1VRSzBPN1llVmtzcTYxVnRTN3RyWTNBczBxWVdsSjlTdDI0NnhMbU5zTnJZdlFBc1lVQkFcbitCUCtmWVcvWHlXZ3k0UGJ5OVJ2U3V2VXZqUE5LcG5QQmZTbkNBWDE1OVV2RDlXb3U3ZVZjazREa3ZuZEM4QXZHQkFRL29SL2YrSHZcbmR3bm9vaisyLytZSFpXcFdZWVg2NGY1cTlXcEpqWHE3NGxUblgvWTY2SCt3cjdyem9zTDc4MHZWdVBWOHR3OWM0QmZkQzhCc0JnU0VcblArR2Z6T0YzQ1FDUXN0bmRDOENkREFqQ0hQNWovbHFrN2xpOGh2QlA4cUFFQUZhNnMzc0J1SVlCUVZqRFg3dHRXUzdobitKQkNRQ3NcbmMwMzNBakJJeEJnVWhESDhiM2wzTStHZjVxRkxnSDYyUCtjUVlEeWQ5WVArWGdCNEdCRENHdjdqVmhVUS9pNGQrc1UrK3RuK25FdUFcbitROEJ1ckFBYkdOZ0NQOHdoZi9vdGZ2Ny9ONS94b3Bjd2ovSlE3L1loL01KTU5xMm5nckFJZ2FHOEE5TCtHczNaVy92TlNTbkxzbFJcblJ4dk9FUDRwSFByRlBweFhnTEVXOVZRQTVqRXdoSDlZd24vMCsvdlZuZS8wZnN0Zi9ySGpoSCtLaDM3d2pyNEhuL01MTU5LOG5nckFcbkxBYUc4QTlEK0d0ZldiV3oxNkI4YWZNdXdqL05RNy9WNzJhZXNRK1lhRlpQQldBU0EwUDRoeUg4dFFsLzJkQmpVTjYzYUpXcVBIT1dcbjhIZmgwRy8xNDF3RGpET3Bwd0x3QlFhRzhBOUQrR3QzdlpOai9WLy9Kb2UvUHZRcmZTZnd3aDNBTkYvb3FRQmtpV1lHaC9BUGV2aGZcbm4xUFlhMkJ1UEZwRitMdDQ2RmY2Y3Q0Qnh0QVpuL1V2QmNBcEFZVU1FT0VmNVBEWGJueXY1NnYvNzErMFNqVzF0aEgrTGw4UXFGL3Bcbnkva0hHS0d3ZStaZldBRCtod0VpL0lNYy90cFhWMjdyTVRSblphOHpQdngxcU90d3R5SDh1NDRsbFh3S0FCamlmL29xQVAvTkFCSCtcblFRNS83ZXZMTi9VWW5IUGUzOHBmL3Brb0xTM3RuSWVBR2Y2N3J3SndPd05FK0FjNS9MV0pmMW5mWTNqTzIxUmdkZmgvZS9sYTQ4Sy9cbjYzaHdleG5uSStDLzIvc3FBRmN5UUlSL2tNTmZ1M1g1eGg0RDlDZnJ0bHNiL25jdVhxM0c1eGFwbytkYmpmd2RmbE5heHprSitPL0tcblhndUFVd0pPTUVpRWYxRERYL3ZhaWkwOWh1aFRPUnV0RGYreGEvWitjbnZqdGxJVmljYU0rejMybldubXZBVDhkZUxDdk8rcEFPUXlcblVJUi9VTU5mRzUvOVFZOUIrdkN5TlNvZWoxdDF3Vi8zOE8veSs3STY0K1plaitwNG5nd0krQ2sza1FMd0t3YUs4QTlxK0d0OXZRTDRcblFOMXBLLy95LzZmZmIvMEIxZEFXTlc0TmZQTURyZ01BZlBTclJBckFkQWFLOEE5cStHdlh2cit2MTFCOWU4OEJxOE8veTJzbE5jYXRcbmcxbUZ2Q0FJOE5IMFJBckFEUXdVNFIvVThPOHlhV2x1ajhINitMdHJWVnMwYW5YNGE1Tmx6RTA3ZnJpL21uTVY4TThOaVJTQVFhS0RcbndTTDhneHIrMnMyOVBBeElXM0dnek9ydzczTGtuRmwzQkx4YVVzUDVDdmhEWi9xZ2ZndUFVd0krWnNBSS82Q0d2M2FkaEdpdjk5UC9cbjcxOVZZMHVyMWVHdnZWMXgycWcxOFhZRmJ3Y0VmUEp4VDFuZld3SDRJd05HK0FjMS9MdjA5a3BnN1FkcnQ2bU9XTXphOE5mbUhqaHVcbjFMcFl3T3VCQWIvOE1aa0NNSU1CSS95REhQNmFEdFI3RnEzcU5YUi9zMk92dGVHdlBiMjMwcWkxOGN0RGZBVUErR1JHTWdYZ0dnYU1cbjhBOXkrSGZwN2IwQVhkN2F2ZC9LOE5lbTdUeHExUHI0d1Q0dUFnUjhjazNDQmNBcEFUVU1HdUVmNVBEdnVpWHdqc1ZyUEM4Qm1RNS9cbmJmcXVjcVBXeUl6ZDNBWUkrS0NtdDV6dnF3Q3NZT0FJL3lDSC96OHVDTnlqN2w3MGYzMkdzZjQ2d0sxckFvNDJuRkV6VnVSbU5QeTFcbk9VWFZScTJUKy9OTE9ZOEI3NjFJcFFBOHk4QVIva0VQLzBTZUR0ajl3c0IwN3c3SVAzWmNUVjJTay9IdzEvUjM3cVljMFhpODh3bUZcbm5NdUE1NTVOcFFEY3pNQVIvbUVJL3k3alYrYjNXd0wwTFlMNk9RSEpQaXlvOHN4WjlkTG1YZjMrODkwS2Z5M25SS014YTZXZy9qem5cbk11Q1BtMU1wQUFORmhNSHoxL1dFdjNFbG9PdUpnZnF4d2ZyZEFiMjlRS2lwdFUxdFBGclZHZnozOVhHM1FTYkNmMHh1c1RyVGJzNzdcbkFMZ0RBUENGenZDQlNSY0Fwd1JzWWdEOVpkSmZjVUVQLzJSTFFQZTNDT3BYQ2Y5azNYWTFiMU9CbXZQK1ZqVXJlNTI2UDRIUTc2SXZcblJIUXIvTFhIQ3N5NkFQRHViWHovRC9oZ1UxOFozMThCK0RrRDZKOWZIYTRsL0gyOEpxQy9Dd1BkY3R1eVhEWG1yMFd1L3Z5cmpwdFRcbkhJOUYyamlmQVgvOFBKMENjQThENkkvdmZIaE14ZUtFdjk5M0IvUjNpMkM2Ym5sM3Mrcy85d1A1WlVhdEhaNEFDUGptbm5RS3dGQVJcbll4QzlkYysyVW5XdUkwYjRHL0tjQVAyd29IdVMrRGcvMFkvODlhY01tZmlaMTljMUdiTnVtcU14ZGV1bVE1elhnUGQwZGc5TnVRQTRcbkpXQVhBK2xoNE9SK3JFck90aEQraHRIZnovZjE3b0JFM2ZuT2FuVlQ5blkxZXUzK2pQeWN6KzgzNjk3L3Q0NmU1THdHL0xHcnYzeFBcbnBBRE1ZeUM5ODl3K3N6Ynd4dmFvdW4zclllYm03MThMN08xOGxmQ2twYmtKaC81ZDcrUjBsb2V2ck5xcFJyKy9QMk0vbTM3MGI1dEJcbm4vMDN5ZG9aditFZzZ3Ynd4enczQ3NBdERLUkhmMlhtRnF1cVNKdFJEMi9SajVObGJuci9la0IvakQ4Kyt3UDF0UlZiMUszTE42cUpcbmYxbmYrWlhCVjZVazNQamVkblY5VHFFblA0ditoT1prYTRkUjVmSFhoMnRaSjRCL2JuR2pBR1NKZWdZejgzNW0yT3RiNXgwNHdieFlcblFJZS8vcHJHdEsrTjlBT3NtQi9BRnpxenM5SXVBRTRKV01hQVp2NkJQeWI5QlZmYzFLeEdNeStFZjRvWC9rM1pYc2I4QVA1WmxraTJcbkoxb0FubUJBTSt2SCsvOW0xQ2IrWkNGdmJpUDhVenUrOTFFVjh3UDQ2d2szQzhCd0VXZFFNMmRkclRtM2J1MXBpREFuaEg5S3h4K09cbmNOVS80RE9kMWNOZEt3Qk9DZGpMd0diR2wvS0tWU1Jxem4zL2N3OGNaMTRJLzZRUC9md0J2allDZkxjMzBWeFBwZ0RNWjJBelkxWmhcbmhWRWIrYVF0SmN3TDRaL1VvVjlZeFVWL2dCSG1aNklBZklPQnpZeEZ4MDRiczVHWG5tdGxUZ2gvd2grdzF6Y3lVUUQwNjRHYkdGejNcbmxVbm9tbkxrMVRZeEo0US80US9ZU1dmMFFOY0xnRk1DVmpMQTdqUHB1ZitMSyt1WkU4S2Y4QWZzdERLWlRFKzJBSEE3WUFidS96ZnBcbmVMMlVwN2NSL29RL0VPVGIvMUl0QUplTE5nYlpQWk5sZ3pmcCtHMVpIZk5DK0JQK2dIMTBObCtlc1FMZ2xJQWNCdG85K2dVdUpoMUxcbnEvZ0tnUEFuL0FFTDVTU2I1NmtVZ01jWmFQZjgxNTVLNCs3bFpsNElmOElmc003alhoU0F5MFFMZysyTy96VHNHUURWelczTUMrRlBcbitBTjIwWmw4V2NZTGdGTUNzaGx3ZCtpWHBwaDIzSnRmeXR3US9vUS9ZSS9zVkxJODFRTHdLQVB1amxzM0hUSnV3MytscElhNUlmd0pcbmY4QWVqM3BaQUM0VkVRWTlmV055aTFVc2J0YW1YM0syaFdlNkUvNkVQMkFIbmNXWGVsWUFuQkt3bklGM3grbTJEdU0yL3psRjFjd05cbjRjOGNBZVpibm1xT3AxTUFIbWJnM2JHNy9yeHhBVkFWYVZOamM0dVpIOElmZ05rZTlxTUFYQ0xPTWZqcGU2MmtScGw0TENnL3hmd1Fcbi9nRE1wVFA0RXM4TGdGTUNsaklCNmJzdnYxU1pldkJWQU9FUHdGaEwwOG53ZEF2QXZVeUFPL1JIN2lZZUxkR1krdGFPSTh3UjRRL0FcblBQZjZXUUN5UkNXVGtMNkZ4MDRiK3luQW1mYW9tcnFkRWtENEF6Q0l6dDRzM3dxQVV3SmVaQ0xTOTFoQnVUTDVvQVFRL2dDTThtSzZcbitlMUdBUmdob2t4Ryt2Um1UQWtnL0FsL0FQM1FtVHZDOXdMZ2xJRFZURWo2SHRsNVJKbCtVQUlJZndDK1crMUdkcnRWQUtZd0llN1FcbmIrT2pCQkQraEQrQVBrd3hxUUFNRU1lWmxQUTlrRjltM0tPQktRR0VQd0JqNkt3ZFlFd0JjRXJBeTB5TU81WlUxaXNiRGtvQTRRL0FcbmN5KzdsZHR1Rm9DUklzN2twTys2dkdLMXB5RkNDU0Q4Q1g4QTNlbU1IV2xjQVhCS3dEb215QjFmMzNoSW5XaHBwd1FRL29RL2dDN3JcbjNNeHN0d3ZBSTB5UWUzU282aWZ4VVFJSWY4SWZnTTVZa3d2QXhhS09TWExQczBWVktxNFVKWUR3Si95QmNOUFplckd4QllBbkEyYkdcbnp3NGNwd1FRL29RL3dKUC9QbVY2QWJoU05ETlpsQURDbi9BSDRBcWRxVmNhWHdDY0V2QW1FMFlKQ0hJSklQd0JlT2pOVEdSMXBnckFcbktCRmowaWdCUVN3QmhEOEFEK2tzSFdWTkFYQkt3SHRNSENVZ2FDV0E4QWZnc2ZjeWxkT1pMQUFUbVRoS1FKQktBT0VQd0FjVHJTc0FcblRna29ZUElvQVVFb0FZUS9BQjhVWkRLak0xMEFlREFRSmNENkVrRDRBd2pDZzMrOExnRDZMWUhsVENJbHdOWVNRUGdEOEluT3pnSFdcbkZnQ25CRHpEUkZJQ2JDd0JoRDhBSHoyVDZYejJvZ0JjS2hxWVRFcUFUU1dBOEFmZ0k1MlpsMXBmQUhnOE1DWEF0aEpBK0FQdzJZdGVcblpMTlhCV0NvcUdkU0tRR21sd0RDSDREUGRGWU9EVXdCY0VyQWo1aFlTb0RKSllEd0IyQ0FIM21WeTE0V0FIMHRBSzhLcGdRWVdRSUlcbmZ3QUdxUFBpdTMvUEM0QlRBcjdQQkZNQ1RDc0JoRDhBUTN6ZnkwejJ1Z0FNRnNlWlpFcUFLU1dBOEFkZ0NKMk5nd05iQUp3UzhEUVRcblRRa3dvUVFRL2dBTThyVFhlZXhIQVJna0twbHNTa0IvSmVCYk96SlhBbTdmU3ZnRE1JYk94RUdCTHdCT0Naak5oRk1DK2p0YW9qRTFcbnA2amE5VEdZdnF0Y05VckJJUHdCR0dLMkgxbnNWd0VZS0k0dzZaU0FSSTRGNWFmVTJOeml0SC92MFdMZWdSTXFHbzhUL2dCTW9iTndcbllHZ0tnRk1DcGpQeGxJQkVqNnBJVytlbkFhTlQvSDJmTEt4UXhVM05SdjV1aEQ4UWF0UDl5bUUvQzBDV0tHTHlLUUhKSENWblc5UXJcbkpUWHEzdnpTQkM3eUsxRno1WGZjMHhBeDl2Y2gvSUZRMHhtWUZib0M0SlNBU1N3QVNrQ3FSM1Z6bTFwZjE2U1dWdFdyMzViVnFkZExcbmE5WGl5bnFWVjl1a1NzKzFHdi96RS81QTZFM3lNNE45TFFCT0NWakpJcUFFaE8wZy9JSFFXK2wzL3BwUUFFYUtWaFlESllEd0J4QVNcbk92TkdocjRBT0NWZ1BndUNFa0Q0QXdpSitTWmtyeWtGWUlpb1lWRlFBZ2gvQUFHbnMyNElCZUNmUzhCTUZnWWxnUEFIRUhBelRjbGRcbmt3ckFSYUtReFVFSklQd0JCSlRPdUlzb0FEMlhnQWtzRUVvQTRROGdvQ2FZbExsR0ZRQ25CQ3hqa1ZBQ0NIOEFBYlBNdEx3MXNRQmNcbkxTSXNGa29BNFE4Z0lIU21YVTBCU0t3RVBNZUNvUVFRL2dBQzRqa1RzOWJVQWpCQWZNaWlvUVFRL2dBc3A3TnNBQVVndVJJd1RuU3dcbmVDZ0JoRDhBUytrTUcyZHF6aHBiQUp3UzhBb0xpQkpBK0FPdzFDc21aNnpwQldDd0tHVVJVUUlJZndDVzBkazFtQUtRL2l1RDR5d21cblNnRGhEOEFTT3JNbW1aNnZ4aGNBcHdRc1lFRlJBZ2gvQUpaWVlFTzIybElBaG9rVExDcEtBT0VQd0hBNnE0WlJBTnd0QVEreHNDZ0JcbmhEOEF3ejFrUzY1YVV3Q2NFcERONHFJRUVQNEFESlZ0VTZiYVZnQ0dpMU1zTWtvQTRRL0FNRHFiaGxNQU1sc0NwckRRS0FHRVB3RERcblRMRXRUNjByQUU0SmVJdkZSZ2tnL0FFWTRpMGJzOVRXQXZCcFVjS2lvd1FRL2dCOHByUG8weFFBYjB2QWphS2R4VWNKSVB3QitFUm5cbjBJMjI1cWkxQmNBcEFjK3pBQ2tCaEQ4QW56eHZjNGJhWGdDeXhDWVdJU1dBOEFmZ01aMDlXUlFBZjB2QUNOSEFZcVFFRVA0QVBLSXpcblo0VHQrV2w5QVhCS3dEUVdwQjJlTGFwU0xkR1lrZUdmYzZKUlhVLzRBK2pmdENCa1p5QUtnRk1DL3N5aXRNUFU3VWZVaVpaMlk0SS9cbkZsZnFWNGRybVJzQWlmaHpVSEl6U0FWZ2lEakk0clREMXpjZVVuc2FJcjZILzdtT21Qck9oOGVZRXdDSjBCa3poQUpnWmdtNFZqU3hcblNPMXdYVjZ4V2xKWjMva1h1QjlIeWRrV2RjKzJVdVlDUUNKMHRsd2JwTXdNVkFGd1NzQlVFV2V4MnVPQi9ESzF2cTdKcytDdmlyU3BcbjUvWlZxMnR6R1hzQUNkR1pNalZvZVJtNEF1Q1VnUGtzV1BzOHN2Tkk1MVg0bVRwT3RuWjAzb2t3TnJlWThRYVFqUGxCek1xZ0ZnRDlcbmZJQThGcTJkSGlzb1Z3dVBuZTc4U3ozZEl4S05xWFcxVGVySCsvL0dGZjRBVXBGbisvMytvU29BVGdtNFFoeGo4ZHJ0dnZ4UzlWcEpcbmpkcGRmMTZkYnV2bzkzb0JmVkZmMmJsV3RVZ0t4S3pDQ3ZXbFBQN2FCNUF5blNGWEJEVW5BMXNBdXIwdm9JVkZIQnhqY292VnJac09cbnFTbmJ5OVIvU3NELzE1NUtOVzNuVVRWNXkySCt3Z2ZnSnAwZE53WTVJd05kQUp3U01KT0ZEQUJJMHN5ZzUyUGdDNEJUQXQ1Z01RTUFcbkV2UkdHTEl4TEFWZ2tOakJvZ1lBOUVObnhTQUtRTEJLd0ZXaWdzVU5BT2lGem9pcndwS0xvU2tBVGdrWUt4cFo1QUNBQytoc0dCdW1cblRBeFZBWEJLd0dUUnptSUhBRGgwSmt3T1d4NkdyZ0E0SldBR0N4NEE0SmdSeGl3TVpRRndTc0JjRmowQWhON2NzT1pnYUF1QVV3SVdcbnNmZ0JJTFFXaFRrRHcxNEE5TzJCbXprSkFDQjBOb2ZsZGo4S1FPOGxZSmc0eU1rQUFLR2g5L3hoWWMrLzBCY0Fwd1NNRkhXY0ZBQVFcbmVIcXZIMG4yVVFDNmw0Q2JSQk1uQndBRWx0N2pieUx6S0FBOWxZQ0pJc0pKQWdDQm8vZjJpV1FkQmFDdkVuQ1hhT1ZrQVlEQTBIdjZcblhXUWNCU0NSRXZDZzZPQ2tBUURyNmIzOFFiS05BcEJNQ1hoTXhEaDVBTUJhZWc5L2pFeWpBS1JTQW1hTE9DY1JBRmhINzkyenlUSUtcblFEb2w0RmxPSkFDd3pyTmtHQVhBalJMd1UwNG1BTERHVDhrdUNvQ2JKZUJWVGlvQU1ONnJaQllGZ0JJQUFJUS9LQUI4SFFBQWZPd1BcbkNrRDZGd1p5ZHdBQW1IRzFQeGY4VVFBOHYwV1E1d1FBZ0wvMytYT3JId1hBdDRjRjhjUkFBUERuQ1g4ODVJY0M0UHRqZzNsM0FBQjRcbnA1WEgrMUlBVEhxQkVHOFJCSURNMDNzdEwvYWhBQmozS3VFbVRrNEF5Qmk5eC9KS1h3cUFrU1hnSmxISFNRb0FydE43NjAxa0RRWEFcbjVCSXdVaHprWkFVQTErZzlkU1FaUXdHd29RUU1FNXM1YVFFZ2JYb3ZIVWEyVUFCc0tnR0R4Q0pPWGdCSW1kNURCNUVwRkFCYmk4QmNcblRtSUFTTnBjTW9RQ0VJUVNNRU8wYzBJRFFMLzBYam1EN0tBQUJLa0VUQmFObk53QTBDdTlSMDRtTXlnQVFTd0JZMFVGSnprQS9BdTlcbk40NGxLeWdBUVM0QlY0a2RuT3dBOEhkNlQ3eUtqS0FBaE9VT2dUOXcwZ05BNTE3SWxmNFVnRkJlSE5qTUJnQWdoSnE1Mkk4Q0VQWVNcbk1FNlVzeGtBQ0JHOTU0MGpBeWdBbElDMUgzOUd2TSttQUNBRTlGNzNHZlorQ2dEK1VRS3l4RHdSWjRNQUVFQnhaNC9MWXMrbkFLRG5cbkl2QUF6d3NBRU1ENyt4OWdqNmNBb1A4U2NJM1l4NllCSUFEMFhuWU5lenNGQUltWGdFdkVtMndlQUN5bTk3QkwyTk1wQUVpdENFd1JcbnA5aElBRmhFNzFsVDJNTXBBRWkvQlB5YldNZW1Bc0FDZXEvNk4vWnVDZ0RjS3dFWGlUbWlqUTBHZ0lIYW5EM3FJdlpzQ2dBeVV3UnVcbkVBZlpiQUFZUk85Sk43QkhVd0RnelFXQ2I3RHBBRERBRzF6b1J3R0E5MFhnMzhWSk5pQUFQdEI3ejcrekYxTUE0RjhKR0M2eTJZd0FcbmVFanZPY1BaZ3lrQU1LTUlQQ1JPc0RFQnlDQzl4enpFbmtzQmdIa2xZSmhZd1BzRUFHVGdPZjU2YnhuR1hrc0JnTmxGWUpJb1pkTUNcbjRBSzlsMHhpYjZVQXdKNFNNRmk4SWpyWXdBQ2tvTVBaUXdhenAxSUFZR2NSR0NjK1pETURrQVM5WjR4akQ2VUF3UDRTTUVBOEp5SnNcbmJBRDZFSEgyaWdIc25SUUFCS3NJWEMyV3Nja0I2SUhlRzY1bXI2UUFJTmhGWUlJb1pNTUQ0T3dGRTlnYktRQUkxOHVGWm9vYU5rQWdcbmxHcWNQWUNYOTFBQUVOSWlNRVRNRjYxc2lFQW90RHJuL0JEMlFBb0FvSXZBU0xHU3pSRUlOSDJPajJUUEF3VUF2VDFFcUlpTkVnaVVcbkloN21Bd29BRWlrQldXSzZPTUxHQ1ZqdGlITXVaN0czZ1FLQVpJckFRREZiVkxLUkFsYXBkTTdkZ2V4bG9BQWduU0l3U0R3dGpyT3hcbkFrWTc3cHlyZzlpN1FBR0EyKzhYK0w2b1k2TUZqRkxubkpzOHR4OFVBR1MwQ0Z3cWZpVHEyWGdCWDlVNzUrS2w3RTJnQU1ETElqQlVcbnZDZ2EySWdCVHpVNDU5NVE5aUpRQU9EM0p3TFBpS05zekVCR2xUdm5Hbi94Z3dJQTQ5NDYrSWdvWUtNR1hGWGduRnU4cFE4VUFCaGZcbkJpYUs5MFNNelJ0SVNjdzVoeWF5cDRBQ0FCdUx3Q2p4cG1obVF3Y1MwdXljTTZQWVEwQUJRQkNLd0pYT1JVdmNRZ2owZml1ZlBrZXVcblpNOEFCUUJCTEFJWE85OWxyaE54Tm4yRVhOdzVGL1E1Y1RGN0JDZ0FDTk1iQ0YvbUNZTUk2UlA3WHViTmZLQUFnTHNIMW40OFJhd1dcblVjSUJBUlYxMXZnVXJ1WUhCUUQ0MXpJd3d2a2VsQmNRSVVndjV0RnJlZ1RuT0NnQVFQOUZRTCtTK0Y2eFZKd2pSR0NaYzg3YXZaZFhcbjhZSUNBS1JlQmk0UkQ0dmxJa0s0d0ZBUlo0M3F0WG9KNXk0b0FJRDdqeDErVkdTTEZrSUhQbXR4MXVLalBKNFhGQURBdXpKd21YaGNcbjVJZzJ3Z2dlYVhQV25GNTdsM0V1Z2dJQStGc0dMaGRQaUpXaWlaQ0N5NXFjdGFYWDJPV2NjNkFBQUdhV2dZSGlHMksrMk1zRGg1RGlcbkEzcjJPbXRJcjZXQm5GdWdBQUQyRllMaHpsOXV5MFE5NFlaZTFEdHJSSytWNFp3N29BQUF3YnU5OEJZeFQremliWVdoZjl2ZUxtY3RcbjNNTHRlcUFBQU9FcUJFUEYzVTRJYk9DWkE0Ry9OMytETTlkNnpvZHlEb0FDQUtEN1k0bS9JcjdyZkJ4Y1JYQmFxOHFadys4NmM4cmpcbmR3RUtBSkJVS2ZpY2M1LzM3MFFoeng4dzluNzhRbWVPOUZ4OWpyVUxVQUNBVEh4S01OWUptbCtJTlh4UzRQbXo5VmM3WTYvbllBeC9cbjNRTVVBTURQWXZBWmNadDRSdnhKN0JiTkJIWmFqOWJWRituOTBma1lYOStPTjR5MUJsQUFBRnZ1T3ZpQ21DUm1PUmVnTFJMYlJIWElcbjcwS0lPWitjYkJVTHhWd3gweWxSbitlcWZJQUNBQVM1SUF3UzE0Zzd4V3puWSswbFlxTW9ja3BDczZWL3ZldHcvOGk1OG42eGVGazhcbktlNFFYeFFYc3dZQUNnQ0F2b3VDZmlQaUNIR0R1RjFNRTArSkY4VHJ6bC9RSzV6dnh2UEVGckZUN0JIRm9zejU3cnhXTkRvQkhYVkVcbm5QK3Mxdm52bERuL216M09QMk9MODg5YzdmdzdGanIvemhlY24yR2E4ek45V1h4V0RHYk9BUFA5ZjF3bzFQUURsK2h2QUFBQUFFbEZcblRrU3VRbUNDJy8+YDtcbmV4cG9ydHMuZGVmYXVsdCA9IGljb247XG4iXSwic291cmNlUm9vdCI6IiJ9