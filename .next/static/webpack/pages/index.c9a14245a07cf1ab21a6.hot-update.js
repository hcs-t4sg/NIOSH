"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Compare/Compare.tsx":
/*!****************************************!*\
  !*** ./components/Compare/Compare.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/mariacheriyan/Documents/GitHub/NIOSH/components/Compare/Compare.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Compare = function Compare() {\n  _s();\n\n  var categories = [\"Lab1\", \"Lab2\", \"Lab3\"];\n  var parameters = [\"Humidity\", \"Temperature\"];\n  var information = [\"Windows\", \"Floor\"];\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      status = _useState[0],\n      setStatus = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      status2 = _useState2[0],\n      setStatus2 = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      param = _useState3[0],\n      setParam = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      otherinfo = _useState4[0],\n      setOtherInfo = _useState4[1];\n\n  var temphum = \"\";\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n    className: \"section position-relative\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.InputLabel, {\n          id: \"category-select-label\",\n          children: \"Lab\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Select, {\n          labelId: \"category-select-label\",\n          value: status,\n          onChange: function onChange(event) {\n            setStatus(event.target.value);\n          },\n          children: categories.map(function (category, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {\n              value: index,\n              children: [\" \", category, \" \"]\n            }, index, true, {\n              fileName: _jsxFileName,\n              lineNumber: 40,\n              columnNumber: 24\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.InputLabel, {\n          id: \"category-select-label\",\n          children: \"Lab\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Select, {\n          labelId: \"category-select-label\",\n          fullWidth: true,\n          value: status2,\n          onChange: function onChange(event) {\n            setStatus2(event.target.value);\n          },\n          children: categories.map(function (category, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {\n              value: index,\n              children: [\" \", category, \" \"]\n            }, index, true, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 24\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {\n          children: status ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n            className: \"font-weight-normal t4sg-color text-center\",\n            children: status\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 13\n          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n            children: \" Loading data! \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 14\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {\n          children: status2 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n            className: \"font-weight-normal t4sg-color text-center\",\n            children: status2\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 13\n          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n            children: \" Loading data for second lab! \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 14\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n        fullWidth: true,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.InputLabel, {\n          id: \"category-select-label\",\n          children: \"Parameters\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Select, {\n          labelId: \"category-select-label\",\n          value: param,\n          onChange: function onChange(event) {\n            setParam(event.target.value);\n          },\n          children: parameters.map(function (parameter, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {\n              value: index,\n              children: [\" \", parameter, \" \"]\n            }, index, true, {\n              fileName: _jsxFileName,\n              lineNumber: 98,\n              columnNumber: 24\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h5\", {\n            className: \"text-center\",\n            children: [\" Displaying predictions for: \", param, \" \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 103,\n            columnNumber: 15\n          }, _this), \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n        fullWidth: true,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.InputLabel, {\n          id: \"category-select-label\",\n          children: \"Other Information\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Select, {\n          labelId: \"category-select-label\",\n          value: otherinfo,\n          onChange: function onChange(event) {\n            setOtherInfo(event.target.value);\n          },\n          children: information.map(function (info, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {\n              value: index,\n              children: [\" \", info, \" \"]\n            }, index, true, {\n              fileName: _jsxFileName,\n              lineNumber: 117,\n              columnNumber: 24\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h5\", {\n          className: \"text-center\",\n          children: [\" Lab \", status + 1, \": \", otherinfo, \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 122,\n          columnNumber: 15\n        }, _this), \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {\n        children: [\"   \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h5\", {\n          className: \"text-center\",\n          children: [\" Lab \", status2 + 1, \": \", otherinfo, \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 123,\n          columnNumber: 19\n        }, _this), \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Compare, \"DNZ+ai33YcdKqeuM8NDkA7oV2oM=\");\n\n_c = Compare;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Compare);\n\nvar _c;\n\n$RefreshReg$(_c, \"Compare\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxlQXJDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEzREYsZUFrR0UsOERBQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxHRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdHRCxDQW5IRDs7R0FBTVY7O0tBQUFBO0FBb0hOLCtEQUFlQSxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29tcGFyZS9Db21wYXJlLnRzeD84NDI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIEZvcm1Db250cm9sLFxuICBJbnB1dExhYmVsLFxuICBNZW51SXRlbSxcbiAgU2VsZWN0LFxuICBUZXh0RmllbGQsXG4gIFR5cG9ncmFwaHksXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuXG5cbmNvbnN0IENvbXBhcmUgPSAoKSA9PiB7XG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBbXCJMYWIxXCIsXCJMYWIyXCIsXCJMYWIzXCJdO1xuICBjb25zdCBwYXJhbWV0ZXJzID0gW1wiSHVtaWRpdHlcIixcIlRlbXBlcmF0dXJlXCIsXTtcbiAgY29uc3QgaW5mb3JtYXRpb24gPSBbXCJXaW5kb3dzXCIsXCJGbG9vclwiXVxuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtzdGF0dXMyLCBzZXRTdGF0dXMyXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbcGFyYW0sIHNldFBhcmFtXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbb3RoZXJpbmZvLCBzZXRPdGhlckluZm9dID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIHZhciB0ZW1waHVtID0gXCJcIlxuXG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uIHBvc2l0aW9uLXJlbGF0aXZlXCI+XG4gICAgICBcbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxGb3JtQ29udHJvbD5cbiAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiY2F0ZWdvcnktc2VsZWN0LWxhYmVsXCI+TGFiPC9JbnB1dExhYmVsPlxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICBsYWJlbElkPVwiY2F0ZWdvcnktc2VsZWN0LWxhYmVsXCJcbiAgICAgICAgICAgICAgdmFsdWUgPSB7c3RhdHVzfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDx7IHZhbHVlOiB1bmtub3duIH0+KSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0U3RhdHVzKGV2ZW50LnRhcmdldC52YWx1ZSBhcyBzdHJpbmcpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPiBcbiAgICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPE1lbnVJdGVtIGtleT17aW5kZXh9IHZhbHVlPXtpbmRleH0+IHtjYXRlZ29yeX0gPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgIFxuICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICBcbiAgICAgICAgICA8Rm9ybUNvbnRyb2w+XG4gICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImNhdGVnb3J5LXNlbGVjdC1sYWJlbFwiPkxhYjwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgbGFiZWxJZD1cImNhdGVnb3J5LXNlbGVjdC1sYWJlbFwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICB2YWx1ZSA9IHtzdGF0dXMyfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDx7IHZhbHVlOiB1bmtub3duIH0+KSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0U3RhdHVzMihldmVudC50YXJnZXQudmFsdWUgYXMgc3RyaW5nKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID4gXG4gICAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxNZW51SXRlbSBrZXk9e2luZGV4fSB2YWx1ZT17aW5kZXh9PiB7Y2F0ZWdvcnl9IDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cblxuICAgICAgICAgIDxSb3c+IFxuICAgICAgICAgICAgPENvbD4gIFxuICAgICAgICAgICAge3N0YXR1cyA/IChcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ub3JtYWwgdDRzZy1jb2xvciB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICB7c3RhdHVzfSBcbiAgICAgICAgICAgIDwvaDM+ICkgOiAoXG4gICAgICAgICAgICAgPGgzPiBMb2FkaW5nIGRhdGEhIDwvaDM+IFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvQ29sPlxuXG4gICAgICAgICAgICA8Q29sPiAgXG4gICAgICAgICAgICB7c3RhdHVzMiA/IChcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ub3JtYWwgdDRzZy1jb2xvciB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICB7c3RhdHVzMn0gXG4gICAgICAgICAgICA8L2gzPiApIDogKFxuICAgICAgICAgICAgIDxoMz4gTG9hZGluZyBkYXRhIGZvciBzZWNvbmQgbGFiISA8L2gzPiBcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgPC9Sb3c+XG5cbiAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoPlxuICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJjYXRlZ29yeS1zZWxlY3QtbGFiZWxcIj5QYXJhbWV0ZXJzPC9JbnB1dExhYmVsPlxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICBsYWJlbElkPVwiY2F0ZWdvcnktc2VsZWN0LWxhYmVsXCJcbiAgICAgICAgICAgICAgdmFsdWUgPSB7cGFyYW19XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PHsgdmFsdWU6IHVua25vd24gfT4pID0+IHtcbiAgICAgICAgICAgICAgICBzZXRQYXJhbShldmVudC50YXJnZXQudmFsdWUgYXMgc3RyaW5nKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICBcbiAgICAgICAgICAgID4gXG4gICAgICAgICAgICAgIHtwYXJhbWV0ZXJzLm1hcCgocGFyYW1ldGVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8TWVudUl0ZW0ga2V5PXtpbmRleH0gdmFsdWU9e2luZGV4fT4ge3BhcmFtZXRlcn0gPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPFJvdz4gXG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPiBEaXNwbGF5aW5nIHByZWRpY3Rpb25zIGZvcjoge3BhcmFtfSA8L2g1PiA8L1Jvdz5cblxuXG4gICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgIDxGb3JtQ29udHJvbCBmdWxsV2lkdGg+XG4gICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImNhdGVnb3J5LXNlbGVjdC1sYWJlbFwiPk90aGVyIEluZm9ybWF0aW9uPC9JbnB1dExhYmVsPlxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICBsYWJlbElkPVwiY2F0ZWdvcnktc2VsZWN0LWxhYmVsXCJcbiAgICAgICAgICAgICAgdmFsdWUgPSB7b3RoZXJpbmZvfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDx7IHZhbHVlOiB1bmtub3duIH0+KSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0T3RoZXJJbmZvKGV2ZW50LnRhcmdldC52YWx1ZSBhcyBzdHJpbmcpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPiBcbiAgICAgICAgICAgICAge2luZm9ybWF0aW9uLm1hcCgoaW5mbywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPE1lbnVJdGVtIGtleT17aW5kZXh9IHZhbHVlPXtpbmRleH0+IHtpbmZvfSA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgPFJvdz4gXG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPiBMYWIge3N0YXR1cyArIDF9OiB7b3RoZXJpbmZvfSA8L2g1PiA8L1Jvdz5cbiAgICAgICAgICA8Um93PiAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPiBMYWIge3N0YXR1czIgKyAxfToge290aGVyaW5mb30gPC9oNT4gPC9Sb3c+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgIFxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgQ29tcGFyZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNvbnRhaW5lciIsIlJvdyIsIkNvbCIsIkZvcm1Db250cm9sIiwiSW5wdXRMYWJlbCIsIk1lbnVJdGVtIiwiU2VsZWN0IiwiQ29tcGFyZSIsImNhdGVnb3JpZXMiLCJwYXJhbWV0ZXJzIiwiaW5mb3JtYXRpb24iLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJzdGF0dXMyIiwic2V0U3RhdHVzMiIsInBhcmFtIiwic2V0UGFyYW0iLCJvdGhlcmluZm8iLCJzZXRPdGhlckluZm8iLCJ0ZW1waHVtIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsImNhdGVnb3J5IiwiaW5kZXgiLCJwYXJhbWV0ZXIiLCJpbmZvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Compare/Compare.tsx\n");

/***/ })

});