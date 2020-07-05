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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-info-user-info-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mine/user-info/user-info.page.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mine/user-info/user-info.page.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMineUserInfoUserInfoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/mine\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-start\">用户信息</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content >\r\n    <!-- <ion-list >\r\n      <ion-item button detail  routerLink=\"/mine/headfaces\">\r\n        <ion-avatar item-start>\r\n          <img src=\"{{headface}}\" />\r\n        </ion-avatar>\r\n        <ion-label>修改头像</ion-label>\r\n      </ion-item>\r\n    </ion-list> -->\r\n\r\n    <ion-list >\r\n      <ion-item>\r\n        <ion-label>姓名:</ion-label>  \r\n        <ion-input  type=\"text\" item-end [(ngModel)]=\"userDetail.name\" ></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>昵称:</ion-label>  \r\n        <ion-input type=\"text\" [(ngModel)]=\"userDetail.name\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>出生年份:</ion-label>  \r\n        <ion-input type=\"text\" [(ngModel)]=\"userDetail.birthDate\"></ion-input>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-list  lines='full' >\r\n      <ion-item button detail  routerLink=\"/edit-school\">\r\n        <ion-label>\r\n          <ion-text color=\"primary\">\r\n            <h2>你所在的学校及院系</h2>\r\n          </ion-text>\r\n          <ion-text>\r\n            <p>{{userDetail.school}}&nbsp;&nbsp;&nbsp;{{userDetail.major}}</p>\r\n          </ion-text>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-list  lines='full'>\r\n      <ion-list-header>\r\n        选择性别\r\n      </ion-list-header>\r\n      <ion-radio-group  [(ngModel)]=\"userDetail.sex\"  (ionChange)='getValue()'>\r\n      <ion-item>\r\n        <ion-label>男</ion-label>\r\n        <ion-radio slot=\"end\" value=\"男\"></ion-radio>    \r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>女</ion-label>\r\n        <ion-radio slot=\"end\" value=\"女\"></ion-radio>\r\n      </ion-item>\r\n    </ion-radio-group>\r\n    </ion-list>\r\n\r\n    <ion-list  lines='full'>\r\n      <ion-list-header >\r\n        选择身份\r\n      </ion-list-header>\r\n      <ion-radio-group [(ngModel)]=\"userDetail.roleId\" (ionChange)='getValue()'>\r\n      <ion-item>\r\n        <ion-label>我是学生</ion-label>\r\n        <ion-radio slot=\"end\" value=\"3\"></ion-radio>    \r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>我是老师</ion-label>\r\n        <ion-radio slot=\"end\" value=\"2\"></ion-radio>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>其他</ion-label>\r\n        <ion-radio slot=\"end\" value=\"1\"></ion-radio>\r\n      </ion-item>\r\n    </ion-radio-group>\r\n    </ion-list>\r\n\r\n  <ion-list  lines='full'>\r\n    <ion-item>\r\n      <ion-label>学号/工号:</ion-label>  \r\n      <!-- <ion-input type=\"text\" [(ngModel)]=\"userDetail.userId\"></ion-input> -->\r\n      <ion-text slot=\"end\" color='primary'>{{userDetail.userId}}</ion-text>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n    <div style=\"text-align: center;\" class=\"ion-padding\">\r\n      <ion-button expand=\"full\" color=\"primary\" (click)=\"onSave()\" shape='round'>保存</ion-button>\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/mine/user-info/user-info-routing.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/mine/user-info/user-info-routing.module.ts ***!
    \******************************************************************/

  /*! exports provided: UserInfoPageRoutingModule */

  /***/
  function srcAppPagesMineUserInfoUserInfoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserInfoPageRoutingModule", function () {
      return UserInfoPageRoutingModule;
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


    var _user_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user-info.page */
    "./src/app/pages/mine/user-info/user-info.page.ts");

    var routes = [{
      path: '',
      component: _user_info_page__WEBPACK_IMPORTED_MODULE_3__["UserInfoPage"]
    }];

    var UserInfoPageRoutingModule = function UserInfoPageRoutingModule() {
      _classCallCheck(this, UserInfoPageRoutingModule);
    };

    UserInfoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UserInfoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/mine/user-info/user-info.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/mine/user-info/user-info.module.ts ***!
    \**********************************************************/

  /*! exports provided: UserInfoPageModule */

  /***/
  function srcAppPagesMineUserInfoUserInfoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserInfoPageModule", function () {
      return UserInfoPageModule;
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


    var _user_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user-info-routing.module */
    "./src/app/pages/mine/user-info/user-info-routing.module.ts");
    /* harmony import */


    var _user_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user-info.page */
    "./src/app/pages/mine/user-info/user-info.page.ts");

    var UserInfoPageModule = function UserInfoPageModule() {
      _classCallCheck(this, UserInfoPageModule);
    };

    UserInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _user_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserInfoPageRoutingModule"]],
      declarations: [_user_info_page__WEBPACK_IMPORTED_MODULE_6__["UserInfoPage"]]
    })], UserInfoPageModule);
    /***/
  },

  /***/
  "./src/app/pages/mine/user-info/user-info.page.scss":
  /*!**********************************************************!*\
    !*** ./src/app/pages/mine/user-info/user-info.page.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMineUserInfoUserInfoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21pbmUvdXNlci1pbmZvL3VzZXItaW5mby5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/mine/user-info/user-info.page.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/mine/user-info/user-info.page.ts ***!
    \********************************************************/

  /*! exports provided: UserInfoPage */

  /***/
  function srcAppPagesMineUserInfoUserInfoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserInfoPage", function () {
      return UserInfoPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_event_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/services/event.service */
    "./src/app/shared/services/event.service.ts");

    var UserInfoPage = /*#__PURE__*/function (_src_app_common_baseu) {
      _inherits(UserInfoPage, _src_app_common_baseu);

      var _super = _createSuper(UserInfoPage);

      function UserInfoPage(localStorageService, zrServices, toastController, router, eventService) {
        var _this;

        _classCallCheck(this, UserInfoPage);

        _this = _super.call(this);
        _this.localStorageService = localStorageService;
        _this.zrServices = zrServices;
        _this.toastController = toastController;
        _this.router = router;
        _this.eventService = eventService;
        _this.user = {
          value: null
        };
        _this.userDetail = {
          name: '',
          birthDate: '',
          sex: '',
          school: '',
          major: '',
          userId: '',
          roleId: ''
        };
        return _this;
      }

      _createClass(UserInfoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userId = this.localStorageService.get('uid', '');
          this.userDetail.roleId = this.localStorageService.get('roldId', '');
          this.loadUserInfo();
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          // console.log("view enter")
          var temp = this.localStorageService.get('schooAandmajor', '');

          if (temp) {
            this.userDetail.school = temp.colleage;
            this.userDetail.major = temp.major;
            this.localStorageService.remove('schooAandmajor');
          } // console.log('111111111'+this.userDetail.major+this.userDetail.roleId)

        }
      }, {
        key: "loadUserInfo",
        value: function loadUserInfo() {
          var _this2 = this;

          this.zrServices.getUserByUserId(this.userId).then(function (result) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      // console.log('here:', result.data);
                      if (result.success) {
                        this.userDetail.school = result.data.school;
                        this.userDetail.major = result.data.major;
                        this.userDetail.sex = result.data.sex;
                        this.userDetail.birthDate = result.data.birthDate;
                        this.userDetail.name = result.data.name;
                        this.userDetail.userId = result.data.userId;
                        this.userDetail.roleId = String(result.data.roleId); // console.log('asgagaeegeagr'+result.data.roleId)
                      }

                    case 1:
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
      }, {
        key: "getValue",
        value: function getValue() {// console.log('我选中的是', this.userDetail.roleId)
        }
      }, {
        key: "ionViewDidLeave",
        value: function ionViewDidLeave() {
          // console.log('userinfo leave')
          this.eventService.event.emit('userupdate');
        }
      }, {
        key: "onSave",
        value: function onSave() {
          var _this3 = this;

          // console.log(this.userDetail.roleId)
          this.zrServices.updateUserinfo(this.userDetail).then(function (result) {
            // console.log('更新:', result.data);
            if (result.code == '200') {
              _this3.localStorageService.set('roleId', _this3.userDetail.roleId);

              _get(_getPrototypeOf(UserInfoPage.prototype), "showToast", _this3).call(_this3, _this3.toastController, '用户信息更新成功');

              _this3.router.navigateByUrl('/tabs/mine'); // this.router.navigateByUrl('/tabs/mine').then(()=>{location.reload();});
              //  console.log(result.code)


              console.log('userdetail：', result.data); //  console.log(result.msg)
            } else {
              _get(_getPrototypeOf(UserInfoPage.prototype), "showToast", _this3).call(_this3, _this3.toastController, '用户信息更新失败');
            }
          })["catch"](function (error) {
            _get(_getPrototypeOf(UserInfoPage.prototype), "showToast", _this3).call(_this3, _this3.toastController, '用户信息更新失败');
          });
        }
      }]);

      return UserInfoPage;
    }(src_app_common_baseui__WEBPACK_IMPORTED_MODULE_4__["BaseUI"]);

    UserInfoPage.ctorParameters = function () {
      return [{
        type: src_app_shared_services_mylocalstorage_service__WEBPACK_IMPORTED_MODULE_2__["MylocalstorageService"]
      }, {
        type: src_app_shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_3__["ZrServicesService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: src_app_shared_services_event_service__WEBPACK_IMPORTED_MODULE_7__["EventService"]
      }];
    };

    UserInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-info.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mine/user-info/user-info.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-info.page.scss */
      "./src/app/pages/mine/user-info/user-info.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_mylocalstorage_service__WEBPACK_IMPORTED_MODULE_2__["MylocalstorageService"], src_app_shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_3__["ZrServicesService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_shared_services_event_service__WEBPACK_IMPORTED_MODULE_7__["EventService"]])], UserInfoPage);
    /***/
  }
}]);
//# sourceMappingURL=user-info-user-info-module-es5.js.map