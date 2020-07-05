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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["join-join-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/join-classes/join/join.page.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/join-classes/join/join.page.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesJoinClassesJoinJoinPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/join-classes\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>加入班课</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-label *ngIf=\"!hasThisClass\">不存在此班课，请重新输入</ion-label>\r\n  <ion-card *ngIf=\"hasThisClass\">\r\n\r\n    <!-- 班课头信息 -->\r\n    <ion-card-header>\r\n      <ion-item lines='full'  class=\"ion-align-items-center\">\r\n        <ion-label class=\"ion-text-center\" >\r\n          <img class=\"join-class-img\"  src=\"/assets/img/fz.png\">\r\n          <h4>{{courseName}}</h4>\r\n          <p>课程描述</p>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-card-header>\r\n\r\n    <!-- 其他信息 -->\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ion-item lines=\"full\">\r\n            <ion-text class=\"ion-padding-end\">\r\n              <h4>老师</h4>\r\n            </ion-text>\r\n          <ion-label>\r\n            <p>{{courseTeacherName}}</p>\r\n          </ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item lines=\"full\">\r\n          <ion-text class=\"ion-padding-end\">\r\n            <h4>类型</h4>\r\n          </ion-text>\r\n        <ion-label>\r\n          <p>{{courseDepartment}}</p>\r\n        </ion-label>\r\n      </ion-item>\r\n      \r\n      </ion-list>\r\n      <!-- 退出班课按钮 -->\r\n      <ion-button slot=\"start\" expand=\"block\" fill='solid' class=\"ion-margin-top\" (click)=\"joinClass()\">\r\n        加入\r\n      </ion-button>\r\n        \r\n    </ion-card-content>\r\n\r\n  </ion-card>\r\n\r\n  <ion-text >\r\n    <p>\r\n      {{informText}}\r\n    </p>\r\n  </ion-text>\r\n\r\n  \r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/join-classes/join/join-routing.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/join-classes/join/join-routing.module.ts ***!
    \****************************************************************/

  /*! exports provided: JoinPageRoutingModule */

  /***/
  function srcAppPagesJoinClassesJoinJoinRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JoinPageRoutingModule", function () {
      return JoinPageRoutingModule;
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


    var _join_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./join.page */
    "./src/app/pages/join-classes/join/join.page.ts");

    var routes = [{
      path: '',
      component: _join_page__WEBPACK_IMPORTED_MODULE_3__["JoinPage"]
    }];

    var JoinPageRoutingModule = function JoinPageRoutingModule() {
      _classCallCheck(this, JoinPageRoutingModule);
    };

    JoinPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], JoinPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/join-classes/join/join.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/join-classes/join/join.module.ts ***!
    \********************************************************/

  /*! exports provided: JoinPageModule */

  /***/
  function srcAppPagesJoinClassesJoinJoinModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JoinPageModule", function () {
      return JoinPageModule;
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


    var _join_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./join-routing.module */
    "./src/app/pages/join-classes/join/join-routing.module.ts");
    /* harmony import */


    var _join_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./join.page */
    "./src/app/pages/join-classes/join/join.page.ts");

    var JoinPageModule = function JoinPageModule() {
      _classCallCheck(this, JoinPageModule);
    };

    JoinPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _join_routing_module__WEBPACK_IMPORTED_MODULE_5__["JoinPageRoutingModule"]],
      declarations: [_join_page__WEBPACK_IMPORTED_MODULE_6__["JoinPage"]]
    })], JoinPageModule);
    /***/
  },

  /***/
  "./src/app/pages/join-classes/join/join.page.scss":
  /*!********************************************************!*\
    !*** ./src/app/pages/join-classes/join/join.page.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesJoinClassesJoinJoinPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".join-class-img {\n  width: 7em;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvam9pbi1jbGFzc2VzL2pvaW4vRDpcXGh4c2t5dW5cXG1vYmlsZVxcZGFveXVuL3NyY1xcYXBwXFxwYWdlc1xcam9pbi1jbGFzc2VzXFxqb2luXFxqb2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvam9pbi1jbGFzc2VzL2pvaW4vam9pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvam9pbi1jbGFzc2VzL2pvaW4vam9pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuam9pbi1jbGFzcy1pbWd7XHJcbiAgICB3aWR0aDogN2VtO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn0iLCIuam9pbi1jbGFzcy1pbWcge1xuICB3aWR0aDogN2VtO1xuICBtYXJnaW46IDAgYXV0bztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/join-classes/join/join.page.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/join-classes/join/join.page.ts ***!
    \******************************************************/

  /*! exports provided: JoinPage */

  /***/
  function srcAppPagesJoinClassesJoinJoinPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JoinPage", function () {
      return JoinPage;
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


    var src_app_shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/zr-services.service */
    "./src/app/shared/services/zr-services.service.ts");
    /* harmony import */


    var src_app_common_baseui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/common/baseui */
    "./src/app/common/baseui.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_shared_services_mylocalstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/services/mylocalstorage.service */
    "./src/app/shared/services/mylocalstorage.service.ts");
    /* harmony import */


    var src_app_shared_services_event_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/services/event.service */
    "./src/app/shared/services/event.service.ts");

    var JoinPage = /*#__PURE__*/function (_src_app_common_baseu) {
      _inherits(JoinPage, _src_app_common_baseu);

      var _super = _createSuper(JoinPage);

      function JoinPage(activatedRoute, zrServices, eventService, toastController, router, localStorageService, loadingController) {
        var _this;

        _classCallCheck(this, JoinPage);

        _this = _super.call(this);
        _this.activatedRoute = activatedRoute;
        _this.zrServices = zrServices;
        _this.eventService = eventService;
        _this.toastController = toastController;
        _this.router = router;
        _this.localStorageService = localStorageService;
        _this.loadingController = loadingController;
        _this.hasThisClass = false;
        activatedRoute.queryParams.subscribe(function (queryParams) {
          _this.courseId = queryParams.cId; // console.log('getcid'+this.courseId)
        });
        return _this;
      }

      _createClass(JoinPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          _get(_getPrototypeOf(JoinPage.prototype), "showLoading", this).call(this, this.loadingController, '请等待', 900);

          this.userId = this.localStorageService.get('uid', '');
          this.loadCourseInfo();
        }
      }, {
        key: "ionViewDidLeave",
        value: function ionViewDidLeave() {
          // console.log('joinclass leave')
          this.eventService.event.emit('classupdate');
        }
      }, {
        key: "loadCourseInfo",
        value: function loadCourseInfo() {
          var _this2 = this;

          this.zrServices.getCourseByCourseId(this.courseId).then(function (result) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log('here:', result);

                      if (result.data) {
                        this.hasThisClass = true;
                        this.courseName = result.data.courseName;
                        this.courseMajor = result.data.major;
                        this.courseSchool = result.data.school;
                        this.courseTeacherName = result.data.teacherName;
                        this.courseDepartment = result.data.department;
                      }

                      if (result.code != '200') {
                        this.informText = result.msg;
                      }

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          })["catch"](function (error) {
            console.log('获取课程信息失败', error);
            _this2.informText = error.message;
          });
        }
      }, {
        key: "joinClass",
        value: function joinClass() {
          var _this3 = this;

          console.log('joinclass work');
          var params = {
            "courseId": this.courseId,
            "studentId": this.userId
          };

          _get(_getPrototypeOf(JoinPage.prototype), "showLoading", this).call(this, this.loadingController, '请等待', 1200);

          this.zrServices.joinClass(params).then(function (result) {
            if (result.code == '200') {
              _get(_getPrototypeOf(JoinPage.prototype), "showToast", _this3).call(_this3, _this3.toastController, '加入班课成功');

              location.replace('/tabs/join-classes'); // 这样实现页面刷新，并且无法返回当前页面路径
              // this.router.navigateByUrl('/tabs/join-classes') 
              // console.log(result.code)
              // console.log('课程data：',result.data);
              // console.log(result.msg)
            } else if (result.code == '400') {
              _get(_getPrototypeOf(JoinPage.prototype), "showToast", _this3).call(_this3, _this3.toastController, '已加入该班课');
            }
          })["catch"](function (error) {
            _get(_getPrototypeOf(JoinPage.prototype), "showToast", _this3).call(_this3, _this3.toastController, '加入班课失败');
          });
        }
      }]);

      return JoinPage;
    }(src_app_common_baseui__WEBPACK_IMPORTED_MODULE_4__["BaseUI"]);

    JoinPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_3__["ZrServicesService"]
      }, {
        type: src_app_shared_services_event_service__WEBPACK_IMPORTED_MODULE_7__["EventService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_shared_services_mylocalstorage_service__WEBPACK_IMPORTED_MODULE_6__["MylocalstorageService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
      }];
    };

    JoinPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-join',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./join.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/join-classes/join/join.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./join.page.scss */
      "./src/app/pages/join-classes/join/join.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_3__["ZrServicesService"], src_app_shared_services_event_service__WEBPACK_IMPORTED_MODULE_7__["EventService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_shared_services_mylocalstorage_service__WEBPACK_IMPORTED_MODULE_6__["MylocalstorageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])], JoinPage);
    /***/
  }
}]);
//# sourceMappingURL=join-join-module-es5.js.map