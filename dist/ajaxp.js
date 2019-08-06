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

var _require = __webpack_require__(/*! ../helpers/util */ "./src/helpers/util.js"),
    convertIfJson = _require.convertIfJson,
    getParams = _require.getParams,
    createOptions = _require.createOptions;

var core = {
  send: function send(options) {
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

      var params = getParams(data);
      method = method.toUpperCase();
      xhr.timeout = timeout;

      if (method.match(/^(?:GET|DELETE|HEAD)$/)) {
        xhr.open(method, params ? "".concat(url, "?").concat(params) : "".concat(url), async);
        xhr.send(null);
      } else if (method.match(/^(?:POST|PUT|PATCH)/)) {
        xhr.open(method, url, async);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(params);
      } // TODO: method不支持错误处理

    });
  },
  ajaxRequestWithData: function ajaxRequestWithData(type) {
    return function (url, data, options) {
      options = createOptions(options, url, data);
      options.method = type;
      return core.send(options);
    };
  },
  ajaxRequestWithoutData: function ajaxRequestWithoutData(type) {
    return function (url, options) {
      options = createOptions(options, url);
      options.method = type;
      return core.send(options);
    };
  }
};
module.exports = core;

/***/ }),

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
  },

  /**
   * 混合默认ajax配置与新的ajax配置
   *
   * @param {*} options 新的配置
   * @returns {Object} 混合后的配置
   */
  createOptions: function createOptions() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options = Object.assign({
      method: 'GET',
      url: '',
      data: {},
      dataType: 'json',
      async: true,
      cache: true,
      timeout: 0,
      baseURL: ''
    }, options, {
      url: url,
      data: data
    });
    return options;
  },

  /**
   * 用于连接格式化url字符串，比如http://localhost:3000与students连接为
   * http://localhost:3000/students
   * 
   * @param {String} baseURL  
   * @param {String} url 
   * @returns {String} 格式后的url字符串
   */
  concatBaseURLAndURL: function concatBaseURLAndURL(baseURL, url) {
    if (baseURL[baseURL.length - 1] !== '/') {
      baseURL = baseURL + '/';
    }

    if (url[0] === '/') {
      url = url.slice(1);
    }

    return baseURL + url;
  }
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! ./core/index */ "./src/core/index.js"),
    send = _require.send,
    ajaxRequestWithData = _require.ajaxRequestWithData,
    ajaxRequestWithoutData = _require.ajaxRequestWithoutData;

var _require2 = __webpack_require__(/*! ./helpers/util */ "./src/helpers/util.js"),
    createOptions = _require2.createOptions,
    concatBaseURLAndURL = _require2.concatBaseURLAndURL;

var ajaxp =
/** @class */
function () {
  /**
   * 直接发送ajax请求，相关配置以options为参数传入
   *
   * @param {Obejct} options ajax请求配置
   * @returns {Promise}
   */
  function ajax(param1, param2) {
    var options = param2 || param1;
    var url = param2 ? param1 : '';
    options = createOptions(options, url);
    return send(options);
  }
  /**
   * 创建ajaxp实列对象，使用Object.create方法
   *
   * @param {Object} options 要传入的配置参数
   * @returns {Object} ajaxp对象
   */


  ajax.create = function (options) {
    var o = Object.create(ajax.prototype);
    o.options = createOptions(options);
    createOptions();
    return o;
  };
  /**
   * 发送请求，方法为config.method
   *
   * @param {String} url url地址
   * @param {Object} options 其他选项，该选项优先级高于实例选项
   * @returns {Promise}
   */


  ajax.prototype.request = function (url, options) {
    var _this$options = this.options,
        baseURL = _this$options.baseURL,
        method = _this$options.method;
    options = Object.assign({}, this.options, options);
    return ajax[method](concatBaseURLAndURL(baseURL, url), options);
  };

  ['get', 'delete', 'head'].forEach(function (method) {
    /**
     * ajax GET\DELETE\HEAD请求
     *
     * @param {String} url url地址
     * @param {Object} options 其他选项，该选项优先级高于实例选项
     * @returns {Promise}
     */
    ajax.prototype[method] = function (url, options) {
      var baseURL = this.options.baseURL;
      options = Object.assign({}, this.options, options);
      return ajax[method](concatBaseURLAndURL(baseURL, url), options);
    };
  });
  ['post', 'put', 'patch'].forEach(function (method) {
    /**
     * ajax POST\PUT\PATCH 请求
     *
     * @param {String} url url地址
     * @param {Object} data 数据
     * @param {Object} options 其他选项，该选项优先级高于实例选项
     * @returns {Promise}
     */
    ajax.prototype[method] = function (url, data, options) {
      var baseURL = this.options.baseURL;
      options = Object.assign({}, this.options, options);
      return ajax[method](concatBaseURLAndURL(baseURL, url), data, options);
    };
  });
  /**
   * ajax GET\DELETE\HEAD请求
   *
   * @param {String} url url地址
   * @param {Object} options 其他选项
   * @returns {Promise}
   */

  ajax.get = ajaxRequestWithoutData('GET');
  ajax["delete"] = ajaxRequestWithoutData('DELETE');
  ajax.head = ajaxRequestWithoutData('HEAD');
  /**
   * ajax POST\PUT\PATCH 请求
   *
   * @param {String} url url地址
   * @param {Object} data 数据
   * @param {Object} options 其他选项
   * @returns {Promise}
   */

  ajax.post = ajaxRequestWithData('POST');
  ajax.put = ajaxRequestWithData('PUT');
  ajax.patch = ajaxRequestWithData('PATCH');
  return ajax;
}();

module.exports = ajaxp;

/***/ })

/******/ });
});
//# sourceMappingURL=ajaxp.map