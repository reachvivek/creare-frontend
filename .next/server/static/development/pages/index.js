module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/background/background.js":
/*!*********************************************!*\
  !*** ./components/background/background.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _background_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background.scss */ "./components/background/background.scss");
/* harmony import */ var _background_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_background_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\Consignments\\Projects\\Creare Consignment\\ras-fullpage-strategies-master\\creare-frontend\\components\\background\\background.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Background = ({
  src,
  alt = 'background'
}) => {
  return __jsx("img", {
    alt: alt,
    src: src,
    className: "background",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 10
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Background);

/***/ }),

/***/ "./components/background/background.scss":
/*!***********************************************!*\
  !*** ./components/background/background.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/content/content.js":
/*!***************************************!*\
  !*** ./components/content/content.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-awesome-slider/dist/navigation */ "react-awesome-slider/dist/navigation");
/* harmony import */ var react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _select_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../select/select */ "./components/select/select.js");
/* harmony import */ var _content_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./content.scss */ "./components/content/content.scss");
/* harmony import */ var _content_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_content_scss__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "E:\\Consignments\\Projects\\Creare Consignment\\ras-fullpage-strategies-master\\creare-frontend\\components\\content\\content.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }





const options = [{
  label: "Cube Animation",
  value: "cubeAnimation"
}, {
  label: "Fall Animation",
  value: "fallAnimation"
}, {
  label: "Fold Out Animation",
  value: "foldOutAnimation"
}, {
  label: "Open Animation",
  value: "openAnimation"
}, {
  label: "Scale Out Animation",
  value: "scaleOutAnimation"
}];
const Content = Object(react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_8__["withNavigationContext"])(({
  fullpage,
  main,
  action
}) => {
  return __jsx("div", {
    className: "content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "content__main",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, main), __jsx("div", {
    className: "content__action",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "content__action__select",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(_select_select__WEBPACK_IMPORTED_MODULE_9__["default"], {
    selected: fullpage.navigation.animation || `foldOutAnimation`,
    onChange: value => {
      fullpage.navigate(_objectSpread({}, fullpage.navigation, {
        animation: value
      }));
    },
    options: options,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }))));
});
/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "./components/content/content.scss":
/*!*****************************************!*\
  !*** ./components/content/content.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/fullpage/fullpage.css":
/*!******************************************!*\
  !*** ./components/fullpage/fullpage.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/fullpage/fullpage.js":
/*!*****************************************!*\
  !*** ./components/fullpage/fullpage.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_awesome_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-awesome-slider */ "react-awesome-slider");
/* harmony import */ var react_awesome_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_awesome_slider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_awesome_slider_dist_custom_animations_cube_animation_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-awesome-slider/dist/custom-animations/cube-animation.css */ "./node_modules/react-awesome-slider/dist/custom-animations/cube-animation.css");
/* harmony import */ var react_awesome_slider_dist_custom_animations_cube_animation_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_awesome_slider_dist_custom_animations_cube_animation_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_awesome_slider_dist_custom_animations_fall_animation_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-awesome-slider/dist/custom-animations/fall-animation.css */ "./node_modules/react-awesome-slider/dist/custom-animations/fall-animation.css");
/* harmony import */ var react_awesome_slider_dist_custom_animations_fall_animation_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_awesome_slider_dist_custom_animations_fall_animation_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_awesome_slider_dist_custom_animations_fold_out_animation_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-awesome-slider/dist/custom-animations/fold-out-animation.css */ "./node_modules/react-awesome-slider/dist/custom-animations/fold-out-animation.css");
/* harmony import */ var react_awesome_slider_dist_custom_animations_fold_out_animation_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_awesome_slider_dist_custom_animations_fold_out_animation_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_awesome_slider_dist_custom_animations_scale_out_animation_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-awesome-slider/dist/custom-animations/scale-out-animation.css */ "./node_modules/react-awesome-slider/dist/custom-animations/scale-out-animation.css");
/* harmony import */ var react_awesome_slider_dist_custom_animations_scale_out_animation_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_awesome_slider_dist_custom_animations_scale_out_animation_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_awesome_slider_dist_custom_animations_open_animation_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-awesome-slider/dist/custom-animations/open-animation.css */ "./node_modules/react-awesome-slider/dist/custom-animations/open-animation.css");
/* harmony import */ var react_awesome_slider_dist_custom_animations_open_animation_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_awesome_slider_dist_custom_animations_open_animation_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-awesome-slider/dist/navigation */ "react-awesome-slider/dist/navigation");
/* harmony import */ var react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./media */ "./components/fullpage/media.js");
/* harmony import */ var _startup_startup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../startup/startup */ "./components/startup/startup.js");
var _jsxFileName = "E:\\Consignments\\Projects\\Creare Consignment\\ras-fullpage-strategies-master\\creare-frontend\\components\\fullpage\\fullpage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const Slider = Object(react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_7__["withNavigationHandlers"])(react_awesome_slider__WEBPACK_IMPORTED_MODULE_1___default.a);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_7__["withNavigationContext"])(({
  fullpage
}) => {
  const isFirstLoad = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  const animation = fullpage.navigation.animation || `foldOutAnimation`;
  return __jsx(Slider, {
    startupScreen: __jsx(_startup_startup__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 22
      }
    }),
    startupDelay: 1000,
    animation: animation,
    className: "awesome-slider",
    onTransitionEnd: () => {
      // HANDLE THE PAGE ELEMENTS ANIMATION ON FIRST TRANSITION END
      if (isFirstLoad.current === true) {
        document.querySelector("body").classList.add("animated");
        document.querySelector("body").classList.add("visible");
      }
    },
    media: _media__WEBPACK_IMPORTED_MODULE_8__["media"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  });
}));

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_awesome_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-awesome-button */ "react-awesome-button");
/* harmony import */ var react_awesome_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_awesome_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_awesome_button_dist_themes_theme_c137_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-awesome-button/dist/themes/theme-c137.css */ "./node_modules/react-awesome-button/dist/themes/theme-c137.css");
/* harmony import */ var react_awesome_button_dist_themes_theme_c137_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_awesome_button_dist_themes_theme_c137_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-awesome-slider/dist/navigation */ "react-awesome-slider/dist/navigation");
/* harmony import */ var react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lettering_lettering__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lettering/lettering */ "./components/lettering/lettering.js");
/* harmony import */ var _background_background__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../background/background */ "./components/background/background.js");
/* harmony import */ var _content_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../content/content */ "./components/content/content.js");
/* harmony import */ var _mouse_mouse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mouse/mouse */ "./components/mouse/mouse.js");
/* harmony import */ var _section_section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../section/section */ "./components/section/section.js");
/* harmony import */ var _page_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../page/page */ "./components/page/page.js");
/* harmony import */ var _fullpage_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fullpage.css */ "./components/fullpage/fullpage.css");
/* harmony import */ var _fullpage_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fullpage_css__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "E:\\Consignments\\Projects\\Creare Consignment\\ras-fullpage-strategies-master\\creare-frontend\\components\\fullpage\\media.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const Home = Object(react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_3__["withNavigationContext"])(({
  fullpage
}) => {
  return __jsx(_section_section__WEBPACK_IMPORTED_MODULE_8__["default"], {
    wrapper: false,
    backgroundColor: "#e5ebec",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(_background_background__WEBPACK_IMPORTED_MODULE_5__["default"], {
    src: "/assets/founder.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx(_content_content__WEBPACK_IMPORTED_MODULE_6__["default"], {
    main: __jsx(_lettering_lettering__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "INDEX",
      text: ["This is a single full page fixed screen.", "Use the button bellow to navigate to the next page"],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }
    }),
    action: __jsx("div", {
      className: "button",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }
    }, __jsx(react_awesome_button__WEBPACK_IMPORTED_MODULE_1__["AwesomeButton"], {
      size: "large",
      onPress: () => {
        fullpage.navigate("/page-two");
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }, "Goto the next page")),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }));
});
const Third = Object(react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_3__["withNavigationContext"])(({
  fullpage
}) => {
  return __jsx(_section_section__WEBPACK_IMPORTED_MODULE_8__["default"], {
    wrapper: false,
    backgroundColor: "#e5ebec",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx(_background_background__WEBPACK_IMPORTED_MODULE_5__["default"], {
    src: "/assets/founder.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }), __jsx(_content_content__WEBPACK_IMPORTED_MODULE_6__["default"], {
    main: __jsx(_lettering_lettering__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "PAGE-THREE",
      text: ["This is a screen with preloaded background image."],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }
    }),
    action: __jsx("div", {
      className: "button",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 11
      }
    }, __jsx(react_awesome_button__WEBPACK_IMPORTED_MODULE_1__["AwesomeButton"], {
      size: "large",
      onPress: () => {
        fullpage.navigate("/page-two");
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 13
      }
    }, "Goto the prev page")),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }));
});
const media = [{
  slug: "",
  className: "slide page-one",
  children: __jsx(Home, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  })
}, {
  slug: "page-two",
  className: "sectioned page-two",
  children: __jsx(_page_page__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx(_section_section__WEBPACK_IMPORTED_MODULE_8__["default"], {
    wrapper: false,
    backgroundColor: "#e5ebec",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx(_content_content__WEBPACK_IMPORTED_MODULE_6__["default"], {
    main: __jsx(_lettering_lettering__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "PAGE-TWO",
      text: ["This is multiple section page, scroll down to view more content."],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 15
      }
    }),
    action: __jsx(_mouse_mouse__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 21
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  })), __jsx(_section_section__WEBPACK_IMPORTED_MODULE_8__["default"], {
    backgroundColor: "#617be3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, __jsx(_lettering_lettering__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "PAGE-SECTION",
    text: ["This is a continued page section."],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
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
      lineNumber: 109,
      columnNumber: 15
    }
  })
}];

/***/ }),

/***/ "./components/lettering/lettering.css":
/*!********************************************!*\
  !*** ./components/lettering/lettering.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/lettering/lettering.js":
/*!*******************************************!*\
  !*** ./components/lettering/lettering.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lettering_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lettering.css */ "./components/lettering/lettering.css");
/* harmony import */ var _lettering_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lettering_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\Consignments\\Projects\\Creare Consignment\\ras-fullpage-strategies-master\\creare-frontend\\components\\lettering\\lettering.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Lettering = ({
  text = [],
  title = ''
}) => {
  const renderText = () => {
    return text && text.length ? text.map((line, index) => {
      return __jsx("p", {
        key: `${index}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 18
        }
      }, line);
    }) : null;
  };

  return __jsx("div", {
    className: "lettering",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, title), renderText());
};

/* harmony default export */ __webpack_exports__["default"] = (Lettering);

/***/ }),

/***/ "./components/mouse/mouse.js":
/*!***********************************!*\
  !*** ./components/mouse/mouse.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mouse_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mouse.scss */ "./components/mouse/mouse.scss");
/* harmony import */ var _mouse_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mouse_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\Consignments\\Projects\\Creare Consignment\\ras-fullpage-strategies-master\\creare-frontend\\components\\mouse\\mouse.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Mouse = ({
  visible = true
}) => {
  const className = ['scroll'];

  if (visible === false) {
    className.push('hidden');
  }

  return __jsx("button", {
    className: className.join(' ').trim(),
    title: "Choose Wisely",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Mouse);

/***/ }),

/***/ "./components/mouse/mouse.scss":
/*!*************************************!*\
  !*** ./components/mouse/mouse.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/page/page.css":
/*!**********************************!*\
  !*** ./components/page/page.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/page/page.js":
/*!*********************************!*\
  !*** ./components/page/page.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page.css */ "./components/page/page.css");
/* harmony import */ var _page_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_page_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\Consignments\\Projects\\Creare Consignment\\ras-fullpage-strategies-master\\creare-frontend\\components\\page\\page.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Page = ({
  children
}) => {
  return __jsx("div", {
    className: "page",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 10
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./components/section/section.css":
/*!****************************************!*\
  !*** ./components/section/section.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/section/section.js":
/*!***************************************!*\
  !*** ./components/section/section.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _section_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section.css */ "./components/section/section.css");
/* harmony import */ var _section_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_section_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\Consignments\\Projects\\Creare Consignment\\ras-fullpage-strategies-master\\creare-frontend\\components\\section\\section.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Section = ({
  children,
  wrapper = true,
  backgroundColor = '#FFFFFF'
}) => {
  return __jsx("section", {
    className: "section",
    style: {
      backgroundColor
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, wrapper ? __jsx("div", {
    className: "section-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 18
    }
  }, children) : children);
};

/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./components/select/select.js":
/*!*************************************!*\
  !*** ./components/select/select.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _select_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select.scss */ "./components/select/select.scss");
/* harmony import */ var _select_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_select_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\Consignments\\Projects\\Creare Consignment\\ras-fullpage-strategies-master\\creare-frontend\\components\\select\\select.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Select = ({
  options = [],
  onChange,
  selected
}) => {
  const renderOptions = () => {
    return options.map(({
      value,
      label
    }) => {
      return __jsx("option", {
        key: value,
        value: value,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 9
        }
      }, label);
    });
  };

  return __jsx("select", {
    value: selected,
    onChange: event => {
      onChange(event.currentTarget.value);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, renderOptions());
};

/* harmony default export */ __webpack_exports__["default"] = (Select);

/***/ }),

/***/ "./components/select/select.scss":
/*!***************************************!*\
  !*** ./components/select/select.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/startup/startup.js":
/*!***************************************!*\
  !*** ./components/startup/startup.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _startup_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startup.scss */ "./components/startup/startup.scss");
/* harmony import */ var _startup_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_startup_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\Consignments\\Projects\\Creare Consignment\\ras-fullpage-strategies-master\\creare-frontend\\components\\startup\\startup.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Startup = () => {
  return __jsx("div", {
    className: "startup",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "/assets/logo.png",
    alt: "my image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Startup);

/***/ }),

/***/ "./components/startup/startup.scss":
/*!*****************************************!*\
  !*** ./components/startup/startup.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/react-awesome-button/dist/themes/theme-c137.css":
/*!**********************************************************************!*\
  !*** ./node_modules/react-awesome-button/dist/themes/theme-c137.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-awesome-slider/dist/custom-animations/cube-animation.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-awesome-slider/dist/custom-animations/cube-animation.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-awesome-slider/dist/custom-animations/fall-animation.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-awesome-slider/dist/custom-animations/fall-animation.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-awesome-slider/dist/custom-animations/fold-out-animation.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/react-awesome-slider/dist/custom-animations/fold-out-animation.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-awesome-slider/dist/custom-animations/open-animation.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-awesome-slider/dist/custom-animations/open-animation.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-awesome-slider/dist/custom-animations/scale-out-animation.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/react-awesome-slider/dist/custom-animations/scale-out-animation.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_fullpage_fullpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/fullpage/fullpage */ "./components/fullpage/fullpage.js");
var _jsxFileName = "E:\\Consignments\\Projects\\Creare Consignment\\ras-fullpage-strategies-master\\creare-frontend\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Home = () => {
  return __jsx(_components_fullpage_fullpage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 10
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Consignments\Projects\Creare Consignment\ras-fullpage-strategies-master\creare-frontend\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-awesome-button":
/*!***************************************!*\
  !*** external "react-awesome-button" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-awesome-button");

/***/ }),

/***/ "react-awesome-slider":
/*!***************************************!*\
  !*** external "react-awesome-slider" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-awesome-slider");

/***/ }),

/***/ "react-awesome-slider/dist/navigation":
/*!*******************************************************!*\
  !*** external "react-awesome-slider/dist/navigation" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-awesome-slider/dist/navigation");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map