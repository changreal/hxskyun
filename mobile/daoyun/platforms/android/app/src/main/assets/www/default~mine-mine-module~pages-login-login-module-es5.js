function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~mine-mine-module~pages-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n\r\n  <ion-toolbar>\r\n    <ion-title class='ion-text-center'>登录</ion-title>\r\n    <!-- <ion-buttons>\r\n      <button ion-button (click)=\"dismiss()\">\r\n        <span ion-text color='primary' showWhen=\"ios\">取消</span>\r\n        <ion-icon name=\"close-outline\" showWhen=\"android\"></ion-icon>\r\n      </button>\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content no-padding>\r\n  <div padding-horizontal>\r\n  <form #f=\"ngForm\">\r\n    <ion-list padding-right no-margin>\r\n      <ion-item mode='md' class=\"ion-no-padding margin-left\">\r\n        <ion-label>请选择登录方式</ion-label>\r\n        <ion-select [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"loginType\" value=\"phone\" interface=\"action-sheet\" (ionChange)='getValue()'>\r\n          <ion-select-option value=\"phone\">手机</ion-select-option>\r\n          <ion-select-option value=\"email\">邮箱</ion-select-option>\r\n          <ion-select-option value=\"userid\">学号</ion-select-option>\r\n        </ion-select>\r\n      </ion-item> \r\n\r\n    <ion-item>\r\n      <ion-icon name=\"person-outline\"></ion-icon>\r\n      <ion-label fixed>账号</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-input name=\"username\" type=\"text\" placeholder=\"请输入账号\" [(ngModel)]=\"username\" clearInput required></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon name=\"lock-closed-outline\"></ion-icon>\r\n      <ion-label fixed>密码</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-input name=\"password\" type=\"{{pwshow?'text':'password'}}\"  placeholder='请输入密码' [(ngModel)]=\"password\"></ion-input>\r\n      <a href=\"javascript:;\"rel=\"external nofollow\" item-end (click)=\"pwshow=!pwshow\" [ngClass]=\"pwshow?'eyeshow':'eyehide'\">\r\n        <ion-icon name=\"eye-outline\" color=\"dark\" class=\"eye-hide\"></ion-icon>  <!--闭眼图标-->\r\n        <ion-icon name=\"eye-off-outline\" color=\"dark\" class=\"eye-show\"></ion-icon>  <!--睁眼图标-->\r\n      </a>\r\n    </ion-item>\r\n  </ion-list>\r\n    <!-- <ion-item>\r\n      <ion-input type=\"password\" placeholder=\"请输入密码\" #password></ion-input>\r\n    </ion-item> -->\r\n    <ion-grid>\r\n      <!-- 登录注册 -->\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button expand=\"full\" color=\"primary\" (click)=\"onLogin()\">登录</ion-button>\r\n        </ion-col>\r\n        <!-- <ion-col>\r\n          <ion-button expand=\"full\" fill=\"outline\" color=\"primary\" href=\"/signup\">注册新账号</ion-button>\r\n        </ion-col> -->\r\n      </ion-row>\r\n      <!-- <ion-row>\r\n        <ion-col>\r\n          <ion-button expand=\"full\" color=\"primary\" >微信登录</ion-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button expand=\"full\"  color=\"primary\" >微博登录</ion-button>\r\n        </ion-col>\r\n      </ion-row> -->\r\n      <!-- 忘记密码 -->\r\n      <ion-row>\r\n        <!-- <ion-col>\r\n          <ion-button fill=\"clear\" size=\"small\" >手机号验证登录</ion-button>\r\n        </ion-col> -->\r\n        <ion-col>\r\n          <ion-button fill=\"clear\" size=\"small\" routerLink=\"/forget-password\">忘记密码？</ion-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button fill=\"clear\" size=\"small\" routerLink=\"/register\">注册新账号</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      \r\n    </ion-grid>\r\n    </form>\r\n  </div>\r\n  \r\n \r\n\r\n</ion-content>\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".toolbar-title-md {\n  text-align: center;\n}\n\n.eyehide .eye-hide, .eyeshow .eye-show {\n  display: block;\n}\n\n.eyehide .eye-show, .eyeshow .eye-hide {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vRDpcXGh4c2t5dW5cXG1vYmlsZVxcZGFveXVuL3NyY1xcYXBwXFxwYWdlc1xcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURDQTtFQUNJLGNBQUE7QUNFSjs7QURBQTtFQUNJLGFBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyLXRpdGxlLW1kIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbi5leWVoaWRlIC5leWUtaGlkZSwgLmV5ZXNob3cgLmV5ZS1zaG93e1xyXG4gICAgZGlzcGxheTogYmxvY2s7Ly/orqnlr7nosaHmiJDkuLrlnZfnuqflhYPntKBcclxufVxyXG4uZXllaGlkZSAuZXllLXNob3csIC5leWVzaG93IC5leWUtaGlkZXtcclxuICAgIGRpc3BsYXk6IG5vbmU7Ly/mraTlhYPntKDkuI3kvJrooqvmmL7npLpcclxufSIsIi50b29sYmFyLXRpdGxlLW1kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZXllaGlkZSAuZXllLWhpZGUsIC5leWVzaG93IC5leWUtc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZXllaGlkZSAuZXllLXNob3csIC5leWVzaG93IC5leWUtaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/login/login.page.ts ***!
    \*******************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppPagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_app_shared_services_mylocalstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/mylocalstorage.service */
    "./src/app/shared/services/mylocalstorage.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/services/common.service */
    "./src/app/shared/services/common.service.ts");
    /* harmony import */


    var src_app_common_baseui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/common/baseui */
    "./src/app/common/baseui.ts");
    /* harmony import */


    var src_app_shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/services/zr-services.service */
    "./src/app/shared/services/zr-services.service.ts");

    var LoginPage = /*#__PURE__*/function (_src_app_common_baseu) {
      _inherits(LoginPage, _src_app_common_baseu);

      var _super2 = _createSuper(LoginPage);

      function LoginPage(alertController, toastController, modalCtrl, loadingController, http, localStorageService, router, common, zrServices) {
        var _this;

        _classCallCheck(this, LoginPage);

        _this = _super2.call(this);
        _this.alertController = alertController;
        _this.toastController = toastController;
        _this.modalCtrl = modalCtrl;
        _this.loadingController = loadingController;
        _this.http = http;
        _this.localStorageService = localStorageService;
        _this.router = router;
        _this.common = common;
        _this.zrServices = zrServices;
        _this.loadingIsOpen = false;
        _this.username = '';
        _this.password = '';
        _this.peopleInfo = {
          phone: '',
          password: ''
        };
        _this.loginType = 'phone';
        return _this;
      } // async dismiss() {
      //   this.modalCtrl.dismiss({
      //     'dismissed': true
      //   });
      // }


      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onLogin",
        value: function onLogin(form) {
          var _this2 = this;

          var _super = Object.create(null, {
            showLoading: {
              get: function get() {
                return _get(_getPrototypeOf(LoginPage.prototype), "showLoading", _this2);
              }
            },
            showToast: {
              get: function get() {
                return _get(_getPrototypeOf(LoginPage.prototype), "showToast", _this2);
              }
            }
          });

          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var toast, alert, params;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log(this.username + this.password); // let url="https://imoocqa.gugujiankong.com/api/account/login"+"?mobile="+this.username+"&password="+this.password
                    // let url='/Login/checkLogin'

                    this.peopleInfo.phone = this.username;
                    this.peopleInfo.password = this.password;
                    console.log("login info:" + this.peopleInfo);

                    if (!(this.username === '')) {
                      _context.next = 11;
                      break;
                    }

                    _context.next = 7;
                    return this.toastController.create({
                      message: '请输入您的手机号码或者邮箱',
                      duration: 3000
                    });

                  case 7:
                    toast = _context.sent;
                    toast.present();
                    _context.next = 21;
                    break;

                  case 11:
                    if (!(this.password === '')) {
                      _context.next = 18;
                      break;
                    }

                    _context.next = 14;
                    return this.toastController.create({
                      message: '请输入您的密码',
                      duration: 3000
                    });

                  case 14:
                    alert = _context.sent;
                    alert.present();
                    _context.next = 21;
                    break;

                  case 18:
                    if (this.loginType == 'phone') {
                      params = {
                        "phone": this.username,
                        "password": this.password
                      };
                    } else if (this.loginType == 'email') {
                      params = {
                        "email": this.username,
                        "password": this.password
                      };
                    } else if (this.loginType == 'userid') {
                      params = {
                        "userId": this.username,
                        "password": this.password
                      };
                    } // let params:object = {
                    //   "phone" : this.username,
                    //   "password" : this.password
                    // }
                    // 验证登录账号与密码，不对的话给出错误提示


                    _super.showLoading.call(this, this.loadingController, "登录中");

                    this.zrServices.login(params).then(function (result) {
                      console.log('登录的result是：', result);

                      if (result.code == '100') {
                        _this3.localStorageService.set('Token', result["data"]);

                        console.log('uid' + result.extra.userRole.userId);

                        _this3.localStorageService.set('uid', result.extra.userRole.userId);

                        _this3.localStorageService.set('roleId', result.extra.userRole.roleId);

                        _super.showToast.call(_this3, _this3.toastController, '登录成功');

                        _this3.router.navigateByUrl('/tabs/join-classes');

                        console.log(result);
                      } else {
                        console.log(result);

                        _super.showToast.call(_this3, _this3.toastController, '登录失败,请检查账号和密码');
                      }
                    })["catch"](function (error) {
                      _super.showToast.call(_this3, _this3.toastController, '登录失败');
                    });

                  case 21:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast(mes) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toastController.create({
                      message: mes,
                      duration: 2000
                    });

                  case 2:
                    toast = _context2.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "getValue",
        value: function getValue() {
          console.log('登录方式' + this.loginType);
        }
      }]);

      return LoginPage;
    }(src_app_common_baseui__WEBPACK_IMPORTED_MODULE_7__["BaseUI"]);

    LoginPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: src_app_shared_services_mylocalstorage_service__WEBPACK_IMPORTED_MODULE_4__["MylocalstorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]
      }, {
        type: src_app_shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_8__["ZrServicesService"]
      }];
    };

    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/pages/login/login.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], src_app_shared_services_mylocalstorage_service__WEBPACK_IMPORTED_MODULE_4__["MylocalstorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"], src_app_shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_8__["ZrServicesService"]])], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=default~mine-mine-module~pages-login-login-module-es5.js.map