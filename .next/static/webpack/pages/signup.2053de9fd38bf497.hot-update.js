"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signup",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_AppLayout_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppLayout/AppLayout */ \"./components/AppLayout/AppLayout.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/button */ \"./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/checkbox */ \"./node_modules/antd/lib/checkbox/index.js\");\n/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/form */ \"./node_modules/antd/lib/form/index.js\");\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/input */ \"./node_modules/antd/lib/input/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst dummyUser = {\n    username: \"thdud\",\n    password: \"thdud\"\n};\nconst Signup = ()=>{\n    _s();\n    const [username, setUsername] = useState(\"\");\n    const onChangeUsername = ()=>{\n        setUsername(e.target.vlaue);\n    };\n    const [password, setPassword] = useState(\"\");\n    const onFinish = (param)=>{\n        let { values } = param;\n        console.log(values);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppLayout_AppLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Signup\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\82106\\\\Desktop\\\\blog\\\\pages\\\\signup.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onFinish: onFinish,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n                        label: \"Username\",\n                        name: \"username\",\n                        rules: [\n                            {\n                                required: true,\n                                message: \"Please input your username!\"\n                            }\n                        ],\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\82106\\\\Desktop\\\\blog\\\\pages\\\\signup.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\82106\\\\Desktop\\\\blog\\\\pages\\\\signup.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n                        label: \"Password\",\n                        name: \"password\",\n                        rules: [\n                            {\n                                required: true,\n                                message: \"Please input your username!\"\n                            }\n                        ],\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Password, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\82106\\\\Desktop\\\\blog\\\\pages\\\\signup.js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\82106\\\\Desktop\\\\blog\\\\pages\\\\signup.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n                        name: \"remember\",\n                        valuePropName: \"checked\",\n                        wrapperCol: {\n                            offset: 8,\n                            span: 16\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            children: \"Remember me\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\82106\\\\Desktop\\\\blog\\\\pages\\\\signup.js\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\82106\\\\Desktop\\\\blog\\\\pages\\\\signup.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n                        wrapperCol: {\n                            offset: 8,\n                            span: 16\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            type: \"primary\",\n                            htmlType: \"submit\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\82106\\\\Desktop\\\\blog\\\\pages\\\\signup.js\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\82106\\\\Desktop\\\\blog\\\\pages\\\\signup.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\82106\\\\Desktop\\\\blog\\\\pages\\\\signup.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\82106\\\\Desktop\\\\blog\\\\pages\\\\signup.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Signup, \"Lrw7JeD9zj6OUWhT/IH4OIvPKEk=\");\n_c = Signup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Signup);\nvar _c;\n$RefreshReg$(_c, \"Signup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWdudXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2dDO0FBQ0w7QUFBQTtBQUFBO0FBQUE7QUFFckQsTUFBTU0sWUFBWTtJQUNoQkMsVUFBVTtJQUNWQyxVQUFVO0FBQ1o7QUFFQSxNQUFNQyxTQUFTOztJQUNiLE1BQU0sQ0FBQ0YsVUFBVUcsWUFBWSxHQUFHQyxTQUFTO0lBQ3pDLE1BQU1DLG1CQUFtQjtRQUN2QkYsWUFBWUcsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO0lBQzVCO0lBQ0EsTUFBTSxDQUFDUCxVQUFVUSxZQUFZLEdBQUdMLFNBQVM7SUFDekMsTUFBTU0sV0FBVztZQUFDLEVBQUVDLE1BQU0sRUFBRTtRQUMxQkMsUUFBUUMsR0FBRyxDQUFDRjtJQUNkO0lBQ0EscUJBQ0UsOERBQUNqQix1RUFBU0E7OzBCQUNSLDhEQUFDb0I7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ2pCLHFEQUFJQTtnQkFBQ2EsVUFBVUE7O2tDQUNkLDhEQUFDYiwwREFBUzt3QkFDUm1CLE9BQU07d0JBQ05DLE1BQUs7d0JBQ0xDLE9BQU87NEJBQ0w7Z0NBQ0VDLFVBQVU7Z0NBQ1ZDLFNBQVM7NEJBQ1g7eUJBQ0Q7a0NBRUQsNEVBQUN0QixzREFBS0E7Ozs7Ozs7Ozs7a0NBRVIsOERBQUNELDBEQUFTO3dCQUNSbUIsT0FBTTt3QkFDTkMsTUFBSzt3QkFDTEMsT0FBTzs0QkFDTDtnQ0FDRUMsVUFBVTtnQ0FDVkMsU0FBUzs0QkFDWDt5QkFDRDtrQ0FFRCw0RUFBQ3RCLCtEQUFjOzs7Ozs7Ozs7O2tDQUVqQiw4REFBQ0QsMERBQVM7d0JBQ1JvQixNQUFLO3dCQUNMSyxlQUFjO3dCQUNkQyxZQUFZOzRCQUNWQyxRQUFROzRCQUNSQyxNQUFNO3dCQUNSO2tDQUVBLDRFQUFDN0IseURBQVFBO3NDQUFDOzs7Ozs7Ozs7OztrQ0FFWiw4REFBQ0MsMERBQVM7d0JBQ1IwQixZQUFZOzRCQUNWQyxRQUFROzRCQUNSQyxNQUFNO3dCQUNSO2tDQUVBLDRFQUFDOUIsdURBQU1BOzRCQUFDK0IsTUFBSzs0QkFBVUMsVUFBUztzQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPbkQ7R0E1RE16QjtLQUFBQTtBQThETiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zaWdudXAuanM/Y2E4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwTGF5b3V0L0FwcExheW91dFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIENoZWNrYm94LCBGb3JtLCBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5jb25zdCBkdW1teVVzZXIgPSB7XHJcbiAgdXNlcm5hbWU6IFwidGhkdWRcIixcclxuICBwYXNzd29yZDogXCJ0aGR1ZFwiLFxyXG59O1xyXG5cclxuY29uc3QgU2lnbnVwID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3Qgb25DaGFuZ2VVc2VybmFtZSA9ICgpPT57XHJcbiAgICBzZXRVc2VybmFtZShlLnRhcmdldC52bGF1ZSlcclxuICB9XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBvbkZpbmlzaCA9ICh7IHZhbHVlcyB9KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgIDxoMT5TaWdudXA8L2gxPlxyXG4gICAgICA8Rm9ybSBvbkZpbmlzaD17b25GaW5pc2h9PlxyXG4gICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcclxuICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICBtZXNzYWdlOiBcIlBsZWFzZSBpbnB1dCB5b3VyIHVzZXJuYW1lIVwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJQbGVhc2UgaW5wdXQgeW91ciB1c2VybmFtZSFcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPElucHV0LlBhc3N3b3JkIC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgbmFtZT1cInJlbWVtYmVyXCJcclxuICAgICAgICAgIHZhbHVlUHJvcE5hbWU9XCJjaGVja2VkXCJcclxuICAgICAgICAgIHdyYXBwZXJDb2w9e3tcclxuICAgICAgICAgICAgb2Zmc2V0OiA4LFxyXG4gICAgICAgICAgICBzcGFuOiAxNixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPENoZWNrYm94PlJlbWVtYmVyIG1lPC9DaGVja2JveD5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICB3cmFwcGVyQ29sPXt7XHJcbiAgICAgICAgICAgIG9mZnNldDogOCxcclxuICAgICAgICAgICAgc3BhbjogMTYsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L0FwcExheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBcHBMYXlvdXQiLCJCdXR0b24iLCJDaGVja2JveCIsIkZvcm0iLCJJbnB1dCIsImR1bW15VXNlciIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJTaWdudXAiLCJzZXRVc2VybmFtZSIsInVzZVN0YXRlIiwib25DaGFuZ2VVc2VybmFtZSIsImUiLCJ0YXJnZXQiLCJ2bGF1ZSIsInNldFBhc3N3b3JkIiwib25GaW5pc2giLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwiaDEiLCJJdGVtIiwibGFiZWwiLCJuYW1lIiwicnVsZXMiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJQYXNzd29yZCIsInZhbHVlUHJvcE5hbWUiLCJ3cmFwcGVyQ29sIiwib2Zmc2V0Iiwic3BhbiIsInR5cGUiLCJodG1sVHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/signup.js\n"));

/***/ })

});