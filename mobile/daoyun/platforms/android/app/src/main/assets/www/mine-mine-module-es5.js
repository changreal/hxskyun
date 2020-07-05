function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mine-mine-module"], {
  /***/
  "./node_modules/eventemitter3/index.js":
  /*!*********************************************!*\
    !*** ./node_modules/eventemitter3/index.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesEventemitter3IndexJs(module, exports, __webpack_require__) {
    "use strict";

    var has = Object.prototype.hasOwnProperty,
        prefix = '~';
    /**
     * Constructor to create a storage for our `EE` objects.
     * An `Events` instance is a plain object whose properties are event names.
     *
     * @constructor
     * @private
     */

    function Events() {} //
    // We try to not inherit from `Object.prototype`. In some engines creating an
    // instance in this way is faster than calling `Object.create(null)` directly.
    // If `Object.create(null)` is not supported we prefix the event names with a
    // character to make sure that the built-in object properties are not
    // overridden or used as an attack vector.
    //


    if (Object.create) {
      Events.prototype = Object.create(null); //
      // This hack is needed because the `__proto__` property is still inherited in
      // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
      //

      if (!new Events().__proto__) prefix = false;
    }
    /**
     * Representation of a single event listener.
     *
     * @param {Function} fn The listener function.
     * @param {*} context The context to invoke the listener with.
     * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
     * @constructor
     * @private
     */


    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }
    /**
     * Add a listener for a given event.
     *
     * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
     * @param {(String|Symbol)} event The event name.
     * @param {Function} fn The listener function.
     * @param {*} context The context to invoke the listener with.
     * @param {Boolean} once Specify if the listener is a one-time listener.
     * @returns {EventEmitter}
     * @private
     */


    function addListener(emitter, event, fn, context, once) {
      if (typeof fn !== 'function') {
        throw new TypeError('The listener must be a function');
      }

      var listener = new EE(fn, context || emitter, once),
          evt = prefix ? prefix + event : event;
      if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);else emitter._events[evt] = [emitter._events[evt], listener];
      return emitter;
    }
    /**
     * Clear event by name.
     *
     * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
     * @param {(String|Symbol)} evt The Event name.
     * @private
     */


    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0) emitter._events = new Events();else delete emitter._events[evt];
    }
    /**
     * Minimal `EventEmitter` interface that is molded against the Node.js
     * `EventEmitter` interface.
     *
     * @constructor
     * @public
     */


    function EventEmitter() {
      this._events = new Events();
      this._eventsCount = 0;
    }
    /**
     * Return an array listing the events for which the emitter has registered
     * listeners.
     *
     * @returns {Array}
     * @public
     */


    EventEmitter.prototype.eventNames = function eventNames() {
      var names = [],
          events,
          name;
      if (this._eventsCount === 0) return names;

      for (name in events = this._events) {
        if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
      }

      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
      }

      return names;
    };
    /**
     * Return the listeners registered for a given event.
     *
     * @param {(String|Symbol)} event The event name.
     * @returns {Array} The registered listeners.
     * @public
     */


    EventEmitter.prototype.listeners = function listeners(event) {
      var evt = prefix ? prefix + event : event,
          handlers = this._events[evt];
      if (!handlers) return [];
      if (handlers.fn) return [handlers.fn];

      for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
        ee[i] = handlers[i].fn;
      }

      return ee;
    };
    /**
     * Return the number of listeners listening to a given event.
     *
     * @param {(String|Symbol)} event The event name.
     * @returns {Number} The number of listeners.
     * @public
     */


    EventEmitter.prototype.listenerCount = function listenerCount(event) {
      var evt = prefix ? prefix + event : event,
          listeners = this._events[evt];
      if (!listeners) return 0;
      if (listeners.fn) return 1;
      return listeners.length;
    };
    /**
     * Calls each of the listeners registered for a given event.
     *
     * @param {(String|Symbol)} event The event name.
     * @returns {Boolean} `true` if the event had listeners, else `false`.
     * @public
     */


    EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return false;
      var listeners = this._events[evt],
          len = arguments.length,
          args,
          i;

      if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

        switch (len) {
          case 1:
            return listeners.fn.call(listeners.context), true;

          case 2:
            return listeners.fn.call(listeners.context, a1), true;

          case 3:
            return listeners.fn.call(listeners.context, a1, a2), true;

          case 4:
            return listeners.fn.call(listeners.context, a1, a2, a3), true;

          case 5:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;

          case 6:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }

        for (i = 1, args = new Array(len - 1); i < len; i++) {
          args[i - 1] = arguments[i];
        }

        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length,
            j;

        for (i = 0; i < length; i++) {
          if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

          switch (len) {
            case 1:
              listeners[i].fn.call(listeners[i].context);
              break;

            case 2:
              listeners[i].fn.call(listeners[i].context, a1);
              break;

            case 3:
              listeners[i].fn.call(listeners[i].context, a1, a2);
              break;

            case 4:
              listeners[i].fn.call(listeners[i].context, a1, a2, a3);
              break;

            default:
              if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
                args[j - 1] = arguments[j];
              }
              listeners[i].fn.apply(listeners[i].context, args);
          }
        }
      }

      return true;
    };
    /**
     * Add a listener for a given event.
     *
     * @param {(String|Symbol)} event The event name.
     * @param {Function} fn The listener function.
     * @param {*} [context=this] The context to invoke the listener with.
     * @returns {EventEmitter} `this`.
     * @public
     */


    EventEmitter.prototype.on = function on(event, fn, context) {
      return addListener(this, event, fn, context, false);
    };
    /**
     * Add a one-time listener for a given event.
     *
     * @param {(String|Symbol)} event The event name.
     * @param {Function} fn The listener function.
     * @param {*} [context=this] The context to invoke the listener with.
     * @returns {EventEmitter} `this`.
     * @public
     */


    EventEmitter.prototype.once = function once(event, fn, context) {
      return addListener(this, event, fn, context, true);
    };
    /**
     * Remove the listeners of a given event.
     *
     * @param {(String|Symbol)} event The event name.
     * @param {Function} fn Only remove the listeners that match this function.
     * @param {*} context Only remove the listeners that have this context.
     * @param {Boolean} once Only remove one-time listeners.
     * @returns {EventEmitter} `this`.
     * @public
     */


    EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return this;

      if (!fn) {
        clearEvent(this, evt);
        return this;
      }

      var listeners = this._events[evt];

      if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
          clearEvent(this, evt);
        }
      } else {
        for (var i = 0, events = [], length = listeners.length; i < length; i++) {
          if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
            events.push(listeners[i]);
          }
        } //
        // Reset the array, or remove it completely if we have no more listeners.
        //


        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;else clearEvent(this, evt);
      }

      return this;
    };
    /**
     * Remove all listeners, or those of the specified event.
     *
     * @param {(String|Symbol)} [event] The event name.
     * @returns {EventEmitter} `this`.
     * @public
     */


    EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
      var evt;

      if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) clearEvent(this, evt);
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }

      return this;
    }; //
    // Alias methods names because people roll like that.
    //


    EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
    EventEmitter.prototype.addListener = EventEmitter.prototype.on; //
    // Expose the prefix.
    //

    EventEmitter.prefixed = prefix; //
    // Allow `EventEmitter` to be imported as module namespace.
    //

    EventEmitter.EventEmitter = EventEmitter; //
    // Expose the module.
    //

    if (true) {
      module.exports = EventEmitter;
    }
    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mine/mine.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mine/mine.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMineMinePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title >我的</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content  padding> \r\n  <!-- <div *ngIf=\"notLogin\">\r\n  <ion-card>\r\n    <ion-card-header class='ion-text-center'>\r\n      登录daoyun,体验更多功能\r\n    </ion-card-header>\r\n    <ion-card-content class='ion-text-center'>\r\n      <button ion-button outline size=\"small\" (click)=\"showModal()\">登陆/注册</button>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</div> -->\r\n  <div  >\r\n    <ion-list class=\"top-list\"  >\r\n      <ion-item button detail  routerLink=\"/mine/user-info\" >\r\n        <ion-avatar item-start>\r\n          <!-- <img src=\"{{headface}}\" /> -->\r\n          <div class=\"profile_icon_blue2\">{{userinfo.name[0]}}</div>\r\n        </ion-avatar>\r\n      <ion-label>\r\n        <ion-text color=\"primary\">\r\n          <h2>&nbsp;&nbsp;&nbsp;{{userinfo.name}}</h2>\r\n        </ion-text>\r\n        <ion-text>\r\n          <p>&nbsp;&nbsp;&nbsp;查看个人信息或编辑信息</p>\r\n        </ion-text>\r\n      </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-item>\r\n      <img src=\"/assets/img/banner2.png\" alt=\"\" style=\"margin: 0 auto; max-height: 130px;\">\r\n  </ion-item>\r\n    <!-- <ion-list>\r\n      <ion-item >\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-label>\r\n              <ion-text color=\"primary\" class='ion-text-center'>\r\n                <h2>0</h2>\r\n              </ion-text>\r\n              <ion-text class='ion-text-center'>\r\n                <p>经验值</p>\r\n              </ion-text>\r\n            </ion-label>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-label>\r\n              <ion-text color=\"primary\" class='ion-text-center'>\r\n                <h2>0</h2>\r\n              </ion-text>\r\n              <ion-text class='ion-text-center'>\r\n                <p>心意</p>\r\n              </ion-text>\r\n            </ion-label>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-label>\r\n              <ion-text color=\"primary\" class='ion-text-center'>\r\n                <h2>0</h2>\r\n              </ion-text>\r\n              <ion-text class='ion-text-center' >\r\n                <p>魅力值</p>\r\n              </ion-text>\r\n            </ion-label>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-label>\r\n              <ion-text color=\"primary\" class='ion-text-center'>\r\n                <h2>0</h2>\r\n              </ion-text>\r\n              <ion-text class='ion-text-center'>\r\n                <p>蓝豆</p>\r\n              </ion-text>\r\n            </ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      </ion-item>\r\n    </ion-list> -->\r\n\r\n    <ion-list>\r\n      <ion-item detail routerLink=\"/mine/share-friends\">\r\n        <ion-label>分享给朋友</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>联系客服</ion-label>  \r\n        <ion-note slot=\"end\"><a href=\"tel:10086\">拨打电话10086</a></ion-note>\r\n      </ion-item>\r\n    \r\n      <ion-item detail routerLink=\"/mine/edit-account\">\r\n        <ion-label>账号安全</ion-label>\r\n      </ion-item>\r\n      <ion-item detail routerLink=\"/mine/about-us\">\r\n        <ion-label>关于我们</ion-label>\r\n      </ion-item>    \r\n      <ion-item  (click)=\"checkVersion()\">\r\n        <ion-label>\r\n          <ion-text  >\r\n            <h2>版本号</h2>\r\n          </ion-text>\r\n          <ion-text >\r\n            <p>V1.0</p>\r\n          </ion-text>\r\n        </ion-label>\r\n        <ion-note slot=\"end\">检查更新</ion-note>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <div style=\"text-align: center;\" class=\"ion-padding\" >\r\n      <ion-button expand=\"full\" shape='round' fill='outline' color=\"danger\" (click)=\"logout()\">退出当前账号</ion-button>\r\n    </div>\r\n\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/mine/mine-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/mine/mine-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: MinePageRoutingModule */

  /***/
  function srcAppPagesMineMineRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MinePageRoutingModule", function () {
      return MinePageRoutingModule;
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


    var _mine_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./mine.page */
    "./src/app/pages/mine/mine.page.ts");

    var routes = [{
      path: '',
      component: _mine_page__WEBPACK_IMPORTED_MODULE_3__["MinePage"]
    }, {
      path: 'user-info',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | user-info-user-info-module */
        "user-info-user-info-module").then(__webpack_require__.bind(null,
        /*! ./user-info/user-info.module */
        "./src/app/pages/mine/user-info/user-info.module.ts")).then(function (m) {
          return m.UserInfoPageModule;
        });
      }
    }, {
      path: 'edit-account',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | edit-account-edit-account-module */
        "edit-account-edit-account-module").then(__webpack_require__.bind(null,
        /*! ./edit-account/edit-account.module */
        "./src/app/pages/mine/edit-account/edit-account.module.ts")).then(function (m) {
          return m.EditAccountPageModule;
        });
      }
    }, {
      path: 'about-us',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | about-us-about-us-module */
        "about-us-about-us-module").then(__webpack_require__.bind(null,
        /*! ./about-us/about-us.module */
        "./src/app/pages/mine/about-us/about-us.module.ts")).then(function (m) {
          return m.AboutUsPageModule;
        });
      }
    }, {
      path: 'set-account',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | set-account-set-account-module */
        "set-account-set-account-module").then(__webpack_require__.bind(null,
        /*! ./set-account/set-account.module */
        "./src/app/pages/mine/set-account/set-account.module.ts")).then(function (m) {
          return m.SetAccountPageModule;
        });
      }
    }, {
      path: 'edit-password',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | edit-password-edit-password-module */
        "edit-password-edit-password-module").then(__webpack_require__.bind(null,
        /*! ./edit-password/edit-password.module */
        "./src/app/pages/mine/edit-password/edit-password.module.ts")).then(function (m) {
          return m.EditPasswordPageModule;
        });
      }
    }, {
      path: 'share-friends',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | share-friends-share-friends-module */
        "share-friends-share-friends-module").then(__webpack_require__.bind(null,
        /*! ./share-friends/share-friends.module */
        "./src/app/pages/mine/share-friends/share-friends.module.ts")).then(function (m) {
          return m.ShareFriendsPageModule;
        });
      }
    }, {
      path: 'headfaces',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | headfaces-headfaces-module */
        "headfaces-headfaces-module").then(__webpack_require__.bind(null,
        /*! ./headfaces/headfaces.module */
        "./src/app/pages/mine/headfaces/headfaces.module.ts")).then(function (m) {
          return m.HeadfacesPageModule;
        });
      }
    }];

    var MinePageRoutingModule = function MinePageRoutingModule() {
      _classCallCheck(this, MinePageRoutingModule);
    };

    MinePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MinePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/mine/mine.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/mine/mine.module.ts ***!
    \*******************************************/

  /*! exports provided: MinePageModule */

  /***/
  function srcAppPagesMineMineModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MinePageModule", function () {
      return MinePageModule;
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


    var _mine_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./mine-routing.module */
    "./src/app/pages/mine/mine-routing.module.ts");
    /* harmony import */


    var _mine_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./mine.page */
    "./src/app/pages/mine/mine.page.ts");

    var MinePageModule = function MinePageModule() {
      _classCallCheck(this, MinePageModule);
    };

    MinePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _mine_routing_module__WEBPACK_IMPORTED_MODULE_5__["MinePageRoutingModule"]],
      declarations: [_mine_page__WEBPACK_IMPORTED_MODULE_6__["MinePage"]]
    })], MinePageModule);
    /***/
  },

  /***/
  "./src/app/pages/mine/mine.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/mine/mine.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMineMinePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "page-mine .toolbar-title-md {\n  text-align: center;\n}\npage-mine .scroll-content {\n  overflow: hidden;\n}\npage-mine .bg-color {\n  background-color: #efeeee;\n}\npage-mine .top-list {\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWluZS9EOlxcaHhza3l1blxcbW9iaWxlXFxkYW95dW4vc3JjXFxhcHBcXHBhZ2VzXFxtaW5lXFxtaW5lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWluZS9taW5lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQkk7RUFDRSxrQkFBQTtBQ2xCTjtBRHFCSTtFQUNFLGdCQUFBO0FDbkJOO0FEc0JJO0VBQ0UseUJBQUE7QUNwQk47QUR1Qkk7RUFDRSxnQkFBQTtBQ3JCTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21pbmUvbWluZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlLW1vcmUge1xyXG4vLyAgICAgLmNhcmR7XHJcbi8vICAgICAgICAgbWFyZ2luOiAwO1xyXG4vLyAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLm1hcmdpbi10b3B7XHJcbi8vICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbi8vICAgICB9XHJcbi8vICAgICAubWFyZ2luLWJvdHRvbSB7XHJcbi8vICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuLy8gICAgIH1cclxuLy8gICAgIGlvbi1saXN0LWhlYWRlciAubGFiZWwge1xyXG4vLyAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbi8vICAgICB9XHJcbi8vICAgICAubGlzdCB7XHJcbi8vICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5wYWdlLW1pbmUge1xyXG4gICAgLnRvb2xiYXItdGl0bGUtbWR7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICBcclxuICAgIC5zY3JvbGwtY29udGVudHtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICBcclxuICAgIC5iZy1jb2xvcntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWVlZTtcclxuICAgIH1cclxuICBcclxuICAgIC50b3AtbGlzdHtcclxuICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIH1cclxuICBcclxuICB9IiwicGFnZS1taW5lIC50b29sYmFyLXRpdGxlLW1kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxucGFnZS1taW5lIC5zY3JvbGwtY29udGVudCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5wYWdlLW1pbmUgLmJnLWNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWVlZTtcbn1cbnBhZ2UtbWluZSAudG9wLWxpc3Qge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/mine/mine.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/mine/mine.page.ts ***!
    \*****************************************/

  /*! exports provided: MinePage */

  /***/
  function srcAppPagesMineMinePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MinePage", function () {
      return MinePage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _login_login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../login/login.page */
    "./src/app/pages/login/login.page.ts");
    /* harmony import */


    var src_app_shared_services_mylocalstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/mylocalstorage.service */
    "./src/app/shared/services/mylocalstorage.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/services/zr-services.service */
    "./src/app/shared/services/zr-services.service.ts");
    /* harmony import */


    var src_app_shared_services_event_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/services/event.service */
    "./src/app/shared/services/event.service.ts"); // import { UserInfo } from 'src/app/shared/classes/userinfo';


    var MinePage = /*#__PURE__*/function () {
      function MinePage(modalController, localStorageService, eventService, navCtrl, router, alertController, zrServices) {
        _classCallCheck(this, MinePage);

        this.modalController = modalController;
        this.localStorageService = localStorageService;
        this.eventService = eventService;
        this.navCtrl = navCtrl;
        this.router = router;
        this.alertController = alertController;
        this.zrServices = zrServices;
        this.notLogin = true;
        this.logined = false;
        this.userinfo = {
          "userId": '',
          "name": '' // "sex": '',
          // "phone":'',
          // "email": '',
          // "age": '',
          // "roleId": '',
          // "birthDate": '',
          // "school": '',
          // "academy": '',
          // "major": '',
          // "creationDate": '',
          // "creator": '',
          // "modifier": '',
          // "modificationDate": '',
          // "password": ''

        };
      }

      _createClass(MinePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "showModal",
        value: function showModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _login_login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
                    });

                  case 2:
                    modal = _context.sent;
                    modal.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this = this;

          this.userId = this.localStorageService.get('uid', ''); // console.log(this.userinfo)

          this.loadUserInfo();
          this.eventService.event.on('userupdate', function () {
            _this.loadUserInfo();
          }); // this.loadUserInfo()
          // console.log('mine view in ')
          // console.log(this.userinfo.name)
          // this.loadUserPage();
          // console.log(this.logined)
        } // loadUserPage() {
        //   console.log('load in ')
        //   let val=this.localStorageService.get('UserId','')
        //     if(val!=null){
        //       this.notLogin = false
        //       this.logined = true
        //     }        
        //     else{
        //       this.notLogin = true
        //       this.logined = false
        //     }
        //   }
        // 注销

      }, {
        key: "loadUserInfo",
        value: function loadUserInfo() {
          var _this2 = this;

          this.zrServices.getUserByUserId(this.userId).then(function (result) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      // console.log('here:', result.data);
                      if (result.success) {
                        this.userinfo.name = result.data.name;
                      }

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          })["catch"](function (error) {// console.log('获取用户信息失败', error)
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.localStorageService.remove('Token');
          this.localStorageService.remove('uid');
          this.router.navigateByUrl('/login');
        } //

      }, {
        key: "checkVersion",
        value: function checkVersion() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      header: '升级信息',
                      message: '你已安装了最新版本',
                      buttons: ['ok']
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return MinePage;
    }();

    MinePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_app_shared_services_mylocalstorage_service__WEBPACK_IMPORTED_MODULE_4__["MylocalstorageService"]
      }, {
        type: src_app_shared_services_event_service__WEBPACK_IMPORTED_MODULE_7__["EventService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: src_app_shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_6__["ZrServicesService"]
      }];
    };

    MinePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mine',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mine.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mine/mine.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mine.page.scss */
      "./src/app/pages/mine/mine.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_shared_services_mylocalstorage_service__WEBPACK_IMPORTED_MODULE_4__["MylocalstorageService"], src_app_shared_services_event_service__WEBPACK_IMPORTED_MODULE_7__["EventService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], src_app_shared_services_zr_services_service__WEBPACK_IMPORTED_MODULE_6__["ZrServicesService"]])], MinePage);
    /***/
  },

  /***/
  "./src/app/shared/services/event.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/shared/services/event.service.ts ***!
    \**************************************************/

  /*! exports provided: EventService */

  /***/
  function srcAppSharedServicesEventServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventService", function () {
      return EventService;
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


    var eventemitter3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! eventemitter3 */
    "./node_modules/eventemitter3/index.js");
    /* harmony import */


    var eventemitter3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_2__);

    var EventService = function EventService() {
      _classCallCheck(this, EventService);

      this.event = new eventemitter3__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    };

    EventService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], EventService);
    /***/
  }
}]);
//# sourceMappingURL=mine-mine-module-es5.js.map