function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-test-test-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test/test.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test/test.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTestTestPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>test</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n \n    <ion-list>\n      <ion-item>\n        <ion-label position=\"stacked\">输入数字1</ion-label>\n        <ion-input required [(ngModel)]=\"oldpassword\" name=\"oldpass\" #oldpass=\"ngModel\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">输入数字2</ion-label>\n        <ion-input required [(ngModel)]=\"newPassword\" name=\"newPassword\" #oldpass=\"ngModel\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">输入数字3</ion-label>\n        <ion-input required [(ngModel)]=\"checkPassword\" name=\"checkPassword\" #oldpass=\"ngModel\"></ion-input>\n      </ion-item>\n    </ion-list> \n     \n  <ion-list>\n    <ion-button expand=\"full\" color=\"primary\" (click)=\"onLogin()\">检查</ion-button>\n  </ion-list>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/test/test-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/test/test-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: TestPageRoutingModule */

  /***/
  function srcAppPagesTestTestRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestPageRoutingModule", function () {
      return TestPageRoutingModule;
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


    var _test_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./test.page */
    "./src/app/pages/test/test.page.ts");

    var routes = [{
      path: '',
      component: _test_page__WEBPACK_IMPORTED_MODULE_3__["TestPage"]
    }];

    var TestPageRoutingModule = function TestPageRoutingModule() {
      _classCallCheck(this, TestPageRoutingModule);
    };

    TestPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TestPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/test/test.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/test/test.module.ts ***!
    \*******************************************/

  /*! exports provided: TestPageModule */

  /***/
  function srcAppPagesTestTestModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestPageModule", function () {
      return TestPageModule;
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


    var _test_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./test-routing.module */
    "./src/app/pages/test/test-routing.module.ts");
    /* harmony import */


    var _test_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./test.page */
    "./src/app/pages/test/test.page.ts");

    var TestPageModule = function TestPageModule() {
      _classCallCheck(this, TestPageModule);
    };

    TestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _test_routing_module__WEBPACK_IMPORTED_MODULE_5__["TestPageRoutingModule"]],
      declarations: [_test_page__WEBPACK_IMPORTED_MODULE_6__["TestPage"]]
    })], TestPageModule);
    /***/
  },

  /***/
  "./src/app/pages/test/test.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/test/test.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTestTestPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlc3QvdGVzdC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/test/test.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/test/test.page.ts ***!
    \*****************************************/

  /*! exports provided: TestPage */

  /***/
  function srcAppPagesTestTestPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestPage", function () {
      return TestPage;
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

    var TestPage = /*#__PURE__*/function () {
      function TestPage(toastCtrl) {
        _classCallCheck(this, TestPage);

        this.toastCtrl = toastCtrl;
      }

      _createClass(TestPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onLogin",
        value: function onLogin() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast, _toast;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(this.newPassword == this.oldpassword && this.newPassword == this.checkPassword)) {
                      _context.next = 9;
                      break;
                    }

                    //更新密码
                    console.log('一致');
                    _context.next = 4;
                    return this.toastCtrl.create({
                      message: '一致',
                      duration: 4000
                    });

                  case 4:
                    toast = _context.sent;
                    _context.next = 7;
                    return toast.present();

                  case 7:
                    _context.next = 15;
                    break;

                  case 9:
                    console.log('一致');
                    _context.next = 12;
                    return this.toastCtrl.create({
                      message: '不一致',
                      duration: 4000
                    });

                  case 12:
                    _toast = _context.sent;
                    _context.next = 15;
                    return _toast.present();

                  case 15:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return TestPage;
    }();

    TestPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    TestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-test',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./test.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test/test.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./test.page.scss */
      "./src/app/pages/test/test.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])], TestPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-test-test-module-es5.js.map