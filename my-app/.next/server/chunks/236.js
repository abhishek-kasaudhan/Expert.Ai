"use strict";
exports.id = 236;
exports.ids = [236];
exports.modules = {

/***/ 236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);





const News = ()=>{
    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [news, setNews] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const searchResults = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.searchResults);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const fetchData = async ()=>{
        const response = await axios__WEBPACK_IMPORTED_MODULE_2___default().get("https://newsapi.org/v2/top-headlines?country=us&apiKey=671eacadabdf4b4aa6e1a580ee2c8d5b");
        setNews(response.data.articles);
        dispatch({
            type: "UPDATE_SEARCH_RESULTS",
            searchResults: response.data.articles
        });
    };
    const searchData = async ()=>{
        const response = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=671eacadabdf4b4aa6e1a580ee2c8d5b`);
        setNews(response.data.articles);
        console.log(response.data.articles);
        dispatch({
            type: "UPDATE_SEARCH_RESULTS",
            searchResults: response.data.articles
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const interval = setInterval(()=>{
            fetchData();
        }, 1000 * 60 * 60);
        return ()=>clearInterval(interval);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchData();
    }, []);
    const handleSearch = async (e)=>{
        e.preventDefault();
        searchData();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "container mx-auto",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-2xl font-bold mb-8 mt-[40px]",
                children: "Latest News"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                className: "mb-8",
                onSubmit: handleSearch,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        "data-testid": "searchNews",
                        placeholder: "Search news...",
                        value: searchQuery,
                        onChange: (e)=>setSearchQuery(e.target.value),
                        className: "p-2 rounded-lg shadow-md"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: "p-2 rounded-lg bg-blue-500 text-white",
                        children: "Search"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: "list-none",
                children: searchResults.length ? searchResults.map((article, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                        className: "bg-white p-4 rounded-lg shadow-md mb-4 ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                tabIndex: "0",
                                onKeyUp: ()=>{},
                                onClick: ()=>router.push(`${article.url}`),
                                className: "text-lg font-bold cursor-pointer underline ",
                                "data-testid": `news-list-${index + 1}`,
                                children: article.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-gray-700",
                                children: article.description
                            })
                        ]
                    }, article.url)) : news.map((article, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                        className: "bg-white p-4 rounded-lg shadow-md mb-4 ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                tabIndex: "0",
                                onKeyUp: ()=>{},
                                onClick: ()=>router.push(`${article.url}`),
                                className: "text-lg font-bold cursor-pointer underline ",
                                "data-testid": `news-list-${index + 1}`,
                                children: article.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-gray-700 ",
                                children: article.description
                            })
                        ]
                    }, article.url))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (News);


/***/ })

};
;