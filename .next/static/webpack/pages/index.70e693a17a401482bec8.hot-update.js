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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/mariacheriyan/Documents/GitHub/NIOSH/components/Compare/Compare.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Compare = function Compare() {\n  _s();\n\n  var categories = [\"Lab1\", \"Lab2\", \"Lab3\"];\n  var parameters = [\"Humidity\", \"Temperature\"];\n  var information = [\"Windows\", \"Floor\"];\n  var labdata_hum = {\n    \"Lab1\": \"This is the humidity data for Lab 1!\",\n    \"Lab2\": \"This is the humidity data for Lab 2!\",\n    \"Lab3\": \"This is the humidity data for Lab 3!\"\n  };\n  var labdata_temp = {\n    \"Lab1\": \"This is the temperature data for Lab 1!\",\n    \"Lab2\": \"This is the temperature data for Lab 2!\",\n    \"Lab3\": \"This is the temperature data for Lab 3!\"\n  };\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      status = _useState[0],\n      setStatus = _useState[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n    className: \"section position-relative\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.InputLabel, {\n          id: \"category-select-label\",\n          children: \"Lab\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Select, {\n          labelId: \"category-select-label\",\n          value: status,\n          onChange: function onChange(event) {\n            setStatus(event.target.value);\n          },\n          children: categories.map(function (category, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {\n              value: index,\n              children: [\" \", category, \" \"]\n            }, index, true, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 24\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.InputLabel, {\n          id: \"category-select-label\",\n          children: \"Lab\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Select, {\n          labelId: \"category-select-label\",\n          fullWidth: true,\n          children: categories.map(function (category, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {\n              value: index,\n              children: [\" \", category, \" \"]\n            }, index, true, {\n              fileName: _jsxFileName,\n              lineNumber: 59,\n              columnNumber: 24\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {\n        children: status == \"Lab1\" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n          className: \"font-weight-normal t4sg-color text-center\",\n          children: [\"labdata_hum[\", status, \"]\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 13\n        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n          children: \" \\\"Loading data!\\\" \"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 14\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n        fullWidth: true,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.InputLabel, {\n          id: \"category-select-label\",\n          children: \"Parameters\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Select, {\n          labelId: \"category-select-label\",\n          children: parameters.map(function (parameter, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {\n              value: index,\n              children: [\" \", parameter, \" \"]\n            }, index, true, {\n              fileName: _jsxFileName,\n              lineNumber: 81,\n              columnNumber: 24\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n        fullWidth: true,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.InputLabel, {\n          id: \"category-select-label\",\n          children: \"Other Information\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Select, {\n          labelId: \"category-select-label\",\n          children: information.map(function (info, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {\n              value: index,\n              children: [\" \", info, \" \"]\n            }, index, true, {\n              fileName: _jsxFileName,\n              lineNumber: 91,\n              columnNumber: 24\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Compare, \"exZrOwPDPYVLNwCEqdcaGepi0SY=\");\n\n_c = Compare;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Compare);\n\nvar _c;\n\n$RefreshReg$(_c, \"Compare\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSSw4REFBQyxxREFBRDtBQUNFLGlCQUFPLEVBQUMsdUJBRFY7QUFBQSxvQkFJR0osVUFBVSxDQUFDUyxHQUFYLENBQWUsVUFBQ0csU0FBRCxFQUFZRCxLQUFaLEVBQXNCO0FBQ3BDLGdDQUFPLDhEQUFDLHVEQUFEO0FBQXNCLG1CQUFLLEVBQUVBLEtBQTdCO0FBQUEsOEJBQXNDQyxTQUF0QztBQUFBLGVBQWVELEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBUDtBQUNELFdBRkE7QUFKSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBWUUsOERBQUMsMERBQUQ7QUFBYSxpQkFBUyxNQUF0QjtBQUFBLGdDQUNJLDhEQUFDLHlEQUFEO0FBQVksWUFBRSxFQUFDLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUksOERBQUMscURBQUQ7QUFDRSxpQkFBTyxFQUFDLHVCQURWO0FBQUEsb0JBR0dWLFdBQVcsQ0FBQ1EsR0FBWixDQUFnQixVQUFDSSxJQUFELEVBQU9GLEtBQVAsRUFBaUI7QUFDaEMsZ0NBQU8sOERBQUMsdURBQUQ7QUFBc0IsbUJBQUssRUFBRUEsS0FBN0I7QUFBQSw4QkFBc0NFLElBQXRDO0FBQUEsZUFBZUYsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFQO0FBQ0QsV0FGQTtBQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBeENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0VELENBbkZEOztHQUFNYjs7S0FBQUE7QUFvRk4sK0RBQWVBLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21wYXJlL0NvbXBhcmUudHN4Pzg0MjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQge1xuICBCb3gsXG4gIEJ1dHRvbixcbiAgRm9ybUNvbnRyb2wsXG4gIElucHV0TGFiZWwsXG4gIE1lbnVJdGVtLFxuICBTZWxlY3QsXG4gIFRleHRGaWVsZCxcbiAgVHlwb2dyYXBoeSxcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5cblxuY29uc3QgQ29tcGFyZSA9ICgpID0+IHtcbiAgY29uc3QgY2F0ZWdvcmllcyA9IFtcIkxhYjFcIixcIkxhYjJcIixcIkxhYjNcIl07XG4gIGNvbnN0IHBhcmFtZXRlcnMgPSBbXCJIdW1pZGl0eVwiLFwiVGVtcGVyYXR1cmVcIixdO1xuICBjb25zdCBpbmZvcm1hdGlvbiA9IFtcIldpbmRvd3NcIixcIkZsb29yXCJdO1xuICBjb25zdCBsYWJkYXRhX2h1bSA9IHtcbiAgICBcIkxhYjFcIiA6IFwiVGhpcyBpcyB0aGUgaHVtaWRpdHkgZGF0YSBmb3IgTGFiIDEhXCIsXG4gICAgXCJMYWIyXCIgOiBcIlRoaXMgaXMgdGhlIGh1bWlkaXR5IGRhdGEgZm9yIExhYiAyIVwiLFxuICAgIFwiTGFiM1wiIDogXCJUaGlzIGlzIHRoZSBodW1pZGl0eSBkYXRhIGZvciBMYWIgMyFcIlxuICB9XG4gIGNvbnN0IGxhYmRhdGFfdGVtcCA9IHtcbiAgICBcIkxhYjFcIiA6IFwiVGhpcyBpcyB0aGUgdGVtcGVyYXR1cmUgZGF0YSBmb3IgTGFiIDEhXCIsXG4gICAgXCJMYWIyXCIgOiBcIlRoaXMgaXMgdGhlIHRlbXBlcmF0dXJlIGRhdGEgZm9yIExhYiAyIVwiLFxuICAgIFwiTGFiM1wiIDogXCJUaGlzIGlzIHRoZSB0ZW1wZXJhdHVyZSBkYXRhIGZvciBMYWIgMyFcIlxuICB9XG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbiBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxuICAgICAgXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8Rm9ybUNvbnRyb2w+XG4gICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImNhdGVnb3J5LXNlbGVjdC1sYWJlbFwiPkxhYjwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgbGFiZWxJZD1cImNhdGVnb3J5LXNlbGVjdC1sYWJlbFwiXG4gICAgICAgICAgICAgIHZhbHVlID0ge3N0YXR1c31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8eyB2YWx1ZTogdW5rbm93biB9PikgPT4ge1xuICAgICAgICAgICAgICAgIHNldFN0YXR1cyhldmVudC50YXJnZXQudmFsdWUgYXMgc3RyaW5nKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID4gXG4gICAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxNZW51SXRlbSBrZXk9e2luZGV4fSB2YWx1ZT17aW5kZXh9PiB7Y2F0ZWdvcnl9IDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICBcbiAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgXG4gICAgICAgICAgPEZvcm1Db250cm9sPlxuICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJjYXRlZ29yeS1zZWxlY3QtbGFiZWxcIj5MYWI8L0lucHV0TGFiZWw+XG4gICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgIGxhYmVsSWQ9XCJjYXRlZ29yeS1zZWxlY3QtbGFiZWxcIlxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgID4gXG4gICAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxNZW51SXRlbSBrZXk9e2luZGV4fSB2YWx1ZT17aW5kZXh9PiB7Y2F0ZWdvcnl9IDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD4gXG4gICAgICAgICAgPFJvdz4gXG4gICAgICAgICAge3N0YXR1cyA9PSBcIkxhYjFcIiA/IChcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ub3JtYWwgdDRzZy1jb2xvciB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICBsYWJkYXRhX2h1bVt7c3RhdHVzfV1cbiAgICAgICAgICAgIDwvaDM+ICkgOiAoXG4gICAgICAgICAgICAgPGgzPiBcIkxvYWRpbmcgZGF0YSFcIiA8L2gzPiBcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICBcbiAgICAgICAgICA8L1Jvdz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEZvcm1Db250cm9sIGZ1bGxXaWR0aD5cbiAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiY2F0ZWdvcnktc2VsZWN0LWxhYmVsXCI+UGFyYW1ldGVyczwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgbGFiZWxJZD1cImNhdGVnb3J5LXNlbGVjdC1sYWJlbFwiXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICA+IFxuICAgICAgICAgICAgICB7cGFyYW1ldGVycy5tYXAoKHBhcmFtZXRlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPE1lbnVJdGVtIGtleT17aW5kZXh9IHZhbHVlPXtpbmRleH0+IHtwYXJhbWV0ZXJ9IDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgIDxGb3JtQ29udHJvbCBmdWxsV2lkdGg+XG4gICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImNhdGVnb3J5LXNlbGVjdC1sYWJlbFwiPk90aGVyIEluZm9ybWF0aW9uPC9JbnB1dExhYmVsPlxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICBsYWJlbElkPVwiY2F0ZWdvcnktc2VsZWN0LWxhYmVsXCJcbiAgICAgICAgICAgID4gXG4gICAgICAgICAgICAgIHtpbmZvcm1hdGlvbi5tYXAoKGluZm8sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxNZW51SXRlbSBrZXk9e2luZGV4fSB2YWx1ZT17aW5kZXh9PiB7aW5mb30gPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgQ29tcGFyZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNvbnRhaW5lciIsIlJvdyIsIkZvcm1Db250cm9sIiwiSW5wdXRMYWJlbCIsIk1lbnVJdGVtIiwiU2VsZWN0IiwiQ29tcGFyZSIsImNhdGVnb3JpZXMiLCJwYXJhbWV0ZXJzIiwiaW5mb3JtYXRpb24iLCJsYWJkYXRhX2h1bSIsImxhYmRhdGFfdGVtcCIsInN0YXR1cyIsInNldFN0YXR1cyIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJjYXRlZ29yeSIsImluZGV4IiwicGFyYW1ldGVyIiwiaW5mbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Compare/Compare.tsx\n");

/***/ })

});