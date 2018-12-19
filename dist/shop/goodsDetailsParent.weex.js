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

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(25)
)

/* script */
__vue_exports__ = __webpack_require__(26)

/* template */
var __vue_template__ = __webpack_require__(32)
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(12)
)

/* script */
__vue_exports__ = __webpack_require__(13)

/* template */
var __vue_template__ = __webpack_require__(14)
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(18)
)

/* script */
__vue_exports__ = __webpack_require__(19)

/* template */
var __vue_template__ = __webpack_require__(24)
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

var _api = __webpack_require__(52);

var _api2 = _interopRequireDefault(_api);

var _event = __webpack_require__(53);

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


var _goodsDetailsParent = __webpack_require__(5);

var _goodsDetailsParent2 = _interopRequireDefault(_goodsDetailsParent);

var _mixin = __webpack_require__(51);

var _mixin2 = _interopRequireDefault(_mixin);

var _utils = __webpack_require__(3);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.mixin(_mixin2.default);
_goodsDetailsParent2.default.el = '#root';
new Vue(_goodsDetailsParent2.default);

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
var __vue_template__ = __webpack_require__(50)
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
__vue_options__.__file = "F:\\weex\\weex_develop\\abm_dev_weex\\abm-weexSource\\src\\pages\\shop\\goodsDetailsParent.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4976adaf"
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
    "color": "#333333"
  },
  "goods-profiles": {
    "width": "750",
    "paddingLeft": "36",
    "paddingRight": "36",
    "lineHeight": "34",
    "fontSize": "22",
    "color": "#666666",
    "marginBottom": "25",
    "marginTop": "10"
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
    "marginTop": "20",
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
    "left": 0
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
  "origin-parent": {
    "width": "750",
    "height": "90",
    "paddingLeft": "36",
    "paddingRight": "36",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "origin-title": {
    "fontSize": "28",
    "color": "#333333",
    "lineHeight": "36"
  },
  "origin-hint": {
    "width": "750",
    "paddingLeft": "36",
    "paddingRight": "24",
    "lineHeight": "38",
    "fontSize": "22",
    "color": "#666666",
    "marginBottom": "25"
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
  },
  "material-title": {
    "width": "750",
    "height": "90",
    "backgroundColor": "#FFFFFF",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "material-title-text": {
    "width": "750",
    "height": "90",
    "color": "#333333",
    "fontSize": "30",
    "lineHeight": "90",
    "textAlign": "center"
  },
  "material-title-more": {
    "position": "absolute",
    "top": 0,
    "right": "36",
    "height": "90",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "material-title-more-text": {
    "fontSize": "20",
    "lineHeight": "90",
    "textAlign": "center",
    "color": "#666666",
    "marginRight": "23",
    "marginLeft": "12"
  },
  "promotion-title": {
    "width": "89",
    "marginTop": "30",
    "marginLeft": "36",
    "lineHeight": "36",
    "fontSize": "28",
    "color": "#333333"
  },
  "promotion-tag": {
    "width": "60",
    "height": "30",
    "marginRight": "10",
    "borderWidth": "2",
    "borderRadius": "4",
    "borderColor": "#CF1126",
    "textAlign": "center",
    "fontSize": "22",
    "color": "#CF1126"
  },
  "promotion-text": {
    "flex": 1,
    "height": "30",
    "paddingRight": "80",
    "lines": 1,
    "textOverflow": "ellipsis",
    "fontSize": "22",
    "color": "#666666",
    "lineHeight": "34",
    "marginLeft": "10"
  },
  "address-title": {
    "width": "89",
    "lineHeight": "36",
    "fontSize": "28",
    "color": "#333333"
  },
  "address-icon": {
    "width": "18",
    "height": "23"
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
  "brand-label-icon": {
    "width": "24",
    "height": "24"
  },
  "brand-label": {
    "fontSize": "20",
    "lineHeight": "32",
    "color": "#CF1126",
    "paddingLeft": "8"
  },
  "brand-item": {
    "width": "750",
    "paddingLeft": "36",
    "paddingRight": "36",
    "flexDirection": "row",
    "paddingTop": "20",
    "paddingBottom": "20",
    "alignItems": "center"
  },
  "brand-cover-bg": {
    "width": "100",
    "height": "100"
  },
  "brand-cover": {
    "width": "80",
    "height": "24",
    "position": "absolute",
    "top": "38",
    "left": "10"
  },
  "brand-name": {
    "fontSize": "24",
    "lines": 1,
    "color": "#333333",
    "textOverflow": "ellipsis"
  },
  "brand-message": {
    "fontSize": "20",
    "lines": 2,
    "color": "#666666",
    "textOverflow": "ellipsis"
  },
  "promotion-banner": {
    "width": "750",
    "height": "188"
  },
  "recommend-goods-scroll": {
    "flexDirection": "row",
    "height": "310"
  },
  "recommend-goods-parent": {
    "width": "200",
    "marginRight": "18"
  },
  "recommend-goods-cover": {
    "width": "200",
    "height": "200",
    "backgroundColor": "#F6F6F6"
  },
  "recommend-goods-text": {
    "width": "180",
    "lines": 1,
    "lineHeight": "30",
    "color": "#333333",
    "fontSize": "20",
    "textOverflow": "ellipsis"
  },
  "recommend-goods-price": {
    "width": "180",
    "lines": 1,
    "lineHeight": "30",
    "color": "#CF1126",
    "fontSize": "22",
    "textOverflow": "ellipsis"
  },
  "title-parent": {
    "width": "750",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "title-unselect": {
    "fontSize": "28",
    "textAlign": "center",
    "maxLines": 1,
    "textOverflow": "ellipsis",
    "color": "#333333"
  },
  "title-select-unborder": {
    "width": "60",
    "height": "4",
    "backgroundColor": "#ffffff"
  },
  "title-select": {
    "fontSize": "32",
    "textAlign": "center",
    "maxLines": 1,
    "textOverflow": "ellipsis",
    "color": "#CF1126"
  },
  "title-select-border": {
    "width": "60",
    "height": "4",
    "backgroundColor": "#CF1126"
  },
  "back": {
    "width": "21",
    "height": "36",
    "marginRight": "12"
  },
  "title-parent-content": {
    "flex": 1,
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "#ffffff"
  },
  "share": {
    "width": "32",
    "height": "32"
  },
  "unread-num-dot": {
    "width": "28",
    "height": "28",
    "right": 0,
    "backgroundColor": "#CF1126",
    "lineHeight": "28",
    "fontSize": "18",
    "color": "#FFFFFF",
    "position": "absolute",
    "borderRadius": 50,
    "textAlign": "center"
  },
  "left": {
    "width": "150",
    "flexDirection": "row",
    "justifyContent": "flex-start",
    "alignItems": "center",
    "paddingLeft": "36"
  },
  "right-parent": {
    "marginRight": "35",
    "flexDirection": "row"
  },
  "right": {
    "width": "75",
    "alignItems": "flex-end",
    "justifyContent": "center",
    "position": "relative"
  },
  "countdown-parent": {
    "width": "750",
    "height": "90",
    "backgroundColor": "#DD5766",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "countdown-left": {
    "width": "289",
    "height": "90",
    "lineHeight": "90",
    "textAlign": "center",
    "fontSize": "28",
    "color": "#FFFFFF"
  },
  "countdown-line": {
    "width": "1",
    "height": "84",
    "backgroundColor": "#FFFFFF"
  },
  "countdown-right": {
    "width": "460",
    "height": "90",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "countdown-right-text": {
    "marginLeft": "24",
    "marginRight": "20",
    "lineHeight": "90",
    "textAlign": "center",
    "fontSize": "28",
    "color": "#FFFFFF"
  },
  "countdown-right-time-text": {
    "height": "90",
    "lineHeight": "90",
    "alignItems": "center",
    "fontSize": "30",
    "color": "#FFFFFF",
    "textAlign": "center"
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _titleBar = __webpack_require__(8);

var _titleBar2 = _interopRequireDefault(_titleBar);

var _line = __webpack_require__(1);

var _line2 = _interopRequireDefault(_line);

var _newBuyGoodsPop = __webpack_require__(15);

var _newBuyGoodsPop2 = _interopRequireDefault(_newBuyGoodsPop);

var _goodsRule = __webpack_require__(34);

var _goodsRule2 = _interopRequireDefault(_goodsRule);

var _gridSelect = __webpack_require__(2);

var _gridSelect2 = _interopRequireDefault(_gridSelect);

var _releaseList = __webpack_require__(38);

var _releaseList2 = _interopRequireDefault(_releaseList);

var _dialog = __webpack_require__(46);

var _dialog2 = _interopRequireDefault(_dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var titleBar = weex.requireModule('titleBar'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var loadingModule = weex.requireModule('loadingModule');
var promptModule = weex.requireModule('promptModule');
var utilModule = weex.requireModule('utilModule');
var height = 0;
var bottom = 0;
var nativeBarHeight = 0;
var titleHeight = 0;
var dom = weex.requireModule('dom');
var event = new BroadcastChannel('cart');
var goodsAddressEvent = new BroadcastChannel('goods_select_address');
var collectNum = new BroadcastChannel('collectNum');
var chooseAddress = new BroadcastChannel('choose_address');
var unReadEvent = new BroadcastChannel('event');
exports.default = {
    props: {
        from: {
            default: 'goods'
        }
    },
    components: { WxcGridSelect: _gridSelect2.default, rulePop: _goodsRule2.default, pop: _newBuyGoodsPop2.default, title: _titleBar2.default, line: _line2.default, material: _releaseList2.default, dialog: _dialog2.default },
    data: function data() {
        return {
            bottom: bottom,
            nativeBarHeight: nativeBarHeight,
            titleHeight: titleHeight,
            isIphoneX: false,
            tabTitles: ['商品'],
            title: '商品详情',
            brand_provider_level: 0,
            lastTimestamp: 0,
            height: height,
            goods_id: '',
            albums: [],
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
            shareIcon: '',
            showGoodsMessage: false, //进入到商品详情，屏幕外的不渲染
            taxes_rules: [],
            explain_rules: [{ 'title': '正品保障', 'message': '单创承诺该商品为100%海外正品，假一赔十，正品保障，无忧购物。' }, {}, { 'title': '需要实名认证', 'message': '根据中国海关总署要求，需要您提供真实的收货人姓名、身份证信息配合进行个人物品入境申报。我们严格为该信息保密。' }, { 'title': '是否有中文标签', 'message': '跨境商品是以直邮或者批量海外原产地采购的方式进入国内保税仓，相当于您直接在国外购买商品，是无法提供中文标签的。' }, { 'title': '有没有发票', 'message': '因保税区或海外发货属于境外购买行为，因此无法为您开具发票，请您谅解。' }],
            taxesDatas: [{ 'title': '跨境电商综合税需按一般贸易增值税及消费税税额的70%征收，单创代征代缴。' }, { 'title': '财政部、海关总署、国家税务局发布跨境电子商务零售进口税收政策，自2016年4月8日起，跨境电商单次交易限值为人民币2000元，个人年度交易限值为人民币20000元。' }],
            promotionRules: [],
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
            goodsSkuDepots: [], //购买商品时的发货仓库
            goodsDepots: [], //商品详情发货仓库
            buyGoodsRegions: [],
            vg_activity: null,
            address_id: '',
            depot_id: '',
            count: 0,
            buySpec: '',
            online_status: '',
            showTaxesRule: false,
            showExplainRule: false,
            showPromotionRule: false, //促销弹窗
            showAddCart: false,
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
                checkedBackgroundColor: '#F6F6F6'
            },
            abroad_icon: 'http://img.abmau.com/abmau/8ae8fe552ea5d162b4df85b067947d4f.png',
            time: 0,
            currentTime: 0,
            differencesTime: 0,
            countDownStr: '',
            countDownInterval: '',
            material_arr: null, //素材
            banner_list: null, //商品详情banner
            brand_arr: null, //品牌
            promotion: null, //促销
            related_goods: null, //相关推荐商品
            indexTitle: 0, //当前位置所属的标题
            isShowingMaterialCell: false, //素材模块是否显示
            isShowingMessageCell: false, //商品详情模块是否显示
            all_region: null,
            is_optional: -1, //是否可配送
            collectionData: null, //点击收藏的素材
            collectionIndex: -1, //点击收藏的素材的角标位
            showMessageTitle: false, //显示跳转我的消息的图标
            isOffsetGoods: false, //切换收货地址是否切换商品
            total_unread_num: 0, //未读消息数量小红点
            fee: '',
            buyGoods: null,
            timerStr: '',
            shareTitle: '',
            showShareDialog: false, //显示转发对话框
            fileUrl: '', //附件地址
            currentMaterial: null,
            isSelectShowLocation: false //点击头部定位滑动到某个区域
        };
    },


    methods: {
        onChange: function onChange(event) {
            if (this.albums.length > 1 && weex.config.env.platform.toLowerCase() === 'android') {
                utilModule.interceptSwipeBack({ index: event.index });
            }
        },
        viewstart: function viewstart() {
            this.getCartNum();
        },
        clickOpenVip: function clickOpenVip() {
            this.jumpTo2('openupvip/primaryVip', '', {});
        },
        onScroll: function onScroll() {
            if (weex.config.env.platform.toLowerCase() === 'ios') {
                if (this.$refs.web.setNeedsLayoutWebView) {
                    this.$refs.web.setNeedsLayoutWebView();
                }
            }
        },
        fetch: function fetch() {
            var _this = this;
            if (_this.showFetchLoading) {
                loadingModule.show({ msg: '' });
            }
            _this.showFetchLoading = false;
            _this.Get(_this.api().new_order_center, {
                is_store: 0,
                id: _this.goods_id,
                address_id: this.address_id
            }, function (res) {
                loadingModule.cancel(function (ret) {});
                if (res.data.code == 0) {
                    _this.albums = res.data.data.albums;
                    _this.goods = res.data.data;

                    _this.goods_id = _this.brand_provider_level = _this.goods.brand_provider_level;
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
                    _this.brand_arr = res.data.data.brand_arr;
                    _this.material_arr = _this.resetData(res.data.data.material_arr);
                    _this.banner_list = res.data.data.banner_list;
                    _this.promotion = res.data.data.promotion;
                    _this.all_region = res.data.data.all_region;
                    _this.depot_id = res.data.data.depot_id;
                    if (_this.goods.no_share == 0) {
                        _this.getShare();
                    } else {
                        _this.shareIcon = '';
                        _this.showMessageTitle = true;
                    }
                    _this.goodsDepots = _this.resetDepots(res.data.data.other_depot_goods);
                    if (res.data.data.all_region.address_id) {
                        _this.address_id = res.data.data.all_region.address_id;
                    }
                    var titleData = ['商品'];
                    if (_this.material_arr && _this.material_arr.length > 0) {
                        titleData.push('口碑');
                    }
                    titleData.push('详情');
                    _this.tabTitles = titleData;
                    if (res.data.data.online_status == 0) {
                        _this.buy_type = '已售罄';
                    } else {
                        _this.buy_type = '即将开售  ';
                    }
                    if (res.data.data.depot_name) {
                        _this.explain_rules.splice(1, 1, { 'title': res.data.data.depot_name, 'message': res.data.data.depot_intro });
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
                        var buyStarDate = new Date(res.data.data.buy_start_str * 1000);
                        var month = buyStarDate.getMonth() + 1;
                        var monthStr = month < 10 ? '0' + month : month;
                        var day = buyStarDate.getDate();
                        var dayStr = day < 10 ? '0' + day : day;
                        var hour = buyStarDate.getHours();
                        var hourStr = hour < 10 ? '0' + hour : hour;
                        _this.timerStr = monthStr + '月' + dayStr + '日' + hourStr + '时';
                    }
                } else {
                    promptModule.showPrompt({ msg: res.data.msg, type: 'err' });
                }
            });
        },
        getRecommendData: function getRecommendData() {
            var _this = this;
            _this.Get(_this.api().shop_related_goods, {}, function (res) {
                if (res.data.code == 0) {
                    _this.related_goods = res.data.data;
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
                    _this.showMessageTitle = true;
                    if (res.data.code == 0) {
                        var data = res.data.data;
                        if (data && data.share_url && data.goods_img) {
                            _this.shareData = data;
                            _this.shareIcon = "assets://icon_white_share";
                        } else {
                            _this.shareData = null;
                            _this.shareIcon = '';
                        }
                    }
                });
            }
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
        getGoodsMessageDisplay: function getGoodsMessageDisplay() {
            var _this = this;
            _this.Get(_this.api().message_home_unread, {}, function (res) {
                if (res.data.code == 0) {
                    _this.total_unread_num = res.data.data;
                }
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
        },
        resetData: function resetData(data) {
            var _this = this;
            data.map(function (item, i) {
                item.type = 'material';
                if (_this.brand_arr) {
                    item.brand_id = _this.brand_arr.id;
                    item.brand_name = _this.brand_arr.name;
                };
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
            } else {}
        },
        selectBuyDepot: function selectBuyDepot(goods_id) {
            this.goods_id = goods_id;
            this.isSelectRegions = false;
            this.getGoodsSku(this.actionType);
            this.fetch();
        },
        selectDepots: function selectDepots(res, _ref) {
            var selectIndex = _ref.selectIndex,
                checked = _ref.checked,
                checkedList = _ref.checkedList;

            var depot = this.goodsDepots[selectIndex];
            this.goods_id = depot.goods_id;
            this.fetch();
        },
        loadFinish: function loadFinish(res) {
            this.webHeight = res.height;
        },
        error: function error(res) {
            if (this.compareVersion(weex.config.env.appVersion, '3.1.0')) this.$refs.web.setReload();
        },
        addCart: function addCart() {
            this.getGoodsSku(1);
        },
        buyNow: function buyNow() {
            this.getGoodsSku(2);
        },
        showTaxesPop: function showTaxesPop() {
            this.showTaxesRule = true;
        },
        showExplainPop: function showExplainPop() {
            this.showExplainRule = true;
        },
        closeMask: function closeMask() {
            this.showExplainRule = false;
            this.showTaxesRule = false;
            this.showAddCart = false;
            this.showPromotionRule = false;
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
                goods_id: _this.buyGoods.id,
                goods_num: _this.buyGoods.buyNum,
                spec_type: _this.buySpec.type,
                spec_stock: _this.buySpec.stock,
                type: 'quick',
                address_id: _this.address_id
            }, function (res) {
                loadingModule.cancel(function (ret) {
                    var result = ret.result;
                    if (result == 'dismiss') {
                        if (res.data.code == 0) {
                            _this.closeMask();
                            _this.jumpTo2('order/confirmOrder', '', { type: 'quick', address_id: _this.address_id });
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
        showGoods: function showGoods() {
            this.isSelectShowLocation = false;
        },
        showMaterial: function showMaterial() {
            if (this.isSelectShowLocation) {
                if (this.indexTitle == 1) {
                    this.isSelectShowLocation = false;
                }
                return;
            }
            this.indexTitle = 1;
            this.isShowingMaterialCell = true;
        },
        showMessage: function showMessage() {
            if (this.isSelectShowLocation) {
                if (this.indexTitle == this.tabTitles.length - 1) {
                    this.isSelectShowLocation = false;
                }
                return;
            }
            this.showGoodsMessage = true;
            if (!this.isShowingMaterialCell) {
                this.indexTitle = this.tabTitles.length - 1;
            }
            this.isShowingMessageCell = true;
        },
        hideMaterial: function hideMaterial() {
            this.isShowingMaterialCell = false;
            if (!this.isShowingMaterialCell && !this.isShowingMessageCell) {
                this.indexTitle = 0;
            } else if (this.isShowingMessageCell) {
                this.indexTitle = this.tabTitles.length - 1;
            }
        },
        hideMessage: function hideMessage() {
            this.isShowingMessageCell = false;
            if (!this.isShowingMaterialCell && !this.isShowingMessageCell) {
                this.indexTitle = 0;
            }
        },
        openPromotion: function openPromotion(item) {
            if (item.url) {
                this.jumpToBanner(item.name, item.url, '', '', '', '');
            } else if (item.intro) {
                this.promotionRules = [];
                item.title = item.name;
                item.message = item.intro;
                this.promotionRules.push(item);
                this.showPromotionRule = true;
            }
        },
        onScrollRecommendGoods: function onScrollRecommendGoods(event) {
            if (this.albums.length > 1 && weex.config.env.platform.toLowerCase() === 'android') {
                utilModule.interceptSwipeBack({ index: event.index });
            }
        },
        back: function back() {
            this.popBar();
        },
        clickItem: function clickItem(item, index) {
            var _this = this;
            if (index === _this.indexTitle) return;
            _this.isSelectShowLocation = true;
            if (item == '商品') {
                var el = _this.$refs.goods_top;
                dom.scrollToElement(el, { offset: 0 });
                _this.indexTitle = 0;
            } else if (item == '口碑') {
                var _el = _this.$refs.goods_material;
                dom.scrollToElement(_el, { offset: 20 });
                _this.isShowingMaterialCell = true;
                _this.indexTitle = 1;
            } else if (item == '详情') {
                var _el2 = _this.$refs.goods_message;
                dom.scrollToElement(_el2, { offset: 0 });
                _this.isShowingMessageCell = true;
                _this.indexTitle = _this.tabTitles.length - 1;
            }
        },
        clickRecommendGoods: function clickRecommendGoods(item) {
            this.jumpTo2('shop/goodsDetailsParent', '', { goods_id: item.id });
        },
        openBrandDetails: function openBrandDetails(brandData) {
            this.jumpTo2('classify/brandDetail', '', { title: brandData.name, brandId: brandData.id });
        },
        changeAddress: function changeAddress() {
            if (this.all_region) {
                this.jumpTo2('address/order_address', '', { address_id: this.all_region.address_id, type: 'list', from: '1', goods_id: this.goods_id });
            } else {
                this.jumpTo2('address/order_address', '', { address_id: 0, type: 'list', from: 1, goods_id: this.goods_id });
            }
        },
        goMessage: function goMessage() {
            this.jumpTo2('home/home_message', '', {});
        },
        jumpCollection: function jumpCollection(item, index) {
            this.collectionData = item;
            this.collectionIndex = index;
        },
        goMoreMaterial: function goMoreMaterial() {
            this.jumpTo2('shop/goodsMaterial', '', { goods_id: this.goods_id, brandId: this.goods.brand_id });
        },
        openPromotionBanner: function openPromotionBanner() {
            this.jumpToBanner(this.banner_list.name, this.banner_list.title_url, '', '', '', '');
        },
        appendages: function appendages(data) {
            this.fileUrl = data.url;
            this.shareTitle = data.data.desc;
            this.currentMaterial = data.ref;
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
        _this.getTitleHeight(_this);
        _this.getStatusBarHeight(_this);
        _this.getTopHeight(_this);
        _this.isIpx(_this);
        _this.title = _this.GetUrlPara(weex.config.bundleUrl, 'title');
        _this.goods_id = _this.GetUrlPara(weex.config.bundleUrl, 'goods_id');
        _this.iPhoneX(_this);
        if (!_this.title || _this.title == 'undefined') _this.title = "商品详情";
        _this.fetch();
        _this.getRecommendData();
        _this.getCartNum();
        _this.getGoodsMessageDisplay();
        titleBar.addFloatView();
        if (weex.config.env.platform.toLowerCase() === 'android' && _this.compareVersion(weex.config.env.appVersion, '3.1.0')) {
            utilModule.eventListener(function () {});
            var globalEvent = weex.requireModule('globalEvent');
            globalEvent.addEventListener("geolocation", function (e) {
                if (_this.showTaxesRule) {
                    _this.showTaxesRule = false;
                } else if (_this.showExplainRule) {
                    _this.showExplainRule = false;
                } else if (_this.showAddCart) {
                    _this.showAddCart = false;
                } else {
                    _this.popBar();
                }
            });
        }
        chooseAddress.onmessage = function (event) {
            if (!event.data) {
                return;
            }
            if (event.data == _this.eventBusTag().RESET_ADDRESS) {
                _this.address_id = '';
                _this.fetch();
                if (_this.showAddCart) {
                    _this.isSelectRegions = true;
                    _this.getGoodsSku(_this.actionType);
                }
            }
        };
        goodsAddressEvent.onmessage = function (event) {
            if (!event.data || !_this.goods) {
                return;
            }
            var region = {};
            region.id = event.data.addressId;
            region.full_address = event.data.addressName;
            _this.all_region = region;
            _this.address_id = region.id;
            if (_this.goods_id != event.data.goodsId) {
                _this.isOffsetGoods = true;
            }
            _this.goods_id = event.data.goodsId;
            if (_this.showAddCart) {
                _this.isSelectRegions = true;
                _this.getGoodsSku(_this.actionType);
            }
            _this.fetch();
        };
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
                _this.material_arr.splice(_this.collectionIndex, 1, _this.collectionData);
            }
        };
        unReadEvent.onmessage = function (event) {
            if (!event.data) {
                return;
            }
            switch (event.data) {
                case _this.eventBusTag().REFRESH_MESSAGE:
                    _this.getGoodsMessageDisplay();
                    break;
            }
        };
    },

    destroyed: function destroyed() {
        clearInterval(this.countDownInterval);
    }
};

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
var __vue_template__ = __webpack_require__(11)
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
/* 9 */
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
/* 10 */
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
/* 11 */
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
/* 12 */
/***/ (function(module, exports) {

module.exports = {
  "line": {
    "width": "750",
    "height": "1.4",
    "backgroundColor": "#e2e2e2"
  }
}

/***/ }),
/* 13 */
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
/* 14 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["line"]
  })
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(16)
)

/* script */
__vue_exports__ = __webpack_require__(17)

/* template */
var __vue_template__ = __webpack_require__(33)
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
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _gridSelect = __webpack_require__(2);

var _gridSelect2 = _interopRequireDefault(_gridSelect);

var _WxcMask = __webpack_require__(0);

var _WxcMask2 = _interopRequireDefault(_WxcMask);

var _line = __webpack_require__(1);

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
/* 18 */
/***/ (function(module, exports) {

module.exports = {
  "grid-select": {
    "flexDirection": "row",
    "width": "750",
    "flexWrap": "wrap"
  }
}

/***/ }),
/* 19 */
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

var _option = __webpack_require__(20);

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
var __vue_template__ = __webpack_require__(23)
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
/* 21 */
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
/* 22 */
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
/* 23 */
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
/* 24 */
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
/* 25 */
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcOverlay = __webpack_require__(27);

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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(28);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(29)
)

/* script */
__vue_exports__ = __webpack_require__(30)

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
/* 29 */
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
/* 30 */
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
/* 31 */
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
/* 32 */
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
/* 33 */
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(35)
)

/* script */
__vue_exports__ = __webpack_require__(36)

/* template */
var __vue_template__ = __webpack_require__(37)
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
/* 35 */
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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _WxcMask = __webpack_require__(0);

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
/* 37 */
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
/* 39 */
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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pictureGrid = __webpack_require__(41);

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
/* 42 */
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
//
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
/* 44 */
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
/* 45 */
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(47)
)

/* script */
__vue_exports__ = __webpack_require__(48)

/* template */
var __vue_template__ = __webpack_require__(49)
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
/* 47 */
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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _WxcMask = __webpack_require__(0);

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
/* 49 */
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
/* 50 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"],
    on: {
      "viewstart": function($event) {
        _vm.viewstart()
      }
    }
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
      height: _vm.titleHeight + 'px',
      flex: 1,
      flexDirection: 'row'
    }
  }, _vm._l((_vm.tabTitles), function(item, i) {
    return _c('div', {
      staticClass: ["title-parent-content"],
      style: {
        height: _vm.titleHeight + 'px'
      }
    }, [_c('text', {
      class: [_vm.indexTitle === i ? 'title-select' : 'title-unselect'],
      style: {
        height: (_vm.titleHeight - 4) + 'px',
        lineHeight: (_vm.titleHeight - 4) + 'px'
      },
      on: {
        "click": function($event) {
          _vm.clickItem(item, i)
        }
      }
    }, [_vm._v(_vm._s(item))]), _c('text', {
      class: [_vm.indexTitle === i ? 'title-select-border' : 'title-select-unborder']
    })])
  })), _c('div', {
    staticClass: ["right-parent"],
    style: {
      height: _vm.titleHeight + 'px'
    }
  }, [(_vm.showMessageTitle) ? _c('div', {
    staticClass: ["right"],
    style: {
      height: _vm.titleHeight + 'px'
    },
    on: {
      "click": function($event) {
        _vm.goMessage()
      }
    }
  }, [_c('image', {
    staticClass: ["share"],
    style: {
      marginRight: '10px'
    },
    attrs: {
      "resize": "contain",
      "src": "http://img.abmau.com/abmau/8aba94d064b5484f98349a91c50574f0.png"
    }
  }), (_vm.total_unread_num > 0 && _vm.total_unread_num < 99) ? _c('text', {
    staticClass: ["unread-num-dot"],
    style: {
      top: (_vm.titleHeight / 2 - 28) + 'px'
    }
  }, [_vm._v(_vm._s(_vm.total_unread_num))]) : _vm._e(), (_vm.total_unread_num > 99) ? _c('text', {
    staticClass: ["unread-num-dot"],
    style: {
      top: (_vm.titleHeight / 2 - 35) + 'px',
      width: '35px',
      height: '35px',
      lineHeight: '35px'
    }
  }, [_vm._v("99+")]) : _vm._e()]) : _vm._e(), (_vm.shareIcon) ? _c('div', {
    staticClass: ["right"],
    style: {
      height: _vm.titleHeight + 'px'
    },
    on: {
      "click": _vm.share
    }
  }, [_c('image', {
    staticClass: ["share"],
    attrs: {
      "resize": "contain",
      "src": "http://img.abmau.com/abmau/72e5bc3d5a1a6e3a1f9f38e4a093b4ed.png"
    }
  })]) : _vm._e()])]), _c('line'), _c('div', {
    staticClass: ["parent"],
    style: {
      top: _vm.height + 'px',
      bottom: _vm.bottom + 'px'
    }
  }, [(_vm.goods) ? _c('list', {
    staticStyle: {
      flex: "1"
    },
    on: {
      "scroll": _vm.onScroll
    }
  }, [_c('cell', {
    ref: "goods_top",
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [(_vm.albums && _vm.albums.length != 0) ? _c('slider', {
    staticClass: ["banner"],
    attrs: {
      "scrollable": "true",
      "autoPlay": "true",
      "interval": "3000",
      "infinite": "true"
    },
    on: {
      "appear": function($event) {
        _vm.showGoods()
      },
      "change": _vm.onChange
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
  }) : _vm._e()], 2) : _vm._e(), (_vm.brand_provider_level != 1 && _vm.is_goods_shipping != 1) ? _c('line') : _vm._e(), (_vm.time != 0 && _vm.online_status != 0) ? _c('div', {
    staticClass: ["countdown-parent"]
  }, [(_vm.timerStr) ? _c('text', {
    staticClass: ["countdown-left"]
  }, [_vm._v(_vm._s(_vm.timerStr) + "开售")]) : _vm._e(), _c('div', {
    staticClass: ["countdown-line"]
  }), _c('div', {
    staticClass: ["countdown-right"]
  }, [_c('text', {
    staticClass: ["countdown-right-text"]
  }, [_vm._v("倒计时")]), _c('text', {
    staticClass: ["countdown-right-time-text"]
  }, [_vm._v(_vm._s(_vm.countDownStr))])])]) : _vm._e(), (_vm.brand_provider_level == 1) ? _c('div', {
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
  })])])]) : _vm._e()], 1), _c('cell', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('div', {
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
  }, [_vm._v(")")])]), _c('div', [(_vm.is_free_shipping || (_vm.is_duty_free && _vm.goods_type == 5) || _vm.recom_label_name.length != 0) ? _c('div', {
    staticClass: ["tag-parent"],
    style: {
      marginTop: 40 + 'px'
    }
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
  }, [_vm._v(_vm._s(_vm.goods.name))]), _c('text', {
    staticClass: ["goods-profiles"]
  }, [_vm._v(_vm._s(_vm.goods.notice))])])]), (_vm.promotion && _vm.promotion.length > 0) ? _c('cell', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('div', {
    staticClass: ["bg-grey"]
  }), _c('div', {
    style: {
      width: 750 + 'px',
      flexDirection: 'row',
      paddingBottom: 30 + 'px'
    }
  }, [_c('text', {
    staticClass: ["promotion-title"]
  }, [_vm._v("促销")]), _c('div', {
    style: {
      width: 625 + 'px',
      paddingRight: 36 + 'px'
    }
  }, _vm._l((_vm.promotion), function(item, index) {
    return _c('div', {
      key: index,
      style: {
        flexDirection: 'row',
        paddingTop: 30 + 'px',
        alignItems: 'center'
      },
      on: {
        "click": function($event) {
          _vm.openPromotion(item)
        }
      }
    }, [_c('div', {
      staticClass: ["tag"]
    }, [_c('text', {
      staticClass: ["text_tag"]
    }, [_vm._v(_vm._s(item.label))])]), _c('text', {
      staticClass: ["promotion-text"]
    }, [_vm._v(_vm._s(item.name))]), (item.intro || item.url) ? _c('image', {
      staticClass: ["next"],
      attrs: {
        "src": "http://img.abmau.com/abmau/197260145f13acf70e06fe37ad4ba0c8.png"
      }
    }) : _vm._e()])
  }))])]) : _vm._e(), _c('cell', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('div', {
    staticClass: ["bg-grey"]
  }), _c('div', {
    staticClass: ["horizontal"]
  }, [_c('text', {
    staticClass: ["address-title"]
  }, [_vm._v("送至")]), _c('div', {
    style: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center'
    },
    on: {
      "click": function($event) {
        _vm.changeAddress()
      }
    }
  }, [_c('image', {
    staticClass: ["address-icon"],
    attrs: {
      "src": "http://img.abmau.com/abmau/11c5e26141448fa78e00a02414b5a879.png"
    }
  }), (_vm.all_region && _vm.all_region.full_address) ? _c('text', {
    staticClass: ["address-text"]
  }, [_vm._v(_vm._s(_vm.all_region.full_address))]) : _vm._e(), (_vm.is_optional == 0 && (!_vm.all_region || !_vm.all_region.full_address) && _vm.address_id) ? _c('text', {
    staticClass: ["address-text"]
  }, [_vm._v("当前发货仓库不支持配送您的收货地址")]) : _vm._e(), (_vm.is_optional == 0 && (!_vm.all_region || !_vm.all_region.full_address) && !_vm.address_id) ? _c('text', {
    staticClass: ["address-text"]
  }, [_vm._v("当前发货仓库不支持配送您的默认地址")]) : _vm._e(), (_vm.is_optional != -1 && _vm.is_optional != 0 && (!_vm.all_region || !_vm.all_region.full_address) && !_vm.address_id) ? _c('text', {
    staticClass: ["address-text"]
  }, [_vm._v("请添加收货地址")]) : _vm._e(), _c('image', {
    staticClass: ["next"],
    attrs: {
      "src": "http://img.abmau.com/abmau/197260145f13acf70e06fe37ad4ba0c8.png"
    }
  })])]), _c('line'), (_vm.goodsDepots.length > 0) ? _c('div', [_c('div', {
    staticClass: ["origin-parent"]
  }, [_c('text', {
    staticClass: ["origin-title"]
  }, [_vm._v("发货仓库")]), _c('wxc-grid-select', {
    attrs: {
      "single": true,
      "left": 30,
      "right": 0,
      "top": 0,
      "cols": 4,
      "customStyles": _vm.customStyles,
      "list": _vm.goodsDepots
    },
    on: {
      "select": function (params) { return _vm.selectDepots('res', params); }
    }
  })], 1)]) : _vm._e(), (_vm.goods.depot_intro) ? _c('text', {
    staticClass: ["origin-hint"]
  }, [_vm._v(_vm._s(_vm.goods.depot_intro))]) : _vm._e(), _c('div', {
    staticClass: ["bg-grey"]
  })], 1), _c('cell', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [(_vm.goods_type != 5) ? _c('div', {
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
  }, [_vm._v("跨境商品")]), _c('div', {
    style: {
      width: 30 + 'px'
    }
  })]) : _vm._e(), ((_vm.goods_type == 1 || _vm.goods_type == 3)) ? _c('div', {
    style: {
      flexDirection: 'row',
      alignItems: 'center'
    }
  }, [_c('text', {
    staticClass: ["cross-border-country-dot"]
  }), _c('text', {
    staticClass: ["cross-border-message"]
  }, [_vm._v("海外直邮")])]) : _vm._e()]) : _vm._e(), (_vm.vg_activity) ? _c('div', [_c('line'), _c('div', {
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
  }, [_vm._v("正品保障 | " + _vm._s(_vm.goods.supply_name) + "发货")]), _c('image', {
    staticClass: ["next"],
    attrs: {
      "src": "http://img.abmau.com/abmau/197260145f13acf70e06fe37ad4ba0c8.png"
    }
  })]), _c('line')], 1) : _vm._e(), _c('div', {
    staticClass: ["horizontal"]
  }, [_c('div', {
    style: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center'
    }
  }, [_c('div', {
    style: {
      flexDirection: 'row',
      alignItems: 'center'
    }
  }, [_c('image', {
    staticClass: ["brand-label-icon"],
    attrs: {
      "src": "http://img.abmau.com/abmau/a953ceeea9c60c95fdad8e5026bddf44.png"
    }
  }), _c('text', {
    staticClass: ["brand-label"]
  }, [_vm._v("品牌直供")]), _c('div', {
    style: {
      width: 30 + 'px'
    }
  })]), _c('div', {
    style: {
      flexDirection: 'row',
      alignItems: 'center'
    }
  }, [_c('image', {
    staticClass: ["brand-label-icon"],
    attrs: {
      "src": "http://img.abmau.com/abmau/0f7f06f6301ed7436f7fbd41ea5d59f8.png"
    }
  }), _c('text', {
    staticClass: ["brand-label"]
  }, [_vm._v("独家授权")]), _c('div', {
    style: {
      width: 30 + 'px'
    }
  })]), _c('div', {
    style: {
      flexDirection: 'row',
      alignItems: 'center'
    }
  }, [_c('image', {
    staticClass: ["brand-label-icon"],
    attrs: {
      "src": "http://img.abmau.com/abmau/6e5353dac5f4ad76b583fbd053c860f4.png"
    }
  }), _c('text', {
    staticClass: ["brand-label"]
  }, [_vm._v("正品保证")]), _c('div', {
    style: {
      width: 30 + 'px'
    }
  })])]), (false) ? _c('image', {
    staticClass: ["next"],
    attrs: {
      "src": "http://img.abmau.com/abmau/197260145f13acf70e06fe37ad4ba0c8.png"
    }
  }) : _vm._e()]), (_vm.brand_arr) ? _c('line') : _vm._e(), (_vm.brand_arr) ? _c('div', {
    staticClass: ["brand-item"],
    on: {
      "click": function($event) {
        _vm.openBrandDetails(_vm.brand_arr)
      }
    }
  }, [_c('div', {
    style: {
      width: '100px',
      height: '100px',
      position: 'relative'
    }
  }, [_c('image', {
    staticClass: ["brand-cover-bg"],
    attrs: {
      "src": "http://img.abmau.com/abmau/de6349236c6a5bdc9f42f54c65d74adf.png"
    }
  }), _c('image', {
    staticClass: ["brand-cover"],
    attrs: {
      "resize": "contain",
      "src": _vm.brand_arr.img_url
    }
  })]), _c('div', {
    style: {
      marginLeft: 10 + 'px',
      flex: 1,
      justifyContent: 'center'
    }
  }, [_c('text', {
    staticClass: ["brand-name"]
  }, [_vm._v(_vm._s(_vm.brand_arr.name))]), _c('text', {
    staticClass: ["brand-message"]
  }, [_vm._v(_vm._s(_vm.brand_arr.sort_name))])]), _c('image', {
    staticClass: ["next"],
    attrs: {
      "src": "http://img.abmau.com/abmau/197260145f13acf70e06fe37ad4ba0c8.png"
    }
  })]) : _vm._e(), ((!_vm.banner_list || !_vm.banner_list.logo_img) || (_vm.material_arr && _vm.material_arr.length > 0)) ? _c('div', {
    staticClass: ["bg-grey"]
  }) : _vm._e()], 1), (_vm.material_arr && _vm.material_arr.length > 0) ? _c('cell', {
    ref: "goods_material",
    appendAsTree: true,
    attrs: {
      "append": "tree"
    },
    on: {
      "disappear": function($event) {
        _vm.hideMaterial()
      }
    }
  }, [_c('div', {
    staticClass: ["material-title"]
  }, [_c('text', {
    staticClass: ["material-title-text"],
    on: {
      "appear": function($event) {
        _vm.showMaterial()
      }
    }
  }, [_vm._v("用户口碑")]), _c('div', {
    staticClass: ["material-title-more"],
    on: {
      "click": function($event) {
        _vm.goMoreMaterial()
      }
    }
  }, [_c('text', {
    staticClass: ["material-title-more-text"]
  }, [_vm._v("更多")]), _c('image', {
    staticClass: ["next"],
    attrs: {
      "src": "http://img.abmau.com/abmau/197260145f13acf70e06fe37ad4ba0c8.png"
    }
  })])]), _c('line'), _vm._l((_vm.material_arr), function(item, index) {
    return _c('div', {
      key: index,
      ref: 'material' + index,
      refInFor: true
    }, [_c('material', {
      attrs: {
        "showRelated": false,
        "data": item,
        "isShowLine": false
      },
      on: {
        "collection": function($event) {
          _vm.jumpCollection($event, index)
        },
        "appendages": _vm.appendages
      }
    }), _c('line')], 1)
  }), _c('div', {
    style: {
      height: 20 + 'px'
    }
  })], 2) : _vm._e(), _c('cell', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [(_vm.banner_list && _vm.banner_list.logo_img) ? _c('image', {
    staticClass: ["promotion-banner"],
    attrs: {
      "src": _vm.banner_list.logo_img
    },
    on: {
      "click": function($event) {
        _vm.openPromotionBanner()
      }
    }
  }) : _vm._e(), (_vm.related_goods && _vm.related_goods.length > 0) ? _c('text', {
    staticClass: ["material-title-text"]
  }, [_vm._v("相关推荐")]) : _vm._e(), (_vm.related_goods && _vm.related_goods.length > 0) ? _c('scroller', {
    staticClass: ["recommend-goods-scroll"],
    attrs: {
      "scrollDirection": "horizontal"
    },
    on: {
      "scroll": _vm.onScrollRecommendGoods
    }
  }, [_c('div', {
    style: {
      width: '24px'
    }
  }), _vm._l((_vm.related_goods), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["recommend-goods-parent"],
      on: {
        "click": function($event) {
          _vm.clickRecommendGoods(item)
        }
      }
    }, [_c('image', {
      staticClass: ["recommend-goods-cover"],
      attrs: {
        "src": item.image_url
      }
    }), _c('div', {
      style: {
        height: '10px'
      }
    }), _c('text', {
      staticClass: ["recommend-goods-text"]
    }, [_vm._v(_vm._s(item.brand_name))]), _c('text', {
      staticClass: ["recommend-goods-text"]
    }, [_vm._v(_vm._s(item.name))]), _c('text', {
      staticClass: ["recommend-goods-price"]
    }, [_vm._v("¥ " + _vm._s(item.price))])])
  })], 2) : _vm._e()]), _c('cell', {
    ref: "goods_message",
    staticClass: ["content"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    },
    on: {
      "disappear": function($event) {
        _vm.hideMessage()
      }
    }
  }, [_c('div', {
    staticClass: ["content_info"],
    style: {
      alignItems: 'center'
    }
  }, [_c('text', {
    staticClass: ["content-title"]
  }, [_vm._v("商品信息")]), _c('div', {
    staticClass: ["content-title-line"],
    on: {
      "appear": function($event) {
        _vm.showMessage()
      }
    }
  }), _vm._l((_vm.spec), function(item, index) {
    return _c('text', {
      staticClass: ["goods-info"]
    }, [_vm._v(_vm._s(item.name) + "  " + _vm._s(item.value))])
  }), (_vm.spec && _vm.spec.length > 0) ? _c('line', {
    style: {
      marginTop: 30 + 'px'
    }
  }) : _vm._e()], 2), _c('div', [(_vm.showGoodsMessage) ? _c('abm-web', {
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
  }) : _vm._e(), _c('line', {
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
  }), (_vm.isIphoneX) ? _c('cell', {
    staticStyle: {
      height: "68px",
      backgroundColor: "white"
    },
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }) : _vm._e()]) : _vm._e(), (_vm.goods) ? _c('div', {
    staticClass: ["buttom"],
    style: {
      bottom: 0 + 'px'
    }
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
  }, [(_vm.time != 0 && _vm.goods.in_cart == 0) ? _c('text', {
    staticClass: ["goods-none"],
    style: {
      'background-color': '#000000'
    }
  }, [_vm._v("加入购物车")]) : _c('text', {
    staticClass: ["goods-none"],
    style: {
      'background-color': '#ac162c'
    }
  }, [_vm._v("即将开售")])]) : _vm._e()]) : _vm._e()]), (_vm.showTaxesRule) ? _c('rule-pop', {
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
  }) : _vm._e(), (_vm.showPromotionRule && _vm.promotionRules && _vm.promotionRules.length > 0) ? _c('rule-pop', {
    staticClass: ["pop"],
    attrs: {
      "title": "促销",
      "rules": _vm.promotionRules,
      "ruleIcon": "",
      "contentWidth": "620px"
    },
    on: {
      "close": _vm.closeMask
    }
  }, [_c('div', {
    staticClass: ["tag"],
    style: {
      height: '36px'
    }
  }, [_c('text', {
    staticClass: ["text_tag"],
    style: {
      lineHeight: '30px',
      height: '36px'
    }
  }, [_vm._v(_vm._s(_vm.promotionRules[0].label))])])]) : _vm._e(), (_vm.showAddCart) ? _c('pop', {
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
  }) : _vm._e(), _c('dialog', {
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
/* 51 */
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
/* 52 */
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
/* 53 */
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