function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~create-classes-create-classes-module~join-classes-join-classes-module~mine-mine-module~pages~0b582947"], {
  /***/
  "./src/app/shared/services/zr-services.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/shared/services/zr-services.service.ts ***!
    \********************************************************/

  /*! exports provided: ZrServicesService */

  /***/
  function srcAppSharedServicesZrServicesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ZrServicesService", function () {
      return ZrServicesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts"); // import { Md5 } from 'ts-md5';
    // 引入environemnts


    var ZrServicesService = /*#__PURE__*/function () {
      function ZrServicesService(http) {
        _classCallCheck(this, ZrServicesService);

        this.http = http;
        this.config = {
          // domain: 'http://a.itying.com/',  //接口公共部分（环境域名）
          domain: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].server_url //接口公共部分（环境域名）

        };
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          }) //请求头进行转格式，防止出现415错误

        };
      } // 登录


      _createClass(ZrServicesService, [{
        key: "login",
        value: function login(info) {
          var _this = this;

          var url = this.config.domain + '/Login/checkLogin';
          return new Promise(function (resolve, reject) {
            _this.http.post(url, JSON.stringify(info), _this.httpOptions).subscribe(function (response) {
              // 请求成功的回调函数
              resolve(response);
            }, function (error) {
              // 请求错误的回调函数
              console.log('service的错误：', error);
              reject(error);
            });
          });
        } // 获取学期

      }, {
        key: "getSemester",
        value: function getSemester() {
          var _this2 = this;

          var url = this.config.domain + '/dictionary/List/courseSemeste';
          return new Promise(function (resolve, reject) {
            _this2.http.get(url).subscribe(function (response) {
              // 请求成功的回调函数
              resolve(response);
            }, function (error) {
              // 请求错误的回调函数
              console.log('service的错误：', error);
              reject(error);
            });
          });
        } // 获取学校

      }, {
        key: "getSchool",
        value: function getSchool() {
          var _this3 = this;

          var url = this.config.domain + '/dictionary/List/schoolList';
          return new Promise(function (resolve, reject) {
            _this3.http.get(url).subscribe(function (response) {
              // 请求成功的回调函数
              resolve(response);
            }, function (error) {
              // 请求错误的回调函数
              console.log('service的错误：', error);
              reject(error);
            });
          });
        } // 获取学院

      }, {
        key: "getDepartment",
        value: function getDepartment() {
          var _this4 = this;

          var url = this.config.domain + '/dictionary/List/departmentList';
          return new Promise(function (resolve, reject) {
            _this4.http.get(url).subscribe(function (response) {
              // 请求成功的回调函数
              resolve(response);
            }, function (error) {
              // 请求错误的回调函数
              console.log('service的错误：', error);
              reject(error);
            });
          });
        } // 根据用户id查看用户信息

      }, {
        key: "getUserByUserId",
        value: function getUserByUserId(UserId) {
          var _this5 = this;

          var url = this.config.domain + '/User/selectUserById/' + UserId;
          return new Promise(function (resolve, reject) {
            _this5.http.get(url).subscribe(function (response) {
              // 请求成功的回调函数
              resolve(response);
            }, function (error) {
              // 请求错误的回调函数
              console.log('service的错误：', error);
              reject(error);
            });
          });
        } //更新用户信息

      }, {
        key: "updateUserinfo",
        value: function updateUserinfo(info) {
          var _this6 = this;

          var url = this.config.domain + '/User/updateUser';
          return new Promise(function (resolve, reject) {
            _this6.http.post(url, JSON.stringify(info), _this6.httpOptions).subscribe(function (response) {
              // 请求成功的回调函数
              resolve(response);
            }, function (error) {
              // 请求错误的回调函数
              console.log('service的错误：', error);
              reject(error);
            });
          });
        } // 根据学号/工号获取已加入的课程

      }, {
        key: "getCourseById",
        value: function getCourseById(id) {
          var _this7 = this;

          var url = this.config.domain + '/course/userId/' + id;
          return new Promise(function (resolve, reject) {
            _this7.http.get(url).subscribe(function (response) {
              // 请求成功的回调函数
              resolve(response);
            }, function (error) {
              // 请求错误的回调函数
              console.log('service的错误：', error);
              reject(error);
            });
          });
        } // 根据课程id查看该课程的课程信息

      }, {
        key: "getCourseByCourseId",
        value: function getCourseByCourseId(courseId) {
          var _this8 = this;

          var url = this.config.domain + '/course/courseId/' + courseId;
          return new Promise(function (resolve, reject) {
            _this8.http.get(url).subscribe(function (response) {
              // 请求成功的回调函数
              resolve(response);
            }, function (error) {
              // 请求错误的回调函数
              console.log('service的错误：', error);
              reject(error);
            });
          });
        } // 查看某一门课程的成员信息

      }, {
        key: "getMembersByCourseId",
        value: function getMembersByCourseId(courseId) {
          var _this9 = this;

          var url = this.config.domain + '/course/members/' + courseId;
          return new Promise(function (resolve, reject) {
            _this9.http.get(url).subscribe(function (response) {
              // 请求成功的回调函数
              resolve(response);
            }, function (error) {
              // 请求错误的回调函数
              console.log('service的错误：', error);
              reject(error);
            });
          });
        } // 查看某一门课程的某个成员的信息

      }, {
        key: "getMemberCourseExpInfo",
        value: function getMemberCourseExpInfo(info) {
          var _this10 = this;

          var url = this.config.domain + '/course/courseSignByUserIdCourseId/';
          return new Promise(function (resolve, reject) {
            _this10.http.post(url, JSON.stringify(info), _this10.httpOptions).subscribe(function (response) {
              // 请求成功的回调函数
              resolve(response);
            }, function (error) {
              // 请求错误的回调函数
              console.log('service的错误：', error);
              reject(error);
            });
          });
        } // 加入班课

      }, {
        key: "joinClass",
        value: function joinClass(info) {
          var _this11 = this;

          var url = this.config.domain + '/course/joinCourse';
          return new Promise(function (resolve, reject) {
            _this11.http.post(url, JSON.stringify(info), _this11.httpOptions).subscribe(function (response) {
              // 请求成功的回调函数
              resolve(response);
            }, function (error) {
              // 请求错误的回调函数
              console.log('service的错误：', error);
              reject(error);
            });
          });
        } // 退出班课

      }, {
        key: "exitClass",
        value: function exitClass(info) {
          var _this12 = this;

          var url = this.config.domain + '/course/exitCourse';
          return new Promise(function (resolve, reject) {
            _this12.http.post(url, JSON.stringify(info), _this12.httpOptions).subscribe(function (response) {
              // 请求成功的回调函数
              resolve(response);
            }, function (error) {
              // 请求错误的回调函数
              console.log('service的错误：', error);
              reject(error);
            });
          });
        } // 查看我创建的课程列表

      }, {
        key: "getCreatedCourseById",
        value: function getCreatedCourseById(id) {
          var _this13 = this;

          var url = this.config.domain + '/course/teacherId/' + id;
          return new Promise(function (resolve, reject) {
            _this13.http.get(url).subscribe(function (response) {
              // 请求成功的回调函数
              resolve(response);
            }, function (error) {
              // 请求错误的回调函数
              console.log('service的错误：', error);
              reject(error);
            });
          });
        } // 创建班课服务

      }, {
        key: "postNewCourse",
        value: function postNewCourse(data) {
          var _this14 = this;

          var url = this.config.domain + '/course/creatCourse';
          return new Promise(function (reslove, reject) {
            _this14.http.post(url, JSON.stringify(data), _this14.httpOptions).subscribe(function (response) {
              reslove(response);
            }, function (error) {
              console.log('创建班课异常错误：', error);
              reject(error);
            });
          });
        } //修改班课信息

      }, {
        key: "postEidtCourseByCourseId",
        value: function postEidtCourseByCourseId(data) {
          var _this15 = this;

          var url = this.config.domain + '/course/updateCourse/';
          console.log('发送修改班课信息：', data);
          return new Promise(function (reslove, reject) {
            _this15.http.post(url, JSON.stringify(data), _this15.httpOptions).subscribe(function (response) {
              reslove(response);
            }, function (error) {
              reject(error);
            });
          });
        }
        /**
         * 签到相关
         */
        //  获取某门课程的历史签到列表

      }, {
        key: "getSignByCourseId",
        value: function getSignByCourseId(courseId) {
          var _this16 = this;

          var url = this.config.domain + '/course/getAllCourseSign/' + courseId;
          return new Promise(function (resolve, reject) {
            _this16.http.get(url).subscribe(function (response) {
              // 请求成功的回调函数
              resolve(response);
            }, function (error) {
              // 请求错误的回调函数
              console.log('service的错误：', error);
              reject(error);
            });
          });
        } // 某次历史签到结果详细信息

      }, {
        key: "getSignDetailBySignId",
        value: function getSignDetailBySignId(signId) {
          var _this17 = this;

          var url = this.config.domain + '/course/selectOnceCourseSignResult/' + signId;
          return new Promise(function (resolve, reject) {
            _this17.http.get(url).subscribe(function (response) {
              // 请求成功的回调函数
              resolve(response);
            }, function (error) {
              // 请求错误的回调函数
              console.log('service的错误：', error);
              reject(error);
            });
          });
        } // 获取当前签到的信息

      }, {
        key: "getCurrentSignBySignId",
        value: function getCurrentSignBySignId(signId) {
          var _this18 = this;

          var url = this.config.domain + '/course/CourseSignNumber/' + signId;
          return new Promise(function (resolve, reject) {
            _this18.http.get(url).subscribe(function (response) {
              // 请求成功的回调函数
              resolve(response);
            }, function (error) {
              // 请求错误的回调函数
              console.log('service的错误：', error);
              reject(error);
            });
          });
        } // 开始签到

      }, {
        key: "createSignIn",
        value: function createSignIn(courseId, longitude, latitude, duration) {
          var _this19 = this;

          var url = this.config.domain + '/course/sendCourseSign';
          var data = {
            'courseId': courseId,
            'sourceLongitude': longitude,
            'sourceLatitude': latitude,
            'duration': duration
          };
          return new Promise(function (reslove, reject) {
            _this19.http.post(url, JSON.stringify(data), _this19.httpOptions).subscribe(function (response) {
              reslove(response);
            }, function (error) {
              console.log('发起签到异常错误：', error);
              reject(error);
            });
          });
        } // 放弃签到

      }, {
        key: "cancelSignIn",
        value: function cancelSignIn(signId) {
          var _this20 = this;

          var url = this.config.domain + '/course/deleteCourseSign/' + signId;
          return new Promise(function (reslove, reject) {
            _this20.http.post(url, _this20.httpOptions).subscribe(function (response) {
              reslove(response);
            }, function (error) {
              console.log('放弃签到异常错误：', error);
              reject(error);
            });
          });
        } // 结束签到

      }, {
        key: "endSignIn",
        value: function endSignIn(signId) {
          var _this21 = this;

          var url = this.config.domain + '/course/endCourseSign/' + signId;
          return new Promise(function (reslove, reject) {
            _this21.http.post(url, _this21.httpOptions).subscribe(function (response) {
              reslove(response);
            }, function (error) {
              console.log('结束签到异常错误：', error);
              reject(error);
            });
          });
        } // 参加签到

      }, {
        key: "attendSignIn",
        value: function attendSignIn(params) {
          var _this22 = this;

          var url = this.config.domain + '/course/joinCourseSign'; // console.log(params);

          return new Promise(function (reslove, reject) {
            _this22.http.post(url, JSON.stringify(params), _this22.httpOptions).subscribe(function (response) {
              reslove(response);
            }, function (error) {
              console.log('参加签到异常错误：', error);
              reject(error);
            });
          });
        }
      }]);

      return ZrServicesService;
    }();

    ZrServicesService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ZrServicesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ZrServicesService);
    /***/
  }
}]);
//# sourceMappingURL=default~create-classes-create-classes-module~join-classes-join-classes-module~mine-mine-module~pages~0b582947-es5.js.map