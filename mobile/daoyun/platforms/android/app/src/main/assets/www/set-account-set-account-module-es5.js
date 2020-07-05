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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["set-account-set-account-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mine/set-account/set-account.page.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mine/set-account/set-account.page.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMineSetAccountSetAccountPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"返回\" color=\"primary\"  defaultHref=\"/tabs/mine\" ></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{title}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <ion-slides   #signupSlides  (ionSlideDidChange)=\"onSlideDidChange($event)\">\r\n    <ion-slide expand=\"full\">\r\n      <form novalidate #passwordForm=\"ngForm\" (ngSubmit)=\"checkPassword(passwordForm)\">\r\n       <ion-list padding-right no-margin>\r\n         <ion-item>\r\n        <ion-label position=\"stacked\" >身份认证，请输入登录密码</ion-label>\r\n         </ion-item>\r\n\r\n        <ion-item >\r\n          <ion-input name=\"password\" type=\"{{pwshow?'text':'password'}}\"  placeholder='密码' required [(ngModel)]=\"password\"></ion-input>\r\n          <a href=\"javascript:;\"rel=\"external nofollow\" item-end (click)=\"pwshow=!pwshow\" [ngClass]=\"pwshow?'eyeshow':'eyehide'\">\r\n            <ion-icon name=\"eye-outline\" color=\"dark\" class=\"eye-hide\"></ion-icon>  <!--闭眼图标-->\r\n            <ion-icon name=\"eye-off-outline\" color=\"dark\" class=\"eye-show\"></ion-icon>  <!--睁眼图标-->\r\n          </a>\r\n        </ion-item>\r\n\r\n        </ion-list>\r\n      <div padding-horizontal>\r\n        <ion-button type=\"submit\" expand=\"full\" color=\"primary\" [disabled]=\"passwordForm.invalid\" >\r\n          下一步\r\n        </ion-button>\r\n      </div>\r\n     </form>\r\n    </ion-slide>\r\n\r\n    <ion-slide> \r\n      <form novalidate #information=\"ngForm\" >\r\n        <ion-list *ngIf=\"title=='关联邮箱'\" >\r\n            <!-- 邮箱地址 -->\r\n      <ion-item>\r\n        <ion-input name=\"{{property}}\" type=\"text\" placeholder=\"{{property}}\" required\r\n                    pattern=\"\\w+@([0-9a-zA-Z]+[-0-9a-zA-Z]*)(\\.[0-9a-zA-Z]+[-0-9a-zA-Z]*)+\"\r\n                    [(ngModel)]=\"value\" #email=\"ngModel\">\r\n        </ion-input>\r\n      </ion-item>\r\n      <ion-text text-left color=\"danger\" *ngIf=\"email.invalid && email.touched\">\r\n        <p [hidden]=\"!email.errors?.required\" padding-start>请输入邮箱地址</p>\r\n        <p [hidden]=\"!email.errors?.pattern\" padding-start>邮箱地址格式错误</p>\r\n      </ion-text>\r\n\r\n          <!-- <ion-item>\r\n            <ion-input name=\"{{property}}\" type=\"text\" [(ngModel)]=\"value\" required placeholder=\"{{property}}\"></ion-input>\r\n          </ion-item> -->\r\n        </ion-list>\r\n         <!-- 手机号 -->\r\n      <ion-list *ngIf=\"title=='关联手机'\">\r\n      <ion-item>\r\n        <ion-input name=\"{{property}}\" type=\"number\" placeholder=\"{{property}}\" required\r\n               pattern=\"^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,3,5-9]))\\d{8}$\"\r\n               [(ngModel)]=\"value\" #phone=\"ngModel\">\r\n        </ion-input>\r\n    </ion-item>\r\n    <ion-text text-left color=\"danger\" *ngIf=\"phone.invalid && phone.touched\">\r\n        <p [hidden]=\"!phone.errors?.required\" padding-start>请输入手机号码</p>\r\n        <p [hidden]=\"!phone.errors?.pattern\" padding-start>您输入的手机号格式不正确</p>\r\n    </ion-text>\r\n  </ion-list>   \r\n        <div padding-horizontal>\r\n          <ion-button expand=\"block\" color=\"primary\" [disabled]=\"information.invalid\"  (click)=\"onSave()\">保存</ion-button>\r\n        </div>\r\n      </form>\r\n </ion-slide>\r\n\r\n</ion-slides>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/mine/set-account/set-account-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/mine/set-account/set-account-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: SetAccountPageRoutingModule */

  /***/
  function srcAppPagesMineSetAccountSetAccountRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetAccountPageRoutingModule", function () {
      return SetAccountPageRoutingModule;
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


    var _set_account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./set-account.page */
    "./src/app/pages/mine/set-account/set-account.page.ts");

    var routes = [{
      path: '',
      component: _set_account_page__WEBPACK_IMPORTED_MODULE_3__["SetAccountPage"]
    }];

    var SetAccountPageRoutingModule = function SetAccountPageRoutingModule() {
      _classCallCheck(this, SetAccountPageRoutingModule);
    };

    SetAccountPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SetAccountPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/mine/set-account/set-account.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/mine/set-account/set-account.module.ts ***!
    \**************************************************************/

  /*! exports provided: SetAccountPageModule */

  /***/
  function srcAppPagesMineSetAccountSetAccountModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetAccountPageModule", function () {
      return SetAccountPageModule;
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


    var _set_account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./set-account-routing.module */
    "./src/app/pages/mine/set-account/set-account-routing.module.ts");
    /* harmony import */


    var _set_account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./set-account.page */
    "./src/app/pages/mine/set-account/set-account.page.ts");

    var SetAccountPageModule = function SetAccountPageModule() {
      _classCallCheck(this, SetAccountPageModule);
    };

    SetAccountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _set_account_routing_module__WEBPACK_IMPORTED_MODULE_5__["SetAccountPageRoutingModule"]],
      declarations: [_set_account_page__WEBPACK_IMPORTED_MODULE_6__["SetAccountPage"]]
    })], SetAccountPageModule);
    /***/
  },

  /***/
  "./src/app/pages/mine/set-account/set-account.page.scss":
  /*!**************************************************************!*\
    !*** ./src/app/pages/mine/set-account/set-account.page.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMineSetAccountSetAccountPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".toolbar-title-md {\n  text-align: center;\n}\n\n.eyehide .eye-hide, .eyeshow .eye-show {\n  display: block;\n}\n\n.eyehide .eye-show, .eyeshow .eye-hide {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWluZS9zZXQtYWNjb3VudC9EOlxcaHhza3l1blxcbW9iaWxlXFxkYW95dW4vc3JjXFxhcHBcXHBhZ2VzXFxtaW5lXFxzZXQtYWNjb3VudFxcc2V0LWFjY291bnQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9taW5lL3NldC1hY2NvdW50L3NldC1hY2NvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxjQUFBO0FDRUo7O0FEQUE7RUFDSSxhQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9taW5lL3NldC1hY2NvdW50L3NldC1hY2NvdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyLXRpdGxlLW1kIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbi5leWVoaWRlIC5leWUtaGlkZSwgLmV5ZXNob3cgLmV5ZS1zaG93e1xyXG4gICAgZGlzcGxheTogYmxvY2s7Ly/orqnlr7nosaHmiJDkuLrlnZfnuqflhYPntKBcclxufVxyXG4uZXllaGlkZSAuZXllLXNob3csIC5leWVzaG93IC5leWUtaGlkZXtcclxuICAgIGRpc3BsYXk6IG5vbmU7Ly/mraTlhYPntKDkuI3kvJrooqvmmL7npLpcclxufSIsIi50b29sYmFyLXRpdGxlLW1kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZXllaGlkZSAuZXllLWhpZGUsIC5leWVzaG93IC5leWUtc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZXllaGlkZSAuZXllLXNob3csIC5leWVzaG93IC5leWUtaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/mine/set-account/set-account.page.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/mine/set-account/set-account.page.ts ***!
    \************************************************************/

  /*! exports provided: SetAccountPage */

  /***/
  function srcAppPagesMineSetAccountSetAccountPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetAccountPage", function () {
      return SetAccountPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var src_app_common_baseui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/common/baseui */
    "./src/app/common/baseui.ts");
    /* harmony import */


    var src_app_shared_services_mylocalstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/services/mylocalstorage.service */
    "./src/app/shared/services/mylocalstorage.service.ts");
    /* harmony import */


    var src_app_shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/services/zr-services.service */
    "./src/app/shared/services/zr-services.service.ts");

    var SetAccountPage = /*#__PURE__*/function (_src_app_common_baseu) {
      _inherits(SetAccountPage, _src_app_common_baseu);

      var _super = _createSuper(SetAccountPage);

      function SetAccountPage(activatedRoute, localStorageService, statusBar, navCtrl, router, zrServices, toastController) {
        var _this;

        _classCallCheck(this, SetAccountPage);

        _this = _super.call(this);
        _this.activatedRoute = activatedRoute;
        _this.localStorageService = localStorageService;
        _this.statusBar = statusBar;
        _this.navCtrl = navCtrl;
        _this.router = router;
        _this.zrServices = zrServices;
        _this.toastController = toastController;
        _this.submited = false;
        _this.slideIndex = 0;
        activatedRoute.queryParams.subscribe(function (queryParams) {
          _this.property = queryParams.property;
          _this.title = queryParams.title;
        }); // 沉浸式并且悬浮透明

        _this.statusBar.overlaysWebView(true);

        return _this;
      }
      /**
      * 停止轮播
      */


      _createClass(SetAccountPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userId = this.localStorageService.get('uid', '');
          this.loadUserInfo();
          this.signupSlides.lockSwipes(true); // this.signupSlides.lockSwipeToNext(true);
        } // loadUserInfo(){
        //   this.zrServices.getUserByUserId(this.userId).then(async (result:any) => {
        //     console.log('here:', result.data);
        //     if(result.code=='200'){
        //         this.oldpass=result.data.password
        //     }else{
        //       super.showToast(this.toastController,'获取失败')
        //     } 
        //   }).catch((error) => {
        //     console.log('密码错误', error)
        //   })
        // }

        /**
         * 记录当前slide的索引
         */

      }, {
        key: "onSlideDidChange",
        value: function onSlideDidChange() {
          var _this2 = this;

          // 原来是这样，会有问题
          // this.slideIndex = this.signupSlides.getActiveIndex();
          // console.log('当前轮播索引: ' + this.slideIndex);
          this.slideIndex = this.signupSlides.getActiveIndex().then(function (index) {
            _this2.slideIndex = index;
            console.log('当前轮播索引：' + _this2.slideIndex);
          });
        }
      }, {
        key: "onNext",
        value: function onNext() {
          this, this.signupSlides.lockSwipes(false);
          this.signupSlides.slideNext();
          this.slideIndex++;
          this.signupSlides.lockSwipes(true);
        }
      }, {
        key: "onPrevious",
        value: function onPrevious() {
          this.signupSlides.lockSwipes(false);
          this.signupSlides.slidePrev();
          this.slideIndex--;
          this.signupSlides.lockSwipes(true);
        }
      }, {
        key: "checkPassword",
        value: function checkPassword(form) {
          console.log(this.submited); // this.submited = true;
          // 通过验证

          console.log(form.valid);
          console.log('fsd' + this.password);

          if (this.password == this.oldpass) {
            // 已通过客户端验证
            this.onNext();
          } else {
            _get(_getPrototypeOf(SetAccountPage.prototype), "showToast", this).call(this, this.toastController, '密码错误');
          }
        }
      }, {
        key: "onSave",
        value: function onSave() {
          var _this3 = this;

          var params;

          if (this.title == '关联手机') {
            params = {
              "userId": this.userId,
              "phone": this.value
            };
          } else if (this.title == '关联邮箱') {
            params = {
              "userId": this.userId,
              "email": this.value
            };
          }

          this.zrServices.updateUserinfo(params).then(function (result) {
            console.log('更新:', result.data);

            if (result.code == '200') {
              _get(_getPrototypeOf(SetAccountPage.prototype), "showToast", _this3).call(_this3, _this3.toastController, '用户信息更新成功,重新登录');

              _this3.router.navigateByUrl('/login');

              console.log(result.code);
              console.log('userdetail：', result.data);
              console.log(result.msg);
            } else {
              _get(_getPrototypeOf(SetAccountPage.prototype), "showToast", _this3).call(_this3, _this3.toastController, result.msg);
            }
          })["catch"](function (error) {
            _get(_getPrototypeOf(SetAccountPage.prototype), "showToast", _this3).call(_this3, _this3.toastController, '用户信息更新失败');
          });
        }
      }, {
        key: "loadUserInfo",
        value: function loadUserInfo() {
          var _this4 = this;

          this.zrServices.getUserByUserId(this.userId).then(function (result) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log('here:', result.data);

                      if (result.code == '200') {
                        console.log('asgagaeegeagr' + result.data.roleId);
                        this.oldpass = result.data.password;
                      } else {// super.showToast(this.toastController,'获取信息失败')
                        // super.showToast(this.toastController,'用户信息更新失败')
                      }

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          })["catch"](function (error) {
            console.log('获取用户信息失败', error);
          });
        }
      }]);

      return SetAccountPage;
    }(src_app_common_baseui__WEBPACK_IMPORTED_MODULE_5__["BaseUI"]);

    SetAccountPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_shared_services_mylocalstorage_service__WEBPACK_IMPORTED_MODULE_6__["MylocalstorageService"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_7__["ZrServicesService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('signupSlides', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])], SetAccountPage.prototype, "signupSlides", void 0);
    SetAccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-set-account',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./set-account.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mine/set-account/set-account.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./set-account.page.scss */
      "./src/app/pages/mine/set-account/set-account.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_shared_services_mylocalstorage_service__WEBPACK_IMPORTED_MODULE_6__["MylocalstorageService"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_7__["ZrServicesService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])], SetAccountPage);
    /***/
  }
}]);
//# sourceMappingURL=set-account-set-account-module-es5.js.map