(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-info-user-info-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mine/user-info/user-info.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mine/user-info/user-info.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/mine\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-start\">用户信息</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content >\r\n    <!-- <ion-list >\r\n      <ion-item button detail  routerLink=\"/mine/headfaces\">\r\n        <ion-avatar item-start>\r\n          <img src=\"{{headface}}\" />\r\n        </ion-avatar>\r\n        <ion-label>修改头像</ion-label>\r\n      </ion-item>\r\n    </ion-list> -->\r\n\r\n    <ion-list >\r\n      <ion-item>\r\n        <ion-label>姓名:</ion-label>  \r\n        <ion-input  type=\"text\" item-end [(ngModel)]=\"userDetail.name\" ></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>昵称:</ion-label>  \r\n        <ion-input type=\"text\" [(ngModel)]=\"userDetail.name\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>出生年份:</ion-label>  \r\n        <ion-input type=\"text\" [(ngModel)]=\"userDetail.birthDate\"></ion-input>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-list  lines='full' >\r\n      <ion-item button detail  routerLink=\"/edit-school\">\r\n        <ion-label>\r\n          <ion-text color=\"primary\">\r\n            <h2>你所在的学校及院系</h2>\r\n          </ion-text>\r\n          <ion-text>\r\n            <p>{{userDetail.school}}&nbsp;&nbsp;&nbsp;{{userDetail.major}}</p>\r\n          </ion-text>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-list  lines='full'>\r\n      <ion-list-header>\r\n        选择性别\r\n      </ion-list-header>\r\n      <ion-radio-group  [(ngModel)]=\"userDetail.sex\"  (ionChange)='getValue()'>\r\n      <ion-item>\r\n        <ion-label>男</ion-label>\r\n        <ion-radio slot=\"end\" value=\"男\"></ion-radio>    \r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>女</ion-label>\r\n        <ion-radio slot=\"end\" value=\"女\"></ion-radio>\r\n      </ion-item>\r\n    </ion-radio-group>\r\n    </ion-list>\r\n\r\n    <ion-list  lines='full'>\r\n      <ion-list-header >\r\n        选择身份\r\n      </ion-list-header>\r\n      <ion-radio-group [(ngModel)]=\"userDetail.roleId\" (ionChange)='getValue()'>\r\n      <ion-item>\r\n        <ion-label>我是学生</ion-label>\r\n        <ion-radio slot=\"end\" value=\"3\"></ion-radio>    \r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>我是老师</ion-label>\r\n        <ion-radio slot=\"end\" value=\"2\"></ion-radio>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>其他</ion-label>\r\n        <ion-radio slot=\"end\" value=\"1\"></ion-radio>\r\n      </ion-item>\r\n    </ion-radio-group>\r\n    </ion-list>\r\n\r\n  <ion-list  lines='full'>\r\n    <ion-item>\r\n      <ion-label>学号/工号:</ion-label>  \r\n      <!-- <ion-input type=\"text\" [(ngModel)]=\"userDetail.userId\"></ion-input> -->\r\n      <ion-text slot=\"end\" color='primary'>{{userDetail.userId}}</ion-text>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n    <div style=\"text-align: center;\" class=\"ion-padding\">\r\n      <ion-button expand=\"full\" color=\"primary\" (click)=\"onSave()\" shape='round'>保存</ion-button>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/mine/user-info/user-info-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/mine/user-info/user-info-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: UserInfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoPageRoutingModule", function() { return UserInfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-info.page */ "./src/app/pages/mine/user-info/user-info.page.ts");




const routes = [
    {
        path: '',
        component: _user_info_page__WEBPACK_IMPORTED_MODULE_3__["UserInfoPage"]
    }
];
let UserInfoPageRoutingModule = class UserInfoPageRoutingModule {
};
UserInfoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserInfoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/mine/user-info/user-info.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/mine/user-info/user-info.module.ts ***!
  \**********************************************************/
/*! exports provided: UserInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoPageModule", function() { return UserInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _user_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-info-routing.module */ "./src/app/pages/mine/user-info/user-info-routing.module.ts");
/* harmony import */ var _user_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-info.page */ "./src/app/pages/mine/user-info/user-info.page.ts");







let UserInfoPageModule = class UserInfoPageModule {
};
UserInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _user_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserInfoPageRoutingModule"]
        ],
        declarations: [_user_info_page__WEBPACK_IMPORTED_MODULE_6__["UserInfoPage"]]
    })
], UserInfoPageModule);



/***/ }),

/***/ "./src/app/pages/mine/user-info/user-info.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/mine/user-info/user-info.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21pbmUvdXNlci1pbmZvL3VzZXItaW5mby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/mine/user-info/user-info.page.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/mine/user-info/user-info.page.ts ***!
  \********************************************************/
/*! exports provided: UserInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoPage", function() { return UserInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_mylocalstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/mylocalstorage.service */ "./src/app/shared/services/mylocalstorage.service.ts");
/* harmony import */ var src_app_shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/zr-services.service */ "./src/app/shared/services/zr-services.service.ts");
/* harmony import */ var src_app_common_baseui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/baseui */ "./src/app/common/baseui.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_event_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/event.service */ "./src/app/shared/services/event.service.ts");








let UserInfoPage = class UserInfoPage extends src_app_common_baseui__WEBPACK_IMPORTED_MODULE_4__["BaseUI"] {
    constructor(localStorageService, zrServices, toastController, router, eventService) {
        super();
        this.localStorageService = localStorageService;
        this.zrServices = zrServices;
        this.toastController = toastController;
        this.router = router;
        this.eventService = eventService;
        this.user = {
            value: null
        };
        this.userDetail = {
            name: '',
            birthDate: '',
            sex: '',
            school: '',
            major: '',
            userId: '',
            roleId: ''
        };
    }
    ngOnInit() {
        this.userId = this.localStorageService.get('uid', '');
        this.userDetail.roleId = this.localStorageService.get('roldId', '');
        this.loadUserInfo();
    }
    ionViewDidEnter() {
        // console.log("view enter")
        let temp = this.localStorageService.get('schooAandmajor', '');
        if (temp) {
            this.userDetail.school = temp.colleage;
            this.userDetail.major = temp.major;
            this.localStorageService.remove('schooAandmajor');
        }
        // console.log('111111111'+this.userDetail.major+this.userDetail.roleId)
    }
    loadUserInfo() {
        this.zrServices.getUserByUserId(this.userId).then((result) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log('here:', result.data);
            if (result.success) {
                this.userDetail.school = result.data.school;
                this.userDetail.major = result.data.major;
                this.userDetail.sex = result.data.sex;
                this.userDetail.birthDate = result.data.birthDate;
                this.userDetail.name = result.data.name;
                this.userDetail.userId = result.data.userId;
                this.userDetail.roleId = String(result.data.roleId);
                // console.log('asgagaeegeagr'+result.data.roleId)
            }
        })).catch((error) => {
            console.log('获取用户信息失败', error);
        });
    }
    getValue() {
        // console.log('我选中的是', this.userDetail.roleId)
    }
    ionViewDidLeave() {
        // console.log('userinfo leave')
        this.eventService.event.emit('userupdate');
    }
    onSave() {
        // console.log(this.userDetail.roleId)
        this.zrServices.updateUserinfo(this.userDetail).then((result) => {
            // console.log('更新:', result.data);
            if (result.code == '200') {
                this.localStorageService.set('roleId', this.userDetail.roleId);
                super.showToast(this.toastController, '用户信息更新成功');
                this.router.navigateByUrl('/tabs/mine');
                // this.router.navigateByUrl('/tabs/mine').then(()=>{location.reload();});
                //  console.log(result.code)
                console.log('userdetail：', result.data);
                //  console.log(result.msg)
            }
            else {
                super.showToast(this.toastController, '用户信息更新失败');
            }
        }).catch((error) => {
            super.showToast(this.toastController, '用户信息更新失败');
        });
    }
};
UserInfoPage.ctorParameters = () => [
    { type: src_app_shared_services_mylocalstorage_service__WEBPACK_IMPORTED_MODULE_2__["MylocalstorageService"] },
    { type: src_app_shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_3__["ZrServicesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_app_shared_services_event_service__WEBPACK_IMPORTED_MODULE_7__["EventService"] }
];
UserInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-info.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mine/user-info/user-info.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-info.page.scss */ "./src/app/pages/mine/user-info/user-info.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_mylocalstorage_service__WEBPACK_IMPORTED_MODULE_2__["MylocalstorageService"], src_app_shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_3__["ZrServicesService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_shared_services_event_service__WEBPACK_IMPORTED_MODULE_7__["EventService"]])
], UserInfoPage);



/***/ })

}]);
//# sourceMappingURL=user-info-user-info-module-es2015.js.map