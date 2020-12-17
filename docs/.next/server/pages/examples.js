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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/examples.md");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/examples.md":
/*!***************************!*\
  !*** ./pages/examples.md ***!
  \***************************/
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
var _jsxFileName = "C:\\Users\\paul\\Documents\\Projects\\eezyquote\\react-google-places-autocomplete\\docs\\pages\\examples.md";
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
    filename: "C:/Users/paul/Documents/Projects/eezyquote/react-google-places-autocomplete/docs/pages/examples.md",
    route: "/examples",
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
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, `Automatic Google Maps Javascript API injection`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("code", _extends({
    "className": "language-jsx",
    "parentName": "pre"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 10
    }
  }), `<GooglePlacesAutocomplete apiKey="*****" />
`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, `Controlled input`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("code", _extends({
    "className": "language-jsx",
    "parentName": "pre"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 10
    }
  }), `const [value, setValue] = useState(null);

<GooglePlacesAutocomplete
  selectProps={{
    value,
    onChange: setValue,
  }}
/>
`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, `Customization`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, `In order to customize the input and suggestions list, we need to use the `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("inlineCode", _extends({
    "parentName": "p"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }), `styles`), ` property of `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _extends({
    "href": "https://react-select.com/styles",
    "parentName": "p"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }), `react-select`), `.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("code", _extends({
    "className": "language-jsx",
    "parentName": "pre"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 10
    }
  }), `<GooglePlacesAutocomplete
  selectProps={{
    styles: {
      input: (provided) => ({
        ...provided,
        color: 'blue',
      }),
      option: (provided) => ({
        ...provided,
        color: 'blue',
      }),
      singleValue: (provided) => ({
        ...provided,
        color: 'blue',
      }),
    },
  }}
/>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZXhhbXBsZXMubWQiLCJ3ZWJwYWNrOi8vLy4vdGhlbWUuY29uZmlnLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtZHgtanMvcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0cmEtdGhlbWUtZG9jc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHRyYS9zc2dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIm1ha2VTaG9ydGNvZGUiLCJuYW1lIiwiTURYRGVmYXVsdFNob3J0Y29kZSIsInByb3BzIiwiY29uc29sZSIsIndhcm4iLCJNRFhMYXlvdXQiLCJOZXh0cmFQYWdlIiwid2l0aFNTRyIsIndpdGhMYXlvdXQiLCJmaWxlbmFtZSIsInJvdXRlIiwibWV0YSIsInBhZ2VNYXAiLCJsYXlvdXRDb25maWciLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsImlzTURYQ29tcG9uZW50IiwiZ2l0aHViIiwic2l0ZUdpdGh1YiIsInRpdGxlU3VmZml4IiwibmV4dExpbmtzIiwicHJldkxpbmtzIiwic2VhcmNoIiwiY3VzdG9tU2VhcmNoIiwiZGFya01vZGUiLCJmb290ZXIiLCJmb290ZXJUZXh0IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZm9vdGVyRWRpdE9uR2l0SHViTGluayIsImxvZ28iLCJoZWlnaHQiLCJoZWFkIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FB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QUtFO0FBQU0sUUFBSSxFQUFDLGFBQVg7QUFBeUIsV0FBTyxFQUFDLGlDQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFNRTtBQUFNLFFBQUksRUFBQyxnQkFBWDtBQUE0QixXQUFPLEVBQUMsaUNBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixFQU9FO0FBQU0sUUFBSSxFQUFDLGNBQVg7QUFBMEIsV0FBTyxFQUFDLHFCQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsRUFRRTtBQUFNLFFBQUksRUFBQyxjQUFYO0FBQTBCLFdBQU8sRUFBQyxZQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsRUFTRTtBQUFNLFFBQUksRUFBQyxVQUFYO0FBQXNCLFdBQU8sRUFBQyxpQ0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLEVBVUU7QUFBTSxRQUFJLEVBQUMsNEJBQVg7QUFBd0MsV0FBTyxFQUFDLFdBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRjtBQW5CVyxDQUFmLEU7Ozs7Ozs7Ozs7O0FDREEsMEM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvZXhhbXBsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2V4YW1wbGVzLm1kXCIpO1xuIiwiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4IG1keCAqL1xuaW1wb3J0IHdpdGhMYXlvdXQgZnJvbSAnbmV4dHJhLXRoZW1lLWRvY3MnXG5pbXBvcnQgeyB3aXRoU1NHIH0gZnJvbSAnbmV4dHJhL3NzZydcbmltcG9ydCBsYXlvdXRDb25maWcgZnJvbSAnQzovVXNlcnMvcGF1bC9Eb2N1bWVudHMvUHJvamVjdHMvZWV6eXF1b3RlL3JlYWN0LWdvb2dsZS1wbGFjZXMtYXV0b2NvbXBsZXRlL2RvY3MvdGhlbWUuY29uZmlnLmpzJ1xuXG5jb25zdCBtYWtlU2hvcnRjb2RlID0gbmFtZSA9PiBmdW5jdGlvbiBNRFhEZWZhdWx0U2hvcnRjb2RlKHByb3BzKSB7XG4gIGNvbnNvbGUud2FybihcIkNvbXBvbmVudCBcIiArIG5hbWUgKyBcIiB3YXMgbm90IGltcG9ydGVkLCBleHBvcnRlZCwgb3IgcHJvdmlkZWQgYnkgTURYUHJvdmlkZXIgYXMgZ2xvYmFsIHNjb3BlXCIpXG4gIHJldHVybiA8ZGl2IHsuLi5wcm9wc30vPlxufTtcblxuY29uc3QgTURYTGF5b3V0ID0gZnVuY3Rpb24gTmV4dHJhUGFnZSAocHJvcHMpIHtcbiAgICByZXR1cm4gd2l0aFNTRyh3aXRoTGF5b3V0KHtcbiAgICAgIGZpbGVuYW1lOiBcIkM6L1VzZXJzL3BhdWwvRG9jdW1lbnRzL1Byb2plY3RzL2VlenlxdW90ZS9yZWFjdC1nb29nbGUtcGxhY2VzLWF1dG9jb21wbGV0ZS9kb2NzL3BhZ2VzL2V4YW1wbGVzLm1kXCIsXG4gICAgICByb3V0ZTogXCIvZXhhbXBsZXNcIixcbiAgICAgIG1ldGE6IHt9LFxuICAgICAgcGFnZU1hcDogW3tcIm5hbWVcIjpcImV4YW1wbGVzXCIsXCJyb3V0ZVwiOlwiXFxcXGV4YW1wbGVzXCJ9LHtcIm5hbWVcIjpcImluZGV4XCIsXCJyb3V0ZVwiOlwiXFxcXFwifSx7XCJuYW1lXCI6XCJtZXRhLmpzb25cIixcIm1ldGFcIjp7XCJpbmRleFwiOlwiR2V0dGluZyBTdGFydGVkXCIsXCJwcm9wc1wiOlwiUHJvcHNcIixcImV4YW1wbGVzXCI6XCJFeGFtcGxlc1wiLFwidXRpbGl0eS1mdW5jdGlvbnNcIjpcIlV0aWxpdHkgZnVuY3Rpb25zXCJ9fSx7XCJuYW1lXCI6XCJwcm9wc1wiLFwicm91dGVcIjpcIlxcXFxwcm9wc1wifSx7XCJuYW1lXCI6XCJ1dGlsaXR5LWZ1bmN0aW9uc1wiLFwiY2hpbGRyZW5cIjpbe1wibmFtZVwiOlwiZ2VvY29kZS1ieS1hZGRyZXNzXCIsXCJyb3V0ZVwiOlwiXFxcXHV0aWxpdHktZnVuY3Rpb25zXFxcXGdlb2NvZGUtYnktYWRkcmVzc1wifSx7XCJuYW1lXCI6XCJnZW9jb2RlLWJ5LXBsYWNlLWlkXCIsXCJyb3V0ZVwiOlwiXFxcXHV0aWxpdHktZnVuY3Rpb25zXFxcXGdlb2NvZGUtYnktcGxhY2UtaWRcIn0se1wibmFtZVwiOlwiZ2V0LWxhdGl0dWRlLWFuZC1sb25naXR1ZGVcIixcInJvdXRlXCI6XCJcXFxcdXRpbGl0eS1mdW5jdGlvbnNcXFxcZ2V0LWxhdGl0dWRlLWFuZC1sb25naXR1ZGVcIn0se1wibmFtZVwiOlwibWV0YS5qc29uXCIsXCJtZXRhXCI6e1wiZ2VvY29kZS1ieS1hZGRyZXNzXCI6XCJHZW9jb2RlIGJ5IEFkZHJlc3NcIixcImdlb2NvZGUtYnktcGxhY2UtaWRcIjpcIkdlb2NvZGUgYnkgUGxhY2UgSURcIixcImdldC1sYXRpdHVkZS1hbmQtbG9uZ2l0dWRlXCI6XCJHZXQgTGF0IGFuZCBMb25nXCJ9fV0sXCJyb3V0ZVwiOlwiXFxcXHV0aWxpdHktZnVuY3Rpb25zXCJ9XVxuICAgIH0sIGxheW91dENvbmZpZykpKHByb3BzKVxufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuICAgIDxoMj57YEF1dG9tYXRpYyBHb29nbGUgTWFwcyBKYXZhc2NyaXB0IEFQSSBpbmplY3Rpb25gfTwvaDI+XG4gICAgPHByZT48Y29kZSB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzeFwiLFxuICAgICAgICBcInBhcmVudE5hbWVcIjogXCJwcmVcIlxuICAgICAgfX0+e2A8R29vZ2xlUGxhY2VzQXV0b2NvbXBsZXRlIGFwaUtleT1cIioqKioqXCIgLz5cbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxoMj57YENvbnRyb2xsZWQgaW5wdXRgfTwvaDI+XG4gICAgPHByZT48Y29kZSB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzeFwiLFxuICAgICAgICBcInBhcmVudE5hbWVcIjogXCJwcmVcIlxuICAgICAgfX0+e2Bjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKG51bGwpO1xuXG48R29vZ2xlUGxhY2VzQXV0b2NvbXBsZXRlXG4gIHNlbGVjdFByb3BzPXt7XG4gICAgdmFsdWUsXG4gICAgb25DaGFuZ2U6IHNldFZhbHVlLFxuICB9fVxuLz5cbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxoMj57YEN1c3RvbWl6YXRpb25gfTwvaDI+XG4gICAgPHA+e2BJbiBvcmRlciB0byBjdXN0b21pemUgdGhlIGlucHV0IGFuZCBzdWdnZXN0aW9ucyBsaXN0LCB3ZSBuZWVkIHRvIHVzZSB0aGUgYH1cbiAgICAgIDxpbmxpbmVDb2RlIHsuLi57XG4gICAgICAgIFwicGFyZW50TmFtZVwiOiBcInBcIlxuICAgICAgfX0+e2BzdHlsZXNgfTwvaW5saW5lQ29kZT5cbiAgICAgIHtgIHByb3BlcnR5IG9mIGB9XG4gICAgICA8YSB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL3JlYWN0LXNlbGVjdC5jb20vc3R5bGVzXCIsXG4gICAgICAgIFwicGFyZW50TmFtZVwiOiBcInBcIlxuICAgICAgfX0+e2ByZWFjdC1zZWxlY3RgfTwvYT5cbiAgICAgIHtgLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc3hcIixcbiAgICAgICAgXCJwYXJlbnROYW1lXCI6IFwicHJlXCJcbiAgICAgIH19PntgPEdvb2dsZVBsYWNlc0F1dG9jb21wbGV0ZVxuICBzZWxlY3RQcm9wcz17e1xuICAgIHN0eWxlczoge1xuICAgICAgaW5wdXQ6IChwcm92aWRlZCkgPT4gKHtcbiAgICAgICAgLi4ucHJvdmlkZWQsXG4gICAgICAgIGNvbG9yOiAnYmx1ZScsXG4gICAgICB9KSxcbiAgICAgIG9wdGlvbjogKHByb3ZpZGVkKSA9PiAoe1xuICAgICAgICAuLi5wcm92aWRlZCxcbiAgICAgICAgY29sb3I6ICdibHVlJyxcbiAgICAgIH0pLFxuICAgICAgc2luZ2xlVmFsdWU6IChwcm92aWRlZCkgPT4gKHtcbiAgICAgICAgLi4ucHJvdmlkZWQsXG4gICAgICAgIGNvbG9yOiAnYmx1ZScsXG4gICAgICB9KSxcbiAgICB9LFxuICB9fVxuLz5cbmB9PC9jb2RlPjwvcHJlPlxuXG4gIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7IiwiLy8gdGhlbWUuY29uZmlnLmpzXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdpdGh1YjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9FZXp5UXVvdGUvcmVhY3QtYXV0by1jb21wbGV0ZScsIC8vIGxpbmsgb2YgdGhlIHByb2plY3QgcmVwb1xuICBzaXRlR2l0aHViOiAnaHR0cHM6Ly9naXRodWIuY29tL0VlenlRdW90ZS9yZWFjdC1hdXRvLWNvbXBsZXRlJywgLy8gbGluayBvZiB0aGUgZG9jcyByZXBvIHBhdGhcbiAgdGl0bGVTdWZmaXg6ICcg4oCTIFJlYWN0IEF1dG8gQ29tcGxldGUnLFxuICBuZXh0TGlua3M6IHRydWUsXG4gIHByZXZMaW5rczogdHJ1ZSxcbiAgc2VhcmNoOiB0cnVlLFxuICBjdXN0b21TZWFyY2g6IG51bGwsIC8vIDwtIGN1c3RvbWl6YWJsZSwgeW91IGNhbiB1c2UgYWxnb2xpYSBmb3IgZXhhbXBsZVxuICBkYXJrTW9kZTogdHJ1ZSxcbiAgZm9vdGVyOiB0cnVlLFxuICBmb290ZXJUZXh0OiBgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IMKpIEVlenlRdW90ZWAsXG4gIGZvb3RlckVkaXRPbkdpdEh1Ykxpbms6IHRydWUsIC8vIHdpbGwgbGluayB0byB0aGUgZG9jcyByZXBvXG4gIGxvZ286IChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8aW1nIHNyYz1cIi9wbGFjZS5zdmdcIiBjbGFzc05hbWU9XCJtci0yIGZvbnQtZXh0cmFib2xkIGhpZGRlbiBtZDppbmxpbmVcIiBzdHlsZT17e2hlaWdodDpcIjJlbVwifX0gLz5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgZm9udC1ub3JtYWwgaGlkZGVuIG1kOmlubGluZVwiPlJlYWN0IEF1dG8gQ29tcGxldGU8L3NwYW4+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKSxcbiAgaGVhZDogKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVDb2xvclwiIGNvbnRlbnQ9XCIjZmZmZmZmXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjZmZmZmZmXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cbiAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIkNvbnRlbnQtTGFuZ3VhZ2VcIiBjb250ZW50PVwiZW5cIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkVlenlxdW90ZSAtIFJlYWN0IEdvb2dsZSBQbGFjZXNcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIkVlenlxdW90ZSAtIFJlYWN0IEdvb2dsZSBQbGFjZXNcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PVwiQGVlenlxdW90ZVwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwib2c6dGl0bGVcIiBjb250ZW50PVwiRWV6eXF1b3RlIC0gUmVhY3QgR29vZ2xlIFBsYWNlc1wiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtdGl0bGVcIiBjb250ZW50PVwiRWV6eVF1b3RlXCIgLz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApLFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1keC1qcy9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0cmEtdGhlbWUtZG9jc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0cmEvc3NnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=