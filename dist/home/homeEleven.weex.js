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


var _homeEleven = __webpack_require__(2);

var _homeEleven2 = _interopRequireDefault(_homeEleven);

var _mixin = __webpack_require__(18);

var _mixin2 = _interopRequireDefault(_mixin);

var _utils = __webpack_require__(0);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.mixin(_mixin2.default);
_homeEleven2.default.el = '#root';
new Vue(_homeEleven2.default);

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
__vue_options__.__file = "F:\\weex\\weex_develop\\abm_dev_weex\\abm-weexSource\\src\\pages\\home\\homeEleven.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-61093ed0"
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
  "list_right_price": {
    "width": "340",
    "flexDirection": "row",
    "justifyContent": "flex-start",
    "alignItems": "center"
  },
  "buying": {
    "color": "#cf1126",
    "fontSize": "26",
    "lineHeight": "38"
  },
  "used": {
    "color": "#666666",
    "fontSize": "22",
    "lineHeight": "34",
    "textDecoration": "line-through",
    "textDecorationColor": "#666666"
  },
  "retail": {
    "color": "#666666",
    "fontSize": "22",
    "lineHeight": "34"
  },
  "new_banner": {
    "width": "702",
    "height": "90"
  },
  "new_banner-div": {
    "width": "750",
    "minHeight": "114",
    "backgroundColor": "#ffffff",
    "paddingBottom": "20",
    "paddingLeft": "24",
    "paddingRight": "24"
  },
  "new_banner-image": {
    "width": "702",
    "height": "140",
    "marginBottom": "10"
  },
  "parent": {
    "position": "absolute",
    "left": 0,
    "right": 0,
    "backgroundColor": "#ffffff"
  },
  "search": {
    "width": "750",
    "backgroundColor": "#ffffff",
    "flexDirection": "row",
    "paddingBottom": "10",
    "justifyContent": "space-around",
    "alignItems": "center"
  },
  "search-title": {
    "position": "absolute",
    "width": "750",
    "flexDirection": "row",
    "paddingBottom": "10",
    "justifyContent": "space-around",
    "alignItems": "center"
  },
  "msg_count": {
    "width": "87",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "position": "relative"
  },
  "top_message": {
    "width": "33",
    "height": "33"
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
    "right": "13"
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
    "right": "4"
  },
  "search_bt": {
    "width": "580",
    "height": "60",
    "borderRadius": "10",
    "alignItems": "center"
  },
  "classify_image": {
    "width": "32",
    "height": "26",
    "marginLeft": "29",
    "marginRight": "24"
  },
  "scrollVertical": {
    "width": "580",
    "height": "60",
    "borderRadius": "10"
  },
  "search-icon": {
    "width": "26",
    "height": "26",
    "marginLeft": "20",
    "marginTop": "-40",
    "position": "absolute"
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
  "indicator_brand": {
    "width": "750",
    "height": "40",
    "itemColor": "#666666",
    "itemSelectedColor": "#333333",
    "itemSize": "15",
    "position": "absolute",
    "bottom": "-20",
    "right": "0"
  },
  "line-item": {
    "width": "750",
    "height": "1",
    "backgroundColor": "#e1e1e1"
  },
  "line_space": {
    "width": "750",
    "height": "20",
    "backgroundColor": "#f6f6f6"
  },
  "buybrand": {
    "marginTop": "20",
    "width": "750",
    "minHeight": "120",
    "backgroundColor": "#ffffff"
  },
  "buybrand_image": {
    "width": "340",
    "height": "340"
  },
  "line": {
    "width": "340",
    "height": "1.4",
    "backgroundColor": "#e1e1e1"
  },
  "buybrand_item": {
    "width": "340",
    "marginTop": "24",
    "borderWidth": "1.4",
    "borderColor": "#E1E1E1",
    "backgroundColor": "#ffffff"
  },
  "buybrand_title": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "paddingLeft": "17",
    "paddingTop": "16"
  },
  "buybrand_item_goods_tag": {
    "width": "340",
    "paddingLeft": "17",
    "flexDirection": "row",
    "paddingTop": "11"
  },
  "buybrand_name": {
    "maxWidth": "270",
    "fontSize": "22",
    "color": "#333333",
    "lineHeight": "32",
    "lines": 2
  },
  "note_tag": {
    "marginRight": "8"
  },
  "buybrand_price": {
    "flexDirection": "row",
    "paddingLeft": "17",
    "paddingTop": "22",
    "paddingBottom": "19"
  },
  "buybrand_height": {
    "backgroundColor": "#ffffff",
    "width": "22"
  },
  "wrapper": {
    "width": "750",
    "backgroundColor": "#f6f6f6"
  },
  "title-bar": {
    "width": "750",
    "backgroundColor": "#ffffff",
    "opacity": 1
  },
  "home_top_tag": {
    "width": "750",
    "height": "78",
    "backgroundColor": "#ffffff",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "tag_content": {
    "flexDirection": "row",
    "justifyContent": "space-around",
    "alignItems": "center"
  },
  "left_content_image": {
    "width": "25",
    "height": "25"
  },
  "right_content_title": {
    "height": "78",
    "lineHeight": "78",
    "color": "#cf1126",
    "fontSize": "26",
    "paddingRight": "20",
    "textAlign": "center"
  },
  "right_arrows_image": {
    "width": "32",
    "height": "32"
  },
  "super_home_banner": {
    "width": "750",
    "paddingLeft": "24",
    "paddingRight": "24",
    "backgroundColor": "#ffffff"
  },
  "home_banner": {
    "width": "702",
    "height": "230",
    "marginBottom": "28",
    "backgroundColor": "#f6f6f6"
  },
  "div-banner": {
    "width": "750",
    "height": "500",
    "backgroundColor": "#f6f6f6"
  },
  "banner": {
    "width": "750",
    "height": "500"
  },
  "banner_image": {
    "width": "750",
    "height": "500"
  },
  "home_recombanner": {
    "width": "702",
    "height": "370",
    "flexDirection": "row",
    "justifyContent": "flex-start",
    "backgroundColor": "#f6f6f6",
    "marginLeft": "24",
    "marginRight": "24",
    "marginBottom": "20"
  },
  "recombanner_left": {
    "width": "342",
    "height": "370"
  },
  "recombanner_right": {
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "backgroundColor": "#ffffff",
    "height": "370",
    "width": "360"
  },
  "right_top": {
    "width": "354",
    "height": "160",
    "marginLeft": "6"
  },
  "right_bottom": {
    "width": "360",
    "height": "204",
    "flexDirection": "row",
    "backgroundColor": "#ffffff",
    "justifyContent": "flex-start",
    "marginTop": "6"
  },
  "recombanner_top": {
    "width": "354",
    "height": "160"
  },
  "recombanner_bottom": {
    "width": "174",
    "height": "204",
    "marginLeft": "6"
  },
  "content_title": {
    "lines": 1,
    "fontSize": "28",
    "color": "#333333"
  },
  "content_intro": {
    "width": "402",
    "fontSize": "24",
    "color": "#666666",
    "lines": 2
  },
  "check_details": {
    "fontSize": "20",
    "color": "#bdbdbd"
  },
  "top_banner_bg": {
    "width": "750",
    "height": "300",
    "paddingRight": "24",
    "paddingLeft": "24",
    "backgroundColor": "#ffffff"
  },
  "top_banner": {
    "width": "702",
    "height": "300"
  },
  "recommend": {
    "width": "750",
    "minHeight": "120",
    "backgroundColor": "#ffffff"
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
    "fontSize": "36",
    "color": "#333333",
    "lineHeight": "120",
    "textAlign": "center"
  },
  "module_title_image": {
    "width": "16",
    "height": "29",
    "position": "absolute",
    "right": "34",
    "top": "46"
  },
  "recommend_image": {
    "width": "240",
    "height": "240",
    "marginLeft": "24"
  },
  "right_item": {
    "width": "411",
    "height": "240",
    "marginLeft": "30",
    "justifyContent": "flex-start"
  },
  "recommend_name": {
    "lines": 2,
    "fontSize": "28",
    "lineHeight": "40",
    "color": "#333333"
  },
  "recommend_price": {
    "paddingTop": "38",
    "flexDirection": "column"
  },
  "brandtrace_name": {
    "width": "396.36",
    "lines": 2,
    "paddingLeft": "10",
    "fontSize": "26",
    "color": "#333333"
  },
  "price": {
    "fontSize": "22",
    "color": "#CF1126",
    "paddingBottom": "4"
  },
  "disprice": {
    "fontSize": "22",
    "color": "#666666"
  },
  "market": {
    "color": "#666666",
    "fontSize": "22",
    "textDecoration": "line-through",
    "textDecorationColor": "#666666"
  },
  "buy_disprice": {
    "fontSize": "20",
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
    "width": "422",
    "flexDirection": "row"
  },
  "item_goods_tag": {
    "width": "392",
    "flexDirection": "row",
    "marginTop": "21"
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
    "minWidth": "70",
    "paddingTop": "3",
    "paddingBottom": "3",
    "paddingLeft": "6",
    "paddingRight": "6",
    "marginRight": "10",
    "alignItems": "center",
    "borderRadius": "4"
  },
  "tag_text": {
    "borderRadius": "4",
    "fontSize": "22",
    "color": "#FFFFFF",
    "lineHeight": "30",
    "textAlign": "center"
  },
  "text": {
    "textAlign": "center",
    "fontSize": "22",
    "color": "#FFFFFF"
  },
  "onebrand": {
    "width": "750",
    "height": "520",
    "marginTop": "20",
    "backgroundColor": "#ffffff"
  },
  "onebrand_image": {
    "width": "250",
    "height": "80"
  },
  "onebrand_name": {
    "fontSize": "20",
    "lines": 1,
    "paddingTop": "8",
    "color": "#333333",
    "textAlign": "center",
    "paddingBottom": "40"
  },
  "gift": {
    "width": "750",
    "backgroundColor": "#ffffff"
  },
  "scroller": {
    "width": "750",
    "height": "400",
    "flexDirection": "row",
    "paddingRight": "8"
  },
  "gift_image": {
    "width": "364",
    "height": "240"
  },
  "gift_name": {
    "width": "364",
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
    "width": "750",
    "backgroundColor": "#ffffff",
    "paddingRight": "60",
    "paddingLeft": "25"
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
    "width": "750",
    "height": "300",
    "paddingTop": "30",
    "paddingBottom": "30",
    "flexDirection": "row",
    "justifyContent": "flex-start"
  },
  "onebrand_item": {
    "width": "250"
  },
  "gift_item": {
    "width": "364",
    "marginLeft": "18"
  },
  "buybrand_box": {
    "width": "750",
    "paddingLeft": "24",
    "paddingRight": "24",
    "flexDirection": "row",
    "justifyContent": "center"
  },
  "buybrand_left": {
    "flexDirection": "column",
    "width": "340",
    "paddingTop": "22"
  },
  "buybrand_right": {
    "flexDirection": "column",
    "width": "340"
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            hide_title_bar: true,
            title_bar_opacity: 0,
            showMessageNew: false,
            isRefresh: false,
            height: height,
            brandPage: 1,
            bottom: bottom,
            nativeBarHeight: nativeBarHeight,
            titleHeight: titleHeight,
            navigator: {},
            marqueeData: [],
            keywordMarquee: [],
            new_banner: {},
            discount_banner: {},
            banner: {
                data: []
            },
            banner_notice: {},
            recombanner: {
                data: [],
                title: ''
            },
            recombanner_item_one: null,
            recombanner_item_two: null,
            recombanner_item_three: null,
            noreadcount: 0,
            sub1: {
                data: [],
                title: ''
            },

            sub2: {
                data: [],
                title: ''
            },
            sub3: {
                data: {},
                title: ''
            },
            sub4: {
                data: [],
                title: ''
            },
            sub5: {
                data: [],
                title: ''
            },
            sub6: {
                data: [],
                title: ''
            },
            sub7: {
                data: [],
                title: ''
            },
            sub8: {
                data: [],
                title: ''
            },
            sub9: {
                data: [],
                title: ''
            },
            sub10: {
                data: [],
                title: ''
            },
            sub11: {
                data: [],
                title: ''
            },
            buybrand: {
                data: [],
                title: ''
            },
            buybrand_left: [],
            buybrand_right: []
        };
    },

    methods: {
        msgevent: function msgevent() {
            this.refreshMessage();
        },
        refreshMessage: function refreshMessage() {
            var _this = this;
            _this.Get(_this.api().message_home_unread, {}, function (res) {
                if (res.data.code == 0) _this.noreadcount = res.data.data;
            });
        },
        loadingDown: function loadingDown() {
            this.clearData();
            this.fetch();
        },
        clearData: function clearData() {
            this.navigator = {};
            this.banner.data = [];
            this.banner_notice = {};
            this.new_banner = {}, this.recombanner.data = [];
            this.sub1.data = [];
            this.sub2.data = [];
            this.sub3.data = {};
            this.sub4.data = [];
            this.sub5.data = [];
            this.sub6.data = [];
            this.sub7.data = [];
            this.sub8.data = [];
            this.sub9.data = [];
            this.sub10.data = [];
            this.sub11.data = [];
            this.buybrand.data = [];
            this.buybrand_right = [];
            this.buybrand_left = [];
            this.discount_banner = {};
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
            if (url == '') return;
            if (url.indexOf('/goods/detail/') != -1) {
                var id = parseInt(url.split('\\?')[0].split('/goods/detail/')[1]);
                if (this.compareVersion(weex.config.env.appVersion, '3.4.0')) {
                    this.jumpTo2('shop/goodsDetailsParent', '', { goods_id: id });
                } else if (this.compareVersion(weex.config.env.appVersion, '3.0.7')) {
                    this.jumpTo2('shop/goodsDetails', '', { title: title, goods_id: id });
                } else titleBar.startWeb({
                    title: title,
                    url: url,
                    shareUrl: shareUrl,
                    shareImg: shareImg,
                    shareTitle: shareTitle,
                    shareDes: shareDes });
            } else if (url.indexOf('app/order/discounts?type=') != -1) {
                var id = url.substring(url.indexOf('=') + 1, url.length);
                this.jumpTo2('home/superWelfare', '', { id: id });
            } else if (url.indexOf('app/brand') != -1) {
                var id = url.substring(url.indexOf('=') + 1, url.length);
                if (this.compareVersion(weex.config.env.appVersion, '3.2.2')) {
                    this.jumpTo2('classify/brandDetail', '', { title: title, brandId: id });
                } else {
                    titleBar.startWeb({
                        title: title,
                        url: url
                    });
                }
            } else if (url.indexOf('material/materialList') != -1) {
                this.jumpTo2('material/materialList', '', {});
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
        tagAction: function tagAction() {
            this.jumpTo2('web/webMovieView', '', { url: encodeURIComponent('https://wap.abmau.com/recommend_list?article_id=336'), title: '八大品牌方为双十一打Call' });
        },
        clickStore: function clickStore() {
            this.jumpTo2('personal/personalStore/personalStore', '', {}, '预览');
        },
        clickMsg: function clickMsg() {
            this.jumpTo2('home/home_message', '', {});
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
        jumpModule: function jumpModule(id) {
            this.jumpTo2('home/healthyFood', '', { id: id });
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
                if (url.indexOf('/app/goods/detail/') != -1) {
                    var id = parseInt(url.split('\\?')[0].split('/app/goods/detail/')[1]);
                    if (this.compareVersion(weex.config.env.appVersion, '3.4.0')) {
                        this.jumpTo2('shop/goodsDetailsParent', '', { goods_id: id });
                    } else if (this.compareVersion(weex.config.env.appVersion, '3.0.7')) {
                        this.jumpTo2('shop/goodsDetails', '', { goods_id: id });
                    }
                } else {
                    titleBar.startWeb({
                        title: name,
                        url: url
                    });
                }
            }
        },
        fetch: function fetch() {
            var _this = this;
            _this.Get(_this.api().double_home, {}, function (res) {
                if (res.data.code == '0') {
                    _this.navigator = res.data.data.navigator;
                    _this.discount_banner = res.data.data.discount_banner;
                    _this.banner = res.data.data.banner;
                    _this.banner_notice = res.data.data.banner_notice;
                    _this.recombanner = res.data.data.recombanner;
                    _this.recombanner_item_one = _this.recombanner.data[0];
                    _this.recombanner_item_two = _this.recombanner.data[1];
                    _this.recombanner_item_three = _this.recombanner.data[2];
                    _this.recombanner_item_four = _this.recombanner.data[3];
                    _this.sub1 = res.data.data.sub1;
                    _this.sub2 = res.data.data.sub2;
                    _this.sub3 = res.data.data.sub3;
                    _this.sub4 = res.data.data.sub4;
                    _this.sub5 = res.data.data.sub5;
                    _this.sub6 = res.data.data.sub6;
                    _this.sub7 = res.data.data.sub7;
                    _this.sub8 = res.data.data.sub8;
                    _this.sub9 = res.data.data.sub9;
                    _this.sub10 = res.data.data.sub10;
                    _this.sub11 = res.data.data.sub11;
                    _this.buybrand = res.data.data.buybrand;
                    _this.new_banner = res.data.data.new_banner;
                    for (var arr = 0; arr < _this.buybrand.data.length; arr++) {
                        if (arr % 2 == 0) _this.buybrand_right.push(_this.buybrand.data[arr]);else _this.buybrand_left.push(_this.buybrand.data[arr]);
                    }

                    if (_this.navigator.keyword != '' && _this.navigator.keyword.length > 0) {
                        var data = [];
                        for (var i = 0; i < _this.navigator.keyword.length; i++) {
                            data.push(_this.navigator.keyword[i].name);
                        }
                        _this.keywordMarquee = data;
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
        goScroll: function goScroll(e) {
            var offset_y = e.contentOffset.y;
            this.isRefresh = true;
            if (offset_y < 0) {
                this.hide_title_bar = false;
            } else {
                this.hide_title_bar = true;
            }
            if (-offset_y < 200) {
                this.title_bar_opacity = -offset_y / 200;
            } else {
                this.title_bar_opacity = 1;
            }
            if (-offset_y < 20) {
                this.title_bar_opacity = 0;
                this.hide_title_bar = true;
            }
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
        _this.refreshMessage();
        _this.fetch();
        if (this.compareVersion(weex.config.env.appVersion, '3.5.0') && weex.config.env.platform.toLowerCase() === 'ios') {
            titleBar.registerNotification();
        }
        event.onmessage = function (event) {
            if (!event.data) {
                return;
            }
            switch (event.data) {
                case _this.eventBusTag().REFRESH_MESSAGE:
                    _this.refreshMessage();
                    break;
            }
        };
        eventAccount.onmessage = function (event) {
            if (!event.data) {
                return;
            }
            switch (event.data) {
                case _this.eventBusTag().REFRESH_HOME:
                    _this.refreshMessage();
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
  }, [_c('scroller', {
    ref: "scroller",
    staticClass: ["parent"],
    style: {
      top: 0 + 'px',
      bottom: _vm.bottom + 'px'
    },
    attrs: {
      "showScrollbar": "false",
      "offsetAccuracy": "20"
    },
    on: {
      "scroll": _vm.goScroll
    }
  }, [_c('refresher', {
    on: {
      "loadingDown": _vm.loadingDown
    }
  }), _c('div', [_c('div', {
    ref: "content",
    staticClass: ["div-banner"]
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
  }) : _vm._e()], 2) : _vm._e(), (_vm.hide_title_bar) ? _c('div', {
    staticClass: ["search-title"],
    style: {
      height: _vm.titleHeight + 'px',
      top: _vm.nativeBarHeight + 'px'
    }
  }, [_c('div', {
    staticClass: ["msg_count"],
    style: {
      height: _vm.titleHeight + 'px'
    },
    on: {
      "click": function($event) {
        _vm.clickMsg()
      }
    }
  }, [_c('image', {
    staticClass: ["top_message"],
    attrs: {
      "src": "http://img.abmau.com/abmau/65fba4cbd5655f217afdd5a156a48cba.png"
    }
  }), (_vm.noreadcount > 0 && _vm.noreadcount < 100) ? _c('text', {
    staticClass: ["count"],
    style: {
      top: (_vm.titleHeight / 2 - 30) + 'px'
    }
  }, [_vm._v(_vm._s(_vm.noreadcount))]) : _vm._e(), (_vm.noreadcount > 0 && _vm.noreadcount >= 100) ? _c('text', {
    staticClass: ["_count"],
    style: {
      top: (_vm.titleHeight / 2 - 30) + 'px'
    }
  }, [_vm._v("99+")]) : _vm._e()]), _c('div', {
    staticClass: ["search_bt"],
    staticStyle: {
      backgroundColor: "#ffffff"
    }
  }, [_c('scrollVertical', {
    staticClass: ["scrollVertical"],
    staticStyle: {
      backgroundColor: "#fff"
    },
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
  })], 1), _c('image', {
    staticClass: ["classify_image"],
    attrs: {
      "src": "http://img.abmau.com/abmau/d36727bee60a9c9bf501d03a3b5b9941.png"
    },
    on: {
      "click": function($event) {
        _vm.searchAll(_vm.navigator.searchlink)
      }
    }
  })]) : _vm._e()]), _c('div', {
    staticClass: ["home_top_tag"],
    on: {
      "click": function($event) {
        _vm.tagAction()
      }
    }
  }, [_c('text', {
    staticClass: ["right_content_title"]
  }, [_vm._v("八大品牌方为双十一打Call")]), _c('image', {
    staticClass: ["right_arrows_image"],
    attrs: {
      "src": "http://img.abmau.com/abmau/9383026fdf673d3a5bef72ded24134fe.png"
    }
  })]), _c('div', {
    staticClass: ["super_home_banner"]
  }, [(!_vm.banner_notice) ? _c('text', {
    staticClass: ["home_banner"]
  }) : _vm._e(), (_vm.banner_notice && _vm.banner_notice != null) ? _c('image', {
    staticClass: ["home_banner"],
    attrs: {
      "src": _vm.banner_notice.image_url
    },
    on: {
      "click": function($event) {
        _vm.startWeb(_vm.banner_notice.sharetitle, _vm.banner_notice.url, _vm.banner_notice.sharelink, _vm.banner_notice.shareimg, _vm.banner_notice.sharetitle, _vm.banner_notice.sharedesc)
      }
    }
  }) : _vm._e()]), _c('div', [_c('div', {
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
  }, [_c('div', {
    staticClass: ["right_top"]
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
  }) : _vm._e()]), _c('div', {
    staticClass: ["right_bottom"]
  }, [(_vm.recombanner_item_three) ? _c('image', {
    staticClass: ["recombanner_bottom"],
    attrs: {
      "src": _vm.recombanner_item_three.image_url
    },
    on: {
      "click": function($event) {
        _vm.startWeb(_vm.recombanner_item_three.title, _vm.recombanner_item_three.url, _vm.recombanner_item_three.sharelink, _vm.recombanner_item_three.shareimg, _vm.recombanner_item_three.sharetitle, _vm.recombanner_item_three.sharedesc)
      }
    }
  }) : _vm._e(), (_vm.recombanner_item_four) ? _c('image', {
    staticClass: ["recombanner_bottom"],
    attrs: {
      "src": _vm.recombanner_item_four.image_url
    },
    on: {
      "click": function($event) {
        _vm.startWeb(_vm.recombanner_item_four.title, _vm.recombanner_item_four.url, _vm.recombanner_item_four.sharelink, _vm.recombanner_item_four.shareimg, _vm.recombanner_item_four.sharetitle, _vm.recombanner_item_four.sharedesc)
      }
    }
  }) : _vm._e()])])])]), _c('div', {
    staticClass: ["new_banner-div"]
  }, [(_vm.discount_banner && _vm.discount_banner.image_url != '') ? _c('image', {
    staticClass: ["new_banner-image"],
    attrs: {
      "src": _vm.discount_banner.image_url
    },
    on: {
      "click": function($event) {
        _vm.startWeb(_vm.discount_banner.title, _vm.discount_banner.url, _vm.discount_banner.sharelink, _vm.discount_banner.shareimg, _vm.discount_banner.sharetitle, _vm.discount_banner.sharedesc)
      }
    }
  }) : _vm._e(), (_vm.new_banner) ? _c('image', {
    staticClass: ["new_banner"],
    attrs: {
      "src": _vm.new_banner.image_url
    },
    on: {
      "click": function($event) {
        _vm.startWeb(_vm.new_banner.title, _vm.new_banner.url, _vm.new_banner.sharelink, _vm.new_banner.shareimg, _vm.new_banner.sharetitle, _vm.new_banner.sharedesc)
      }
    }
  }) : _vm._e()]), (_vm.sub1.data.length != 0) ? _c('div', {
    staticClass: ["line_space"]
  }) : _vm._e(), _c('div', [(_vm.sub1.data.length != 0) ? _c('div', {
    staticClass: ["recommend"]
  }, [_c('div', {
    staticClass: ["module_title"],
    on: {
      "click": function($event) {
        _vm.jumpModule(_vm.sub1.id)
      }
    }
  }, [_c('text', {
    staticClass: ["module_title_text"]
  }, [_vm._v(_vm._s(_vm.sub1.title))]), _c('image', {
    staticClass: ["module_title_image"],
    attrs: {
      "src": "assets://home_title_more"
    }
  })]), (_vm.sub1.banner_img_url != '') ? _c('div', {
    staticClass: ["top_banner_bg"],
    on: {
      "click": function($event) {
        _vm.startWeb(_vm.sub1.title, _vm.sub1.url, _vm.sub1.sharelink, _vm.sub1.shareimg, _vm.sub1.sharetitle, _vm.sub1.sharedesc)
      }
    }
  }, [_c('image', {
    staticClass: ["top_banner"],
    attrs: {
      "src": _vm.sub1.banner_img_url
    }
  })]) : _vm._e(), _vm._l((_vm.sub1.data), function(item, index) {
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
    }, [_c('image', {
      staticClass: ["recommend_image"],
      attrs: {
        "src": item.goods_image
      }
    }), _c('div', {
      staticClass: ["right_item"]
    }, [_c('text', {
      staticClass: ["recommend_name"]
    }, [_vm._v(_vm._s(item.name))]), _c('div', {
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
    })), _c('div', {
      staticStyle: {
        flex: "1"
      }
    }), _c('div', {
      staticClass: ["recommend_price"]
    }, [_c('div', {
      staticClass: ["list_right_price"]
    }, [(item.shareprice != 0) ? _c('text', {
      staticClass: ["buying"]
    }, [_vm._v(_vm._s(item.title) + " ¥" + _vm._s(item.shareprice))]) : _vm._e(), (item.shareprice == 0 && item.retail_tax == 'no_show') ? _c('text', {
      staticClass: ["buying"]
    }, [_vm._v(_vm._s(item.retail_title) + " ¥" + _vm._s(item.disprice))]) : _vm._e(), (item.shareprice == 0 && item.retail_tax != 'no_show') ? _c('text', {
      staticClass: ["buying"]
    }, [_vm._v(_vm._s(item.retail_title) + " ¥" + _vm._s(item.disprice))]) : _vm._e()]), _c('div', {
      staticClass: ["list_right_price"],
      staticStyle: {
        flex: "1"
      }
    }, [_c('text', {
      staticClass: ["retail"]
    }, [_vm._v(_vm._s(item.price_title) + " ¥" + _vm._s(item.price))]), (item.market_price != null) ? _c('text', {
      staticClass: ["retail"]
    }, [_vm._v(" (")]) : _vm._e(), (item.market_price != null) ? _c('text', {
      staticClass: ["used"]
    }, [_vm._v("¥" + _vm._s(item.market_price))]) : _vm._e(), (item.market_price != null) ? _c('text', {
      staticClass: ["retail"]
    }, [_vm._v(")")]) : _vm._e()])])])]), (index != (_vm.sub1.data.length - 1)) ? _c('div', {
      staticClass: ["line-item"]
    }) : _vm._e()])
  })], 2) : _vm._e()]), (_vm.sub2.data.length != 0) ? _c('div', {
    staticClass: ["line_space"]
  }) : _vm._e(), _c('div', [(_vm.sub2.data.length != 0) ? _c('div', {
    staticClass: ["recommend"]
  }, [_c('div', {
    staticClass: ["module_title"],
    on: {
      "click": function($event) {
        _vm.jumpModule(_vm.sub2.id)
      }
    }
  }, [_c('text', {
    staticClass: ["module_title_text"]
  }, [_vm._v(_vm._s(_vm.sub2.title))]), _c('image', {
    staticClass: ["module_title_image"],
    attrs: {
      "src": "assets://home_title_more"
    }
  })]), (_vm.sub2.banner_img_url != '') ? _c('div', {
    staticClass: ["top_banner_bg"],
    on: {
      "click": function($event) {
        _vm.startWeb(_vm.sub2.title, _vm.sub2.url, _vm.sub2.sharelink, _vm.sub2.shareimg, _vm.sub2.sharetitle, _vm.sub2.sharedesc)
      }
    }
  }, [_c('image', {
    staticClass: ["top_banner"],
    attrs: {
      "src": _vm.sub2.banner_img_url
    }
  })]) : _vm._e(), _vm._l((_vm.sub2.data), function(item, index) {
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
    }, [_c('image', {
      staticClass: ["recommend_image"],
      attrs: {
        "src": item.goods_image
      }
    }), _c('div', {
      staticClass: ["right_item"]
    }, [_c('text', {
      staticClass: ["recommend_name"]
    }, [_vm._v(_vm._s(item.name))]), _c('div', {
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
    })), _c('div', {
      staticStyle: {
        flex: "1"
      }
    }), _c('div', {
      staticClass: ["recommend_price"]
    }, [_c('div', {
      staticClass: ["list_right_price"]
    }, [(item.shareprice != 0) ? _c('text', {
      staticClass: ["buying"]
    }, [_vm._v(_vm._s(item.title) + " ¥" + _vm._s(item.shareprice))]) : _vm._e(), (item.shareprice == 0 && item.retail_tax == 'no_show') ? _c('text', {
      staticClass: ["buying"]
    }, [_vm._v(_vm._s(item.retail_title) + " ¥" + _vm._s(item.disprice))]) : _vm._e(), (item.shareprice == 0 && item.retail_tax != 'no_show') ? _c('text', {
      staticClass: ["buying"]
    }, [_vm._v(_vm._s(item.retail_title) + " ¥" + _vm._s(item.disprice))]) : _vm._e()]), _c('div', {
      staticClass: ["list_right_price"],
      staticStyle: {
        flex: "1"
      }
    }, [_c('text', {
      staticClass: ["retail"]
    }, [_vm._v(_vm._s(item.price_title) + " ¥" + _vm._s(item.price))]), (item.market_price != null) ? _c('text', {
      staticClass: ["retail"]
    }, [_vm._v(" (")]) : _vm._e(), (item.market_price != null) ? _c('text', {
      staticClass: ["used"]
    }, [_vm._v("¥" + _vm._s(item.market_price))]) : _vm._e(), (item.market_price != null) ? _c('text', {
      staticClass: ["retail"]
    }, [_vm._v(")")]) : _vm._e()])])])]), (index != (_vm.sub2.data.length - 1)) ? _c('div', {
      staticClass: ["line-item"]
    }) : _vm._e()])
  })], 2) : _vm._e()]), (_vm.sub3.data.length != 0) ? _c('div', {
    staticClass: ["line_space"]
  }) : _vm._e(), _c('div', [(_vm.sub3.data.length != 0) ? _c('div', {
    staticClass: ["recommend"]
  }, [_c('div', {
    staticClass: ["module_title"],
    on: {
      "click": function($event) {
        _vm.jumpModule(_vm.sub3.id)
      }
    }
  }, [_c('text', {
    staticClass: ["module_title_text"]
  }, [_vm._v(_vm._s(_vm.sub3.title))]), _c('image', {
    staticClass: ["module_title_image"],
    attrs: {
      "src": "assets://home_title_more"
    }
  })]), (_vm.sub3.banner_img_url != '') ? _c('div', {
    staticClass: ["top_banner_bg"],
    on: {
      "click": function($event) {
        _vm.startWeb(_vm.sub3.title, _vm.sub3.url, _vm.sub3.sharelink, _vm.sub3.shareimg, _vm.sub3.sharetitle, _vm.sub3.sharedesc)
      }
    }
  }, [_c('image', {
    staticClass: ["top_banner"],
    attrs: {
      "src": _vm.sub3.banner_img_url
    }
  })]) : _vm._e(), _vm._l((_vm.sub3.data), function(item, index) {
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
    }, [_c('image', {
      staticClass: ["recommend_image"],
      attrs: {
        "src": item.goods_image
      }
    }), _c('div', {
      staticClass: ["right_item"]
    }, [_c('text', {
      staticClass: ["recommend_name"]
    }, [_vm._v(_vm._s(item.name))]), _c('div', {
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
    })), _c('div', {
      staticStyle: {
        flex: "1"
      }
    }), _c('div', {
      staticClass: ["recommend_price"]
    }, [_c('div', {
      staticClass: ["list_right_price"]
    }, [(item.shareprice != 0) ? _c('text', {
      staticClass: ["buying"]
    }, [_vm._v(_vm._s(item.title) + " ¥" + _vm._s(item.shareprice))]) : _vm._e(), (item.shareprice == 0 && item.retail_tax == 'no_show') ? _c('text', {
      staticClass: ["buying"]
    }, [_vm._v(_vm._s(item.retail_title) + " ¥" + _vm._s(item.disprice))]) : _vm._e(), (item.shareprice == 0 && item.retail_tax != 'no_show') ? _c('text', {
      staticClass: ["buying"]
    }, [_vm._v(_vm._s(item.retail_title) + " ¥" + _vm._s(item.disprice))]) : _vm._e()]), _c('div', {
      staticClass: ["list_right_price"],
      staticStyle: {
        flex: "1"
      }
    }, [_c('text', {
      staticClass: ["retail"]
    }, [_vm._v(_vm._s(item.price_title) + " ¥" + _vm._s(item.price))]), (item.market_price != null) ? _c('text', {
      staticClass: ["retail"]
    }, [_vm._v(" (")]) : _vm._e(), (item.market_price != null) ? _c('text', {
      staticClass: ["used"]
    }, [_vm._v("¥" + _vm._s(item.market_price))]) : _vm._e(), (item.market_price != null) ? _c('text', {
      staticClass: ["retail"]
    }, [_vm._v(")")]) : _vm._e()])])])]), (index != (_vm.sub3.data.length - 1)) ? _c('div', {
      staticClass: ["line-item"]
    }) : _vm._e()])
  })], 2) : _vm._e()]), (_vm.sub4.data.length != 0) ? _c('div', {
    staticClass: ["line_space"]
  }) : _vm._e(), _c('div', [(_vm.sub4.data.length != 0) ? _c('div', {
    staticClass: ["recommend"]
  }, [_c('div', {
    staticClass: ["module_title"],
    on: {
      "click": function($event) {
        _vm.jumpModule(_vm.sub4.id)
      }
    }
  }, [_c('text', {
    staticClass: ["module_title_text"]
  }, [_vm._v(_vm._s(_vm.sub4.title))]), _c('image', {
    staticClass: ["module_title_image"],
    attrs: {
      "src": "assets://home_title_more"
    }
  })]), (_vm.sub4.banner_img_url != '') ? _c('div', {
    staticClass: ["top_banner_bg"],
    on: {
      "click": function($event) {
        _vm.startWeb(_vm.sub4.title, _vm.sub4.url, _vm.sub4.sharelink, _vm.sub4.shareimg, _vm.sub4.sharetitle, _vm.sub4.sharedesc)
      }
    }
  }, [_c('image', {
    staticClass: ["top_banner"],
    attrs: {
      "src": _vm.sub4.banner_img_url
    }
  })]) : _vm._e(), _vm._l((_vm.sub4.data), function(item, index) {
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
    }, [_c('image', {
      staticClass: ["recommend_image"],
      attrs: {
        "src": item.goods_image
      }
    }), _c('div', {
      staticClass: ["right_item"]
    }, [_c('text', {
      staticClass: ["recommend_name"]
    }, [_vm._v(_vm._s(item.name))]), _c('div', {
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
    })), _c('div', {
      staticStyle: {
        flex: "1"
      }
    }), _c('div', {
      staticClass: ["recommend_price"]
    }, [_c('div', {
      staticClass: ["list_right_price"]
    }, [(item.shareprice != 0) ? _c('text', {
      staticClass: ["buying"]
    }, [_vm._v(_vm._s(item.title) + " ¥" + _vm._s(item.shareprice))]) : _vm._e(), (item.shareprice == 0 && item.retail_tax == 'no_show') ? _c('text', {
      staticClass: ["buying"]
    }, [_vm._v(_vm._s(item.retail_title) + " ¥" + _vm._s(item.disprice))]) : _vm._e(), (item.shareprice == 0 && item.retail_tax != 'no_show') ? _c('text', {
      staticClass: ["buying"]
    }, [_vm._v(_vm._s(item.retail_title) + " ¥" + _vm._s(item.disprice))]) : _vm._e()]), _c('div', {
      staticClass: ["list_right_price"],
      staticStyle: {
        flex: "1"
      }
    }, [_c('text', {
      staticClass: ["retail"]
    }, [_vm._v(_vm._s(item.price_title) + " ¥" + _vm._s(item.price))]), (item.market_price != null) ? _c('text', {
      staticClass: ["retail"]
    }, [_vm._v(" (")]) : _vm._e(), (item.market_price != null) ? _c('text', {
      staticClass: ["used"]
    }, [_vm._v("¥" + _vm._s(item.market_price))]) : _vm._e(), (item.market_price != null) ? _c('text', {
      staticClass: ["retail"]
    }, [_vm._v(")")]) : _vm._e()])])])]), (index != (_vm.sub4.data.length - 1)) ? _c('div', {
      staticClass: ["line-item"]
    }) : _vm._e()])
  })], 2) : _vm._e()]), (_vm.sub5.data.length != 0) ? _c('div', {
    staticClass: ["line_space"]
  }) : _vm._e(), _c('div', [(_vm.sub5.data.length != 0) ? _c('div', {
    staticClass: ["recommend"]
  }, [_c('div', {
    staticClass: ["module_title"],
    on: {
      "click": function($event) {
        _vm.jumpModule(_vm.sub5.id)
      }
    }
  }, [_c('text', {
    staticClass: ["module_title_text"]
  }, [_vm._v(_vm._s(_vm.sub5.title))]), _c('image', {
    staticClass: ["module_title_image"],
    attrs: {
      "src": "assets://home_title_more"
    }
  })]), (_vm.sub5.banner_img_url != '') ? _c('div', {
    staticClass: ["top_banner_bg"],
    on: {
      "click": function($event) {
        _vm.startWeb(_vm.sub5.title, _vm.sub5.url, _vm.sub5.sharelink, _vm.sub5.shareimg, _vm.sub5.sharetitle, _vm.sub5.sharedesc)
      }
    }
  }, [_c('image', {
    staticClass: ["top_banner"],
    attrs: {
      "src": _vm.sub5.banner_img_url
    }
  })]) : _vm._e(), _vm._l((_vm.sub5.data), function(item, index) {
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
    }, [_c('image', {
      staticClass: ["recommend_image"],
      attrs: {
        "src": item.goods_image
      }
    }), _c('div', {
      staticClass: ["right_item"]
    }, [_c('text', {
      staticClass: ["recommend_name"]
    }, [_vm._v(_vm._s(item.name))]), _c('div', {
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
    })), _c('div', {
      staticStyle: {
        flex: "1"
      }
    }), _c('div', {
      staticClass: ["recommend_price"]
    }, [_c('div', {
      staticClass: ["list_right_price"]
    }, [(item.shareprice != 0) ? _c('text', {
      staticClass: ["buying"]
    }, [_vm._v(_vm._s(item.title) + " ¥" + _vm._s(item.shareprice))]) : _vm._e(), (item.shareprice == 0 && item.retail_tax == 'no_show') ? _c('text', {
      staticClass: ["buying"]
    }, [_vm._v(_vm._s(item.retail_title) + " ¥" + _vm._s(item.disprice))]) : _vm._e(), (item.shareprice == 0 && item.retail_tax != 'no_show') ? _c('text', {
      staticClass: ["buying"]
    }, [_vm._v(_vm._s(item.retail_title) + " ¥" + _vm._s(item.disprice))]) : _vm._e()]), _c('div', {
      staticClass: ["list_right_price"],
      staticStyle: {
        flex: "1"
      }
    }, [_c('text', {
      staticClass: ["retail"]
    }, [_vm._v(_vm._s(item.price_title) + " ¥" + _vm._s(item.price))]), (item.market_price != null) ? _c('text', {
      staticClass: ["retail"]
    }, [_vm._v(" (")]) : _vm._e(), (item.market_price != null) ? _c('text', {
      staticClass: ["used"]
    }, [_vm._v("¥" + _vm._s(item.market_price))]) : _vm._e(), (item.market_price != null) ? _c('text', {
      staticClass: ["retail"]
    }, [_vm._v(")")]) : _vm._e()])])])]), (index != (_vm.sub5.data.length - 1)) ? _c('div', {
      staticClass: ["line-item"]
    }) : _vm._e()])
  })], 2) : _vm._e()]), (_vm.sub6.data.length != 0) ? _c('div', {
    staticClass: ["line_space"]
  }) : _vm._e(), _c('div', [(_vm.sub6.data.length != 0) ? _c('div', {
    staticClass: ["recommend"]
  }, [_c('div', {
    staticClass: ["module_title"],
    on: {
      "click": function($event) {
        _vm.jumpModule(_vm.sub6.id)
      }
    }
  }, [_c('text', {
    staticClass: ["module_title_text"]
  }, [_vm._v(_vm._s(_vm.sub6.title))]), _c('image', {
    staticClass: ["module_title_image"],
    attrs: {
      "src": "assets://home_title_more"
    }
  })]), (_vm.sub6.banner_img_url != '') ? _c('div', {
    staticClass: ["top_banner_bg"],
    on: {
      "click": function($event) {
        _vm.startWeb(_vm.sub6.title, _vm.sub6.url, _vm.sub6.sharelink, _vm.sub6.shareimg, _vm.sub6.sharetitle, _vm.sub6.sharedesc)
      }
    }
  }, [_c('image', {
    staticClass: ["top_banner"],
    attrs: {
      "src": _vm.sub6.banner_img_url
    }
  })]) : _vm._e(), _vm._l((_vm.sub6.data), function(item, index) {
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
    }, [_c('image', {
      staticClass: ["recommend_image"],
      attrs: {
        "src": item.goods_image
      }
    }), _c('div', {
      staticClass: ["right_item"]
    }, [_c('text', {
      staticClass: ["recommend_name"]
    }, [_vm._v(_vm._s(item.name))]), _c('div', {
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
    })), _c('div', {
      staticStyle: {
        flex: "1"
      }
    }), _c('div', {
      staticClass: ["recommend_price"]
    }, [_c('div', {
      staticClass: ["list_right_price"]
    }, [(item.shareprice != 0) ? _c('text', {
      staticClass: ["buying"]
    }, [_vm._v(_vm._s(item.title) + " ¥" + _vm._s(item.shareprice))]) : _vm._e(), (item.shareprice == 0 && item.retail_tax == 'no_show') ? _c('text', {
      staticClass: ["buying"]
    }, [_vm._v(_vm._s(item.retail_title) + " ¥" + _vm._s(item.disprice))]) : _vm._e(), (item.shareprice == 0 && item.retail_tax != 'no_show') ? _c('text', {
      staticClass: ["buying"]
    }, [_vm._v(_vm._s(item.retail_title) + " ¥" + _vm._s(item.disprice))]) : _vm._e()]), _c('div', {
      staticClass: ["list_right_price"],
      staticStyle: {
        flex: "1"
      }
    }, [_c('text', {
      staticClass: ["retail"]
    }, [_vm._v(_vm._s(item.price_title) + " ¥" + _vm._s(item.price))]), (item.market_price != null) ? _c('text', {
      staticClass: ["retail"]
    }, [_vm._v(" (")]) : _vm._e(), (item.market_price != null) ? _c('text', {
      staticClass: ["used"]
    }, [_vm._v("¥" + _vm._s(item.market_price))]) : _vm._e(), (item.market_price != null) ? _c('text', {
      staticClass: ["retail"]
    }, [_vm._v(")")]) : _vm._e()])])])]), (index != (_vm.sub6.data.length - 1)) ? _c('div', {
      staticClass: ["line-item"]
    }) : _vm._e()])
  })], 2) : _vm._e()]), (_vm.sub7.data.length != 0) ? _c('div', {
    staticClass: ["line_space"]
  }) : _vm._e(), _c('div', [(_vm.sub7.data.length != 0) ? _c('div', {
    staticClass: ["recommend"]
  }, [_c('div', {
    staticClass: ["module_title"],
    on: {
      "click": function($event) {
        _vm.jumpModule(_vm.sub7.id)
      }
    }
  }, [_c('text', {
    staticClass: ["module_title_text"]
  }, [_vm._v(_vm._s(_vm.sub7.title))]), _c('image', {
    staticClass: ["module_title_image"],
    attrs: {
      "src": "assets://home_title_more"
    }
  })]), (_vm.sub7.banner_img_url != '') ? _c('div', {
    staticClass: ["top_banner_bg"],
    on: {
      "click": function($event) {
        _vm.startWeb(_vm.sub7.title, _vm.sub7.url, _vm.sub7.sharelink, _vm.sub7.shareimg, _vm.sub7.sharetitle, _vm.sub7.sharedesc)
      }
    }
  }, [_c('image', {
    staticClass: ["top_banner"],
    attrs: {
      "src": _vm.sub7.banner_img_url
    }
  })]) : _vm._e(), _vm._l((_vm.sub7.data), function(item, index) {
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
    }, [_c('image', {
      staticClass: ["recommend_image"],
      attrs: {
        "src": item.goods_image
      }
    }), _c('div', {
      staticClass: ["right_item"]
    }, [_c('text', {
      staticClass: ["recommend_name"]
    }, [_vm._v(_vm._s(item.name))]), _c('div', {
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
    })), _c('div', {
      staticStyle: {
        flex: "1"
      }
    }), _c('div', {
      staticClass: ["recommend_price"]
    }, [_c('div', {
      staticClass: ["list_right_price"]
    }, [(item.shareprice != 0) ? _c('text', {
      staticClass: ["buying"]
    }, [_vm._v(_vm._s(item.title) + " ¥" + _vm._s(item.shareprice))]) : _vm._e(), (item.shareprice == 0 && item.retail_tax == 'no_show') ? _c('text', {
      staticClass: ["buying"]
    }, [_vm._v(_vm._s(item.retail_title) + " ¥" + _vm._s(item.disprice))]) : _vm._e(), (item.shareprice == 0 && item.retail_tax != 'no_show') ? _c('text', {
      staticClass: ["buying"]
    }, [_vm._v(_vm._s(item.retail_title) + " ¥" + _vm._s(item.disprice))]) : _vm._e()]), _c('div', {
      staticClass: ["list_right_price"],
      staticStyle: {
        flex: "1"
      }
    }, [_c('text', {
      staticClass: ["retail"]
    }, [_vm._v(_vm._s(item.price_title) + " ¥" + _vm._s(item.price))]), (item.market_price != null) ? _c('text', {
      staticClass: ["retail"]
    }, [_vm._v(" (")]) : _vm._e(), (item.market_price != null) ? _c('text', {
      staticClass: ["used"]
    }, [_vm._v("¥" + _vm._s(item.market_price))]) : _vm._e(), (item.market_price != null) ? _c('text', {
      staticClass: ["retail"]
    }, [_vm._v(")")]) : _vm._e()])])])]), (index != (_vm.sub7.data.length - 1)) ? _c('div', {
      staticClass: ["line-item"]
    }) : _vm._e()])
  })], 2) : _vm._e()]), (_vm.sub8.data.length != 0) ? _c('div', {
    staticClass: ["line_space"]
  }) : _vm._e(), _c('div', [(_vm.sub8.data.length != 0) ? _c('div', {
    staticClass: ["recommend"]
  }, [_c('div', {
    staticClass: ["module_title"],
    on: {
      "click": function($event) {
        _vm.jumpModule(_vm.sub8.id)
      }
    }
  }, [_c('text', {
    staticClass: ["module_title_text"]
  }, [_vm._v(_vm._s(_vm.sub8.title))]), _c('image', {
    staticClass: ["module_title_image"],
    attrs: {
      "src": "assets://home_title_more"
    }
  })]), (_vm.sub8.banner_img_url != '') ? _c('div', {
    staticClass: ["top_banner_bg"],
    on: {
      "click": function($event) {
        _vm.startWeb(_vm.sub8.title, _vm.sub8.url, _vm.sub8.sharelink, _vm.sub8.shareimg, _vm.sub8.sharetitle, _vm.sub8.sharedesc)
      }
    }
  }, [_c('image', {
    staticClass: ["top_banner"],
    attrs: {
      "src": _vm.sub8.banner_img_url
    }
  })]) : _vm._e(), _vm._l((_vm.sub8.data), function(item, index) {
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
    }, [_c('image', {
      staticClass: ["recommend_image"],
      attrs: {
        "src": item.goods_image
      }
    }), _c('div', {
      staticClass: ["right_item"]
    }, [_c('text', {
      staticClass: ["recommend_name"]
    }, [_vm._v(_vm._s(item.name))]), _c('div', {
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
    })), _c('div', {
      staticStyle: {
        flex: "1"
      }
    }), _c('div', {
      staticClass: ["recommend_price"]
    }, [_c('div', {
      staticClass: ["list_right_price"]
    }, [(item.shareprice != 0) ? _c('text', {
      staticClass: ["buying"]
    }, [_vm._v(_vm._s(item.title) + " ¥" + _vm._s(item.shareprice))]) : _vm._e(), (item.shareprice == 0 && item.retail_tax == 'no_show') ? _c('text', {
      staticClass: ["buying"]
    }, [_vm._v(_vm._s(item.retail_title) + " ¥" + _vm._s(item.disprice))]) : _vm._e(), (item.shareprice == 0 && item.retail_tax != 'no_show') ? _c('text', {
      staticClass: ["buying"]
    }, [_vm._v(_vm._s(item.retail_title) + " ¥" + _vm._s(item.disprice))]) : _vm._e()]), _c('div', {
      staticClass: ["list_right_price"],
      staticStyle: {
        flex: "1"
      }
    }, [_c('text', {
      staticClass: ["retail"]
    }, [_vm._v(_vm._s(item.price_title) + " ¥" + _vm._s(item.price))]), (item.market_price != null) ? _c('text', {
      staticClass: ["retail"]
    }, [_vm._v(" (")]) : _vm._e(), (item.market_price != null) ? _c('text', {
      staticClass: ["used"]
    }, [_vm._v("¥" + _vm._s(item.market_price))]) : _vm._e(), (item.market_price != null) ? _c('text', {
      staticClass: ["retail"]
    }, [_vm._v(")")]) : _vm._e()])])])]), (index != (_vm.sub8.data.length - 1)) ? _c('div', {
      staticClass: ["line-item"]
    }) : _vm._e()])
  })], 2) : _vm._e()]), (_vm.sub9.data.length != 0) ? _c('div', {
    staticClass: ["line_space"]
  }) : _vm._e(), _c('div', [(_vm.sub9.data.length != 0) ? _c('div', {
    staticClass: ["recommend"]
  }, [_c('div', {
    staticClass: ["module_title"],
    on: {
      "click": function($event) {
        _vm.jumpModule(_vm.sub9.id)
      }
    }
  }, [_c('text', {
    staticClass: ["module_title_text"]
  }, [_vm._v(_vm._s(_vm.sub9.title))]), _c('image', {
    staticClass: ["module_title_image"],
    attrs: {
      "src": "assets://home_title_more"
    }
  })]), (_vm.sub9.banner_img_url != '') ? _c('div', {
    staticClass: ["top_banner_bg"],
    on: {
      "click": function($event) {
        _vm.startWeb(_vm.sub9.title, _vm.sub9.url, _vm.sub9.sharelink, _vm.sub9.shareimg, _vm.sub9.sharetitle, _vm.sub9.sharedesc)
      }
    }
  }, [_c('image', {
    staticClass: ["top_banner"],
    attrs: {
      "src": _vm.sub9.banner_img_url
    }
  })]) : _vm._e(), _vm._l((_vm.sub9.data), function(item, index) {
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
    }, [_c('image', {
      staticClass: ["recommend_image"],
      attrs: {
        "src": item.goods_image
      }
    }), _c('div', {
      staticClass: ["right_item"]
    }, [_c('text', {
      staticClass: ["recommend_name"]
    }, [_vm._v(_vm._s(item.name))]), _c('div', {
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
    })), _c('div', {
      staticStyle: {
        flex: "1"
      }
    }), _c('div', {
      staticClass: ["recommend_price"]
    }, [_c('div', {
      staticClass: ["list_right_price"]
    }, [(item.shareprice != 0) ? _c('text', {
      staticClass: ["buying"]
    }, [_vm._v(_vm._s(item.title) + " ¥" + _vm._s(item.shareprice))]) : _vm._e(), (item.shareprice == 0 && item.retail_tax == 'no_show') ? _c('text', {
      staticClass: ["buying"]
    }, [_vm._v(_vm._s(item.retail_title) + " ¥" + _vm._s(item.disprice))]) : _vm._e(), (item.shareprice == 0 && item.retail_tax != 'no_show') ? _c('text', {
      staticClass: ["buying"]
    }, [_vm._v(_vm._s(item.retail_title) + " ¥" + _vm._s(item.disprice))]) : _vm._e()]), _c('div', {
      staticClass: ["list_right_price"],
      staticStyle: {
        flex: "1"
      }
    }, [_c('text', {
      staticClass: ["retail"]
    }, [_vm._v(_vm._s(item.price_title) + " ¥" + _vm._s(item.price))]), (item.market_price != null) ? _c('text', {
      staticClass: ["retail"]
    }, [_vm._v(" (")]) : _vm._e(), (item.market_price != null) ? _c('text', {
      staticClass: ["used"]
    }, [_vm._v("¥" + _vm._s(item.market_price))]) : _vm._e(), (item.market_price != null) ? _c('text', {
      staticClass: ["retail"]
    }, [_vm._v(")")]) : _vm._e()])])])]), (index != (_vm.sub9.data.length - 1)) ? _c('div', {
      staticClass: ["line-item"]
    }) : _vm._e()])
  })], 2) : _vm._e()]), (_vm.sub10.data.length != 0) ? _c('div', {
    staticClass: ["line_space"]
  }) : _vm._e(), _c('div', [(_vm.sub10.data.length != 0) ? _c('div', {
    staticClass: ["recommend"]
  }, [_c('div', {
    staticClass: ["module_title"],
    on: {
      "click": function($event) {
        _vm.jumpModule(_vm.sub10.id)
      }
    }
  }, [_c('text', {
    staticClass: ["module_title_text"]
  }, [_vm._v(_vm._s(_vm.sub10.title))]), _c('image', {
    staticClass: ["module_title_image"],
    attrs: {
      "src": "assets://home_title_more"
    }
  })]), (_vm.sub10.banner_img_url != '') ? _c('div', {
    staticClass: ["top_banner_bg"],
    on: {
      "click": function($event) {
        _vm.startWeb(_vm.sub10.title, _vm.sub10.url, _vm.sub10.sharelink, _vm.sub10.shareimg, _vm.sub7.sharetitle, _vm.sub10.sharedesc)
      }
    }
  }, [_c('image', {
    staticClass: ["top_banner"],
    attrs: {
      "src": _vm.sub10.banner_img_url
    }
  })]) : _vm._e(), _vm._l((_vm.sub10.data), function(item, index) {
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
    }, [_c('image', {
      staticClass: ["recommend_image"],
      attrs: {
        "src": item.goods_image
      }
    }), _c('div', {
      staticClass: ["right_item"]
    }, [_c('text', {
      staticClass: ["recommend_name"]
    }, [_vm._v(_vm._s(item.name))]), _c('div', {
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
    })), _c('div', {
      staticStyle: {
        flex: "1"
      }
    }), _c('div', {
      staticClass: ["recommend_price"]
    }, [_c('div', {
      staticClass: ["list_right_price"]
    }, [(item.shareprice != 0) ? _c('text', {
      staticClass: ["buying"]
    }, [_vm._v(_vm._s(item.title) + " ¥" + _vm._s(item.shareprice))]) : _vm._e(), (item.shareprice == 0 && item.retail_tax == 'no_show') ? _c('text', {
      staticClass: ["buying"]
    }, [_vm._v(_vm._s(item.retail_title) + " ¥" + _vm._s(item.disprice))]) : _vm._e(), (item.shareprice == 0 && item.retail_tax != 'no_show') ? _c('text', {
      staticClass: ["buying"]
    }, [_vm._v(_vm._s(item.retail_title) + " ¥" + _vm._s(item.disprice))]) : _vm._e()]), _c('div', {
      staticClass: ["list_right_price"],
      staticStyle: {
        flex: "1"
      }
    }, [_c('text', {
      staticClass: ["retail"]
    }, [_vm._v(_vm._s(item.price_title) + " ¥" + _vm._s(item.price))]), (item.market_price != null) ? _c('text', {
      staticClass: ["retail"]
    }, [_vm._v(" (")]) : _vm._e(), (item.market_price != null) ? _c('text', {
      staticClass: ["used"]
    }, [_vm._v("¥" + _vm._s(item.market_price))]) : _vm._e(), (item.market_price != null) ? _c('text', {
      staticClass: ["retail"]
    }, [_vm._v(")")]) : _vm._e()])])])]), (index != (_vm.sub10.data.length - 1)) ? _c('div', {
      staticClass: ["line-item"]
    }) : _vm._e()])
  })], 2) : _vm._e()]), (_vm.sub11.data.length != 0) ? _c('div', {
    staticClass: ["line_space"]
  }) : _vm._e(), _c('div', [(_vm.sub11.data.length != 0) ? _c('div', {
    staticClass: ["recommend"]
  }, [_c('div', {
    staticClass: ["module_title"],
    on: {
      "click": function($event) {
        _vm.jumpModule(_vm.sub11.id)
      }
    }
  }, [_c('text', {
    staticClass: ["module_title_text"]
  }, [_vm._v(_vm._s(_vm.sub11.title))]), _c('image', {
    staticClass: ["module_title_image"],
    attrs: {
      "src": "assets://home_title_more"
    }
  })]), (_vm.sub11.banner_img_url != '') ? _c('div', {
    staticClass: ["top_banner_bg"],
    on: {
      "click": function($event) {
        _vm.startWeb(_vm.sub11.title, _vm.sub11.url, _vm.sub11.sharelink, _vm.sub7.shareimg, _vm.sub11.sharetitle, _vm.sub11.sharedesc)
      }
    }
  }, [_c('image', {
    staticClass: ["top_banner"],
    attrs: {
      "src": _vm.sub11.banner_img_url
    }
  })]) : _vm._e(), _vm._l((_vm.sub11.data), function(item, index) {
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
    }, [_c('image', {
      staticClass: ["recommend_image"],
      attrs: {
        "src": item.goods_image
      }
    }), _c('div', {
      staticClass: ["right_item"]
    }, [_c('text', {
      staticClass: ["recommend_name"]
    }, [_vm._v(_vm._s(item.name))]), _c('div', {
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
    })), _c('div', {
      staticStyle: {
        flex: "1"
      }
    }), _c('div', {
      staticClass: ["recommend_price"]
    }, [_c('div', {
      staticClass: ["list_right_price"]
    }, [(item.shareprice != 0) ? _c('text', {
      staticClass: ["buying"]
    }, [_vm._v(_vm._s(item.title) + " ¥" + _vm._s(item.shareprice))]) : _vm._e(), (item.shareprice == 0 && item.retail_tax == 'no_show') ? _c('text', {
      staticClass: ["buying"]
    }, [_vm._v(_vm._s(item.retail_title) + " ¥" + _vm._s(item.disprice))]) : _vm._e(), (item.shareprice == 0 && item.retail_tax != 'no_show') ? _c('text', {
      staticClass: ["buying"]
    }, [_vm._v(_vm._s(item.retail_title) + " ¥" + _vm._s(item.disprice))]) : _vm._e()]), _c('div', {
      staticClass: ["list_right_price"],
      staticStyle: {
        flex: "1"
      }
    }, [_c('text', {
      staticClass: ["retail"]
    }, [_vm._v(_vm._s(item.price_title) + " ¥" + _vm._s(item.price))]), (item.market_price != null) ? _c('text', {
      staticClass: ["retail"]
    }, [_vm._v(" (")]) : _vm._e(), (item.market_price != null) ? _c('text', {
      staticClass: ["used"]
    }, [_vm._v("¥" + _vm._s(item.market_price))]) : _vm._e(), (item.market_price != null) ? _c('text', {
      staticClass: ["retail"]
    }, [_vm._v(")")]) : _vm._e()])])])]), (index != (_vm.sub11.data.length - 1)) ? _c('div', {
      staticClass: ["line-item"]
    }) : _vm._e()])
  })], 2) : _vm._e()]), _c('div', [(_vm.buybrand.data.length != 0) ? _c('div', {
    staticClass: ["buybrand"]
  }, [_c('div', {
    staticClass: ["module_title"],
    style: {
      height: 98 + 'px'
    }
  }, [_c('text', {
    staticClass: ["module_title_text"],
    staticStyle: {
      marginTop: "30px"
    }
  }, [_vm._v(_vm._s(_vm.buybrand.title))])]), _c('div', {
    staticClass: ["buybrand_box"]
  }, [_c('div', {
    staticClass: ["buybrand_left"]
  }, [(_vm.buybrand.url) ? _c('div', {
    on: {
      "click": function($event) {
        _vm.jumpGD(_vm.buybrand.goods_id, _vm.buybrand.url, _vm.buybrand.name)
      }
    }
  }, [_c('image', {
    style: {
      width: 340 + 'px',
      height: 340 * _vm.buybrand.height / _vm.buybrand.width + 'px'
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
      staticClass: ["goods_tag"]
    }, [_c('image', {
      staticClass: ["buybrand_image"],
      attrs: {
        "src": item.goods_image
      }
    }), _c('div', {
      staticClass: ["line"]
    })]), _c('div', {
      staticClass: ["buybrand_title"]
    }, [_c('text', {
      staticClass: ["buybrand_name"]
    }, [_vm._v(_vm._s(item.name))]), _c('div', {
      staticClass: ["note_tag"]
    }, [(item.note == '多') ? _c('text', {
      staticClass: ["tag_text"],
      style: {
        'background-color': _vm.color1,
        height: 30 + 'px',
        width: 30 + 'px'
      }
    }, [_vm._v(_vm._s(item.note))]) : _vm._e(), (item.note == '少') ? _c('text', {
      staticClass: ["tag_text"],
      style: {
        'background-color': _vm.color2,
        height: 30 + 'px',
        width: 30 + 'px'
      }
    }, [_vm._v(_vm._s(item.note))]) : _vm._e(), (item.note == '缺') ? _c('text', {
      staticClass: ["tag_text"],
      style: {
        'background-color': _vm.color3,
        height: 30 + 'px',
        width: 30 + 'px'
      }
    }, [_vm._v(_vm._s(item.note))]) : _vm._e(), (item.note.length > 1) ? _c('text', {
      staticClass: ["tag_text"],
      style: {
        'background-color': _vm.color4,
        height: 30 + 'px',
        width: 60 + 'px'
      }
    }, [_vm._v(_vm._s(item.note))]) : _vm._e()])]), _c('div', {
      staticClass: ["buybrand_item_goods_tag"]
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
      staticClass: ["buybrand_price"]
    }, [(item.price) ? _c('text', {
      staticClass: ["price"]
    }, [_vm._v("优惠价 ¥" + _vm._s(item.disprice))]) : _vm._e(), (item.disprice) ? _c('text', {
      staticClass: ["buy_disprice"]
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
    })]), _c('div', {
      staticClass: ["buybrand_title"]
    }, [_c('text', {
      staticClass: ["buybrand_name"]
    }, [_vm._v(_vm._s(item.name))]), _c('div', {
      staticClass: ["note_tag"]
    }, [(item.note == '多') ? _c('text', {
      staticClass: ["tag_text"],
      style: {
        'background-color': _vm.color1,
        height: 30 + 'px',
        width: 30 + 'px'
      }
    }, [_vm._v(_vm._s(item.note))]) : _vm._e(), (item.note == '少') ? _c('text', {
      staticClass: ["tag_text"],
      style: {
        'background-color': _vm.color2,
        height: 30 + 'px',
        width: 30 + 'px'
      }
    }, [_vm._v(_vm._s(item.note))]) : _vm._e(), (item.note == '缺') ? _c('text', {
      staticClass: ["tag_text"],
      style: {
        'background-color': _vm.color3,
        height: 30 + 'px',
        width: 30 + 'px'
      }
    }, [_vm._v(_vm._s(item.note))]) : _vm._e(), (item.note.length > 1) ? _c('text', {
      staticClass: ["tag_text"],
      style: {
        'background-color': _vm.color4,
        height: 30 + 'px',
        width: 60 + 'px'
      }
    }, [_vm._v(_vm._s(item.note))]) : _vm._e()])]), _c('div', {
      staticClass: ["buybrand_item_goods_tag"]
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
      staticClass: ["buybrand_price"]
    }, [(item.price) ? _c('text', {
      staticClass: ["price"]
    }, [_vm._v("优惠价 ¥" + _vm._s(item.disprice))]) : _vm._e(), (item.disprice) ? _c('text', {
      staticClass: ["buy_disprice"]
    }, [_vm._v("售价 ¥" + _vm._s(item.price))]) : _vm._e()])])])
  }))])]) : _vm._e(), (_vm.buybrand.data.length != 0) ? _c('div', {
    staticStyle: {
      height: "20px",
      width: "750px",
      backgroundColor: "#fff"
    }
  }) : _vm._e()])])], 1), _c('div', {
    staticClass: ["title-bar"],
    style: {
      opacity: _vm.title_bar_opacity
    }
  }, [_c('div', {
    staticClass: ["search"],
    style: {
      height: _vm.titleHeight + 'px',
      marginTop: _vm.nativeBarHeight + 'px'
    }
  }, [_c('div', {
    staticClass: ["msg_count"],
    style: {
      height: _vm.titleHeight + 'px'
    },
    on: {
      "click": function($event) {
        _vm.clickMsg()
      }
    }
  }, [_c('image', {
    staticClass: ["top_message"],
    attrs: {
      "src": "http://img.abmau.com/abmau/e747c719d431bd3a723ef9ed3496b814.png"
    }
  }), (_vm.noreadcount > 0 && _vm.noreadcount < 100) ? _c('text', {
    staticClass: ["count"],
    style: {
      top: (_vm.titleHeight / 2 - 30) + 'px'
    }
  }, [_vm._v(_vm._s(_vm.noreadcount))]) : _vm._e(), (_vm.noreadcount > 0 && _vm.noreadcount >= 100) ? _c('text', {
    staticClass: ["_count"],
    style: {
      top: (_vm.titleHeight / 2 - 30) + 'px'
    }
  }, [_vm._v("99+")]) : _vm._e()]), _c('div', {
    staticClass: ["search_bt"],
    staticStyle: {
      backgroundColor: "#f6f6f6"
    }
  }, [_c('scrollVertical', {
    staticClass: ["scrollVertical"],
    staticStyle: {
      backgroundColor: "#f6f6f6"
    },
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
  })], 1), _c('image', {
    staticClass: ["classify_image"],
    attrs: {
      "src": "http://img.abmau.com/abmau/224798cbb7f403f26060fdd291526aea.png"
    },
    on: {
      "click": function($event) {
        _vm.searchAll(_vm.navigator.searchlink)
      }
    }
  })]), _c('line', {
    style: {
      opacity: _vm.title_bar_opacity
    }
  })], 1)])
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