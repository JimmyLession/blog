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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(7);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(40)
)

/* script */
__vue_exports__ = __webpack_require__(41)

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
/* 2 */
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

var _api = __webpack_require__(53);

var _api2 = _interopRequireDefault(_api);

var _event = __webpack_require__(54);

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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _materialList = __webpack_require__(4);

var _materialList2 = _interopRequireDefault(_materialList);

var _mixin = __webpack_require__(52);

var _mixin2 = _interopRequireDefault(_mixin);

var _utils = __webpack_require__(2);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.mixin(_mixin2.default);
_materialList2.default.el = '#root';
new Vue(_materialList2.default);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(5)
)

/* script */
__vue_exports__ = __webpack_require__(6)

/* template */
var __vue_template__ = __webpack_require__(51)
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
__vue_options__.__file = "F:\\weex\\weex_develop\\abm_dev_weex\\abm-weexSource\\src\\pages\\material\\materialList.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-ed80b026"
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
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "backgroundColor": "#ffffff",
    "width": "750"
  },
  "parent": {
    "position": "absolute",
    "width": "750",
    "flexDirection": "column",
    "backgroundColor": "#ffffff",
    "left": 0,
    "right": 0
  },
  "search_bt": {
    "width": "690",
    "height": "70",
    "borderRadius": "10",
    "backgroundColor": "#f6f6f6",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "search-icon": {
    "width": "30",
    "height": "30",
    "marginLeft": "15"
  },
  "search-bar-input": {
    "height": "70",
    "fontSize": "28",
    "lineHeight": "70",
    "flex": 1,
    "marginLeft": "15",
    "color": "#666666"
  },
  "banner": {
    "width": "690",
    "height": "300",
    "marginLeft": "30",
    "marginRight": "30",
    "marginTop": "20",
    "marginBottom": "8"
  },
  "banner_image": {
    "width": "690",
    "height": "300"
  },
  "indicator": {
    "width": "690",
    "height": "40",
    "itemColor": "#666666",
    "itemSelectedColor": "#333333",
    "itemSize": "15",
    "position": "absolute",
    "bottom": "10",
    "right": "0"
  },
  "filter-text-div": {
    "paddingLeft": "20",
    "paddingRight": "30",
    "height": "90",
    "backgroundColor": "#ffffff",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "filter-text": {
    "fontSize": "28",
    "lineHeight": "36",
    "color": "#333333"
  },
  "filter-icon": {
    "width": "19",
    "height": "18",
    "marginLeft": "5"
  },
  "release": {
    "width": "180",
    "height": "70",
    "backgroundColor": "#CF1126",
    "borderRadius": "4",
    "position": "absolute",
    "right": "25",
    "alignItems": "center",
    "justifyContent": "center",
    "flexDirection": "row"
  },
  "release-text": {
    "color": "#FFFFFF",
    "fontSize": "32",
    "lineHeight": "70",
    "textAlign": "center"
  },
  "release-icon": {
    "width": "30",
    "height": "30",
    "marginRight": "20"
  },
  "float-tab": {
    "width": "180",
    "position": "absolute",
    "top": 0,
    "left": 0
  },
  "search_list": {
    "flexDirection": "column",
    "flex": 1,
    "width": "570",
    "justifyContent": "space-between"
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
  "pop-title": {
    "fontSize": "30",
    "lineHeight": "36",
    "color": "#333333"
  },
  "pop-hint-text": {
    "fontSize": "26",
    "lineHeight": "36",
    "color": "#666666"
  },
  "pop-reset": {
    "flex": 1,
    "textAlign": "center",
    "lineHeight": "90",
    "fontSize": "30",
    "color": "#333333",
    "backgroundColor": "#FFFFFF"
  },
  "pop-submit": {
    "flex": 1,
    "textAlign": "center",
    "lineHeight": "90",
    "fontSize": "30",
    "color": "#FFFFFF",
    "backgroundColor": "#CF1126"
  },
  "pop-cell": {
    "marginLeft": "38"
  },
  "pop-tag": {
    "flexWrap": "wrap",
    "flexDirection": "row"
  },
  "pop-item-default": {
    "marginTop": "25",
    "width": "170",
    "height": "50",
    "lineHeight": "50",
    "fontSize": "22",
    "marginRight": "24",
    "lines": 1,
    "borderRadius": "4",
    "borderWidth": "2",
    "textAlign": "center",
    "borderColor": "#F1F1F1",
    "textOverflow": "ellipsis",
    "backgroundColor": "#F1F1F1",
    "color": "#333333"
  },
  "pop-item-check": {
    "marginTop": "25",
    "width": "170",
    "height": "50",
    "lineHeight": "50",
    "fontSize": "22",
    "marginRight": "24",
    "lines": 1,
    "borderRadius": "4",
    "borderWidth": "2",
    "borderColor": "#CF1126",
    "textAlign": "center",
    "textOverflow": "ellipsis",
    "backgroundColor": "#FFFFFF",
    "color": "#CF1126"
  },
  "separate": {
    "width": "750",
    "height": "20",
    "backgroundColor": "#F6F6F6"
  },
  "guide-parent": {
    "opacity": 0,
    "width": "750"
  },
  "guide-content": {
    "width": "750",
    "alignItems": "center"
  },
  "guide-image-top": {
    "width": "750",
    "height": "190"
  },
  "guide-image-bottom": {
    "width": "750",
    "height": "230"
  },
  "guide-btn": {
    "width": "570",
    "height": "70",
    "borderWidth": "1.5",
    "borderColor": "#FFFFFF",
    "borderRadius": "4",
    "color": "#FFFFFF",
    "textAlign": "center",
    "fontSize": "32",
    "marginTop": "285",
    "lineHeight": "70"
  },
  "guide-hint": {
    "fontSize": "26",
    "lineHeight": "36",
    "color": "#FFFFFF",
    "marginTop": "25"
  },
  "more-pager-line": {
    "width": "2",
    "height": "30",
    "marginRight": "15",
    "backgroundColor": "#000000"
  },
  "hint_next_time": {
    "width": "750",
    "height": "90",
    "backgroundColor": "#F6F6F6",
    "fontSize": "28",
    "color": "#666666",
    "lineHeight": "90",
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcOverlay = __webpack_require__(0);

var _wxcOverlay2 = _interopRequireDefault(_wxcOverlay);

var _wxcPopup = __webpack_require__(11);

var _wxcPopup2 = _interopRequireDefault(_wxcPopup);

var _refresh = __webpack_require__(16);

var _refresh2 = _interopRequireDefault(_refresh);

var _line = __webpack_require__(20);

var _line2 = _interopRequireDefault(_line);

var _titleBar = __webpack_require__(24);

var _titleBar2 = _interopRequireDefault(_titleBar);

var _releaseList = __webpack_require__(28);

var _releaseList2 = _interopRequireDefault(_releaseList);

var _empty = __webpack_require__(36);

var _empty2 = _interopRequireDefault(_empty);

var _WxcMask = __webpack_require__(1);

var _WxcMask2 = _interopRequireDefault(_WxcMask);

var _dialog = __webpack_require__(43);

var _dialog2 = _interopRequireDefault(_dialog);

var _tabSwitch = __webpack_require__(47);

var _tabSwitch2 = _interopRequireDefault(_tabSwitch);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var loadingModule = weex.requireModule('loadingModule');
var storage = weex.requireModule("storage");
var animation = weex.requireModule('animation');
var event = new BroadcastChannel('createFavorite');
var eventAccount = new BroadcastChannel('account');
var utilModule = weex.requireModule('utilModule');
var collectNum = new BroadcastChannel('collectNum');
var height = 0;
var bottom = 0;
exports.default = {
    components: { title: _titleBar2.default, line: _line2.default, empty: _empty2.default, material: _releaseList2.default, WxcPopup: _wxcPopup2.default, WxcOverlay: _wxcOverlay2.default, refresher: _refresh2.default, WxcMask: _WxcMask2.default, dialog: _dialog2.default, tabSwitch: _tabSwitch2.default },
    data: function data() {
        return {
            from: 0,
            height: height,
            bottom: bottom,
            tag_slider: [],
            tags: [],
            releaseBottom: false,
            tagStr: [],
            loading: false,
            allLoadingFinish: false,
            size: 10,
            page: 1,
            tabTitles: [],
            top: [],
            isScroll: false,
            materialDatas: null,
            floatTabOpacity: 0,
            indexPage: 0,
            floatTop: -90,
            showReleaseUp: false,
            showReleaseDown: false,
            showGuide: false,
            startScreen: 0,
            screenY: 0,
            selectType: 1, //1-全部，2-最新发布，3-转发最多，4-官方
            showPop: false,
            brandId: '', //素材筛选品牌id
            brandName: '', //素材筛选品牌名字
            currentBrandId: '',
            currentBrandName: '',
            overallNames: [],
            currentOverallNames: [],
            recommendNames: [],
            currentRecommendNames: [],
            brandData: [],
            overallData: [],
            recommendData: [],
            collectionData: null,
            collectionIndex: -1,
            release_status: -1,
            token: '',
            next_start_time: '',
            tabStyles: {
                parentWidth: 630,
                bgColor: '#FFFFFF',
                titleColor: '#333333',
                activeTitleColor: '#CF1126',
                activeBgColor: '#FFFFFF',
                isActiveTitleBold: false,
                height: 90,
                width: 140,
                fontSize: 26,
                hasActiveBottom: true,
                activeBottomColor: '#CF1126',
                activeBottomHeight: 4,
                activeBottomWidth: 150,
                textPaddingLeft: 15,
                textPaddingRight: 15
            },
            showShareDialog: false, //显示转发对话框
            fileUrl: '', //附件地址
            currentMaterial: null,
            shareTitle: ''
        };
    },

    methods: {
        wxcMinibarRightButtonClicked: function wxcMinibarRightButtonClicked() {
            this.interceptPush('material/myPublish', {}, 'intercept');
        },
        loadingDown: function loadingDown() {
            this.page = 1;
            this.allLoadingFinish = false;
            this.$refs.list.resetLoadmore();
            this.getMaterialListData(false);
            this.getMaterialTag();
        },
        onLoading: function onLoading() {
            if (this.materialDatas.length == 0) return;
            if (this.allLoadingFinish && this.materialDatas.length < this.size) return;
            this.page++;
            this.getMaterialListData(false);
        },
        getMaterialTabList: function getMaterialTabList() {
            var _this = this;
            _this.Get(_this.api().material_tab_list, {}, function (res) {
                if (res.data.code == 0) {
                    if (_this.tabTitles.length <= 0 || !_this.tabTitles) {
                        _this.getMaterialListData(false);
                    }
                    _this.tabTitles = res.data.data;
                    _this.indexPage = 0;
                } else {
                    promptModule.showPrompt({ msg: res.data.msg, type: 'err' });
                }
            });
        },
        getMaterialListData: function getMaterialListData(showLoading) {
            var _this = this;
            var keyword = _this.brandName + ',';
            if (showLoading) {
                loadingModule.show({ msg: '' });
            }
            _this.overallNames.forEach(function (value, index, array) {
                if (index != _this.overallNames.length - 1) {
                    keyword += _this.overallData[value].tag_name + ',';
                } else {
                    keyword += _this.overallData[value].tag_name;
                }
            });
            if (keyword.length > 0 && _this.recommendNames.length > 0) {
                keyword += ',';
            }
            _this.recommendNames.forEach(function (value, index, array) {
                if (index != _this.recommendNames.length - 1) {
                    keyword += _this.recommendData[value].tag_name + ',';
                } else {
                    keyword += _this.recommendData[value].tag_name;
                }
            });
            _this.Get(_this.api().material_source, {
                type: '2',
                page: _this.page,
                size: _this.size,
                keywords: keyword,
                code: 'ABM',
                select_type: _this.selectType
            }, function (res) {
                if (showLoading) {
                    loadingModule.cancel(function (ret) {});
                }
                if (res.data.code == 0) {
                    _this.next_start_time = res.data.next_material;
                    if (_this.page == 1) {
                        _this.materialDatas = _this.resetData(res.data.data);
                    } else {
                        _this.materialDatas.push.apply(_this.materialDatas, _this.resetData(res.data.data));
                    }
                    if (res.data.data.length >= _this.size) {
                        _this.allLoadingFinish = false;
                    } else {
                        _this.allLoadingFinish = true;
                    }
                    _this.loading = true;
                } else {
                    promptModule.showPrompt({ msg: res.data.msg, type: 'err' });
                    if (_this.page == 1) {
                        _this.materialDatas = [];
                    }
                }
            });
        },
        resetData: function resetData(data) {
            var _this = this;
            data.map(function (item, i) {
                item.type = 'material';
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
        getFilterData: function getFilterData(showHint) {
            var _this = this;
            _this.Get(_this.api().material_filter, {
                code: 'ABM',
                brand_id: _this.currentBrandId
            }, function (res) {
                if (res.data.code == 0) {
                    _this.brandData = res.data.data.brand;
                    _this.overallData = res.data.data.all_tag;
                    _this.recommendData = res.data.data.recommend_tag;
                } else {
                    if (showHint) {
                        promptModule.showPrompt({ msg: res.data.msg, type: 'err' });
                    }
                }
            });
        },
        getMaterialTag: function getMaterialTag() {
            var _this = this;
            _this.Get(_this.api().material_new_tag, {
                type: '2'
            }, function (res) {
                if (res.data.code == 0) {
                    _this.tag_slider = res.data.data.top;
                    _this.tags = res.data.data.bottom;
                    var tagStr = [];
                    _this.tags.map(function (item, i) {
                        tagStr.push(item.name);
                    });
                    _this.tagStr = tagStr;
                }
            });
        },
        jumpToRelease: function jumpToRelease() {
            if (weex.config.env.platform.toLowerCase() === 'ios' && !this.compareVersion(weex.config.env.appVersion, '3.4.2')) {
                promptModule.showPrompt({ msg: "请到AppStore更新最新版本", type: 'prompt' });
                return;
            }
            this.jumpTo2('material/materialRelease', '', {});
        },
        showFloatingTab: function showFloatingTab(isShow) {
            this.floatTop = isShow ? this.height : -90;
            this.floatTabOpacity = isShow ? 1 : 0;
        },
        pageSelected: function pageSelected(e) {
            var _this = this;
            _this.indexPage = e.page;
            _this.selectType = _this.tabTitles[_this.indexPage].select_type;
            _this.page = 1;
            _this.materialDatas = [];
            _this.loading = false;
            _this.allLoadingFinish = false;
            _this.getMaterialListData(false);
        },
        didSelectTitle: function didSelectTitle(res) {
            var item = this.tags[res.index];
            this.jumpTo2('material/search', '', { brandId: item.id, keyword: item.name, title: item.name });
        },
        selectSlider: function selectSlider(res) {
            if (!res.brand_id || res.brand_id === 0) {
                this.jumpTo2('material/search', '', { keyword: res.name, title: res.name });
            } else {
                this.jumpTo2('material/search', '', { brandId: res.brand_id, brandName: res.brand_name, keyword: res.name, title: res.name });
            }
        },
        scrollstart: function scrollstart(event) {
            if (this.startScreen == 0) {
                this.startScreen = Math.abs(event.contentOffset.y);
            }
        },
        scroll: function scroll(event) {
            var screen = Math.abs(event.contentOffset.y);
            if (screen < this.screenY) {
                this.startScreen = this.screenY;
            }
            this.isScroll = true;
            this.screenY = screen;
            if (screen < 100 && this.floatTabOpacity === 1) {
                this.floatTop = -90;
                this.floatTabOpacity = 0;
            }
        },
        scrollend: function scrollend(event) {
            this.isScroll = false;
            var screen = Math.abs(event.contentOffset.y);
            if (this.startScreen - screen > 0) {
                this.openRelease();
            } else if (this.startScreen - screen < 0) {
                this.closeRelease();
            }
        },
        closeRelease: function closeRelease() {
            var _this = this;
            if (_this.showReleaseDown || _this.showReleaseUp) return;
            _this.showReleaseDown = true;
            var release = this.$refs['release'];
            animation.transition(release, {
                styles: {
                    transform: 'translate(0px, 130px)',
                    transformOrigin: 'center center'
                },
                duration: 300, //ms
                timingFunction: 'ease',
                delay: 0 //ms
            }, function () {
                _this.showReleaseDown = false;
            });
        },
        openRelease: function openRelease() {
            var _this = this;
            if (_this.showReleaseUp || _this.showReleaseDown) return;
            _this.showReleaseUp = true;
            var release = this.$refs['release'];
            animation.transition(release, {
                styles: {
                    transform: 'translate(0px, -10px)',
                    transformOrigin: 'center center'
                },
                duration: 300, //ms
                timingFunction: 'ease',
                delay: 0 //ms
            }, function () {
                _this.showReleaseUp = false;
            });
        },
        popupOverlayRightClick: function popupOverlayRightClick() {
            this.showPop = false;
            this.currentBrandId = this.brandId;
            this.getFilterData(false);
        },
        showFilterPop: function showFilterPop() {
            if (this.brandData.length < 0 && this.overallData.length < 0 && this.recommendData.length < 0) {
                this.getFilterData(true);
                return;
            }
            this.currentBrandId = this.brandId;
            this.currentBrandName = this.brandName;
            this.currentOverallNames = this.overallNames;
            this.currentRecommendNames = this.recommendNames;
            this.showPop = !this.showPop;
        },
        selectBrand: function selectBrand(item) {
            var isCurrent = this.currentBrandId == item.id;
            this.currentBrandId = isCurrent ? '' : item.id;
            this.currentBrandName = isCurrent ? '' : item.name;
            this.getFilterData(false);
            this.currentOverallNames = [];
            this.currentRecommendNames = [];
        },
        selectOverall: function selectOverall(item) {
            var index = this.currentOverallNames.indexOf(item);
            if (this.currentOverallNames.length > 0 && index != -1) {
                this.currentOverallNames.splice(index, 1);
            } else if (this.currentOverallNames.length < 5) {
                this.currentOverallNames.push(item);
            } else {
                promptModule.showPrompt({ msg: '最多只能选五个!', type: 'prompt' });
            }
        },
        selectRecommend: function selectRecommend(item) {
            var index = this.currentRecommendNames.indexOf(item);
            if (this.currentRecommendNames.length > 0 && index != -1) {
                this.currentRecommendNames.splice(index, 1);
            } else if (this.currentRecommendNames.length < 2) {
                this.currentRecommendNames.push(item);
            } else {
                promptModule.showPrompt({ msg: '最多只能选两个!', type: 'prompt' });
            }
        },
        resetFilterData: function resetFilterData() {
            this.currentBrandId = '';
            this.currentBrandName = '';
            this.currentOverallNames = [];
            this.currentRecommendNames = [];
            this.getFilterData(false);
        },
        submitFilterData: function submitFilterData() {
            this.$refs.wxcPopup.hide();
            this.page = 1;
            this.brandId = this.currentBrandId;
            this.brandName = this.currentBrandName;
            this.overallNames = this.currentOverallNames;
            this.recommendNames = this.currentRecommendNames;
            this.materialDatas = [];
            this.allLoadingFinish = false;
            this.loading = false;
            this.getMaterialListData(true);
        },
        jumpCollection: function jumpCollection(item, index) {
            this.collectionData = item;
            this.collectionIndex = index;
        },
        getReleaseDot: function getReleaseDot() {
            var _this = this;
            _this.Get(_this.api().material_littlered, {}, function (res) {
                if (res.data.code == 0) {
                    _this.release_status = res.data.data.release_status;
                }
            });
        },
        guideOverlayRightClick: function guideOverlayRightClick() {
            this.showGuide = false;
        },
        closeGuide: function closeGuide() {
            this.showGuide = false;
            // this.$refs.wxcPopupGuide.hide();
        },
        onSubmit: function onSubmit(event) {
            if (event.returnKeyType == 'search') {
                var value = event.value;
                if (value && value.length > 0) {
                    this.jumpTo2('material/search', '', { keyword: value, title: value });
                }
            }
        },


        //跳转发布协议
        clickAgreement: function clickAgreement() {
            this.jumpTo2("material/releaseAgreement", "", {});
        },
        clearData: function clearData() {
            this.page = 1;
            this.indexPage = 0;
            this.tabTitles = [];
            this.loading = false;
            this.brandId = '';
            this.brandName = '';
            this.overallNames = [];
            this.recommendNames = [];
            this.selectType = 1;
            this.resetFilterData();
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
        _this.from = _this.GetUrlPara(weex.config.bundleUrl, 'from');
        _this.getTopHeight(_this);
        if (_this.from && _this.from == 1) {
            _this.mainBarHeight(_this);
        } else {
            _this.isIpx(_this);
        }
        if (weex.config.env.platform.toLowerCase() === 'ios' && _this.from && _this.from == 1) {
            _this.releaseBottom = true;
        }
        _this.getMaterialTabList();
        _this.getMaterialTag();
        _this.getFilterData(false);
        _this.getReleaseDot();
        storage.getItem('material_guide', function (event) {
            if (event.result != "success") {
                _this.showGuide = true;
                storage.setItem('material_guide', _this.showGuide, function (event) {});
            }
        });
        if (weex.config.env.platform.toLowerCase() === 'android' && _this.compareVersion(weex.config.env.appVersion, '3.4.0')) {
            utilModule.eventListener(function () {});
            var globalEvent = weex.requireModule('globalEvent');
            globalEvent.addEventListener("geolocation", function (e) {
                if (_this.showPop) {
                    _this.$refs.wxcPopup.hide();
                } else {
                    _this.popBar();
                }
            });
        }
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
                _this.materialDatas.splice(_this.collectionIndex, 1, _this.collectionData);
            }
        };
        event.onmessage = function (event) {
            if (!event.data) {
                return;
            }
            if (event.data == _this.eventBusTag().RED_DOT) {
                _this.release_status = 0;
                return;
            }
        };
        eventAccount.onmessage = function (event) {
            if (!event.data) {
                return;
            }
            switch (event.data) {
                case _this.eventBusTag().REFRESH_HOME:
                    _this.clearData();
                    _this.getMaterialTabList();
                    _this.getMaterialTag();
                    _this.getReleaseDot();
                    break;
            }
        };
    },

    destroyed: function destroyed() {
        event.close();
        collectNum.close();
    }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(8)
)

/* script */
__vue_exports__ = __webpack_require__(9)

/* template */
var __vue_template__ = __webpack_require__(10)
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
/* 8 */
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
/* 9 */
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
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(12);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(13)
)

/* script */
__vue_exports__ = __webpack_require__(14)

/* template */
var __vue_template__ = __webpack_require__(15)
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
__vue_options__.__file = "F:\\weex\\weex_develop\\abm_dev_weex\\abm-weexSource\\node_modules\\weex-ui\\packages\\wxc-popup\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-a0885ece"
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
/* 13 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-popup": {
    "position": "fixed",
    "width": "750"
  },
  "top": {
    "left": 0,
    "right": 0
  },
  "bottom": {
    "left": 0,
    "right": 0
  },
  "left": {
    "bottom": 0,
    "top": 0
  },
  "right": {
    "bottom": 0,
    "top": 0
  }
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _wxcOverlay = __webpack_require__(0);

var _wxcOverlay2 = _interopRequireDefault(_wxcOverlay);

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

var animation = weex.requireModule('animation');
var platform = weex.config.env.platform;

var isWeb = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && platform.toLowerCase() === 'web';
exports.default = {
  components: { WxcOverlay: _wxcOverlay2.default },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    pos: {
      type: String,
      default: 'bottom'
    },
    popupColor: {
      type: String,
      default: '#FFFFFF'
    },
    overlayCfg: {
      type: Object,
      default: function _default() {
        return {
          hasAnimation: true,
          timingFunction: ['ease-in', 'ease-out'],
          duration: 300,
          opacity: 0.6
        };
      }
    },
    height: {
      type: [Number, String],
      default: 840
    },
    standOut: {
      type: [Number, String],
      default: 0
    },
    width: {
      type: [Number, String],
      default: 750
    },
    animation: {
      type: Object,
      default: function _default() {
        return {
          timingFunction: 'ease-in'
        };
      }
    }
  },
  data: function data() {
    return {
      haveOverlay: true,
      isOverShow: true
    };
  },
  computed: {
    isNeedShow: function isNeedShow() {
      var _this = this;

      setTimeout(function () {
        _this.appearPopup(_this.show);
      }, 50);
      return this.show;
    },
    _height: function _height() {
      this.appearPopup(this.show, 150);
      return this.height;
    },
    padStyle: function padStyle() {
      var pos = this.pos,
          width = this.width,
          height = this.height,
          popupColor = this.popupColor;

      var style = {
        width: width + 'px',
        backgroundColor: popupColor
      };
      pos === 'top' && (style = _extends({}, style, {
        top: -height + 'px',
        height: height + 'px'
      }));
      pos === 'bottom' && (style = _extends({}, style, {
        bottom: -height + 'px',
        height: height + 'px'
      }));
      pos === 'left' && (style = _extends({}, style, {
        left: -width + 'px'
      }));
      pos === 'right' && (style = _extends({}, style, {
        right: -width + 'px'
      }));
      return style;
    }
  },
  methods: {
    handleTouchEnd: function handleTouchEnd(e) {
      // 在支付宝上面有点击穿透问题
      var platform = weex.config.env.platform;

      platform === 'Web' && e.preventDefault && e.preventDefault();
    },
    hide: function hide() {
      this.appearPopup(false);
      this.$refs.overlay.appearOverlay(false);
    },
    wxcOverlayBodyClicking: function wxcOverlayBodyClicking() {
      this.isShow && this.appearPopup(false);
    },
    appearPopup: function appearPopup(bool) {
      var _this2 = this;

      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

      this.isShow = bool;
      var popupEl = this.$refs['wxc-popup'];
      if (!popupEl) {
        return;
      }
      animation.transition(popupEl, _extends({
        styles: {
          transform: this.getTransform(this.pos, this.width, this.height, !bool)
        },
        duration: duration,
        delay: 0
      }, this.animation), function () {
        if (!bool) {
          _this2.$emit('wxcPopupOverlayClicked', { pos: _this2.pos });
        }
      });
    },
    getTransform: function getTransform(pos, width, height, bool) {
      var _size = pos === 'top' || pos === 'bottom' ? height : width;
      var _transform = void 0;
      if (isWeb) {
        _size -= this.standOut;
      }
      bool && (_size = 0);
      switch (pos) {
        case 'top':
          _transform = 'translateY(' + _size + 'px)';
          break;
        case 'bottom':
          _transform = 'translateY(-' + _size + 'px)';
          break;
        case 'left':
          _transform = 'translateX(' + _size + 'px)';
          break;
        case 'right':
          _transform = 'translateX(-' + _size + 'px)';
          break;
      }
      return _transform;
    }
  }
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    on: {
      "touchend": _vm.handleTouchEnd
    }
  }, [(_vm.show) ? _c('wxc-overlay', _vm._b({
    ref: "overlay",
    attrs: {
      "show": _vm.haveOverlay && _vm.isOverShow
    },
    on: {
      "wxcOverlayBodyClicking": _vm.wxcOverlayBodyClicking
    }
  }, 'wxc-overlay', _vm.overlayCfg, false)) : _vm._e()], 1), (_vm.show) ? _c('div', {
    ref: "wxc-popup",
    class: ['wxc-popup', _vm.pos],
    style: _vm.padStyle,
    attrs: {
      "height": _vm._height,
      "hack": _vm.isNeedShow
    },
    on: {
      "click": function () {}
    }
  }, [_vm._t("default")], 2) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 16 */
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
/* 17 */
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
/* 18 */
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
/* 19 */
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
/* 21 */
/***/ (function(module, exports) {

module.exports = {
  "line": {
    "width": "750",
    "height": "1.4",
    "backgroundColor": "#e2e2e2"
  }
}

/***/ }),
/* 22 */
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
/* 23 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["line"]
  })
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(25)
)

/* script */
__vue_exports__ = __webpack_require__(26)

/* template */
var __vue_template__ = __webpack_require__(27)
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
/* 25 */
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
/* 26 */
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
/* 27 */
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
var __vue_template__ = __webpack_require__(35)
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
/* 29 */
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pictureGrid = __webpack_require__(31);

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
var __vue_template__ = __webpack_require__(34)
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
/* 32 */
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
/* 33 */
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
/* 34 */
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
/* 35 */
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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(37)
)

/* script */
__vue_exports__ = __webpack_require__(38)

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
/* 37 */
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
/* 38 */
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
/* 39 */
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
/* 40 */
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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcOverlay = __webpack_require__(0);

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
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(44)
)

/* script */
__vue_exports__ = __webpack_require__(45)

/* template */
var __vue_template__ = __webpack_require__(46)
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
/* 44 */
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _WxcMask = __webpack_require__(1);

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
/* 46 */
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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(48)
)

/* script */
__vue_exports__ = __webpack_require__(49)

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
__vue_options__.__file = "F:\\weex\\weex_develop\\abm_dev_weex\\abm-weexSource\\src\\components\\tabSwitch.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-65a120e8"
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
/* 48 */
/***/ (function(module, exports) {

module.exports = {
  "new": {
    "width": "14",
    "height": "14",
    "position": "absolute",
    "top": "18",
    "backgroundColor": "#CF1126",
    "borderRadius": 50
  },
  "tab-parent": {
    "borderBottomWidth": "1.4",
    "borderBottomColor": "#e1e1e1",
    "borderBottomStyle": "solid"
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
  "tab-title-list": {
    "flexDirection": "row"
  },
  "tab-text": {
    "lines": 1,
    "textOverflow": "ellipsis"
  }
}

/***/ }),
/* 49 */
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

var dom = weex.requireModule('dom');
var animation = weex.requireModule('animation');
exports.default = {
    components: {},
    props: {
        currentPage: {
            type: Number,
            default: 0
        },
        tabTitles: [],
        tabStyles: {
            type: Object,
            default: {
                parentWidth: 750,
                bgColor: '#FFFFFF',
                titleColor: '#333333',
                activeTitleColor: '#CF1126',
                activeBgColor: '#FFFFFF',
                isActiveTitleBold: false,
                iconWidth: 0,
                iconHeight: 0,
                width: 150,
                height: 90,
                fontSize: 28,
                hasActiveBottom: true,
                activeBottomColor: '#CF1126',
                activeBottomHeight: 4,
                activeBottomWidth: 120,
                textPaddingLeft: 10,
                textPaddingRight: 10
            }
        }
    },
    data: function data() {
        return {
            tabArray: [],
            currentPage: 0,
            isMoving: false,
            titleMaxLength: 0
        };
    },

    watch: {
        currentPage: function currentPage(newCurrentPage, oldCurrentPage) {
            if (newCurrentPage != oldCurrentPage) {
                var animated = true;
                if (this.isMoving === true) {
                    return;
                }
                this.isMoving = true;
                var previousPage = oldCurrentPage;
                var currentTabEl = this.$refs['tab-title-' + newCurrentPage][0];
                var width = this.tabStyles.width;

                var parentWidth = this.tabStyles.parentWidth;
                var appearNum = parseInt(parentWidth / width);
                var tabsNum = this.tabTitles.length;
                var offset = newCurrentPage > appearNum ? -(parentWidth - width) / 2 : -width * 2;

                if (appearNum < tabsNum) {
                    (previousPage > appearNum || newCurrentPage > 1) && dom.scrollToElement(currentTabEl, {
                        offset: offset, animated: animated
                    });

                    newCurrentPage <= 1 && previousPage > newCurrentPage && dom.scrollToElement(currentTabEl, {
                        offset: -width * newCurrentPage,
                        animated: animated
                    });
                }
                this.isMoving = false;
            }
        }
    },
    mounted: function mounted() {},

    methods: {
        setPage: function setPage(page) {
            var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            if (this.isMoving === true) {
                return;
            }
            this.isMoving = true;
            var previousPage = this.currentPage;
            var currentTabEl = this.$refs['tab-title-' + page][0];
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
            //this._animateTransformX(page, animated);
            this.$emit('clickTab', { page: page });
            if (this.tabArray.is_read) {
                this.tabArray[page].is_read = 0;
            }
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
    },

    created: function created() {}
};

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.tabTitles.length > 0) ? _c('div', {
    staticClass: ["tab-parent"],
    style: {
      backgroundColor: _vm.tabStyles.bgColor,
      height: (_vm.tabStyles.height + 1) + 'px',
      width: (_vm.tabStyles.parentWidth) + 'px'
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
      "scrollDirection": "horizontal"
    }
  }, _vm._l((_vm.tabTitles), function(v, index) {
    return _c('div', {
      key: index,
      ref: 'tab-title-' + index,
      refInFor: true,
      staticClass: ["title-item"],
      style: {
        width: _vm.tabStyles.width + 'px',
        height: _vm.tabStyles.height + 'px',
        backgroundColor: _vm.currentPage === index ? _vm.tabStyles.activeBgColor : _vm.tabStyles.bgColor
      },
      attrs: {
        "accessible": true
      },
      on: {
        "click": function($event) {
          _vm.setPage(index)
        }
      }
    }, [_c('text', {
      staticClass: ["tab-text"],
      style: {
        fontSize: _vm.tabStyles.fontSize + 'px',
        fontWeight: (_vm.currentPage === index && _vm.tabStyles.isActiveTitleBold) ? 'bold' : 'normal',
        color: _vm.currentPage === index ? _vm.tabStyles.activeTitleColor : _vm.tabStyles.titleColor,
        paddingLeft: _vm.tabStyles.textPaddingLeft + 'px',
        paddingRight: _vm.tabStyles.textPaddingRight + 'px'
      }
    }, [_vm._v(_vm._s(v.title))]), (_vm.tabTitles.is_read && _vm.tabTitles.is_read == 1) ? _c('text', {
      staticClass: ["new"],
      style: {
        right: v.title.length >= 4 ? 6 : 28 + 'px'
      }
    }) : _vm._e(), _c('div', {
      staticClass: ["border-bottom"],
      style: {
        width: _vm.tabStyles.activeBottomWidth + 'px',
        left: (_vm.tabStyles.width - _vm.tabStyles.activeBottomWidth) / 2 + 'px',
        height: _vm.tabStyles.activeBottomHeight + 'px',
        backgroundColor: _vm.currentPage === index ? _vm.tabStyles.activeBottomColor : 'transparent'
      }
    })])
  }))]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('title', {
    attrs: {
      "title": "发现",
      "hintLeft": _vm.from != 1,
      "isFinish": _vm.from != 1,
      "rightText": "我的发布",
      "redShow": _vm.release_status == 1
    },
    on: {
      "wxcMinibarRightButtonClicked": _vm.wxcMinibarRightButtonClicked
    }
  }), (_vm.materialDatas) ? _c('list', {
    ref: "list",
    staticClass: ["parent"],
    style: {
      top: _vm.height + 'px',
      bottom: _vm.bottom + 'px'
    },
    attrs: {
      "loadmoreoffset": "50"
    },
    on: {
      "scroll": _vm.scroll,
      "scrollstart": _vm.scrollstart,
      "scrollend": _vm.scrollend,
      "loadmore": _vm.onLoading
    }
  }, [_c('refresher', {
    on: {
      "loadingDown": _vm.loadingDown
    }
  }), _c('cell', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    },
    on: {
      "appear": function($event) {
        _vm.showFloatingTab(false)
      },
      "disappear": function($event) {
        _vm.showFloatingTab(true)
      }
    }
  }, [_c('div', {
    style: {
      alignItems: 'center',
      marginTop: 20 + 'px'
    }
  }, [_c('div', {
    staticClass: ["search_bt"]
  }, [_c('image', {
    staticClass: ["search-icon"],
    attrs: {
      "src": "assets://icon_default_search"
    }
  }), _c('input', {
    staticClass: ["search-bar-input"],
    attrs: {
      "placeholder": "搜索关键词",
      "returnKeyType": "search"
    },
    on: {
      "return": _vm.onSubmit
    }
  })])]), (_vm.tag_slider && _vm.tag_slider.length > 0) ? _c('div', {
    ref: "content"
  }, [(_vm.tag_slider.length > 0) ? _c('slider', {
    staticClass: ["banner"],
    attrs: {
      "autoPlay": "true",
      "interval": "4000",
      "infinite": "true"
    }
  }, [_vm._l((_vm.tag_slider), function(item, index) {
    return _c('div', {
      key: index,
      on: {
        "click": function($event) {
          _vm.selectSlider(item)
        }
      }
    }, [_c('image', {
      staticClass: ["banner_image"],
      attrs: {
        "src": item.img_url
      }
    })])
  }), (_vm.tag_slider.length > 1) ? _c('indicator', {
    staticClass: ["indicator"]
  }) : _vm._e()], 2) : _vm._e()]) : _vm._e()]), (_vm.tabTitles && _vm.tabTitles.length > 0) ? _c('header', {
    ref: "item1",
    staticStyle: {
      height: "90px",
      backgroundColor: "#fff",
      flexDirection: "row"
    },
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('tab-switch', {
    attrs: {
      "tabTitles": _vm.tabTitles,
      "tabStyles": _vm.tabStyles,
      "item": _vm.item,
      "currentPage": _vm.indexPage
    },
    on: {
      "clickTab": _vm.pageSelected
    }
  }), _c('div', {
    staticClass: ["filter-text-div"]
  }, [_c('text', {
    staticClass: ["filter-text"],
    on: {
      "click": function($event) {
        _vm.showFilterPop()
      }
    }
  }, [_vm._v("筛选")]), _c('image', {
    staticClass: ["filter-icon"],
    attrs: {
      "src": "http://img.abmau.com/abmau/79e84c70453d8e96a3aecf93c1b7c085.png"
    }
  })])], 1) : _vm._e(), (!_vm.next_start_time) ? _c('cell', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('div', {
    staticClass: ["separate"]
  })]) : _vm._e(), _c('cell', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [(_vm.indexPage == 1 && _vm.next_start_time) ? _c('text', {
    staticClass: ["hint_next_time"]
  }, [_vm._v(_vm._s(_vm.next_start_time))]) : _vm._e(), (_vm.indexPage == 1 && _vm.next_start_time && _vm.materialDatas.length <= 0 && _vm.allLoadingFinish) ? _c('empty') : _vm._e()], 1), _vm._l((_vm.materialDatas), function(item, index) {
    return (_vm.materialDatas.length > 0) ? _c('cell', {
      key: index,
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('material', {
      attrs: {
        "data": item,
        "isScroll": _vm.isScroll
      },
      on: {
        "collection": function($event) {
          _vm.jumpCollection($event, index)
        },
        "appendages": _vm.appendages
      }
    }), (index >= (_vm.materialDatas.length - 1) && _vm.loading) ? _c('div', {
      staticClass: ["more-list"]
    }, [(!_vm.allLoadingFinish) ? _c('text', {
      staticClass: ["loading-over-txt"]
    }, [_vm._v("加载中...")]) : _vm._e(), (_vm.allLoadingFinish) ? _c('text', {
      staticClass: ["loading-over-txt"]
    }, [_vm._v("已经全部加载完毕")]) : _vm._e()]) : _vm._e()], 1) : _vm._e()
  }), (_vm.materialDatas.length <= 0 && _vm.allLoadingFinish && (_vm.indexPage != 1 || !_vm.next_start_time)) ? _c('cell', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('empty')], 1) : _vm._e()], 2) : _vm._e(), (_vm.materialDatas && _vm.materialDatas.length > 0) ? _c('div', {
    ref: "release",
    staticClass: ["release"],
    style: {
      bottom: _vm.releaseBottom ? (_vm.bottom + 50) : 50 + 'px'
    },
    on: {
      "click": _vm.jumpToRelease
    }
  }, [_c('image', {
    staticClass: ["release-icon"],
    attrs: {
      "src": "assets://icon_material_release"
    }
  }), _c('text', {
    staticClass: ["release-text"]
  }, [_vm._v("发布")])]) : _vm._e(), _c('wxc-popup', {
    ref: "wxcPopup",
    attrs: {
      "popupColor": "#ffffff",
      "show": _vm.showPop,
      "pos": "right",
      "width": "630"
    },
    on: {
      "wxcPopupOverlayClicked": _vm.popupOverlayRightClick
    }
  }, [_c('list', {
    staticClass: ["pop-cell"]
  }, [_c('cell', {
    style: {
      height: 20 + 'px'
    },
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }), (_vm.brandData && _vm.brandData.length > 0) ? _c('cell', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('div', {
    style: {
      flexDirection: 'row',
      marginTop: 60 + 'px'
    }
  }, [_c('text', {
    staticClass: ["pop-title"]
  }, [_vm._v("品牌")]), _c('text', {
    staticClass: ["pop-hint-text"]
  }, [_vm._v(" (单选)")])]), _c('div', {
    staticClass: ["pop-tag"]
  }, _vm._l((_vm.brandData), function(item, index) {
    return _c('text', {
      key: index,
      class: [_vm.currentBrandId == item.id ? 'pop-item-check' : 'pop-item-default'],
      on: {
        "click": function($event) {
          _vm.selectBrand(item)
        }
      }
    }, [_vm._v(_vm._s(item.name))])
  }))]) : _vm._e(), (_vm.overallData && _vm.overallData.length > 0) ? _c('cell', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('div', {
    style: {
      flexDirection: 'row',
      marginTop: 60 + 'px'
    }
  }, [_c('text', {
    staticClass: ["pop-title"]
  }, [_vm._v("综合")]), _c('text', {
    staticClass: ["pop-hint-text"]
  }, [_vm._v(" (最多选五个)")])]), _c('div', {
    staticClass: ["pop-tag"]
  }, _vm._l((_vm.overallData), function(item, index) {
    return _c('text', {
      key: index,
      class: [(_vm.currentOverallNames.length > 0 && _vm.currentOverallNames.indexOf(index) != -1) ? 'pop-item-check' : 'pop-item-default'],
      on: {
        "click": function($event) {
          _vm.selectOverall(index)
        }
      }
    }, [_vm._v(_vm._s(item.tag_name))])
  }))]) : _vm._e(), (_vm.recommendData && _vm.recommendData.length > 0) ? _c('cell', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('div', {
    style: {
      flexDirection: 'row',
      marginTop: 60 + 'px'
    }
  }, [_c('text', {
    staticClass: ["pop-title"]
  }, [_vm._v("推荐标签")]), _c('text', {
    staticClass: ["pop-hint-text"]
  }, [_vm._v(" (最多选两个)")])]), _c('div', {
    staticClass: ["pop-tag"]
  }, _vm._l((_vm.recommendData), function(item, index) {
    return _c('text', {
      key: index,
      class: [(_vm.currentRecommendNames.length > 0 && _vm.currentRecommendNames.indexOf(index) != -1) ? 'pop-item-check' : 'pop-item-default'],
      on: {
        "click": function($event) {
          _vm.selectRecommend(index)
        }
      }
    }, [_vm._v(_vm._s(item.tag_name))])
  }))]) : _vm._e(), _c('cell', {
    style: {
      height: 25 + 'px'
    },
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  })]), _c('line'), _c('div', {
    style: {
      width: 630 + 'px',
      height: 90 + 'px',
      flexDirection: 'row'
    }
  }, [_c('text', {
    staticClass: ["pop-reset"],
    on: {
      "click": function($event) {
        _vm.resetFilterData()
      }
    }
  }, [_vm._v("重置")]), _c('text', {
    staticClass: ["pop-submit"],
    on: {
      "click": function($event) {
        _vm.submitFilterData()
      }
    }
  }, [_vm._v("确定")])]), (_vm.releaseBottom) ? _c('div', {
    style: {
      width: 630 + 'px',
      height: _vm.bottom + 'px'
    }
  }) : _vm._e()], 1), _c('wxc-mask', {
    ref: "wxcPopupGuide",
    attrs: {
      "borderRadius": "0",
      "duration": "200",
      "overlayCfg": {
        opacity: 0.85
      },
      "hasAnimation": true,
      "hasOverlay": true,
      "overlayCanClose": false,
      "showClose": false,
      "show": _vm.showGuide
    }
  }, [_c('div', {
    staticClass: ["guide-content"]
  }, [_c('image', {
    staticClass: ["guide-image-top"],
    style: {
      marginTop: (_vm.height - 75) + 'px'
    },
    attrs: {
      "src": "assets://material_guide_top"
    }
  }), _c('image', {
    staticClass: ["guide-image-bottom"],
    style: {
      marginTop: (_vm.tag_slider && _vm.tag_slider.length > 0 ? 280 : -40) + 'px'
    },
    attrs: {
      "src": "assets://material_guide_bottom"
    }
  }), _c('text', {
    staticClass: ["guide-btn"],
    on: {
      "click": _vm.closeGuide
    }
  }, [_vm._v("知道了")]), _c('text', {
    staticClass: ["guide-hint"],
    on: {
      "click": function($event) {
        _vm.clickAgreement()
      }
    }
  }, [_vm._v("查看《发布协议》")])])]), _c('dialog', {
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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = __webpack_require__(2);

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
/* 53 */
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
/* 54 */
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