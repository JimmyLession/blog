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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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

var _api = __webpack_require__(19);

var _api2 = _interopRequireDefault(_api);

var _event = __webpack_require__(20);

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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _home = __webpack_require__(2);

var _home2 = _interopRequireDefault(_home);

var _mixin = __webpack_require__(18);

var _mixin2 = _interopRequireDefault(_mixin);

var _utils = __webpack_require__(0);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.mixin(_mixin2.default);
_home2.default.el = '#root';
new Vue(_home2.default);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(3)
)

/* script */
__vue_exports__ = __webpack_require__(4)

/* template */
var __vue_template__ = __webpack_require__(17)
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
__vue_options__.__file = "F:\\weex\\weex_develop\\abm_dev_weex\\abm-weexSource\\src\\pages\\home\\home.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7d92b3a2"
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
/***/ (function(module, exports) {

module.exports = {
  "parent": {
    "position": "absolute",
    "left": 0,
    "right": 0
  },
  "search": {
    "width": "750",
    "backgroundColor": "#ffffff",
    "flexDirection": "row",
    "paddingLeft": "24",
    "paddingRight": "24",
    "paddingBottom": "10",
    "alignItems": "flex-end"
  },
  "search_bt": {
    "width": "627",
    "height": "70",
    "borderRadius": "10",
    "backgroundColor": "#f6f6f6"
  },
  "scrollVertical": {
    "width": "627",
    "height": "70",
    "backgroundColor": "#f6f6f6"
  },
  "search-icon": {
    "width": "30",
    "height": "30",
    "left": "20",
    "top": "20",
    "position": "absolute"
  },
  "goods_event": {
    "marginTop": "8"
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
  "buybrand": {
    "marginTop": "20",
    "width": "750",
    "minHeight": "120"
  },
  "buybrand_image": {
    "width": "363",
    "height": "363"
  },
  "line": {
    "width": "363",
    "height": "1.4",
    "backgroundColor": "#e2e2e2"
  },
  "buybrand_item": {
    "width": "363",
    "backgroundColor": "#ffffff"
  },
  "buybrand_title": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "paddingLeft": "24",
    "paddingTop": "10"
  },
  "buybrand_name": {
    "maxWidth": "265",
    "marginRight": "30",
    "fontSize": "22",
    "color": "#333333",
    "lineHeight": "33",
    "lines": 2
  },
  "buybrand_price": {
    "flexDirection": "row",
    "paddingLeft": "24",
    "paddingTop": "30",
    "paddingBottom": "22"
  },
  "buybrand_bot": {
    "backgroundColor": "#f6f6f6",
    "height": "8"
  },
  "buybrand_height": {
    "backgroundColor": "#f6f6f6",
    "width": "8"
  },
  "wrapper": {
    "width": "750",
    "backgroundColor": "#f6f6f6"
  },
  "title-bar": {
    "width": "750",
    "backgroundColor": "#ffffff"
  },
  "home_banner": {
    "width": "750",
    "height": "300"
  },
  "banner": {
    "width": "750",
    "height": "375"
  },
  "banner_image": {
    "width": "750",
    "height": "375"
  },
  "home_recombanner": {
    "marginTop": "20",
    "width": "750",
    "height": "300",
    "flexDirection": "row",
    "justifyContent": "flex-start",
    "backgroundColor": "#f6f6f6",
    "paddingLeft": "18",
    "paddingRight": "18"
  },
  "recombanner_left": {
    "width": "300",
    "height": "300"
  },
  "recombanner_right": {
    "width": "410",
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "height": "300"
  },
  "recombanner_line": {
    "width": "410",
    "height": "2",
    "backgroundColor": "#e2e2e2"
  },
  "recombanner_top": {
    "width": "410",
    "height": "149"
  },
  "navigator": {
    "marginTop": "20",
    "width": "714",
    "height": "198.135",
    "marginLeft": "18",
    "marginRight": "18",
    "flexDirection": "row",
    "backgroundColor": "#FFFFFF"
  },
  "navigator_item": {
    "width": "178.5",
    "height": "198.135",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "navigator_image": {
    "width": "60",
    "height": "60"
  },
  "msg_count": {
    "width": "75",
    "flexDirection": "row",
    "justifyContent": "center",
    "position": "relative"
  },
  "count": {
    "lineHeight": "30",
    "width": "30",
    "height": "30",
    "color": "#ffffff",
    "fontSize": "18",
    "textAlign": "center",
    "backgroundColor": "#CF1126",
    "borderRadius": 50,
    "position": "absolute",
    "top": 0,
    "right": "7.5"
  },
  "is_new": {
    "width": "18",
    "height": "18",
    "backgroundColor": "#CF1126",
    "borderRadius": 50,
    "position": "absolute",
    "top": 0,
    "right": "7.5"
  },
  "_count": {
    "lineHeight": "30",
    "width": "50",
    "height": "30",
    "color": "#ffffff",
    "fontSize": "18",
    "textAlign": "center",
    "backgroundColor": "#CF1126",
    "borderRadius": 50,
    "position": "absolute",
    "top": 0,
    "right": 0
  },
  "navigator_text": {
    "fontSize": "26",
    "color": "#333333",
    "textAlign": "center",
    "paddingTop": "10"
  },
  "messbanner": {
    "marginTop": "20",
    "width": "714",
    "marginLeft": "18",
    "marginRight": "18"
  },
  "messbanner_image": {
    "width": "714"
  },
  "dc_message": {
    "marginTop": "20",
    "width": "750",
    "height": "120",
    "backgroundColor": "#FFFFFF",
    "flexDirection": "row",
    "justifyContent": "space-around",
    "alignItems": "center"
  },
  "message_image": {
    "marginLeft": "36",
    "width": "56",
    "height": "60"
  },
  "messageSlideView": {
    "height": "104",
    "flex": 1,
    "marginRight": "10",
    "marginLeft": "40"
  },
  "message_new": {
    "width": "60",
    "height": "24"
  },
  "message_more": {
    "height": "30",
    "marginLeft": "20",
    "marginRight": "36",
    "color": "#666666",
    "fontSize": "24"
  },
  "message": {
    "flex": 1,
    "height": "104"
  },
  "message_banner": {
    "flex": 1,
    "maxLines": 2,
    "lineHeight": "104",
    "fontSize": "26",
    "color": "#333333",
    "textAlign": "left",
    "paddingLeft": "40",
    "paddingRight": "36"
  },
  "recommend": {
    "marginTop": "20",
    "width": "750",
    "minHeight": "120"
  },
  "module_title": {
    "width": "750",
    "position": "relative",
    "height": "120",
    "backgroundColor": "#ffffff",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "module_title_text": {
    "fontSize": "38",
    "color": "#333333",
    "lineHeight": "120",
    "textAlign": "center"
  },
  "module_title_image": {
    "width": "22",
    "height": "40",
    "position": "absolute",
    "right": "36",
    "top": "40"
  },
  "recommend_image": {
    "width": "372",
    "height": "372"
  },
  "recommend_name": {
    "lines": 1,
    "fontSize": "22",
    "color": "#333333",
    "paddingLeft": "16",
    "paddingTop": "16"
  },
  "recommend_price": {
    "flexDirection": "row",
    "paddingLeft": "16",
    "paddingTop": "6",
    "paddingBottom": "40"
  },
  "brandtrace_name": {
    "width": "396.36",
    "lines": 2,
    "paddingLeft": "10",
    "fontSize": "22",
    "color": "#333333"
  },
  "price": {
    "fontSize": "22",
    "color": "#CF1126",
    "marginRight": "14"
  },
  "disprice": {
    "fontSize": "22",
    "color": "#666666"
  },
  "todaymajor": {
    "width": "750",
    "backgroundColor": "#ffffff",
    "marginTop": "20",
    "minHeight": "120"
  },
  "todaymajor_content": {
    "width": "750",
    "height": "240",
    "flexDirection": "row",
    "justifyContent": "flex-start"
  },
  "todaymajor_image": {
    "width": "240",
    "height": "180",
    "marginTop": "30",
    "marginBottom": "30",
    "marginLeft": "30",
    "marginRight": "40"
  },
  "todaymajor_vertical": {
    "flexDirection": "column",
    "marginTop": "32",
    "justifyContent": "flex-start",
    "marginBottom": "32",
    "marginRight": "40"
  },
  "todaymajor_title": {
    "width": "410",
    "flex": 1,
    "lines": 2,
    "lineHeight": "38",
    "fontSize": "28",
    "color": "#333333"
  },
  "todaymajor_price": {
    "flexDirection": "row"
  },
  "item_tag": {
    "width": "410",
    "flexDirection": "row"
  },
  "item_goods_tag": {
    "width": "410",
    "flexDirection": "row",
    "position": "absolute",
    "top": 0,
    "left": 0
  },
  "tag_position": {
    "position": "absolute",
    "top": 0,
    "right": 0
  },
  "position_text": {
    "backgroundColor": "#000000",
    "opacity": 0.6,
    "paddingTop": "4",
    "paddingBottom": "4",
    "paddingLeft": "8",
    "paddingRight": "8",
    "color": "#ffffff",
    "fontSize": "20"
  },
  "tag": {
    "paddingLeft": "10",
    "paddingRight": "10",
    "marginRight": "6",
    "alignItems": "center",
    "borderRadius": "4",
    "marginBottom": "12"
  },
  "tag_text": {
    "borderRadius": "4",
    "fontSize": "20",
    "color": "#FFFFFF",
    "lineHeight": "34",
    "marginRight": "10",
    "textAlign": "center"
  },
  "text": {
    "marginTop": "3",
    "paddingBottom": "3",
    "paddingLeft": "4",
    "paddingRight": "4",
    "textAlign": "center",
    "fontSize": "20",
    "color": "#FFFFFF"
  },
  "onebrand": {
    "width": "750",
    "marginTop": "20"
  },
  "onebrand_image": {
    "width": "250",
    "height": "80"
  },
  "onebrand_name": {
    "fontSize": "22",
    "lines": 1,
    "paddingTop": "8",
    "color": "#666666",
    "textAlign": "center",
    "paddingBottom": "40"
  },
  "gift": {
    "width": "750",
    "backgroundColor": "#ffffff",
    "marginTop": "20",
    "minHeight": "120"
  },
  "scroller": {
    "width": "750",
    "height": "540",
    "flexDirection": "row",
    "paddingRight": "8"
  },
  "gift_image": {
    "width": "396.36",
    "height": "416.37"
  },
  "gift_name": {
    "width": "396.36",
    "paddingTop": "20",
    "lines": 1,
    "paddingLeft": "10",
    "fontSize": "22",
    "color": "#333333"
  },
  "gift_price": {
    "paddingLeft": "10",
    "paddingTop": "6",
    "paddingBottom": "46",
    "flexDirection": "row"
  },
  "goods_tag": {
    "position": "relative"
  },
  "box": {
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "wrap",
    "justifyContent": "space-between",
    "width": "750",
    "backgroundColor": "#ffffff"
  },
  "onebrand_box": {
    "paddingTop": "30",
    "paddingBottom": "10",
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "wrap",
    "justifyContent": "space-between",
    "width": "750",
    "backgroundColor": "#ffffff"
  },
  "recommend_item": {
    "width": "372"
  },
  "onebrand_item": {
    "width": "250"
  },
  "gift_item": {
    "width": "396.36",
    "marginLeft": "8"
  },
  "buybrand_box": {
    "width": "750",
    "paddingLeft": "8",
    "paddingRight": "8",
    "flexDirection": "row",
    "justifyContent": "center"
  },
  "buybrand_left": {
    "flexDirection": "column",
    "width": "363"
  },
  "buybrand_right": {
    "flexDirection": "column",
    "width": "363"
  },
  "classify_bt": {
    "width": "40",
    "height": "70",
    "flexDirection": "row",
    "alignItems": "center",
    "marginLeft": "20"
  },
  "classify": {
    "width": "36",
    "height": "36"
  },
  "left_image_bt": {
    "top": "-40",
    "left": "20",
    "width": "150",
    "height": "30",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "left_image": {
    "width": "34",
    "height": "20"
  },
  "left_title": {
    "marginLeft": "10",
    "flex": 1,
    "textAlign": "left",
    "height": "28",
    "fontSize": "22",
    "color": "#FFFFFF"
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _refresh = __webpack_require__(5);

var _refresh2 = _interopRequireDefault(_refresh);

var _line = __webpack_require__(9);

var _line2 = _interopRequireDefault(_line);

var _itemDecoration = __webpack_require__(13);

var _itemDecoration2 = _interopRequireDefault(_itemDecoration);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var nativeBarHeight = 0;
var titleHeight = 0;
var modal = weex.requireModule('modal');
var promptModule = weex.requireModule('promptModule');
var titleBar = weex.requireModule('titleBar');
var storage = weex.requireModule('storage');
var event = new BroadcastChannel('event');
var dom = weex.requireModule('dom');
var eventAccount = new BroadcastChannel('account');

exports.default = {
    components: { line: _line2.default, itemDecoration: _itemDecoration2.default, refresher: _refresh2.default },
    data: function data() {
        return {
            has_new: false,
            color1: '#64D791',
            color2: '#FF916F',
            color3: '#999999',
            color4: '#ff4141',
            messBannerHeight: '',
            showMessageNew: false,
            isRefresh: false,
            height: height,
            bottom: bottom,
            nativeBarHeight: nativeBarHeight,
            titleHeight: titleHeight,
            navigator: {},
            messageId: '',
            marqueeData: [],
            keywordMarquee: [],
            banner: {
                data: []
            },
            banner_notice: null,
            recombanner: {
                data: [],
                title: ''
            },
            recombanner_item_one: null,
            recombanner_item_two: null,
            recombanner_item_three: null,
            messbanner: {
                data: [],
                title: ''
            },
            message: {
                data: [],
                title: ''
            },
            recommend: {
                data: [],
                title: ''
            },
            todaymajor: {
                data: [],
                title: ''
            },
            newproduct: {
                data: [],
                title: ''
            },
            gift: {
                data: [],
                title: ''
            },
            brandtrace: {
                data: [],
                title: ''
            },
            onebrand: {
                data: [],
                title: ''
            },
            starproduct: {
                data: [],
                title: ''
            },
            buybrand: {
                data: [],
                title: ''
            },
            buybrand_left: [],
            buybrand_right: [],
            is_new: true
        };
    },

    methods: {
        msgevent: function msgevent() {
            this.refreshMessage();
        },
        clickBanner: function clickBanner(item) {
            if (!item || item == null) return;
            titleBar.startWeb({
                title: item.title,
                url: item.url,
                shareUrl: item.sharelink,
                shareImg: item.shareimg,
                shareTitle: item.sharetitle,
                shareDes: item.sharedesc
            });
        },
        refreshMessage: function refreshMessage() {
            var _this = this;
            _this.Get(_this.api().refresh_msg, {}, function (res) {
                if (res.data.code == 0) _this.navigator.noreadcount = res.data.data;
            });
        },
        loadingDown: function loadingDown() {
            this.clearData();
            this.fetch();
        },
        clearData: function clearData() {
            this.is_new = true;
            this.navigator = {};
            this.banner.data = [];
            this.recombanner.data = [];
            this.messbanner.data = [];
            this.message.data = [];
            this.messageId = '';
            this.recommend.data = [];
            this.todaymajor.data = [];
            this.newproduct.data = [];
            this.gift.data = [];
            this.brandtrace.data = [];
            this.onebrand.data = [];
            this.starproduct.data = [];
            this.buybrand.data = [];
            this.buybrand_right = [];
            this.buybrand_left = [];
        },
        didSelectTitle: function didSelectTitle(ret) {
            titleBar.goToSearch(ret.name);
            // this.jumpTo2('home/search_goods','',{keyword:ret.name});
        },
        searchAll: function searchAll(url) {
            if (this.compareVersion(weex.config.env.appVersion, '3.2.2')) {
                this.jumpTo2('classify/search', '', { keyword: '' });
            } else {
                titleBar.startWeb({
                    title: "搜索商品",
                    url: url
                });
            }
        },
        startWeb: function startWeb(title, url, shareUrl, shareImg, shareTitle, shareDes) {
            if (url.indexOf('/app/goods/detail/') != -1) {
                var id = parseInt(url.split('\\?')[0].split('/app/goods/detail/')[1]);
                if (this.compareVersion(weex.config.env.appVersion, '3.4.0')) {
                    this.jumpTo2('shop/goodsDetailsParent', '', { title: title, goods_id: id });
                } else if (this.compareVersion(weex.config.env.appVersion, '3.0.7')) {
                    this.jumpTo2('shop/goodsDetails', '', { title: title, goods_id: id });
                } else titleBar.startWeb({
                    title: title,
                    url: url,
                    shareUrl: shareUrl,
                    shareImg: shareImg,
                    shareTitle: shareTitle,
                    shareDes: shareDes });
            } else {
                titleBar.startWeb({
                    title: title,
                    url: url,
                    shareUrl: shareUrl,
                    shareImg: shareImg,
                    shareTitle: shareTitle,
                    shareDes: shareDes
                });
            }
        },
        clickCoupon: function clickCoupon() {
            this.is_new = false;
            this.jumpTo2('personal/myVoucher/myVoucher', '', {});
        },
        clickStore: function clickStore() {
            this.jumpTo2('personal/personalStore/personalStore', '', {}, '预览');
        },
        clickMsg: function clickMsg() {
            this.jumpTo2('home/home_message', '', {});
        },
        clickMatter: function clickMatter() {
            var _this = this;
            storage.setItem('matter_new', _this.navigator.time, function (event) {
                if (event.result == 'success') {
                    _this.has_new = false;
                }
            });

            if (_this.compareVersion(weex.config.env.appVersion, '3.4.0')) {
                _this.interceptPush('material/materialList', {}, 'intercept');
            } else {
                titleBar.jumpMatter();
            }
        },
        jumpBrand: function jumpBrand(title, id, url) {
            if (this.compareVersion(weex.config.env.appVersion, '3.2.2')) {
                this.jumpTo2('classify/brandDetail', '', { title: title, brandId: id });
            } else {
                titleBar.startWeb({
                    title: title,
                    url: url
                });
            }
        },

        //模块跳转对应列表
        jumpModule: function jumpModule(type, title) {
            var _this = this;
            switch (type) {
                case 1:
                    _this.jumpTo2('home/home_sellWell', '', {});
                    break;
                case 2:
                    _this.jumpTo2('home/home_VipCF', '', {});
                    break;
                case 3:
                    _this.jumpTo2('home/home_newProduct', '', {});
                    break;
                case 4:
                    _this.jumpTo2('home/homeStar', '', {});
                    break;
                case 5:
                    _this.jumpTo2('home/home_brandtrace', '', {});
                    break;
            }
        },

        //跳转商品详情
        jumpGD: function jumpGD(id, url, name) {
            if (id != 0) {
                if (this.compareVersion(weex.config.env.appVersion, '3.4.0')) {
                    this.jumpTo2('shop/goodsDetailsParent', '', { goods_id: id });
                } else if (this.compareVersion(weex.config.env.appVersion, '3.0.7')) {
                    this.jumpTo2('shop/goodsDetails', '', { goods_id: id });
                } else titleBar.jumpGD({ id: id, url: url });
            } else {
                titleBar.startWeb({
                    title: name,
                    url: url
                });
            }
        },
        fetch: function fetch() {
            var _this = this;
            _this.Get(_this.api().home, {}, function (res) {
                if (res.data.code == '0') {
                    _this.navigator = res.data.data.navigator;
                    _this.banner = res.data.data.banner;
                    _this.banner_notice = res.data.data.banner_notice;
                    _this.recombanner = res.data.data.recombanner;
                    _this.recombanner_item_one = _this.recombanner.data[0];
                    _this.recombanner_item_two = _this.recombanner.data[1];
                    _this.recombanner_item_three = _this.recombanner.data[2];
                    _this.messbanner = res.data.data.messbanner;
                    _this.message = res.data.data.message;
                    _this.messageId = res.data.data.message.id;
                    _this.recommend = res.data.data.recommend;
                    _this.todaymajor = res.data.data.todaymajor;
                    _this.newproduct = res.data.data.newproduct;
                    _this.gift = res.data.data.gift;
                    _this.brandtrace = res.data.data.brandtrace;
                    _this.onebrand = res.data.data.onebrand;
                    _this.starproduct = res.data.data.starproduct;
                    _this.buybrand = res.data.data.buybrand;
                    _this.opinionHasNew(_this.navigator.time);
                    for (var arr = 0; arr < _this.buybrand.data.length; arr++) {
                        if (arr % 2 == 0) _this.buybrand_right.push(_this.buybrand.data[arr]);else _this.buybrand_left.push(_this.buybrand.data[arr]);
                    }
                    storage.getItem('HOME_NEWS', function (ret) {
                        _this.showMessageNew = _this.messageId != ret.data;
                    });
                    if (_this.navigator.keyword != '' && _this.navigator.keyword.length > 0) {
                        var data = [];
                        for (var i = 0; i < _this.navigator.keyword.length; i++) {
                            data.push(_this.navigator.keyword[i].name);
                        }
                        _this.keywordMarquee = data;
                    }
                    if (_this.message.data != '' && _this.message.data.length > 0) {
                        var data = [];
                        for (var i = 0; i < _this.message.data.length; i++) {
                            data.push(_this.message.data[i].title);
                        }
                        _this.marqueeData = data;
                    }
                } else promptModule.showPrompt({ msg: res.data.msg, type: 'err' });
            });
        },
        opinionHasNew: function opinionHasNew(time) {
            var _this = this;
            storage.getItem('matter_new', function (event) {
                if (event.data == 'undefined') {
                    _this.has_new = true;
                } else {
                    if (event.data == time) _this.has_new = false;else _this.has_new = true;
                }
            });
        },
        goScroll: function goScroll() {
            this.isRefresh = true;
        },


        //跳转dc公告
        jumpToNoticeList: function jumpToNoticeList() {
            var _this = this;
            storage.setItem('HOME_NEWS', _this.messageId, function (res) {
                if (res.result == 'success') {
                    _this.showMessageNew = false;
                }
            });
            this.jumpTo2('home/home_noticeList', '', {});
        },
        clickGift: function clickGift(item) {
            item.num = parseInt(item.num) + 1;
            this.startWeb(item.name, item.url, item.sharelink, item.shareimg, item.sharetitle, item.sharecontent);
        },
        initPush: function initPush() {
            var _this = this;
            _this.md5("123不能为空", function (ret) {
                _this.Post(_this.api().push_bind, {
                    register_id: ret.register_id
                }, function (res) {
                    if (res.data.code == 0) {}
                });
            });
        },


        //Android scroller里面下拉刷新第一次进入有bug，通过代码自动滑动0.5px
        resetScroller: function resetScroller() {
            if (this.isRefresh) return;
            var _this = this;
            var name = weex.config.env.osName;
            if (name != '' && name == 'android') {
                //170为refresh高度
                var content = _this.$refs.content[0];
                var test = 170 - 0.5;
                dom.scrollToElement(content, { offset: -test });
            }
        }
    },
    updated: function updated() {
        if (this.isRefresh) return;
        this.resetScroller();
    },

    created: function created() {
        var _this = this;
        _this.getTitleHeight(_this);
        _this.getStatusBarHeight(_this);
        _this.getTopHeight(_this, false);
        _this.mainBarHeight(_this);
        _this.initPush();
        _this.fetch();
        event.onmessage = function (event) {
            if (!event.data) {
                return;
            }
            switch (event.data) {
                case _this.eventBusTag().REFRESH_MESSAGE:
                    _this.refreshMessage();
                    break;
                case _this.eventBusTag().REFRESH_COUPON:
                    _this.clearData();
                    _this.fetch();
                    break;
            }
        };
        eventAccount.onmessage = function (event) {
            if (!event.data) {
                return;
            }
            switch (event.data) {
                case _this.eventBusTag().REFRESH_HOME:
                    _this.initPush();
                    _this.clearData();
                    _this.fetch();
                    break;
            }
        };
    }
};

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
var __vue_template__ = __webpack_require__(8)
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
/* 6 */
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
/* 7 */
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
/* 8 */
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
var __vue_template__ = __webpack_require__(12)
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
/* 10 */
/***/ (function(module, exports) {

module.exports = {
  "line": {
    "width": "750",
    "height": "1.4",
    "backgroundColor": "#e2e2e2"
  }
}

/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["line"]
  })
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 13 */
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
__vue_options__.__file = "F:\\weex\\weex_develop\\abm_dev_weex\\abm-weexSource\\src\\components\\itemDecoration.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0d2621f4"
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
/* 14 */
/***/ (function(module, exports) {

module.exports = {
  "decoration": {
    "width": "750",
    "height": "20",
    "backgroundColor": "#f6f6f6"
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

exports.default = {};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["decoration"]
  })
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"],
    on: {
      "msgevent": function($event) {
        _vm.msgevent()
      }
    }
  }, [_c('div', {
    staticClass: ["title-bar"]
  }, [_c('div', {
    staticClass: ["search"],
    style: {
      height: _vm.titleHeight + 'px',
      marginTop: _vm.nativeBarHeight + 'px'
    }
  }, [_c('div', {
    staticClass: ["search_bt"]
  }, [_c('scrollVertical', {
    staticClass: ["scrollVertical"],
    attrs: {
      "value": _vm.keywordMarquee,
      "gravity": "center"
    },
    on: {
      "didSelect": _vm.didSelectTitle
    }
  }), _c('image', {
    staticClass: ["search-icon"],
    attrs: {
      "src": "assets://icon_default_search"
    }
  })], 1), _c('div', {
    staticClass: ["classify_bt"]
  }, [_c('image', {
    staticClass: ["classify"],
    attrs: {
      "src": "assets://icon_home_search_all"
    },
    on: {
      "click": function($event) {
        _vm.searchAll(_vm.navigator.searchlink)
      }
    }
  })])])]), _c('scroller', {
    ref: "scroller",
    staticClass: ["parent"],
    style: {
      top: _vm.height + 'px',
      bottom: _vm.bottom + 'px'
    },
    attrs: {
      "offsetAccuracy": "300",
      "showScrollbar": "false"
    },
    on: {
      "scroll": function($event) {
        _vm.goScroll()
      }
    }
  }, [_c('refresher', {
    on: {
      "loadingDown": _vm.loadingDown
    }
  }), _c('div', [_c('div', {
    ref: "content"
  }, [(_vm.banner.data && _vm.banner.data.length != 0) ? _c('slider', {
    staticClass: ["banner"],
    attrs: {
      "autoPlay": "true",
      "interval": "4000",
      "infinite": "true"
    }
  }, [_vm._l((_vm.banner.data), function(item, index) {
    return _c('div', {
      key: index
    }, [_c('image', {
      staticClass: ["banner_image"],
      attrs: {
        "src": item.image_url
      },
      on: {
        "click": function($event) {
          _vm.startWeb(item.sharetitle, item.url, item.sharelink, item.shareimg, item.sharetitle, item.sharedesc)
        }
      }
    })])
  }), (_vm.banner.data.length > 1) ? _c('indicator', {
    staticClass: ["indicator"]
  }) : _vm._e()], 2) : _vm._e()]), (_vm.banner_notice && _vm.banner_notice != null) ? _c('image', {
    staticClass: ["home_banner"],
    attrs: {
      "src": _vm.banner_notice.image_url
    },
    on: {
      "click": function($event) {
        _vm.clickBanner(_vm.banner_notice)
      }
    }
  }) : _vm._e(), _c('div', [(_vm.recombanner.data.length != 0) ? _c('div', {
    staticClass: ["home_recombanner"]
  }, [(_vm.recombanner_item_one) ? _c('image', {
    staticClass: ["recombanner_left"],
    attrs: {
      "src": _vm.recombanner_item_one.image_url
    },
    on: {
      "click": function($event) {
        _vm.startWeb(_vm.recombanner_item_one.title, _vm.recombanner_item_one.url, _vm.recombanner_item_one.sharelink, _vm.recombanner_item_one.shareimg, _vm.recombanner_item_one.sharetitle, _vm.recombanner_item_one.sharedesc)
      }
    }
  }) : _vm._e(), _c('div', {
    staticClass: ["recombanner_right"]
  }, [(_vm.recombanner_item_two) ? _c('image', {
    staticClass: ["recombanner_top"],
    attrs: {
      "src": _vm.recombanner_item_two.image_url
    },
    on: {
      "click": function($event) {
        _vm.startWeb(_vm.recombanner_item_two.title, _vm.recombanner_item_two.url, _vm.recombanner_item_two.sharelink, _vm.recombanner_item_two.shareimg, _vm.recombanner_item_two.sharetitle, _vm.recombanner_item_two.sharedesc)
      }
    }
  }) : _vm._e(), _c('div', {
    staticClass: ["recombanner_line"]
  }), (_vm.recombanner_item_three) ? _c('image', {
    staticClass: ["recombanner_top"],
    attrs: {
      "src": _vm.recombanner_item_three.image_url
    },
    on: {
      "click": function($event) {
        _vm.startWeb(_vm.recombanner_item_three.title, _vm.recombanner_item_three.url, _vm.recombanner_item_three.sharelink, _vm.recombanner_item_three.shareimg, _vm.recombanner_item_three.sharetitle, _vm.recombanner_item_three.sharedesc)
      }
    }
  }) : _vm._e()])]) : _vm._e()]), _c('div', [(_vm.navigator != null) ? _c('div', {
    staticClass: ["navigator"]
  }, [_c('div', {
    staticClass: ["navigator_item"],
    on: {
      "click": function($event) {
        _vm.clickCoupon()
      }
    }
  }, [_c('div', {
    staticClass: ["msg_count"]
  }, [_c('image', {
    staticClass: ["navigator_image"],
    attrs: {
      "src": "assets://icon_home_coupon"
    }
  }), (_vm.navigator.coupon > 0 && _vm.is_new) ? _c('text', {
    staticClass: ["is_new"]
  }) : _vm._e()]), _c('text', {
    staticClass: ["navigator_text"]
  }, [_vm._v("我的劵")])]), _c('div', {
    staticClass: ["navigator_item"],
    on: {
      "click": function($event) {
        _vm.clickStore()
      }
    }
  }, [_c('image', {
    staticClass: ["navigator_image"],
    attrs: {
      "src": "assets://icon_home_store"
    }
  }), _c('text', {
    staticClass: ["navigator_text"]
  }, [_vm._v("我的主页")])]), _c('div', {
    staticClass: ["navigator_item"],
    on: {
      "click": function($event) {
        _vm.clickMsg()
      }
    }
  }, [_c('div', {
    staticClass: ["msg_count"]
  }, [_c('image', {
    staticClass: ["navigator_image"],
    attrs: {
      "src": "assets://icon_home_msg"
    }
  }), (_vm.navigator.noreadcount > 0 && _vm.navigator.noreadcount < 100) ? _c('text', {
    staticClass: ["count"]
  }, [_vm._v(_vm._s(_vm.navigator.noreadcount))]) : _vm._e(), (_vm.navigator.noreadcount > 0 && _vm.navigator.noreadcount >= 100) ? _c('text', {
    staticClass: ["_count"]
  }, [_vm._v("99+")]) : _vm._e()]), _c('text', {
    staticClass: ["navigator_text"]
  }, [_vm._v("我的消息")])]), _c('div', {
    staticClass: ["navigator_item"],
    on: {
      "click": function($event) {
        _vm.clickMatter()
      }
    }
  }, [_c('div', {
    staticClass: ["msg_count"]
  }, [_c('image', {
    staticClass: ["navigator_image"],
    attrs: {
      "src": "assets://icon_home_matter"
    }
  }), (_vm.has_new) ? _c('text', {
    staticClass: ["is_new"]
  }) : _vm._e()]), _c('text', {
    staticClass: ["navigator_text"]
  }, [_vm._v("用户口碑")])])]) : _vm._e()]), _c('div', _vm._l((_vm.messbanner.data), function(item) {
    return (_vm.messbanner.data.length != 0 || _vm.navigator.level_id != 1) ? _c('div', {
      staticClass: ["messbanner"]
    }, [_c('image', {
      staticClass: ["messbanner_image"],
      style: {
        height: item.height / item.width * 750 + 'px'
      },
      attrs: {
        "src": item.image_url
      },
      on: {
        "click": function($event) {
          _vm.startWeb(item.title, item.url, item.sharelink, item.shareimg, item.sharetitle, item.sharedesc)
        }
      }
    })]) : _vm._e()
  })), _c('div', [(_vm.message.data.length > 0) ? _c('div', {
    staticClass: ["dc_message"],
    on: {
      "click": function($event) {
        _vm.jumpToNoticeList()
      }
    }
  }, [_c('image', {
    staticClass: ["message_image"],
    attrs: {
      "src": "assets://icon_abm"
    }
  }), _c('scrollVertical', {
    staticClass: ["messageSlideView"],
    attrs: {
      "value": _vm.marqueeData,
      "gravity": "left"
    },
    on: {
      "didSelect": function($event) {
        _vm.jumpToNoticeList()
      }
    }
  }), (_vm.showMessageNew) ? _c('image', {
    staticClass: ["message_new"],
    attrs: {
      "src": "assets://icon_new"
    }
  }) : _vm._e(), _c('text', {
    staticClass: ["message_more"]
  }, [_vm._v("更多")])], 1) : _vm._e()]), _c('div', [(_vm.recommend.data.length != 0) ? _c('div', {
    staticClass: ["recommend"]
  }, [_c('div', {
    staticClass: ["module_title"],
    on: {
      "click": function($event) {
        _vm.jumpModule(1, _vm.recommend.title)
      }
    }
  }, [_c('text', {
    staticClass: ["module_title_text"]
  }, [_vm._v(_vm._s(_vm.recommend.title))]), _c('image', {
    staticClass: ["module_title_image"],
    attrs: {
      "src": "assets://home_title_more"
    }
  })]), _c('div', {
    staticClass: ["box"]
  }, _vm._l((_vm.recommend.data), function(item, index) {
    return _c('div', {
      key: index,
      ref: "index",
      refInFor: true,
      staticClass: ["recommend_cell"]
    }, [_c('div', {
      staticClass: ["recommend_item"],
      on: {
        "click": function($event) {
          _vm.jumpGD(item.goods_id, item.url, '')
        }
      }
    }, [_c('div', {
      staticClass: ["goods_tag"]
    }, [_c('image', {
      staticClass: ["recommend_image"],
      attrs: {
        "src": item.goods_image
      }
    }), _c('div', {
      staticClass: ["tag_position"]
    }, [_c('text', {
      staticClass: ["position_text"]
    }, [_vm._v("TOP " + _vm._s(index + 1))])]), _c('div', {
      staticClass: ["item_goods_tag"]
    }, _vm._l((item.goods_tag), function(tags, i) {
      return (item.goods_tag.length != 0) ? _c('div', {
        key: i
      }, [_c('div', {
        staticClass: ["tag"],
        style: {
          'background-color': tags.color
        }
      }, [_c('text', {
        staticClass: ["text"]
      }, [_vm._v(_vm._s(tags.title))])])]) : _vm._e()
    }))]), _c('text', {
      staticClass: ["recommend_name"]
    }, [_vm._v(_vm._s(item.name))]), _c('div', {
      staticClass: ["recommend_price"]
    }, [(item.price) ? _c('text', {
      staticClass: ["price"]
    }, [_vm._v("优惠价 ¥" + _vm._s(item.disprice))]) : _vm._e(), (item.disprice) ? _c('text', {
      staticClass: ["disprice"]
    }, [_vm._v("售价 ¥" + _vm._s(item.price))]) : _vm._e()])])])
  }))]) : _vm._e()]), _c('div', [(_vm.todaymajor.data.length != 0) ? _c('div', {
    staticClass: ["todaymajor"]
  }, [_c('div', {
    staticClass: ["module_title"]
  }, [_c('text', {
    staticClass: ["module_title_text"]
  }, [_vm._v(_vm._s(_vm.todaymajor.title))])]), _vm._l((_vm.todaymajor.data), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["todaymajor_item"]
    }, [_c('line'), _c('div', {
      staticClass: ["todaymajor_content"],
      on: {
        "click": function($event) {
          _vm.jumpGD(item.goods_id, item.url, '')
        }
      }
    }, [_c('image', {
      staticClass: ["todaymajor_image"],
      attrs: {
        "src": item.goods_image
      }
    }), _c('div', {
      staticClass: ["todaymajor_vertical"]
    }, [_c('text', {
      staticClass: ["todaymajor_title"]
    }, [_vm._v(_vm._s(item.name))]), _c('div', {
      staticClass: ["item_tag"]
    }, _vm._l((item.goods_tag), function(tags, i) {
      return (item.goods_tag.length != 0) ? _c('div', {
        key: i
      }, [_c('div', {
        staticClass: ["tag"],
        style: {
          'background-color': tags.color
        }
      }, [_c('text', {
        staticClass: ["text"]
      }, [_vm._v(_vm._s(tags.title))])])]) : _vm._e()
    })), _c('div', {
      staticClass: ["todaymajor_price"]
    }, [(item.price) ? _c('text', {
      staticClass: ["price"]
    }, [_vm._v("优惠价 ¥" + _vm._s(item.disprice))]) : _vm._e(), (item.disprice) ? _c('text', {
      staticClass: ["disprice"]
    }, [_vm._v("售价 ¥" + _vm._s(item.price))]) : _vm._e()])])])], 1)
  })], 2) : _vm._e()]), _c('div', [(_vm.onebrand.data.length != 0) ? _c('div', {
    staticClass: ["onebrand"]
  }, [_c('div', {
    staticClass: ["module_title"]
  }, [_c('text', {
    staticClass: ["module_title_text"]
  }, [_vm._v(_vm._s(_vm.onebrand.title))])]), _c('line'), _c('div', {
    staticClass: ["onebrand_box"]
  }, _vm._l((_vm.onebrand.data), function(item, y) {
    return _c('div', {
      key: y,
      ref: "y",
      refInFor: true,
      staticClass: ["onebrand_cell"]
    }, [_c('div', {
      staticClass: ["onebrand_item"],
      on: {
        "click": function($event) {
          _vm.jumpBrand(item.name, item.id, item.url)
        }
      }
    }, [_c('image', {
      staticClass: ["onebrand_image"],
      attrs: {
        "resize": "contain",
        "src": item.image_url
      }
    }), (item.note) ? _c('text', {
      staticClass: ["onebrand_name"]
    }, [_vm._v(_vm._s(item.note))]) : _vm._e()])])
  }))], 1) : _vm._e()]), _c('div', [(_vm.gift.data.length != 0) ? _c('div', {
    staticClass: ["gift"]
  }, [_c('div', {
    staticClass: ["module_title"],
    on: {
      "click": function($event) {
        _vm.jumpModule(2, _vm.gift.title)
      }
    }
  }, [_c('text', {
    staticClass: ["module_title_text"]
  }, [_vm._v(_vm._s(_vm.gift.title))]), _c('image', {
    staticClass: ["module_title_image"],
    attrs: {
      "src": "assets://home_title_more"
    }
  })]), _c('scroller', {
    staticClass: ["scroller"],
    attrs: {
      "scrollDirection": "horizontal",
      "showScrollbar": "false"
    }
  }, _vm._l((_vm.gift.data), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["gift_item"]
    }, [_c('div', {
      on: {
        "click": function($event) {
          _vm.jumpGD(item.goods_id, item.url, '')
        }
      }
    }, [_c('div', {
      staticClass: ["goods_tag"]
    }, [_c('image', {
      staticClass: ["gift_image"],
      attrs: {
        "src": item.goods_image
      }
    }), _c('div', {
      staticClass: ["item_goods_tag"]
    }, _vm._l((item.goods_tag), function(tags, i) {
      return (item.goods_tag.length != 0) ? _c('div', {
        key: i
      }, [_c('div', {
        staticClass: ["tag"],
        style: {
          'background-color': tags.color
        }
      }, [_c('text', {
        staticClass: ["text"]
      }, [_vm._v(_vm._s(tags.title))])])]) : _vm._e()
    }))]), _c('text', {
      staticClass: ["gift_name"]
    }, [_vm._v(_vm._s(item.name))]), _c('div', {
      staticClass: ["gift_price"]
    }, [(item.shareprice) ? _c('text', {
      staticClass: ["price"]
    }, [_vm._v(_vm._s(item.title) + " ¥" + _vm._s(item.shareprice))]) : _vm._e(), (item.disprice) ? _c('text', {
      staticClass: ["disprice"]
    }, [_vm._v("售价 ¥" + _vm._s(item.price))]) : _vm._e()])])])
  }))]) : _vm._e()]), _c('div', [(_vm.newproduct.data.length != 0) ? _c('div', {
    staticClass: ["recommend"]
  }, [_c('div', {
    staticClass: ["module_title"],
    on: {
      "click": function($event) {
        _vm.jumpModule(3, _vm.newproduct.title)
      }
    }
  }, [_c('text', {
    staticClass: ["module_title_text"]
  }, [_vm._v(_vm._s(_vm.newproduct.title))]), _c('image', {
    staticClass: ["module_title_image"],
    attrs: {
      "src": "assets://home_title_more"
    }
  })]), _c('div', {
    staticClass: ["box"]
  }, _vm._l((_vm.newproduct.data), function(item, index) {
    return _c('div', {
      key: index,
      ref: "index",
      refInFor: true,
      staticClass: ["recommend_cell"]
    }, [_c('div', {
      staticClass: ["recommend_item"],
      on: {
        "click": function($event) {
          _vm.jumpGD(item.goods_id, item.url, '')
        }
      }
    }, [_c('div', {
      staticClass: ["goods_tag"]
    }, [_c('image', {
      staticClass: ["recommend_image"],
      attrs: {
        "src": item.goods_image
      }
    }), _c('div', {
      staticClass: ["item_goods_tag"]
    }, _vm._l((item.goods_tag), function(tags, i) {
      return (item.goods_tag.length != 0) ? _c('div', {
        key: i
      }, [_c('div', {
        staticClass: ["tag"],
        style: {
          'background-color': tags.color
        }
      }, [_c('text', {
        staticClass: ["text"]
      }, [_vm._v(_vm._s(tags.title))])])]) : _vm._e()
    }))]), _c('text', {
      staticClass: ["recommend_name"]
    }, [_vm._v(_vm._s(item.name))]), _c('div', {
      staticClass: ["recommend_price"]
    }, [(item.price) ? _c('text', {
      staticClass: ["price"]
    }, [_vm._v("优惠价 ¥" + _vm._s(item.disprice))]) : _vm._e(), (item.disprice) ? _c('text', {
      staticClass: ["disprice"]
    }, [_vm._v("售价 ¥" + _vm._s(item.price))]) : _vm._e()])])])
  }))]) : _vm._e()]), _c('div', [(_vm.starproduct.data.length != 0) ? _c('div', {
    staticClass: ["todaymajor"]
  }, [_c('div', {
    staticClass: ["module_title"],
    on: {
      "click": function($event) {
        _vm.jumpModule(4, _vm.starproduct.title)
      }
    }
  }, [_c('text', {
    staticClass: ["module_title_text"]
  }, [_vm._v(_vm._s(_vm.starproduct.title))]), _c('image', {
    staticClass: ["module_title_image"],
    attrs: {
      "src": "assets://home_title_more"
    }
  })]), _vm._l((_vm.starproduct.data), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["todaymajor_item"]
    }, [_c('line'), _c('div', {
      staticClass: ["todaymajor_content"],
      on: {
        "click": function($event) {
          _vm.startWeb(item.name, item.url, item.sharelink, item.shareimg, item.title, item.sharedesc)
        }
      }
    }, [_c('image', {
      staticClass: ["todaymajor_image"],
      attrs: {
        "src": item.goods_image
      }
    }), _c('div', {
      staticClass: ["todaymajor_vertical"]
    }, [_c('text', {
      staticClass: ["todaymajor_title"]
    }, [_vm._v(_vm._s(item.name))]), _c('div', {
      staticClass: ["item_tag"]
    }, _vm._l((item.goods_tag), function(tags, i) {
      return (item.goods_tag.length != 0) ? _c('div', {
        key: i
      }, [_c('div', {
        staticClass: ["tag"],
        style: {
          'background-color': tags.color
        }
      }, [_c('text', {
        staticClass: ["text"]
      }, [_vm._v(_vm._s(tags.title))])])]) : _vm._e()
    })), _c('div', {
      staticClass: ["todaymajor_price"]
    }, [(item.price) ? _c('text', {
      staticClass: ["price"]
    }, [_vm._v("优惠价 ¥" + _vm._s(item.disprice))]) : _vm._e(), (item.disprice) ? _c('text', {
      staticClass: ["disprice"]
    }, [_vm._v("售价 ¥" + _vm._s(item.price))]) : _vm._e()])])])], 1)
  })], 2) : _vm._e()]), _c('div', [(_vm.brandtrace.data.length != 0) ? _c('div', {
    staticClass: ["gift"]
  }, [_c('div', {
    staticClass: ["module_title"],
    on: {
      "click": function($event) {
        _vm.jumpModule(5, _vm.brandtrace.title)
      }
    }
  }, [_c('text', {
    staticClass: ["module_title_text"]
  }, [_vm._v(_vm._s(_vm.brandtrace.title))]), _c('image', {
    staticClass: ["module_title_image"],
    attrs: {
      "src": "assets://home_title_more"
    }
  })]), _c('scroller', {
    staticClass: ["scroller"],
    attrs: {
      "scrollDirection": "horizontal",
      "showScrollbar": "false"
    }
  }, _vm._l((_vm.brandtrace.data), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["gift_item"]
    }, [_c('div', {
      on: {
        "click": function($event) {
          _vm.clickGift(item)
        }
      }
    }, [_c('div', {
      staticClass: ["goods_tag"]
    }, [_c('image', {
      staticClass: ["gift_image"],
      attrs: {
        "src": item.goods_image
      }
    }), _c('div', {
      staticClass: ["left_image_bt"]
    }, [_c('image', {
      staticClass: ["left_image"],
      attrs: {
        "src": "assets://icon_home_read"
      }
    }), _c('text', {
      staticClass: ["left_title"]
    }, [_vm._v(_vm._s(item.num))])])]), _c('text', {
      staticClass: ["brandtrace_name"]
    }, [_vm._v(_vm._s(item.name))])])])
  }))]) : _vm._e()]), _c('div', [(_vm.buybrand.data.length != 0) ? _c('div', {
    staticClass: ["buybrand"]
  }, [_c('div', {
    staticClass: ["module_title"]
  }, [_c('text', {
    staticClass: ["module_title_text"]
  }, [_vm._v(_vm._s(_vm.buybrand.title))])]), _c('div', {
    staticClass: ["buybrand_box"]
  }, [_c('div', {
    staticClass: ["buybrand_left"]
  }, [(_vm.buybrand.url) ? _c('div', {
    staticClass: ["goods_event"],
    on: {
      "click": function($event) {
        _vm.jumpGD(_vm.buybrand.goods_id, _vm.buybrand.url, _vm.buybrand.name)
      }
    }
  }, [_c('image', {
    style: {
      width: 363 + 'px',
      height: 363 * _vm.buybrand.height / _vm.buybrand.width + 'px'
    },
    attrs: {
      "src": _vm.buybrand.image_url
    }
  })]) : _vm._e(), _vm._l((_vm.buybrand_left), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["buybrand_item"]
    }, [_c('div', {
      on: {
        "click": function($event) {
          _vm.jumpGD(item.goods_id, item.url, '')
        }
      }
    }, [_c('div', {
      staticClass: ["buybrand_bot"]
    }), _c('div', {
      staticClass: ["goods_tag"]
    }, [_c('image', {
      staticClass: ["buybrand_image"],
      attrs: {
        "src": item.goods_image
      }
    }), _c('div', {
      staticClass: ["line"]
    }), _c('div', {
      staticClass: ["item_goods_tag"]
    }, _vm._l((item.goods_tag), function(tags, i) {
      return (item.goods_tag.length != 0) ? _c('div', {
        key: i
      }, [_c('div', {
        staticClass: ["tag"],
        style: {
          'background-color': tags.color
        }
      }, [_c('text', {
        staticClass: ["text"]
      }, [_vm._v(_vm._s(tags.title))])])]) : _vm._e()
    }))]), _c('div', {
      staticClass: ["buybrand_title"]
    }, [_c('text', {
      staticClass: ["buybrand_name"]
    }, [_vm._v(_vm._s(item.name))]), _c('div', {
      staticClass: ["note_tag"]
    }, [(item.note == '多') ? _c('text', {
      staticClass: ["tag_text"],
      style: {
        'background-color': _vm.color1,
        height: 34 + 'px',
        width: 34 + 'px'
      }
    }, [_vm._v(_vm._s(item.note))]) : _vm._e(), (item.note == '少') ? _c('text', {
      staticClass: ["tag_text"],
      style: {
        'background-color': _vm.color2,
        height: 34 + 'px',
        width: 34 + 'px'
      }
    }, [_vm._v(_vm._s(item.note))]) : _vm._e(), (item.note == '缺') ? _c('text', {
      staticClass: ["tag_text"],
      style: {
        'background-color': _vm.color3,
        height: 34 + 'px',
        width: 34 + 'px'
      }
    }, [_vm._v(_vm._s(item.note))]) : _vm._e(), (item.note.length > 1) ? _c('text', {
      staticClass: ["tag_text"],
      style: {
        'background-color': _vm.color4,
        height: 34 + 'px',
        width: 68 + 'px'
      }
    }, [_vm._v(_vm._s(item.note))]) : _vm._e()])]), _c('div', {
      staticClass: ["buybrand_price"]
    }, [(item.price) ? _c('text', {
      staticClass: ["price"]
    }, [_vm._v("优惠价 ¥" + _vm._s(item.disprice))]) : _vm._e(), (item.disprice) ? _c('text', {
      staticClass: ["disprice"]
    }, [_vm._v("售价 ¥" + _vm._s(item.price))]) : _vm._e()])])])
  })], 2), _c('div', {
    staticClass: ["buybrand_height"]
  }), _c('div', {
    staticClass: ["buybrand_right"]
  }, _vm._l((_vm.buybrand_right), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["buybrand_item"]
    }, [_c('div', {
      staticClass: ["buybrand_bot"]
    }), _c('div', {
      on: {
        "click": function($event) {
          _vm.jumpGD(item.goods_id, item.url, '')
        }
      }
    }, [_c('div', {
      staticClass: ["goods_tag"]
    }, [_c('image', {
      staticClass: ["buybrand_image"],
      attrs: {
        "src": item.goods_image
      }
    }), _c('div', {
      staticClass: ["line"]
    }), _c('div', {
      staticClass: ["item_goods_tag"]
    }, _vm._l((item.goods_tag), function(tags, i) {
      return (item.goods_tag.length != 0) ? _c('div', {
        key: i
      }, [_c('div', {
        staticClass: ["tag"],
        style: {
          'background-color': tags.color
        }
      }, [_c('text', {
        staticClass: ["text"]
      }, [_vm._v(_vm._s(tags.title))])])]) : _vm._e()
    }))]), _c('div', {
      staticClass: ["buybrand_title"]
    }, [_c('text', {
      staticClass: ["buybrand_name"]
    }, [_vm._v(_vm._s(item.name))]), _c('div', {
      staticClass: ["note_tag"]
    }, [(item.note == '多') ? _c('text', {
      staticClass: ["tag_text"],
      style: {
        'background-color': _vm.color1,
        height: 34 + 'px',
        width: 34 + 'px'
      }
    }, [_vm._v(_vm._s(item.note))]) : _vm._e(), (item.note == '少') ? _c('text', {
      staticClass: ["tag_text"],
      style: {
        'background-color': _vm.color2,
        height: 34 + 'px',
        width: 34 + 'px'
      }
    }, [_vm._v(_vm._s(item.note))]) : _vm._e(), (item.note == '缺') ? _c('text', {
      staticClass: ["tag_text"],
      style: {
        'background-color': _vm.color3,
        height: 34 + 'px',
        width: 34 + 'px'
      }
    }, [_vm._v(_vm._s(item.note))]) : _vm._e(), (item.note.length > 1) ? _c('text', {
      staticClass: ["tag_text"],
      style: {
        'background-color': _vm.color4,
        height: 34 + 'px',
        width: 68 + 'px'
      }
    }, [_vm._v(_vm._s(item.note))]) : _vm._e()])]), _c('div', {
      staticClass: ["buybrand_price"]
    }, [(item.price) ? _c('text', {
      staticClass: ["price"]
    }, [_vm._v("优惠价 ¥" + _vm._s(item.disprice))]) : _vm._e(), (item.disprice) ? _c('text', {
      staticClass: ["disprice"]
    }, [_vm._v("售价 ¥" + _vm._s(item.price))]) : _vm._e()])])])
  }))])]) : _vm._e()])])], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = __webpack_require__(0);

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
/* 19 */
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
/* 20 */
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