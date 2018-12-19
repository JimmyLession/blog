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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                                * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
                                                                                                                                                                                                                                                                                * Created by Tw93 on 17/11/01
                                                                                                                                                                                                                                                                                */

var _urlParse = __webpack_require__(75);

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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(14)
)

/* script */
__vue_exports__ = __webpack_require__(15)

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
__vue_options__.__file = "F:\\weex\\weex_develop\\abm_dev_weex\\abm-weexSource\\src\\components\\titleBar.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-54a919a8"
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(35)
)

/* script */
__vue_exports__ = __webpack_require__(36)

/* template */
var __vue_template__ = __webpack_require__(42)
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _indexWeex = __webpack_require__(0);

var _indexWeex2 = _interopRequireDefault(_indexWeex);

var _index = __webpack_require__(1);

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
/* 6 */
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

var _api = __webpack_require__(87);

var _api2 = _interopRequireDefault(_api);

var _event = __webpack_require__(88);

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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _newGoodsDetails = __webpack_require__(8);

var _newGoodsDetails2 = _interopRequireDefault(_newGoodsDetails);

var _mixin = __webpack_require__(86);

var _mixin2 = _interopRequireDefault(_mixin);

var _utils = __webpack_require__(6);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.mixin(_mixin2.default);
_newGoodsDetails2.default.el = '#root';
new Vue(_newGoodsDetails2.default);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(9)
)

/* script */
__vue_exports__ = __webpack_require__(10)

/* template */
var __vue_template__ = __webpack_require__(85)
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
__vue_options__.__file = "F:\\weex\\weex_develop\\abm_dev_weex\\abm-weexSource\\src\\pages\\shop\\newGoodsDetails.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7ee87bc3"
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
/* 9 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "backgroundColor": "#ffffff"
  },
  "title-parent": {
    "width": "750",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "title-unselect": {
    "height": "45",
    "fontSize": "32",
    "textAlign": "center",
    "lineHeight": "45",
    "maxLines": 1,
    "textOverflow": "ellipsis",
    "color": "#666666"
  },
  "title-select": {
    "height": "45",
    "fontSize": "32",
    "textAlign": "center",
    "lineHeight": "45",
    "maxLines": 1,
    "textOverflow": "ellipsis",
    "color": "#333333"
  },
  "back": {
    "width": "21",
    "height": "36",
    "marginRight": "12"
  },
  "share": {
    "width": "32",
    "height": "32"
  },
  "left": {
    "width": "150",
    "flexDirection": "row",
    "justifyContent": "flex-start",
    "alignItems": "center",
    "paddingLeft": "36"
  },
  "right-parent": {
    "width": "150"
  },
  "right": {
    "width": "150",
    "paddingRight": "36",
    "alignItems": "flex-end"
  },
  "line": {
    "width": "750",
    "height": "1.4",
    "backgroundColor": "#e2e2e2"
  },
  "parent": {
    "position": "absolute",
    "flexDirection": "row",
    "left": 0
  }
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _goodsDetails = __webpack_require__(11);

var _goodsDetails2 = _interopRequireDefault(_goodsDetails);

var _goodsMaterial = __webpack_require__(45);

var _goodsMaterial2 = _interopRequireDefault(_goodsMaterial);

var _wxPager = __webpack_require__(69);

var _wxPager2 = _interopRequireDefault(_wxPager);

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

var nativeBarHeight = 0;
var titleHeight = 0;
var height = 0;
var bottom = 0;

var animation = weex.requireModule('animation');
exports.default = {
    components: { wxPager: _wxPager2.default, goodsDetails: _goodsDetails2.default, goodsMaterial: _goodsMaterial2.default },
    data: function data() {
        return {
            bottom: bottom,
            height: height,
            nativeBarHeight: nativeBarHeight,
            titleHeight: titleHeight,
            tabTitles: [],
            index: 0,
            goods_id: '',
            brandId: '',
            hide: true,
            showShare: false
        };
    },


    methods: {
        back: function back() {
            if (weex.config.env.platform.toLowerCase() === 'ios' && this.tabTitles.length > 1) this.hide = false;
            this.popBar();
        },
        showMaterial: function showMaterial(event) {
            if (this.compareVersion(weex.config.env.appVersion, '3.4.0')) {
                this.goods_id = event.id;
                this.brandId = event.brandId;
                console.log("brandId:" + this.brandId);
                if (this.tabTitles.indexOf('用户口碑') === -1) {
                    this.tabTitles.push('用户口碑');
                }
            }
        },
        clickItem: function clickItem(index) {
            var _this = this;
            if (_this.index === index) {
                return;
            }
            _this.index = index;
            var trans = '';
            if (_this.index === 1) {
                trans = 'translate(-750px, 0px)';
            } else {
                trans = 'translate(0px, 0px)';
            }
            var content = this.$refs.content;
            animation.transition(content, {
                styles: {
                    transform: trans,
                    transformOrigin: 'center center'
                },
                duration: 300, //ms
                timingFunction: 'ease',
                delay: 0 //ms
            }, function () {});
        },
        showShareUI: function showShareUI() {
            this.showShare = true;
        },
        hideShareUI: function hideShareUI() {
            this.showShare = false;
        },
        share: function share(event) {
            this.$refs.goods.share(event);
        }
    },
    created: function created() {
        var title = this.GetUrlPara(weex.config.bundleUrl, 'title');
        if (!title || title == 'undefined') {
            this.tabTitles.push('商品详情');
        } else {
            this.tabTitles.push(title);
        }
        this.getTitleHeight(this);
        this.getStatusBarHeight(this);
        this.getTopHeight(this);
        this.isIpx(this);
    }
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(12)
)

/* script */
__vue_exports__ = __webpack_require__(13)

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
__vue_options__.__file = "F:\\weex\\weex_develop\\abm_dev_weex\\abm-weexSource\\src\\pages\\shop\\goodsDetails.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-313feba5"
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
/* 12 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "width": "750",
    "backgroundColor": "#FFFFFF",
    "position": "relative"
  },
  "parent": {
    "position": "absolute",
    "left": 0,
    "right": 0
  },
  "banner": {
    "width": "750",
    "height": "750"
  },
  "banner_image": {
    "width": "750",
    "height": "750"
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
  "title": {
    "width": "750",
    "marginTop": "12",
    "paddingLeft": "36",
    "paddingRight": "36",
    "lineHeight": "45",
    "fontSize": "32",
    "marginBottom": "25",
    "color": "#333333"
  },
  "tag-parent": {
    "paddingLeft": "36",
    "paddingRight": "36",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "horizontal_tag": {
    "paddingLeft": "10",
    "paddingRight": "10",
    "marginRight": "6",
    "alignItems": "center",
    "borderRadius": "4",
    "borderWidth": "2",
    "borderColor": "#CF1126"
  },
  "tag": {
    "paddingLeft": "10",
    "paddingRight": "10",
    "marginRight": "6",
    "alignItems": "center",
    "borderRadius": "4",
    "borderWidth": "2",
    "borderColor": "#CF1126"
  },
  "tag_label": {
    "paddingLeft": "10",
    "paddingRight": "10",
    "marginRight": "6",
    "alignItems": "center",
    "borderRadius": "4",
    "borderWidth": "2"
  },
  "text_tag": {
    "paddingTop": "3",
    "paddingBottom": "3",
    "paddingLeft": "4",
    "paddingRight": "4",
    "textAlign": "center",
    "fontSize": "20",
    "color": "#CF1126"
  },
  "text": {
    "paddingTop": "3",
    "paddingBottom": "3",
    "paddingLeft": "4",
    "paddingRight": "4",
    "textAlign": "center",
    "fontSize": "20",
    "color": "#ffffff"
  },
  "buy-price": {
    "marginTop": "20",
    "color": "#CF1126",
    "fontSize": "32"
  },
  "buy-price-tax": {
    "marginTop": "20",
    "color": "#CF1126",
    "fontSize": "22"
  },
  "retail-price-parent": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "flex-start",
    "marginLeft": "36",
    "marginRight": "36",
    "marginTop": "9"
  },
  "retail-price": {
    "fontSize": "24",
    "color": "#666666"
  },
  "retail-disused-price": {
    "fontSize": "24",
    "color": "#666666",
    "textDecoration": "line-through",
    "textDecorationColor": "#666666"
  },
  "status": {
    "borderRadius": "4",
    "lineHeight": "34",
    "fontSize": "20",
    "color": "#FFFFFF",
    "textAlign": "center"
  },
  "cross-border": {
    "width": "750",
    "height": "90",
    "flexDirection": "row",
    "alignItems": "center",
    "paddingLeft": "36",
    "paddingRight": "36",
    "backgroundColor": "#FFFFFF"
  },
  "cross-border-country-icon": {
    "width": "30",
    "height": "30"
  },
  "cross-border-country-dot": {
    "width": "10",
    "height": "10",
    "borderRadius": 50,
    "backgroundColor": "#825AB0"
  },
  "cross-border-message": {
    "fontSize": "24",
    "color": "#8A6BAD",
    "lineHeight": "70",
    "marginLeft": "8"
  },
  "cross-border-message-abroad": {
    "fontSize": "24",
    "color": "#666666",
    "lineHeight": "70",
    "marginLeft": "8"
  },
  "horizontal_info": {
    "width": "750",
    "marginTop": "6",
    "marginBottom": "25",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "paddingLeft": "36",
    "paddingRight": "36"
  },
  "vip_cell": {
    "width": "750",
    "height": "80",
    "paddingLeft": "35",
    "backgroundColor": "#f6f6f6",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "vip_horizontal": {
    "height": "80",
    "flexDirection": "row",
    "justifyContent": "flex-start",
    "alignItems": "center"
  },
  "vip_info": {
    "height": "80",
    "lineHeight": "80",
    "fontSize": "24",
    "color": "#333333"
  },
  "btn_vip_dredge": {
    "width": "157",
    "height": "80",
    "backgroundColor": "#E9E9E9",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "marginLeft": "50"
  },
  "vip_dredge": {
    "fontSize": "22",
    "lineHeight": "80",
    "color": "#333333",
    "paddingRight": "10"
  },
  "vip_next": {
    "width": "10",
    "height": "20"
  },
  "vip_image": {
    "width": "40",
    "height": "40"
  },
  "vip_explain": {
    "marginLeft": "6",
    "fontSize": "24",
    "color": "#333333"
  },
  "horizontal": {
    "width": "750",
    "height": "90",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "paddingLeft": "36",
    "paddingRight": "36"
  },
  "goods-status": {
    "justifyContent": "flex-end",
    "flexDirection": "row"
  },
  "taxes-title": {
    "fontSize": "26",
    "color": "#333333",
    "lineHeight": "90"
  },
  "taxes-tag": {
    "fontSize": "22",
    "color": "#CF1126",
    "lineHeight": "32",
    "paddingLeft": "10",
    "paddingRight": "10",
    "borderWidth": "2",
    "marginRight": "10",
    "borderColor": "#CF1126"
  },
  "taxes-message": {
    "flex": 1,
    "fontSize": "24",
    "color": "#333333",
    "lineHeight": "90"
  },
  "explain-title": {
    "fontSize": "26",
    "color": "#333333",
    "lineHeight": "90"
  },
  "explain-message": {
    "flex": 1,
    "fontSize": "24",
    "color": "#333333",
    "lineHeight": "90",
    "marginLeft": "45"
  },
  "next": {
    "width": "15",
    "height": "30"
  },
  "content": {
    "width": "750"
  },
  "content_info": {
    "width": "750",
    "backgroundColor": "#ffffff",
    "paddingBottom": "28"
  },
  "content-title": {
    "width": "750",
    "fontSize": "40",
    "color": "#333333",
    "marginTop": "50",
    "textAlign": "center"
  },
  "content-title-line": {
    "width": "80",
    "height": "4",
    "backgroundColor": "#26292E",
    "marginTop": "18",
    "marginBottom": "37"
  },
  "goods-info": {
    "width": "750",
    "fontSize": "24",
    "color": "#333333",
    "marginBottom": "12",
    "paddingLeft": "36",
    "paddingRight": "36"
  },
  "prompt-info": {
    "width": "750",
    "paddingLeft": "36",
    "paddingRight": "36",
    "marginBottom": "40",
    "fontSize": "28",
    "color": "#666666",
    "lineHeight": "40"
  },
  "note-title": {
    "marginLeft": "35",
    "marginRight": "35",
    "paddingTop": "5",
    "paddingBottom": "5",
    "fontSize": "40",
    "textAlign": "center",
    "color": "#FFFFFF",
    "marginTop": "50",
    "marginBottom": "65",
    "backgroundColor": "#CF1126",
    "borderRadius": "4"
  },
  "note-info": {
    "width": "750",
    "paddingTop": "6",
    "paddingLeft": "36",
    "paddingRight": "36",
    "fontSize": "28",
    "color": "#666666",
    "lineHeight": "48"
  },
  "note-warning": {
    "paddingLeft": "36",
    "paddingRight": "36",
    "paddingTop": "6",
    "fontSize": "28",
    "lineHeight": "48",
    "color": "#333333",
    "textDecoration": "underline"
  },
  "shop-cart-parent": {
    "width": "150",
    "height": "90",
    "backgroundColor": "#FFFFFF",
    "alignItems": "center",
    "flexDirection": "row",
    "justifyContent": "center",
    "position": "relative"
  },
  "shop-cart-icon": {
    "width": "49",
    "height": "46"
  },
  "shop-cart-num": {
    "lineHeight": "30",
    "width": "30",
    "height": "30",
    "color": "#ffffff",
    "fontSize": "18",
    "textAlign": "center",
    "backgroundColor": "#CF1126",
    "borderRadius": 50,
    "position": "absolute",
    "top": "15",
    "right": "40"
  },
  "add-to-cart": {
    "flex": 1,
    "height": "90",
    "lineHeight": "90",
    "alignItems": "center",
    "backgroundColor": "#000000",
    "fontSize": "30",
    "color": "#FFFFFF",
    "textAlign": "center"
  },
  "buy-now": {
    "flex": 1,
    "height": "90",
    "lineHeight": "90",
    "alignItems": "center",
    "backgroundColor": "#CF1126",
    "fontSize": "30",
    "color": "#FFFFFF",
    "textAlign": "center"
  },
  "goods-none": {
    "flex": 1,
    "height": "90",
    "lineHeight": "90",
    "alignItems": "center",
    "fontSize": "30",
    "color": "#FFFFFF",
    "textAlign": "center"
  },
  "buttom": {
    "width": "750",
    "height": "90",
    "flexDirection": "row",
    "alignItems": "center",
    "position": "absolute",
    "left": 0,
    "bottom": 0
  },
  "web": {
    "width": "750"
  },
  "pop": {
    "flex": 1,
    "position": "absolute"
  },
  "plan-time": {
    "color": "#666666",
    "fontSize": "22",
    "lineHeight": "32",
    "textAlign": "center"
  },
  "address-parent": {
    "width": "750",
    "height": "90",
    "paddingLeft": "36",
    "paddingRight": "36",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "address-title": {
    "fontSize": "28",
    "color": "#666666",
    "lineHeight": "36"
  },
  "bg-grey": {
    "width": "750",
    "height": "20",
    "backgroundColor": "#F0F0F0"
  },
  "active-parent": {
    "width": "750",
    "height": "90",
    "paddingLeft": "36",
    "paddingRight": "36",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "active-img": {
    "width": "30",
    "height": "30"
  },
  "active-title": {
    "flex": 1,
    "fontSize": "28",
    "color": "#CF1126",
    "lineHeight": "36",
    "marginLeft": "15"
  },
  "presell": {
    "position": "absolute",
    "right": 0,
    "top": 0,
    "width": "600"
  }
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _titleBar = __webpack_require__(2);

var _titleBar2 = _interopRequireDefault(_titleBar);

var _line = __webpack_require__(17);

var _line2 = _interopRequireDefault(_line);

var _buyGoodsPop = __webpack_require__(21);

var _buyGoodsPop2 = _interopRequireDefault(_buyGoodsPop);

var _goodsRule = __webpack_require__(32);

var _goodsRule2 = _interopRequireDefault(_goodsRule);

var _gridSelect = __webpack_require__(3);

var _gridSelect2 = _interopRequireDefault(_gridSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modal = weex.requireModule('modal'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var titleBar = weex.requireModule('titleBar');
var loadingModule = weex.requireModule('loadingModule');
var promptModule = weex.requireModule('promptModule');
var utilModule = weex.requireModule('utilModule');
var height = 0;
var bottom = 0;
var comModal = weex.requireModule('ComModule');
var event = new BroadcastChannel('cart');
exports.default = {
    props: {
        from: {
            default: 'goods'
        }
    },
    components: { WxcGridSelect: _gridSelect2.default, rulePop: _goodsRule2.default, pop: _buyGoodsPop2.default, title: _titleBar2.default, line: _line2.default },
    data: function data() {
        return {
            bottom: bottom,
            title: '商品详情',
            brand_provider_level: 0,
            lastTimestamp: 0,
            height: height,
            goods_id: '',
            albums: [],
            num: 1,
            recom_label_name: [],
            goods: null,
            url: '',
            cart_url: '',
            actionType: '',
            is_goods_shipping: 0,
            is_free_shipping: false,
            is_duty_free: false,
            fee_sku: {},
            goods_type: '',
            spec: [],
            webHeight: 10,
            buy_type: '已售罄',
            supply_name: '',
            shareIcon: '',
            taxes_rules: [],
            explain_rules: [{ 'title': '正品保障', 'message': '单创承诺该商品为100%海外正品，假一赔十，正品保障，无忧购物。' }, {}, { 'title': '需要实名认证', 'message': '根据中国海关总署要求，需要您提供真实的收货人姓名、身份证信息配合进行个人物品入境申报。我们严格为该信息保密。' }, { 'title': '是否有中文标签', 'message': '跨境商品是以直邮或者批量海外原产地采购的方式进入国内保税仓，相当于您直接在国外购买商品，是无法提供中文标签的。' }, { 'title': '有没有发票', 'message': '因保税区或海外发货属于境外购买行为，因此无法为您开具发票，请您谅解。' }],
            taxesDatas: [{ 'title': '跨境电商综合税需按一般贸易增值税及消费税税额的70%征收，单创代征代缴。' }, { 'title': '财政部、海关总署、国家税务局发布跨境电子商务零售进口税收政策，自2016年4月8日起，跨境电商单次交易限值为人民币2000元，个人年度交易限值为人民币20000元。' }],
            goodsShippingRules: [{ 'title': '满2件享包邮', 'message': 'melrose品牌任选2件包邮，仅限宁波仓。' }, { 'title': '如A、B商品同时参加“满2件享包邮”活动，购物车添加A商品1件和B商品1件一起下单可即享受包邮。' }, { 'title': '首页搜索“满2件包邮”，即可快速找到参与此活动的商品。' }],
            customStyles: {
                lineSpacing: '15px',
                color: '#666666',
                width: 'auto',
                height: '44px',
                icon: '',
                depotName: '',
                borderColor: '#FFFFFFFF',
                checkedBorderColor: '#FFFFFFFF',
                checkedColor: '#FFF',
                disabledColor: '#FF666666',
                backgroundColor: '#FFF6F6F6',
                checkedBackgroundColor: '#CF1126'
            },
            goodsSku: {},
            shareData: {},
            goodsDepots: [],
            goodsRegions: [],
            buyGoodsRegions: [],
            vg_activity: null,
            tax_region_id: '',
            shipping_title: '',
            shipping_tax_title: '',
            depot_id: '',
            count: 0,
            buySpec: '',
            specName: '',
            taxes_fee: '0.00',
            freight: '0.00',
            default_no: 1,
            buySpecs: [],
            online_status: '',
            showTaxesRule: false,
            showExplainRule: false,
            showGoodsShippingRule: false,
            showAddCart: false,
            keyBoardShow: false,
            isSelectRegions: false,
            showFetchLoading: false,
            enableStyles: {
                lineSpacing: '15px',
                color: '#999999',
                width: 'auto',
                height: '50px',
                icon: '',
                depotName: '',
                borderColor: '#FFFFFFFF',
                checkedBorderColor: '#FFFFFFFF',
                checkedColor: '#999999',
                disabledColor: '#FF666666',
                backgroundColor: '#FFF6F6F6',
                checkedBackgroundColor: '#FFF6F6F6'
            },
            abroad_icon: 'http://img.abmau.com/abmau/8ae8fe552ea5d162b4df85b067947d4f.png',
            time: 0,
            currentTime: 0,
            differencesTime: 0,
            countDownStr: '',
            countDownInterval: ''
        };
    },


    methods: {
        viewstart: function viewstart() {
            this.getCartNum();
        },
        clickOpenVip: function clickOpenVip() {
            this.jumpTo2('openupvip/primaryVip', '', {});
        },
        fetch: function fetch() {
            var _this = this;
            if (_this.showFetchLoading) {
                loadingModule.show({ msg: '' });
            }
            _this.showFetchLoading = false;
            _this.Get(_this.api().shop_center + _this.goods_id, {
                is_store: 0,
                tax_region_id: this.tax_region_id
            }, function (res) {
                loadingModule.cancel(function (ret) {});
                if (res.data.code == 0) {
                    _this.albums = res.data.data.albums;
                    _this.goods = res.data.data;
                    _this.brand_provider_level = _this.goods.brand_provider_level;
                    _this.goods_title = res.data.data.name;
                    _this.recom_label_name = res.data.data.recom_label_name;
                    _this.url = res.data.data.details;
                    _this.is_goods_shipping = res.data.data.is_goods_shipping;
                    _this.is_free_shipping = res.data.data.is_free_shipping;
                    _this.is_duty_free = res.data.data.is_duty_free;
                    _this.goods_type = res.data.data.page_type;
                    _this.online_status = res.data.data.online_status;
                    _this.spec = res.data.data.spec;
                    _this.fee_sku = res.data.data.fee_sku;
                    _this.goods_id = res.data.data.id;
                    if (res.data.data.online_status == 0) {
                        _this.buy_type = '已售罄';
                    } else {
                        _this.buy_type = '即将开售';
                    }
                    if (_this.fee_sku && _this.fee_sku.depot_name) {
                        _this.explain_rules.splice(1, 1, { 'title': _this.fee_sku.depot_name, 'message': _this.fee_sku.depot_intro });
                    }
                    var rules = [];
                    var taxesData = {};
                    if (res.data.data.page_type == 1 || res.data.data.page_type == 3) {
                        taxesData.title = '额外税费需用户承担';
                        taxesData.message = '本商品为海外直邮商品，如果在邮件通关过程中，中国海关认为需要缴税，请根据中国海关要求完成清关手续。';
                        rules.push(taxesData);
                    } else if (res.data.data.page_type == 2 || res.data.data.page_type == 4) {
                        if (res.data.data.page_type == 2) {
                            taxesData.title = '本商品价格已包税';
                        } else {
                            taxesData.title = '根据国家政策规定，本商品适用于“跨境电商综合税”，实际结算税费请以提交订单时的应付总额明细为准。';
                        }
                        rules.push(taxesData);
                        rules = rules.concat(_this.taxesDatas);
                    }
                    _this.taxes_rules = rules;
                    if (_this.goods.no_share == 0) {
                        _this.getShare();
                    } else {
                        _this.$emit('hideShare', {});
                    }
                    _this.goodsRegions = _this.resetRegions(res.data.data.all_region);
                    _this.vg_activity = res.data.data.vg_activity;
                    _this.cart_url = res.data.data.cart_url;
                    _this.time = res.data.data.buy_start_str;
                    _this.currentTime = Math.floor(res.data.data.server_time_str);
                    if (_this.countDownInterval && _this.countDownInterval.toString().length > 0) {
                        clearInterval(_this.countDownInterval);
                    }
                    if (_this.time != 0 && _this.online_status != 0) {
                        _this.differencesTime = _this.time - _this.currentTime;
                        _this.startBuyTime();
                    }
                    if (res.data.data.is_material === 1) {
                        _this.$emit('showMaterial', { id: _this.goods_id, brandId: _this.goods.brand_id });
                    }
                }
            });
        },
        getCartNum: function getCartNum() {
            var _this = this;
            _this.Get(_this.api().cart_num, {}, function (res) {
                if (res.data.code == 0) {
                    _this.count = res.data.data._count;
                }
            });
        },
        startBuyTime: function startBuyTime() {
            var _this = this;
            _this.countDownStr = _this.getTimeDifferences(_this.differencesTime);
            _this.countDownInterval = _this.startCountDown(_this.differencesTime, function (t) {
                _this.countDownStr = _this.getTimeDifferences(Math.floor(t));
            }, function () {
                _this.showFetchLoading = true;
                _this.fetch();
            });
        },
        getShare: function getShare() {
            var _this = this;
            if (_this.goods_id > 0) {
                _this.Get(_this.api().get_share, {
                    goods_id: _this.goods_id
                }, function (res) {
                    if (res.data.code == 0) {
                        var data = res.data.data;
                        if (data && data.share_url && data.goods_img) {
                            _this.shareIcon = "assets://icon_white_share";
                            _this.shareData = data;
                            _this.$emit('showShare', {});
                        } else {
                            _this.$emit('hideShare', {});
                        }
                    }
                });
            }
        },
        getGoodsSku: function getGoodsSku(type, input) {
            var _this = this;
            loadingModule.show({ msg: '' });
            _this.Get(_this.api().goods_sku + _this.goods_id, {
                is_store: 0,
                tax_region_id: _this.tax_region_id
            }, function (res) {
                loadingModule.cancel(function (ret) {
                    var result = ret.result;
                    if (result == 'dismiss') {
                        if (res.data.code == 0) {
                            _this.goodsSku = res.data.data;
                            _this.depot_id = res.data.data.depot_id;
                            _this.tax_region_id = res.data.data.tax_region_id;
                            if (!_this.isSelectRegions) {
                                _this.num = _this.goodsSku.default_no;
                                _this.default_no = _this.goodsSku.default_no;
                                _this.resetDepots(res.data.data.other_depot_goods);
                                _this.resetSpecs(res.data.data.spec);
                            }
                            _this.isSelectRegions = false;
                            _this.getShopFee(_this.goods_id, _this.num);
                            if (input) input.setDefaultValue(res.data.data.default_no);
                            _this.actionType = type;
                            if (!_this.showAddCart) _this.showAddCart = true;
                            _this.buyGoodsRegions = _this.resetRegions(res.data.data.all_region);
                        } else {
                            promptModule.showPrompt({ msg: res.data.msg, type: 'err' });
                        }
                    }
                });
            });
        },
        refreshFee: function refreshFee(num, id) {
            this.getShopFee(id, num);
        },
        getShopFee: function getShopFee(id, num) {
            var _this = this;
            _this.Post(_this.api().shop_fee, {
                is_store: 0,
                goods_num: num,
                goods_id: id,
                tax_region_id: _this.tax_region_id
            }, function (res) {
                if (res.data.code == 0) {
                    _this.shipping_title = res.data.data.shipping_title;
                    _this.shipping_tax_title = res.data.data.shipping_tax_title;
                    _this.taxes_fee = res.data.data.shipping_tax_fee;
                    _this.freight = res.data.data.shipping_fee;
                }
            });
        },
        resetSpecs: function resetSpecs(datas) {
            var _this = this;
            if (datas != '' && datas.length > 0) {
                if (datas && datas.length > 0) {
                    var specs = [];
                    for (var i = 0; i < datas.length; i++) {
                        var data = datas[i];
                        data.title = data.spec;
                        if (i == 0) {
                            data.checked = true;
                            _this.specName = data.spec;
                            _this.buySpec = data;
                            _this.default_no = data.min_count;
                            _this.num = _this.default_no;
                        }
                        specs.push(data);
                    }
                    _this.buySpecs = specs;
                }
            } else {
                var spec = {};
                spec.type = 0;
                spec.stock = _this.goodsSku.stock;
                _this.buySpec = spec;
                _this.buySpecs = [];
            }
        },
        resetRegions: function resetRegions(datas) {
            var _this = this;
            var index = -1;
            var regions = [];
            if (datas && datas.length > 0) {
                for (var i = 0; i < datas.length; i++) {
                    var data = datas[i];
                    if (index == -1 && data.region_goods_id == _this.goods_id) {
                        if (!_this.tax_region_id || _this.tax_region_id == data.tax_region_id) {
                            _this.tax_region_id = data.tax_region_id;
                            index = i;
                            data.checked = true;
                        }
                    }
                    data.title = data.name;
                    regions.push(data);
                }
                if (index == -1) {
                    regions[0].checked = true;
                    _this.tax_region_id = regions[0].tax_region_id;
                }
            }
            return regions;
        },
        resetDepots: function resetDepots(datas) {
            var _this = this;
            if (datas && datas.length > 0) {
                var depots = [];
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
                        }
                        depots.push(data);
                    }
                }
                this.goodsDepots = depots;
            }
        },
        share: function share(event) {
            if (event.timestamp - this.lastTimestamp < 3000) return;
            this.lastTimestamp = event.timestamp;
            if (this.shareData && this.goods.no_share == 0) {
                utilModule.getABMShareView({
                    'share_type': 'share_goods',
                    'title': this.shareData.title,
                    'desc': this.shareData.desc,
                    'webUrl': this.shareData.share_url,
                    'imageUrl': this.shareData.goods_img,
                    'copy_item': this.shareData.share_url
                });
            }
        },
        selectSpec: function selectSpec(num, id, specName, buySpec) {
            this.num = num;
            this.default_no = num;
            this.specName = specName;
            this.buySpec = buySpec;
            this.getShopFee(id, num);
        },
        selectDepot: function selectDepot(data, type, input) {
            this.goods_id = data.goods_id;
            this.tax_region_id = "";
            this.getGoodsSku(type, input);
            this.fetch();
        },
        selectBuyRegions: function selectBuyRegions(type, name, id) {
            this.tax_region_id = id;
            this.isSelectRegions = true;
            this.getGoodsSku(type, '');
            this.fetch();
        },
        selectRegions: function selectRegions(res, _ref) {
            var selectIndex = _ref.selectIndex,
                checked = _ref.checked,
                checkedList = _ref.checkedList;

            var regions = this.goodsRegions[selectIndex];
            this.tax_region_id = regions.tax_region_id;
            this.goods_id = regions.region_goods_id;
            this.fetch();
        },
        loadFinish: function loadFinish(res) {
            this.webHeight = res.height;
        },
        error: function error(res) {
            if (this.compareVersion(weex.config.env.appVersion, '3.1.0')) this.$refs.web.setReload();
        },
        addCart: function addCart() {
            this.getGoodsSku(1, null);
        },
        buyNow: function buyNow() {
            this.getGoodsSku(2, null);
        },
        showTaxesPop: function showTaxesPop() {
            this.showTaxesRule = true;
        },
        showExplainPop: function showExplainPop() {
            this.showExplainRule = true;
        },
        closeMask: function closeMask() {
            this.showExplainRule = false;
            this.showGoodsShippingRule = false;
            this.showTaxesRule = false;
            this.showAddCart = false;
        },
        changeCartNum: function changeCartNum(count) {
            //this._count = count;
            this.getCartNum();
            utilModule.refreshCart();
        },
        goCart: function goCart() {
            var _this = this;
            _this.jumpTo2('shop/cart', '', {});
        },
        checkCount: function checkCount(type, id, value, input) {
            var count = 0;
            if (type === 'minus') {
                if (this.num > 1) {
                    count = parseInt(this.num) - 1;
                } else {
                    return;
                }
            } else if (type === 'plus') {
                count = parseInt(this.num) + 1;
            } else if (type === 'close') {
                count = value;
            }
            var _this = this;
            loadingModule.show({ msg: '' });
            _this.Get(_this.api().count_check, {
                goods_num: count,
                goods_id: id,
                spec_stock: _this.buySpec.stock
            }, function (res) {
                loadingModule.cancel(function (ret) {
                    var result = ret.result;
                    if (result == 'dismiss') {
                        if (res.data.code == '0') {
                            _this.num = count;
                            _this.getShopFee(id, count);
                            if (input) input.setDefaultValue(count);
                        } else if (res.data.code == 8313 || res.data.code == 7005) {
                            if (type === 'close') if (input) input.setDefaultValue(_this.num);
                            promptModule.showPrompt({ msg: res.data.msg, type: 'err' });
                        } else {
                            promptModule.showPrompt({ msg: res.data.msg, type: 'err' });
                        }
                        _this.keyBoardShow = false;
                    }
                });
            });
        },
        closeKeyboard: function closeKeyboard(value, input) {
            if (value) {
                if (value < this.default_no) {
                    this.num = parseInt(this.default_no);
                    promptModule.showPrompt({ msg: '该商品最少购买' + this.default_no + '件', type: 'prompt' });
                    if (input) {
                        input.setDefaultValue(this.default_no);
                        this.getShopFee(this.goods_id, this.num);
                    }
                } else {
                    this.keyBoardShow = true;
                    this.checkCount('close', this.goods_id, parseInt(value), input);
                }
            } else {
                this.num = parseInt(this.default_no);
                promptModule.showPrompt({ msg: '购买数量不能为空', type: 'prompt' });
                if (input) {
                    input.setDefaultValue(this.default_no);
                    this.getShopFee(this.goods_id, this.num);
                }
            }
        },
        ok: function ok() {
            var _this = this;
            loadingModule.show({ msg: '请稍候...' });
            if (this.keyBoardShow) return;
            if (_this.actionType == 2) {
                _this.buy();
            } else {
                _this.shopBuy();
            }
        },
        shopBuy: function shopBuy() {
            var _this = this;
            _this.Post(_this.api().shop_buy, {
                // goods_id: _this.goods_id + '_' + _this.buySpec.type + '_' + _this.tax_region_id,
                goods_id: _this.goods_id,
                goods_num: _this.num,
                spec_type: _this.buySpec.type,
                spec_stock: _this.buySpec.stock,
                tax_region_id: _this.tax_region_id
            }, function (res) {
                loadingModule.cancel(function (ret) {
                    var result = ret.result;
                    if (result == 'dismiss') {
                        if (res.data.code == 0) {
                            var count = res.data.data._count;
                            _this.changeCartNum(count);
                            _this.closeMask();
                            event.postMessage(_this.eventBusTag().RESET_CART);
                        } else {
                            promptModule.showPrompt({ msg: res.data.msg, type: 'err' });
                        }
                    }
                });
            });
        },
        buy: function buy() {
            var _this = this;
            _this.Post(_this.api().buy_now, {
                goods_id: _this.goods_id,
                goods_num: _this.num,
                spec_type: _this.buySpec.type,
                spec_stock: _this.buySpec.stock,
                type: 'quick',
                tax_region_id: _this.tax_region_id
            }, function (res) {
                loadingModule.cancel(function (ret) {
                    var result = ret.result;
                    if (result == 'dismiss') {
                        if (res.data.code == 0) {
                            _this.closeMask();
                            _this.jumpTo2('order/confirmOrder', '', { type: 'quick' });
                        } else {
                            promptModule.showPrompt({ msg: res.data.msg, type: 'err' });
                        }
                    }
                });
            });
        },
        showBanner: function showBanner(item, index) {
            var _this = this;
            if (_this.compareVersion(weex.config.env.appVersion, '3.1.0')) utilModule.showImageWatcher(item, index);
        },
        getTimeDifferences: function getTimeDifferences(usedTime) {
            var days = Math.floor(usedTime / (24 * 3600));
            //计算出小时数
            var leave1 = usedTime % (24 * 3600);
            var hours = Math.floor(leave1 / 3600);
            //计算相差分钟数
            var leave2 = leave1 % 3600;
            var minutes = Math.floor(leave2 / 60);
            var leave3 = leave2 % 60;
            var second = Math.floor(leave3);
            var value = '';
            var dayStr = days < 10 ? '0' + days : days;
            var hourStr = hours < 10 ? '0' + hours : hours;
            var minuteStr = minutes < 10 ? '0' + minutes : minutes;
            var secondStr = second < 10 ? '0' + second : second;
            if (days != 0) {
                value = dayStr + '天' + hourStr + '时' + minuteStr + '分' + ':' + secondStr + '秒';
            } else if (hours != 0) {
                value = hourStr + '时' + minuteStr + '分' + ':' + secondStr + '秒';
            } else if (minutes != 0) {
                value = minuteStr + '分' + ':' + secondStr + '秒';
            } else {
                value = secondStr + '秒';
            }
            return value;
        },
        startCountDown: function startCountDown(time, each, call) {
            var t = time;
            aa();
            var countDown = setInterval(aa, 1000);
            function aa() {
                t = t - 1;
                if (typeof each == 'function') {
                    each(t);
                }
                if (t <= 0) {
                    clearInterval(countDown);
                    if (typeof call == 'function') {
                        call();
                    }
                }
            }
            return countDown;
        },
        goActive: function goActive() {
            this.jumpTo2('web/webView', '', { title: "九月销售排行榜奖励活动", url: decodeURIComponent(this.vg_activity.url) });
        },
        openGoodsShippingRule: function openGoodsShippingRule() {
            this.showGoodsShippingRule = true;
        }
    },

    created: function created() {
        var self = this;
        self.getTopHeight(self);
        self.isIpx(self);
        self.title = self.GetUrlPara(weex.config.bundleUrl, 'title');
        self.goods_id = self.GetUrlPara(weex.config.bundleUrl, 'goods_id');
        if (!self.title || self.title == 'undefined') self.title = "商品详情";
        self.fetch();
        self.getCartNum();
        titleBar.addFloatView();
        if (weex.config.env.platform.toLowerCase() === 'android' && self.compareVersion(weex.config.env.appVersion, '3.1.0')) {
            utilModule.eventListener(function () {});
            var globalEvent = weex.requireModule('globalEvent');
            globalEvent.addEventListener("geolocation", function (e) {
                if (self.showTaxesRule) {
                    self.showTaxesRule = false;
                } else if (self.showExplainRule) {
                    self.showExplainRule = false;
                } else if (self.showAddCart) {
                    self.showAddCart = false;
                } else {
                    self.popBar();
                }
            });
        }
    },

    destroyed: function destroyed() {
        clearInterval(this.countDownInterval);
    }
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {
  "title": {
    "width": "750",
    "backgroundColor": "#ffffff"
  },
  "line": {
    "width": "750",
    "height": "1.4",
    "backgroundColor": "#e2e2e2"
  },
  "title_bar": {
    "width": "750",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "left": {
    "width": "180",
    "flexDirection": "row",
    "justifyContent": "flex-start",
    "alignItems": "center",
    "paddingLeft": "36"
  },
  "middle": {
    "alignItems": "center"
  },
  "middle-title": {
    "fontSize": "36",
    "color": "#333333",
    "height": "44",
    "lineHeight": "40",
    "textAlign": "center"
  },
  "right": {
    "width": "180",
    "paddingRight": "36",
    "alignItems": "flex-end"
  },
  "left-button": {
    "width": "21",
    "height": "36",
    "marginRight": "12"
  },
  "right-button": {
    "width": "32",
    "height": "32"
  },
  "icon-text": {
    "fontSize": "28",
    "color": "#333333"
  },
  "setting_hint": {
    "width": "14",
    "height": "14",
    "position": "absolute",
    "right": "28",
    "top": "18",
    "backgroundColor": "#CF1126",
    "borderRadius": 50
  }
}

/***/ }),
/* 15 */
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
//
//
//
//
//

var nativeBarHeight = 0;
var titleHeight = 0;
var modal = weex.requireModule('modal');
var promptModule = weex.requireModule('promptModule');
exports.default = {
    props: {
        backgroundColor: {
            type: String,
            default: '#fff'
        },
        hintLeft: {
            type: Boolean,
            default: true
        },
        leftButton: {
            type: String,
            default: 'assets://ic_back'
        },
        textColor: {
            type: String,
            default: '#333333'
        },
        rightButton: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: '标题'
        },
        leftText: {
            type: String,
            default: '返回'
        },
        rightText: {
            type: String,
            default: ''
        },
        useDefaultReturn: {
            type: Boolean,
            default: true
        },
        show: {
            type: Boolean,
            default: true
        },
        line: {
            type: Boolean,
            default: true
        },
        isFinish: {
            type: Boolean,
            default: true
        },
        redShow: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            nativeBarHeight: nativeBarHeight,
            titleHeight: titleHeight
        };
    },

    methods: {
        leftButtonClicked: function leftButtonClicked() {
            var _this = this;
            if (_this.isFinish) _this.popBar();else _this.$emit('wxcMinibarLeftButtonClicked', {});
        },
        rightButtonClicked: function rightButtonClicked() {
            var hasRightContent = this.rightText || this.rightButton || this.$slots && this.$slots.right;
            hasRightContent && this.$emit('wxcMinibarRightButtonClicked', {});
        }
    },
    created: function created() {
        this.getTitleHeight(this);
        this.getStatusBarHeight(this);
    }
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["title"],
    style: {
      backgroundColor: _vm.backgroundColor
    }
  }, [_c('div', {
    staticClass: ["title_bar"],
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
  }, [(_vm.hintLeft) ? _vm._t("left", [_c('image', {
    staticClass: ["left-button"],
    attrs: {
      "src": _vm.leftButton
    }
  }), _c('text', {
    staticClass: ["icon-text"],
    style: {
      color: _vm.textColor
    }
  }, [_vm._v(_vm._s(_vm.leftText))])]) : _vm._e()], 2), _vm._t("middle", [_c('text', {
    staticClass: ["middle-title"],
    style: {
      color: _vm.textColor
    }
  }, [_vm._v(_vm._s(_vm.title))])]), _c('div', {
    staticClass: ["right"],
    on: {
      "click": _vm.rightButtonClicked
    }
  }, [_vm._t("right", [(_vm.rightButton && !_vm.rightText) ? _c('image', {
    staticClass: ["right-button"],
    attrs: {
      "src": _vm.rightButton,
      "resize": "contain",
      "ariaHidden": true
    }
  }) : _vm._e(), (_vm.rightText) ? _c('text', {
    staticClass: ["icon-text"],
    style: {
      color: _vm.textColor
    }
  }, [_vm._v(_vm._s(_vm.rightText))]) : _vm._e()])], 2), (_vm.redShow) ? _c('div', {
    staticClass: ["setting_hint"]
  }) : _vm._e()], 2), (_vm.line) ? _c('div', {
    staticClass: ["line"]
  }) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(18)
)

/* script */
__vue_exports__ = __webpack_require__(19)

/* template */
var __vue_template__ = __webpack_require__(20)
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
/* 18 */
/***/ (function(module, exports) {

module.exports = {
  "line": {
    "width": "750",
    "height": "1.4",
    "backgroundColor": "#e2e2e2"
  }
}

/***/ }),
/* 19 */
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
/* 20 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["line"]
  })
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(22)
)

/* script */
__vue_exports__ = __webpack_require__(23)

/* template */
var __vue_template__ = __webpack_require__(31)
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
__vue_options__.__file = "F:\\weex\\weex_develop\\abm_dev_weex\\abm-weexSource\\src\\components\\buyGoodsPop.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-a7170080"
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
/* 22 */
/***/ (function(module, exports) {

module.exports = {
  "pop": {
    "width": "750",
    "top": 0,
    "left": 0,
    "position": "absolute"
  },
  "mask": {
    "width": "750",
    "backgroundColor": "#000000",
    "opacity": 0.2,
    "position": "absolute",
    "overflow": "hidden",
    "top": 0,
    "left": 0
  },
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _gridSelect = __webpack_require__(3);

var _gridSelect2 = _interopRequireDefault(_gridSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var animation = weex.requireModule('animation'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var titleBar = weex.requireModule('titleBar');
var modal = weex.requireModule('modal');
var loadingModule = weex.requireModule('loadingModule');
var promptModule = weex.requireModule('promptModule');
var height = 0;
exports.default = {
    props: ['depots', 'goods', 'action', 'buySpecs', 'specName', 'buySpec', 'taxes_fee', 'freight', 'regions', 'default_no', 'shipping_title', 'shipping_tax_title', 'is_optional'],
    components: { WxcGridSelect: _gridSelect2.default },
    data: function data() {
        return {
            isIphoneX: false,
            height: height,
            topHeight: 700,
            lastBuyTimestamp: 0,
            id: '',
            customStyles: {
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
            },
            taxes_fee: '0.00',
            freight: '0.00'
        };
    },

    methods: {
        close: function close() {
            this.moveBottom();
        },

        moveTop: function moveTop() {
            //给pop组件一个进入的时候向上的animation动画效果
            var _this = this;
            var content = this.$refs.content;
            animation.transition(content, {
                styles: {
                    transform: 'translate(-750px, 0px)',
                    transformOrigin: 'center center'
                },
                duration: 500, //ms
                timingFunction: 'ease',
                delay: 0 //ms
            }, function (res) {});
        },
        moveBottom: function moveBottom() {
            //给pop组件一个进入的时候向上的animation动画效果
            var _this = this;
            var content = this.$refs.content;
            animation.transition(content, {
                styles: {
                    transform: 'translate(0px, 750px)',
                    transformOrigin: 'center center'
                },
                duration: 500, //ms
                timingFunction: 'ease',
                delay: 0 //ms
            }, function (res) {
                _this.$emit('close', false);
            });
        },
        selectSpec: function selectSpec(res, _ref) {
            var selectIndex = _ref.selectIndex,
                checked = _ref.checked,
                checkedList = _ref.checkedList;

            var spec = this.buySpecs[selectIndex];
            this.$refs.goodsCount.setDefaultValue(spec.min_count);
            this.$emit('selectSpec', spec.min_count, this.id, spec.spec, spec);
        },
        selectDepot: function selectDepot(res, _ref2) {
            var selectIndex = _ref2.selectIndex,
                checked = _ref2.checked,
                checkedList = _ref2.checkedList;

            var depot = this.depots[selectIndex];
            this.id = depot.goods_id;
            this.depotName = depot.depot_name;
            this.$emit('selectDepot', depot, this.action, this.$refs.goodsCount);
        },
        selectRegions: function selectRegions(res, _ref3) {
            var selectIndex = _ref3.selectIndex,
                checked = _ref3.checked,
                checkedList = _ref3.checkedList;

            var region = this.regions[selectIndex];
            this.$emit('selectRegions', this.action, region.name, region.tax_region_id);
        },
        minus: function minus() {
            var _this = this;
            _this.$emit('checkCount', 'minus', _this.id, 0, _this.$refs.goodsCount);
        },
        plus: function plus() {
            var _this = this;
            _this.$emit('checkCount', 'plus', _this.id, 0, _this.$refs.goodsCount);
        },
        closeKeyboard: function closeKeyboard(e) {
            this.$emit('closeKeyboard', e.value, this.$refs.goodsCount);
        },
        ok: function ok(event) {
            if (event.timestamp - this.lastTimestamp < 2000) return;
            this.lastTimestamp = event.timestamp;
            this.$emit('ok');
        },
        changeAddress: function changeAddress() {
            if (this.regions) {
                this.jumpTo2('address/order_address', '', { address_id: this.regions.address_id, type: 'list', from: '1', goods_id: this.id });
            } else {
                this.jumpTo2('address/order_address', '', { address_id: 0, type: 'list', from: 1, goods_id: this.id });
            }
        }
    },

    mounted: function mounted() {
        //vue生命周期中渲染时候$refs要能获取到，所以要在mounted时候moveTop()
        var _this = this;
        _this.iPhoneX(_this);
        if (_this.isIphoneX) _this.height = weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 - 68;else _this.height = weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750;
        _this.id = _this.goods.id;
        if (_this.goods.message && _this.goods.canbuy != 0) {
            promptModule.showPrompt({ msg: _this.goods.message, type: 'prompt' });
        }
        if (!_this.regions) {
            _this.regions = {};
        }
    }
};

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
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["pop"],
    style: {
      height: _vm.height + 'px'
    }
  }, [_c('div', {
    staticClass: ["mask"],
    style: {
      height: _vm.height + 'px'
    },
    on: {
      "click": function($event) {
        _vm.close()
      }
    }
  }), (_vm.goods) ? _c('div', {
    ref: "content",
    style: {
      position: 'fixed',
      bottom: 0
    },
    on: {
      "click": function () {}
    }
  }, [_c('div', {
    style: {
      flex: 1
    }
  }), _c('div', {
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
  }, [_vm._v(")")])]), (_vm.depotName) ? _c('text', {
    staticClass: ["depot"]
  }, [_vm._v("已选择 " + _vm._s(_vm.specName) + "  " + _vm._s(_vm.depotName))]) : _vm._e(), (!_vm.depotName) ? _c('text', {
    staticClass: ["depot"]
  }, [_vm._v("已选择 " + _vm._s(_vm.specName) + "  " + _vm._s(_vm.goods.depot_name))]) : _vm._e()])]), _c('div', [(_vm.buySpecs && _vm.buySpecs.length > 0) ? _c('div', [_c('text', {
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
      "customStyles": _vm.customStyles,
      "list": _vm.buySpecs
    },
    on: {
      "select": function (params) { return _vm.selectSpec('res', params); }
    }
  })], 1) : _vm._e(), (_vm.depots && _vm.depots.length > 0) ? _c('div', [_c('text', {
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
      "customStyles": _vm.customStyles,
      "list": _vm.depots
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
      "value": _vm.default_no,
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
  }, [_vm._v("预热")]) : _vm._e(), (_vm.goods.stock >= _vm.buySpec.stock) ? _c('div', [(_vm.goods.online_status == 0 && _vm.buySpec.stock <= 0) ? _c('text', {
    staticClass: ["status"],
    style: {
      'background-color': '#e1e1e1',
      height: 34 + 'px',
      width: 34 + 'px'
    }
  }, [_vm._v("缺")]) : _vm._e(), (_vm.goods.online_status == 0 && _vm.buySpec.stock > 0 && _vm.buySpec.stock <= 100) ? _c('text', {
    staticClass: ["status"],
    style: {
      'background-color': '#FF916F',
      height: 34 + 'px',
      width: 34 + 'px'
    }
  }, [_vm._v("少")]) : _vm._e(), (_vm.goods.online_status == 0 && _vm.buySpec.stock > 100) ? _c('text', {
    staticClass: ["status"],
    style: {
      'background-color': '#64D791',
      height: 34 + 'px',
      width: 34 + 'px'
    }
  }, [_vm._v("多")]) : _vm._e()]) : _vm._e(), (_vm.goods.stock < _vm.buySpec.stock) ? _c('div', [(_vm.goods.online_status == 0 && _vm.goods.stock <= 0) ? _c('text', {
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
  }, [_vm._v("多")]) : _vm._e()]) : _vm._e()])], 1)]), _c('div', {
    staticClass: ["goods_price"]
  }, [(_vm.taxes_fee == 'no_show') ? _c('text', {
    staticClass: ["taxes"]
  }, [_vm._v(_vm._s(_vm.shipping_title) + " ¥" + _vm._s(_vm.freight))]) : _vm._e(), (_vm.taxes_fee != 'no_show') ? _c('text', {
    staticClass: ["taxes"]
  }, [_vm._v(_vm._s(_vm.shipping_title) + " ¥" + _vm._s(_vm.freight) + " (" + _vm._s(_vm.shipping_tax_title) + "¥" + _vm._s(_vm.taxes_fee) + ")")]) : _vm._e()])])]), _c('image', {
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
  }, [(_vm.goods.online_status == 0 && _vm.goods.canbuy == 0 && _vm.buySpec && (_vm.buySpec.stock <= 0 || _vm.goods.stock <= 0)) ? _c('text', {
    staticClass: ["finish"],
    style: {
      'background-color': '#666666'
    }
  }, [_vm._v("缺少库存")]) : _vm._e(), (_vm.goods.online_status == 0 && _vm.goods.canbuy == 0 && _vm.buySpec && _vm.buySpec.stock > 0) ? _c('text', {
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
  }, [_vm._v("限制购买")]) : _vm._e(), (_vm.goods.online_status != 0) ? _c('text', {
    staticClass: ["finish"],
    style: {
      'background-color': '#ac162c'
    },
    on: {
      "click": _vm.ok
    }
  }, [_vm._v("确定")]) : _vm._e()]) : _vm._e(), (_vm.isIphoneX) ? _c('div', {
    staticStyle: {
      height: "68px",
      backgroundColor: "white"
    }
  }) : _vm._e()]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(33)
)

/* script */
__vue_exports__ = __webpack_require__(34)

/* template */
var __vue_template__ = __webpack_require__(43)
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
__vue_options__.__file = "F:\\weex\\weex_develop\\abm_dev_weex\\abm-weexSource\\src\\components\\goodsRule.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1af93cb1"
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
/* 33 */
/***/ (function(module, exports) {

module.exports = {
  "pop": {
    "width": "750",
    "top": 0,
    "left": 0,
    "position": "absolute"
  },
  "parent": {
    "position": "absolute",
    "left": 0,
    "right": 0
  },
  "mask": {
    "width": "750",
    "backgroundColor": "#000000",
    "opacity": 0.2,
    "position": "absolute",
    "overflow": "hidden",
    "top": 0,
    "left": 0
  },
  "top": {
    "width": "750",
    "height": "90"
  },
  "top-title": {
    "width": "750",
    "fontSize": "30",
    "color": "#333333",
    "textAlign": "center",
    "position": "absolute",
    "top": "30",
    "left": 0
  },
  "top-cancle": {
    "width": "26",
    "height": "26",
    "marginRight": "30",
    "position": "absolute",
    "top": "30",
    "left": "695"
  },
  "content": {
    "flexDirection": "column",
    "width": "750"
  },
  "finish": {
    "width": "750",
    "height": "90",
    "fontSize": "30",
    "color": "#FFFFFF",
    "lineHeight": "90",
    "textAlign": "center",
    "backgroundColor": "#CF1126"
  },
  "item": {
    "flexDirection": "row",
    "marginTop": "50",
    "marginLeft": "20"
  },
  "item-icon": {
    "width": "12",
    "height": "12",
    "marginTop": "7",
    "marginRight": "30"
  },
  "item-content": {
    "width": "650",
    "fontSize": "26",
    "color": "#333333",
    "lineHeight": "34",
    "flexWrap": "wrap"
  },
  "item-hint": {
    "width": "650",
    "fontSize": "24",
    "color": "#666666",
    "lineHeight": "34",
    "flexWrap": "wrap",
    "marginTop": "18"
  },
  "line": {
    "width": "750",
    "height": "1.4",
    "backgroundColor": "#e2e2e2"
  }
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _WxcMask = __webpack_require__(4);

var _WxcMask2 = _interopRequireDefault(_WxcMask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { WxcMask: _WxcMask2.default },
    props: {
        rules: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        title: {
            type: String
        },
        ruleIcon: {
            type: String,
            default: 'assets://icon_goods_detail_dot'
        },

        contentWidth: {
            default: '650px'
        }
    },
    data: function data() {
        return {
            isIphoneX: false,
            scrollHeightStyle: {}
        };
    },

    methods: {
        close: function close() {
            this.$emit('close', false);
        }

    },

    created: function created() {
        var self = this;
        self.iPhoneX(self);
        if (weex.config.env.platform == 'iOS') {
            self.scrollHeightStyle = { height: '500px' };
        } else if (weex.config.env.platform == 'android') {
            self.scrollHeightStyle = { maxHeight: '700px', minHeight: '300px' };
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* 35 */
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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcOverlay = __webpack_require__(37);

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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(38);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(39)
)

/* script */
__vue_exports__ = __webpack_require__(40)

/* template */
var __vue_template__ = __webpack_require__(41)
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
/* 39 */
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
/* 40 */
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
/* 41 */
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
/* 42 */
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
/* 43 */
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
  }), _c('div', [_c('div', {
    staticClass: ["content"],
    style: {
      'background-color': '#FFF'
    }
  }, [_c('div', {
    staticClass: ["top"]
  }, [_c('text', {
    staticClass: ["top-title"]
  }, [_vm._v(_vm._s(_vm.title))]), _c('image', {
    staticClass: ["top-cancle"],
    attrs: {
      "src": "assets://ic_goods_details_remove"
    },
    on: {
      "click": function($event) {
        _vm.close()
      }
    }
  })]), _c('div', {
    staticClass: ["line"]
  }), _c('scroller', {
    style: _vm.scrollHeightStyle,
    attrs: {
      "offsetAccuracy": "300"
    }
  }, [_c('div', [_vm._l((_vm.rules), function(item, index) {
    return _c('div', {
      staticClass: ["item"]
    }, [(_vm.ruleIcon) ? _c('image', {
      staticClass: ["item-icon"],
      attrs: {
        "src": _vm.ruleIcon
      }
    }) : _vm._e(), _vm._t("default"), _c('div', {
      style: {
        'flex-direction': 'column'
      }
    }, [_c('text', {
      staticClass: ["item-content"],
      style: {
        width: _vm.contentWidth
      }
    }, [_vm._v(_vm._s(item.title))]), (item.message) ? _c('text', {
      staticClass: ["item-hint"],
      style: {
        width: _vm.contentWidth
      }
    }, [_vm._v(_vm._s(item.message))]) : _vm._e()])], 2)
  }), _c('div', {
    style: {
      height: 50 + 'px'
    }
  })], 2)])]), _c('text', {
    staticClass: ["finish"],
    on: {
      "click": function($event) {
        _vm.close()
      }
    }
  }, [_vm._v("确定")])]), (_vm.isIphoneX) ? _c('div', {
    staticStyle: {
      height: "68px",
      backgroundColor: "white"
    }
  }) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"],
    on: {
      "viewstart": function($event) {
        _vm.viewstart()
      }
    }
  }, [(_vm.from == 'goods') ? _c('title', {
    attrs: {
      "title": _vm.title,
      "rightButton": _vm.shareIcon
    },
    on: {
      "wxcMinibarRightButtonClicked": _vm.share
    }
  }) : _vm._e(), (_vm.goods) ? _c('list', {
    style: {
      flex: 1
    }
  }, [_c('cell', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('div', [_c('div', [(_vm.albums && _vm.albums.length != 0) ? _c('slider', {
    staticClass: ["banner"],
    attrs: {
      "scrollable": "true",
      "autoPlay": "true",
      "interval": "3000",
      "infinite": "true"
    }
  }, [_vm._l((_vm.albums), function(item, index) {
    return _c('div', {
      key: index
    }, [_c('image', {
      staticClass: ["banner_image"],
      attrs: {
        "src": _vm.albums[index]
      },
      on: {
        "click": function($event) {
          _vm.showBanner(_vm.albums, index)
        }
      }
    })])
  }), (_vm.albums.length > 1) ? _c('indicator', {
    staticClass: ["indicator"]
  }) : _vm._e()], 2) : _vm._e(), (_vm.brand_provider_level != 1 && _vm.is_goods_shipping != 1) ? _c('line') : _vm._e()], 1), (_vm.brand_provider_level == 1) ? _c('div', {
    staticClass: ["vip_cell"]
  }, [_vm._m(0), _c('div', {
    staticClass: ["vip_horizontal"]
  }, [_c('text', {
    staticClass: ["vip_info"]
  }, [_vm._v("享全场约85折优惠")]), _c('div', {
    staticClass: ["btn_vip_dredge"],
    on: {
      "click": function($event) {
        _vm.clickOpenVip()
      }
    }
  }, [_c('text', {
    staticClass: ["vip_dredge"]
  }, [_vm._v("立即开通")]), _c('image', {
    staticClass: ["vip_next"],
    attrs: {
      "src": "http://img.abmau.com/abmau/197260145f13acf70e06fe37ad4ba0c8.png"
    }
  })])])]) : _vm._e(), (_vm.is_goods_shipping === 1 && _vm.brand_provider_level != 1) ? _c('div', {
    staticClass: ["vip_cell"]
  }, [_c('div', {
    staticClass: ["vip_horizontal"]
  }, [_c('text', {
    staticClass: ["vip_explain"],
    style: {
      'font-size': 28 + 'px',
      color: '#333333',
      fontWeight: 'bold'
    }
  }, [_vm._v("满2件享包邮")])]), _c('div', {
    staticClass: ["vip_horizontal"]
  }, [_c('text', {
    staticClass: ["vip_info"]
  }, [_vm._v("可与其它商品合计件数")]), _c('div', {
    staticClass: ["btn_vip_dredge"],
    on: {
      "click": function($event) {
        _vm.openGoodsShippingRule()
      }
    }
  }, [_c('text', {
    staticClass: ["vip_dredge"],
    style: {
      color: '#666666'
    }
  }, [_vm._v("查看详情")]), _c('image', {
    staticClass: ["vip_next"],
    attrs: {
      "src": "http://img.abmau.com/abmau/197260145f13acf70e06fe37ad4ba0c8.png"
    }
  })])])]) : _vm._e()]), _c('div', {
    staticClass: ["horizontal_info"],
    style: {
      marginBottom: 0
    }
  }, [_c('div', [(_vm.goods.shareprice != 0) ? _c('text', {
    staticClass: ["buy-price"]
  }, [_vm._v(_vm._s(_vm.goods.title) + " ¥" + _vm._s(_vm.goods.shareprice))]) : _vm._e(), (_vm.goods.shareprice == 0 && _vm.goods.retail_tax == 'no_show') ? _c('text', {
    staticClass: ["buy-price"]
  }, [_vm._v(_vm._s(_vm.goods.retail_title) + " ¥" + _vm._s(_vm.goods.retail_price))]) : _vm._e(), (_vm.goods.shareprice == 0 && _vm.goods.retail_tax != 'no_show') ? _c('div', {
    style: {
      flexDirection: 'row',
      alignItems: 'center'
    }
  }, [_c('text', {
    staticClass: ["buy-price"]
  }, [_vm._v(_vm._s(_vm.goods.retail_title) + " ¥" + _vm._s(_vm.goods.retail_price) + " ")]), _c('text', {
    staticClass: ["buy-price-tax"]
  }, [_vm._v("(" + _vm._s(_vm.goods.retail_tax_title) + "¥" + _vm._s(_vm.goods.retail_tax) + ")")])]) : _vm._e()]), _c('div', {
    staticClass: ["goods-status"]
  }, [(_vm.online_status != 0) ? _c('text', {
    staticClass: ["status"],
    style: {
      'background-color': '#CF1126',
      height: 34 + 'px',
      width: 68 + 'px'
    }
  }, [_vm._v("预热")]) : _vm._e(), (_vm.online_status == 0 && _vm.goods.stock <= 0 && _vm.goods.plan_achieved_at) ? _c('text', {
    staticClass: ["plan-time"]
  }, [_vm._v(_vm._s(_vm.goods.plan_achieved_at))]) : _vm._e(), (_vm.online_status == 0 && _vm.goods.stock <= 0) ? _c('text', {
    staticClass: ["status"],
    style: {
      'background-color': '#e1e1e1',
      height: 34 + 'px',
      width: 34 + 'px'
    }
  }, [_vm._v("缺")]) : _vm._e(), (_vm.online_status == 0 && _vm.goods.stock > 0 && _vm.goods.stock <= 100) ? _c('text', {
    staticClass: ["status"],
    style: {
      'background-color': '#FF916F',
      height: 34 + 'px',
      width: 34 + 'px'
    }
  }, [_vm._v("少")]) : _vm._e(), (_vm.online_status == 0 && _vm.goods.stock > 100) ? _c('text', {
    staticClass: ["status"],
    style: {
      'background-color': '#64D791',
      height: 34 + 'px',
      width: 34 + 'px'
    }
  }, [_vm._v("多")]) : _vm._e()])]), _c('div', {
    staticClass: ["retail-price-parent"],
    style: {
      flexDirection: 'row'
    }
  }, [_c('text', {
    staticClass: ["retail-price"]
  }, [_vm._v(_vm._s(_vm.goods.price_title) + " ¥" + _vm._s(_vm.goods.price))]), _c('text', {
    staticClass: ["retail-price"]
  }, [_vm._v(" (")]), _c('text', {
    staticClass: ["retail-disused-price"]
  }, [_vm._v(" ¥" + _vm._s(_vm.goods.market_price))]), _c('text', {
    staticClass: ["retail-price"]
  }, [_vm._v(")")])]), _c('div', {
    style: {
      marginTop: 40 + 'px'
    }
  }, [(_vm.is_free_shipping || (_vm.is_duty_free && _vm.goods_type == 5) || _vm.recom_label_name.length != 0) ? _c('div', {
    staticClass: ["tag-parent"]
  }, [(_vm.is_free_shipping) ? _c('div', {
    staticClass: ["tag"]
  }, [_c('text', {
    staticClass: ["text_tag"]
  }, [_vm._v("包邮")])]) : _vm._e(), (_vm.is_duty_free && _vm.goods_type == 5) ? _c('div', {
    staticClass: ["tag"]
  }, [_c('text', {
    staticClass: ["text_tag"]
  }, [_vm._v("包税")])]) : _vm._e(), _vm._l((_vm.recom_label_name), function(tags, i) {
    return (_vm.recom_label_name.length != 0) ? _c('div', {
      key: i
    }, [_c('div', {
      staticClass: ["tag_label"],
      style: {
        'background-color': tags.color,
        'border-color': tags.color
      }
    }, [_c('text', {
      staticClass: ["text"]
    }, [_vm._v(_vm._s(tags.title))])])]) : _vm._e()
  })], 2) : _vm._e(), _c('text', {
    staticClass: ["title"]
  }, [_vm._v(_vm._s(_vm.goods.name))])]), (_vm.goodsRegions.length != 0) ? _c('div', [_c('div', {
    staticClass: ["bg-grey"]
  }), _c('div', {
    staticClass: ["address-parent"]
  }, [_c('text', {
    staticClass: ["address-title"]
  }, [_vm._v("送至")]), _c('wxc-grid-select', {
    attrs: {
      "single": true,
      "left": 30,
      "right": 0,
      "top": 0,
      "cols": 4,
      "customStyles": _vm.customStyles,
      "list": _vm.goodsRegions
    },
    on: {
      "select": function (params) { return _vm.selectRegions('res', params); }
    }
  })], 1)]) : _vm._e(), (_vm.goods_type != 5) ? _c('div', [_c('line'), _c('div', {
    staticClass: ["cross-border"]
  }, [(_vm.goods.brand_country_name) ? _c('div', {
    style: {
      flexDirection: 'row',
      alignItems: 'center'
    }
  }, [(_vm.goods.brand_country_name === '澳大利亚') ? _c('image', {
    staticClass: ["cross-border-country-icon"],
    attrs: {
      "src": "assets://icon_australia_flag"
    }
  }) : _vm._e(), (_vm.goods.brand_country_name === '韩国') ? _c('image', {
    staticClass: ["cross-border-country-icon"],
    attrs: {
      "src": "assets://icon_korea"
    }
  }) : _vm._e(), (_vm.goods.brand_country_name === '新西兰') ? _c('image', {
    staticClass: ["cross-border-country-icon"],
    attrs: {
      "src": "assets://icon_zealand"
    }
  }) : _vm._e(), _c('text', {
    staticClass: ["cross-border-message"]
  }, [_vm._v(_vm._s(_vm.goods.brand_country_name) + "品牌")]), _c('div', {
    style: {
      width: 30 + 'px'
    }
  })]) : _vm._e(), ((_vm.goods_type == 2 || _vm.goods_type == 4)) ? _c('div', {
    style: {
      flexDirection: 'row',
      alignItems: 'center'
    }
  }, [_c('image', {
    staticClass: ["cross-border-country-icon"],
    attrs: {
      "src": _vm.abroad_icon
    }
  }), _c('text', {
    staticClass: ["cross-border-message-abroad"]
  }, [_vm._v("跨境商品")])]) : _vm._e(), ((_vm.goods_type == 1 || _vm.goods_type == 3)) ? _c('div', {
    style: {
      flexDirection: 'row',
      alignItems: 'center'
    }
  }, [_c('text', {
    staticClass: ["cross-border-country-dot"]
  }), _c('text', {
    staticClass: ["cross-border-message"]
  }, [_vm._v("海外直邮")])]) : _vm._e()])], 1) : _vm._e(), (_vm.vg_activity) ? _c('div', [_c('line'), _c('div', {
    staticClass: ["active-parent"],
    on: {
      "click": function($event) {
        _vm.goActive()
      }
    }
  }, [_c('image', {
    staticClass: ["active-img"],
    attrs: {
      "src": _vm.vg_activity.image
    }
  }), _c('text', {
    staticClass: ["active-title"]
  }, [_vm._v(_vm._s(_vm.vg_activity.title))]), _c('image', {
    staticClass: ["next"],
    attrs: {
      "src": "http://img.abmau.com/abmau/197260145f13acf70e06fe37ad4ba0c8.png"
    }
  })])], 1) : _vm._e(), (_vm.goods_type != 5) ? _c('div', [_c('line'), _c('div', {
    staticClass: ["horizontal"],
    on: {
      "click": function($event) {
        _vm.showTaxesPop()
      }
    }
  }, [_c('text', {
    staticClass: ["taxes-title"]
  }, [_vm._v("税费")]), _c('div', {
    style: {
      width: 45 + 'px'
    }
  }), (_vm.is_duty_free && _vm.goods_type == 2) ? _c('div', {
    staticClass: ["horizontal_tag"]
  }, [_c('text', {
    staticClass: ["text_tag"]
  }, [_vm._v("包税")])]) : _vm._e(), (_vm.goods_type == 2) ? _c('text', {
    staticClass: ["taxes-message"]
  }, [_vm._v("本商品售价已经包税")]) : _vm._e(), (_vm.goods_type == 4) ? _c('text', {
    staticClass: ["taxes-message"]
  }, [_vm._v("跨境电商综合税")]) : _vm._e(), (_vm.goods_type == 1 || _vm.goods_type == 3) ? _c('text', {
    staticClass: ["taxes-message"]
  }, [_vm._v("额外税费需用户承担")]) : _vm._e(), _c('image', {
    staticClass: ["next"],
    attrs: {
      "src": "http://img.abmau.com/abmau/197260145f13acf70e06fe37ad4ba0c8.png"
    }
  })]), _c('line'), _c('div', {
    staticClass: ["horizontal"],
    on: {
      "click": function($event) {
        _vm.showExplainPop()
      }
    }
  }, [_c('text', {
    staticClass: ["explain-title"]
  }, [_vm._v("说明")]), _c('text', {
    staticClass: ["explain-message"]
  }, [_vm._v("正品保障 | " + _vm._s(_vm.fee_sku.supply_name) + "发货")]), _c('image', {
    staticClass: ["next"],
    attrs: {
      "src": "http://img.abmau.com/abmau/197260145f13acf70e06fe37ad4ba0c8.png"
    }
  })])], 1) : _vm._e(), _c('div', {
    staticClass: ["bg-grey"]
  }), _c('div', {
    staticClass: ["content"]
  }, [_c('div', {
    staticClass: ["content_info"],
    style: {
      alignItems: 'center'
    }
  }, [_c('text', {
    staticClass: ["content-title"]
  }, [_vm._v("商品信息")]), _c('div', {
    staticClass: ["content-title-line"]
  }), _vm._l((_vm.spec), function(item, index) {
    return _c('text', {
      staticClass: ["goods-info"]
    }, [_vm._v(_vm._s(item.name) + "  " + _vm._s(item.value))])
  }), (_vm.spec && _vm.spec.length > 0) ? _c('line', {
    style: {
      marginTop: 30 + 'px'
    }
  }) : _vm._e()], 2), _c('abm-web', {
    ref: "web",
    staticClass: ["web"],
    style: {
      height: _vm.webHeight + 'px'
    },
    attrs: {
      "html": _vm.goods.details
    },
    on: {
      "loadFinish": _vm.loadFinish,
      "error": _vm.error
    }
  }), _c('line', {
    style: {
      marginTop: 20 + 'px'
    }
  }), _c('div', {
    style: {
      alignItems: 'center'
    }
  }, [_c('text', {
    staticClass: ["content-title"]
  }, [_vm._v("温馨提示")]), _c('div', {
    staticClass: ["content-title-line"]
  })]), _c('text', {
    staticClass: ["prompt-info"]
  }, [_vm._v("海外进口商品经常更换包装和附件，若更新不及时，敬请谅解！请以实物为准。")]), _c('line'), _c('text', {
    staticClass: ["note-title"]
  }, [_vm._v("告购买人说明书暨购前须知:")]), _c('text', {
    staticClass: ["note-info"]
  }, [_vm._v("        本页面所展示商品的经营者（销售商）为ACCESS BRAND MANAGEMENT PTY LTD，由该销售商负责商品发布、发货、售后服务等销售者工作，其保证所供商品系正品，符合原产地有关品质、健康、标识的相关标准。")]), _c('text', {
    staticClass: ["note-warning"]
  }, [_vm._v("        单创平台及其经营者并非产品售卖方，由销售商（ACCESS BRAND MANAGEMENT PTY LTD）承担产品的质量保证责任。购买人所购买的境外商品，与中国产品标准、法规要求或有所不同，购买人应有充分认识并承担风险。")]), _c('text', {
    staticClass: ["note-info"]
  }, [_vm._v("        根据中国境内相关法律政策，购买人选购的境外商品仅限于个人自用，不得在中国境内进行再次销售。符合属地法律监管要求的可以在中国境外进行再次销售。")]), _c('div', {
    style: {
      height: 35 + 'px'
    }
  })], 1)]), _c('cell', {
    style: {
      height: 90 + 'px'
    },
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  })]) : _vm._e(), (_vm.goods) ? _c('div', {
    staticClass: ["buttom"]
  }, [_c('div', {
    staticClass: ["shop-cart-parent"],
    on: {
      "click": function($event) {
        _vm.goCart()
      }
    }
  }, [_c('image', {
    staticClass: ["shop-cart-icon"],
    attrs: {
      "src": "assets://ic_goods_details_cart"
    }
  }), (_vm.count != 0) ? _c('text', {
    staticClass: ["shop-cart-num"]
  }, [_vm._v(_vm._s(_vm.count))]) : _vm._e()]), (_vm.goods.end_pay != 0 && _vm.online_status == 0) ? _c('text', {
    staticClass: ["goods-none"],
    style: {
      'background-color': '#666666',
      width: 600 + 'px'
    }
  }, [_vm._v("已售罄")]) : _vm._e(), (_vm.goods.end_pay == 0) ? _c('div', {
    style: {
      flexDirection: 'row',
      width: 600 + 'px'
    }
  }, [(_vm.goods.in_cart == 0) ? _c('text', {
    staticClass: ["add-to-cart"],
    on: {
      "click": function($event) {
        _vm.addCart()
      }
    }
  }, [_vm._v("加入购物车")]) : _vm._e(), _c('text', {
    staticClass: ["buy-now"],
    on: {
      "click": function($event) {
        _vm.buyNow()
      }
    }
  }, [_vm._v("立即购买")])]) : _vm._e(), (_vm.online_status != 0) ? _c('div', {
    staticClass: ["presell"],
    style: {
      flexDirection: 'row'
    },
    on: {
      "click": function($event) {
        _vm.addCart()
      }
    }
  }, [(_vm.time != 0) ? _c('text', {
    staticClass: ["goods-none"],
    style: {
      'background-color': '#ac162c'
    }
  }, [_vm._v("距开始时间还剩:" + _vm._s(_vm.countDownStr))]) : _c('text', {
    staticClass: ["goods-none"],
    style: {
      'background-color': '#ac162c'
    }
  }, [_vm._v("即将开售")])]) : _vm._e()]) : _vm._e(), (_vm.showTaxesRule) ? _c('rule-pop', {
    staticClass: ["pop"],
    attrs: {
      "title": "商品税费",
      "rules": _vm.taxes_rules
    },
    on: {
      "close": _vm.closeMask
    }
  }) : _vm._e(), (_vm.showExplainRule) ? _c('rule-pop', {
    staticClass: ["pop"],
    attrs: {
      "title": "说明",
      "rules": _vm.explain_rules
    },
    on: {
      "close": _vm.closeMask
    }
  }) : _vm._e(), (_vm.showGoodsShippingRule) ? _c('rule-pop', {
    staticClass: ["pop"],
    attrs: {
      "title": "满件数享包邮规则",
      "rules": _vm.goodsShippingRules
    },
    on: {
      "close": _vm.closeMask
    }
  }) : _vm._e(), (_vm.showAddCart) ? _c('pop', {
    staticClass: ["pop"],
    attrs: {
      "taxes_fee": _vm.taxes_fee,
      "freight": _vm.freight,
      "goods": _vm.goodsSku,
      "buySpec": _vm.buySpec,
      "specName": _vm.specName,
      "buySpecs": _vm.buySpecs,
      "depots": _vm.goodsDepots,
      "action": _vm.actionType,
      "regions": _vm.buyGoodsRegions,
      "default_no": _vm.default_no,
      "shipping_title": _vm.shipping_title,
      "shipping_tax_title": _vm.shipping_tax_title
    },
    on: {
      "close": _vm.closeMask,
      "selectSpec": _vm.selectSpec,
      "selectDepot": _vm.selectDepot,
      "selectRegions": _vm.selectBuyRegions,
      "refreshFee": _vm.refreshFee,
      "addToCart": _vm.changeCartNum,
      "checkCount": _vm.checkCount,
      "closeKeyboard": _vm.closeKeyboard,
      "ok": _vm.ok
    }
  }) : _vm._e()], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["vip_horizontal"]
  }, [_c('image', {
    staticClass: ["vip_image"],
    attrs: {
      "resize": "cover",
      "src": "http://img.abmau.com/abmau/efcede4613978c858c3ca81ad638800f.png"
    }
  }), _c('text', {
    staticClass: ["vip_explain"]
  }, [_vm._v("开通初级VIP")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(46)
)

/* script */
__vue_exports__ = __webpack_require__(47)

/* template */
var __vue_template__ = __webpack_require__(68)
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
__vue_options__.__file = "F:\\weex\\weex_develop\\abm_dev_weex\\abm-weexSource\\src\\pages\\shop\\goodsMaterial.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2644edd4"
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
/* 46 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "width": "750",
    "backgroundColor": "#FFFFFF",
    "position": "relative"
  },
  "parent": {
    "position": "absolute",
    "width": "750",
    "flexDirection": "column",
    "backgroundColor": "#ffffff",
    "left": 0,
    "right": 0
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
  "dialog-content": {
    "width": "570",
    "paddingLeft": "100",
    "paddingRight": "100",
    "paddingTop": "17",
    "flexDirection": "column",
    "alignItems": "center",
    "paddingBottom": "42"
  },
  "dialog-content-content": {
    "fontSize": "28",
    "color": "#333333",
    "marginTop": "10"
  },
  "dialog-content-hint": {
    "fontSize": "24",
    "color": "#666666",
    "marginTop": "10"
  }
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _releaseList = __webpack_require__(48);

var _releaseList2 = _interopRequireDefault(_releaseList);

var _refresh = __webpack_require__(56);

var _refresh2 = _interopRequireDefault(_refresh);

var _dialog = __webpack_require__(60);

var _dialog2 = _interopRequireDefault(_dialog);

var _empty = __webpack_require__(64);

var _empty2 = _interopRequireDefault(_empty);

var _titleBar = __webpack_require__(2);

var _titleBar2 = _interopRequireDefault(_titleBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var collectNum = new BroadcastChannel('collectNum'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var modal = weex.requireModule('modal');
var utilModule = weex.requireModule('utilModule');
var height = 0;
var bottom = 0;
exports.default = {
    components: { empty: _empty2.default, material: _releaseList2.default, refresher: _refresh2.default, title: _titleBar2.default, dialog: _dialog2.default },
    data: function data() {
        return {
            bottom: bottom,
            height: height,
            goodsMaterials: null,
            size: 10,
            page: 1,
            goods_id: '',
            brandId: '',
            collectionData: null,
            collectionIndex: -1,
            loading: false,
            allLoadingFinish: false,
            showShareDialog: false, //显示转发对话框
            fileUrl: '', //附件地址
            currentMaterial: null,
            shareTitle: ''
        };
    },


    methods: {
        loadingDown: function loadingDown() {
            this.page = 1;
            this.allLoadingFinish = false;
            this.getData();
        },
        onLoading: function onLoading() {
            if (this.goodsMaterials.length < this.size) return;
            this.loading = true;
            this.page++;
            this.getData();
        },
        getData: function getData() {
            var _this = this;
            _this.Get(_this.api().goods_material, {
                type: '2',
                page: _this.page,
                size: _this.size,
                code: 'ABM',
                goods_id: _this.goods_id
            }, function (res) {
                if (res.data.code == 0) {
                    if (_this.page == 1) {
                        _this.goodsMaterials = _this.resetData(res.data.data);
                    } else {
                        _this.goodsMaterials = _this.goodsMaterials.concat(_this.resetData(res.data.data));
                    }
                    if (res.data.data.length == _this.size) {
                        _this.allLoadingFinish = false;
                    } else {
                        _this.allLoadingFinish = true;
                    }
                } else {
                    promptModule.showPrompt({ msg: res.data.msg, type: 'err' });
                    if (_this.page == 1) {
                        _this.goodsMaterials = [];
                    }
                }
            });
        },
        resetData: function resetData(data) {
            var _this = this;
            data.map(function (item, i) {
                item.brand_id = _this.brandId;
                if (item.img_list && item.img_list.length > 0) {
                    item.images = _this.resetImage(item);
                } else if (item.video_url && item.video_url.length > 0) {
                    item.images = _this.resetVideo(item);
                }
                if (!item.collect_times || item.collect_times.length <= 0) {
                    item.collect_times = 0;
                }
                if (!item.download_times || item.download_times.length <= 0) {
                    item.download_times = 0;
                }
                if (!item.forward_times || item.forward_times.length <= 0) {
                    item.forward_times = 0;
                }
            });
            return data;
        },
        resetImage: function resetImage(data) {
            var images = [];
            var imageUrls = [];
            var imageNames = [];
            data.img_list.map(function (item, i) {
                item.url = item.img_url;
                imageUrls.push(item.url);
                imageNames.push(data.id + "_image_" + i);
                if (data.img_list.length == 1) {
                    if (item.width == item.height) {
                        item.width = 400;
                        item.height = 400;
                    } else if (item.width > item.height) {
                        var scale = item.height / item.width;
                        var maxHeight = 400 * scale < 160 ? 160 : 400 * scale;
                        item.width = 400;
                        item.height = maxHeight;
                    } else {
                        var _scale = item.width / item.height;
                        var maxWidth = 400 * _scale > 320 ? 320 : 400 * _scale;
                        item.height = 400;
                        item.width = maxWidth;
                    }
                }
                item.type = "image";
                images.push(item);
            });
            data.imageUrls = imageUrls;
            data.imageNames = imageNames;
            return images;
        },
        resetVideo: function resetVideo(data) {
            var images = [];
            var _this = this;
            var imageUrls = [];
            var imageNames = [];
            imageUrls.push(data.video_url);
            imageNames.push(data.id + "_video_" + 0);
            data.video_image.map(function (item, i) {
                item.url = item.img_url;
                if (data.video_image.length == 1) {
                    if (item.width == item.height) {
                        item.width = 400;
                        item.height = 400;
                    } else if (item.width > item.height) {
                        var scale = item.height / item.width;
                        var maxHeight = 400 * scale < 160 ? 160 : 400 * scale;
                        item.width = 400;
                        item.height = maxHeight;
                    } else {
                        var _scale2 = item.width / item.height;
                        var maxWidth = 400 * _scale2 > 320 ? 320 : 400 * _scale2;
                        item.height = 400;
                        item.width = maxWidth;
                    }
                }
                item.type = "video";
                item.video_url = data.video_url;
                images.push(item);
            });
            data.imageUrls = imageUrls;
            data.imageNames = imageNames;
            return images;
        },
        jumpCollection: function jumpCollection(item, index) {
            this.collectionData = item;
            this.collectionIndex = index;
        },
        appendages: function appendages(data) {
            this.fileUrl = data.url;
            this.currentMaterial = data.ref;
            this.shareTitle = data.data.desc;
            this.showShareDialog = true;
        },
        confirm: function confirm() {
            this.showShareDialog = false;
            utilModule.shareWxFriends({ title: this.shareTitle, desc: '点击查看品牌手册，电脑端登录微信查看微信消息，即可下载', url: this.fileUrl, icon: 'http://img.abmau.com/abmau/67dfcfd6fb29437547941d89bfc9e2d1.jpg' }, function (res) {});
            if (this.currentMaterial) {
                this.currentMaterial.addMaterialClickData(3);
            }
        },
        closeDialog: function closeDialog() {
            this.showShareDialog = false;
        }
    },

    created: function created() {
        var _this = this;
        _this.goods_id = _this.GetUrlPara(weex.config.bundleUrl, 'goods_id');
        _this.brandId = _this.GetUrlPara(weex.config.bundleUrl, 'brandId');
        _this.getTopHeight(_this);
        _this.isIpx(_this);
        _this.getData();
        collectNum.onmessage = function (event) {
            if (!event.data) {
                return;
            }
            if (_this.collectionData && _this.collectionIndex != -1) {
                var num = !_this.collectionData.collect_times || _this.collectionData.collect_times == '' ? 0 : _this.collectionData.collect_times;
                var scale = 1;
                switch (event.data.type) {
                    case _this.eventBusTag().COLLECTION_CANCEL:
                        _this.collectionData.is_collect = 0;
                        num = num <= 0 ? 0 : num - scale;
                        break;
                    case _this.eventBusTag().COLLECTION_MATERIAL:
                        if (_this.collectionData.is_collect != 1) {
                            _this.collectionData.is_collect = 1;
                            num = num + scale;
                        }
                        break;
                }
                _this.collectionData.collect_times = num;
                _this.goodsMaterials.splice(_this.collectionIndex, 1, _this.collectionData);
            }
        };
    }
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(49)
)

/* script */
__vue_exports__ = __webpack_require__(50)

/* template */
var __vue_template__ = __webpack_require__(55)
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
__vue_options__.__file = "F:\\weex\\weex_develop\\abm_dev_weex\\abm-weexSource\\src\\components\\releaseList.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-d4ca9178"
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
/* 49 */
/***/ (function(module, exports) {

module.exports = {
  "row": {
    "flexDirection": "row"
  },
  "column": {
    "flexDirection": "column"
  },
  "between": {
    "justifyContent": "space-between"
  },
  "center": {
    "justifyContent": "center"
  },
  "wrap": {
    "flexWrap": "wrap"
  },
  "end": {
    "justifyContent": "flex-end"
  },
  "content": {
    "width": "750",
    "paddingTop": "25",
    "paddingRight": "25",
    "paddingBottom": "40",
    "paddingLeft": "25"
  },
  "content_left": {
    "width": "80",
    "height": "80",
    "marginRight": "26"
  },
  "head": {
    "width": "80",
    "height": "80",
    "borderRadius": 100,
    "borderColor": "#e2e2e2",
    "borderWidth": "1"
  },
  "content_right": {
    "width": "584",
    "position": "relative"
  },
  "name": {
    "fontSize": "26",
    "color": "#333333",
    "fontWeight": "bold"
  },
  "evaluate": {
    "fontSize": "26",
    "color": "#333333",
    "marginTop": "7",
    "marginBottom": "20",
    "lineHeight": "38"
  },
  "time": {
    "fontSize": "22",
    "color": "rgba(153,153,153,1)",
    "marginTop": "30",
    "marginRight": 0,
    "marginBottom": "10",
    "marginLeft": 0
  },
  "label": {
    "height": "40",
    "paddingLeft": "15",
    "paddingRight": "15",
    "borderRadius": "2",
    "marginTop": "20",
    "marginRight": "20",
    "marginBottom": 0,
    "marginLeft": 0,
    "borderWidth": "1",
    "borderStyle": "solid",
    "borderColor": "rgba(204,204,204,1)"
  },
  "label_text": {
    "lineHeight": "40",
    "color": "rgba(125,125,125,1)",
    "fontSize": "22",
    "textAlign": "center"
  },
  "state": {
    "width": "122",
    "height": "128",
    "position": "absolute",
    "bottom": "68",
    "right": 0
  },
  "content_bottom": {
    "width": "690",
    "height": "120",
    "paddingLeft": "15",
    "paddingRight": "15",
    "marginTop": "50",
    "alignItems": "center",
    "justifyContent": "center",
    "backgroundColor": "rgba(246,246,246,1)"
  },
  "commodity_img": {
    "width": "90",
    "height": "90",
    "marginRight": "30",
    "backgroundColor": "rgba(228,228,228,1)"
  },
  "commodity_name": {
    "width": "540",
    "fontSize": "24",
    "color": "#333333",
    "textOverflow": "ellipsis",
    "lines": 2
  },
  "commodity_price": {
    "fontSize": "24",
    "color": "rgba(207,17,38,1)"
  },
  "collection": {
    "width": "750",
    "height": "87",
    "borderTopWidth": "1",
    "borderStyle": "solid",
    "borderColor": "rgba(225,225,225,1)"
  },
  "collection_item": {
    "flex": 1,
    "height": "87",
    "alignItems": "center"
  },
  "content_right_head": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "frame": {
    "borderLeftWidth": "1",
    "borderRightWidth": "1",
    "borderStyle": "solid",
    "borderColor": "rgba(225,225,225,1)"
  },
  "collection_item_imgDiv": {
    "width": "30",
    "height": "87",
    "marginRight": "10"
  },
  "collection_item_img": {
    "width": "30",
    "height": "29"
  },
  "collection_item_textDiv": {
    "height": "87",
    "marginRight": "10"
  },
  "collection_item_text": {
    "fontSize": "24",
    "color": "#333333",
    "lineHeight": "87",
    "textAlign": "center"
  },
  "collection_item_number": {
    "fontSize": "20",
    "color": "rgba(125,125,125,1)",
    "lineHeight": "87",
    "textAlign": "center"
  },
  "separate": {
    "width": "750",
    "height": "20",
    "backgroundColor": "#F6F6F6"
  },
  "next2": {
    "width": "30",
    "height": "34"
  },
  "parent-img": {
    "width": 60,
    "height": "50",
    "paddingLeft": "15"
  }
}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pictureGrid = __webpack_require__(51);

var _pictureGrid2 = _interopRequireDefault(_pictureGrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var utilModule = weex.requireModule('utilModule'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var clipboard = weex.requireModule('clipboard');
var modal = weex.requireModule('modal');
var promptModule = weex.requireModule('promptModule');
exports.default = {
    props: {
        data: {
            type: Object,
            default: {}
        },
        isShowLine: {
            type: Boolean,
            default: true
        },

        from: {
            default: 0
        },
        isShow: {
            default: false
        },
        isScroll: {
            default: false
        },
        showRelated: {
            default: true
        }
    },
    components: { pictureGrid: _pictureGrid2.default },
    data: function data() {
        return {
            images: [],
            imageUrls: [],
            imageNames: [],
            currentId: -1,
            isCreated: false,
            appVersion: null
        };
    },

    methods: {

        //长按复制 素材文本描述
        copyDesc: function copyDesc(desc) {
            if (!desc || desc == '') return;
            clipboard.setString(desc);
            promptModule.showPrompt({ msg: '复制成功', type: 'success' });
        },
        jumpToCollection: function jumpToCollection(id) {
            //跳转到收藏夹
            this.$emit('collection', this.data);
            this.jumpTo2('material/collection', '', { id: id });
        },
        jumpGoodsDetails: function jumpGoodsDetails(id) {
            if (id && id != 0) {
                this.jumpTo2('shop/goodsDetailsParent', '', { goods_id: id });
            }
        },
        deleteMaterial: function deleteMaterial(id) {
            //删除素材
            this.$emit('delMaterial', { id: id });
        },
        download: function download() {
            var _this = this;
            if (!_this.data.imageUrls || _this.data.imageUrls.length <= 0) {
                modal.toast({ message: '纯文本不支持下载！', duration: 2 });
                return;
            }
            var type = _this.data.video_url && _this.data.video_url.length > 0 ? 'video' : 'image';
            utilModule.download(_this.data.imageUrls, _this.data.imageNames, type, new Date().getTime(), function (res) {
                _this.addMaterialClickData('1');
                if (_this.data.desc.length > 0) {
                    clipboard.setString(_this.data.desc);
                    // modal.toast({ message:'文案已复制，图片已保存到相册', duration: 2 });
                    return;
                }
            });
            // if(_this.data.file_url && _this.compareVersion(weex.config.env.appVersion,'3.6.0')){
            //     let files = [];
            //     files.push(_this.data.file_url);
            //     utilModule.downloadFile(files,function (res) {
            //
            //     });
            // }
        },


        // share(){
        //     let _this = this;
        //     let timestamp = '';
        //     let key = 'materialList' + '_' + _this.data.id;
        //     clipboard.setString(_this.data.desc);
        //     if(!_this.data.imageUrls || _this.data.imageUrls.length === 0){
        //         modal.toast({ message:'暂不支持分享文本', duration: 2 });
        //         return;
        //     }
        //     modal.toast({ message:'文案已复制，请在分享时长按粘贴', duration: 2 });
        //     storage.getItem(key, event => {
        //         if (event.result == "success") {
        //             timestamp = event.data;
        //         }else{
        //             timestamp = new Date().getTime();
        //             storage.setItem(key, timestamp.toString(), event => {});
        //         }
        //         let type = _this.data.video_url && _this.data.video_url.length > 0 ? 'video' : 'image';
        //         utilModule.showSystemShare(_this.data.imageUrls,_this.data.imageNames,type,timestamp,res =>{
        //             if(res.result == 'success'){
        //                 _this.addMaterialClickData('2');
        //             }
        //         });
        //     });
        // },

        addMaterialClickData: function addMaterialClickData(type) {
            var _this = this;
            _this.Post(_this.api().material_add_click, {
                type: type,
                materialId: _this.data.id
            }, function (res) {
                if (res.data.code == 0) {
                    if (type == '1') {
                        _this.data.download_times = res.data.data.download_times;
                    } else if (type == '3') {
                        _this.data.netdisc_times = res.data.data.netdisc_times;
                    } else {
                        _this.data.forward_times = res.data.data.forward_times;
                    }
                }
            });
        },
        clickLabel: function clickLabel(item) {
            var _this = this;
            if (_this.from == 0) {
                if (_this.data.brand_id && (_this.data.brand_id + '').length > 0) {
                    var brandId = _this.data.brand_id + '';
                    _this.jumpTo2('material/search', '', { brandId: brandId, brandName: _this.data.brand_name, title: item.name, keyword: item.name.trim() });
                } else {
                    _this.jumpTo2('material/search', '', { title: item.name, keyword: item.name.trim() });
                }
            } else {
                this.$emit('clickLabel', { brandId: _this.data.brand_id, brandName: _this.data.brand_name, keyword: item.name });
            }
        },
        showUi: function showUi() {
            this.isShow = true;
        },
        hideUi: function hideUi() {
            this.isShow = false;
        },
        shareAppendages: function shareAppendages() {
            this.$emit('appendages', { url: this.data.file_url, data: this.data, ref: this });
        }
    },
    created: function created() {
        this.appVersion = weex.config.env.appVersion;
    }
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(52)
)

/* script */
__vue_exports__ = __webpack_require__(53)

/* template */
var __vue_template__ = __webpack_require__(54)
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
__vue_options__.__file = "F:\\weex\\weex_develop\\abm_dev_weex\\abm-weexSource\\src\\components\\picture-grid.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-71f6e474"
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
/* 52 */
/***/ (function(module, exports) {

module.exports = {
  "grid-select": {
    "flexDirection": "row",
    "flexWrap": "wrap"
  },
  "image": {
    "width": "160",
    "height": "160"
  },
  "mask": {
    "width": "160",
    "height": "160",
    "backgroundColor": "#F6F6F6"
  },
  "grid-option": {
    "justifyContent": "center"
  },
  "video-play": {
    "position": "absolute",
    "width": "80",
    "height": "80"
  }
}

/***/ }),
/* 53 */
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

var utilModule = weex.requireModule('utilModule');
exports.default = {
    props: {
        width: {
            default: 600
        },
        images: {
            type: Array,
            default: function _default() {
                return [];
            }
        },

        imageWidth: {
            default: 160
        },

        imageHeight: {
            default: 160
        },
        isShow: {
            default: false
        }

    },

    data: function data() {
        return {
            video_play_default: 'assets://jc_play_normal'
        };
    },


    methods: {
        showImage: function showImage(data, index) {
            var _this = this;
            if (data[0].type == 'video') {
                utilModule.showVideo(data[0].video_url, null);
            } else {
                var url = [];
                data.map(function (image, i) {
                    url.push(image.url);
                });
                if (_this.compareVersion(weex.config.env.appVersion, '3.1.0')) utilModule.showImageWatcher(url, index);
            }
        },
        showUi: function showUi() {
            this.isShow = true;
        },
        hideUi: function hideUi() {
            this.isShow = false;
        }
    }
};

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["grid-select"],
    style: {
      width: _vm.width + 'px'
    }
  }, [_vm._l((_vm.images), function(item, index) {
    return (_vm.images && _vm.images.length > 1) ? _c('div', {
      key: index,
      staticClass: ["grid-option"]
    }, [(!_vm.isShow) ? _c('div', {
      staticClass: ["mask"],
      style: {
        marginTop: index >= 3 ? 15 : 0 + 'px',
        marginLeft: index % 3 != 0 ? 15 : 0 + 'px'
      }
    }) : _c('image', {
      staticClass: ["image"],
      style: {
        marginTop: index >= 3 ? 15 : 0 + 'px',
        marginLeft: index % 3 != 0 ? 15 : 0 + 'px'
      },
      attrs: {
        "src": item.img_url_thumb
      },
      on: {
        "click": function($event) {
          _vm.showImage(_vm.images, index)
        }
      }
    })]) : _vm._e()
  }), (_vm.images && _vm.images.length == 1) ? _c('div', [(!_vm.isShow) ? _c('div', {
    staticClass: ["mask"],
    style: {
      height: _vm.images[0].height,
      width: _vm.images[0].width
    }
  }) : _c('div', {
    style: {
      position: 'relative'
    },
    on: {
      "click": function($event) {
        _vm.showImage(_vm.images, 0)
      }
    }
  }, [_c('image', {
    style: {
      height: _vm.images[0].height,
      width: _vm.images[0].width
    },
    attrs: {
      "src": _vm.images[0].url
    }
  }), (_vm.images[0].type == 'video') ? _c('image', {
    staticClass: ["video-play"],
    style: {
      top: (_vm.images[0].height / 2) - 40,
      left: (_vm.images[0].width / 2) - 40
    },
    attrs: {
      "src": _vm.video_play_default
    }
  }) : _vm._e()])]) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    on: {
      "appear": function($event) {
        _vm.showUi()
      },
      "disappear": function($event) {
        _vm.hideUi()
      }
    }
  }, [_c('div', {
    staticClass: ["content"]
  }, [_c('div', {
    staticClass: ["row"]
  }, [_c('div', {
    staticClass: ["content_left"]
  }, [(!_vm.isShow) ? _c('div', {
    staticClass: ["head"],
    style: {
      backgroundColor: '#F6F6F6'
    }
  }) : _c('div', [(_vm.data.head_image && _vm.data.head_image.length > 0) ? _c('image', {
    staticClass: ["head"],
    attrs: {
      "resize": "cover",
      "src": _vm.data.head_image[0].img_url_thumb
    }
  }) : _c('image', {
    staticClass: ["head"],
    attrs: {
      "src": "assets://icon",
      "resize": "cover"
    }
  })])]), _c('div', {
    staticClass: ["content_right", "column"]
  }, [_c('div', {
    staticClass: ["content_right_head"]
  }, [(_vm.data.nickname) ? _c('text', {
    staticClass: ["name"]
  }, [_vm._v(_vm._s(_vm.data.nickname))]) : _vm._e(), (!_vm.data.nickname) ? _c('text', {
    staticClass: ["name"]
  }, [_vm._v("单创小助手")]) : _vm._e(), (_vm.data.review_status == 0 || _vm.data.review_status == 2) ? _c('div', {
    staticClass: ["parent-img"],
    on: {
      "click": function($event) {
        _vm.deleteMaterial(_vm.data.id)
      }
    }
  }, [_c('image', {
    staticClass: ["next2"],
    attrs: {
      "src": "assets://icon_cart_del"
    }
  })]) : _vm._e()]), _c('text', {
    staticClass: ["evaluate"],
    on: {
      "longpress": function($event) {
        _vm.copyDesc(_vm.data.desc)
      }
    }
  }, [_vm._v(_vm._s(_vm.data.desc))]), _c('picture-grid', {
    attrs: {
      "isShow": _vm.isShow,
      "images": _vm.data.images
    }
  }), _c('text', {
    staticClass: ["time"]
  }, [_vm._v(_vm._s(_vm.data.date))]), _c('div', {
    staticClass: ["row", "wrap"]
  }, _vm._l((_vm.data.tag_list), function(item, i) {
    return _c('div', {
      key: i,
      staticClass: ["label"],
      on: {
        "click": function($event) {
          _vm.clickLabel(item)
        }
      }
    }, [_c('text', {
      staticClass: ["label_text"]
    }, [_vm._v(_vm._s(item.name.trim()))])])
  })), (_vm.data.review_status === 1) ? _c('image', {
    staticClass: ["state"],
    attrs: {
      "src": "http://img.abmau.com/abmau/9dd256462847c248c160358198ebc475.png"
    }
  }) : _vm._e(), (_vm.data.review_status === 0) ? _c('image', {
    staticClass: ["state"],
    attrs: {
      "src": "http://img.abmau.com/abmau/85f11b9ef109c328bf3e2217c1d3498f.png"
    }
  }) : _vm._e(), (_vm.data.review_status === 2) ? _c('image', {
    staticClass: ["state"],
    attrs: {
      "src": "http://img.abmau.com/abmau/6e48abf6fb6bd6b3f63b740d05cf3b43.png"
    }
  }) : _vm._e(), (_vm.data.add_fine === 1 && !_vm.data.review_status) ? _c('image', {
    staticClass: ["state"],
    attrs: {
      "src": "http://img.abmau.com/abmau/6c9dca32d39ec04c18fcfb8a271ba153.png"
    }
  }) : _vm._e()], 1)]), (_vm.data.related_goods && _vm.data.related_goods.name && _vm.showRelated) ? _c('div', {
    staticClass: ["content_bottom"],
    on: {
      "click": function($event) {
        _vm.jumpGoodsDetails(_vm.data.related_goods.id)
      }
    }
  }, [(_vm.isShow) ? _c('div', {
    staticClass: ["row"]
  }, [_c('image', {
    staticClass: ["commodity_img"],
    attrs: {
      "src": _vm.data.related_goods.image
    }
  }), _c('div', {
    staticClass: ["column"],
    staticStyle: {
      height: "90px",
      justifyContent: "space-between"
    }
  }, [_c('text', {
    staticClass: ["commodity_name"]
  }, [_vm._v(_vm._s(_vm.data.related_goods.name))]), (_vm.data.related_goods.shareprice != 0) ? _c('text', {
    staticClass: ["commodity_price"]
  }, [_vm._v(_vm._s(_vm.data.related_goods.title) + " ¥" + _vm._s(_vm.data.related_goods.shareprice))]) : _vm._e(), (_vm.data.related_goods.shareprice == 0 && _vm.data.related_goods.retail_tax == 'no_show') ? _c('text', {
    staticClass: ["commodity_price"]
  }, [_vm._v(_vm._s(_vm.data.related_goods.retail_title) + " ¥" + _vm._s(_vm.data.related_goods.disprice))]) : _vm._e(), (_vm.data.related_goods.shareprice == 0 && _vm.data.related_goods.retail_tax != 'no_show') ? _c('text', {
    staticClass: ["commodity_price"]
  }, [_vm._v(_vm._s(_vm.data.related_goods.retail_title) + " ¥" + _vm._s(_vm.data.related_goods.disprice))]) : _vm._e()])]) : _c('div', {
    staticClass: ["row"]
  })]) : _vm._e()]), (!(_vm.data.review_status == 0 || _vm.data.review_status == 2)) ? _c('div', {
    staticClass: ["collection", "row"]
  }, [_c('div', {
    staticClass: ["collection_item", "row", "center"],
    on: {
      "click": function($event) {
        _vm.jumpToCollection(_vm.data.id)
      }
    }
  }, [_vm._m(0), _c('div', {
    staticClass: ["collection_item_textDiv"]
  }, [(_vm.data.is_collect === 1) ? _c('text', {
    staticClass: ["collection_item_text"]
  }, [_vm._v("已收藏")]) : _c('text', {
    staticClass: ["collection_item_text"]
  }, [_vm._v("收藏")])]), _c('text', {
    staticClass: ["collection_item_number"]
  }, [_vm._v(_vm._s(_vm.data.collect_times))])]), _c('div', {
    staticClass: ["collection_item", "frame", "row", "center"],
    on: {
      "click": function($event) {
        _vm.download()
      }
    }
  }, [_vm._m(1), _vm._m(2), _c('text', {
    staticClass: ["collection_item_number"]
  }, [_vm._v(_vm._s(_vm.data.download_times))])]), (_vm.data.file_url && _vm.appVersion && _vm.compareVersion(_vm.appVersion, '3.6.0')) ? _c('div', {
    staticClass: ["collection_item", "frame", "row", "center"],
    on: {
      "click": function($event) {
        _vm.shareAppendages()
      }
    }
  }, [_vm._m(3), _vm._m(4), _c('text', {
    staticClass: ["collection_item_number"]
  }, [_vm._v(_vm._s(_vm.data.netdisc_times))])]) : _vm._e()]) : _vm._e(), (_vm.isShowLine) ? _c('div', {
    staticClass: ["separate"]
  }) : _vm._e()])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["collection_item_imgDiv", "column", "center"]
  }, [_c('image', {
    staticClass: ["collection_item_img"],
    attrs: {
      "src": "assets://icon_collect"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["collection_item_imgDiv", "column", "center"]
  }, [_c('image', {
    staticClass: ["collection_item_img"],
    attrs: {
      "src": "assets://icon_save"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["collection_item_textDiv"]
  }, [_c('text', {
    staticClass: ["collection_item_text"]
  }, [_vm._v("下载")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["collection_item_imgDiv", "column", "center"]
  }, [_c('image', {
    staticClass: ["collection_item_img"],
    attrs: {
      "src": "http://img.abmau.com/abmau/5443ce53e853f0b2d2594fe46ff92414.png"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["collection_item_textDiv"]
  }, [_c('text', {
    staticClass: ["collection_item_text"]
  }, [_vm._v("附件")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(57)
)

/* script */
__vue_exports__ = __webpack_require__(58)

/* template */
var __vue_template__ = __webpack_require__(59)
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
__vue_options__.__file = "F:\\weex\\weex_develop\\abm_dev_weex\\abm-weexSource\\src\\components\\refresh.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3fc3a95a"
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
/* 57 */
/***/ (function(module, exports) {

module.exports = {
  "u-refresh": {
    "height": "170",
    "width": "750",
    "backgroundColor": "#ffffff",
    "flexDirection": "row",
    "flexWrap": "nowrap",
    "justifyContent": "center"
  },
  "loading-bg": {
    "position": "absolute",
    "left": "250",
    "marginTop": "40",
    "width": "250",
    "height": "120"
  },
  "l-txt-box": {
    "height": "106",
    "width": "200",
    "overflow": "hidden"
  },
  "l-txt": {
    "height": "30",
    "width": "30",
    "fontSize": "25",
    "position": "absolute",
    "top": "105",
    "left": "87",
    "color": "#666666"
  }
}

/***/ }),
/* 58 */
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
//
//
//
//
//
//
//
//
//
//
//
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
        backgroundColor: {
            type: String,
            default: '#fff'
        }
    },
    data: function data() {
        return {
            refreshing: false,

            loadingAR: [{ ref: 'lTxt1', p: [-77, -75], delay: 0 }, { ref: 'lTxt2', p: [-47, -81], delay: 50 }, { ref: 'lTxt3', p: [-15, -88], delay: 100 }, { ref: 'lTxt4', p: [12, -90], delay: 150 }, { ref: 'lTxt5', p: [-5, -49], delay: 200 }, { ref: 'lTxt6', p: [25, -55], delay: 250 }, { ref: 'lTxt7', p: [55, -61], delay: 300 }, { ref: 'lTxt8', p: [85, -61], delay: 350 }]
        };
    },

    methods: {
        loadingAni: function loadingAni() {
            for (var i = 0; i < this.loadingAR.length; i++) {
                this.shake(this.$refs[this.loadingAR[i].ref], this.loadingAR[i].p[0], this.loadingAR[i].p[1], 3, 1, 200, this.loadingAR[i].delay);
            }
        },
        loadingAniDown: function loadingAniDown() {
            for (var i = 0; i < this.loadingAR.length; i++) {
                this.shake(this.$refs[this.loadingAR[i].ref], 0, 0, 0, 0, 200);
            }
            this.$emit('loadingDown', {
                status: 'loadingDown'
            });
        },
        shake: function shake(_ref, _x, _y, _k, _d, _duration, _delay) {
            animation.transition(_ref, {
                styles: {
                    transform: 'translate(' + (_x - 0) + 'px,' + (_y - _k * _d) + 'px)'
                },
                duration: _duration | 500, //ms
                timingFunction: 'ease-out',
                delay: _delay | 0 //ms
            }, function () {
                this.refreshing && this.shake(_ref, _x, _y, _k, -1 * _d);
            }.bind(this));
        },
        onrefresh: function onrefresh(event) {
            var _this = this;

            //                console.log('is refreshing')
            //                modal.toast({ message: 'refresh', duration: 1 })

            this.loadingAni();
            this.refreshing = true;
            setTimeout(function () {
                _this.refreshing = false;
                _this.loadingAniDown();
            }, 1500);
        },
        onpullingdown: function onpullingdown(event) {}
    }
};

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('refresh', {
    staticClass: ["u-refresh"],
    style: {
      backgroundColor: _vm.backgroundColor
    },
    attrs: {
      "display": _vm.refreshing ? 'show' : 'hide'
    },
    on: {
      "refresh": _vm.onrefresh,
      "pullingdown": _vm.onpullingdown
    }
  }, [_c('image', {
    staticClass: ["loading-bg"],
    attrs: {
      "resize": "contain",
      "src": "http://img.abmau.com/abmau/b0d2f2074eff5e0bc883e8802c890d21.png"
    }
  }), _c('div', {
    staticClass: ["l-txt-box"]
  }, [_c('text', {
    ref: "lTxt1",
    staticClass: ["l-txt", "l-txt-1"]
  }, [_vm._v("甄")]), _c('text', {
    ref: "lTxt2",
    staticClass: ["l-txt", "l-txt-2"]
  }, [_vm._v("选")]), _c('text', {
    ref: "lTxt3",
    staticClass: ["l-txt", "l-txt-3"]
  }, [_vm._v("海")]), _c('text', {
    ref: "lTxt4",
    staticClass: ["l-txt", "l-txt-4"]
  }, [_vm._v("外")]), _c('text', {
    ref: "lTxt5",
    staticClass: ["l-txt", "l-txt-5"]
  }, [_vm._v("优")]), _c('text', {
    ref: "lTxt6",
    staticClass: ["l-txt", "l-txt-6"]
  }, [_vm._v("质")]), _c('text', {
    ref: "lTxt7",
    staticClass: ["l-txt", "l-txt-7"]
  }, [_vm._v("品")]), _c('text', {
    ref: "lTxt8",
    staticClass: ["l-txt", "l-txt-8"]
  }, [_vm._v("牌")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(61)
)

/* script */
__vue_exports__ = __webpack_require__(62)

/* template */
var __vue_template__ = __webpack_require__(63)
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
__vue_options__.__file = "F:\\weex\\weex_develop\\abm_dev_weex\\abm-weexSource\\src\\components\\dialog.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-282d8cce"
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
/* 61 */
/***/ (function(module, exports) {

module.exports = {
  "mask": {
    "width": "570",
    "marginLeft": "90",
    "marginTop": "450",
    "borderRadius": "10",
    "backgroundColor": "#ffffff",
    "flexDirection": "column"
  },
  "mask-top": {
    "width": "570",
    "height": "100",
    "flexDirection": "row",
    "backgroundColor": "#FFFFFF",
    "borderTopLeftRadius": "10",
    "borderTopRightRadius": "10"
  },
  "mask-top-title": {
    "width": "390",
    "fontSize": "32",
    "lineHeight": "100",
    "marginLeft": "90",
    "textAlign": "center",
    "color": "#333333"
  },
  "mask-top-right": {
    "width": "90",
    "height": "100",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "flex-end"
  },
  "mask-top-cancel": {
    "width": "26",
    "height": "26",
    "marginRight": "30"
  },
  "mask-line": {
    "width": "570",
    "height": "1.4",
    "backgroundColor": "#E2E2E2"
  },
  "mask-content": {
    "width": "570",
    "paddingLeft": "50",
    "paddingRight": "50",
    "paddingTop": "27",
    "backgroundColor": "#FFFFFF"
  },
  "mask-content-text": {
    "fontSize": "28",
    "color": "#333333"
  },
  "mask-bottom": {
    "width": "570",
    "height": "90",
    "flexDirection": "row",
    "backgroundColor": "#FFFFFF"
  },
  "mask-bottom-cancel": {
    "fontSize": "30",
    "lineHeight": "90",
    "textAlign": "center",
    "flex": 1,
    "borderBottomLeftRadius": "10",
    "borderBottomRightRadius": "10",
    "color": "#999999"
  },
  "mask-bottom-line": {
    "width": "1.4",
    "height": "90",
    "backgroundColor": "#E2E2E2"
  },
  "mask-bottom-confirm-single": {
    "fontSize": "30",
    "lineHeight": "70",
    "height": "70",
    "textAlign": "center",
    "width": "460",
    "marginLeft": "55",
    "marginRight": "55",
    "borderRadius": "8",
    "color": "#CF1126"
  },
  "mask-bottom-confirm": {
    "fontSize": "30",
    "lineHeight": "90",
    "textAlign": "center",
    "flex": 1,
    "color": "#CF1126"
  }
}

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _WxcMask = __webpack_require__(4);

var _WxcMask2 = _interopRequireDefault(_WxcMask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { WxcMask: _WxcMask2.default },
    props: {
        title: {
            type: String,
            default: '提示'
        },
        content: {
            type: String,
            default: '内容'
        },
        cancelText: {
            type: String,
            default: '取消'
        },
        confirmText: {
            type: String,
            default: '确认'
        },
        confirmTextColor: {
            type: String,
            default: '#CF1126'
        },
        confirmBackgroundColor: {
            type: String,
            default: '#fff'
        },
        show: {
            type: Boolean,
            default: false
        },
        showClose: {
            type: Boolean,
            default: true
        },
        contentHeight: {
            type: String,
            default: '180px'
        },
        showCancel: {
            type: Boolean,
            default: true
        },
        isCancelEvent: {
            type: Boolean,
            default: false
        }
    },

    methods: {
        close: function close(type) {
            if (this.isCancelEvent && type == 1) {
                this.$emit('cancel', {});
                return;
            }
            this.$emit('close', {});
        },
        confirm: function confirm() {
            this.$emit('confirm', {});
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* 63 */
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
      "show": _vm.show
    },
    on: {
      "wxcMaskSetHidden": _vm.closeMask
    }
  }, [_c('div', {
    style: {
      width: '750px',
      flex: 1
    },
    on: {
      "click": function($event) {
        _vm.close(0)
      }
    }
  }, [_c('div', {
    staticClass: ["mask"],
    on: {
      "click": function($event) {}
    }
  }, [_c('div', {
    staticClass: ["mask-top"]
  }, [_c('text', {
    staticClass: ["mask-top-title"]
  }, [_vm._v(_vm._s(_vm.title))]), _c('div', {
    staticClass: ["mask-top-right"],
    on: {
      "click": function($event) {
        _vm.close(0)
      }
    }
  }, [(_vm.showClose) ? _c('image', {
    staticClass: ["mask-top-cancel"],
    attrs: {
      "src": "assets://ic_goods_details_remove"
    }
  }) : _vm._e()])]), _c('div', {
    staticClass: ["mask-line"]
  }), _vm._t("default", [_c('scroller', {
    staticClass: ["mask-content"],
    style: {
      height: _vm.contentHeight
    }
  }, [_c('text', {
    staticClass: ["mask-content-text"]
  }, [_vm._v(_vm._s(_vm.content))])])]), (_vm.showCancel) ? _c('div', {
    staticClass: ["mask-line"]
  }) : _vm._e(), _c('div', {
    staticClass: ["mask-bottom"]
  }, [(_vm.showCancel) ? _c('text', {
    staticClass: ["mask-bottom-cancel"],
    on: {
      "click": function($event) {
        _vm.close(1)
      }
    }
  }, [_vm._v(_vm._s(_vm.cancelText))]) : _vm._e(), (_vm.showCancel) ? _c('div', {
    staticClass: ["mask-bottom-line"]
  }) : _vm._e(), _c('text', {
    class: [_vm.showCancel ? 'mask-bottom-confirm' : 'mask-bottom-confirm-single'],
    style: {
      color: _vm.confirmTextColor,
      backgroundColor: _vm.confirmBackgroundColor
    },
    on: {
      "click": function($event) {
        _vm.confirm()
      }
    }
  }, [_vm._v(_vm._s(_vm.confirmText))])])], 2)])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(65)
)

/* script */
__vue_exports__ = __webpack_require__(66)

/* template */
var __vue_template__ = __webpack_require__(67)
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
/* 65 */
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
/* 66 */
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
/* 67 */
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
/* 68 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('title', {
    attrs: {
      "title": "用户口碑"
    },
    on: {
      "wxcMinibarRightButtonClicked": _vm.share
    }
  }), _c('list', {
    ref: "list",
    staticClass: ["parent"],
    style: {
      top: _vm.height + 'px',
      bottom: _vm.bottom + 'px'
    },
    attrs: {
      "loadmoreoffset": "10"
    },
    on: {
      "loadmore": _vm.onLoading
    }
  }, [_c('refresher', {
    on: {
      "loadingDown": _vm.loadingDown
    }
  }), _vm._l((_vm.goodsMaterials), function(item, index) {
    return (_vm.goodsMaterials && _vm.goodsMaterials.length > 0) ? _c('cell', {
      key: index,
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('material', {
      attrs: {
        "data": item,
        "isShow": "true"
      },
      on: {
        "collection": function($event) {
          _vm.jumpCollection($event, index)
        },
        "appendages": _vm.appendages
      }
    })], 1) : _vm._e()
  }), (_vm.goodsMaterials && _vm.goodsMaterials.length <= 0) ? _c('cell', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('empty')], 1) : _vm._e(), (_vm.goodsMaterials && _vm.goodsMaterials.length >= _vm.size) ? _c('cell', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('div', {
    staticClass: ["more-list"]
  }, [(_vm.allLoadingFinish == false) ? _c('text', {
    staticClass: ["loading-over-txt"]
  }, [_vm._v("加载中...")]) : _vm._e(), (_vm.allLoadingFinish == true) ? _c('text', {
    staticClass: ["loading-over-txt"]
  }, [_vm._v("已经全部加载完毕")]) : _vm._e()])]) : _vm._e()], 2), _c('dialog', {
    attrs: {
      "show": _vm.showShareDialog,
      "title": "下载提示",
      "confirmText": "去分享"
    },
    on: {
      "confirm": function($event) {
        _vm.confirm()
      },
      "close": function($event) {
        _vm.closeDialog()
      }
    }
  }, [_c('div', {
    staticClass: ["dialog-content"]
  }, [_c('text', {
    staticClass: ["dialog-content-content"]
  }, [_vm._v("源文件较大")]), _c('text', {
    staticClass: ["dialog-content-content"]
  }, [_vm._v("请使用微信分享至电脑下载")]), _c('text', {
    staticClass: ["dialog-content-hint"]
  }, [_vm._v("(该链接永久有效)")])])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(70)
)

/* script */
__vue_exports__ = __webpack_require__(71)

/* template */
var __vue_template__ = __webpack_require__(84)
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
__vue_options__.__file = "F:\\weex\\weex_develop\\abm_dev_weex\\abm-weexSource\\src\\components\\wx-pager.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-436f7868"
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
/* 70 */
/***/ (function(module, exports) {

module.exports = {
  "banner": {
    "width": "750",
    "flex": 1
  }
}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcPanItem = __webpack_require__(72);

var _wxcPanItem2 = _interopRequireDefault(_wxcPanItem);

var _wxcTabPage = __webpack_require__(79);

var _wxcTabPage2 = _interopRequireDefault(_wxcTabPage);

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

var dom = weex.requireModule('dom');
exports.default = {
    components: { WxcTabPage: _wxcTabPage2.default, WxcPanItem: _wxcPanItem2.default },
    props: {
        // 标题数据
        tabTitles: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        contentNames: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        item: {
            type: Array,
            default: function _default() {
                return [];
            }
        },

        index: {
            default: 0
        },
        tabStyles: {
            default: {
                bgColor: '#FFFFFF',
                titleColor: '#666666',
                activeTitleColor: '#3D3D3D',
                activeBgColor: '#FFFFFF',
                isActiveTitleBold: true,
                width: 150,
                height: 90,
                fontSize: 28,
                hasActiveBottom: true,
                activeBottomColor: '#333333',
                activeBottomHeight: 3,
                activeBottomWidth: 150,
                textPaddingLeft: 10,
                textPaddingRight: 10
            }
        }
    },
    data: function data() {
        return {
            indexPage: 0,
            currentItem: []
        };
    },
    created: function created() {
        this.currentItem.push(this.item[0]);
    },


    methods: {
        wxcTabPageCurrentTabSelected: function wxcTabPageCurrentTabSelected(e) {
            var self = this;
            var index = e.page;
            if (self.indexPage != index) {
                self.indexPage = index;
                self.$emit('pageSelected', index);
                // this.$refs['wxc-slider'].setValue(self.indexPage);
            }
            // if(index >= self.currentItem.length){
            //     self.currentItem.push(self.item[index])
            // }
            // console.log("----index:"+self.indexPage);
            // console.log("----length:"+self.currentItem.length);
        },
        changePage: function changePage(e) {
            if (this.indexPage != e.index) {
                this.indexPage = e.index;
                this.$refs['wxc-tab-page'].setPage(e.index);
            }
        },
        setPage: function setPage(index) {
            this.$refs['wxc-tab-page'].setPage(index);
        }
    }
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(73);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(74)

/* template */
var __vue_template__ = __webpack_require__(78)
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
__vue_options__.__file = "F:\\weex\\weex_develop\\abm_dev_weex\\abm-weexSource\\node_modules\\weex-ui\\packages\\wxc-pan-item\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _indexWeex = __webpack_require__(0);

var _indexWeex2 = _interopRequireDefault(_indexWeex);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _bindEnv = __webpack_require__(5);

var _bindEnv2 = _interopRequireDefault(_bindEnv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    url: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      isPanning: false,
      appearMap: [],
      supportAndroid: _bindEnv2.default.supportsEBForAndroid()
    };
  },
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      if (_this.supportAndroid) {
        var element = _this.$refs['wxc-pan-item'];
        _indexWeex2.default.prepare && _indexWeex2.default.prepare({
          anchor: element.ref,
          eventType: 'pan'
        });
      }
    }, 300);
  },

  methods: {
    itemClicked: function itemClicked() {
      if (this.isPanning) {
        return;
      }
      this.url && _utils2.default.goToH5Page(this.url, true);
      this.$emit('wxcPanItemClicked', { extId: this.extId });
    },
    dispatchPan: function dispatchPan(e) {
      var _this2 = this;

      if (this.supportAndroid) {
        if (e.state === 'start') {
          this.isPanning = true;
          var element = this.$refs['wxc-pan-item'];
          element && this.$emit('wxcPanItemPan', { element: element });
        } else if (e.state === 'end') {
          setTimeout(function () {
            _this2.isPanning = false;
          }, 50);
        }
      }
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var required = __webpack_require__(76)
  , qs = __webpack_require__(77)
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
/* 76 */
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
/* 77 */
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
/* 78 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.supportAndroid) ? _c('div', {
    ref: "wxc-pan-item",
    on: {
      "horizontalpan": _vm.dispatchPan,
      "appear": _vm.onItemAppear,
      "disappear": _vm.onItemDisAppear,
      "click": _vm.itemClicked
    }
  }, [_vm._t("default")], 2) : _c('div', {
    ref: "wxc-pan-item",
    on: {
      "click": _vm.itemClicked
    }
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(80);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(81)
)

/* script */
__vue_exports__ = __webpack_require__(82)

/* template */
var __vue_template__ = __webpack_require__(83)
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
/* 81 */
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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _bindEnv = __webpack_require__(5);

var _bindEnv2 = _interopRequireDefault(_bindEnv);

var _indexWeex = __webpack_require__(0);

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
/* 83 */
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
/* 84 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    style: {
      flexDirection: 'row',
      width: 750 + 'px',
      height: 90 + 'px',
      alignItems: 'center'
    }
  }, [_vm._t("left"), _c('wxc-tab-page', {
    ref: "wxc-tab-page",
    style: {
      flex: 1
    },
    attrs: {
      "needSlider": _vm.needSlider,
      "isTabView": _vm.isTabView,
      "spmC": 4307989,
      "tabTitles": _vm.tabTitles,
      "tabStyles": _vm.tabStyles,
      "tabPageHeight": 90
    },
    on: {
      "wxcTabPageCurrentTabSelected": _vm.wxcTabPageCurrentTabSelected
    }
  }), _vm._t("right")], 2), (_vm.item && _vm.item.length > 0) ? _c('slider', {
    ref: "wxc-slider",
    staticClass: ["banner"],
    attrs: {
      "autoPlay": "false",
      "value": _vm.index,
      "infinite": "false"
    },
    on: {
      "change": _vm.changePage
    }
  }, _vm._l((_vm.item), function(current, index) {
    return _c('div', {
      key: index,
      style: {
        width: 750 + 'px'
      }
    }, [_vm._t(current)], 2)
  })) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["title-parent"],
    style: {
      height: _vm.titleHeight + 'px',
      marginTop: _vm.nativeBarHeight + 'px'
    }
  }, [_c('div', {
    staticClass: ["left"],
    on: {
      "click": function($event) {
        _vm.back()
      }
    }
  }, [_c('image', {
    staticClass: ["back"],
    attrs: {
      "src": "assets://ic_back"
    }
  })]), _c('div', {
    style: {
      flex: 1,
      flexDirection: 'row'
    }
  }, _vm._l((_vm.tabTitles), function(item, i) {
    return _c('text', {
      class: [_vm.index === i ? 'title-select' : 'title-unselect'],
      style: {
        flex: 1
      },
      on: {
        "click": function($event) {
          _vm.clickItem(i)
        }
      }
    }, [_vm._v(_vm._s(item))])
  })), _c('div', {
    staticClass: ["right-parent"]
  }, [(_vm.showShare) ? _c('div', {
    staticClass: ["right"],
    on: {
      "click": _vm.share
    }
  }, [_c('image', {
    staticClass: ["share"],
    attrs: {
      "resize": "contain",
      "src": "assets://icon_white_share"
    }
  })]) : _vm._e()])]), _c('div', {
    staticClass: ["line"]
  }), (_vm.hide) ? _c('div', {
    ref: "content",
    staticClass: ["parent"],
    style: {
      top: _vm.height + 'px',
      bottom: _vm.bottom + 'px'
    }
  }, [_c('goods-details', {
    ref: "goods",
    style: {
      width: 750 + 'px'
    },
    attrs: {
      "from": "parent"
    },
    on: {
      "showMaterial": _vm.showMaterial,
      "showShare": function($event) {
        _vm.showShareUI()
      },
      "hideShare": function($event) {
        _vm.hideShareUI()
      }
    }
  }), (_vm.tabTitles.length > 1) ? _c('goods-material', {
    attrs: {
      "goods_id": _vm.goods_id,
      "brandId": _vm.brandId
    }
  }) : _vm._e()], 1) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = __webpack_require__(6);

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
/* 87 */
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
/* 88 */
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