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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"返回\" color=\"primary\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class='ion-text-center'>注册</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content no-padding>\r\n  <form novalidate #information=\"ngForm\" >\r\n    <ion-list>\r\n      <!--姓名-->\r\n      <ion-item>\r\n        <ion-input name=\"name\" type=\"text\" placeholder=\"输入姓名\" required\r\n                    [(ngModel)]=\"register.name\" #name=\"ngModel\">\r\n        </ion-input>\r\n      </ion-item>\r\n      <ion-text text-left color=\"danger\" *ngIf=\"name.invalid && name.touched\">\r\n        <p [hidden]=\"!name.errors?.required\" padding-start>请输入姓名</p>\r\n      </ion-text>\r\n      <!-- 邮箱地址 -->\r\n      <ion-item>\r\n        <ion-input name=\"email\" type=\"text\" placeholder=\"输入邮箱地址\" required\r\n                    pattern=\"\\w+@([0-9a-zA-Z]+[-0-9a-zA-Z]*)(\\.[0-9a-zA-Z]+[-0-9a-zA-Z]*)+\"\r\n                    [(ngModel)]=\"register.email\" #email=\"ngModel\">\r\n        </ion-input>\r\n      </ion-item>\r\n      <ion-text text-left color=\"danger\" *ngIf=\"email.invalid && email.touched\">\r\n        <p [hidden]=\"!email.errors?.required\" padding-start>请输入邮箱地址</p>\r\n        <p [hidden]=\"!email.errors?.pattern\" padding-start>邮箱地址格式错误</p>\r\n      </ion-text>\r\n      <!-- 手机号 -->\r\n      <ion-item>\r\n        <ion-input name=\"phone\" type=\"number\" placeholder=\"输入手机号码\" required\r\n               pattern=\"^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,3,5-9]))\\d{8}$\"\r\n               [(ngModel)]=\"register.phone\" #phone=\"ngModel\">\r\n        </ion-input>\r\n    </ion-item>\r\n    <ion-text text-left color=\"danger\" *ngIf=\"phone.invalid && phone.touched\">\r\n        <p [hidden]=\"!phone.errors?.required\" padding-start>请输入手机号码</p>\r\n        <p [hidden]=\"!phone.errors?.pattern\" padding-start>您输入的手机号格式不正确</p>\r\n    </ion-text>\r\n      <!-- 登录密码 -->\r\n      <ion-item>\r\n        <ion-input type=\"password\" placeholder=\"请输入登录密码 \"required [(ngModel)]=\"register.password\" name=\"newpass\" #newpass=\"ngModel\"\r\n                   pattern=\"[0-9a-zA-Z]{6,16}\"></ion-input>\r\n      </ion-item>\r\n      <ion-text [hidden]=\"!newpass.errors?.pattern\" padding-start color=\"danger\" *ngIf=\"newpass.invalid && newpass.touched\">\r\n        密码格式为6至16位的数字字母\r\n      </ion-text>\r\n      <!-- 再次新密码 -->\r\n      <ion-item>\r\n        <ion-input type=\"password\" placeholder=\"请输入确认密码\" required [(ngModel)]=\"register.confirmPassword\" name=\"checkpass\" #checkpass=\"ngModel\"></ion-input>\r\n      </ion-item>\r\n      <ion-text [hidden]=\"register.password== register.confirmPassword\" padding-start color=\"danger\">两次密码不一致</ion-text>\r\n      <!-- <ion-item>\r\n        <ion-input name=\"password\" type=\"password\" placeholder=\"请输入登录密码\" required pattern=\"^(?=.{6,16})[0-9A-Za-z]*[^0-9A-Za-z][0-9A-Za-z]*$\" [(ngModel)]=\"register.password\" #password=\"ngModel\"></ion-input>\r\n      </ion-item>\r\n        <ion-item *ngIf=\"password.invalid && password.touched\">\r\n        <p [hidden]=\"!password.errors?.required\">请输入登录密码</p>\r\n        <p [hidden]=\"!password.errors?.pattern\">密码长度6至16位，且包含数字、英文、符号</p>\r\n      </ion-item>\r\n      <ion-item>\r\n      <ion-input name=\"confirmPassword\" type=\"password\" placeholder=\"请输入确认密码\" required [(ngModel)]=\"register.confirmPassword\" #confirmPassword=\"ngModel\"></ion-input>\r\n      </ion-item>\r\n        <ion-item *ngIf=\"confirmPassword.invalid && confirmPassword.touched\">\r\n        <p [hidden]=\"!confirmPassword.errors?.required\">请输入确认密码</p>\r\n        <p [hidden]=\"password===confirmPassword\">两次输入的密码不一致</p>\r\n        </ion-item> -->\r\n    </ion-list> \r\n\r\n    <!-- 确定注册-->\r\n    <div padding-horizontal>\r\n      <ion-button expand=\"full\" color=\"primary\" [disabled]=\"information.invalid\"\r\n        (click)=\"onRegister()\" >\r\n        确定注册\r\n      </ion-button>\r\n    </div>\r\n\r\n  </form>\r\n\r\n</ion-content>\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/pages/register/register-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/register/register-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: RegisterPageRoutingModule */

  /***/
  function srcAppPagesRegisterRegisterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function () {
      return RegisterPageRoutingModule;
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


    var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/pages/register/register.page.ts");

    var routes = [{
      path: '',
      component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }];

    var RegisterPageRoutingModule = function RegisterPageRoutingModule() {
      _classCallCheck(this, RegisterPageRoutingModule);
    };

    RegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegisterPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/register/register.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/register/register.module.ts ***!
    \***************************************************/

  /*! exports provided: RegisterPageModule */

  /***/
  function srcAppPagesRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
      return RegisterPageModule;
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


    var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register-routing.module */
    "./src/app/pages/register/register-routing.module.ts");
    /* harmony import */


    var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/pages/register/register.page.ts");

    var RegisterPageModule = function RegisterPageModule() {
      _classCallCheck(this, RegisterPageModule);
    };

    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]],
      declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })], RegisterPageModule);
    /***/
  },

  /***/
  "./src/app/pages/register/register.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/register/register.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/register/register.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/register/register.page.ts ***!
    \*************************************************/

  /*! exports provided: RegisterPage */

  /***/
  function srcAppPagesRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
      return RegisterPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/common.service */
    "./src/app/shared/services/common.service.ts");
    /* harmony import */


    var src_app_common_baseui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/common/baseui */
    "./src/app/common/baseui.ts");

    var RegisterPage = /*#__PURE__*/function (_src_app_common_baseu) {
      _inherits(RegisterPage, _src_app_common_baseu);

      var _super2 = _createSuper(RegisterPage);

      function RegisterPage(router, navCtrl, alertCtrl, http, common, toastController, loadingController) {
        var _this;

        _classCallCheck(this, RegisterPage);

        _this = _super2.call(this);
        _this.router = router;
        _this.navCtrl = navCtrl;
        _this.alertCtrl = alertCtrl;
        _this.http = http;
        _this.common = common;
        _this.toastController = toastController;
        _this.loadingController = loadingController;
        _this.register = {
          phone: '',
          email: '',
          name: '',
          id: '',
          password: '',
          confirmPassword: '',
          code: '',
          university: '',
          college: '',
          major: '',
          usertype: '',
          gender: ''
        };
        return _this;
      }

      _createClass(RegisterPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "gotoLogin",
        value: function gotoLogin() {
          this.router.navigateByUrl('/login');
        }
      }, {
        key: "onRegister",
        value: function onRegister() {
          var _this2 = this;

          var _super = Object.create(null, {
            showLoading: {
              get: function get() {
                return _get(_getPrototypeOf(RegisterPage.prototype), "showLoading", _this2);
              }
            }
          });

          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var url, toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    url = '/Login/register';

                    if (!(this.register.password !== this.register.confirmPassword)) {
                      _context.next = 8;
                      break;
                    }

                    _context.next = 4;
                    return this.toastController.create({
                      message: '两次密码输入不一致',
                      duration: 3000
                    });

                  case 4:
                    toast = _context.sent;
                    toast.present();
                    _context.next = 9;
                    break;

                  case 8:
                    this.common.ajaxPost(url, this.register).then(function (response) {
                      if (response['code'] == 100) {
                        console.log(response);

                        _this3.presentToast(response["msg"]);

                        _super.showLoading.call(_this3, _this3.loadingController, "跳转至登录。。。。");

                        _this3.router.navigateByUrl('/login');

                        console.log("res suc ");
                      } else if (response['code'] == 102) {
                        // this.loadingController.dismiss()
                        _this3.presentToast(response["msg"]);
                      } else if (response['code'] == 103) {
                        _this3.presentToast(response["msg"]);
                      }
                    })["catch"](function (err) {
                      console.log(err);
                    });

                  case 9:
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
      }]);

      return RegisterPage;
    }(src_app_common_baseui__WEBPACK_IMPORTED_MODULE_6__["BaseUI"]);

    RegisterPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }];
    };

    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.page.scss */
      "./src/app/pages/register/register.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])], RegisterPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-register-register-module-es5.js.map