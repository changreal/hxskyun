(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["class-detail-class-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-classes/class-detail/class-detail.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-classes/class-detail/class-detail.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>{{courseName}}</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/create-classes\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-card>\r\n    <!-- 班课头信息 -->\r\n    <ion-item lines='full'>\r\n      <ion-note slot=\"end\" class=\"ion-no-margin\">\r\n        <!-- <ion-button  expand=\"block\" fill=\"clear\" shape=\"round\" [routerLink]=\"['/create-classes/class-detail/edit-class']\"  [queryParams]=\"{courseId:courseId,course_name:courseName}\">\r\n          <ion-icon name=\"create-outline\"  color=\"primary\" slot=\"icon-only\"></ion-icon>\r\n        </ion-button> -->\r\n       \r\n        <ion-button  expand=\"block\" fill=\"clear\" shape=\"round\" [routerLink]=\"['/create-classes/qrcode']\"  [queryParams]=\"{courseId:courseId}\">\r\n          <ion-icon name=\"qr-code-outline\"  color=\"primary\" slot=\"icon-only\"></ion-icon>\r\n            <!-- <ion-icon name=\"scan-outline\" slot=\"icon-only\"></ion-icon> -->\r\n        </ion-button>\r\n        <ion-button  expand=\"block\" fill=\"clear\" shape=\"round\" [routerLink]=\"['/create-classes/class-detail/edit-class']\"  [queryParams]=\"{courseId:courseId,course_name:courseName}\">\r\n          <ion-icon name=\"create-outline\"  color=\"primary\" slot=\"icon-only\"></ion-icon>\r\n        </ion-button>\r\n      </ion-note>\r\n      <ion-thumbnail slot=\"start\">\r\n        <div class=\"profile_icon_orange\">{{courseName[0]}}</div>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h3>{{courseMajor}}</h3>\r\n        <h4>{{courseName}}</h4>\r\n        <p>{{courseTeacherName}}</p>\r\n        <p>\r\n          <span>{{courseSemester}}</span>\r\n        </p>\r\n       \r\n      </ion-label>\r\n     \r\n    </ion-item>\r\n\r\n  </ion-card>\r\n\r\n  <ion-list class=\"ion-padding\">\r\n\r\n    <!-- 内容部分 -->\r\n    <ion-item>\r\n      <ion-label  position=\"floating\">学习要求</ion-label>\r\n      <ion-text class=\"ion-padding-top\" color=\"medium\">\r\n        <p>{{courseDes}}</p>\r\n      </ion-text>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">学校院系</ion-label>\r\n      <ion-text class=\"ion-padding-top\" color=\"medium\">\r\n        <p>\r\n          {{courseSchool}}&nbsp;{{courseDepartment}}\r\n        </p>\r\n      </ion-text>\r\n    </ion-item>\r\n\r\n    <!-- 退出班课按钮 -->\r\n    <ion-button slot=\"start\" expand=\"block\" fill='outline' shape='round' class=\"ion-margin-top\" color=\"danger\" (click)=\"doSubmit()\" *ngIf=\"courseStatus!='已结课'\">\r\n      结束班课\r\n    </ion-button>\r\n\r\n  </ion-list>\r\n\r\n\r\n\r\n\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/join-classes/class-detail/class-detail.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/join-classes/class-detail/class-detail.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>班课详情</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/join-classes\" ></ion-back-button>\r\n      <!-- <ion-back-button (click)=\"onBack()\"></ion-back-button> -->\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-card [hidden]='!hasThisClass'>\r\n\r\n    <!-- 班课头信息 -->\r\n    <ion-card-header >\r\n      <ion-item lines='full'>\r\n        <ion-note slot=\"end\" class=\"ion-no-margin\">\r\n          <ion-button  expand=\"block\" fill=\"clear\" shape=\"round\" [routerLink]=\"['/create-classes/qrcode']\"  [queryParams]=\"{courseId:courseId}\">\r\n            <ion-icon name=\"qr-code-outline\"  color=\"primary\" slot=\"icon-only\"></ion-icon>\r\n              <!-- <ion-icon name=\"scan-outline\" slot=\"icon-only\"></ion-icon> -->\r\n          </ion-button>\r\n        </ion-note>\r\n        <ion-thumbnail slot=\"start\">\r\n          <!-- <img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==\"> -->\r\n          <div class=\"profile_icon_blue\">{{courseName}}</div>\r\n        </ion-thumbnail>\r\n        <ion-label>\r\n          <h3>{{courseMajor}}</h3>\r\n          <h4>{{courseName}}&nbsp;&nbsp;课程码：{{courseId}}</h4>\r\n          <p>{{courseTeacherName}}</p>\r\n          <p>\r\n            <span>2019-2020-2</span>  <span>学校课表班课</span>\r\n          </p>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-card-header>\r\n\r\n    <!-- 其他信息 -->\r\n    <ion-card-content >\r\n      <ion-list>\r\n        <ion-item lines='full'> \r\n          <ion-label>\r\n            <h3>学校院系</h3>\r\n            <p>{{courseSchool}}&nbsp;{{courseDepartment}} </p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item lines='full'> \r\n          <ion-label>\r\n            <h3>学习要求</h3>\r\n            <p>暂无</p>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n\r\n      <!-- 退出班课按钮 -->\r\n      <ion-button slot=\"start\" expand=\"block\" fill='outline' shape='round' class=\"ion-margin-top\" (click)=\"exitClass()\" >\r\n        退出班课\r\n      </ion-button>\r\n        \r\n    </ion-card-content>\r\n\r\n  </ion-card>\r\n  \r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/create-classes/class-detail/class-detail-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/create-classes/class-detail/class-detail-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ClassDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassDetailPageRoutingModule", function() { return ClassDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _class_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./class-detail.page */ "./src/app/pages/create-classes/class-detail/class-detail.page.ts");




const routes = [
    {
        path: '',
        component: _class_detail_page__WEBPACK_IMPORTED_MODULE_3__["ClassDetailPage"]
    },
    {
        path: 'edit-class',
        loadChildren: () => __webpack_require__.e(/*! import() | edit-class-edit-class-module */ "edit-class-edit-class-module").then(__webpack_require__.bind(null, /*! ./edit-class/edit-class.module */ "./src/app/pages/create-classes/class-detail/edit-class/edit-class.module.ts")).then(m => m.EditClassPageModule)
    }
];
let ClassDetailPageRoutingModule = class ClassDetailPageRoutingModule {
};
ClassDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ClassDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/create-classes/class-detail/class-detail.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/create-classes/class-detail/class-detail.module.ts ***!
  \**************************************************************************/
/*! exports provided: ClassDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassDetailPageModule", function() { return ClassDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _class_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./class-detail-routing.module */ "./src/app/pages/create-classes/class-detail/class-detail-routing.module.ts");
/* harmony import */ var _class_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./class-detail.page */ "./src/app/pages/create-classes/class-detail/class-detail.page.ts");







let ClassDetailPageModule = class ClassDetailPageModule {
};
ClassDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _class_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClassDetailPageRoutingModule"]
        ],
        declarations: [_class_detail_page__WEBPACK_IMPORTED_MODULE_6__["ClassDetailPage"]]
    })
], ClassDetailPageModule);



/***/ }),

/***/ "./src/app/pages/create-classes/class-detail/class-detail.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/create-classes/class-detail/class-detail.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NyZWF0ZS1jbGFzc2VzL2NsYXNzLWRldGFpbC9jbGFzcy1kZXRhaWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/create-classes/class-detail/class-detail.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/create-classes/class-detail/class-detail.page.ts ***!
  \************************************************************************/
/*! exports provided: ClassDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassDetailPage", function() { return ClassDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/zr-services.service */ "./src/app/shared/services/zr-services.service.ts");
/* harmony import */ var _shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/local-storage.service */ "./src/app/shared/services/local-storage.service.ts");
/* harmony import */ var _shared_services_toast_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/toast-service.service */ "./src/app/shared/services/toast-service.service.ts");
/* harmony import */ var src_app_common_baseui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/baseui */ "./src/app/common/baseui.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_shared_services_event_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/event.service */ "./src/app/shared/services/event.service.ts");









let ClassDetailPage = class ClassDetailPage extends src_app_common_baseui__WEBPACK_IMPORTED_MODULE_6__["BaseUI"] {
    constructor(activatedRoute, zrServices, localStorageService, toastService, router, eventService, loadingController) {
        super();
        this.activatedRoute = activatedRoute;
        this.zrServices = zrServices;
        this.localStorageService = localStorageService;
        this.toastService = toastService;
        this.router = router;
        this.eventService = eventService;
        this.loadingController = loadingController;
        this.semesters = [
            { id: '1', name: '2019-2020-1' },
            { id: '2', name: '2019-2020-2' },
            { id: '3', name: '2020-2021-1' },
            { id: '4', name: '2020-2021-2' },
            { id: '5', name: '2021-2022-1' },
        ];
        this.courseName = '';
        this.courseSchool = ''; //学校
        this.courseSemester = '2019-2020-2'; //学期
        this.courseMajor = ''; //专业（班级）
        this.courseCourseName = ''; //课程名
        this.courseDes = ''; //学习要求
        this.courseDepartment = ''; //学校院系
        this.courseTeacherName = '';
        this.courseStatus = '';
        this.courseId = '';
        this.userId = '';
    }
    ngOnInit() {
        super.showLoading(this.loadingController, '请等待', 800);
        // 传入课程编号，从而编辑该门课程
        this.activatedRoute.queryParams.subscribe((result) => {
            this.courseId = result.courseId;
            this.courseName = result.courseName;
        });
        this.getCourseInfo();
    }
    ionViewDidEnter() {
        // this.activatedRoute.queryParams.subscribe((result:any) => {
        //   this.courseId = result.courseId;
        // });
        //这两个方法在将要进入界面的时候会触发,相当于是局部刷新,整个页面不会跟着刷新
        // this.getCourseInfo();   
    }
    // ionViewDidLeave(){
    //   console.log('createclass-detail leave')
    //   this.eventService.event.emit('memberupdate');
    // }
    // 查询班课信息ke
    getCourseInfo() {
        // 根据id获取该班课的信息
        this.zrServices.getCourseByCourseId(this.courseId).then((result) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log(result);
            if (result.code == '200') {
                this.courseName = result.data.courseName;
                this.courseSchool = result.data.school;
                this.courseSemester = result.data.courseSemester;
                this.courseMajor = result.data.major;
                this.courseDepartment = result.data.department;
                this.courseDes = result.data.classDes;
                this.courseTeacherName = result.data.teacherName;
                this.courseStatus = result.data.endClassStatus;
            }
        })).catch((error) => {
            this.toastService.errorToast('查找班课信息失败');
            // console.log('查找班课信息失败', error);
        });
    }
    // 结束班课
    doSubmit() {
        // 结束班课相关接口
        let theCourseInfo = {}; // 新建课程信息
        theCourseInfo['teachId'] = this.localStorageService.getStore('uid', '2');
        theCourseInfo['courseId'] = this.courseId;
        theCourseInfo['courseSemester'] = this.courseSemester;
        theCourseInfo['major'] = this.courseMajor;
        theCourseInfo['courseName'] = this.courseName;
        theCourseInfo['classDes'] = this.courseDes;
        theCourseInfo['school'] = this.courseSchool;
        theCourseInfo['department'] = this.courseDepartment;
        theCourseInfo['endClassStatus'] = '已结课';
        super.showLoading(this.loadingController, '请等待', 1000);
        // 提交到service更新
        this.zrServices.postEidtCourseByCourseId(theCourseInfo).then((result) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('课程的返回信息', result);
            // 请求返回状态
            if (result.code == '200') {
                // 跳出提示框提示修改成功！
                let url = '/tabs/create-classes';
                // let url = '/tabs/create-classes/class-detail'
                let params = {
                    courseId: this.courseId
                };
                // this.toastService.presentAlertConfirm('修改班课成功！', url, params)  //回调函数跳转
                this.toastService.presentAlertConfirm('确定要结束' + this.courseName + '课程吗？', url); //回调函数跳转
            }
            else {
                console.log(result.msg);
            }
        })).catch((error) => {
            console.log('结束课程失败', error);
        });
    }
};
ClassDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_3__["ZrServicesService"] },
    { type: _shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] },
    { type: _shared_services_toast_service_service__WEBPACK_IMPORTED_MODULE_5__["ToastServiceProvider"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_shared_services_event_service__WEBPACK_IMPORTED_MODULE_8__["EventService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] }
];
ClassDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-class-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./class-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-classes/class-detail/class-detail.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./class-detail.page.scss */ "./src/app/pages/create-classes/class-detail/class-detail.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_3__["ZrServicesService"],
        _shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"],
        _shared_services_toast_service_service__WEBPACK_IMPORTED_MODULE_5__["ToastServiceProvider"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_shared_services_event_service__WEBPACK_IMPORTED_MODULE_8__["EventService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]])
], ClassDetailPage);



/***/ }),

/***/ "./src/app/pages/join-classes/class-detail/class-detail-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/join-classes/class-detail/class-detail-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: ClassDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassDetailPageRoutingModule", function() { return ClassDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _class_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./class-detail.page */ "./src/app/pages/join-classes/class-detail/class-detail.page.ts");




const routes = [
    {
        path: '',
        component: _class_detail_page__WEBPACK_IMPORTED_MODULE_3__["ClassDetailPage"]
    }
];
let ClassDetailPageRoutingModule = class ClassDetailPageRoutingModule {
};
ClassDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ClassDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/join-classes/class-detail/class-detail.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/join-classes/class-detail/class-detail.module.ts ***!
  \************************************************************************/
/*! exports provided: ClassDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassDetailPageModule", function() { return ClassDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _class_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./class-detail-routing.module */ "./src/app/pages/join-classes/class-detail/class-detail-routing.module.ts");
/* harmony import */ var _class_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./class-detail.page */ "./src/app/pages/join-classes/class-detail/class-detail.page.ts");







let ClassDetailPageModule = class ClassDetailPageModule {
};
ClassDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _class_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClassDetailPageRoutingModule"]
        ],
        declarations: [_class_detail_page__WEBPACK_IMPORTED_MODULE_6__["ClassDetailPage"]]
    })
], ClassDetailPageModule);



/***/ }),

/***/ "./src/app/pages/join-classes/class-detail/class-detail.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/join-classes/class-detail/class-detail.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2pvaW4tY2xhc3Nlcy9jbGFzcy1kZXRhaWwvY2xhc3MtZGV0YWlsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/join-classes/class-detail/class-detail.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/join-classes/class-detail/class-detail.page.ts ***!
  \**********************************************************************/
/*! exports provided: ClassDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassDetailPage", function() { return ClassDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/zr-services.service */ "./src/app/shared/services/zr-services.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_common_baseui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/baseui */ "./src/app/common/baseui.ts");
/* harmony import */ var src_app_shared_services_mylocalstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/mylocalstorage.service */ "./src/app/shared/services/mylocalstorage.service.ts");
/* harmony import */ var src_app_shared_services_event_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/event.service */ "./src/app/shared/services/event.service.ts");









let ClassDetailPage = class ClassDetailPage extends src_app_common_baseui__WEBPACK_IMPORTED_MODULE_5__["BaseUI"] {
    constructor(activatedRoute, localStorageService, zrServices, toastController, router, eventService, loadingController) {
        super();
        this.activatedRoute = activatedRoute;
        this.localStorageService = localStorageService;
        this.zrServices = zrServices;
        this.toastController = toastController;
        this.router = router;
        this.eventService = eventService;
        this.loadingController = loadingController;
        // 临时变量
        this.userId = '';
        this.hasThisClass = false;
        this.submited = false;
    }
    ngOnInit() {
        // this.userId=this.localStorageService.get('uid','')
        super.showLoading(this.loadingController, '请等待', 800);
        this.activatedRoute.queryParams.subscribe((result) => {
            this.courseId = result.courseId;
        });
    }
    ionViewDidLeave() {
        // console.log('joinclass leave')
        this.eventService.event.emit('classupdate');
    }
    ionViewWillEnter() {
        this.userId = this.localStorageService.get('uid', '');
        this.loadCourseInfo();
    }
    loadCourseInfo() {
        this.zrServices.getCourseByCourseId(this.courseId).then((result) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log('here:', result.data);
            if (result.success) {
                this.hasThisClass = true;
                this.courseName = result.data.courseName;
                this.courseMajor = result.data.major;
                this.courseSchool = result.data.school;
                this.courseTeacherName = result.data.teacherName;
                this.courseDepartment = result.data.department;
            }
        })).catch((error) => {
            console.log('获取课程信息失败', error);
        });
    }
    exitClass() {
        // console.log('exitclass work')
        let params = {
            "courseId": this.courseId,
            "studentId": this.userId
        };
        super.showLoading(this.loadingController, '请等待', 800);
        this.zrServices.exitClass(params).then((result) => {
            // console.log('resulet'+result.code)
            if (result.code == '200') {
                super.showToast(this.toastController, '退出班课成功');
                location.replace('/tabs/join-classes');
                // this.router.navigateByUrl('/tabs/join-classes') 
            }
        }).catch((error) => {
            super.showToast(this.toastController, '退出班课失败');
        });
    }
    onBack() {
        this.router.navigateByUrl("/join-classes/members", {
            queryParams: {
                courseId: this.courseId
            }
        });
    }
};
ClassDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_shared_services_mylocalstorage_service__WEBPACK_IMPORTED_MODULE_6__["MylocalstorageService"] },
    { type: _shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_3__["ZrServicesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_shared_services_event_service__WEBPACK_IMPORTED_MODULE_7__["EventService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
ClassDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-class-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./class-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/join-classes/class-detail/class-detail.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./class-detail.page.scss */ "./src/app/pages/join-classes/class-detail/class-detail.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_shared_services_mylocalstorage_service__WEBPACK_IMPORTED_MODULE_6__["MylocalstorageService"],
        _shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_3__["ZrServicesService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_shared_services_event_service__WEBPACK_IMPORTED_MODULE_7__["EventService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
], ClassDetailPage);



/***/ })

}]);
//# sourceMappingURL=class-detail-class-detail-module-es2015.js.map