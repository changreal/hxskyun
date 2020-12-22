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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-classes-create-classes-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-classes/create-classes.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-classes/create-classes.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCreateClassesCreateClassesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>我创建的班课</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"primary\" (click)=\"doCreateCourse()\">\r\n        <ion-icon name=\"add-outline\" size='large'></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <!-- 下拉刷新组件 -->\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"loadCourseData($event)\" mode='ios'>\r\n    <ion-refresher-content\r\n      pullingIcon=\"arrow-dropdown\"\r\n      pullingText=\"下拉刷新\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"加载中...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <!-- 班课列表 -->\r\n  <ion-list *ngIf=\"courses_length && role=='2'\" >\r\n\r\n    <!-- 列表头 -->\r\n    <!-- <ion-item-divider>\r\n      <ion-label>\r\n        班课列表\r\n      </ion-label>\r\n    </ion-item-divider> -->\r\n\r\n    <!-- 班课部分 -->\r\n    <ion-item button detail lines='full'  routerLink=\"/create-classes/members\" *ngFor=\"let course of courses\" [queryParams]=\"{courseId:course.courseId,courseName:course.courseName}\">\r\n      <!-- 头像部分 -->\r\n      <ion-thumbnail slot=\"start\">\r\n        <div class=\"profile_icon_orange\">{{course.courseName[0]}}</div>\r\n      </ion-thumbnail>\r\n\r\n      <!-- 内容部分 -->\r\n      <ion-label>\r\n        <!-- 文字部分 -->\r\n        <ion-text color=\"primary\">\r\n          <h3>{{course.courseName}}&nbsp;&nbsp;&nbsp;<span class=\"Tint-gray\">{{course.endClassStatus}}</span></h3>\r\n        </ion-text>\r\n        <ion-text >\r\n          <p>{{course.major}}</p>\r\n        </ion-text>\r\n\r\n        <!-- 按钮部分 -->\r\n        <div>\r\n          <p><span >{{course.courseSemester}}</span><span class=\"ion-margin-start \" >课程码：<i class=\"Tint\">{{course.courseId}}</i> </span></p>\r\n          <!-- <ion-buttons slot=\"secondary\" >\r\n            <ion-button slot=\"end\" size=\"small\" > \r\n              <ion-icon name=\"hand-right-outline\" slot=\"start\" size=\"small\"  color=\"medium\" ></ion-icon>\r\n              发起签到\r\n            </ion-button>\r\n          </ion-buttons> -->\r\n        </div>\r\n      </ion-label>\r\n      <!-- 内容部分结束 -->\r\n    </ion-item>\r\n    <!-- 班课部分结束 -->\r\n\r\n\r\n\r\n  </ion-list>\r\n\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/create-classes/create-classes-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/create-classes/create-classes-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: CreateClassesPageRoutingModule */

  /***/
  function srcAppPagesCreateClassesCreateClassesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateClassesPageRoutingModule", function () {
      return CreateClassesPageRoutingModule;
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


    var _create_classes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./create-classes.page */
    "./src/app/pages/create-classes/create-classes.page.ts");

    var routes = [{
      path: '',
      component: _create_classes_page__WEBPACK_IMPORTED_MODULE_3__["CreateClassesPage"]
    }, {
      path: 'create-class',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | create-class-create-class-module */
        "create-class-create-class-module").then(__webpack_require__.bind(null,
        /*! ./create-class/create-class.module */
        "./src/app/pages/create-classes/create-class/create-class.module.ts")).then(function (m) {
          return m.CreateClassPageModule;
        });
      }
    }, {
      path: 'members',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | members-members-module */
        [__webpack_require__.e("common"), __webpack_require__.e("members-members-module")]).then(__webpack_require__.bind(null,
        /*! ./members/members.module */
        "./src/app/pages/create-classes/members/members.module.ts")).then(function (m) {
          return m.MembersPageModule;
        });
      }
    }, {
      path: 'class-detail',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | class-detail-class-detail-module */
        [__webpack_require__.e("common"), __webpack_require__.e("class-detail-class-detail-module")]).then(__webpack_require__.bind(null,
        /*! ./class-detail/class-detail.module */
        "./src/app/pages/create-classes/class-detail/class-detail.module.ts")).then(function (m) {
          return m.ClassDetailPageModule;
        });
      }
    }, {
      path: 'sign-in-teacher',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | sign-in-teacher-sign-in-teacher-module */
        "sign-in-teacher-sign-in-teacher-module").then(__webpack_require__.bind(null,
        /*! ./sign-in-teacher/sign-in-teacher.module */
        "./src/app/pages/create-classes/sign-in-teacher/sign-in-teacher.module.ts")).then(function (m) {
          return m.SignInTeacherPageModule;
        });
      }
    }, {
      path: 'qrcode',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | qrcode-qrcode-module */
        "qrcode-qrcode-module").then(__webpack_require__.bind(null,
        /*! ./qrcode/qrcode.module */
        "./src/app/pages/create-classes/qrcode/qrcode.module.ts")).then(function (m) {
          return m.QrcodePageModule;
        });
      }
    }];

    var CreateClassesPageRoutingModule = function CreateClassesPageRoutingModule() {
      _classCallCheck(this, CreateClassesPageRoutingModule);
    };

    CreateClassesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CreateClassesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/create-classes/create-classes.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/create-classes/create-classes.module.ts ***!
    \***************************************************************/

  /*! exports provided: CreateClassesPageModule */

  /***/
  function srcAppPagesCreateClassesCreateClassesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateClassesPageModule", function () {
      return CreateClassesPageModule;
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


    var _create_classes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./create-classes-routing.module */
    "./src/app/pages/create-classes/create-classes-routing.module.ts");
    /* harmony import */


    var _create_classes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./create-classes.page */
    "./src/app/pages/create-classes/create-classes.page.ts");

    var CreateClassesPageModule = function CreateClassesPageModule() {
      _classCallCheck(this, CreateClassesPageModule);
    };

    CreateClassesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _create_classes_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateClassesPageRoutingModule"]],
      declarations: [_create_classes_page__WEBPACK_IMPORTED_MODULE_6__["CreateClassesPage"]]
    })], CreateClassesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/create-classes/create-classes.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/create-classes/create-classes.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCreateClassesCreateClassesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".Tint {\n  color: #4c8dff;\n}\n\n.Tint-gray {\n  color: #7a7575;\n}\n\n.profile_icon {\n  background: #ffa300;\n  color: white;\n  font-size: 1.5em;\n  width: 56px;\n  height: 56px;\n  text-align: center;\n  line-height: 56px;\n}\n\n.profile_icon_orange {\n  background: #ffa300;\n  color: white;\n  font-size: 1.5em;\n  width: 56px;\n  height: 56px;\n  text-align: center;\n  line-height: 56px;\n}\n\n.profile_icon_green {\n  background: #07ac40;\n  color: white;\n  font-size: 1.5em;\n  width: 56px;\n  height: 56px;\n  text-align: center;\n  line-height: 56px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3JlYXRlLWNsYXNzZXMvRDpcXGh4c2t5dW5cXG1vYmlsZVxcZGFveXVuL3NyY1xcYXBwXFxwYWdlc1xcY3JlYXRlLWNsYXNzZXNcXGNyZWF0ZS1jbGFzc2VzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY3JlYXRlLWNsYXNzZXMvY3JlYXRlLWNsYXNzZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3JlYXRlLWNsYXNzZXMvY3JlYXRlLWNsYXNzZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLlRpbnR7XHJcbiAgICBjb2xvcjogIzRjOGRmZjtcclxufVxyXG5cclxuLlRpbnQtZ3JheXtcclxuICAgIGNvbG9yOiAjN2E3NTc1O1xyXG59XHJcblxyXG4ucHJvZmlsZV9pY29ue1xyXG4gICAgYmFja2dyb3VuZDogI2ZmYTMwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICB3aWR0aDogNTZweDtcclxuICAgIGhlaWdodDogNTZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xyXG59XHJcblxyXG4ucHJvZmlsZV9pY29uX29yYW5nZXtcclxuICAgIGJhY2tncm91bmQ6ICNmZmEzMDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgd2lkdGg6IDU2cHg7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogNTZweDtcclxufVxyXG5cclxuLnByb2ZpbGVfaWNvbl9ncmVlbntcclxuICAgIGJhY2tncm91bmQ6ICMwN2FjNDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgd2lkdGg6IDU2cHg7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogNTZweDtcclxufSIsIi5UaW50IHtcbiAgY29sb3I6ICM0YzhkZmY7XG59XG5cbi5UaW50LWdyYXkge1xuICBjb2xvcjogIzdhNzU3NTtcbn1cblxuLnByb2ZpbGVfaWNvbiB7XG4gIGJhY2tncm91bmQ6ICNmZmEzMDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgd2lkdGg6IDU2cHg7XG4gIGhlaWdodDogNTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNTZweDtcbn1cblxuLnByb2ZpbGVfaWNvbl9vcmFuZ2Uge1xuICBiYWNrZ3JvdW5kOiAjZmZhMzAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIHdpZHRoOiA1NnB4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDU2cHg7XG59XG5cbi5wcm9maWxlX2ljb25fZ3JlZW4ge1xuICBiYWNrZ3JvdW5kOiAjMDdhYzQwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIHdpZHRoOiA1NnB4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDU2cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/create-classes/create-classes.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/create-classes/create-classes.page.ts ***!
    \*************************************************************/

  /*! exports provided: CreateClassesPage */

  /***/
  function srcAppPagesCreateClassesCreateClassesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateClassesPage", function () {
      return CreateClassesPage;
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
    /*! ../../shared/services/zr-services.service */
    "./src/app/shared/services/zr-services.service.ts");
    /* harmony import */


    var _shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/services/local-storage.service */
    "./src/app/shared/services/local-storage.service.ts");
    /* harmony import */


    var _shared_services_toast_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/services/toast-service.service */
    "./src/app/shared/services/toast-service.service.ts");
    /* harmony import */


    var src_app_shared_services_event_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/services/event.service */
    "./src/app/shared/services/event.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_common_baseui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/common/baseui */
    "./src/app/common/baseui.ts");

    var CreateClassesPage = /*#__PURE__*/function (_src_app_common_baseu) {
      _inherits(CreateClassesPage, _src_app_common_baseu);

      var _super = _createSuper(CreateClassesPage);

      function CreateClassesPage(activatedRoute, zrServices, localStorageService, toastService, router, eventService, loadingController) {
        var _this;

        _classCallCheck(this, CreateClassesPage);

        _this = _super.call(this);
        _this.activatedRoute = activatedRoute;
        _this.zrServices = zrServices;
        _this.localStorageService = localStorageService;
        _this.toastService = toastService;
        _this.router = router;
        _this.eventService = eventService;
        _this.loadingController = loadingController;
        _this.courses = [];
        _this.courses_length = 0;
        _this.userId = '';
        _this.role = '';
        return _this;
      }

      _createClass(CreateClassesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          _get(_getPrototypeOf(CreateClassesPage.prototype), "showLoading", this).call(this, this.loadingController, '请等待', 300); // this.role = this.localStorageService.getStore('roleId','2')
          // this.userId = this.localStorageService.getStore('uid', null)
          // console.log('当前身份是：', this.role);
          // console.log('当前用户id是：', this.userId);

        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.role = this.localStorageService.getStore('roleId', '2');
          this.userId = this.localStorageService.getStore('uid', null);
          console.log('当前身份是：', this.role); // 判断身份

          if (this.role == '2' || this.role == '1') {
            this.loadCourseData(null);
          } else {
            // 不是教师或者管理员身份的话没有此权限
            this.courses_length = 0;
            this.toastService.presentAlert('您没有此权限！');
          }
        }
      }, {
        key: "loadCourseData",
        value: function loadCourseData(event) {
          var _this2 = this;

          // this.userId = this.localStorageService.getStore('userId', null)
          // this.role = this.localStorageService.getStore('role','student')
          this.zrServices.getCreatedCourseById(this.userId).then(function (result) {
            // console.log('根据用户号，获取该用户已加入的课程列表', result);
            if (result.code == '200') {
              _this2.courses = result.data;
              _this2.courses_length = _this2.courses.length;
            } else {
              _this2.toastService.errorToast(result.msg);
            }
          })["catch"](function (error) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      // console.log('请求教师创建的课程列表出现错误：', error);
                      this.toastService.errorToast(error.message);

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          })["finally"](function () {
            if (event != null) {
              //如果不是第一次调用，则需要通知refresher控件结束工作
              event.target.complete();
            }
          });
        } // 加入班课触发事件

      }, {
        key: "doCreateCourse",
        value: function doCreateCourse() {
          var url = "/create-classes/create-class";

          if (this.role == '1' || this.role == '2') {
            this.router.navigate([url]);
          } else {
            // 学生创建班课权限
            this.toastService.presentAlert('您没有此权限！');
          }
        }
      }]);

      return CreateClassesPage;
    }(src_app_common_baseui__WEBPACK_IMPORTED_MODULE_8__["BaseUI"]);

    CreateClassesPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_3__["ZrServicesService"]
      }, {
        type: _shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]
      }, {
        type: _shared_services_toast_service_service__WEBPACK_IMPORTED_MODULE_5__["ToastServiceProvider"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_shared_services_event_service__WEBPACK_IMPORTED_MODULE_6__["EventService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]
      }];
    };

    CreateClassesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-classes',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-classes.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-classes/create-classes.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-classes.page.scss */
      "./src/app/pages/create-classes/create-classes.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_3__["ZrServicesService"], _shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"], _shared_services_toast_service_service__WEBPACK_IMPORTED_MODULE_5__["ToastServiceProvider"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_shared_services_event_service__WEBPACK_IMPORTED_MODULE_6__["EventService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]])], CreateClassesPage);
    /***/
  }
}]);
//# sourceMappingURL=create-classes-create-classes-module-es5.js.map