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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/utility-functions/geocode-by-address.md");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/utility-functions/geocode-by-address.md":
/*!*******************************************************!*\
  !*** ./pages/utility-functions/geocode-by-address.md ***!
  \*******************************************************/
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
var _jsxFileName = "C:\\Users\\paul\\Documents\\Projects\\eezyquote\\react-google-places-autocomplete\\docs\\pages\\utility-functions\\geocode-by-address.md";
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
    filename: "C:/Users/paul/Documents/Projects/eezyquote/react-google-places-autocomplete/docs/pages/utility-functions/geocode-by-address.md",
    route: "/utility-functions/geocode-by-address",
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
  }, `This functions allows to get results by an address using `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _extends({
    "href": "https://developers.google.com/maps/documentation/javascript/geocoding",
    "parentName": "p"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }), `Google Maps Geocoder`), `.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, `Firm`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("code", _extends({
    "className": "language-tsx",
    "parentName": "pre"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 10
    }
  }), `const geocodeByAddress = (address: string): Promise<google.maps.GeocoderResult[]>;
`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, `Usage`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("code", _extends({
    "className": "language-js",
    "parentName": "pre"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 10
    }
  }), `import { geocodeByAddress } from '@eezyquote/react-google-places';

geocodeByAddress('La penne-sur-huveaune, France')
  .then(results => console.log(results))
  .catch(error => console.error(error));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvdXRpbGl0eS1mdW5jdGlvbnMvZ2VvY29kZS1ieS1hZGRyZXNzLm1kIiwid2VicGFjazovLy8uL3RoZW1lLmNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWR4LWpzL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dHJhLXRoZW1lLWRvY3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0cmEvc3NnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJtYWtlU2hvcnRjb2RlIiwibmFtZSIsIk1EWERlZmF1bHRTaG9ydGNvZGUiLCJwcm9wcyIsImNvbnNvbGUiLCJ3YXJuIiwiTURYTGF5b3V0IiwiTmV4dHJhUGFnZSIsIndpdGhTU0ciLCJ3aXRoTGF5b3V0IiwiZmlsZW5hbWUiLCJyb3V0ZSIsIm1ldGEiLCJwYWdlTWFwIiwibGF5b3V0Q29uZmlnIiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJpc01EWENvbXBvbmVudCIsImdpdGh1YiIsInNpdGVHaXRodWIiLCJ0aXRsZVN1ZmZpeCIsIm5leHRMaW5rcyIsInByZXZMaW5rcyIsInNlYXJjaCIsImN1c3RvbVNlYXJjaCIsImRhcmtNb2RlIiwiZm9vdGVyIiwiZm9vdGVyVGV4dCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImZvb3RlckVkaXRPbkdpdEh1YkxpbmsiLCJsb2dvIiwiaGVpZ2h0IiwiaGVhZCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFD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QUFBc0IsV0FBTyxFQUFDLGlDQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsRUFVRTtBQUFNLFFBQUksRUFBQyw0QkFBWDtBQUF3QyxXQUFPLEVBQUMsV0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGO0FBbkJXLENBQWYsRTs7Ozs7Ozs7Ozs7QUNEQSwwQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy91dGlsaXR5LWZ1bmN0aW9ucy9nZW9jb2RlLWJ5LWFkZHJlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3V0aWxpdHktZnVuY3Rpb25zL2dlb2NvZGUtYnktYWRkcmVzcy5tZFwiKTtcbiIsIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCdcblxuLyogQGpzeCBtZHggKi9cbmltcG9ydCB3aXRoTGF5b3V0IGZyb20gJ25leHRyYS10aGVtZS1kb2NzJ1xuaW1wb3J0IHsgd2l0aFNTRyB9IGZyb20gJ25leHRyYS9zc2cnXG5pbXBvcnQgbGF5b3V0Q29uZmlnIGZyb20gJ0M6L1VzZXJzL3BhdWwvRG9jdW1lbnRzL1Byb2plY3RzL2VlenlxdW90ZS9yZWFjdC1nb29nbGUtcGxhY2VzLWF1dG9jb21wbGV0ZS9kb2NzL3RoZW1lLmNvbmZpZy5qcydcblxuY29uc3QgbWFrZVNob3J0Y29kZSA9IG5hbWUgPT4gZnVuY3Rpb24gTURYRGVmYXVsdFNob3J0Y29kZShwcm9wcykge1xuICBjb25zb2xlLndhcm4oXCJDb21wb25lbnQgXCIgKyBuYW1lICsgXCIgd2FzIG5vdCBpbXBvcnRlZCwgZXhwb3J0ZWQsIG9yIHByb3ZpZGVkIGJ5IE1EWFByb3ZpZGVyIGFzIGdsb2JhbCBzY29wZVwiKVxuICByZXR1cm4gPGRpdiB7Li4ucHJvcHN9Lz5cbn07XG5cbmNvbnN0IE1EWExheW91dCA9IGZ1bmN0aW9uIE5leHRyYVBhZ2UgKHByb3BzKSB7XG4gICAgcmV0dXJuIHdpdGhTU0cod2l0aExheW91dCh7XG4gICAgICBmaWxlbmFtZTogXCJDOi9Vc2Vycy9wYXVsL0RvY3VtZW50cy9Qcm9qZWN0cy9lZXp5cXVvdGUvcmVhY3QtZ29vZ2xlLXBsYWNlcy1hdXRvY29tcGxldGUvZG9jcy9wYWdlcy91dGlsaXR5LWZ1bmN0aW9ucy9nZW9jb2RlLWJ5LWFkZHJlc3MubWRcIixcbiAgICAgIHJvdXRlOiBcIi91dGlsaXR5LWZ1bmN0aW9ucy9nZW9jb2RlLWJ5LWFkZHJlc3NcIixcbiAgICAgIG1ldGE6IHt9LFxuICAgICAgcGFnZU1hcDogW3tcIm5hbWVcIjpcImV4YW1wbGVzXCIsXCJyb3V0ZVwiOlwiXFxcXGV4YW1wbGVzXCJ9LHtcIm5hbWVcIjpcImluZGV4XCIsXCJyb3V0ZVwiOlwiXFxcXFwifSx7XCJuYW1lXCI6XCJtZXRhLmpzb25cIixcIm1ldGFcIjp7XCJpbmRleFwiOlwiR2V0dGluZyBTdGFydGVkXCIsXCJwcm9wc1wiOlwiUHJvcHNcIixcImV4YW1wbGVzXCI6XCJFeGFtcGxlc1wiLFwidXRpbGl0eS1mdW5jdGlvbnNcIjpcIlV0aWxpdHkgZnVuY3Rpb25zXCJ9fSx7XCJuYW1lXCI6XCJwcm9wc1wiLFwicm91dGVcIjpcIlxcXFxwcm9wc1wifSx7XCJuYW1lXCI6XCJ1dGlsaXR5LWZ1bmN0aW9uc1wiLFwiY2hpbGRyZW5cIjpbe1wibmFtZVwiOlwiZ2VvY29kZS1ieS1hZGRyZXNzXCIsXCJyb3V0ZVwiOlwiXFxcXHV0aWxpdHktZnVuY3Rpb25zXFxcXGdlb2NvZGUtYnktYWRkcmVzc1wifSx7XCJuYW1lXCI6XCJnZW9jb2RlLWJ5LXBsYWNlLWlkXCIsXCJyb3V0ZVwiOlwiXFxcXHV0aWxpdHktZnVuY3Rpb25zXFxcXGdlb2NvZGUtYnktcGxhY2UtaWRcIn0se1wibmFtZVwiOlwiZ2V0LWxhdGl0dWRlLWFuZC1sb25naXR1ZGVcIixcInJvdXRlXCI6XCJcXFxcdXRpbGl0eS1mdW5jdGlvbnNcXFxcZ2V0LWxhdGl0dWRlLWFuZC1sb25naXR1ZGVcIn0se1wibmFtZVwiOlwibWV0YS5qc29uXCIsXCJtZXRhXCI6e1wiZ2VvY29kZS1ieS1hZGRyZXNzXCI6XCJHZW9jb2RlIGJ5IEFkZHJlc3NcIixcImdlb2NvZGUtYnktcGxhY2UtaWRcIjpcIkdlb2NvZGUgYnkgUGxhY2UgSURcIixcImdldC1sYXRpdHVkZS1hbmQtbG9uZ2l0dWRlXCI6XCJHZXQgTGF0IGFuZCBMb25nXCJ9fV0sXCJyb3V0ZVwiOlwiXFxcXHV0aWxpdHktZnVuY3Rpb25zXCJ9XVxuICAgIH0sIGxheW91dENvbmZpZykpKHByb3BzKVxufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuICAgIDxwPntgVGhpcyBmdW5jdGlvbnMgYWxsb3dzIHRvIGdldCByZXN1bHRzIGJ5IGFuIGFkZHJlc3MgdXNpbmcgYH1cbiAgICAgIDxhIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L2dlb2NvZGluZ1wiLFxuICAgICAgICBcInBhcmVudE5hbWVcIjogXCJwXCJcbiAgICAgIH19PntgR29vZ2xlIE1hcHMgR2VvY29kZXJgfTwvYT5cbiAgICAgIHtgLmB9PC9wPlxuICAgIDxoMj57YEZpcm1gfTwvaDI+XG4gICAgPHByZT48Y29kZSB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLXRzeFwiLFxuICAgICAgICBcInBhcmVudE5hbWVcIjogXCJwcmVcIlxuICAgICAgfX0+e2Bjb25zdCBnZW9jb2RlQnlBZGRyZXNzID0gKGFkZHJlc3M6IHN0cmluZyk6IFByb21pc2U8Z29vZ2xlLm1hcHMuR2VvY29kZXJSZXN1bHRbXT47XG5gfTwvY29kZT48L3ByZT5cbiAgICA8aDI+e2BVc2FnZWB9PC9oMj5cbiAgICA8cHJlPjxjb2RlIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIixcbiAgICAgICAgXCJwYXJlbnROYW1lXCI6IFwicHJlXCJcbiAgICAgIH19PntgaW1wb3J0IHsgZ2VvY29kZUJ5QWRkcmVzcyB9IGZyb20gJ0BlZXp5cXVvdGUvcmVhY3QtZ29vZ2xlLXBsYWNlcyc7XG5cbmdlb2NvZGVCeUFkZHJlc3MoJ0xhIHBlbm5lLXN1ci1odXZlYXVuZSwgRnJhbmNlJylcbiAgLnRoZW4ocmVzdWx0cyA9PiBjb25zb2xlLmxvZyhyZXN1bHRzKSlcbiAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbmB9PC9jb2RlPjwvcHJlPlxuXG4gIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7IiwiLy8gdGhlbWUuY29uZmlnLmpzXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdpdGh1YjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9FZXp5UXVvdGUvcmVhY3QtYXV0by1jb21wbGV0ZScsIC8vIGxpbmsgb2YgdGhlIHByb2plY3QgcmVwb1xuICBzaXRlR2l0aHViOiAnaHR0cHM6Ly9naXRodWIuY29tL0VlenlRdW90ZS9yZWFjdC1hdXRvLWNvbXBsZXRlJywgLy8gbGluayBvZiB0aGUgZG9jcyByZXBvIHBhdGhcbiAgdGl0bGVTdWZmaXg6ICcg4oCTIFJlYWN0IEF1dG8gQ29tcGxldGUnLFxuICBuZXh0TGlua3M6IHRydWUsXG4gIHByZXZMaW5rczogdHJ1ZSxcbiAgc2VhcmNoOiB0cnVlLFxuICBjdXN0b21TZWFyY2g6IG51bGwsIC8vIDwtIGN1c3RvbWl6YWJsZSwgeW91IGNhbiB1c2UgYWxnb2xpYSBmb3IgZXhhbXBsZVxuICBkYXJrTW9kZTogdHJ1ZSxcbiAgZm9vdGVyOiB0cnVlLFxuICBmb290ZXJUZXh0OiBgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IMKpIEVlenlRdW90ZWAsXG4gIGZvb3RlckVkaXRPbkdpdEh1Ykxpbms6IHRydWUsIC8vIHdpbGwgbGluayB0byB0aGUgZG9jcyByZXBvXG4gIGxvZ286IChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8aW1nIHNyYz1cIi9wbGFjZS5zdmdcIiBjbGFzc05hbWU9XCJtci0yIGZvbnQtZXh0cmFib2xkIGhpZGRlbiBtZDppbmxpbmVcIiBzdHlsZT17e2hlaWdodDpcIjJlbVwifX0gLz5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgZm9udC1ub3JtYWwgaGlkZGVuIG1kOmlubGluZVwiPlJlYWN0IEF1dG8gQ29tcGxldGU8L3NwYW4+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKSxcbiAgaGVhZDogKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVDb2xvclwiIGNvbnRlbnQ9XCIjZmZmZmZmXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjZmZmZmZmXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cbiAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIkNvbnRlbnQtTGFuZ3VhZ2VcIiBjb250ZW50PVwiZW5cIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkVlenlxdW90ZSAtIFJlYWN0IEdvb2dsZSBQbGFjZXNcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIkVlenlxdW90ZSAtIFJlYWN0IEdvb2dsZSBQbGFjZXNcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PVwiQGVlenlxdW90ZVwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwib2c6dGl0bGVcIiBjb250ZW50PVwiRWV6eXF1b3RlIC0gUmVhY3QgR29vZ2xlIFBsYWNlc1wiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtdGl0bGVcIiBjb250ZW50PVwiRWV6eVF1b3RlXCIgLz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApLFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1keC1qcy9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0cmEtdGhlbWUtZG9jc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0cmEvc3NnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=