(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_CONFIG_SITES = [
    {
        urlRegExp: '^https://github.com',
        markdownBodySelector: '.markdown-body',
        stickyHeight: 0,
    },
    {
        urlRegExp: '^https://github.com/.*/issues/',
        markdownBodySelector: '.markdown-body',
        // in issues page, the issues title will be sticky, so we need to minus its height
        stickyHeight: 60,
    },
    {
        urlRegExp: '^https://www.cnblogs.com/.*.html/',
        markdownBodySelector: '#cnblogs_post_body',
        stickyHeight: 0,
    },
    {
        markdownBodySelector: '.Post-RichText',
        stickyHeight: 52,
        urlRegExp: '^https://zhuanlan.zhihu.com/p/',
    },
];
// 插件是否开启
exports.DEFAULT_EXTENSION_ENABLE = true;
// 抽屉是否打开
exports.DEFAULT_EXTENSION_ACTIVE = false;


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __webpack_require__(/*! ./constants */ "./src/constants.ts");
function debug(...args) {
    console.group('%c essay-outline: ', 'color: white;background:#1791f2;');
    console.debug('%clog:', 'color: red', ...args);
    console.groupEnd();
}
exports.debug = debug;
// enable, 是否启用插件
function getStorageEnable(callback) {
    // get enabled, default value is true
    chrome.storage.sync.get({ enabled: constants_1.DEFAULT_EXTENSION_ENABLE }, (item) => {
        const { enabled } = item;
        debug(`get enabled: ${enabled}`);
        if (callback) {
            callback(enabled);
        }
    });
}
exports.getStorageEnable = getStorageEnable;
function setStorageEnable(enabled, callback) {
    chrome.storage.sync.set({ enabled }, () => {
        debug(`set enabled: ${enabled}`);
        if (callback) {
            callback();
        }
    });
}
exports.setStorageEnable = setStorageEnable;
function getStorageSites(callback) {
    // get enabled, default value is true
    chrome.storage.sync.get({ configSites: constants_1.DEFAULT_CONFIG_SITES }, (item) => {
        const { configSites } = item;
        if (callback) {
            callback(configSites);
        }
    });
}
exports.getStorageSites = getStorageSites;
function setStorageSites(configSites, callback) {
    chrome.storage.sync.set({ configSites }, () => {
        debug(`set configSites: ${JSON.stringify(configSites)}`);
        if (callback) {
            callback();
        }
    });
}
exports.setStorageSites = setStorageSites;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVCYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELG9CQUFvQixtQkFBTyxDQUFDLHVDQUFhO0FBQ3pDO0FBQ0Esc0RBQXNELG1CQUFtQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixnREFBZ0Q7QUFDN0UsZUFBZSxVQUFVO0FBQ3pCLDhCQUE4QixRQUFRO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsVUFBVTtBQUN2Qyw4QkFBOEIsUUFBUTtBQUN0QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsZ0RBQWdEO0FBQzdFLGVBQWUsY0FBYztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGNBQWM7QUFDM0Msa0NBQWtDLDRCQUE0QjtBQUM5RDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSIsImZpbGUiOiJjb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuREVGQVVMVF9DT05GSUdfU0lURVMgPSBbXG4gICAge1xuICAgICAgICB1cmxSZWdFeHA6ICdeaHR0cHM6Ly9naXRodWIuY29tJyxcbiAgICAgICAgbWFya2Rvd25Cb2R5U2VsZWN0b3I6ICcubWFya2Rvd24tYm9keScsXG4gICAgICAgIHN0aWNreUhlaWdodDogMCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdXJsUmVnRXhwOiAnXmh0dHBzOi8vZ2l0aHViLmNvbS8uKi9pc3N1ZXMvJyxcbiAgICAgICAgbWFya2Rvd25Cb2R5U2VsZWN0b3I6ICcubWFya2Rvd24tYm9keScsXG4gICAgICAgIC8vIGluIGlzc3VlcyBwYWdlLCB0aGUgaXNzdWVzIHRpdGxlIHdpbGwgYmUgc3RpY2t5LCBzbyB3ZSBuZWVkIHRvIG1pbnVzIGl0cyBoZWlnaHRcbiAgICAgICAgc3RpY2t5SGVpZ2h0OiA2MCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdXJsUmVnRXhwOiAnXmh0dHBzOi8vd3d3LmNuYmxvZ3MuY29tLy4qLmh0bWwvJyxcbiAgICAgICAgbWFya2Rvd25Cb2R5U2VsZWN0b3I6ICcjY25ibG9nc19wb3N0X2JvZHknLFxuICAgICAgICBzdGlja3lIZWlnaHQ6IDAsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG1hcmtkb3duQm9keVNlbGVjdG9yOiAnLlBvc3QtUmljaFRleHQnLFxuICAgICAgICBzdGlja3lIZWlnaHQ6IDUyLFxuICAgICAgICB1cmxSZWdFeHA6ICdeaHR0cHM6Ly96aHVhbmxhbi56aGlodS5jb20vcC8nLFxuICAgIH0sXG5dO1xuLy8g5o+S5Lu25piv5ZCm5byA5ZCvXG5leHBvcnRzLkRFRkFVTFRfRVhURU5TSU9OX0VOQUJMRSA9IHRydWU7XG4vLyDmir3lsYnmmK/lkKbmiZPlvIBcbmV4cG9ydHMuREVGQVVMVF9FWFRFTlNJT05fQUNUSVZFID0gZmFsc2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4vY29uc3RhbnRzXCIpO1xuZnVuY3Rpb24gZGVidWcoLi4uYXJncykge1xuICAgIGNvbnNvbGUuZ3JvdXAoJyVjIGVzc2F5LW91dGxpbmU6ICcsICdjb2xvcjogd2hpdGU7YmFja2dyb3VuZDojMTc5MWYyOycpO1xuICAgIGNvbnNvbGUuZGVidWcoJyVjbG9nOicsICdjb2xvcjogcmVkJywgLi4uYXJncyk7XG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xufVxuZXhwb3J0cy5kZWJ1ZyA9IGRlYnVnO1xuLy8gZW5hYmxlLCDmmK/lkKblkK/nlKjmj5Lku7ZcbmZ1bmN0aW9uIGdldFN0b3JhZ2VFbmFibGUoY2FsbGJhY2spIHtcbiAgICAvLyBnZXQgZW5hYmxlZCwgZGVmYXVsdCB2YWx1ZSBpcyB0cnVlXG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoeyBlbmFibGVkOiBjb25zdGFudHNfMS5ERUZBVUxUX0VYVEVOU0lPTl9FTkFCTEUgfSwgKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgeyBlbmFibGVkIH0gPSBpdGVtO1xuICAgICAgICBkZWJ1ZyhgZ2V0IGVuYWJsZWQ6ICR7ZW5hYmxlZH1gKTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhlbmFibGVkKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5nZXRTdG9yYWdlRW5hYmxlID0gZ2V0U3RvcmFnZUVuYWJsZTtcbmZ1bmN0aW9uIHNldFN0b3JhZ2VFbmFibGUoZW5hYmxlZCwgY2FsbGJhY2spIHtcbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7IGVuYWJsZWQgfSwgKCkgPT4ge1xuICAgICAgICBkZWJ1Zyhgc2V0IGVuYWJsZWQ6ICR7ZW5hYmxlZH1gKTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnNldFN0b3JhZ2VFbmFibGUgPSBzZXRTdG9yYWdlRW5hYmxlO1xuZnVuY3Rpb24gZ2V0U3RvcmFnZVNpdGVzKGNhbGxiYWNrKSB7XG4gICAgLy8gZ2V0IGVuYWJsZWQsIGRlZmF1bHQgdmFsdWUgaXMgdHJ1ZVxuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KHsgY29uZmlnU2l0ZXM6IGNvbnN0YW50c18xLkRFRkFVTFRfQ09ORklHX1NJVEVTIH0sIChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY29uZmlnU2l0ZXMgfSA9IGl0ZW07XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgY2FsbGJhY2soY29uZmlnU2l0ZXMpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmdldFN0b3JhZ2VTaXRlcyA9IGdldFN0b3JhZ2VTaXRlcztcbmZ1bmN0aW9uIHNldFN0b3JhZ2VTaXRlcyhjb25maWdTaXRlcywgY2FsbGJhY2spIHtcbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7IGNvbmZpZ1NpdGVzIH0sICgpID0+IHtcbiAgICAgICAgZGVidWcoYHNldCBjb25maWdTaXRlczogJHtKU09OLnN0cmluZ2lmeShjb25maWdTaXRlcyl9YCk7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5zZXRTdG9yYWdlU2l0ZXMgPSBzZXRTdG9yYWdlU2l0ZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9