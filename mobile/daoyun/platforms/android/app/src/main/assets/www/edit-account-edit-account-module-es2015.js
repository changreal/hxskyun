(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-account-edit-account-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mine/edit-account/edit-account.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mine/edit-account/edit-account.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"返回\" color=\"primary\" defaultHref=\"/tabs/mine\" ></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title >账号设置</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list >\r\n    <ion-item routerLink=\"/mine/set-account\" [queryParams]=\"{title:'关联手机',property:shop.phone}\">\r\n    <ion-label>关联手机</ion-label>\r\n    <ion-text slot=\"end\" color='primary'>{{shop.phone}}</ion-text>\r\n  </ion-item>\r\n  <ion-item routerLink=\"/mine/set-account\" [queryParams]=\"{title:'关联邮箱',property:shop.email}\">\r\n    <ion-label>关联邮箱</ion-label>\r\n   \r\n    <ion-text *ngIf= \"shop.email?.length===0\" slot=\"end\" color=\"danger\">未关联</ion-text>\r\n    <ion-text *ngIf= \"shop.email?.length!==0\" slot=\"end\" color='primary'>{{shop.email}}</ion-text>\r\n  </ion-item>\r\n  <ion-item routerLink=\"/mine/edit-password\" >\r\n    <ion-label>修改密码</ion-label>\r\n  </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/mine/edit-account/edit-account-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/mine/edit-account/edit-account-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: EditAccountPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAccountPageRoutingModule", function() { return EditAccountPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _edit_account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-account.page */ "./src/app/pages/mine/edit-account/edit-account.page.ts");




const routes = [
    {
        path: '',
        component: _edit_account_page__WEBPACK_IMPORTED_MODULE_3__["EditAccountPage"]
    }
];
let EditAccountPageRoutingModule = class EditAccountPageRoutingModule {
};
EditAccountPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditAccountPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/mine/edit-account/edit-account.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/mine/edit-account/edit-account.module.ts ***!
  \****************************************************************/
/*! exports provided: EditAccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAccountPageModule", function() { return EditAccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _edit_account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-account-routing.module */ "./src/app/pages/mine/edit-account/edit-account-routing.module.ts");
/* harmony import */ var _edit_account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-account.page */ "./src/app/pages/mine/edit-account/edit-account.page.ts");







let EditAccountPageModule = class EditAccountPageModule {
};
EditAccountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_account_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditAccountPageRoutingModule"]
        ],
        declarations: [_edit_account_page__WEBPACK_IMPORTED_MODULE_6__["EditAccountPage"]]
    })
], EditAccountPageModule);



/***/ }),

/***/ "./src/app/pages/mine/edit-account/edit-account.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/mine/edit-account/edit-account.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21pbmUvZWRpdC1hY2NvdW50L2VkaXQtYWNjb3VudC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/mine/edit-account/edit-account.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/mine/edit-account/edit-account.page.ts ***!
  \**************************************************************/
/*! exports provided: EditAccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAccountPage", function() { return EditAccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/zr-services.service */ "./src/app/shared/services/zr-services.service.ts");
/* harmony import */ var src_app_shared_services_mylocalstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/mylocalstorage.service */ "./src/app/shared/services/mylocalstorage.service.ts");




let EditAccountPage = class EditAccountPage {
    constructor(zrServices, localStorageService) {
        this.zrServices = zrServices;
        this.localStorageService = localStorageService;
        this.shop = {
            phone: '',
            email: ''
        };
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.userId = this.localStorageService.get('uid', '');
        this.loadUserInfo();
    }
    loadUserInfo() {
        this.zrServices.getUserByUserId(this.userId).then((result) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log('here:', result.data);
            if (result.success) {
                this.shop.phone = result.data.phone;
                this.shop.email = result.data.email;
                // console.log('asgagaeegeagr'+result.data.roleId)
            }
        })).catch((error) => {
            console.log('获取用户信息失败', error);
        });
    }
};
EditAccountPage.ctorParameters = () => [
    { type: src_app_shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_2__["ZrServicesService"] },
    { type: src_app_shared_services_mylocalstorage_service__WEBPACK_IMPORTED_MODULE_3__["MylocalstorageService"] }
];
EditAccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-account',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-account.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mine/edit-account/edit-account.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-account.page.scss */ "./src/app/pages/mine/edit-account/edit-account.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_2__["ZrServicesService"], src_app_shared_services_mylocalstorage_service__WEBPACK_IMPORTED_MODULE_3__["MylocalstorageService"]])
], EditAccountPage);



/***/ })

}]);
//# sourceMappingURL=edit-account-edit-account-module-es2015.js.map