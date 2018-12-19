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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(17)
)

/* script */
__vue_exports__ = __webpack_require__(18)

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
/* 1 */
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

var _api = __webpack_require__(40);

var _api2 = _interopRequireDefault(_api);

var _event = __webpack_require__(41);

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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _goodsDetails = __webpack_require__(3);

var _goodsDetails2 = _interopRequireDefault(_goodsDetails);

var _mixin = __webpack_require__(39);

var _mixin2 = _interopRequireDefault(_mixin);

var _utils = __webpack_require__(1);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.mixin(_mixin2.default);
_goodsDetails2.default.el = '#root';
new Vue(_goodsDetails2.default);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(4)
)

/* script */
__vue_exports__ = __webpack_require__(5)

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
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _titleBar = __webpack_require__(6);

var _titleBar2 = _interopRequireDefault(_titleBar);

var _line = __webpack_require__(10);

var _line2 = _interopRequireDefault(_line);

var _buyGoodsPop = __webpack_require__(14);

var _buyGoodsPop2 = _interopRequireDefault(_buyGoodsPop);

var _goodsRule = __webpack_require__(25);

var _goodsRule2 = _interopRequireDefault(_goodsRule);

var _gridSelect = __webpack_require__(0);

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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(7)
)

/* script */
__vue_exports__ = __webpack_require__(8)

/* template */
var __vue_template__ = __webpack_require__(9)
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
/* 7 */
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
/* 8 */
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
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(11)
)

/* script */
__vue_exports__ = __webpack_require__(12)

/* template */
var __vue_template__ = __webpack_require__(13)
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
/* 11 */
/***/ (function(module, exports) {

module.exports = {
  "line": {
    "width": "750",
    "height": "1.4",
    "backgroundColor": "#e2e2e2"
  }
}

/***/ }),
/* 12 */
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
/* 13 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["line"]
  })
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(15)
)

/* script */
__vue_exports__ = __webpack_require__(16)

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
/* 15 */
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _gridSelect = __webpack_require__(0);

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
/* 17 */
/***/ (function(module, exports) {

module.exports = {
  "grid-select": {
    "flexDirection": "row",
    "width": "750",
    "flexWrap": "wrap"
  }
}

/***/ }),
/* 18 */
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

var _option = __webpack_require__(19);

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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(20)
)

/* script */
__vue_exports__ = __webpack_require__(21)

/* template */
var __vue_template__ = __webpack_require__(22)
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
/* 20 */
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
/* 21 */
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
/* 22 */
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
/* 23 */
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
/* 24 */
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(26)
)

/* script */
__vue_exports__ = __webpack_require__(27)

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
/* 26 */
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _WxcMask = __webpack_require__(28);

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
var __vue_template__ = __webpack_require__(36)
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
/* 29 */
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcOverlay = __webpack_require__(31);

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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(32);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
/* 33 */
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
/* 34 */
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
/* 35 */
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
/* 36 */
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = __webpack_require__(1);

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
/* 40 */
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
/* 41 */
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