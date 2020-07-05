(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["members-members-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-classes/members/members.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-classes/members/members.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/create-classes\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{courseName}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"loadMembers($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"arrow-dropdown\"\r\n      pullingText=\"下拉刷新\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"加载中...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <!-- 信息操作栏 -->\r\n  <ion-card>\r\n\r\n    <!-- 点击部分 -->\r\n    <ion-item>\r\n      <ion-toolbar>\r\n        <ion-row class=\"ion-align-items-center\"> \r\n          <ion-col size='7' *ngIf=\"courseStatus!='已结课'\">\r\n            <ion-button  shape='round'  color=\"primary\" fill=\"solid\" [routerLink]=\"['/create-classes/sign-in-teacher']\"  [queryParams]=\"{courseId:courseId, courseMembersCount:members_count, courseName:courseName}\" >\r\n              <!-- <ion-icon  name=\"star\" size='small'></ion-icon> -->\r\n              <ion-icon name=\"hand-left-outline\" ></ion-icon>\r\n               <ion-label>&nbsp;发起签到&nbsp;</ion-label>\r\n            </ion-button>\r\n          </ion-col>\r\n\r\n          <ion-col size='5'>\r\n            <ion-button shape='round'  color=\"warning\" fill=\"solid\" [routerLink]=\"['/create-classes/class-detail']\" [queryParams]=\"{courseId:courseId,courseName:courseName}\">\r\n              <ion-icon name=\"grid-outline\"></ion-icon>\r\n              <ion-label>&nbsp;班课详情&nbsp;</ion-label>\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-toolbar>\r\n    </ion-item>\r\n\r\n  </ion-card>\r\n\r\n\r\n  <!-- 成员列表 -->\r\n  <ion-list lines='full'>\r\n\r\n    <!-- 列表头 -->\r\n    <ion-list-header lines='none' class=\"ion-padding-horizontal\" >\r\n        <ion-button (click)=\"toggleShow()\"  fill=\"clear\">\r\n          <ion-label color=\"primary\">切换为按学号/经验值显示</ion-label>\r\n        </ion-button>\r\n    </ion-list-header>\r\n\r\n    <ion-item-divider>\r\n      <ion-label>成员总数</ion-label>\r\n      <ion-label class=\"ion-text-right\">&nbsp;&nbsp;{{members_count}}人</ion-label>\r\n    </ion-item-divider>\r\n\r\n    <!-- 成员信息部分 --> \r\n    \r\n\r\n    <ion-item  class=\"member-item\" *ngFor=\"let member of members;let i=index\" >\r\n      <!-- 头像部分 -->\r\n      <ion-note slot=\"start\" class=\"ion-no-margin ion-margin-vertical\">{{i+1}}</ion-note>\r\n      <ion-thumbnail slot=\"start\" class=\"mythumbnail\">\r\n        <div class=\"profile_icon_orange\">{{member.studentName[0]}}</div>\r\n      </ion-thumbnail>\r\n      <!-- 内容部分 -->\r\n      <ion-label>\r\n        <h3>{{member.studentName}}</h3>\r\n        <p>{{member.studentId}} <span class=\"exp ion-float-right exp-color\">{{member.studentExp}}&nbsp;经验值</span></p>\r\n        <p>签到<span>{{member.signedNumbers}}</span>&nbsp;&nbsp; 缺勤<span>{{member.unSignedNumbers}}</span></p>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n\r\n\r\n  \r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/create-classes/members/members-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/create-classes/members/members-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: MembersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersPageRoutingModule", function() { return MembersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _members_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./members.page */ "./src/app/pages/create-classes/members/members.page.ts");




const routes = [
    {
        path: '',
        component: _members_page__WEBPACK_IMPORTED_MODULE_3__["MembersPage"]
    }
];
let MembersPageRoutingModule = class MembersPageRoutingModule {
};
MembersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MembersPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/create-classes/members/members.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/create-classes/members/members.module.ts ***!
  \****************************************************************/
/*! exports provided: MembersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersPageModule", function() { return MembersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _members_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./members-routing.module */ "./src/app/pages/create-classes/members/members-routing.module.ts");
/* harmony import */ var _members_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./members.page */ "./src/app/pages/create-classes/members/members.page.ts");







let MembersPageModule = class MembersPageModule {
};
MembersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _members_routing_module__WEBPACK_IMPORTED_MODULE_5__["MembersPageRoutingModule"]
        ],
        declarations: [_members_page__WEBPACK_IMPORTED_MODULE_6__["MembersPage"]]
    })
], MembersPageModule);



/***/ }),

/***/ "./src/app/pages/create-classes/members/members.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/create-classes/members/members.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".exp-color {\n  color: #ef9c05;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3JlYXRlLWNsYXNzZXMvbWVtYmVycy9EOlxcaHhza3l1blxcbW9iaWxlXFxkYW95dW4vc3JjXFxhcHBcXHBhZ2VzXFxjcmVhdGUtY2xhc3Nlc1xcbWVtYmVyc1xcbWVtYmVycy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NyZWF0ZS1jbGFzc2VzL21lbWJlcnMvbWVtYmVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jcmVhdGUtY2xhc3Nlcy9tZW1iZXJzL21lbWJlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cC1jb2xvcntcclxuICAgIGNvbG9yOiAjZWY5YzA1XHJcbn0iLCIuZXhwLWNvbG9yIHtcbiAgY29sb3I6ICNlZjljMDU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/create-classes/members/members.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/create-classes/members/members.page.ts ***!
  \**************************************************************/
/*! exports provided: MembersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersPage", function() { return MembersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/zr-services.service */ "./src/app/shared/services/zr-services.service.ts");
/* harmony import */ var _shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/local-storage.service */ "./src/app/shared/services/local-storage.service.ts");
/* harmony import */ var _shared_services_toast_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/toast-service.service */ "./src/app/shared/services/toast-service.service.ts");
/* harmony import */ var _shared_services_event_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/event.service */ "./src/app/shared/services/event.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_common_baseui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common/baseui */ "./src/app/common/baseui.ts");









let MembersPage = class MembersPage extends src_app_common_baseui__WEBPACK_IMPORTED_MODULE_8__["BaseUI"] {
    constructor(activatedRoute, zrServices, localStorageService, toastService, router, eventService, loadingController) {
        super();
        this.activatedRoute = activatedRoute;
        this.zrServices = zrServices;
        this.localStorageService = localStorageService;
        this.toastService = toastService;
        this.router = router;
        this.eventService = eventService;
        this.loadingController = loadingController;
        this.userId = '';
        this.courseId = '';
        this.courseName = '';
        this.members_count = '';
        this.sort_flag = true; // 默认按经验值绑定
        this.courseStatus = '';
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((result) => {
            this.courseId = result.courseId;
            this.courseName = result.courseName;
        });
        this.loadCourseInfo();
        this.loadMembers(null);
        super.showLoading(this.loadingController, '请等待', 800);
    }
    ionViewWillEnter() {
        this.activatedRoute.queryParams.subscribe((result) => {
            this.courseId = result.courseId;
            this.courseName = result.courseName;
        });
        this.eventService.event.on('memberupdate', () => {
            this.loadCourseInfo();
            this.loadMembers(null);
            super.showLoading(this.loadingController, '请等待', 800);
        });
    }
    // ionViewWillEnter() {
    //   this.activatedRoute.queryParams.subscribe((result) => {
    //     this.courseId = result.courseId;
    //     this.courseName = result.courseName
    //   })
    //   this.loadCourseInfo()
    //   this.loadMembers(null) 
    // }
    // 获取课程信息
    loadCourseInfo() {
        // 根据id获取该班课的信息
        this.zrServices.getCourseByCourseId(this.courseId).then((result) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log(result);
            if (result.code == '200') {
                this.courseStatus = result.data.endClassStatus;
            }
        })).catch((error) => {
            console.log('查找班课信息失败', error);
        });
    }
    loadMembers(event) {
        this.zrServices.getMembersByCourseId(this.courseId).then((result) => {
            // console.log( '成员返回为：', result);
            this.members = result.data;
            this.members_count = result.data.length;
            // 排序
            this.sortMembers();
        }).catch((error) => {
            console.log('获取', this.courseName, '课程信息失败');
        }).finally(() => {
            if (event != null) {
                event.target.complete();
            }
        });
    }
    // 切换显示
    toggleShow() {
        this.sort_flag = !this.sort_flag;
        this.sortMembers();
    }
    sortMembers() {
        if (this.sort_flag == true) {
            this.members.sort((a, b) => {
                return b.studentExp - a.studentExp; //经验值大到小
            });
        }
        else {
            this.members.sort((a, b) => {
                return a.studentId - b.studentId; //学号小到大
            });
        }
    }
};
MembersPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_3__["ZrServicesService"] },
    { type: _shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] },
    { type: _shared_services_toast_service_service__WEBPACK_IMPORTED_MODULE_5__["ToastServiceProvider"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_event_service__WEBPACK_IMPORTED_MODULE_6__["EventService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] }
];
MembersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-members',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./members.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-classes/members/members.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./members.page.scss */ "./src/app/pages/create-classes/members/members.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_3__["ZrServicesService"],
        _shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"],
        _shared_services_toast_service_service__WEBPACK_IMPORTED_MODULE_5__["ToastServiceProvider"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _shared_services_event_service__WEBPACK_IMPORTED_MODULE_6__["EventService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]])
], MembersPage);



/***/ })

}]);
//# sourceMappingURL=members-members-module-es2015.js.map