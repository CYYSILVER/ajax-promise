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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/core/index.js":
/*!***************************!*\
  !*** ./src/core/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _require = __webpack_require__(/*! ../helpers/util */ \"./src/helpers/util.js\"),\n    convertIfJson = _require.convertIfJson;\n\nmodule.exports = {\n  send: function send(options) {\n    return new Promise(function (resolve, reject) {\n      var xhr = new XMLHttpRequest();\n\n      xhr.onreadystatechange = function () {\n        if (xhr.readyState == 4) {\n          if (xhr.status >= 200 && xhr.status < 300) {\n            // 将响应封装为对象\n            var headersObj = {};\n            var headers = xhr.getAllResponseHeaders();\n            headers.trim('\\n').split('\\n').forEach(function (param, index) {\n              var matches = param.match(/(.*?): (.*)/);\n              var key = matches[1];\n              var value = matches[2];\n              headersObj[key] = value;\n            });\n            var response = {\n              data: convertIfJson(xhr.response),\n              // 转换为Object，如果为Json格式的h话\n              config: options,\n              status: xhr.status,\n              statusText: xhr.statusText,\n              headers: headersObj,\n              request: xhr\n            };\n            resolve(response);\n          } else {\n            reject(new Error(\"Request failed with status code \".concat(xhr.status)));\n          }\n        }\n      }; // 获取参数\n\n\n      var method = options.method,\n          async = options.async,\n          url = options.url,\n          data = options.data,\n          timeout = options.timeout; // 将传入参数转化为查询字符\n\n      var params = JSON.stringify(data);\n      method = method.toUpperCase();\n      xhr.timeout = timeout;\n\n      if (method.match(/^(?:GET|DELETE|HEAD)$/)) {\n        xhr.open(method, \"\".concat(url, \"?\").concat(params), async);\n        xhr.send(null);\n      } else if (method.match(/^(?:POST|PUT|PATCH)/)) {\n        xhr.open(method, url, async);\n        xhr.setRequestHeader('Content-Type', 'application/json');\n        xhr.send(params);\n      } // TODO: method不支持错误处理\n\n    });\n  }\n};\n\n//# sourceURL=webpack://ajaxp/./src/core/index.js?");

/***/ }),

/***/ "./src/helpers/util.js":
/*!*****************************!*\
  !*** ./src/helpers/util.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  /**\r\n   * 将Object格式转换为查询字符串，如{a:1} => a=1\r\n   *\r\n   * @param {Object} data 数据\r\n   * @returns {String} 查询字符串\r\n   */\n  getParams: function getParams(data) {\n    var queryStr = []; // 返回字符串\n\n    for (var param in data) {\n      queryStr.push(\"\".concat(encodeURIComponent(param), \"=\").concat(encodeURIComponent(data[param])));\n    }\n\n    return queryStr.join('&');\n  },\n\n  /**\r\n   * 如果是json格式字符串，则返回object，否则不改变原字符串\r\n   *\r\n   * @param {String} str\r\n   * @returns {Object | String}\r\n   */\n  convertIfJson: function convertIfJson(str) {\n    try {\n      return JSON.parse(str);\n    } catch (error) {\n      return str;\n    }\n  }\n};\n\n//# sourceURL=webpack://ajaxp/./src/helpers/util.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _require = __webpack_require__(/*! ./core/index */ \"./src/core/index.js\"),\n    send = _require.send; // let ajaxInstance = /** @class */ (function() {\n//   function instance(options) {\n//     this.options = options\n//   }\n//   instance.prototype = ajax.prototype\n//   instance.prototype.get = function() {\n//     return send(this.options)\n//   }\n//   instance.prototype.delete\n//   instance.prototype.head\n//   instance.prototype.patch\n//   instance.prototype.post\n//   instance.prototype.put\n//   return instance\n// })()\n\n\nmodule.exports =\n/** @class */\nfunction () {\n  /**\r\n   * 直接发送ajax请求，相关配置以options为参数传入\r\n   *\r\n   * @param {Obejct} options ajax请求配置\r\n   * @returns {Promise}\r\n   */\n  function ajax(param1, param2) {\n    var options = param2 || param1;\n    var url = param2 ? param1 : '';\n    options = createOptions(options, url);\n    return send(options);\n  }\n\n  ajax.create = function (options) {\n    new ajaxInstance(options);\n  };\n  /**\r\n   * ajax GET\\DELETE\\HEAD请求\r\n   *\r\n   * @param {String} url url地址\r\n   * @param {Object} options 其他选项\r\n   * @returns {Promise}\r\n   */\n\n\n  ajax.get = function (url, options) {\n    options = createOptions(options, url);\n    options.method = 'GET';\n    return send(options);\n  };\n\n  ajax[\"delete\"] = function (url, options) {\n    options = createOptions(options, url);\n    options.method = 'DELETE';\n    return send(options);\n  };\n\n  ajax.head = function (url, options) {\n    options = createOptions(options, url);\n    options.method = 'HEAD';\n    return send(options);\n  };\n  /**\r\n   * ajax POST\\PUT\\PATCH 请求\r\n   *\r\n   * @param {String} url url地址\r\n   * @param {Object} data post数据\r\n   * @param {Object} options 其他选项\r\n   * @returns {Promise}\r\n   */\n\n\n  ajax.post = function (url, data, options) {\n    options = createOptions(options, url, data);\n    options.method = 'POST';\n    return send(options);\n  };\n\n  ajax.put = function (url, data, options) {\n    options = createOptions(options, url, data);\n    options.method = 'PUT';\n    return send(options);\n  };\n\n  ajax.patch = function (url, data, options) {\n    options = createOptions(options, url, data);\n    options.method = 'PATCH';\n    return send(options);\n  };\n  /**\r\n   * 混合默认ajax配置与新的ajax配置\r\n   *\r\n   * @param {*} options 新的配置\r\n   * @returns {Object} 混合后的配置\r\n   */\n\n\n  function createOptions(options, url, data) {\n    options = options || {};\n    options.url = url;\n    options.data = data;\n    options = Object.assign({\n      method: 'GET',\n      url: '',\n      data: {},\n      dataType: 'json',\n      async: true,\n      cache: true,\n      timeout: 0\n    }, options);\n    return options;\n  }\n\n  return ajax;\n}();\n\n//# sourceURL=webpack://ajaxp/./src/index.js?");

/***/ })

/******/ });
});