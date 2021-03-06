(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["join-classes-join-classes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/join-classes/join-classes.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/join-classes/join-classes.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>我加入的班课</ion-title>\r\n     <!-- 加入按钮 -->\r\n    <ion-buttons slot=\"end\" size='large'>\r\n      \r\n      <ion-buttons slot=\"start\">\r\n        <!-- 点击进入输入班课号页面 -->\r\n        <ion-button color=\"primary\"  [routerLink]=\"['/tabs/join-classes/join-class']\" >\r\n          <!-- <ion-icon slot=\"icon-only\" name=\"add\" size='large' ></ion-icon> -->\r\n          <!-- <ion-icon name=\"arrow-forward-outline\" slot=\"icon-only\" size='large'></ion-icon> -->\r\n          <!-- <ion-icon name=\"chevron-forward-circle-outline\" slot=\"icon-only\" size='large'></ion-icon> -->\r\n          <ion-icon name=\"enter-outline\"  slot=\"icon-only\" size='large'></ion-icon>\r\n        </ion-button>\r\n        <!-- 二维码扫描加入班课 -->\r\n        <!-- <ion-button color=\"primary\" [routerLink]=\"['/join-classes/join-class']\" > -->\r\n         \r\n        <ion-button color=\"primary\"   (click)=\"brscanner()\" >\r\n          <!-- <ion-icon name=\"scan-outline\" slot=\"icon-only\"></ion-icon> -->\r\n          <ion-icon name=\"barcode-outline\" size='large' slot=\"icon-only\"></ion-icon>\r\n        </ion-button>\r\n\r\n      </ion-buttons>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n    <!-- 下拉刷新组件 -->\r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"loadCourseData($event)\" >\r\n      <ion-refresher-content\r\n        pullingIcon=\"arrow-dropdown\"\r\n        pullingText=\"下拉刷新\"\r\n        refreshingSpinner=\"circles\"\r\n        refreshingText=\"加载中...\">\r\n      </ion-refresher-content>\r\n    </ion-refresher>\r\n\r\n  <!-- 课程列表 -->\r\n\r\n  <ion-list *ngIf=\"courses_length\">\r\n\r\n    <ion-item button detail lines='full' *ngFor=\"let course of courses\" routerLink=\"/join-classes/members\"  [queryParams]=\"{courseId:course.courseId, courseName:course.courseName}\" >\r\n      <!-- 头像部分 -->\r\n      <ion-thumbnail slot=\"start\">\r\n        <div class=\"profile_icon_blue\">{{course.courseName[0]}}</div>\r\n      </ion-thumbnail>\r\n\r\n      <!-- 内容部分 -->\r\n      <ion-label>\r\n        <!-- 文字部分 -->\r\n        <ion-text color=\"primary\">\r\n          <h3>{{course.courseName}}</h3>\r\n        </ion-text>\r\n        <ion-text>\r\n          <p>{{course.teacherName}}&nbsp;&nbsp;&nbsp;<span>{{course.major}}</span></p>\r\n        </ion-text>\r\n        <ion-text >\r\n          <p>{{course.courseSemester}} </p>\r\n        </ion-text>\r\n\r\n        <!-- 按钮部分 -->\r\n        <!-- <div>\r\n          <ion-buttons slot=\"secondary\" >\r\n            <ion-button slot=\"end\" size=\"small\" > \r\n              <ion-icon name=\"hand-right-outline\" slot=\"start\"></ion-icon>\r\n              签到\r\n            </ion-button>\r\n          </ion-buttons>\r\n        </div> -->\r\n      </ion-label>\r\n      <!-- 内容部分结束 -->\r\n\r\n    </ion-item>\r\n\r\n\r\n\r\n  </ion-list>\r\n\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/join-classes/join-classes-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/join-classes/join-classes-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: JoinClassesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinClassesPageRoutingModule", function() { return JoinClassesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _join_classes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./join-classes.page */ "./src/app/pages/join-classes/join-classes.page.ts");




const routes = [
    {
        path: '',
        component: _join_classes_page__WEBPACK_IMPORTED_MODULE_3__["JoinClassesPage"],
    },
    // {
    //   path: 'join-tabs',
    //   loadChildren: () => import('./join-tabs/join-tabs.module').then( m => m.JoinTabsPageModule)
    // },
    {
        path: 'members',
        loadChildren: () => Promise.all(/*! import() | members-members-module */[__webpack_require__.e("common"), __webpack_require__.e("members-members-module")]).then(__webpack_require__.bind(null, /*! ./members/members.module */ "./src/app/pages/join-classes/members/members.module.ts")).then(m => m.MembersPageModule)
    },
    {
        path: 'class-detail',
        loadChildren: () => Promise.all(/*! import() | class-detail-class-detail-module */[__webpack_require__.e("common"), __webpack_require__.e("class-detail-class-detail-module")]).then(__webpack_require__.bind(null, /*! ./class-detail/class-detail.module */ "./src/app/pages/join-classes/class-detail/class-detail.module.ts")).then(m => m.ClassDetailPageModule)
    },
    {
        path: 'join-class',
        loadChildren: () => __webpack_require__.e(/*! import() | join-class-join-class-module */ "join-class-join-class-module").then(__webpack_require__.bind(null, /*! ./join-class/join-class.module */ "./src/app/pages/join-classes/join-class/join-class.module.ts")).then(m => m.JoinClassPageModule)
    },
    {
        path: 'join',
        loadChildren: () => __webpack_require__.e(/*! import() | join-join-module */ "join-join-module").then(__webpack_require__.bind(null, /*! ./join/join.module */ "./src/app/pages/join-classes/join/join.module.ts")).then(m => m.JoinPageModule)
    },
    {
        path: 'sign-in',
        loadChildren: () => Promise.all(/*! import() | sign-in-sign-in-module */[__webpack_require__.e("common"), __webpack_require__.e("sign-in-sign-in-module")]).then(__webpack_require__.bind(null, /*! ./sign-in/sign-in.module */ "./src/app/pages/join-classes/sign-in/sign-in.module.ts")).then(m => m.SignInPageModule)
    },
];
let JoinClassesPageRoutingModule = class JoinClassesPageRoutingModule {
};
JoinClassesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], JoinClassesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/join-classes/join-classes.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/join-classes/join-classes.module.ts ***!
  \***********************************************************/
/*! exports provided: JoinClassesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinClassesPageModule", function() { return JoinClassesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _join_classes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./join-classes-routing.module */ "./src/app/pages/join-classes/join-classes-routing.module.ts");
/* harmony import */ var _join_classes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./join-classes.page */ "./src/app/pages/join-classes/join-classes.page.ts");
/* harmony import */ var _search_search_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../search/search.module */ "./src/app/pages/search/search.module.ts");
/* harmony import */ var _members_members_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./members/members.module */ "./src/app/pages/join-classes/members/members.module.ts");







// 引入自定义模块


let JoinClassesPageModule = class JoinClassesPageModule {
};
JoinClassesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            // ComponentsModule,
            _join_classes_routing_module__WEBPACK_IMPORTED_MODULE_5__["JoinClassesPageRoutingModule"],
            _search_search_module__WEBPACK_IMPORTED_MODULE_7__["SearchPageModule"],
            _members_members_module__WEBPACK_IMPORTED_MODULE_8__["MembersPageModule"],
        ],
        declarations: [_join_classes_page__WEBPACK_IMPORTED_MODULE_6__["JoinClassesPage"]],
    })
], JoinClassesPageModule);



/***/ }),

/***/ "./src/app/pages/join-classes/join-classes.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/join-classes/join-classes.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2pvaW4tY2xhc3Nlcy9qb2luLWNsYXNzZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/join-classes/join-classes.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/join-classes/join-classes.page.ts ***!
  \*********************************************************/
/*! exports provided: JoinClassesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinClassesPage", function() { return JoinClassesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/zr-services.service */ "./src/app/shared/services/zr-services.service.ts");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var src_app_shared_services_mylocalstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/mylocalstorage.service */ "./src/app/shared/services/mylocalstorage.service.ts");
/* harmony import */ var src_app_shared_services_event_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/event.service */ "./src/app/shared/services/event.service.ts");
/* harmony import */ var _shared_services_toast_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/toast-service.service */ "./src/app/shared/services/toast-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_common_baseui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/common/baseui */ "./src/app/common/baseui.ts");










let JoinClassesPage = class JoinClassesPage extends src_app_common_baseui__WEBPACK_IMPORTED_MODULE_9__["BaseUI"] {
    constructor(zrServices, router, barcodeScanner, localStorageService, eventService, toastService, loadingController) {
        super();
        this.zrServices = zrServices;
        this.router = router;
        this.barcodeScanner = barcodeScanner;
        this.localStorageService = localStorageService;
        this.eventService = eventService;
        this.toastService = toastService;
        this.loadingController = loadingController;
        this.userId = '';
        this.courses_length = 0;
    }
    ngOnInit() {
        // this.userId=this.localStorageService.get('uid','')
        // this.loadCourseData()
    }
    ionViewWillEnter() {
        this.userId = this.localStorageService.get('uid', '');
        this.loadCourseData(null);
        this.eventService.event.on('classupdate', () => {
            this.loadCourseData(null);
        });
    }
    loadCourseData(event) {
        this.zrServices.getCourseById(this.userId).then((result) => {
            // console.log('根据用户号，获取该用户已加入的课程列表', result);
            if (result.code == '200') {
                this.courses = result.data;
                this.courses_length = this.courses.length;
            }
            else {
                this.toastService.errorToast(result.msg);
            }
        }).catch((error) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.toastService.errorToast('请求课程列表出现错误：');
        })).finally(() => {
            if (event != null) { //如果不是第一次调用，则需要通知refresher控件结束工作
                event.target.complete();
            }
        });
    }
    brscanner() {
        this.barcodeScanner.scan().then(barcodeData => {
            this.courseId = barcodeData['text'];
            // console.log(this.courseId)
            // alert(JSON.stringify(barcodeData));
            this.router.navigate(['/tabs/join-classes/join'], { queryParams: { cId: this.courseId
                } });
        }).catch(err => {
            this.toastService.errorAlert(err);
        });
    }
};
JoinClassesPage.ctorParameters = () => [
    { type: _shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_3__["ZrServicesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"] },
    { type: src_app_shared_services_mylocalstorage_service__WEBPACK_IMPORTED_MODULE_5__["MylocalstorageService"] },
    { type: src_app_shared_services_event_service__WEBPACK_IMPORTED_MODULE_6__["EventService"] },
    { type: _shared_services_toast_service_service__WEBPACK_IMPORTED_MODULE_7__["ToastServiceProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] }
];
JoinClassesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-join-classes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./join-classes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/join-classes/join-classes.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./join-classes.page.scss */ "./src/app/pages/join-classes/join-classes.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_3__["ZrServicesService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"],
        src_app_shared_services_mylocalstorage_service__WEBPACK_IMPORTED_MODULE_5__["MylocalstorageService"],
        src_app_shared_services_event_service__WEBPACK_IMPORTED_MODULE_6__["EventService"],
        _shared_services_toast_service_service__WEBPACK_IMPORTED_MODULE_7__["ToastServiceProvider"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"]])
], JoinClassesPage);



/***/ })

}]);
//# sourceMappingURL=join-classes-join-classes-module-es2015.js.map