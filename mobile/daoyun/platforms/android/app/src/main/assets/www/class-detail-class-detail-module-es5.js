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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["class-detail-class-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-classes/class-detail/class-detail.page.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-classes/class-detail/class-detail.page.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCreateClassesClassDetailClassDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>{{courseName}}</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/create-classes\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-card>\r\n    <!-- 班课头信息 -->\r\n    <ion-item lines='full'>\r\n      <ion-note slot=\"end\" class=\"ion-no-margin\">\r\n        <!-- <ion-button  expand=\"block\" fill=\"clear\" shape=\"round\" [routerLink]=\"['/create-classes/class-detail/edit-class']\"  [queryParams]=\"{courseId:courseId,course_name:courseName}\">\r\n          <ion-icon name=\"create-outline\"  color=\"primary\" slot=\"icon-only\"></ion-icon>\r\n        </ion-button> -->\r\n       \r\n        <ion-button  expand=\"block\" fill=\"clear\" shape=\"round\" [routerLink]=\"['/create-classes/qrcode']\"  [queryParams]=\"{courseId:courseId}\">\r\n          <ion-icon name=\"qr-code-outline\"  color=\"primary\" slot=\"icon-only\"></ion-icon>\r\n            <!-- <ion-icon name=\"scan-outline\" slot=\"icon-only\"></ion-icon> -->\r\n        </ion-button>\r\n        <ion-button  expand=\"block\" fill=\"clear\" shape=\"round\" [routerLink]=\"['/create-classes/class-detail/edit-class']\"  [queryParams]=\"{courseId:courseId,course_name:courseName}\">\r\n          <ion-icon name=\"create-outline\"  color=\"primary\" slot=\"icon-only\"></ion-icon>\r\n        </ion-button>\r\n      </ion-note>\r\n      <ion-thumbnail slot=\"start\">\r\n        <div class=\"profile_icon_orange\">{{courseName[0]}}</div>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h3>{{courseMajor}}</h3>\r\n        <h4>{{courseName}}</h4>\r\n        <p>{{courseTeacherName}}</p>\r\n        <p>\r\n          <span>{{courseSemester}}</span>\r\n        </p>\r\n       \r\n      </ion-label>\r\n     \r\n    </ion-item>\r\n\r\n  </ion-card>\r\n\r\n  <ion-list class=\"ion-padding\">\r\n\r\n    <!-- 内容部分 -->\r\n    <ion-item>\r\n      <ion-label  position=\"floating\">学习要求</ion-label>\r\n      <ion-text class=\"ion-padding-top\" color=\"medium\">\r\n        <p>{{courseDes}}</p>\r\n      </ion-text>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">学校院系</ion-label>\r\n      <ion-text class=\"ion-padding-top\" color=\"medium\">\r\n        <p>\r\n          {{courseSchool}}&nbsp;{{courseDepartment}}\r\n        </p>\r\n      </ion-text>\r\n    </ion-item>\r\n\r\n    <!-- 退出班课按钮 -->\r\n    <ion-button slot=\"start\" expand=\"block\" fill='outline' shape='round' class=\"ion-margin-top\" color=\"danger\" (click)=\"doSubmit()\" *ngIf=\"courseStatus!='已结课'\">\r\n      结束班课\r\n    </ion-button>\r\n\r\n  </ion-list>\r\n\r\n\r\n\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/join-classes/class-detail/class-detail.page.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/join-classes/class-detail/class-detail.page.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesJoinClassesClassDetailClassDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>班课详情</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/join-classes\" ></ion-back-button>\r\n      <!-- <ion-back-button (click)=\"onBack()\"></ion-back-button> -->\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-card [hidden]='!hasThisClass'>\r\n\r\n    <!-- 班课头信息 -->\r\n    <ion-card-header >\r\n      <ion-item lines='full'>\r\n        <ion-note slot=\"end\" class=\"ion-no-margin\">\r\n          <ion-button  expand=\"block\" fill=\"clear\" shape=\"round\" [routerLink]=\"['/create-classes/qrcode']\"  [queryParams]=\"{courseId:courseId}\">\r\n            <ion-icon name=\"qr-code-outline\"  color=\"primary\" slot=\"icon-only\"></ion-icon>\r\n              <!-- <ion-icon name=\"scan-outline\" slot=\"icon-only\"></ion-icon> -->\r\n          </ion-button>\r\n        </ion-note>\r\n        <ion-thumbnail slot=\"start\">\r\n          <!-- <img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==\"> -->\r\n          <div class=\"profile_icon_blue\">{{courseName}}</div>\r\n        </ion-thumbnail>\r\n        <ion-label>\r\n          <h3>{{courseMajor}}</h3>\r\n          <h4>{{courseName}}&nbsp;&nbsp;课程码：{{courseId}}</h4>\r\n          <p>{{courseTeacherName}}</p>\r\n          <p>\r\n            <span>2019-2020-2</span>  <span>学校课表班课</span>\r\n          </p>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-card-header>\r\n\r\n    <!-- 其他信息 -->\r\n    <ion-card-content >\r\n      <ion-list>\r\n        <ion-item lines='full'> \r\n          <ion-label>\r\n            <h3>学校院系</h3>\r\n            <p>{{courseSchool}}&nbsp;{{courseDepartment}} </p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item lines='full'> \r\n          <ion-label>\r\n            <h3>学习要求</h3>\r\n            <p>暂无</p>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n\r\n      <!-- 退出班课按钮 -->\r\n      <ion-button slot=\"start\" expand=\"block\" fill='outline' shape='round' class=\"ion-margin-top\" (click)=\"exitClass()\" >\r\n        退出班课\r\n      </ion-button>\r\n        \r\n    </ion-card-content>\r\n\r\n  </ion-card>\r\n  \r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/create-classes/class-detail/class-detail-routing.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/create-classes/class-detail/class-detail-routing.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: ClassDetailPageRoutingModule */

  /***/
  function srcAppPagesCreateClassesClassDetailClassDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClassDetailPageRoutingModule", function () {
      return ClassDetailPageRoutingModule;
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


    var _class_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./class-detail.page */
    "./src/app/pages/create-classes/class-detail/class-detail.page.ts");

    var routes = [{
      path: '',
      component: _class_detail_page__WEBPACK_IMPORTED_MODULE_3__["ClassDetailPage"]
    }, {
      path: 'edit-class',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | edit-class-edit-class-module */
        "edit-class-edit-class-module").then(__webpack_require__.bind(null,
        /*! ./edit-class/edit-class.module */
        "./src/app/pages/create-classes/class-detail/edit-class/edit-class.module.ts")).then(function (m) {
          return m.EditClassPageModule;
        });
      }
    }];

    var ClassDetailPageRoutingModule = function ClassDetailPageRoutingModule() {
      _classCallCheck(this, ClassDetailPageRoutingModule);
    };

    ClassDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ClassDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/create-classes/class-detail/class-detail.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/create-classes/class-detail/class-detail.module.ts ***!
    \**************************************************************************/

  /*! exports provided: ClassDetailPageModule */

  /***/
  function srcAppPagesCreateClassesClassDetailClassDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClassDetailPageModule", function () {
      return ClassDetailPageModule;
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


    var _class_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./class-detail-routing.module */
    "./src/app/pages/create-classes/class-detail/class-detail-routing.module.ts");
    /* harmony import */


    var _class_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./class-detail.page */
    "./src/app/pages/create-classes/class-detail/class-detail.page.ts");

    var ClassDetailPageModule = function ClassDetailPageModule() {
      _classCallCheck(this, ClassDetailPageModule);
    };

    ClassDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _class_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClassDetailPageRoutingModule"]],
      declarations: [_class_detail_page__WEBPACK_IMPORTED_MODULE_6__["ClassDetailPage"]]
    })], ClassDetailPageModule);
    /***/
  },

  /***/
  "./src/app/pages/create-classes/class-detail/class-detail.page.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/create-classes/class-detail/class-detail.page.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCreateClassesClassDetailClassDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NyZWF0ZS1jbGFzc2VzL2NsYXNzLWRldGFpbC9jbGFzcy1kZXRhaWwucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/create-classes/class-detail/class-detail.page.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/create-classes/class-detail/class-detail.page.ts ***!
    \************************************************************************/

  /*! exports provided: ClassDetailPage */

  /***/
  function srcAppPagesCreateClassesClassDetailClassDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClassDetailPage", function () {
      return ClassDetailPage;
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


    var src_app_common_baseui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/common/baseui */
    "./src/app/common/baseui.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_shared_services_event_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/services/event.service */
    "./src/app/shared/services/event.service.ts");

    var ClassDetailPage = /*#__PURE__*/function (_src_app_common_baseu) {
      _inherits(ClassDetailPage, _src_app_common_baseu);

      var _super = _createSuper(ClassDetailPage);

      function ClassDetailPage(activatedRoute, zrServices, localStorageService, toastService, router, eventService, loadingController) {
        var _this;

        _classCallCheck(this, ClassDetailPage);

        _this = _super.call(this);
        _this.activatedRoute = activatedRoute;
        _this.zrServices = zrServices;
        _this.localStorageService = localStorageService;
        _this.toastService = toastService;
        _this.router = router;
        _this.eventService = eventService;
        _this.loadingController = loadingController;
        _this.semesters = [{
          id: '1',
          name: '2019-2020-1'
        }, {
          id: '2',
          name: '2019-2020-2'
        }, {
          id: '3',
          name: '2020-2021-1'
        }, {
          id: '4',
          name: '2020-2021-2'
        }, {
          id: '5',
          name: '2021-2022-1'
        }];
        _this.courseName = '';
        _this.courseSchool = ''; //学校

        _this.courseSemester = '2019-2020-2'; //学期

        _this.courseMajor = ''; //专业（班级）

        _this.courseCourseName = ''; //课程名

        _this.courseDes = ''; //学习要求

        _this.courseDepartment = ''; //学校院系

        _this.courseTeacherName = '';
        _this.courseStatus = '';
        _this.courseId = '';
        _this.userId = '';
        return _this;
      }

      _createClass(ClassDetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          _get(_getPrototypeOf(ClassDetailPage.prototype), "showLoading", this).call(this, this.loadingController, '请等待', 800); // 传入课程编号，从而编辑该门课程


          this.activatedRoute.queryParams.subscribe(function (result) {
            _this2.courseId = result.courseId;
            _this2.courseName = result.courseName;
          });
          this.getCourseInfo();
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {// this.activatedRoute.queryParams.subscribe((result:any) => {
          //   this.courseId = result.courseId;
          // });
          //这两个方法在将要进入界面的时候会触发,相当于是局部刷新,整个页面不会跟着刷新
          // this.getCourseInfo();   
        } // ionViewDidLeave(){
        //   console.log('createclass-detail leave')
        //   this.eventService.event.emit('memberupdate');
        // }
        // 查询班课信息ke

      }, {
        key: "getCourseInfo",
        value: function getCourseInfo() {
          var _this3 = this;

          // 根据id获取该班课的信息
          this.zrServices.getCourseByCourseId(this.courseId).then(function (result) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      // console.log(result);
                      if (result.code == '200') {
                        this.courseName = result.data.courseName;
                        this.courseSchool = result.data.school;
                        this.courseSemester = result.data.courseSemester;
                        this.courseMajor = result.data.major;
                        this.courseDepartment = result.data.department;
                        this.courseDes = result.data.classDes;
                        this.courseTeacherName = result.data.teacherName;
                        this.courseStatus = result.data.endClassStatus;
                      }

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          })["catch"](function (error) {
            _this3.toastService.errorToast('查找班课信息失败'); // console.log('查找班课信息失败', error);

          });
        } // 结束班课

      }, {
        key: "doSubmit",
        value: function doSubmit() {
          var _this4 = this;

          // 结束班课相关接口
          var theCourseInfo = {}; // 新建课程信息

          theCourseInfo['teachId'] = this.localStorageService.getStore('uid', '2');
          theCourseInfo['courseId'] = this.courseId;
          theCourseInfo['courseSemester'] = this.courseSemester;
          theCourseInfo['major'] = this.courseMajor;
          theCourseInfo['courseName'] = this.courseName;
          theCourseInfo['classDes'] = this.courseDes;
          theCourseInfo['school'] = this.courseSchool;
          theCourseInfo['department'] = this.courseDepartment;
          theCourseInfo['endClassStatus'] = '已结课';

          _get(_getPrototypeOf(ClassDetailPage.prototype), "showLoading", this).call(this, this.loadingController, '请等待', 1000); // 提交到service更新


          this.zrServices.postEidtCourseByCourseId(theCourseInfo).then(function (result) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var url, params;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log('课程的返回信息', result); // 请求返回状态

                      if (result.code == '200') {
                        // 跳出提示框提示修改成功！
                        url = '/tabs/create-classes'; // let url = '/tabs/create-classes/class-detail'

                        params = {
                          courseId: this.courseId
                        }; // this.toastService.presentAlertConfirm('修改班课成功！', url, params)  //回调函数跳转

                        this.toastService.presentAlertConfirm('确定要结束' + this.courseName + '课程吗？', url); //回调函数跳转
                      } else {
                        console.log(result.msg);
                      }

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          })["catch"](function (error) {
            console.log('结束课程失败', error);
          });
        }
      }]);

      return ClassDetailPage;
    }(src_app_common_baseui__WEBPACK_IMPORTED_MODULE_6__["BaseUI"]);

    ClassDetailPage.ctorParameters = function () {
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
        type: src_app_shared_services_event_service__WEBPACK_IMPORTED_MODULE_8__["EventService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]
      }];
    };

    ClassDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-class-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./class-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-classes/class-detail/class-detail.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./class-detail.page.scss */
      "./src/app/pages/create-classes/class-detail/class-detail.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_3__["ZrServicesService"], _shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"], _shared_services_toast_service_service__WEBPACK_IMPORTED_MODULE_5__["ToastServiceProvider"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_shared_services_event_service__WEBPACK_IMPORTED_MODULE_8__["EventService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]])], ClassDetailPage);
    /***/
  },

  /***/
  "./src/app/pages/join-classes/class-detail/class-detail-routing.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/join-classes/class-detail/class-detail-routing.module.ts ***!
    \********************************************************************************/

  /*! exports provided: ClassDetailPageRoutingModule */

  /***/
  function srcAppPagesJoinClassesClassDetailClassDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClassDetailPageRoutingModule", function () {
      return ClassDetailPageRoutingModule;
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


    var _class_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./class-detail.page */
    "./src/app/pages/join-classes/class-detail/class-detail.page.ts");

    var routes = [{
      path: '',
      component: _class_detail_page__WEBPACK_IMPORTED_MODULE_3__["ClassDetailPage"]
    }];

    var ClassDetailPageRoutingModule = function ClassDetailPageRoutingModule() {
      _classCallCheck(this, ClassDetailPageRoutingModule);
    };

    ClassDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ClassDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/join-classes/class-detail/class-detail.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/join-classes/class-detail/class-detail.module.ts ***!
    \************************************************************************/

  /*! exports provided: ClassDetailPageModule */

  /***/
  function srcAppPagesJoinClassesClassDetailClassDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClassDetailPageModule", function () {
      return ClassDetailPageModule;
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


    var _class_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./class-detail-routing.module */
    "./src/app/pages/join-classes/class-detail/class-detail-routing.module.ts");
    /* harmony import */


    var _class_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./class-detail.page */
    "./src/app/pages/join-classes/class-detail/class-detail.page.ts");

    var ClassDetailPageModule = function ClassDetailPageModule() {
      _classCallCheck(this, ClassDetailPageModule);
    };

    ClassDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _class_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClassDetailPageRoutingModule"]],
      declarations: [_class_detail_page__WEBPACK_IMPORTED_MODULE_6__["ClassDetailPage"]]
    })], ClassDetailPageModule);
    /***/
  },

  /***/
  "./src/app/pages/join-classes/class-detail/class-detail.page.scss":
  /*!************************************************************************!*\
    !*** ./src/app/pages/join-classes/class-detail/class-detail.page.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesJoinClassesClassDetailClassDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2pvaW4tY2xhc3Nlcy9jbGFzcy1kZXRhaWwvY2xhc3MtZGV0YWlsLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/join-classes/class-detail/class-detail.page.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/join-classes/class-detail/class-detail.page.ts ***!
    \**********************************************************************/

  /*! exports provided: ClassDetailPage */

  /***/
  function srcAppPagesJoinClassesClassDetailClassDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClassDetailPage", function () {
      return ClassDetailPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_common_baseui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/common/baseui */
    "./src/app/common/baseui.ts");
    /* harmony import */


    var src_app_shared_services_mylocalstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/services/mylocalstorage.service */
    "./src/app/shared/services/mylocalstorage.service.ts");
    /* harmony import */


    var src_app_shared_services_event_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/services/event.service */
    "./src/app/shared/services/event.service.ts");

    var ClassDetailPage = /*#__PURE__*/function (_src_app_common_baseu2) {
      _inherits(ClassDetailPage, _src_app_common_baseu2);

      var _super2 = _createSuper(ClassDetailPage);

      function ClassDetailPage(activatedRoute, localStorageService, zrServices, toastController, router, eventService, loadingController) {
        var _this5;

        _classCallCheck(this, ClassDetailPage);

        _this5 = _super2.call(this);
        _this5.activatedRoute = activatedRoute;
        _this5.localStorageService = localStorageService;
        _this5.zrServices = zrServices;
        _this5.toastController = toastController;
        _this5.router = router;
        _this5.eventService = eventService;
        _this5.loadingController = loadingController; // 临时变量

        _this5.userId = '';
        _this5.hasThisClass = false;
        _this5.submited = false;
        return _this5;
      }

      _createClass(ClassDetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          // this.userId=this.localStorageService.get('uid','')
          _get(_getPrototypeOf(ClassDetailPage.prototype), "showLoading", this).call(this, this.loadingController, '请等待', 800);

          this.activatedRoute.queryParams.subscribe(function (result) {
            _this6.courseId = result.courseId;
          });
        }
      }, {
        key: "ionViewDidLeave",
        value: function ionViewDidLeave() {
          // console.log('joinclass leave')
          this.eventService.event.emit('classupdate');
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.userId = this.localStorageService.get('uid', '');
          this.loadCourseInfo();
        }
      }, {
        key: "loadCourseInfo",
        value: function loadCourseInfo() {
          var _this7 = this;

          this.zrServices.getCourseByCourseId(this.courseId).then(function (result) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      // console.log('here:', result.data);
                      if (result.success) {
                        this.hasThisClass = true;
                        this.courseName = result.data.courseName;
                        this.courseMajor = result.data.major;
                        this.courseSchool = result.data.school;
                        this.courseTeacherName = result.data.teacherName;
                        this.courseDepartment = result.data.department;
                      }

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          })["catch"](function (error) {
            console.log('获取课程信息失败', error);
          });
        }
      }, {
        key: "exitClass",
        value: function exitClass() {
          var _this8 = this;

          // console.log('exitclass work')
          var params = {
            "courseId": this.courseId,
            "studentId": this.userId
          };

          _get(_getPrototypeOf(ClassDetailPage.prototype), "showLoading", this).call(this, this.loadingController, '请等待', 800);

          this.zrServices.exitClass(params).then(function (result) {
            // console.log('resulet'+result.code)
            if (result.code == '200') {
              _get(_getPrototypeOf(ClassDetailPage.prototype), "showToast", _this8).call(_this8, _this8.toastController, '退出班课成功');

              location.replace('/tabs/join-classes'); // this.router.navigateByUrl('/tabs/join-classes') 
            }
          })["catch"](function (error) {
            _get(_getPrototypeOf(ClassDetailPage.prototype), "showToast", _this8).call(_this8, _this8.toastController, '退出班课失败');
          });
        }
      }, {
        key: "onBack",
        value: function onBack() {
          this.router.navigateByUrl("/join-classes/members", {
            queryParams: {
              courseId: this.courseId
            }
          });
        }
      }]);

      return ClassDetailPage;
    }(src_app_common_baseui__WEBPACK_IMPORTED_MODULE_5__["BaseUI"]);

    ClassDetailPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_shared_services_mylocalstorage_service__WEBPACK_IMPORTED_MODULE_6__["MylocalstorageService"]
      }, {
        type: _shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_3__["ZrServicesService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_shared_services_event_service__WEBPACK_IMPORTED_MODULE_7__["EventService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }];
    };

    ClassDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-class-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./class-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/join-classes/class-detail/class-detail.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./class-detail.page.scss */
      "./src/app/pages/join-classes/class-detail/class-detail.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_shared_services_mylocalstorage_service__WEBPACK_IMPORTED_MODULE_6__["MylocalstorageService"], _shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_3__["ZrServicesService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_shared_services_event_service__WEBPACK_IMPORTED_MODULE_7__["EventService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])], ClassDetailPage);
    /***/
  }
}]);
//# sourceMappingURL=class-detail-class-detail-module-es5.js.map