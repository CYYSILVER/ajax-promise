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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: D:\\\\SILVER\\\\Documents\\\\GitHub\\\\个人项目\\\\Ajax-Promise\\\\src\\\\index.js: Identifier 'options' has already been declared (11:8)\\n\\n\\u001b[0m \\u001b[90m  9 | \\u001b[39m\\u001b[90m   */\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 10 | \\u001b[39m  \\u001b[36mfunction\\u001b[39m ajax(options) {\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 11 | \\u001b[39m    let options \\u001b[33m=\\u001b[39m createDefaultOptions(options)\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m        \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 12 | \\u001b[39m    \\u001b[36mreturn\\u001b[39m send(options)\\u001b[0m\\n\\u001b[0m \\u001b[90m 13 | \\u001b[39m  }\\u001b[0m\\n\\u001b[0m \\u001b[90m 14 | \\u001b[39m\\u001b[0m\\n    at Parser.raise (D:\\\\SILVER\\\\Documents\\\\GitHub\\\\个人项目\\\\Ajax-Promise\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6325:17)\\n    at ScopeHandler.checkRedeclarationInScope (D:\\\\SILVER\\\\Documents\\\\GitHub\\\\个人项目\\\\Ajax-Promise\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3759:12)\\n    at ScopeHandler.declareName (D:\\\\SILVER\\\\Documents\\\\GitHub\\\\个人项目\\\\Ajax-Promise\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3725:12)\\n    at Parser.checkLVal (D:\\\\SILVER\\\\Documents\\\\GitHub\\\\个人项目\\\\Ajax-Promise\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8021:22)\\n    at Parser.parseVarId (D:\\\\SILVER\\\\Documents\\\\GitHub\\\\个人项目\\\\Ajax-Promise\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10502:10)\\n    at Parser.parseVar (D:\\\\SILVER\\\\Documents\\\\GitHub\\\\个人项目\\\\Ajax-Promise\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10477:12)\\n    at Parser.parseVarStatement (D:\\\\SILVER\\\\Documents\\\\GitHub\\\\个人项目\\\\Ajax-Promise\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10299:10)\\n    at Parser.parseStatementContent (D:\\\\SILVER\\\\Documents\\\\GitHub\\\\个人项目\\\\Ajax-Promise\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9896:21)\\n    at Parser.parseStatement (D:\\\\SILVER\\\\Documents\\\\GitHub\\\\个人项目\\\\Ajax-Promise\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9829:17)\\n    at Parser.parseBlockOrModuleBlockBody (D:\\\\SILVER\\\\Documents\\\\GitHub\\\\个人项目\\\\Ajax-Promise\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10405:25)\\n    at Parser.parseBlockBody (D:\\\\SILVER\\\\Documents\\\\GitHub\\\\个人项目\\\\Ajax-Promise\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10392:10)\\n    at Parser.parseBlock (D:\\\\SILVER\\\\Documents\\\\GitHub\\\\个人项目\\\\Ajax-Promise\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10376:10)\\n    at Parser.parseFunctionBody (D:\\\\SILVER\\\\Documents\\\\GitHub\\\\个人项目\\\\Ajax-Promise\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9424:24)\\n    at Parser.parseFunctionBodyAndFinish (D:\\\\SILVER\\\\Documents\\\\GitHub\\\\个人项目\\\\Ajax-Promise\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9394:10)\\n    at withTopicForbiddingContext (D:\\\\SILVER\\\\Documents\\\\GitHub\\\\个人项目\\\\Ajax-Promise\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10535:12)\\n    at Parser.withTopicForbiddingContext (D:\\\\SILVER\\\\Documents\\\\GitHub\\\\个人项目\\\\Ajax-Promise\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9702:14)\\n    at Parser.parseFunction (D:\\\\SILVER\\\\Documents\\\\GitHub\\\\个人项目\\\\Ajax-Promise\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10534:10)\\n    at Parser.parseFunctionStatement (D:\\\\SILVER\\\\Documents\\\\GitHub\\\\个人项目\\\\Ajax-Promise\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10177:17)\\n    at Parser.parseStatementContent (D:\\\\SILVER\\\\Documents\\\\GitHub\\\\个人项目\\\\Ajax-Promise\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9867:21)\\n    at Parser.parseStatement (D:\\\\SILVER\\\\Documents\\\\GitHub\\\\个人项目\\\\Ajax-Promise\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9829:17)\\n    at Parser.parseBlockOrModuleBlockBody (D:\\\\SILVER\\\\Documents\\\\GitHub\\\\个人项目\\\\Ajax-Promise\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10405:25)\\n    at Parser.parseBlockBody (D:\\\\SILVER\\\\Documents\\\\GitHub\\\\个人项目\\\\Ajax-Promise\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10392:10)\\n    at Parser.parseBlock (D:\\\\SILVER\\\\Documents\\\\GitHub\\\\个人项目\\\\Ajax-Promise\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10376:10)\\n    at Parser.parseFunctionBody (D:\\\\SILVER\\\\Documents\\\\GitHub\\\\个人项目\\\\Ajax-Promise\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9424:24)\\n    at Parser.parseFunctionBodyAndFinish (D:\\\\SILVER\\\\Documents\\\\GitHub\\\\个人项目\\\\Ajax-Promise\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9394:10)\\n    at withTopicForbiddingContext (D:\\\\SILVER\\\\Documents\\\\GitHub\\\\个人项目\\\\Ajax-Promise\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10535:12)\\n    at Parser.withTopicForbiddingContext (D:\\\\SILVER\\\\Documents\\\\GitHub\\\\个人项目\\\\Ajax-Promise\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9702:14)\\n    at Parser.parseFunction (D:\\\\SILVER\\\\Documents\\\\GitHub\\\\个人项目\\\\Ajax-Promise\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10534:10)\\n    at Parser.parseFunctionExpression (D:\\\\SILVER\\\\Documents\\\\GitHub\\\\个人项目\\\\Ajax-Promise\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8877:17)\\n    at Parser.parseExprAtom (D:\\\\SILVER\\\\Documents\\\\GitHub\\\\个人项目\\\\Ajax-Promise\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8790:21)\");\n\n//# sourceURL=webpack://ajaxp/./src/index.js?");

/***/ })

/******/ });
});