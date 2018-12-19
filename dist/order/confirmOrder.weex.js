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

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(10);

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

var _api = __webpack_require__(37);

var _api2 = _interopRequireDefault(_api);

var _event = __webpack_require__(38);

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


var _confirmOrder = __webpack_require__(3);

var _confirmOrder2 = _interopRequireDefault(_confirmOrder);

var _mixin = __webpack_require__(36);

var _mixin2 = _interopRequireDefault(_mixin);

var _utils = __webpack_require__(1);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.mixin(_mixin2.default);
_confirmOrder2.default.el = '#root';
new Vue(_confirmOrder2.default);

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
__vue_options__.__file = "F:\\weex\\weex_develop\\abm_dev_weex\\abm-weexSource\\src\\pages\\order\\confirmOrder.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-c4a5554e"
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
  "parent": {
    "position": "absolute",
    "left": 0,
    "right": 0
  },
  "coupon_pop_content": {
    "width": "750",
    "height": "700",
    "backgroundColor": "#ffffff"
  },
  "pop_content": {
    "width": "750",
    "backgroundColor": "#ffffff"
  },
  "coupon_confirm": {
    "fontSize": "26",
    "color": "#FFFFFF",
    "width": "200",
    "height": "60",
    "borderRadius": "15",
    "backgroundColor": "#CF1126",
    "lineHeight": "60",
    "textAlign": "center"
  },
  "coupon_cancel": {
    "fontSize": "26",
    "color": "#FFFFFF",
    "width": "200",
    "height": "60",
    "borderRadius": "15",
    "marginRight": "100",
    "backgroundColor": "#666666",
    "lineHeight": "60",
    "textAlign": "center"
  },
  "coupon_bottom": {
    "width": "750",
    "height": "110",
    "backgroundColor": "#ffffff",
    "flexDirection": "row",
    "borderTop": "solid",
    "borderTopColor": "#e2e2e2",
    "borderTopWidth": "1.4",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "coupon_pop_title": {
    "width": "750",
    "height": "80",
    "lineHeight": "80",
    "textAlign": "center",
    "fontSize": "30",
    "color": "#333333"
  },
  "agreement": {
    "width": "750",
    "backgroundColor": "#ffffff",
    "flexDirection": "row",
    "justifyContent": "flex-start",
    "alignItems": "center"
  },
  "address_edit": {
    "width": "32",
    "height": "30",
    "marginTop": "15"
  },
  "saveAddress": {
    "width": "100",
    "height": "140",
    "lineHeight": "140",
    "textAlign": "center",
    "fontSize": "28",
    "backgroundColor": "#CF1126",
    "color": "#ffffff"
  },
  "bottom_total_price": {
    "lineHeight": "110",
    "textAlign": "center",
    "fontSize": "28",
    "color": "#CF1126",
    "paddingRight": "40"
  },
  "agreement_image": {
    "width": "26",
    "height": "26",
    "marginTop": "20",
    "marginBottom": "60",
    "marginLeft": "36"
  },
  "agreement_text": {
    "fontSize": "26",
    "color": "#666666",
    "marginTop": "20",
    "marginBottom": "60",
    "paddingLeft": "20"
  },
  "bottom_submit": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "submit": {
    "backgroundColor": "#CF1126",
    "width": "235",
    "lineHeight": "110",
    "textAlign": "center",
    "fontSize": "30",
    "color": "#ffffff"
  },
  "order_bottom": {
    "position": "absolute",
    "bottom": 0,
    "width": "750",
    "height": "110",
    "borderTop": "solid",
    "borderTopColor": "#e2e2e2",
    "borderTopWidth": "1.4",
    "backgroundColor": "#ffffff",
    "paddingLeft": "30",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "order_bottom_price": {
    "flex": 1,
    "flexDirection": "column",
    "justifyContent": "flex-start"
  },
  "total_price": {
    "fontSize": "26",
    "color": "#CF1126"
  },
  "item_price": {
    "fontSize": "26",
    "flex": 1,
    "color": "#666666"
  },
  "bottom_price": {
    "fontSize": "26",
    "color": "#666666"
  },
  "bottom_price_fee": {
    "fontSize": "26",
    "paddingTop": "10",
    "color": "#666666"
  },
  "item_price_fee": {
    "fontSize": "26",
    "flex": 1,
    "color": "#666666"
  },
  "order_item_price": {
    "width": "750",
    "height": "120",
    "backgroundColor": "#ffffff",
    "paddingLeft": "30",
    "paddingRight": "40",
    "flexDirection": "column",
    "justifyContent": "center"
  },
  "order_item": {
    "flexDirection": "row",
    "paddingBottom": "10",
    "justifyContent": "flex-start"
  },
  "order_price_content": {
    "width": "750",
    "height": "90",
    "backgroundColor": "#ffffff",
    "paddingLeft": "30",
    "paddingRight": "30",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "price_title": {
    "fontSize": "26",
    "color": "#333333",
    "lineHeight": "90",
    "textAlign": "center"
  },
  "order_depot": {
    "width": "750",
    "height": "90",
    "backgroundColor": "#ffffff",
    "justifyContent": "flex-start",
    "paddingLeft": "34"
  },
  "depot_text": {
    "lineHeight": "90",
    "textAlign": "left",
    "paddingLeft": "30",
    "fontSize": "26",
    "color": "#333333"
  },
  "coupon_content": {
    "width": "750",
    "height": "110",
    "backgroundColor": "#ffffff",
    "paddingLeft": "30",
    "paddingRight": "30",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "coupon_title": {
    "fontSize": "28",
    "color": "#333333",
    "lineHeight": "110",
    "flex": 1
  },
  "coupon_des": {
    "fontSize": "24",
    "color": "#666666",
    "lineHeight": "110",
    "textAlign": "center",
    "paddingRight": "12"
  },
  "address_idCard_name_top": {
    "height": "60",
    "fontSize": "26",
    "color": "#333333",
    "placeholderColor": "#999999",
    "singleline": "true",
    "paddingLeft": "50",
    "flex": 1
  },
  "address_idCard_name_bot": {
    "height": "60",
    "fontSize": "26",
    "color": "#333333",
    "placeholderColor": "#999999",
    "singleline": "true",
    "paddingLeft": "50",
    "flex": 1
  },
  "hint": {
    "width": "750",
    "paddingTop": "15",
    "paddingBottom": "15",
    "justifyContent": "flex-start",
    "flexDirection": "row",
    "alignItems": "center",
    "paddingLeft": "45",
    "backgroundColor": "#e2707d"
  },
  "hint_image": {
    "width": "30",
    "height": "35"
  },
  "line": {
    "width": "750",
    "height": "20",
    "backgroundColor": "#f6f6f6"
  },
  "hint_text": {
    "width": "675",
    "paddingLeft": "20",
    "fontSize": "26",
    "textAlign": "left",
    "lineHeight": "34",
    "paddingRight": "30",
    "lines": 2,
    "color": "#ffffff"
  },
  "add_address": {
    "width": "750",
    "height": "100",
    "backgroundColor": "#ffffff",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "paddingLeft": "30",
    "paddingRight": "30",
    "alignItems": "center"
  },
  "edit_address_item": {
    "width": "750",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "height": "140"
  },
  "address_idCard_info": {
    "flex": 1,
    "height": "140",
    "paddingLeft": "30",
    "paddingRight": "30",
    "backgroundColor": "#ffffff",
    "flexDirection": "column",
    "justifyContent": "center"
  },
  "address_image": {
    "width": "750",
    "height": "4"
  },
  "address_info": {
    "width": "750",
    "height": "140",
    "paddingLeft": "30",
    "paddingRight": "30",
    "backgroundColor": "#ffffff",
    "flexDirection": "row",
    "justifyContent": "flex-start",
    "alignItems": "center"
  },
  "horizontal_address_top": {
    "height": "60",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignContent": "center"
  },
  "horizontal_address_bot": {
    "flexDirection": "row",
    "height": "60",
    "justifyContent": "flex-start",
    "alignContent": "flex-start"
  },
  "address_idCard_title_top": {
    "height": "60",
    "fontSize": "24",
    "color": "#666666",
    "lineHeight": "60"
  },
  "address_idCard_title_bot": {
    "height": "60",
    "fontSize": "24",
    "color": "#666666",
    "lineHeight": "60"
  },
  "address_title": {
    "fontSize": "24",
    "color": "#666666",
    "lineHeight": "140",
    "textAlign": "center"
  },
  "address_username": {
    "paddingLeft": "30",
    "paddingRight": "30",
    "flex": 1
  },
  "horizontal": {
    "flexDirection": "row",
    "justifyContent": "flex-start"
  },
  "horizontal_price": {
    "flexDirection": "row",
    "justifyContent": "flex-start",
    "marginBottom": "10",
    "alignItems": "center"
  },
  "address_des": {
    "paddingTop": "10",
    "fontSize": "24",
    "color": "#666666",
    "lines": 1,
    "width": "380",
    "textOverflow": "ellipsis"
  },
  "next": {
    "width": "15",
    "height": "30"
  },
  "tag_gray": {
    "height": "34",
    "paddingLeft": "14",
    "paddingRight": "14",
    "alignItems": "center",
    "backgroundColor": "#999999",
    "borderRadius": "17"
  },
  "tag_back": {
    "height": "34",
    "paddingLeft": "14",
    "paddingRight": "14",
    "backgroundColor": "#333333",
    "alignItems": "center",
    "borderRadius": "17"
  },
  "address_isHas_idCard": {
    "height": "34",
    "fontSize": "20",
    "color": "#FFFFFF",
    "lineHeight": "34",
    "textAlign": "center"
  },
  "address_name": {
    "fontSize": "28",
    "color": "#333333"
  },
  "address_mobile": {
    "fontSize": "28",
    "color": "#333333",
    "paddingLeft": "18",
    "flex": 1
  },
  "add_address_text": {
    "color": "#666666",
    "fontSize": "30",
    "lineHeight": "100",
    "textAlign": "center"
  },
  "arrows": {
    "width": "15",
    "height": "30"
  },
  "horizontal_status": {
    "flexDirection": "row",
    "paddingLeft": "130"
  },
  "status": {
    "width": "50",
    "height": "50"
  },
  "discount": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "flex-end"
  },
  "discount-text1": {
    "fontSize": "65",
    "fontWeight": "600",
    "fontFamily": "iconfont"
  },
  "discount-text2": {
    "fontSize": "24",
    "paddingBottom": "10"
  },
  "content_right": {
    "position": "absolute",
    "top": 0,
    "left": "490",
    "paddingTop": "30",
    "paddingBottom": "20",
    "height": "240",
    "flexDirection": "column",
    "justifyContent": "space-between",
    "alignItems": "flex-start"
  },
  "panel": {
    "width": "750",
    "height": "240",
    "position": "relative",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "marginBottom": "30"
  },
  "img_coupon": {
    "width": "690",
    "height": "240"
  },
  "floor-price": {
    "color": "#999999",
    "fontSize": "25"
  },
  "effective-date": {
    "marginTop": "10",
    "fontWeight": "600",
    "fontSize": "20"
  },
  "content_left": {
    "position": "absolute",
    "top": 0,
    "left": "175",
    "height": "240",
    "width": "257.5",
    "paddingTop": "30",
    "paddingBottom": "20",
    "flexDirection": "column",
    "justifyContent": "space-between",
    "alignItems": "flex-start"
  },
  "high": {
    "width": "250",
    "textAlign": "left",
    "lines": 2,
    "fontSize": "30",
    "lineHeight": "36"
  },
  "color5": {
    "color": "#735adc"
  },
  "color2": {
    "color": "#735adc"
  },
  "color1": {
    "color": "#735adc"
  },
  "color3": {
    "color": "#735adc"
  },
  "color-1": {
    "color": "#735adc"
  },
  "color4": {
    "color": "#ffa03c"
  },
  "content": {
    "width": "750",
    "backgroundColor": "#FFFFFF",
    "height": "252"
  },
  "goods_content": {
    "width": "750",
    "height": "250",
    "paddingLeft": "30",
    "paddingRight": "30",
    "paddingTop": "40",
    "paddingBottom": "40",
    "flexDirection": "row"
  },
  "img": {
    "width": "170",
    "height": "170"
  },
  "goods_info": {
    "paddingTop": "6",
    "paddingBottom": "6",
    "paddingLeft": "20",
    "justifyContent": "space-between"
  },
  "goods_name": {
    "width": "480",
    "lines": 2,
    "lineHeight": "35",
    "fontSize": "26",
    "color": "#333333"
  },
  "price_info": {
    "flexDirection": "column",
    "justifyContent": "flex-end"
  },
  "goods_price": {
    "fontSize": "26",
    "color": "#CF1126"
  },
  "goods_price_tax": {
    "fontSize": "26",
    "color": "#CF1126"
  },
  "goods_price_info": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "position": "relative",
    "width": "480"
  },
  "goods_retail_price": {
    "fontSize": "26",
    "color": "#666666"
  },
  "goods_num_tax": {
    "flex": 1,
    "textAlign": "right",
    "fontSize": "24",
    "color": "#666666"
  },
  "goods_num": {
    "fontSize": "24",
    "color": "#666666",
    "position": "absolute",
    "top": "2",
    "right": 0
  }
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcPopup = __webpack_require__(6);

var _wxcPopup2 = _interopRequireDefault(_wxcPopup);

var _titleBar = __webpack_require__(15);

var _titleBar2 = _interopRequireDefault(_titleBar);

var _line = __webpack_require__(19);

var _line2 = _interopRequireDefault(_line);

var _orderGoods = __webpack_require__(23);

var _orderGoods2 = _interopRequireDefault(_orderGoods);

var _dialog = __webpack_require__(27);

var _dialog2 = _interopRequireDefault(_dialog);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var height = 0;
var bottom = 0;
var promptModule = weex.requireModule('promptModule');
var titleBar = weex.requireModule('titleBar');
var loadingModule = weex.requireModule('loadingModule');
var address = new BroadcastChannel('choose_address');
var storage = weex.requireModule('storage');
var utilModule = weex.requireModule('utilModule');
var event = new BroadcastChannel('cart');
exports.default = {
    components: { title: _titleBar2.default, line: _line2.default, orderGoods: _orderGoods2.default, WxcPopup: _wxcPopup2.default, dialog: _dialog2.default },
    filters: {
        imgSrc: function imgSrc(value) {
            //用于判断当前我的券处于一个什么类型，然后呈现不同的背景
            switch (value) {
                case -1:
                    return 'http://static.t.abmau.com/assets/img/h5/coupon/coupon_bg03.png';
                    break;
                case 4:
                    return 'http://static.t.abmau.com/assets/img/h5/coupon/coupon_bg02.png';
                    break;
                case 5:
                    return 'http://static.t.abmau.com/assets/img/h5/coupon/coupon_bg03.png';
                    break;
                default:
                    return 'http://static.t.abmau.com/assets/img/h5/coupon/coupon_bg03.png';
                    break;
            }
        },
        amountFilters: function amountFilters(value) {
            //当使用券的订货价为0元的时候，改为通用券
            if (value == '0') {
                return '通用券';
            } else {
                return '订货满¥' + value + '可用';
            }
        }
    },
    data: function data() {
        return {
            isIphoneX: false,
            popHeight: 700,
            goodsIdArray: [],
            idcard_id: '',
            idcard_name: '',
            isTrue: true,
            height: height,
            bottom: bottom,
            type: '',

            item: [],
            address: null,
            isBottomShow: false,
            coupon_info: null,
            shipping_fee: '',
            isCheck: true, //购买须知勾选状态
            tariff_fee: '',
            total_price: '',
            lastTimestamp: 0,
            editShow: false,
            lastEditTimestamp: 0,
            coupon_des: '您没有可用的特权券',
            user_coupon_id: 0,
            coupons: [],
            coupon_provider_level: 0,
            temporary_user_coupon_id: 0,
            temporary_coupon_provider_level: 0,
            index: 0,
            goods_amount: '',
            show_idcard_message: 0,
            coupon_count: 0,
            shipping_total: '',
            title: {},
            goods_tax: '',
            address_id: 0,
            trial_activity_id: 0,
            selectIndex: 0,
            tabooCoupon: true,
            vip: 0,
            showHintDialog: false, //下单失败提示框
            sendHintContent: '' //下单失败提示语
        };
    },

    methods: {
        clickCheck: function clickCheck() {
            this.isCheck = !this.isCheck;
        },
        chooseAddress: function chooseAddress(id) {
            this.jumpTo2('address/order_address', '', { address_id: id, type: 'list' });
        },
        clickCancel: function clickCancel() {
            this.temporary_user_coupon_id = 0;
            this.temporary_coupon_provider_level = 0;
            this.index = this.selectIndex;
            this.isBottomShow = false;
        },
        clickAgreement: function clickAgreement(title) {
            this.jumpTo2('web/webView', '用户购买须知', { title: title, url: encodeURIComponent("https://wap.abmau.com/user_buy.html") });
        },
        clickConfirm: function clickConfirm() {
            this.user_coupon_id = this.temporary_user_coupon_id;
            this.coupon_provider_level = this.temporary_coupon_provider_level;
            this.selectIndex = this.index;
            this.isBottomShow = false;
            this.fetch();
        },
        popupOverlayBottomClick: function popupOverlayBottomClick() {
            this.temporary_user_coupon_id = 0;
            this.temporary_coupon_provider_level = 0;
            this.index = this.selectIndex;
            this.isBottomShow = false;
        },
        editAddress: function editAddress() {
            this.editShow = !this.editShow;
        },
        saveAddress: function saveAddress(event) {
            if (event.timestamp - this.lastEditTimestamp < 3000) return;
            this.lastEditTimestamp = event.timestamp;
            var _this = this;
            if (_this.idcard_name == "") {
                promptModule.showPrompt({ msg: '请输入订购人', type: 'prompt' });
                return;
            }
            if (_this.idcard_id == "") {
                promptModule.showPrompt({ msg: '请输入订购人身份证', type: 'prompt' });
                return;
            }
            loadingModule.show({ msg: '' });
            _this.Post(_this.api().edit_address_idCard, {
                idcard_no: _this.idcard_id,
                idcard_name: _this.idcard_name,
                id: _this.address_id
            }, function (res) {
                loadingModule.cancel(function (ret) {
                    var result = ret.result;
                    if (result == 'dismiss') {
                        if (res.data.code == 0) {
                            _this.editShow = false;
                            promptModule.showPrompt({ msg: '保存成功', type: 'success' });
                        } else promptModule.showPrompt({ msg: res.data.msg, type: 'err' });
                    }
                });
            });
        },
        addAddress: function addAddress() {
            this.jumpTo2('address/revamp_address', '', { title: '添加收货地址', type: 'add' });
        },
        selectCoupon: function selectCoupon(item, index) {
            if (item.bool == 'true') this.coupons[index].bool = 'false';else this.coupons[index].bool = 'true';
            this.temporary_user_coupon_id = this.coupons[index].bool == 'true' ? item.user_coupon_id : 0;
            this.temporary_coupon_provider_level = this.coupons[index].bool == 'true' ? item.coupon_provider_level : 0;
            if (this.index != index) this.coupons[this.index].bool = 'false';
            this.index = index;
        },
        chooseCoupon: function chooseCoupon() {
            var _this = this;
            if (!_this.tabooCoupon) return;
            if (_this.coupon_count == 0) return;
            var goods_id = _this.goodsIdArray.join(',');
            _this.Get(_this.api().use_coupon_lv, {
                user_coupon_id: _this.user_coupon_id,
                goods_id_str: goods_id,
                order_price: _this.goods_amount
            }, function (res) {
                if (res.data.code == 0) {
                    _this.coupons = res.data.data.item;
                    _this.isBottomShow = true;
                }
            });
        },
        submitOrder: function submitOrder() {
            var _this = this;
            if (!_this.isCheck) {
                promptModule.showPrompt({ msg: '购买跨境商品需要阅读并同意《跨境商品用户购买须知》', type: 'prompt' });
                return;
            }
            if (!_this.address || _this.address.address_id == 0) {
                promptModule.show({ title: '温馨提示',
                    message: '请先添加收货地址',
                    cancel: '取消',
                    confirm: '去添加' }, function (ret) {
                    var result = ret.result;
                    if (result == 'success') {
                        _this.jumpTo2('address/revamp_address', '', { title: '添加收货地址', type: 'add' });
                    }
                });
                return;
            }
            if (_this.coupon_count > 0 && _this.user_coupon_id == 0 && _this.tabooCoupon) {
                promptModule.show({ title: '温馨提示',
                    message: '您有特权劵可用，是否使用？点击"特权劵"，选择您要使用的劵',
                    cancel: '下次再说',
                    confirm: '去选择' }, function (ret) {
                    var result = ret.result;
                    if (result == 'success') {
                        _this.chooseCoupon(true);
                    } else if (result == 'cancel') {
                        _this.showConfirmDialog();
                    }
                });
                return;
            }
            _this.showConfirmDialog();
        },
        showConfirmDialog: function showConfirmDialog() {
            var _this = this;
            promptModule.show({ title: '温馨提示',
                message: '是否确认提交订单',
                cancel: '取消',
                confirm: '确定' }, function (ret) {
                var result = ret.result;
                if (result == 'success') {
                    _this.sendOrders();
                }
            });
        },
        sendOrders: function sendOrders() {
            var _this = this;
            loadingModule.show({ msg: '' });
            var params = {
                address_id: _this.address_id,
                user_coupon_id: _this.user_coupon_id,
                coupon_provider_level: _this.coupon_provider_level,
                total_price: _this.total_price,
                code: 'ABM',
                type: _this.type
            };
            if (_this.trial_activity_id > 0) params["trial_activity_id"] = _this.trial_activity_id;
            _this.Post(_this.api().order_commit, params, function (res) {
                loadingModule.cancel(function (ret) {
                    var result = ret.result;
                    if (result == 'dismiss') {
                        if (res.data.code == 0) {
                            if (_this.type == 'cart') {
                                event.postMessage(_this.eventBusTag().RESET_CART_NUM);
                                event.postMessage(_this.eventBusTag().RESET_CART);
                            }
                            utilModule.refreshCart();
                            var jumpType = "";
                            if (_this.trial_activity_id > 0) jumpType = "tryout";else jumpType = "pay";
                            if (_this.vip == 1) jumpType = "pay_Gift";
                            _this.interceptPush('order/payOrder', { b_order_ids: res.data.data.b_order_ids, type: jumpType }, 'intercept');
                            if (weex.config.env.platform.toLowerCase() === 'android') _this.popBar();
                        } else {
                            // promptModule.showPrompt({msg: res.data.msg, type: 'err'});
                            _this.sendHintContent = res.data.msg;
                            _this.showHintDialog = true;
                        }
                    }
                });
            });
        },
        fetch: function fetch() {
            var _this = this;
            _this.goodsIdArray = [];
            var params = {
                type: _this.type,
                address_id: _this.address_id,
                user_coupon_id: _this.user_coupon_id,
                coupon_provider_level: _this.coupon_provider_level
            };
            if (_this.trial_activity_id > 0) params["trial_activity_id"] = _this.trial_activity_id;
            _this.Post(_this.api().confirm_order_info, params, function (res) {
                if (res.data.code == 0) {
                    _this.item = res.data.data.item;
                    _this.coupon_info = res.data.data.coupon_info;
                    _this.tariff_fee = res.data.data.tariff_fee;
                    _this.shipping_fee = res.data.data.shipping_fee;
                    _this.total_price = res.data.data.total_price;
                    _this.title = res.data.data.title;
                    _this.address = res.data.data.address;
                    _this.goods_amount = res.data.data.goods_amount;
                    _this.goods_tax = res.data.data.goods_tax;
                    _this.shipping_total = res.data.data.shipping_total;
                    _this.show_idcard_message = res.data.data.show_idcard_message;
                    _this.coupon_count = _this.coupon_info.coupon_count;
                    if (_this.address) {
                        _this.idcard_name = _this.address.idcard_name;
                        _this.idcard_id = _this.address.idcard_no;
                        _this.address_id = _this.address.address_id;
                    }
                    _this.coupon_provider_level = _this.coupon_info.coupon_provider_level;
                    for (var arr in _this.item[0].item) {
                        _this.goodsIdArray.push(_this.item[0].item[arr].id);
                        if (_this.item[0].item[arr].in_coupon == 1) _this.tabooCoupon = false;else _this.tabooCoupon = true;
                    }
                    if (_this.coupon_count > 0) _this.coupon_des = "有" + _this.coupon_count + "张可用";else _this.coupon_des = "您没有可用的特权券";
                    if (_this.coupon_info.user_coupon_id != 0) _this.coupon_des = _this.coupon_info.coupon_name + "  (省 ¥" + _this.coupon_info.save_money + ")";
                    if (!_this.tabooCoupon) _this.coupon_des = "该订单暂时不支持使用优惠券";
                    if (_this.coupon_info.use_coupon == 1 && _this.user_coupon_id == 0) _this.tabooCoupon = false;
                    _this.user_coupon_id = _this.coupon_info.user_coupon_id;
                }
            });
        },
        closeDialog: function closeDialog() {
            this.showHintDialog = false;
        }
    },
    created: function created() {
        this.getTopHeight(this);
        this.isIpx(this);
        this.iPhoneX(this);
        if (this.isIphoneX) this.popHeight = 768;else this.popHeight = 700;
        this.type = this.GetUrlPara(weex.config.bundleUrl, 'type');
        this.trial_activity_id = this.GetUrlPara(weex.config.bundleUrl, 'trial_activity_id');
        if (!this.trial_activity_id || this.trial_activity_id == 'default') this.trial_activity_id = 0;
        this.vip = this.GetUrlPara(weex.config.bundleUrl, 'vip');
        if (!this.vip || this.vip == 'default') this.vip = 0;
        this.address_id = this.GetUrlPara(weex.config.bundleUrl, 'address_id');
        if (!this.address_id || this.address_id == 'undefined') this.address_id = 0;
        titleBar.addFloatView();
        this.fetch();
        var _this = this;
        address.onmessage = function (ret) {
            if (!ret.data) {
                return;
            }
            switch (ret.data) {
                case _this.eventBusTag().REFRESH_ADDRESS:
                    storage.getItem('address_id', function (event) {
                        _this.address_id = parseInt(event.data);
                        _this.fetch();
                    });
                    break;
                case _this.eventBusTag().RESET_ADDRESS:
                    _this.address_id = 0;
                    _this.fetch();
                    break;
            }
        };
        if (weex.config.env.platform.toLowerCase() === 'android') {
            utilModule.eventListener(function () {});
            var globalEvent = weex.requireModule('globalEvent');
            globalEvent.addEventListener("geolocation", function (e) {
                if (_this.isBottomShow) {
                    _this.isBottomShow = false;
                } else {
                    _this.popBar();
                }
            });
        }
    },
    beforeCreate: function beforeCreate() {
        var domModule = weex.requireModule('dom');
        domModule.addRule('fontFace', {
            'fontFamily': "iconfont",
            'src': "url('http://api.t.abmau.com/wap/income_font.otf')"
        });
    },
    destroyed: function destroyed() {
        event.close();
    }
};

/***/ }),
/* 6 */
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
/* 8 */
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
/* 9 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
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
/* 14 */
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
var __vue_template__ = __webpack_require__(18)
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
/* 16 */
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
/* 17 */
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
/* 18 */
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
/* 20 */
/***/ (function(module, exports) {

module.exports = {
  "line": {
    "width": "750",
    "height": "1.4",
    "backgroundColor": "#e2e2e2"
  }
}

/***/ }),
/* 21 */
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
/* 22 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["line"]
  })
},staticRenderFns: []}
module.exports.render._withStripped = true

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
var __vue_template__ = __webpack_require__(26)
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
__vue_options__.__file = "F:\\weex\\weex_develop\\abm_dev_weex\\abm-weexSource\\src\\components\\orderGoods.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3d108879"
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
  "content": {
    "width": "750",
    "backgroundColor": "#FFFFFF",
    "height": "252"
  },
  "goods_content": {
    "width": "750",
    "height": "250",
    "paddingLeft": "40",
    "paddingRight": "40",
    "paddingTop": "40",
    "paddingBottom": "40",
    "flexDirection": "row"
  },
  "img": {
    "width": "170",
    "height": "170"
  },
  "goods_info": {
    "paddingTop": "6",
    "paddingBottom": "6",
    "paddingLeft": "20",
    "justifyContent": "space-between"
  },
  "goods_name": {
    "width": "480",
    "lines": 2,
    "lineHeight": "35",
    "fontSize": "26",
    "color": "#333333"
  },
  "price_info": {
    "flexDirection": "column",
    "justifyContent": "flex-end"
  },
  "goods_price": {
    "fontSize": "26",
    "marginBottom": "10",
    "color": "#CF1126"
  },
  "goods_price_info": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "position": "relative",
    "width": "480"
  },
  "goods_retail_price": {
    "fontSize": "26",
    "color": "#666666"
  },
  "goods_num": {
    "fontSize": "20",
    "color": "#666666",
    "position": "absolute",
    "top": "2",
    "right": 0
  },
  "line": {
    "width": "750",
    "height": "1.4",
    "backgroundColor": "#e2e2e2"
  }
}

/***/ }),
/* 25 */
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        image: {
            type: String,
            default: ''
        },
        goods_name: {
            type: String,
            default: ''
        },
        in_price: {
            type: String,
            default: ''
        },
        price: {
            type: String,
            default: ''
        },
        market_price: {
            type: String,
            default: ''
        },
        goods_count: {
            type: [String, Number],
            default: 0
        }
    },
    data: function data() {
        return {};
    },

    methods: {
        clickItem: function clickItem() {
            this.$emit('clickItem');
        }
    }
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["content"]
  }, [_c('div', {
    staticClass: ["goods_content"],
    on: {
      "click": function($event) {
        _vm.clickItem()
      }
    }
  }, [_c('image', {
    staticClass: ["img"],
    attrs: {
      "src": _vm.image
    }
  }), _c('div', {
    staticClass: ["goods_info"]
  }, [_c('text', {
    staticClass: ["goods_name"],
    attrs: {
      "lines": "2"
    }
  }, [_vm._v(_vm._s(_vm.goods_name))]), _c('div', {
    staticClass: ["price_info"]
  }, [_c('text', {
    staticClass: ["goods_price"]
  }, [_vm._v("优惠价  ¥" + _vm._s(_vm.in_price))]), _c('div', {
    staticClass: ["goods_price_info"]
  }, [_c('text', {
    staticClass: ["goods_retail_price"]
  }, [_vm._v("售价  ¥" + _vm._s(_vm.price) + "  ¥" + _vm._s(_vm.market_price))]), _c('text', {
    staticClass: ["goods_num"]
  }, [_vm._v("x  " + _vm._s(_vm.goods_count))])])])])]), _c('div', {
    staticClass: ["line"]
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(28)
)

/* script */
__vue_exports__ = __webpack_require__(29)

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
/* 28 */
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _WxcMask = __webpack_require__(30);

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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(31)
)

/* script */
__vue_exports__ = __webpack_require__(32)

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
/* 31 */
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
/* 32 */
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
/* 33 */
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
/* 34 */
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
/* 35 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('title', {
    attrs: {
      "title": "确认订单"
    }
  }), _c('scroller', {
    staticClass: ["parent"],
    style: {
      top: _vm.height + 'px',
      bottom: (_vm.bottom + 110) + 'px'
    }
  }, [(_vm.show_idcard_message == 1) ? _c('div', {
    staticClass: ["hint"]
  }, [_c('image', {
    staticClass: ["hint_image"],
    attrs: {
      "src": "assets://icon_hint_msg"
    }
  }), _c('text', {
    staticClass: ["hint_text"]
  }, [_vm._v("为了保证顺利清关，订购人的姓名和身份证号请与付款人真实信息保持一致。")])]) : _vm._e(), (!_vm.address) ? _c('div', {
    staticClass: ["add_address"],
    on: {
      "click": function($event) {
        _vm.addAddress()
      }
    }
  }, [_c('text', {
    staticClass: ["add_address_text"]
  }, [_vm._v("请先添加收货地址")]), _c('image', {
    staticClass: ["arrows"],
    attrs: {
      "src": "http://img.abmau.com/abmau/197260145f13acf70e06fe37ad4ba0c8.png"
    }
  })]) : _vm._e(), (_vm.address) ? _c('div', [_c('image', {
    staticClass: ["address_image"],
    attrs: {
      "src": "assets://icon_order_address"
    }
  }), _c('div', {
    staticClass: ["address_info"],
    on: {
      "click": function($event) {
        _vm.chooseAddress(_vm.address.address_id)
      }
    }
  }, [_c('text', {
    staticClass: ["address_title"]
  }, [_vm._v("发送地址")]), _c('div', {
    staticClass: ["address_username"]
  }, [_c('div', {
    staticClass: ["horizontal"]
  }, [_c('text', {
    staticClass: ["address_name"]
  }, [_vm._v(_vm._s(_vm.address.name))]), _c('text', {
    staticClass: ["address_mobile"]
  }, [_vm._v(_vm._s(_vm.address.mobile))]), (_vm.address.idcard_upload == 0) ? _c('div', {
    staticClass: ["tag_gray"],
    staticStyle: {
      backgroundColor: "#999999"
    }
  }, [_c('text', {
    staticClass: ["address_isHas_idCard"]
  }, [_vm._v("无身份证")])]) : _vm._e(), (_vm.address.idcard_upload == 1) ? _c('div', {
    staticClass: ["tag_back"],
    staticStyle: {
      backgroundColor: "#333333"
    }
  }, [_c('text', {
    staticClass: ["address_isHas_idCard"]
  }, [_vm._v("有身份证")])]) : _vm._e()]), _c('text', {
    staticClass: ["address_des"]
  }, [_vm._v(_vm._s(_vm.address.address))])]), _c('image', {
    staticClass: ["next"],
    attrs: {
      "src": "http://img.abmau.com/abmau/197260145f13acf70e06fe37ad4ba0c8.png"
    }
  })])]) : _vm._e(), (_vm.show_idcard_message == 1) ? _c('div', {
    staticClass: ["line"]
  }) : _vm._e(), (_vm.show_idcard_message == 1 && _vm.address) ? _c('div', {
    staticClass: ["edit_address_item"]
  }, [_c('div', {
    staticClass: ["address_idCard_info"]
  }, [_c('div', {
    staticClass: ["horizontal_address_top"]
  }, [_c('text', {
    staticClass: ["address_idCard_title_top"]
  }, [_vm._v("订购人")]), _c('input', {
    staticClass: ["address_idCard_name_top"],
    attrs: {
      "type": "text",
      "disabled": !_vm.editShow,
      "placeholder": "请输入订购人",
      "value": (_vm.idcard_name)
    },
    on: {
      "input": function($event) {
        _vm.idcard_name = $event.target.attr.value
      }
    }
  }), (!_vm.editShow) ? _c('image', {
    staticClass: ["address_edit"],
    attrs: {
      "src": "assets://icon_proxy_edit"
    },
    on: {
      "click": function($event) {
        _vm.editAddress()
      }
    }
  }) : _vm._e()]), _c('div', {
    staticClass: ["horizontal_address_bot"]
  }, [_c('text', {
    staticClass: ["address_idCard_title_bot"]
  }, [_vm._v("身份证")]), _c('input', {
    staticClass: ["address_idCard_name_bot"],
    attrs: {
      "disabled": !_vm.editShow,
      "placeholder": "请输入订购人身份证",
      "value": (_vm.idcard_id)
    },
    on: {
      "input": function($event) {
        _vm.idcard_id = $event.target.attr.value
      }
    }
  })])]), (_vm.editShow) ? _c('text', {
    staticClass: ["saveAddress"],
    on: {
      "click": _vm.saveAddress
    }
  }, [_vm._v("保存")]) : _vm._e()]) : _vm._e(), _c('div', {
    staticClass: ["line"]
  }), _vm._l((_vm.item), function(v, index) {
    return _c('div', {
      key: index,
      staticClass: ["orders"]
    }, [_c('text', {
      staticClass: ["depot_text"]
    }, [_vm._v(_vm._s(v.depot.orderName) + "  " + _vm._s(v.depot.name))]), _c('line'), _vm._l((v.item), function(content, position) {
      return _c('div', {
        key: position,
        staticClass: ["list"]
      }, [_c('div', {
        staticClass: ["content"]
      }, [_c('div', {
        staticClass: ["goods_content"]
      }, [_c('image', {
        staticClass: ["img"],
        attrs: {
          "src": content.image_url
        }
      }), _c('div', {
        staticClass: ["goods_info"]
      }, [_c('text', {
        staticClass: ["goods_name"],
        attrs: {
          "lines": "2"
        }
      }, [_vm._v(_vm._s(content.name))]), _c('div', {
        staticClass: ["price_info"]
      }, [_c('div', {
        staticClass: ["horizontal_price"],
        style: {
          width: 480 + 'px'
        }
      }, [(content.retail_tax == 'no_show') ? _c('text', {
        staticClass: ["goods_price"]
      }, [_vm._v(_vm._s(content.retail_title))]) : _vm._e(), _c('text', {
        staticClass: ["goods_price"]
      }, [_vm._v("¥ " + _vm._s(content.retail_price))]), (content.retail_tax != 'no_show') ? _c('text', {
        staticClass: ["goods_price_tax"]
      }, [_vm._v("(" + _vm._s(content.retail_tax_title) + "¥ " + _vm._s(content.retail_tax) + ")")]) : _vm._e(), (!content.spec_name) ? _c('text', {
        staticClass: ["goods_num_tax"]
      }, [_vm._v("x " + _vm._s(content.goods_num))]) : _vm._e()]), (content.spec_name) ? _c('div', {
        staticClass: ["goods_price_info"]
      }, [_c('text', {
        staticClass: ["goods_retail_price"]
      }, [_vm._v(_vm._s(content.spec_name))]), _c('text', {
        staticClass: ["goods_num"]
      }, [_vm._v("x " + _vm._s(content.goods_num))])]) : _vm._e()])])]), _c('line')], 1)])
    }), (false) ? _c('div', {
      staticClass: ["order_item_price"]
    }, [_c('div', {
      staticClass: ["order_item"]
    }, [_c('text', {
      staticClass: ["item_price"]
    }, [_vm._v("含税商品价 ¥" + _vm._s(v.order_price))]), _c('text', {
      staticClass: ["total_price"]
    }, [_vm._v("合计 ¥" + _vm._s(v.total_price))])]), _c('div', [_c('text', {
      staticClass: ["item_price"]
    }, [_vm._v("含税运费 ¥" + _vm._s(v.shipping_fee))])])]) : _vm._e()], 2)
  }), _c('div', {
    staticClass: ["line"]
  }), _c('div', {
    staticClass: ["coupon_content"],
    on: {
      "click": function($event) {
        _vm.chooseCoupon()
      }
    }
  }, [_c('text', {
    staticClass: ["coupon_title"]
  }, [_vm._v("特权券")]), _c('text', {
    staticClass: ["coupon_des"]
  }, [_vm._v(_vm._s(_vm.coupon_des))]), _c('image', {
    staticClass: ["next"],
    attrs: {
      "src": "http://img.abmau.com/abmau/197260145f13acf70e06fe37ad4ba0c8.png"
    }
  })]), _c('div', {
    staticClass: ["line"]
  }), _c('div', {
    staticClass: ["order_price_content"]
  }, [_c('text', {
    staticClass: ["price_title"]
  }, [_vm._v(_vm._s(_vm.title.goods_title))]), _c('div', {
    staticClass: ["horizontal"]
  }, [_c('text', {
    staticClass: ["price_title"]
  }, [_vm._v("¥" + _vm._s(_vm.goods_amount))]), (_vm.goods_tax != 'no_show') ? _c('text', {
    staticClass: ["price_title"]
  }, [_vm._v("(" + _vm._s(_vm.title.goods_tax_title) + ":¥" + _vm._s(_vm.goods_tax) + ")")]) : _vm._e()])]), _c('line'), _c('div', {
    staticClass: ["order_price_content"]
  }, [_c('text', {
    staticClass: ["price_title"]
  }, [_vm._v(_vm._s(_vm.title.shipping_title))]), _c('text', {
    staticClass: ["price_title"]
  }, [_vm._v("¥" + _vm._s(_vm.shipping_total))])]), _c('line'), (_vm.show_idcard_message == 1) ? _c('div', {
    staticClass: ["agreement"]
  }, [(!_vm.isCheck) ? _c('image', {
    staticClass: ["agreement_image"],
    attrs: {
      "src": "assets://icon_uncheck"
    },
    on: {
      "click": function($event) {
        _vm.clickCheck()
      }
    }
  }) : _vm._e(), (_vm.isCheck) ? _c('image', {
    staticClass: ["agreement_image"],
    attrs: {
      "src": "assets://icon_checked"
    },
    on: {
      "click": function($event) {
        _vm.clickCheck()
      }
    }
  }) : _vm._e(), _c('text', {
    staticClass: ["agreement_text"],
    on: {
      "click": function($event) {
        _vm.clickAgreement('跨境商品用户购买须知')
      }
    }
  }, [_vm._v("同意并接受《跨境商品用户购买须知》")])]) : _vm._e()], 2), _c('div', {
    staticClass: ["order_bottom"]
  }, [_c('text', {
    staticClass: ["bottom_total_price"]
  }, [_vm._v("合计 ¥" + _vm._s(_vm.total_price))]), _c('text', {
    staticClass: ["submit"],
    on: {
      "click": function($event) {
        _vm.submitOrder()
      }
    }
  }, [_vm._v("提交订单")])]), _c('wxc-popup', {
    attrs: {
      "haveOverlay": _vm.isTrue,
      "popupColor": "rgb(92, 184, 92)",
      "show": _vm.isBottomShow,
      "pos": "bottom",
      "height": _vm.popHeight
    },
    on: {
      "wxcPopupOverlayClicked": _vm.popupOverlayBottomClick
    }
  }, [_c('div', {
    staticClass: ["pop_content"]
  }, [_c('div', {
    staticClass: ["coupon_pop_content"]
  }, [_c('text', {
    staticClass: ["coupon_pop_title"]
  }, [_vm._v("选择特权劵")]), _c('list', {
    style: {
      height: 520 + 'px'
    }
  }, _vm._l((_vm.coupons), function(itemData, i) {
    return _c('cell', {
      key: i,
      staticClass: ["cell"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["panel"],
      on: {
        "click": function($event) {
          _vm.selectCoupon(itemData, i)
        }
      }
    }, [_c('image', {
      staticClass: ["img_coupon"],
      attrs: {
        "src": _vm._f("imgSrc")(itemData.coupon_provider_level)
      }
    }), _c('div', {
      staticClass: ["content_left"]
    }, [_c('div', [_c('text', {
      class: ['high', 'color' + itemData.coupon_provider_level]
    }, [_vm._v(_vm._s(itemData.name))]), _c('text', {
      class: ['effective-date', 'color' + itemData.coupon_provider_level]
    }, [_vm._v("有效日期至" + _vm._s(itemData.end_at))])]), _c('div', [_c('text', {
      class: ['floor-price', 'color' + itemData.coupon_provider_level]
    }, [_vm._v(_vm._s(_vm._f("amountFilters")(itemData.limit_amount)))])])]), _c('div', {
      staticClass: ["content_right"]
    }, [_c('div', {
      staticClass: ["discount"]
    }, [_c('text', {
      class: ['discount-text1', 'color' + itemData.coupon_provider_level]
    }, [_vm._v(_vm._s(itemData.discount))]), _c('text', {
      class: ['discount-text2', 'color' + itemData.coupon_provider_level]
    }, [_vm._v("折起")])]), _c('div', {
      staticClass: ["horizontal_status"]
    }, [(itemData.bool == 'true') ? _c('image', {
      staticClass: ["status"],
      attrs: {
        "src": "assets://xuanzhong"
      }
    }) : _vm._e(), (itemData.bool == 'false') ? _c('image', {
      staticClass: ["status"],
      attrs: {
        "src": "assets://weixuanzhong"
      }
    }) : _vm._e()])])])])
  })), _c('div', {
    staticClass: ["coupon_bottom"]
  }, [_c('text', {
    staticClass: ["coupon_cancel"],
    on: {
      "click": function($event) {
        _vm.clickCancel()
      }
    }
  }, [_vm._v("取消")]), _c('text', {
    staticClass: ["coupon_confirm"],
    on: {
      "click": function($event) {
        _vm.clickConfirm()
      }
    }
  }, [_vm._v("确定")])])]), (_vm.isIphoneX) ? _c('div', {
    staticStyle: {
      height: "68px",
      backgroundColor: "white"
    }
  }) : _vm._e()])]), _c('dialog', {
    attrs: {
      "show": _vm.showHintDialog,
      "showCancel": false,
      "confirmBackgroundColor": "#CF1126",
      "confirmTextColor": "#FFFFFF",
      "content": _vm.sendHintContent,
      "title": "提示",
      "confirmText": "确定"
    },
    on: {
      "confirm": function($event) {
        _vm.closeDialog()
      },
      "close": function($event) {
        _vm.closeDialog()
      }
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 36 */
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
/* 37 */
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
/* 38 */
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