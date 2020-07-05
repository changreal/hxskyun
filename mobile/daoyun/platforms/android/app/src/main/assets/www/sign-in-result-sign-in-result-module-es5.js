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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-in-result-sign-in-result-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-classes/sign-in-teacher/sign-in-result/sign-in-result.page.html":
  /*!************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-classes/sign-in-teacher/sign-in-result/sign-in-result.page.html ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCreateClassesSignInTeacherSignInResultSignInResultPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/create-classes\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>签到结果</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <!-- 成员列表 -->\r\n    <ion-list lines='full'>\r\n      \r\n      <!-- 缺勤 -->\r\n      <ion-item-divider>\r\n        <ion-label color=\"dark\">缺勤</ion-label>\r\n        <ion-label color=\"dark\">&nbsp;{{unsigned_students.length}}人</ion-label>\r\n      </ion-item-divider>\r\n  \r\n      <!-- 成员信息部分 -->\r\n\r\n      <ion-item  class=\"member-item\" *ngFor=\"let student of unsigned_students; index as i\">\r\n        <!-- 头像部分 -->\r\n        <ion-note slot=\"start\" class=\"ion-no-margin ion-margin-vertical\">{{i+1}}</ion-note>\r\n        <ion-thumbnail slot=\"start\" class=\"mythumbnail\">\r\n        <div class=\"profile_icon_orange\">{{student.studentName[0]}}</div>\r\n        </ion-thumbnail>\r\n        <!-- 内容部分 -->\r\n        <ion-label>\r\n          <h3>{{student.studentName}}</h3>\r\n          <p>{{student.studentId}} <span class=\"exp ion-float-right exp-color\"></span></p>\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n      <!-- 已签到 -->\r\n      <ion-item-divider>\r\n        <ion-label color=\"dark\">已签到</ion-label>\r\n        <ion-label class=\"ion-text-right\" color=\"dark\">&nbsp;{{signed_students.length}} 人</ion-label>\r\n      </ion-item-divider>\r\n      <!-- 成员信息部分 -->\r\n      <ion-item  class=\"member-item\" *ngFor=\"let student of signed_students; index as i\">\r\n        <!-- 头像部分 -->\r\n        <ion-note slot=\"start\" class=\"ion-no-margin ion-margin-vertical\">{{i+1}}</ion-note>\r\n        <ion-thumbnail slot=\"start\" class=\"mythumbnail\">\r\n        <div class=\"profile_icon_orange\">{{student.studentName[0]}}</div>\r\n        </ion-thumbnail>\r\n        <!-- 内容部分 -->\r\n        <ion-label>\r\n          <h3>{{student.studentName}}</h3>\r\n          <p style=\"color: #085308;\">签到距离&nbsp;<ion-icon name=\"location-outline\"></ion-icon>：{{student.signDistance}}km</p>\r\n          <p style=\"color: #000;\">学生号：{{student.studentId}} <span class=\"exp ion-float-right exp-color\"></span></p>\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n  \r\n    </ion-list>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/create-classes/sign-in-teacher/sign-in-result/sign-in-result-routing.module.ts":
  /*!******************************************************************************************************!*\
    !*** ./src/app/pages/create-classes/sign-in-teacher/sign-in-result/sign-in-result-routing.module.ts ***!
    \******************************************************************************************************/

  /*! exports provided: SignInResultPageRoutingModule */

  /***/
  function srcAppPagesCreateClassesSignInTeacherSignInResultSignInResultRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInResultPageRoutingModule", function () {
      return SignInResultPageRoutingModule;
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


    var _sign_in_result_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sign-in-result.page */
    "./src/app/pages/create-classes/sign-in-teacher/sign-in-result/sign-in-result.page.ts");

    var routes = [{
      path: '',
      component: _sign_in_result_page__WEBPACK_IMPORTED_MODULE_3__["SignInResultPage"]
    }];

    var SignInResultPageRoutingModule = function SignInResultPageRoutingModule() {
      _classCallCheck(this, SignInResultPageRoutingModule);
    };

    SignInResultPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignInResultPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/create-classes/sign-in-teacher/sign-in-result/sign-in-result.module.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/pages/create-classes/sign-in-teacher/sign-in-result/sign-in-result.module.ts ***!
    \**********************************************************************************************/

  /*! exports provided: SignInResultPageModule */

  /***/
  function srcAppPagesCreateClassesSignInTeacherSignInResultSignInResultModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInResultPageModule", function () {
      return SignInResultPageModule;
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


    var _sign_in_result_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sign-in-result-routing.module */
    "./src/app/pages/create-classes/sign-in-teacher/sign-in-result/sign-in-result-routing.module.ts");
    /* harmony import */


    var _sign_in_result_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sign-in-result.page */
    "./src/app/pages/create-classes/sign-in-teacher/sign-in-result/sign-in-result.page.ts");

    var SignInResultPageModule = function SignInResultPageModule() {
      _classCallCheck(this, SignInResultPageModule);
    };

    SignInResultPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sign_in_result_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignInResultPageRoutingModule"]],
      declarations: [_sign_in_result_page__WEBPACK_IMPORTED_MODULE_6__["SignInResultPage"]]
    })], SignInResultPageModule);
    /***/
  },

  /***/
  "./src/app/pages/create-classes/sign-in-teacher/sign-in-result/sign-in-result.page.scss":
  /*!**********************************************************************************************!*\
    !*** ./src/app/pages/create-classes/sign-in-teacher/sign-in-result/sign-in-result.page.scss ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCreateClassesSignInTeacherSignInResultSignInResultPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".exp-color {\n  color: #ef9c05;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3JlYXRlLWNsYXNzZXMvc2lnbi1pbi10ZWFjaGVyL3NpZ24taW4tcmVzdWx0L0Q6XFxoeHNreXVuXFxtb2JpbGVcXGRhb3l1bi9zcmNcXGFwcFxccGFnZXNcXGNyZWF0ZS1jbGFzc2VzXFxzaWduLWluLXRlYWNoZXJcXHNpZ24taW4tcmVzdWx0XFxzaWduLWluLXJlc3VsdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NyZWF0ZS1jbGFzc2VzL3NpZ24taW4tdGVhY2hlci9zaWduLWluLXJlc3VsdC9zaWduLWluLXJlc3VsdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jcmVhdGUtY2xhc3Nlcy9zaWduLWluLXRlYWNoZXIvc2lnbi1pbi1yZXN1bHQvc2lnbi1pbi1yZXN1bHQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cC1jb2xvcntcclxuICAgIGNvbG9yOiAjZWY5YzA1XHJcbn0iLCIuZXhwLWNvbG9yIHtcbiAgY29sb3I6ICNlZjljMDU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/create-classes/sign-in-teacher/sign-in-result/sign-in-result.page.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/pages/create-classes/sign-in-teacher/sign-in-result/sign-in-result.page.ts ***!
    \********************************************************************************************/

  /*! exports provided: SignInResultPage */

  /***/
  function srcAppPagesCreateClassesSignInTeacherSignInResultSignInResultPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInResultPage", function () {
      return SignInResultPage;
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


    var src_app_common_baseui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/common/baseui */
    "./src/app/common/baseui.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var SignInResultPage = /*#__PURE__*/function (_src_app_common_baseu) {
      _inherits(SignInResultPage, _src_app_common_baseu);

      var _super = _createSuper(SignInResultPage);

      function SignInResultPage(activatedRoute, zrServices, localStorageService, router, loadingController) {
        var _this;

        _classCallCheck(this, SignInResultPage);

        _this = _super.call(this);
        _this.activatedRoute = activatedRoute;
        _this.zrServices = zrServices;
        _this.localStorageService = localStorageService;
        _this.router = router;
        _this.loadingController = loadingController;
        _this.signId = '';
        _this.signed_students = [];
        _this.unsigned_students = [];
        _this.signedCount = '';
        _this.unsignedCount = '';
        return _this;
      }

      _createClass(SignInResultPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          _get(_getPrototypeOf(SignInResultPage.prototype), "showLoading", this).call(this, this.loadingController, '请等待', 800);

          this.activatedRoute.queryParams.subscribe(function (result) {
            // console.log('传入的参数：', result);
            _this2.signId = result.signId;
          });
          this.loadSignResult();
        } // 加载签到结果页面

      }, {
        key: "loadSignResult",
        value: function loadSignResult() {
          var _this3 = this;

          this.zrServices.getSignDetailBySignId(this.signId).then(function (result) {
            console.log('here', result);

            if (result.code == '200') {
              // 对数组过滤
              var _iterator = _createForOfIteratorHelper(result.data),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var item = _step.value;
                  var tmp = {
                    'studentName': item.studentName,
                    'studentId': item.studentId,
                    'exp': item.exp,
                    'signDistance': (parseFloat(item.signDistance) / 1000).toFixed(2)
                  }; // 根据签到状态分组

                  if (item.signStatus == "已签到") {
                    _this3.signed_students.push(tmp);
                  } else {
                    _this3.unsigned_students.push(tmp);
                  }
                } // console.log(this.unsigned_students);
                // console.log(this.signed_students);

              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
          })["catch"](function (error) {
            console.log('获取签到结果失败');
          });
        }
      }]);

      return SignInResultPage;
    }(src_app_common_baseui__WEBPACK_IMPORTED_MODULE_5__["BaseUI"]);

    SignInResultPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_3__["ZrServicesService"]
      }, {
        type: _shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
      }];
    };

    SignInResultPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sign-in-result',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sign-in-result.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-classes/sign-in-teacher/sign-in-result/sign-in-result.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sign-in-result.page.scss */
      "./src/app/pages/create-classes/sign-in-teacher/sign-in-result/sign-in-result.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_3__["ZrServicesService"], _shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]])], SignInResultPage);
    /***/
  }
}]);
//# sourceMappingURL=sign-in-result-sign-in-result-module-es5.js.map