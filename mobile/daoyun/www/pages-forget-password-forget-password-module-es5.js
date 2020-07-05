function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forget-password-forget-password-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forget-password/forget-password.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forget-password/forget-password.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesForgetPasswordForgetPasswordPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"返回\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>找回密码</ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n    1、输入邮箱或者手机号 > 2、根据短信重置密码\n  </ion-toolbar>\n</ion-header>\n\n<ion-content non-padding>\n<div padding-horizontal>\n  <form #loginForm=\"ngForm\">\n    <ion-list padding-right no-margin>\n      <ion-item margin-top class=\"full-width\">\n        <ion-label position=\"floating\">邮箱/手机号</ion-label>\n        <ion-input name=\"account\" type=\"number\" [(ngModel)]=\"account\"></ion-input>\n      </ion-item>\n    </ion-list>\n  </form>\n  <div padding-horizontal class=\"full-width\">\n    <ion-button expand=\"block\" color=\"primary\" (click)=\"onClick()\" >提交</ion-button>\n  </div>\n</div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/forget-password/forget-password-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/forget-password/forget-password-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: ForgetPasswordPageRoutingModule */

  /***/
  function srcAppPagesForgetPasswordForgetPasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgetPasswordPageRoutingModule", function () {
      return ForgetPasswordPageRoutingModule;
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


    var _forget_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./forget-password.page */
    "./src/app/pages/forget-password/forget-password.page.ts");

    var routes = [{
      path: '',
      component: _forget_password_page__WEBPACK_IMPORTED_MODULE_3__["ForgetPasswordPage"]
    }];

    var ForgetPasswordPageRoutingModule = function ForgetPasswordPageRoutingModule() {
      _classCallCheck(this, ForgetPasswordPageRoutingModule);
    };

    ForgetPasswordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ForgetPasswordPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/forget-password/forget-password.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/forget-password/forget-password.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ForgetPasswordPageModule */

  /***/
  function srcAppPagesForgetPasswordForgetPasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgetPasswordPageModule", function () {
      return ForgetPasswordPageModule;
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


    var _forget_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./forget-password-routing.module */
    "./src/app/pages/forget-password/forget-password-routing.module.ts");
    /* harmony import */


    var _forget_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./forget-password.page */
    "./src/app/pages/forget-password/forget-password.page.ts");

    var ForgetPasswordPageModule = function ForgetPasswordPageModule() {
      _classCallCheck(this, ForgetPasswordPageModule);
    };

    ForgetPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _forget_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgetPasswordPageRoutingModule"]],
      declarations: [_forget_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgetPasswordPage"]]
    })], ForgetPasswordPageModule);
    /***/
  },

  /***/
  "./src/app/pages/forget-password/forget-password.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/forget-password/forget-password.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesForgetPasswordForgetPasswordPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZvcmdldC1wYXNzd29yZC9mb3JnZXQtcGFzc3dvcmQucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/forget-password/forget-password.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/forget-password/forget-password.page.ts ***!
    \***************************************************************/

  /*! exports provided: ForgetPasswordPage */

  /***/
  function srcAppPagesForgetPasswordForgetPasswordPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgetPasswordPage", function () {
      return ForgetPasswordPage;
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


    var src_app_shared_services_mylocalstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services/mylocalstorage.service */
    "./src/app/shared/services/mylocalstorage.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ForgetPasswordPage = /*#__PURE__*/function () {
      function ForgetPasswordPage(localStorage, alertCtrl, navCtrl, toastCtrl, router) {
        _classCallCheck(this, ForgetPasswordPage);

        this.localStorage = localStorage;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.account = '';
      }

      _createClass(ForgetPasswordPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClick",
        value: function onClick() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var user, toast, alert, _alert;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    user = this.localStorage.get('user', ''); // console.log(this.account);

                    if (!(this.account === '')) {
                      _context.next = 8;
                      break;
                    }

                    _context.next = 4;
                    return this.toastCtrl.create({
                      message: '请输入您的邮箱或者手机号码',
                      duration: 3000
                    });

                  case 4:
                    toast = _context.sent;
                    toast.present();
                    _context.next = 20;
                    break;

                  case 8:
                    if (!(this.account != user.accounts[0].identifier && this.account != user.accounts[1].identifier)) {
                      _context.next = 15;
                      break;
                    }

                    _context.next = 11;
                    return this.alertCtrl.create({
                      header: '提示',
                      message: '账号要为已注册账户',
                      buttons: ['知道了']
                    });

                  case 11:
                    alert = _context.sent;
                    alert.present();
                    _context.next = 20;
                    break;

                  case 15:
                    _context.next = 17;
                    return this.alertCtrl.create({
                      header: '提示',
                      message: '验证消息已发送，请及时查看',
                      buttons: ['知道了']
                    });

                  case 17:
                    _alert = _context.sent;

                    _alert.present();

                    this.router.navigateByUrl('/login');

                  case 20:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return ForgetPasswordPage;
    }();

    ForgetPasswordPage.ctorParameters = function () {
      return [{
        type: src_app_shared_services_mylocalstorage_service__WEBPACK_IMPORTED_MODULE_2__["MylocalstorageService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    ForgetPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forget-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forget-password.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forget-password/forget-password.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forget-password.page.scss */
      "./src/app/pages/forget-password/forget-password.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_mylocalstorage_service__WEBPACK_IMPORTED_MODULE_2__["MylocalstorageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], ForgetPasswordPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-forget-password-forget-password-module-es5.js.map