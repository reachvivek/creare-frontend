webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/fullpage/media.js":
/*!**************************************!*\
  !*** ./components/fullpage/media.js ***!
  \**************************************/
/*! exports provided: Home, Third, media */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Third", function() { return Third; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "media", function() { return media; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_awesome_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-awesome-button */ "./node_modules/react-awesome-button/dist/index.js");
/* harmony import */ var react_awesome_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_awesome_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_awesome_button_dist_themes_theme_c137_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-awesome-button/dist/themes/theme-c137.css */ "./node_modules/react-awesome-button/dist/themes/theme-c137.css");
/* harmony import */ var react_awesome_button_dist_themes_theme_c137_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_awesome_button_dist_themes_theme_c137_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-awesome-slider/dist/navigation */ "./node_modules/react-awesome-slider/dist/navigation.js");
/* harmony import */ var react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lettering_lettering__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lettering/lettering */ "./components/lettering/lettering.js");
/* harmony import */ var _background_background__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../background/background */ "./components/background/background.js");
/* harmony import */ var _content_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../content/content */ "./components/content/content.js");
/* harmony import */ var _mouse_mouse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mouse/mouse */ "./components/mouse/mouse.js");
/* harmony import */ var _section_section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../section/section */ "./components/section/section.js");
/* harmony import */ var _page_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../page/page */ "./components/page/page.js");
/* harmony import */ var _fullpage_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fullpage.css */ "./components/fullpage/fullpage.css");
/* harmony import */ var _fullpage_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fullpage_css__WEBPACK_IMPORTED_MODULE_10__);
var _this = undefined,
    _jsxFileName = "E:\\Consignments\\Projects\\Creare Consignment\\ras-fullpage-strategies-master\\creare-frontend\\components\\fullpage\\media.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var Home = Object(react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_3__["withNavigationContext"])(function (_ref) {
  var fullpage = _ref.fullpage;
  return __jsx(_section_section__WEBPACK_IMPORTED_MODULE_8__["default"], {
    wrapper: false,
    backgroundColor: "#FFF",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(_background_background__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx(_content_content__WEBPACK_IMPORTED_MODULE_6__["default"], {
    main: __jsx(_lettering_lettering__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "",
      text: [],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 15
      }
    }),
    action: __jsx("div", {
      className: "button",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }
    }, __jsx(react_awesome_button__WEBPACK_IMPORTED_MODULE_1__["AwesomeButton"], {
      size: "large",
      onPress: function onPress() {
        fullpage.navigate("/page-two");
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }
    }, "Goto the next page")),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }));
});
var Third = Object(react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_3__["withNavigationContext"])(function (_ref2) {
  var fullpage = _ref2.fullpage;
  return __jsx(_section_section__WEBPACK_IMPORTED_MODULE_8__["default"], {
    wrapper: false,
    backgroundColor: "#FFF",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx(_content_content__WEBPACK_IMPORTED_MODULE_6__["default"], {
    main: __jsx(_lettering_lettering__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "PAGE-THREE",
      text: ["This is a screen with preloaded background image."],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }
    }),
    action: __jsx("div", {
      className: "button",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 11
      }
    }, __jsx(react_awesome_button__WEBPACK_IMPORTED_MODULE_1__["AwesomeButton"], {
      size: "large",
      onPress: function onPress() {
        fullpage.navigate("/page-two");
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }
    }, "Goto the prev page")),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }));
});
var media = [{
  slug: "home",
  className: "slide page-one",
  children: __jsx(Home, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  })
}, {
  slug: "login",
  className: "sectioned page-two",
  children: __jsx(_page_page__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx(_section_section__WEBPACK_IMPORTED_MODULE_8__["default"], {
    wrapper: false,
    backgroundColor: "#e5ebec",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx(_content_content__WEBPACK_IMPORTED_MODULE_6__["default"], {
    main: __jsx(_lettering_lettering__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Let's Get Started...",
      text: [""],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 19
      }
    }),
    action: __jsx(_mouse_mouse__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 21
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  })), __jsx(_section_section__WEBPACK_IMPORTED_MODULE_8__["default"], {
    backgroundColor: "#617be3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, __jsx(_lettering_lettering__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "PAGE-SECTION",
    text: ["This is a continued page section."],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  })))
}, {
  slug: "page-three",
  preload: ["https://caferati.me/images/series/bojack-0.png"],
  className: "slide page-three",
  children: __jsx(Third, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }
  })
}];

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/construct.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
false,

/***/ "./node_modules/core-js/library/fn/array/from.js":
false,

/***/ "./node_modules/core-js/library/fn/array/is-array.js":
false,

/***/ "./node_modules/core-js/library/fn/get-iterator.js":
false,

/***/ "./node_modules/core-js/library/fn/is-iterable.js":
false,

/***/ "./node_modules/core-js/library/fn/object/assign.js":
false,

/***/ "./node_modules/core-js/library/fn/object/create.js":
false,

/***/ "./node_modules/core-js/library/fn/object/set-prototype-of.js":
false,

/***/ "./node_modules/core-js/library/fn/promise.js":
false,

/***/ "./node_modules/core-js/library/fn/reflect/construct.js":
false,

/***/ "./node_modules/core-js/library/fn/symbol/index.js":
false,

/***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
false,

/***/ "./node_modules/core-js/library/fn/weak-map.js":
false,

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
false,

/***/ "./node_modules/core-js/library/modules/_an-instance.js":
false,

/***/ "./node_modules/core-js/library/modules/_array-methods.js":
false,

/***/ "./node_modules/core-js/library/modules/_array-species-constructor.js":
false,

/***/ "./node_modules/core-js/library/modules/_array-species-create.js":
false,

/***/ "./node_modules/core-js/library/modules/_bind.js":
false,

/***/ "./node_modules/core-js/library/modules/_classof.js":
false,

/***/ "./node_modules/core-js/library/modules/_collection-weak.js":
false,

/***/ "./node_modules/core-js/library/modules/_collection.js":
false,

/***/ "./node_modules/core-js/library/modules/_for-of.js":
false,

/***/ "./node_modules/core-js/library/modules/_invoke.js":
false,

/***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-call.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-detect.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
false,

/***/ "./node_modules/core-js/library/modules/_iterators.js":
false,

/***/ "./node_modules/core-js/library/modules/_microtask.js":
false,

/***/ "./node_modules/core-js/library/modules/_new-promise-capability.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-assign.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
false,

/***/ "./node_modules/core-js/library/modules/_perform.js":
false,

/***/ "./node_modules/core-js/library/modules/_promise-resolve.js":
false,

/***/ "./node_modules/core-js/library/modules/_redefine-all.js":
false,

/***/ "./node_modules/core-js/library/modules/_set-collection-from.js":
false,

/***/ "./node_modules/core-js/library/modules/_set-collection-of.js":
false,

/***/ "./node_modules/core-js/library/modules/_set-proto.js":
false,

/***/ "./node_modules/core-js/library/modules/_set-species.js":
false,

/***/ "./node_modules/core-js/library/modules/_species-constructor.js":
false,

/***/ "./node_modules/core-js/library/modules/_string-at.js":
false,

/***/ "./node_modules/core-js/library/modules/_task.js":
false,

/***/ "./node_modules/core-js/library/modules/_user-agent.js":
false,

/***/ "./node_modules/core-js/library/modules/_validate-collection.js":
false,

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
false,

/***/ "./node_modules/core-js/library/modules/core.get-iterator.js":
false,

/***/ "./node_modules/core-js/library/modules/core.is-iterable.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.array.from.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.array.is-array.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.assign.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.create.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.promise.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.reflect.construct.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.weak-map.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.promise.finally.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.promise.try.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.weak-map.from.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.weak-map.of.js":
false,

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
false,

/***/ "./node_modules/native-url/dist/index.js":
false,

/***/ "./node_modules/next/dist/client/router.js":
false,

/***/ "./node_modules/next/dist/client/with-router.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
false,

/***/ "./node_modules/querystring-es3/decode.js":
false,

/***/ "./node_modules/querystring-es3/encode.js":
false,

/***/ "./node_modules/querystring-es3/index.js":
false,

/***/ "./node_modules/regenerator-runtime/runtime.js":
false

})
//# sourceMappingURL=index.js.8ab690ebd99c9bbbe744.hot-update.js.map