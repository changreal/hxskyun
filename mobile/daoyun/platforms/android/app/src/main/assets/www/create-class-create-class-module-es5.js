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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-class-create-class-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-classes/create-class/create-class.page.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-classes/create-class/create-class.page.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCreateClassesCreateClassCreateClassPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/create-classes\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>创建班课</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding-horizontal\">\r\n\r\n    <!-- <ion-item lines='none'  class=\"ion-margin-top\" >\r\n      <ion-label class=\"ion-padding-vertical ion-text-center\"  color=\"primary\" >\r\n          <ion-avatar class=\"ion-padding-vertical create-class-avatar \"   >\r\n            <ion-icon name=\"add-outline\" size='large'></ion-icon>\r\n          </ion-avatar>\r\n          <h5>选择班课图片</h5>\r\n      </ion-label>\r\n    </ion-item> -->\r\n\r\n    \r\n  <!-- 班课列表 -->\r\n  <form (ngSubmit)='doSubmit(formData)'  #formData=\"ngForm\"  validating >\r\n\r\n    <ion-list lines='full'>\r\n\r\n      <ion-item-divider>\r\n        <ion-label color=\"dark\">设置班课信息</ion-label>\r\n      </ion-item-divider>\r\n\r\n\r\n      <!-- 内容部分 -->\r\n      <ion-item>\r\n        <ion-label>学期</ion-label>\r\n        <ion-select  name='semester' [(ngModel)]=\"courseInfo.semester\" #semester='ngModel' required placeholder='请选择学期' >\r\n          <ion-select-option *ngFor=\"let s of semesters\" [value]=\"s.name\" >{{s.name}}</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-item *ngIf=\"(semester.invalid && semester.touched) || courseInfo.submited\" [hidden]=\"!semester.errors?.required\">\r\n        <ion-text  color=\"danger\" >\r\n          <p class=\"tips ion-padding-start\" >\r\n            请选择学期\r\n          </p>\r\n        </ion-text>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label >课程</ion-label>\r\n        <!-- #courseName=\"ngModel\"的方式是来获取ngModel对象， ngModel对象有.errors的属性来获取验证规则 -->\r\n        <ion-input name='courseName'  #courseName=\"ngModel\" placeholder=\"请输入课程（如工程实践）\" required maxlength='20' [(ngModel)]=\"courseInfo.courseName\"></ion-input>\r\n        <ion-text color=\"danger\" *ngIf=\"(courseName.invalid && courseName.touched) || courseInfo.submited\">\r\n          <p class=\"tips ion-padding-start\" [hidden]=\"!courseName.errors?.required\">\r\n            请输入课程名称\r\n          </p>\r\n        </ion-text>\r\n      </ion-item>\r\n      \r\n      <!-- <ion-item >\r\n        <ion-label >学校</ion-label>\r\n        <ion-input name='school' #school='ngModel' placeholder=\"请输入学校（如福州大学）\" maxlength='20' required \r\n        [(ngModel)]=\"courseInfo.school\" ></ion-input>\r\n        <ion-text color=\"danger\" *ngIf=\"(school.invalid && school.touched) || courseInfo.submited\">\r\n          <p class=\"tips ion-padding-start\" [hidden]=\"!school.errors?.required\">\r\n            请输入学校名称\r\n          </p>\r\n        </ion-text>\r\n      </ion-item> -->\r\n\r\n      <ion-item>\r\n        <ion-label>学校</ion-label>\r\n        <ion-select  name='school' [(ngModel)]=\"courseInfo.school\" #school='ngModel' required placeholder='请选择学校' >\r\n          <ion-select-option *ngFor=\"let s of schools\" [value]=\"s.name\" >{{s.name}}</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-item *ngIf=\"(school.invalid && school.touched) || courseInfo.submited\" [hidden]=\"!school.errors?.required\">\r\n        <ion-text  color=\"danger\" >\r\n          <p class=\"tips ion-padding-start\" >\r\n            请选择学校\r\n          </p>\r\n        </ion-text>\r\n      </ion-item>\r\n\r\n      <!-- <ion-item >\r\n        <ion-label >院系</ion-label>\r\n        <ion-input name='department' #department='ngModel' placeholder=\"请输入院系（如数计学院）\" maxlength='20' required \r\n        [(ngModel)]=\"courseInfo.department\" ></ion-input>\r\n        <ion-text color=\"danger\" *ngIf=\"(department.invalid && department.touched) || courseInfo.submited\">\r\n          <p class=\"tips ion-padding-start\" [hidden]=\"!department.errors?.required\">\r\n            请输入院系名称\r\n          </p>\r\n        </ion-text>\r\n      </ion-item> -->\r\n\r\n      <ion-item>\r\n        <ion-label>学院</ion-label>\r\n        <ion-select  name='department' [(ngModel)]=\"courseInfo.department\" #department='ngModel' required placeholder='请选择学院' >\r\n          <ion-select-option *ngFor=\"let s of departments\" [value]=\"s.name\" >{{s.name}}</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-item *ngIf=\"(department.invalid && department.touched) || courseInfo.submited\" [hidden]=\"!department.errors?.required\">\r\n        <ion-text  color=\"danger\" >\r\n          <p class=\"tips ion-padding-start\" >\r\n            请选择学院\r\n          </p>\r\n        </ion-text>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>班级</ion-label>\r\n        <ion-input name='major' #major='ngModel' placeholder=\"请输入班级（如2019级计算机工硕）\" maxlength='20' required \r\n        [(ngModel)]=\"courseInfo.major\" ></ion-input>\r\n        <ion-text color=\"danger\" *ngIf=\"(major.invalid && major.touched) || courseInfo.submited\">\r\n          <p class=\"tips ion-padding-start\" [hidden]=\"!major.errors?.required\">\r\n            请输入班级名称\r\n          </p>\r\n        </ion-text>\r\n      </ion-item>\r\n      \r\n      \r\n      <ion-item>\r\n        <ion-label position=\"floating\">学习要求</ion-label>\r\n        <ion-textarea name='courseDes' #courseDes='ngModel' placeholder=\"输入学习要求（不超过100字）\" rows=\"2\" maxlength='100'  [(ngModel)]=\"courseInfo.courseDes\" class=\"ion-text-wrap\"></ion-textarea>\r\n      </ion-item>\r\n      \r\n\r\n\r\n\r\n    </ion-list>\r\n\r\n  <ion-button  type='submit' expand=\"block\" fill=\"outline\" shape=\"round\" >\r\n    创建班课\r\n  </ion-button>\r\n</form>\r\n\r\n\r\n\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/create-classes/create-class/create-class-routing.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/create-classes/create-class/create-class-routing.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: CreateClassPageRoutingModule */

  /***/
  function srcAppPagesCreateClassesCreateClassCreateClassRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateClassPageRoutingModule", function () {
      return CreateClassPageRoutingModule;
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


    var _create_class_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./create-class.page */
    "./src/app/pages/create-classes/create-class/create-class.page.ts");

    var routes = [{
      path: '',
      component: _create_class_page__WEBPACK_IMPORTED_MODULE_3__["CreateClassPage"]
    }];

    var CreateClassPageRoutingModule = function CreateClassPageRoutingModule() {
      _classCallCheck(this, CreateClassPageRoutingModule);
    };

    CreateClassPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CreateClassPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/create-classes/create-class/create-class.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/create-classes/create-class/create-class.module.ts ***!
    \**************************************************************************/

  /*! exports provided: CreateClassPageModule */

  /***/
  function srcAppPagesCreateClassesCreateClassCreateClassModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateClassPageModule", function () {
      return CreateClassPageModule;
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


    var _create_class_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./create-class-routing.module */
    "./src/app/pages/create-classes/create-class/create-class-routing.module.ts");
    /* harmony import */


    var _create_class_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./create-class.page */
    "./src/app/pages/create-classes/create-class/create-class.page.ts");

    var CreateClassPageModule = function CreateClassPageModule() {
      _classCallCheck(this, CreateClassPageModule);
    };

    CreateClassPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _create_class_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateClassPageRoutingModule"]],
      declarations: [_create_class_page__WEBPACK_IMPORTED_MODULE_6__["CreateClassPage"]]
    })], CreateClassPageModule);
    /***/
  },

  /***/
  "./src/app/pages/create-classes/create-class/create-class.page.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/create-classes/create-class/create-class.page.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCreateClassesCreateClassCreateClassPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".create-class-avatar {\n  margin: 0 auto;\n  border: 1px solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3JlYXRlLWNsYXNzZXMvY3JlYXRlLWNsYXNzL0Q6XFxoeHNreXVuXFxtb2JpbGVcXGRhb3l1bi9zcmNcXGFwcFxccGFnZXNcXGNyZWF0ZS1jbGFzc2VzXFxjcmVhdGUtY2xhc3NcXGNyZWF0ZS1jbGFzcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NyZWF0ZS1jbGFzc2VzL2NyZWF0ZS1jbGFzcy9jcmVhdGUtY2xhc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jcmVhdGUtY2xhc3Nlcy9jcmVhdGUtY2xhc3MvY3JlYXRlLWNsYXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmVhdGUtY2xhc3MtYXZhdGFye1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxufSIsIi5jcmVhdGUtY2xhc3MtYXZhdGFyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/create-classes/create-class/create-class.page.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/create-classes/create-class/create-class.page.ts ***!
    \************************************************************************/

  /*! exports provided: CreateClassPage */

  /***/
  function srcAppPagesCreateClassesCreateClassCreateClassPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateClassPage", function () {
      return CreateClassPage;
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

    var CreateClassPage = /*#__PURE__*/function (_src_app_common_baseu) {
      _inherits(CreateClassPage, _src_app_common_baseu);

      var _super = _createSuper(CreateClassPage);

      // newCourseId = ''
      // newCourseName = ''
      function CreateClassPage(activatedRoute, zrServices, localStorageService, toastService, router, loadingController) {
        var _this;

        _classCallCheck(this, CreateClassPage);

        _this = _super.call(this);
        _this.activatedRoute = activatedRoute;
        _this.zrServices = zrServices;
        _this.localStorageService = localStorageService;
        _this.toastService = toastService;
        _this.router = router;
        _this.loadingController = loadingController;
        _this.submited = false; // semesters:any[]=[ //学期
        //   {id:'1', name:'2019-2020-1'},
        //   {id:'2', name:'2019-2020-2'},
        //   {id:'3', name:'2020-2021-1'},
        //   {id:'4', name:'2020-2021-2'},
        //   {id:'5', name:'2021-2022-1'},
        // ]

        _this.semesters = [];
        _this.schools = [];
        _this.departments = [];
        _this.courseInfo = {
          school: '',
          semester: '',
          major: '',
          courseName: '',
          courseDes: '',
          department: '',
          submited: false //是否提交

        };
        return _this;
      }

      _createClass(CreateClassPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          _get(_getPrototypeOf(CreateClassPage.prototype), "showLoading", this).call(this, this.loadingController, '请等待', 400);

          this.loadBasicInfo();
        } // 获取学期、学校、学院

      }, {
        key: "loadBasicInfo",
        value: function loadBasicInfo() {
          var _this2 = this;

          // 获取学期
          this.zrServices.getSemester().then(function (result) {
            var _iterator = _createForOfIteratorHelper(result.data),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var r = _step.value;
                var item = {
                  id: r.dictId,
                  name: r.itemValue
                };

                _this2.semesters.push(item);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }); // 获取学校

          this.zrServices.getSchool().then(function (result) {
            var _iterator2 = _createForOfIteratorHelper(result.data),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var r = _step2.value;
                var item = {
                  id: r.dictId,
                  name: r.itemValue
                };

                _this2.schools.push(item);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }); // 获取学院

          this.zrServices.getDepartment().then(function (result) {
            var _iterator3 = _createForOfIteratorHelper(result.data),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var r = _step3.value;
                var item = {
                  id: r.dictId,
                  name: r.itemValue
                };

                _this2.departments.push(item);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          });
        } // 提交表单操作

      }, {
        key: "doSubmit",
        value: function doSubmit(form) {
          this.courseInfo.submited = true; //表单提交

          if (form.valid) {
            this.onCourseSave();
          }
        } // 保存表单项

      }, {
        key: "onCourseSave",
        value: function onCourseSave() {
          var _this3 = this;

          var TeacherId = this.localStorageService.getStore('uid', null);
          var newCourseInfo = {}; // 新建课程信息

          newCourseInfo['teachId'] = TeacherId;
          newCourseInfo['courseSemester'] = this.courseInfo.semester;
          newCourseInfo['major'] = this.courseInfo.major;
          newCourseInfo['courseName'] = this.courseInfo.courseName;
          newCourseInfo['courseDes'] = this.courseInfo.courseDes;
          newCourseInfo['school'] = this.courseInfo.school;
          newCourseInfo['department'] = this.courseInfo.department;
          newCourseInfo['endClassStatus'] = '进行中';

          _get(_getPrototypeOf(CreateClassPage.prototype), "showLoading", this).call(this, this.loadingController, '请等待', 1000);

          this.zrServices.postNewCourse(newCourseInfo).then(function (result) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var url, courseId, queryParams;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log('添加课程的返回信息', result);
                      url = '/create-classes/qrcode'; // qrcode
                      // 请求返回状态

                      if (result.code == '200') {
                        courseId = result.data.courseId;
                        queryParams = {
                          courseId: courseId
                        };
                        console.log('新创建的班课号为：', courseId); // 新建成功，则弹出提示框，并且回调单数为跳转到qrCode页

                        this.toastService.presentAlertConfirm('创建班课成功！', url, queryParams);
                      } else {
                        console.log(result.msg);
                      }

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          })["catch"](function (error) {
            console.log('新建课程失败', error);
          });
        }
      }]);

      return CreateClassPage;
    }(src_app_common_baseui__WEBPACK_IMPORTED_MODULE_6__["BaseUI"]);

    CreateClassPage.ctorParameters = function () {
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
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]
      }];
    };

    CreateClassPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-class',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-class.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-classes/create-class/create-class.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-class.page.scss */
      "./src/app/pages/create-classes/create-class/create-class.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_3__["ZrServicesService"], _shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"], _shared_services_toast_service_service__WEBPACK_IMPORTED_MODULE_5__["ToastServiceProvider"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]])], CreateClassPage);
    /***/
  }
}]);
//# sourceMappingURL=create-class-create-class-module-es5.js.map