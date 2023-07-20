"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/image",{

/***/ "./components/ImageGallery.js":
/*!************************************!*\
  !*** ./components/ImageGallery.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ImageGallery = (param)=>{\n    let { userId } = param;\n    _s();\n    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Fetch images from the server for the specific user\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:5000/image/\".concat(userId)).then((res)=>{\n            // Assuming the images are inside the \"allimages\" field of the response object\n            setImages(res.data.allimages);\n        }).catch((err)=>console.log(err));\n    }, [\n        userId\n    ]); // Trigger the effect whenever userId changes\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Uploaded Images\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\amita\\\\Downloads\\\\a_i\\\\Arushi\\\\frontend\\\\components\\\\ImageGallery.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            images && images.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: images.map((image, index)=>// Check if the 'image.image' property is defined before rendering the image\n                    image.image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        c: true,\n                        src: \"http://localhost:5000/\".concat(image.image),\n                        alt: \"Image \".concat(index)\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\amita\\\\Downloads\\\\a_i\\\\Arushi\\\\frontend\\\\components\\\\ImageGallery.js\",\n                        lineNumber: 26,\n                        columnNumber: 15\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\amita\\\\Downloads\\\\a_i\\\\Arushi\\\\frontend\\\\components\\\\ImageGallery.js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"No images uploaded yet.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\amita\\\\Downloads\\\\a_i\\\\Arushi\\\\frontend\\\\components\\\\ImageGallery.js\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\amita\\\\Downloads\\\\a_i\\\\Arushi\\\\frontend\\\\components\\\\ImageGallery.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ImageGallery, \"ScKwoilS3xNJP1q5r1COmrAdDIM=\");\n_c = ImageGallery;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageGallery);\nvar _c;\n$RefreshReg$(_c, \"ImageGallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ltYWdlR2FsbGVyeS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW1EO0FBQ3pCO0FBQ3FCO0FBRS9DLE1BQU1LLGVBQWU7UUFBQyxFQUFFQyxNQUFNLEVBQUU7O0lBQzlCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXZDRCxnREFBU0EsQ0FBQztRQUNSLHFEQUFxRDtRQUNyREUsNkNBQUtBLENBQUNNLEdBQUcsQ0FBQywrQkFBc0MsT0FBUEgsU0FDdENJLElBQUksQ0FBQ0MsQ0FBQUE7WUFDSiw4RUFBOEU7WUFDOUVILFVBQVVHLElBQUlDLElBQUksQ0FBQ0MsU0FBUztRQUM5QixHQUNDQyxLQUFLLENBQUNDLENBQUFBLE1BQU9DLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDOUIsR0FBRztRQUFDVDtLQUFPLEdBQUcsNkNBQTZDO0lBRTNELHFCQUNFLDhEQUFDWTs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7WUFDSFosVUFBVUEsT0FBT2EsTUFBTSxHQUFHLGtCQUN6Qiw4REFBQ0Y7MEJBQ0VYLE9BQU9jLEdBQUcsQ0FBQyxDQUFDQyxPQUFPQyxRQUNsQiw0RUFBNEU7b0JBQzVFRCxNQUFNQSxLQUFLLGtCQUNULDhEQUFDRTt3QkFDQUMsQ0FBQzt3QkFFQUMsS0FBSyx5QkFBcUMsT0FBWkosTUFBTUEsS0FBSzt3QkFDekNLLEtBQUssU0FBZSxPQUFOSjt1QkFGVEE7Ozs7Ozs7OzswQ0FTYiw4REFBQ0s7MEJBQUU7Ozs7Ozs7Ozs7OztBQUlYO0dBcENNdkI7S0FBQUE7QUF5Q04sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZUdhbGxlcnkuanM/MDNhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vSW1hZ2VHYWxsZXJ5Lm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IEltYWdlR2FsbGVyeSA9ICh7IHVzZXJJZCB9KSA9PiB7XHJcbiAgY29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIEZldGNoIGltYWdlcyBmcm9tIHRoZSBzZXJ2ZXIgZm9yIHRoZSBzcGVjaWZpYyB1c2VyXHJcbiAgICBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9pbWFnZS8ke3VzZXJJZH1gKVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIC8vIEFzc3VtaW5nIHRoZSBpbWFnZXMgYXJlIGluc2lkZSB0aGUgXCJhbGxpbWFnZXNcIiBmaWVsZCBvZiB0aGUgcmVzcG9uc2Ugb2JqZWN0XHJcbiAgICAgICAgc2V0SW1hZ2VzKHJlcy5kYXRhLmFsbGltYWdlcyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgfSwgW3VzZXJJZF0pOyAvLyBUcmlnZ2VyIHRoZSBlZmZlY3Qgd2hlbmV2ZXIgdXNlcklkIGNoYW5nZXNcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgPlxyXG4gICAgICA8aDI+VXBsb2FkZWQgSW1hZ2VzPC9oMj5cclxuICAgICAge2ltYWdlcyAmJiBpbWFnZXMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAge2ltYWdlcy5tYXAoKGltYWdlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgJ2ltYWdlLmltYWdlJyBwcm9wZXJ0eSBpcyBkZWZpbmVkIGJlZm9yZSByZW5kZXJpbmcgdGhlIGltYWdlXHJcbiAgICAgICAgICAgIGltYWdlLmltYWdlICYmIChcclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgIGNcclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjUwMDAvJHtpbWFnZS5pbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtgSW1hZ2UgJHtpbmRleH1gfVxyXG5cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8cD5ObyBpbWFnZXMgdXBsb2FkZWQgeWV0LjwvcD5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZUdhbGxlcnk7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJzdHlsZXMiLCJJbWFnZUdhbGxlcnkiLCJ1c2VySWQiLCJpbWFnZXMiLCJzZXRJbWFnZXMiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImFsbGltYWdlcyIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImRpdiIsImgyIiwibGVuZ3RoIiwibWFwIiwiaW1hZ2UiLCJpbmRleCIsImltZyIsImMiLCJzcmMiLCJhbHQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ImageGallery.js\n"));

/***/ })

});