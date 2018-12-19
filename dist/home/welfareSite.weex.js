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


var _welfareSite = __webpack_require__(2);

var _welfareSite2 = _interopRequireDefault(_welfareSite);

var _mixin = __webpack_require__(18);

var _mixin2 = _interopRequireDefault(_mixin);

var _utils = __webpack_require__(0);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.mixin(_mixin2.default);
_welfareSite2.default.el = '#root';
new Vue(_welfareSite2.default);

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
__vue_options__.__file = "F:\\weex\\weex_develop\\abm_dev_weex\\abm-weexSource\\src\\pages\\home\\welfareSite.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0ba4045a"
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
    "width": "750",
    "backgroundColor": "#ffffff",
    "top": "0"
  },
  "title-unselect": {
    "fontSize": "28",
    "textAlign": "center",
    "color": "#333333"
  },
  "title-select-unborder": {
    "width": "120",
    "height": "4",
    "backgroundColor": "#ffffff"
  },
  "title-select": {
    "fontSize": "28",
    "textAlign": "center",
    "color": "#CF1126"
  },
  "title-select-border": {
    "width": "120",
    "height": "4",
    "backgroundColor": "#CF1126"
  },
  "tab_header": {
    "width": "750",
    "height": "83",
    "backgroundColor": "#ffffff",
    "flexDirection": "row",
    "justifyContent": "space-around"
  },
  "title-parent-content": {
    "flex": 1,
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "#ffffff"
  },
  "in_title_bar": {
    "position": "absolute",
    "width": "750",
    "flexDirection": "row",
    "paddingBottom": "10",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "title_bar_bg": {
    "width": "750",
    "backgroundColor": "#272727"
  },
  "title_bar": {
    "width": "750",
    "flexDirection": "row",
    "paddingBottom": "10",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "back_image": {
    "width": "40",
    "height": "40",
    "marginLeft": "30"
  },
  "bar_image": {
    "width": "174",
    "height": "60"
  },
  "share_image": {
    "width": "40",
    "height": "40",
    "marginRight": "30"
  },
  "list_bg": {
    "width": "750",
    "backgroundColor": "#272727"
  },
  "cell_title_bg": {
    "width": "750",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "cell_title": {
    "fontSize": "40",
    "color": "#FFC894",
    "paddingLeft": "8",
    "fontWeight": "700"
  },
  "cell_right_title": {
    "fontSize": "22",
    "color": "#FFC894",
    "marginRight": "10"
  },
  "title_image": {
    "width": "44",
    "height": "44"
  },
  "cell_content_bg": {
    "width": "750",
    "paddingRight": "24",
    "paddingLeft": "24"
  },
  "cell_content": {
    "width": "702",
    "paddingBottom": "30"
  },
  "item-welfare": {
    "width": "702",
    "height": "307",
    "flexDirection": "row",
    "backgroundColor": "#ffffff",
    "justifyContent": "flex-start",
    "alignItems": "center",
    "borderTopRightRadius": "10",
    "borderTopLeftRadius": "10"
  },
  "item-welfare-content": {
    "width": "702",
    "height": "340",
    "backgroundColor": "#ffffff",
    "borderTopRightRadius": "10",
    "borderTopLeftRadius": "10"
  },
  "cell_content_image": {
    "width": "702",
    "height": "340",
    "borderTopLeftRadius": "10",
    "borderTopRightRadius": "10"
  },
  "cell_content_bottom": {
    "width": "702",
    "paddingLeft": "25",
    "paddingRight": "20",
    "backgroundColor": "#ffffff",
    "justifyContent": "flex-start",
    "alignItems": "flex-start",
    "borderBottomLeftRadius": "10",
    "borderBottomRightRadius": "10"
  },
  "content_title": {
    "lines": 2,
    "fontSize": "27",
    "lineHeight": "39",
    "color": "#333333",
    "paddingRight": "20",
    "marginTop": "22",
    "marginBottom": "10"
  },
  "content_price": {
    "fontSize": "28",
    "fontWeight": "700",
    "color": "#cf1126",
    "marginTop": "15"
  },
  "content_bottom_price": {
    "fontSize": "22",
    "color": "#666666",
    "marginTop": "5",
    "marginBottom": "20",
    "height": "30"
  },
  "content_bottom_price_line": {
    "height": "30",
    "paddingTop": "5",
    "marginBottom": "20",
    "textDecoration": "line-through",
    "textDecorationColor": "#666666",
    "fontSize": "22",
    "color": "#666666"
  },
  "content_bottom_buy_button": {
    "width": "147",
    "height": "48",
    "position": "absolute",
    "right": "22",
    "bottom": "24",
    "fontSize": "26",
    "borderRadius": "24",
    "color": "#ffffff",
    "textAlign": "center",
    "lineHeight": "48"
  },
  "countDown_bg_topImage": {
    "width": "321",
    "height": "175",
    "backgroundColor": "#ffffff",
    "borderTopRightRadius": "10",
    "borderTopLeftRadius": "10"
  },
  "countDown_bg": {
    "height": "58",
    "paddingTop": "15",
    "backgroundColor": "#333333",
    "opacity": 0.8,
    "borderBottomLeftRadius": "10",
    "borderBottomRightRadius": "10"
  },
  "limit_goods-type": {
    "fontSize": "22",
    "backgroundColor": "#B87F52",
    "paddingLeft": "10",
    "paddingRight": "10",
    "height": "36",
    "lineHeight": "36",
    "textAlign": "center",
    "color": "#ffffff",
    "borderRadius": "5"
  },
  "limit_goods": {
    "fontSize": "22",
    "backgroundColor": "#B87F52",
    "paddingLeft": "10",
    "paddingRight": "10",
    "marginBottom": "10",
    "marginTop": "15",
    "height": "36",
    "lineHeight": "36",
    "textAlign": "center",
    "color": "#ffffff",
    "borderRadius": "5"
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _countDown = __webpack_require__(5);

var _countDown2 = _interopRequireDefault(_countDown);

var _line = __webpack_require__(9);

var _line2 = _interopRequireDefault(_line);

var _tabSwitch = __webpack_require__(13);

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
//
//
//
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
var utilModule = weex.requireModule("utilModule");
var dom = weex.requireModule('dom');
exports.default = {
    components: { CountDown: _countDown2.default, line: _line2.default, tabSwitch: _tabSwitch2.default },
    data: function data() {
        return {
            isShowTab: false,
            max_scroll: 260,
            height: height,
            bottom: bottom,
            list_bg_color: '#fff',
            nativeBarHeight: 0,
            titleHeight: 0,
            indexPage: 0,
            banner: {},
            data: [],
            banner_height: 0,
            iphoneX_banner_height: 0,
            showTitleBar: false,
            show_title_bar: true,
            tabTitles: [],
            title_bar_opacity: 0,
            isIphoneX: false,
            day: '',
            hour: '',
            minute: '',
            countDownTitle: '距开始',
            countDownTime: 0,
            indexTitle: 0,
            offsetHeight: 0,
            isClickTab: false,
            titleMaxLength: 0,
            countDownRef: null,
            countDownIndex: {},
            btnStatus: -1,
            tabStyles: {
                parentWidth: 750,
                bgColor: '#FFFFFF',
                titleColor: '#333333',
                activeTitleColor: '#CF1126',
                activeBgColor: '#FFFFFF',
                isActiveTitleBold: true,
                height: 83,
                width: 250,
                fontSize: 32,
                hasActiveBottom: true,
                activeBottomColor: '#CF1126',
                activeBottomHeight: 4,
                activeBottomWidth: 150,
                textPaddingLeft: 15,
                textPaddingRight: 15
            }
        };
    },

    methods: {
        viewstart: function viewstart() {
            this.fetch(null, null);
            if (weex.config.env.platform.toLowerCase() === 'ios') {
                if (utilModule.changeStatusBarColor) {
                    utilModule.changeStatusBarColor('#fff');
                } else {
                    console.log('不存在该方法-->utilModule.changeStatusBarColor');
                }
            };
        },
        clickItem: function clickItem(e) {
            var _this = this;
            var index = e.page;
            var el;
            if (index == 0) {
                el = _this.$refs.header;
                _this.offsetHeight = 0;
            } else {
                el = _this.$refs.cell[index];
                _this.offsetHeight = parseInt(_this.titleHeight) + parseInt(_this.nativeBarHeight) + 83;
                if (index == 2) _this.offsetHeight = 70;
            }
            if (!el) return;
            dom.scrollToElement(el, { offset: -_this.offsetHeight });
            _this.isClickTab = true;
            _this.indexTitle = index;
        },
        clickBannerInfo: function clickBannerInfo() {
            this.jumpTo2('home/welfareInfo', '', {});
        },
        hideItem: function hideItem(index) {
            if (index != this.indexTitle) return;
            this.isClickTab = false;
        },
        showItem: function showItem(index) {
            var self = this;
            if (self.isClickTab) return;
            self.indexTitle = index;
        },

        //返回事件
        clickBack: function clickBack() {
            this.popBar();
        },

        //查看试用规则
        checkRule: function checkRule() {
            this.jumpTo2('tryout/trialRules', '', {});
        },

        //跳转试用中心
        clickTryCenter: function clickTryCenter() {
            this.jumpTo2('tryout/core', '', {});
        },

        //倒计时结束刷新页面
        countDownFinish: function countDownFinish(e) {
            console.log('countDownFinish--json' + e.ref);
            this.countDownIndex = e.index;
            this.fetch(e.ref, e.index);
        },

        //监听滑动事件
        onScroll: function onScroll(event) {
            var self = this;var offsetY = self.isIphoneX ? self.iphoneX_banner_height : self.banner_height;
            self.isShowTab = event.contentOffset.y < -(offsetY - parseInt(self.titleHeight) - parseInt(self.nativeBarHeight)) ? true : false;
            if (event.contentOffset.y > 0) {
                self.title_bar_opacity = 0;
                return;
            }
            var screen = Math.abs(event.contentOffset.y);
            self.screenOffset = screen;
            if (screen >= self.max_scroll) {
                self.title_bar_opacity = 1;
            } else {
                self.title_bar_opacity = (screen / self.max_scroll).toFixed(2);
            }
        },
        clickDetail: function clickDetail(item) {
            if (item.type != 1 && item.server_time > item.end_time) return;
            switch (item.type) {
                case 1:
                    this.jumpTo2('home/welfareDetail', '', { id: item.id });
                    break;
                case 4:
                    this.jumpTo2('tryout/tryDetail', '', { id: item.trial_act_id, status: item.trial_status });
                    break;
                default:
                    if (item.goods_id != 0) {
                        if (this.compareVersion(weex.config.env.appVersion, '3.4.0')) {
                            this.jumpTo2('shop/goodsDetailsParent', '', { goods_id: item.goods_id });
                        } else if (this.compareVersion(weex.config.env.appVersion, '3.0.7')) {
                            this.jumpTo2('shop/goodsDetails', '', { goods_id: item.goods_id });
                        }
                    }
                    break;
            }
        },

        //分享事件
        // clickShare(event){
        //     let self = this;
        //     if(event.timestamp - self.lastTimestamp < 3000)return;
        //     self.lastTimestamp = self.timestamp;
        //         utilModule.getABMShareView({
        //             'share_type': 'share_goods',
        //             'title': self.banner.sharetitle,
        //             'desc': self.banner.sharedesc,
        //             'webUrl': self.banner.sharelink,
        //             'imageUrl': self.banner.shareimg,
        //             'copy_item': self.banner.sharelink,
        //         });
        // },

        fetch: function fetch(ref, countDownIndex) {
            var self = this;
            self.Get(self.api().welfare_channel, {}, function (res) {
                if (res.data.code == 0) {
                    self.banner = res.data.data.banner;
                    self.data = res.data.data.data;
                    var maxLen;
                    if (self.banner != null) {
                        self.showTitleBar = true;
                        self.banner_height = 750 / (self.banner.image.width / self.banner.image.height);
                        self.iphoneX_banner_height = 750 / (self.banner.iphone.width / self.banner.iphone.height);
                    }
                    if (self.tabTitles.length > 0) self.tabTitles = [];
                    var out_index;var in_index;
                    if (ref != null) {
                        if (countDownIndex) {
                            if (countDownIndex.in_index == null) {
                                out_index = countDownIndex.out_index;
                                var obj = self.data[out_index];
                                if (obj) {
                                    /*item.start_time-item.server_time>=4允许误差在4秒以内*/
                                    var time_end_timestamp = obj.end_time - obj.server_time < 4 ? 0 : obj.end_time - obj.server_time;
                                    var time_start_timestamp = obj.start_time - obj.server_time < 4 ? 0 : obj.start_time - obj.server_time;
                                    var time = time_start_timestamp != 0 ? time_start_timestamp : time_end_timestamp;
                                    ref.left_title = time_start_timestamp != 0 ? '距开始' : '距结束';
                                    obj.server_time = time_start_timestamp != 0 ? obj.start_time : time_end_timestamp < 4 ? obj.end_time : obj.server_time + time_start_timestamp;
                                    ref.startCountDownDate(time);
                                    console.log('重新赋值时间====>' + time + 'start_time==>' + obj.start_time + 'end_time===>' + obj.end_time + 'server_time' + obj.server_time);
                                }
                            } else {
                                out_index = countDownIndex.out_index;
                                in_index = countDownIndex.in_index;
                                var item = self.data[out_index].data[in_index];
                                if (item) {
                                    /*item.start_time-item.server_time>=4允许误差在4秒以内*/
                                    var time_end_timestamp = item.end_time - item.server_time < 4 ? 0 : item.end_time - item.server_time;
                                    var time_start_timestamp = item.start_time - item.server_time;
                                    var time = time_start_timestamp >= 4 ? time_start_timestamp : time_end_timestamp;
                                    ref.left_title = time_start_timestamp >= 4 ? '距开始' : '距结束';
                                    item.server_time = time_start_timestamp >= 4 ? item.start_time : time_end_timestamp < 4 ? item.end_time : item.server_time + time_start_timestamp;
                                    ref.startCountDownDate(time);
                                    console.log('重新赋值时间====>' + time + 'start_time==>' + item.start_time + 'end_time===>' + item.end_time + 'server_time' + item.server_time);
                                }
                            }
                        }
                    }
                    for (var i = 0; i < self.data.length; i++) {
                        if (self.data.length >= 2) {
                            self.tabTitles.push({ 'title': self.data[i].title });
                            var curLen = self.data[i].title.length;
                            if (curLen > maxLen) {
                                maxLen = curLen;
                            }
                        }
                    }
                    self.titleMaxLength = maxLen;
                    var count = self.tabTitles.length;
                    if (count == 0) return;
                    if (count == 1) {
                        self.tabStyles.width = 750 / count;
                        self.tabStyles.activeBottomWidth = 750;
                    } else if (1 < count && count < 4) {
                        self.tabStyles.width = 750 / count;
                        self.tabStyles.activeBottomWidth = 750 / count - 70;
                    } else {
                        if (self.titleMaxLength <= 4) {
                            self.tabStyles.width = 53 * self.titleMaxLength;
                        } else if (self.titleMaxLength = 5) {
                            self.tabStyles.width = 42 * self.titleMaxLength;
                        } else {
                            self.tabStyles.width = 42 * self.titleMaxLength;
                        }
                        self.tabStyles.activeBottomWidth = self.tabStyles.width - 20;
                    }
                } else {
                    promptModule.showPrompt({ msg: res.data.msg, type: "err" });
                }
            });
        }
    },

    updated: function updated() {
        var self = this;
        self.list_bg_color = '#272727';
    },

    created: function created() {
        var _this = this;
        _this.getStatusBarHeight(_this);
        _this.getTitleHeight(_this);
        _this.getTopHeight(_this);
        _this.iPhoneX(_this);
        _this.isIpx(_this);
        _this.fetch(null, null);
        if (weex.config.env.platform.toLowerCase() === 'ios') {
            if (utilModule.changeStatusBarColor) {
                utilModule.changeStatusBarColor('#fff');
            } else {
                console.log('不存在该方法-->utilModule.changeStatusBarColor');
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
__vue_options__.__file = "F:\\weex\\weex_develop\\abm_dev_weex\\abm-weexSource\\src\\components\\countDown.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-24fa7810"
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
  "countdown_text": {
    "fontSize": "22",
    "color": "#ffffff",
    "marginLeft": "5",
    "marginRight": "5"
  },
  "countdown_time": {
    "fontSize": "22",
    "color": "#333333",
    "backgroundColor": "#ffffff",
    "width": "30",
    "height": "30",
    "lineHeight": "30",
    "marginRight": "5",
    "marginLeft": "5",
    "textAlign": "center",
    "borderRadius": "5"
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


exports.default = {
    components: {},
    props: {
        left_title: {
            type: String,
            default: '距开始'
        },
        countDownInterval: {
            type: Number,
            default: 0
        },

        time: {
            type: Number,
            default: 0
        },
        day: {
            type: String,
            default: '0'
        },
        hour: {
            type: String,
            default: '0'
        },
        minute: {
            type: String,
            default: '0'
        },
        second: {
            type: String,
            default: '0'
        },
        isShow: {
            type: Boolean,
            default: true
        },
        index: {
            type: Object,
            default: {
                out_index: 0,
                in_index: 0
            }
        },
        textStyle: {
            type: Object,
            default: {
                fontSize: '22px',
                color: '#fff'
            }
        },
        timeStyle: {
            type: Object,
            default: {
                fontSize: '22px',
                color: '#333333',
                backgroundColor: '#fff',
                width: '30px',
                height: '30px'
            }
        }

    },
    data: function data() {
        return {
            isCountDown: false
        };
    },

    methods: {
        //开始倒计时
        startCountDownDate: function startCountDownDate(time) {
            var _this = this;
            if (time == 0 && _this.countDownInterval > 0) {
                console.log('countDownFinish--finish' + time == 0);
                clearInterval(_this.countDownInterval);
                return;
            }
            //开始倒计时
            _this.countDownInterval = _this.startCountDown(time, function (t) {
                //计算出时间 天 时 分
                _this.getTimeDifferences(t);
            }, function (res) {
                console.log('countDownFinish--finish' + res);
                if (_this.countDownInterval == res) {
                    clearInterval(res);
                    _this.countDownFinish();
                }
            });
        },
        getTimeDifferences: function getTimeDifferences(usedTime) {
            var self = this;

            var days = Math.floor(usedTime / (24 * 3600));
            //计算出小时数
            var leave1 = usedTime % (24 * 3600);
            var hours = Math.floor(leave1 / 3600);
            //计算相差分钟数
            var leave2 = leave1 % 3600;
            var minutes = Math.floor(leave2 / 60);
            var leave3 = leave2 % 60;
            var second = Math.floor(leave3);
            var dayStr = days < 10 ? '0' + days : days;
            var hourStr = hours < 10 ? '0' + hours : hours;
            var minuteStr = minutes < 10 ? '0' + minutes : minutes;
            var secondStr = second < 10 ? '0' + second : second;

            self.day = dayStr;self.hour = hourStr;self.minute = minuteStr;self.second = secondStr;

            self.isShow = days == 0 ? false : true;
        },
        startCountDown: function startCountDown(time, each, call) {
            console.log('创建时器====>');
            var t = time;
            finish();
            var countDown = setInterval(finish, 1000);
            console.log('创建了定时器对象====>' + countDown);
            function finish() {
                t = t - 1;
                if (typeof each == 'function') {
                    each(t);
                }
                if (t == 0) {
                    console.log('关闭定时器====>' + countDown);
                    if (typeof call == 'function') {
                        call(countDown);
                    }
                }
            }
            return countDown;
        },
        countDownFinish: function countDownFinish() {
            console.log('countDownFinish' + JSON.stringify(this.index));
            this.$emit('countDownFinish', { ref: this, index: this.index });
        }
    },

    created: function created() {
        console.log('this.time====>' + this.time);
        this.startCountDownDate(this.time);
    },
    destroyed: function destroyed() {
        clearInterval(this.countDownInterval);
        console.log('关闭定时器====>' + this.countDownInterval);
    }
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start"
    }
  }, [(_vm.isShow) ? _c('div', {
    staticStyle: {
      flexDirection: "row"
    }
  }, [_c('text', {
    staticClass: ["countdown_text"],
    style: {
      textStyle: _vm.textStyle
    }
  }, [_vm._v(_vm._s(_vm.left_title))]), _c('text', {
    staticClass: ["countdown_time"],
    style: {
      timeStyle: _vm.timeStyle
    }
  }, [_vm._v(_vm._s(_vm.day))]), _c('text', {
    staticClass: ["countdown_text"],
    style: {
      textStyle: _vm.textStyle
    }
  }, [_vm._v("天")]), _c('text', {
    staticClass: ["countdown_time"],
    style: {
      timeStyle: _vm.timeStyle
    }
  }, [_vm._v(_vm._s(_vm.hour))]), _c('text', {
    staticClass: ["countdown_text"],
    style: {
      textStyle: _vm.textStyle
    }
  }, [_vm._v("时")]), _c('text', {
    staticClass: ["countdown_time"],
    style: {
      timeStyle: _vm.timeStyle
    }
  }, [_vm._v(_vm._s(_vm.minute))]), _c('text', {
    staticClass: ["countdown_text"],
    style: {
      textStyle: _vm.textStyle
    }
  }, [_vm._v("分")])]) : _vm._e(), (!_vm.isShow) ? _c('div', {
    staticStyle: {
      flexDirection: "row"
    }
  }, [_c('text', {
    staticClass: ["countdown_text"],
    style: {
      textStyle: _vm.textStyle
    }
  }, [_vm._v(_vm._s(_vm.left_title))]), _c('text', {
    staticClass: ["countdown_time"],
    style: {
      timeStyle: _vm.timeStyle
    }
  }, [_vm._v(_vm._s(_vm.hour))]), _c('text', {
    staticClass: ["countdown_text"],
    style: {
      textStyle: _vm.textStyle
    }
  }, [_vm._v("时")]), _c('text', {
    staticClass: ["countdown_time"],
    style: {
      timeStyle: _vm.timeStyle
    }
  }, [_vm._v(_vm._s(_vm.minute))]), _c('text', {
    staticClass: ["countdown_text"],
    style: {
      textStyle: _vm.textStyle
    }
  }, [_vm._v("分")]), _c('text', {
    staticClass: ["countdown_time"],
    style: {
      timeStyle: _vm.timeStyle
    }
  }, [_vm._v(_vm._s(_vm.second))]), _c('text', {
    staticClass: ["countdown_text"],
    style: {
      textStyle: _vm.textStyle
    }
  }, [_vm._v("秒")])]) : _vm._e()])
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
/* 14 */
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
/* 16 */
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
/* 17 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    on: {
      "viewstart": function($event) {
        _vm.viewstart()
      }
    }
  }, [_c('div', {
    staticClass: ["parent"],
    style: {
      bottom: _vm.bottom
    }
  }, [_c('list', {
    style: {
      backgroundColor: _vm.list_bg_color
    },
    on: {
      "scroll": _vm.onScroll
    }
  }, [(_vm.banner != null) ? _c('cell', {
    ref: "header",
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('div', [(!_vm.isIphoneX && _vm.banner.image_url != null) ? _c('image', {
    style: {
      width: '750px',
      height: _vm.banner_height + 'px',
      backgroundColor: '#f6f6f6'
    },
    attrs: {
      "src": _vm.banner.image_url
    },
    on: {
      "click": function($event) {
        _vm.jumpToBanner(_vm.banner.sharetitle, _vm.banner.url, _vm.banner.sharelink, _vm.banner.shareimg, _vm.banner.sharetitle, _vm.banner.sharedesc)
      }
    }
  }) : _vm._e(), (_vm.isIphoneX && _vm.banner.image_url != null) ? _c('image', {
    style: {
      width: '750px',
      height: _vm.iphoneX_banner_height + 'px',
      backgroundColor: '#f6f6f6'
    },
    attrs: {
      "src": _vm.banner.iphone.file_url
    },
    on: {
      "click": function($event) {
        _vm.jumpToBanner(_vm.banner.sharetitle, _vm.banner.url, _vm.banner.sharelink, _vm.banner.shareimg, _vm.banner.sharetitle, _vm.banner.sharedesc)
      }
    }
  }) : _vm._e(), _c('text', {
    staticStyle: {
      position: "absolute",
      width: "202px",
      textAlign: "center",
      height: "50px",
      bottom: "20px",
      right: "20px",
      fontSize: "22px",
      color: "#fff",
      backgroundColor: "#000000",
      opacity: "0.8",
      lineHeight: "50px",
      borderRadius: "25px"
    },
    on: {
      "click": function($event) {
        _vm.clickBannerInfo()
      }
    }
  }, [_vm._v("关于福利星期三？")])]), (_vm.show_title_bar) ? _c('div', {
    staticClass: ["in_title_bar"],
    style: {
      height: _vm.titleHeight + 'px',
      top: _vm.nativeBarHeight + 'px'
    }
  }, [_c('image', {
    staticClass: ["back_image"],
    attrs: {
      "resize": "contain",
      "src": "http://img.abmau.com/abmau/46123bd916f753fc0917cb93bc9f649d.png"
    },
    on: {
      "click": function($event) {
        _vm.clickBack()
      }
    }
  }), _c('image', {
    staticClass: ["bar_image"],
    attrs: {
      "resize": "contain",
      "src": "http://img.abmau.com/abmau/d8a9795681070ca60647f6038da29cd6.png"
    }
  }), _c('div', {
    staticStyle: {
      marginRight: "30px",
      width: "40px"
    }
  })]) : _vm._e()]) : _vm._e(), (_vm.tabTitles && _vm.tabTitles.length > 0) ? _c('cell', {
    style: {
      height: '83px',
      backgroundColor: '#fff'
    },
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('tab-switch', {
    attrs: {
      "tabTitles": _vm.tabTitles,
      "tabStyles": _vm.tabStyles,
      "currentPage": _vm.indexTitle
    },
    on: {
      "clickTab": _vm.clickItem
    }
  })], 1) : _vm._e(), _vm._l((_vm.data), function(obj, index) {
    return _c('cell', {
      key: index,
      ref: "cell",
      refInFor: true,
      staticClass: ["list_bg"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [(obj.data.length > 0) ? _c('div', {
      staticClass: ["cell_title_bg"],
      on: {
        "disappear": function($event) {
          _vm.hideItem(index)
        }
      }
    }, [_c('div', {
      staticStyle: {
        flexDirection: "row",
        height: "117px",
        alignItems: "center"
      }
    }, [_c('image', {
      staticClass: ["title_image"],
      attrs: {
        "src": obj.url
      }
    }), _c('text', {
      staticClass: ["cell_title"]
    }, [_vm._v(_vm._s(obj.title))])]), (obj.type == 4) ? _c('text', {
      staticClass: ["cell_right_title"],
      staticStyle: {
        position: "absolute",
        top: "50px",
        right: "30px"
      },
      on: {
        "click": function($event) {
          _vm.clickTryCenter()
        }
      }
    }, [_vm._v("试用中心 ＞")]) : _vm._e(), (obj.type == 3 && obj.end_time > obj.server_time) ? _c('count-down', {
      staticStyle: {
        width: "702px",
        height: "61px"
      },
      attrs: {
        "index": {
          out_index: index,
          in_index: null
        },
        "left_title": obj.start_time > obj.server_time ? '距开始' : '距结束',
        "time": obj.start_time > obj.server_time ? obj.start_time - obj.server_time : obj.end_time - obj.server_time
      },
      on: {
        "countDownFinish": _vm.countDownFinish
      }
    }) : _vm._e(), (obj.type == 3 && obj.server_time >= obj.end_time) ? _c('text', {
      staticStyle: {
        width: "702px",
        height: "61px",
        fontSize: "22px",
        color: "#fff",
        lineHeight: "61px",
        textAlign: "center"
      }
    }, [_vm._v("本场已结束")]) : _vm._e()], 1) : _vm._e(), _vm._l((obj.data), function(item, in_index) {
      return _c('div', {
        staticClass: ["cell_content_bg"],
        on: {
          "appear": function($event) {
            _vm.showItem(index)
          }
        }
      }, [_c('div', {
        staticClass: ["cell_content"],
        staticStyle: {
          backgroundColor: "#272727"
        },
        on: {
          "click": function($event) {
            _vm.clickDetail(item)
          }
        }
      }, [(item.type == 1 || item.type == 2) ? _c('image', {
        staticClass: ["cell_content_image"],
        attrs: {
          "src": item.image_url
        }
      }) : _vm._e(), (item.tag_url && item.tag_url != '') ? _c('div', {
        staticStyle: {
          position: "absolute",
          top: "0",
          left: "0",
          width: "140px",
          height: "54px"
        }
      }, [_c('image', {
        staticStyle: {
          flex: "1"
        },
        attrs: {
          "src": item.tag_url
        }
      })]) : _vm._e(), (item.type == 1 || item.type == 2) ? _c('div', {
        staticStyle: {
          position: "absolute",
          width: "321px",
          top: "80px",
          left: "30px"
        }
      }, [_c('image', {
        staticClass: ["countDown_bg_topImage"],
        attrs: {
          "src": item.image_thumb_url
        }
      }), (item.end_time > item.server_time) ? _c('count-down', {
        staticClass: ["countDown_bg"],
        attrs: {
          "index": {
            out_index: index,
            in_index: in_index
          },
          "left_title": item.start_time > item.server_time ? '距开始' : '距结束',
          "time": item.start_time > item.server_time ? item.start_time - item.server_time : item.end_time - item.server_time
        },
        on: {
          "countDownFinish": _vm.countDownFinish
        }
      }) : _vm._e()], 1) : _vm._e(), (item.server_time >= item.end_time && (item.type == 1 || item.type == 2)) ? _c('div', {
        staticStyle: {
          position: "absolute",
          width: "321px",
          top: "80px",
          left: "30px",
          backgroundColor: "#322e2f",
          borderRadius: "10px",
          opacity: "0.8"
        }
      }, [_c('text', {
        staticStyle: {
          width: "321px",
          height: "233px",
          lineHeight: "233px",
          fontSize: "30px",
          color: "#fff",
          textAlign: "center"
        }
      }, [_vm._v("本场已结束 ")])]) : _vm._e(), (item.type == 3) ? _c('div', {
        staticClass: ["item-welfare"]
      }, [_c('image', {
        staticStyle: {
          width: "247px",
          height: "247px",
          marginLeft: "25px"
        },
        attrs: {
          "src": item.image_url
        }
      }), (item.stock == 0 && item.start_time <= item.server_time) ? _c('div', {
        staticStyle: {
          left: "25px",
          top: "30px",
          position: "absolute",
          height: "247px",
          width: "247px",
          backgroundColor: "#322e2f",
          opacity: "0.8",
          justifyContent: "center",
          alignItems: "center"
        }
      }, [_c('text', {
        staticStyle: {
          borderColor: "rgba(255,255,255,0.7)",
          borderColor: "#fff",
          borderWidth: "2px",
          borderRadius: "62px",
          width: "124px",
          height: "124px",
          lineHeight: "124px",
          fontSize: "30px",
          color: "#fff",
          textAlign: "center"
        }
      }, [_vm._v("已售罄 ")])]) : _vm._e(), _c('div', {
        staticStyle: {
          justifyContent: "space-between",
          height: "247px",
          paddingLeft: "30px",
          paddingBottom: "10px"
        }
      }, [_c('div', [_c('text', {
        staticStyle: {
          width: "382px",
          fontSize: "28px",
          lineHeight: "42px",
          color: "#333333",
          lines: "2",
          paddingTop: "10px"
        }
      }, [_vm._v(_vm._s(item.notice))]), _c('text', {
        staticStyle: {
          width: "382px",
          paddingTop: "15px",
          lineHeight: "30px",
          fontSize: "24px",
          color: "#999999",
          lines: "2"
        }
      }, [_vm._v(_vm._s(item.name))])]), _c('div', {
        staticStyle: {
          height: "36px",
          justifyContent: "flex-start",
          alignItems: "flex-start"
        }
      }, [_c('text', {
        staticClass: ["limit_goods-type"]
      }, [_vm._v("限量" + _vm._s(item.quantity) + "件")])])])]) : _vm._e(), (item.type == 4) ? _c('div', {
        staticClass: ["item-welfare-content"]
      }, [_c('image', {
        staticClass: ["cell_content_image"],
        attrs: {
          "src": item.image_url
        }
      }), _c('div', {
        staticStyle: {
          position: "absolute",
          left: "0",
          right: "0",
          bottom: "0",
          height: "58px",
          backgroundColor: "#333333",
          opacity: "0.8",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }
      }, [(item.server_time < item.end_time) ? _c('count-down', {
        staticStyle: {
          marginLeft: "29px"
        },
        attrs: {
          "index": {
            out_index: index,
            in_index: in_index
          },
          "left_title": item.start_time > item.server_time ? '距开始' : '距结束',
          "time": item.start_time > item.server_time ? item.start_time - item.server_time : item.end_time - item.server_time
        },
        on: {
          "countDownFinish": _vm.countDownFinish
        }
      }) : _vm._e(), (item.server_time >= item.end_time) ? _c('text', {
        staticStyle: {
          fontSize: "22px",
          color: "#fff",
          left: "35px"
        }
      }, [_vm._v("本场已结束")]) : _vm._e(), _c('text', {
        staticStyle: {
          color: "#fff",
          fontSize: "22px",
          marginRight: "32px"
        },
        on: {
          "click": function($event) {
            _vm.checkRule()
          }
        }
      }, [_vm._v("  查看规则 ＞")])], 1)]) : _vm._e(), (item.type == 3) ? _c('div', {
        staticStyle: {
          backgroundColor: "#e1e1e1",
          height: "1px"
        }
      }) : _vm._e(), (item.type != 1) ? _c('div', {
        staticClass: ["cell_content_bottom"]
      }, [(item.type == 2) ? _c('text', {
        staticClass: ["content_title"]
      }, [_vm._v(_vm._s(item.goods_name))]) : _vm._e(), (item.type == 2) ? _c('div', {
        staticStyle: {
          flexDirection: "row"
        }
      }, [(item.shareprice != 0) ? _c('text', {
        staticClass: ["content_price"]
      }, [_vm._v(_vm._s(item.title) + " ¥" + _vm._s(item.shareprice))]) : _vm._e(), (item.shareprice == 0 && item.retail_tax == 'no_show') ? _c('text', {
        staticClass: ["content_price"]
      }, [_vm._v(_vm._s(item.retail_title) + " ¥" + _vm._s(item.disprice))]) : _vm._e(), (item.shareprice == 0 && item.retail_tax != 'no_show') ? _c('text', {
        staticClass: ["content_price"]
      }, [_vm._v(_vm._s(item.retail_title) + " ¥" + _vm._s(item.disprice))]) : _vm._e(), _c('text', {
        staticClass: ["limit_goods"],
        staticStyle: {
          marginLeft: "20px"
        }
      }, [_vm._v("限量" + _vm._s(item.quantity) + "件")])]) : _vm._e(), (item.type == 4) ? _c('text', {
        staticClass: ["content_title"]
      }, [_vm._v(_vm._s(item.trial_title))]) : _vm._e(), (item.type == 4) ? _c('div', {
        staticStyle: {
          flexDirection: "row"
        }
      }, [_c('text', {
        staticClass: ["content_price"]
      }, [_vm._v(_vm._s(item.trial_price_title + ' ¥' + item.trial_price))]), _c('text', {
        staticClass: ["limit_goods"],
        staticStyle: {
          marginLeft: "20px"
        }
      }, [_vm._v("限量" + _vm._s(item.quantity) + "件")])]) : _vm._e(), (item.shareprice != 0 && item.type == 3) ? _c('text', {
        staticClass: ["content_price"]
      }, [_vm._v(_vm._s(item.spike_price_title) + " ¥" + _vm._s(item.shareprice))]) : _vm._e(), (item.shareprice == 0 && item.retail_tax == 'no_show' && item.type == 3) ? _c('text', {
        staticClass: ["content_price"]
      }, [_vm._v(_vm._s(item.spike_price_title) + " ¥" + _vm._s(item.disprice))]) : _vm._e(), (item.shareprice == 0 && item.retail_tax != 'no_show' && item.type == 3) ? _c('text', {
        staticClass: ["content_price"]
      }, [_vm._v(_vm._s(item.spike_price_title) + " ¥" + _vm._s(item.disprice))]) : _vm._e(), _c('div', {
        staticStyle: {
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center"
        }
      }, [_c('text', {
        staticClass: ["content_bottom_price"]
      }, [_vm._v(_vm._s(item.price_title) + " ¥" + _vm._s(item.price))]), (item.market_price != null) ? _c('text', {
        staticClass: ["content_bottom_price"],
        staticStyle: {
          marginLeft: "10px"
        }
      }, [_vm._v("(")]) : _vm._e(), (item.market_price != null) ? _c('text', {
        staticClass: ["content_bottom_price_line"]
      }, [_vm._v("¥" + _vm._s(item.market_price))]) : _vm._e(), (item.market_price != null) ? _c('text', {
        staticClass: ["content_bottom_price"]
      }, [_vm._v(")")]) : _vm._e()]), (item.start_time > item.server_time) ? _c('text', {
        staticClass: ["content_bottom_buy_button"],
        style: {
          backgroundColor: '#333333'
        },
        on: {
          "click": function($event) {
            _vm.clickDetail(item)
          }
        }
      }, [_vm._v("即将开售")]) : _vm._e(), (item.stock == 0 && item.start_time <= item.server_time && item.end_time > item.server_time) ? _c('text', {
        staticClass: ["content_bottom_buy_button"],
        style: {
          backgroundColor: '#999999'
        },
        on: {
          "click": function($event) {
            _vm.clickDetail(item)
          }
        }
      }, [_vm._v("已售罄")]) : _vm._e(), (item.stock > 0 && item.server_time >= item.start_time && item.end_time > item.server_time) ? _c('text', {
        staticClass: ["content_bottom_buy_button"],
        style: {
          backgroundColor: '#cf1125'
        },
        on: {
          "click": function($event) {
            _vm.clickDetail(item)
          }
        }
      }, [_vm._v("立即抢购")]) : _vm._e(), (item.type == 4 && item.stock > 0 && item.server_time >= item.start_time && item.end_time > item.server_time) ? _c('text', {
        staticClass: ["content_bottom_buy_button"],
        style: {
          backgroundColor: '#cf1125'
        },
        on: {
          "click": function($event) {
            _vm.clickDetail(item)
          }
        }
      }, [_vm._v("立即申请")]) : _vm._e(), (item.end_time <= item.server_time) ? _c('text', {
        staticClass: ["content_bottom_buy_button"],
        style: {
          backgroundColor: '#999999'
        },
        on: {
          "click": function($event) {
            _vm.clickDetail(item)
          }
        }
      }, [_vm._v("已结束")]) : _vm._e()]) : _vm._e()])])
    }), (obj.data && obj.data.length > 0) ? _c('image', {
      staticStyle: {
        height: "20px",
        width: "750px"
      },
      attrs: {
        "src": "http://img.abmau.com/abmau/a7d5ee93e9b312b9ec59648588958d2b.jpg"
      }
    }) : _vm._e()], 2)
  }), _c('cell', {
    staticStyle: {
      height: "20px",
      backgroundColor: "#272727"
    },
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  })], 2)]), _c('div', {
    staticClass: ["title_bar_bg"],
    style: {
      opacity: _vm.title_bar_opacity,
      backgroundColor: '#272727'
    }
  }, [_c('div', {
    staticClass: ["title_bar"],
    style: {
      height: _vm.titleHeight + 'px',
      marginTop: _vm.nativeBarHeight + 'px'
    }
  }, [_c('image', {
    staticClass: ["back_image"],
    attrs: {
      "resize": "contain",
      "src": 'http://img.abmau.com/abmau/46123bd916f753fc0917cb93bc9f649d.png'
    },
    on: {
      "click": function($event) {
        _vm.clickBack()
      }
    }
  }), _c('image', {
    staticClass: ["bar_image"],
    attrs: {
      "resize": "contain",
      "src": 'http://img.abmau.com/abmau/d8a9795681070ca60647f6038da29cd6.png'
    }
  }), _c('div', {
    staticStyle: {
      marginRight: "30px",
      width: "40px"
    }
  })])]), (_vm.tabTitles && _vm.tabTitles.length > 0 && _vm.isShowTab) ? _c('div', {
    style: {
      height: '83px',
      position: _vm.absolute,
      left: 0,
      right: 0
    }
  }, [_c('tab-switch', {
    attrs: {
      "tabTitles": _vm.tabTitles,
      "tabStyles": _vm.tabStyles,
      "currentPage": _vm.indexTitle
    },
    on: {
      "clickTab": _vm.clickItem
    }
  })], 1) : _vm._e()])
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