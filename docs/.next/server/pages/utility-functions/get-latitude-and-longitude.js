module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/utility-functions/get-latitude-and-longitude.md");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/utility-functions/get-latitude-and-longitude.md":
/*!***************************************************************!*\
  !*** ./pages/utility-functions/get-latitude-and-longitude.md ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/react */ "@mdx-js/react");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nextra_theme_docs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nextra-theme-docs */ "nextra-theme-docs");
/* harmony import */ var nextra_theme_docs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nextra_theme_docs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nextra_ssg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nextra/ssg */ "nextra/ssg");
/* harmony import */ var nextra_ssg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nextra_ssg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var C_Users_paul_Documents_Projects_eezyquote_react_google_places_autocomplete_docs_theme_config_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme.config.js */ "./theme.config.js");
var _jsxFileName = "C:\\Users\\paul\\Documents\\Projects\\eezyquote\\react-google-places-autocomplete\\docs\\pages\\utility-functions\\get-latitude-and-longitude.md";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



/* @jsx mdx */





const makeShortcode = name => function MDXDefaultShortcode(props) {
  console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", _extends({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 10
    }
  }));
};

const MDXLayout = function NextraPage(props) {
  return Object(nextra_ssg__WEBPACK_IMPORTED_MODULE_3__["withSSG"])(nextra_theme_docs__WEBPACK_IMPORTED_MODULE_2___default()({
    filename: "C:/Users/paul/Documents/Projects/eezyquote/react-google-places-autocomplete/docs/pages/utility-functions/get-latitude-and-longitude.md",
    route: "/utility-functions/get-latitude-and-longitude",
    meta: {},
    pageMap: [{
      "name": "examples",
      "route": "\\examples"
    }, {
      "name": "index",
      "route": "\\"
    }, {
      "name": "meta.json",
      "meta": {
        "index": "Getting Started",
        "props": "Props",
        "examples": "Examples",
        "utility-functions": "Utility functions"
      }
    }, {
      "name": "props",
      "route": "\\props"
    }, {
      "name": "utility-functions",
      "children": [{
        "name": "geocode-by-address",
        "route": "\\utility-functions\\geocode-by-address"
      }, {
        "name": "geocode-by-place-id",
        "route": "\\utility-functions\\geocode-by-place-id"
      }, {
        "name": "get-latitude-and-longitude",
        "route": "\\utility-functions\\get-latitude-and-longitude"
      }, {
        "name": "meta.json",
        "meta": {
          "geocode-by-address": "Geocode by Address",
          "geocode-by-place-id": "Geocode by Place ID",
          "get-latitude-and-longitude": "Get Lat and Long"
        }
      }],
      "route": "\\utility-functions"
    }]
  }, C_Users_paul_Documents_Projects_eezyquote_react_google_places_autocomplete_docs_theme_config_js__WEBPACK_IMPORTED_MODULE_4__["default"]))(props);
};

function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(MDXLayout, _extends({}, props, {
    components: components,
    mdxType: "MDXLayout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, `This functions allows to get the latitude and longitude of a geocoder result.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, `Firm`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("code", _extends({
    "className": "language-tsx",
    "parentName": "pre"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 10
    }
  }), `const getLatLng = (result: google.maps.GeocoderResult): Promise<any>;
`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, `Usage`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("code", _extends({
    "className": "language-js",
    "parentName": "pre"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 10
    }
  }), `import { geocodeByAddress, getLatLng } from '@eezyquote/react-google-places';

geocodeByAddress('La penne-sur-huveaune, France')
  .then(results => getLatLng(results[0]))
  .then(({ lat, lng }) =>
    console.log('Successfully got latitude and longitude', { lat, lng })
  );
`)));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./theme.config.js":
/*!*************************!*\
  !*** ./theme.config.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\paul\\Documents\\Projects\\eezyquote\\react-google-places-autocomplete\\docs\\theme.config.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// theme.config.js
/* harmony default export */ __webpack_exports__["default"] = ({
  github: 'https://github.com/EezyQuote/react-auto-complete',
  // link of the project repo
  siteGithub: 'https://github.com/EezyQuote/react-auto-complete',
  // link of the docs repo path
  titleSuffix: ' – React Auto Complete',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null,
  // <- customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: `${new Date().getFullYear()} © EezyQuote`,
  footerEditOnGitHubLink: true,
  // will link to the docs repo
  logo: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "/place.svg",
    className: "mr-2 font-extrabold hidden md:inline",
    style: {
      height: "2em"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx("span", {
    className: "text-gray-600 font-normal hidden md:inline",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, "React Auto Complete")),
  head: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx("meta", {
    name: "msapplication-TileColor",
    content: "#ffffff",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "theme-color",
    content: "#ffffff",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx("meta", {
    httpEquiv: "Content-Language",
    content: "en",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "description",
    content: "Eezyquote - React Google Places",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "og:description",
    content: "Eezyquote - React Google Places",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "twitter:card",
    content: "summary_large_image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "twitter:site",
    content: "@eezyquote",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "og:title",
    content: "Eezyquote - React Google Places",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "apple-mobile-web-app-title",
    content: "EezyQuote",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }))
});

/***/ }),

/***/ "@mdx-js/react":
/*!********************************!*\
  !*** external "@mdx-js/react" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mdx-js/react");

/***/ }),

/***/ "nextra-theme-docs":
/*!************************************!*\
  !*** external "nextra-theme-docs" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nextra-theme-docs");

/***/ }),

/***/ "nextra/ssg":
/*!*****************************!*\
  !*** external "nextra/ssg" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nextra/ssg");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvdXRpbGl0eS1mdW5jdGlvbnMvZ2V0LWxhdGl0dWRlLWFuZC1sb25naXR1ZGUubWQiLCJ3ZWJwYWNrOi8vLy4vdGhlbWUuY29uZmlnLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtZHgtanMvcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0cmEtdGhlbWUtZG9jc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHRyYS9zc2dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIm1ha2VTaG9ydGNvZGUiLCJuYW1lIiwiTURYRGVmYXVsdFNob3J0Y29kZSIsInByb3BzIiwiY29uc29sZSIsIndhcm4iLCJNRFhMYXlvdXQiLCJOZXh0cmFQYWdlIiwid2l0aFNTRyIsIndpdGhMYXlvdXQiLCJmaWxlbmFtZSIsInJvdXRlIiwibWV0YSIsInBhZ2VNYXAiLCJsYXlvdXRDb25maWciLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsImlzTURYQ29tcG9uZW50IiwiZ2l0aHViIiwic2l0ZUdpdGh1YiIsInRpdGxlU3VmZml4IiwibmV4dExpbmtzIiwicHJldkxpbmtzIiwic2VhcmNoIiwiY3VzdG9tU2VhcmNoIiwiZGFya01vZGUiLCJmb290ZXIiLCJmb290ZXJUZXh0IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZm9vdGVyRWRpdE9uR2l0SHViTGluayIsImxvZ28iLCJoZWlnaHQiLCJoZWFkIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7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QXdDLFdBQU8sRUFBQyxXQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkY7QUFuQlcsQ0FBZixFOzs7Ozs7Ozs7OztBQ0RBLDBDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL3V0aWxpdHktZnVuY3Rpb25zL2dldC1sYXRpdHVkZS1hbmQtbG9uZ2l0dWRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy91dGlsaXR5LWZ1bmN0aW9ucy9nZXQtbGF0aXR1ZGUtYW5kLWxvbmdpdHVkZS5tZFwiKTtcbiIsIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCdcblxuLyogQGpzeCBtZHggKi9cbmltcG9ydCB3aXRoTGF5b3V0IGZyb20gJ25leHRyYS10aGVtZS1kb2NzJ1xuaW1wb3J0IHsgd2l0aFNTRyB9IGZyb20gJ25leHRyYS9zc2cnXG5pbXBvcnQgbGF5b3V0Q29uZmlnIGZyb20gJ0M6L1VzZXJzL3BhdWwvRG9jdW1lbnRzL1Byb2plY3RzL2VlenlxdW90ZS9yZWFjdC1nb29nbGUtcGxhY2VzLWF1dG9jb21wbGV0ZS9kb2NzL3RoZW1lLmNvbmZpZy5qcydcblxuY29uc3QgbWFrZVNob3J0Y29kZSA9IG5hbWUgPT4gZnVuY3Rpb24gTURYRGVmYXVsdFNob3J0Y29kZShwcm9wcykge1xuICBjb25zb2xlLndhcm4oXCJDb21wb25lbnQgXCIgKyBuYW1lICsgXCIgd2FzIG5vdCBpbXBvcnRlZCwgZXhwb3J0ZWQsIG9yIHByb3ZpZGVkIGJ5IE1EWFByb3ZpZGVyIGFzIGdsb2JhbCBzY29wZVwiKVxuICByZXR1cm4gPGRpdiB7Li4ucHJvcHN9Lz5cbn07XG5cbmNvbnN0IE1EWExheW91dCA9IGZ1bmN0aW9uIE5leHRyYVBhZ2UgKHByb3BzKSB7XG4gICAgcmV0dXJuIHdpdGhTU0cod2l0aExheW91dCh7XG4gICAgICBmaWxlbmFtZTogXCJDOi9Vc2Vycy9wYXVsL0RvY3VtZW50cy9Qcm9qZWN0cy9lZXp5cXVvdGUvcmVhY3QtZ29vZ2xlLXBsYWNlcy1hdXRvY29tcGxldGUvZG9jcy9wYWdlcy91dGlsaXR5LWZ1bmN0aW9ucy9nZXQtbGF0aXR1ZGUtYW5kLWxvbmdpdHVkZS5tZFwiLFxuICAgICAgcm91dGU6IFwiL3V0aWxpdHktZnVuY3Rpb25zL2dldC1sYXRpdHVkZS1hbmQtbG9uZ2l0dWRlXCIsXG4gICAgICBtZXRhOiB7fSxcbiAgICAgIHBhZ2VNYXA6IFt7XCJuYW1lXCI6XCJleGFtcGxlc1wiLFwicm91dGVcIjpcIlxcXFxleGFtcGxlc1wifSx7XCJuYW1lXCI6XCJpbmRleFwiLFwicm91dGVcIjpcIlxcXFxcIn0se1wibmFtZVwiOlwibWV0YS5qc29uXCIsXCJtZXRhXCI6e1wiaW5kZXhcIjpcIkdldHRpbmcgU3RhcnRlZFwiLFwicHJvcHNcIjpcIlByb3BzXCIsXCJleGFtcGxlc1wiOlwiRXhhbXBsZXNcIixcInV0aWxpdHktZnVuY3Rpb25zXCI6XCJVdGlsaXR5IGZ1bmN0aW9uc1wifX0se1wibmFtZVwiOlwicHJvcHNcIixcInJvdXRlXCI6XCJcXFxccHJvcHNcIn0se1wibmFtZVwiOlwidXRpbGl0eS1mdW5jdGlvbnNcIixcImNoaWxkcmVuXCI6W3tcIm5hbWVcIjpcImdlb2NvZGUtYnktYWRkcmVzc1wiLFwicm91dGVcIjpcIlxcXFx1dGlsaXR5LWZ1bmN0aW9uc1xcXFxnZW9jb2RlLWJ5LWFkZHJlc3NcIn0se1wibmFtZVwiOlwiZ2VvY29kZS1ieS1wbGFjZS1pZFwiLFwicm91dGVcIjpcIlxcXFx1dGlsaXR5LWZ1bmN0aW9uc1xcXFxnZW9jb2RlLWJ5LXBsYWNlLWlkXCJ9LHtcIm5hbWVcIjpcImdldC1sYXRpdHVkZS1hbmQtbG9uZ2l0dWRlXCIsXCJyb3V0ZVwiOlwiXFxcXHV0aWxpdHktZnVuY3Rpb25zXFxcXGdldC1sYXRpdHVkZS1hbmQtbG9uZ2l0dWRlXCJ9LHtcIm5hbWVcIjpcIm1ldGEuanNvblwiLFwibWV0YVwiOntcImdlb2NvZGUtYnktYWRkcmVzc1wiOlwiR2VvY29kZSBieSBBZGRyZXNzXCIsXCJnZW9jb2RlLWJ5LXBsYWNlLWlkXCI6XCJHZW9jb2RlIGJ5IFBsYWNlIElEXCIsXCJnZXQtbGF0aXR1ZGUtYW5kLWxvbmdpdHVkZVwiOlwiR2V0IExhdCBhbmQgTG9uZ1wifX1dLFwicm91dGVcIjpcIlxcXFx1dGlsaXR5LWZ1bmN0aW9uc1wifV1cbiAgICB9LCBsYXlvdXRDb25maWcpKShwcm9wcylcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cbiAgICA8cD57YFRoaXMgZnVuY3Rpb25zIGFsbG93cyB0byBnZXQgdGhlIGxhdGl0dWRlIGFuZCBsb25naXR1ZGUgb2YgYSBnZW9jb2RlciByZXN1bHQuYH08L3A+XG4gICAgPGgyPntgRmlybWB9PC9oMj5cbiAgICA8cHJlPjxjb2RlIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtdHN4XCIsXG4gICAgICAgIFwicGFyZW50TmFtZVwiOiBcInByZVwiXG4gICAgICB9fT57YGNvbnN0IGdldExhdExuZyA9IChyZXN1bHQ6IGdvb2dsZS5tYXBzLkdlb2NvZGVyUmVzdWx0KTogUHJvbWlzZTxhbnk+O1xuYH08L2NvZGU+PC9wcmU+XG4gICAgPGgyPntgVXNhZ2VgfTwvaDI+XG4gICAgPHByZT48Y29kZSB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCIsXG4gICAgICAgIFwicGFyZW50TmFtZVwiOiBcInByZVwiXG4gICAgICB9fT57YGltcG9ydCB7IGdlb2NvZGVCeUFkZHJlc3MsIGdldExhdExuZyB9IGZyb20gJ0BlZXp5cXVvdGUvcmVhY3QtZ29vZ2xlLXBsYWNlcyc7XG5cbmdlb2NvZGVCeUFkZHJlc3MoJ0xhIHBlbm5lLXN1ci1odXZlYXVuZSwgRnJhbmNlJylcbiAgLnRoZW4ocmVzdWx0cyA9PiBnZXRMYXRMbmcocmVzdWx0c1swXSkpXG4gIC50aGVuKCh7IGxhdCwgbG5nIH0pID0+XG4gICAgY29uc29sZS5sb2coJ1N1Y2Nlc3NmdWxseSBnb3QgbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZScsIHsgbGF0LCBsbmcgfSlcbiAgKTtcbmB9PC9jb2RlPjwvcHJlPlxuXG4gIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7IiwiLy8gdGhlbWUuY29uZmlnLmpzXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdpdGh1YjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9FZXp5UXVvdGUvcmVhY3QtYXV0by1jb21wbGV0ZScsIC8vIGxpbmsgb2YgdGhlIHByb2plY3QgcmVwb1xuICBzaXRlR2l0aHViOiAnaHR0cHM6Ly9naXRodWIuY29tL0VlenlRdW90ZS9yZWFjdC1hdXRvLWNvbXBsZXRlJywgLy8gbGluayBvZiB0aGUgZG9jcyByZXBvIHBhdGhcbiAgdGl0bGVTdWZmaXg6ICcg4oCTIFJlYWN0IEF1dG8gQ29tcGxldGUnLFxuICBuZXh0TGlua3M6IHRydWUsXG4gIHByZXZMaW5rczogdHJ1ZSxcbiAgc2VhcmNoOiB0cnVlLFxuICBjdXN0b21TZWFyY2g6IG51bGwsIC8vIDwtIGN1c3RvbWl6YWJsZSwgeW91IGNhbiB1c2UgYWxnb2xpYSBmb3IgZXhhbXBsZVxuICBkYXJrTW9kZTogdHJ1ZSxcbiAgZm9vdGVyOiB0cnVlLFxuICBmb290ZXJUZXh0OiBgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IMKpIEVlenlRdW90ZWAsXG4gIGZvb3RlckVkaXRPbkdpdEh1Ykxpbms6IHRydWUsIC8vIHdpbGwgbGluayB0byB0aGUgZG9jcyByZXBvXG4gIGxvZ286IChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8aW1nIHNyYz1cIi9wbGFjZS5zdmdcIiBjbGFzc05hbWU9XCJtci0yIGZvbnQtZXh0cmFib2xkIGhpZGRlbiBtZDppbmxpbmVcIiBzdHlsZT17e2hlaWdodDpcIjJlbVwifX0gLz5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgZm9udC1ub3JtYWwgaGlkZGVuIG1kOmlubGluZVwiPlJlYWN0IEF1dG8gQ29tcGxldGU8L3NwYW4+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKSxcbiAgaGVhZDogKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVDb2xvclwiIGNvbnRlbnQ9XCIjZmZmZmZmXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjZmZmZmZmXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cbiAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIkNvbnRlbnQtTGFuZ3VhZ2VcIiBjb250ZW50PVwiZW5cIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkVlenlxdW90ZSAtIFJlYWN0IEdvb2dsZSBQbGFjZXNcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIkVlenlxdW90ZSAtIFJlYWN0IEdvb2dsZSBQbGFjZXNcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PVwiQGVlenlxdW90ZVwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwib2c6dGl0bGVcIiBjb250ZW50PVwiRWV6eXF1b3RlIC0gUmVhY3QgR29vZ2xlIFBsYWNlc1wiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtdGl0bGVcIiBjb250ZW50PVwiRWV6eVF1b3RlXCIgLz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApLFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1keC1qcy9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0cmEtdGhlbWUtZG9jc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0cmEvc3NnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=