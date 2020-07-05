function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["share-friends-share-friends-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mine/share-friends/share-friends.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mine/share-friends/share-friends.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMineShareFriendsShareFriendsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar no-border>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"返回\" color=\"primary\"  defaultHref=\"/tabs/mine\" ></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title text-center>分享给朋友</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <img src=\"/assets/img/share.png\" alt=\"\">\r\n  <ion-text class='ion-text-center'>\r\n    <p>+v获取到云下载链接</p>\r\n  </ion-text>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/mine/share-friends/share-friends-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/mine/share-friends/share-friends-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: ShareFriendsPageRoutingModule */

  /***/
  function srcAppPagesMineShareFriendsShareFriendsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShareFriendsPageRoutingModule", function () {
      return ShareFriendsPageRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _share_friends_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./share-friends.page */
    "./src/app/pages/mine/share-friends/share-friends.page.ts");

    var routes = [{
      path: '',
      component: _share_friends_page__WEBPACK_IMPORTED_MODULE_3__["ShareFriendsPage"]
    }];

    var ShareFriendsPageRoutingModule = function ShareFriendsPageRoutingModule() {
      _classCallCheck(this, ShareFriendsPageRoutingModule);
    };

    ShareFriendsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ShareFriendsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/mine/share-friends/share-friends.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/mine/share-friends/share-friends.module.ts ***!
    \******************************************************************/

  /*! exports provided: ShareFriendsPageModule */

  /***/
  function srcAppPagesMineShareFriendsShareFriendsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShareFriendsPageModule", function () {
      return ShareFriendsPageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _share_friends_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./share-friends-routing.module */
    "./src/app/pages/mine/share-friends/share-friends-routing.module.ts");
    /* harmony import */


    var _share_friends_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./share-friends.page */
    "./src/app/pages/mine/share-friends/share-friends.page.ts");

    var ShareFriendsPageModule = function ShareFriendsPageModule() {
      _classCallCheck(this, ShareFriendsPageModule);
    };

    ShareFriendsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _share_friends_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShareFriendsPageRoutingModule"]],
      declarations: [_share_friends_page__WEBPACK_IMPORTED_MODULE_6__["ShareFriendsPage"]]
    })], ShareFriendsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/mine/share-friends/share-friends.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/pages/mine/share-friends/share-friends.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMineShareFriendsShareFriendsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21pbmUvc2hhcmUtZnJpZW5kcy9zaGFyZS1mcmllbmRzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/mine/share-friends/share-friends.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/mine/share-friends/share-friends.page.ts ***!
    \****************************************************************/

  /*! exports provided: ShareFriendsPage */

  /***/
  function srcAppPagesMineShareFriendsShareFriendsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShareFriendsPage", function () {
      return ShareFriendsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ShareFriendsPage = /*#__PURE__*/function () {
      function ShareFriendsPage() {
        _classCallCheck(this, ShareFriendsPage);
      }

      _createClass(ShareFriendsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ShareFriendsPage;
    }();

    ShareFriendsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-share-friends',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./share-friends.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mine/share-friends/share-friends.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./share-friends.page.scss */
      "./src/app/pages/mine/share-friends/share-friends.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ShareFriendsPage);
    /***/
  }
}]);
//# sourceMappingURL=share-friends-share-friends-module-es5.js.map