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

/***/ "./src/helpers/util.js":
/*!*****************************!*\
  !*** ./src/helpers/util.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  /**
   * 将Object格式转换为查询字符串，如{a:1} => a=1
   *
   * @param {Object} data 数据
   * @returns {String} 查询字符串
   */
  getParams: function getParams(data) {
    var queryStr = []; // 返回字符串

    for (var param in data) {
      queryStr.push("".concat(encodeURIComponent(param), "=").concat(encodeURIComponent(data[param])));
    }

    return queryStr.join('&');
  },

  /**
   * 如果是json格式字符串，则返回object，否则不改变原字符串
   *
   * @param {String} str
   * @returns {Object | String}
   */
  convertIfJson: function convertIfJson(str) {
    try {
      return JSON.parse(str);
    } catch (error) {
      return str;
    }
  }
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! ./helpers/util */ "./src/helpers/util.js"),
    convertIfJson = _require.convertIfJson;

module.exports =
/** @class */
function () {
  /**
   * 直接发送ajax请求，相关配置以options为参数传入
   *
   * @param {Obejct} options ajax请求配置
   * @returns {Promise}
   */
  function ajax(options) {
    options = createDefaultOptions(options);
    return send(options);
  }
  /**
   * ajax Get请求
   *
   * @param {String} url url地址
   * @param {Object} options 其他选项
   * @returns {Promise}
   */


  ajax.get = function (url, options) {
    options = createDefaultOptions(options);
    options.url = url;
    options.method = 'GET';
    return send(options);
  };
  /**
   * ajax Get请求
   *
   * @param {String} url url地址
   * @param {Object} data post数据
   * @param {Object} options 其他选项
   * @returns {Promise}
   */


  ajax.post = function (url, data, options) {
    options = createDefaultOptions(options);
    options.data = data;
    options.url = url;
    options.method = 'POST';
    return send(options);
  };
  /**
   * 用于封装xhr对象，返回promise对象
   *
   * @param {Object} options ajaxq请求配置
   * @return {Promise}  promised对象
   */


  function send(options) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status >= 200 && xhr.status < 300) {
            // 将响应封装为对象
            var headersObj = {};
            var headers = xhr.getAllResponseHeaders();
            headers.trim('\n').split('\n').forEach(function (param, index) {
              var matches = param.match(/(.*?): (.*)/);
              var key = matches[1];
              var value = matches[2];
              headersObj[key] = value;
            });
            var response = {
              data: convertIfJson(xhr.response),
              // 转换为Object，如果为Json格式的h话
              config: options,
              status: xhr.status,
              statusText: xhr.statusText,
              headers: headersObj,
              request: xhr
            };
            resolve(response);
          } else {
            reject(new Error("Request failed with status code ".concat(xhr.status)));
          }
        }
      }; // 获取参数


      var method = options.method,
          async = options.async,
          url = options.url,
          data = options.data,
          timeout = options.timeout; // 将传入参数转化为查询字符

      var params = JSON.stringify(data);
      xhr.timeout = timeout;

      if (method == 'GET') {
        xhr.open(method, "".concat(url, "?").concat(params), async);
        xhr.send(null);
      } else {
        xhr.open(method, url, async);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(params);
      }
    });
  }
  /**
   * 混合默认ajax配置与新的ajax配置
   *
   * @param {*} options 新的配置
   * @returns {Object} 混合后的配置
   */


  function createDefaultOptions(options) {
    options = Object.assign({
      method: 'GET',
      url: '',
      data: {},
      dataType: 'json',
      async: true,
      cache: true,
      timeout: 0
    }, options);
    options.method = options.method.toUpperCase();
    return options;
  }

  return ajax;
}();

/***/ })

/******/ });
});
//# sourceMappingURL=ajaxp.map