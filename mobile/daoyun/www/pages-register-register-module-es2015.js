(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"返回\" color=\"primary\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class='ion-text-center'>注册</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content no-padding>\r\n  <form novalidate #information=\"ngForm\" >\r\n    <ion-list>\r\n      <!--姓名-->\r\n      <ion-item>\r\n        <ion-input name=\"name\" type=\"text\" placeholder=\"输入姓名\" required\r\n                    [(ngModel)]=\"register.name\" #name=\"ngModel\">\r\n        </ion-input>\r\n      </ion-item>\r\n      <ion-text text-left color=\"danger\" *ngIf=\"name.invalid && name.touched\">\r\n        <p [hidden]=\"!name.errors?.required\" padding-start>请输入姓名</p>\r\n      </ion-text>\r\n      <!-- 邮箱地址 -->\r\n      <ion-item>\r\n        <ion-input name=\"email\" type=\"text\" placeholder=\"输入邮箱地址\" required\r\n                    pattern=\"\\w+@([0-9a-zA-Z]+[-0-9a-zA-Z]*)(\\.[0-9a-zA-Z]+[-0-9a-zA-Z]*)+\"\r\n                    [(ngModel)]=\"register.email\" #email=\"ngModel\">\r\n        </ion-input>\r\n      </ion-item>\r\n      <ion-text text-left color=\"danger\" *ngIf=\"email.invalid && email.touched\">\r\n        <p [hidden]=\"!email.errors?.required\" padding-start>请输入邮箱地址</p>\r\n        <p [hidden]=\"!email.errors?.pattern\" padding-start>邮箱地址格式错误</p>\r\n      </ion-text>\r\n      <!-- 手机号 -->\r\n      <ion-item>\r\n        <ion-input name=\"phone\" type=\"number\" placeholder=\"输入手机号码\" required\r\n               pattern=\"^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,3,5-9]))\\d{8}$\"\r\n               [(ngModel)]=\"register.phone\" #phone=\"ngModel\">\r\n        </ion-input>\r\n    </ion-item>\r\n    <ion-text text-left color=\"danger\" *ngIf=\"phone.invalid && phone.touched\">\r\n        <p [hidden]=\"!phone.errors?.required\" padding-start>请输入手机号码</p>\r\n        <p [hidden]=\"!phone.errors?.pattern\" padding-start>您输入的手机号格式不正确</p>\r\n    </ion-text>\r\n      <!-- 登录密码 -->\r\n      <ion-item>\r\n        <ion-input type=\"password\" placeholder=\"请输入登录密码 \"required [(ngModel)]=\"register.password\" name=\"newpass\" #newpass=\"ngModel\"\r\n                   pattern=\"[0-9a-zA-Z]{6,16}\"></ion-input>\r\n      </ion-item>\r\n      <ion-text [hidden]=\"!newpass.errors?.pattern\" padding-start color=\"danger\" *ngIf=\"newpass.invalid && newpass.touched\">\r\n        密码格式为6至16位的数字字母\r\n      </ion-text>\r\n      <!-- 再次新密码 -->\r\n      <ion-item>\r\n        <ion-input type=\"password\" placeholder=\"请输入确认密码\" required [(ngModel)]=\"register.confirmPassword\" name=\"checkpass\" #checkpass=\"ngModel\"></ion-input>\r\n      </ion-item>\r\n      <ion-text [hidden]=\"register.password== register.confirmPassword\" padding-start color=\"danger\">两次密码不一致</ion-text>\r\n      <!-- <ion-item>\r\n        <ion-input name=\"password\" type=\"password\" placeholder=\"请输入登录密码\" required pattern=\"^(?=.{6,16})[0-9A-Za-z]*[^0-9A-Za-z][0-9A-Za-z]*$\" [(ngModel)]=\"register.password\" #password=\"ngModel\"></ion-input>\r\n      </ion-item>\r\n        <ion-item *ngIf=\"password.invalid && password.touched\">\r\n        <p [hidden]=\"!password.errors?.required\">请输入登录密码</p>\r\n        <p [hidden]=\"!password.errors?.pattern\">密码长度6至16位，且包含数字、英文、符号</p>\r\n      </ion-item>\r\n      <ion-item>\r\n      <ion-input name=\"confirmPassword\" type=\"password\" placeholder=\"请输入确认密码\" required [(ngModel)]=\"register.confirmPassword\" #confirmPassword=\"ngModel\"></ion-input>\r\n      </ion-item>\r\n        <ion-item *ngIf=\"confirmPassword.invalid && confirmPassword.touched\">\r\n        <p [hidden]=\"!confirmPassword.errors?.required\">请输入确认密码</p>\r\n        <p [hidden]=\"password===confirmPassword\">两次输入的密码不一致</p>\r\n        </ion-item> -->\r\n    </ion-list> \r\n\r\n    <!-- 确定注册-->\r\n    <div padding-horizontal>\r\n      <ion-button expand=\"full\" color=\"primary\" [disabled]=\"information.invalid\"\r\n        (click)=\"onRegister()\" >\r\n        确定注册\r\n      </ion-button>\r\n    </div>\r\n\r\n  </form>\r\n\r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ "./src/app/pages/register/register-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/register/register-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/register/register.page.ts");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/register/register.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/pages/register/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/register/register.page.ts");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/pages/register/register.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/register/register.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var src_app_common_baseui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/baseui */ "./src/app/common/baseui.ts");







let RegisterPage = class RegisterPage extends src_app_common_baseui__WEBPACK_IMPORTED_MODULE_6__["BaseUI"] {
    constructor(router, navCtrl, alertCtrl, http, common, toastController, loadingController) {
        super();
        this.router = router;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.common = common;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.register = {
            phone: '',
            email: '',
            name: '',
            id: '',
            password: '',
            confirmPassword: '',
            code: '',
            university: '',
            college: '',
            major: '',
            usertype: '',
            gender: ''
        };
    }
    ngOnInit() {
    }
    gotoLogin() {
        this.router.navigateByUrl('/login');
    }
    onRegister() {
        const _super = Object.create(null, {
            showLoading: { get: () => super.showLoading }
        });
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let url = '/Login/register';
            if (this.register.password !== this.register.confirmPassword) {
                let toast = yield this.toastController.create({
                    message: '两次密码输入不一致',
                    duration: 3000
                });
                toast.present();
            }
            else {
                this.common.ajaxPost(url, this.register)
                    .then((response) => {
                    if (response['code'] == 100) {
                        console.log(response);
                        this.presentToast(response["msg"]);
                        _super.showLoading.call(this, this.loadingController, "跳转至登录。。。。");
                        this.router.navigateByUrl('/login');
                        console.log("res suc ");
                    }
                    else if (response['code'] == 102) {
                        // this.loadingController.dismiss()
                        this.presentToast(response["msg"]);
                    }
                    else if (response['code'] == 103) {
                        this.presentToast(response["msg"]);
                    }
                })
                    .catch((err) => {
                    console.log(err);
                });
            }
        });
    }
    presentToast(mes) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: mes,
                duration: 2000
            });
            toast.present();
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/register/register.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=pages-register-register-module-es2015.js.map