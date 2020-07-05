(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-in-sign-in-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-classes/sign-in-teacher/sign-in/sign-in.page.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-classes/sign-in-teacher/sign-in/sign-in.page.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"onBack()\">\r\n        <ion-icon name=\"arrow-back-outline\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>{{courseName}}签到</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n\r\n<ion-content>\r\n  \r\n  <!-- 签到时间设置 -->\r\n  <ion-item-divider>\r\n    <ion-label>\r\n      签到时间设置\r\n    </ion-label>\r\n  </ion-item-divider>\r\n\r\n    <ion-item>\r\n      <ion-label>签到分钟</ion-label>\r\n      <!-- <ion-input type=\"text\" placeholder=\"3\" value=\"3\"></ion-input> -->\r\n      <ion-input type='number' clearInput  [(ngModel)]=\"duration\"  name='duration' placeholder='请输入分钟数' required></ion-input>\r\n    </ion-item>\r\n    \r\n\r\n  <!-- 签到区域 -->\r\n  <ion-item-divider>\r\n    <ion-label>\r\n      {{courseName}}签到情况\r\n    </ion-label>\r\n  </ion-item-divider>\r\n  <ion-item>\r\n    <!-- <ion-toolbar>\r\n      <ion-title class=\"ion-text-center\"><span>16</span>/<span>48</span></ion-title>\r\n    </ion-toolbar> -->\r\n\r\n    <!-- <ion-label>Awesome Label</ion-label> -->\r\n    <ion-text >\r\n      <h5 style=\"color: darkslateblue;\">\r\n        每5秒更新一次\r\n      </h5>\r\n      <p>已签到：<span >{{signCount}}</span>人</p>\r\n      <p>总人数：<span>{{courseMembersCount}}</span>&nbsp;人</p>\r\n    </ion-text>\r\n    \r\n  </ion-item>\r\n\r\n  <!-- 局部刷新，不一定用哈 -->\r\n  <!-- <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\" mode='ios' [hidden]=\"isStrat\">\r\n    <ion-fab-button color=\"warning\" (click)=\"doRefresh()\">\r\n      <ion-icon name=\"refresh-outline\">点击刷新</ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab> -->\r\n\r\n\r\n  \r\n\r\n  \r\n  \r\n</ion-content>\r\n\r\n<ion-footer>\r\n\r\n  <ion-toolbar  class=\"ion-margin-vertical\">\r\n\r\n      <ion-button  #cancelButton (click)=\"doCancelSignIn()\" [disabled]=\"!isStart\" fill='outline' size='large' shape='round' color=\"dark\" class=\"ion-padding-start\">\r\n        <ion-label>放弃</ion-label>\r\n      </ion-button>\r\n  \r\n      <ion-button #startButton (click)=\"doSignIn()\"  [disabled]=\"isStart\" fill='outline' size='large' shape='round' color=\"primary\" class=\"ion-margin-start ion-padding-start\">\r\n        <ion-label>开始</ion-label>\r\n      </ion-button>\r\n      \r\n  \r\n      <ion-button #finishButton (click)=\"doEndSignIn()\" [disabled]=\"!isStart\"  fill='outline' size='large' slot=\"end\" shape='round' color=\"danger\" class=\"ion-padding-start ion-margin-end\" >\r\n        <ion-label>结束</ion-label>\r\n      </ion-button>\r\n    \r\n\r\n      \r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/join-classes/sign-in/sign-in.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/join-classes/sign-in/sign-in.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/join-classes\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{courseName}}签到</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <ion-item lines='none'  class=\"ion-margin\" button (click)=\"doSignIn()\" [disabled]=\"hasSigned\">\r\n      <ion-label class=\"ion-padding-vertical\"  color=\"primary\">\r\n        <!-- <ion-button  expand=\"block\" fill=\"clear\" size='large' shape=\"round\"> -->\r\n          <ion-avatar class=\"ion-padding-vertical sign-in-avatar ion-text-center\"   >\r\n            <ion-icon name=\"checkbox-outline\" size='large'></ion-icon>\r\n            <h5>签到</h5>\r\n          </ion-avatar>\r\n        <!-- </ion-button> -->\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    \r\n  <!-- 签到列表 -->\r\n  <ion-list lines='full'>\r\n\r\n    <!-- 列表头 -->\r\n    <ion-list-header lines='full' class=\"ion-padding-horizontal\">\r\n      <ion-label>{{courseName}}历史签到记录</ion-label>\r\n      <ion-label class=\"ion-text-right\" color=\"primary\">{{signCount}}次</ion-label>\r\n    </ion-list-header>\r\n\r\n    <!-- 内容部分 -->\r\n    <ion-item *ngFor=\"let item of myInfo\">\r\n      <ion-label >\r\n        <h4><time>{{item.endTime | date:'yyyy-MM-dd'}}</time>&nbsp;签到 </h4>\r\n        <p><time> {{item.endTime | date:'HH:mm:ss'}} </time> <span class=\"exp ion-float-right\">{{item.signStatus}}</span> </p>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/create-classes/sign-in-teacher/sign-in/sign-in-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/create-classes/sign-in-teacher/sign-in/sign-in-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: SignInPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageRoutingModule", function() { return SignInPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-in.page */ "./src/app/pages/create-classes/sign-in-teacher/sign-in/sign-in.page.ts");




const routes = [
    {
        path: '',
        component: _sign_in_page__WEBPACK_IMPORTED_MODULE_3__["SignInPage"]
    }
];
let SignInPageRoutingModule = class SignInPageRoutingModule {
};
SignInPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignInPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/create-classes/sign-in-teacher/sign-in/sign-in.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/create-classes/sign-in-teacher/sign-in/sign-in.module.ts ***!
  \********************************************************************************/
/*! exports provided: SignInPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageModule", function() { return SignInPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-in-routing.module */ "./src/app/pages/create-classes/sign-in-teacher/sign-in/sign-in-routing.module.ts");
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-in.page */ "./src/app/pages/create-classes/sign-in-teacher/sign-in/sign-in.page.ts");







let SignInPageModule = class SignInPageModule {
};
SignInPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignInPageRoutingModule"]
        ],
        declarations: [_sign_in_page__WEBPACK_IMPORTED_MODULE_6__["SignInPage"]]
    })
], SignInPageModule);



/***/ }),

/***/ "./src/app/pages/create-classes/sign-in-teacher/sign-in/sign-in.page.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/create-classes/sign-in-teacher/sign-in/sign-in.page.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".box {\n  display: inline-flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3JlYXRlLWNsYXNzZXMvc2lnbi1pbi10ZWFjaGVyL3NpZ24taW4vRDpcXGh4c2t5dW5cXG1vYmlsZVxcZGFveXVuL3NyY1xcYXBwXFxwYWdlc1xcY3JlYXRlLWNsYXNzZXNcXHNpZ24taW4tdGVhY2hlclxcc2lnbi1pblxcc2lnbi1pbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NyZWF0ZS1jbGFzc2VzL3NpZ24taW4tdGVhY2hlci9zaWduLWluL3NpZ24taW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NyZWF0ZS1jbGFzc2VzL3NpZ24taW4tdGVhY2hlci9zaWduLWluL3NpZ24taW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcbiIsIi5ib3gge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/create-classes/sign-in-teacher/sign-in/sign-in.page.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/create-classes/sign-in-teacher/sign-in/sign-in.page.ts ***!
  \******************************************************************************/
/*! exports provided: SignInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPage", function() { return SignInPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/zr-services.service */ "./src/app/shared/services/zr-services.service.ts");
/* harmony import */ var _shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/local-storage.service */ "./src/app/shared/services/local-storage.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_common_baseui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/baseui */ "./src/app/common/baseui.ts");





// import { ToastServiceProvider } from "../../../../shared/services/toast-service.service";




let SignInPage = class SignInPage extends src_app_common_baseui__WEBPACK_IMPORTED_MODULE_6__["BaseUI"] {
    constructor(activatedRoute, zrServices, localStorageService, 
    // private toastService: ToastServiceProvider,
    alertController, toastController, router, loadingController) {
        super();
        this.activatedRoute = activatedRoute;
        this.zrServices = zrServices;
        this.localStorageService = localStorageService;
        this.alertController = alertController;
        this.toastController = toastController;
        this.router = router;
        this.loadingController = loadingController;
        // @ViewChild('startButton', {static:true}) startButton:any
        // @ViewChild('cancelButton', {static:true}) cancelButton:any
        // @ViewChild('finishButton', {static:true}) finishButton:any
        // @ViewChild('signCountShow', {static:true}) signCountShow:any
        this.signId = '';
        this.courseId = '';
        this.courseName = '';
        this.userId = '';
        this.courseMembersCount = '';
        this.signCount = '';
        this.coordinate = {
            latitude: '1',
            longitude: '1'
        };
        // flag
        this.isStart = false;
        this.isEnd = false;
        // 表单对象
        this.duration = 3;
        this.signInfo = {
            courseId: this.courseId,
        };
    }
    ngOnInit() {
        super.showLoading(this.loadingController, '请等待', 300);
        this.activatedRoute.queryParams.subscribe((result) => {
            // console.log('传入的参数：', result);
            this.courseId = result.courseId;
            this.courseName = result.courseName;
            this.courseMembersCount = result.courseMembersCount;
        });
    }
    ionViewWillLeave() {
        if (this.timer) {
            console.log('clear timer');
            clearInterval(this.timer);
        }
    }
    // 获取地址
    getLocation() {
        let geolocation = new BMap.Geolocation(); //新建地图对象
        return new Promise((reslove, reject) => {
            geolocation.getCurrentPosition(function (r) {
                if (this.getStatus() == 0) {
                    // console.log('获取位置成功：', r.point.lat, r.point.lng);
                    reslove(r.point);
                }
                else {
                    // console.log('获取位置失败:', this.getStatus());
                    reject(this.getStatus());
                    alert('获取位置失败' + this.getStatus());
                }
            });
        });
    }
    // 拆分了一下开始签到事件（获取地址）
    doSignIn() {
        // 获取签到信息
        this.getLocation().then((result) => {
            this.coordinate.latitude = result.lat;
            this.coordinate.longitude = result.lng;
            // console.log('新的coordinate内容为：', this.coordinate);
            this.doStartSignIn();
        }).catch((error) => {
            console.log('显示错误');
        });
    }
    // 开始签到交互
    doStartSignIn() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // 提示框确认是否开始？
            const alert = yield this.alertController.create({
                animated: true,
                header: '提示',
                message: '是否开始签到？',
                buttons: [
                    {
                        text: '取消',
                        role: 'cancel',
                    }, {
                        text: '确认',
                        handler: () => {
                            // 发送签到请求
                            this.zrServices.createSignIn(this.courseId, this.coordinate.longitude, this.coordinate.latitude, this.duration).then((result) => {
                                // console.log(result);
                                if (result.code == '200') {
                                    this.isStart = true; // 是否开始签到
                                    this.signId = result.data.signId; // 接受返回的signid
                                    // console.log('当前签到id为：', this.signId);
                                    this.localStorageService.setStore('signId', this.signId); //保存到缓存里
                                    this.presentToast('开始计时！', 'success');
                                    // 刷新签到情况
                                    this.doRefresh();
                                }
                                else {
                                    this.presentToast(result.msg, 'danger');
                                }
                            }).catch((error) => {
                                this.presentToast(error.message, 'danger');
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // 刷新签到人数信息
    doRefresh() {
        this.timer = setInterval(() => {
            this.loadCurrentSignInfo();
            console.log('自动刷新了');
        }, 5000); // 每两秒查询一次
    }
    // 查询签到信息
    loadCurrentSignInfo() {
        // 获取当前签到信息
        this.zrServices.getCurrentSignBySignId(this.signId).then((result) => {
            // console.log('查询到签到信息为：', result);
            // 更新签到人头
            this.signCount = result.data[0].signedNumbers;
            // this.signCountShow.nativeElement.value = result.data.signNumbers
            // 查询到已经是结束状态了
            if (result.data[0].endTimestamp < result.data[0].nowTimeStamp) {
                // console.log('时间超过计时时间！');
                // 结束
                this.isEnd = true;
                this.isStart = false;
                // 结束timer
                if (this.timer) {
                    clearInterval(this.timer);
                }
                // 提示
                this.presentToast('签到时间到，签到结束！');
                // 跳转回前一页
                this.onBackTo('/tabs/create-classes/sign-in-teacher');
            }
        }).catch((error) => {
            console.log('刷新签到情况错误');
        });
    }
    // 放弃签到
    doCancelSignIn() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // 提示框确认是否放弃签到？
            const alert = yield this.alertController.create({
                animated: true,
                header: '提示',
                message: '是否放弃签到？',
                buttons: [
                    {
                        text: '取消',
                        role: 'cancel',
                    }, {
                        text: '确认',
                        handler: () => {
                            // 发送取消签到请求
                            this.zrServices.cancelSignIn(this.signId).then((result) => {
                                if (result.code == '200') {
                                    // 放弃逻辑
                                    this.isStart = false;
                                    // 提示
                                    this.presentToast('放弃签到！', 'warning');
                                    // 跳转回前一页
                                    this.onBackTo('/tabs/create-classes/sign-in-teacher');
                                }
                                else {
                                    this.presentToast(result.msg, 'danger');
                                }
                            }).catch((error) => {
                                this.presentToast(error.message, 'danger');
                                // 然后跳转
                                this.isStart = false;
                                this.onBack();
                            });
                        }
                    }
                ]
            });
            // *******提示框组件结束**********
            yield alert.present();
        });
    }
    // 结束签到
    doEndSignIn() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // 提示框确认是否放弃签到？
            const alert = yield this.alertController.create({
                animated: true,
                header: '提示',
                message: '是否结束签到？',
                buttons: [
                    {
                        text: '取消',
                        role: 'cancel',
                    }, {
                        text: '确认',
                        handler: () => {
                            // 发送结束签到请求
                            this.zrServices.endSignIn(this.signId).then((result) => {
                                if (result.code == '200') {
                                    // 结束逻辑
                                    this.isEnd = true;
                                    this.isStart = false;
                                    // 提示
                                    this.presentToast('结束签到成功！');
                                    // 跳转回前一页
                                    this.onBackTo('/tabs/create-classes/sign-in-teacher');
                                }
                                else {
                                    this.presentToast(result.msg, 'danger');
                                }
                            }).catch((error) => {
                                // console.log('结束签到页错误');
                                this.presentToast(error.message, 'danger');
                                // 已经结束过了， 那错误逻辑在这里
                                // 然后跳转
                                // this.isStart = false;
                                // this.onBack()
                            });
                        }
                    }
                ]
            });
            // *******提示框组件结束**********
            yield alert.present();
        });
    }
    // 跳转回签到页面
    onBackTo(url) {
        this.router.navigate([url], {
            queryParams: {
                courseId: this.courseId,
                courseMembersCount: this.courseMembersCount
            }
        });
    }
    // 跳出toast提示
    presentToast(message, color = 'success') {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastController.create({
                message: message,
                duration: 2000,
                position: 'bottom',
                animated: true,
                mode: 'ios',
                color: color,
                buttons: ['关闭']
            });
            toast.present(); //出发消息提示框
        });
    }
    // 导航点击返回跳转
    onBack() {
        if (this.isStart) {
            // 开始了
            // console.log('A type');
            this.doCancelSignIn();
        }
        else {
            // 还没开始
            // console.log('B type');
            this.onBackTo('/tabs/create-classes/sign-in-teacher');
        }
    }
};
SignInPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_3__["ZrServicesService"] },
    { type: _shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
SignInPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-in',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-in.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-classes/sign-in-teacher/sign-in/sign-in.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-in.page.scss */ "./src/app/pages/create-classes/sign-in-teacher/sign-in/sign-in.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_3__["ZrServicesService"],
        _shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])
], SignInPage);



/***/ }),

/***/ "./src/app/pages/join-classes/sign-in/sign-in-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/join-classes/sign-in/sign-in-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: SignInPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageRoutingModule", function() { return SignInPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-in.page */ "./src/app/pages/join-classes/sign-in/sign-in.page.ts");




const routes = [
    {
        path: '',
        component: _sign_in_page__WEBPACK_IMPORTED_MODULE_3__["SignInPage"]
    },
];
let SignInPageRoutingModule = class SignInPageRoutingModule {
};
SignInPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignInPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/join-classes/sign-in/sign-in.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/join-classes/sign-in/sign-in.module.ts ***!
  \**************************************************************/
/*! exports provided: SignInPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageModule", function() { return SignInPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-in-routing.module */ "./src/app/pages/join-classes/sign-in/sign-in-routing.module.ts");
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-in.page */ "./src/app/pages/join-classes/sign-in/sign-in.page.ts");







let SignInPageModule = class SignInPageModule {
};
SignInPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignInPageRoutingModule"]
        ],
        declarations: [_sign_in_page__WEBPACK_IMPORTED_MODULE_6__["SignInPage"]]
    })
], SignInPageModule);



/***/ }),

/***/ "./src/app/pages/join-classes/sign-in/sign-in.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/join-classes/sign-in/sign-in.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sign-in-img {\n  width: 7em;\n  margin: 0 auto;\n}\n\n.sign-in-avatar {\n  display: block;\n  margin: 0 auto;\n  width: 5em;\n  height: 5em;\n  color: white;\n  background-color: #3880ff;\n  box-shadow: 2px 3px 5px #888888;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvam9pbi1jbGFzc2VzL3NpZ24taW4vRDpcXGh4c2t5dW5cXG1vYmlsZVxcZGFveXVuL3NyY1xcYXBwXFxwYWdlc1xcam9pbi1jbGFzc2VzXFxzaWduLWluXFxzaWduLWluLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvam9pbi1jbGFzc2VzL3NpZ24taW4vc2lnbi1pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9qb2luLWNsYXNzZXMvc2lnbi1pbi9zaWduLWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWduLWluLWltZ3tcclxuICAgIHdpZHRoOiA3ZW07XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLnNpZ24taW4tYXZhdGFye1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiA1ZW07XHJcbiAgICBoZWlnaHQ6IDVlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODgwZmY7XHJcbiAgICBib3gtc2hhZG93OiAycHggM3B4IDVweCAjODg4ODg4O1xyXG5cclxufSIsIi5zaWduLWluLWltZyB7XG4gIHdpZHRoOiA3ZW07XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uc2lnbi1pbi1hdmF0YXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA1ZW07XG4gIGhlaWdodDogNWVtO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODgwZmY7XG4gIGJveC1zaGFkb3c6IDJweCAzcHggNXB4ICM4ODg4ODg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/join-classes/sign-in/sign-in.page.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/join-classes/sign-in/sign-in.page.ts ***!
  \************************************************************/
/*! exports provided: SignInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPage", function() { return SignInPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/zr-services.service */ "./src/app/shared/services/zr-services.service.ts");
/* harmony import */ var _shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/local-storage.service */ "./src/app/shared/services/local-storage.service.ts");
/* harmony import */ var _shared_services_toast_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/toast-service.service */ "./src/app/shared/services/toast-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_common_baseui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/baseui */ "./src/app/common/baseui.ts");









let SignInPage = class SignInPage extends src_app_common_baseui__WEBPACK_IMPORTED_MODULE_7__["BaseUI"] {
    constructor(activatedRoute, zrServices, localStorageService, toastService, alertController, 
    // public toastController:ToastController,
    router, loadingController) {
        super();
        this.activatedRoute = activatedRoute;
        this.zrServices = zrServices;
        this.localStorageService = localStorageService;
        this.toastService = toastService;
        this.alertController = alertController;
        this.router = router;
        this.loadingController = loadingController;
        // signId = ''
        this.hasSigned = false;
        this.courseId = '';
        this.userId = '';
        this.myInfo = [];
        // 位置
        this.coordinate = {
            latitude: '1',
            longitude: '1'
        };
    }
    ngOnInit() {
        super.showLoading(this.loadingController, '请等待', 800);
        this.userId = this.localStorageService.getStore('uid', '');
        this.activatedRoute.queryParams.subscribe((result) => {
            // console.log('传入的参数：', result);
            this.courseId = result.courseId;
            this.courseName = result.courseName;
        });
        this.loadCurrentSignInfo();
    }
    // 查询该门课程的签到信息
    // 查询签到信息
    loadCurrentSignInfo() {
        // 获取当前签到信息
        let params = {
            "courseId": this.courseId,
            "studentId": this.userId //123123123
        };
        this.zrServices.getMemberCourseExpInfo(params).then((result) => {
            this.signCount = result.data.length;
            for (let r of result.data) {
                let s = {
                    signId: r.signId,
                    endTime: r.endTime,
                    signStatus: r.signStatus
                };
                this.myInfo.push(s); // 重构每次签到列表
            }
        }).catch((error) => {
            this.toastService.errorToast('获取用户该课程的经验值失败');
        });
    }
    // 获取地址
    getLocation() {
        let geolocation = new BMap.Geolocation(); //新建地图对象
        return new Promise((reslove, reject) => {
            geolocation.getCurrentPosition(function (r) {
                // console.log(this.getStatus())
                if (this.getStatus() == 0) {
                    // console.log('获取位置成功：', r.point.lat, r.point.lng);
                    reslove(r.point);
                }
                else {
                    // console.log('获取位置失败:', this.getStatus());
                    reject(this.getStatus());
                }
            });
        });
    }
    doSignIn() {
        // 获取签到信息
        super.showLoading(this.loadingController, '请等待', 1500);
        this.getLocation().then((result) => {
            this.coordinate.latitude = result.lat;
            this.coordinate.longitude = result.lng;
            this.doAttendSignIn();
        }).catch((error) => {
            this.toastService.errorToast('无法获取地理位置！');
        });
    }
    // 签到
    doAttendSignIn() {
        if (this.hasSigned) {
            this.toastService.errorToast('已签到过！请勿重复签到！');
            return;
        }
        let params = {
            courseId: this.courseId,
            studentId: this.userId,
            targetLatitude: this.coordinate.latitude,
            targetLongitude: this.coordinate.longitude
        };
        this.zrServices.attendSignIn(params).then((result) => {
            // console.log(result);
            if (result.code == '200') {
                // 重构数据
                // this.hasSigned = true  // 标志签到
                // this.signCount += 1
                // let s = {
                //   signId : result.data.signId,
                //   endTime : result.data.signTime,
                //   signStatus : result.data.signStatus
                // }
                // //  重构每次签到列表
                // this.myInfo.push(s)
                this.hasSigned = true; // 标志签到
                this.toastService.generalToast('签到成功！');
                this.myInfo.splice(0);
                this.loadCurrentSignInfo();
                // location.reload()
            }
            else if (result.code == '400') {
                this.toastService.errorToast(result.msg);
            }
        }).catch((error) => {
            this.toastService.errorToast('签到失败！');
            console.log(error);
        });
    }
    // 获取地址
    qrscanner6() {
        let geolocation = new BMap.Geolocation(); //新建地图对象
        return new Promise((reslove, reject) => {
            geolocation.getCurrentPosition(function (r) {
                console.log(this.getStatus());
                if (this.getStatus() == '0') {
                    console.log('获取位置成功：', r.point.lat, r.point.lng);
                    alert('获取位置成功' + r.point.lat + r.point.lng);
                    reslove(r);
                }
                else {
                    console.log('获取位置失败:', this.getStatus());
                    reject(this.getStatus());
                    alert('获取位置失败' + this.getStatus());
                }
            }, { enableHighAccuracy: true });
        });
    }
};
SignInPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_3__["ZrServicesService"] },
    { type: _shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] },
    { type: _shared_services_toast_service_service__WEBPACK_IMPORTED_MODULE_5__["ToastServiceProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] }
];
SignInPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-in',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-in.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/join-classes/sign-in/sign-in.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-in.page.scss */ "./src/app/pages/join-classes/sign-in/sign-in.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_3__["ZrServicesService"],
        _shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"],
        _shared_services_toast_service_service__WEBPACK_IMPORTED_MODULE_5__["ToastServiceProvider"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]])
], SignInPage);



/***/ })

}]);
//# sourceMappingURL=sign-in-sign-in-module-es2015.js.map