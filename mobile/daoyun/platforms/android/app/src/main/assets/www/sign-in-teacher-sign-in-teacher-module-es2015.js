(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-in-teacher-sign-in-teacher-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-classes/sign-in-teacher/sign-in-teacher.page.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-classes/sign-in-teacher/sign-in-teacher.page.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/create-classes\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>发起签到</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n\r\n    <ion-item lines='none'  class=\"ion-margin\" button (click)=\"doSignIn()\" >\r\n      <ion-label class=\"ion-padding-vertical\"  color=\"primary\">\r\n        <ion-avatar class=\"ion-padding-vertical sign-in-avatar ion-text-center\"  >\r\n          <ion-icon name=\"checkbox-outline\" size='large'></ion-icon>\r\n          <h5>签到</h5>\r\n        </ion-avatar>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n\r\n    <!-- 列表头 -->\r\n    <ion-list-header lines='full' class=\"ion-padding-horizontal\">\r\n      <ion-label color=\"medium\">{{courseName}}&nbsp;历史签到记录</ion-label>\r\n      <ion-label class=\"ion-text-right\">考勤次数：<a class=\"primary\" >{{signCount}}</a></ion-label>\r\n    </ion-list-header>\r\n \r\n    \r\n  <!-- 签到列表 -->\r\n  <ion-list lines='full' *ngIf=\"signCount!='0'\">\r\n\r\n    <!-- 内容部分 -->\r\n    <ion-item detail button [routerLink]=\"['/create-classes/sign-in-teacher/sign-in-result']\" [queryParams]='{signId:sign.signId}'\r\n     *ngFor=\"let sign of historySignList\"  >\r\n      <ion-label >\r\n        <h4><time>{{sign.createDate | date:'yyyy-MM-dd'}}</time>&nbsp;签到 <span class=\"ion-float-right sign-in-people \">{{sign.signCount}}人/{{courseMembersCount}}人</span></h4>\r\n        <p><time>{{sign.createDate | date:'HH:mm:ss'}}</time></p>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/create-classes/sign-in-teacher/sign-in-teacher-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/create-classes/sign-in-teacher/sign-in-teacher-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: SignInTeacherPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInTeacherPageRoutingModule", function() { return SignInTeacherPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sign_in_teacher_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-in-teacher.page */ "./src/app/pages/create-classes/sign-in-teacher/sign-in-teacher.page.ts");




const routes = [
    {
        path: '',
        component: _sign_in_teacher_page__WEBPACK_IMPORTED_MODULE_3__["SignInTeacherPage"]
    },
    {
        path: 'sign-in',
        loadChildren: () => Promise.all(/*! import() | sign-in-sign-in-module */[__webpack_require__.e("common"), __webpack_require__.e("sign-in-sign-in-module")]).then(__webpack_require__.bind(null, /*! ./sign-in/sign-in.module */ "./src/app/pages/create-classes/sign-in-teacher/sign-in/sign-in.module.ts")).then(m => m.SignInPageModule)
    },
    {
        path: 'sign-in-result',
        loadChildren: () => __webpack_require__.e(/*! import() | sign-in-result-sign-in-result-module */ "sign-in-result-sign-in-result-module").then(__webpack_require__.bind(null, /*! ./sign-in-result/sign-in-result.module */ "./src/app/pages/create-classes/sign-in-teacher/sign-in-result/sign-in-result.module.ts")).then(m => m.SignInResultPageModule)
    }
];
let SignInTeacherPageRoutingModule = class SignInTeacherPageRoutingModule {
};
SignInTeacherPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignInTeacherPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/create-classes/sign-in-teacher/sign-in-teacher.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/create-classes/sign-in-teacher/sign-in-teacher.module.ts ***!
  \********************************************************************************/
/*! exports provided: SignInTeacherPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInTeacherPageModule", function() { return SignInTeacherPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _sign_in_teacher_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-in-teacher-routing.module */ "./src/app/pages/create-classes/sign-in-teacher/sign-in-teacher-routing.module.ts");
/* harmony import */ var _sign_in_teacher_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-in-teacher.page */ "./src/app/pages/create-classes/sign-in-teacher/sign-in-teacher.page.ts");







let SignInTeacherPageModule = class SignInTeacherPageModule {
};
SignInTeacherPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sign_in_teacher_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignInTeacherPageRoutingModule"]
        ],
        declarations: [_sign_in_teacher_page__WEBPACK_IMPORTED_MODULE_6__["SignInTeacherPage"]]
    })
], SignInTeacherPageModule);



/***/ }),

/***/ "./src/app/pages/create-classes/sign-in-teacher/sign-in-teacher.page.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/create-classes/sign-in-teacher/sign-in-teacher.page.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sign-in-img {\n  width: 7em;\n  margin: 0 auto;\n}\n\n.sign-in-avatar {\n  display: block;\n  margin: 0 auto;\n  width: 5em;\n  height: 5em;\n  color: white;\n  background-color: #3880ff;\n  box-shadow: 2px 3px 5px #888888;\n}\n\n.sign-in-people {\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3JlYXRlLWNsYXNzZXMvc2lnbi1pbi10ZWFjaGVyL0Q6XFxoeHNreXVuXFxtb2JpbGVcXGRhb3l1bi9zcmNcXGFwcFxccGFnZXNcXGNyZWF0ZS1jbGFzc2VzXFxzaWduLWluLXRlYWNoZXJcXHNpZ24taW4tdGVhY2hlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NyZWF0ZS1jbGFzc2VzL3NpZ24taW4tdGVhY2hlci9zaWduLWluLXRlYWNoZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtBQ0NKOztBREdBO0VBQ0ksV0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3JlYXRlLWNsYXNzZXMvc2lnbi1pbi10ZWFjaGVyL3NpZ24taW4tdGVhY2hlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbi1pbi1pbWd7XHJcbiAgICB3aWR0aDogN2VtO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5zaWduLWluLWF2YXRhcntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogNWVtO1xyXG4gICAgaGVpZ2h0OiA1ZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg4MGZmO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDNweCA1cHggIzg4ODg4ODtcclxuXHJcbn1cclxuXHJcbi5zaWduLWluLXBlb3BsZXtcclxuICAgIGNvbG9yOiBncmF5O1xyXG59IiwiLnNpZ24taW4taW1nIHtcbiAgd2lkdGg6IDdlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5zaWduLWluLWF2YXRhciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDVlbTtcbiAgaGVpZ2h0OiA1ZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4ODBmZjtcbiAgYm94LXNoYWRvdzogMnB4IDNweCA1cHggIzg4ODg4ODtcbn1cblxuLnNpZ24taW4tcGVvcGxlIHtcbiAgY29sb3I6IGdyYXk7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/create-classes/sign-in-teacher/sign-in-teacher.page.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/create-classes/sign-in-teacher/sign-in-teacher.page.ts ***!
  \******************************************************************************/
/*! exports provided: SignInTeacherPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInTeacherPage", function() { return SignInTeacherPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/zr-services.service */ "./src/app/shared/services/zr-services.service.ts");
/* harmony import */ var _shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/local-storage.service */ "./src/app/shared/services/local-storage.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_common_baseui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/baseui */ "./src/app/common/baseui.ts");







let SignInTeacherPage = class SignInTeacherPage extends src_app_common_baseui__WEBPACK_IMPORTED_MODULE_6__["BaseUI"] {
    constructor(activatedRoute, zrServices, localStorageService, router, loadingController) {
        super();
        this.activatedRoute = activatedRoute;
        this.zrServices = zrServices;
        this.localStorageService = localStorageService;
        this.router = router;
        this.loadingController = loadingController;
        this.courseMembersCount = '';
        this.signCount = '';
        // 发起签到所需变量
        this.courseId = '';
        this.courseName = '';
        // 签到列表
        this.historySignList = [];
    }
    ngOnInit() {
        super.showLoading(this.loadingController, '请等待', 800);
        this.activatedRoute.queryParams.subscribe((result) => {
            // console.log('传入的参数：', result);
            this.courseId = result.courseId;
            this.courseName = result.courseName;
            this.courseMembersCount = result.courseMembersCount;
        });
        this.loadHistorySignList();
    }
    // 获取历史签到记录列表
    loadHistorySignList() {
        this.zrServices.getSignByCourseId(this.courseId).then((result) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log('here',result);
            if (result.code == '200') {
                this.signCount = result.data.length;
                for (let r of result.data) {
                    let s = {
                        signId: r.signId,
                        createDate: r.endTime,
                        courseMembersCount: this.courseMembersCount,
                        signCount: r.signedNumbers
                    };
                    this.historySignList.push(s); // 重构每次签到列表
                }
            }
        })).catch((error) => {
            console.log('获取签到列表失败');
        });
    }
    // 点击签到出发
    doSignIn() {
        let url = '/create-classes/sign-in-teacher/sign-in/';
        this.router.navigate([url], {
            queryParams: {
                courseId: this.courseId,
                courseName: this.courseName,
                courseMembersCount: this.courseMembersCount
            }
        });
    }
};
SignInTeacherPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_3__["ZrServicesService"] },
    { type: _shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
SignInTeacherPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-in-teacher',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-in-teacher.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-classes/sign-in-teacher/sign-in-teacher.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-in-teacher.page.scss */ "./src/app/pages/create-classes/sign-in-teacher/sign-in-teacher.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_3__["ZrServicesService"],
        _shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])
], SignInTeacherPage);



/***/ })

}]);
//# sourceMappingURL=sign-in-teacher-sign-in-teacher-module-es2015.js.map