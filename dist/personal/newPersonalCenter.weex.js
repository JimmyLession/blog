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

var _api = __webpack_require__(29);

var _api2 = _interopRequireDefault(_api);

var _event = __webpack_require__(30);

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


var _newPersonalCenter = __webpack_require__(3);

var _newPersonalCenter2 = _interopRequireDefault(_newPersonalCenter);

var _mixin = __webpack_require__(28);

var _mixin2 = _interopRequireDefault(_mixin);

var _utils = __webpack_require__(1);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.mixin(_mixin2.default);
_newPersonalCenter2.default.el = '#root';
new Vue(_newPersonalCenter2.default);

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
__vue_options__.__file = "F:\\weex\\weex_develop\\abm_dev_weex\\abm-weexSource\\src\\pages\\personal\\newPersonalCenter.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-34b00976"
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
  "verify-title": {
    "fontSize": "32",
    "color": "#333333",
    "width": "570",
    "lineHeight": "110",
    "height": "110",
    "textAlign": "center"
  },
  "mask-confirm": {
    "height": "70",
    "lineHeight": "70",
    "textAlign": "center",
    "color": "#ffffff",
    "fontSize": "30"
  },
  "mask-bt": {
    "position": "absolute",
    "left": "55",
    "right": "55",
    "bottom": "40",
    "width": "460",
    "height": "70",
    "backgroundColor": "#CF1126",
    "borderRadius": "4",
    "flexDirection": "row",
    "justifyContent": "space-around",
    "alignItems": "center"
  },
  "mask-line": {
    "width": "580",
    "height": "1",
    "backgroundColor": "#e1e1e1"
  },
  "mask-content-mask": {
    "width": "750",
    "paddingTop": "9"
  },
  "mask-content-text": {
    "width": "570",
    "paddingTop": "20",
    "fontSize": "24",
    "color": "#333333",
    "paddingLeft": "40",
    "paddingRight": "30"
  },
  "mask-close": {
    "position": "absolute",
    "right": "30",
    "top": "20",
    "width": "40",
    "height": "40"
  },
  "mask-title": {
    "position": "relative",
    "width": "570",
    "height": "110",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "mask-verify": {
    "width": "570",
    "height": "772",
    "backgroundColor": "#ffffff"
  },
  "vip-upgrade-button-middle": {
    "marginRight": "20",
    "width": "144",
    "height": "44",
    "lineHeight": "44",
    "textAlign": "center",
    "color": "#ffffff",
    "fontSize": "22",
    "borderRadius": "4",
    "backgroundColor": "#333333",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "vip-upgrade-button": {
    "marginRight": "20",
    "width": "144",
    "height": "44",
    "lineHeight": "44",
    "textAlign": "center",
    "color": "#ffffff",
    "fontSize": "22",
    "borderRadius": "4",
    "backgroundColor": "#333333",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "vip-upgrade-button-rank": {
    "marginRight": "20",
    "width": "168",
    "height": "44",
    "lineHeight": "44",
    "textAlign": "center",
    "color": "#ffffff",
    "fontSize": "22",
    "borderRadius": "4",
    "backgroundColor": "#333333",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "eleven_text-text-num": {
    "fontSize": "26",
    "height": "30",
    "lineHeight": "30",
    "textAlign": "left",
    "color": "#333333"
  },
  "eleven_text-num": {
    "fontSize": "26",
    "height": "30",
    "lineHeight": "30",
    "fontWeight": "bold",
    "textAlign": "center",
    "color": "#CF1126"
  },
  "parent": {
    "position": "absolute",
    "backgroundColor": "#F6F6F6",
    "width": "750",
    "left": 0,
    "right": 0
  },
  "personal": {
    "width": "750",
    "position": "relative"
  },
  "personal-top-bg": {
    "width": "750",
    "position": "absolute",
    "left": 0,
    "top": 0,
    "bottom": 0
  },
  "personal-title": {
    "width": "750",
    "flexDirection": "row",
    "justifyContent": "flex-end",
    "alignItems": "center"
  },
  "personal-float": {
    "width": "750",
    "position": "absolute",
    "top": 0,
    "left": 0
  },
  "personal-float-parent": {
    "position": "relative"
  },
  "personal-float-content": {
    "width": "750",
    "position": "absolute",
    "left": 0,
    "top": 0,
    "flexDirection": "column"
  },
  "personal-float-title": {
    "width": "750",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "personal-float-title-text": {
    "width": "390",
    "textAlign": "center",
    "alignItems": "center",
    "fontSize": "36",
    "color": "#333333"
  },
  "personal-float-avatar-left": {
    "width": "180"
  },
  "personal-float-avatar": {
    "width": "60",
    "height": "60",
    "marginLeft": "27",
    "borderRadius": "30",
    "borderWidth": "1",
    "borderColor": "#E2E2E2"
  },
  "personal-title-item": {
    "width": "90",
    "height": "50",
    "alignItems": "center",
    "justifyContent": "center",
    "position": "relative"
  },
  "personal-title-icon": {
    "width": "40",
    "height": "40",
    "marginTop": "5"
  },
  "personal-message": {
    "width": "750",
    "flexDirection": "row",
    "paddingLeft": "44",
    "paddingRight": "30",
    "marginBottom": "80"
  },
  "personal-message-item": {
    "height": "60",
    "width": "510",
    "alignItems": "center",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "personal-message-name": {
    "fontSize": "36",
    "color": "#FFFFFF"
  },
  "personal-message-mobile": {
    "fontSize": "28",
    "color": "#FFFFFF"
  },
  "personal-message-level": {
    "width": "180",
    "height": "60",
    "alignItems": "center",
    "justifyContent": "center",
    "flexDirection": "row",
    "position": "relative"
  },
  "personal-message-level-bg": {
    "width": "180",
    "height": "60",
    "position": "absolute",
    "left": 0,
    "top": 0
  },
  "personal-avatar": {
    "width": "120",
    "height": "120",
    "backgroundColor": "#FFFFFF",
    "borderRadius": "60"
  },
  "column": {
    "flexDirection": "column",
    "backgroundColor": "#ffffff"
  },
  "flex-column": {
    "flexDirection": "column"
  },
  "seneschal-cell": {
    "width": "750",
    "height": "90",
    "paddingLeft": "44",
    "paddingRight": "28",
    "backgroundColor": "#f6f6f6",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "seneschal-cell_horizontal": {
    "flex": 1,
    "flexDirection": "column",
    "justifyContent": "flex-start"
  },
  "seneschal-cell-text": {
    "fontSize": "26",
    "flex": 1,
    "color": "#666666"
  },
  "seneschal_add": {
    "width": "126",
    "height": "48",
    "lineHeight": "48",
    "fontSize": "24",
    "color": "#999999",
    "textAlign": "center"
  },
  "order": {
    "width": "750",
    "backgroundColor": "#FFFFFF",
    "flexDirection": "column"
  },
  "order_type": {
    "width": "750",
    "flexDirection": "row",
    "backgroundColor": "#FFFFFF"
  },
  "order_type_item": {
    "width": "187.5",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "order_count": {
    "width": "80",
    "alignItems": "center",
    "position": "relative"
  },
  "order_type_image": {
    "width": "50",
    "height": "50",
    "marginTop": "7.5"
  },
  "order_type_tittle": {
    "fontSize": "26",
    "lineHeight": "26",
    "color": "#666666",
    "textAlign": "center",
    "marginBottom": "22",
    "marginTop": "20"
  },
  "count": {
    "lineHeight": "30",
    "width": "30",
    "height": "30",
    "color": "#F52038",
    "fontSize": "18",
    "textAlign": "center",
    "borderColor": "#CF1126",
    "borderRadius": 50,
    "borderWidth": "1",
    "position": "absolute",
    "backgroundColor": "#FFFFFF",
    "top": 0,
    "right": 0
  },
  "_count": {
    "lineHeight": "30",
    "width": "50",
    "height": "30",
    "color": "#F52038",
    "fontSize": "18",
    "textAlign": "center",
    "borderColor": "#CF1126",
    "borderRadius": 50,
    "backgroundColor": "#FFFFFF",
    "position": "absolute",
    "borderWidth": "1",
    "top": 0,
    "right": 0
  },
  "more": {
    "width": "15",
    "height": "30"
  },
  "divide": {
    "width": "750",
    "height": "20",
    "backgroundColor": "#f6f6f6"
  },
  "banner": {
    "width": "750",
    "height": "170",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "#FFFFFF",
    "paddingBottom": "30",
    "borderRadius": "8"
  },
  "vip-banner": {
    "width": "750",
    "backgroundColor": "#ffffff",
    "flexDirection": "column"
  },
  "vip-banner-title": {
    "width": "750",
    "paddingTop": "30",
    "paddingLeft": "30",
    "paddingBottom": "30",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "vip-banner-content-image": {
    "width": "702",
    "height": "196"
  },
  "vip-banner-content": {
    "width": "750",
    "paddingLeft": "24",
    "paddingRight": "24",
    "paddingBottom": "25"
  },
  "vip-banner-content-middle": {
    "width": "750",
    "paddingLeft": "24",
    "paddingRight": "24",
    "paddingBottom": "25"
  },
  "vip-banner-content-middle-image": {
    "width": "702",
    "height": "154"
  },
  "vip-banner-image-content": {
    "width": "702",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "#F2F2F2",
    "borderRadius": "8"
  },
  "vip-banner-image-content-middle": {
    "width": "702",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "#F2F2F2",
    "borderRadius": "8"
  },
  "vip-banner-image-content-top": {
    "width": "702",
    "paddingTop": "27",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "flexDirection": "column"
  },
  "vip-banner-image-content-top-title": {
    "color": "#333333",
    "fontSize": "26",
    "fontWeight": "700"
  },
  "row": {
    "flexDirection": "row"
  },
  "row-start": {
    "flexDirection": "row",
    "paddingBottom": "5"
  },
  "row-top": {
    "flexDirection": "row",
    "paddingTop": "5"
  },
  "vip-banner-image-content-title": {
    "flexDirection": "column",
    "paddingLeft": "20",
    "flex": 1
  },
  "vip-banner-image-content-title-cum": {
    "flexDirection": "column",
    "paddingLeft": "20"
  },
  "vip-banner-image-content-middle-top": {
    "width": "702",
    "paddingTop": "27",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "flexDirection": "column",
    "justifyContent": "center"
  },
  "vip-banner-image-content-bot-start": {
    "width": "702",
    "paddingTop": "20",
    "paddingBottom": "27",
    "flexDirection": "column",
    "justifyContent": "center",
    "paddingLeft": "20"
  },
  "vip-banner-image-content-bot-middle-start": {
    "width": "702",
    "paddingTop": "20",
    "paddingBottom": "27",
    "flexDirection": "column",
    "justifyContent": "center",
    "paddingLeft": "20"
  },
  "line": {
    "width": "662",
    "height": "1",
    "backgroundColor": "#c9c9c9"
  },
  "vip-banner-image-content-bot": {
    "width": "702",
    "paddingTop": "20",
    "paddingBottom": "27",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "flex-end",
    "paddingLeft": "20"
  },
  "vip-banner-title-image": {
    "width": "30",
    "height": "30"
  },
  "vip-banner-title-style": {
    "fontSize": "30",
    "color": "#CF1126",
    "fontWeight": "700"
  },
  "vip-banner-des": {
    "paddingLeft": "40",
    "paddingRight": "30",
    "fontSize": "24",
    "color": "#999999"
  },
  "banner-content": {
    "width": "702",
    "height": "140",
    "borderRadius": "8"
  },
  "banner_image_parent": {
    "width": "702",
    "height": "140",
    "borderRadius": "8"
  },
  "banner_image": {
    "width": "702",
    "height": "140",
    "borderRadius": "8"
  },
  "indicator": {
    "width": "702",
    "height": "10",
    "itemColor": "#666666",
    "itemSelectedColor": "#FFFFFF",
    "itemSize": "10",
    "position": "absolute",
    "bottom": "10",
    "right": 0
  },
  "item-cell": {
    "backgroundColor": "#ffffff",
    "flexDirection": "column"
  },
  "item-cell-information": {
    "backgroundColor": "#ffffff",
    "flexDirection": "column"
  },
  "application-list": {
    "width": "750",
    "flexWrap": "wrap",
    "flexDirection": "row"
  },
  "application-item": {
    "width": "187.5",
    "alignItems": "center",
    "justifyContent": "center",
    "paddingBottom": "30",
    "flexDirection": "column"
  },
  "application-item-icon": {
    "width": "50",
    "height": "50"
  },
  "application-item-text": {
    "fontSize": "24",
    "marginTop": "16",
    "color": "#333333"
  },
  "application-item-text-red": {
    "fontSize": "24",
    "marginTop": "16",
    "color": "#CF1126"
  },
  "item": {
    "width": "750",
    "height": "90",
    "alignItems": "center",
    "justifyContent": "space-between",
    "flexDirection": "row",
    "paddingLeft": "30",
    "paddingRight": "30"
  },
  "item-title": {
    "fontSize": "30",
    "color": "#333333",
    "fontWeight": "700"
  },
  "information-item": {
    "width": "750",
    "height": "240",
    "paddingTop": "30",
    "paddingBottom": "30",
    "paddingLeft": "30",
    "paddingRight": "40",
    "flexDirection": "row"
  },
  "information-icon": {
    "width": "180",
    "height": "180"
  },
  "information-content": {
    "width": "410",
    "flexDirection": "column",
    "marginLeft": "30",
    "justifyContent": "space-between"
  },
  "information-title": {
    "width": "410",
    "fontSize": "28",
    "color": "#333333",
    "lines": 2,
    "textOverflow": "ellipsis"
  },
  "information-status": {
    "width": "410",
    "justifyContent": "space-between",
    "marginBottom": "10",
    "flexDirection": "row"
  },
  "information-status-text": {
    "fontSize": "22",
    "color": "#999999"
  },
  "information-read-icon": {
    "width": "22",
    "height": "13",
    "marginRight": "10"
  },
  "vip-cell": {
    "width": "750",
    "height": "88",
    "paddingLeft": "36",
    "paddingRight": "36",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "backgroundColor": "#333333"
  },
  "vip-parent": {
    "height": "88",
    "flexDirection": "row",
    "justifyContent": "flex-start",
    "alignItems": "center"
  },
  "vip-image": {
    "width": "40",
    "height": "40"
  },
  "vip-explain": {
    "marginLeft": "6",
    "fontSize": "24",
    "color": "#dddddd"
  },
  "vip-info": {
    "height": "88",
    "lineHeight": "88",
    "fontSize": "24",
    "color": "#aeaeae"
  },
  "btn-vip-dredge": {
    "width": "130",
    "height": "40",
    "borderRadius": "4",
    "backgroundColor": "#ffffff",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "marginLeft": "46"
  },
  "vip-dredge": {
    "fontSize": "22",
    "lineHeight": "40",
    "color": "#303030",
    "paddingRight": "10"
  },
  "vip-level-icon-senior": {
    "width": "28",
    "height": "32"
  },
  "vip-level-icon-middle": {
    "width": "28",
    "height": "27"
  },
  "vip-level-icon-junior": {
    "width": "35",
    "height": "35"
  },
  "vip-level-text": {
    "fontSize": "28",
    "marginLeft": "10",
    "color": "#FFFFFF"
  },
  "next": {
    "width": "10",
    "height": "20"
  },
  "setting-dot": {
    "width": "8",
    "height": "8",
    "position": "absolute",
    "right": "20",
    "top": "5",
    "backgroundColor": "#FFFFFF",
    "borderRadius": 50
  },
  "message-count": {
    "lineHeight": "32",
    "width": "32",
    "height": "32",
    "color": "#FFFFFF",
    "fontSize": "20",
    "textAlign": "center",
    "borderRadius": 50,
    "position": "absolute",
    "backgroundColor": "#CF1126",
    "top": 0,
    "right": "15"
  },
  "message-count-more": {
    "lineHeight": "32",
    "width": "50",
    "height": "32",
    "color": "#FFFFFF",
    "fontSize": "20",
    "textAlign": "center",
    "borderRadius": 50,
    "position": "absolute",
    "backgroundColor": "#CF1126",
    "top": 0,
    "right": 0
  },
  "mask-content": {
    "width": "570",
    "height": "443",
    "marginLeft": "90",
    "marginRight": "90",
    "marginTop": "400",
    "borderRadius": "8",
    "backgroundColor": "#ffffff"
  },
  "mask-content-top": {
    "height": "100",
    "width": "570",
    "borderRadius": "8",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "flex-end"
  },
  "top-text": {
    "flex": 1,
    "height": "100",
    "marginLeft": "80",
    "lineHeight": "100",
    "textAlign": "center",
    "fontSize": "32",
    "color": "#333333"
  },
  "top-close-parent": {
    "width": "80",
    "height": "100",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "flex-end"
  },
  "top-close": {
    "width": "26",
    "height": "26",
    "marginRight": "30"
  },
  "content-title": {
    "fontSize": "30",
    "marginTop": "35",
    "marginLeft": "40",
    "color": "#333333"
  },
  "content-account-parent": {
    "width": "500",
    "height": "90",
    "marginLeft": "35",
    "marginTop": "20",
    "borderRadius": "4",
    "borderWidth": "1",
    "borderColor": "#999999",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "content-account": {
    "width": "340",
    "marginLeft": "30",
    "marginRight": "10",
    "fontSize": "32",
    "color": "#333333"
  },
  "content-account-line": {
    "width": "1.4",
    "height": "50",
    "backgroundColor": "#999999"
  },
  "content-account-copy": {
    "width": "120",
    "height": "90",
    "lineHeight": "90",
    "textAlign": "center",
    "color": "#666666",
    "fontSize": "30"
  },
  "content-apply": {
    "width": "460",
    "height": "70",
    "lineHeight": "70",
    "textAlign": "center",
    "fontSize": "32",
    "marginLeft": "55",
    "marginTop": "45",
    "borderRadius": "8",
    "color": "#FFFFFF",
    "backgroundColor": "#CF1126"
  },
  "personal-mask-line": {
    "width": "570",
    "height": "1.4",
    "backgroundColor": "#e2e2e2"
  },
  "personal-float-line": {
    "width": "750",
    "height": "1.4",
    "backgroundColor": "#e2e2e2",
    "position": "absolute",
    "left": 0,
    "bottom": 0
  }
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcMask = __webpack_require__(6);

var _wxcMask2 = _interopRequireDefault(_wxcMask);

var _titleBar = __webpack_require__(15);

var _titleBar2 = _interopRequireDefault(_titleBar);

var _line = __webpack_require__(19);

var _line2 = _interopRequireDefault(_line);

var _WxcMask2 = __webpack_require__(23);

var _WxcMask3 = _interopRequireDefault(_WxcMask2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var promptModule = weex.requireModule('promptModule'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var titleBar = weex.requireModule('titleBar');
var storage = weex.requireModule('storage');
var modal = weex.requireModule('modal');
var clipboard = weex.requireModule('clipboard');
var accountEvent = new BroadcastChannel('account');
var loadingModule = weex.requireModule("loadingModule");
var event = new BroadcastChannel('event');
var height = 0;
var bottom = 0;
var nativeBarHeight = 0;
var titleHeight = 0;
exports.default = {
    components: { title: _titleBar2.default, line: _line2.default, WxcMask: _wxcMask2.default, mask: _WxcMask3.default },
    data: function data() {
        return {
            show: false,
            opacity: 0,
            max_scroll: 260,
            opacityOffset: 31,
            screenOffset: 0,
            nativeBarHeight: nativeBarHeight,
            titleHeight: titleHeight,
            height: height,
            isShowHead: false,
            personalData: null,
            bottom: bottom,
            applicationList: [],
            defaultApplication: [{ 'icon': 'http://img.abmau.com/abmau/6831b55065ba49bed921b787cab2c96f.png', title: '财务管理' }, { 'icon': 'http://img.abmau.com/abmau/f6c9e5474ded3392749bf7196d0b1fd0.png', title: '地址管理' }, { 'icon': 'http://img.abmau.com/abmau/e88605d0f6c79b67ba45ef9a0cfea326.png', title: '帮助中心' }, { 'icon': 'http://img.abmau.com/abmau/21b032118b7e0458069573f635891f8c.png', title: '我的券' }],
            seniorApplication: [
            /* {'icon':'http://img.abmau.com/abmau/35dbc0fd0125b1f7c879454a67aecbbb.png',title:'试用中心'},*/
            { 'icon': 'http://img.abmau.com/abmau/c91d8cec659f497dfc119e6ebb175b8f.png', title: '投诉建议' }, { 'icon': 'http://img.abmau.com/abmau/72ac7cee4a10f6421bc179eb67ad2443.png', title: '电子门票' }, { 'icon': 'http://img.abmau.com/abmau/967fa951f209022bda2f53c31a4c2e68.png', title: '我的主页' }, { 'icon': 'http://img.abmau.com/abmau/f0ffaabb050e43bfe0dd568a90b10605.png', title: '我的收藏' }],
            middleApplication: [
            /* {'icon':'http://img.abmau.com/abmau/35dbc0fd0125b1f7c879454a67aecbbb.png',title:'试用中心'},*/
            { 'icon': 'http://img.abmau.com/abmau/c91d8cec659f497dfc119e6ebb175b8f.png', title: '投诉建议' }, { 'icon': 'http://img.abmau.com/abmau/72ac7cee4a10f6421bc179eb67ad2443.png', title: '电子门票' }, { 'icon': 'http://img.abmau.com/abmau/61c469c91a41824928c8e94f65353e7d.png', title: '我的等级' }, { 'icon': 'http://img.abmau.com/abmau/967fa951f209022bda2f53c31a4c2e68.png', title: '我的主页' }, { 'icon': 'http://img.abmau.com/abmau/f0ffaabb050e43bfe0dd568a90b10605.png', title: '我的收藏' }],
            juniorApplication: [{ 'icon': 'http://img.abmau.com/abmau/c91d8cec659f497dfc119e6ebb175b8f.png', title: '投诉建议' }, { 'icon': 'http://img.abmau.com/abmau/72ac7cee4a10f6421bc179eb67ad2443.png', title: '电子门票' }, { 'icon': 'http://img.abmau.com/abmau/61c469c91a41824928c8e94f65353e7d.png', title: '我的等级' }, { 'icon': 'http://img.abmau.com/abmau/967fa951f209022bda2f53c31a4c2e68.png', title: '我的主页' }, { 'icon': 'http://img.abmau.com/abmau/f0ffaabb050e43bfe0dd568a90b10605.png', title: '我的收藏' }],
            commonApplication: [{ 'icon': 'http://img.abmau.com/abmau/72ac7cee4a10f6421bc179eb67ad2443.png', title: '电子门票' }, { 'icon': 'http://img.abmau.com/abmau/61c469c91a41824928c8e94f65353e7d.png', title: '我的等级' }, { 'icon': 'http://img.abmau.com/abmau/967fa951f209022bda2f53c31a4c2e68.png', title: '我的主页' }, { 'icon': 'http://img.abmau.com/abmau/f0ffaabb050e43bfe0dd568a90b10605.png', title: '我的收藏' }],
            invite: { 'icon': 'http://img.abmau.com/abmau/251a823a9dddfa115502118989d5eb10.png', title: '邀请会员' },
            order_goods: { 'icon': 'http://img.abmau.com/abmau/283f29cbf6a333f9f48d66c7f8ec1169.png', title: '高级订货' },
            level_id: -1, //会员等级 5：高级（总代）不显示等级  4：中级（官代） 2，3：（初级） 1：注册
            showUserDot: false,
            noReadCount: 0,
            showCopyWx: false, //微信帐号弹窗
            test: false,
            isReData: false //是否修改等级
        };
    },

    methods: {
        clickRank: function clickRank() {
            this.jumpTo2('activities/pointsForWineRank', '', {});
        },
        clickUpgradeGo: function clickUpgradeGo() {
            this.jumpTo2('home/superWelfare', '', { id: 56 });
        },
        clickClose: function clickClose() {
            this.show = false;
        },
        clickDetail: function clickDetail() {
            this.show = true;
        },
        refreshData: function refreshData() {
            this.getData();
        },
        clickVipDetail: function clickVipDetail(index) {
            this.jumpTo2('other/ruleDes', '', { index: index });
        },
        getData: function getData() {
            var self = this;
            self.Get(self.api().get_new_userinfo, {}, function (res) {
                if (res.data.code == '0') {
                    //请求数据失败
                    var application = [];
                    var trial_activity = [];
                    if (self.level_id != -1 && self.level_id != res.data.data.level_id) {
                        self.isShowHead = false;
                        self.opacity = 0;
                        self.isReData = true;
                        self.personalData = null;
                    }
                    if (res.data.data.show_trial_activity == 1) trial_activity.push({ 'icon': 'http://img.abmau.com/abmau/35dbc0fd0125b1f7c879454a67aecbbb.png', title: '试用中心' });
                    self.level_id = res.data.data.level_id;
                    switch (self.level_id) {
                        case 1:
                            application = self.defaultApplication.concat(trial_activity).concat(self.commonApplication);
                            break;
                        case 2:
                        case 3:
                            application.push(self.invite);
                            application = application.concat(self.defaultApplication.concat(trial_activity).concat(self.juniorApplication));
                            break;
                        case 4:
                            application.push(self.invite);
                            application = application.concat(self.defaultApplication.concat(trial_activity).concat(self.middleApplication));
                            break;
                        case 5:
                            application.push(self.order_goods);
                            application.push(self.invite);
                            application = application.concat(self.defaultApplication.concat(trial_activity).concat(self.seniorApplication));
                            break;
                        default:
                            application = self.defaultApplication;
                            break;
                    }
                    self.applicationList = application;
                    self.personalData = res.data.data;
                    //self.news_arr = res.data.data.news_arr;
                    self.showMineInfoDot();
                } else {
                    promptModule.showPrompt({ msg: res.data.msg, type: 'err' });
                }
            });
        },
        refreshMessage: function refreshMessage() {
            var self = this;
            self.Get(self.api().message_home_unread, {}, function (res) {
                if (res.data.code == 0) {
                    self.noReadCount = res.data.data;
                }
            });
        },
        scroll: function scroll(event) {
            var self = this;
            console.log('event.contentOffset.y===' + event.contentOffset.y);
            if (event.contentOffset.y > 0) {
                self.opacity = 0;return;
            }
            var screen = Math.abs(event.contentOffset.y);
            if (self.isReData && screen > 0) {
                self.isReData = false;
                return;
            }
            self.screenOffset = screen;
            if (screen >= self.max_scroll) {
                self.opacity = 1;
            } else {
                self.opacity = (screen / self.max_scroll).toFixed(2);
            }
        },
        showHead: function showHead(isShow) {
            this.isShowHead = isShow;
        },


        //查看设置
        jumpToSetting: function jumpToSetting() {
            this.jumpTo2('setting/setting', '', { id: this.personalData.id });
        },
        openApplication: function openApplication(name) {
            var self = this;
            switch (name) {
                case '高级订货':
                    self.jumpTo2('senior/advancedOrder', '', { from: 1 });
                    break;
                case '邀请会员':
                    self.inviteMethod();
                    break;
                case '财务管理':
                    self.jumpTo2('personal/financeManager/financeManager', '财务管理', { mobile: self.personalData.mobile });
                    break;
                case '地址管理':
                    self.jumpTo2('address/address_list', '', { id: 0, type: 'default' });
                    break;
                case '我的主页':
                    self.jumpTo2('personal/personalStore/personalStore', '', {});
                    break;
                case '我的券':
                    self.jumpTo2('personal/myVoucher/myVoucher', '', {});
                    break;
                case '试用中心':
                    self.jumpTo2('tryout/core', '', {});
                    break;
                case '投诉建议':
                    self.jumpTo2('suggestion/index', '', {});
                    break;
                case '电子门票':
                    self.jumpTo2('activities/eventTickets', '', { mobile: self.personalData.mobile });
                    break;
                case '我的等级':
                    self.jumpTo2('myGrade/upgrade', '', {});
                    break;
                case '帮助中心':
                    self.jumpTo2('help/helpCenter', '', {});
                    break;
                case '我的收藏':
                    self.jumpTo2('material/collectIndex', '', {});
                    break;
            }
        },
        inviteMethod: function inviteMethod() {
            if (!this.personalData) return;
            if (!this.personalData.share) return;
            var shareData = this.personalData.share;
            var invite_code = this.personalData.invite_code;
            utilModule.getABMShareView({
                'share_type': 'invite_code',
                'title': shareData.title,
                'desc': shareData.desc,
                'webUrl': shareData.url,
                'imageUrl': shareData.img,
                'copy_item': invite_code,
                'invite_qr': JSON.stringify({ headimg: this.personalData.headimg, name: this.personalData.invite_share_title,
                    mobile: this.personalData.invite_share_mobile, qr: shareData.qrcode, des: shareData.qrcode_des })
            });
            loadingModule.cancel(function (ret) {});
        },


        //查看个人信息详情
        jumpToUserInfo: function jumpToUserInfo() {
            this.jumpTo2('personal/personalInformation', '', {});
        },
        titleJumpToUserInfo: function titleJumpToUserInfo() {
            if (this.isShowHead) {
                //防点透
                this.jumpTo2('personal/personalInformation', '', {});
            }
        },


        //查看订单管理
        jumpToOderManage: function jumpToOderManage(show) {
            this.jumpTo2('order/orderLv', '', { index: show });
        },


        //商学院
        jumpToBusiness: function jumpToBusiness() {
            this.jumpTo2('personal/businessSchool/businessSchoolLv', '', { category_id: this.personalData.category_id, category_title: this.personalData.category_title }, '');
        },


        //商学院
        jumpToBusinessDetails: function jumpToBusinessDetails(item) {
            this.jumpTo2('personal/businessSchool/businessSchoolDetail', '', { article_id: item.id });
        },
        showMineInfoDot: function showMineInfoDot() {
            var self = this;
            storage.getItem("abm_wx_qr_" + self.personalData.id, function (res) {
                var abm_wx_qr = res.data;
                storage.getItem("abm_user_address_" + self.personalData.id, function (ret) {
                    var abm_user_address = ret.data;
                    self.showUserDot = !(self.personalData.address != '' || self.personalData.id == abm_user_address) || !(self.personalData.id == abm_wx_qr || self.personalData.qr_code_url != '');
                });
            });
        },
        jumpBanner: function jumpBanner(data) {
            this.jumpToBanner(data.name, data.url, data.sharelink, data.shareimg, data.sharetitle, data.sharedesc);
        },


        //跳转到消息列表
        clickMsg: function clickMsg() {
            this.jumpTo2('home/home_message', '', {});
        },
        changeMask: function changeMask(show) {
            this.showCopyWx = show;
        },
        copeText: function copeText() {
            clipboard.setString(this.personalData.other.wx_number);
            modal.toast({ message: '复制成功,请前往微信添加！', duration: 3 });
            this.showCopyWx = false;
        }
    },
    created: function created() {
        var self = this;
        self.getTitleHeight(self);
        self.getStatusBarHeight(self);
        self.getTopHeight(self);
        self.mainBarHeight(self);
        titleBar.addFloatView();
        self.getData();
        self.refreshMessage();
        if (weex.config.env.platform.toLowerCase() === 'android' && self.compareVersion(weex.config.env.appVersion, '3.1.0')) {
            utilModule.eventListener(function () {});
            var globalEvent = weex.requireModule('globalEvent');
            globalEvent.addEventListener("geolocation", function (e) {
                if (self.showCopyWx) {
                    self.showCopyWx = false;
                } else {
                    self.popBar();
                }
            });
        }
        accountEvent.onmessage = function (event) {
            if (!event.data) {
                return;
            }
            switch (event.data) {
                case self.eventBusTag().REFRESH_HOME:
                    self.personalData = null;
                    self.opacity = 0;
                    self.isShowHead = false;
                    self.getData();
                    self.refreshMessage();
                    break;
            }
        };

        event.onmessage = function (event) {
            if (!event.data) {
                return;
            }
            switch (event.data) {
                case self.eventBusTag().REFRESH_MESSAGE:
                    self.refreshMessage();
                    break;
            }
        };
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
__vue_options__.__file = "F:\\weex\\weex_develop\\abm_dev_weex\\abm-weexSource\\node_modules\\weex-ui\\packages\\wxc-mask\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1655f43b"
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
  "container": {
    "position": "fixed",
    "width": "750",
    "zIndex": 99999
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
//
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
    style: _vm.contentStyle
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
/* 24 */
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
/* 25 */
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
/* 26 */
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
/* 27 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    on: {
      "viewstart": function($event) {
        _vm.refreshData()
      },
      "refresh": function($event) {
        _vm.refreshData()
      },
      "msgevent": function($event) {
        _vm.refreshMessage()
      }
    }
  }, [_c('div', {
    staticClass: ["parent"],
    style: {
      top: 0 + 'px',
      bottom: _vm.bottom + 'px'
    }
  }, [(_vm.personalData) ? _c('list', {
    on: {
      "scroll": _vm.scroll
    }
  }, [_c('cell', {
    ref: "top",
    staticClass: ["personal"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('image', {
    staticClass: ["personal-top-bg"],
    attrs: {
      "src": "http://img.abmau.com/abmau/a1120113c90f71fcb93d2d785f586ac8.png"
    }
  }), _c('div', {
    staticClass: ["personal-title"],
    style: {
      height: _vm.titleHeight + 'px',
      marginTop: _vm.nativeBarHeight + 'px'
    }
  }), _c('div', {
    staticClass: ["personal-message"],
    on: {
      "click": function($event) {
        _vm.jumpToUserInfo()
      }
    }
  }, [(_vm.personalData.headimg == '' || _vm.personalData.headimg == null) ? _c('image', {
    staticClass: ["personal-avatar"],
    attrs: {
      "resize": "cover",
      "src": "assets://icon_user_placehold"
    },
    on: {
      "appear": function($event) {
        _vm.showHead(false)
      },
      "disappear": function($event) {
        _vm.showHead(true)
      }
    }
  }) : _c('image', {
    staticClass: ["personal-avatar"],
    attrs: {
      "src": _vm.personalData.headimg,
      "resize": "cover"
    },
    on: {
      "appear": function($event) {
        _vm.showHead(false)
      },
      "disappear": function($event) {
        _vm.showHead(true)
      }
    }
  }), _c('div', {
    style: {
      marginLeft: '30px'
    }
  }, [_c('div', {
    staticClass: ["personal-message-item"]
  }, [(_vm.personalData.nickname) ? _c('text', {
    staticClass: ["personal-message-name"]
  }, [_vm._v(_vm._s(_vm.personalData.nickname))]) : _c('text', {
    staticClass: ["personal-message-name"]
  }, [_vm._v(_vm._s(_vm.personalData.name))])]), _c('div', {
    staticClass: ["personal-message-item"]
  }, [_c('text', {
    staticClass: ["personal-message-mobile"]
  }, [_vm._v(_vm._s(_vm.personalData.mobile))]), (_vm.level_id != 1 && _vm.level_id != 0) ? _c('div', {
    staticClass: ["personal-message-level"]
  }, [_c('image', {
    staticClass: ["personal-message-level-bg"],
    attrs: {
      "src": "http://img.abmau.com/abmau/a297e3f76bfb5af7656957a02be962f3.png"
    }
  }), (_vm.level_id == 5) ? _c('image', {
    staticClass: ["vip-level-icon-senior"],
    attrs: {
      "resize": "cover",
      "src": "assets://icon_advanced"
    }
  }) : _vm._e(), (_vm.level_id == 4) ? _c('image', {
    staticClass: ["vip-level-icon-middle"],
    attrs: {
      "resize": "cover",
      "src": "assets://icon_intermediate"
    }
  }) : _vm._e(), (_vm.level_id == 3 || _vm.level_id == 2) ? _c('image', {
    staticClass: ["vip-level-icon-junior"],
    attrs: {
      "resize": "cover",
      "src": "http://img.abmau.com/abmau/efcede4613978c858c3ca81ad638800f.png"
    }
  }) : _vm._e(), _c('text', {
    staticClass: ["vip-level-text"]
  }, [_vm._v(_vm._s(_vm.personalData.level_name))])]) : _vm._e()])])])]), _c('cell', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('div', {
    staticClass: ["column"]
  }, [(_vm.level_id == 5 && _vm.personalData.other) ? _c('div', {
    staticClass: ["seneschal-cell"],
    on: {
      "click": function($event) {
        _vm.changeMask(true)
      }
    }
  }, [_vm._m(0), _c('text', {
    staticClass: ["seneschal_add"]
  }, [_vm._v("立即添加")]), _c('image', {
    staticClass: ["more"],
    attrs: {
      "src": "http://img.abmau.com/abmau/197260145f13acf70e06fe37ad4ba0c8.png"
    }
  })]) : _vm._e(), _c('div', {
    staticClass: ["order"]
  }, [_c('div', {
    staticClass: ["item"],
    on: {
      "click": function($event) {
        _vm.jumpToOderManage(0)
      }
    }
  }, [_c('text', {
    staticClass: ["item-title"]
  }, [_vm._v("我的订单")]), _c('image', {
    staticClass: ["more"],
    attrs: {
      "src": "http://img.abmau.com/abmau/197260145f13acf70e06fe37ad4ba0c8.png"
    }
  })]), _c('div', {
    staticClass: ["order_type"]
  }, [_c('div', {
    staticClass: ["order_type_item"],
    on: {
      "click": function($event) {
        _vm.jumpToOderManage(1)
      }
    }
  }, [_c('div', {
    staticClass: ["order_count"]
  }, [_c('image', {
    staticClass: ["order_type_image"],
    attrs: {
      "src": "http://img.abmau.com/abmau/f77f0a0fc0ac469d7b35cadd0f9d40a6.png"
    }
  }), (_vm.personalData.wait_pay > 0 && _vm.personalData.wait_pay < 100) ? _c('text', {
    staticClass: ["count"]
  }, [_vm._v(_vm._s(_vm.personalData.wait_pay))]) : _vm._e(), (_vm.personalData.wait_pay >= 100 && _vm.personalData.wait_pay < 1000) ? _c('text', {
    staticClass: ["_count"]
  }, [_vm._v(_vm._s(_vm.personalData.wait_pay))]) : _vm._e(), (_vm.personalData.wait_pay >= 1000) ? _c('text', {
    staticClass: ["_count"]
  }, [_vm._v("999+")]) : _vm._e()]), _c('text', {
    staticClass: ["order_type_tittle"]
  }, [_vm._v("待付款")])]), _c('div', {
    staticClass: ["order_type_item"],
    on: {
      "click": function($event) {
        _vm.jumpToOderManage(2)
      }
    }
  }, [_c('div', {
    staticClass: ["order_count"]
  }, [_c('image', {
    staticClass: ["order_type_image"],
    attrs: {
      "src": "http://img.abmau.com/abmau/cdd2bd2ee0c7f15f8dc2b7cec4bdbd45.png"
    }
  }), (_vm.personalData.wait_send > 0 && _vm.personalData.wait_send < 100) ? _c('text', {
    staticClass: ["count"]
  }, [_vm._v(_vm._s(_vm.personalData.wait_send))]) : _vm._e(), (_vm.personalData.wait_send >= 100 && _vm.personalData.wait_send < 1000) ? _c('text', {
    staticClass: ["_count"]
  }, [_vm._v(_vm._s(_vm.personalData.wait_send))]) : _vm._e(), (_vm.personalData.wait_send >= 1000) ? _c('text', {
    staticClass: ["_count"]
  }, [_vm._v("999+")]) : _vm._e()]), _c('text', {
    staticClass: ["order_type_tittle"]
  }, [_vm._v("待发货")])]), _c('div', {
    staticClass: ["order_type_item"],
    on: {
      "click": function($event) {
        _vm.jumpToOderManage(3)
      }
    }
  }, [_c('div', {
    staticClass: ["order_count"]
  }, [_c('image', {
    staticClass: ["order_type_image"],
    attrs: {
      "src": "http://img.abmau.com/abmau/a8bbcf83c77ee462736c9be4fbd267bc.png"
    }
  }), (_vm.personalData.wait_over > 0 && _vm.personalData.wait_over < 100) ? _c('text', {
    staticClass: ["count"]
  }, [_vm._v(_vm._s(_vm.personalData.wait_over))]) : _vm._e(), (_vm.personalData.wait_over >= 100 && _vm.personalData.wait_over < 1000) ? _c('text', {
    staticClass: ["_count"]
  }, [_vm._v(_vm._s(_vm.personalData.wait_over))]) : _vm._e(), (_vm.personalData.wait_over >= 1000) ? _c('text', {
    staticClass: ["_count"]
  }, [_vm._v("999+")]) : _vm._e()]), _c('text', {
    staticClass: ["order_type_tittle"]
  }, [_vm._v("待收货")])]), _c('div', {
    staticClass: ["order_type_item"],
    on: {
      "click": function($event) {
        _vm.jumpToOderManage(4)
      }
    }
  }, [_vm._m(1), _c('text', {
    staticClass: ["order_type_tittle"]
  }, [_vm._v("已完成")])])])]), (_vm.personalData.messbanner && _vm.personalData.messbanner.length > 0) ? _c('div', {
    staticClass: ["banner"]
  }, [_c('slider', {
    staticClass: ["banner-content"],
    attrs: {
      "autoPlay": "true",
      "interval": "4000",
      "infinite": "true"
    }
  }, [_vm._l((_vm.personalData.messbanner), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["banner_image_parent"],
      on: {
        "click": function($event) {
          _vm.jumpBanner(item)
        }
      }
    }, [_c('image', {
      staticClass: ["banner_image"],
      attrs: {
        "src": item.image_url
      }
    })])
  }), (_vm.personalData.messbanner.length > 1) ? _c('indicator', {
    staticClass: ["indicator"]
  }) : _vm._e()], 2)]) : _vm._e(), _c('div', {
    staticClass: ["divide"]
  }), (_vm.applicationList && _vm.applicationList.length > 0) ? _c('div', {
    staticClass: ["item-cell"]
  }, [_vm._m(2), _c('div', {
    staticClass: ["application-list"]
  }, _vm._l((_vm.applicationList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["application-item"],
      style: {
        paddingTop: index < 4 ? 　'12px' : '40px'
      },
      on: {
        "click": function($event) {
          _vm.openApplication(item.title)
        }
      }
    }, [_c('image', {
      staticClass: ["application-item-icon"],
      attrs: {
        "src": item.icon
      }
    }), (item.title != '帮助中心' && item.title != '高级订货') ? _c('text', {
      staticClass: ["application-item-text"]
    }, [_vm._v(_vm._s(item.title))]) : _c('text', {
      staticClass: ["application-item-text-red"]
    }, [_vm._v(_vm._s(item.title))])])
  }))]) : _vm._e(), (_vm.personalData.upgrade_vip != null) ? _c('div', {
    staticClass: ["vip-banner"]
  }, [_c('div', {
    staticClass: ["divide"]
  }), _c('div', {
    staticClass: ["vip-banner-title"]
  }, [_c('image', {
    staticClass: ["vip-banner-title-image"],
    attrs: {
      "src": "http://img.abmau.com/abmau/1a29e64fe384b47aef536722fa94a128.png"
    }
  }), (_vm.level_id == 2 || _vm.level_id == 3) ? _c('text', {
    staticClass: ["vip-banner-title-style"]
  }, [_vm._v("卖初级礼包累积经验值，赢超级奖励")]) : _vm._e(), (_vm.level_id == 4) ? _c('text', {
    staticClass: ["vip-banner-title-style"]
  }, [_vm._v("卖初级礼包累积经验值，赢超级奖励")]) : _vm._e(), (_vm.level_id == 5) ? _c('text', {
    staticClass: ["vip-banner-title-style"]
  }, [_vm._v("卖初级礼包累积经验值，赢超级奖励")]) : _vm._e(), (_vm.level_id == 2 || _vm.level_id == 3) ? _c('text', {
    staticClass: ["vip-banner-des"],
    on: {
      "click": function($event) {
        _vm.clickVipDetail(1)
      }
    }
  }, [_vm._v("查看规则 ＞")]) : _vm._e(), (_vm.level_id == 4 || _vm.level_id == 5) ? _c('text', {
    staticClass: ["vip-banner-des"],
    on: {
      "click": function($event) {
        _vm.clickVipDetail(2)
      }
    }
  }, [_vm._v("查看规则 ＞")]) : _vm._e()]), (_vm.level_id == 2 || _vm.level_id == 3) ? _c('div', {
    staticClass: ["vip-banner-content"]
  }, [(false) ? _c('image', {
    staticClass: ["vip-banner-content-image"],
    attrs: {
      "src": "http://img.abmau.com/abmau/fcffb1653eba469769ffcaa465dfb8c9.png"
    }
  }) : _vm._e(), _c('div', {
    staticClass: ["vip-banner-image-content"]
  }, [_c('div', {
    staticClass: ["vip-banner-image-content-top"]
  }, [_vm._m(3), _c('div', {
    staticClass: ["row"]
  }, [_c('text', {
    staticClass: ["eleven_text-text-num"]
  }, [_vm._v("您当前已获得")]), _c('text', {
    staticClass: ["eleven_text-num"]
  }, [_vm._v(_vm._s(_vm.personalData.upgrade_vip.current_integral))]), _c('text', {
    staticClass: ["eleven_text-text-num"]
  }, [_vm._v("点升级经验值")])]), _c('div', {
    staticStyle: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, [_c('div', {
    staticClass: ["row-top"],
    staticStyle: {
      flex: "1"
    }
  }, [_c('text', {
    staticClass: ["eleven_text-text-num"]
  }, [_vm._v("还差")]), _c('text', {
    staticClass: ["eleven_text-num"]
  }, [_vm._v(_vm._s(_vm.personalData.upgrade_vip.residual_integral))]), _c('text', {
    staticClass: ["eleven_text-text-num"]
  }, [_vm._v("点升级经验可直升中级VIP")])]), _c('text', {
    staticClass: ["vip-upgrade-button"],
    on: {
      "click": function($event) {
        _vm.clickUpgradeGo()
      }
    }
  }, [_vm._v("点击前往＞")])])]), _c('div', {
    staticClass: ["line"]
  }), (_vm.personalData.upgrade_vip.activity_status != 1) ? _c('div', {
    staticClass: ["vip-banner-image-content-bot"]
  }, [(_vm.personalData.upgrade_vip.activity_status == -1) ? _c('div', {
    staticClass: ["flex-column"]
  }, [_c('div', {
    staticClass: ["row-start"]
  }, [(_vm.personalData.upgrade_vip.activity_status == -1) ? _c('text', {
    staticClass: ["eleven_text-num"]
  }, [_vm._v("2000")]) : _vm._e(), (_vm.personalData.upgrade_vip.activity_status == -1) ? _c('text', {
    staticClass: ["eleven_text-text-num"]
  }, [_vm._v("瓶红酒已抢完，活动结束，可兑换")]) : _vm._e()]), _c('div', {
    staticClass: ["row"]
  }, [(_vm.personalData.upgrade_vip.activity_status == -1) ? _c('text', {
    staticClass: ["eleven_text-num"]
  }, [_vm._v(_vm._s(_vm.personalData.upgrade_vip.current_number))]) : _vm._e(), (_vm.personalData.upgrade_vip.activity_status == -1) ? _c('text', {
    staticClass: ["eleven_text-text-num"]
  }, [_vm._v("瓶红酒")]) : _vm._e()])]) : _vm._e(), (_vm.personalData.upgrade_vip.activity_status == 0) ? _c('div', {
    staticClass: ["flex-column"]
  }, [(_vm.personalData.upgrade_vip.activity_status == 0) ? _c('text', {
    staticClass: ["eleven_text-text-num"]
  }, [_vm._v("兑换红酒活动已结束，可兑换")]) : _vm._e(), _c('div', {
    staticClass: ["row"],
    staticStyle: {
      paddingTop: "5px"
    }
  }, [(_vm.personalData.upgrade_vip.activity_status == 0) ? _c('text', {
    staticClass: ["eleven_text-num"]
  }, [_vm._v(_vm._s(_vm.personalData.upgrade_vip.current_number))]) : _vm._e(), (_vm.personalData.upgrade_vip.activity_status == 0) ? _c('text', {
    staticClass: ["eleven_text-text-num"]
  }, [_vm._v("瓶红酒")]) : _vm._e()])]) : _vm._e(), _c('text', {
    staticClass: ["vip-upgrade-button"],
    on: {
      "click": function($event) {
        _vm.clickRank()
      }
    }
  }, [_vm._v("查看榜单＞")])]) : _vm._e(), (_vm.personalData.upgrade_vip.activity_status == 1) ? _c('div', {
    staticClass: ["vip-banner-image-content-bot-start"]
  }, [_vm._m(4), _c('div', {
    staticClass: ["row"]
  }, [(_vm.personalData.upgrade_vip.activity_status == 1) ? _c('text', {
    staticClass: ["eleven_text-text-num"]
  }, [_vm._v("自12月1日起，您已获得")]) : _vm._e(), (_vm.personalData.upgrade_vip.activity_status == 1) ? _c('text', {
    staticClass: ["eleven_text-num"]
  }, [_vm._v(_vm._s(_vm.personalData.upgrade_vip.current_activity_integral))]) : _vm._e(), (_vm.personalData.upgrade_vip.activity_status == 1) ? _c('text', {
    staticClass: ["eleven_text-text-num"]
  }, [_vm._v("点经验值")]) : _vm._e()]), (_vm.personalData.upgrade_vip.current_number > 0 && _vm.personalData.upgrade_vip.activity_status == 1) ? _c('div', {
    staticStyle: {
      flexDirection: "row",
      flex: "1",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, [_c('div', {
    staticClass: ["row-top"],
    staticStyle: {
      flex: "1"
    }
  }, [(_vm.personalData.upgrade_vip.current_number > 0 && _vm.personalData.upgrade_vip.activity_status == 1) ? _c('text', {
    staticClass: ["eleven_text-text-num"]
  }, [_vm._v("您已能兑换")]) : _vm._e(), (_vm.personalData.upgrade_vip.current_number > 0 && _vm.personalData.upgrade_vip.activity_status == 1) ? _c('text', {
    staticClass: ["eleven_text-num"]
  }, [_vm._v(_vm._s(_vm.personalData.upgrade_vip.current_number))]) : _vm._e(), (_vm.personalData.upgrade_vip.current_number > 0 && _vm.personalData.upgrade_vip.activity_status == 1) ? _c('text', {
    staticClass: ["eleven_text-text-num"]
  }, [_vm._v("瓶红酒，还差")]) : _vm._e(), (_vm.personalData.upgrade_vip.current_number > 0 && _vm.personalData.upgrade_vip.activity_status == 1) ? _c('text', {
    staticClass: ["eleven_text-num"]
  }, [_vm._v(_vm._s(_vm.personalData.upgrade_vip.residual_number))]) : _vm._e(), (_vm.personalData.upgrade_vip.current_number > 0 && _vm.personalData.upgrade_vip.activity_status == 1) ? _c('text', {
    staticClass: ["eleven_text-text-num"],
    staticStyle: {
      flex: "1"
    }
  }, [_vm._v("点经验值可兑换下一瓶")]) : _vm._e()]), _c('text', {
    staticClass: ["vip-upgrade-button"],
    on: {
      "click": function($event) {
        _vm.clickRank()
      }
    }
  }, [_vm._v("查看榜单＞")])]) : _vm._e(), (_vm.personalData.upgrade_vip.current_number == 0 && _vm.personalData.upgrade_vip.activity_status == 1) ? _c('div', {
    staticStyle: {
      flexDirection: "row",
      flex: "1",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, [_c('div', {
    staticClass: ["row-top"],
    staticStyle: {
      flex: "1"
    }
  }, [(_vm.personalData.upgrade_vip.current_number == 0 && _vm.personalData.upgrade_vip.activity_status == 1) ? _c('text', {
    staticClass: ["eleven_text-text-num"]
  }, [_vm._v("您还差")]) : _vm._e(), (_vm.personalData.upgrade_vip.current_number == 0 && _vm.personalData.upgrade_vip.activity_status == 1) ? _c('text', {
    staticClass: ["eleven_text-num"]
  }, [_vm._v(_vm._s(_vm.personalData.upgrade_vip.residual_number))]) : _vm._e(), (_vm.personalData.upgrade_vip.current_number == 0 && _vm.personalData.upgrade_vip.activity_status == 1) ? _c('text', {
    staticClass: ["eleven_text-text-num"],
    staticStyle: {
      flex: "1"
    }
  }, [_vm._v("点经验值可兑换第一瓶")]) : _vm._e()]), _c('text', {
    staticClass: ["vip-upgrade-button"],
    on: {
      "click": function($event) {
        _vm.clickRank()
      }
    }
  }, [_vm._v("查看榜单＞")])]) : _vm._e()]) : _vm._e()])]) : _vm._e(), (_vm.level_id == 4 || _vm.level_id == 5) ? _c('div', {
    staticClass: ["vip-banner-content-middle"]
  }, [(false) ? _c('image', {
    staticClass: ["vip-banner-content-middle-image"],
    attrs: {
      "src": "http://img.abmau.com/abmau/7b0c58a3e9ea848b8db643161d468aa2.png"
    }
  }) : _vm._e(), _c('div', {
    staticClass: ["vip-banner-image-content-middle"]
  }, [_c('div', {
    staticClass: ["vip-banner-image-content-middle-top"]
  }, [_c('text', {
    staticClass: ["vip-banner-image-content-top-title"]
  }, [_vm._v("卖初级礼包累积8点经验值")]), _c('div', {
    staticStyle: {
      flexDirection: "row",
      flex: "1",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, [_vm._m(5), _c('text', {
    staticClass: ["vip-upgrade-button"],
    on: {
      "click": function($event) {
        _vm.clickUpgradeGo()
      }
    }
  }, [_vm._v("点击前往＞")])])]), _c('div', {
    staticClass: ["line"]
  }), (_vm.personalData.upgrade_vip.activity_status != 1) ? _c('div', {
    staticClass: ["vip-banner-image-content-bot"]
  }, [(_vm.personalData.upgrade_vip.activity_status == -1) ? _c('div', {
    staticClass: ["flex-column"]
  }, [_c('div', {
    staticClass: ["row-start"]
  }, [(_vm.personalData.upgrade_vip.activity_status == -1) ? _c('text', {
    staticClass: ["eleven_text-num"]
  }, [_vm._v("2000")]) : _vm._e(), (_vm.personalData.upgrade_vip.activity_status == -1) ? _c('text', {
    staticClass: ["eleven_text-text-num"]
  }, [_vm._v("瓶红酒已抢完，活动结束，可兑换")]) : _vm._e()]), _c('div', {
    staticClass: ["row"]
  }, [(_vm.personalData.upgrade_vip.activity_status == -1) ? _c('text', {
    staticClass: ["eleven_text-num"]
  }, [_vm._v(_vm._s(_vm.personalData.upgrade_vip.current_number))]) : _vm._e(), (_vm.personalData.upgrade_vip.activity_status == -1) ? _c('text', {
    staticClass: ["eleven_text-text-num"]
  }, [_vm._v("瓶红酒")]) : _vm._e()])]) : _vm._e(), _c('div', {
    staticClass: ["flex-column"]
  }, [(_vm.personalData.upgrade_vip.activity_status == 0) ? _c('text', {
    staticClass: ["eleven_text-text-num"]
  }, [_vm._v("兑换红酒活动已结束，可兑换")]) : _vm._e(), _c('div', {
    staticClass: ["row"],
    staticStyle: {
      paddingTop: "5px"
    }
  }, [(_vm.personalData.upgrade_vip.activity_status == 0) ? _c('text', {
    staticClass: ["eleven_text-num"]
  }, [_vm._v(_vm._s(_vm.personalData.upgrade_vip.current_number))]) : _vm._e(), (_vm.personalData.upgrade_vip.activity_status == 0) ? _c('text', {
    staticClass: ["eleven_text-text-num"]
  }, [_vm._v("瓶红酒")]) : _vm._e()])]), _c('text', {
    staticClass: ["vip-upgrade-button"],
    on: {
      "click": function($event) {
        _vm.clickRank()
      }
    }
  }, [_vm._v("查看榜单＞")])]) : _vm._e(), (_vm.personalData.upgrade_vip.activity_status == 1) ? _c('div', {
    staticClass: ["vip-banner-image-content-bot-middle-start"]
  }, [_c('div', {
    staticClass: ["row"]
  }, [(_vm.personalData.upgrade_vip.activity_status == 1) ? _c('text', {
    staticClass: ["eleven_text-text-num"]
  }, [_vm._v("自12月1日起，您已获得")]) : _vm._e(), (_vm.personalData.upgrade_vip.activity_status == 1) ? _c('text', {
    staticClass: ["eleven_text-num"]
  }, [_vm._v(_vm._s(_vm.personalData.upgrade_vip.current_activity_integral))]) : _vm._e(), (_vm.personalData.upgrade_vip.activity_status == 1) ? _c('text', {
    staticClass: ["eleven_text-text-num"]
  }, [_vm._v("点经验值")]) : _vm._e()]), (_vm.personalData.upgrade_vip.current_number > 0 && _vm.personalData.upgrade_vip.activity_status == 1) ? _c('div', {
    staticStyle: {
      flexDirection: "row",
      flex: "1",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, [_c('div', {
    staticClass: ["row-top"],
    staticStyle: {
      flex: "1"
    }
  }, [(_vm.personalData.upgrade_vip.current_number > 0 && _vm.personalData.upgrade_vip.activity_status == 1) ? _c('text', {
    staticClass: ["eleven_text-text-num"]
  }, [_vm._v("您已能兑换")]) : _vm._e(), (_vm.personalData.upgrade_vip.current_number > 0 && _vm.personalData.upgrade_vip.activity_status == 1) ? _c('text', {
    staticClass: ["eleven_text-num"]
  }, [_vm._v(_vm._s(_vm.personalData.upgrade_vip.current_number))]) : _vm._e(), (_vm.personalData.upgrade_vip.current_number > 0 && _vm.personalData.upgrade_vip.activity_status == 1) ? _c('text', {
    staticClass: ["eleven_text-text-num"]
  }, [_vm._v("瓶红酒，还差")]) : _vm._e(), (_vm.personalData.upgrade_vip.current_number > 0 && _vm.personalData.upgrade_vip.activity_status == 1) ? _c('text', {
    staticClass: ["eleven_text-num"]
  }, [_vm._v(_vm._s(_vm.personalData.upgrade_vip.residual_number))]) : _vm._e(), (_vm.personalData.upgrade_vip.current_number > 0 && _vm.personalData.upgrade_vip.activity_status == 1) ? _c('text', {
    staticClass: ["eleven_text-text-num"],
    staticStyle: {
      flex: "1"
    }
  }, [_vm._v("点经验值可兑换下一瓶")]) : _vm._e()]), _c('text', {
    staticClass: ["vip-upgrade-button"],
    on: {
      "click": function($event) {
        _vm.clickRank()
      }
    }
  }, [_vm._v("查看榜单＞")])]) : _vm._e(), (_vm.personalData.upgrade_vip.current_number == 0 && _vm.personalData.upgrade_vip.activity_status == 1) ? _c('div', {
    staticStyle: {
      flexDirection: "row",
      flex: "1",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, [_c('div', {
    staticClass: ["row-top"],
    staticStyle: {
      flex: "1"
    }
  }, [(_vm.personalData.upgrade_vip.current_number == 0 && _vm.personalData.upgrade_vip.activity_status == 1) ? _c('text', {
    staticClass: ["eleven_text-text-num"]
  }, [_vm._v("您还差")]) : _vm._e(), (_vm.personalData.upgrade_vip.current_number == 0 && _vm.personalData.upgrade_vip.activity_status == 1) ? _c('text', {
    staticClass: ["eleven_text-num"]
  }, [_vm._v(_vm._s(_vm.personalData.upgrade_vip.residual_number))]) : _vm._e(), (_vm.personalData.upgrade_vip.current_number == 0 && _vm.personalData.upgrade_vip.activity_status == 1) ? _c('text', {
    staticClass: ["eleven_text-text-num"],
    staticStyle: {
      flex: "1"
    }
  }, [_vm._v("点经验值可兑换第一瓶")]) : _vm._e()]), _c('text', {
    staticClass: ["vip-upgrade-button"],
    on: {
      "click": function($event) {
        _vm.clickRank()
      }
    }
  }, [_vm._v("查看榜单＞")])]) : _vm._e()]) : _vm._e()])]) : _vm._e()]) : _vm._e()])]), (_vm.personalData.news_arr && _vm.personalData.news_arr.length > 0) ? _c('cell', {
    staticClass: ["item-cell-information"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('div', {
    staticClass: ["divide"]
  }), _c('div', {
    staticClass: ["item"],
    on: {
      "click": function($event) {
        _vm.jumpToBusiness()
      }
    }
  }, [_c('text', {
    staticClass: ["item-title"]
  }, [_vm._v("最新资讯")]), _c('image', {
    staticClass: ["more"],
    attrs: {
      "src": "http://img.abmau.com/abmau/197260145f13acf70e06fe37ad4ba0c8.png"
    }
  })]), _vm._l((_vm.personalData.news_arr), function(item, index) {
    return _c('div', {
      key: index,
      on: {
        "click": function($event) {
          _vm.jumpToBusinessDetails(item)
        }
      }
    }, [_c('div', {
      staticClass: ["information-item"]
    }, [_c('image', {
      staticClass: ["information-icon"],
      attrs: {
        "src": item.small_img
      }
    }), _c('div', {
      staticClass: ["information-content"]
    }, [_c('text', {
      staticClass: ["information-title"]
    }, [_vm._v(_vm._s(item.title))]), _c('div', {
      staticClass: ["information-status"]
    }, [_c('text', {
      staticClass: ["information-status-text"]
    }, [_vm._v(_vm._s(item.code) + " " + _vm._s(item.created_at))])])])]), (index != (_vm.personalData.news_arr.length - 1)) ? _c('line') : _vm._e()], 1)
  })], 2) : _vm._e()]) : _vm._e()]), _c('div', {
    staticClass: ["personal-float"]
  }, [_c('div', {
    staticClass: ["personal-float-parent"]
  }, [_c('div', {
    style: {
      opacity: _vm.isReData ? 0 : _vm.opacity,
      backgroundColor: '#FFFFFF'
    }
  }, [_c('div', {
    style: {
      height: _vm.nativeBarHeight + 'px'
    }
  }), _c('div', {
    style: {
      height: _vm.titleHeight + 'px'
    }
  })]), (_vm.personalData) ? _c('div', {
    staticClass: ["personal-float-content"]
  }, [_c('div', {
    staticClass: ["personal-float-title"],
    style: {
      height: _vm.titleHeight + 'px',
      marginTop: _vm.nativeBarHeight + 'px'
    }
  }, [_c('div', {
    staticClass: ["personal-float-avatar-left"]
  }, [(_vm.personalData.headimg == '' || _vm.personalData.headimg == null) ? _c('image', {
    staticClass: ["personal-float-avatar"],
    style: {
      opacity: _vm.isShowHead ? '1' : '0'
    },
    attrs: {
      "resize": "cover",
      "src": "assets://icon_user_placehold"
    },
    on: {
      "click": function($event) {
        _vm.titleJumpToUserInfo()
      }
    }
  }) : _c('image', {
    staticClass: ["personal-float-avatar"],
    style: {
      opacity: _vm.isShowHead ? '1' : '0'
    },
    attrs: {
      "resize": "cover",
      "src": _vm.personalData.headimg
    },
    on: {
      "click": function($event) {
        _vm.titleJumpToUserInfo()
      }
    }
  })]), (_vm.isShowHead) ? _c('text', {
    staticClass: ["personal-float-title-text"]
  }, [_vm._v("个人中心")]) : _vm._e(), _c('div', {
    style: {
      flexDirection: 'row'
    }
  }, [_c('div', {
    staticClass: ["personal-title-item"],
    on: {
      "click": function($event) {
        _vm.clickMsg()
      }
    }
  }, [_c('image', {
    staticClass: ["personal-title-icon"],
    attrs: {
      "src": _vm.isReData ? 'http://img.abmau.com/abmau/ba3bd6159d80bd95533aeb0a6d7b3bce.png' :
        _vm.opacity <= 0.3 ? 'http://img.abmau.com/abmau/ba3bd6159d80bd95533aeb0a6d7b3bce.png' :
        'http://img.abmau.com/abmau/3bed39c1b8b48866e9bc220e0122036a.png'
    }
  }), (_vm.noReadCount > 0 && _vm.noReadCount < 100) ? _c('text', {
    staticClass: ["message-count"]
  }, [_vm._v(_vm._s(_vm.noReadCount))]) : _vm._e(), (_vm.noReadCount > 100) ? _c('text', {
    staticClass: ["message-count-more"]
  }, [_vm._v("99+")]) : _vm._e()]), _c('div', {
    staticClass: ["personal-title-item"],
    on: {
      "click": function($event) {
        _vm.jumpToSetting()
      }
    }
  }, [_c('image', {
    staticClass: ["personal-title-icon"],
    attrs: {
      "src": _vm.isReData ? 'http://img.abmau.com/abmau/4914641e01f793fd1b8beefcfebd6165.png' : _vm.opacity <= 0.3 ? 'http://img.abmau.com/abmau/4914641e01f793fd1b8beefcfebd6165.png' :
        'http://img.abmau.com/abmau/7c6f772fb38261ebdcd73d0a8511e571.png'
    }
  }), (_vm.personalData.verify == 0 || _vm.personalData.verify == 3 || _vm.showUserDot) ? _c('div', {
    staticClass: ["setting-dot"],
    style: {
      backgroundColor: _vm.isReData ? '#FFFFFF' : _vm.opacity <= 0.2 ? '#FFFFFF' : '#CF1126'
    }
  }) : _vm._e()])])])]) : _vm._e(), (_vm.opacity === 1) ? _c('div', {
    staticClass: ["personal-float-line"]
  }) : _vm._e()])]), _c('mask', {
    ref: "wxcPopupGuide",
    attrs: {
      "borderRadius": "0",
      "duration": "200",
      "hasAnimation": true,
      "hasOverlay": true,
      "overlayCanClose": false,
      "showClose": false,
      "show": _vm.showCopyWx
    },
    on: {
      "wxcMaskSetHidden": _vm.closeMask
    }
  }, [(_vm.personalData) ? _c('div', {
    style: {
      width: '750px',
      flex: 1
    },
    on: {
      "click": function($event) {
        _vm.changeMask(false)
      }
    }
  }, [(_vm.personalData.other && _vm.personalData.other != 'null') ? _c('div', {
    staticClass: ["mask-content"],
    on: {
      "click": function($event) {}
    }
  }, [_c('div', {
    staticClass: ["mask-content-top"]
  }, [_c('text', {
    staticClass: ["top-text"]
  }, [_vm._v("添加专属管家")]), _c('div', {
    staticClass: ["top-close-parent"],
    on: {
      "click": function($event) {
        _vm.changeMask(false)
      }
    }
  }, [_c('image', {
    staticClass: ["top-close"],
    attrs: {
      "src": "assets://ic_goods_details_remove"
    }
  })])]), _c('div', {
    staticClass: ["personal-mask-line"]
  }), (_vm.personalData.other.name) ? _c('text', {
    staticClass: ["content-title"]
  }, [_vm._v(_vm._s(_vm.personalData.other.name) + "(微信)：")]) : _vm._e(), _c('div', {
    staticClass: ["content-account-parent"]
  }, [(_vm.personalData.other.wx_number) ? _c('text', {
    staticClass: ["content-account"]
  }, [_vm._v(_vm._s(_vm.personalData.other.wx_number))]) : _vm._e(), _c('div', {
    staticClass: ["content-account-line"]
  }), _c('text', {
    staticClass: ["content-account-copy"],
    on: {
      "click": _vm.copeText
    }
  }, [_vm._v("复制")])]), _c('text', {
    staticClass: ["content-apply"],
    on: {
      "click": function($event) {
        _vm.changeMask(false)
      }
    }
  }, [_vm._v("确定")])]) : _vm._e()]) : _vm._e()]), _c('wxc-mask', {
    attrs: {
      "height": "772",
      "width": "570",
      "borderRadius": "10",
      "duration": "200",
      "maskBgColor": "#FFFFFF",
      "hasAnimation": true,
      "hasOverlay": true,
      "overlayCanClose": false,
      "showClose": false,
      "show": _vm.show
    }
  }, [(_vm.personalData && _vm.personalData.upgrade_vip != null) ? _c('div', {
    staticClass: ["mask-verify"]
  }, [_c('div', {
    staticClass: ["mask-title"]
  }, [_c('text', {
    staticClass: ["verify-title"]
  }, [_vm._v("关于招募初级VIP，赢新品红酒规则")]), _c('image', {
    staticClass: ["mask-close"],
    attrs: {
      "src": "assets://icon_ic_finish"
    },
    on: {
      "click": function($event) {
        _vm.clickClose()
      }
    }
  })]), _c('div', {
    staticClass: ["mask-line"]
  }), _c('div', {
    staticClass: ["mask-content-mask"]
  }, [_c('text', {
    staticClass: ["mask-content-text"],
    staticStyle: {
      lineHeight: "34px"
    }
  }, [_vm._v("1.销售1个初级小礼包可获得1点升级经验值")]), _c('text', {
    staticClass: ["mask-content-text"],
    staticStyle: {
      lineHeight: "34px"
    }
  }, [_vm._v("2.销售1个初级“健康美丽”大礼包可获得3点升级经验值")]), _c('text', {
    staticClass: ["mask-content-text"],
    staticStyle: {
      lineHeight: "34px"
    }
  }, [_vm._v("3.在12.04 10:00-12.31 24:00起销售初级VIP起泡酒礼包，享1.5倍经验值")]), _c('text', {
    staticClass: ["mask-content-text"],
    staticStyle: {
      lineHeight: "34px"
    }
  }, [_vm._v("4.12月1日-12月31日累计的经验值，每8点可兑换1瓶新品红酒，上不封顶！限量2000瓶，送完即止")]), _c('text', {
    staticClass: ["mask-content-text"],
    staticStyle: {
      lineHeight: "34px"
    }
  }, [_vm._v("5.一经发现刷单行为，如利用虚拟号，多个手机号注册初级VIP，将取消订单和排名资格，并处罚通告")]), _c('text', {
    staticClass: ["mask-content-text"],
    staticStyle: {
      lineHeight: "34px"
    }
  }, [_vm._v("6.红酒奖品发放时间：1月3日，根据注册账号发送兑换券，有效期30天")])]), _c('div', {
    staticClass: ["mask-bt"],
    on: {
      "click": function($event) {
        _vm.clickClose()
      }
    }
  }, [_c('text', {
    staticClass: ["mask-confirm"]
  }, [_vm._v("确定")])])]) : _vm._e()])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["seneschal-cell_horizontal"]
  }, [_c('text', {
    staticClass: ["seneschal-cell-text"]
  }, [_vm._v("微信添加专属管家，享受一对一服务")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["order_count"]
  }, [_c('image', {
    staticClass: ["order_type_image"],
    attrs: {
      "src": "http://img.abmau.com/abmau/078093c262c1d2a024df707c5775b727.png"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["item"]
  }, [_c('text', {
    staticClass: ["item-title"]
  }, [_vm._v("我的应用")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["row"],
    staticStyle: {
      paddingBottom: "20px"
    }
  }, [_c('text', {
    staticClass: ["vip-banner-image-content-top-title"]
  }, [_vm._v("奖励1:累积25点经验值，升中级VIP")]), _c('text', {
    staticStyle: {
      fontSize: "22px",
      color: "#333",
      fontWeight: "700"
    }
  }, [_vm._v("（享6.5折起购物）")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["row"],
    staticStyle: {
      justifyContent: "flex-start",
      alignItems: "center",
      paddingBottom: "20px"
    }
  }, [_c('text', {
    staticClass: ["vip-banner-image-content-top-title"]
  }, [_vm._v("奖励2:累积8点经验值，")]), _c('text', {
    staticClass: ["vip-banner-image-content-top-title"]
  }, [_vm._v("赢价值")]), _c('text', {
    staticStyle: {
      height: "30px",
      textAlign: "center",
      lineHeight: "30px",
      color: "#CF1126",
      fontSize: "26px",
      fontWeight: "700"
    }
  }, [_vm._v("398")]), _c('text', {
    staticClass: ["vip-banner-image-content-top-title"]
  }, [_vm._v("元新品红酒")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["row-top"],
    staticStyle: {
      justifyContent: "flex-start",
      alignItems: "center",
      flex: "1"
    }
  }, [_c('text', {
    staticClass: ["vip-banner-image-content-top-title"]
  }, [_vm._v("赢价值")]), _c('text', {
    staticStyle: {
      height: "30px",
      textAlign: "center",
      lineHeight: "30px",
      color: "#CF1126",
      fontSize: "26px",
      fontWeight: "700"
    }
  }, [_vm._v("398")]), _c('text', {
    staticClass: ["vip-banner-image-content-top-title"]
  }, [_vm._v("元新品红酒")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 28 */
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
/* 29 */
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
/* 30 */
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