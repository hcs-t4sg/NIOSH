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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/mariacheriyan/Documents/GitHub/NIOSH/components/Compare/Compare.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Compare = function Compare() {\n  _s();\n\n  var categories = [\"Lab1\", \"Lab2\", \"Lab3\"];\n  var parameters = [\"Humidity\", \"Temperature\"];\n  var information = [\"Windows\", \"Floor\"];\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      status = _useState[0],\n      setStatus = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      status2 = _useState2[0],\n      setStatus2 = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      param = _useState3[0],\n      setParam = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      otherinfo = _useState4[0],\n      setOtherInfo = _useState4[1];\n\n  var temphum = \"\";\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n    className: \"section position-relative\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.InputLabel, {\n          id: \"category-select-label\",\n          children: \"Lab\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Select, {\n          labelId: \"category-select-label\",\n          value: status,\n          onChange: function onChange(event) {\n            setStatus(event.target.value);\n          },\n          children: categories.map(function (category, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {\n              value: index,\n              children: [\" \", category, \" \"]\n            }, index, true, {\n              fileName: _jsxFileName,\n              lineNumber: 40,\n              columnNumber: 24\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.InputLabel, {\n          id: \"category-select-label\",\n          children: \"Lab\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Select, {\n          labelId: \"category-select-label\",\n          fullWidth: true,\n          value: status2,\n          onChange: function onChange(event) {\n            setStatus2(event.target.value);\n          },\n          children: categories.map(function (category, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {\n              value: index,\n              children: [\" \", category, \" \"]\n            }, index, true, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 24\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {\n          children: status ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n            className: \"font-weight-normal t4sg-color text-center\",\n            children: status\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 13\n          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n            children: \" Loading data! \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 14\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {\n          children: status2 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n            className: \"font-weight-normal t4sg-color text-center\",\n            children: status2\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 13\n          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n            children: \" Loading data for second lab! \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 14\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n        fullWidth: true,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.InputLabel, {\n          id: \"category-select-label\",\n          children: \"Parameters\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Select, {\n          labelId: \"category-select-label\",\n          value: param,\n          onChange: function onChange(event) {\n            setParam(event.target.value);\n          },\n          children: parameters.map(function (parameter, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {\n              value: index,\n              children: [\" \", parameter, \" \"]\n            }, index, true, {\n              fileName: _jsxFileName,\n              lineNumber: 98,\n              columnNumber: 24\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {\n          className: \"text-center\",\n          children: [\" Displaying predictions for: \", param, \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n        fullWidth: true,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.InputLabel, {\n          id: \"category-select-label\",\n          children: \"Other Information\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Select, {\n          labelId: \"category-select-label\",\n          children: information.map(function (info, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {\n              value: index,\n              children: [\" \", info, \" \"]\n            }, index, true, {\n              fileName: _jsxFileName,\n              lineNumber: 112,\n              columnNumber: 24\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Compare, \"DNZ+ai33YcdKqeuM8NDkA7oV2oM=\");\n\n_c = Compare;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Compare);\n\nvar _c;\n\n$RefreshReg$(_c, \"Compare\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLGlCQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBb0JFLDhEQUFDLDBEQUFEO0FBQWEsaUJBQVMsTUFBdEI7QUFBQSxnQ0FDSSw4REFBQyx5REFBRDtBQUFZLFlBQUUsRUFBQyx1QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJLDhEQUFDLHFEQUFEO0FBQ0UsaUJBQU8sRUFBQyx1QkFEVjtBQUFBLG9CQUdHTCxXQUFXLENBQUNhLEdBQVosQ0FBZ0IsVUFBQ0ksSUFBRCxFQUFPRixLQUFQLEVBQWlCO0FBQ2hDLGdDQUFPLDhEQUFDLHVEQUFEO0FBQXNCLG1CQUFLLEVBQUVBLEtBQTdCO0FBQUEsOEJBQXNDRSxJQUF0QztBQUFBLGVBQWVGLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBUDtBQUNELFdBRkE7QUFISDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEzREYsZUEwRkUsOERBQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdHRCxDQTNHRDs7R0FBTWxCOztLQUFBQTtBQTRHTiwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbXBhcmUvQ29tcGFyZS50c3g/ODQyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB7XG4gIEJveCxcbiAgQnV0dG9uLFxuICBGb3JtQ29udHJvbCxcbiAgSW5wdXRMYWJlbCxcbiAgTWVudUl0ZW0sXG4gIFNlbGVjdCxcbiAgVGV4dEZpZWxkLFxuICBUeXBvZ3JhcGh5LFxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcblxuXG5jb25zdCBDb21wYXJlID0gKCkgPT4ge1xuICBjb25zdCBjYXRlZ29yaWVzID0gW1wiTGFiMVwiLFwiTGFiMlwiLFwiTGFiM1wiXTtcbiAgY29uc3QgcGFyYW1ldGVycyA9IFtcIkh1bWlkaXR5XCIsXCJUZW1wZXJhdHVyZVwiLF07XG4gIGNvbnN0IGluZm9ybWF0aW9uID0gW1wiV2luZG93c1wiLFwiRmxvb3JcIl1cbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbc3RhdHVzMiwgc2V0U3RhdHVzMl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3BhcmFtLCBzZXRQYXJhbV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW290aGVyaW5mbywgc2V0T3RoZXJJbmZvXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICB2YXIgdGVtcGh1bSA9IFwiXCJcblxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbiBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxuICAgICAgXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8Rm9ybUNvbnRyb2w+XG4gICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImNhdGVnb3J5LXNlbGVjdC1sYWJlbFwiPkxhYjwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgbGFiZWxJZD1cImNhdGVnb3J5LXNlbGVjdC1sYWJlbFwiXG4gICAgICAgICAgICAgIHZhbHVlID0ge3N0YXR1c31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8eyB2YWx1ZTogdW5rbm93biB9PikgPT4ge1xuICAgICAgICAgICAgICAgIHNldFN0YXR1cyhldmVudC50YXJnZXQudmFsdWUgYXMgc3RyaW5nKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID4gXG4gICAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxNZW51SXRlbSBrZXk9e2luZGV4fSB2YWx1ZT17aW5kZXh9PiB7Y2F0ZWdvcnl9IDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICBcbiAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgXG4gICAgICAgICAgPEZvcm1Db250cm9sPlxuICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJjYXRlZ29yeS1zZWxlY3QtbGFiZWxcIj5MYWI8L0lucHV0TGFiZWw+XG4gICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgIGxhYmVsSWQ9XCJjYXRlZ29yeS1zZWxlY3QtbGFiZWxcIlxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgdmFsdWUgPSB7c3RhdHVzMn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8eyB2YWx1ZTogdW5rbm93biB9PikgPT4ge1xuICAgICAgICAgICAgICAgIHNldFN0YXR1czIoZXZlbnQudGFyZ2V0LnZhbHVlIGFzIHN0cmluZyk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+IFxuICAgICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8TWVudUl0ZW0ga2V5PXtpbmRleH0gdmFsdWU9e2luZGV4fT4ge2NhdGVnb3J5fSA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG5cbiAgICAgICAgICA8Um93PiBcbiAgICAgICAgICAgIDxDb2w+ICBcbiAgICAgICAgICAgIHtzdGF0dXMgPyAoXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtbm9ybWFsIHQ0c2ctY29sb3IgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAge3N0YXR1c30gXG4gICAgICAgICAgICA8L2gzPiApIDogKFxuICAgICAgICAgICAgIDxoMz4gTG9hZGluZyBkYXRhISA8L2gzPiBcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0NvbD5cblxuICAgICAgICAgICAgPENvbD4gIFxuICAgICAgICAgICAge3N0YXR1czIgPyAoXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtbm9ybWFsIHQ0c2ctY29sb3IgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAge3N0YXR1czJ9IFxuICAgICAgICAgICAgPC9oMz4gKSA6IChcbiAgICAgICAgICAgICA8aDM+IExvYWRpbmcgZGF0YSBmb3Igc2Vjb25kIGxhYiEgPC9oMz4gXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvUm93PlxuXG4gICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEZvcm1Db250cm9sIGZ1bGxXaWR0aD5cbiAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiY2F0ZWdvcnktc2VsZWN0LWxhYmVsXCI+UGFyYW1ldGVyczwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgbGFiZWxJZD1cImNhdGVnb3J5LXNlbGVjdC1sYWJlbFwiXG4gICAgICAgICAgICAgIHZhbHVlID0ge3BhcmFtfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDx7IHZhbHVlOiB1bmtub3duIH0+KSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0UGFyYW0oZXZlbnQudGFyZ2V0LnZhbHVlIGFzIHN0cmluZyk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICA+IFxuICAgICAgICAgICAgICB7cGFyYW1ldGVycy5tYXAoKHBhcmFtZXRlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPE1lbnVJdGVtIGtleT17aW5kZXh9IHZhbHVlPXtpbmRleH0+IHtwYXJhbWV0ZXJ9IDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj4gRGlzcGxheWluZyBwcmVkaWN0aW9ucyBmb3I6IHtwYXJhbX0gPC9Sb3c+XG5cblxuICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICA8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoPlxuICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJjYXRlZ29yeS1zZWxlY3QtbGFiZWxcIj5PdGhlciBJbmZvcm1hdGlvbjwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgbGFiZWxJZD1cImNhdGVnb3J5LXNlbGVjdC1sYWJlbFwiXG4gICAgICAgICAgICA+IFxuICAgICAgICAgICAgICB7aW5mb3JtYXRpb24ubWFwKChpbmZvLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8TWVudUl0ZW0ga2V5PXtpbmRleH0gdmFsdWU9e2luZGV4fT4ge2luZm99IDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgXG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBDb21wYXJlOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ29udGFpbmVyIiwiUm93IiwiQ29sIiwiRm9ybUNvbnRyb2wiLCJJbnB1dExhYmVsIiwiTWVudUl0ZW0iLCJTZWxlY3QiLCJDb21wYXJlIiwiY2F0ZWdvcmllcyIsInBhcmFtZXRlcnMiLCJpbmZvcm1hdGlvbiIsInN0YXR1cyIsInNldFN0YXR1cyIsInN0YXR1czIiLCJzZXRTdGF0dXMyIiwicGFyYW0iLCJzZXRQYXJhbSIsIm90aGVyaW5mbyIsInNldE90aGVySW5mbyIsInRlbXBodW0iLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwibWFwIiwiY2F0ZWdvcnkiLCJpbmRleCIsInBhcmFtZXRlciIsImluZm8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Compare/Compare.tsx\n");

/***/ })

});