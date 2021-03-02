(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _containers_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/home/home.component */ "./src/app/containers/home/home.component.ts");
/* harmony import */ var _containers_kitchens_kitchens_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/kitchens/kitchens.component */ "./src/app/containers/kitchens/kitchens.component.ts");
/* harmony import */ var _containers_bathrooms_bathrooms_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/bathrooms/bathrooms.component */ "./src/app/containers/bathrooms/bathrooms.component.ts");
/* harmony import */ var _containers_bedrooms_bedrooms_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/bedrooms/bedrooms.component */ "./src/app/containers/bedrooms/bedrooms.component.ts");
/* harmony import */ var _containers_livingrooms_livingrooms_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers/livingrooms/livingrooms.component */ "./src/app/containers/livingrooms/livingrooms.component.ts");
/* harmony import */ var _containers_projecting_projecting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers/projecting/projecting.component */ "./src/app/containers/projecting/projecting.component.ts");
/* harmony import */ var _containers_firms_firms_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./containers/firms/firms.component */ "./src/app/containers/firms/firms.component.ts");
/* harmony import */ var _containers_office_furniture_office_furniture_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./containers/office-furniture/office-furniture.component */ "./src/app/containers/office-furniture/office-furniture.component.ts");











var routes = [{
        path: 'home',
        component: _containers_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
        path: 'kitchens',
        component: _containers_kitchens_kitchens_component__WEBPACK_IMPORTED_MODULE_4__["KitchensComponent"]
    }, {
        path: 'livingrooms',
        component: _containers_livingrooms_livingrooms_component__WEBPACK_IMPORTED_MODULE_7__["LivingroomsComponent"]
    }, {
        path: 'firms',
        component: _containers_firms_firms_component__WEBPACK_IMPORTED_MODULE_9__["FirmsComponent"]
    }, {
        path: 'office-furniture',
        component: _containers_office_furniture_office_furniture_component__WEBPACK_IMPORTED_MODULE_10__["OfficeFurnitureComponent"]
    }, {
        path: 'bathrooms',
        component: _containers_bathrooms_bathrooms_component__WEBPACK_IMPORTED_MODULE_5__["BathroomsComponent"]
    }, {
        path: 'bedrooms',
        component: _containers_bedrooms_bedrooms_component__WEBPACK_IMPORTED_MODULE_6__["BedroomsComponent"]
    }, {
        path: 'projecting',
        component: _containers_projecting_projecting_component__WEBPACK_IMPORTED_MODULE_8__["ProjectingComponent"]
    }, {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }, {
        path: '**',
        redirectTo: '/home'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container [hasBackdrop]=\"false\"\n                       class=\"mj-side-nav\">\n  <mat-sidenav #leftSideDrawer\n               role=\"navigation\"\n               class=\"navigation_menu_left\">\n\n    <div class=\"mj-side-nav-close-btn\"\n         (click)=\"toggleSideMenues()\">\n      <mat-icon class=\"mj-side-nav-close-icon\">close</mat-icon>\n      <span class=\"mj-side-nav-close-text\">ZATVORI</span>\n    </div>\n\n    <div class=\"mj-side-nav-list-wrap\">\n      <div class=\"mj-side-nav-title\">Sadržaj</div>\n      <mat-nav-list>\n        <a mat-list-item\n           routerLink=\"/home\"\n           routerLinkActive=\"is-active\"\n           [routerLinkActiveOptions]=\"{exact:true}\"\n           (click)=\"toggleSideMenues()\"\n           (mouseover)=\"onNavigationHover('livingrooms/livingroom_01_opt')\">\n          <span class=\"label\">- POČETNA</span>\n        </a>\n        <a mat-list-item\n           routerLink=\"/livingrooms\"\n           routerLinkActive=\"is-active\"\n           [routerLinkActiveOptions]=\"{exact:true}\"\n           (click)=\"toggleSideMenues()\"\n           (mouseover)=\"onNavigationHover('livingrooms/livingroom_02_opt')\">\n          <span class=\"label\">- DNEVNE SOBE</span>\n        </a>\n        <a mat-list-item\n           routerLink=\"/kitchens\"\n           routerLinkActive=\"is-active\"\n           (click)=\"toggleSideMenues()\"\n           (mouseover)=\"onNavigationHover('kitchens/kitchen_03_opt')\">\n          <span class=\"label\">- KUHINJE</span>\n        </a>\n        <a mat-list-item\n           routerLink=\"/bathrooms\"\n           routerLinkActive=\"is-active\"\n           (click)=\"toggleSideMenues()\"\n           (mouseover)=\"onNavigationHover('bathrooms/bathroom_03_opt')\">\n          <span class=\"label\">- KUPATILA</span>\n        </a>\n        <a mat-list-item\n           routerLink=\"/bedrooms\"\n           routerLinkActive=\"is-active\"\n           (click)=\"toggleSideMenues()\"\n           (mouseover)=\"onNavigationHover('bedrooms/bedroom_01_opt')\">\n          <span class=\"label\">- SPAVAĆE SOBE</span>\n        </a>\n        <a mat-list-item\n           routerLink=\"/office-furniture\"\n           routerLinkActive=\"is-active\"\n           (click)=\"toggleSideMenues()\"\n           (mouseover)=\"onNavigationHover('office-furniture/livingroom_03_opt')\">\n          <span class=\"label\">- KANCELARIJSKI NAMEŠTAJ</span>\n        </a>\n        <a mat-list-item\n           routerLink=\"/firms\"\n           routerLinkActive=\"is-active\"\n           (click)=\"toggleSideMenues()\"\n           (mouseover)=\"onNavigationHover('firms/new_visual_01')\">\n          <span class=\"label\">- FIRME</span>\n        </a>\n        <a mat-list-item\n           routerLink=\"/projecting\"\n           routerLinkActive=\"is-active\"\n           (click)=\"toggleSideMenues()\"\n           (mouseover)=\"onNavigationHover('projektovanje_opt')\">\n          <span class=\"label\">- PROJEKTOVANJE</span>\n        </a>\n        <a mat-list-item\n           (click)=\"toggleSideMenues()\"\n           [ngx-scroll-to]=\"'o-nama'\">\n          <span class=\"label\">- O NAMA</span>\n        </a>\n        <a mat-list-item\n           (click)=\"toggleSideMenues()\"\n           [ngx-scroll-to]=\"'kontakt'\">\n          <span class=\"label\">- KONTAKT</span>\n        </a>\n      </mat-nav-list>\n    </div>\n  </mat-sidenav>\n  <mat-sidenav position=\"end\"\n               class=\"navigation_menu_right\"\n               #rightSideDrawer>\n    <div fxLayout=\"column\"\n         fxLayoutAlign=\"center center\"\n         class=\"sidenav-img-container\">\n      <div class=\"sidenav-img-overlay\">\n        <img mat-card-image\n             src='assets/img/{{rightSideDrawerImgSrc}}.png'></div>\n    </div>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar class=\"mj-header-toolbar\"\n                 fxLayout=\"row\">\n      <div class=\"mj-ham-btn\" fxFlex=\"10\">\n        <a (click)=\"toggleSideMenues()\">\n          <mat-icon class=\"mj-ham-btn-icon\">menu</mat-icon>\n          <span class=\"mj-ham-btn-text\">Sadržaj</span>\n        </a>\n      </div>\n      <div class=\"mj-logo-text\" fxFlex=\"80\">\n        <img routerLink=\"ass\"\n             src=\"assets/img/logo_majorelle_croped.png\"\n             alt=\"\">\n      </div>\n      <div class=\"mj-social-btn-holder\" fxFlex=\"10\">\n        <a>\n          <span class=\"fa fa-facebook\"></span>\n        </a>\n        <a href=\"https://www.instagram.com/majorelle_furniture/\" target=\"_blank\">\n          <span class=\"fa fa-instagram\"></span>\n        </a>\n      </div>\n    </mat-toolbar>\n    <main id=\"main_cont\">\n      <router-outlet></router-outlet>\n    </main>\n    <app-footer></app-footer>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes slide-down {\n  0% {\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px);\n    opacity: 0; }\n  50% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: .6; }\n  100% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: 0; } }\n\n@keyframes slide-down {\n  0% {\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px);\n    opacity: 0; }\n  50% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: .6; }\n  100% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: 0; } }\n\n@-webkit-keyframes slide-down-on-hover {\n  0% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: .5; }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 1; } }\n\n@keyframes slide-down-on-hover {\n  0% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: .5; }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 1; } }\n\nmat-sidenav-container,\nmat-sidenav-content,\nmat-sidenav {\n  overflow: hidden; }\n\nmat-sidenav-container.mat-drawer-opened {\n  max-height: 100vh; }\n\n.navigation_menu_left,\n.navigation_menu_right {\n  width: 50vw; }\n\n.navigation_menu_left {\n  background-color: #211f1e;\n  padding: 20px 0 0 56px; }\n\n@media only screen and (max-width: 576px) {\n    .navigation_menu_left {\n      padding: 20px 0 0 6px; } }\n\n.navigation_menu_left .mj-side-nav-close-btn {\n    display: flex;\n    cursor: pointer;\n    align-items: center;\n    color: #fff;\n    opacity: .5;\n    transition: opacity .3s ease; }\n\n.navigation_menu_left .mj-side-nav-close-btn mat-icon {\n      font-size: 4rem;\n      width: 4rem;\n      height: 4rem; }\n\n.navigation_menu_left .mj-side-nav-close-btn:hover {\n      opacity: 1; }\n\n.navigation_menu_left .mj-side-nav-list-wrap {\n    flex-direction: column;\n    justify-content: center;\n    height: 100%;\n    margin-top: 2rem; }\n\n@media only screen and (max-width: 576px) {\n      .navigation_menu_left .mj-side-nav-list-wrap {\n        display: unset; }\n        .navigation_menu_left .mj-side-nav-list-wrap .mat-list-item {\n          height: 3.2rem !important; } }\n\n.navigation_menu_left .mj-side-nav-title {\n    font-size: 3.2rem;\n    font-family: \"Butler-Regular\";\n    color: #494644;\n    position: relative;\n    padding-bottom: 3rem; }\n\n.navigation_menu_left .mj-side-nav-title::before {\n      content: '';\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      background-color: #494644;\n      width: 4rem;\n      height: 2px; }\n\n@media only screen and (max-width: 576px) {\n      .navigation_menu_left .mj-side-nav-title {\n        display: none; } }\n\n.navigation_menu_left .label {\n    color: rgba(255, 255, 255, 0.8);\n    font-family: \"Abel-Regular\";\n    font-size: 24px;\n    letter-spacing: 0.4rem;\n    text-transform: uppercase;\n    transition: all .3s ease-in-out; }\n\n.navigation_menu_left .label:hover {\n      color: #bb9a6a; }\n\n@media only screen and (max-width: 576px) {\n      .navigation_menu_left .label {\n        font-size: 1.2rem; }\n        .navigation_menu_left .label a.mat-list-base .mat-list-item {\n          height: 1.2rem !important; } }\n\n.navigation_menu_right {\n  background-color: #292725; }\n\n.navigation_menu_right .sidenav-img-container {\n    height: 100%; }\n\n.navigation_menu_right .sidenav-img-overlay {\n    display: block;\n    position: relative; }\n\n@media only screen and (max-width: 576px) {\n      .navigation_menu_right .sidenav-img-overlay {\n        display: none; } }\n\n.navigation_menu_right .sidenav-img-overlay:before {\n    display: block;\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    box-shadow: inset 0 0 3rem 3rem #292725; }\n\n.navigation_menu_right img {\n    width: 40vw;\n    height: auto;\n    max-width: 40vw; }\n\n.is-active .label {\n  color: #bb9a6a !important; }\n\n.mj-header-toolbar {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  position: absolute;\n  background-color: transparent;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  width: 100% !important; }\n\n@media only screen and (max-width: 768px) {\n    .mj-header-toolbar {\n      flex-direction: row-reverse; } }\n\n@media only screen and (max-width: 768px) {\n    .mj-header-toolbar .mj-ham-btn-text {\n      display: none; } }\n\n.mj-header-toolbar .mj-logo-text {\n    transition: all .3s ease;\n    display: flex;\n    align-self: center;\n    justify-content: center;\n    width: 100%;\n    height: 6.4rem; }\n\n.mj-header-toolbar .mj-logo-text img {\n      padding-top: 0.4rem;\n      height: 12rem;\n      width: auto;\n      display: flex;\n      justify-content: center;\n      transition: all .3s ease; }\n\n@media only screen and (max-width: 576px) {\n        .mj-header-toolbar .mj-logo-text img {\n          padding-top: 1rem;\n          height: 5.4rem; } }\n\n@media only screen and (max-width: 768px) {\n    .mj-header-toolbar .mj-social-btn-holder {\n      display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N0ZXZhbm5uL3dvcmtzcGFjZS9tYWpvcmVsbGUtcHJvamVjdC9zcmMvc2Fzcy1maWxlcy9hbmltYXRpb25zLnNjc3MiLCIvaG9tZS9zdGV2YW5ubi93b3Jrc3BhY2UvbWFqb3JlbGxlLXByb2plY3Qvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9zdGV2YW5ubi93b3Jrc3BhY2UvbWFqb3JlbGxlLXByb2plY3Qvc3JjL3Nhc3MtZmlsZXMvdmFyaWFibGVzLnNjc3MiLCIvaG9tZS9zdGV2YW5ubi93b3Jrc3BhY2UvbWFqb3JlbGxlLXByb2plY3Qvc3JjL3Nhc3MtZmlsZXMvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRTtJQUNFLG9DQUE0QjtZQUE1Qiw0QkFBNEI7SUFDNUIsVUFBVSxFQUFBO0VBR1o7SUFDRSxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLFdBQVcsRUFBQTtFQUdiO0lBQ0UsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixVQUFVLEVBQUEsRUFBQTs7QUFiZDtFQUNFO0lBQ0Usb0NBQTRCO1lBQTVCLDRCQUE0QjtJQUM1QixVQUFVLEVBQUE7RUFHWjtJQUNFLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsV0FBVyxFQUFBO0VBR2I7SUFDRSxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLFVBQVUsRUFBQSxFQUFBOztBQUlkO0VBQ0c7SUFDRSxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLFdBQVcsRUFBQTtFQUdiO0lBQ0Usa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQixVQUFVLEVBQUEsRUFBQTs7QUFSZjtFQUNHO0lBQ0UsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixXQUFXLEVBQUE7RUFHYjtJQUNFLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsVUFBVSxFQUFBLEVBQUE7O0FDdkJmOzs7RUFHRSxnQkFBZ0IsRUFBQTs7QUFJbEI7RUFFSSxpQkFBaUIsRUFBQTs7QUFJckI7O0VBRUUsV0FBVyxFQUFBOztBQUdiO0VBQ0UseUJDdEJrQjtFRHVCbEIsc0JBQXNCLEVBQUE7O0FFUXBCO0lGVko7TUFLSSxxQkFBcUIsRUFBQSxFQThFeEI7O0FBbkZEO0lBU0ksYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFdBQVc7SUFDWCw0QkFBNEIsRUFBQTs7QUFkaEM7TUFpQk0sZUFBZTtNQUNmLFdBQVc7TUFDWCxZQUFZLEVBQUE7O0FBbkJsQjtNQXVCTSxVQUFVLEVBQUE7O0FBdkJoQjtJQTRCSSxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixnQkFBZ0IsRUFBQTs7QUVyQmhCO01GVko7UUFrQ00sY0FBYyxFQUFBO1FBbENwQjtVQW9DUSx5QkFBeUIsRUFBQSxFQUMxQjs7QUFyQ1A7SUEwQ0ksaUJBQWlCO0lBQ2pCLDZCQzdDZ0M7SUQ4Q2hDLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsb0JBQW9CLEVBQUE7O0FBOUN4QjtNQWlETSxXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLFNBQVM7TUFDVCxPQUFPO01BQ1AseUJBQXlCO01BQ3pCLFdBQVc7TUFDWCxXQUFXLEVBQUE7O0FFN0NiO01GVko7UUEyRE0sYUFBYSxFQUFBLEVBRWhCOztBQTdESDtJQWdFSSwrQkNoRjRCO0lEaUY1QiwyQkMvRGtDO0lEZ0VsQyxlQUFlO0lBQ2Ysc0JDL0VvQjtJRGdGcEIseUJBQXlCO0lBQ3pCLCtCQUErQixFQUFBOztBQXJFbkM7TUF3RU0sY0MxRnNCLEVBQUE7O0FDNEJ4QjtNRlZKO1FBNEVNLGlCQUFpQixFQUFBO1FBNUV2QjtVQThFUSx5QkFBeUIsRUFBQSxFQUMxQjs7QUFNUDtFQUNFLHlCQzFHd0IsRUFBQTs7QUR5RzFCO0lBSUksWUFBWSxFQUFBOztBQUpoQjtJQVFJLGNBQWM7SUFDZCxrQkFBa0IsRUFBQTs7QUVwRmxCO01GMkVKO1FBV00sYUFBYSxFQUFBLEVBRWhCOztBQWJIO0lBZ0JJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBR1osdUNDaElzQixFQUFBOztBRHlHMUI7SUEyQkksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlLEVBQUE7O0FBSW5CO0VBQ0UseUJBQXFDLEVBQUE7O0FBSXZDO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixNQUFNO0VBQ04sT0FBTztFQUNQLFVBQVU7RUFDVixzQkFBc0IsRUFBQTs7QUUxSHBCO0lGaUhKO01BWUksMkJBQTJCLEVBQUEsRUF3QzlCOztBRXJLRztJRmlISjtNQWtCTSxhQUFhLEVBQUEsRUFFaEI7O0FBcEJIO0lBdUJJLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsY0FBYyxFQUFBOztBQTVCbEI7TUErQk0sbUJBQW1CO01BQ25CLGFBQWE7TUFDYixXQUFXO01BRVgsYUFBYTtNQUNiLHVCQUF1QjtNQUN2Qix3QkFBd0IsRUFBQTs7QUV0SjFCO1FGaUhKO1VBd0NRLGlCQUFpQjtVQUNqQixjQUFjLEVBQUEsRUFFakI7O0FFNUpEO0lGaUhKO01BaURNLGFBQWEsRUFBQSxFQUVoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyBTbGlkZSBkb3duIGFuaW1hdGlvblxuQGtleWZyYW1lcyBzbGlkZS1kb3duIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICAgIG9wYWNpdHk6IC42O1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZS1kb3duLW9uLWhvdmVyIHtcbiAgIDAlIHtcbiAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICAgICBvcGFjaXR5OiAuNTtcbiAgIH1cblxuICAgMTAwJSB7XG4gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICBvcGFjaXR5OiAxO1xuICAgfVxuIH1cbiIsIkBpbXBvcnQgXCIuLi9zYXNzLWZpbGVzL2NvbXBvbmVudC1hc3Nlc3RzXCI7XG5cbi8vLyBTdHlsaW5nIHNpZGUgbmF2XG5tYXQtc2lkZW5hdi1jb250YWluZXIsXG5tYXQtc2lkZW5hdi1jb250ZW50LFxubWF0LXNpZGVuYXYge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vLyBmaXhpbiBoZWlnaHQgd2hlbiBzaWRlIG1lbnUgaXMgIG9wZW5lZFxubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcbiAgJi5tYXQtZHJhd2VyLW9wZW5lZCB7XG4gICAgbWF4LWhlaWdodDogMTAwdmg7XG4gIH1cbn1cblxuLm5hdmlnYXRpb25fbWVudV9sZWZ0LFxuLm5hdmlnYXRpb25fbWVudV9yaWdodCB7XG4gIHdpZHRoOiA1MHZ3O1xufVxuXG4ubmF2aWdhdGlvbl9tZW51X2xlZnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1jb2xvcjtcbiAgcGFkZGluZzogMjBweCAwIDAgNTZweDtcblxuICBAaW5jbHVkZSByZXNwb25zaXZlKHNtKSB7XG4gICAgcGFkZGluZzogMjBweCAwIDAgNnB4O1xuICB9XG5cbiAgLm1qLXNpZGUtbmF2LWNsb3NlLWJ0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBvcGFjaXR5OiAuNTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcyBlYXNlO1xuXG4gICAgbWF0LWljb24ge1xuICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgICAgd2lkdGg6IDRyZW07XG4gICAgICBoZWlnaHQ6IDRyZW07XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuXG4gIC5tai1zaWRlLW5hdi1saXN0LXdyYXAge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG5cbiAgICBAaW5jbHVkZSByZXNwb25zaXZlKHNtKSB7XG4gICAgICBkaXNwbGF5OiB1bnNldDtcbiAgICAgIC5tYXQtbGlzdC1pdGVtIHtcbiAgICAgICAgaGVpZ2h0OiAzLjJyZW0gIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWotc2lkZS1uYXYtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMy4ycmVtO1xuICAgIGZvbnQtZmFtaWx5OiAkZmFuY3ktZm9udC1mYW1pbHk7XG4gICAgY29sb3I6ICM0OTQ2NDQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0OTQ2NDQ7XG4gICAgICB3aWR0aDogNHJlbTtcbiAgICAgIGhlaWdodDogMnB4O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIHJlc3BvbnNpdmUoc20pIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLmxhYmVsIHtcbiAgICBjb2xvcjogJG1qLWNvbG9yLXdoaXRlLWxpZ2h0O1xuICAgIGZvbnQtZmFtaWx5OiAkc2lkZS1tZW51LWZvbnQtZmFtaWx5O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogJG1qLXNwYWNpbmctc21hbGw7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogJG1qLXNlY29uZGFyeS1jb2xvcjtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSByZXNwb25zaXZlKHNtKSB7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIGEubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbSB7XG4gICAgICAgIGhlaWdodDogMS4ycmVtICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cblxuLm5hdmlnYXRpb25fbWVudV9yaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYXNlLWxpZ2h0LWNvbG9yO1xuXG4gIC5zaWRlbmF2LWltZy1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5zaWRlbmF2LWltZy1vdmVybGF5IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgQGluY2x1ZGUgcmVzcG9uc2l2ZShzbSkge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAuc2lkZW5hdi1pbWctb3ZlcmxheTpiZWZvcmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDAgM3JlbSAzcmVtICRiYXNlLWxpZ2h0LWNvbG9yO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDNyZW0gM3JlbSAkYmFzZS1saWdodC1jb2xvcjtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgM3JlbSAzcmVtICRiYXNlLWxpZ2h0LWNvbG9yO1xuICB9XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogNDB2dztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWF4LXdpZHRoOiA0MHZ3O1xuICB9XG59XG5cbi5pcy1hY3RpdmUgLmxhYmVsIHtcbiAgY29sb3I6ICRtai1zZWNvbmRhcnktY29sb3IgIWltcG9ydGFudDtcbn1cblxuLy8vIFN0eWxpbmcgdG9vbGJhciBoZWFkZXJcbi5tai1oZWFkZXItdG9vbGJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDI7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG5cbiAgQGluY2x1ZGUgcmVzcG9uc2l2ZShtZCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgfVxuXG4gIC5tai1oYW0tYnRuLXRleHQge1xuXG4gICAgQGluY2x1ZGUgcmVzcG9uc2l2ZShtZCkge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAubWotbG9nby10ZXh0IHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2LjRyZW07XG5cbiAgICBpbWcge1xuICAgICAgcGFkZGluZy10b3A6IDAuNHJlbTtcbiAgICAgIGhlaWdodDogMTJyZW07XG4gICAgICB3aWR0aDogYXV0bztcblxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xuXG4gICAgICBAaW5jbHVkZSByZXNwb25zaXZlKHNtKSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgICAgICBoZWlnaHQ6IDUuNHJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWotc29jaWFsLWJ0bi1ob2xkZXIge1xuXG4gICAgQGluY2x1ZGUgcmVzcG9uc2l2ZShtZCkge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cbiIsIiRiYXNlLWNvbG9yOiAjMjExZjFlICFkZWZhdWx0O1xuJGJhc2UtbGlnaHQtY29sb3I6ICMyOTI3MjUgIWRlZmF1bHQ7XG5cbiRtai1zZWNvbmRhcnktY29sb3I6ICNiYjlhNmEgIWRlZmF1bHQ7XG5cbiRtai1jb2xvci13aGl0ZS1saWdodDogcmdiYSgjZmZmLCAuOCkgIWRlZmF1bHQ7XG4kbWotY29sb3Itd2hpdGUtbGlnaHRlcjogcmdiYSgjZmZmLCAuNikgIWRlZmF1bHQ7XG5cbiRtai1zcGFjaW5nOiAuOHJlbSAhZGVmYXVsdDtcbiRtai1zcGFjaW5nLXNtYWxsOiAuNHJlbSAhZGVmYXVsdDtcbiRtai1zcGFjaW5nLWxhcmdlOiAxLjZyZW0gIWRlZmF1bHQ7XG5cbiRmb250LXVybDogJy4uL2Fzc2V0cy9mb250cy8nICFkZWZhdWx0O1xuJGltZy11cmw6ICcuLi9hc3NldHMvaW1nLycgIWRlZmF1bHQ7XG5cbiRmb250LWZhbWlseTogJ0xhdG8tTGlnaHQnIWRlZmF1bHQ7XG4kZm9udC1mYW1pbHktbGlnaHQ6ICdMYXRvLUxpZ2h0JyAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1ib2xkOiAnTGF0by1Cb2xkJyAhZGVmYXVsdDtcblxuJGZhbmN5LWZvbnQtZmFtaWx5OiAnQnV0bGVyLVJlZ3VsYXInICFkZWZhdWx0O1xuJGZhbmN5LWZvbnQtZmFtaWx5LWxpZ2h0OiAnQnV0bGVyLUxpZ2h0JyAhZGVmYXVsdDtcbiRmYW5jeS1mb250LWZhbWlseS1ib2xkOiAnQnV0bGVyLUJvbGQnICFkZWZhdWx0O1xuXG4kc2lkZS1tZW51LWZvbnQtZmFtaWx5OiAnQWJlbC1SZWd1bGFyJyAhZGVmYXVsdDtcblxuJG1qLXRvcC10by1ib3R0b20tZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsXG4gIHJnYmEoMCwgMCwgMCwgMSkgIDAlLFxuICByZ2JhKDAsIDAsIDAsIC45KSAyNSUsXG4gIHJnYmEoMCwgMCwgMCwgLjg1KTMwJSxcbiAgcmdiYSgwLCAwLCAwLCAuOCkgMzUlLFxuICByZ2JhKDAsIDAsIDAsIC43NSk0MCUsXG4gIHJnYmEoMCwgMCwgMCwgLjcpIDQ1JSxcbiAgcmdiYSgwLCAwLCAwLCAuNjUpNTAlLFxuICByZ2JhKDAsIDAsIDAsIC42KSA1NSUsXG4gIHJnYmEoMCwgMCwgMCwgLjUpIDY1JSxcbiAgcmdiYSgwLCAwLCAwLCAuNCkgNzUlLFxuICByZ2JhKDAsIDAsIDAsIC4zKSA4NSUsXG4gIHJnYmEoMCwgMCwgMCwgMCkgMTAwJSk7XG5cbiRtai1ib3R0b20tdG8tdG9wLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoMGRlZyxcbiAgcmdiYSgwLCAwLCAwLCAxKSAwJSxcbiAgcmdiYSgwLCAwLCAwLCAuOSkgMjUlLFxuICByZ2JhKDAsIDAsIDAsIC44NSkzMCUsXG4gIHJnYmEoMCwgMCwgMCwgLjgpIDM1JSxcbiAgcmdiYSgwLCAwLCAwLCAuNzUpNDAlLFxuICByZ2JhKDAsIDAsIDAsIC43KSA0NSUsXG4gIHJnYmEoMCwgMCwgMCwgLjY1KTUwJSxcbiAgcmdiYSgwLCAwLCAwLCAuNikgNTUlLFxuICByZ2JhKDAsIDAsIDAsIC41KSA2NSUsXG4gIHJnYmEoMCwgMCwgMCwgLjQpIDc1JSxcbiAgcmdiYSgwLCAwLCAwLCAuMykgODUlLFxuICByZ2JhKDAsIDAsIDAsIDApIDEwMCUpO1xuXG4vLy8gQnJlYWtwb2ludCBtYXBcbiRicmVha3BvaW50LW1hcCA6IChcbiAgJ3NtJzogNTc2cHgsXG4gICdtZCc6IDc2OHB4LFxuICAnbGcnOiA5OTJweCxcbiAgJ3hsZyc6IDEyMDBweFxuKTtcblxuIiwiLy8vIFRoaXMgZmlsZSBpcyBmb3IgbWl4aW5zLCBhbGwgbWl4aW5zXG4vLy8gdGhhdCB5b3UgbmVlZCBmb3Igc2l0ZSBzaG91bGQgYmUgcGxhY2VkIGhlcmVcblxuLy8vIEFkZCBhbGwgZm9udHMgeW91IHdhbnRcbi8vL1xuLy8vIEBhdXRob3IgU3RldmFuIFN0b2phbm92aWNcbi8vL1xuLy8vIEBwYXJhbSAkZm9udC1uYW1lcyB7c3RyaW5nL3N0cmluZydzfSBwcm92aWRlIHRoZSBsaXN0IG9mIGZvbnQgbmFtZXMvb3Igc2luZ2xlIGZvbnQgbmFtZVxuLy8vIGluIG9yZGVyIHRvIGVtYmVkIGZvbnQgd2l0aCBuYW1lIHBhc3NlZCBhcyBhcmd1bWVudHMgdG8gdGhpcyBtaXhpblxuXG5AbWl4aW4gYWRkLWZvbnRzKCRmb250LW5hbWVzLi4uKSB7XG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggbGVuZ3RoKCRmb250LW5hbWVzKSB7XG4gICAgQGZvbnQtZmFjZSB7XG4gICAgICBmb250LWZhbWlseTogbnRoKCRmb250LW5hbWVzLCAkaSk7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgc3JjOiB1cmwoJyN7JGZvbnQtdXJsfSN7bnRoKCRmb250LW5hbWVzLCAkaSl9JyArICcudHRmJyk7XG4gICAgfVxuXG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8vIE1peGluIHRvIHJlZHVjZSByZXBldGl0aW9uIG9mIHNhbWUgY29kZSBmb3IgbWVkaWEgcXVlcmllc1xuLy8vIEBhdXRob3IgU3RldmFuIFN0b2phbm92aWNcbi8vLyBAcGFyYW1zIHtTdHJpbmd9ICRrZXkgcXVvdGVkIG9yIHVucXVvdGVkIHZhbHVlLCBpZiB5b3UgbmVlZCBzb21lIGN1c3RvbSBicmVha3BvaW50IG5vdCBkZWZpbmVkIGluICRtYXBcbi8vLyAgICAgICAgIHlvdSBzaG91bGQgaW5wdXQgdGhlIG51bWJlciB3aXRoIHVuaXQgYnV0IHVucXVvdGVkIGluIG9yZGVyIHRvIGFjaGl2ZSBkZXNpcmVkIGNvZGVcbkBtaXhpbiByZXNwb25zaXZlKCRrZXksICRtYXA6ICRicmVha3BvaW50LW1hcCkge1xuICBcbiAgQGlmIG1hcC1oYXMta2V5KCRtYXAsICRrZXkpIHtcbiAgICAka2V5LXZhbHVlOiBtYXAtZ2V0KCRtYXAsICRrZXkpO1xuICAgIFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGtleS12YWx1ZSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG4gIEBlbHNlIGlmIChpcy1udW1iZXIoJGtleSkpIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRrZXkpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxuICBAZWxzZSB7XG4gICAgQHdhcm4gXCJFaXRoZXIgeW91IGRpZG4ndCBwcm92aWRlIHZhbGlkIGtleSBmcm9tIGJyZWFrIHBvaW50IG1hcFwiICtcbiAgICAgICAgICBcIm9yIHlvdSBkaWRuJ3QgcHJvdmlkZSBhIHZhbGlkIHR5cGUgb2YgY3VzdG9tIGJyZWFrLXBvaW50XCI7XG4gIH1cbn1cblxuLy8vIE1peGluIHRvIHJlZHVjZSByZXBldGl0aW9uIG9mIHNhbWUgY29kZSBmb3IgbWVkaWEgcXVlcmllc1xuLy8vIEBhdXRob3IgU3RldmFuIFN0b2phbm92aWNcbkBtaXhpbiByZXNwb25zaXZlLWJldHdlZW4oJG1pbiwgJG1heCkge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.rightSideDrawerImgSrc = 'livingrooms/livingroom_01_opt';
    }
    AppComponent.prototype.toggleSideMenues = function () {
        this.leftSideDrawer.toggle();
        this.rightSideDrawer.toggle();
    };
    AppComponent.prototype.onNavigationHover = function (key) {
        this.rightSideDrawerImgSrc = key;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('leftSideDrawer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppComponent.prototype, "leftSideDrawer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('rightSideDrawer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppComponent.prototype, "rightSideDrawer", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_footer_footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/footer/footer */ "./src/app/components/footer/footer.ts");
/* harmony import */ var _containers_bathrooms_bathrooms_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./containers/bathrooms/bathrooms.component */ "./src/app/containers/bathrooms/bathrooms.component.ts");
/* harmony import */ var _containers_bedrooms_bedrooms_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./containers/bedrooms/bedrooms.component */ "./src/app/containers/bedrooms/bedrooms.component.ts");
/* harmony import */ var _containers_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./containers/home/home.component */ "./src/app/containers/home/home.component.ts");
/* harmony import */ var _containers_kitchens_kitchens_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./containers/kitchens/kitchens.component */ "./src/app/containers/kitchens/kitchens.component.ts");
/* harmony import */ var _components_news_card_news_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/news-card/news-card */ "./src/app/components/news-card/news-card.ts");
/* harmony import */ var _containers_livingrooms_livingrooms_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./containers/livingrooms/livingrooms.component */ "./src/app/containers/livingrooms/livingrooms.component.ts");
/* harmony import */ var _components_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/app-header/app-header.component */ "./src/app/components/app-header/app-header.component.ts");
/* harmony import */ var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/gallery/gallery.component */ "./src/app/components/gallery/gallery.component.ts");
/* harmony import */ var _containers_projecting_projecting_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./containers/projecting/projecting.component */ "./src/app/containers/projecting/projecting.component.ts");
/* harmony import */ var _containers_firms_firms_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./containers/firms/firms.component */ "./src/app/containers/firms/firms.component.ts");
/* harmony import */ var _containers_office_furniture_office_furniture_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./containers/office-furniture/office-furniture.component */ "./src/app/containers/office-furniture/office-furniture.component.ts");






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _components_footer_footer__WEBPACK_IMPORTED_MODULE_10__["AppFooterComponent"],
                _containers_bathrooms_bathrooms_component__WEBPACK_IMPORTED_MODULE_11__["BathroomsComponent"],
                _containers_bedrooms_bedrooms_component__WEBPACK_IMPORTED_MODULE_12__["BedroomsComponent"],
                _containers_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _containers_kitchens_kitchens_component__WEBPACK_IMPORTED_MODULE_14__["KitchensComponent"],
                _components_news_card_news_card__WEBPACK_IMPORTED_MODULE_15__["NewsCardComponent"],
                _containers_livingrooms_livingrooms_component__WEBPACK_IMPORTED_MODULE_16__["LivingroomsComponent"],
                _components_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_17__["AppHeaderComponent"],
                _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_18__["GalleryComponent"],
                _containers_projecting_projecting_component__WEBPACK_IMPORTED_MODULE_19__["ProjectingComponent"],
                _containers_firms_firms_component__WEBPACK_IMPORTED_MODULE_20__["FirmsComponent"],
                _containers_office_furniture_office_furniture_component__WEBPACK_IMPORTED_MODULE_21__["OfficeFurnitureComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                ngx_gallery__WEBPACK_IMPORTED_MODULE_7__["NgxGalleryModule"],
                _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__["ScrollToModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/app-header/app-header.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/app-header/app-header.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"mj-img-holder\">\n    <img  [src]=\"data.backgroungImgUrl\" class=\"mj-header-background\" alt=\"\">\n    <!--<div class=\"mj-background-overlay-dialog\">-->\n      <!--<h1 class=\"mj-dialog-title\">{{data.title}}</h1>-->\n      <!--<h3 class=\"mj-dialog-subtitle\">{{data.subTitle}}</h3>-->\n      <!--<p class=\"mj-dialog-text\">{{data.content}}-->\n      <!--</p>-->\n    <!--</div>-->\n    <!--<div class=\"mj-overlay-logo\"></div>-->\n    <div class=\"mj-arrow-btn-holder\">\n      <mat-icon [ngx-scroll-to]=\"'white_cont'\">keyboard_arrow_down</mat-icon>\n    </div>\n  </div>\n</header>\n\n"

/***/ }),

/***/ "./src/app/components/app-header/app-header.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/app-header/app-header.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes slide-down {\n  0% {\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px);\n    opacity: 0; }\n  50% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: .6; }\n  100% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: 0; } }\n\n@keyframes slide-down {\n  0% {\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px);\n    opacity: 0; }\n  50% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: .6; }\n  100% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: 0; } }\n\n@-webkit-keyframes slide-down-on-hover {\n  0% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: .5; }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 1; } }\n\n@keyframes slide-down-on-hover {\n  0% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: .5; }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 1; } }\n\n.mj-img-holder {\n  height: 100vh;\n  overflow: hidden;\n  position: relative; }\n\n.mj-img-holder::before {\n    background: linear-gradient(180deg, black 0%, rgba(0, 0, 0, 0.9) 25%, rgba(0, 0, 0, 0.85) 30%, rgba(0, 0, 0, 0.8) 35%, rgba(0, 0, 0, 0.75) 40%, rgba(0, 0, 0, 0.7) 45%, rgba(0, 0, 0, 0.65) 50%, rgba(0, 0, 0, 0.6) 55%, rgba(0, 0, 0, 0.5) 65%, rgba(0, 0, 0, 0.4) 75%, rgba(0, 0, 0, 0.3) 85%, rgba(0, 0, 0, 0) 100%);\n    content: '';\n    height: 50%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%; }\n\n.mj-img-holder::after {\n    background: linear-gradient(0deg, black 0%, rgba(0, 0, 0, 0.9) 25%, rgba(0, 0, 0, 0.85) 30%, rgba(0, 0, 0, 0.8) 35%, rgba(0, 0, 0, 0.75) 40%, rgba(0, 0, 0, 0.7) 45%, rgba(0, 0, 0, 0.65) 50%, rgba(0, 0, 0, 0.6) 55%, rgba(0, 0, 0, 0.5) 65%, rgba(0, 0, 0, 0.4) 75%, rgba(0, 0, 0, 0.3) 85%, rgba(0, 0, 0, 0) 100%);\n    bottom: 0;\n    content: '';\n    height: 50%;\n    left: 0;\n    position: absolute;\n    width: 100%; }\n\n.mj-img-holder .mj-header-background {\n    height: 100%;\n    width: 100%;\n    z-index: -1;\n    -o-object-fit: cover;\n       object-fit: cover; }\n\n.mj-img-holder .mj-background-overlay-dialog {\n    color: #fff;\n    left: 50%;\n    position: absolute;\n    text-align: center;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    z-index: 1; }\n\n@media only screen and (max-width: 768px) {\n      .mj-img-holder .mj-background-overlay-dialog {\n        min-width: 360px; } }\n\n.mj-img-holder .mj-background-overlay-dialog .mj-dialog-title {\n      color: #bb9a6a;\n      font-family: \"Butler-Regular\";\n      font-size: 5.6rem;\n      margin-bottom: 1.5rem; }\n\n@media only screen and (max-width: 768px) {\n        .mj-img-holder .mj-background-overlay-dialog .mj-dialog-title {\n          font-size: 3.6rem; } }\n\n.mj-img-holder .mj-background-overlay-dialog .mj-dialog-subtitle {\n      font-family: \"Abel-Regular\";\n      font-size: 2.4rem;\n      margin-bottom: 1.5rem;\n      text-transform: uppercase; }\n\n.mj-img-holder .mj-background-overlay-dialog .mj-dialog-text {\n      font-family: \"Lato-Light\";\n      font-size: 1.7rem;\n      line-height: 2.4rem;\n      display: flex;\n      justify-content: center;\n      margin-bottom: 1.5rem;\n      text-align: center;\n      max-width: 500px;\n      word-spacing: .2rem; }\n\n@media only screen and (max-width: 768px) {\n        .mj-img-holder .mj-background-overlay-dialog .mj-dialog-text {\n          display: none; } }\n\n.mj-img-holder .mj-background-overlay-dialog .mj-dialog-btn {\n      align-items: center;\n      color: #bb9a6a;\n      cursor: pointer;\n      display: flex;\n      font-family: \"Abel-Regular\";\n      font-size: 2.1rem;\n      justify-content: center; }\n\n.mj-img-holder .mj-background-overlay-dialog .mj-dialog-btn .fa {\n        font-size: 4rem; }\n\n.mj-img-holder .mj-background-overlay-dialog .mj-dialog-btn .mj-dialog-btn-text {\n        line-height: 3rem;\n        margin-left: 1rem;\n        text-transform: uppercase; }\n\n.mj-img-holder .mj-overlay-logo {\n    background-image: url('logo_majorelle.png');\n    background-position: bottom right;\n    background-repeat: no-repeat;\n    background-size: contain;\n    bottom: 0;\n    height: 60%;\n    opacity: .5;\n    pointer-events: none;\n    position: absolute;\n    right: 0;\n    width: 100%;\n    z-index: 2; }\n\n@media only screen and (max-width: 768px) {\n      .mj-img-holder .mj-overlay-logo {\n        background-position: bottom center; } }\n\n.mj-img-holder .mj-arrow-btn-holder {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    z-index: 1;\n    display: flex;\n    cursor: pointer;\n    justify-content: center; }\n\n.mj-img-holder .mj-arrow-btn-holder mat-icon {\n      font-size: 8rem;\n      width: 8rem;\n      height: 8rem;\n      -webkit-transform-origin: top;\n              transform-origin: top;\n      -webkit-animation: slide-down 1.6s infinite forwards;\n              animation: slide-down 1.6s infinite forwards;\n      color: rgba(255, 255, 255, 0.8); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N0ZXZhbm5uL3dvcmtzcGFjZS9tYWpvcmVsbGUtcHJvamVjdC9zcmMvc2Fzcy1maWxlcy9hbmltYXRpb25zLnNjc3MiLCIvaG9tZS9zdGV2YW5ubi93b3Jrc3BhY2UvbWFqb3JlbGxlLXByb2plY3Qvc3JjL2FwcC9jb21wb25lbnRzL2FwcC1oZWFkZXIvYXBwLWhlYWRlci5jb21wb25lbnQuc2NzcyIsIi9ob21lL3N0ZXZhbm5uL3dvcmtzcGFjZS9tYWpvcmVsbGUtcHJvamVjdC9zcmMvc2Fzcy1maWxlcy92YXJpYWJsZXMuc2NzcyIsIi9ob21lL3N0ZXZhbm5uL3dvcmtzcGFjZS9tYWpvcmVsbGUtcHJvamVjdC9zcmMvc2Fzcy1maWxlcy9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFO0lBQ0Usb0NBQTRCO1lBQTVCLDRCQUE0QjtJQUM1QixVQUFVLEVBQUE7RUFHWjtJQUNFLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsV0FBVyxFQUFBO0VBR2I7SUFDRSxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLFVBQVUsRUFBQSxFQUFBOztBQWJkO0VBQ0U7SUFDRSxvQ0FBNEI7WUFBNUIsNEJBQTRCO0lBQzVCLFVBQVUsRUFBQTtFQUdaO0lBQ0UsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixXQUFXLEVBQUE7RUFHYjtJQUNFLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsVUFBVSxFQUFBLEVBQUE7O0FBSWQ7RUFDRztJQUNFLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsV0FBVyxFQUFBO0VBR2I7SUFDRSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLFVBQVUsRUFBQSxFQUFBOztBQVJmO0VBQ0c7SUFDRSxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLFdBQVcsRUFBQTtFQUdiO0lBQ0Usa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQixVQUFVLEVBQUEsRUFBQTs7QUNwQmY7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUhwQjtJQU1JLHVUQ3lCb0I7SUR4QnBCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsT0FBTztJQUNQLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sV0FBVyxFQUFBOztBQVpmO0lBZ0JJLHFUQzZCb0I7SUQ1QnBCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsV0FBVztJQUNYLE9BQU87SUFDUCxrQkFBa0I7SUFDbEIsV0FBVyxFQUFBOztBQXRCZjtJQTBCSSxZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7SUFDWCxvQkFBaUI7T0FBakIsaUJBQWlCLEVBQUE7O0FBN0JyQjtJQWlDSSxXQUFXO0lBQ1gsU0FBUztJQUNULGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLHdDQUFnQztZQUFoQyxnQ0FBZ0M7SUFDaEMsVUFBVSxFQUFBOztBRWRWO01GekJKO1FBMENNLGdCQUFnQixFQUFBLEVBd0RuQjs7QUFsR0g7TUE4Q00sY0NqRHNCO01Ea0R0Qiw2QkNsQzhCO01EbUM5QixpQkFBaUI7TUFDakIscUJBQXFCLEVBQUE7O0FFeEJ2QjtRRnpCSjtVQW9EUSxpQkFBaUIsRUFBQSxFQUVwQjs7QUF0REw7TUF5RE0sMkJDeENnQztNRHlDaEMsaUJBQWlCO01BQ2pCLHFCQUFxQjtNQUNyQix5QkFBeUIsRUFBQTs7QUE1RC9CO01BZ0VNLHlCQ3REMEI7TUR1RDFCLGlCQUFpQjtNQUNqQixtQkFBbUI7TUFDbkIsYUFBYTtNQUNiLHVCQUF1QjtNQUN2QixxQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixtQkFBbUIsRUFBQTs7QUUvQ3JCO1FGekJKO1VBMkVRLGFBQWEsRUFBQSxFQUVoQjs7QUE3RUw7TUFnRk0sbUJBQW1CO01BQ25CLGNDcEZzQjtNRHFGdEIsZUFBZTtNQUNmLGFBQWE7TUFDYiwyQkNuRWdDO01Eb0VoQyxpQkFBaUI7TUFDakIsdUJBQXVCLEVBQUE7O0FBdEY3QjtRQXlGUSxlQUFlLEVBQUE7O0FBekZ2QjtRQTZGUSxpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLHlCQUF5QixFQUFBOztBQS9GakM7SUFxR0ksMkNBQXNEO0lBQ3RELGlDQUFpQztJQUNqQyw0QkFBNEI7SUFDNUIsd0JBQXdCO0lBQ3hCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7SUFDWCxVQUFVLEVBQUE7O0FFdkZWO01GekJKO1FBbUhNLGtDQUFrQyxFQUFBLEVBRXJDOztBQXJISDtJQXdISSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxVQUFVO0lBQ1YsYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUIsRUFBQTs7QUE5SDNCO01BaUlNLGVBQWU7TUFDZixXQUFXO01BQ1gsWUFBWTtNQUNaLDZCQUFxQjtjQUFyQixxQkFBcUI7TUFDckIsb0RBQTRDO2NBQTVDLDRDQUE0QztNQUM1QywrQkN2STBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FwcC1oZWFkZXIvYXBwLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyBTbGlkZSBkb3duIGFuaW1hdGlvblxuQGtleWZyYW1lcyBzbGlkZS1kb3duIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICAgIG9wYWNpdHk6IC42O1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZS1kb3duLW9uLWhvdmVyIHtcbiAgIDAlIHtcbiAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICAgICBvcGFjaXR5OiAuNTtcbiAgIH1cblxuICAgMTAwJSB7XG4gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICBvcGFjaXR5OiAxO1xuICAgfVxuIH1cbiIsIi8vLyBJbXBvcnRpbmcgc2FzcyBmb3IgY29tcG9uZW50XG5AaW1wb3J0IFwiLi4vLi4vLi4vc2Fzcy1maWxlcy9jb21wb25lbnQtYXNzZXN0c1wiO1xuXG4vLy8gQ2hhbmdpbmcgcGF0aCBvZiBpbWFnZXMgdG8gbWF0Y2ggcGF0aCBmcm9tIGNvbXBvbmVudFxuJGltZy11cmw6ICcuLi8uLi8uLi9hc3NldHMvaW1nLyc7XG5cbi5tai1pbWctaG9sZGVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICY6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogJG1qLXRvcC10by1ib3R0b20tZ3JhZGllbnQ7XG4gICAgY29udGVudDogJyc7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgbGVmdDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgJjo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6ICRtai1ib3R0b20tdG8tdG9wLWdyYWRpZW50O1xuICAgIGJvdHRvbTogMDtcbiAgICBjb250ZW50OiAnJztcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5tai1oZWFkZXItYmFja2dyb3VuZCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICB9XG5cbiAgLm1qLWJhY2tncm91bmQtb3ZlcmxheS1kaWFsb2cge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHotaW5kZXg6IDE7XG5cbiAgICBAaW5jbHVkZSByZXNwb25zaXZlKG1kKSB7XG4gICAgICBtaW4td2lkdGg6IDM2MHB4O1xuICAgIH1cblxuICAgIC5tai1kaWFsb2ctdGl0bGUge1xuICAgICAgY29sb3I6ICRtai1zZWNvbmRhcnktY29sb3I7XG4gICAgICBmb250LWZhbWlseTogJGZhbmN5LWZvbnQtZmFtaWx5O1xuICAgICAgZm9udC1zaXplOiA1LjZyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG5cbiAgICAgIEBpbmNsdWRlIHJlc3BvbnNpdmUobWQpIHtcbiAgICAgICAgZm9udC1zaXplOiAzLjZyZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1qLWRpYWxvZy1zdWJ0aXRsZSB7XG4gICAgICBmb250LWZhbWlseTogJHNpZGUtbWVudS1mb250LWZhbWlseTtcbiAgICAgIGZvbnQtc2l6ZTogMi40cmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG5cbiAgICAubWotZGlhbG9nLXRleHQge1xuICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1saWdodDtcbiAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDIuNHJlbTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICB3b3JkLXNwYWNpbmc6IC4ycmVtO1xuXG4gICAgICBAaW5jbHVkZSByZXNwb25zaXZlKG1kKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1qLWRpYWxvZy1idG4ge1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGNvbG9yOiAkbWotc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZvbnQtZmFtaWx5OiAkc2lkZS1tZW51LWZvbnQtZmFtaWx5O1xuICAgICAgZm9udC1zaXplOiAyLjFyZW07XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgLmZhIHtcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgICAgfVxuXG4gICAgICAubWotZGlhbG9nLWJ0bi10ZXh0IHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tai1vdmVybGF5LWxvZ28ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiN7JGltZy11cmx9bG9nb19tYWpvcmVsbGUucG5nXCIpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSByaWdodDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBib3R0b206IDA7XG4gICAgaGVpZ2h0OiA2MCU7XG4gICAgb3BhY2l0eTogLjU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDI7XG5cbiAgICBAaW5jbHVkZSByZXNwb25zaXZlKG1kKSB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gIC5tai1hcnJvdy1idG4taG9sZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBtYXQtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDhyZW07XG4gICAgICB3aWR0aDogOHJlbTtcbiAgICAgIGhlaWdodDogOHJlbTtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgIGFuaW1hdGlvbjogc2xpZGUtZG93biAxLjZzIGluZmluaXRlIGZvcndhcmRzO1xuICAgICAgY29sb3I6ICRtai1jb2xvci13aGl0ZS1saWdodDtcbiAgICB9XG4gIH1cbn1cbiIsIiRiYXNlLWNvbG9yOiAjMjExZjFlICFkZWZhdWx0O1xuJGJhc2UtbGlnaHQtY29sb3I6ICMyOTI3MjUgIWRlZmF1bHQ7XG5cbiRtai1zZWNvbmRhcnktY29sb3I6ICNiYjlhNmEgIWRlZmF1bHQ7XG5cbiRtai1jb2xvci13aGl0ZS1saWdodDogcmdiYSgjZmZmLCAuOCkgIWRlZmF1bHQ7XG4kbWotY29sb3Itd2hpdGUtbGlnaHRlcjogcmdiYSgjZmZmLCAuNikgIWRlZmF1bHQ7XG5cbiRtai1zcGFjaW5nOiAuOHJlbSAhZGVmYXVsdDtcbiRtai1zcGFjaW5nLXNtYWxsOiAuNHJlbSAhZGVmYXVsdDtcbiRtai1zcGFjaW5nLWxhcmdlOiAxLjZyZW0gIWRlZmF1bHQ7XG5cbiRmb250LXVybDogJy4uL2Fzc2V0cy9mb250cy8nICFkZWZhdWx0O1xuJGltZy11cmw6ICcuLi9hc3NldHMvaW1nLycgIWRlZmF1bHQ7XG5cbiRmb250LWZhbWlseTogJ0xhdG8tTGlnaHQnIWRlZmF1bHQ7XG4kZm9udC1mYW1pbHktbGlnaHQ6ICdMYXRvLUxpZ2h0JyAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1ib2xkOiAnTGF0by1Cb2xkJyAhZGVmYXVsdDtcblxuJGZhbmN5LWZvbnQtZmFtaWx5OiAnQnV0bGVyLVJlZ3VsYXInICFkZWZhdWx0O1xuJGZhbmN5LWZvbnQtZmFtaWx5LWxpZ2h0OiAnQnV0bGVyLUxpZ2h0JyAhZGVmYXVsdDtcbiRmYW5jeS1mb250LWZhbWlseS1ib2xkOiAnQnV0bGVyLUJvbGQnICFkZWZhdWx0O1xuXG4kc2lkZS1tZW51LWZvbnQtZmFtaWx5OiAnQWJlbC1SZWd1bGFyJyAhZGVmYXVsdDtcblxuJG1qLXRvcC10by1ib3R0b20tZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsXG4gIHJnYmEoMCwgMCwgMCwgMSkgIDAlLFxuICByZ2JhKDAsIDAsIDAsIC45KSAyNSUsXG4gIHJnYmEoMCwgMCwgMCwgLjg1KTMwJSxcbiAgcmdiYSgwLCAwLCAwLCAuOCkgMzUlLFxuICByZ2JhKDAsIDAsIDAsIC43NSk0MCUsXG4gIHJnYmEoMCwgMCwgMCwgLjcpIDQ1JSxcbiAgcmdiYSgwLCAwLCAwLCAuNjUpNTAlLFxuICByZ2JhKDAsIDAsIDAsIC42KSA1NSUsXG4gIHJnYmEoMCwgMCwgMCwgLjUpIDY1JSxcbiAgcmdiYSgwLCAwLCAwLCAuNCkgNzUlLFxuICByZ2JhKDAsIDAsIDAsIC4zKSA4NSUsXG4gIHJnYmEoMCwgMCwgMCwgMCkgMTAwJSk7XG5cbiRtai1ib3R0b20tdG8tdG9wLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoMGRlZyxcbiAgcmdiYSgwLCAwLCAwLCAxKSAwJSxcbiAgcmdiYSgwLCAwLCAwLCAuOSkgMjUlLFxuICByZ2JhKDAsIDAsIDAsIC44NSkzMCUsXG4gIHJnYmEoMCwgMCwgMCwgLjgpIDM1JSxcbiAgcmdiYSgwLCAwLCAwLCAuNzUpNDAlLFxuICByZ2JhKDAsIDAsIDAsIC43KSA0NSUsXG4gIHJnYmEoMCwgMCwgMCwgLjY1KTUwJSxcbiAgcmdiYSgwLCAwLCAwLCAuNikgNTUlLFxuICByZ2JhKDAsIDAsIDAsIC41KSA2NSUsXG4gIHJnYmEoMCwgMCwgMCwgLjQpIDc1JSxcbiAgcmdiYSgwLCAwLCAwLCAuMykgODUlLFxuICByZ2JhKDAsIDAsIDAsIDApIDEwMCUpO1xuXG4vLy8gQnJlYWtwb2ludCBtYXBcbiRicmVha3BvaW50LW1hcCA6IChcbiAgJ3NtJzogNTc2cHgsXG4gICdtZCc6IDc2OHB4LFxuICAnbGcnOiA5OTJweCxcbiAgJ3hsZyc6IDEyMDBweFxuKTtcblxuIiwiLy8vIFRoaXMgZmlsZSBpcyBmb3IgbWl4aW5zLCBhbGwgbWl4aW5zXG4vLy8gdGhhdCB5b3UgbmVlZCBmb3Igc2l0ZSBzaG91bGQgYmUgcGxhY2VkIGhlcmVcblxuLy8vIEFkZCBhbGwgZm9udHMgeW91IHdhbnRcbi8vL1xuLy8vIEBhdXRob3IgU3RldmFuIFN0b2phbm92aWNcbi8vL1xuLy8vIEBwYXJhbSAkZm9udC1uYW1lcyB7c3RyaW5nL3N0cmluZydzfSBwcm92aWRlIHRoZSBsaXN0IG9mIGZvbnQgbmFtZXMvb3Igc2luZ2xlIGZvbnQgbmFtZVxuLy8vIGluIG9yZGVyIHRvIGVtYmVkIGZvbnQgd2l0aCBuYW1lIHBhc3NlZCBhcyBhcmd1bWVudHMgdG8gdGhpcyBtaXhpblxuXG5AbWl4aW4gYWRkLWZvbnRzKCRmb250LW5hbWVzLi4uKSB7XG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggbGVuZ3RoKCRmb250LW5hbWVzKSB7XG4gICAgQGZvbnQtZmFjZSB7XG4gICAgICBmb250LWZhbWlseTogbnRoKCRmb250LW5hbWVzLCAkaSk7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgc3JjOiB1cmwoJyN7JGZvbnQtdXJsfSN7bnRoKCRmb250LW5hbWVzLCAkaSl9JyArICcudHRmJyk7XG4gICAgfVxuXG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8vIE1peGluIHRvIHJlZHVjZSByZXBldGl0aW9uIG9mIHNhbWUgY29kZSBmb3IgbWVkaWEgcXVlcmllc1xuLy8vIEBhdXRob3IgU3RldmFuIFN0b2phbm92aWNcbi8vLyBAcGFyYW1zIHtTdHJpbmd9ICRrZXkgcXVvdGVkIG9yIHVucXVvdGVkIHZhbHVlLCBpZiB5b3UgbmVlZCBzb21lIGN1c3RvbSBicmVha3BvaW50IG5vdCBkZWZpbmVkIGluICRtYXBcbi8vLyAgICAgICAgIHlvdSBzaG91bGQgaW5wdXQgdGhlIG51bWJlciB3aXRoIHVuaXQgYnV0IHVucXVvdGVkIGluIG9yZGVyIHRvIGFjaGl2ZSBkZXNpcmVkIGNvZGVcbkBtaXhpbiByZXNwb25zaXZlKCRrZXksICRtYXA6ICRicmVha3BvaW50LW1hcCkge1xuICBcbiAgQGlmIG1hcC1oYXMta2V5KCRtYXAsICRrZXkpIHtcbiAgICAka2V5LXZhbHVlOiBtYXAtZ2V0KCRtYXAsICRrZXkpO1xuICAgIFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGtleS12YWx1ZSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG4gIEBlbHNlIGlmIChpcy1udW1iZXIoJGtleSkpIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRrZXkpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxuICBAZWxzZSB7XG4gICAgQHdhcm4gXCJFaXRoZXIgeW91IGRpZG4ndCBwcm92aWRlIHZhbGlkIGtleSBmcm9tIGJyZWFrIHBvaW50IG1hcFwiICtcbiAgICAgICAgICBcIm9yIHlvdSBkaWRuJ3QgcHJvdmlkZSBhIHZhbGlkIHR5cGUgb2YgY3VzdG9tIGJyZWFrLXBvaW50XCI7XG4gIH1cbn1cblxuLy8vIE1peGluIHRvIHJlZHVjZSByZXBldGl0aW9uIG9mIHNhbWUgY29kZSBmb3IgbWVkaWEgcXVlcmllc1xuLy8vIEBhdXRob3IgU3RldmFuIFN0b2phbm92aWNcbkBtaXhpbiByZXNwb25zaXZlLWJldHdlZW4oJG1pbiwgJG1heCkge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/app-header/app-header.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/app-header/app-header.component.ts ***!
  \***************************************************************/
/*! exports provided: AppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function() { return AppHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppHeaderComponent = /** @class */ (function () {
    function AppHeaderComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppHeaderComponent.prototype, "data", void 0);
    AppHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./app-header.component.html */ "./src/app/components/app-header/app-header.component.html"),
            styles: [__webpack_require__(/*! ./app-header.component.scss */ "./src/app/components/app-header/app-header.component.scss")]
        })
    ], AppHeaderComponent);
    return AppHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.html":
/*!***********************************************!*\
  !*** ./src/app/components/footer/footer.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"mj-footer\" id=\"kontakt\">\n  <div class=\"mj-footer-card\">\n    <h1 class=\"mj-footer-card-title\">Zapratite nas</h1>\n    <div class=\"mj-social-btn-holder\">\n      <a>\n        <span class=\"fa fa-facebook\"></span>\n      </a>\n      <a href=\"https://www.instagram.com/majorelle_furniture/\" target=\"_blank\">\n        <span class=\"fa fa-instagram\"></span>\n      </a>\n    </div>\n  </div>\n  <div class=\"mj-footer-card\">\n    <h1 class=\"mj-footer-card-title\">Lokacija</h1>\n    <ul class=\"mj-footer-card-list\">\n      <li class=\"mj-footer-card-list-item\">\n        Kraljevića Marka 4\n      </li>\n      <li class=\"mj-footer-card-list-item\">\n        34000 Kragujevac\n      </li>\n    </ul>\n  </div>\n  <div class=\"mj-footer-card\">\n    <h1 class=\"mj-footer-card-title\">Kontakt</h1>\n    <ul class=\"mj-footer-card-list\">\n      <li class=\"mj-footer-card-list-item\">\n        066/284-428\n      </li>\n      <li class=\"mj-footer-card-list-item\">\n        office@majorelle.com\n      </li>\n      <li class=\"mj-footer-card-list-item\">\n        projektovanje@majorelle.com\n      </li>\n    </ul>\n  </div>\n</section>\n<section class=\"mj-copyright-section\">\n  <div class=\"mj-section-holder\">\n    <div class=\"mj-copyright\">\n      © Copyright of Majorelle & Co 2019 Design & Development by<a href=\"https://www.linkedin.com/in/marko-krstic-64271678/\" target=\"_blank\">GonzoWeb</a>\n    </div>\n    <div class=\"mj-logo\"></div>\n  </div>\n  <div class=\"mj-arrow-up\" [@scrollAnimation]=\"state\">\n    <mat-icon mat-button\n              [ngx-scroll-to]=\"'main_cont'\">\n      keyboard_arrow_up\n    </mat-icon>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.scss":
/*!***********************************************!*\
  !*** ./src/app/components/footer/footer.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes slide-down {\n  0% {\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px);\n    opacity: 0; }\n  50% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: .6; }\n  100% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: 0; } }\n\n@keyframes slide-down {\n  0% {\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px);\n    opacity: 0; }\n  50% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: .6; }\n  100% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: 0; } }\n\n@-webkit-keyframes slide-down-on-hover {\n  0% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: .5; }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 1; } }\n\n@keyframes slide-down-on-hover {\n  0% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: .5; }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 1; } }\n\n.mj-footer {\n  padding: 6rem;\n  background-color: #211f1e;\n  display: flex;\n  justify-content: center; }\n\n@media only screen and (max-width: 768px) {\n    .mj-footer {\n      padding: 3rem 1rem 1rem;\n      flex-direction: column; } }\n\n.mj-footer .mj-footer-card {\n    width: 100%;\n    max-width: 400px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n    padding: 3rem 0;\n    color: #fff; }\n\n@media only screen and (max-width: 768px) {\n      .mj-footer .mj-footer-card {\n        padding: 1rem 1rem 5rem;\n        align-items: center;\n        max-width: 100%;\n        text-align: center; } }\n\n.mj-footer .mj-footer-card .mj-footer-card-title {\n      text-transform: uppercase;\n      color: #606060;\n      font-family: \"Lato-Bold\";\n      letter-spacing: .2rem;\n      font-size: 1.8rem;\n      padding-bottom: 2rem;\n      max-width: 60%;\n      width: 100%; }\n\n@media only screen and (max-width: 768px) {\n        .mj-footer .mj-footer-card .mj-footer-card-title {\n          max-width: 100%; } }\n\n.mj-footer .mj-footer-card .mj-social-btn-holder {\n      margin: 0;\n      padding-top: 1rem;\n      width: 100%;\n      max-width: 60%; }\n\n@media only screen and (max-width: 768px) {\n        .mj-footer .mj-footer-card .mj-social-btn-holder {\n          max-width: 100%; } }\n\n.mj-footer .mj-footer-card .mj-social-btn-holder span {\n        color: #bb9a6a; }\n\n.mj-footer .mj-footer-card .mj-footer-card-list {\n      width: 100%;\n      max-width: 60%;\n      display: flex;\n      flex-direction: column; }\n\n@media only screen and (max-width: 768px) {\n        .mj-footer .mj-footer-card .mj-footer-card-list {\n          max-width: 100%;\n          align-items: center; } }\n\n.mj-footer .mj-footer-card .mj-footer-card-list .mj-footer-card-list-item {\n        line-height: 2rem;\n        font-size: 1.4rem; }\n\n@media only screen and (max-width: 768px) {\n          .mj-footer .mj-footer-card .mj-footer-card-list .mj-footer-card-list-item {\n            max-width: 35%; } }\n\n.mj-footer .mj-footer-card .mj-footer-card-list .mj-separator {\n        width: 2rem;\n        margin: 2rem 0;\n        border-bottom: 2px solid #606060; }\n\n.mj-copyright-section {\n  background-color: #211f1e;\n  color: #606060;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end; }\n\n.mj-copyright-section .mj-section-holder {\n    width: 100%;\n    display: flex;\n    max-width: 1200px;\n    margin-bottom: 4rem;\n    padding: 0 2rem; }\n\n@media only screen and (max-width: 768px) {\n      .mj-copyright-section .mj-section-holder {\n        flex-direction: column;\n        align-items: center; } }\n\n.mj-copyright-section .mj-copyright {\n    display: flex;\n    align-items: flex-end;\n    flex: 1;\n    line-height: 1.7rem;\n    font-size: 1.4rem; }\n\n.mj-copyright-section .mj-copyright a {\n      margin-left: 1rem; }\n\n@media only screen and (max-width: 768px) {\n      .mj-copyright-section .mj-copyright {\n        order: 1;\n        text-align: center;\n        justify-content: center;\n        max-width: 50%; } }\n\n.mj-copyright-section .mj-logo {\n    background-image: url('logo_majorelle.png');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    width: 50%;\n    height: 120px; }\n\n@media only screen and (max-width: 768px) {\n      .mj-copyright-section .mj-logo {\n        order: 0;\n        width: 100%;\n        background-position: center;\n        margin-bottom: 3rem; } }\n\n.mj-arrow-up {\n  position: absolute;\n  right: 2rem;\n  bottom: 2rem;\n  padding: 1rem;\n  background-color: #2a343ad9;\n  cursor: pointer; }\n\n@media only screen and (max-width: 768px) {\n    .mj-arrow-up {\n      bottom: 8rem; } }\n\n.mj-arrow-up mat-icon {\n    color: #fff;\n    font-size: 3rem;\n    width: 3rem;\n    height: 3rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N0ZXZhbm5uL3dvcmtzcGFjZS9tYWpvcmVsbGUtcHJvamVjdC9zcmMvc2Fzcy1maWxlcy9hbmltYXRpb25zLnNjc3MiLCIvaG9tZS9zdGV2YW5ubi93b3Jrc3BhY2UvbWFqb3JlbGxlLXByb2plY3Qvc3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuc2NzcyIsIi9ob21lL3N0ZXZhbm5uL3dvcmtzcGFjZS9tYWpvcmVsbGUtcHJvamVjdC9zcmMvc2Fzcy1maWxlcy92YXJpYWJsZXMuc2NzcyIsIi9ob21lL3N0ZXZhbm5uL3dvcmtzcGFjZS9tYWpvcmVsbGUtcHJvamVjdC9zcmMvc2Fzcy1maWxlcy9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFO0lBQ0Usb0NBQTRCO1lBQTVCLDRCQUE0QjtJQUM1QixVQUFVLEVBQUE7RUFHWjtJQUNFLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsV0FBVyxFQUFBO0VBR2I7SUFDRSxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLFVBQVUsRUFBQSxFQUFBOztBQWJkO0VBQ0U7SUFDRSxvQ0FBNEI7WUFBNUIsNEJBQTRCO0lBQzVCLFVBQVUsRUFBQTtFQUdaO0lBQ0UsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixXQUFXLEVBQUE7RUFHYjtJQUNFLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsVUFBVSxFQUFBLEVBQUE7O0FBSWQ7RUFDRztJQUNFLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsV0FBVyxFQUFBO0VBR2I7SUFDRSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLFVBQVUsRUFBQSxFQUFBOztBQVJmO0VBQ0c7SUFDRSxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLFdBQVcsRUFBQTtFQUdiO0lBQ0Usa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQixVQUFVLEVBQUEsRUFBQTs7QUN0QmY7RUFDRSxhQUFhO0VBQ2IseUJDTmtCO0VET2xCLGFBQWE7RUFDYix1QkFBdUIsRUFBQTs7QUV1QnJCO0lGM0JKO01BT0ksdUJBQXVCO01BQ3ZCLHNCQUFzQixFQUFBLEVBNkV6Qjs7QUFyRkQ7SUFZSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsV0FBVyxFQUFBOztBRVFYO01GM0JKO1FBc0JNLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGtCQUFrQixFQUFBLEVBMkRyQjs7QUFwRkg7TUE2Qk0seUJBQXlCO01BQ3pCLGNBQWM7TUFDZCx3QkNsQndCO01EbUJ4QixxQkFBcUI7TUFDckIsaUJBQWlCO01BQ2pCLG9CQUFvQjtNQUNwQixjQUFjO01BQ2QsV0FBVyxFQUFBOztBRVRiO1FGM0JKO1VBdUNRLGVBQWUsRUFBQSxFQUVsQjs7QUF6Q0w7TUE0Q00sU0FBUztNQUNULGlCQUFpQjtNQUNqQixXQUFXO01BQ1gsY0FBYyxFQUFBOztBRXBCaEI7UUYzQko7VUFrRFEsZUFBZSxFQUFBLEVBTWxCOztBQXhETDtRQXNEUSxjQ3ZEb0IsRUFBQTs7QURDNUI7TUEyRE0sV0FBVztNQUNYLGNBQWM7TUFDZCxhQUFhO01BQ2Isc0JBQXNCLEVBQUE7O0FFbkN4QjtRRjNCSjtVQWlFUSxlQUFlO1VBQ2YsbUJBQW1CLEVBQUEsRUFpQnRCOztBQW5GTDtRQXNFUSxpQkFBaUI7UUFDakIsaUJBQWlCLEVBQUE7O0FFNUNyQjtVRjNCSjtZQTBFVSxjQUFjLEVBQUEsRUFFakI7O0FBNUVQO1FBK0VRLFdBQVc7UUFDWCxjQUFjO1FBQ2QsZ0NBQWdDLEVBQUE7O0FBT3hDO0VBQ0UseUJDN0ZrQjtFRDhGbEIsY0FBYztFQUNkLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIscUJBQXFCLEVBQUE7O0FBTHZCO0lBUUksV0FBVztJQUNYLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGVBQWUsRUFBQTs7QUV6RWY7TUY2REo7UUFlTSxzQkFBc0I7UUFDdEIsbUJBQW1CLEVBQUEsRUFFdEI7O0FBbEJIO0lBcUJJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsT0FBTztJQUNQLG1CQUFtQjtJQUNuQixpQkFBaUIsRUFBQTs7QUF6QnJCO01BMkJNLGlCQUFpQixFQUFBOztBRXhGbkI7TUY2REo7UUErQk0sUUFBUTtRQUNSLGtCQUFrQjtRQUNsQix1QkFBdUI7UUFDdkIsY0FBYyxFQUFBLEVBRWpCOztBQXBDSDtJQXVDSSwyQ0FBc0Q7SUFDdEQsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsVUFBVTtJQUNWLGFBQWEsRUFBQTs7QUV6R2I7TUY2REo7UUErQ00sUUFBUTtRQUNSLFdBQVc7UUFDWCwyQkFBMkI7UUFDM0IsbUJBQW1CLEVBQUEsRUFFdEI7O0FBSUg7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGVBQWUsRUFBQTs7QUUzSGI7SUZxSEo7TUFTSSxZQUFZLEVBQUEsRUFTZjs7QUFsQkQ7SUFhSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyBTbGlkZSBkb3duIGFuaW1hdGlvblxuQGtleWZyYW1lcyBzbGlkZS1kb3duIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICAgIG9wYWNpdHk6IC42O1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZS1kb3duLW9uLWhvdmVyIHtcbiAgIDAlIHtcbiAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICAgICBvcGFjaXR5OiAuNTtcbiAgIH1cblxuICAgMTAwJSB7XG4gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICBvcGFjaXR5OiAxO1xuICAgfVxuIH1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zYXNzLWZpbGVzL2NvbXBvbmVudC1hc3Nlc3RzXCI7XG5cbiRpbWctdXJsOiAnLi4vLi4vLi4vYXNzZXRzL2ltZy8nO1xuLy8vIFN0eWxpbmcgZm9vdGVyXG4ubWotZm9vdGVyIHtcbiAgcGFkZGluZzogNnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhc2UtY29sb3I7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIEBpbmNsdWRlIHJlc3BvbnNpdmUobWQpIHtcbiAgICBwYWRkaW5nOiAzcmVtIDFyZW0gMXJlbTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLm1qLWZvb3Rlci1jYXJkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogM3JlbSAwO1xuICAgIGNvbG9yOiAjZmZmO1xuXG4gICAgQGluY2x1ZGUgcmVzcG9uc2l2ZShtZCkge1xuICAgICAgcGFkZGluZzogMXJlbSAxcmVtIDVyZW07XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5tai1mb290ZXItY2FyZC10aXRsZSB7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgY29sb3I6ICM2MDYwNjA7XG4gICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWJvbGQ7XG4gICAgICBsZXR0ZXItc3BhY2luZzogLjJyZW07XG4gICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICAgICAgbWF4LXdpZHRoOiA2MCU7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgQGluY2x1ZGUgcmVzcG9uc2l2ZShtZCkge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1qLXNvY2lhbC1idG4taG9sZGVyIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtd2lkdGg6IDYwJTtcblxuICAgICAgQGluY2x1ZGUgcmVzcG9uc2l2ZShtZCkge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogJG1qLXNlY29uZGFyeS1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWotZm9vdGVyLWNhcmQtbGlzdCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1heC13aWR0aDogNjAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgIEBpbmNsdWRlIHJlc3BvbnNpdmUobWQpIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAubWotZm9vdGVyLWNhcmQtbGlzdC1pdGVtIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuXG4gICAgICAgIEBpbmNsdWRlIHJlc3BvbnNpdmUobWQpIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDM1JTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAubWotc2VwYXJhdG9yIHtcbiAgICAgICAgd2lkdGg6IDJyZW07XG4gICAgICAgIG1hcmdpbjogMnJlbSAwO1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzYwNjA2MDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8vIFN0eWxpbmcgY29weXJpZ2h0IHNlY3Rpb25cbi5tai1jb3B5cmlnaHQtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYXNlLWNvbG9yO1xuICBjb2xvcjogIzYwNjA2MDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblxuICAubWotc2VjdGlvbi1ob2xkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbiAgICBwYWRkaW5nOiAwIDJyZW07XG5cbiAgICBAaW5jbHVkZSByZXNwb25zaXZlKG1kKSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAubWotY29weXJpZ2h0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBmbGV4OiAxO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjdyZW07XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgYSB7XG4gICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSByZXNwb25zaXZlKG1kKSB7XG4gICAgICBvcmRlcjogMTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgfVxuICB9XG5cbiAgLm1qLWxvZ28ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiN7JGltZy11cmx9bG9nb19tYWpvcmVsbGUucG5nXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuXG4gICAgQGluY2x1ZGUgcmVzcG9uc2l2ZShtZCkge1xuICAgICAgb3JkZXI6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gICAgfVxuICB9XG59XG5cbi8vLyBTdHlsaW5nIHNsaWRlIHRvIHRvcCBidG5cbi5tai1hcnJvdy11cCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDJyZW07XG4gIGJvdHRvbTogMnJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhMzQzYWQ5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgQGluY2x1ZGUgcmVzcG9uc2l2ZShtZCkge1xuICAgIGJvdHRvbTogOHJlbTtcbiAgfVxuXG4gIG1hdC1pY29uIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgd2lkdGg6IDNyZW07XG4gICAgaGVpZ2h0OiAzcmVtO1xuICB9XG59XG4iLCIkYmFzZS1jb2xvcjogIzIxMWYxZSAhZGVmYXVsdDtcbiRiYXNlLWxpZ2h0LWNvbG9yOiAjMjkyNzI1ICFkZWZhdWx0O1xuXG4kbWotc2Vjb25kYXJ5LWNvbG9yOiAjYmI5YTZhICFkZWZhdWx0O1xuXG4kbWotY29sb3Itd2hpdGUtbGlnaHQ6IHJnYmEoI2ZmZiwgLjgpICFkZWZhdWx0O1xuJG1qLWNvbG9yLXdoaXRlLWxpZ2h0ZXI6IHJnYmEoI2ZmZiwgLjYpICFkZWZhdWx0O1xuXG4kbWotc3BhY2luZzogLjhyZW0gIWRlZmF1bHQ7XG4kbWotc3BhY2luZy1zbWFsbDogLjRyZW0gIWRlZmF1bHQ7XG4kbWotc3BhY2luZy1sYXJnZTogMS42cmVtICFkZWZhdWx0O1xuXG4kZm9udC11cmw6ICcuLi9hc3NldHMvZm9udHMvJyAhZGVmYXVsdDtcbiRpbWctdXJsOiAnLi4vYXNzZXRzL2ltZy8nICFkZWZhdWx0O1xuXG4kZm9udC1mYW1pbHk6ICdMYXRvLUxpZ2h0JyFkZWZhdWx0O1xuJGZvbnQtZmFtaWx5LWxpZ2h0OiAnTGF0by1MaWdodCcgIWRlZmF1bHQ7XG4kZm9udC1mYW1pbHktYm9sZDogJ0xhdG8tQm9sZCcgIWRlZmF1bHQ7XG5cbiRmYW5jeS1mb250LWZhbWlseTogJ0J1dGxlci1SZWd1bGFyJyAhZGVmYXVsdDtcbiRmYW5jeS1mb250LWZhbWlseS1saWdodDogJ0J1dGxlci1MaWdodCcgIWRlZmF1bHQ7XG4kZmFuY3ktZm9udC1mYW1pbHktYm9sZDogJ0J1dGxlci1Cb2xkJyAhZGVmYXVsdDtcblxuJHNpZGUtbWVudS1mb250LWZhbWlseTogJ0FiZWwtUmVndWxhcicgIWRlZmF1bHQ7XG5cbiRtai10b3AtdG8tYm90dG9tLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLFxuICByZ2JhKDAsIDAsIDAsIDEpICAwJSxcbiAgcmdiYSgwLCAwLCAwLCAuOSkgMjUlLFxuICByZ2JhKDAsIDAsIDAsIC44NSkzMCUsXG4gIHJnYmEoMCwgMCwgMCwgLjgpIDM1JSxcbiAgcmdiYSgwLCAwLCAwLCAuNzUpNDAlLFxuICByZ2JhKDAsIDAsIDAsIC43KSA0NSUsXG4gIHJnYmEoMCwgMCwgMCwgLjY1KTUwJSxcbiAgcmdiYSgwLCAwLCAwLCAuNikgNTUlLFxuICByZ2JhKDAsIDAsIDAsIC41KSA2NSUsXG4gIHJnYmEoMCwgMCwgMCwgLjQpIDc1JSxcbiAgcmdiYSgwLCAwLCAwLCAuMykgODUlLFxuICByZ2JhKDAsIDAsIDAsIDApIDEwMCUpO1xuXG4kbWotYm90dG9tLXRvLXRvcC1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KDBkZWcsXG4gIHJnYmEoMCwgMCwgMCwgMSkgMCUsXG4gIHJnYmEoMCwgMCwgMCwgLjkpIDI1JSxcbiAgcmdiYSgwLCAwLCAwLCAuODUpMzAlLFxuICByZ2JhKDAsIDAsIDAsIC44KSAzNSUsXG4gIHJnYmEoMCwgMCwgMCwgLjc1KTQwJSxcbiAgcmdiYSgwLCAwLCAwLCAuNykgNDUlLFxuICByZ2JhKDAsIDAsIDAsIC42NSk1MCUsXG4gIHJnYmEoMCwgMCwgMCwgLjYpIDU1JSxcbiAgcmdiYSgwLCAwLCAwLCAuNSkgNjUlLFxuICByZ2JhKDAsIDAsIDAsIC40KSA3NSUsXG4gIHJnYmEoMCwgMCwgMCwgLjMpIDg1JSxcbiAgcmdiYSgwLCAwLCAwLCAwKSAxMDAlKTtcblxuLy8vIEJyZWFrcG9pbnQgbWFwXG4kYnJlYWtwb2ludC1tYXAgOiAoXG4gICdzbSc6IDU3NnB4LFxuICAnbWQnOiA3NjhweCxcbiAgJ2xnJzogOTkycHgsXG4gICd4bGcnOiAxMjAwcHhcbik7XG5cbiIsIi8vLyBUaGlzIGZpbGUgaXMgZm9yIG1peGlucywgYWxsIG1peGluc1xuLy8vIHRoYXQgeW91IG5lZWQgZm9yIHNpdGUgc2hvdWxkIGJlIHBsYWNlZCBoZXJlXG5cbi8vLyBBZGQgYWxsIGZvbnRzIHlvdSB3YW50XG4vLy9cbi8vLyBAYXV0aG9yIFN0ZXZhbiBTdG9qYW5vdmljXG4vLy9cbi8vLyBAcGFyYW0gJGZvbnQtbmFtZXMge3N0cmluZy9zdHJpbmcnc30gcHJvdmlkZSB0aGUgbGlzdCBvZiBmb250IG5hbWVzL29yIHNpbmdsZSBmb250IG5hbWVcbi8vLyBpbiBvcmRlciB0byBlbWJlZCBmb250IHdpdGggbmFtZSBwYXNzZWQgYXMgYXJndW1lbnRzIHRvIHRoaXMgbWl4aW5cblxuQG1peGluIGFkZC1mb250cygkZm9udC1uYW1lcy4uLikge1xuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIGxlbmd0aCgkZm9udC1uYW1lcykge1xuICAgIEBmb250LWZhY2Uge1xuICAgICAgZm9udC1mYW1pbHk6IG50aCgkZm9udC1uYW1lcywgJGkpO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIHNyYzogdXJsKCcjeyRmb250LXVybH0je250aCgkZm9udC1uYW1lcywgJGkpfScgKyAnLnR0ZicpO1xuICAgIH1cblxuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vLyBNaXhpbiB0byByZWR1Y2UgcmVwZXRpdGlvbiBvZiBzYW1lIGNvZGUgZm9yIG1lZGlhIHF1ZXJpZXNcbi8vLyBAYXV0aG9yIFN0ZXZhbiBTdG9qYW5vdmljXG4vLy8gQHBhcmFtcyB7U3RyaW5nfSAka2V5IHF1b3RlZCBvciB1bnF1b3RlZCB2YWx1ZSwgaWYgeW91IG5lZWQgc29tZSBjdXN0b20gYnJlYWtwb2ludCBub3QgZGVmaW5lZCBpbiAkbWFwXG4vLy8gICAgICAgICB5b3Ugc2hvdWxkIGlucHV0IHRoZSBudW1iZXIgd2l0aCB1bml0IGJ1dCB1bnF1b3RlZCBpbiBvcmRlciB0byBhY2hpdmUgZGVzaXJlZCBjb2RlXG5AbWl4aW4gcmVzcG9uc2l2ZSgka2V5LCAkbWFwOiAkYnJlYWtwb2ludC1tYXApIHtcbiAgXG4gIEBpZiBtYXAtaGFzLWtleSgkbWFwLCAka2V5KSB7XG4gICAgJGtleS12YWx1ZTogbWFwLWdldCgkbWFwLCAka2V5KTtcbiAgICBcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRrZXktdmFsdWUpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxuICBAZWxzZSBpZiAoaXMtbnVtYmVyKCRrZXkpKSB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAka2V5KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbiAgQGVsc2Uge1xuICAgIEB3YXJuIFwiRWl0aGVyIHlvdSBkaWRuJ3QgcHJvdmlkZSB2YWxpZCBrZXkgZnJvbSBicmVhayBwb2ludCBtYXBcIiArXG4gICAgICAgICAgXCJvciB5b3UgZGlkbid0IHByb3ZpZGUgYSB2YWxpZCB0eXBlIG9mIGN1c3RvbSBicmVhay1wb2ludFwiO1xuICB9XG59XG5cbi8vLyBNaXhpbiB0byByZWR1Y2UgcmVwZXRpdGlvbiBvZiBzYW1lIGNvZGUgZm9yIG1lZGlhIHF1ZXJpZXNcbi8vLyBAYXV0aG9yIFN0ZXZhbiBTdG9qYW5vdmljXG5AbWl4aW4gcmVzcG9uc2l2ZS1iZXR3ZWVuKCRtaW4sICRtYXgpIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.ts":
/*!*********************************************!*\
  !*** ./src/app/components/footer/footer.ts ***!
  \*********************************************/
/*! exports provided: AppFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFooterComponent", function() { return AppFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var AppFooterComponent = /** @class */ (function () {
    function AppFooterComponent() {
        this.state = 'hide';
    }
    AppFooterComponent.prototype.checkScroll = function () {
        var viewHeight = window.innerHeight;
        var scrollPosition = window.pageYOffset;
        var heightSum = viewHeight + scrollPosition;
        var documentHeight = document.body.scrollHeight;
        if (heightSum > documentHeight - 100) {
            this.state = 'show';
        }
        else {
            this.state = 'hide';
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppFooterComponent.prototype, "checkScroll", null);
    AppFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.html */ "./src/app/components/footer/footer.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('scrollAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: 1,
                        transform: 'translateY(0)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: 0,
                        transform: 'translateY(-100%)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms ease-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms ease-in'))
                ])
            ],
            styles: [__webpack_require__(/*! ./footer.scss */ "./src/app/components/footer/footer.scss")]
        })
    ], AppFooterComponent);
    return AppFooterComponent;
}());



/***/ }),

/***/ "./src/app/components/gallery/gallery.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/gallery/gallery.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\n"

/***/ }),

/***/ "./src/app/components/gallery/gallery.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/gallery/gallery.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/gallery/gallery.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/gallery/gallery.component.ts ***!
  \*********************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_2__);



var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
        this.galleryOptions = [{
                width: '600px',
                height: '400px',
                thumbnails: false,
                imageBullets: true,
                arrowPrevIcon: 'fa fa-angle-left',
                arrowNextIcon: 'fa fa-angle-right',
                imageSwipe: true,
                imageAnimation: ngx_gallery__WEBPACK_IMPORTED_MODULE_2__["NgxGalleryAnimation"].Slide
            }, {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            }, {
                breakpoint: 400,
                preview: false
            }
        ];
        this.galleryImages = this.data;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], GalleryComponent.prototype, "data", void 0);
    GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/components/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.scss */ "./src/app/components/gallery/gallery.component.scss")]
        })
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/components/news-card/news-card.html":
/*!*****************************************************!*\
  !*** ./src/app/components/news-card/news-card.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mj-news-card\" fxLayout=\"row\"\n     fxLayoutAlign=\"space-between\"\n     fxLayout.xs=\"column\">\n  <div fxLayoutAlign=\"center\">\n    <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\n    <!--<img-->\n    <!--[src]=\"data.img1Url\"-->\n    <!--alt=\"\">-->\n  </div>\n  <div class=\"mj-news-content\">\n    <div>\n      <h2>{{data.title}}</h2>\n      <pre>{{data.content}}</pre>\n\n    </div>\n  </div>\n  <!--<div fxFlex=\"20\" fxLayoutAlign=\"end center\">-->\n  <!--<mat-icon-->\n  <!--class=\"mj-news-arrow\"-->\n  <!--routerLink=\"{{data.navigation}}\">-->\n  <!--arrow_forward-->\n  <!--</mat-icon>-->\n  <!--</div>-->\n  <div fxLayoutAlign=\"end\">\n    <ngx-gallery [options]=\"galleryOptions\" [images]=\"gallery2Images\"></ngx-gallery>\n    <!--<img-->\n    <!--[src]=\"data.img2Url\"-->\n    <!--alt=\"\"></div>-->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/news-card/news-card.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/news-card/news-card.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes slide-down {\n  0% {\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px);\n    opacity: 0; }\n  50% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: .6; }\n  100% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: 0; } }\n\n@keyframes slide-down {\n  0% {\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px);\n    opacity: 0; }\n  50% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: .6; }\n  100% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: 0; } }\n\n@-webkit-keyframes slide-down-on-hover {\n  0% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: .5; }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 1; } }\n\n@keyframes slide-down-on-hover {\n  0% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: .5; }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 1; } }\n\n.mj-news-card {\n  opacity: .5;\n  height: 24rem;\n  width: 100%;\n  overflow: hidden;\n  padding: 2rem;\n  border-bottom: 1px solid #bb9a6a;\n  box-sizing: border-box;\n  transition: background-color, opacity .7s ease;\n  word-spacing: .2rem; }\n\n@media only screen and (max-width: 576px) {\n    .mj-news-card {\n      height: auto; } }\n\n.mj-news-card:hover {\n    opacity: 1;\n    background-color: #242425; }\n\n.mj-news-card:hover .mj-news-arrow {\n      display: block !important; }\n\n.mj-news-card .mj-news-content {\n    color: white;\n    font-size: 1.6rem; }\n\n.mj-news-card .mj-news-content div {\n      padding: 0 1rem 1rem 1rem;\n      text-align: justify; }\n\n@media only screen and (max-width: 576px) {\n        .mj-news-card .mj-news-content div {\n          font-size: 1.2rem; } }\n\n.mj-news-card .mj-news-content h2 {\n      color: #6f6f6e;\n      margin: 1rem 0;\n      font-size: 2.4rem; }\n\n.mj-news-card .mj-news-arrow {\n    display: none;\n    font-size: 3rem;\n    color: #bb9a6a;\n    cursor: pointer;\n    -webkit-animation: slide-down-on-hover .5s ease;\n            animation: slide-down-on-hover .5s ease; }\n\nngx-gallery /deep/ .ngx-gallery-arrow.ngx-gallery-disabled {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N0ZXZhbm5uL3dvcmtzcGFjZS9tYWpvcmVsbGUtcHJvamVjdC9zcmMvc2Fzcy1maWxlcy9hbmltYXRpb25zLnNjc3MiLCIvaG9tZS9zdGV2YW5ubi93b3Jrc3BhY2UvbWFqb3JlbGxlLXByb2plY3Qvc3JjL2FwcC9jb21wb25lbnRzL25ld3MtY2FyZC9uZXdzLWNhcmQuc2NzcyIsIi9ob21lL3N0ZXZhbm5uL3dvcmtzcGFjZS9tYWpvcmVsbGUtcHJvamVjdC9zcmMvc2Fzcy1maWxlcy92YXJpYWJsZXMuc2NzcyIsIi9ob21lL3N0ZXZhbm5uL3dvcmtzcGFjZS9tYWpvcmVsbGUtcHJvamVjdC9zcmMvc2Fzcy1maWxlcy9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFO0lBQ0Usb0NBQTRCO1lBQTVCLDRCQUE0QjtJQUM1QixVQUFVLEVBQUE7RUFHWjtJQUNFLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsV0FBVyxFQUFBO0VBR2I7SUFDRSxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLFVBQVUsRUFBQSxFQUFBOztBQWJkO0VBQ0U7SUFDRSxvQ0FBNEI7WUFBNUIsNEJBQTRCO0lBQzVCLFVBQVUsRUFBQTtFQUdaO0lBQ0UsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixXQUFXLEVBQUE7RUFHYjtJQUNFLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsVUFBVSxFQUFBLEVBQUE7O0FBSWQ7RUFDRztJQUNFLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsV0FBVyxFQUFBO0VBR2I7SUFDRSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLFVBQVUsRUFBQSxFQUFBOztBQVJmO0VBQ0c7SUFDRSxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLFdBQVcsRUFBQTtFQUdiO0lBQ0Usa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQixVQUFVLEVBQUEsRUFBQTs7QUN2QmY7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGdDQ04wQjtFRE8xQixzQkFBc0I7RUFDdEIsOENBQThDO0VBQzlDLG1CQUFtQixFQUFBOztBRW1CakI7SUY1Qko7TUFZSSxZQUFZLEVBQUEsRUEyQ2Y7O0FBdkREO0lBcUJJLFVBQVU7SUFDVix5QkFBeUIsRUFBQTs7QUF0QjdCO01BeUJNLHlCQUF5QixFQUFBOztBQXpCL0I7SUE4QkksWUFBWTtJQUNaLGlCQUFpQixFQUFBOztBQS9CckI7TUFrQ00seUJBQXlCO01BQ3pCLG1CQUFtQixFQUFBOztBRVByQjtRRjVCSjtVQXFDUSxpQkFBaUIsRUFBQSxFQUVwQjs7QUF2Q0w7TUEwQ00sY0FBYztNQUNkLGNBQWM7TUFDZCxpQkFBaUIsRUFBQTs7QUE1Q3ZCO0lBaURJLGFBQWE7SUFDYixlQUFlO0lBQ2YsY0NuRHdCO0lEb0R4QixlQUFlO0lBQ2YsK0NBQXVDO1lBQXZDLHVDQUF1QyxFQUFBOztBQUkzQztFQUNFLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmV3cy1jYXJkL25ld3MtY2FyZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIFNsaWRlIGRvd24gYW5pbWF0aW9uXG5Aa2V5ZnJhbWVzIHNsaWRlLWRvd24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gICAgb3BhY2l0eTogLjY7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLWRvd24tb24taG92ZXIge1xuICAgMCUge1xuICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gICAgIG9wYWNpdHk6IC41O1xuICAgfVxuXG4gICAxMDAlIHtcbiAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgIG9wYWNpdHk6IDE7XG4gICB9XG4gfVxuIiwiLy8vIEltcG9ydGluZyBzYXNzIGZvciBjb21wb25lbnRcbkBpbXBvcnQgXCIuLi8uLi8uLi9zYXNzLWZpbGVzL2NvbXBvbmVudC1hc3Nlc3RzXCI7XG5cbi5tai1uZXdzLWNhcmQge1xuICBvcGFjaXR5OiAuNTtcbiAgaGVpZ2h0OiAyNHJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbWotc2Vjb25kYXJ5LWNvbG9yO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yLCBvcGFjaXR5IC43cyBlYXNlO1xuICB3b3JkLXNwYWNpbmc6IC4ycmVtO1xuXG4gIEBpbmNsdWRlIHJlc3BvbnNpdmUoc20pIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICAvL2ltZyB7XG4gIC8vICBoZWlnaHQ6IDIwcmVtO1xuICAvLyAgd2lkdGg6IGF1dG87XG4gIC8vfVxuXG4gICY6aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjQyNTtcblxuICAgIC5tai1uZXdzLWFycm93IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgLm1qLW5ld3MtY29udGVudCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuXG4gICAgZGl2IHtcbiAgICAgIHBhZGRpbmc6IDAgMXJlbSAxcmVtIDFyZW07XG4gICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgQGluY2x1ZGUgcmVzcG9uc2l2ZShzbSkge1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoMiB7XG4gICAgICBjb2xvcjogIzZmNmY2ZTtcbiAgICAgIG1hcmdpbjogMXJlbSAwO1xuICAgICAgZm9udC1zaXplOiAyLjRyZW07XG4gICAgfVxuICB9XG5cbiAgLm1qLW5ld3MtYXJyb3cge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGNvbG9yOiAkbWotc2Vjb25kYXJ5LWNvbG9yO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBhbmltYXRpb246IHNsaWRlLWRvd24tb24taG92ZXIgLjVzIGVhc2U7XG4gIH1cbn1cblxubmd4LWdhbGxlcnkgL2RlZXAvIC5uZ3gtZ2FsbGVyeS1hcnJvdy5uZ3gtZ2FsbGVyeS1kaXNhYmxlZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4iLCIkYmFzZS1jb2xvcjogIzIxMWYxZSAhZGVmYXVsdDtcbiRiYXNlLWxpZ2h0LWNvbG9yOiAjMjkyNzI1ICFkZWZhdWx0O1xuXG4kbWotc2Vjb25kYXJ5LWNvbG9yOiAjYmI5YTZhICFkZWZhdWx0O1xuXG4kbWotY29sb3Itd2hpdGUtbGlnaHQ6IHJnYmEoI2ZmZiwgLjgpICFkZWZhdWx0O1xuJG1qLWNvbG9yLXdoaXRlLWxpZ2h0ZXI6IHJnYmEoI2ZmZiwgLjYpICFkZWZhdWx0O1xuXG4kbWotc3BhY2luZzogLjhyZW0gIWRlZmF1bHQ7XG4kbWotc3BhY2luZy1zbWFsbDogLjRyZW0gIWRlZmF1bHQ7XG4kbWotc3BhY2luZy1sYXJnZTogMS42cmVtICFkZWZhdWx0O1xuXG4kZm9udC11cmw6ICcuLi9hc3NldHMvZm9udHMvJyAhZGVmYXVsdDtcbiRpbWctdXJsOiAnLi4vYXNzZXRzL2ltZy8nICFkZWZhdWx0O1xuXG4kZm9udC1mYW1pbHk6ICdMYXRvLUxpZ2h0JyFkZWZhdWx0O1xuJGZvbnQtZmFtaWx5LWxpZ2h0OiAnTGF0by1MaWdodCcgIWRlZmF1bHQ7XG4kZm9udC1mYW1pbHktYm9sZDogJ0xhdG8tQm9sZCcgIWRlZmF1bHQ7XG5cbiRmYW5jeS1mb250LWZhbWlseTogJ0J1dGxlci1SZWd1bGFyJyAhZGVmYXVsdDtcbiRmYW5jeS1mb250LWZhbWlseS1saWdodDogJ0J1dGxlci1MaWdodCcgIWRlZmF1bHQ7XG4kZmFuY3ktZm9udC1mYW1pbHktYm9sZDogJ0J1dGxlci1Cb2xkJyAhZGVmYXVsdDtcblxuJHNpZGUtbWVudS1mb250LWZhbWlseTogJ0FiZWwtUmVndWxhcicgIWRlZmF1bHQ7XG5cbiRtai10b3AtdG8tYm90dG9tLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLFxuICByZ2JhKDAsIDAsIDAsIDEpICAwJSxcbiAgcmdiYSgwLCAwLCAwLCAuOSkgMjUlLFxuICByZ2JhKDAsIDAsIDAsIC44NSkzMCUsXG4gIHJnYmEoMCwgMCwgMCwgLjgpIDM1JSxcbiAgcmdiYSgwLCAwLCAwLCAuNzUpNDAlLFxuICByZ2JhKDAsIDAsIDAsIC43KSA0NSUsXG4gIHJnYmEoMCwgMCwgMCwgLjY1KTUwJSxcbiAgcmdiYSgwLCAwLCAwLCAuNikgNTUlLFxuICByZ2JhKDAsIDAsIDAsIC41KSA2NSUsXG4gIHJnYmEoMCwgMCwgMCwgLjQpIDc1JSxcbiAgcmdiYSgwLCAwLCAwLCAuMykgODUlLFxuICByZ2JhKDAsIDAsIDAsIDApIDEwMCUpO1xuXG4kbWotYm90dG9tLXRvLXRvcC1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KDBkZWcsXG4gIHJnYmEoMCwgMCwgMCwgMSkgMCUsXG4gIHJnYmEoMCwgMCwgMCwgLjkpIDI1JSxcbiAgcmdiYSgwLCAwLCAwLCAuODUpMzAlLFxuICByZ2JhKDAsIDAsIDAsIC44KSAzNSUsXG4gIHJnYmEoMCwgMCwgMCwgLjc1KTQwJSxcbiAgcmdiYSgwLCAwLCAwLCAuNykgNDUlLFxuICByZ2JhKDAsIDAsIDAsIC42NSk1MCUsXG4gIHJnYmEoMCwgMCwgMCwgLjYpIDU1JSxcbiAgcmdiYSgwLCAwLCAwLCAuNSkgNjUlLFxuICByZ2JhKDAsIDAsIDAsIC40KSA3NSUsXG4gIHJnYmEoMCwgMCwgMCwgLjMpIDg1JSxcbiAgcmdiYSgwLCAwLCAwLCAwKSAxMDAlKTtcblxuLy8vIEJyZWFrcG9pbnQgbWFwXG4kYnJlYWtwb2ludC1tYXAgOiAoXG4gICdzbSc6IDU3NnB4LFxuICAnbWQnOiA3NjhweCxcbiAgJ2xnJzogOTkycHgsXG4gICd4bGcnOiAxMjAwcHhcbik7XG5cbiIsIi8vLyBUaGlzIGZpbGUgaXMgZm9yIG1peGlucywgYWxsIG1peGluc1xuLy8vIHRoYXQgeW91IG5lZWQgZm9yIHNpdGUgc2hvdWxkIGJlIHBsYWNlZCBoZXJlXG5cbi8vLyBBZGQgYWxsIGZvbnRzIHlvdSB3YW50XG4vLy9cbi8vLyBAYXV0aG9yIFN0ZXZhbiBTdG9qYW5vdmljXG4vLy9cbi8vLyBAcGFyYW0gJGZvbnQtbmFtZXMge3N0cmluZy9zdHJpbmcnc30gcHJvdmlkZSB0aGUgbGlzdCBvZiBmb250IG5hbWVzL29yIHNpbmdsZSBmb250IG5hbWVcbi8vLyBpbiBvcmRlciB0byBlbWJlZCBmb250IHdpdGggbmFtZSBwYXNzZWQgYXMgYXJndW1lbnRzIHRvIHRoaXMgbWl4aW5cblxuQG1peGluIGFkZC1mb250cygkZm9udC1uYW1lcy4uLikge1xuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIGxlbmd0aCgkZm9udC1uYW1lcykge1xuICAgIEBmb250LWZhY2Uge1xuICAgICAgZm9udC1mYW1pbHk6IG50aCgkZm9udC1uYW1lcywgJGkpO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIHNyYzogdXJsKCcjeyRmb250LXVybH0je250aCgkZm9udC1uYW1lcywgJGkpfScgKyAnLnR0ZicpO1xuICAgIH1cblxuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vLyBNaXhpbiB0byByZWR1Y2UgcmVwZXRpdGlvbiBvZiBzYW1lIGNvZGUgZm9yIG1lZGlhIHF1ZXJpZXNcbi8vLyBAYXV0aG9yIFN0ZXZhbiBTdG9qYW5vdmljXG4vLy8gQHBhcmFtcyB7U3RyaW5nfSAka2V5IHF1b3RlZCBvciB1bnF1b3RlZCB2YWx1ZSwgaWYgeW91IG5lZWQgc29tZSBjdXN0b20gYnJlYWtwb2ludCBub3QgZGVmaW5lZCBpbiAkbWFwXG4vLy8gICAgICAgICB5b3Ugc2hvdWxkIGlucHV0IHRoZSBudW1iZXIgd2l0aCB1bml0IGJ1dCB1bnF1b3RlZCBpbiBvcmRlciB0byBhY2hpdmUgZGVzaXJlZCBjb2RlXG5AbWl4aW4gcmVzcG9uc2l2ZSgka2V5LCAkbWFwOiAkYnJlYWtwb2ludC1tYXApIHtcbiAgXG4gIEBpZiBtYXAtaGFzLWtleSgkbWFwLCAka2V5KSB7XG4gICAgJGtleS12YWx1ZTogbWFwLWdldCgkbWFwLCAka2V5KTtcbiAgICBcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRrZXktdmFsdWUpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxuICBAZWxzZSBpZiAoaXMtbnVtYmVyKCRrZXkpKSB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAka2V5KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbiAgQGVsc2Uge1xuICAgIEB3YXJuIFwiRWl0aGVyIHlvdSBkaWRuJ3QgcHJvdmlkZSB2YWxpZCBrZXkgZnJvbSBicmVhayBwb2ludCBtYXBcIiArXG4gICAgICAgICAgXCJvciB5b3UgZGlkbid0IHByb3ZpZGUgYSB2YWxpZCB0eXBlIG9mIGN1c3RvbSBicmVhay1wb2ludFwiO1xuICB9XG59XG5cbi8vLyBNaXhpbiB0byByZWR1Y2UgcmVwZXRpdGlvbiBvZiBzYW1lIGNvZGUgZm9yIG1lZGlhIHF1ZXJpZXNcbi8vLyBAYXV0aG9yIFN0ZXZhbiBTdG9qYW5vdmljXG5AbWl4aW4gcmVzcG9uc2l2ZS1iZXR3ZWVuKCRtaW4sICRtYXgpIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/news-card/news-card.ts":
/*!***************************************************!*\
  !*** ./src/app/components/news-card/news-card.ts ***!
  \***************************************************/
/*! exports provided: NewsCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsCardComponent", function() { return NewsCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_2__);



var NewsCardComponent = /** @class */ (function () {
    function NewsCardComponent() {
    }
    NewsCardComponent.prototype.ngOnInit = function () {
        this.galleryOptions = [{
                width: '300px',
                height: '200px',
                thumbnails: false,
                imageArrows: false,
                imageAnimation: ngx_gallery__WEBPACK_IMPORTED_MODULE_2__["NgxGalleryAnimation"].Slide
            }, {
                breakpoint: 800,
                width: '100%',
                height: '200px',
                imagePercent: 80
            }, {
                breakpoint: 400,
                preview: false
            }
        ];
        this.galleryImages = [{
                small: this.data.img1Url,
                medium: this.data.img1Url,
                big: this.data.img1Url
            }];
        this.gallery2Images = [{
                small: this.data.img2Url,
                medium: this.data.img2Url,
                big: this.data.img2Url
            }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NewsCardComponent.prototype, "data", void 0);
    NewsCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news-card',
            template: __webpack_require__(/*! ./news-card.html */ "./src/app/components/news-card/news-card.html"),
            styles: [__webpack_require__(/*! ./news-card.scss */ "./src/app/components/news-card/news-card.scss")]
        })
    ], NewsCardComponent);
    return NewsCardComponent;
}());



/***/ }),

/***/ "./src/app/containers/bathrooms/bathrooms.component.html":
/*!***************************************************************!*\
  !*** ./src/app/containers/bathrooms/bathrooms.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [data]=\"headerConfig\"></app-header>\n\n<section class=\"mj-section\">\n  <div class=\"mj-section-holder\"\n       id=\"white_cont\">\n    <div class=\"container\">\n      <app-gallery [data]=\"galleryConfig\"></app-gallery>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/containers/bathrooms/bathrooms.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/containers/bathrooms/bathrooms.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes slide-down {\n  0% {\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px);\n    opacity: 0; }\n  50% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: .6; }\n  100% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: 0; } }\n\n@keyframes slide-down {\n  0% {\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px);\n    opacity: 0; }\n  50% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: .6; }\n  100% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: 0; } }\n\n@-webkit-keyframes slide-down-on-hover {\n  0% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: .5; }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 1; } }\n\n@keyframes slide-down-on-hover {\n  0% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: .5; }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 1; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N0ZXZhbm5uL3dvcmtzcGFjZS9tYWpvcmVsbGUtcHJvamVjdC9zcmMvc2Fzcy1maWxlcy9hbmltYXRpb25zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRTtJQUNFLG9DQUE0QjtZQUE1Qiw0QkFBNEI7SUFDNUIsVUFBVSxFQUFBO0VBR1o7SUFDRSxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLFdBQVcsRUFBQTtFQUdiO0lBQ0UsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixVQUFVLEVBQUEsRUFBQTs7QUFiZDtFQUNFO0lBQ0Usb0NBQTRCO1lBQTVCLDRCQUE0QjtJQUM1QixVQUFVLEVBQUE7RUFHWjtJQUNFLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsV0FBVyxFQUFBO0VBR2I7SUFDRSxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLFVBQVUsRUFBQSxFQUFBOztBQUlkO0VBQ0c7SUFDRSxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLFdBQVcsRUFBQTtFQUdiO0lBQ0Usa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQixVQUFVLEVBQUEsRUFBQTs7QUFSZjtFQUNHO0lBQ0UsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixXQUFXLEVBQUE7RUFHYjtJQUNFLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsVUFBVSxFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb250YWluZXJzL2JhdGhyb29tcy9iYXRocm9vbXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gU2xpZGUgZG93biBhbmltYXRpb25cbkBrZXlmcmFtZXMgc2xpZGUtZG93biB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgICBvcGFjaXR5OiAuNjtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtZG93bi1vbi1ob3ZlciB7XG4gICAwJSB7XG4gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgICAgb3BhY2l0eTogLjU7XG4gICB9XG5cbiAgIDEwMCUge1xuICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgb3BhY2l0eTogMTtcbiAgIH1cbiB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/containers/bathrooms/bathrooms.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/containers/bathrooms/bathrooms.component.ts ***!
  \*************************************************************/
/*! exports provided: BathroomsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BathroomsComponent", function() { return BathroomsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BathroomsComponent = /** @class */ (function () {
    function BathroomsComponent() {
        this.headerConfig = {
            backgroungImgUrl: 'assets/img/bathrooms/bathroom_01_opt.png',
            title: 'Bethrooms bla bla..',
            subTitle: 'subtitle bla bla bla...',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum ut nulla id dictum.'
        };
        this.galleryConfig = [{
                small: 'assets/img/bathrooms/bathroom_01_opt.png',
                medium: 'assets/img/bathrooms/bathroom_01_opt.png',
                big: 'assets/img/bathrooms/bathroom_01_opt.png'
            }, {
                small: 'assets/img/bathrooms/bathroom_02_opt.png',
                medium: 'assets/img/bathrooms/bathroom_02_opt.png',
                big: 'assets/img/bathrooms/bathroom_02_opt.png'
            }, {
                small: 'assets/img/bathrooms/bathroom_03_opt.png',
                medium: 'assets/img/bathrooms/bathroom_03_opt.png',
                big: 'assets/img/bathrooms/bathroom_03_opt.png'
            }, {
                small: 'assets/img/bathrooms/bathroom_04_opt.png',
                medium: 'assets/img/bathrooms/bathroom_04_opt.png',
                big: 'assets/img/bathrooms/bathroom_04_opt.png'
            }, {
                small: 'assets/img/bathrooms/bathroom_05_opt.png',
                medium: 'assets/img/bathrooms/bathroom_05_opt.png',
                big: 'assets/img/bathrooms/bathroom_05_opt.png'
            }, {
                small: 'assets/img/bathrooms/bathroom_06_opt.png',
                medium: 'assets/img/bathrooms/bathroom_06_opt.png',
                big: 'assets/img/bathrooms/bathroom_06_opt.png'
            }, {
                small: 'assets/img/bathrooms/bathroom_07_opt.png',
                medium: 'assets/img/bathrooms/bathroom_07_opt.png',
                big: 'assets/img/bathrooms/bathroom_07_opt.png'
            }, {
                small: 'assets/img/bathrooms/bathroom_08_opt.png',
                medium: 'assets/img/bathrooms/bathroom_08_opt.png',
                big: 'assets/img/bathrooms/bathroom_08_opt.png'
            }];
    }
    BathroomsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bathrooms',
            template: __webpack_require__(/*! ./bathrooms.component.html */ "./src/app/containers/bathrooms/bathrooms.component.html"),
            styles: [__webpack_require__(/*! ./bathrooms.component.scss */ "./src/app/containers/bathrooms/bathrooms.component.scss")]
        })
    ], BathroomsComponent);
    return BathroomsComponent;
}());



/***/ }),

/***/ "./src/app/containers/bedrooms/bedrooms.component.html":
/*!*************************************************************!*\
  !*** ./src/app/containers/bedrooms/bedrooms.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [data]=\"headerConfig\"></app-header>\n\n<section class=\"mj-section\">\n  <div class=\"mj-section-holder\"\n       id=\"white_cont\">\n    <div class=\"container\">\n      <app-gallery [data]=\"galleryConfig\"></app-gallery>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/containers/bedrooms/bedrooms.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/containers/bedrooms/bedrooms.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvYmVkcm9vbXMvYmVkcm9vbXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/containers/bedrooms/bedrooms.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/containers/bedrooms/bedrooms.component.ts ***!
  \***********************************************************/
/*! exports provided: BedroomsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BedroomsComponent", function() { return BedroomsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BedroomsComponent = /** @class */ (function () {
    function BedroomsComponent() {
        this.headerConfig = {
            backgroungImgUrl: 'assets/img/bedrooms/bedroom_01_opt.png',
            title: 'Bedrooms bla bla..',
            subTitle: 'subtitle bla bla bla...',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum ut nulla id dictum.'
        };
        this.galleryConfig = [{
                small: 'assets/img/bedrooms/bedroom_01_opt.png',
                medium: 'assets/img/bedrooms/bedroom_01_opt.png',
                big: 'assets/img/bedrooms/bedroom_01_opt.png'
            }, {
                small: 'assets/img/bedrooms/bedroom_02_opt.png',
                medium: 'assets/img/bedrooms/bedroom_02_opt.png',
                big: 'assets/img/bedrooms/bedroom_02_opt.png'
            }, {
                small: 'assets/img/bedrooms/bedroom_03_opt.png',
                medium: 'assets/img/bedrooms/bedroom_03_opt.png',
                big: 'assets/img/bedrooms/bedroom_03_opt.png'
            }, {
                small: 'assets/img/bedrooms/bedroom_04_opt.png',
                medium: 'assets/img/bedrooms/bedroom_04_opt.png',
                big: 'assets/img/bedrooms/bedroom_04_opt.png'
            }];
    }
    BedroomsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bedrooms',
            template: __webpack_require__(/*! ./bedrooms.component.html */ "./src/app/containers/bedrooms/bedrooms.component.html"),
            styles: [__webpack_require__(/*! ./bedrooms.component.scss */ "./src/app/containers/bedrooms/bedrooms.component.scss")]
        })
    ], BedroomsComponent);
    return BedroomsComponent;
}());



/***/ }),

/***/ "./src/app/containers/firms/firms.component.html":
/*!*******************************************************!*\
  !*** ./src/app/containers/firms/firms.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [data]=\"headerConfig\"></app-header>\n\n<section class=\"mj-section\">\n  <div class=\"mj-section-holder\"\n       id=\"white_cont\">\n    <div class=\"container\">\n\n      <h3 class=\"mj-section-title\">Frizerski salon New Visual – Kragujevac</h3>\n      <app-gallery [data]=\"gallery1Config\"></app-gallery>\n    </div>\n  </div>\n</section>\n<div class=\"mj-separator\"></div>\n\n<section class=\"mj-section\">\n  <div class=\"mj-section-holder\">\n    <div class=\"container\">\n\n      <h3 class=\"mj-section-title\">Kozmetički salon Cacao Beauty Center – Kragujevac</h3>\n      <app-gallery [data]=\"gallery2Config\"></app-gallery>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/containers/firms/firms.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/containers/firms/firms.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes slide-down {\n  0% {\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px);\n    opacity: 0; }\n  50% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: .6; }\n  100% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: 0; } }\n\n@keyframes slide-down {\n  0% {\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px);\n    opacity: 0; }\n  50% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: .6; }\n  100% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: 0; } }\n\n@-webkit-keyframes slide-down-on-hover {\n  0% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: .5; }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 1; } }\n\n@keyframes slide-down-on-hover {\n  0% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: .5; }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 1; } }\n\n@media only screen and (max-width: 576px) {\n  .mj-section .mj-section-title {\n    font-size: 1.8rem;\n    margin-bottom: 2rem; } }\n\n.mj-separator {\n  width: 80%;\n  margin: 2rem auto;\n  border-bottom: 1px solid #bb9a6a; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N0ZXZhbm5uL3dvcmtzcGFjZS9tYWpvcmVsbGUtcHJvamVjdC9zcmMvc2Fzcy1maWxlcy9hbmltYXRpb25zLnNjc3MiLCIvaG9tZS9zdGV2YW5ubi93b3Jrc3BhY2UvbWFqb3JlbGxlLXByb2plY3Qvc3JjL3Nhc3MtZmlsZXMvbWl4aW5zLnNjc3MiLCIvaG9tZS9zdGV2YW5ubi93b3Jrc3BhY2UvbWFqb3JlbGxlLXByb2plY3Qvc3JjL2FwcC9jb250YWluZXJzL2Zpcm1zL2Zpcm1zLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvc3RldmFubm4vd29ya3NwYWNlL21ham9yZWxsZS1wcm9qZWN0L3NyYy9zYXNzLWZpbGVzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0U7SUFDRSxvQ0FBNEI7WUFBNUIsNEJBQTRCO0lBQzVCLFVBQVUsRUFBQTtFQUdaO0lBQ0UsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixXQUFXLEVBQUE7RUFHYjtJQUNFLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsVUFBVSxFQUFBLEVBQUE7O0FBYmQ7RUFDRTtJQUNFLG9DQUE0QjtZQUE1Qiw0QkFBNEI7SUFDNUIsVUFBVSxFQUFBO0VBR1o7SUFDRSxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLFdBQVcsRUFBQTtFQUdiO0lBQ0UsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixVQUFVLEVBQUEsRUFBQTs7QUFJZDtFQUNHO0lBQ0UsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixXQUFXLEVBQUE7RUFHYjtJQUNFLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsVUFBVSxFQUFBLEVBQUE7O0FBUmY7RUFDRztJQUNFLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsV0FBVyxFQUFBO0VBR2I7SUFDRSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLFVBQVUsRUFBQSxFQUFBOztBQ0tYO0VDN0JKO0lBRUksaUJBQWlCO0lBQ2pCLG1CQUFtQixFQUFBLEVBRXRCOztBQUNEO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixnQ0NSMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvZmlybXMvZmlybXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gU2xpZGUgZG93biBhbmltYXRpb25cbkBrZXlmcmFtZXMgc2xpZGUtZG93biB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgICBvcGFjaXR5OiAuNjtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtZG93bi1vbi1ob3ZlciB7XG4gICAwJSB7XG4gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgICAgb3BhY2l0eTogLjU7XG4gICB9XG5cbiAgIDEwMCUge1xuICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgb3BhY2l0eTogMTtcbiAgIH1cbiB9XG4iLCIvLy8gVGhpcyBmaWxlIGlzIGZvciBtaXhpbnMsIGFsbCBtaXhpbnNcbi8vLyB0aGF0IHlvdSBuZWVkIGZvciBzaXRlIHNob3VsZCBiZSBwbGFjZWQgaGVyZVxuXG4vLy8gQWRkIGFsbCBmb250cyB5b3Ugd2FudFxuLy8vXG4vLy8gQGF1dGhvciBTdGV2YW4gU3RvamFub3ZpY1xuLy8vXG4vLy8gQHBhcmFtICRmb250LW5hbWVzIHtzdHJpbmcvc3RyaW5nJ3N9IHByb3ZpZGUgdGhlIGxpc3Qgb2YgZm9udCBuYW1lcy9vciBzaW5nbGUgZm9udCBuYW1lXG4vLy8gaW4gb3JkZXIgdG8gZW1iZWQgZm9udCB3aXRoIG5hbWUgcGFzc2VkIGFzIGFyZ3VtZW50cyB0byB0aGlzIG1peGluXG5cbkBtaXhpbiBhZGQtZm9udHMoJGZvbnQtbmFtZXMuLi4pIHtcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCBsZW5ndGgoJGZvbnQtbmFtZXMpIHtcbiAgICBAZm9udC1mYWNlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBudGgoJGZvbnQtbmFtZXMsICRpKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBzcmM6IHVybCgnI3skZm9udC11cmx9I3tudGgoJGZvbnQtbmFtZXMsICRpKX0nICsgJy50dGYnKTtcbiAgICB9XG5cbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLy8gTWl4aW4gdG8gcmVkdWNlIHJlcGV0aXRpb24gb2Ygc2FtZSBjb2RlIGZvciBtZWRpYSBxdWVyaWVzXG4vLy8gQGF1dGhvciBTdGV2YW4gU3RvamFub3ZpY1xuLy8vIEBwYXJhbXMge1N0cmluZ30gJGtleSBxdW90ZWQgb3IgdW5xdW90ZWQgdmFsdWUsIGlmIHlvdSBuZWVkIHNvbWUgY3VzdG9tIGJyZWFrcG9pbnQgbm90IGRlZmluZWQgaW4gJG1hcFxuLy8vICAgICAgICAgeW91IHNob3VsZCBpbnB1dCB0aGUgbnVtYmVyIHdpdGggdW5pdCBidXQgdW5xdW90ZWQgaW4gb3JkZXIgdG8gYWNoaXZlIGRlc2lyZWQgY29kZVxuQG1peGluIHJlc3BvbnNpdmUoJGtleSwgJG1hcDogJGJyZWFrcG9pbnQtbWFwKSB7XG4gIFxuICBAaWYgbWFwLWhhcy1rZXkoJG1hcCwgJGtleSkge1xuICAgICRrZXktdmFsdWU6IG1hcC1nZXQoJG1hcCwgJGtleSk7XG4gICAgXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAka2V5LXZhbHVlKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbiAgQGVsc2UgaWYgKGlzLW51bWJlcigka2V5KSkge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGtleSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG4gIEBlbHNlIHtcbiAgICBAd2FybiBcIkVpdGhlciB5b3UgZGlkbid0IHByb3ZpZGUgdmFsaWQga2V5IGZyb20gYnJlYWsgcG9pbnQgbWFwXCIgK1xuICAgICAgICAgIFwib3IgeW91IGRpZG4ndCBwcm92aWRlIGEgdmFsaWQgdHlwZSBvZiBjdXN0b20gYnJlYWstcG9pbnRcIjtcbiAgfVxufVxuXG4vLy8gTWl4aW4gdG8gcmVkdWNlIHJlcGV0aXRpb24gb2Ygc2FtZSBjb2RlIGZvciBtZWRpYSBxdWVyaWVzXG4vLy8gQGF1dGhvciBTdGV2YW4gU3RvamFub3ZpY1xuQG1peGluIHJlc3BvbnNpdmUtYmV0d2VlbigkbWluLCAkbWF4KSB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL3Nhc3MtZmlsZXMvY29tcG9uZW50LWFzc2VzdHNcIjtcblxuLm1qLXNlY3Rpb24gLm1qLXNlY3Rpb24tdGl0bGUge1xuICBAaW5jbHVkZSByZXNwb25zaXZlKHNtKSB7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxufVxuLm1qLXNlcGFyYXRvciB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMnJlbSBhdXRvO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJG1qLXNlY29uZGFyeS1jb2xvcjtcbn1cbiIsIiRiYXNlLWNvbG9yOiAjMjExZjFlICFkZWZhdWx0O1xuJGJhc2UtbGlnaHQtY29sb3I6ICMyOTI3MjUgIWRlZmF1bHQ7XG5cbiRtai1zZWNvbmRhcnktY29sb3I6ICNiYjlhNmEgIWRlZmF1bHQ7XG5cbiRtai1jb2xvci13aGl0ZS1saWdodDogcmdiYSgjZmZmLCAuOCkgIWRlZmF1bHQ7XG4kbWotY29sb3Itd2hpdGUtbGlnaHRlcjogcmdiYSgjZmZmLCAuNikgIWRlZmF1bHQ7XG5cbiRtai1zcGFjaW5nOiAuOHJlbSAhZGVmYXVsdDtcbiRtai1zcGFjaW5nLXNtYWxsOiAuNHJlbSAhZGVmYXVsdDtcbiRtai1zcGFjaW5nLWxhcmdlOiAxLjZyZW0gIWRlZmF1bHQ7XG5cbiRmb250LXVybDogJy4uL2Fzc2V0cy9mb250cy8nICFkZWZhdWx0O1xuJGltZy11cmw6ICcuLi9hc3NldHMvaW1nLycgIWRlZmF1bHQ7XG5cbiRmb250LWZhbWlseTogJ0xhdG8tTGlnaHQnIWRlZmF1bHQ7XG4kZm9udC1mYW1pbHktbGlnaHQ6ICdMYXRvLUxpZ2h0JyAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1ib2xkOiAnTGF0by1Cb2xkJyAhZGVmYXVsdDtcblxuJGZhbmN5LWZvbnQtZmFtaWx5OiAnQnV0bGVyLVJlZ3VsYXInICFkZWZhdWx0O1xuJGZhbmN5LWZvbnQtZmFtaWx5LWxpZ2h0OiAnQnV0bGVyLUxpZ2h0JyAhZGVmYXVsdDtcbiRmYW5jeS1mb250LWZhbWlseS1ib2xkOiAnQnV0bGVyLUJvbGQnICFkZWZhdWx0O1xuXG4kc2lkZS1tZW51LWZvbnQtZmFtaWx5OiAnQWJlbC1SZWd1bGFyJyAhZGVmYXVsdDtcblxuJG1qLXRvcC10by1ib3R0b20tZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsXG4gIHJnYmEoMCwgMCwgMCwgMSkgIDAlLFxuICByZ2JhKDAsIDAsIDAsIC45KSAyNSUsXG4gIHJnYmEoMCwgMCwgMCwgLjg1KTMwJSxcbiAgcmdiYSgwLCAwLCAwLCAuOCkgMzUlLFxuICByZ2JhKDAsIDAsIDAsIC43NSk0MCUsXG4gIHJnYmEoMCwgMCwgMCwgLjcpIDQ1JSxcbiAgcmdiYSgwLCAwLCAwLCAuNjUpNTAlLFxuICByZ2JhKDAsIDAsIDAsIC42KSA1NSUsXG4gIHJnYmEoMCwgMCwgMCwgLjUpIDY1JSxcbiAgcmdiYSgwLCAwLCAwLCAuNCkgNzUlLFxuICByZ2JhKDAsIDAsIDAsIC4zKSA4NSUsXG4gIHJnYmEoMCwgMCwgMCwgMCkgMTAwJSk7XG5cbiRtai1ib3R0b20tdG8tdG9wLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoMGRlZyxcbiAgcmdiYSgwLCAwLCAwLCAxKSAwJSxcbiAgcmdiYSgwLCAwLCAwLCAuOSkgMjUlLFxuICByZ2JhKDAsIDAsIDAsIC44NSkzMCUsXG4gIHJnYmEoMCwgMCwgMCwgLjgpIDM1JSxcbiAgcmdiYSgwLCAwLCAwLCAuNzUpNDAlLFxuICByZ2JhKDAsIDAsIDAsIC43KSA0NSUsXG4gIHJnYmEoMCwgMCwgMCwgLjY1KTUwJSxcbiAgcmdiYSgwLCAwLCAwLCAuNikgNTUlLFxuICByZ2JhKDAsIDAsIDAsIC41KSA2NSUsXG4gIHJnYmEoMCwgMCwgMCwgLjQpIDc1JSxcbiAgcmdiYSgwLCAwLCAwLCAuMykgODUlLFxuICByZ2JhKDAsIDAsIDAsIDApIDEwMCUpO1xuXG4vLy8gQnJlYWtwb2ludCBtYXBcbiRicmVha3BvaW50LW1hcCA6IChcbiAgJ3NtJzogNTc2cHgsXG4gICdtZCc6IDc2OHB4LFxuICAnbGcnOiA5OTJweCxcbiAgJ3hsZyc6IDEyMDBweFxuKTtcblxuIl19 */"

/***/ }),

/***/ "./src/app/containers/firms/firms.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/containers/firms/firms.component.ts ***!
  \*****************************************************/
/*! exports provided: FirmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirmsComponent", function() { return FirmsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FirmsComponent = /** @class */ (function () {
    function FirmsComponent() {
        this.headerConfig = {
            backgroungImgUrl: 'assets/img/firms/new_visual_01.png',
            title: 'Bedrooms bla bla..',
            subTitle: 'subtitle bla bla bla...',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum ut nulla id dictum.'
        };
        this.gallery1Config = [{
                small: 'assets/img/firms/new_visual_01.png',
                medium: 'assets/img/firms/new_visual_01.png',
                big: 'assets/img/firms/new_visual_01.png'
            }, {
                small: 'assets/img/firms/new_visual_02.png',
                medium: 'assets/img/firms/new_visual_02.png',
                big: 'assets/img/firms/new_visual_02.png'
            }, {
                small: 'assets/img/firms/new_visual_03.png',
                medium: 'assets/img/firms/new_visual_03.png',
                big: 'assets/img/firms/new_visual_01.png'
            }, {
                small: 'assets/img/firms/new_visual_04.png',
                medium: 'assets/img/firms/new_visual_04.png',
                big: 'assets/img/firms/new_visual_04.png'
            }, {
                small: 'assets/img/firms/new_visual_05.png',
                medium: 'assets/img/firms/new_visual_05.png',
                big: 'assets/img/firms/new_visual_05.png'
            }, {
                small: 'assets/img/firms/new_visual_06.png',
                medium: 'assets/img/firms/new_visual_06.png',
                big: 'assets/img/firms/new_visual_06.png'
            }];
        this.gallery2Config = [{
                small: 'assets/img/firms/cacao_beauty_center_01.png',
                medium: 'assets/img/firms/cacao_beauty_center_01.png',
                big: 'assets/img/firms/cacao_beauty_center_01.png'
            }, {
                small: 'assets/img/firms/cacao_beauty_center_02.png',
                medium: 'assets/img/firms/cacao_beauty_center_02.png',
                big: 'assets/img/firms/cacao_beauty_center_02.png'
            }, {
                small: 'assets/img/firms/cacao_beauty_center_03.png',
                medium: 'assets/img/firms/cacao_beauty_center_03.png',
                big: 'assets/img/firms/cacao_beauty_center_03.png'
            }, {
                small: 'assets/img/firms/cacao_beauty_center_04.png',
                medium: 'assets/img/firms/cacao_beauty_center_04.png',
                big: 'assets/img/firms/cacao_beauty_center_04.png'
            }];
    }
    FirmsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-firms',
            template: __webpack_require__(/*! ./firms.component.html */ "./src/app/containers/firms/firms.component.html"),
            styles: [__webpack_require__(/*! ./firms.component.scss */ "./src/app/containers/firms/firms.component.scss")]
        })
    ], FirmsComponent);
    return FirmsComponent;
}());



/***/ }),

/***/ "./src/app/containers/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/containers/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"mj-video-holder\">\n    <video autoplay\n           loop\n           muted\n           plays-inline\n           class=\"mj-video\"\n           #videPlayer>\n      <source\n        src=\"assets/carpenter.mp4\"\n        type=\"video/mp4\">\n    </video>\n    <div class=\"mj-video-overlay-dialog\">\n      <h2 class=\"mj-dialog-title\">Nameštaj je svuda oko nas.</h2>\n      <h3 class=\"mj-dialog-title\">NEIZBEŽAN JE!</h3>\n      <!--<h3 class=\"mj-dialog-subtitle\"></h3>-->\n      <p class=\"mj-dialog-text\">Svakome je potreban krevet na kome spava, kuhinja u kojoj sprema omiljenu klopu i fijoka\n        za stvarčice, zar ne?!\n        Lepota boli, jednostavnost je sexi, a mi Vam donosimo više stila za manje novca.\n\n      </p>\n      <!--<a class=\"mj-dialog-btn\">-->\n      <!--<span class=\"fa fa-play-circle-o\"></span>-->\n      <!--<span class=\"mj-dialog-btn-text\">Lorem ipsum</span>-->\n      <!--</a>-->\n    </div>\n    <!--<div class=\"mj-overlay-logo\"></div>-->\n    <div class=\"mj-arrow-btn-holder\">\n      <mat-icon [ngx-scroll-to]=\"'white_cont'\">keyboard_arrow_down</mat-icon>\n    </div>\n  </div>\n</header>\n<section class=\"mj-section\" #whiteContainer>\n  <div class=\"mj-section-holder\"\n       [@scrollAnimation]=\"state\"\n       id=\"white_cont\">\n    <div class=\"container\">\n      <div fxLayout=\"row\"\n           fxLayoutAlign=\"space-between stretch\"\n           fxLayout.xs=\"column\">\n        <div fxFlex=\"50\"\n             class=\"mj-section-div\">\n          <img src=\"assets/img/projektovanje_opt.png\"\n               alt=\"\">\n        </div>\n        <div fxFlex=\"50\"\n             class=\"mj-section-div\"\n             fxLayout=\"row\">\n          <div>\n            <h3 class=\"mj-section-title\">Projektovanje</h3>\n            <p>\n              Tim arhitekata i dizajnera enterijera sa višegodišnjim iskustvom u projektovanju, dizajniranju i uređenju\n              enterijera mogu Vam pomoći u uređenju doma ili poslovnog prostora i dati Vam idejno rešenje.</p>\n          </div>\n          <div class=\"mj-section-footer\"\n               fxFlexAlign=\"end\">\n            <div fxLayout=\"row\"\n                 fxLayoutAlign=\"space-between center\"\n                 class=\"mj-section-footer-padding\">\n              <span></span>\n              <mat-icon\n                routerLink=\"/projecting\"\n                class=\"mj-section-footer-arrow\">\n                arrow_forward_ios\n              </mat-icon>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"mj-section mj-grid-layout\">\n  <div class=\"mj-section-holder\"\n       fxLayout=\"row\"\n       fxLayoutAlign=\"stretch\"\n       fxLayout.xs=\"column\">\n    <div fxFlex=\"50\"\n         class=\"mj-section-div mj-kitchen-background mj-on-hover\"\n         fxLayout=\"row\">\n      <!--<div class=\"mj-section-header\">-->\n      <!--kuhinje bla bla..-->\n      <!--</div>-->\n      <div class=\"mj-section-footer\">\n        <div fxLayout=\"row\"\n             fxLayoutAlign=\"space-between center\"\n             class=\"mj-section-footer-padding\">\n          <span>KUHINJE</span>\n          <mat-icon\n            routerLink=\"/kitchens\"\n            class=\"mj-section-footer-arrow\">\n            arrow_forward_ios\n          </mat-icon>\n        </div>\n      </div>\n    </div>\n    <div fxFlex=\"50\"\n         class=\"mj-section-div mj-wordart\"\n         fxLayout=\"row\">\n      <!--<div class=\"mj-section-header\">-->\n      <!--kuhinje bla bla..-->\n      <!--</div>-->\n    </div>\n    <!--<div fxFlex=\"50\"-->\n    <!--class=\"mj-section-div\">-->\n    <!--<div fxLayout=\"column\"-->\n    <!--fxLayoutAlign=\"stretch\">-->\n    <!--<div fxFlex=\"50\"-->\n    <!--class=\"mj-section-div mj-livingroom-background mj-on-hover\"-->\n    <!--fxLayout=\"row\">-->\n    <!--<div class=\"mj-section-footer\"-->\n    <!--fxFlexAlign=\"end\">-->\n    <!--<div fxLayout=\"row\"-->\n    <!--fxLayoutAlign=\"space-between center\"-->\n    <!--class=\"mj-section-footer-padding\">-->\n    <!--<span>livingroom bla bla..</span>-->\n    <!--<mat-icon-->\n    <!--routerLink=\"/livingrooms\"-->\n    <!--class=\"mj-section-footer-arrow\">-->\n    <!--arrow_forward-->\n    <!--</mat-icon>-->\n    <!--</div>-->\n    <!--</div>-->\n    <!--</div>-->\n    <!--<div fxFlex=\"50\"-->\n    <!--class=\"mj-section-div mj-bathroom-background mj-on-hover\"-->\n    <!--fxLayout=\"row\">-->\n    <!--<div class=\"mj-section-footer\"-->\n    <!--fxFlexAlign=\"end\">-->\n    <!--<div fxLayout=\"row\"-->\n    <!--fxLayoutAlign=\"space-between center\"-->\n    <!--class=\"mj-section-footer-padding\">-->\n    <!--<span>bathroom bla bla..</span>-->\n    <!--<mat-icon-->\n    <!--routerLink=\"/bathrooms\"-->\n    <!--class=\"mj-section-footer-arrow\">-->\n    <!--arrow_forward-->\n    <!--</mat-icon>-->\n    <!--</div>-->\n    <!--</div>-->\n    <!--</div>-->\n    <!--</div>-->\n    <!--</div>-->\n  </div>\n</section>\n<section class=\"mj-section mj_news_section\">\n  <div class=\"mj-section-holder\">\n    <div class=\"container\">\n      <h2 class=\"mj-section-title\">\n        Novosti\n      </h2>\n      <app-news-card *ngFor=\"let news of newsConfig\" [data]=\"news\"></app-news-card>\n    </div>\n  </div>\n</section>\n<section class=\"mj-section\">\n  <div class=\"mj-section-holder\" id=\"o-nama\">\n    <div class=\"container\">\n      <div fxLayout=\"row\"\n           fxLayoutAlign=\"space-between stretch\"\n           fxLayout.xs=\"column\">\n        <div class=\"mj-section-div mj-about-us\"\n             fxLayout=\"row\">\n          <div>\n            <h3 class=\"mj-section-title\">Ko smo mi?</h3>\n            <p>\n              Kompanija <span class=\"mj-majorelle-name\">Majorelle</span>, sa sedištem u Kragujevcu, bavi se proizvodnjom raznovrsnog asortimana nameštaja po\n              meri za stambene, poslovne i ugostiteljske objekte. Nameštaj koji izrađujemo odlikuje originalan i moderan\n              dizajn i visoki kvalitet izrade uz pristupačne cene.\n            </p>\n            <p>Naš tim čine kvalifikovani, dobro obučeni i stručni radnici koji prate potrebe najzahtevnijih kupaca i\n              izlaze u susret njihovim željama. Na raspolaganju smo da Vam pomognemo u odabiru stila, materijala i boja\n              i da Vam ponudimo jedinstvene ideje za opremanje prostora.</p>\n            <p>Dugogodišnjim radom i iskustvom kompanija <span class=\"mj-majorelle-name\">Majorelle</span> stvorila je prepoznatljiv brend na našem tržištu, a\n              ono po čemu se izdavajamo i što nas čini prepoznatljivim u industriji nameštaja jeste striktno poštovanje\n              datih rokova za izradu nameštaja.</p>\n            <p>Cilj kompanije je konstantno širenje obima i asortimana proizvodnje i usklađivanje sa novim svetskim\n              trendovima i standardima kvaliteta. I u budućnosti ćemo se truditi da zadovoljimo potrebe svakog kupca i\n              nalazimo najpraktičnija rešenja za savremene uslove života.</p>\n            <p>\n              Hvala Vam što ste sa nama svo ovo vreme, a mi ćemo se truditi da i dalje opravdavamo Vaše poverenje.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/containers/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/containers/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes slide-down {\n  0% {\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px);\n    opacity: 0; }\n  50% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: .6; }\n  100% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: 0; } }\n\n@keyframes slide-down {\n  0% {\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px);\n    opacity: 0; }\n  50% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: .6; }\n  100% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: 0; } }\n\n@-webkit-keyframes slide-down-on-hover {\n  0% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: .5; }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 1; } }\n\n@keyframes slide-down-on-hover {\n  0% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: .5; }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 1; } }\n\n.mj-video-holder {\n  height: 100vh;\n  overflow: hidden;\n  position: relative; }\n\n.mj-video-holder::before {\n    background: linear-gradient(180deg, black 0%, rgba(0, 0, 0, 0.9) 25%, rgba(0, 0, 0, 0.85) 30%, rgba(0, 0, 0, 0.8) 35%, rgba(0, 0, 0, 0.75) 40%, rgba(0, 0, 0, 0.7) 45%, rgba(0, 0, 0, 0.65) 50%, rgba(0, 0, 0, 0.6) 55%, rgba(0, 0, 0, 0.5) 65%, rgba(0, 0, 0, 0.4) 75%, rgba(0, 0, 0, 0.3) 85%, rgba(0, 0, 0, 0) 100%);\n    content: '';\n    height: 50%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%; }\n\n.mj-video-holder::after {\n    background: linear-gradient(0deg, black 0%, rgba(0, 0, 0, 0.9) 25%, rgba(0, 0, 0, 0.85) 30%, rgba(0, 0, 0, 0.8) 35%, rgba(0, 0, 0, 0.75) 40%, rgba(0, 0, 0, 0.7) 45%, rgba(0, 0, 0, 0.65) 50%, rgba(0, 0, 0, 0.6) 55%, rgba(0, 0, 0, 0.5) 65%, rgba(0, 0, 0, 0.4) 75%, rgba(0, 0, 0, 0.3) 85%, rgba(0, 0, 0, 0) 100%);\n    bottom: 0;\n    content: '';\n    height: 50%;\n    left: 0;\n    position: absolute;\n    width: 100%; }\n\n.mj-video-holder .mj-video {\n    height: 100%;\n    width: 100%;\n    z-index: -1;\n    -o-object-fit: cover;\n       object-fit: cover; }\n\n.mj-video-holder .mj-video-overlay-dialog {\n    color: #fff;\n    left: 50%;\n    position: absolute;\n    text-align: center;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    z-index: 1; }\n\n@media only screen and (max-width: 768px) {\n      .mj-video-holder .mj-video-overlay-dialog {\n        min-width: 360px; } }\n\n.mj-video-holder .mj-video-overlay-dialog .mj-dialog-title {\n      color: #bb9a6a;\n      font-family: \"Butler-Regular\";\n      font-size: 5.6rem;\n      margin-bottom: 1.5rem; }\n\n@media only screen and (max-width: 768px) {\n        .mj-video-holder .mj-video-overlay-dialog .mj-dialog-title {\n          font-size: 3.6rem; } }\n\n.mj-video-holder .mj-video-overlay-dialog .mj-dialog-subtitle {\n      font-family: \"Abel-Regular\";\n      font-size: 2.4rem;\n      margin-bottom: 1.5rem;\n      text-transform: uppercase; }\n\n.mj-video-holder .mj-video-overlay-dialog .mj-dialog-text {\n      font-family: \"Lato-Light\";\n      font-size: 1.7rem;\n      line-height: 2.4rem;\n      display: flex;\n      justify-content: center;\n      margin-bottom: 1.5rem;\n      text-align: center;\n      word-spacing: .2rem; }\n\n@media only screen and (max-width: 768px) {\n        .mj-video-holder .mj-video-overlay-dialog .mj-dialog-text {\n          display: none; } }\n\n.mj-video-holder .mj-video-overlay-dialog .mj-dialog-btn {\n      align-items: center;\n      color: #bb9a6a;\n      cursor: pointer;\n      display: flex;\n      font-family: \"Abel-Regular\";\n      font-size: 2.1rem;\n      justify-content: center; }\n\n.mj-video-holder .mj-video-overlay-dialog .mj-dialog-btn .fa {\n        font-size: 4rem; }\n\n.mj-video-holder .mj-video-overlay-dialog .mj-dialog-btn .mj-dialog-btn-text {\n        line-height: 3rem;\n        margin-left: 1rem;\n        text-transform: uppercase; }\n\n.mj-video-holder .mj-overlay-logo {\n    background-image: url('logo_majorelle.png');\n    background-position: bottom right;\n    background-repeat: no-repeat;\n    background-size: contain;\n    bottom: 0;\n    height: 60%;\n    opacity: .5;\n    pointer-events: none;\n    position: absolute;\n    right: 0;\n    width: 100%;\n    z-index: 2; }\n\n@media only screen and (max-width: 768px) {\n      .mj-video-holder .mj-overlay-logo {\n        background-position: bottom center; } }\n\n.mj-video-holder .mj-arrow-btn-holder {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    z-index: 1;\n    display: flex;\n    cursor: pointer;\n    justify-content: center; }\n\n.mj-video-holder .mj-arrow-btn-holder mat-icon {\n      font-size: 8rem;\n      width: 8rem;\n      height: 8rem;\n      -webkit-transform-origin: top;\n              transform-origin: top;\n      -webkit-animation: slide-down 1.6s infinite forwards;\n              animation: slide-down 1.6s infinite forwards;\n      color: rgba(255, 255, 255, 0.8); }\n\n.mj-grid-layout {\n  background-color: #211f1e;\n  padding: 0;\n  text-align: justify; }\n\n.mj-grid-layout .mj-section-holder {\n    max-width: none;\n    height: 50rem; }\n\n.mj-grid-layout .mj-section-div {\n    padding: 0; }\n\n.mj-grid-layout .mj-section-div div {\n      height: 100%; }\n\n.mj-grid-layout .mj-wordart {\n    background-image: url('word_art.png');\n    background-size: cover; }\n\n.mj-grid-layout .mj-kitchen-background {\n    background-image: url('kitchen_04_opt.png');\n    background-size: cover; }\n\n.mj-grid-layout .mj-livingroom-background {\n    background-image: url('livingroom_04_opt.png');\n    background-size: cover; }\n\n.mj-grid-layout .mj-bathroom-background {\n    background-image: url('bathroom_04_opt.png');\n    background-size: cover; }\n\n.mj-grid-layout .mj-on-hover {\n    opacity: .5;\n    transition: opacity .7s ease;\n    position: relative; }\n\n.mj-grid-layout .mj-on-hover .mj-section-footer {\n      position: absolute;\n      display: none !important;\n      bottom: 0;\n      height: 7rem;\n      width: 100%;\n      -webkit-animation: slide-down-on-hover .5s ease;\n              animation: slide-down-on-hover .5s ease; }\n\n.mj-grid-layout .mj-on-hover .mj-section-footer .mj-section-footer-padding {\n        padding: 0 3rem; }\n\n.mj-grid-layout .mj-on-hover .mj-section-footer .mj-section-footer-padding span {\n          font-size: 4rem;\n          font-family: \"Lato-Light\";\n          font-weight: 600; }\n\n.mj-grid-layout .mj-on-hover .mj-section-footer .mj-section-footer-padding .mat-icon {\n          height: unset;\n          width: unset; }\n\n.mj-grid-layout .mj-on-hover .mj-section-header {\n      position: absolute;\n      top: 0;\n      height: 5rem;\n      width: 100%;\n      line-height: 5rem;\n      font-size: 3rem;\n      padding: 1rem; }\n\n.mj-grid-layout .mj-on-hover:hover {\n      opacity: 1; }\n\n.mj-grid-layout .mj-on-hover:hover .mj-section-footer {\n        color: #bb9a6a;\n        display: block !important;\n        background-color: rgba(0, 0, 0, 0.3); }\n\n.mj-section-footer-arrow {\n  font-size: 5rem;\n  color: #bb9a6a;\n  cursor: pointer;\n  transition: -webkit-transform .1s ease-out;\n  transition: transform .1s ease-out;\n  transition: transform .1s ease-out, -webkit-transform .1s ease-out; }\n\n.mj-section-footer-arrow:hover {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1); }\n\n.mj_news_section {\n  background-color: #292725;\n  padding: 0;\n  text-align: justify; }\n\n.mj_news_section .mj-section-holder {\n    max-width: none;\n    height: 50rem; }\n\n@media only screen and (max-width: 576px) {\n      .mj_news_section .mj-section-holder {\n        height: auto; } }\n\n.mj-about-us p {\n  margin: 2rem 0;\n  text-align: center;\n  font-size: 1.8rem; }\n\n.mj-about-us .mj-majorelle-name {\n  color: #bb9a6a;\n  font-weight: 600; }\n\n#white_cont .mj-section-div p {\n  text-align: center;\n  font-size: 2rem;\n  margin: 9rem 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N0ZXZhbm5uL3dvcmtzcGFjZS9tYWpvcmVsbGUtcHJvamVjdC9zcmMvc2Fzcy1maWxlcy9hbmltYXRpb25zLnNjc3MiLCIvaG9tZS9zdGV2YW5ubi93b3Jrc3BhY2UvbWFqb3JlbGxlLXByb2plY3Qvc3JjL2FwcC9jb250YWluZXJzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsIi9ob21lL3N0ZXZhbm5uL3dvcmtzcGFjZS9tYWpvcmVsbGUtcHJvamVjdC9zcmMvc2Fzcy1maWxlcy92YXJpYWJsZXMuc2NzcyIsIi9ob21lL3N0ZXZhbm5uL3dvcmtzcGFjZS9tYWpvcmVsbGUtcHJvamVjdC9zcmMvc2Fzcy1maWxlcy9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFO0lBQ0Usb0NBQTRCO1lBQTVCLDRCQUE0QjtJQUM1QixVQUFVLEVBQUE7RUFHWjtJQUNFLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsV0FBVyxFQUFBO0VBR2I7SUFDRSxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLFVBQVUsRUFBQSxFQUFBOztBQWJkO0VBQ0U7SUFDRSxvQ0FBNEI7WUFBNUIsNEJBQTRCO0lBQzVCLFVBQVUsRUFBQTtFQUdaO0lBQ0UsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixXQUFXLEVBQUE7RUFHYjtJQUNFLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsVUFBVSxFQUFBLEVBQUE7O0FBSWQ7RUFDRztJQUNFLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsV0FBVyxFQUFBO0VBR2I7SUFDRSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLFVBQVUsRUFBQSxFQUFBOztBQVJmO0VBQ0c7SUFDRSxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLFdBQVcsRUFBQTtFQUdiO0lBQ0Usa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQixVQUFVLEVBQUEsRUFBQTs7QUNwQmY7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUhwQjtJQU1JLHVUQ3lCb0I7SUR4QnBCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsT0FBTztJQUNQLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sV0FBVyxFQUFBOztBQVpmO0lBZ0JJLHFUQzZCb0I7SUQ1QnBCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsV0FBVztJQUNYLE9BQU87SUFDUCxrQkFBa0I7SUFDbEIsV0FBVyxFQUFBOztBQXRCZjtJQTBCSSxZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7SUFDWCxvQkFBaUI7T0FBakIsaUJBQWlCLEVBQUE7O0FBN0JyQjtJQWlDSSxXQUFXO0lBQ1gsU0FBUztJQUNULGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLHdDQUFnQztZQUFoQyxnQ0FBZ0M7SUFDaEMsVUFBVSxFQUFBOztBRWRWO01GekJKO1FBMENNLGdCQUFnQixFQUFBLEVBd0RuQjs7QUFsR0g7TUE4Q00sY0NqRHNCO01Ea0R0Qiw2QkNsQzhCO01EbUM5QixpQkFBaUI7TUFDakIscUJBQXFCLEVBQUE7O0FFeEJ2QjtRRnpCSjtVQW9EUSxpQkFBaUIsRUFBQSxFQUVwQjs7QUF0REw7TUF5RE0sMkJDeENnQztNRHlDaEMsaUJBQWlCO01BQ2pCLHFCQUFxQjtNQUNyQix5QkFBeUIsRUFBQTs7QUE1RC9CO01BZ0VNLHlCQ3REMEI7TUR1RDFCLGlCQUFpQjtNQUNqQixtQkFBbUI7TUFDbkIsYUFBYTtNQUNiLHVCQUF1QjtNQUN2QixxQkFBcUI7TUFDckIsa0JBQWtCO01BRWxCLG1CQUFtQixFQUFBOztBRS9DckI7UUZ6Qko7VUEyRVEsYUFBYSxFQUFBLEVBRWhCOztBQTdFTDtNQWdGTSxtQkFBbUI7TUFDbkIsY0NwRnNCO01EcUZ0QixlQUFlO01BQ2YsYUFBYTtNQUNiLDJCQ25FZ0M7TURvRWhDLGlCQUFpQjtNQUNqQix1QkFBdUIsRUFBQTs7QUF0RjdCO1FBeUZRLGVBQWUsRUFBQTs7QUF6RnZCO1FBNkZRLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIseUJBQXlCLEVBQUE7O0FBL0ZqQztJQXFHSSwyQ0FBc0Q7SUFDdEQsaUNBQWlDO0lBQ2pDLDRCQUE0QjtJQUM1Qix3QkFBd0I7SUFDeEIsU0FBUztJQUNULFdBQVc7SUFDWCxXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztJQUNYLFVBQVUsRUFBQTs7QUV2RlY7TUZ6Qko7UUFtSE0sa0NBQWtDLEVBQUEsRUFFckM7O0FBckhIO0lBd0hJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLFVBQVU7SUFDVixhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QixFQUFBOztBQTlIM0I7TUFpSU0sZUFBZTtNQUNmLFdBQVc7TUFDWCxZQUFZO01BQ1osNkJBQXFCO2NBQXJCLHFCQUFxQjtNQUNyQixvREFBNEM7Y0FBNUMsNENBQTRDO01BQzVDLCtCQ3ZJMEIsRUFBQTs7QUQ0SWhDO0VBQ0UseUJDbEprQjtFRG1KbEIsVUFBVTtFQUNWLG1CQUFtQixFQUFBOztBQUhyQjtJQU1JLGVBQWU7SUFDZixhQUFhLEVBQUE7O0FBUGpCO0lBV0ksVUFBVSxFQUFBOztBQVhkO01BY00sWUFBWSxFQUFBOztBQWRsQjtJQW1CSSxxQ0FBZ0Q7SUFDaEQsc0JBQXNCLEVBQUE7O0FBcEIxQjtJQXdCSSwyQ0FBK0Q7SUFDL0Qsc0JBQXNCLEVBQUE7O0FBekIxQjtJQTZCSSw4Q0FBcUU7SUFDckUsc0JBQXNCLEVBQUE7O0FBOUIxQjtJQWtDSSw0Q0FBaUU7SUFDakUsc0JBQXNCLEVBQUE7O0FBbkMxQjtJQXVDSSxXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLGtCQUFrQixFQUFBOztBQXpDdEI7TUE0Q00sa0JBQWtCO01BQ2xCLHdCQUF3QjtNQUN4QixTQUFTO01BQ1QsWUFBWTtNQUNaLFdBQVc7TUFDWCwrQ0FBdUM7Y0FBdkMsdUNBQXVDLEVBQUE7O0FBakQ3QztRQW9EUSxlQUFlLEVBQUE7O0FBcER2QjtVQXVEVSxlQUFlO1VBQ2YseUJDMUxnQjtVRDJMaEIsZ0JBQWdCLEVBQUE7O0FBekQxQjtVQTZEVSxhQUFhO1VBQ2IsWUFBWSxFQUFBOztBQTlEdEI7TUFvRU0sa0JBQWtCO01BQ2xCLE1BQU07TUFDTixZQUFZO01BQ1osV0FBVztNQUNYLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YsYUFBYSxFQUFBOztBQTFFbkI7TUE4RU0sVUFBVSxFQUFBOztBQTlFaEI7UUFpRlEsY0MvTm9CO1FEZ09wQix5QkFBeUI7UUFDekIsb0NBQW1DLEVBQUE7O0FBTTNDO0VBQ0UsZUFBZTtFQUNmLGNDek8wQjtFRDBPMUIsZUFBZTtFQUlmLDBDQUFrQztFQUFsQyxrQ0FBa0M7RUFBbEMsa0VBQWtDLEVBQUE7O0FBUHBDO0lBV0ksNkJBQTZCO0lBRTdCLHFCQUFxQixFQUFBOztBQUl6QjtFQUNFLHlCQzNQd0I7RUQ0UHhCLFVBQVU7RUFDVixtQkFBbUIsRUFBQTs7QUFIckI7SUFNSSxlQUFlO0lBQ2YsYUFBYSxFQUFBOztBRW5PYjtNRjROSjtRQVdNLFlBQVksRUFBQSxFQUVmOztBQUdIO0VBRUksY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFKckI7RUFPSSxjQy9Rd0I7RURnUnhCLGdCQUFnQixFQUFBOztBQUlwQjtFQUdNLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29udGFpbmVycy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gU2xpZGUgZG93biBhbmltYXRpb25cbkBrZXlmcmFtZXMgc2xpZGUtZG93biB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgICBvcGFjaXR5OiAuNjtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtZG93bi1vbi1ob3ZlciB7XG4gICAwJSB7XG4gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgICAgb3BhY2l0eTogLjU7XG4gICB9XG5cbiAgIDEwMCUge1xuICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgb3BhY2l0eTogMTtcbiAgIH1cbiB9XG4iLCIvLy8gSW1wb3J0aW5nIHNhc3MgZm9yIGNvbXBvbmVudFxuQGltcG9ydCBcIi4uLy4uLy4uL3Nhc3MtZmlsZXMvY29tcG9uZW50LWFzc2VzdHNcIjtcblxuLy8vIENoYW5naW5nIHBhdGggb2YgaW1hZ2VzIHRvIG1hdGNoIHBhdGggZnJvbSBjb21wb25lbnRcbiRpbWctdXJsOiAnLi4vLi4vLi4vYXNzZXRzL2ltZy8nO1xuXG4ubWotdmlkZW8taG9sZGVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICY6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogJG1qLXRvcC10by1ib3R0b20tZ3JhZGllbnQ7XG4gICAgY29udGVudDogJyc7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgbGVmdDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgJjo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6ICRtai1ib3R0b20tdG8tdG9wLWdyYWRpZW50O1xuICAgIGJvdHRvbTogMDtcbiAgICBjb250ZW50OiAnJztcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5tai12aWRlbyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICB9XG5cbiAgLm1qLXZpZGVvLW92ZXJsYXktZGlhbG9nIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBsZWZ0OiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB6LWluZGV4OiAxO1xuXG4gICAgQGluY2x1ZGUgcmVzcG9uc2l2ZShtZCkge1xuICAgICAgbWluLXdpZHRoOiAzNjBweDtcbiAgICB9XG5cbiAgICAubWotZGlhbG9nLXRpdGxlIHtcbiAgICAgIGNvbG9yOiAkbWotc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgZm9udC1mYW1pbHk6ICRmYW5jeS1mb250LWZhbWlseTtcbiAgICAgIGZvbnQtc2l6ZTogNS42cmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuXG4gICAgICBAaW5jbHVkZSByZXNwb25zaXZlKG1kKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMy42cmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tai1kaWFsb2ctc3VidGl0bGUge1xuICAgICAgZm9udC1mYW1pbHk6ICRzaWRlLW1lbnUtZm9udC1mYW1pbHk7XG4gICAgICBmb250LXNpemU6IDIuNHJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuXG4gICAgLm1qLWRpYWxvZy10ZXh0IHtcbiAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktbGlnaHQ7XG4gICAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyLjRyZW07XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAvL21heC13aWR0aDogNTAwcHg7XG4gICAgICB3b3JkLXNwYWNpbmc6IC4ycmVtO1xuXG4gICAgICBAaW5jbHVkZSByZXNwb25zaXZlKG1kKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1qLWRpYWxvZy1idG4ge1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGNvbG9yOiAkbWotc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZvbnQtZmFtaWx5OiAkc2lkZS1tZW51LWZvbnQtZmFtaWx5O1xuICAgICAgZm9udC1zaXplOiAyLjFyZW07XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgLmZhIHtcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgICAgfVxuXG4gICAgICAubWotZGlhbG9nLWJ0bi10ZXh0IHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tai1vdmVybGF5LWxvZ28ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiN7JGltZy11cmx9bG9nb19tYWpvcmVsbGUucG5nXCIpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSByaWdodDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBib3R0b206IDA7XG4gICAgaGVpZ2h0OiA2MCU7XG4gICAgb3BhY2l0eTogLjU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDI7XG5cbiAgICBAaW5jbHVkZSByZXNwb25zaXZlKG1kKSB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gIC5tai1hcnJvdy1idG4taG9sZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBtYXQtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDhyZW07XG4gICAgICB3aWR0aDogOHJlbTtcbiAgICAgIGhlaWdodDogOHJlbTtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgIGFuaW1hdGlvbjogc2xpZGUtZG93biAxLjZzIGluZmluaXRlIGZvcndhcmRzO1xuICAgICAgY29sb3I6ICRtai1jb2xvci13aGl0ZS1saWdodDtcbiAgICB9XG4gIH1cbn1cblxuLm1qLWdyaWQtbGF5b3V0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhc2UtY29sb3I7XG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG5cbiAgLm1qLXNlY3Rpb24taG9sZGVyIHtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgaGVpZ2h0OiA1MHJlbTtcbiAgfVxuXG4gIC5tai1zZWN0aW9uLWRpdiB7XG4gICAgcGFkZGluZzogMDtcblxuICAgIGRpdiB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgLm1qLXdvcmRhcnQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiN7JGltZy11cmx9d29yZF9hcnQucG5nXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cblxuICAubWota2l0Y2hlbi1iYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIjeyRpbWctdXJsfWtpdGNoZW5zL2tpdGNoZW5fMDRfb3B0LnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG5cbiAgLm1qLWxpdmluZ3Jvb20tYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiI3skaW1nLXVybH1saXZpbmdyb29tcy9saXZpbmdyb29tXzA0X29wdC5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxuXG4gIC5tai1iYXRocm9vbS1iYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIjeyRpbWctdXJsfWJhdGhyb29tcy9iYXRocm9vbV8wNF9vcHQucG5nXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cblxuICAubWotb24taG92ZXIge1xuICAgIG9wYWNpdHk6IC41O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjdzIGVhc2U7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLm1qLXNlY3Rpb24tZm9vdGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGhlaWdodDogN3JlbTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYW5pbWF0aW9uOiBzbGlkZS1kb3duLW9uLWhvdmVyIC41cyBlYXNlO1xuXG4gICAgICAubWotc2VjdGlvbi1mb290ZXItcGFkZGluZyB7XG4gICAgICAgIHBhZGRpbmc6IDAgM3JlbTtcblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1hdC1pY29uIHtcbiAgICAgICAgICBoZWlnaHQ6IHVuc2V0O1xuICAgICAgICAgIHdpZHRoOiB1bnNldDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5tai1zZWN0aW9uLWhlYWRlciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBoZWlnaHQ6IDVyZW07XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGxpbmUtaGVpZ2h0OiA1cmVtO1xuICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IDE7XG5cbiAgICAgIC5tai1zZWN0aW9uLWZvb3RlciB7XG4gICAgICAgIGNvbG9yOiAkbWotc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLm1qLXNlY3Rpb24tZm9vdGVyLWFycm93IHtcbiAgZm9udC1zaXplOiA1cmVtO1xuICBjb2xvcjogJG1qLXNlY29uZGFyeS1jb2xvcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIC4xcyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuMXMgZWFzZS1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IC1vLXRyYW5zZm9ybSAuMXMgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMXMgZWFzZS1vdXQ7XG5cbiAgJjpob3ZlciB7XG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgfVxufVxuXG4ubWpfbmV3c19zZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhc2UtbGlnaHQtY29sb3I7XG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG5cbiAgLm1qLXNlY3Rpb24taG9sZGVyIHtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgaGVpZ2h0OiA1MHJlbTtcblxuXG4gICAgQGluY2x1ZGUgcmVzcG9uc2l2ZShzbSkge1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgfVxufVxuXG4ubWotYWJvdXQtdXMge1xuICBwIHtcbiAgICBtYXJnaW46IDJyZW0gMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gIH1cbiAgLm1qLW1ham9yZWxsZS1uYW1le1xuICAgIGNvbG9yOiAkbWotc2Vjb25kYXJ5LWNvbG9yO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbn1cblxuI3doaXRlX2NvbnQge1xuICAubWotc2VjdGlvbi1kaXYge1xuICAgIHAge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgbWFyZ2luOiA5cmVtIDA7XG4gICAgfVxuICB9XG59XG4iLCIkYmFzZS1jb2xvcjogIzIxMWYxZSAhZGVmYXVsdDtcbiRiYXNlLWxpZ2h0LWNvbG9yOiAjMjkyNzI1ICFkZWZhdWx0O1xuXG4kbWotc2Vjb25kYXJ5LWNvbG9yOiAjYmI5YTZhICFkZWZhdWx0O1xuXG4kbWotY29sb3Itd2hpdGUtbGlnaHQ6IHJnYmEoI2ZmZiwgLjgpICFkZWZhdWx0O1xuJG1qLWNvbG9yLXdoaXRlLWxpZ2h0ZXI6IHJnYmEoI2ZmZiwgLjYpICFkZWZhdWx0O1xuXG4kbWotc3BhY2luZzogLjhyZW0gIWRlZmF1bHQ7XG4kbWotc3BhY2luZy1zbWFsbDogLjRyZW0gIWRlZmF1bHQ7XG4kbWotc3BhY2luZy1sYXJnZTogMS42cmVtICFkZWZhdWx0O1xuXG4kZm9udC11cmw6ICcuLi9hc3NldHMvZm9udHMvJyAhZGVmYXVsdDtcbiRpbWctdXJsOiAnLi4vYXNzZXRzL2ltZy8nICFkZWZhdWx0O1xuXG4kZm9udC1mYW1pbHk6ICdMYXRvLUxpZ2h0JyFkZWZhdWx0O1xuJGZvbnQtZmFtaWx5LWxpZ2h0OiAnTGF0by1MaWdodCcgIWRlZmF1bHQ7XG4kZm9udC1mYW1pbHktYm9sZDogJ0xhdG8tQm9sZCcgIWRlZmF1bHQ7XG5cbiRmYW5jeS1mb250LWZhbWlseTogJ0J1dGxlci1SZWd1bGFyJyAhZGVmYXVsdDtcbiRmYW5jeS1mb250LWZhbWlseS1saWdodDogJ0J1dGxlci1MaWdodCcgIWRlZmF1bHQ7XG4kZmFuY3ktZm9udC1mYW1pbHktYm9sZDogJ0J1dGxlci1Cb2xkJyAhZGVmYXVsdDtcblxuJHNpZGUtbWVudS1mb250LWZhbWlseTogJ0FiZWwtUmVndWxhcicgIWRlZmF1bHQ7XG5cbiRtai10b3AtdG8tYm90dG9tLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLFxuICByZ2JhKDAsIDAsIDAsIDEpICAwJSxcbiAgcmdiYSgwLCAwLCAwLCAuOSkgMjUlLFxuICByZ2JhKDAsIDAsIDAsIC44NSkzMCUsXG4gIHJnYmEoMCwgMCwgMCwgLjgpIDM1JSxcbiAgcmdiYSgwLCAwLCAwLCAuNzUpNDAlLFxuICByZ2JhKDAsIDAsIDAsIC43KSA0NSUsXG4gIHJnYmEoMCwgMCwgMCwgLjY1KTUwJSxcbiAgcmdiYSgwLCAwLCAwLCAuNikgNTUlLFxuICByZ2JhKDAsIDAsIDAsIC41KSA2NSUsXG4gIHJnYmEoMCwgMCwgMCwgLjQpIDc1JSxcbiAgcmdiYSgwLCAwLCAwLCAuMykgODUlLFxuICByZ2JhKDAsIDAsIDAsIDApIDEwMCUpO1xuXG4kbWotYm90dG9tLXRvLXRvcC1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KDBkZWcsXG4gIHJnYmEoMCwgMCwgMCwgMSkgMCUsXG4gIHJnYmEoMCwgMCwgMCwgLjkpIDI1JSxcbiAgcmdiYSgwLCAwLCAwLCAuODUpMzAlLFxuICByZ2JhKDAsIDAsIDAsIC44KSAzNSUsXG4gIHJnYmEoMCwgMCwgMCwgLjc1KTQwJSxcbiAgcmdiYSgwLCAwLCAwLCAuNykgNDUlLFxuICByZ2JhKDAsIDAsIDAsIC42NSk1MCUsXG4gIHJnYmEoMCwgMCwgMCwgLjYpIDU1JSxcbiAgcmdiYSgwLCAwLCAwLCAuNSkgNjUlLFxuICByZ2JhKDAsIDAsIDAsIC40KSA3NSUsXG4gIHJnYmEoMCwgMCwgMCwgLjMpIDg1JSxcbiAgcmdiYSgwLCAwLCAwLCAwKSAxMDAlKTtcblxuLy8vIEJyZWFrcG9pbnQgbWFwXG4kYnJlYWtwb2ludC1tYXAgOiAoXG4gICdzbSc6IDU3NnB4LFxuICAnbWQnOiA3NjhweCxcbiAgJ2xnJzogOTkycHgsXG4gICd4bGcnOiAxMjAwcHhcbik7XG5cbiIsIi8vLyBUaGlzIGZpbGUgaXMgZm9yIG1peGlucywgYWxsIG1peGluc1xuLy8vIHRoYXQgeW91IG5lZWQgZm9yIHNpdGUgc2hvdWxkIGJlIHBsYWNlZCBoZXJlXG5cbi8vLyBBZGQgYWxsIGZvbnRzIHlvdSB3YW50XG4vLy9cbi8vLyBAYXV0aG9yIFN0ZXZhbiBTdG9qYW5vdmljXG4vLy9cbi8vLyBAcGFyYW0gJGZvbnQtbmFtZXMge3N0cmluZy9zdHJpbmcnc30gcHJvdmlkZSB0aGUgbGlzdCBvZiBmb250IG5hbWVzL29yIHNpbmdsZSBmb250IG5hbWVcbi8vLyBpbiBvcmRlciB0byBlbWJlZCBmb250IHdpdGggbmFtZSBwYXNzZWQgYXMgYXJndW1lbnRzIHRvIHRoaXMgbWl4aW5cblxuQG1peGluIGFkZC1mb250cygkZm9udC1uYW1lcy4uLikge1xuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIGxlbmd0aCgkZm9udC1uYW1lcykge1xuICAgIEBmb250LWZhY2Uge1xuICAgICAgZm9udC1mYW1pbHk6IG50aCgkZm9udC1uYW1lcywgJGkpO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIHNyYzogdXJsKCcjeyRmb250LXVybH0je250aCgkZm9udC1uYW1lcywgJGkpfScgKyAnLnR0ZicpO1xuICAgIH1cblxuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vLyBNaXhpbiB0byByZWR1Y2UgcmVwZXRpdGlvbiBvZiBzYW1lIGNvZGUgZm9yIG1lZGlhIHF1ZXJpZXNcbi8vLyBAYXV0aG9yIFN0ZXZhbiBTdG9qYW5vdmljXG4vLy8gQHBhcmFtcyB7U3RyaW5nfSAka2V5IHF1b3RlZCBvciB1bnF1b3RlZCB2YWx1ZSwgaWYgeW91IG5lZWQgc29tZSBjdXN0b20gYnJlYWtwb2ludCBub3QgZGVmaW5lZCBpbiAkbWFwXG4vLy8gICAgICAgICB5b3Ugc2hvdWxkIGlucHV0IHRoZSBudW1iZXIgd2l0aCB1bml0IGJ1dCB1bnF1b3RlZCBpbiBvcmRlciB0byBhY2hpdmUgZGVzaXJlZCBjb2RlXG5AbWl4aW4gcmVzcG9uc2l2ZSgka2V5LCAkbWFwOiAkYnJlYWtwb2ludC1tYXApIHtcbiAgXG4gIEBpZiBtYXAtaGFzLWtleSgkbWFwLCAka2V5KSB7XG4gICAgJGtleS12YWx1ZTogbWFwLWdldCgkbWFwLCAka2V5KTtcbiAgICBcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRrZXktdmFsdWUpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxuICBAZWxzZSBpZiAoaXMtbnVtYmVyKCRrZXkpKSB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAka2V5KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbiAgQGVsc2Uge1xuICAgIEB3YXJuIFwiRWl0aGVyIHlvdSBkaWRuJ3QgcHJvdmlkZSB2YWxpZCBrZXkgZnJvbSBicmVhayBwb2ludCBtYXBcIiArXG4gICAgICAgICAgXCJvciB5b3UgZGlkbid0IHByb3ZpZGUgYSB2YWxpZCB0eXBlIG9mIGN1c3RvbSBicmVhay1wb2ludFwiO1xuICB9XG59XG5cbi8vLyBNaXhpbiB0byByZWR1Y2UgcmVwZXRpdGlvbiBvZiBzYW1lIGNvZGUgZm9yIG1lZGlhIHF1ZXJpZXNcbi8vLyBAYXV0aG9yIFN0ZXZhbiBTdG9qYW5vdmljXG5AbWl4aW4gcmVzcG9uc2l2ZS1iZXR3ZWVuKCRtaW4sICRtYXgpIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/containers/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/containers/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.state = 'hide';
        this.newsConfig = [{
                img1Url: 'assets/img/news/klub_sto_01.png',
                img2Url: 'assets/img/news/klub_sto_02.png',
                title: 'Klub sto u industrijskom stilu',
                content: 'Dimenzije većeg stola: visina 45cm, prečnik 90cm \n' +
                    'Dimenzije manjeg stola: visina 35cm, prečnik 70cm\n' +
                    'Debljina ploče: 3.6cm, debljina profila postolja 1.5cm\n' +
                    '\n' +
                    'Materijal: orahov furnir na medijapanu i metal \n' +
                    'Cena oba stola: 30.000,00 dinara\n' +
                    '   *Sa pločom od farbanog medijapana cena je 26.000,00, a \n' +
                    '    sa pločom od iverice cena je 18.000,00 dinara,\n' +
                    '    u boji i dezenu koji Vi odaberete.\n' +
                    'Rade se po narudžbini, rok isporuke je 2 nedelje.\n',
                navigation: '/kitchens'
            }];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.videPlayer.nativeElement.muted = 'muted';
    };
    HomeComponent.prototype.checkScroll = function () {
        var viewHeight = window.innerHeight;
        var scrollPosition = window.pageYOffset;
        var whiteContainerPosition = this.whiteContainer.nativeElement.offsetTop;
        var whiteContainerHeight = this.whiteContainer.nativeElement.clientHeight;
        var heightSum = viewHeight + scrollPosition;
        if (heightSum > whiteContainerPosition && scrollPosition < (whiteContainerPosition + whiteContainerHeight)) {
            this.state = 'show';
        }
        else {
            this.state = 'hide';
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('whiteContainer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HomeComponent.prototype, "whiteContainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('videPlayer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HomeComponent.prototype, "videPlayer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HomeComponent.prototype, "checkScroll", null);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/containers/home/home.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('scrollAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('700ms ease-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('700ms ease-in'))
                ])
            ],
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/containers/home/home.component.scss")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/containers/kitchens/kitchens.component.html":
/*!*************************************************************!*\
  !*** ./src/app/containers/kitchens/kitchens.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [data]=\"headerConfig\"></app-header>\n\n<section class=\"mj-section\">\n  <div class=\"mj-section-holder\"\n       id=\"white_cont\">\n    <div class=\"container\">\n      <app-gallery [data]=\"galleryConfig\"></app-gallery>\n    </div>\n  </div>\n</section>\n\n"

/***/ }),

/***/ "./src/app/containers/kitchens/kitchens.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/containers/kitchens/kitchens.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMva2l0Y2hlbnMva2l0Y2hlbnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/containers/kitchens/kitchens.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/containers/kitchens/kitchens.component.ts ***!
  \***********************************************************/
/*! exports provided: KitchensComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KitchensComponent", function() { return KitchensComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var KitchensComponent = /** @class */ (function () {
    function KitchensComponent() {
        this.headerConfig = {
            backgroungImgUrl: 'assets/img/kitchens/kitchen_01_opt.png',
            title: 'Kitchens bla bla..',
            subTitle: 'subtitle bla bla bla...',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum ut nulla id dictum.'
        };
        this.galleryConfig = [{
                small: 'assets/img/kitchens/kitchen_01_opt.png',
                medium: 'assets/img/kitchens/kitchen_01_opt.png',
                big: 'assets/img/kitchens/kitchen_01_opt.png'
            }, {
                small: 'assets/img/kitchens/kitchen_02_opt.png',
                medium: 'assets/img/kitchens/kitchen_02_opt.png',
                big: 'assets/img/kitchens/kitchen_02_opt.png'
            }, {
                small: 'assets/img/kitchens/kitchen_03_opt.png',
                medium: 'assets/img/kitchens/kitchen_03_opt.png',
                big: 'assets/img/kitchens/kitchen_03_opt.png'
            }, {
                small: 'assets/img/kitchens/kitchen_04_opt.png',
                medium: 'assets/img/kitchens/kitchen_04_opt.png',
                big: 'assets/img/kitchens/kitchen_04_opt.png'
            }, {
                small: 'assets/img/kitchens/kitchen_05_opt.png',
                medium: 'assets/img/kitchens/kitchen_05_opt.png',
                big: 'assets/img/kitchens/kitchen_05_opt.png'
            }, {
                small: 'assets/img/kitchens/kitchen_06_opt.png',
                medium: 'assets/img/kitchens/kitchen_06_opt.png',
                big: 'assets/img/kitchens/kitchen_06_opt.png'
            }, {
                small: 'assets/img/kitchens/kitchen_07_opt.png',
                medium: 'assets/img/kitchens/kitchen_07_opt.png',
                big: 'assets/img/kitchens/kitchen_07_opt.png'
            }, {
                small: 'assets/img/kitchens/kitchen_08_opt.png',
                medium: 'assets/img/kitchens/kitchen_08_opt.png',
                big: 'assets/img/kitchens/kitchen_08_opt.png'
            }, {
                small: 'assets/img/kitchens/kitchen_09_opt.png',
                medium: 'assets/img/kitchens/kitchen_09_opt.png',
                big: 'assets/img/kitchens/kitchen_09_opt.png'
            }, {
                small: 'assets/img/kitchens/kitchen_10_opt.png',
                medium: 'assets/img/kitchens/kitchen_10_opt.png',
                big: 'assets/img/kitchens/kitchen_10_opt.png'
            }, {
                small: 'assets/img/kitchens/kitchen_11_opt.png',
                medium: 'assets/img/kitchens/kitchen_11_opt.png',
                big: 'assets/img/kitchens/kitchen_11_opt.png'
            }, {
                small: 'assets/img/kitchens/kitchen_12_opt.png',
                medium: 'assets/img/kitchens/kitchen_12_opt.png',
                big: 'assets/img/kitchens/kitchen_12_opt.png'
            }, {
                small: 'assets/img/kitchens/kitchen_13_opt.png',
                medium: 'assets/img/kitchens/kitchen_13_opt.png',
                big: 'assets/img/kitchens/kitchen_13_opt.png'
            }, {
                small: 'assets/img/kitchens/kitchen_14_opt.png',
                medium: 'assets/img/kitchens/kitchen_14_opt.png',
                big: 'assets/img/kitchens/kitchen_14_opt.png'
            }, {
                small: 'assets/img/kitchens/kitchen_15_opt.png',
                medium: 'assets/img/kitchens/kitchen_15_opt.png',
                big: 'assets/img/kitchens/kitchen_15_opt.png'
            }, {
                small: 'assets/img/kitchens/kitchen_16_opt.png',
                medium: 'assets/img/kitchens/kitchen_16_opt.png',
                big: 'assets/img/kitchens/kitchen_16_opt.png'
            }, {
                small: 'assets/img/kitchens/kitchen_17_opt.png',
                medium: 'assets/img/kitchens/kitchen_17_opt.png',
                big: 'assets/img/kitchens/kitchen_17_opt.png'
            }, {
                small: 'assets/img/kitchens/kitchen_18_opt.png',
                medium: 'assets/img/kitchens/kitchen_18_opt.png',
                big: 'assets/img/kitchens/kitchen_18_opt.png'
            }, {
                small: 'assets/img/kitchens/kitchen_19_opt.png',
                medium: 'assets/img/kitchens/kitchen_19_opt.png',
                big: 'assets/img/kitchens/kitchen_19_opt.png'
            }, {
                small: 'assets/img/kitchens/kitchen_20_opt.png',
                medium: 'assets/img/kitchens/kitchen_20_opt.png',
                big: 'assets/img/kitchens/kitchen_20_opt.png'
            }, {
                small: 'assets/img/kitchens/kitchen_21_opt.png',
                medium: 'assets/img/kitchens/kitchen_21_opt.png',
                big: 'assets/img/kitchens/kitchen_21_opt.png'
            }];
    }
    KitchensComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-kitchens',
            template: __webpack_require__(/*! ./kitchens.component.html */ "./src/app/containers/kitchens/kitchens.component.html"),
            styles: [__webpack_require__(/*! ./kitchens.component.scss */ "./src/app/containers/kitchens/kitchens.component.scss")]
        })
    ], KitchensComponent);
    return KitchensComponent;
}());



/***/ }),

/***/ "./src/app/containers/livingrooms/livingrooms.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/containers/livingrooms/livingrooms.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [data]=\"headerConfig\"></app-header>\n\n<section class=\"mj-section\">\n  <div class=\"mj-section-holder\"\n       id=\"white_cont\">\n    <div class=\"container\">\n      <app-gallery [data]=\"galleryConfig\"></app-gallery>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/containers/livingrooms/livingrooms.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/containers/livingrooms/livingrooms.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvbGl2aW5ncm9vbXMvbGl2aW5ncm9vbXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/containers/livingrooms/livingrooms.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/containers/livingrooms/livingrooms.component.ts ***!
  \*****************************************************************/
/*! exports provided: LivingroomsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivingroomsComponent", function() { return LivingroomsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LivingroomsComponent = /** @class */ (function () {
    function LivingroomsComponent() {
        this.headerConfig = {
            backgroungImgUrl: 'assets/img/livingrooms/livingroom_01_opt.png',
            title: 'Living rooms bla bla..',
            subTitle: 'subtitle bla bla bla...',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum ut nulla id dictum.'
        };
        this.galleryConfig = [{
                small: 'assets/img/livingrooms/livingroom_01_opt.png',
                medium: 'assets/img/livingrooms/livingroom_01_opt.png',
                big: 'assets/img/livingrooms/livingroom_01_opt.png'
            }, {
                small: 'assets/img/livingrooms/livingroom_02_opt.png',
                medium: 'assets/img/livingrooms/livingroom_02_opt.png',
                big: 'assets/img/livingrooms/livingroom_02_opt.png'
            },
            //   {
            //   small: 'assets/img/livingrooms/livingroom_03_opt.png',
            //   medium: 'assets/img/livingrooms/livingroom_03_opt.png',
            //   big: 'assets/img/livingrooms/livingroom_03_opt.png'
            // },
            {
                small: 'assets/img/livingrooms/livingroom_04_opt.png',
                medium: 'assets/img/livingrooms/livingroom_04_opt.png',
                big: 'assets/img/livingrooms/livingroom_04_opt.png'
            }, {
                small: 'assets/img/livingrooms/livingroom_05_opt.png',
                medium: 'assets/img/livingrooms/livingroom_05_opt.png',
                big: 'assets/img/livingrooms/livingroom_05_opt.png'
            }, {
                small: 'assets/img/livingrooms/livingroom_06_opt.png',
                medium: 'assets/img/livingrooms/livingroom_06_opt.png',
                big: 'assets/img/livingrooms/livingroom_06_opt.png'
            }, {
                small: 'assets/img/livingrooms/livingroom_07_opt.png',
                medium: 'assets/img/livingrooms/livingroom_07_opt.png',
                big: 'assets/img/livingrooms/livingroom_07_opt.png'
            }
            // , {
            //   small: 'assets/img/livingrooms/livingroom_08_opt.png',
            //   medium: 'assets/img/livingrooms/livingroom_08_opt.png',
            //   big: 'assets/img/livingrooms/livingroom_08_opt.png'
            // }
        ];
    }
    LivingroomsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-livingrooms',
            template: __webpack_require__(/*! ./livingrooms.component.html */ "./src/app/containers/livingrooms/livingrooms.component.html"),
            styles: [__webpack_require__(/*! ./livingrooms.component.scss */ "./src/app/containers/livingrooms/livingrooms.component.scss")]
        })
    ], LivingroomsComponent);
    return LivingroomsComponent;
}());



/***/ }),

/***/ "./src/app/containers/office-furniture/office-furniture.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/containers/office-furniture/office-furniture.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [data]=\"headerConfig\"></app-header>\n\n<section class=\"mj-section\">\n  <div class=\"mj-section-holder\"\n       id=\"white_cont\">\n    <div class=\"container\">\n      <app-gallery [data]=\"galleryConfig\"></app-gallery>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/containers/office-furniture/office-furniture.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/containers/office-furniture/office-furniture.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvb2ZmaWNlLWZ1cm5pdHVyZS9vZmZpY2UtZnVybml0dXJlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/containers/office-furniture/office-furniture.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/containers/office-furniture/office-furniture.component.ts ***!
  \***************************************************************************/
/*! exports provided: OfficeFurnitureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeFurnitureComponent", function() { return OfficeFurnitureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OfficeFurnitureComponent = /** @class */ (function () {
    function OfficeFurnitureComponent() {
        this.headerConfig = {
            backgroungImgUrl: 'assets/img/office-furniture/livingroom_03_opt.png',
            title: 'Living rooms bla bla..',
            subTitle: 'subtitle bla bla bla...',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum ut nulla id dictum.'
        };
        this.galleryConfig = [{
                small: 'assets/img/office-furniture/livingroom_03_opt.png',
                medium: 'assets/img/office-furniture/livingroom_03_opt.png',
                big: 'assets/img/office-furniture/livingroom_03_opt.png'
            }, {
                small: 'assets/img/office-furniture/livingroom_08_opt.png',
                medium: 'assets/img/office-furniture/livingroom_08_opt.png',
                big: 'assets/img/office-furniture/livingroom_08_opt.png'
            }];
    }
    OfficeFurnitureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-office-furniture',
            template: __webpack_require__(/*! ./office-furniture.component.html */ "./src/app/containers/office-furniture/office-furniture.component.html"),
            styles: [__webpack_require__(/*! ./office-furniture.component.scss */ "./src/app/containers/office-furniture/office-furniture.component.scss")]
        })
    ], OfficeFurnitureComponent);
    return OfficeFurnitureComponent;
}());



/***/ }),

/***/ "./src/app/containers/projecting/projecting.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/containers/projecting/projecting.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [data]=\"headerConfig\"></app-header>\n\n<section class=\"mj-section\">\n  <div class=\"mj-section-holder\"\n       id=\"white_cont\">\n    <div class=\"container\">\n      <div\n        class=\"mj-section-div\">\n        <h3 class=\"mj-section-title\">Projektovanje</h3>\n        <p>   Ukoliko želite da promenite vaš postojeći životni prostor ili da kompletno uredite enterijer novog stana,\n          kuće ili poslovnog prostora, tim arhitekata i dizajnera sa višegodišnjim iskustvom u projektovanju,\n          dizajniranju i uređenju enterijera mogu Vam pomoći u tome. Na taj način se lakše organizuje proces izvođenja\n          radova i skraćuje proces realizacije.</p>\n        <br>\n        <br>\n        <p>Oni mogu osmisliti dizajn privatnih i javnih prostora na osnovu tačnih mera, fotografija prostora, budžeta,\n          izbora stila i vaših želja, potreba i uputstava. Mogu Vam dati savete za najfunkcionalnije rešenje a potom Vam\n          izraditi 3D model i renderovane fotografije kako biste bolje sagledali celokupni izgled nameštaja u datom\n          prostoru.</p>\n        <br>\n        <br>\n        <p>U radu koristimo najsavremenije softvere AutoCad, 3ds Max, V-ray, SketchUp i Photoshop.\n          Cena zavisi od kvadrature i složenosti celokupnog projekta.\n        </p>\n        <br>\n        <br>\n        <p>Na sledećim fotografijama možete videti neke od realizovanih projekata.</p>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/containers/projecting/projecting.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/containers/projecting/projecting.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvcHJvamVjdGluZy9wcm9qZWN0aW5nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/containers/projecting/projecting.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/containers/projecting/projecting.component.ts ***!
  \***************************************************************/
/*! exports provided: ProjectingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectingComponent", function() { return ProjectingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectingComponent = /** @class */ (function () {
    function ProjectingComponent() {
        this.headerConfig = {
            backgroungImgUrl: 'assets/img/projektovanje_opt.png',
            title: 'Projektovanje',
            subTitle: 'subtitle bla bla bla...',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum ut nulla id dictum.'
        };
    }
    ProjectingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projecting',
            template: __webpack_require__(/*! ./projecting.component.html */ "./src/app/containers/projecting/projecting.component.html"),
            styles: [__webpack_require__(/*! ./projecting.component.scss */ "./src/app/containers/projecting/projecting.component.scss")]
        })
    ], ProjectingComponent);
    return ProjectingComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/stevannn/workspace/majorelle-project/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map