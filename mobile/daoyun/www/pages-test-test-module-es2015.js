(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-test-test-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test/test.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test/test.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>test</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n \n    <ion-list>\n      <ion-item>\n        <ion-label position=\"stacked\">输入数字1</ion-label>\n        <ion-input required [(ngModel)]=\"oldpassword\" name=\"oldpass\" #oldpass=\"ngModel\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">输入数字2</ion-label>\n        <ion-input required [(ngModel)]=\"newPassword\" name=\"newPassword\" #oldpass=\"ngModel\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">输入数字3</ion-label>\n        <ion-input required [(ngModel)]=\"checkPassword\" name=\"checkPassword\" #oldpass=\"ngModel\"></ion-input>\n      </ion-item>\n    </ion-list> \n     \n  <ion-list>\n    <ion-button expand=\"full\" color=\"primary\" (click)=\"onLogin()\">检查</ion-button>\n  </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/test/test-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/test/test-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TestPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPageRoutingModule", function() { return TestPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _test_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test.page */ "./src/app/pages/test/test.page.ts");




const routes = [
    {
        path: '',
        component: _test_page__WEBPACK_IMPORTED_MODULE_3__["TestPage"]
    }
];
let TestPageRoutingModule = class TestPageRoutingModule {
};
TestPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TestPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/test/test.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/test/test.module.ts ***!
  \*******************************************/
/*! exports provided: TestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPageModule", function() { return TestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _test_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test-routing.module */ "./src/app/pages/test/test-routing.module.ts");
/* harmony import */ var _test_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test.page */ "./src/app/pages/test/test.page.ts");







let TestPageModule = class TestPageModule {
};
TestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _test_routing_module__WEBPACK_IMPORTED_MODULE_5__["TestPageRoutingModule"]
        ],
        declarations: [_test_page__WEBPACK_IMPORTED_MODULE_6__["TestPage"]]
    })
], TestPageModule);



/***/ }),

/***/ "./src/app/pages/test/test.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/test/test.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlc3QvdGVzdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/test/test.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/test/test.page.ts ***!
  \*****************************************/
/*! exports provided: TestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPage", function() { return TestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let TestPage = class TestPage {
    constructor(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ngOnInit() {
    }
    onLogin() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.newPassword == this.oldpassword && this.newPassword == this.checkPassword) {
                //更新密码
                console.log('一致');
                const toast = yield this.toastCtrl.create({
                    message: '一致',
                    duration: 4000
                });
                yield toast.present();
            }
            else {
                console.log('一致');
                const toast = yield this.toastCtrl.create({
                    message: '不一致',
                    duration: 4000
                });
                yield toast.present();
            }
        });
    }
};
TestPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
TestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./test.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test/test.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./test.page.scss */ "./src/app/pages/test/test.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], TestPage);



/***/ })

}]);
//# sourceMappingURL=pages-test-test-module-es2015.js.map