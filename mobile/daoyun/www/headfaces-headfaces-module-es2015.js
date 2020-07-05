(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["headfaces-headfaces-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mine/headfaces/headfaces.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mine/headfaces/headfaces.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>headfaces</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color='light'>\n  <img src=\"\" style=\"width:100%\"/>\n  <h3>请选择一个图片。</h3>\n</ion-content>\n<ion-footer color=\"primary\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons>\n      <button ion-button icon-left (click)=\"selectActionSheet()\">\n        <ion-icon name=\"camera\"></ion-icon>选择...\n      </button>\n      <button ion-button icon-left (click)=\"uploadImage()\" >\n        <ion-icon name=\"cloud-upload\"></ion-icon>上传\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n\n\n");

/***/ }),

/***/ "./src/app/pages/mine/headfaces/headfaces-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/mine/headfaces/headfaces-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: HeadfacesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadfacesPageRoutingModule", function() { return HeadfacesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _headfaces_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./headfaces.page */ "./src/app/pages/mine/headfaces/headfaces.page.ts");




const routes = [
    {
        path: '',
        component: _headfaces_page__WEBPACK_IMPORTED_MODULE_3__["HeadfacesPage"]
    }
];
let HeadfacesPageRoutingModule = class HeadfacesPageRoutingModule {
};
HeadfacesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HeadfacesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/mine/headfaces/headfaces.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/mine/headfaces/headfaces.module.ts ***!
  \**********************************************************/
/*! exports provided: HeadfacesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadfacesPageModule", function() { return HeadfacesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _headfaces_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./headfaces-routing.module */ "./src/app/pages/mine/headfaces/headfaces-routing.module.ts");
/* harmony import */ var _headfaces_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./headfaces.page */ "./src/app/pages/mine/headfaces/headfaces.page.ts");







let HeadfacesPageModule = class HeadfacesPageModule {
};
HeadfacesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _headfaces_routing_module__WEBPACK_IMPORTED_MODULE_5__["HeadfacesPageRoutingModule"]
        ],
        declarations: [_headfaces_page__WEBPACK_IMPORTED_MODULE_6__["HeadfacesPage"]]
    })
], HeadfacesPageModule);



/***/ }),

/***/ "./src/app/pages/mine/headfaces/headfaces.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/mine/headfaces/headfaces.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21pbmUvaGVhZGZhY2VzL2hlYWRmYWNlcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/mine/headfaces/headfaces.page.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/mine/headfaces/headfaces.page.ts ***!
  \********************************************************/
/*! exports provided: HeadfacesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadfacesPage", function() { return HeadfacesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let HeadfacesPage = class HeadfacesPage {
    constructor(actionSheetController) {
        this.actionSheetController = actionSheetController;
    }
    ngOnInit() {
    }
    selectActionSheet() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: '选择图片',
                buttons: [{
                        text: '从相册中选择',
                        handler: () => {
                            console.log('相册in');
                        }
                    }, {
                        text: '使用相机',
                        handler: () => {
                            console.log('相机in');
                        }
                    }, {
                        text: '取消',
                        handler: () => {
                            console.log('取消');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    uploadImage() {
    }
};
HeadfacesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] }
];
HeadfacesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-headfaces',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./headfaces.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mine/headfaces/headfaces.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./headfaces.page.scss */ "./src/app/pages/mine/headfaces/headfaces.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]])
], HeadfacesPage);



/***/ })

}]);
//# sourceMappingURL=headfaces-headfaces-module-es2015.js.map