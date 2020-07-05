(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-password-edit-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mine/edit-password/edit-password.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mine/edit-password/edit-password.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar >\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"返回\" color=\"primary\"  defaultHref=\"/tabs/mine\" ></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>修改密码</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <form #passwordForm novalidate>\r\n    <ion-list>\r\n      <!-- 旧密码 -->\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">输入旧密码</ion-label>\r\n        <ion-input type=\"password\" required [(ngModel)]=\"oldpassword\" name=\"oldpass\" #oldpass=\"ngModel\"\r\n                   pattern=\"[0-9a-zA-Z]{6,16}\"></ion-input>\r\n      </ion-item>\r\n      <!-- <ion-text [hidden]=\"isOldPassword\" padding-start color=\"danger\">您输入的旧密码不正确</ion-text> -->\r\n      <ion-text [hidden]=\"!oldpass.errors.pattern\" padding-start color=\"danger\" *ngIf=\"oldpass.invalid && oldpass.touched\">\r\n        密码格式为6至16位的数字字母\r\n      </ion-text>\r\n      <!-- 新密码 -->\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">请输入新密码</ion-label>\r\n        <ion-input type=\"password\" required [(ngModel)]=\"newPassword\" name=\"newpass\" #newpass=\"ngModel\"\r\n                   pattern=\"[0-9a-zA-Z]{6,16}\"></ion-input>\r\n      </ion-item>\r\n      <ion-text [hidden]=\"!newpass.errors?.pattern\" padding-start color=\"danger\" *ngIf=\"newpass.invalid && newpass.touched\">\r\n        密码格式为6至16位的数字字母\r\n      </ion-text>\r\n      <!-- 再次新密码 -->\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">请再输入一次</ion-label>\r\n        <ion-input type=\"password\" required [(ngModel)]=\"checkPassword\" name=\"checkpass\" #checkpass=\"ngModel\"></ion-input>\r\n      </ion-item>\r\n      <ion-text [hidden]=\"newPassword == checkPassword\" padding-start color=\"danger\">两次密码不一致</ion-text>\r\n    </ion-list>\r\n    <!-- 确定提交 -->\r\n    <ion-button expand=\"block\" [disabled]=\"passwordForm.invalid\" (click)=\"onSave()\">\r\n      确定\r\n    </ion-button>\r\n  </form>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/mine/edit-password/edit-password-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/mine/edit-password/edit-password-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: EditPasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPasswordPageRoutingModule", function() { return EditPasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _edit_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-password.page */ "./src/app/pages/mine/edit-password/edit-password.page.ts");




const routes = [
    {
        path: '',
        component: _edit_password_page__WEBPACK_IMPORTED_MODULE_3__["EditPasswordPage"]
    }
];
let EditPasswordPageRoutingModule = class EditPasswordPageRoutingModule {
};
EditPasswordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditPasswordPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/mine/edit-password/edit-password.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/mine/edit-password/edit-password.module.ts ***!
  \******************************************************************/
/*! exports provided: EditPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPasswordPageModule", function() { return EditPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _edit_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-password-routing.module */ "./src/app/pages/mine/edit-password/edit-password-routing.module.ts");
/* harmony import */ var _edit_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-password.page */ "./src/app/pages/mine/edit-password/edit-password.page.ts");







let EditPasswordPageModule = class EditPasswordPageModule {
};
EditPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditPasswordPageRoutingModule"]
        ],
        declarations: [_edit_password_page__WEBPACK_IMPORTED_MODULE_6__["EditPasswordPage"]]
    })
], EditPasswordPageModule);



/***/ }),

/***/ "./src/app/pages/mine/edit-password/edit-password.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/mine/edit-password/edit-password.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21pbmUvZWRpdC1wYXNzd29yZC9lZGl0LXBhc3N3b3JkLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/mine/edit-password/edit-password.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/mine/edit-password/edit-password.page.ts ***!
  \****************************************************************/
/*! exports provided: EditPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPasswordPage", function() { return EditPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_shared_services_mylocalstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/mylocalstorage.service */ "./src/app/shared/services/mylocalstorage.service.ts");
/* harmony import */ var src_app_shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/zr-services.service */ "./src/app/shared/services/zr-services.service.ts");
/* harmony import */ var src_app_common_baseui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/baseui */ "./src/app/common/baseui.ts");







let EditPasswordPage = class EditPasswordPage extends src_app_common_baseui__WEBPACK_IMPORTED_MODULE_6__["BaseUI"] {
    constructor(router, localStorageService, zrServices, toastController) {
        super();
        this.router = router;
        this.localStorageService = localStorageService;
        this.zrServices = zrServices;
        this.toastController = toastController;
        this.isOldPassword = true;
    }
    onSave() {
        const _super = Object.create(null, {
            showToast: { get: () => super.showToast }
        });
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isOldPassword = this.oldPass == this.oldpassword ? true : false;
            // 验证新密码
            let params = {
                "userId": this.userId,
                "password": this.newPassword
            };
            if (this.isOldPassword && this.newPassword == this.checkPassword) {
                this.zrServices.updateUserinfo(params).then((result) => {
                    // console.log('更新:', result.data.password);
                    if (result.code == '200') {
                        _super.showToast.call(this, this.toastController, '更新成功,重新登录');
                        this.router.navigateByUrl('/login');
                        this.localStorageService.remove('Token');
                        this.localStorageService.remove('uid');
                    }
                }).catch((error) => {
                    // console.log('错了。。。。')
                    _super.showToast.call(this, this.toastController, '密码更新失败');
                });
            }
            else {
                _super.showToast.call(this, this.toastController, '密码不正确');
            }
        });
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.userId = this.localStorageService.get('uid', '');
        this.loadUserInfo();
    }
    loadUserInfo() {
        this.zrServices.getUserByUserId(this.userId).then((result) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log('here:', result.data);
            if (result.code == '200') {
                // console.log('asgagaeegeagr'+result.data.roleId)   
                this.oldPass = result.data.password;
            }
            else {
                // super.showToast(this.toastController,'获取信息失败')
                // super.showToast(this.toastController,'用户信息更新失败')
            }
        })).catch((error) => {
            console.log('获取用户信息失败', error);
        });
    }
};
EditPasswordPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_shared_services_mylocalstorage_service__WEBPACK_IMPORTED_MODULE_4__["MylocalstorageService"] },
    { type: src_app_shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_5__["ZrServicesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
EditPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-password.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mine/edit-password/edit-password.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-password.page.scss */ "./src/app/pages/mine/edit-password/edit-password.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_shared_services_mylocalstorage_service__WEBPACK_IMPORTED_MODULE_4__["MylocalstorageService"], src_app_shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_5__["ZrServicesService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
], EditPasswordPage);



/***/ })

}]);
//# sourceMappingURL=edit-password-edit-password-module-es2015.js.map