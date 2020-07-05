function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-in-sign-in-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-classes/sign-in-teacher/sign-in/sign-in.page.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-classes/sign-in-teacher/sign-in/sign-in.page.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCreateClassesSignInTeacherSignInSignInPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"onBack()\">\r\n        <ion-icon name=\"arrow-back-outline\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>{{courseName}}签到</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n\r\n<ion-content>\r\n  \r\n  <!-- 签到时间设置 -->\r\n  <ion-item-divider>\r\n    <ion-label>\r\n      签到时间设置\r\n    </ion-label>\r\n  </ion-item-divider>\r\n\r\n    <ion-item>\r\n      <ion-label>签到分钟</ion-label>\r\n      <!-- <ion-input type=\"text\" placeholder=\"3\" value=\"3\"></ion-input> -->\r\n      <ion-input type='number' clearInput  [(ngModel)]=\"duration\"  name='duration' placeholder='请输入分钟数' required></ion-input>\r\n    </ion-item>\r\n    \r\n\r\n  <!-- 签到区域 -->\r\n  <ion-item-divider>\r\n    <ion-label>\r\n      {{courseName}}签到情况\r\n    </ion-label>\r\n  </ion-item-divider>\r\n  <ion-item>\r\n    <!-- <ion-toolbar>\r\n      <ion-title class=\"ion-text-center\"><span>16</span>/<span>48</span></ion-title>\r\n    </ion-toolbar> -->\r\n\r\n    <!-- <ion-label>Awesome Label</ion-label> -->\r\n    <ion-text >\r\n      <h5 style=\"color: darkslateblue;\">\r\n        每5秒更新一次\r\n      </h5>\r\n      <p>已签到：<span >{{signCount}}</span>人</p>\r\n      <p>总人数：<span>{{courseMembersCount}}</span>&nbsp;人</p>\r\n    </ion-text>\r\n    \r\n  </ion-item>\r\n\r\n  <!-- 局部刷新，不一定用哈 -->\r\n  <!-- <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\" mode='ios' [hidden]=\"isStrat\">\r\n    <ion-fab-button color=\"warning\" (click)=\"doRefresh()\">\r\n      <ion-icon name=\"refresh-outline\">点击刷新</ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab> -->\r\n\r\n\r\n  \r\n\r\n  \r\n  \r\n</ion-content>\r\n\r\n<ion-footer>\r\n\r\n  <ion-toolbar  class=\"ion-margin-vertical\">\r\n\r\n      <ion-button  #cancelButton (click)=\"doCancelSignIn()\" [disabled]=\"!isStart\" fill='outline' size='large' shape='round' color=\"dark\" class=\"ion-padding-start\">\r\n        <ion-label>放弃</ion-label>\r\n      </ion-button>\r\n  \r\n      <ion-button #startButton (click)=\"doSignIn()\"  [disabled]=\"isStart\" fill='outline' size='large' shape='round' color=\"primary\" class=\"ion-margin-start ion-padding-start\">\r\n        <ion-label>开始</ion-label>\r\n      </ion-button>\r\n      \r\n  \r\n      <ion-button #finishButton (click)=\"doEndSignIn()\" [disabled]=\"!isStart\"  fill='outline' size='large' slot=\"end\" shape='round' color=\"danger\" class=\"ion-padding-start ion-margin-end\" >\r\n        <ion-label>结束</ion-label>\r\n      </ion-button>\r\n    \r\n\r\n      \r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/join-classes/sign-in/sign-in.page.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/join-classes/sign-in/sign-in.page.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesJoinClassesSignInSignInPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/join-classes\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{courseName}}签到</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <ion-item lines='none'  class=\"ion-margin\" button (click)=\"doSignIn()\" [disabled]=\"hasSigned\">\r\n      <ion-label class=\"ion-padding-vertical\"  color=\"primary\">\r\n        <!-- <ion-button  expand=\"block\" fill=\"clear\" size='large' shape=\"round\"> -->\r\n          <ion-avatar class=\"ion-padding-vertical sign-in-avatar ion-text-center\"   >\r\n            <ion-icon name=\"checkbox-outline\" size='large'></ion-icon>\r\n            <h5>签到</h5>\r\n          </ion-avatar>\r\n        <!-- </ion-button> -->\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    \r\n  <!-- 签到列表 -->\r\n  <ion-list lines='full'>\r\n\r\n    <!-- 列表头 -->\r\n    <ion-list-header lines='full' class=\"ion-padding-horizontal\">\r\n      <ion-label>{{courseName}}历史签到记录</ion-label>\r\n      <ion-label class=\"ion-text-right\" color=\"primary\">{{signCount}}次</ion-label>\r\n    </ion-list-header>\r\n\r\n    <!-- 内容部分 -->\r\n    <ion-item *ngFor=\"let item of myInfo\">\r\n      <ion-label >\r\n        <h4><time>{{item.endTime | date:'yyyy-MM-dd'}}</time>&nbsp;签到 </h4>\r\n        <p><time> {{item.endTime | date:'HH:mm:ss'}} </time> <span class=\"exp ion-float-right\">{{item.signStatus}}</span> </p>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/create-classes/sign-in-teacher/sign-in/sign-in-routing.module.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/pages/create-classes/sign-in-teacher/sign-in/sign-in-routing.module.ts ***!
    \****************************************************************************************/

  /*! exports provided: SignInPageRoutingModule */

  /***/
  function srcAppPagesCreateClassesSignInTeacherSignInSignInRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInPageRoutingModule", function () {
      return SignInPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _sign_in_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sign-in.page */
    "./src/app/pages/create-classes/sign-in-teacher/sign-in/sign-in.page.ts");

    var routes = [{
      path: '',
      component: _sign_in_page__WEBPACK_IMPORTED_MODULE_3__["SignInPage"]
    }];

    var SignInPageRoutingModule = function SignInPageRoutingModule() {
      _classCallCheck(this, SignInPageRoutingModule);
    };

    SignInPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignInPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/create-classes/sign-in-teacher/sign-in/sign-in.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/create-classes/sign-in-teacher/sign-in/sign-in.module.ts ***!
    \********************************************************************************/

  /*! exports provided: SignInPageModule */

  /***/
  function srcAppPagesCreateClassesSignInTeacherSignInSignInModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInPageModule", function () {
      return SignInPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sign-in-routing.module */
    "./src/app/pages/create-classes/sign-in-teacher/sign-in/sign-in-routing.module.ts");
    /* harmony import */


    var _sign_in_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sign-in.page */
    "./src/app/pages/create-classes/sign-in-teacher/sign-in/sign-in.page.ts");

    var SignInPageModule = function SignInPageModule() {
      _classCallCheck(this, SignInPageModule);
    };

    SignInPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignInPageRoutingModule"]],
      declarations: [_sign_in_page__WEBPACK_IMPORTED_MODULE_6__["SignInPage"]]
    })], SignInPageModule);
    /***/
  },

  /***/
  "./src/app/pages/create-classes/sign-in-teacher/sign-in/sign-in.page.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/create-classes/sign-in-teacher/sign-in/sign-in.page.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCreateClassesSignInTeacherSignInSignInPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".box {\n  display: inline-flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3JlYXRlLWNsYXNzZXMvc2lnbi1pbi10ZWFjaGVyL3NpZ24taW4vRDpcXGh4c2t5dW5cXG1vYmlsZVxcZGFveXVuL3NyY1xcYXBwXFxwYWdlc1xcY3JlYXRlLWNsYXNzZXNcXHNpZ24taW4tdGVhY2hlclxcc2lnbi1pblxcc2lnbi1pbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NyZWF0ZS1jbGFzc2VzL3NpZ24taW4tdGVhY2hlci9zaWduLWluL3NpZ24taW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NyZWF0ZS1jbGFzc2VzL3NpZ24taW4tdGVhY2hlci9zaWduLWluL3NpZ24taW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcbiIsIi5ib3gge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/create-classes/sign-in-teacher/sign-in/sign-in.page.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/create-classes/sign-in-teacher/sign-in/sign-in.page.ts ***!
    \******************************************************************************/

  /*! exports provided: SignInPage */

  /***/
  function srcAppPagesCreateClassesSignInTeacherSignInSignInPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInPage", function () {
      return SignInPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/services/zr-services.service */
    "./src/app/shared/services/zr-services.service.ts");
    /* harmony import */


    var _shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/services/local-storage.service */
    "./src/app/shared/services/local-storage.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_common_baseui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/common/baseui */
    "./src/app/common/baseui.ts"); // import { ToastServiceProvider } from "../../../../shared/services/toast-service.service";


    var SignInPage = /*#__PURE__*/function (_src_app_common_baseu) {
      _inherits(SignInPage, _src_app_common_baseu);

      var _super = _createSuper(SignInPage);

      function SignInPage(activatedRoute, zrServices, localStorageService, // private toastService: ToastServiceProvider,
      alertController, toastController, router, loadingController) {
        var _this;

        _classCallCheck(this, SignInPage);

        _this = _super.call(this);
        _this.activatedRoute = activatedRoute;
        _this.zrServices = zrServices;
        _this.localStorageService = localStorageService;
        _this.alertController = alertController;
        _this.toastController = toastController;
        _this.router = router;
        _this.loadingController = loadingController; // @ViewChild('startButton', {static:true}) startButton:any
        // @ViewChild('cancelButton', {static:true}) cancelButton:any
        // @ViewChild('finishButton', {static:true}) finishButton:any
        // @ViewChild('signCountShow', {static:true}) signCountShow:any

        _this.signId = '';
        _this.courseId = '';
        _this.courseName = '';
        _this.userId = '';
        _this.courseMembersCount = '';
        _this.signCount = '';
        _this.coordinate = {
          latitude: '1',
          longitude: '1'
        }; // flag

        _this.isStart = false;
        _this.isEnd = false; // 表单对象

        _this.duration = 3;
        _this.signInfo = {
          courseId: _this.courseId
        };
        return _this;
      }

      _createClass(SignInPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          _get(_getPrototypeOf(SignInPage.prototype), "showLoading", this).call(this, this.loadingController, '请等待', 300);

          this.activatedRoute.queryParams.subscribe(function (result) {
            // console.log('传入的参数：', result);
            _this2.courseId = result.courseId;
            _this2.courseName = result.courseName;
            _this2.courseMembersCount = result.courseMembersCount;
          });
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          if (this.timer) {
            console.log('clear timer');
            clearInterval(this.timer);
          }
        } // 获取地址

      }, {
        key: "getLocation",
        value: function getLocation() {
          var geolocation = new BMap.Geolocation(); //新建地图对象

          return new Promise(function (reslove, reject) {
            geolocation.getCurrentPosition(function (r) {
              if (this.getStatus() == 0) {
                // console.log('获取位置成功：', r.point.lat, r.point.lng);
                reslove(r.point);
              } else {
                // console.log('获取位置失败:', this.getStatus());
                reject(this.getStatus());
                alert('获取位置失败' + this.getStatus());
              }
            });
          });
        } // 拆分了一下开始签到事件（获取地址）

      }, {
        key: "doSignIn",
        value: function doSignIn() {
          var _this3 = this;

          // 获取签到信息
          this.getLocation().then(function (result) {
            _this3.coordinate.latitude = result.lat;
            _this3.coordinate.longitude = result.lng; // console.log('新的coordinate内容为：', this.coordinate);

            _this3.doStartSignIn();
          })["catch"](function (error) {
            console.log('显示错误');
          });
        } // 开始签到交互

      }, {
        key: "doStartSignIn",
        value: function doStartSignIn() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this4 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      animated: true,
                      header: '提示',
                      message: '是否开始签到？',
                      buttons: [{
                        text: '取消',
                        role: 'cancel'
                      }, {
                        text: '确认',
                        handler: function handler() {
                          // 发送签到请求
                          _this4.zrServices.createSignIn(_this4.courseId, _this4.coordinate.longitude, _this4.coordinate.latitude, _this4.duration).then(function (result) {
                            // console.log(result);
                            if (result.code == '200') {
                              _this4.isStart = true; // 是否开始签到

                              _this4.signId = result.data.signId; // 接受返回的signid
                              // console.log('当前签到id为：', this.signId);

                              _this4.localStorageService.setStore('signId', _this4.signId); //保存到缓存里


                              _this4.presentToast('开始计时！', 'success'); // 刷新签到情况


                              _this4.doRefresh();
                            } else {
                              _this4.presentToast(result.msg, 'danger');
                            }
                          })["catch"](function (error) {
                            _this4.presentToast(error.message, 'danger');
                          });
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } // 刷新签到人数信息

      }, {
        key: "doRefresh",
        value: function doRefresh() {
          var _this5 = this;

          this.timer = setInterval(function () {
            _this5.loadCurrentSignInfo();

            console.log('自动刷新了');
          }, 5000); // 每两秒查询一次
        } // 查询签到信息

      }, {
        key: "loadCurrentSignInfo",
        value: function loadCurrentSignInfo() {
          var _this6 = this;

          // 获取当前签到信息
          this.zrServices.getCurrentSignBySignId(this.signId).then(function (result) {
            // console.log('查询到签到信息为：', result);
            // 更新签到人头
            _this6.signCount = result.data[0].signedNumbers; // this.signCountShow.nativeElement.value = result.data.signNumbers
            // 查询到已经是结束状态了

            if (result.data[0].endTimestamp < result.data[0].nowTimeStamp) {
              // console.log('时间超过计时时间！');
              // 结束
              _this6.isEnd = true;
              _this6.isStart = false; // 结束timer

              if (_this6.timer) {
                clearInterval(_this6.timer);
              } // 提示


              _this6.presentToast('签到时间到，签到结束！'); // 跳转回前一页


              _this6.onBackTo('/tabs/create-classes/sign-in-teacher');
            }
          })["catch"](function (error) {
            console.log('刷新签到情况错误');
          });
        } // 放弃签到

      }, {
        key: "doCancelSignIn",
        value: function doCancelSignIn() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this7 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      animated: true,
                      header: '提示',
                      message: '是否放弃签到？',
                      buttons: [{
                        text: '取消',
                        role: 'cancel'
                      }, {
                        text: '确认',
                        handler: function handler() {
                          // 发送取消签到请求
                          _this7.zrServices.cancelSignIn(_this7.signId).then(function (result) {
                            if (result.code == '200') {
                              // 放弃逻辑
                              _this7.isStart = false; // 提示

                              _this7.presentToast('放弃签到！', 'warning'); // 跳转回前一页


                              _this7.onBackTo('/tabs/create-classes/sign-in-teacher');
                            } else {
                              _this7.presentToast(result.msg, 'danger');
                            }
                          })["catch"](function (error) {
                            _this7.presentToast(error.message, 'danger'); // 然后跳转


                            _this7.isStart = false;

                            _this7.onBack();
                          });
                        }
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        } // 结束签到

      }, {
        key: "doEndSignIn",
        value: function doEndSignIn() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this8 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      animated: true,
                      header: '提示',
                      message: '是否结束签到？',
                      buttons: [{
                        text: '取消',
                        role: 'cancel'
                      }, {
                        text: '确认',
                        handler: function handler() {
                          // 发送结束签到请求
                          _this8.zrServices.endSignIn(_this8.signId).then(function (result) {
                            if (result.code == '200') {
                              // 结束逻辑
                              _this8.isEnd = true;
                              _this8.isStart = false; // 提示

                              _this8.presentToast('结束签到成功！'); // 跳转回前一页


                              _this8.onBackTo('/tabs/create-classes/sign-in-teacher');
                            } else {
                              _this8.presentToast(result.msg, 'danger');
                            }
                          })["catch"](function (error) {
                            // console.log('结束签到页错误');
                            _this8.presentToast(error.message, 'danger'); // 已经结束过了， 那错误逻辑在这里
                            // 然后跳转
                            // this.isStart = false;
                            // this.onBack()

                          });
                        }
                      }]
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        } // 跳转回签到页面

      }, {
        key: "onBackTo",
        value: function onBackTo(url) {
          this.router.navigate([url], {
            queryParams: {
              courseId: this.courseId,
              courseMembersCount: this.courseMembersCount
            }
          });
        } // 跳出toast提示

      }, {
        key: "presentToast",
        value: function presentToast(message) {
          var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'success';
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var toast;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.toastController.create({
                      message: message,
                      duration: 2000,
                      position: 'bottom',
                      animated: true,
                      mode: 'ios',
                      color: color,
                      buttons: ['关闭']
                    });

                  case 2:
                    toast = _context4.sent;
                    toast.present(); //出发消息提示框

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        } // 导航点击返回跳转

      }, {
        key: "onBack",
        value: function onBack() {
          if (this.isStart) {
            // 开始了
            // console.log('A type');
            this.doCancelSignIn();
          } else {
            // 还没开始
            // console.log('B type');
            this.onBackTo('/tabs/create-classes/sign-in-teacher');
          }
        }
      }]);

      return SignInPage;
    }(src_app_common_baseui__WEBPACK_IMPORTED_MODULE_6__["BaseUI"]);

    SignInPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_3__["ZrServicesService"]
      }, {
        type: _shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
      }];
    };

    SignInPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sign-in',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sign-in.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-classes/sign-in-teacher/sign-in/sign-in.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sign-in.page.scss */
      "./src/app/pages/create-classes/sign-in-teacher/sign-in/sign-in.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_3__["ZrServicesService"], _shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])], SignInPage);
    /***/
  },

  /***/
  "./src/app/pages/join-classes/sign-in/sign-in-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/join-classes/sign-in/sign-in-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: SignInPageRoutingModule */

  /***/
  function srcAppPagesJoinClassesSignInSignInRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInPageRoutingModule", function () {
      return SignInPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _sign_in_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sign-in.page */
    "./src/app/pages/join-classes/sign-in/sign-in.page.ts");

    var routes = [{
      path: '',
      component: _sign_in_page__WEBPACK_IMPORTED_MODULE_3__["SignInPage"]
    }];

    var SignInPageRoutingModule = function SignInPageRoutingModule() {
      _classCallCheck(this, SignInPageRoutingModule);
    };

    SignInPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignInPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/join-classes/sign-in/sign-in.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/join-classes/sign-in/sign-in.module.ts ***!
    \**************************************************************/

  /*! exports provided: SignInPageModule */

  /***/
  function srcAppPagesJoinClassesSignInSignInModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInPageModule", function () {
      return SignInPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sign-in-routing.module */
    "./src/app/pages/join-classes/sign-in/sign-in-routing.module.ts");
    /* harmony import */


    var _sign_in_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sign-in.page */
    "./src/app/pages/join-classes/sign-in/sign-in.page.ts");

    var SignInPageModule = function SignInPageModule() {
      _classCallCheck(this, SignInPageModule);
    };

    SignInPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignInPageRoutingModule"]],
      declarations: [_sign_in_page__WEBPACK_IMPORTED_MODULE_6__["SignInPage"]]
    })], SignInPageModule);
    /***/
  },

  /***/
  "./src/app/pages/join-classes/sign-in/sign-in.page.scss":
  /*!**************************************************************!*\
    !*** ./src/app/pages/join-classes/sign-in/sign-in.page.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesJoinClassesSignInSignInPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sign-in-img {\n  width: 7em;\n  margin: 0 auto;\n}\n\n.sign-in-avatar {\n  display: block;\n  margin: 0 auto;\n  width: 5em;\n  height: 5em;\n  color: white;\n  background-color: #3880ff;\n  box-shadow: 2px 3px 5px #888888;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvam9pbi1jbGFzc2VzL3NpZ24taW4vRDpcXGh4c2t5dW5cXG1vYmlsZVxcZGFveXVuL3NyY1xcYXBwXFxwYWdlc1xcam9pbi1jbGFzc2VzXFxzaWduLWluXFxzaWduLWluLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvam9pbi1jbGFzc2VzL3NpZ24taW4vc2lnbi1pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9qb2luLWNsYXNzZXMvc2lnbi1pbi9zaWduLWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWduLWluLWltZ3tcclxuICAgIHdpZHRoOiA3ZW07XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLnNpZ24taW4tYXZhdGFye1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiA1ZW07XHJcbiAgICBoZWlnaHQ6IDVlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODgwZmY7XHJcbiAgICBib3gtc2hhZG93OiAycHggM3B4IDVweCAjODg4ODg4O1xyXG5cclxufSIsIi5zaWduLWluLWltZyB7XG4gIHdpZHRoOiA3ZW07XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uc2lnbi1pbi1hdmF0YXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA1ZW07XG4gIGhlaWdodDogNWVtO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODgwZmY7XG4gIGJveC1zaGFkb3c6IDJweCAzcHggNXB4ICM4ODg4ODg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/join-classes/sign-in/sign-in.page.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/join-classes/sign-in/sign-in.page.ts ***!
    \************************************************************/

  /*! exports provided: SignInPage */

  /***/
  function srcAppPagesJoinClassesSignInSignInPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInPage", function () {
      return SignInPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/services/zr-services.service */
    "./src/app/shared/services/zr-services.service.ts");
    /* harmony import */


    var _shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/services/local-storage.service */
    "./src/app/shared/services/local-storage.service.ts");
    /* harmony import */


    var _shared_services_toast_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../shared/services/toast-service.service */
    "./src/app/shared/services/toast-service.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_common_baseui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/common/baseui */
    "./src/app/common/baseui.ts");

    var SignInPage = /*#__PURE__*/function (_src_app_common_baseu2) {
      _inherits(SignInPage, _src_app_common_baseu2);

      var _super2 = _createSuper(SignInPage);

      function SignInPage(activatedRoute, zrServices, localStorageService, toastService, alertController, // public toastController:ToastController,
      router, loadingController) {
        var _this9;

        _classCallCheck(this, SignInPage);

        _this9 = _super2.call(this);
        _this9.activatedRoute = activatedRoute;
        _this9.zrServices = zrServices;
        _this9.localStorageService = localStorageService;
        _this9.toastService = toastService;
        _this9.alertController = alertController;
        _this9.router = router;
        _this9.loadingController = loadingController; // signId = ''

        _this9.hasSigned = false;
        _this9.courseId = '';
        _this9.userId = '';
        _this9.myInfo = []; // 位置

        _this9.coordinate = {
          latitude: '1',
          longitude: '1'
        };
        return _this9;
      }

      _createClass(SignInPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          _get(_getPrototypeOf(SignInPage.prototype), "showLoading", this).call(this, this.loadingController, '请等待', 800);

          this.userId = this.localStorageService.getStore('uid', '');
          this.activatedRoute.queryParams.subscribe(function (result) {
            // console.log('传入的参数：', result);
            _this10.courseId = result.courseId;
            _this10.courseName = result.courseName;
          });
          this.loadCurrentSignInfo();
        } // 查询该门课程的签到信息
        // 查询签到信息

      }, {
        key: "loadCurrentSignInfo",
        value: function loadCurrentSignInfo() {
          var _this11 = this;

          // 获取当前签到信息
          var params = {
            "courseId": this.courseId,
            "studentId": this.userId //123123123

          };
          this.zrServices.getMemberCourseExpInfo(params).then(function (result) {
            _this11.signCount = result.data.length;

            var _iterator = _createForOfIteratorHelper(result.data),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var r = _step.value;
                var s = {
                  signId: r.signId,
                  endTime: r.endTime,
                  signStatus: r.signStatus
                };

                _this11.myInfo.push(s); // 重构每次签到列表

              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          })["catch"](function (error) {
            _this11.toastService.errorToast('获取用户该课程的经验值失败');
          });
        } // 获取地址

      }, {
        key: "getLocation",
        value: function getLocation() {
          var geolocation = new BMap.Geolocation(); //新建地图对象

          return new Promise(function (reslove, reject) {
            geolocation.getCurrentPosition(function (r) {
              // console.log(this.getStatus())
              if (this.getStatus() == 0) {
                // console.log('获取位置成功：', r.point.lat, r.point.lng);
                reslove(r.point);
              } else {
                // console.log('获取位置失败:', this.getStatus());
                reject(this.getStatus());
              }
            });
          });
        }
      }, {
        key: "doSignIn",
        value: function doSignIn() {
          var _this12 = this;

          // 获取签到信息
          _get(_getPrototypeOf(SignInPage.prototype), "showLoading", this).call(this, this.loadingController, '请等待', 1500);

          this.getLocation().then(function (result) {
            _this12.coordinate.latitude = result.lat;
            _this12.coordinate.longitude = result.lng;

            _this12.doAttendSignIn();
          })["catch"](function (error) {
            _this12.toastService.errorToast('无法获取地理位置！');
          });
        } // 签到

      }, {
        key: "doAttendSignIn",
        value: function doAttendSignIn() {
          var _this13 = this;

          if (this.hasSigned) {
            this.toastService.errorToast('已签到过！请勿重复签到！');
            return;
          }

          var params = {
            courseId: this.courseId,
            studentId: this.userId,
            targetLatitude: this.coordinate.latitude,
            targetLongitude: this.coordinate.longitude
          };
          this.zrServices.attendSignIn(params).then(function (result) {
            // console.log(result);
            if (result.code == '200') {
              // 重构数据
              // this.hasSigned = true  // 标志签到
              // this.signCount += 1
              // let s = {
              //   signId : result.data.signId,
              //   endTime : result.data.signTime,
              //   signStatus : result.data.signStatus
              // }
              // //  重构每次签到列表
              // this.myInfo.push(s)
              _this13.hasSigned = true; // 标志签到

              _this13.toastService.generalToast('签到成功！');

              _this13.myInfo.splice(0);

              _this13.loadCurrentSignInfo(); // location.reload()

            } else if (result.code == '400') {
              _this13.toastService.errorToast(result.msg);
            }
          })["catch"](function (error) {
            _this13.toastService.errorToast('签到失败！');

            console.log(error);
          });
        } // 获取地址

      }, {
        key: "qrscanner6",
        value: function qrscanner6() {
          var geolocation = new BMap.Geolocation(); //新建地图对象

          return new Promise(function (reslove, reject) {
            geolocation.getCurrentPosition(function (r) {
              console.log(this.getStatus());

              if (this.getStatus() == '0') {
                console.log('获取位置成功：', r.point.lat, r.point.lng);
                alert('获取位置成功' + r.point.lat + r.point.lng);
                reslove(r);
              } else {
                console.log('获取位置失败:', this.getStatus());
                reject(this.getStatus());
                alert('获取位置失败' + this.getStatus());
              }
            }, {
              enableHighAccuracy: true
            });
          });
        }
      }]);

      return SignInPage;
    }(src_app_common_baseui__WEBPACK_IMPORTED_MODULE_7__["BaseUI"]);

    SignInPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_3__["ZrServicesService"]
      }, {
        type: _shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]
      }, {
        type: _shared_services_toast_service_service__WEBPACK_IMPORTED_MODULE_5__["ToastServiceProvider"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
      }];
    };

    SignInPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sign-in',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sign-in.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/join-classes/sign-in/sign-in.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sign-in.page.scss */
      "./src/app/pages/join-classes/sign-in/sign-in.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_3__["ZrServicesService"], _shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"], _shared_services_toast_service_service__WEBPACK_IMPORTED_MODULE_5__["ToastServiceProvider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]])], SignInPage);
    /***/
  }
}]);
//# sourceMappingURL=sign-in-sign-in-module-es5.js.map