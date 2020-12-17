module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.md");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.md":
/*!************************!*\
  !*** ./pages/index.md ***!
  \************************/
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
var _jsxFileName = "C:\\Users\\paul\\Documents\\Projects\\eezyquote\\react-google-places-autocomplete\\docs\\pages\\index.md";
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
    filename: "C:/Users/paul/Documents/Projects/eezyquote/react-google-places-autocomplete/docs/pages/index.md",
    route: "/",
    meta: {
      "id": "basic-usage",
      "title": "Basics",
      "sidebar_label": "Basics"
    },
    pageMap: [{
      "name": "examples",
      "route": "\\examples",
      "frontMatter": {
        "id": "examples",
        "title": "Examples",
        "sidebar_label": "Examples"
      }
    }, {
      "name": "index",
      "route": "\\",
      "frontMatter": {
        "id": "basic-usage",
        "title": "Basics",
        "sidebar_label": "Basics"
      }
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
      "route": "\\props",
      "frontMatter": {
        "id": "props",
        "title": "Props",
        "sidebar_label": "Props"
      }
    }, {
      "name": "utility-functions",
      "children": [{
        "name": "geocode-by-address",
        "route": "\\utility-functions\\geocode-by-address",
        "frontMatter": {
          "id": "geocode-by-address",
          "title": "Geocode by Address",
          "sidebar_label": "Geocode by Address"
        }
      }, {
        "name": "geocode-by-place-id",
        "route": "\\utility-functions\\geocode-by-place-id",
        "frontMatter": {
          "id": "geocode-by-place-id",
          "title": "Geocode by Place ID",
          "sidebar_label": "Geocode by Place ID"
        }
      }, {
        "name": "get-latitude-and-longitude",
        "route": "\\utility-functions\\get-latitude-and-longitude",
        "frontMatter": {
          "id": "get-lat-lng",
          "title": "Get Latitude and Longitude",
          "sidebar_label": "Get Latitude and Longitude"
        }
      }, {
        "name": "meta.json",
        "meta": {
          "geocode-by-address": "Geocode by Address",
          "geocode-by-place-id": "Geocode by Place ID",
          "get-latitude-and-longitude": "Get Latitude and Longitude"
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
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, `Install`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("code", _extends({
    "className": "language-bash",
    "parentName": "pre"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 10
    }
  }), `npm install --save @eezyquote/react-google-places
`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, `or`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("code", _extends({
    "className": "language-bash",
    "parentName": "pre"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 10
    }
  }), `yarn add @eezyquote/react-google-places
`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, `Basic Usage`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, `Load Google Maps JavaScript API`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, `First, generate an `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("inlineCode", _extends({
    "parentName": "p"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }), `apiKey`), ` in order to use it to load `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _extends({
    "href": "https://developers.google.com/maps/documentation/javascript/",
    "parentName": "p"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }), `Google Maps JavaScript API`), `. Then, use it to load it in your HTML file, adding a script tag:`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("code", _extends({
    "className": "language-html",
    "parentName": "pre"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 10
    }
  }), `<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_API_KEY&libraries=places" type="text/javascript" />
`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("strong", _extends({
    "parentName": "p"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 8
    }
  }), `Note:`), ` if you pass down the `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("inlineCode", _extends({
    "parentName": "p"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }), `apiKey`), ` prop to the component, you can skip loading the `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _extends({
    "href": "https://developers.google.com/maps/documentation/javascript/",
    "parentName": "p"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }), `Google Maps JavaScript API`), `, as the component will inject that script on the page.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }, `Use the component`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("code", _extends({
    "className": "language-tsx",
    "parentName": "pre"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 10
    }
  }), `import React from 'react';
import GooglePlacesAutocomplete from '@eezyquote/react-google-places';

const Component = () => <GooglePlacesAutocomplete />

export default Component;
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
  github: 'https://github.com/@eezyquote/react-auto-complete',
  // link of the project repo
  siteGithub: 'https://github.com/@eezyquote/react-auto-complete',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgubWQiLCJ3ZWJwYWNrOi8vLy4vdGhlbWUuY29uZmlnLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtZHgtanMvcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0cmEtdGhlbWUtZG9jc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHRyYS9zc2dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIm1ha2VTaG9ydGNvZGUiLCJuYW1lIiwiTURYRGVmYXVsdFNob3J0Y29kZSIsInByb3BzIiwiY29uc29sZSIsIndhcm4iLCJNRFhMYXlvdXQiLCJOZXh0cmFQYWdlIiwid2l0aFNTRyIsIndpdGhMYXlvdXQiLCJmaWxlbmFtZSIsInJvdXRlIiwibWV0YSIsInBhZ2VNYXAiLCJsYXlvdXRDb25maWciLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsImlzTURYQ29tcG9uZW50IiwiZ2l0aHViIiwic2l0ZUdpdGh1YiIsInRpdGxlU3VmZml4IiwibmV4dExpbmtzIiwicHJldkxpbmtzIiwic2VhcmNoIiwiY3VzdG9tU2VhcmNoIiwiZGFya01vZGUiLCJmb290ZXIiLCJmb290ZXJUZXh0IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZm9vdGVyRWRpdE9uR2l0SHViTGluayIsImxvZ28iLCJoZWlnaHQiLCJoZWFkIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFF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RixFQUlFO0FBQU0sYUFBUyxFQUFDLGtCQUFoQjtBQUFtQyxXQUFPLEVBQUMsSUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBS0U7QUFBTSxRQUFJLEVBQUMsYUFBWDtBQUF5QixXQUFPLEVBQUMsaUNBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQU1FO0FBQU0sUUFBSSxFQUFDLGdCQUFYO0FBQTRCLFdBQU8sRUFBQyxpQ0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLEVBT0U7QUFBTSxRQUFJLEVBQUMsY0FBWDtBQUEwQixXQUFPLEVBQUMscUJBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixFQVFFO0FBQU0sUUFBSSxFQUFDLGNBQVg7QUFBMEIsV0FBTyxFQUFDLFlBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQVNFO0FBQU0sUUFBSSxFQUFDLFVBQVg7QUFBc0IsV0FBTyxFQUFDLGlDQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsRUFVRTtBQUFNLFFBQUksRUFBQyw0QkFBWDtBQUF3QyxXQUFPLEVBQUMsV0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGO0FBbkJXLENBQWYsRTs7Ozs7Ozs7Ozs7QUNEQSwwQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXgubWRcIik7XG4iLCJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnXG5cbi8qIEBqc3ggbWR4ICovXG5pbXBvcnQgd2l0aExheW91dCBmcm9tICduZXh0cmEtdGhlbWUtZG9jcydcbmltcG9ydCB7IHdpdGhTU0cgfSBmcm9tICduZXh0cmEvc3NnJ1xuaW1wb3J0IGxheW91dENvbmZpZyBmcm9tICdDOi9Vc2Vycy9wYXVsL0RvY3VtZW50cy9Qcm9qZWN0cy9lZXp5cXVvdGUvcmVhY3QtZ29vZ2xlLXBsYWNlcy1hdXRvY29tcGxldGUvZG9jcy90aGVtZS5jb25maWcuanMnXG5cbmNvbnN0IG1ha2VTaG9ydGNvZGUgPSBuYW1lID0+IGZ1bmN0aW9uIE1EWERlZmF1bHRTaG9ydGNvZGUocHJvcHMpIHtcbiAgY29uc29sZS53YXJuKFwiQ29tcG9uZW50IFwiICsgbmFtZSArIFwiIHdhcyBub3QgaW1wb3J0ZWQsIGV4cG9ydGVkLCBvciBwcm92aWRlZCBieSBNRFhQcm92aWRlciBhcyBnbG9iYWwgc2NvcGVcIilcbiAgcmV0dXJuIDxkaXYgey4uLnByb3BzfS8+XG59O1xuXG5jb25zdCBNRFhMYXlvdXQgPSBmdW5jdGlvbiBOZXh0cmFQYWdlIChwcm9wcykge1xuICAgIHJldHVybiB3aXRoU1NHKHdpdGhMYXlvdXQoe1xuICAgICAgZmlsZW5hbWU6IFwiQzovVXNlcnMvcGF1bC9Eb2N1bWVudHMvUHJvamVjdHMvZWV6eXF1b3RlL3JlYWN0LWdvb2dsZS1wbGFjZXMtYXV0b2NvbXBsZXRlL2RvY3MvcGFnZXMvaW5kZXgubWRcIixcbiAgICAgIHJvdXRlOiBcIi9cIixcbiAgICAgIG1ldGE6IHtcImlkXCI6XCJiYXNpYy11c2FnZVwiLFwidGl0bGVcIjpcIkJhc2ljc1wiLFwic2lkZWJhcl9sYWJlbFwiOlwiQmFzaWNzXCJ9LFxuICAgICAgcGFnZU1hcDogW3tcIm5hbWVcIjpcImV4YW1wbGVzXCIsXCJyb3V0ZVwiOlwiXFxcXGV4YW1wbGVzXCIsXCJmcm9udE1hdHRlclwiOntcImlkXCI6XCJleGFtcGxlc1wiLFwidGl0bGVcIjpcIkV4YW1wbGVzXCIsXCJzaWRlYmFyX2xhYmVsXCI6XCJFeGFtcGxlc1wifX0se1wibmFtZVwiOlwiaW5kZXhcIixcInJvdXRlXCI6XCJcXFxcXCIsXCJmcm9udE1hdHRlclwiOntcImlkXCI6XCJiYXNpYy11c2FnZVwiLFwidGl0bGVcIjpcIkJhc2ljc1wiLFwic2lkZWJhcl9sYWJlbFwiOlwiQmFzaWNzXCJ9fSx7XCJuYW1lXCI6XCJtZXRhLmpzb25cIixcIm1ldGFcIjp7XCJpbmRleFwiOlwiR2V0dGluZyBTdGFydGVkXCIsXCJwcm9wc1wiOlwiUHJvcHNcIixcImV4YW1wbGVzXCI6XCJFeGFtcGxlc1wiLFwidXRpbGl0eS1mdW5jdGlvbnNcIjpcIlV0aWxpdHkgZnVuY3Rpb25zXCJ9fSx7XCJuYW1lXCI6XCJwcm9wc1wiLFwicm91dGVcIjpcIlxcXFxwcm9wc1wiLFwiZnJvbnRNYXR0ZXJcIjp7XCJpZFwiOlwicHJvcHNcIixcInRpdGxlXCI6XCJQcm9wc1wiLFwic2lkZWJhcl9sYWJlbFwiOlwiUHJvcHNcIn19LHtcIm5hbWVcIjpcInV0aWxpdHktZnVuY3Rpb25zXCIsXCJjaGlsZHJlblwiOlt7XCJuYW1lXCI6XCJnZW9jb2RlLWJ5LWFkZHJlc3NcIixcInJvdXRlXCI6XCJcXFxcdXRpbGl0eS1mdW5jdGlvbnNcXFxcZ2VvY29kZS1ieS1hZGRyZXNzXCIsXCJmcm9udE1hdHRlclwiOntcImlkXCI6XCJnZW9jb2RlLWJ5LWFkZHJlc3NcIixcInRpdGxlXCI6XCJHZW9jb2RlIGJ5IEFkZHJlc3NcIixcInNpZGViYXJfbGFiZWxcIjpcIkdlb2NvZGUgYnkgQWRkcmVzc1wifX0se1wibmFtZVwiOlwiZ2VvY29kZS1ieS1wbGFjZS1pZFwiLFwicm91dGVcIjpcIlxcXFx1dGlsaXR5LWZ1bmN0aW9uc1xcXFxnZW9jb2RlLWJ5LXBsYWNlLWlkXCIsXCJmcm9udE1hdHRlclwiOntcImlkXCI6XCJnZW9jb2RlLWJ5LXBsYWNlLWlkXCIsXCJ0aXRsZVwiOlwiR2VvY29kZSBieSBQbGFjZSBJRFwiLFwic2lkZWJhcl9sYWJlbFwiOlwiR2VvY29kZSBieSBQbGFjZSBJRFwifX0se1wibmFtZVwiOlwiZ2V0LWxhdGl0dWRlLWFuZC1sb25naXR1ZGVcIixcInJvdXRlXCI6XCJcXFxcdXRpbGl0eS1mdW5jdGlvbnNcXFxcZ2V0LWxhdGl0dWRlLWFuZC1sb25naXR1ZGVcIixcImZyb250TWF0dGVyXCI6e1wiaWRcIjpcImdldC1sYXQtbG5nXCIsXCJ0aXRsZVwiOlwiR2V0IExhdGl0dWRlIGFuZCBMb25naXR1ZGVcIixcInNpZGViYXJfbGFiZWxcIjpcIkdldCBMYXRpdHVkZSBhbmQgTG9uZ2l0dWRlXCJ9fSx7XCJuYW1lXCI6XCJtZXRhLmpzb25cIixcIm1ldGFcIjp7XCJnZW9jb2RlLWJ5LWFkZHJlc3NcIjpcIkdlb2NvZGUgYnkgQWRkcmVzc1wiLFwiZ2VvY29kZS1ieS1wbGFjZS1pZFwiOlwiR2VvY29kZSBieSBQbGFjZSBJRFwiLFwiZ2V0LWxhdGl0dWRlLWFuZC1sb25naXR1ZGVcIjpcIkdldCBMYXRpdHVkZSBhbmQgTG9uZ2l0dWRlXCJ9fV0sXCJyb3V0ZVwiOlwiXFxcXHV0aWxpdHktZnVuY3Rpb25zXCJ9XVxuICAgIH0sIGxheW91dENvbmZpZykpKHByb3BzKVxufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuICAgIDxoMj57YEluc3RhbGxgfTwvaDI+XG4gICAgPHByZT48Y29kZSB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWJhc2hcIixcbiAgICAgICAgXCJwYXJlbnROYW1lXCI6IFwicHJlXCJcbiAgICAgIH19PntgbnBtIGluc3RhbGwgLS1zYXZlIEBlZXp5cXVvdGUvcmVhY3QtZ29vZ2xlLXBsYWNlc1xuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BvcmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1iYXNoXCIsXG4gICAgICAgIFwicGFyZW50TmFtZVwiOiBcInByZVwiXG4gICAgICB9fT57YHlhcm4gYWRkIEBlZXp5cXVvdGUvcmVhY3QtZ29vZ2xlLXBsYWNlc1xuYH08L2NvZGU+PC9wcmU+XG4gICAgPGgyPntgQmFzaWMgVXNhZ2VgfTwvaDI+XG4gICAgPGgzPntgTG9hZCBHb29nbGUgTWFwcyBKYXZhU2NyaXB0IEFQSWB9PC9oMz5cbiAgICA8cD57YEZpcnN0LCBnZW5lcmF0ZSBhbiBgfVxuICAgICAgPGlubGluZUNvZGUgey4uLntcbiAgICAgICAgXCJwYXJlbnROYW1lXCI6IFwicFwiXG4gICAgICB9fT57YGFwaUtleWB9PC9pbmxpbmVDb2RlPlxuICAgICAge2AgaW4gb3JkZXIgdG8gdXNlIGl0IHRvIGxvYWQgYH1cbiAgICAgIDxhIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L1wiLFxuICAgICAgICBcInBhcmVudE5hbWVcIjogXCJwXCJcbiAgICAgIH19PntgR29vZ2xlIE1hcHMgSmF2YVNjcmlwdCBBUElgfTwvYT5cbiAgICAgIHtgLiBUaGVuLCB1c2UgaXQgdG8gbG9hZCBpdCBpbiB5b3VyIEhUTUwgZmlsZSwgYWRkaW5nIGEgc2NyaXB0IHRhZzpgfTwvcD5cbiAgICA8cHJlPjxjb2RlIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtaHRtbFwiLFxuICAgICAgICBcInBhcmVudE5hbWVcIjogXCJwcmVcIlxuICAgICAgfX0+e2A8c2NyaXB0IHNyYz1cImh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz9rZXk9WU9VUl9HT09HTEVfQVBJX0tFWSZsaWJyYXJpZXM9cGxhY2VzXCIgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIC8+XG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD48c3Ryb25nIHsuLi57XG4gICAgICAgIFwicGFyZW50TmFtZVwiOiBcInBcIlxuICAgICAgfX0+e2BOb3RlOmB9PC9zdHJvbmc+XG4gICAgICB7YCBpZiB5b3UgcGFzcyBkb3duIHRoZSBgfVxuICAgICAgPGlubGluZUNvZGUgey4uLntcbiAgICAgICAgXCJwYXJlbnROYW1lXCI6IFwicFwiXG4gICAgICB9fT57YGFwaUtleWB9PC9pbmxpbmVDb2RlPlxuICAgICAge2AgcHJvcCB0byB0aGUgY29tcG9uZW50LCB5b3UgY2FuIHNraXAgbG9hZGluZyB0aGUgYH1cbiAgICAgIDxhIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L1wiLFxuICAgICAgICBcInBhcmVudE5hbWVcIjogXCJwXCJcbiAgICAgIH19PntgR29vZ2xlIE1hcHMgSmF2YVNjcmlwdCBBUElgfTwvYT5cbiAgICAgIHtgLCBhcyB0aGUgY29tcG9uZW50IHdpbGwgaW5qZWN0IHRoYXQgc2NyaXB0IG9uIHRoZSBwYWdlLmB9PC9wPlxuICAgIDxoMz57YFVzZSB0aGUgY29tcG9uZW50YH08L2gzPlxuICAgIDxwcmU+PGNvZGUgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS10c3hcIixcbiAgICAgICAgXCJwYXJlbnROYW1lXCI6IFwicHJlXCJcbiAgICAgIH19PntgaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBHb29nbGVQbGFjZXNBdXRvY29tcGxldGUgZnJvbSAnQGVlenlxdW90ZS9yZWFjdC1nb29nbGUtcGxhY2VzJztcblxuY29uc3QgQ29tcG9uZW50ID0gKCkgPT4gPEdvb2dsZVBsYWNlc0F1dG9jb21wbGV0ZSAvPlxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XG5gfTwvY29kZT48L3ByZT5cblxuICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlOyIsIi8vIHRoZW1lLmNvbmZpZy5qc1xuZXhwb3J0IGRlZmF1bHQge1xuICBnaXRodWI6ICdodHRwczovL2dpdGh1Yi5jb20vQGVlenlxdW90ZS9yZWFjdC1hdXRvLWNvbXBsZXRlJywgLy8gbGluayBvZiB0aGUgcHJvamVjdCByZXBvXG4gIHNpdGVHaXRodWI6ICdodHRwczovL2dpdGh1Yi5jb20vQGVlenlxdW90ZS9yZWFjdC1hdXRvLWNvbXBsZXRlJywgLy8gbGluayBvZiB0aGUgZG9jcyByZXBvIHBhdGhcbiAgdGl0bGVTdWZmaXg6ICcg4oCTIFJlYWN0IEF1dG8gQ29tcGxldGUnLFxuICBuZXh0TGlua3M6IHRydWUsXG4gIHByZXZMaW5rczogdHJ1ZSxcbiAgc2VhcmNoOiB0cnVlLFxuICBjdXN0b21TZWFyY2g6IG51bGwsIC8vIDwtIGN1c3RvbWl6YWJsZSwgeW91IGNhbiB1c2UgYWxnb2xpYSBmb3IgZXhhbXBsZVxuICBkYXJrTW9kZTogdHJ1ZSxcbiAgZm9vdGVyOiB0cnVlLFxuICBmb290ZXJUZXh0OiBgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IMKpIEVlenlRdW90ZWAsXG4gIGZvb3RlckVkaXRPbkdpdEh1Ykxpbms6IHRydWUsIC8vIHdpbGwgbGluayB0byB0aGUgZG9jcyByZXBvXG4gIGxvZ286IChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8aW1nIHNyYz1cIi9wbGFjZS5zdmdcIiBjbGFzc05hbWU9XCJtci0yIGZvbnQtZXh0cmFib2xkIGhpZGRlbiBtZDppbmxpbmVcIiBzdHlsZT17e2hlaWdodDpcIjJlbVwifX0gLz5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgZm9udC1ub3JtYWwgaGlkZGVuIG1kOmlubGluZVwiPlJlYWN0IEF1dG8gQ29tcGxldGU8L3NwYW4+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKSxcbiAgaGVhZDogKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVDb2xvclwiIGNvbnRlbnQ9XCIjZmZmZmZmXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjZmZmZmZmXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cbiAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIkNvbnRlbnQtTGFuZ3VhZ2VcIiBjb250ZW50PVwiZW5cIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkVlenlxdW90ZSAtIFJlYWN0IEdvb2dsZSBQbGFjZXNcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIkVlenlxdW90ZSAtIFJlYWN0IEdvb2dsZSBQbGFjZXNcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PVwiQGVlenlxdW90ZVwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwib2c6dGl0bGVcIiBjb250ZW50PVwiRWV6eXF1b3RlIC0gUmVhY3QgR29vZ2xlIFBsYWNlc1wiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtdGl0bGVcIiBjb250ZW50PVwiRWV6eVF1b3RlXCIgLz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApLFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1keC1qcy9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0cmEtdGhlbWUtZG9jc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0cmEvc3NnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=