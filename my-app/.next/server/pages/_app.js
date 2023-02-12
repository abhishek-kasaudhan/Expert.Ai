(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,134];
exports.modules = {

/***/ 147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/pages/tailwind.css
var tailwind = __webpack_require__(424);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(22);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: ./store.js

const searchResults = (state = [], action)=>{
    switch(action.type){
        case "UPDATE_SEARCH_RESULTS":
            return action.searchResults;
        default:
            return state;
    }
};
const rootReducer = (0,external_redux_namespaceObject.combineReducers)({
    searchResults
});
const store = (0,external_redux_namespaceObject.createStore)(rootReducer);
/* harmony default export */ const store_0 = (store);

// EXTERNAL MODULE: ./src/pages/news.js
var news = __webpack_require__(236);
;// CONCATENATED MODULE: ./src/pages/_app.js






const App = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
        store: store_0,
        children: /*#__PURE__*/ jsx_runtime_.jsx(news["default"], {})
    });
};
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 424:
/***/ (() => {



/***/ }),

/***/ 167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 22:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [236], () => (__webpack_exec__(147)));
module.exports = __webpack_exports__;

})();