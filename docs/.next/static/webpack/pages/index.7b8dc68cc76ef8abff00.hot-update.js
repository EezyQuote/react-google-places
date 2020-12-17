webpackHotUpdate_N_E("pages/index",{

/***/ "./theme.config.js":
/*!*************************!*\
  !*** ./theme.config.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
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
  footerText: "".concat(new Date().getFullYear(), " \xA9 EezyQuote"),
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

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "../node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdGhlbWUuY29uZmlnLmpzIl0sIm5hbWVzIjpbImdpdGh1YiIsInNpdGVHaXRodWIiLCJ0aXRsZVN1ZmZpeCIsIm5leHRMaW5rcyIsInByZXZMaW5rcyIsInNlYXJjaCIsImN1c3RvbVNlYXJjaCIsImRhcmtNb2RlIiwiZm9vdGVyIiwiZm9vdGVyVGV4dCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImZvb3RlckVkaXRPbkdpdEh1YkxpbmsiLCJsb2dvIiwiaGVpZ2h0IiwiaGVhZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ2U7QUFDYkEsUUFBTSxFQUFFLG1EQURLO0FBQ2dEO0FBQzdEQyxZQUFVLEVBQUUsbURBRkM7QUFFb0Q7QUFDakVDLGFBQVcsRUFBRSx3QkFIQTtBQUliQyxXQUFTLEVBQUUsSUFKRTtBQUtiQyxXQUFTLEVBQUUsSUFMRTtBQU1iQyxRQUFNLEVBQUUsSUFOSztBQU9iQyxjQUFZLEVBQUUsSUFQRDtBQU9PO0FBQ3BCQyxVQUFRLEVBQUUsSUFSRztBQVNiQyxRQUFNLEVBQUUsSUFUSztBQVViQyxZQUFVLFlBQUssSUFBSUMsSUFBSixHQUFXQyxXQUFYLEVBQUwsb0JBVkc7QUFXYkMsd0JBQXNCLEVBQUUsSUFYWDtBQVdpQjtBQUM5QkMsTUFBSSxFQUNGLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBQyxZQUFUO0FBQXNCLGFBQVMsRUFBQyxzQ0FBaEM7QUFBdUUsU0FBSyxFQUFFO0FBQUNDLFlBQU0sRUFBQztBQUFSLEtBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQU0sYUFBUyxFQUFDLDRDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZGLENBYlc7QUFrQmJDLE1BQUksRUFDRixNQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxRQUFJLEVBQUMseUJBQVg7QUFBcUMsV0FBTyxFQUFDLFNBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQU0sUUFBSSxFQUFDLGFBQVg7QUFBeUIsV0FBTyxFQUFDLFNBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQU0sUUFBSSxFQUFDLFVBQVg7QUFBc0IsV0FBTyxFQUFDLHVDQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFJRTtBQUFNLGFBQVMsRUFBQyxrQkFBaEI7QUFBbUMsV0FBTyxFQUFDLElBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQUtFO0FBQU0sUUFBSSxFQUFDLGFBQVg7QUFBeUIsV0FBTyxFQUFDLGlDQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFNRTtBQUFNLFFBQUksRUFBQyxnQkFBWDtBQUE0QixXQUFPLEVBQUMsaUNBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixFQU9FO0FBQU0sUUFBSSxFQUFDLGNBQVg7QUFBMEIsV0FBTyxFQUFDLHFCQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsRUFRRTtBQUFNLFFBQUksRUFBQyxjQUFYO0FBQTBCLFdBQU8sRUFBQyxZQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsRUFTRTtBQUFNLFFBQUksRUFBQyxVQUFYO0FBQXNCLFdBQU8sRUFBQyxpQ0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLEVBVUU7QUFBTSxRQUFJLEVBQUMsNEJBQVg7QUFBd0MsV0FBTyxFQUFDLFdBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRjtBQW5CVyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdiOGRjNjhjYzc2ZWY4YWJmZjAwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0aGVtZS5jb25maWcuanNcbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2l0aHViOiAnaHR0cHM6Ly9naXRodWIuY29tL0BlZXp5cXVvdGUvcmVhY3QtYXV0by1jb21wbGV0ZScsIC8vIGxpbmsgb2YgdGhlIHByb2plY3QgcmVwb1xuICBzaXRlR2l0aHViOiAnaHR0cHM6Ly9naXRodWIuY29tL0BlZXp5cXVvdGUvcmVhY3QtYXV0by1jb21wbGV0ZScsIC8vIGxpbmsgb2YgdGhlIGRvY3MgcmVwbyBwYXRoXG4gIHRpdGxlU3VmZml4OiAnIOKAkyBSZWFjdCBBdXRvIENvbXBsZXRlJyxcbiAgbmV4dExpbmtzOiB0cnVlLFxuICBwcmV2TGlua3M6IHRydWUsXG4gIHNlYXJjaDogdHJ1ZSxcbiAgY3VzdG9tU2VhcmNoOiBudWxsLCAvLyA8LSBjdXN0b21pemFibGUsIHlvdSBjYW4gdXNlIGFsZ29saWEgZm9yIGV4YW1wbGVcbiAgZGFya01vZGU6IHRydWUsXG4gIGZvb3RlcjogdHJ1ZSxcbiAgZm9vdGVyVGV4dDogYCR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSDCqSBFZXp5UXVvdGVgLFxuICBmb290ZXJFZGl0T25HaXRIdWJMaW5rOiB0cnVlLCAvLyB3aWxsIGxpbmsgdG8gdGhlIGRvY3MgcmVwb1xuICBsb2dvOiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGltZyBzcmM9XCIvcGxhY2Uuc3ZnXCIgY2xhc3NOYW1lPVwibXItMiBmb250LWV4dHJhYm9sZCBoaWRkZW4gbWQ6aW5saW5lXCIgc3R5bGU9e3toZWlnaHQ6XCIyZW1cIn19IC8+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIGZvbnQtbm9ybWFsIGhpZGRlbiBtZDppbmxpbmVcIj5SZWFjdCBBdXRvIENvbXBsZXRlPC9zcGFuPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICksXG4gIGhlYWQ6IChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlQ29sb3JcIiBjb250ZW50PVwiI2ZmZmZmZlwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiI2ZmZmZmZlwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG4gICAgICA8bWV0YSBodHRwRXF1aXY9XCJDb250ZW50LUxhbmd1YWdlXCIgY29udGVudD1cImVuXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJFZXp5cXVvdGUgLSBSZWFjdCBHb29nbGUgUGxhY2VzXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJFZXp5cXVvdGUgLSBSZWFjdCBHb29nbGUgUGxhY2VzXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpzaXRlXCIgY29udGVudD1cIkBlZXp5cXVvdGVcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cIm9nOnRpdGxlXCIgY29udGVudD1cIkVlenlxdW90ZSAtIFJlYWN0IEdvb2dsZSBQbGFjZXNcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLXRpdGxlXCIgY29udGVudD1cIkVlenlRdW90ZVwiIC8+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKSxcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=