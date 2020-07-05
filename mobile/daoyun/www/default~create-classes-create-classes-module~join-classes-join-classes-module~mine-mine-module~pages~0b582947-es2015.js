(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~create-classes-create-classes-module~join-classes-join-classes-module~mine-mine-module~pages~0b582947"],{

/***/ "./src/app/shared/services/zr-services.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/zr-services.service.ts ***!
  \********************************************************/
/*! exports provided: ZrServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZrServicesService", function() { return ZrServicesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");



// import { Md5 } from 'ts-md5';
// 引入environemnts

let ZrServicesService = class ZrServicesService {
    constructor(http) {
        this.http = http;
        this.config = {
            // domain: 'http://a.itying.com/',  //接口公共部分（环境域名）
            domain: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].server_url //接口公共部分（环境域名）
        };
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }) //请求头进行转格式，防止出现415错误
        };
    }
    // 登录
    login(info) {
        let url = this.config.domain + '/Login/checkLogin';
        return new Promise((resolve, reject) => {
            this.http.post(url, JSON.stringify(info), this.httpOptions).subscribe((response) => {
                // 请求成功的回调函数
                resolve(response);
            }, (error) => {
                // 请求错误的回调函数
                console.log('service的错误：', error);
                reject(error);
            });
        });
    }
    // 获取学期
    getSemester() {
        let url = this.config.domain + '/dictionary/List/courseSemeste';
        return new Promise((resolve, reject) => {
            this.http.get(url).subscribe((response) => {
                // 请求成功的回调函数
                resolve(response);
            }, (error) => {
                // 请求错误的回调函数
                console.log('service的错误：', error);
                reject(error);
            });
        });
    }
    // 获取学校
    getSchool() {
        let url = this.config.domain + '/dictionary/List/schoolList';
        return new Promise((resolve, reject) => {
            this.http.get(url).subscribe((response) => {
                // 请求成功的回调函数
                resolve(response);
            }, (error) => {
                // 请求错误的回调函数
                console.log('service的错误：', error);
                reject(error);
            });
        });
    }
    // 获取学院
    getDepartment() {
        let url = this.config.domain + '/dictionary/List/departmentList';
        return new Promise((resolve, reject) => {
            this.http.get(url).subscribe((response) => {
                // 请求成功的回调函数
                resolve(response);
            }, (error) => {
                // 请求错误的回调函数
                console.log('service的错误：', error);
                reject(error);
            });
        });
    }
    // 根据用户id查看用户信息
    getUserByUserId(UserId) {
        let url = this.config.domain + '/User/selectUserById/' + UserId;
        return new Promise((resolve, reject) => {
            this.http.get(url).subscribe((response) => {
                // 请求成功的回调函数
                resolve(response);
            }, (error) => {
                // 请求错误的回调函数
                console.log('service的错误：', error);
                reject(error);
            });
        });
    }
    //更新用户信息
    updateUserinfo(info) {
        let url = this.config.domain + '/User/updateUser';
        return new Promise((resolve, reject) => {
            this.http.post(url, JSON.stringify(info), this.httpOptions).subscribe((response) => {
                // 请求成功的回调函数
                resolve(response);
            }, (error) => {
                // 请求错误的回调函数
                console.log('service的错误：', error);
                reject(error);
            });
        });
    }
    // 根据学号/工号获取已加入的课程
    getCourseById(id) {
        let url = this.config.domain + '/course/userId/' + id;
        return new Promise((resolve, reject) => {
            this.http.get(url).subscribe((response) => {
                // 请求成功的回调函数
                resolve(response);
            }, (error) => {
                // 请求错误的回调函数
                console.log('service的错误：', error);
                reject(error);
            });
        });
    }
    // 根据课程id查看该课程的课程信息
    getCourseByCourseId(courseId) {
        let url = this.config.domain + '/course/courseId/' + courseId;
        return new Promise((resolve, reject) => {
            this.http.get(url).subscribe((response) => {
                // 请求成功的回调函数
                resolve(response);
            }, (error) => {
                // 请求错误的回调函数
                console.log('service的错误：', error);
                reject(error);
            });
        });
    }
    // 查看某一门课程的成员信息
    getMembersByCourseId(courseId) {
        let url = this.config.domain + '/course/members/' + courseId;
        return new Promise((resolve, reject) => {
            this.http.get(url).subscribe((response) => {
                // 请求成功的回调函数
                resolve(response);
            }, (error) => {
                // 请求错误的回调函数
                console.log('service的错误：', error);
                reject(error);
            });
        });
    }
    // 查看某一门课程的某个成员的信息
    getMemberCourseExpInfo(info) {
        let url = this.config.domain + '/course/courseSignByUserIdCourseId/';
        return new Promise((resolve, reject) => {
            this.http.post(url, JSON.stringify(info), this.httpOptions).subscribe((response) => {
                // 请求成功的回调函数
                resolve(response);
            }, (error) => {
                // 请求错误的回调函数
                console.log('service的错误：', error);
                reject(error);
            });
        });
    }
    // 加入班课
    joinClass(info) {
        let url = this.config.domain + '/course/joinCourse';
        return new Promise((resolve, reject) => {
            this.http.post(url, JSON.stringify(info), this.httpOptions).subscribe((response) => {
                // 请求成功的回调函数
                resolve(response);
            }, (error) => {
                // 请求错误的回调函数
                console.log('service的错误：', error);
                reject(error);
            });
        });
    }
    // 退出班课
    exitClass(info) {
        let url = this.config.domain + '/course/exitCourse';
        return new Promise((resolve, reject) => {
            this.http.post(url, JSON.stringify(info), this.httpOptions).subscribe((response) => {
                // 请求成功的回调函数
                resolve(response);
            }, (error) => {
                // 请求错误的回调函数
                console.log('service的错误：', error);
                reject(error);
            });
        });
    }
    // 查看我创建的课程列表
    getCreatedCourseById(id) {
        let url = this.config.domain + '/course/teacherId/' + id;
        return new Promise((resolve, reject) => {
            this.http.get(url).subscribe((response) => {
                // 请求成功的回调函数
                resolve(response);
            }, (error) => {
                // 请求错误的回调函数
                console.log('service的错误：', error);
                reject(error);
            });
        });
    }
    // 创建班课服务
    postNewCourse(data) {
        let url = this.config.domain + '/course/creatCourse';
        return new Promise((reslove, reject) => {
            this.http.post(url, JSON.stringify(data), this.httpOptions).subscribe((response) => {
                reslove(response);
            }, (error) => {
                console.log('创建班课异常错误：', error);
                reject(error);
            });
        });
    }
    //修改班课信息
    postEidtCourseByCourseId(data) {
        let url = this.config.domain + '/course/updateCourse/';
        console.log('发送修改班课信息：', data);
        return new Promise((reslove, reject) => {
            this.http.post(url, JSON.stringify(data), this.httpOptions).subscribe((response) => {
                reslove(response);
            }, (error) => {
                reject(error);
            });
        });
    }
    /**
     * 签到相关
     */
    //  获取某门课程的历史签到列表
    getSignByCourseId(courseId) {
        let url = this.config.domain + '/course/getAllCourseSign/' + courseId;
        return new Promise((resolve, reject) => {
            this.http.get(url).subscribe((response) => {
                // 请求成功的回调函数
                resolve(response);
            }, (error) => {
                // 请求错误的回调函数
                console.log('service的错误：', error);
                reject(error);
            });
        });
    }
    // 某次历史签到结果详细信息
    getSignDetailBySignId(signId) {
        let url = this.config.domain + '/course/selectOnceCourseSignResult/' + signId;
        return new Promise((resolve, reject) => {
            this.http.get(url).subscribe((response) => {
                // 请求成功的回调函数
                resolve(response);
            }, (error) => {
                // 请求错误的回调函数
                console.log('service的错误：', error);
                reject(error);
            });
        });
    }
    // 获取当前签到的信息
    getCurrentSignBySignId(signId) {
        let url = this.config.domain + '/course/CourseSignNumber/' + signId;
        return new Promise((resolve, reject) => {
            this.http.get(url).subscribe((response) => {
                // 请求成功的回调函数
                resolve(response);
            }, (error) => {
                // 请求错误的回调函数
                console.log('service的错误：', error);
                reject(error);
            });
        });
    }
    // 开始签到
    createSignIn(courseId, longitude, latitude, duration) {
        let url = this.config.domain + '/course/sendCourseSign';
        let data = {
            'courseId': courseId,
            'sourceLongitude': longitude,
            'sourceLatitude': latitude,
            'duration': duration
        };
        return new Promise((reslove, reject) => {
            this.http.post(url, JSON.stringify(data), this.httpOptions).subscribe((response) => {
                reslove(response);
            }, (error) => {
                console.log('发起签到异常错误：', error);
                reject(error);
            });
        });
    }
    // 放弃签到
    cancelSignIn(signId) {
        let url = this.config.domain + '/course/deleteCourseSign/' + signId;
        return new Promise((reslove, reject) => {
            this.http.post(url, this.httpOptions).subscribe((response) => {
                reslove(response);
            }, (error) => {
                console.log('放弃签到异常错误：', error);
                reject(error);
            });
        });
    }
    // 结束签到
    endSignIn(signId) {
        let url = this.config.domain + '/course/endCourseSign/' + signId;
        return new Promise((reslove, reject) => {
            this.http.post(url, this.httpOptions).subscribe((response) => {
                reslove(response);
            }, (error) => {
                console.log('结束签到异常错误：', error);
                reject(error);
            });
        });
    }
    // 参加签到
    attendSignIn(params) {
        let url = this.config.domain + '/course/joinCourseSign';
        // console.log(params);
        return new Promise((reslove, reject) => {
            this.http.post(url, JSON.stringify(params), this.httpOptions).subscribe((response) => {
                reslove(response);
            }, (error) => {
                console.log('参加签到异常错误：', error);
                reject(error);
            });
        });
    }
};
ZrServicesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ZrServicesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ZrServicesService);



/***/ })

}]);
//# sourceMappingURL=default~create-classes-create-classes-module~join-classes-join-classes-module~mine-mine-module~pages~0b582947-es2015.js.map