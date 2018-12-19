// { "framework": "Vue" }
"use weex:vue";

/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                                * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
                                                                                                                                                                                                                                                                                * Created by Tw93 on 17/11/01
                                                                                                                                                                                                                                                                                */

var _urlParse = __webpack_require__(12);

var _urlParse2 = _interopRequireDefault(_urlParse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Utils = {
  UrlParser: _urlParse2.default,
  _typeof: function _typeof(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  },
  isPlainObject: function isPlainObject(obj) {
    return Utils._typeof(obj) === 'object';
  },
  isString: function isString(obj) {
    return typeof obj === 'string';
  },
  isNonEmptyArray: function isNonEmptyArray() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    return obj && obj.length > 0 && Array.isArray(obj) && typeof obj !== 'undefined';
  },
  isObject: function isObject(item) {
    return item && (typeof item === 'undefined' ? 'undefined' : _typeof2(item)) === 'object' && !Array.isArray(item);
  },
  isEmptyObject: function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  },
  decodeIconFont: function decodeIconFont(text) {
    // 正则匹配 图标和文字混排 eg: 我去上学校&#xe600;,天天不&#xe600;迟到
    var regExp = /&#x[a-z|0-9]{4,5};?/g;
    if (regExp.test(text)) {
      return text.replace(new RegExp(regExp, 'g'), function (iconText) {
        var replace = iconText.replace(/&#x/, '0x').replace(/;$/, '');
        return String.fromCharCode(replace);
      });
    } else {
      return text;
    }
  },
  mergeDeep: function mergeDeep(target) {
    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      sources[_key - 1] = arguments[_key];
    }

    if (!sources.length) return target;
    var source = sources.shift();
    if (Utils.isObject(target) && Utils.isObject(source)) {
      for (var key in source) {
        if (Utils.isObject(source[key])) {
          if (!target[key]) {
            Object.assign(target, _defineProperty({}, key, {}));
          }
          Utils.mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, _defineProperty({}, key, source[key]));
        }
      }
    }
    return Utils.mergeDeep.apply(Utils, [target].concat(sources));
  },
  appendProtocol: function appendProtocol(url) {
    if (/^\/\//.test(url)) {
      var bundleUrl = weex.config.bundleUrl;

      return 'http' + (/^https:/.test(bundleUrl) ? 's' : '') + ':' + url;
    }
    return url;
  },
  encodeURLParams: function encodeURLParams(url) {
    var parsedUrl = new _urlParse2.default(url, true);
    return parsedUrl.toString();
  },
  goToH5Page: function goToH5Page(jumpUrl) {
    var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    var Navigator = weex.requireModule('navigator');
    var jumpUrlObj = new Utils.UrlParser(jumpUrl, true);
    var url = Utils.appendProtocol(jumpUrlObj.toString());
    Navigator.push({
      url: Utils.encodeURLParams(url),
      animated: animated.toString()
    }, callback);
  },

  env: {
    isTaobao: function isTaobao() {
      var appName = weex.config.env.appName;

      return (/(tb|taobao|淘宝)/i.test(appName)
      );
    },
    isTrip: function isTrip() {
      var appName = weex.config.env.appName;

      return appName === 'LX';
    },
    isBoat: function isBoat() {
      var appName = weex.config.env.appName;

      return appName === 'Boat' || appName === 'BoatPlayground';
    },
    isWeb: function isWeb() {
      var platform = weex.config.env.platform;

      return (typeof window === 'undefined' ? 'undefined' : _typeof2(window)) === 'object' && platform.toLowerCase() === 'web';
    },
    isIOS: function isIOS() {
      var platform = weex.config.env.platform;

      return platform.toLowerCase() === 'ios';
    },

    /**
     * 是否为 iPhone X
     * @returns {boolean}
     */
    isIPhoneX: function isIPhoneX() {
      var deviceHeight = weex.config.env.deviceHeight;

      if (Utils.env.isWeb()) {
        return (typeof window === 'undefined' ? 'undefined' : _typeof2(window)) !== undefined && window.screen && window.screen.width && window.screen.height && parseInt(window.screen.width, 10) === 375 && parseInt(window.screen.height, 10) === 812;
      }
      return Utils.env.isIOS() && deviceHeight === 2436;
    },
    isAndroid: function isAndroid() {
      var platform = weex.config.env.platform;

      return platform.toLowerCase() === 'android';
    },
    isAlipay: function isAlipay() {
      var appName = weex.config.env.appName;

      return appName === 'AP';
    },
    isTmall: function isTmall() {
      var appName = weex.config.env.appName;

      return (/(tm|tmall|天猫)/i.test(appName)
      );
    },
    isAliWeex: function isAliWeex() {
      return Utils.env.isTmall() || Utils.env.isTrip() || Utils.env.isTaobao();
    },

    /**
     * 获取weex屏幕真实的设置高度，需要减去导航栏高度
     * @returns {Number}
     */
    getPageHeight: function getPageHeight() {
      var env = weex.config.env;

      var navHeight = Utils.env.isWeb() ? 0 : Utils.env.isIPhoneX() ? 176 : 132;
      return env.deviceHeight / env.deviceWidth * 750 - navHeight;
    },

    /**
     * 获取weex屏幕真实的设置高度
     * @returns {Number}
     */
    getScreenHeight: function getScreenHeight() {
      var env = weex.config.env;

      return env.deviceHeight / env.deviceWidth * 750;
    }
  },

  /**
   * 版本号比较
   * @memberOf Utils
   * @param currVer {string}
   * @param promoteVer {string}
   * @returns {boolean}
   * @example
   *
   * const { Utils } = require('@ali/wx-bridge');
   * const { compareVersion } = Utils;
   * console.log(compareVersion('0.1.100', '0.1.11')); // 'true'
   */
  compareVersion: function compareVersion() {
    var currVer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0.0.0';
    var promoteVer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0.0.0';

    if (currVer === promoteVer) return true;
    var currVerArr = currVer.split('.');
    var promoteVerArr = promoteVer.split('.');
    var len = Math.max(currVerArr.length, promoteVerArr.length);
    for (var i = 0; i < len; i++) {
      var proVal = ~~promoteVerArr[i];
      var curVal = ~~currVerArr[i];
      if (proVal < curVal) {
        return true;
      } else if (proVal > curVal) {
        return false;
      }
    }
    return false;
  },

  /**
   * 分割数组
   * @param arr 被分割数组
   * @param size 分割数组的长度
   * @returns {Array}
   */
  arrayChunk: function arrayChunk() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

    var groups = [];
    if (arr && arr.length > 0) {
      groups = arr.map(function (e, i) {
        return i % size === 0 ? arr.slice(i, i + size) : null;
      }).filter(function (e) {
        return e;
      });
    }
    return groups;
  },
  truncateString: function truncateString(str, len) {
    var hasDot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var newLength = 0;
    var newStr = '';
    var singleChar = '';
    var chineseRegex = /[^\x00-\xff]/g;
    var strLength = str.replace(chineseRegex, '**').length;
    for (var i = 0; i < strLength; i++) {
      singleChar = str.charAt(i).toString();
      if (singleChar.match(chineseRegex) !== null) {
        newLength += 2;
      } else {
        newLength++;
      }
      if (newLength > len) {
        break;
      }
      newStr += singleChar;
    }

    if (hasDot && strLength > len) {
      newStr += '...';
    }
    return newStr;
  },

  animation: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param ref
     * @param transform 运动类型
     * @param status
     * @param callback 回调函数
     */
    pageTransitionAnimation: function pageTransitionAnimation(ref, transform, status, callback) {
      var animation = weex.requireModule('animation');
      animation.transition(ref, {
        styles: {
          transform: transform
        },
        duration: status ? 250 : 300, // ms
        timingFunction: status ? 'ease-in' : 'ease-out',
        delay: 0 // ms
      }, function () {
        callback && callback();
      });
    }
  },
  uiStyle: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param animationType 页面转场动画的类型 push，model
     * @param size 分割数组的长度
     * @returns {}
     */
    pageTransitionAnimationStyle: function pageTransitionAnimationStyle(animationType) {
      if (animationType === 'push') {
        return {
          left: '750px',
          top: '0px',
          height: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px'
        };
      } else if (animationType === 'model') {
        return {
          top: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px',
          left: '0px',
          height: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px'
        };
      }
      return {};
    }
  }
};

exports.default = Utils;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

;(function (fn) {
  if (( false ? "undefined" : _typeof2(exports)) === "object" && typeof module !== "undefined") {
    module.exports = fn();
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
      module.exports = fn();
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    var root;
    if (typeof window !== "undefined") {
      root = window;
    } else if (typeof self !== "undefined") {
      root = self;
    } else if (typeof global !== "undefined") {
      root = global;
    } else {
      // NOTICE: In JavaScript strict mode, this is null
      root = this;
    }
    root["index"] = fn();
  }
})(function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 0);
      /******/
    }(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";
      /**
       Copyright 2018 Alibaba Group
      
       Licensed under the Apache License, Version 2.0 (the "License");
       you may not use this file except in compliance with the License.
       You may obtain a copy of the License at
      
       http://www.apache.org/licenses/LICENSE-2.0
      
       Unless required by applicable law or agreed to in writing, software
       distributed under the License is distributed on an "AS IS" BASIS,
       WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       See the License for the specific language governing permissions and
       limitations under the License.
       */

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
      };

      var _bindingxParser = __webpack_require__(1);

      var isWeb = false;
      var isWeex = true;

      function requireModule(moduleName) {
        try {
          if ((typeof weex === 'undefined' ? 'undefined' : _typeof(weex)) !== undefined && weex.requireModule) {
            // eslint-disable-line
            return weex.requireModule(moduleName); // eslint-disable-line
          }
        } catch (err) {}
        return window.require('@weex-module/' + moduleName);
      }

      var isSupportNewBinding = true;
      var isSupportBinding = true;
      var WeexBinding = void 0;
      var WebBinding = {};

      try {
        WeexBinding = requireModule('bindingx');
        isSupportNewBinding = true;
      } catch (e) {
        isSupportNewBinding = false;
      }
      if (!WeexBinding || !WeexBinding.bind) {
        try {
          WeexBinding = requireModule('binding');
          isSupportNewBinding = true;
        } catch (e) {
          isSupportNewBinding = false;
        }
      }
      isSupportNewBinding = !!(WeexBinding && WeexBinding.bind && WeexBinding.unbind);
      if (!isSupportNewBinding) {
        try {
          WeexBinding = requireModule('expressionBinding');
          isSupportBinding = true;
        } catch (err) {
          isSupportBinding = false;
        }
      }
      isSupportBinding = !!(WeexBinding && (WeexBinding.bind || WeexBinding.createBinding));

      function formatExpression(expression) {
        if (expression === undefined) return;
        try {
          expression = JSON.parse(expression);
        } catch (err) {}
        var resultExpression = {};
        if (typeof expression === 'string') {
          resultExpression.origin = expression;
        } else if (expression) {
          resultExpression.origin = expression.origin;
          resultExpression.transformed = expression.transformed;
        }
        if (!resultExpression.transformed && !resultExpression.origin) return;
        resultExpression.transformed = resultExpression.transformed || (0, _bindingxParser.parse)(resultExpression.origin);
        return resultExpression;
      }

      // 统一回调参数
      function fixCallback(callback) {
        return function () {
          var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          if (typeof callback === 'function') {
            return callback({
              state: params.state === 'end' ? 'exit' : params.state,
              t: params.t !== undefined ? params.t : params.deltaT
            });
          }
        };
      }

      exports.default = {
        // 是否支持新版本的binding
        isSupportNewBinding: isSupportNewBinding,
        // 是否支持binding
        isSupportBinding: isSupportBinding,
        _bindingInstances: [],
        /**
         * 绑定
         * @param options 参数
         * @example
         {
           anchor:blockRef,
           eventType:'pan',
           props: [
           {
             element:blockRef,
             property:'transform.translateX',
             expression:{
               origin:"x+1",
               transformed:"{\"type\":\"+\",\"children\":[{\"type\":\"Identifier\",\"value\":\"x\"},{\"type\":\"NumericLiteral\",\"value\":1}]}"
             }
           }
          ]
         }
         */
        bind: function bind(options) {
          var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

          if (!options) {
            throw new Error('should pass options for binding');
          }

          options.exitExpression = formatExpression(options.exitExpression);

          if (options.props) {
            options.props.forEach(function (prop) {
              prop.expression = formatExpression(prop.expression);
            });
          }

          if (WeexBinding && isSupportBinding) {
            if (isSupportNewBinding) {
              return WeexBinding.bind(options, options && options.eventType === 'timing' ? fixCallback(callback) : callback);
            } else {
              WeexBinding.enableBinding(options.anchor, options.eventType);
              // 处理expression的参数格式
              var expressionArgs = options.props.map(function (prop) {
                return {
                  element: prop.element,
                  property: prop.property,
                  expression: prop.expression.transformed
                };
              });
              WeexBinding.createBinding(options.anchor, options.eventType, '', expressionArgs, callback);
            }
          }
        },

        /**
         *  @param {object} options
         *  @example
         *  {eventType:'pan',
         *   token:self.gesToken}
         */
        unbind: function unbind(options) {
          if (!options) {
            throw new Error('should pass options for binding');
          }

          if (WeexBinding && isSupportBinding) {
            if (isSupportNewBinding) {
              return WeexBinding.unbind(options);
            } else {
              return WeexBinding.disableBinding(options.anchor, options.eventType);
            }
          }
        },
        unbindAll: function unbindAll() {
          if (WeexBinding && isSupportBinding) {
            if (isSupportNewBinding) {
              return WeexBinding.unbindAll();
            } else {
              return WeexBinding.disableAll();
            }
          }
        },
        prepare: function prepare(options) {
          if (WeexBinding && isSupportBinding) {
            if (isSupportNewBinding) {
              return WeexBinding.prepare(options);
            } else {
              return WeexBinding.enableBinding(options.anchor, options.eventType);
            }
          }
        },
        getComputedStyle: function getComputedStyle(el) {
          if (isSupportNewBinding) {
            return WeexBinding.getComputedStyle(el);
          } else {
            return {};
          }
        }
      };
      module.exports = exports['default'];

      /***/
    },
    /* 1 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      module.exports = __webpack_require__(2);

      /***/
    },
    /* 2 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var lex = {
        InputElementDiv: '<WhiteSpace>|<LineTerminator>|<ReservedWord>|<Identifier>|<NumericLiteral>|<Punctuator>|<StringLiteral>',
        InputElementRegExp: '<WhiteSpace>|<LineTerminator>|<ReservedWord>|<Identifier>|<NumericLiteral>|<Punctuator>|<StringLiteral>',
        ReservedWord: '<Keyword>|<NullLiteral>|<BooleanLiteral>',
        WhiteSpace: /[\t\v\f\u0020\u00A0\u1680\u180E\u2000-\u200A\u202F\u205f\u3000\uFEFF]/,
        LineTerminator: /[\n\r\u2028\u2029]/,
        Keyword: /new(?![_$a-zA-Z0-9])|void(?![_$a-zA-Z0-9])|delete(?![_$a-zA-Z0-9])|in(?![_$a-zA-Z0-9])|instanceof(?![_$a-zA-Z0-9])|typeof(?![_$a-zA-Z0-9])/,
        NullLiteral: /null(?![_$a-zA-Z0-9])/,
        BooleanLiteral: /(?:true|false)(?![_$a-zA-Z0-9])/,
        Identifier: /[_$a-zA-Z][_$a-zA-Z0-9]*/,
        Punctuator: /\/|=>|\*\*|>>>=|>>=|<<=|===|!==|>>>|<<|%=|\*=|-=|\+=|<=|>=|==|!=|\^=|\|=|\|\||&&|&=|>>|\+\+|--|\:|}|\*|&|\||\^|!|~|-|\+|\?|%|=|>|<|,|;|\.(?![0-9])|\]|\[|\)|\(|{/,
        DivPunctuator: /\/=|\//,
        NumericLiteral: /(?:0[xX][0-9a-fA-F]*|\.[0-9]+|(?:[1-9]+[0-9]*|0)(?:\.[0-9]*|\.)?)(?:[eE][+-]{0,1}[0-9]+)?(?![_$a-zA-Z0-9])/,
        StringLiteral: /"(?:[^"\n\\\r\u2028\u2029]|\\(?:['"\\bfnrtv\n\r\u2028\u2029]|\r\n)|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[^0-9ux'"\\bfnrtv\n\\\r\u2028\u2029])*"|'(?:[^'\n\\\r\u2028\u2029]|\\(?:['"\\bfnrtv\n\r\u2028\u2029]|\r\n)|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[^0-9ux'"\\bfnrtv\n\\\r\u2028\u2029])*'/,
        RegularExpressionLiteral: /\/(?:\[(?:\\[\s\S]|[^\]])*\]|[^*\/\\\n\r\u2028\u2029]|\\[^\n\r\u2028\u2029])(?:\[(?:\\[\s\S]|[^\]])*\]|[^\/\\\n\r\u2028\u2029]|\\[^\n\r\u2028\u2029])*\/[0-9a-zA-Z]*/
      };

      function XRegExp(xregexps, rootname, flag) {
        var expnames = [rootname];

        function buildRegExp(source) {
          var regexp = new RegExp();
          regexp.compile(source.replace(/<([^>]+)>/g, function (all, expname) {
            if (!xregexps[expname]) return '';
            expnames.push(expname);
            if (xregexps[expname] instanceof RegExp) return '(' + xregexps[expname].source + ')';
            return '(' + buildRegExp(xregexps[expname]).source + ')';
          }), flag);
          return regexp;
        }

        var regexp = buildRegExp(xregexps[rootname]);
        this.exec = function (string) {
          var matches = regexp.exec(string);
          if (matches == null) return null;
          var result = new String(matches[0]);
          for (var i = 0; i < expnames.length; i++) {
            if (matches[i]) result[expnames[i]] = matches[i];
          }return result;
        };
        Object.defineProperty(this, 'lastIndex', {
          'get': function get() {
            return regexp.lastIndex;
          },
          'set': function set(v) {
            regexp.lastIndex = v;
          }
        });
      }

      function LexicalParser() {
        var inputElementDiv = new XRegExp(lex, 'InputElementDiv', 'g');
        var inputElementRegExp = new XRegExp(lex, 'InputElementRegExp', 'g');
        var source;
        Object.defineProperty(this, 'source', {
          'get': function get() {
            return source;
          },
          'set': function set(v) {
            source = v;
            inputElementDiv.lastIndex = 0;
            inputElementRegExp.lastIndex = 0;
          }
        });
        this.reset = function () {
          inputElementDiv.lastIndex = 0;
          inputElementRegExp.lastIndex = 0;
        };
        this.getNextToken = function (useDiv) {
          var lastIndex = inputElementDiv.lastIndex;
          var inputElement;
          if (useDiv) inputElement = inputElementDiv;else inputElement = inputElementRegExp;
          var token = inputElement.exec(source);
          if (token && inputElement.lastIndex - lastIndex > token.length) {
            throw new SyntaxError('Unexpected token ILLEGAL');
          }
          inputElementDiv.lastIndex = inputElement.lastIndex;
          inputElementRegExp.lastIndex = inputElement.lastIndex;
          return token;
        };
      }

      var rules = {
        'IdentifierName': [['Identifier']],
        'Literal': [['NullLiteral'], ['BooleanLiteral'], ['NumericLiteral'], ['StringLiteral'], ['RegularExpressionLiteral']],
        'PrimaryExpression': [['Identifier'], ['Literal'], ['(', 'Expression', ')']],
        'CallExpression': [['PrimaryExpression', 'Arguments'], ['CallExpression', 'Arguments']],
        'Arguments': [['(', ')'], ['(', 'ArgumentList', ')']],
        'ArgumentList': [['ConditionalExpression'], ['ArgumentList', ',', 'ConditionalExpression']],
        'LeftHandSideExpression': [['PrimaryExpression'], ['CallExpression']],
        'UnaryExpression': [['LeftHandSideExpression'], ['void', 'UnaryExpression'], ['+', 'UnaryExpression'], ['-', 'UnaryExpression'], ['~', 'UnaryExpression'], ['!', 'UnaryExpression']],
        'ExponentiationExpression': [['UnaryExpression'], ['ExponentiationExpression', '**', 'UnaryExpression']],
        'MultiplicativeExpression': [['MultiplicativeExpression', '/', 'ExponentiationExpression'], ['ExponentiationExpression'], ['MultiplicativeExpression', '*', 'ExponentiationExpression'], ['MultiplicativeExpression', '%', 'ExponentiationExpression']],
        'AdditiveExpression': [['MultiplicativeExpression'], ['AdditiveExpression', '+', 'MultiplicativeExpression'], ['AdditiveExpression', '-', 'MultiplicativeExpression']],
        'ShiftExpression': [['AdditiveExpression'], ['ShiftExpression', '<<', 'AdditiveExpression'], ['ShiftExpression', '>>', 'AdditiveExpression'], ['ShiftExpression', '>>>', 'AdditiveExpression']],
        'RelationalExpression': [['ShiftExpression'], ['RelationalExpression', '<', 'ShiftExpression'], ['RelationalExpression', '>', 'ShiftExpression'], ['RelationalExpression', '<=', 'ShiftExpression'], ['RelationalExpression', '>=', 'ShiftExpression'], ['RelationalExpression', 'instanceof', 'ShiftExpression'], ['RelationalExpression', 'in', 'ShiftExpression']],
        'EqualityExpression': [['RelationalExpression'], ['EqualityExpression', '==', 'RelationalExpression'], ['EqualityExpression', '!=', 'RelationalExpression'], ['EqualityExpression', '===', 'RelationalExpression'], ['EqualityExpression', '!==', 'RelationalExpression']],
        'BitwiseANDExpression': [['EqualityExpression'], ['BitwiseANDExpression', '&', 'EqualityExpression']],
        'BitwiseXORExpression': [['BitwiseANDExpression'], ['BitwiseXORExpression', '^', 'BitwiseANDExpression']],
        'BitwiseORExpression': [['BitwiseXORExpression'], ['BitwiseORExpression', '|', 'BitwiseXORExpression']],
        'LogicalANDExpression': [['BitwiseORExpression'], ['LogicalANDExpression', '&&', 'BitwiseORExpression']],
        'LogicalORExpression': [['LogicalANDExpression'], ['LogicalORExpression', '||', 'LogicalANDExpression']],
        'ConditionalExpression': [['LogicalORExpression'], ['LogicalORExpression', '?', 'LogicalORExpression', ':', 'LogicalORExpression']],
        'Expression': [['ConditionalExpression'], ['Expression', ',', 'ConditionalExpression']],
        'Program': [['Expression']]

      };

      function _Symbol(symbolName, token) {
        this.name = symbolName;
        this.token = token;
        this.childNodes = [];
        this.toString = function (indent) {
          if (!indent) indent = '';
          if (this.childNodes.length == 1) return this.childNodes[0].toString(indent);
          var str = indent + this.name + (this.token != undefined && this.name != this.token ? ':' + this.token : '') + '\n';
          for (var i = 0; i < this.childNodes.length; i++) {
            str += this.childNodes[i].toString(indent + '    ');
          }return str;
        };
      }

      function SyntacticalParser() {
        var currentRule;
        var root = {
          Program: '$'
        };
        var hash = {};

        function closureNode(node) {

          hash[JSON.stringify(node)] = node;

          var queue = Object.getOwnPropertyNames(node);
          while (queue.length) {
            var symbolName = queue.shift();
            if (!rules[symbolName]) continue;
            rules[symbolName].forEach(function (rule) {
              if (!node[rule[0]]) queue.push(rule[0]);
              var rulenode = node;
              var lastnode = null;
              rule.forEach(function (symbol) {
                if (!rulenode[symbol]) rulenode[symbol] = {};
                lastnode = rulenode;
                rulenode = rulenode[symbol];
              });
              if (node[symbolName].$div) rulenode.$div = true;
              rulenode.$reduce = symbolName;
              rulenode.$count = rule.length;
            });
          }

          for (var p in node) {
            if (_typeof2(node[p]) != 'object' || p.charAt(0) == '$' || node[p].$closure) continue;
            if (hash[JSON.stringify(node[p])]) node[p] = hash[JSON.stringify(node[p])];else {
              closureNode(node[p]);
            }
          }
          node.$closure = true;
        }

        closureNode(root);
        var symbolStack = [];
        var statusStack = [root];
        var current = root;
        this.insertSymbol = function insertSymbol(symbol, haveLineTerminator) {
          while (!current[symbol.name] && current.$reduce) {
            var count = current.$count;
            var newsymbol = new _Symbol(current.$reduce);
            while (count--) {
              newsymbol.childNodes.push(symbolStack.pop()), statusStack.pop();
            }current = statusStack[statusStack.length - 1];
            this.insertSymbol(newsymbol);
          }
          current = current[symbol.name];
          symbolStack.push(symbol), statusStack.push(current);
          if (!current) throw new Error();
          return current.$div;
        };
        this.reset = function () {
          current = root;
          symbolStack = [];
          statusStack = [root];
        };
        Object.defineProperty(this, 'grammarTree', {
          'get': function get() {
            try {
              while (current.$reduce) {
                var count = current.$count;
                var newsymbol = new _Symbol(current.$reduce);
                while (count--) {
                  newsymbol.childNodes.push(symbolStack.pop()), statusStack.pop();
                }current = statusStack[statusStack.length - 1];
                this.insertSymbol(newsymbol);
              }
              if (symbolStack.length > 0 && current[';']) {
                this.insertSymbol(new _Symbol(';', ';'));
                return this.grammarTree;
              }
              if (symbolStack.length != 1 || symbolStack[0].name != 'Program') throw new Error();
            } catch (e) {
              throw new SyntaxError('Unexpected end of input');
            }
            return symbolStack[0];
          }
        });
      }

      function Parser() {
        this.lexicalParser = new LexicalParser();
        this.syntacticalParser = new SyntacticalParser();
        var terminalSymbols = ['NullLiteral', 'BooleanLiteral', 'NumericLiteral', 'StringLiteral', 'RegularExpressionLiteral', 'Identifier', '**', '=>', '{', '}', '(', ')', '[', ']', '.', ';', ',', '<', '>', '<=', '>=', '==', '!=', '===', '!==', '+', '-', '*', '%', '++', '--', '<<', '>>', '>>>', '&', '|', '^', '!', '~', '&&', '||', '?', ':', '=', '+=', '-=', '*=', '%=', '<<=', '>>=', '>>>=', '&=', '|=', '^=', '/', '/=', 'instanceof', 'typeof', 'new', 'void', 'debugger', 'this', 'delete', 'in'];
        var terminalSymbolIndex = {};
        terminalSymbols.forEach(function (e) {
          Object.defineProperty(terminalSymbolIndex, e, {});
        });
        this.reset = function () {
          this.lexicalParser.reset();
          this.syntacticalParser.reset();
        };
        this.parse = function (source, onInputElement) {
          var _this = this;

          var token;
          var haveLineTerminator = false;
          this.lexicalParser.source = source;
          var useDiv = false;
          while (token = this.lexicalParser.getNextToken(useDiv)) {
            if (onInputElement) onInputElement(token);
            try {
              if (Object.getOwnPropertyNames(token).some(function (e) {
                if (terminalSymbolIndex.hasOwnProperty(e)) {
                  useDiv = _this.syntacticalParser.insertSymbol(new _Symbol(e, token), haveLineTerminator);
                  haveLineTerminator = false;
                  return true;
                } else return false;
              })) continue;
              if ((token.Keyword || token.Punctuator || token.DivPunctuator) && terminalSymbolIndex.hasOwnProperty(token.toString())) {
                useDiv = this.syntacticalParser.insertSymbol(new _Symbol(token.toString(), token), haveLineTerminator);
              }
            } catch (e) {
              throw new SyntaxError('Unexpected token ' + token);
            }
          }
          return this.syntacticalParser.grammarTree;
        };
      }

      var parser = new Parser();

      function JavaScriptExpression(text) {
        parser.reset();
        this.tree = parser.parse(text);
        this.paths = [];
        var context = Object.create(null);
        var me = this;
        var pathIndex = Object.create(null);
        this.isSimple;
        this.isConst;
        walk(this.tree);
        checkSimple(this.tree);
        if (this.paths.length === 0) {
          this.isConst = true;
        }
        this.setter = function (path) {
          var curr = context;
          for (var i = 0; i < path.length - 1; i++) {
            if (!curr[path[i]]) curr[path[i]] = Object.create(null);
            curr = curr[path[i]];
          }
          return {
            isCompleted: function isCompleted() {
              for (var p in pathIndex) {
                if (!pathIndex[p]) return false;
              }return true;
            },
            set: function set(value) {
              if (!pathIndex[path.join('.')]) {
                pathIndex[path.join('.')] = true;
              }
              curr[path[i]] = value;
              if (this.isCompleted()) {
                return me.exec();
              } else {
                return undefined;
              }
            }
          };
        };

        this.valueOf = this.exec = function () {
          try {
            return function () {
              return eval(text);
            }.call(context);
          } catch (e) {}
        };

        function checkSimple(symbol) {

          var curr = symbol;
          while (curr.childNodes.length <= 1 && curr.name !== 'MemberExpression') {
            curr = curr.childNodes[0];
          }
          // TODO: need to point out "[……]"
          if (curr.name === 'MemberExpression') {
            me.isSimple = true;
          } else {
            me.isSimple = false;
          }
        }

        function walk(symbol) {
          if (symbol.name === 'CallExpression' && symbol.childNodes[symbol.childNodes.length - 1].name !== 'CallExpression') {
            var path = getPath(symbol.childNodes[1]);
            walk(symbol.childNodes[0]);
          } else if (symbol.name === 'NewExpression' && symbol.childNodes.length === 1) {
            var path = getPath(symbol.childNodes[0]);
          } else if (symbol.name === 'MemberExpression' && symbol.childNodes.length === 1) {
            var path = getPath(symbol);
          } else {
            for (var i = 0; i < symbol.childNodes.length; i++) {
              walk(symbol.childNodes[i]);
            }
          }
        }

        function getPath(symbol) {
          // [["PrimaryExpression"], ["MemberExpression", "[", "Expression", "]"], ["MemberExpression", ".", "IdentifierName"], ["new", "MemberExpression", "Arguments"]],

          if (symbol.childNodes[0].name === 'IdentifierName') {
            // MemberExpression : MemberExpression "." IdentifierName
            var path = getPath(symbol.childNodes[2]);
            if (path) path = path.concat(symbol.childNodes[0].childNodes[0].token.toString());
            createPath(path);
            return path;
          } else if (symbol.childNodes[0].name === 'PrimaryExpression') {
            // MemberExpression : PrimaryExpression
            if (symbol.childNodes[0].childNodes[0].name === 'Identifier') {
              var path = [symbol.childNodes[0].childNodes[0].token.toString()];
              createPath(path);
              return path;
            } else {
              return null;
            }
          } else if (symbol.childNodes[0].name === ']') {
            // MemberExpression : MemberExpression "[" Expression "]"
            getPath(symbol.childNodes[3]);
            walk(symbol.childNodes[1]);
            return null;
          } else if (symbol.childNodes[0].name === 'Arguments') {
            // MemberExpression : "new" MemberExpression Arguments
            walk(symbol.childNodes[0]);
            walk(symbol.childNodes[1]);
            return null;
          } else {
            for (var i = 0; i < symbol.childNodes.length; i++) {
              walk(symbol.childNodes[i]);
            }
          }
        }

        function createPath(path) {
          var curr = context;
          for (var i = 0; i < path.length - 1; i++) {
            if (!curr[path[i]]) curr[path[i]] = Object.create(null);
            curr = curr[path[i]];
          }
          me.paths.push(path);
          pathIndex[path.join('.')] = false;
        }
      }

      function visit(tree) {
        var childNodes = tree.childNodes.slice().reverse();
        var children = childNodes.filter(function (e) {
          return !e.token || !e.token.Punctuator;
        });
        if (tree.name === 'UnaryExpression') {
          // negative number support
          if (childNodes.length === 2 && childNodes[0].name === '-' && children.length === 1) {
            var res = visit(children[0]);
            res.value = -res.value;
            return res;
          }
        }

        if (tree.name === 'Arguments') {
          var argumentList = [];
          var listNode = children[0];
          while (listNode) {
            if (listNode.childNodes.length === 3) {
              argumentList.unshift(listNode.childNodes[0]);
              listNode = listNode.childNodes[2];
            }
            if (listNode.childNodes.length === 1) {
              argumentList.unshift(listNode.childNodes[0]);
              listNode = null;
            }
          }
          return {
            type: 'Arguments',
            children: argumentList.map(function (e) {
              return visit(e);
            })
          };
        }

        if (children && children.length === 1) {
          var res = visit(children[0]);
          return res;
        }

        if (tree.token && ['NullLiteral', 'BooleanLiteral', 'NumericLiteral', 'StringLiteral', 'Identifier'].some(function (e) {
          return tree.token[e];
        })) {
          var type = Object.keys(tree.token).filter(function (e) {
            return e.match(/Literal/) || e.match(/Identifier/);
          })[0];
          var value = {
            'NullLiteral': null,
            'BooleanLiteral': Boolean(tree.token),
            'NumericLiteral': Number(tree.token),
            'StringLiteral': tree.token,
            'Identifier': tree.token
          }[type];

          return {
            type: type,
            value: value
          };
        }

        if (tree.name === 'CallExpression') return {
          type: 'CallExpression',
          children: [visit(childNodes[0]), visit(childNodes[1])]
        };

        return {
          type: childNodes.filter(function (e) {
            return e.token && e.token.Punctuator;
          })[0].name,
          children: childNodes.filter(function (e) {
            return !e.token || !e.token.Punctuator;
          }).map(function (e) {
            return visit(e);
          })
        };
      }

      function parse(originExp) {
        var exp = new JavaScriptExpression(originExp);
        return JSON.stringify(visit(exp.tree), null);
      }

      module.exports = {
        parse: parse
      };

      /***/
    }]
    /******/)
  );
});;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(17)
)

/* script */
__vue_exports__ = __webpack_require__(18)

/* template */
var __vue_template__ = __webpack_require__(19)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "F:\\weex\\weex_develop\\abm_dev_weex\\abm-weexSource\\src\\components\\line.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1dd2d085"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.md5 = md5;
exports.getApi = getApi;
exports.eventBusTag = eventBusTag;
exports.jumpTo2 = jumpTo2;
exports.getTopHeight = getTopHeight;
exports.iPhoneX = iPhoneX;
exports.isIpx = isIpx;
exports.interceptPush = interceptPush;
exports.popBar = popBar;
exports.finishAnim = finishAnim;
exports.startAnim = startAnim;
exports.compareVersion = compareVersion;
exports.utilsGet = utilsGet;
exports.Get = Get;
exports.kill = kill;
exports.setToken = setToken;
exports.Delete = Delete;
exports.Put = Put;
exports.utilsPost = utilsPost;
exports.Post = Post;
exports.GetUrlPara = GetUrlPara;
exports.isValueParam = isValueParam;
exports.createLink = createLink;
exports.createURL = createURL;
exports.parseLanguage = parseLanguage;
exports.getStatusBarHeight = getStatusBarHeight;
exports.getTitleHeight = getTitleHeight;
exports.getWeexHeight = getWeexHeight;
exports.jumpToBanner = jumpToBanner;
exports.mainBarHeight = mainBarHeight;
exports.getWeexHeight2 = getWeexHeight2;
exports.toNativePage = toNativePage;
exports.upDate = upDate;
exports.countDown = countDown;

var _api = __webpack_require__(47);

var _api2 = _interopRequireDefault(_api);

var _event = __webpack_require__(48);

var _event2 = _interopRequireDefault(_event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stream = weex.requireModule('stream');
var titleBar = weex.requireModule('titleBar'); //原生提供的titleBar模块
var comModal = weex.requireModule('ComModule'); //原生提供的ComModule模块
var promptModule = weex.requireModule('promptModule');

var encoder = typeof encodeURIComponent === 'function' ? encodeURIComponent : typeof encodeURI === 'function' ? encodeURI : function (x) {
    return x;
};

var decoder = typeof decodeURIComponent === 'function' ? decodeURIComponent : typeof decodeURI === 'function' ? decodeURI : function (x) {
    return x;
};

function encodeParams(params) {
    if (!params || (typeof params === 'undefined' ? 'undefined' : _typeof(params)) !== 'object') {
        return '';
    }
    var array = [];
    for (var key in params) {
        if (typeof params[key] === 'string') {
            array.push(encoder(key) + '=' + encoder(params[key]));
        }
    }
    return array.join('&');
}

function md5(value, call) {
    comModal.getMD5({ value: value }, function (ret) {
        call(ret);
    });
}

function getApi() {
    return _api2.default;
}
function eventBusTag() {
    return _event2.default;
}
function jumpTo2(name, title) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var rTitle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
    //在weex页面中,点击跳转采用的是jumpTo2()的方法
    var url = createLink(name, params);
    console.log('--------------jump 跳转地址:\r' + url);
    titleBar.push({
        url: url,
        title: title,
        animated: true,
        rTitle: rTitle
    });
}

function getTopHeight(self) {
    var show = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var height = 0;
    comModal.getHeight({}, function (data) {
        //调用了原生提供的comModal中的getHeight方法，这个高度是整个显示频的高度
        if (show) self.height = parseInt(data.topHeight) + 1.4;else self.height = parseInt(data.topHeight);
    });
    return self.height;
}

function isiPhoneX() {
    if (weex.config.env.deviceModel === 'iPhone10,3' || weex.config.env.deviceModel === 'iPhone10,6' || weex.config.env.deviceModel === 'iPhone11,2' || weex.config.env.deviceModel === 'iPhone11,4' || weex.config.env.deviceModel === 'iPhone11,6' || weex.config.env.deviceModel === 'iPhone11,8') {
        return true;
    } else {
        return false;
    }
}

function iPhoneX(self) {
    var isX = isiPhoneX();
    if (isX) {
        self.isIphoneX = true;
    } else {
        self.isIphoneX = false;
    }
    return self.isIphoneX;
}

function isIpx(self) {
    var isX = isiPhoneX();
    if (isX) {
        self.bottom = 68;
    } else {
        self.bottom = 0;
    }
    return self.bottom;
}

function interceptPush(name) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var intercept = arguments[2];
    var kill_level = arguments[3];

    var url = createLink(name, params);
    console.log('--------------intercept_jump:' + url);
    titleBar.push({
        url: url,
        animated: true,
        intercept: intercept,
        kill_level: kill_level
    });
}
function popBar() {
    titleBar.pop({});
}

function finishAnim() {
    titleBar.finishAnim();
}
function startAnim(name) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var type = arguments[2];

    var url = createLink(name, params);
    console.log('--------------jump:' + url);
    titleBar.startAnim({
        url: url,
        type: type
    });
}
function toParams(obj) {
    var param = "";
    for (var name in obj) {
        if (typeof obj[name] != 'function') {
            param += "&" + name + "=" + encodeURI(obj[name]);
        }
    }
    return param.substring(1);
}
function toUrlPath(obj) {
    var param = '';
    for (var name in obj) {
        if (param == '') {
            param = name + '=' + encodeURI(obj[name]);
        } else {
            param += '&' + name + '=' + encodeURI(obj[name]);
        }
    }
    param = '?' + param;
    return param.substring(0);
}
/**
 * 版本号比较
 * @memberOf Utils
 * @param currVer {string}
 * @param promoteVer {string}
 * @returns {boolean}
 * @example
 * const { Utils } = require('@ali/wx-bridge');
 * const { compareVersion } = Utils;
 * console.log(compareVersion('0.1.100', '0.1.11')); // 'true'
 */
function compareVersion() {
    var currVer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0.0.0';
    var promoteVer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0.0.0';

    if (currVer === promoteVer) return true;
    var currVerArr = currVer.split('.');
    var promoteVerArr = promoteVer.split('.');
    var len = Math.max(currVerArr.length, promoteVerArr.length);
    for (var i = 0; i < len; i++) {
        var proVal = ~~promoteVerArr[i];
        var curVal = ~~currVerArr[i];
        if (proVal < curVal) {
            return true;
        } else if (proVal > curVal) {
            return false;
        }
    }
    return false;
}
function getApp_id() {
    return "ABM";
}
function getApp_Secret() {
    return 'GAgTtjT5papZPf8P1QR3WOPo25hnISXN';
}
function getTimestamp() {
    return parseInt(new Date().getTime() / 1000);
}

function utilsGet(md5Sign, api, param, callback) {
    comModal.getToken({}, function (data) {
        var areaCodeMobile = param.user_token;
        if (areaCodeMobile.startsWith("+")) areaCodeMobile = areaCodeMobile.replace("+", "%2B");
        param.user_token = areaCodeMobile;
        var serve = '';
        var array = data.ip.split('/');
        var hostString = array[2];
        var hostArray = hostString.split('.');
        if (hostArray[1] == 't' || hostArray[1] == 'p') {
            serve = 'http://tools.h.fenqv.com/';
        } else {
            serve = 'http://tools.abmau.com/';
        }
        var app_secret = getApp_Secret();
        console.log('---------url==\r' + app_secret);
        var app_id = getApp_id();
        var timestamp = getTimestamp();
        var signStr = md5Sign(app_id + timestamp + areaCodeMobile);
        var sign = md5Sign(signStr + app_secret).toUpperCase();
        param.device = weex.config.env.osName;
        param.version = weex.config.env.appVersion;
        param.app_id = app_id;
        param.timestamp = timestamp;
        param.sign = sign;
        var data = serve + api + toUrlPath(param);
        console.log('---------url==\r' + data);
        stream.fetch({
            method: 'GET',
            url: data,
            type: 'json',
            timeout: 20000
        }, function (res) {
            if (res.ok) callback(res);else promptModule.showPrompt({ msg: '网络异常', type: 'err' });
        }, function (response) {
            // modal.toast({ message: 'Error finished.'+ response.order })
        });
    });
}

function Get(url, param, callback) {
    comModal.getToken({}, function (data) {
        var ip;
        if (!data.ip) ip = "https://api.abmau.com/";else ip = data.ip;
        param.token = param.token ? param.token : data.token;
        param.device = weex.config.env.osName;
        param.version = weex.config.env.appVersion;
        param.from = 'ABM';
        var data = ip + url + toUrlPath(param);
        console.log('---------url==\r' + data);
        stream.fetch({
            method: 'GET',
            url: data,
            type: 'json',
            timeout: 20000
        }, function (res) {
            if (res.ok) {
                callback(res);
                if (url.indexOf('get_abm_verify_code') != -1) {
                    console.log('验证码====>' + JSON.stringify(res.data.data));
                }
            } else promptModule.showPrompt({ msg: '网络异常', type: 'err' });
        }, function (response) {
            // modal.toast({ message: 'Error finished.'+ response.order })
        });
    });
}
function kill(value) {
    comModal.killActivity({ index: value });
}
function setToken(value) {
    comModal.setToken({ token: value });
}

function Delete(url, param, callback) {
    comModal.getToken({}, function (data) {
        var ip;
        if (!data.ip) ip = "https://api.abmau.com/";else ip = data.ip;
        param.token = data.token;
        param.device = weex.config.env.osName;
        param.version = weex.config.env.appVersion;
        param.from = 'ABM';
        var data = ip + url + toUrlPath(param);
        console.log('---------url' + data);
        stream.fetch({
            method: 'DELETE',
            url: data,
            type: 'json',
            timeout: 20000
        }, function (res) {
            if (res.ok) callback(res);else promptModule.showPrompt({ msg: '网络异常', type: 'err' });
        }, function (response) {
            // modal.toast({ message: 'Error finished.'+ response.order })
        });
    });
}

function Put(url, param, callback) {
    comModal.getToken({}, function (data) {
        var ip;
        if (!data.ip) ip = "https://api.abmau.com/";else ip = data.ip;
        param.token = data.token;
        param.device = weex.config.env.osName;
        param.version = weex.config.env.appVersion;
        param.from = 'ABM';
        var data = ip + url + toUrlPath(param);
        console.log('---------url==\r' + data);
        stream.fetch({
            method: 'PUT',
            url: data,
            type: 'json',
            timeout: 20000
        }, function (res) {
            if (res.ok) callback(res);else promptModule.showPrompt({ msg: '网络异常', type: 'err' });
        }, function (response) {
            // modal.toast({ message: 'Error finished.'+ response.order })
        });
    });
}

function utilsPost(md5Sign, api, param, callback) {
    comModal.getToken({}, function (data) {
        var areaCodeMobile = param.user_token;
        if (areaCodeMobile.startsWith("+")) areaCodeMobile = areaCodeMobile.replace("+", "%2B");
        param.user_token = areaCodeMobile;
        var serve = '';
        var array = data.ip.split('/');
        var hostString = array[2];
        var hostArray = hostString.split('.');
        if (hostArray[1] == 't' || hostArray[1] == 'p') {
            serve = 'http://tools.h.fenqv.com/';
        } else {
            serve = 'http://tools.abmau.com/';
        }
        var app_secret = getApp_Secret();
        var app_id = getApp_id();
        var timestamp = getTimestamp();
        var signStr = md5Sign(app_id + timestamp + areaCodeMobile);
        var sign = md5Sign(signStr + app_secret).toUpperCase();
        param.device = weex.config.env.osName;
        param.version = weex.config.env.appVersion;
        param.app_id = app_id;
        param.timestamp = timestamp;
        param.sign = sign;
        console.log('---------url:' + serve + api + " param:" + toParams(param));
        stream.fetch({
            method: 'POST',
            url: serve + api,
            type: 'json',
            timeout: 20000,
            body: toParams(param)
        }, function (res) {
            if (res.ok) callback(res);else promptModule.showPrompt({ msg: res.data.data, type: 'err' });
        }, function (response) {
            // modal.toast({ message: 'Error finished.'+ response.order })
        });
    });
}
function Post(url, param, callback) {
    comModal.getToken({}, function (data) {
        var ip;
        if (!data.ip) ip = "https://api.abmau.com/";else ip = data.ip;
        param.device = weex.config.env.osName;
        param.version = weex.config.env.appVersion;
        param.token = data.token;
        param.from = 'ABM';
        console.log('---------url:' + ip + url + " param:" + toParams(param));
        stream.fetch({
            method: 'POST',
            url: ip + url,
            type: 'json',
            timeout: 20000,
            body: toParams(param)
        }, function (res) {
            if (res.ok) callback(res);else promptModule.showPrompt({ msg: res.data.data, type: 'err' });
        }, function (response) {
            // modal.toast({ message: 'Error finished.'+ response.order })
        });
    });
}

function GetUrlPara(url, key) {
    if (url && url.split('?')[1]) {
        // 获取地址参数部分
        var arr = url.split('?')[1].split('&'),
            len = arr.length,
            obj = {};
        // 将参数以对象的 形式储存
        for (var i = 0; i < len; i++) {
            var v = arr[i].split('='),
                k = v[0],
                value = v[1] ? v[1] : '';
            obj[k] = value;
        }
        // 获取对应参数的值
        if (!key) {
            return obj;
        } else {
            return decoder(obj[key]);
        }
    } else {
        return '';
    }
}
function isValueParam(self) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    var isParam = false;
    for (var key in params) {
        if (params[key].length > 0) self.isParam = true;else {
            self.isParam = false;
            break;
        }
    }
    return self.isParam;
}
function createLink(name) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var args = [];
    for (var key in params) {
        // if (typeof params[key] === 'string') {
        //     args.push(`${encoder(key)}=${encoder(params[key])}`)
        // }
        // args.push(key+'='+params[key]);
        args.push(encoder(key) + '=' + encoder(params[key]));
    }
    if (WXEnvironment.platform === 'Web') {
        args.unshift('page=' + name + '.web.js');
        return '/?' + args.join('&');
    }
    var base = getBaseURL();
    return '' + base + name + '.weex.js?' + (args.length ? '' + args.join('&') : '');
}

function createURL(hash, params) {
    if (WXEnvironment.platform === 'Web') {
        return 'http://dotwe.org/raw/htmlVue/' + hash;
    }
    var url = 'http://dotwe.org/raw/dist/' + hash + '.bundle.wx';
    var paramString = encodeParams(params);
    if (WXEnvironment.appName === 'TB') {
        return url + '?_wx_tpl=' + url + '&' + paramString;
    }
    if (WXEnvironment.appName === 'WXSample') {
        return url + '?' + paramString;
    }
    return url + '?wx_weex=true&' + paramString;
}

function getBaseURL() {
    var bundleUrl = weex.config.bundleUrl;
    var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;
    var isiOSAssets = bundleUrl.indexOf('file:///') >= 0;
    if (isAndroidAssets) {
        return 'file://assets/';
    } else if (isiOSAssets) {
        return bundleUrl.substring(0, bundleUrl.lastIndexOf('dist/') + 5);
    }
    return bundleUrl.substring(0, bundleUrl.lastIndexOf('dist/') + 5);
}

var supportedLanguageRE = /(en|zh)\_?\w*/i;
function parseLanguage(language) {
    var match = supportedLanguageRE.exec(language + '');
    if (match && match[1]) {
        return match[1];
    }
    return '';
}
//总高度
function getStatusBarHeight(self) {
    var nativeBarHeight = 0;
    comModal.getHeight({}, function (data) {
        //调用了原生提供的comModal中的getHeight方法，这个高度是整个显示频的高度
        console.log('---------height_status' + data.statusHeight);
        self.nativeBarHeight = data.statusHeight; //原生导航栏的高度+导航栏上面的高度
    });
    return self.nativeBarHeight;
}
//原生导航栏的高度
function getTitleHeight(self) {
    var titleHeight = 0;
    comModal.getHeight({}, function (data) {
        console.log('---------height_bar' + data.barHeight);
        self.titleHeight = data.barHeight;
    });
    return self.titleHeight;
}

function compareVersion() {
    var currVer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0.0.0';
    var promoteVer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0.0.0';

    if (currVer === promoteVer) return true;
    var currVerArr = currVer.split('.');
    var promoteVerArr = promoteVer.split('.');
    var len = Math.max(currVerArr.length, promoteVerArr.length);
    for (var i = 0; i < len; i++) {
        var proVal = ~~promoteVerArr[i];
        var curVal = ~~currVerArr[i];
        if (proVal < curVal) {
            return true;
        } else if (proVal > curVal) {
            return false;
        }
    }
    return false;
}

function getWeexHeight(self) {
    //开发weex页面的时候,我们前端所能用的最大高度;这个self形参是一个实例对象(就是当前.vue页面的this)
    var height = 0;var isX = isiPhoneX();
    if (compareVersion(weex.config.env.appVersion, '3.0.5')) {
        comModal.getHeight({}, function (data) {
            //调用了原生提供的comModal中的getHeight方法，这个高度是整个显示频的高度
            if (isX) self.height = weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 - data.topHeight - 68;else {
                if (weex.config.env.platform.toLowerCase() === 'ios') {
                    self.height = weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 - data.topHeight; //所需要用到的高度
                } else if (weex.config.env.platform.toLowerCase() === 'android') {
                    self.height = weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 - data.topHeight;
                }
            }
        });
    } else {
        comModal.getHeight({}, function (data) {
            //调用了原生提供的comModal中的getHeight方法，这个高度是整个显示频的高度
            if (isX) self.height = weex.config.env.deviceHeight * 750 / weex.config.env.deviceWidth - data.topHeight * 750 / weex.config.env.deviceWidth - 68;else {
                self.height = weex.config.env.deviceHeight * 750 / weex.config.env.deviceWidth - data.topHeight * 750 / weex.config.env.deviceWidth; //所需要用到的高度
            }
        });
    }
    return self.height;
}

function jumpToBanner(title, url, shareUrl, shareImg, shareTitle, shareDes) {
    console.log('banner 跳转链接 ========>\r' + url);
    if (!url || url == 'undefined' || url == '') {
        return;
    }
    if (url.indexOf('/goods/detail/') != -1) {
        //跳转商品详情
        var id = parseInt(url.split('\\?')[0].split('/goods/detail/')[1]);
        if (this.compareVersion(weex.config.env.appVersion, '3.4.0')) {
            this.jumpTo2('shop/goodsDetailsParent', '', { title: title, goods_id: id });
        }
    } else if (url.indexOf('app/order/discounts') != -1) {
        //跳转 每日特惠商品列表
        var id = url.substring(url.indexOf('=') + 1, url.length);
        this.jumpTo2('home/superWelfare', '', { id: id });
    } else if (url.indexOf('weex://home/bestSell.weex.js') != -1) {
        this.jumpTo2('home/bestSell', '', { title: title });
    } else if (url.indexOf('weex://home/skinCare.weex.js') != -1) {
        var param = url.split('id=')[1];
        var id = parseInt(param.split('\\&')[0]);
        this.jumpTo2('home/skinCare', '', { id: id });
    } else if (url.indexOf('weex://activities/activitiesRank.weex.js') != -1) {
        this.jumpTo2('activities/activitiesRank', '', {});
    } else if (url.indexOf('weex://elevenBrandRank.weex.js') != -1) {
        this.jumpTo2('activities/elevenBrandRank', '', {});
    } else if (url.indexOf('weex://') != -1) {
        var weex_path = url.substring(url.search('weex://') + 7, url.search('.weex.js'));
        var url_param = {};
        if (url.indexOf('?') != -1) {
            var weex_param = url.substring(url.search('\\?') + 1, url.length);
            var params = [];
            if (weex_param.indexOf('&') != -1) params = weex_param.split('&');else params.push(weex_param);
            for (var arr in params) {
                var value = params[arr].split('=');
                var key = value[0].toString();
                url_param[key] = value[1];
            }
        }
        this.jumpTo2(weex_path, '', url_param);
    } else if (url.indexOf('app/brand') != -1) {
        var id = url.substring(url.indexOf('=') + 1, url.length);
        this.jumpTo2('classify/brandDetail', '', { title: title, brandId: id });
    } else {
        //跳转 专题页或其他活动页
        titleBar.startWeb({
            title: title,
            url: url,
            shareUrl: shareUrl,
            shareImg: shareImg,
            shareTitle: shareTitle,
            shareDes: shareDes
        });
    }
}

function mainBarHeight(self) {
    var bottom = 0;
    var buttomBarHeight = 0;
    comModal.getHeight({}, function (data) {
        buttomBarHeight = data.buttomBarHeight;
        if (weex.config.env.platform.toLowerCase() === 'ios') {
            self.bottom = buttomBarHeight * 750 / weex.config.env.deviceWidth;
        } else if (weex.config.env.platform.toLowerCase() === 'android') {
            self.bottom = 0;
        }
    });
    return self.bottom;
}
function getWeexHeight2(self) {
    //开发weex页面的时候，这个是要减去底部原生导航的高度，是需要获取的，用于某些固定的页面
    var buttomBarHeight = 0;
    var height = 0;var isX = isiPhoneX();
    comModal.getHeight({}, function (data) {
        //调用了原生提供的comModal中的getHeight方法，这个高度是整个显示频的高度
        buttomBarHeight = data.buttomBarHeight; //原生导航的底部高度
        if (weex.config.env.platform.toLowerCase() === 'ios') {
            if (isX) self.height = weex.config.env.deviceHeight * 750 / weex.config.env.deviceWidth - buttomBarHeight * 750 / weex.config.env.deviceWidth - 68;else self.height = weex.config.env.deviceHeight * 750 / weex.config.env.deviceWidth - buttomBarHeight * 750 / weex.config.env.deviceWidth;
        } else if (weex.config.env.platform.toLowerCase() === 'android') {
            self.height = weex.config.env.deviceHeight * 750 / weex.config.env.deviceWidth - buttomBarHeight * 750 / weex.config.env.deviceWidth;
            /*if(data.navigationBar){
                var deviceHeight = parseInt(weex.config.env.deviceHeight) + parseInt(data.navigationBar);
                self.height=(deviceHeight * 750 / weex.config.env.deviceWidth-buttomBarHeight*750 / weex.config.env.deviceWidth);
            }
            else */self.height = weex.config.env.deviceHeight * 750 / weex.config.env.deviceWidth - buttomBarHeight * 750 / weex.config.env.deviceWidth;
        }
    });
    return self.height;
}
function toNativePage(type) {
    //跳转到原生页面 type为1:订货中心
    comModal.goActivity({ type: type }, function (data) {}); //原生提供了一个goActivity()方法
}
function upDate() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    //赠送特权券成功之后调用该方法 type为1：赠送成功并返回刷新前一页
    comModal.upDate({ type: type }, function (data) {}); //原生提供了一个upDate()方法
}
function countDown(time, each, call) {
    var date = new Date(),
        StartTime = date.getTime();
    aa();
    var t = setInterval(aa, 1000);
    function aa() {
        var date = new Date(),
            ThisTime = date.getTime();
        var desc = ThisTime - StartTime;
        var showTime = time - parseInt(desc / 1000);
        if (typeof each == 'function') {
            each(showTime);
        }
        if (showTime <= 0) {
            clearInterval(t);
            if (typeof call == 'function') {
                call();
            }
        }
    }
    return t;
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _brandDetail = __webpack_require__(5);

var _brandDetail2 = _interopRequireDefault(_brandDetail);

var _mixin = __webpack_require__(46);

var _mixin2 = _interopRequireDefault(_mixin);

var _utils = __webpack_require__(3);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.mixin(_mixin2.default);
_brandDetail2.default.el = '#root';
new Vue(_brandDetail2.default);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(6)
)

/* script */
__vue_exports__ = __webpack_require__(7)

/* template */
var __vue_template__ = __webpack_require__(45)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "F:\\weex\\weex_develop\\abm_dev_weex\\abm-weexSource\\src\\pages\\classify\\brandDetail.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0091fd86"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "backgroundColor": "#ffffff",
    "width": "750"
  },
  "navigation": {
    "width": "750",
    "alignItems": "center",
    "backgroundColor": "#FFFFFF",
    "flexDirection": "row",
    "position": "relative",
    "justifyContent": "space-between"
  },
  "nav_tittle": {
    "color": "#333333",
    "lineHeight": "44",
    "textAlign": "center",
    "fontSize": "36"
  },
  "left": {
    "width": "180",
    "flexDirection": "row",
    "justifyContent": "flex-start",
    "alignItems": "center",
    "paddingLeft": "36"
  },
  "left-button": {
    "width": "21",
    "height": "36",
    "marginRight": "12"
  },
  "middle": {
    "alignItems": "center"
  },
  "icon-text": {
    "fontSize": "28",
    "color": "#333333"
  },
  "right": {
    "width": "140",
    "paddingRight": "36",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "cartNum": {
    "width": "30",
    "height": "30",
    "borderRadius": "15",
    "backgroundColor": "#CF1126",
    "color": "#ffffff",
    "fontSize": "20",
    "lineHeight": "30",
    "textAlign": "center",
    "position": "absolute",
    "left": "88",
    "top": "15"
  },
  "nav_img": {
    "width": "36",
    "height": "36"
  },
  "content": {
    "flexDirection": "row"
  },
  "cellBanner": {
    "borderBottomWidth": "20",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#F6F6F6"
  },
  "banner": {
    "width": "750",
    "height": "350"
  },
  "banner_image": {
    "width": "750",
    "height": "350"
  },
  "indicator": {
    "width": "750",
    "height": "40",
    "itemColor": "#666666",
    "itemSelectedColor": "#333333",
    "itemSize": "15",
    "position": "absolute",
    "bottom": "10",
    "right": "0"
  },
  "goods-hot-title": {
    "width": "750",
    "height": "120",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "goods-hot-title-text": {
    "width": "200",
    "height": "56",
    "fontSize": "40",
    "textAlign": "center",
    "color": "#333333"
  },
  "goods-hot-content": {
    "width": "750",
    "borderBottomWidth": "20",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#F6F6F6"
  },
  "goods-hot-content-head-img": {
    "width": "750",
    "height": "400"
  },
  "goods-hot-content-center": {
    "borderBottomWidth": "2",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#F6F6F6"
  },
  "goods-hot-content-center-title": {
    "width": "750",
    "paddingLeft": "48",
    "paddingRight": "50"
  },
  "goods-hot-content-center-title-text": {
    "color": "#333333",
    "fontSize": "26",
    "paddingTop": "20",
    "paddingBottom": 20
  },
  "recom_label_name": {
    "paddingLeft": "48",
    "paddingBottom": "20",
    "flexDirection": "row"
  },
  "padding-content": {
    "paddingLeft": "10",
    "paddingRight": "10",
    "height": "30",
    "lineHeight": "30",
    "textAlign": "center",
    "color": "#ffffff",
    "fontSize": "22",
    "borderRadius": "3",
    "marginRight": "10"
  },
  "goods-price": {
    "paddingLeft": "48",
    "paddingRight": "50",
    "paddingBottom": "20",
    "justifyContent": "space-between"
  },
  "goods-price-type": {
    "flexDirection": "row",
    "height": "37"
  },
  "goods-number": {
    "fontSize": "22",
    "color": "#ffffff",
    "height": "30",
    "lineHeight": "30",
    "paddingLeft": "4",
    "paddingRight": "4",
    "borderRadius": "5"
  },
  "stock_none": {
    "backgroundColor": "#999999"
  },
  "stock_short": {
    "backgroundColor": "#FF916F"
  },
  "stock_normal": {
    "backgroundColor": "#64D791"
  },
  "online": {
    "backgroundColor": "#ff4141"
  },
  "goods-price-type1": {
    "color": "#CF1126",
    "fontSize": "26",
    "marginRight": "30",
    "lineHeight": "35"
  },
  "goods-price-type2": {
    "color": "#666666",
    "fontSize": "22",
    "lineHeight": "35"
  },
  "goods-price-type3": {
    "color": "#666666",
    "fontSize": "22",
    "textDecoration": "line-through",
    "textDecorationColor": "#666666",
    "lineHeight": "35"
  },
  "goods-hot-content-foot": {
    "width": "750",
    "height": "90",
    "paddingLeft": "48",
    "flexDirection": "row",
    "justifyContent": "flex-start",
    "alignItems": "center"
  },
  "icon-commen": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "shoppingcart": {
    "width": "187",
    "marginRight": "72"
  },
  "shoppingcart_icon-text": {
    "width": "150"
  },
  "shoppingcart_icon": {
    "width": "37",
    "height": "34"
  },
  "buynow": {
    "width": "155"
  },
  "buynow_icon-text": {
    "width": "130"
  },
  "buynow_icon": {
    "width": "31",
    "height": "31"
  },
  "icon-commen-text": {
    "height": "40",
    "fontSize": "26",
    "color": "#666666",
    "textAlign": "center",
    "lineHeight": "40"
  },
  "all-products-content": {
    "width": "750",
    "height": "312",
    "paddingLeft": "36",
    "paddingRight": "36",
    "paddingTop": "36",
    "paddingBottom": "36",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "products-left-img": {
    "width": "240",
    "height": "240"
  },
  "products-right": {
    "height": "240",
    "width": "438"
  },
  "products-right-title": {
    "height": "75",
    "lines": 2,
    "marginTop": "13",
    "color": "#333333",
    "width": "438",
    "paddingLeft": "20",
    "fontSize": "26",
    "paddingBottom": "15"
  },
  "products-right-label": {
    "width": "438",
    "height": "50",
    "paddingLeft": "20",
    "flexDirection": "row",
    "paddingBottom": "10"
  },
  "products-right-goods-price": {
    "paddingLeft": "20"
  },
  "goods-price-type-bottom": {
    "width": "418",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "goods-price-type-bottom2": {
    "width": "660",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "text-center": {
    "textAlign": "center"
  },
  "font-weight": {
    "fontWeight": "700"
  },
  "line": {
    "width": "750",
    "height": "1.4",
    "backgroundColor": "#e2e2e2"
  },
  "item-container": {
    "width": "750",
    "backgroundColor": "#ffffff"
  },
  "list-item": {
    "paddingTop": "20",
    "paddingRight": "50",
    "paddingBottom": "20",
    "paddingLeft": "50",
    "width": "750",
    "height": "160",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "borderBottomWidth": "1.4",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#e2e2e2"
  },
  "list-item-font-size": {
    "fontSize": "28",
    "lineHeight": "44"
  },
  "more-list": {
    "width": "750",
    "height": "100",
    "backgroundColor": "#ffffff"
  },
  "loading-over-txt": {
    "lineHeight": "100",
    "textAlign": "center",
    "fontSize": "27",
    "color": "#333333"
  },
  "tab-cell": {
    "flexDirection": "row",
    "height": "90",
    "maxHeight": "90"
  },
  "head-tabs": {
    "flexDirection": "row",
    "position": "relative"
  },
  "navbar": {
    "width": "750",
    "borderBottomWidth": "1.4",
    "borderBottomColor": "#e2e2e2"
  },
  "tab": {
    "height": "90",
    "width": "150",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "tab-title": {
    "fontSize": "28",
    "height": "90",
    "width": "150",
    "textAlign": "center",
    "lineHeight": "90",
    "color": "#666666"
  },
  "active": {
    "borderBottomStyle": "solid",
    "borderBottomColor": "#333333",
    "borderBottomWidth": "3",
    "color": "#333333"
  }
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcTabPage = __webpack_require__(8);

var _wxcTabPage2 = _interopRequireDefault(_wxcTabPage);

var _line = __webpack_require__(2);

var _line2 = _interopRequireDefault(_line);

var _newBuyGoodsPop = __webpack_require__(20);

var _newBuyGoodsPop2 = _interopRequireDefault(_newBuyGoodsPop);

var _empty = __webpack_require__(41);

var _empty2 = _interopRequireDefault(_empty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var height = 0; //所能用到的最大高度 
var nativeBarHeight = 0;
var titleHeight = 0;

var promptModule = weex.requireModule('promptModule');
var titleBar = weex.requireModule('titleBar');
var loadingModule = weex.requireModule("loadingModule");
var utilModule = weex.requireModule("utilModule");
var event = new BroadcastChannel('cart');
var goodsAddressEvent = new BroadcastChannel('goods_select_address');
var chooseAddress = new BroadcastChannel('choose_address');
exports.default = {
    components: { WxcTabPage: _wxcTabPage2.default, line: _line2.default, empty: _empty2.default, pop: _newBuyGoodsPop2.default },
    data: function data() {
        return {
            height: height,
            headTitle: '', //title
            brandId: '', //品牌id

            tabTitles: [], //tab标签的内容
            tabStyles: {
                bgColor: '#FFFFFF',
                titleColor: '#333333',
                activeTitleColor: '#CF1126',
                activeBgColor: '#FFFFFF',
                isActiveTitleBold: false,
                iconWidth: 0,
                iconHeight: 0,
                width: 250,
                height: 100,
                fontSize: 28,
                hasActiveBottom: true,
                activeBottomColor: '#CF1126',
                activeBottomHeight: 4,
                activeBottomWidth: 230,
                textPaddingLeft: 10,
                textPaddingRight: 10
            },
            lastTimestamp: 0,
            isTabView: true,
            needSlider: false,
            tabHeight: 0,
            limit: 10,
            offset: [],
            loading: [], //加载中
            allLoadingFinish: [], //数据是否全部加载完成
            emptyIsShow: [],
            bgImgSrc: '',
            index: 0,
            type: 'all',
            data: [],

            tabList: [], //明星热卖，里面会设置成二维数组
            banner: [], //banner图
            star_goods: [], //明星热卖
            isFirst: true,
            isShow: true,
            cartNum: 0, //购物车数量

            //立即购买 开始
            goodsSku: {},
            actionType: "",
            buyGoodsRegions: [],
            is_optional: -1, //是否可配送
            showAddCart: false,
            isSelectRegions: false,
            goods_id: "",
            depot_id: "",
            enableStyles: {
                lineSpacing: "15px",
                color: "#999999",
                width: "auto",
                height: "50px",
                icon: "",
                depotName: "",
                borderColor: "#FFFFFFFF",
                checkedBorderColor: "#FFFFFFFF",
                checkedColor: "#999999",
                disabledColor: "#FF7D7D7D",
                backgroundColor: "#FFF6F6F6",
                checkedBackgroundColor: "#FFF6F6F6"
            },
            fee: '',
            isOffsetGoods: false, //切换收货地址是否切换商品
            buyGoods: null,
            buySpec: '',
            //立即购买 结束


            nativeBarHeight: nativeBarHeight,
            titleHeight: titleHeight,
            isFinish: {
                type: Boolean,
                default: true
            },
            //分享的数据
            brand_desc: '', //品牌描述
            image_url: '', //图片地址
            web_url: '', //品牌分享地址
            brand_name: '', //品牌名称
            isShare: false
        };
    },

    methods: {
        leftButtonClicked: function leftButtonClicked() {
            //返回点击事件
            var _this = this;
            if (_this.isFinish) {
                _this.popBar();
            } else {
                _this.$emit('wxcMinibarLeftButtonClicked', {});
            }
        },
        jumpToSearch: function jumpToSearch() {
            //跳转到搜索
            this.jumpTo2('home/search_goods', '', { keyword: '' });
        },
        jumpToCart: function jumpToCart() {
            //跳转到购物车
            var _this = this;
            _this.jumpTo2('shop/cart', '', {});
        },
        jumpToShare: function jumpToShare(event) {
            //分享
            if (event.timestamp - this.lastTimestamp < 3000) return;
            this.lastTimestamp = event.timestamp;
            utilModule.getABMShareView({
                'share_type': 'share_goods',
                'title': this.brand_name,
                'desc': this.brand_desc,
                'webUrl': this.web_url,
                'imageUrl': this.image_url,
                'copy_item': this.web_url
            });
        },
        jumpToDetail: function jumpToDetail(goodsId) {
            //跳转到商品详情
            if (this.compareVersion(weex.config.env.appVersion, '3.4.0')) {
                this.jumpTo2('shop/goodsDetailsParent', '', { goods_id: goodsId });
            } else {
                this.jumpTo2('shop/goodsDetails', '', { goods_id: goodsId });
            }
        },
        startWeb: function startWeb(url) {
            //跳转到banner文章
            this.jumpToBanner('', url, '', '', '', '');
        },


        // loadingDown(){//下拉加载
        //         var _this = this;
        //     _this.emptyIsShow[_this.index] = false;
        //     _this.loading[_this.index] = false;
        //     _this.data = [];
        //     _this.offset[_this.index] = 0;
        //     _this.fetch(_this.index);
        // },
        onloading: function onloading() {
            if (this.tabList[this.index].length < this.limit) return;
            this.loading[this.index] = true;
            // this.fetch(this.index);
            this.getAllData(this.index);
        },
        wxcTabPageCurrentTabSelected: function wxcTabPageCurrentTabSelected(e) {
            var _this = this;
            var index = e.page;
            _this.index = index;
            _this.emptyIsShow[_this.index] = false;
            _this.loading[index] = false;
            // promptModule.showPrompt({msg:_this.tabList[0],type:'err'});
            // if (_this.tabList[index].length ==0){
            //     _this.data = [];
            //     promptModule.showPrompt({msg:_this.tabTitles[index].id,type:'err'});
            //     _this.getAllData(index);
            // }
            // if(e.page==0){
            //     // _this.banner=[];
            //     // _this.star_goods=[];
            //     _this.isShow=true;

            // }else{
            //     _this.isShow=false;
            // }
            // _this.data = [];
            _this.getTabData(index);
        },
        getAllData: function getAllData(index) {
            //获取所有的数据
            var _this = this;

            _this.Get(_this.api().neworder_center, {
                offset: _this.offset[index],
                limit: _this.limit,
                brand_id: _this.brandId,
                cate_id: _this.tabTitles[index].id
            }, function (res) {
                if (res.data.code == '0') {
                    //请求数据成功
                    if (_this.isFirst) {
                        for (var i = 0; i < res.data.data.star_goods.length; i++) {
                            _this.star_goods.push(res.data.data.star_goods[i]);
                        }
                    }

                    if (res.data.data._count == 0) {
                        _this.emptyIsShow[index] = true;
                    } else {
                        _this.emptyIsShow[index] = false;
                    }

                    if (res.data.data._count > _this.offset[index]) {
                        _this.offset[index] += 10;
                        _this.allLoadingFinish[index] = true;
                    } else {
                        _this.loading[index] = false;
                        _this.allLoadingFinish[index] = true;
                    }
                    for (var i = 0; i < res.data.data.item.length; i++) {
                        // _this.data.push(res.data.data.item[i]);
                        _this.tabList[index].push(res.data.data.item[i]);
                    }
                    // Vue.set(_this.tabList, index, _this.data);
                    _this.isFirst = false;
                } else {
                    //请求数据失败 
                    promptModule.showPrompt({ msg: res.data.msg, type: 'err' });
                }
            });
        },
        getTabData: function getTabData(index) {
            //品牌的列表的tab
            var _this = this;
            _this.Get(_this.api().childcate, {
                brand_id: _this.brandId
            }, function (res) {
                if (res.data.code == '0') {
                    //请求数据成功
                    _this.brand_desc = res.data.data.brand_desc ? res.data.data.brand_desc : '';
                    _this.brand_name = res.data.data.brand_name ? res.data.data.brand_name : '';
                    _this.image_url = res.data.data.image_url ? res.data.data.image_url : '';
                    _this.web_url = res.data.data.web_url ? res.data.data.web_url : '';
                    if (_this.image_url != '' && _this.web_url != '') _this.isShare = true;else _this.isShare = false;
                    if (_this.isFirst && _this.tabTitles.length == 0) {
                        if (res.data.data.cat.length) {
                            for (var i = 0; i < res.data.data.cat.length; i++) {
                                _this.tabTitles.push({ title: res.data.data.cat[i].name, id: res.data.data.cat[i].id });
                                _this.offset[i] = 0;
                                _this.loading[i] = false;
                                _this.allLoadingFinish[i] = false;
                                _this.emptyIsShow[i] = false;
                            }
                        } else {
                            _this.offset[0] = 0;
                            _this.loading[0] = false;
                            _this.allLoadingFinish[0] = false;
                            _this.emptyIsShow[0] = false;
                            _this.tabTitles.push({ title: '', id: 0 });
                            _this.tabStyles.height = 0;
                            _this.tabHeight = 100;
                            // _this.tabList = [...Array(_this.tabTitles.length).keys()].map(i => []);
                        }
                        _this.tabList = [].concat(_toConsumableArray(Array(_this.tabTitles.length).keys())).map(function (i) {
                            return [];
                        });
                    }

                    //当tab加载完成之后再去请求数据
                    // promptModule.showPrompt({msg:_this.tabList,type:'err'});
                    _this.getAllData(index);
                } else {
                    //请求数据失败 
                    promptModule.showPrompt({ msg: res.data.msg, type: 'err' });
                }
            });
        },
        getBanner: function getBanner() {
            //品牌的Banner
            var _this = this;
            _this.Get(_this.api().brandBanner, {
                brand_id: _this.brandId
            }, function (res) {
                if (res.data.code == '0') {
                    //请求数据成功
                    // promptModule.showPrompt({msg:res.data.data.cat,type:'err'});
                    for (var i = 0; i < res.data.data.banner.length; i++) {
                        _this.banner.push(res.data.data.banner[i]);
                    }
                } else {
                    //请求数据失败 
                    promptModule.showPrompt({ msg: res.data.msg, type: 'err' });
                }
            });
        },
        getCartNum: function getCartNum() {
            //购物车数量
            var _this = this;
            _this.Get(_this.api().cart_num, {}, function (res) {
                if (res.data.code == 0) {
                    _this.cartNum = res.data.data._count;
                }
            });
        },


        //立即购买 开始
        addCart: function addCart(id) {
            this.clearData();
            this.goods_id = id;
            this.getGoodsSku(1);
        },
        buyNow: function buyNow(id) {
            this.clearData();
            this.goods_id = id;
            this.getGoodsSku(2);
        },
        clearData: function clearData() {
            this.goodsSku = {};
            this.buySpec = {};
            this.actionType = "";
            this.buyGoodsRegions = [];
            this.showAddCart = false;
            this.goods_id = "";
            this.depot_id = "";
            this.fee = null;
            this.address_id = '';
        },
        getGoodsSku: function getGoodsSku(type) {
            var _this = this;
            loadingModule.show({ msg: '' });
            _this.Get(_this.api().new_goods_sku, {
                id: _this.goods_id,
                is_store: 0,
                address_id: _this.address_id
            }, function (res) {
                loadingModule.cancel(function (ret) {
                    var result = ret.result;
                    if (result == 'dismiss') {
                        if (res.data.code == 0) {
                            _this.depot_id = res.data.data.depot_id;
                            var goods = res.data.data;
                            if (!_this.isSelectRegions || _this.isOffsetGoods || !_this.goodsSku) {
                                _this.goodsSku = goods;
                                _this.goodsSku.buyNum = _this.goodsSku.default_no;
                                _this.goodsSku.other_depot_goods = _this.resetDepots(res.data.data.other_depot_goods);
                                _this.goodsSku.spec = _this.resetSpecs(res.data.data.spec);
                                if (_this.goodsSku.spec.length > 0 && _this.buySpec) {
                                    _this.goodsSku.default_no = _this.buySpec.min_count;
                                    _this.goodsSku.buyNum = _this.goodsSku.default_no;
                                }
                                _this.goodsSku.buySpec = _this.buySpec;
                            } else {
                                goods.other_depot_goods = _this.goodsSku.other_depot_goods;
                                goods.spec = _this.goodsSku.spec;
                                goods.default_no = _this.goodsSku.default_no;
                                goods.buyNum = _this.goodsSku.buyNum;
                                goods.buySpec = _this.goodsSku.buySpec;
                                _this.goodsSku = goods;
                            }
                            _this.isOffsetGoods = false;
                            _this.isSelectRegions = false;
                            _this.actionType = type;
                            _this.buyGoodsRegions = res.data.data.all_region;
                            if (!_this.buyGoodsRegions.address_id) {
                                _this.buyGoodsRegions.address_id = _this.address_id;
                            } else {
                                _this.address_id = _this.buyGoodsRegions.address_id;
                            }
                            _this.getShopFee(_this.goods_id, _this.goodsSku.buyNum);
                            if (!_this.showAddCart) _this.showAddCart = true;
                        } else {
                            promptModule.showPrompt({ msg: res.data.msg, type: 'err' });
                        }
                    }
                });
            });
        },
        getBuyShopFee: function getBuyShopFee(data) {
            this.getShopFee(data.goods_id, data.num);
        },
        getShopFee: function getShopFee(id, num) {
            var _this = this;
            _this.Post(_this.api().shop_fee, {
                is_store: 0,
                goods_num: num,
                goods_id: id,
                address_id: _this.address_id
            }, function (res) {
                if (res.data.code == 0) {
                    _this.fee = res.data.data;
                }
            });
        },
        closeMask: function closeMask() {
            this.showAddCart = false;
        },
        selectBuyDepot: function selectBuyDepot(goods_id) {
            this.goods_id = goods_id;
            this.isSelectRegions = false;
            this.getGoodsSku(this.actionType);
        },
        changeCartNum: function changeCartNum(count) {
            //this._count = count;
            utilModule.refreshCart();
        },
        ok: function ok(data) {
            var _this = this;
            loadingModule.show({ msg: '请稍候...' });
            _this.buyGoods = data.goods;
            _this.buySpec = data.spec;
            if (_this.actionType == 2) {
                _this.buy();
            } else {
                _this.shopBuy();
            }
        },
        shopBuy: function shopBuy() {
            var _this = this;
            _this.Post(_this.api().shop_buy, {
                goods_id: _this.buyGoods.id,
                goods_num: _this.buyGoods.buyNum,
                spec_type: _this.buySpec.type,
                spec_stock: _this.buySpec.stock,
                address_id: _this.address_id,
                tax_region_id: _this.buyGoods.tax_region_id
            }, function (res) {
                loadingModule.cancel(function (ret) {
                    var result = ret.result;
                    if (result == "dismiss") {
                        if (res.data.code == 0) {
                            var count = res.data.data._count;
                            _this.changeCartNum(count);
                            _this.closeMask();
                        } else {
                            promptModule.showPrompt({ msg: res.data.msg, type: "err" });
                        }
                    }
                });
            });
        },
        buy: function buy() {
            var _this = this;
            _this.Post(_this.api().buy_now, {
                goods_id: _this.buyGoods.id,
                goods_num: _this.buyGoods.buyNum,
                spec_type: _this.buySpec.type,
                spec_stock: _this.buySpec.stock,
                type: 'quick',
                address_id: _this.address_id
            }, function (res) {
                loadingModule.cancel(function (ret) {
                    var result = ret.result;
                    if (result == "dismiss") {
                        if (res.data.code == 0) {
                            _this.closeMask();
                            _this.jumpTo2('order/confirmOrder', '', { type: 'quick', address_id: _this.address_id });
                        } else {
                            promptModule.showPrompt({ msg: res.data.msg, type: "err" });
                        }
                    }
                });
            });
        },
        resetSpecs: function resetSpecs(datas) {
            var _this = this;
            var specs = [];
            if (datas != '' && datas.length > 0) {
                if (datas && datas.length > 0) {
                    for (var i = 0; i < datas.length; i++) {
                        var data = datas[i];
                        data.title = data.spec;
                        if (i == 0) {
                            data.checked = true;
                            _this.buySpec = data;
                        }
                        specs.push(data);
                    }
                }
            } else {
                var spec = {};
                spec.type = 0;
                spec.stock = _this.goodsSku.stock;
                _this.buySpec = spec;
            }
            return specs;
        },
        resetDepots: function resetDepots(datas) {
            var _this = this;
            var depots = [];
            if (datas && datas.length > 0) {
                for (var i = 0; i < datas.length; i++) {
                    var data = datas[i];
                    if (data.goods_id != 0) {
                        if (data.stock == 0) {
                            data.title = data.depot_name + '(缺货)';
                            data.style = _this.enableStyles;
                            if (data.plan_achieved_at) {
                                data.hint = data.plan_achieved_at;
                            }
                        } else {
                            data.title = data.depot_name;
                        }
                        if (_this.depot_id == data.depot_id) {
                            data.checked = true;
                            _this.is_optional = data.is_optional;
                        }
                        depots.push(data);
                    }
                }
            }
            return depots;
        }
    },
    created: function created() {
        var self = this;
        self.getTitleHeight(self);
        self.getStatusBarHeight(self);
        self.getWeexHeight(self);
        self.headTitle = self.GetUrlPara(weex.config.bundleUrl, 'title');
        self.brandId = self.GetUrlPara(weex.config.bundleUrl, 'brandId');
        self.getCartNum();
        self.getTabData(self.index);
        self.getBanner();
        if (weex.config.env.platform.toLowerCase() === 'android') {
            utilModule.eventListener(function () {});
            var globalEvent = weex.requireModule('globalEvent');
            globalEvent.addEventListener("geolocation", function (e) {
                if (self.showAddCart) {
                    self.showAddCart = false;
                } else {
                    self.popBar();
                }
            });
        }
        // this.fetch(this.index);
        event.onmessage = function (event) {
            if (!event.data) {
                return;
            }
            switch (event.data) {
                case self.eventBusTag().RESET_CART_NUM:
                    self.getCartNum();
                    break;
            }
        };
        chooseAddress.onmessage = function (event) {
            if (!event.data) {
                return;
            }
            if (event.data == self.eventBusTag().RESET_ADDRESS) {
                self.address_id = '';
                if (self.showAddCart) {
                    self.isSelectRegions = true;
                    self.getGoodsSku(self.actionType);
                }
            }
        };
        goodsAddressEvent.onmessage = function (event) {
            if (!event.data || !self.goodsSku) {
                return;
            }
            self.address_id = event.data.addressId;
            if (self.goods_id != event.data.goodsId) {
                self.isOffsetGoods = true;
            }
            self.goods_id = event.data.goodsId;
            if (self.showAddCart) {
                self.isSelectRegions = true;
                self.getGoodsSku(self.actionType);
            }
        };
    }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(9);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(10)
)

/* script */
__vue_exports__ = __webpack_require__(11)

/* template */
var __vue_template__ = __webpack_require__(16)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "F:\\weex\\weex_develop\\abm_dev_weex\\abm-weexSource\\node_modules\\weex-ui\\packages\\wxc-tab-page\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-674248d6"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-tab-page": {
    "width": "750"
  },
  "tab-title-list": {
    "flexDirection": "row"
  },
  "title-item": {
    "justifyContent": "center",
    "alignItems": "center",
    "borderBottomStyle": "solid"
  },
  "border-bottom": {
    "position": "absolute",
    "bottom": 0
  },
  "tab-page-wrap": {
    "width": "750",
    "overflow": "hidden"
  },
  "tab-container": {
    "flex": 1,
    "flexDirection": "row",
    "position": "absolute"
  },
  "tab-text": {
    "lines": 1,
    "textOverflow": "ellipsis"
  }
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _bindEnv = __webpack_require__(15);

var _bindEnv2 = _interopRequireDefault(_bindEnv);

var _indexWeex = __webpack_require__(1);

var _indexWeex2 = _interopRequireDefault(_indexWeex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var dom = weex.requireModule('dom');
var animation = weex.requireModule('animation');
var swipeBack = weex.requireModule('swipeBack');

exports.default = {
  props: {
    tabTitles: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    panDist: {
      type: Number,
      default: 200
    },
    spmC: {
      type: [String, Number],
      default: ''
    },
    titleUseSlot: {
      type: Boolean,
      default: false
    },
    tabStyles: {
      type: Object,
      default: function _default() {
        return {
          bgColor: '#FFFFFF',
          titleColor: '#666666',
          activeTitleColor: '#3D3D3D',
          activeBgColor: '#FFFFFF',
          isActiveTitleBold: true,
          iconWidth: 70,
          iconHeight: 70,
          width: 160,
          height: 120,
          fontSize: 24,
          hasActiveBottom: true,
          activeBottomColor: '#FFC900',
          activeBottomWidth: 120,
          activeBottomHeight: 6,
          textPaddingLeft: 10,
          textPaddingRight: 10,
          leftOffset: 0
        };
      }
    },
    titleType: {
      type: String,
      default: 'icon'
    },
    tabPageHeight: {
      type: [String, Number],
      default: 1334
    },
    isTabView: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [Number, String],
      default: 300
    },
    timingFunction: {
      type: String,
      default: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    },
    wrapBgColor: {
      type: String,
      default: '#f2f3f4'
    }
  },
  data: function data() {
    return {
      currentPage: 0,
      gesToken: 0,
      isMoving: false,
      startTime: 0,
      deltaX: 0,
      translateX: 0
    };
  },
  created: function created() {
    var titleType = this.titleType,
        tabStyles = this.tabStyles;

    if (titleType === 'iconFont' && tabStyles.iconFontUrl) {
      dom.addRule('fontFace', {
        'fontFamily': "wxcIconFont",
        'src': 'url(' + tabStyles.iconFontUrl + ')'
      });
    }
  },
  mounted: function mounted() {
    if (swipeBack && swipeBack.forbidSwipeBack) {
      swipeBack.forbidSwipeBack(true);
    }
    if (_bindEnv2.default.supportsEBForIos() && this.isTabView) {
      var tabPageEl = this.$refs['tab-page-wrap'];
      _indexWeex2.default.prepare && _indexWeex2.default.prepare({
        anchor: tabPageEl.ref,
        eventType: 'pan'
      });
    }
  },

  methods: {
    next: function next() {
      var page = this.currentPage;
      if (page < this.tabTitles.length - 1) {
        page++;
      }
      this.setPage(page);
    },
    prev: function prev() {
      var page = this.currentPage;
      if (page > 0) {
        page--;
      }
      this.setPage(page);
    },
    startHandler: function startHandler() {
      if (_bindEnv2.default.supportsEBForIos() && this.isTabView) {
        this.bindExp(this.$refs['tab-page-wrap']);
      }
    },
    bindExp: function bindExp(element) {
      var _this = this;

      if (element && element.ref) {

        if (this.isMoving && this.gesToken !== 0) {
          _indexWeex2.default.unbind({
            eventType: 'pan',
            token: this.gesToken
          });
          this.gesToken = 0;
          return;
        }

        var tabElement = this.$refs['tab-container'];
        var currentPage = this.currentPage,
            panDist = this.panDist;

        var dist = currentPage * 750;

        // x-dist
        var props = [{
          element: tabElement.ref,
          property: 'transform.translateX',
          expression: 'x-' + dist
        }];

        var gesTokenObj = _indexWeex2.default.bind({
          anchor: element.ref,
          eventType: 'pan',
          props: props
        }, function (e) {
          var deltaX = e.deltaX,
              state = e.state;

          if (state === 'end') {
            if (deltaX < -panDist) {
              _this.next();
            } else if (deltaX > panDist) {
              _this.prev();
            } else {
              _this.setPage(currentPage);
            }
          }
        });
        this.gesToken = gesTokenObj.token;
      }
    },
    setPage: function setPage(page) {
      var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var animated = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (!this.isTabView) {
        this.jumpOut(url);
        return;
      }
      if (this.isMoving === true) {
        return;
      }
      this.isMoving = true;
      var previousPage = this.currentPage;
      var currentTabEl = this.$refs['wxc-tab-title-' + page][0];
      var width = this.tabStyles.width;

      var appearNum = parseInt(750 / width);
      var tabsNum = this.tabTitles.length;
      var offset = page > appearNum ? -(750 - width) / 2 : -width * 2;

      if (appearNum < tabsNum) {
        (previousPage > appearNum || page > 1) && dom.scrollToElement(currentTabEl, {
          offset: offset, animated: animated
        });

        page <= 1 && previousPage > page && dom.scrollToElement(currentTabEl, {
          offset: -width * page,
          animated: animated
        });
      }

      this.isMoving = false;
      this.currentPage = page;
      this._animateTransformX(page, animated);
      this.$emit('wxcTabPageCurrentTabSelected', { page: page });
    },
    jumpOut: function jumpOut(url) {
      url && _utils2.default.goToH5Page(url);
    },
    _animateTransformX: function _animateTransformX(page, animated) {
      var duration = this.duration,
          timingFunction = this.timingFunction;

      var computedDur = animated ? duration : 0.00001;
      var containerEl = this.$refs['tab-container'];
      var dist = page * 750;
      animation.transition(containerEl, {
        styles: {
          transform: 'translateX(' + -dist + 'px)'
        },
        duration: computedDur,
        timingFunction: timingFunction,
        delay: 0
      }, function () {});
    }
  }
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var required = __webpack_require__(13)
  , qs = __webpack_require__(14)
  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i
  , slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [
  ['#', 'hash'],                        // Extract from the back.
  ['?', 'query'],                       // Extract from the back.
  ['/', 'pathname'],                    // Extract from the back.
  ['@', 'auth', 1],                     // Extract from the front.
  [NaN, 'host', undefined, 1, 1],       // Set left over value.
  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @api public
 */
function lolcation(loc) {
  loc = loc || global.location || {};

  var finaldestination = {}
    , type = typeof loc
    , key;

  if ('blob:' === loc.protocol) {
    finaldestination = new URL(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new URL(loc, {});
    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @api private
 */
function extractProtocol(address) {
  var match = protocolre.exec(address);

  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @api private
 */
function resolve(relative, base) {
  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
    , i = path.length
    , last = path[i - 1]
    , unshift = false
    , up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} location Location defaults for relative paths.
 * @param {Boolean|Function} parser Parser for the query string.
 * @api public
 */
function URL(address, location, parser) {
  if (!(this instanceof URL)) {
    return new URL(address, location, parser);
  }

  var relative, extracted, parse, instruction, index, key
    , instructions = rules.slice()
    , type = typeof location
    , url = this
    , i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[2] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];
    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if ((index = parse.exec(address))) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (
      relative && instruction[3] ? location[key] || '' : ''
    );

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (
      relative
    && location.slashes
    && url.pathname.charAt(0) !== '/'
    && (url.pathname !== '' || location.pathname !== '')
  ) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL}
 * @api public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname +':'+ value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':'+ url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String}
 * @api public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query
    , url = this
    , protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':'+ url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

  if (url.hash) result += url.hash;

  return result;
}

URL.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
URL.extractProtocol = extractProtocol;
URL.location = lolcation;
URL.qs = qs;

module.exports = URL;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 21;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String} The decoded string.
 * @api private
 */
function decode(input) {
  return decodeURIComponent(input.replace(/\+/g, ' '));
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g
    , result = {}
    , part;

  //
  // Little nifty parsing hack, leverage the fact that RegExp.exec increments
  // the lastIndex property so we can continue executing this loop until we've
  // parsed all results.
  //
  for (;
    part = parser.exec(query);
    result[decode(part[1])] = decode(part[2])
  );

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = [];

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (var key in obj) {
    if (has.call(obj, key)) {
      pairs.push(encodeURIComponent(key) +'='+ encodeURIComponent(obj[key]));
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _indexWeex = __webpack_require__(1);

var _indexWeex2 = _interopRequireDefault(_indexWeex);

var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
 * Created by Tw93 on 18/03/22
 */
var BindEnv = {
  supportsEB: function supportsEB() {
    return _indexWeex2.default.isSupportBinding && !_index2.default.env.isWeb();
  },


  /**
   * 判断Android容器是否支持是否支持expressionBinding(处理方式很不一致)
   * @returns {boolean}
   */
  supportsEBForAndroid: function supportsEBForAndroid() {
    return _index2.default.env.isAndroid() && BindEnv.supportsEB();
  },


  /**
   * 判断IOS容器是否支持是否支持expressionBinding
   * @returns {boolean}
   */
  supportsEBForIos: function supportsEBForIos() {
    return _index2.default.env.isIOS() && BindEnv.supportsEB();
  }
};

exports.default = BindEnv;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wxc-tab-page"],
    style: {
      height: (_vm.tabPageHeight) + 'px',
      backgroundColor: _vm.wrapBgColor
    }
  }, [_c('scroller', {
    ref: "tab-title-list",
    staticClass: ["tab-title-list"],
    style: {
      backgroundColor: _vm.tabStyles.bgColor,
      height: (_vm.tabStyles.height) + 'px',
      paddingLeft: _vm.tabStyles.leftOffset + 'px'
    },
    attrs: {
      "showScrollbar": false,
      "scrollDirection": "horizontal",
      "dataSpm": _vm.spmC
    }
  }, _vm._l((_vm.tabTitles), function(v, index) {
    return _c('div', {
      key: index,
      ref: 'wxc-tab-title-' + index,
      refInFor: true,
      staticClass: ["title-item"],
      style: {
        width: _vm.tabStyles.width + 'px',
        height: _vm.tabStyles.height + 'px',
        backgroundColor: _vm.currentPage === index ? _vm.tabStyles.activeBgColor : _vm.tabStyles.bgColor
      },
      attrs: {
        "accessible": true,
        "ariaLabel": ("" + (v.title?v.title:'标签'+index))
      },
      on: {
        "click": function($event) {
          _vm.setPage(index, v.url)
        }
      }
    }, [(_vm.titleType === 'icon' && !_vm.titleUseSlot) ? _c('image', {
      style: {
        width: _vm.tabStyles.iconWidth + 'px',
        height: _vm.tabStyles.iconHeight + 'px'
      },
      attrs: {
        "src": _vm.currentPage === index ? v.activeIcon : v.icon
      }
    }) : _vm._e(), (_vm.titleType === 'iconFont' && v.codePoint && !_vm.titleUseSlot) ? _c('text', {
      staticClass: ["icon-font"],
      style: {
        fontFamily: 'wxcIconFont',
        fontSize: _vm.tabStyles.iconFontSize + 'px',
        color: _vm.currentPage === index ? _vm.tabStyles.activeIconFontColor : _vm.tabStyles.iconFontColor
      }
    }, [_vm._v(_vm._s(v.codePoint))]) : _vm._e(), (!_vm.titleUseSlot) ? _c('text', {
      staticClass: ["tab-text"],
      style: {
        fontSize: _vm.tabStyles.fontSize + 'px',
        fontWeight: (_vm.currentPage === index && _vm.tabStyles.isActiveTitleBold) ? 'bold' : 'normal',
        color: _vm.currentPage === index ? _vm.tabStyles.activeTitleColor : _vm.tabStyles.titleColor,
        paddingLeft: _vm.tabStyles.textPaddingLeft + 'px',
        paddingRight: _vm.tabStyles.textPaddingRight + 'px'
      }
    }, [_vm._v(_vm._s(v.title))]) : _vm._e(), (_vm.tabStyles.hasActiveBottom && !_vm.titleUseSlot) ? _c('div', {
      staticClass: ["border-bottom"],
      style: {
        width: _vm.tabStyles.activeBottomWidth + 'px',
        left: (_vm.tabStyles.width - _vm.tabStyles.activeBottomWidth) / 2 + 'px',
        height: _vm.tabStyles.activeBottomHeight + 'px',
        backgroundColor: _vm.currentPage === index ? _vm.tabStyles.activeBottomColor : 'transparent'
      }
    }) : _vm._e(), (_vm.titleUseSlot) ? _vm._t(("tab-title-" + index)) : _vm._e()], 2)
  })), _c('div', {
    ref: "tab-page-wrap",
    staticClass: ["tab-page-wrap"],
    style: {
      height: (_vm.tabPageHeight - _vm.tabStyles.height) + 'px'
    },
    on: {
      "horizontalpan": _vm.startHandler
    }
  }, [_c('div', {
    ref: "tab-container",
    staticClass: ["tab-container"]
  }, [_vm._t("default")], 2)])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = {
  "line": {
    "width": "750",
    "height": "1.4",
    "backgroundColor": "#e2e2e2"
  }
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["line"]
  })
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(21)
)

/* script */
__vue_exports__ = __webpack_require__(22)

/* template */
var __vue_template__ = __webpack_require__(40)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "F:\\weex\\weex_develop\\abm_dev_weex\\abm-weexSource\\src\\components\\newBuyGoodsPop.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-426480d2"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = {
  "goods-status": {
    "justifyContent": "flex-end",
    "flexDirection": "row",
    "marginLeft": "40",
    "marginTop": "6"
  },
  "content": {
    "flexDirection": "column",
    "width": "750",
    "position": "relative"
  },
  "goods-info": {
    "top": "0",
    "backgroundColor": "#FFFFFF"
  },
  "buy-price": {
    "fontSize": "26",
    "color": "#CF1126",
    "marginTop": "20"
  },
  "retail-prices": {
    "height": "35"
  },
  "retail-price": {
    "lineHeight": "35",
    "fontSize": "26",
    "color": "#666666"
  },
  "retail-disused-price": {
    "lineHeight": "35",
    "fontSize": "26",
    "color": "#666666",
    "textDecoration": "line-through",
    "textDecorationColor": "#666666"
  },
  "depot": {
    "fontSize": "24",
    "color": "#333333",
    "marginTop": "10"
  },
  "top": {
    "height": "190",
    "top": "16",
    "flexDirection": "row",
    "paddingLeft": "240",
    "marginBottom": "60"
  },
  "close": {
    "position": "absolute",
    "top": "10",
    "right": "15"
  },
  "cancel": {
    "width": "50",
    "height": "50",
    "marginTop": "15",
    "marginRight": "15",
    "marginBottom": "15",
    "marginLeft": "15"
  },
  "cover": {
    "width": "190",
    "height": "190",
    "borderWidth": "2",
    "borderColor": "#e2e2e2",
    "backgroundColor": "#FFFFFF",
    "position": "absolute",
    "top": "16",
    "left": "32"
  },
  "title": {
    "fontSize": "24",
    "color": "#666666",
    "marginLeft": "32"
  },
  "goods_price": {
    "height": "60",
    "marginLeft": "10",
    "flexDirection": "row",
    "justifyContent": "flex-start"
  },
  "finish_bt": {
    "width": "750",
    "height": "90",
    "fontSize": "30",
    "color": "#FFFFFF",
    "lineHeight": "90",
    "textAlign": "center",
    "backgroundColor": "#ffffff"
  },
  "finish": {
    "width": "750",
    "height": "90",
    "fontSize": "30",
    "color": "#FFFFFF",
    "lineHeight": "90",
    "textAlign": "center"
  },
  "taxes": {
    "fontSize": "26",
    "color": "#666666",
    "marginLeft": "20"
  },
  "num": {
    "width": "100",
    "fontSize": "24",
    "color": "#666666",
    "height": "50",
    "opacity": 0.7,
    "backgroundColor": "#F6F6F6",
    "textAlign": "center",
    "lineHeight": "50",
    "marginRight": "10"
  },
  "num-change": {
    "width": "25",
    "height": "25"
  },
  "border_left": {
    "borderBottomLeftRadius": "5",
    "borderTopLeftRadius": "5"
  },
  "border_right": {
    "borderBottomRightRadius": "5",
    "borderTopRightRadius": "5"
  },
  "num-change_bt": {
    "width": "50",
    "height": "50",
    "backgroundColor": "#F6F6F6",
    "marginRight": "10",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "status": {
    "borderRadius": "4",
    "lineHeight": "34",
    "fontSize": "20",
    "color": "#FFFFFF",
    "textAlign": "center"
  },
  "address-title": {
    "width": "89",
    "marginLeft": "36",
    "lineHeight": "36",
    "fontSize": "28",
    "color": "#333333"
  },
  "address-icon": {
    "width": "18",
    "height": "22"
  },
  "address-text": {
    "flex": 1,
    "height": "30",
    "lines": 1,
    "marginRight": "10",
    "textOverflow": "ellipsis",
    "fontSize": "22",
    "color": "#666666",
    "lineHeight": "34",
    "marginLeft": "10"
  },
  "next": {
    "width": "15",
    "height": "30"
  }
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _gridSelect = __webpack_require__(23);

var _gridSelect2 = _interopRequireDefault(_gridSelect);

var _WxcMask = __webpack_require__(31);

var _WxcMask2 = _interopRequireDefault(_WxcMask);

var _line = __webpack_require__(2);

var _line2 = _interopRequireDefault(_line);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loadingModule = weex.requireModule('loadingModule'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var promptModule = weex.requireModule('promptModule');
exports.default = {
    components: { line: _line2.default, WxcMask: _WxcMask2.default, WxcGridSelect: _gridSelect2.default },
    props: {
        goods: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        fee: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        regions: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        is_optional: {
            type: Number,
            default: -1
        },
        customStylesTest: {
            default: {
                lineSpacing: '15px',
                color: '#666666',
                width: 'auto',
                height: '50px',
                icon: '',
                depotName: '',
                borderColor: '#FFFFFFFF',
                checkedBorderColor: '#FFFFFFFF',
                checkedColor: '#FFF',
                disabledColor: '#FF7D7D7D',
                backgroundColor: '#FFF6F6F6',
                checkedBackgroundColor: '#CF1126'
            }
        }
    },
    data: function data() {
        return {
            lastTimestamp: 0,
            keyBoardShow: false,
            isIphoneX: false
        };
    },


    methods: {
        close: function close() {
            this.$emit('close', false);
        },
        minus: function minus() {
            this.checkCount('minus', parseInt(this.goods.buyNum) - 1);
        },
        plus: function plus() {
            this.checkCount('plus', parseInt(this.goods.buyNum) + 1);
        },
        closeKeyboard: function closeKeyboard(e) {
            var _this = this;
            var value = e.value;
            var input = _this.$refs.goodsCount;
            if (value) {
                if (value < _this.goods.default_no) {
                    promptModule.showPrompt({ msg: '该商品最少购买' + _this.goods.default_no + '件', type: 'prompt' });
                    if (input) {
                        _this.goods.buyNum = parseInt(_this.goods.default_no);
                        input.setDefaultValue(_this.goods.buyNum);
                        _this.$emit('getShopFee', { goods_id: _this.goods.id, buyNum: _this.goods.buyNum });
                    }
                } else {
                    _this.keyBoardShow = true;
                    this.checkCount('close', value);
                }
            } else {
                if (input) {
                    promptModule.showPrompt({ msg: '购买数量不能为空', type: 'prompt' });
                    _this.goods.buyNum = parseInt(_this.goods.default_no);
                    input.setDefaultValue(_this.goods.buyNum);
                    _this.$emit('getShopFee', { goods_id: _this.goods.id, buyNum: _this.goods.buyNum });
                }
            }
        },
        selectDepot: function selectDepot(res, _ref) {
            var selectIndex = _ref.selectIndex,
                checked = _ref.checked,
                checkedList = _ref.checkedList;

            var depot = this.goods.other_depot_goods[selectIndex];
            this.$emit('selectDepot', depot.goods_id);
        },
        selectSpec: function selectSpec(res, _ref2) {
            var selectIndex = _ref2.selectIndex,
                checked = _ref2.checked,
                checkedList = _ref2.checkedList;

            var spec = this.goods.spec[selectIndex];
            var input = this.$refs.goodsCount;
            if (input) {
                this.goods.default_no = spec.min_count;
                this.goods.buyNum = spec.min_count;
                this.goods.buySpec = spec;
                input.setDefaultValue(this.goods.buyNum);
                this.$emit('getShopFee', { goods_id: this.goods.id, num: this.goods.buyNum });
            }
        },
        changeAddress: function changeAddress() {
            if (this.regions) {
                this.jumpTo2('address/order_address', '', { address_id: this.regions.address_id, type: 'list', from: '1', goods_id: this.goods.id });
            } else {
                this.jumpTo2('address/order_address', '', { address_id: 0, type: 'list', from: 1, goods_id: this.goods.id });
            }
        },
        checkCount: function checkCount(type, value) {
            var _this = this;
            var input = _this.$refs.goodsCount;
            var count = 0;
            if (type === 'minus') {
                if (value < 0) {
                    return;
                }
                count = value;
            } else if (type === 'plus') {
                count = value;
            } else if (type === 'close') {
                count = value;
            }
            loadingModule.show({ msg: '' });
            _this.Get(_this.api().count_check, {
                goods_num: count,
                goods_id: _this.goods.id,
                spec_stock: _this.goods.buySpec.stock
            }, function (res) {
                loadingModule.cancel(function (ret) {
                    var result = ret.result;
                    if (result == 'dismiss') {
                        if (res.data.code == '0') {
                            _this.goods.buyNum = count;
                            _this.$emit('getShopFee', { goods_id: _this.goods.id, num: _this.goods.buyNum });
                            if (input) input.setDefaultValue(_this.goods.buyNum);
                        } else if (res.data.code == 8313 || res.data.code == 7005) {
                            if (type === 'close') if (input) input.setDefaultValue(_this.goods.buyNum);
                            promptModule.showPrompt({ msg: res.data.msg, type: 'err' });
                        } else {
                            promptModule.showPrompt({ msg: res.data.msg, type: 'err' });
                        }
                        _this.keyBoardShow = false;
                    }
                });
            });
        },
        ok: function ok(event) {
            var _this = this;
            if (_this.keyBoardShow) return;
            if (event.timestamp - this.lastTimestamp < 2000) return;
            this.lastTimestamp = event.timestamp;
            this.$emit('ok', { goods: _this.goods, spec: _this.goods.buySpec });
        }
    },

    mounted: function mounted() {
        //vue生命周期中渲染时候$refs要能获取到，所以要在mounted时候moveTop()
        var _this = this;
        _this.iPhoneX(_this);
        if (_this.goods.message && _this.goods.canbuy != 0) {
            promptModule.showPrompt({ msg: _this.goods.message, type: 'prompt' });
        }
        if (!_this.regions) {
            _this.regions = {};
        }
    }
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(24)
)

/* script */
__vue_exports__ = __webpack_require__(25)

/* template */
var __vue_template__ = __webpack_require__(30)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "F:\\weex\\weex_develop\\abm_dev_weex\\abm-weexSource\\src\\components\\gridSelect.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-408d7ab3"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = {
  "grid-select": {
    "flexDirection": "row",
    "width": "750",
    "flexWrap": "wrap"
  }
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _option = __webpack_require__(26);

var _option2 = _interopRequireDefault(_option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { Option: _option2.default },
    props: {
        // 标识, 当界面展示多个grid, 防止v-for :key重复
        id: {
            type: String,
            default: 'one'
        },
        // 列数
        cols: {
            type: Number,
            default: 4
        },
        // 是否单选
        single: {
            type: Boolean,
            default: false
        },
        // 数据
        list: {
            type: Array,
            default: function _default() {
                return [];
            }
        },

        top: {
            type: Number,
            default: 10
        },

        left: {
            type: Number,
            default: 32
        },

        right: {
            type: Number,
            default: 32
        },
        // 选择个数限制
        limit: {
            type: Number
        },
        // 用户自定义样式，用于个性化设置option样式
        customStyles: {
            type: Object,
            default: function _default() {
                return {};
            }
        }
    },
    data: function data() {
        return {
            dList: this.initList(),
            singleIndex: this.getSingleIndex()
        };
    },

    computed: {
        cHackList: function cHackList() {
            var list = this.list,
                cols = this.cols;

            var remainder = list.length % cols;
            var len = remainder ? cols - remainder : 0;
            return Array.apply(null, { length: len });
        }
    },
    watch: {
        list: function list() {
            this.dList = this.initList();
        }
    },
    created: function created() {
        // 行间距
        this.lineSpacing = this.customStyles.lineSpacing || '12px';
    },

    methods: {
        onSelect: function onSelect(index) {
            var _this = this;
            var single = _this.single;
            if (single && index == _this.singleIndex) {
                return;
            } else {
                var checked = this.dList[index].checked;
                if (this.limit <= this.checkedCount && !checked) {
                    this.$emit('overLimit', this.limit);
                } else {
                    this.updateList(index);
                    this.$emit('select', {
                        selectIndex: index,
                        checked: !checked,
                        checkedList: this.dList.filter(function (item) {
                            return item.checked;
                        })
                    });
                }
            }
        },
        clickDisabled: function clickDisabled(index) {
            this.$emit('clickEnable', {
                selectIndex: index,
                checkedList: this.dList.filter(function (item) {
                    return item.checked;
                })
            });
        },
        initList: function initList() {
            var _this = this;
            var single = _this.single;
            var checkedCount = 0;
            _this.list = this.setStyle(_this.list);
            var dList = _this.list.map(function (item, i) {
                var checked = item.checked,
                    disabled = item.disabled;

                disabled = !!disabled;
                // disabled为true时认为checked无效，同时单选模式下只认为第一个checked为true的为有效值
                checked = !disabled && !!checked && (!single || checkedCount === 0);
                if (item.checked) {
                    checkedCount += 1;
                }
                return _extends({}, item, {
                    checked: checked,
                    disabled: disabled
                });
            });
            if (single) {
                dList.forEach(function (item, index) {
                    if (item.checked) {
                        _this.singleIndex = index;
                    }
                });
            }
            _this.checkedCount = checkedCount;
            return dList;
        },
        setStyle: function setStyle(datas) {
            var _this = this;
            datas.forEach(function (item, i) {
                if (!item.style) {
                    item.style = _this.customStyles;
                }
            });
            return datas;
        },
        getSingleIndex: function getSingleIndex() {
            var _this = this;
            var single = _this.single;
            var index = 0;
            if (single) {
                _this.list.forEach(function (item, i) {
                    if (item.checked) {
                        index = i;
                    }
                });
            }
            return index;
        },
        updateList: function updateList(index) {
            var _this = this;
            var single = _this.single;
            var checkedCount = 0;
            _this.dList = _this.dList.map(function (item, i) {
                if (single) {
                    item.checked = index === i && !item.checked;
                } else {
                    if (i === index) item.checked = !item.checked;
                }
                if (item.checked) {
                    if (i != 'undefined') {
                        _this.singleIndex = i;
                    }
                    checkedCount += 1;
                }
                return item;
            });
            _this.checkedCount = checkedCount;
        }
    }
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(27)
)

/* script */
__vue_exports__ = __webpack_require__(28)

/* template */
var __vue_template__ = __webpack_require__(29)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "F:\\weex\\weex_develop\\abm_dev_weex\\abm-weexSource\\src\\components\\option.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-df533374"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = {
  "grid-option": {
    "justifyContent": "center",
    "borderRadius": "8",
    "borderWidth": "2",
    "paddingLeft": "6",
    "paddingRight": "6"
  },
  "text-title": {
    "lineHeight": "30",
    "paddingLeft": "20",
    "paddingRight": "20",
    "textAlign": "center",
    "fontSize": "22"
  },
  "text-hint": {
    "lineHeight": "30",
    "textOverflow": "ellipsis",
    "paddingLeft": "20",
    "paddingRight": "20",
    "textAlign": "center",
    "fontSize": "20",
    "color": "#666666"
  },
  "image-checked": {
    "position": "absolute",
    "right": 0,
    "bottom": 0,
    "width": "38",
    "height": "34"
  }
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    props: {
        index: {
            type: Number,
            default: -1
        },
        // 是否选中
        checked: {
            type: Boolean,
            default: false
        },
        // 是否可选
        disabled: {
            type: Boolean,
            default: false
        },
        // 标题
        title: {
            type: String,
            default: ''
        },
        //提示信息
        hint: {
            type: String,
            default: ''
        },
        height: {
            type: String,
            default: '72px'
        },
        // 默认 x
        icon: {
            type: String,
            default: 'https://gw.alicdn.com/tfs/TB1IAByhgMPMeJjy1XdXXasrXXa-38-34.png'
        },
        // 正常状态文字色值
        color: {
            type: String,
            default: '#3d3d3d'
        },
        // 选中状态文字色值
        checkedColor: {
            type: String,
            default: '#3d3d3d'
        },
        // 不可选状态文字色值
        disabledColor: {
            type: String,
            default: '#9b9b9b'
        },
        // 正常状态边框色值
        borderColor: {
            type: String,
            default: 'transparent'
        },
        // 选中状态边框色值
        checkedBorderColor: {
            type: String,
            default: '#ffb200'
        },
        // 不可选状态边框色值
        disabledBorderColor: {
            type: String,
            default: 'transparent'
        },
        // 正常状态背景色值
        backgroundColor: {
            type: String,
            default: '#f6f6f6'
        },
        // 选中状态背景色值
        checkedBackgroundColor: {
            type: String,
            default: '#ffffff'
        },
        // 不可选状态背景色值
        disabledBackgroundColor: {
            type: String,
            default: '#f6f6f6'
        }
    },
    computed: {
        cWrapperStyle: function cWrapperStyle() {
            var checked = this.checked,
                disabled = this.disabled,
                width = this.width,
                height = this.height,
                borderColor = this.borderColor,
                checkedBorderColor = this.checkedBorderColor,
                disabledBorderColor = this.disabledBorderColor,
                backgroundColor = this.backgroundColor,
                checkedBackgroundColor = this.checkedBackgroundColor,
                disabledBackgroundColor = this.disabledBackgroundColor;

            return {
                width: width,
                height: height,
                borderColor: disabled ? disabledBorderColor : checked ? checkedBorderColor : borderColor,
                backgroundColor: disabled ? disabledBackgroundColor : checked ? checkedBackgroundColor : backgroundColor
            };
        },
        cTitleStyle: function cTitleStyle() {
            var checked = this.checked,
                disabled = this.disabled,
                color = this.color,
                checkedColor = this.checkedColor,
                disabledColor = this.disabledColor;

            return {
                color: disabled ? disabledColor : checked ? checkedColor : color
            };
        }
    },
    methods: {
        onClick: function onClick() {
            if (!this.disabled) {
                this.$emit('select', this.index);
            } else {
                this.$emit('selectDisabled', this.index);
            }
        }
    }
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.title) ? _c('div', {
    staticClass: ["grid-option"],
    style: _vm.cWrapperStyle,
    attrs: {
      "accessible": true,
      "ariaLabel": (_vm.title + "," + (_vm.checked?'已选中':'未选中'))
    },
    on: {
      "click": _vm.onClick
    }
  }, [(_vm.title) ? _c('text', {
    staticClass: ["text-title"],
    style: _vm.cTitleStyle
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), (_vm.checked && _vm.icon) ? _c('image', {
    staticClass: ["image-checked"],
    attrs: {
      "src": _vm.icon
    }
  }) : _vm._e()]) : _vm._e(), (_vm.hint) ? _c('text', {
    staticClass: ["text-hint"]
  }, [_vm._v(_vm._s(_vm.hint))]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["grid-select"],
    style: {
      paddingLeft: _vm.left + 'px',
      paddingRight: _vm.right + 'px'
    }
  }, [_vm._l((_vm.dList), function(item, index) {
    return _c('option', _vm._b({
      key: index,
      style: {
        marginTop: _vm.top + 'px',
        marginRight: 15 + 'px'
      },
      attrs: {
        "index": index
      },
      on: {
        "select": function($event) {
          _vm.onSelect(index)
        },
        "selectDisabled": function($event) {
          _vm.clickDisabled(index)
        }
      }
    }, 'option', Object.assign({}, item.style, item), false))
  }), _vm._l((_vm.cHackList), function(item, index) {
    return _c('option', _vm._b({
      key: _vm.id + index,
      style: {
        opacity: 0,
        marginTop: _vm.dList.length >= _vm.cols ? _vm.lineSpacing : null
      }
    }, 'option', Object.assign({}, _vm.customStyles, item), false))
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(32)
)

/* script */
__vue_exports__ = __webpack_require__(33)

/* template */
var __vue_template__ = __webpack_require__(39)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "F:\\weex\\weex_develop\\abm_dev_weex\\abm-weexSource\\src\\components\\WxcMask.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1950c48d"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "position": "fixed",
    "width": "750",
    "zIndex": 99999
  },
  "parent": {
    "width": "750",
    "position": "fixed",
    "left": 0,
    "top": 0,
    "bottom": 0,
    "backgroundColor": "rgba(0,0,0,0)",
    "right": 0
  },
  "wxc-mask": {
    "position": "fixed",
    "top": "300",
    "left": "60",
    "width": "702",
    "height": "800"
  },
  "mask-bottom": {
    "width": "100",
    "height": "100",
    "backgroundColor": "rgba(0,0,0,0)",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "mask-close-icon": {
    "width": "64",
    "height": "64"
  }
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcOverlay = __webpack_require__(34);

var _wxcOverlay2 = _interopRequireDefault(_wxcOverlay);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var animation = weex.requireModule('animation');
exports.default = {
    components: { WxcOverlay: _wxcOverlay2.default },
    props: {
        height: {
            type: [String, Number],
            default: 800
        },
        width: {
            type: [String, Number],
            default: 702
        },
        show: {
            type: Boolean,
            default: false
        },
        showClose: {
            type: Boolean,
            default: false
        },
        duration: {
            type: [String, Number],
            default: 300
        },
        hasOverlay: {
            type: Boolean,
            default: true
        },
        hasAnimation: {
            type: Boolean,
            default: true
        },
        timingFunction: {
            type: Array,
            default: function _default() {
                return ['ease-in', 'ease-out'];
            }
        },
        overlayCfg: {
            type: Object,
            default: function _default() {
                return {
                    hasAnimation: true,
                    timingFunction: ['ease-in', 'ease-out'],
                    canAutoClose: true,
                    duration: 300,
                    opacity: 0.6
                };
            }
        },
        borderRadius: {
            type: [String, Number],
            default: 0
        },
        overlayCanClose: {
            type: Boolean,
            default: true
        },
        maskBgColor: {
            type: String,
            default: '#ffffff'
        }
    },
    data: function data() {
        return {
            closeIcon: 'https://gw.alicdn.com/tfs/TB1qDJUpwMPMeJjy1XdXXasrXXa-64-64.png',
            maskTop: 264,
            opened: false
        };
    },
    computed: {
        mergeOverlayCfg: function mergeOverlayCfg() {
            return _extends({}, this.overlayCfg, {
                hasAnimation: this.hasAnimation
            });
        },
        maskStyle: function maskStyle() {
            var width = this.width,
                height = this.height,
                showClose = this.showClose,
                hasAnimation = this.hasAnimation,
                opened = this.opened;

            var newHeight = showClose ? height - 0 + 100 : height;
            var _weex$config$env = weex.config.env,
                deviceHeight = _weex$config$env.deviceHeight,
                deviceWidth = _weex$config$env.deviceWidth,
                platform = _weex$config$env.platform;

            var _deviceHeight = deviceHeight || 1334;
            var isWeb = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && platform.toLowerCase() === 'web';
            var navHeight = isWeb ? 0 : 130;
            var pageHeight = _deviceHeight / deviceWidth * 750 - navHeight;
            return {
                width: width + 'px',
                height: newHeight + 'px',
                left: (750 - width) / 2 + 'px',
                top: (pageHeight - height) / 2 + 'px',
                opacity: hasAnimation && !opened ? 0 : 1
            };
        },
        contentStyle: function contentStyle() {
            return {
                width: this.width + 'px',
                backgroundColor: this.maskBgColor,
                height: this.height + 'px',
                borderRadius: this.borderRadius + 'px'
            };
        },
        shouldShow: function shouldShow() {
            var _this = this;

            var show = this.show,
                hasAnimation = this.hasAnimation;

            hasAnimation && setTimeout(function () {
                _this.appearMask(show);
            }, 50);
            return show;
        }
    },

    methods: {
        closeIconClicked: function closeIconClicked() {
            this.appearMask(false);
        },
        wxcOverlayBodyClicking: function wxcOverlayBodyClicking() {
            if (this.hasAnimation) {
                this.appearMask(false);
                this.$emit('wxcOverlayBodyClicking', {});
            }
        },
        wxcOverlayBodyClicked: function wxcOverlayBodyClicked() {
            if (!this.hasAnimation) {
                this.appearMask(false);
                this.$emit('wxcOverlayBodyClicked', {});
            }
        },
        needEmit: function needEmit() {
            var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            this.opened = bool;
            !bool && this.$emit('wxcMaskSetHidden', {});
        },
        appearMask: function appearMask(bool) {
            var _this2 = this;

            var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.duration;
            var hasAnimation = this.hasAnimation,
                timingFunction = this.timingFunction;

            var maskEl = this.$refs['wxc-mask'];
            if (hasAnimation && maskEl) {
                animation.transition(maskEl, {
                    styles: {
                        opacity: bool ? 1 : 0
                    },
                    duration: duration,
                    timingFunction: timingFunction[bool ? 0 : 1],
                    delay: 0
                }, function () {
                    _this2.needEmit(bool);
                });
            } else {
                this.needEmit(bool);
            }
        }
    }
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(35);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(36)
)

/* script */
__vue_exports__ = __webpack_require__(37)

/* template */
var __vue_template__ = __webpack_require__(38)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "F:\\weex\\weex_develop\\abm_dev_weex\\abm-weexSource\\node_modules\\weex-ui\\packages\\wxc-overlay\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5dfe8b7d"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-overlay": {
    "width": "750",
    "position": "fixed",
    "left": 0,
    "top": 0,
    "bottom": 0,
    "right": 0
  }
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var animation = weex.requireModule('animation');
exports.default = {
  props: {
    show: {
      type: Boolean,
      default: true
    },
    hasAnimation: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [Number, String],
      default: 300
    },
    timingFunction: {
      type: Array,
      default: function _default() {
        return ['ease-in', 'ease-out'];
      }
    },
    opacity: {
      type: [Number, String],
      default: 0.6
    },
    canAutoClose: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    overlayStyle: function overlayStyle() {
      return {
        opacity: this.hasAnimation ? 0 : 1,
        backgroundColor: 'rgba(0, 0, 0,' + this.opacity + ')'
      };
    },
    shouldShow: function shouldShow() {
      var _this = this;

      var show = this.show,
          hasAnimation = this.hasAnimation;

      hasAnimation && setTimeout(function () {
        _this.appearOverlay(show);
      }, 50);
      return show;
    }
  },
  methods: {
    overlayClicked: function overlayClicked(e) {
      this.canAutoClose ? this.appearOverlay(false) : this.$emit('wxcOverlayBodyClicked', {});
    },
    appearOverlay: function appearOverlay(bool) {
      var _this2 = this;

      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.duration;
      var hasAnimation = this.hasAnimation,
          timingFunction = this.timingFunction,
          canAutoClose = this.canAutoClose;

      var needEmit = !bool && canAutoClose;
      needEmit && this.$emit('wxcOverlayBodyClicking', {});
      var overlayEl = this.$refs['wxc-overlay'];
      if (hasAnimation && overlayEl) {
        animation.transition(overlayEl, {
          styles: {
            opacity: bool ? 1 : 0
          },
          duration: duration,
          timingFunction: timingFunction[bool ? 0 : 1],
          delay: 0
        }, function () {
          needEmit && _this2.$emit('wxcOverlayBodyClicked', {});
        });
      } else {
        needEmit && this.$emit('wxcOverlayBodyClicked', {});
      }
    }
  }
};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.show) ? _c('div', {
    ref: "wxc-overlay",
    staticClass: ["wxc-overlay"],
    style: _vm.overlayStyle,
    attrs: {
      "hack": _vm.shouldShow
    },
    on: {
      "click": _vm.overlayClicked
    }
  }) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [(_vm.show) ? _c('wxc-overlay', _vm._b({
    attrs: {
      "show": _vm.show && _vm.hasOverlay,
      "canAutoClose": _vm.overlayCanClose
    },
    on: {
      "wxcOverlayBodyClicking": _vm.wxcOverlayBodyClicking,
      "wxcOverlayBodyClicked": _vm.wxcOverlayBodyClicked
    }
  }, 'wxc-overlay', _vm.mergeOverlayCfg, false)) : _vm._e(), (_vm.show) ? _c('div', {
    ref: "wxc-mask",
    staticClass: ["wxc-mask"],
    style: _vm.maskStyle,
    attrs: {
      "hack": _vm.shouldShow
    }
  }, [_c('div', {
    staticClass: ["parent"]
  }, [_vm._t("default")], 2), (_vm.showClose) ? _c('div', {
    staticClass: ["mask-bottom"],
    style: {
      width: _vm.width + 'px'
    },
    on: {
      "click": _vm.closeIconClicked
    }
  }, [_c('image', {
    staticClass: ["mask-close-icon"],
    attrs: {
      "src": _vm.closeIcon,
      "ariaLabel": "关闭"
    }
  })]) : _vm._e()]) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('wxc-mask', {
    ref: "wxcPopupGuide",
    attrs: {
      "borderRadius": "0",
      "duration": "200",
      "hasAnimation": true,
      "hasOverlay": true,
      "overlayCanClose": false,
      "showClose": false,
      "show": true
    }
  }, [_c('div', {
    style: {
      flex: 1
    },
    on: {
      "click": function($event) {
        _vm.close()
      }
    }
  }), _c('div', {
    staticClass: ["guide-content"]
  }, [_c('div', {
    staticClass: ["content"]
  }, [_c('div', {
    staticClass: ["goods-info"]
  }, [_c('div', {
    staticClass: ["top"]
  }, [_c('div', {
    style: {
      flexDirection: 'column',
      flex: 1
    }
  }, [_c('div', {
    style: {
      flex: 1
    }
  }), (_vm.goods.shareprice == 0 && _vm.goods.retail_tax != 'no_show') ? _c('text', {
    staticClass: ["buy-price"]
  }, [_vm._v(_vm._s(_vm.goods.retail_title) + " ¥" + _vm._s(_vm.goods.retail_price) + " (" + _vm._s(_vm.goods.retail_tax_title) + "¥" + _vm._s(_vm.goods.retail_tax) + ")")]) : _vm._e(), (_vm.goods.shareprice == 0 && _vm.goods.retail_tax == 'no_show') ? _c('text', {
    staticClass: ["buy-price"]
  }, [_vm._v(_vm._s(_vm.goods.retail_title) + " ¥" + _vm._s(_vm.goods.retail_price))]) : _vm._e(), (_vm.goods.shareprice != 0) ? _c('text', {
    staticClass: ["buy-price"]
  }, [_vm._v(_vm._s(_vm.goods.title) + " ¥" + _vm._s(_vm.goods.shareprice))]) : _vm._e(), _c('div', {
    staticClass: ["retail-prices"],
    style: {
      flexDirection: 'row',
      marginTop: 10 + 'px'
    }
  }, [_c('text', {
    staticClass: ["retail-price"]
  }, [_vm._v(_vm._s(_vm.goods.price_title) + "  ¥" + _vm._s(_vm.goods.price))]), _c('text', {
    staticClass: ["retail-price"]
  }, [_vm._v(" (")]), _c('text', {
    staticClass: ["retail-disused-price"]
  }, [_vm._v("¥" + _vm._s(_vm.goods.market_price))]), _c('text', {
    staticClass: ["retail-price"]
  }, [_vm._v(")")])]), _c('text', {
    staticClass: ["depot"]
  }, [_vm._v("已选择 " + _vm._s(_vm.goods.buySpec.spec) + "  " + _vm._s(_vm.goods.depot_name))])])]), _c('div', [(_vm.goods.spec && _vm.goods.spec.length > 0) ? _c('div', [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("请选择商品规格")]), _c('wxc-grid-select', {
    style: {
      marginBottom: 30 + 'px'
    },
    attrs: {
      "single": true,
      "left": 32,
      "right": 32,
      "top": 15,
      "cols": 4,
      "customStyles": _vm.customStylesTest,
      "list": _vm.goods.spec
    },
    on: {
      "select": function (params) { return _vm.selectSpec('res', params); }
    }
  })], 1) : _vm._e(), (_vm.goods.other_depot_goods && _vm.goods.other_depot_goods.length > 0) ? _c('div', [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("请选择发货仓库")]), _c('wxc-grid-select', {
    style: {
      marginBottom: 30 + 'px'
    },
    attrs: {
      "single": true,
      "left": 32,
      "right": 32,
      "top": 15,
      "cols": 4,
      "customStyles": _vm.customStylesTest,
      "list": _vm.goods.other_depot_goods
    },
    on: {
      "select": function (params) { return _vm.selectDepot('res', params); }
    }
  })], 1) : _vm._e(), _c('div', {
    style: {
      width: 750 + 'px',
      flexDirection: 'row',
      paddingBottom: 30 + 'px'
    }
  }, [_c('text', {
    staticClass: ["address-title"]
  }, [_vm._v("送至")]), _c('div', {
    style: {
      width: 625 + 'px',
      paddingRight: 36 + 'px'
    },
    on: {
      "click": function($event) {
        _vm.changeAddress()
      }
    }
  }, [_c('div', {
    style: {
      flexDirection: 'row',
      alignItems: 'center'
    }
  }, [_c('image', {
    staticClass: ["address-icon"],
    attrs: {
      "src": "http://img.abmau.com/abmau/11c5e26141448fa78e00a02414b5a879.png"
    }
  }), (_vm.regions && _vm.regions.full_address) ? _c('text', {
    staticClass: ["address-text"]
  }, [_vm._v(_vm._s(_vm.regions.full_address))]) : _vm._e(), (_vm.is_optional == 0 && (!_vm.regions || !_vm.regions.full_address) && _vm.regions.address_id) ? _c('text', {
    staticClass: ["address-text"]
  }, [_vm._v("当前发货仓库不支持配送您的收货地址")]) : _vm._e(), (_vm.is_optional == 0 && (!_vm.regions || !_vm.regions.full_address) && !_vm.regions.address_id) ? _c('text', {
    staticClass: ["address-text"]
  }, [_vm._v("当前发货仓库不支持配送您的默认地址")]) : _vm._e(), (_vm.is_optional != -1 && _vm.is_optional != 0 && (!_vm.regions || !_vm.regions.full_address) && !_vm.regions.address_id) ? _c('text', {
    staticClass: ["address-text"]
  }, [_vm._v("请添加收货地址")]) : _vm._e(), _c('image', {
    staticClass: ["next"],
    attrs: {
      "src": "http://img.abmau.com/abmau/197260145f13acf70e06fe37ad4ba0c8.png"
    }
  })])])]), _c('div', [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("请确定购买数量")]), _c('div', {
    style: {
      marginLeft: 32 + 'px',
      marginTop: 30 + 'px',
      marginBottom: 50 + 'px',
      flexDirection: 'row',
      alignItems: 'center'
    }
  }, [_c('div', {
    class: ['num-change_bt', 'border_left'],
    on: {
      "click": function($event) {
        _vm.minus()
      }
    }
  }, [_c('image', {
    staticClass: ["num-change"],
    attrs: {
      "src": "assets://ic_goods_details_minus"
    }
  })]), _c('edit', {
    ref: "goodsCount",
    staticClass: ["num"],
    attrs: {
      "value": _vm.goods.buyNum,
      "type": "integer",
      "returnKeyType": "done"
    },
    on: {
      "closeKeyboard": _vm.closeKeyboard
    }
  }), _c('div', {
    class: ['num-change_bt', 'border_right'],
    on: {
      "click": function($event) {
        _vm.plus()
      }
    }
  }, [_c('image', {
    staticClass: ["num-change"],
    attrs: {
      "src": "assets://ic_goods_details_plus"
    }
  })]), _c('div', {
    staticClass: ["goods-status"]
  }, [(_vm.goods.online_status != 0) ? _c('text', {
    staticClass: ["status"],
    style: {
      'background-color': '#CF1126',
      height: 34 + 'px',
      width: 68 + 'px'
    }
  }, [_vm._v("预热")]) : _vm._e(), (_vm.goods.stock >= _vm.goods.buySpec.stock) ? _c('div', [(_vm.goods.online_status == 0 && _vm.goods.buySpec.stock <= 0) ? _c('text', {
    staticClass: ["status"],
    style: {
      'background-color': '#e1e1e1',
      height: 34 + 'px',
      width: 34 + 'px'
    }
  }, [_vm._v("缺")]) : _vm._e(), (_vm.goods.online_status == 0 && _vm.goods.buySpec.stock > 0 && _vm.goods.buySpec.stock <= 100) ? _c('text', {
    staticClass: ["status"],
    style: {
      'background-color': '#FF916F',
      height: 34 + 'px',
      width: 34 + 'px'
    }
  }, [_vm._v("少")]) : _vm._e(), (_vm.goods.online_status == 0 && _vm.goods.buySpec.stock > 100) ? _c('text', {
    staticClass: ["status"],
    style: {
      'background-color': '#64D791',
      height: 34 + 'px',
      width: 34 + 'px'
    }
  }, [_vm._v("多")]) : _vm._e()]) : _vm._e(), (_vm.goods.stock < _vm.goods.buySpec.stock) ? _c('div', [(_vm.goods.online_status == 0 && _vm.goods.stock <= 0) ? _c('text', {
    staticClass: ["status"],
    style: {
      'background-color': '#e1e1e1',
      height: 34 + 'px',
      width: 34 + 'px'
    }
  }, [_vm._v("缺")]) : _vm._e(), (_vm.goods.online_status == 0 && _vm.goods.stock > 0 && _vm.goods.stock <= 100) ? _c('text', {
    staticClass: ["status"],
    style: {
      'background-color': '#FF916F',
      height: 34 + 'px',
      width: 34 + 'px'
    }
  }, [_vm._v("少")]) : _vm._e(), (_vm.goods.online_status == 0 && _vm.goods.stock > 100) ? _c('text', {
    staticClass: ["status"],
    style: {
      'background-color': '#64D791',
      height: 34 + 'px',
      width: 34 + 'px'
    }
  }, [_vm._v("多")]) : _vm._e()]) : _vm._e()])], 1)]), (_vm.fee) ? _c('div', {
    staticClass: ["goods_price"]
  }, [(_vm.fee.shipping_tax_fee == 'no_show') ? _c('text', {
    staticClass: ["taxes"]
  }, [_vm._v(_vm._s(_vm.fee.shipping_title) + " ¥" + _vm._s(_vm.fee.shipping_fee))]) : _vm._e(), (_vm.fee.shipping_tax_fee != 'no_show') ? _c('text', {
    staticClass: ["taxes"]
  }, [_vm._v(_vm._s(_vm.fee.shipping_title) + " ¥" + _vm._s(_vm.fee.shipping_fee) + " (" + _vm._s(_vm.fee.shipping_tax_title) + "¥" + _vm._s(_vm.fee.shipping_tax_fee) + ")")]) : _vm._e()]) : _vm._e()])]), _c('image', {
    staticClass: ["cover"],
    attrs: {
      "src": _vm.goods.image
    }
  }), _c('div', {
    staticClass: ["close"],
    on: {
      "click": function($event) {
        _vm.close()
      }
    }
  }, [_c('image', {
    staticClass: ["cancel"],
    attrs: {
      "src": "assets://icon_ic_finish"
    }
  })])]), (_vm.goods) ? _c('div', {
    staticClass: ["finish_bt"]
  }, [(_vm.goods.online_status == 0 && _vm.goods.canbuy == 0 && _vm.goods.buySpec && (_vm.goods.buySpec.stock <= 0 || _vm.goods.stock <= 0)) ? _c('text', {
    staticClass: ["finish"],
    style: {
      'background-color': '#666666'
    }
  }, [_vm._v("缺少库存")]) : _vm._e(), (_vm.goods.online_status == 0 && _vm.goods.canbuy == 0 && _vm.goods.buySpec && _vm.goods.buySpec.stock > 0) ? _c('text', {
    staticClass: ["finish"],
    style: {
      'background-color': '#000000'
    },
    on: {
      "click": _vm.ok
    }
  }, [_vm._v("确定")]) : _vm._e(), (_vm.goods.canbuy != 0) ? _c('text', {
    staticClass: ["finish"],
    style: {
      'background-color': '#666666'
    }
  }, [_vm._v("限制购买")]) : _vm._e(), (_vm.goods.online_status != 0 && _vm.goods.in_cart == 0) ? _c('text', {
    staticClass: ["finish"],
    style: {
      'background-color': '#ac162c'
    },
    on: {
      "click": _vm.ok
    }
  }, [_vm._v("加入购物车")]) : _vm._e(), (_vm.goods.online_status != 0 && _vm.goods.in_cart != 0) ? _c('text', {
    staticClass: ["finish"],
    style: {
      'background-color': '#ac162c'
    }
  }, [_vm._v("即将开售")]) : _vm._e()]) : _vm._e(), (_vm.isIphoneX) ? _c('div', {
    staticStyle: {
      height: "68px",
      backgroundColor: "white"
    }
  }) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(42)
)

/* script */
__vue_exports__ = __webpack_require__(43)

/* template */
var __vue_template__ = __webpack_require__(44)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "F:\\weex\\weex_develop\\abm_dev_weex\\abm-weexSource\\src\\components\\empty.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-94db7ee8"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = {
  "content": {
    "width": "750",
    "alignItems": "center",
    "paddingTop": "240"
  },
  "icon": {
    "width": "120",
    "height": "120"
  },
  "hint": {
    "textAlign": "center",
    "color": "#999999",
    "fontSize": "30",
    "marginTop": "24"
  },
  "des": {
    "textAlign": "center",
    "color": "#7b7b7b",
    "fontSize": "26"
  }
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//

var height = 0;
exports.default = {
    height: height,
    des: [String],
    created: function created() {
        var _this = this;
        _this.getWeexHeight(this);
    }
};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('empty', {
    staticClass: ["content"],
    style: {
      height: _vm.height + 'px'
    }
  }, [_c('image', {
    staticClass: ["icon"],
    attrs: {
      "src": "http://img.abmau.com/abmau/e7e03be91693ce106a32c4924401e267.png"
    }
  }), _c('text', {
    staticClass: ["hint"]
  }, [_vm._v("暂时没有内容，稍后再来看看！")]), _c('text', {
    staticClass: ["des"]
  }, [_vm._v(_vm._s(_vm.des))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["navigation"],
    style: {
      height: _vm.titleHeight + 'px',
      marginTop: _vm.nativeBarHeight + 'px'
    }
  }, [_c('div', {
    staticClass: ["left"],
    style: {
      height: _vm.titleHeight + 'px'
    },
    attrs: {
      "ariaLabel": "返回",
      "accessible": true
    },
    on: {
      "click": _vm.leftButtonClicked
    }
  }, [_vm._t("left", [_c('image', {
    staticClass: ["left-button"],
    attrs: {
      "src": "assets://ic_back"
    }
  }), _c('text', {
    staticClass: ["icon-text"],
    style: {
      color: '#333333'
    }
  }, [_vm._v("返回")])])], 2), _c('text', {
    staticClass: ["nav_tittle"]
  }, [_vm._v(_vm._s(_vm.headTitle))]), _c('div', {
    staticClass: ["right"],
    style: {
      height: _vm.titleHeight + 'px'
    }
  }, [(!_vm.isShare) ? _c('text', {
    staticClass: ["nav_img"]
  }) : _vm._e(), _c('image', {
    staticClass: ["nav_img"],
    attrs: {
      "src": "assets://icon_search"
    },
    on: {
      "click": function($event) {
        _vm.jumpToSearch()
      }
    }
  }), (_vm.isShare) ? _c('image', {
    staticClass: ["nav_img"],
    attrs: {
      "resize": "contain",
      "src": "assets://icon_white_share"
    },
    on: {
      "click": _vm.jumpToShare
    }
  }) : _vm._e()])]), (_vm.tabStyles.height == 0) ? _c('line') : _vm._e(), _c('div', {
    staticClass: ["content"]
  }, [_c('wxc-tab-page', {
    ref: "wxc-tab-page",
    staticClass: ["navbar"],
    attrs: {
      "tabTitles": _vm.tabTitles,
      "tabStyles": _vm.tabStyles,
      "needSlider": _vm.needSlider,
      "isTabView": _vm.isTabView,
      "tabPageHeight": _vm.height,
      "spmC": 4307989
    },
    on: {
      "wxcTabPageCurrentTabSelected": _vm.wxcTabPageCurrentTabSelected
    }
  }, _vm._l((_vm.tabList), function(items, index) {
    return _c('list', {
      key: index,
      staticClass: ["item-container"],
      style: {
        height: (_vm.height - _vm.tabStyles.height) + 'px'
      },
      attrs: {
        "loadmoreoffset": "10"
      },
      on: {
        "loadmore": _vm.onloading
      }
    }, [(_vm.tabStyles.height != 0) ? _c('header', {
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["line"]
    })]) : _vm._e(), (_vm.banner.length != 0 && !index) ? _c('cell', {
      staticClass: ["cellBanner"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('slider', {
      staticClass: ["banner"],
      attrs: {
        "autoPlay": "true",
        "interval": "3000",
        "infinite": "true"
      }
    }, [_vm._l((_vm.banner), function(item, index) {
      return _c('div', {
        key: index
      }, [_c('image', {
        staticClass: ["banner_image"],
        attrs: {
          "src": item.image_url
        },
        on: {
          "click": function($event) {
            _vm.startWeb(item.app_url)
          }
        }
      })])
    }), (_vm.banner.length != 1) ? _c('indicator', {
      staticClass: ["indicator"]
    }) : _vm._e()], 2)]) : _vm._e(), (_vm.star_goods.length != 0 && !index) ? _c('cell', {
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["goods-hot-title"]
    }, [_c('text', {
      staticClass: ["goods-hot-title-text"]
    }, [_vm._v("明星热卖")])]), _c('line'), _vm._l((_vm.star_goods), function(item, index) {
      return _c('div', {
        key: index,
        staticClass: ["goods-hot-content"]
      }, [_c('div', {
        on: {
          "click": function($event) {
            _vm.jumpToDetail(item.id)
          }
        }
      }, [_c('div', {
        staticClass: ["goods-hot-content-head"]
      }, [_c('image', {
        staticClass: ["goods-hot-content-head-img"],
        attrs: {
          "src": item.banner_url
        }
      })]), _c('div', {
        staticClass: ["goods-hot-content-center"]
      }, [_c('div', {
        staticClass: ["goods-hot-content-center-title"]
      }, [_c('text', {
        staticClass: ["goods-hot-content-center-title-text"]
      }, [_vm._v(_vm._s(item.name))])]), _c('div', {
        staticClass: ["recom_label_name"]
      }, _vm._l((item.recom_label_name), function(name, i) {
        return _c('text', {
          key: i,
          staticClass: ["padding-content"],
          style: {
            backgroundColor: name.color
          }
        }, [_vm._v(_vm._s(name.title))])
      })), _c('div', {
        staticClass: ["goods-price"]
      }, [_c('div', {
        staticClass: ["goods-price-type"]
      }, [(item.shareprice != 0) ? _c('text', {
        staticClass: ["goods-price-type1"]
      }, [_vm._v(_vm._s(item.title) + " ¥" + _vm._s(item.shareprice))]) : _vm._e(), (item.shareprice == 0 && item.retail_tax == 'no_show') ? _c('text', {
        staticClass: ["goods-price-type1"]
      }, [_vm._v(_vm._s(item.retail_title) + " ¥" + _vm._s(item.disprice))]) : _vm._e(), (item.shareprice == 0 && item.retail_tax != 'no_show') ? _c('text', {
        staticClass: ["goods-price-type1"]
      }, [_vm._v(_vm._s(item.retail_title) + " ¥" + _vm._s(item.disprice))]) : _vm._e()]), _c('div', {
        staticClass: ["goods-price-type-bottom2", "", "paddding-top-common"]
      }, [_c('div', {
        staticClass: ["goods-price-type"]
      }, [_c('text', {
        staticClass: ["goods-price-type2"]
      }, [_vm._v(_vm._s(item.price_title) + "  ¥" + _vm._s(item.price) + " ")]), _c('text', {
        staticClass: ["goods-price-type2"]
      }, [_vm._v("(")]), _c('text', {
        staticClass: ["goods-price-type3"]
      }, [_vm._v("¥" + _vm._s(item.market_price))]), _c('text', {
        staticClass: ["goods-price-type2"]
      }, [_vm._v(")")])]), (item.stock <= 0 && !item.online_status) ? _c('text', {
        staticClass: ["goods-number", "stock_none"]
      }, [_vm._v("缺")]) : _vm._e(), (item.stock > 0 && item.stock < 101 && !item.online_status) ? _c('text', {
        staticClass: ["goods-number", "stock_short"]
      }, [_vm._v("少")]) : _vm._e(), (item.stock > 100 && !item.online_status) ? _c('text', {
        staticClass: ["goods-number", "stock_normal"]
      }, [_vm._v("多")]) : _vm._e(), (item.online_status) ? _c('text', {
        staticClass: ["goods-number", "online"]
      }, [_vm._v("预热")]) : _vm._e()])])])]), (item.in_cart == 0 || item.online_status == 0) ? _c('div', {
        staticClass: ["goods-hot-content-foot"]
      }, [(!item.in_cart) ? _c('div', {
        staticClass: ["shoppingcart", "icon-commen"],
        on: {
          "click": function($event) {
            _vm.addCart(item.id)
          }
        }
      }, [_c('image', {
        staticClass: ["shoppingcart_icon"],
        attrs: {
          "src": "http://static.t.abmau.com/assets/img/h5/index/shoppingcart_icon.png"
        }
      }), _c('text', {
        staticClass: ["shoppingcart_icon-text", "icon-commen-text"]
      }, [_vm._v("加入购物车")])]) : _vm._e(), (item.online_status == 0) ? _c('div', {
        staticClass: ["buynow", "icon-commen"],
        on: {
          "click": function($event) {
            _vm.buyNow(item.id)
          }
        }
      }, [_c('image', {
        staticClass: ["buynow_icon"],
        attrs: {
          "src": "http://static.t.abmau.com/assets/img/h5/index/buynow_icon.png"
        }
      }), _c('text', {
        staticClass: ["buynow_icon-text", "icon-commen-text"]
      }, [_vm._v("立即购买")])]) : _vm._e()]) : _vm._e()])
    })], 2) : _vm._e(), (items.length != 0) ? _c('cell', {
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["goods-hot-title"]
    }, [_c('text', {
      staticClass: ["goods-hot-title-text"]
    }, [_vm._v("所有产品")])]), _c('line'), _vm._l((items), function(item, index) {
      return _c('div', {
        key: index,
        staticClass: ["goods-hot-content", "all-products"]
      }, [_c('div', {
        staticClass: ["all-products-content"],
        on: {
          "click": function($event) {
            _vm.jumpToDetail(item.id)
          }
        }
      }, [_c('div', {
        staticClass: ["products-left"]
      }, [_c('image', {
        staticClass: ["products-left-img"],
        attrs: {
          "src": item.image_url
        }
      })]), _c('div', {
        staticClass: ["products-right"]
      }, [_c('text', {
        staticClass: ["products-right-title"]
      }, [_vm._v(_vm._s(item.name))]), _c('div', {
        staticClass: ["products-right-label"]
      }, _vm._l((item.recom_label_name), function(name, i) {
        return _c('text', {
          key: i,
          staticClass: ["padding-content"],
          style: {
            backgroundColor: name.color
          }
        }, [_vm._v(_vm._s(name.title))])
      })), _c('div', {
        staticStyle: {
          flex: "1"
        }
      }), _c('div', {
        staticClass: ["products-right-goods-price"]
      }, [_c('div', {
        staticClass: ["goods-price-type", "paddding-top-common"]
      }, [(item.shareprice != 0) ? _c('text', {
        staticClass: ["goods-price-type1"]
      }, [_vm._v(_vm._s(item.title) + " ¥" + _vm._s(item.shareprice))]) : _vm._e(), (item.shareprice == 0 && item.retail_tax == 'no_show') ? _c('text', {
        staticClass: ["goods-price-type1"]
      }, [_vm._v(_vm._s(item.retail_title) + " ¥" + _vm._s(item.disprice))]) : _vm._e(), (item.shareprice == 0 && item.retail_tax != 'no_show') ? _c('text', {
        staticClass: ["goods-price-type1"]
      }, [_vm._v(_vm._s(item.retail_title) + " ¥" + _vm._s(item.disprice))]) : _vm._e()]), _c('div', {
        staticClass: ["goods-price-type-bottom", "", "paddding-top-common"]
      }, [_c('div', {
        staticClass: ["goods-price-type"]
      }, [_c('text', {
        staticClass: ["goods-price-type2"]
      }, [_vm._v(_vm._s(item.price_title) + "  ¥" + _vm._s(item.price) + " ")]), _c('text', {
        staticClass: ["goods-price-type2"]
      }, [_vm._v("(")]), _c('text', {
        staticClass: ["goods-price-type3"]
      }, [_vm._v("¥" + _vm._s(item.market_price))]), _c('text', {
        staticClass: ["goods-price-type2"]
      }, [_vm._v(")")])]), (item.stock <= 0 && !item.online_status) ? _c('text', {
        staticClass: ["goods-number", "stock_none"]
      }, [_vm._v("缺")]) : _vm._e(), (item.stock > 0 && item.stock < 101 && !item.online_status) ? _c('text', {
        staticClass: ["goods-number", "stock_short"]
      }, [_vm._v("少")]) : _vm._e(), (item.stock > 100 && !item.online_status) ? _c('text', {
        staticClass: ["goods-number", "stock_normal"]
      }, [_vm._v("多")]) : _vm._e(), (item.online_status) ? _c('text', {
        staticClass: ["goods-number", "online"]
      }, [_vm._v("预热")]) : _vm._e()])])])]), (item.in_cart == 0 || item.online_status == 0) ? _c('line') : _vm._e(), (item.in_cart == 0 || item.online_status == 0) ? _c('div', {
        staticClass: ["goods-hot-content-foot"]
      }, [(!item.in_cart) ? _c('div', {
        staticClass: ["shoppingcart", "icon-commen"],
        on: {
          "click": function($event) {
            _vm.addCart(item.id)
          }
        }
      }, [_c('image', {
        staticClass: ["shoppingcart_icon"],
        attrs: {
          "src": "http://static.t.abmau.com/assets/img/h5/index/shoppingcart_icon.png"
        }
      }), _c('text', {
        staticClass: ["shoppingcart_icon-text", "icon-commen-text"]
      }, [_vm._v("加入购物车")])]) : _vm._e(), (item.online_status == 0) ? _c('div', {
        staticClass: ["buynow", "icon-commen"],
        on: {
          "click": function($event) {
            _vm.buyNow(item.id)
          }
        }
      }, [_c('image', {
        staticClass: ["buynow_icon"],
        attrs: {
          "src": "http://static.t.abmau.com/assets/img/h5/index/buynow_icon.png"
        }
      }), _c('text', {
        staticClass: ["buynow_icon-text", "icon-commen-text"]
      }, [_vm._v("立即购买")])]) : _vm._e()]) : _vm._e()], 1)
    })], 2) : _vm._e(), (_vm.emptyIsShow[index]) ? _c('cell', {
      style: {
        height: (_vm.height - _vm.tabStyles.height) + 'px'
      },
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('empty')], 1) : _vm._e(), (_vm.loading[index] && items.length > 8) ? _c('cell', {
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["more-list"]
    }, [(!_vm.allLoadingFinish[index]) ? _c('text', {
      staticClass: ["loading-over-txt"]
    }, [_vm._v("加载中...")]) : _vm._e(), (_vm.allLoadingFinish[index]) ? _c('text', {
      staticClass: ["loading-over-txt"]
    }, [_vm._v("已经全部加载完毕")]) : _vm._e()])]) : _vm._e()])
  }))], 1), (_vm.showAddCart) ? _c('pop', {
    staticClass: ["pop"],
    attrs: {
      "fee": _vm.fee,
      "goods": _vm.goodsSku,
      "regions": _vm.buyGoodsRegions,
      "is_optional": _vm.is_optional
    },
    on: {
      "close": _vm.closeMask,
      "getShopFee": _vm.getBuyShopFee,
      "selectDepot": _vm.selectBuyDepot,
      "ok": _vm.ok
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = __webpack_require__(3);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
    filters: {},
    methods: {
        eventBusTag: utils.eventBusTag,
        api: utils.getApi,
        jumpTo2: utils.jumpTo2,
        jumpToBanner: utils.jumpToBanner,
        interceptPush: utils.interceptPush,
        GetUrlPara: utils.GetUrlPara,
        getTitleHeight: utils.getTitleHeight,
        getStatusBarHeight: utils.getStatusBarHeight,
        getWeexHeight: utils.getWeexHeight,
        getWeexHeight2: utils.getWeexHeight2,
        getTopHeight: utils.getTopHeight,
        toNativePage: utils.toNativePage,
        popBar: utils.popBar,
        upDate: utils.upDate,
        countDown: utils.countDown,
        finishAnim: utils.finishAnim,
        startAnim: utils.startAnim,
        md5: utils.md5,
        Get: utils.Get,
        Post: utils.Post,
        Put: utils.Put,
        utilGet: utils.utilsGet,
        utilPost: utils.utilsPost,
        Delete: utils.Delete,
        setToken: utils.setToken,
        kill: utils.kill,
        compareVersion: utils.compareVersion,
        isIpx: utils.isIpx,
        iPhoneX: utils.iPhoneX,
        mainBarHeight: utils.mainBarHeight,
        isValueParam: utils.isValueParam
    },
    created: function created() {},
    beforeDestroy: function beforeDestroy() {}
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by Administrator on 2018/6/7.
 */
exports.default = {
    //获取手机验证码
    get_code: 'get_abm_verify_code',
    //账号注册
    register: 'register',
    //登录
    login: 'login',
    //检测手机号-
    check_mobile: 'check_mobile',
    //修改密码
    change_password: 'abm_change_password',
    //获取语音验证码
    get_voice_message: 'get_voice_message',
    //获取手机区号
    area_code: 'area_code',
    //获取邀请人信息
    invite_code: 'invite_code',
    //分类标签
    classify_tab: 'order_center_category_list',
    //分类商品列表
    classify_lv: 'order_center_category_getCategoryDetail',
    //订单管理列表
    list_order: 'list_order',
    //取消订单
    cancel_order: 'cancel_order',
    //确认订单
    confirm_order: 'confirm_receipt',
    //订单详情
    order_detail: 'getOrderDetail',
    //申请优惠券记录
    apply_coupon_list: 'h5/coupon/apply_record_list',
    //申请优惠券
    apply_coupon: 'h5/coupon/apply_coupon',
    //申请优惠券限制数据
    coupon_limit: 'h5/coupon/return_apply_data',
    //优惠券列表
    coupon_list: 'h5/coupon/my_coupon',
    //优惠券赠送列表
    coupon_given_list: 'h5/coupon/given_list',
    //赠送优惠券
    given_coupon: 'h5/coupon/given',
    //使用记录
    coupon_used: 'h5/coupon/use_record',

    //app首页
    home: 'home_index',
    //双十一首页接口
    double_home: 'home_index_double',
    //双十一之后首页接口
    home_new: 'home_index_new',
    //年货节 首页接口
    home_index_festival: 'home_index_festival',
    //热门搜索加常用分类
    hot_search_new: 'hot_search_new',
    //明星产品分类
    starcategory: 'starcategory',
    //明星产品分类列表
    starproduct: 'starproduct',
    //品牌溯源列表
    brandtrace: 'brandtrace',
    //个人中心
    get_userinfo: 'get_userinfo',
    //获取我的店铺信息
    new_index: 'new_index',
    //设置店铺信息
    shop_setting: 'shop_setting',
    //首页畅销榜单二级列表
    recommend: 'recommend',
    //首页VIP礼包
    home_gift: 'gift',
    //首页新品速递
    home_newproduct: 'newproduct',
    //用户可提现金额
    user_amount_info: 'user_brandprovider_account',
    //获取银行卡列表
    bank_code: 'bank_code',
    //编辑银行卡
    add_bankcard: 'certify_bankcard',
    //体现到银行卡
    withdraw_bank: 'brand_provider_withdrawal_submit',
    //提现到账户余额
    withdraw_balance: 'turn_goods_payments',
    //获取userInfo
    get_user_info: 'get_userinfo',
    //首页公告列表
    home_notice: 'index_notice',
    //获取实名认证
    certify_userinfo: 'certify_userinfo',
    //更新用户头像
    personal_updateImage: 'update_userinfo',
    //新增，编辑地址
    user_brandprovider_address: 'user_brandprovider_address',
    //获取用户地址列表
    user_brandprovider_address_list: 'user_brandprovider_address_list',
    //删除用户地址
    user_brandprovider_address_delete: 'user_brandprovider_address_delete',
    //设为默认地址
    user_brandprovider_address_default: 'user_brandprovider_address_default',
    //财务管理
    user_finance: 'h5/my_wallet',
    //新的绑定银行卡
    bindCard: 'bind_bank',
    //新的银行卡信息
    bank_info: 'bank_info',
    // 提交实名认证
    update_certify: 'update_certify_userinfo',
    //获取app分享信息
    app_share: 'app_share',
    //消息列表
    get_msg: 'getMsg',
    msg_lv: 'getTypeMsg',
    //账户管理
    user_info_msg: 'get_user_message',
    //退出账户
    logout: 'logout',
    push_bind: 'bind',
    refresh_msg: 'getMsgNoReadCountNew',
    //试用中心列表接口
    activity: 'trial/activity',

    //商品详情
    shop_center: 'h5/app/shopping/order_center/',
    //商品税费
    shop_fee: 'h5/app/shopping/fee',
    //立即购买
    buy_now: 'h5/app/shopping/quick_buy',

    shop_buy: 'h5/app/shopping/store',

    goods_sku: 'h5/app/shopping/goods_sku/',

    get_share: 'goodsShare',
    //数量检查
    count_check: 'h5/app/shopping/count_check',
    //获取购物车数量
    cart_num: 'shopping/count',

    //我的试用
    activity_apply: 'trial/activity/apply',
    //商品详情第二部分
    activity_detail: 'trial/activity/detail',
    //商品详情第一部分
    activity_basedetail: 'trial/activity/basedetail',
    //提交预约
    activity_remind: 'trial/activity/remind',
    //试用评论
    activity_report: 'trial/activity/report',
    //获取填写试用报告信息
    activity_report_detail: 'trial/activity/report/detail',
    //提交试用报告
    activity_report_save: 'trial/activity/report/save',
    //确认订单-订单信息
    confirm_order_info: 'h5/app/shopping/preview',
    //确认订单-收货地址列表
    get_address_lv: 'h5/app/shopping/address',

    //申请试用接口
    activity_apply_judge: 'trial/activity/apply_judge',
    //确认订单-优惠券
    use_coupon_lv: 'app/shopping/weex_valid_coupon',
    //确认订单-编辑收货地址身份证
    edit_address_idCard: 'h5/update_user_address_idcard',
    //确认订单-支付方式
    order_confirm_pay: 'h5/app/order_confirm_pay',
    //确认订单-提交订单
    order_commit: 'h5/app/shopping/new_commit',
    //试用中心小红点验证
    activity_littlered: 'trial/activity/littlered',
    //确认订单-结算订单
    order_pay: 'order/pay',
    //待支付
    shopping_waiting_pay: 'h5/app/shopping/waiting_pay',
    //下单状态
    pay_status: 'order/get_customer_pay',

    //购物车
    cart: 'h5/app/shopping/index',
    //购物车更新购买数量
    shop_update: 'h5/app/shopping/update',
    //购物车获取价格
    cart_fee: 'h5/app/shopping/fee/cart',
    //删除商品
    del_shop: 'h5/app/shopping/delete',
    //结算商品
    cart_buy: 'h5/app/shopping/buy',
    //选择结算的仓库
    cart_select_buy: 'h5/app/shopping/select_buy',
    //拒绝理由
    activity_Refuse: 'trial/activity/refuse',
    //会员引导升级vip
    guide_upgrade: 'guide_upgrade',

    //分类页
    order_center_category_list_new: 'order_center_category_list_new',
    order_center_category_getCategoryDetail_new: 'order_center_category_getCategoryDetail_new',

    //测试
    withdraw_record: 'h5/withdraw_record',
    //品牌的列表的tab
    childcate: 'h5/app/shopping/childcate',
    //品牌的列表的banner
    brandBanner: 'h5/app/brand/banner',
    //明星热卖和所有产品
    neworder_center: 'h5/app/shopping/neworder_center',
    //新订货中心
    order_center: 'h5/app/shopping/order_center',
    depot_brand: 'h5/app/shopping/depot_brand',
    depot_region: 'h5/app/shopping/depot_region',
    //财务管理--账户余额-accout.vue
    goods_payment_record: 'h5/goods_payment_record',
    //数据监控统计
    monitor_statistics: 'monitor_statistics', //获取通联支付银行卡列表
    get_allinpay_bank_list: 'h5/allinpay/get_bank_list',
    //是否设置支付密码
    isset_pay_password: 'h5/allinpay/isset_pay_password',
    //设置支付密码
    set_pay_password: '/h5/allinpay/set_pay_password',
    //签约申请绑定银行卡
    bind_bank: 'h5/allinpay/sign_up_apply',

    //我的收藏夹列表
    collect: 'collect',
    //创建和编辑收藏夹 通过是否传递id区别是创建和编辑
    material_collect: 'material_collect',
    //我的收藏列表
    material_list: 'material_list',
    //我的发布列表
    release_list: 'material/release_list',
    //银行卡充值
    bank_recharge: 'h5/allinpay/quick_recharge',
    //将素材收藏到收藏夹
    add_collect: 'add_collect',
    //素材列表
    material_source: 'material/user_list',
    //素材标签
    material_new_tag: 'material/new_tag_list',
    source_material_list: 'source_material_list',
    //关联商品
    relation_goods: 'material/relation_goods',
    //素材搜索
    tag_search: 'material/tag_search',
    //删除收藏夹
    collect_delete: 'collect_delete',
    //我的等级
    achievement: 'h5/achievement',
    setMemoName: 'setMemoName',
    //代理升级充值
    updata_level: 'can_update_brand_provider_level',
    //升级充值
    brand_provider_level: 'brand_provider_level',
    //提交充值升级
    submit_new_brand_provider: 'submit_new_brand_provider',
    //标签列表    //标签列表
    material_label: 'material/label',
    //发布素材
    material_user: 'material/user',
    //素材筛选
    material_filter: 'material/filter',
    //素材详情
    material_user_detail: 'material/user_detail',
    //素材tab标签
    material_tab_list: 'material/tab_list',
    //下载转发
    material_add_click: 'material/add_click',
    //限额说明
    allinpay_allinpay_bank_list: 'h5/allinpay/allinpay_bank_list',
    //素材小红点
    material_littlered: 'material/littlered',
    //购物车-推荐
    shopping_recom: 'app/shopping/recom',
    //商品详情素材
    goods_material: 'material/goods_user',
    //删除素材
    delMaterial: 'material/user_del',
    //今日必发下一波素材提示
    today_betfair: 'material/today_betfair',

    //投诉原因列表
    complaint: 'complaint/complaint_type',
    //客服昵称列表
    nickName: 'complaint/customer_service',
    //投诉提交接口
    complaintCustomer: 'complaint/customer',
    //微信充值
    recharge_wx: 'h5/allinpay/wx_recharge',
    suggest: 'complaint/complaint_type',
    //反馈建议提交
    suggestPost: 'complaint/suggest',
    //客服投诉、反馈建议列表
    customerList: 'complaint/customer_list',
    //投诉列表详情
    customerDetail: 'complaint/customer_detail',
    //反馈列表详情
    suggestDetail: 'complaint/suggest_detail',
    //电子门票
    Tickets_Lv: 'api/user/ticket',
    //新商品详情
    new_order_center: 'h5/app/shopping/order_center_goods',
    //检验是否可以切换该地址
    check_address_info: 'h5/app/shopping/check_address_info',
    //电子门票赠送
    Presented_ticket: 'api/user/ticket/exchange',
    //POS机支付生成订单
    pos_recharge: 'h5/allinpay/pos_recharge',
    //返回门票
    Rollback_Presented_ticket: 'api/user/ticket/rollback',

    //双十一二级页接口
    doubleBrand: 'doubleBrand',
    doubleTag: "doubleTag",
    //双十二福利场频道接口
    welfare_channel: 'welfare_channel',
    //双十二福利场品牌二级页接口
    welfare_brand: 'welfare_brand',

    //新购买商品弹窗接口
    new_goods_sku: 'h5/app/shopping/new_goods_sku',

    //新版商品详情页相关推荐数据
    shop_related_goods: '/h5/app/shopping/related_goods',

    //畅销榜单新接口
    newRecommend: 'recommendNew',
    //明星打call的新接口
    newStarcategory: 'starcategory_new',

    //商品详情未读消息小红点
    goods_message_display: '/h5/app/shopping/goods_message_display',
    check_activity_button: 'check_activity_button',
    //双十一大促
    double_rank: 'double_rank',
    //双十一出货总榜
    paymentRank: 'paymentRankList',
    //双十一品牌排行榜-数据排行
    brandPaymentRankList: 'brandPaymentRankList',
    //双十一品牌排行榜-品牌
    getBrandByRank: 'getBrandByRank',

    //可申请品牌授权
    brand_list: 'api/brand',
    //我的授权申请
    user_brand: 'api/user/brand/',
    //提交授权申请
    brand_apply: 'api/brand/apply',

    //消息中心
    message_center: 'h5/msg/center',
    //消息中心 —— 详情
    message_check_detail: 'h5/msg/list',
    //首页铃铛消息未读
    message_home_unread: 'h5/msg/unread',

    //最新到货
    latest_arrival: 'latest_arrival',
    //即将到货
    new_arrival: 'new_arrival',
    //取消/订阅到货提醒
    arrival_subscribe: 'arrival_subscribe',
    //资讯分类接口
    rule_type_list: 'h5/rule/type_list',
    //帮助中心列表接口
    help_list: 'h5/rule/help_list',
    //帮助中心详情接口
    help_detail: 'h5/rule/help_detail',
    //帮助中心热门搜索
    help_hot_keyword: 'h5/rule/hot_keyword',
    //帮助中心搜索
    search_help_data: 'h5/rule/search_help_data',
    //帮助中心用户点赞
    help_user_helpful: 'h5/rule/help_user_helpful',
    //高级订货
    tob_list: 'tob_list',

    //单创用户信息新版
    get_new_userinfo: 'h5/get_new_userinfo',

    //商学院标签
    college_category: 'h5/college/category',
    //商学院一级列表
    college_article_list: 'college/article_list',
    //商学院文章详情
    college_article: 'h5/college/article',
    //商學院点赞
    college_like: 'college/like',
    //商学院分享统计接口
    college_share: 'college/share',
    //支付宝充值
    recharge_alipay: 'h5/allinpay/alipay_recharge',
    //支付宝充值结果检测
    get_notify_result: 'h5/allinpay/get_notify_result',

    //订单跟踪 包裹标题
    get_order_transport_name: 'get_order_transport_name',
    //订单跟踪 包裹物流信息
    get_order_transport: 'get_order_transport',

    //澳洲发票提交
    generate_invoice_aus: 'finance/generate_invoice_aus',
    //申请发票的详情
    invoice_detail_aus: '/finance/invoice_detail_aus',
    //获取所有需要开发票的订单的接口
    invoice_orders_list: 'finance/invoice_orders_list',
    //当改发票有多个订单时候,可以点击查看更多 接口
    invoice_orders_detail: 'finance/invoice_orders_detail',
    //请求发票的图片
    electronic_invoice: '/finance/electronic',

    //订单状态信息
    order_status_info: 'order_status_info',
    //热门搜索推荐
    search_hot: 'hot_search_keywords',
    //积分兑换红酒排行榜
    wine_exchange: 'wine_integral_exchange'
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 *
 * Created by Administrator on 2018/7/6.
 */
exports.default = {
    //账户切换刷新首页
    REFRESH_HOME: "refresh_account",
    //提现操作成功刷新财务管理
    REFRESH_WALLET: "refresh_wallet",
    //充值界面刷新
    REFRESH_RECHARGE: "refresh_recharge",
    //消息列表刷新
    REFRESH_MESSAGE: "refresh_message",
    //优惠券刷新
    REFRESH_COUPON: "refresh_coupon",
    //会员引导刷新
    REFRESH_PRIMARYVIP: "refresh_primary_vip",
    //个人信息小红点
    REFRESH_MINE_INFO_DOT: 'mine_info_dot',
    //身份认证
    REFRESH_CARD_ID: 'refresh_idcard',
    EDIT_BANK_SUCCESS: 'edit_bank_success', //编辑银行卡成功
    APPROVE_SUCCESS: 'approve_success', //实名认证成功
    //添加账户
    REFRESH_ACCOUNT: 'add_account',
    //刷新地址
    REFRESH_MYDEALER: 'refresh_address',
    //刷新我的试用
    REFRESH_TRYOUT: 'refresh_tryout',
    //刷新试用主页
    REFRESH_CORE: 'refresh_core',
    //确认订单刷新收货地址
    REFRESH_ADDRESS: 'refresh_address',
    //删除收货地址，导致收货地址选择页面为空，需要重置确认订单的默认地址
    RESET_ADDRESS: 'reset_address',
    //刷新购物车数据
    RESET_CART: 'reset_cart',
    //刷新购物车数量
    RESET_CART_NUM: 'reset_cart_num',
    //创建收藏夹
    CREATE_FAVORITE: 'create_favorite',
    //刷新发布素材
    REFRESH_MATERIAL: 'refresh_material',
    REFRESH_MATERIAL_TWO: 'refresh_material_two',
    // //收藏素材
    // COLLECTION_MATERIAL:'collection_material',
    //发布素材
    MATERIAL_RELEASE: 'material_release',
    //收藏素材 添加
    COLLECTION_MATERIAL: 'collection_material',
    COLLECTION_CANCEL: 'collection_cancel',
    //判断小红点
    RED_DOT: 'red_dot',
    //反馈建议提交成功之后,返回主页
    FEEDBACK: 'feedback',
    //投诉提交成功之后,返回主页
    COMPLAINKF: 'complainKF',
    REFRESH_AUTHORIZE: 'refresh_authorize', //刷新授权

    ORDER_FINISH: 'order_finish', //确认收货后，订单完成
    ORDER_CANCEL: 'order_cancel' //取消订单
};

/***/ })
/******/ ]);