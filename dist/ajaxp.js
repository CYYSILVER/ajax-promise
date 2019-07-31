(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ajaxp"] = factory();
	else
		root["ajaxp"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/test.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack://ajaxp/(webpack)/buildin/module.js?");

/***/ }),

/***/ "./src/ajaxp.js":
/*!**********************!*\
  !*** ./src/ajaxp.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n(function webpackUniversalModuleDefinition(root, factory) {\n  if (( false ? undefined : _typeof(exports)) === 'object' && ( false ? undefined : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}\n})(window, function () {\n  return (\n    /******/\n    function (modules) {\n      // webpackBootstrap\n\n      /******/\n      // The module cache\n\n      /******/\n      var installedModules = {};\n      /******/\n\n      /******/\n      // The require function\n\n      /******/\n\n      function __webpack_require__(moduleId) {\n        /******/\n\n        /******/\n        // Check if module is in cache\n\n        /******/\n        if (installedModules[moduleId]) {\n          /******/\n          return installedModules[moduleId].exports;\n          /******/\n        }\n        /******/\n        // Create a new module (and put it into the cache)\n\n        /******/\n\n\n        var module = installedModules[moduleId] = {\n          /******/\n          i: moduleId,\n\n          /******/\n          l: false,\n\n          /******/\n          exports: {}\n          /******/\n\n        };\n        /******/\n\n        /******/\n        // Execute the module function\n\n        /******/\n\n        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n        /******/\n\n        /******/\n        // Flag the module as loaded\n\n        /******/\n\n        module.l = true;\n        /******/\n\n        /******/\n        // Return the exports of the module\n\n        /******/\n\n        return module.exports;\n        /******/\n      }\n      /******/\n\n      /******/\n\n      /******/\n      // expose the modules object (__webpack_modules__)\n\n      /******/\n\n\n      __webpack_require__.m = modules;\n      /******/\n\n      /******/\n      // expose the module cache\n\n      /******/\n\n      __webpack_require__.c = installedModules;\n      /******/\n\n      /******/\n      // define getter function for harmony exports\n\n      /******/\n\n      __webpack_require__.d = function (exports, name, getter) {\n        /******/\n        if (!__webpack_require__.o(exports, name)) {\n          /******/\n          Object.defineProperty(exports, name, {\n            enumerable: true,\n            get: getter\n          });\n          /******/\n        }\n        /******/\n\n      };\n      /******/\n\n      /******/\n      // define __esModule on exports\n\n      /******/\n\n\n      __webpack_require__.r = function (exports) {\n        /******/\n        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n          /******/\n          Object.defineProperty(exports, Symbol.toStringTag, {\n            value: 'Module'\n          });\n          /******/\n        }\n        /******/\n\n\n        Object.defineProperty(exports, '__esModule', {\n          value: true\n        });\n        /******/\n      };\n      /******/\n\n      /******/\n      // create a fake namespace object\n\n      /******/\n      // mode & 1: value is a module id, require it\n\n      /******/\n      // mode & 2: merge all properties of value into the ns\n\n      /******/\n      // mode & 4: return value when already ns object\n\n      /******/\n      // mode & 8|1: behave like require\n\n      /******/\n\n\n      __webpack_require__.t = function (value, mode) {\n        /******/\n        if (mode & 1) value = __webpack_require__(value);\n        /******/\n\n        if (mode & 8) return value;\n        /******/\n\n        if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;\n        /******/\n\n        var ns = Object.create(null);\n        /******/\n\n        __webpack_require__.r(ns);\n        /******/\n\n\n        Object.defineProperty(ns, 'default', {\n          enumerable: true,\n          value: value\n        });\n        /******/\n\n        if (mode & 2 && typeof value != 'string') for (var key in value) {\n          __webpack_require__.d(ns, key, function (key) {\n            return value[key];\n          }.bind(null, key));\n        }\n        /******/\n\n        return ns;\n        /******/\n      };\n      /******/\n\n      /******/\n      // getDefaultExport function for compatibility with non-harmony modules\n\n      /******/\n\n\n      __webpack_require__.n = function (module) {\n        /******/\n        var getter = module && module.__esModule ?\n        /******/\n        function getDefault() {\n          return module['default'];\n        } :\n        /******/\n        function getModuleExports() {\n          return module;\n        };\n        /******/\n\n        __webpack_require__.d(getter, 'a', getter);\n        /******/\n\n\n        return getter;\n        /******/\n      };\n      /******/\n\n      /******/\n      // Object.prototype.hasOwnProperty.call\n\n      /******/\n\n\n      __webpack_require__.o = function (object, property) {\n        return Object.prototype.hasOwnProperty.call(object, property);\n      };\n      /******/\n\n      /******/\n      // __webpack_public_path__\n\n      /******/\n\n\n      __webpack_require__.p = \"\";\n      /******/\n\n      /******/\n\n      /******/\n      // Load entry module and return exports\n\n      /******/\n\n      return __webpack_require__(__webpack_require__.s = \"./src/index.js\");\n      /******/\n    }(\n    /************************************************************************/\n\n    /******/\n    {\n      /***/\n      \"./src/index.js\":\n      /*!**********************!*\\\n        !*** ./src/index.js ***!\n        \\**********************/\n\n      /*! no static exports found */\n\n      /***/\n      function srcIndexJs(module, exports) {\n        eval(\"module.exports =\\n/** @class */\\nfunction () {\\n  /**\\r\\n   * 直接发送ajax请求，相关配置以options为参数传入\\r\\n   * \\r\\n   * @param {Obejct} options ajax请求配置\\r\\n   * @returns\\r\\n   */\\n  function ajax(options) {\\n    options = createDefaultOptions(options);\\n    return send(options);\\n  }\\n\\n  ajax.get = function (url, options) {\\n    options = createDefaultOptions(options);\\n    options.url = url;\\n    options.method = 'GET';\\n    return send(options);\\n  };\\n\\n  ajax.post = function (url, options) {\\n    options = createDefaultOptions(options);\\n    options.url = url;\\n    options.method = 'POST';\\n    return send(options);\\n  };\\n  /**\\r\\n   * 用于封装xhr对象，返回promise对象\\r\\n   * \\r\\n   * @param {Object} options ajaxq请求配置\\r\\n   * @return {Promise}  promised对象\\r\\n   */\\n\\n\\n  function send(options) {\\n    return new Promise(function (resolve, reject) {\\n      var xhr = new XMLHttpRequest();\\n\\n      xhr.onreadystatechange = function () {\\n        if (xhr.readyState == 4) {\\n          if (xhr.status >= 200 && xhr.status < 300) {\\n            // 将响应封装为对象\\n            var headersObj = {};\\n            var headers = xhr.getAllResponseHeaders();\\n            headers.trim('\\\\n').split('\\\\n').forEach(function (param, index) {\\n              var matches = param.match(/(.*?): (.*)/);\\n              var key = matches[1];\\n              var value = matches[2];\\n              headersObj[key] = value;\\n            });\\n            var response = {\\n              data: convertIfJson(xhr.response),\\n              // 转换为Object，如果为Json格式的h话\\n              config: options,\\n              status: xhr.status,\\n              statusText: xhr.statusText,\\n              headers: headersObj,\\n              request: xhr\\n            };\\n            resolve(response);\\n          } else {\\n            reject(new Error(\\\"Request failed with status code \\\".concat(xhr.status)));\\n          }\\n        }\\n      }; // 获取参数\\n\\n\\n      var method = options.method,\\n          async = options.async,\\n          url = options.url,\\n          params = options.params,\\n          timeout = options.timeout;\\n      xhr.timeout = timeout;\\n\\n      if (method == 'GET') {\\n        xhr.open(method, \\\"\\\".concat(url, \\\"?\\\").concat(params), async);\\n        xhr.send(null);\\n      } else {\\n        xhr.open(method, url, async);\\n        xhr.setRequestHeader('Content-method', 'application/x-www-form-urlencoded');\\n        xhr.send(params);\\n      }\\n    });\\n  }\\n  /**\\r\\n   * 如果是jsong格式字符串，则返回object，否则不改变原字符串\\r\\n   *\\r\\n   * @param {String} str\\r\\n   * @returns {Object | String} \\r\\n   */\\n\\n\\n  function convertIfJson(str) {\\n    try {\\n      return JSON.parse(str);\\n    } catch (error) {\\n      return str;\\n    }\\n  }\\n  /**\\r\\n   * 混合默认ajax配置与新的ajax配置\\r\\n   *\\r\\n   * @param {*} options 新的配置\\r\\n   * @returns {Object} 混合后的配置\\r\\n   */\\n\\n\\n  function createDefaultOptions(options) {\\n    options = Object.assign({\\n      method: 'GET',\\n      url: '',\\n      data: {},\\n      dataType: 'json',\\n      async: true,\\n      cache: true,\\n      timeout: 0\\n    }, options);\\n    options.method = options.method.toUpperCase(); // 将传入参数转化为查询字符\\n\\n    options.params = getParams(options.data);\\n    return options;\\n  }\\n  /**\\r\\n   * 将Object格式转换为查询字符串，如{a:1} => a=1\\r\\n   *\\r\\n   * @param {Object} data 数据 \\r\\n   * @param {Boolean} cache 暂时没用\\r\\n   * @returns {String} 查询字符串\\r\\n   */\\n\\n\\n  function getParams(data, cache) {\\n    var queryStr = []; // 返回字符串\\n\\n    for (var param in data) {\\n      queryStr.push(\\\"\\\".concat(encodeURIComponent(param), \\\"=\\\").concat(encodeURIComponent(data[param])));\\n    }\\n\\n    return queryStr.join('&');\\n  }\\n\\n  return ajax;\\n}();\\n\\n//# sourceURL=webpack://ajaxp/./src/index.js?\");\n        /***/\n      }\n      /******/\n\n    })\n  );\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://ajaxp/./src/ajaxp.js?");

/***/ }),

/***/ "./src/test.js":
/*!*********************!*\
  !*** ./src/test.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ajaxp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajaxp.js */ \"./src/ajaxp.js\");\n/* harmony import */ var _ajaxp_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ajaxp_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconsole.log('d');\n\n//# sourceURL=webpack://ajaxp/./src/test.js?");

/***/ })

/******/ });
});