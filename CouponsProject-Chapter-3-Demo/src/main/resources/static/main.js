(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+DhY":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "2MiI");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ "LmEr");



class AboutComponent {
    constructor() { }
    ngOnInit() { }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 12, vars: 0, consts: [[1, "container"], [1, "header"], [1, "about-us"], ["beha", "", "vior", "", "direction", ""]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " About US ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "marquee", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " save your money with our offers, We brings everything you love about the pioneering money-saving platform to the world of promo codes. Make them yours, and make something wonderful.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  display: grid;\r\n  grid-template-rows: 12% 80% 8%;\r\n  grid-template-columns: 100%;\r\n  font-family: sans-serif;\r\n  color: #333;\r\n  line-height: 1.5;\r\n  height: 100vh;\r\n  justify-content: center;\r\n  background-image: url(\"/assets/aboutBack.png\");\r\n  overflow: auto;\r\n  background-size: cover;\r\n  overflow-x: hidden;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.header[_ngcontent-%COMP%] {\r\n  font-size: 3rem;\r\n  height: 20%;\r\n  box-sizing: content-box;\r\n  text-align: center;\r\n  padding-bottom: 30px;\r\n  font-size: 4rem;\r\n  transform: translateY(2px);\r\n  font-family: \"Poppins\", sans-serif;\r\n  background-color: rgb(221, 221, 221);\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.details[_ngcontent-%COMP%] {\r\n  font-size: medium;\r\n}\r\n\r\n.about-us[_ngcontent-%COMP%] {\r\n  transform: translateX(30%);\r\n  font-family: \"Poppins\", sans-serif;\r\n  color: rgb(221, 221, 221);\r\n  font-size: medium;\r\n  font-size: 2rem;\r\n  font-weight: 100;\r\n  width: 60%;\r\n  padding: 1.25rem 1.5rem;\r\n  margin: 0;\r\n  border: solid #5d4954 4px;\r\n  \r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.7),\r\n    rgba(255, 255, 255, 0.3)\r\n  );\r\n  color: #5d4954;\r\n  border-radius: 10rem;\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osU0FBUztFQUNULHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLDhDQUE4QztFQUM5QyxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixrQ0FBa0M7RUFDbEMsb0NBQW9DO0VBQ3BDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQixrQ0FBa0M7RUFDbEMseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsU0FBUztFQUNULHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUI7Ozs7R0FJQztFQUNELGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMiUgODAlIDglO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzMzMztcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9hYm91dEJhY2sucG5nXCIpO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG5kaXYge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaGVhZGVyIHtcclxuICBmb250LXNpemU6IDNyZW07XHJcbiAgaGVpZ2h0OiAyMCU7XHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogNHJlbTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5kZXRhaWxzIHtcclxuICBmb250LXNpemU6IG1lZGl1bTtcclxufVxyXG4uYWJvdXQtdXMge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMCUpO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgcGFkZGluZzogMS4yNXJlbSAxLjVyZW07XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJvcmRlcjogc29saWQgIzVkNDk1NCA0cHg7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgKi9cclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byByaWdodCBib3R0b20sXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyksXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMylcclxuICApO1xyXG4gIGNvbG9yOiAjNWQ0OTU0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\VS_Angular_Workspace\Coupons-Website-Final\src\main.ts */"zUnb");


/***/ }),

/***/ "0zL+":
/*!**********************************************!*\
  !*** ./src/app/services/customer.service.ts ***!
  \**********************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class CustomerService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.BASE_URL = '';
    }
    purchaseCoupon(couponId) {
        //===========================================================
        let theHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('token', localStorage.getItem('token'));
        let options = { headers: theHeaders, responseType: 'text' };
        //===========================================================
        return this.httpClient.post(`${this.BASE_URL}/api/customer/purchase?couponId=` + couponId, null, options);
    }
    getAllCoupons() {
        //===========================================================
        let theHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('token', localStorage.getItem('token'));
        let options = { headers: theHeaders };
        //===========================================================
        return this.httpClient.get(`${this.BASE_URL}/api/customer/get/all`, options);
    }
    getCouponsByCategory(category) {
        //===========================================================
        let theHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('token', localStorage.getItem('token'));
        let options = { headers: theHeaders };
        //===========================================================
        return this.httpClient.get(`${this.BASE_URL}/api/customer/get/byCategory?category=` + category, options);
    }
    getCouponsByMaxPrice(maxPrice) {
        //===========================================================
        let theHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('token', localStorage.getItem('token'));
        let options = { headers: theHeaders };
        //===========================================================
        return this.httpClient.get(`${this.BASE_URL}/api/customer/get/byMaxPrice?maxPrice=` + maxPrice, options);
    }
    getDetails() {
        //===========================================================
        let theHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('token', localStorage.getItem('token'));
        let options = { headers: theHeaders };
        //===========================================================
        return this.httpClient.get(`${this.BASE_URL}/api/customer/getDetails`, options);
    }
    getWebsiteCoupons() {
        //===========================================================
        let theHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('token', localStorage.getItem('token'));
        let options = { headers: theHeaders };
        //===========================================================
        return this.httpClient.get(`${this.BASE_URL}/api/customer/get/websiteCoupons`, options);
    }
}
CustomerService.ɵfac = function CustomerService_Factory(t) { return new (t || CustomerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
CustomerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CustomerService, factory: CustomerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function HeaderComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function HeaderComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_6_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.onLinksLiClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_8_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.onLinksLiClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function HeaderComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_13_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.userSpaceNavigate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\uD83D\uDFE2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function HeaderComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_20_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.userSpaceNavigate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " My Space");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function HeaderComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_29_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.navSlide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_31_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.navSlide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(router) {
        this.router = router;
        //======================================================================
        //======================================================================
        this.isLoggedIn = localStorage.getItem('is_login');
        this.theClientType = localStorage.getItem('client_type');
    }
    ngOnInit() {
        this.navClicked = false;
        console.log(localStorage.getItem('is_login'));
    }
    userSpaceNavigate() {
        let type = localStorage.getItem('client_type');
        console.log(type);
        switch (type) {
            case 'Administrator':
                this.router.navigate(['admin/admin-layout']);
                break;
            case 'Company':
                this.router.navigate(['company/company-menu']);
                break;
            case 'Customer':
                this.router.navigate(['customer/customer-menu']);
                break;
            default:
                this.router.navigate(['unautorized']);
                break;
        }
    }
    onLinksLiClick() {
        if (this.navClicked) {
            this.navSlide();
        }
    }
    navSlide() {
        var _a, _b;
        (_a = document.querySelector('.nav-links')) === null || _a === void 0 ? void 0 : _a.classList.toggle('nav-active');
        (_b = document.querySelector('.burger')) === null || _b === void 0 ? void 0 : _b.classList.toggle('toggle');
        if (this.navClicked) {
            this.navClicked = false;
        }
        else {
            this.navClicked = true;
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 37, vars: 11, consts: [["routerLink", "/", "routerLinkActive", "active-link", 1, "links-a-home", 3, "click"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["clientIsLoggedIn", ""], ["clientIsNOTlogin", ""], ["clientNULL", ""], ["ClientExists", ""], [1, "nav-links"], ["routerLink", "/", "routerLinkActive", "active-link", 3, "click"], [4, "ngIf", "ngIfThen"], ["ClientExistsAside", ""], ["routerLink", "/about", "routerLinkActive", "active-link", 3, "click"], ["href", "https://www.google.com", "target", "_blank", 3, "click"], ["loginTemplate", ""], ["logoutTemplate", ""], [1, "burger", 3, "click"], [1, "line1"], [1, "line2"], [1, "line3"], ["routerLink", "/logout", "routerLinkActive", "active-link", 1, "links-a", 3, "click"], ["src", "assets/userLoginImage.jpg", "alt", "", 1, "login-img"], ["routerLink", "/login", "routerLinkActive", "active-link", 1, "links-a", 3, "click"], ["href", "https://www.google.com", "target", "_blank"], ["href", "https://www.google.com", "target", "_blank", "src", "assets/magnifying-glass.png", "alt", "Google", 1, "search-link"], [1, "links-a", 3, "click"], ["routerLink", "/login", "routerLinkActive", "active-link", 3, "click"], ["routerLink", "/logout", "routerLinkActive", "active-link", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_3_listener() { return ctx.onLinksLiClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_div_5_Template, 1, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_ng_template_6_Template, 3, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeaderComponent_ng_template_8_Template, 4, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeaderComponent_div_10_Template, 1, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HeaderComponent_ng_template_11_Template, 3, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HeaderComponent_ng_template_13_Template, 5, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_17_listener() { return ctx.navSlide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HeaderComponent_div_19_Template, 1, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HeaderComponent_ng_template_20_Template, 3, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_23_listener() { return ctx.navSlide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_26_listener() { return ctx.navSlide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\uD83D\uDD0D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, HeaderComponent_div_28_Template, 1, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, HeaderComponent_ng_template_29_Template, 3, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, HeaderComponent_ng_template_31_Template, 3, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_33_listener() { return ctx.navSlide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn)("ngIfThen", _r1)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn)("ngIfThen", _r8)("ngIfElse", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn)("ngIfThen", _r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn)("ngIfThen", _r16)("ngIfElse", _r14);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["*[_ngcontent-%COMP%] {\r\n  margin: 0px;\r\n  padding: 0px;\r\n  box-sizing: border-box;\r\n}\r\nsection[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  position: relative;\r\n  display: grid;\r\n  font-size: medium;\r\n  padding: 0px;\r\n}\r\nnav[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  min-height: 8vh;\r\n  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n.nav-links[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  width: 60%;\r\n}\r\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: rgb(7, 7, 7);\r\n  text-decoration: none;\r\n  letter-spacing: 1px;\r\n  font-weight: bolder;\r\n  font-size: 26px;\r\n\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  display: none;\r\n}\r\n.nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  border-bottom: black solid 1.5px;\r\n  padding-top: 5vh;\r\n  justify-content: center;\r\n  text-align: center;\r\n  height: 100%;\r\n  width: 100%;\r\n  list-style: none;\r\n}\r\n.nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n  background-color: #f9ff60;\r\n  background-image: linear-gradient(315deg, #f9ff60 0%, #ffef77 74%);\r\n}\r\n.burger[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-block;\r\n  cursor: pointer;\r\n  left: 60px;\r\n  justify-content: space-around;\r\n}\r\n.burger[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  width: 45px;\r\n  height: 3px;\r\n  background-color: rgb(221, 221, 221);\r\n  margin: 5px;\r\n  position: relative;\r\n  right: 120%;\r\n  transition: all 0.5s ease;\r\n}\r\n@media screen and (max-width: 768px) {\r\n  .nav-links[_ngcontent-%COMP%] {\r\n    width: 65%;\r\n    \r\n  }\r\n}\r\n@media screen and (max-width: 2048px) {\r\n  body[_ngcontent-%COMP%] {\r\n    overflow-x: hidden;\r\n  }\r\n  .nav-links[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 0px;\r\n    height: 80vh;\r\n    top: 12vh;\r\n    background-color: #485461;\r\n    background-image: linear-gradient(to top left, #28b487, #7dd56f);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 30%;\r\n    transform: translateX(100%);\r\n    transition: 0.4s ease-in;\r\n    z-index: 20;\r\n  }\r\n  .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    \r\n    \r\n    opacity: 1;\r\n  }\r\n  .nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    \r\n    \r\n\r\n    display: contents;\r\n  }\r\n  .burger[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n}\r\n.nav-active[_ngcontent-%COMP%] {\r\n  transform: translateX(0%);\r\n  transition: 0.4s ease-in;\r\n}\r\n@keyframes navLinkFade {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateX(50px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateX(0px);\r\n  }\r\n}\r\n.toggle[_ngcontent-%COMP%]   .line1[_ngcontent-%COMP%] {\r\n  transform: rotate(-45deg) translate(-5px, 6px);\r\n}\r\n.toggle[_ngcontent-%COMP%]   .line2[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n}\r\n.toggle[_ngcontent-%COMP%]   .line3[_ngcontent-%COMP%] {\r\n  transform: rotate(45deg) translate(-5px, -6px);\r\n}\r\n.search-link[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  position: relative;\r\n  width: 25px;\r\n  height: 25px;\r\n  right: 0%;\r\n  top: 3px;\r\n}\r\n.login-img[_ngcontent-%COMP%] {\r\n  display: flexbox;\r\n  position: relative;\r\n  width: 28px;\r\n  height: 27px;\r\n  right: 3px;\r\n  transform: translate(-10%, 20%);\r\n  border-radius: 1.5px;\r\n}\r\n.links-a-home[_ngcontent-%COMP%] {\r\n  color: rgb(221, 221, 221);\r\n  text-transform: uppercase;\r\n  text-decoration: none;\r\n  font-size: 25px;\r\n  letter-spacing: 3px;\r\n  margin: 0%;\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-weight: normal;\r\n}\r\n.links-a[_ngcontent-%COMP%] {\r\n  color: rgb(221, 221, 221);\r\n  text-decoration: none;\r\n  font-size: 25px;\r\n  letter-spacing: 2px;\r\n  margin: 3px;\r\n  font-family: \"Poppins\", sans-serif;\r\n  cursor: pointer;\r\n  font-weight: lighter;\r\n}\r\n.nav-links-hidden[_ngcontent-%COMP%] {\r\n  transform: translateX(100%);\r\n}\r\n.active-link[_ngcontent-%COMP%] {\r\n  font-weight: bolder;\r\n  font-size: 29px;\r\n}\r\na[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrRUFBa0U7RUFDbEUsa0NBQWtDO0FBQ3BDO0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGVBQWU7O0VBRWYscURBQXFEO0VBQ3JELGFBQWE7QUFDZjtBQUNBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsa0VBQWtFO0FBQ3BFO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixVQUFVO0VBQ1YsNkJBQTZCO0FBQy9CO0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLG9DQUFvQztFQUNwQyxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLGtCQUFrQjtFQUNwQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osU0FBUztJQUNULHlCQUF5QjtJQUN6QixnRUFBZ0U7SUFDaEUsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsV0FBVztFQUNiO0VBQ0E7SUFDRSxtREFBbUQ7SUFDbkQsbURBQW1EO0lBQ25ELFVBQVU7RUFDWjtFQUNBO0lBQ0Usb0NBQW9DO0lBQ3BDLG9DQUFvQzs7SUFFcEMsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0FBQ0Y7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix3QkFBd0I7QUFDMUI7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsVUFBVTtJQUNWLDBCQUEwQjtFQUM1QjtBQUNGO0FBQ0E7RUFDRSw4Q0FBOEM7QUFDaEQ7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsOENBQThDO0FBQ2hEO0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztFQUNULFFBQVE7QUFDVjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFDViwrQkFBK0I7RUFDL0Isb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixrQ0FBa0M7RUFDbEMsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuc2VjdGlvbiB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxubmF2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogOHZoO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICMwMDAwMDAgMCUsICM0MTQxNDEgNzQlKTtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5uYXYtbGlua3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgd2lkdGg6IDYwJTtcclxufVxyXG4ubmF2LWxpbmtzIGEge1xyXG4gIGNvbG9yOiByZ2IoNywgNywgNyk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBmb250LXNpemU6IDI2cHg7XHJcblxyXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ubmF2LWxpbmtzIGxpIHtcclxuICBib3JkZXItYm90dG9tOiBibGFjayBzb2xpZCAxLjVweDtcclxuICBwYWRkaW5nLXRvcDogNXZoO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4ubmF2LWxpbmtzIGxpOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmZjYwO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNmOWZmNjAgMCUsICNmZmVmNzcgNzQlKTtcclxufVxyXG4uYnVyZ2VyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBsZWZ0OiA2MHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4uYnVyZ2VyIGRpdiB7XHJcbiAgd2lkdGg6IDQ1cHg7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICByaWdodDogMTIwJTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLm5hdi1saW5rcyB7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyMDQ4cHgpIHtcclxuICBib2R5IHtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICB9XHJcbiAgLm5hdi1saW5rcyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgdG9wOiAxMnZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ4NTQ2MTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgbGVmdCwgIzI4YjQ4NywgIzdkZDU2Zik7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlLWluO1xyXG4gICAgei1pbmRleDogMjA7XHJcbiAgfVxyXG4gIC5uYXYtbGlua3MgbGkge1xyXG4gICAgLyogdHVybiB0byAwID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4gICAgLyogdHVybiB0byAwID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgLm5hdi1saW5rcyBhIHtcclxuICAgIC8qIG9wdGlvbmFsPT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuICAgIC8qIG9wdGlvbmFsPT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbiAgICBkaXNwbGF5OiBjb250ZW50cztcclxuICB9XHJcbiAgLmJ1cmdlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbi5uYXYtYWN0aXZlIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbjtcclxufVxyXG5cclxuQGtleWZyYW1lcyBuYXZMaW5rRmFkZSB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwcHgpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XHJcbiAgfVxyXG59XHJcbi50b2dnbGUgLmxpbmUxIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtNXB4LCA2cHgpO1xyXG59XHJcbi50b2dnbGUgLmxpbmUyIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbi50b2dnbGUgLmxpbmUzIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC01cHgsIC02cHgpO1xyXG59XHJcblxyXG4uc2VhcmNoLWxpbmsge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICByaWdodDogMCU7XHJcbiAgdG9wOiAzcHg7XHJcbn1cclxuLmxvZ2luLWltZyB7XHJcbiAgZGlzcGxheTogZmxleGJveDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDI4cHg7XHJcbiAgaGVpZ2h0OiAyN3B4O1xyXG4gIHJpZ2h0OiAzcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwJSwgMjAlKTtcclxuICBib3JkZXItcmFkaXVzOiAxLjVweDtcclxufVxyXG5cclxuLmxpbmtzLWEtaG9tZSB7XHJcbiAgY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICBtYXJnaW46IDAlO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcbi5saW5rcy1hIHtcclxuICBjb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICBtYXJnaW46IDNweDtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG59XHJcblxyXG4ubmF2LWxpbmtzLWhpZGRlbiB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG59XHJcblxyXG4uYWN0aXZlLWxpbmsge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgZm9udC1zaXplOiAyOXB4O1xyXG59XHJcblxyXG5hIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "3AUa":
/*!****************************************************************************!*\
  !*** ./src/app/components/company/apis/add-coupon/add-coupon.component.ts ***!
  \****************************************************************************/
/*! exports provided: AddCouponComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCouponComponent", function() { return AddCouponComponent; });
/* harmony import */ var src_app_models_category_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/category.model */ "iAog");
/* harmony import */ var src_app_models_coupon_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/coupon.model */ "DamJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/company.service */ "ZtWP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








function AddCouponComponent_img_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 44);
} }
function AddCouponComponent_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", category_r18, " ");
} }
function AddCouponComponent_img_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 44);
} }
function AddCouponComponent_img_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 44);
} }
function AddCouponComponent_img_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 44);
} }
function AddCouponComponent_img_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 44);
} }
function AddCouponComponent_img_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 44);
} }
function AddCouponComponent_img_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 44);
} }
function AddCouponComponent_img_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 44);
} }
class AddCouponComponent {
    constructor(companyService, router, snackBar) {
        this.companyService = companyService;
        this.router = router;
        this.snackBar = snackBar;
        this.categories = [
            src_app_models_category_model__WEBPACK_IMPORTED_MODULE_0__["Category"].Electricity,
            src_app_models_category_model__WEBPACK_IMPORTED_MODULE_0__["Category"].Food,
            src_app_models_category_model__WEBPACK_IMPORTED_MODULE_0__["Category"].Restaurant,
            src_app_models_category_model__WEBPACK_IMPORTED_MODULE_0__["Category"].Sport,
            src_app_models_category_model__WEBPACK_IMPORTED_MODULE_0__["Category"].Vacation,
        ];
        this.coupon = new src_app_models_coupon_model__WEBPACK_IMPORTED_MODULE_1__["Coupon"]();
    }
    ngOnInit() { }
    addCoupon() {
        this.companyService.addCoupon(this.coupon).subscribe((answer) => {
            this.snackBar.open(`${answer.concat('✅')} `, 'i got it', {
                verticalPosition: 'top',
            });
        }, (e) => {
            if (e.status === 401) {
                console.log(401);
                this.router.navigate(['unautorized']);
            }
            else {
                this.snackBar.open(`${e.error}`, 'i got it', {
                    verticalPosition: 'top',
                });
            }
            console.dir(e);
        });
    }
}
AddCouponComponent.ɵfac = function AddCouponComponent_Factory(t) { return new (t || AddCouponComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"])); };
AddCouponComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddCouponComponent, selectors: [["app-add-coupon"]], decls: 78, vars: 18, consts: [[1, "glass"], [1, "dashboard"], [1, "user"], ["src", "/assets/adminImage2.png", "alt", "", 1, "admin-image"], [1, "member"], [1, "links"], [1, "link"], [1, "pro"], ["routerLink", "../get-all-coupons", "routerLinkActive", "active-link", 1, "customers-list"], [1, "form-div"], [1, "validation"], ["formInfo", "ngForm"], [1, "status"], [1, "cards"], [1, "card"], ["class", "vi", "src", "/assets/validImage.png", "alt", "", 4, "ngIf"], ["for", "category"], ["name", "categoryType", "required", "", 3, "ngModel", "ngModelChange"], ["categoryInfo", "ngModel"], [4, "ngFor", "ngForOf"], ["for", "title"], ["name", "title", "type", "text", "placeholder", "Insert Title...", "required", "", 3, "ngModel", "ngModelChange"], ["titleInfo", "ngModel"], ["for", "description"], ["name", "email", "type", "text", "placeholder", "Insert Description...", "required", "", 3, "ngModel", "ngModelChange"], ["descriptionInfo", "ngModel"], ["for", "startDate"], ["name", "startDate", "type", "date", "placeholder", "Choose Start Date", "required", "", 3, "ngModel", "ngModelChange"], ["startDateInfo", "ngModel"], ["for", "endDate"], ["name", "endDate", "type", "date", "placeholder", "Choose End Date", "required", "", 3, "ngModel", "ngModelChange"], ["endDateInfo", "ngModel"], ["for", "amount"], ["name", "amount", "type", "number", "placeholder", "Insert amount", "required", "", 3, "ngModel", "ngModelChange"], ["amountInfo", "ngModel"], ["for", "price"], ["name", "price", "type", "number", "placeholder", "Insert price", "required", "", 3, "ngModel", "ngModelChange"], ["priceInfo", "ngModel"], ["for", "image"], ["name", "image", "type", "url", "maxlength", "255", "placeholder", "Insert image link", 3, "ngModel", "ngModelChange"], ["imageInfo", "ngModel"], ["type", "submit", "value", "Add new Coupon", 3, "disabled", "click"], [1, "circle1"], [1, "circle2"], ["src", "/assets/validImage.png", "alt", "", 1, "vi"]], template: function AddCouponComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Welcome Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Add A New Coupon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Go to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " My Coupons List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "form", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Add Coupon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, AddCouponComponent_img_25_Template, 1, 0, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "select", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AddCouponComponent_Template_select_ngModelChange_28_listener($event) { return ctx.coupon.category = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, AddCouponComponent_option_30_Template, 2, 1, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, AddCouponComponent_img_32_Template, 1, 0, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AddCouponComponent_Template_input_ngModelChange_35_listener($event) { return ctx.coupon.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, AddCouponComponent_img_38_Template, 1, 0, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "input", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AddCouponComponent_Template_input_ngModelChange_41_listener($event) { return ctx.coupon.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, AddCouponComponent_img_44_Template, 1, 0, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Start Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "input", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AddCouponComponent_Template_input_ngModelChange_47_listener($event) { return ctx.coupon.startDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, AddCouponComponent_img_50_Template, 1, 0, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "End Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "input", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AddCouponComponent_Template_input_ngModelChange_53_listener($event) { return ctx.coupon.endDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](56, AddCouponComponent_img_56_Template, 1, 0, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "input", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AddCouponComponent_Template_input_ngModelChange_59_listener($event) { return ctx.coupon.amount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](62, AddCouponComponent_img_62_Template, 1, 0, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "input", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AddCouponComponent_Template_input_ngModelChange_65_listener($event) { return ctx.coupon.price = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](68, AddCouponComponent_img_68_Template, 1, 0, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "input", 39, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AddCouponComponent_Template_input_ngModelChange_71_listener($event) { return ctx.coupon.image = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddCouponComponent_Template_button_click_74_listener() { return ctx.addCoupon(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, " Add new Coupon ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](19);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](29);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](36);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](42);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](48);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](54);
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](60);
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](66);
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r2.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.coupon.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r5.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.coupon.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r7.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.coupon.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r9.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.coupon.startDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r11.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.coupon.endDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r13.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.coupon.amount);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r15.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.coupon.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r17.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.coupon.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", _r0.form.invalid);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_z"]], styles: ["*[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  \r\n  font-weight: 600;\r\n  font-size: 2rem;\r\n  opacity: 0.8;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\r\n  \r\n  font-weight: 600;\r\n  opacity: 0.8;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n  background-color: #378b29;\r\n  background-image: linear-gradient(315deg, #a5e79a 0%, #74d680 74%);\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  min-height: 80vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.glass[_ngcontent-%COMP%] {\r\n  background: white;\r\n  max-height: 74vh;\r\n  min-width: 550px;\r\n  width: 65%;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.5),\r\n    rgba(255, 255, 255, 0.1)\r\n  );\r\n\r\n  border-radius: 2rem;\r\n  z-index: 2;\r\n  -webkit-backdrop-filter: blur(2rem);\r\n          backdrop-filter: blur(2rem);\r\n  display: flex;\r\n}\r\n\r\n.circle1[_ngcontent-%COMP%], .circle2[_ngcontent-%COMP%] {\r\n  background: white;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.01),\r\n    rgba(255, 255, 255, 2)\r\n  );\r\n  height: 13rem;\r\n  width: 13rem;\r\n  position: absolute;\r\n  border-radius: 50%;\r\n}\r\n\r\n.circle1[_ngcontent-%COMP%] {\r\n  top: 13%;\r\n  right: 12%;\r\n  z-index: 0.2;\r\n}\r\n\r\n.circle2[_ngcontent-%COMP%] {\r\n  bottom: 9%;\r\n  left: 12%;\r\n  z-index: 0.2;\r\n}\r\n\r\n.member[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.dashboard[_ngcontent-%COMP%] {\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  min-height: 74vh;\r\n  \r\n  width: 30%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  text-align: center;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.7),\r\n    rgba(255, 255, 255, 0.3)\r\n  );\r\n  border-top-left-radius: 2rem;\r\n  border-bottom-left-radius: 2rem;\r\n}\r\n\r\n.link[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin: 1rem 0rem;\r\n  padding: 1rem 5rem;\r\n  align-items: center;\r\n}\r\n\r\n.link[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  padding: 0rem 2rem;\r\n}\r\n\r\n.form-div[_ngcontent-%COMP%] {\r\n  flex: 2;\r\n}\r\n\r\n.pro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  justify-content: center;\r\n  text-align: center;\r\n\r\n  color: white;\r\n}\r\n\r\n.admin-image[_ngcontent-%COMP%] {\r\n  height: 80px;\r\n  width: 80px;\r\n  border-radius: 40rem;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.status[_ngcontent-%COMP%] {\r\n  background: linear-gradient(315deg, #000000 0%, #414141 74%);\r\n  color: rgb(221, 221, 221);\r\n  text-align: center;\r\n  height: 100px;\r\n  width: 70%;\r\n  z-index: 2;\r\n  padding-top: 30px;\r\n  position: absolute;\r\n  transform: translate(1px, -125px);\r\n}\r\n\r\n.games[_ngcontent-%COMP%] {\r\n  margin: 0.5rem;\r\n\r\n  box-sizing: content-box;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  transform: translateY(-20%);\r\n  transform: translateX(10%);\r\n  height: 65px;\r\n  width: 80%;\r\n  display: flex;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.8),\r\n    rgba(255, 255, 255, 0.5)\r\n  );\r\n  border-radius: 1rem;\r\n  margin: 1.8rem;\r\n  padding: 0.5rem;\r\n  box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.5);\r\n  justify-content: space-between;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  font-size: 17px;\r\n}\r\n\r\n.validation[_ngcontent-%COMP%] {\r\n  justify-content: flex-start;\r\n\r\n  width: 5%;\r\n  flex-direction: column;\r\n  margin: 3.4rem 0rem;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.vi[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin-top: 0.2rem;\r\n  height: 60px;\r\n  width: 60px;\r\n  transform: translate(-5px, -10px);\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  margin-top: 8px;\r\n  height: 35px;\r\n  border-radius: 0.5rem;\r\n  width: 70%;\r\n}\r\n\r\n.customers-list[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 100%;\r\n  border-radius: 1.5rem;\r\n  color: rgb(221, 221, 221);\r\n  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);\r\n  font-size: 16px;\r\n}\r\n\r\n.pro[_ngcontent-%COMP%]:hover {\r\n  height: 90px;\r\n  width: 70%;\r\n\r\n  transition: all 0.2s;\r\n}\r\n\r\n.pro[_ngcontent-%COMP%] {\r\n  font-weight: normal;\r\n  position: relative;\r\n  height: 80px;\r\n  width: 60%;\r\n\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.form-div[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background-color: #525a50b9;\r\n  color: rgb(221, 221, 221);\r\n  font-weight: bolder;\r\n  font-size: 19px;\r\n\r\n  padding: 2px;\r\n  height: 100%;\r\n  width: 100%;\r\n  position: relative;\r\n\r\n  cursor: pointer;\r\n  border-radius: 0.7rem;\r\n  \r\n  transition: 0.3s;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background-color: #259409b9;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jb3Vwb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUNBOztFQUVFLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtFQUFrRTtFQUNsRSxxREFBcUQ7RUFDckQsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWOzs7O0dBSUM7O0VBRUQsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakI7Ozs7R0FJQztFQUNELGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFFBQVE7RUFDUixVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0VBQXNFO0VBQ3RFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDJCQUFtQjtFQUFuQix3QkFBbUI7RUFBbkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEI7Ozs7R0FJQztFQUNELDRCQUE0QjtFQUM1QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCOztFQUVsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLG9CQUFvQjtBQUN0Qjs7QUFFQSxpQkFBaUI7O0FBQ2pCLHdDQUF3Qzs7QUFDeEMsd0NBQXdDOztBQUV4QztFQUNFLDREQUE0RDtFQUM1RCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixVQUFVO0VBQ1YsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsY0FBYzs7RUFFZCx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixVQUFVO0VBQ1YsYUFBYTtFQUNiOzs7O0dBSUM7RUFDRCxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQWU7RUFDZixpREFBaUQ7RUFDakQsOEJBQThCO0FBQ2hDOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSwyQkFBMkI7O0VBRTNCLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGtFQUFrRTtFQUNsRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7O0VBRVYsb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTs7RUFFVixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixlQUFlOztFQUVmLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjs7RUFFbEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCIiwiZmlsZSI6ImFkZC1jb3Vwb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmgxIHtcclxuICAvKiBjb2xvcjogIzQyNjY5NjsgKi9cclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuaDIsXHJcbnAge1xyXG4gIC8qIGNvbG9yOiAjNDI2Njk2OyAqL1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG5tYWluIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc4YjI5O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNhNWU3OWEgMCUsICM3NGQ2ODAgNzQlKTtcclxuICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG4gIG1pbi1oZWlnaHQ6IDgwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5nbGFzcyB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgbWF4LWhlaWdodDogNzR2aDtcclxuICBtaW4td2lkdGg6IDU1MHB4O1xyXG4gIHdpZHRoOiA2NSU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gcmlnaHQgYm90dG9tLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpXHJcbiAgKTtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uY2lyY2xlMSxcclxuLmNpcmNsZTIge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIHJpZ2h0IGJvdHRvbSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMSksXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDIpXHJcbiAgKTtcclxuICBoZWlnaHQ6IDEzcmVtO1xyXG4gIHdpZHRoOiAxM3JlbTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uY2lyY2xlMSB7XHJcbiAgdG9wOiAxMyU7XHJcbiAgcmlnaHQ6IDEyJTtcclxuICB6LWluZGV4OiAwLjI7XHJcbn1cclxuXHJcbi5jaXJjbGUyIHtcclxuICBib3R0b206IDklO1xyXG4gIGxlZnQ6IDEyJTtcclxuICB6LWluZGV4OiAwLjI7XHJcbn1cclxuXHJcbi5tZW1iZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCBcIkFyaWFsIE5hcnJvdyBCb2xkXCIsIHNhbnMtc2VyaWY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5cclxuLmRhc2hib2FyZCB7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBtaW4taGVpZ2h0OiA3NHZoO1xyXG4gIC8qIGhlaWdodDogMTAwJTsgKi9cclxuICB3aWR0aDogMzAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byByaWdodCBib3R0b20sXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyksXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMylcclxuICApO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDJyZW07XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMnJlbTtcclxufVxyXG5cclxuLmxpbmsge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiAxcmVtIDByZW07XHJcbiAgcGFkZGluZzogMXJlbSA1cmVtO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5saW5rIGgyIHtcclxuICBwYWRkaW5nOiAwcmVtIDJyZW07XHJcbn1cclxuXHJcbi5mb3JtLWRpdiB7XHJcbiAgZmxleDogMjtcclxufVxyXG5cclxuLnBybyBwIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmFkbWluLWltYWdlIHtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNDByZW07XHJcbn1cclxuXHJcbi8qIEdhbWUgc2VjdGlvbiAqL1xyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLnN0YXR1cyB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzAwMDAwMCAwJSwgIzQxNDE0MSA3NCUpO1xyXG4gIGNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgd2lkdGg6IDcwJTtcclxuICB6LWluZGV4OiAyO1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIC0xMjVweCk7XHJcbn1cclxuXHJcbi5nYW1lcyB7XHJcbiAgbWFyZ2luOiAwLjVyZW07XHJcblxyXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAlKTtcclxuICBoZWlnaHQ6IDY1cHg7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIHJpZ2h0IGJvdHRvbSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KVxyXG4gICk7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBtYXJnaW46IDEuOHJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgYm94LXNoYWRvdzogNnB4IDZweCAyMHB4IHJnYmEoMTIyLCAxMjIsIDEyMiwgMC41KTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmNhcmQgbGFiZWwge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcbi52YWxpZGF0aW9uIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblxyXG4gIHdpZHRoOiA1JTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogMy40cmVtIDByZW07XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG59XHJcblxyXG4udmkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wOiAwLjJyZW07XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIC0xMHB4KTtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbi5jdXN0b21lcnMtbGlzdCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcclxuICBjb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICMwMDAwMDAgMCUsICM0MTQxNDEgNzQlKTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLnBybzpob3ZlciB7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG4gIHdpZHRoOiA3MCU7XHJcblxyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG59XHJcbi5wcm8ge1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogODBweDtcclxuICB3aWR0aDogNjAlO1xyXG5cclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4uZm9ybS1kaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5mb3JtIGJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyNWE1MGI5O1xyXG4gIGNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBmb250LXNpemU6IDE5cHg7XHJcblxyXG4gIHBhZGRpbmc6IDJweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xyXG4gIC8qIG91dGxpbmU6IG5vbmU7ICovXHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5mb3JtIGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1OTQwOWI5O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "6ap7":
/*!****************************************************************************************!*\
  !*** ./src/app/components/company/apis/get-all-couponsn/get-all-couponsn.component.ts ***!
  \****************************************************************************************/
/*! exports provided: GetAllCouponsnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllCouponsnComponent", function() { return GetAllCouponsnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/company.service */ "ZtWP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function GetAllCouponsnComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 3);
} }
function GetAllCouponsnComponent_tr_33_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r3.company.id);
} }
function GetAllCouponsnComponent_tr_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GetAllCouponsnComponent_tr_33_td_3_Template, 2, 1, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r3.couponId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r3.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r3.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r3.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r3.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r3.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r3.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", c_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class GetAllCouponsnComponent {
    constructor(companyService, router, snackBar) {
        this.companyService = companyService;
        this.router = router;
        this.snackBar = snackBar;
    }
    ngOnInit() {
        this.companyService.getAllCoupons().subscribe((arrOfCoupons) => {
            if (arrOfCoupons.length == 0) {
                this.snackBar.open(`No coupons to show :(`, 'i got it', {
                    verticalPosition: 'top',
                    duration: 4000,
                });
            }
            this.coupons = arrOfCoupons;
        }, (e) => {
            if (e.status === 401) {
                console.log(401);
                this.router.navigate(['unautorized']);
            }
            else {
                this.snackBar.open(`${e.error}`, 'i got it', {
                    verticalPosition: 'top',
                });
            }
            console.dir(e);
        });
    }
}
GetAllCouponsnComponent.ɵfac = function GetAllCouponsnComponent_Factory(t) { return new (t || GetAllCouponsnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_company_service__WEBPACK_IMPORTED_MODULE_1__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
GetAllCouponsnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GetAllCouponsnComponent, selectors: [["app-get-all-couponsn"]], decls: 34, vars: 1, consts: [[1, "container"], ["loading", ""], [4, "ngFor", "ngForOf"], ["src", "/assets/LoadingGif.gif", "alt", "loading"], [4, "ngIf"], [3, "href"], ["src", "/assets/coupon-link.png", "alt", "image-link"]], template: function GetAllCouponsnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GetAllCouponsnComponent_ng_template_3_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " All Coupons ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Company id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Start-Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "End-Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, GetAllCouponsnComponent_tr_33_Template, 21, 10, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.coupons);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["*[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n  background-color: #378b29;\r\n  background-image: linear-gradient(315deg, #a5e79a 0%, #74d680 74%);\r\n\r\n  font-family: \"Poppins\", sans-serif;\r\n  min-height: 80vh;\r\n  min-width: 150vh;\r\n  display: flex;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  transform: translateX(-8%);\r\n\r\n  margin-top: 5%;\r\n  margin-left: 15%;\r\n  padding-bottom: 5%;\r\n\r\n  width: 85%;\r\n  padding: 10px;\r\n  \r\n  box-sizing: content-box;\r\n  justify-content: space-around;\r\n  display: block;\r\n  border-radius: 2rem;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.5),\r\n    rgba(255, 255, 255, 0.1)\r\n  );\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  text-align: center;\r\n\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  font-weight: bold;\r\n  background-color: rgb(221, 221, 221);\r\n  font-size: 35px;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  background-color: #485461;\r\n  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);\r\n  padding: 5px;\r\n  line-height: 2.3rem;\r\n  margin: auto;\r\n  width: 85%;\r\n\r\n  text-align: center;\r\n  border-radius: 0.7rem;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n  color: rgb(221, 221, 221);\r\n  border: solid black 1px;\r\n  border-radius: 0.4rem;\r\n  font-size: 18px;\r\n  \r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n  background-color: #438b31b9;\r\n  border-radius: 0.3rem;\r\n  font-size: 22px;\r\n}\r\n\r\n.ID-row[_ngcontent-%COMP%] {\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  font-style: italic;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n}\r\n\r\n\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin: auto;\r\n  width: 50px;\r\n}\r\n\r\n[_nghost-%COMP%] {\r\n  display: block;\r\n  height: 100%;\r\n  overflow: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldC1hbGwtY291cG9uc24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0VBQWtFOztFQUVsRSxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsMEJBQTBCOztFQUUxQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjs7RUFFbEIsVUFBVTtFQUNWLGFBQWE7RUFDYjs0QkFDMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3QixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25COzs7O0dBSUM7QUFDSDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7O0VBRWxCLHFEQUFxRDtFQUNyRCxpQkFBaUI7RUFDakIsb0NBQW9DO0VBQ3BDLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsa0VBQWtFO0VBQ2xFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFVBQVU7O0VBRVYsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZix3RUFBd0U7QUFDMUU7O0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxnREFBZ0Q7RUFDaEQsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUNBOzs7OztHQUtHOztBQUVIO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGNBQWM7QUFDaEIiLCJmaWxlIjoiZ2V0LWFsbC1jb3Vwb25zbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzhiMjk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2E1ZTc5YSAwJSwgIzc0ZDY4MCA3NCUpO1xyXG5cclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgbWluLWhlaWdodDogODB2aDtcclxuICBtaW4td2lkdGg6IDE1MHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTglKTtcclxuXHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcblxyXG4gIHdpZHRoOiA4NSU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICAvKiBtaW4td2lkdGg6IDgwMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IG1pbi1jb250ZW50OyAqL1xyXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gcmlnaHQgYm90dG9tLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpXHJcbiAgKTtcclxufVxyXG5cclxuaDEge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxufVxyXG50YWJsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4NTQ2MTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjNDg1NDYxIDAlLCAjMjgzMTNiIDc0JSk7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyLjNyZW07XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiA4NSU7XHJcblxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAwLjdyZW07XHJcbn1cclxuXHJcbnRkIHtcclxuICBjb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG4gIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2ZjZTA0MyAwJSwgI2ZiN2JhMiA3NCUpOyAqL1xyXG59XHJcbnRoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM4YjMxYjk7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG4uSUQtcm93IHtcclxuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4vKiB0Ym9keSA+IHRyOm50aC1jaGlsZChvZGQpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbn1cclxudGJvZHkgPiB0cjpudGgtY2hpbGQoZXZlbikge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGNvcmFsO1xyXG59ICovXHJcblxyXG5pbWcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogNTBweDtcclxufVxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "7gEU":
/*!**************************************************************************************!*\
  !*** ./src/app/components/company/apis/get-com-details/get-com-details.component.ts ***!
  \**************************************************************************************/
/*! exports provided: GetComDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetComDetailsComponent", function() { return GetComDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/company.service */ "ZtWP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function GetComDetailsComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 3);
} }
function GetComDetailsComponent_table_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.company.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.company.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.company.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.company.password);
} }
class GetComDetailsComponent {
    constructor(companyService, router, snackBar) {
        this.companyService = companyService;
        this.router = router;
        this.snackBar = snackBar;
    }
    ngOnInit() {
        // this.products = this.ProductsService.getAllProducts
        this.companyService.getDetails().subscribe((companyFromDB) => {
            this.company = companyFromDB;
        }, (e) => {
            if (e.status === 401) {
                console.log(401);
                this.router.navigate(['unautorized']);
            }
            else {
                this.snackBar.open(`${e.error}`, 'i got it', {
                    verticalPosition: 'top',
                });
            }
            console.dir(e);
        });
    }
}
GetComDetailsComponent.ɵfac = function GetComDetailsComponent_Factory(t) { return new (t || GetComDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_company_service__WEBPACK_IMPORTED_MODULE_1__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
GetComDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GetComDetailsComponent, selectors: [["app-get-com-details"]], decls: 10, vars: 2, consts: [[1, "container"], ["loading", ""], [4, "ngIf", "ngIfElse"], ["src", "/assets/LoadingGif.gif", "alt", "loading"], [1, "ID-row"]], template: function GetComDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GetComDetailsComponent_ng_template_3_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Your Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GetComDetailsComponent_table_9_Template, 21, 4, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.company)("ngIfElse", _r0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["*[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n  background-color: #378b29;\r\n  background-image: linear-gradient(315deg, #a5e79a 0%, #74d680 74%);\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  min-height: 80vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  transform: translate(-8%, -110px);\r\n\r\n  margin-left: 15%;\r\n  padding-bottom: 5%;\r\n\r\n  width: 85%;\r\n  min-width: 500px;\r\n\r\n  box-sizing: border-box;\r\n  justify-content: space-around;\r\n  display: block;\r\n  border-radius: 2rem;\r\n  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  text-align: center;\r\n\r\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\r\n  font-weight: bold;\r\n  background-color: rgb(221, 221, 221);\r\n  font-size: 35px;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  background-image: linear-gradient(315deg, #fce043 0%, #fb7ba2 74%);\r\n  padding: 5px;\r\n  line-height: 3rem;\r\n  margin: auto;\r\n  width: 85%;\r\n  text-align: center;\r\n  border-radius: 0.7rem;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n  border: solid black 1px;\r\n  border-radius: 0.4rem;\r\n  font-size: 18px;\r\n  \r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n  background-color: #438b31b9;\r\n  border-radius: 0.3rem;\r\n  font-size: 22px;\r\n}\r\n\r\n.ID-row[_ngcontent-%COMP%] {\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  font-style: italic;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n}\r\n\r\n\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin: auto;\r\n  width: 50px;\r\n}\r\n\r\n[_nghost-%COMP%] {\r\n  display: block;\r\n  height: 100%;\r\n  overflow: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldC1jb20tZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrRUFBa0U7RUFDbEUscURBQXFEO0VBQ3JELGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQ0FBaUM7O0VBRWpDLGdCQUFnQjtFQUNoQixrQkFBa0I7O0VBRWxCLFVBQVU7RUFDVixnQkFBZ0I7O0VBRWhCLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixrRUFBa0U7QUFDcEU7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCOztFQUVsQiw2RUFBNkU7RUFDN0UsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQyxlQUFlO0FBQ2pCOztBQUNBO0VBQ0Usa0VBQWtFO0VBQ2xFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysd0VBQXdFO0FBQzFFOztBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsZ0RBQWdEO0VBQ2hELGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFDQTs7Ozs7S0FLSzs7QUFFTDtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUNBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixjQUFjO0FBQ2hCIiwiZmlsZSI6ImdldC1jb20tZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzhiMjk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2E1ZTc5YSAwJSwgIzc0ZDY4MCA3NCUpO1xyXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XHJcbiAgbWluLWhlaWdodDogODB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtOCUsIC0xMTBweCk7XHJcblxyXG4gIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgcGFkZGluZy1ib3R0b206IDUlO1xyXG5cclxuICB3aWR0aDogODUlO1xyXG4gIG1pbi13aWR0aDogNTAwcHg7XHJcblxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMDAwMDAwIDAlLCAjNDE0MTQxIDc0JSk7XHJcbn1cclxuXHJcbmgxIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBmb250LWZhbWlseTogXCJHaWxsIFNhbnNcIiwgXCJHaWxsIFNhbnMgTVRcIiwgQ2FsaWJyaSwgXCJUcmVidWNoZXQgTVNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG59XHJcbnRhYmxlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjZmNlMDQzIDAlLCAjZmI3YmEyIDc0JSk7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzcmVtO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogODUlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAwLjdyZW07XHJcbn1cclxuXHJcbnRkIHtcclxuICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcclxuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNmY2UwNDMgMCUsICNmYjdiYTIgNzQlKTsgKi9cclxufVxyXG50aCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzOGIzMWI5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuLklELXJvdyB7XHJcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLyogdGJvZHkgPiB0cjpudGgtY2hpbGQob2RkKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbiAgfVxyXG4gIHRib2R5ID4gdHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcmFsO1xyXG4gIH0gKi9cclxuXHJcbmltZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "9KET":
/*!*******************************************************!*\
  !*** ./src/app/components/layout/layout.component.ts ***!
  \*******************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class LayoutComponent {
    constructor() { }
    ngOnInit() { }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 1, vars: 0, template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "AJ6+":
/*!*******************************************!*\
  !*** ./src/app/services/admin.service.ts ***!
  \*******************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class AdminService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.BASE_URL = '';
    }
    addCompany(company) {
        //===========================================================
        let theHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('token', localStorage.getItem('token'));
        let options = { headers: theHeaders };
        //===========================================================
        return this.httpClient.post(`${this.BASE_URL}/api/admin/add/company`, company, options);
    }
    updateCompany(companyId, company) {
        //===========================================================
        let theHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('token', localStorage.getItem('token'));
        let options = { headers: theHeaders, responseType: 'text' };
        //===========================================================
        return this.httpClient.put(`${this.BASE_URL}/api/admin/update/company?companyId=` + companyId, company, options);
    }
    getOneCompany(companyId) {
        //===========================================================
        let theHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('token', localStorage.getItem('token'));
        let options = { headers: theHeaders };
        //===========================================================
        return this.httpClient.get(`${this.BASE_URL}/api/admin/get/company?companyId=` + companyId, options);
    }
    deleteCompany(companyId) {
        //===========================================================
        let theHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('token', localStorage.getItem('token'));
        let options = { headers: theHeaders, responseType: 'text' };
        //===========================================================
        return this.httpClient.delete(`${this.BASE_URL}/api/admin/delete/company?companyId=` + companyId, options);
    }
    getAllCompanies() {
        //===========================================================
        let theHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('token', localStorage.getItem('token'));
        let options = { headers: theHeaders };
        //===========================================================
        return this.httpClient.get(`${this.BASE_URL}/api/admin/getAll/companies`, options);
    }
    //===============================================================
    //================Customers Methods================
    //===============================================================
    addCustomer(customer) {
        //===========================================================
        let theHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('token', localStorage.getItem('token'));
        let options = { headers: theHeaders };
        //===========================================================
        return this.httpClient.post(`${this.BASE_URL}/api/admin/add/customer`, customer, options);
    }
    updateCustomer(customerId, customer) {
        //===========================================================
        let theHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('token', localStorage.getItem('token'));
        let options = { headers: theHeaders, responseType: 'text' };
        //===========================================================
        return this.httpClient.put(`${this.BASE_URL}/api/admin/update/customer?customerId=` +
            customerId, customer, options);
    }
    deleteCustomer(customerId) {
        //===========================================================
        let theHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('token', localStorage.getItem('token'));
        let options = { headers: theHeaders, responseType: 'text' };
        //===========================================================
        return this.httpClient.delete(`${this.BASE_URL}/api/admin/delete/customer?customerId=` +
            customerId, options);
    }
    getOneCustomer(customerId) {
        //===========================================================
        let theHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('token', localStorage.getItem('token'));
        let options = { headers: theHeaders };
        //===========================================================
        return this.httpClient.get(`${this.BASE_URL}/api/admin/get/customer?customerId=` + customerId, options);
    }
    getAllCustomers() {
        //===========================================================
        let theHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('token', localStorage.getItem('token'));
        let options = { headers: theHeaders };
        //===========================================================
        return this.httpClient.get(`${this.BASE_URL}/api/admin/getAll/customers`, options);
    }
}
AdminService.ɵfac = function AdminService_Factory(t) { return new (t || AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
AdminService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AdminService, factory: AdminService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ "2MiI");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ "LmEr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





class HomeComponent {
    constructor(router) {
        this.router = router;
        this.currDate = new Date();
        this.number = 1;
    }
    ngOnInit() { }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 14, vars: 4, consts: [[1, "container"], [1, "date"], [1, "header"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Welcome To Coupon Website ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u231A ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 1, ctx.currDate, "fullDate"), "");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100vh;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  display: grid;\r\n  grid-template-rows: 12% 80% 8%;\r\n  grid-template-columns: 100%;\r\n  font-family: sans-serif;\r\n  color: #333;\r\n  line-height: 1.5;\r\n  justify-content: center;\r\n  background-image: url(\"/assets/backImage2.jpg\");\r\n  background-size: cover;\r\n  overflow-x: hidden;\r\n}\r\nheader[_ngcontent-%COMP%] {\r\n  grid-row: 1/ 2;\r\n}\r\nmain[_ngcontent-%COMP%] {\r\n  grid-row: 2 / 3;\r\n  border: solid rgba(0, 0, 0, 0.418) 2px;\r\n}\r\nfooter[_ngcontent-%COMP%] {\r\n  grid-row: 3/ 4;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  padding: 0%;\r\n  margin: 5px;\r\n}\r\ndiv[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  position: relative;\r\n  transform: translateY(-20px);\r\n}\r\n.header[_ngcontent-%COMP%] {\r\n  padding-bottom: 20px;\r\n  height: 30%;\r\n  bottom: 20px;\r\n  box-sizing: content-box;\r\n  text-align: center;\r\n  margin: 0%;\r\n  font-size: 4rem;\r\n  transform: translateY(2px);\r\n  font-family: \"Poppins\", sans-serif;\r\n  background-color: rgb(221, 221, 221);\r\n}\r\n.details[_ngcontent-%COMP%] {\r\n  font-size: medium;\r\n}\r\n.date[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-size: medium;\r\n  font-size: 1.3rem;\r\n  background: rgb(221, 221, 221);\r\n  transform: translate(1%, -20%);\r\n  border: solid rgba(0, 0, 0, 0.034) 3px;\r\n  width: 280px;\r\n  border-radius: 0.7rem;\r\n  padding: 10px;\r\n  margin: 8px;\r\n  box-sizing: content-box;\r\n  font-style: oblique;\r\n}\r\nspan[_ngcontent-%COMP%] {\r\n  color: rgb(221, 221, 221);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrRkFBa0Y7QUFDbEYsaUJBQWlCO0FBQ2pCO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QiwrQ0FBK0M7RUFDL0Msc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLHNDQUFzQztBQUN4QztBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBLGtGQUFrRjtBQUNsRjtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLGtDQUFrQztFQUNsQyxvQ0FBb0M7QUFDdEM7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtDQUFrQztFQUNsQyxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLDhCQUE4QjtFQUM5Qiw4QkFBOEI7RUFDOUIsc0NBQXNDO0VBQ3RDLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLyogc2FtZSBsYXlvdXQgICovXHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEyJSA4MCUgOCU7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9iYWNrSW1hZ2UyLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICBncmlkLXJvdzogMS8gMjtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgZ3JpZC1yb3c6IDIgLyAzO1xyXG4gIGJvcmRlcjogc29saWQgcmdiYSgwLCAwLCAwLCAwLjQxOCkgMnB4O1xyXG59XHJcbmZvb3RlciB7XHJcbiAgZ3JpZC1yb3c6IDMvIDQ7XHJcbn1cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuaHIge1xyXG4gIHBhZGRpbmc6IDAlO1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcbmRpdiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xyXG59XHJcbi5oZWFkZXIge1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIGhlaWdodDogMzAlO1xyXG4gIGJvdHRvbTogMjBweDtcclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwJTtcclxuICBmb250LXNpemU6IDRyZW07XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxufVxyXG5cclxuLmRldGFpbHMge1xyXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG59XHJcblxyXG4uZGF0ZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IG1lZGl1bTtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMSUsIC0yMCUpO1xyXG4gIGJvcmRlcjogc29saWQgcmdiYSgwLCAwLCAwLCAwLjAzNCkgM3B4O1xyXG4gIHdpZHRoOiAyODBweDtcclxuICBib3JkZXItcmFkaXVzOiAwLjdyZW07XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDhweDtcclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xyXG59XHJcbnNwYW4ge1xyXG4gIGNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "C6Rq":
/*!**********************************************************************************!*\
  !*** ./src/app/components/company/apis/update-coupon/update-coupon.component.ts ***!
  \**********************************************************************************/
/*! exports provided: UpdateCouponComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCouponComponent", function() { return UpdateCouponComponent; });
/* harmony import */ var src_app_models_category_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/category.model */ "iAog");
/* harmony import */ var src_app_models_coupon_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/coupon.model */ "DamJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/company.service */ "ZtWP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








function UpdateCouponComponent_img_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 45);
} }
function UpdateCouponComponent_option_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", category_r19, " ");
} }
function UpdateCouponComponent_img_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 45);
} }
function UpdateCouponComponent_img_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 45);
} }
function UpdateCouponComponent_img_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 45);
} }
function UpdateCouponComponent_img_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 45);
} }
function UpdateCouponComponent_img_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 45);
} }
function UpdateCouponComponent_img_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 45);
} }
function UpdateCouponComponent_img_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 45);
} }
class UpdateCouponComponent {
    constructor(companyService, router, snackBar) {
        this.companyService = companyService;
        this.router = router;
        this.snackBar = snackBar;
        this.categories = [
            src_app_models_category_model__WEBPACK_IMPORTED_MODULE_0__["Category"].Electricity,
            src_app_models_category_model__WEBPACK_IMPORTED_MODULE_0__["Category"].Food,
            src_app_models_category_model__WEBPACK_IMPORTED_MODULE_0__["Category"].Restaurant,
            src_app_models_category_model__WEBPACK_IMPORTED_MODULE_0__["Category"].Sport,
            src_app_models_category_model__WEBPACK_IMPORTED_MODULE_0__["Category"].Vacation,
        ];
        this.coupon = new src_app_models_coupon_model__WEBPACK_IMPORTED_MODULE_1__["Coupon"]();
    }
    ngOnInit() { }
    updateCoupon() {
        console.log(`
    company  id: ${this.couponId}
    `);
        this.companyService.updateCoupon(this.coupon, this.couponId).subscribe((answer) => {
            this.snackBar.open(`${answer.concat('✅')} `, 'i got it', {
                verticalPosition: 'top',
            });
        }, (e) => {
            if (e.status === 401) {
                console.log(401);
                this.router.navigate(['unautorized']);
            }
            else {
                this.snackBar.open(`${e.error}`, 'i got it', {
                    verticalPosition: 'top',
                });
            }
            console.dir(e);
        });
    }
}
UpdateCouponComponent.ɵfac = function UpdateCouponComponent_Factory(t) { return new (t || UpdateCouponComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"])); };
UpdateCouponComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UpdateCouponComponent, selectors: [["app-update-coupon"]], decls: 84, vars: 19, consts: [[1, "glass"], [1, "dashboard"], [1, "user"], ["src", "/assets/adminImage2.png", "alt", "", 1, "admin-image"], [1, "member"], [1, "links"], [1, "link"], [1, "pro"], ["routerLink", "../get-all-coupons", "routerLinkActive", "active-link", 1, "customers-list"], [1, "form-div"], [1, "validation"], ["formInfo", "ngForm"], [1, "status"], ["for", "ID"], ["name", "id", "type", "number", "placeholder", "", "required", "", 3, "ngModel", "ngModelChange"], ["idInfo", "ngModel"], [1, "cards"], [1, "card"], ["class", "vi", "src", "/assets/validImage.png", "alt", "", 4, "ngIf"], ["for", "category"], ["name", "categoryType", "required", "", 3, "ngModel", "ngModelChange"], ["categoryInfo", "ngModel"], [4, "ngFor", "ngForOf"], ["for", "title"], ["name", "title", "type", "text", "placeholder", "Insert Title...", "required", "", 3, "ngModel", "ngModelChange"], ["titleInfo", "ngModel"], ["for", "description"], ["name", "email", "type", "text", "placeholder", "Insert Description...", "required", "", 3, "ngModel", "ngModelChange"], ["descriptionInfo", "ngModel"], ["for", "startDate"], ["name", "startDate", "type", "date", "placeholder", "Choose Start Date", "required", "", 3, "ngModel", "ngModelChange"], ["startDateInfo", "ngModel"], ["for", "endDate"], ["name", "endDate", "type", "date", "placeholder", "Choose End Date", "required", "", 3, "ngModel", "ngModelChange"], ["endDateInfo", "ngModel"], ["for", "amount"], ["name", "amount", "type", "number", "placeholder", "Insert amount", "required", "", 3, "ngModel", "ngModelChange"], ["amountInfo", "ngModel"], ["for", "price"], ["name", "price", "type", "number", "placeholder", "Insert price", "required", "", 3, "ngModel", "ngModelChange"], ["priceInfo", "ngModel"], ["for", "image"], ["name", "image", "type", "text", "maxlength", "255", "placeholder", "Insert image link", 3, "ngModel", "ngModelChange"], ["imageInfo", "ngModel"], ["type", "submit", "value", "Add new Coupon", 3, "disabled", "click"], ["src", "/assets/validImage.png", "alt", "", 1, "vi"]], template: function UpdateCouponComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Welcome Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Update Coupon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " cuoupons");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " list ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "form", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Which Company ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " Do you wish to update ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " ID : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UpdateCouponComponent_Template_input_ngModelChange_29_listener($event) { return ctx.couponId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, UpdateCouponComponent_img_33_Template, 1, 0, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "select", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UpdateCouponComponent_Template_select_ngModelChange_36_listener($event) { return ctx.coupon.category = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, UpdateCouponComponent_option_38_Template, 2, 1, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, UpdateCouponComponent_img_40_Template, 1, 0, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "input", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UpdateCouponComponent_Template_input_ngModelChange_43_listener($event) { return ctx.coupon.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, UpdateCouponComponent_img_46_Template, 1, 0, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "input", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UpdateCouponComponent_Template_input_ngModelChange_49_listener($event) { return ctx.coupon.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, UpdateCouponComponent_img_52_Template, 1, 0, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Start Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "input", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UpdateCouponComponent_Template_input_ngModelChange_55_listener($event) { return ctx.coupon.startDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](58, UpdateCouponComponent_img_58_Template, 1, 0, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "End Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "input", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UpdateCouponComponent_Template_input_ngModelChange_61_listener($event) { return ctx.coupon.endDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](64, UpdateCouponComponent_img_64_Template, 1, 0, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "input", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UpdateCouponComponent_Template_input_ngModelChange_67_listener($event) { return ctx.coupon.amount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](70, UpdateCouponComponent_img_70_Template, 1, 0, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "input", 39, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UpdateCouponComponent_Template_input_ngModelChange_73_listener($event) { return ctx.coupon.price = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](76, UpdateCouponComponent_img_76_Template, 1, 0, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "input", 42, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UpdateCouponComponent_Template_input_ngModelChange_79_listener($event) { return ctx.coupon.image = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UpdateCouponComponent_Template_button_click_82_listener() { return ctx.updateCoupon(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, " Update Coupon ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](21);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](37);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](44);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](50);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](56);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](62);
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](68);
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](74);
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.couponId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r3.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.coupon.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r6.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.coupon.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r8.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.coupon.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r10.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.coupon.startDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r12.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.coupon.endDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r14.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.coupon.amount);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r16.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.coupon.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r18.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.coupon.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", _r0.form.invalid);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_z"]], styles: ["*[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n  font-size: 1.4rem;\r\n  opacity: 0.8;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  opacity: 0.8;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n  background-color: #378b29;\r\n  background-image: linear-gradient(315deg, #a5e79a 0%, #74d680 74%);\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  min-height: 80vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.glass[_ngcontent-%COMP%] {\r\n  background: white;\r\n  max-height: 74vh;\r\n  min-width: 550px;\r\n  width: 65%;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.5),\r\n    rgba(255, 255, 255, 0.1)\r\n  );\r\n\r\n  border-radius: 2rem;\r\n  z-index: 2;\r\n  -webkit-backdrop-filter: blur(2rem);\r\n          backdrop-filter: blur(2rem);\r\n  display: flex;\r\n}\r\n\r\n.circle1[_ngcontent-%COMP%], .circle2[_ngcontent-%COMP%] {\r\n  background: white;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.01),\r\n    rgba(255, 255, 255, 2)\r\n  );\r\n  height: 13rem;\r\n  width: 13rem;\r\n  position: absolute;\r\n  border-radius: 50%;\r\n}\r\n\r\n.circle1[_ngcontent-%COMP%] {\r\n  top: 13%;\r\n  right: 12%;\r\n  z-index: 0.2;\r\n}\r\n\r\n.circle2[_ngcontent-%COMP%] {\r\n  bottom: 9%;\r\n  left: 12%;\r\n  z-index: 0.2;\r\n}\r\n\r\n.member[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.dashboard[_ngcontent-%COMP%] {\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  min-height: 74vh;\r\n  \r\n  width: 30%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  text-align: center;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.7),\r\n    rgba(255, 255, 255, 0.3)\r\n  );\r\n  border-top-left-radius: 2rem;\r\n  border-bottom-left-radius: 2rem;\r\n}\r\n\r\n.link[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin: 1rem 0rem;\r\n  padding: 1rem 5rem;\r\n  align-items: center;\r\n}\r\n\r\n.link[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  padding: 0rem 2rem;\r\n}\r\n\r\n.form-div[_ngcontent-%COMP%] {\r\n  flex: 2;\r\n}\r\n\r\n.pro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  justify-content: center;\r\n  text-align: center;\r\n\r\n  color: white;\r\n}\r\n\r\n.admin-image[_ngcontent-%COMP%] {\r\n  height: 80px;\r\n  width: 80px;\r\n  border-radius: 40rem;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.status[_ngcontent-%COMP%] {\r\n  background: linear-gradient(315deg, #000000 0%, #414141 74%);\r\n  color: rgb(221, 221, 221);\r\n  text-align: center;\r\n  height: 130px;\r\n  width: 70%;\r\n  z-index: 2;\r\n  \r\n  position: absolute;\r\n  transform: translate(1px, -125px);\r\n}\r\n\r\n.status[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.8),\r\n    rgba(255, 255, 255, 0.5)\r\n  );\r\n  border: none;\r\n  width: 20%;\r\n  height: 40px;\r\n  padding: 0.5rem;\r\n  border-radius: 1rem;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  text-align: center;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  transform: translateY(-20%);\r\n  transform: translateX(10%);\r\n  height: 65px;\r\n  width: 80%;\r\n  display: flex;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.8),\r\n    rgba(255, 255, 255, 0.5)\r\n  );\r\n  border-radius: 1rem;\r\n  margin: 1.8rem;\r\n  padding: 0.5rem;\r\n  box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.5);\r\n  justify-content: space-between;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  font-size: 17px;\r\n}\r\n\r\n.validation[_ngcontent-%COMP%] {\r\n  justify-content: flex-start;\r\n\r\n  width: 5%;\r\n  flex-direction: column;\r\n  margin: 3.4rem 0rem;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.vi[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin-top: 0.2rem;\r\n  height: 60px;\r\n  width: 60px;\r\n  transform: translate(-5px, -10px);\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  margin-top: 8px;\r\n  height: 35px;\r\n  border-radius: 0.5rem;\r\n  width: 70%;\r\n}\r\n\r\n.form-div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n  border: 1px solid #ccc;\r\n}\r\n\r\n.form-div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:placeholder {\r\n  color: #bbb;\r\n}\r\n\r\n.customers-list[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 100%;\r\n  border-radius: 1.5rem;\r\n  color: rgb(221, 221, 221);\r\n  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n}\r\n\r\n.pro[_ngcontent-%COMP%]:hover {\r\n  height: 90px;\r\n  width: 70%;\r\n\r\n  transition: all 0.2s;\r\n}\r\n\r\n.pro[_ngcontent-%COMP%] {\r\n  font-weight: normal;\r\n  position: relative;\r\n  height: 80px;\r\n  width: 60%;\r\n\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.form-div[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background-color: #525a50b9;\r\n  color: rgb(221, 221, 221);\r\n  font-weight: bolder;\r\n  font-size: 19px;\r\n\r\n  padding: 2px;\r\n  height: 100%;\r\n  width: 100%;\r\n  position: relative;\r\n\r\n  cursor: pointer;\r\n  border-radius: 0.7rem;\r\n  \r\n  transition: 0.3s;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background-color: #259409b9;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1jb3Vwb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBQ0E7O0VBRUUsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrRUFBa0U7RUFDbEUscURBQXFEO0VBQ3JELGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVjs7OztHQUlDOztFQUVELG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCOzs7O0dBSUM7RUFDRCxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNFQUFzRTtFQUN0RSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwyQkFBbUI7RUFBbkIsd0JBQW1CO0VBQW5CLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCOzs7O0dBSUM7RUFDRCw0QkFBNEI7RUFDNUIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjs7RUFFbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7O0FBRUEsaUJBQWlCOztBQUNqQix3Q0FBd0M7O0FBQ3hDLHdDQUF3Qzs7QUFFeEM7RUFDRSw0REFBNEQ7RUFDNUQseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsVUFBVTtFQUNWLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFOzs7O0dBSUM7RUFDRCxZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osVUFBVTtFQUNWLGFBQWE7RUFDYjs7OztHQUlDO0VBQ0QsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaURBQWlEO0VBQ2pELDhCQUE4QjtBQUNoQzs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsMkJBQTJCOztFQUUzQixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLFVBQVU7QUFDWjs7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsa0VBQWtFO0VBQ2xFLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7O0VBRVYsb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTs7RUFFVixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixlQUFlOztFQUVmLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjs7RUFFbEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCIiwiZmlsZSI6InVwZGF0ZS1jb3Vwb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5oMixcclxucCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzhiMjk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2E1ZTc5YSAwJSwgIzc0ZDY4MCA3NCUpO1xyXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XHJcbiAgbWluLWhlaWdodDogODB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmdsYXNzIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBtYXgtaGVpZ2h0OiA3NHZoO1xyXG4gIG1pbi13aWR0aDogNTUwcHg7XHJcbiAgd2lkdGg6IDY1JTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byByaWdodCBib3R0b20sXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSlcclxuICApO1xyXG5cclxuICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5jaXJjbGUxLFxyXG4uY2lyY2xlMiB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gcmlnaHQgYm90dG9tLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAxKSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMilcclxuICApO1xyXG4gIGhlaWdodDogMTNyZW07XHJcbiAgd2lkdGg6IDEzcmVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5jaXJjbGUxIHtcclxuICB0b3A6IDEzJTtcclxuICByaWdodDogMTIlO1xyXG4gIHotaW5kZXg6IDAuMjtcclxufVxyXG5cclxuLmNpcmNsZTIge1xyXG4gIGJvdHRvbTogOSU7XHJcbiAgbGVmdDogMTIlO1xyXG4gIHotaW5kZXg6IDAuMjtcclxufVxyXG5cclxuLm1lbWJlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsIFwiQXJpYWwgTmFycm93IEJvbGRcIiwgc2Fucy1zZXJpZjtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG4uZGFzaGJvYXJkIHtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIG1pbi1oZWlnaHQ6IDc0dmg7XHJcbiAgLyogaGVpZ2h0OiAxMDAlOyAqL1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIHJpZ2h0IGJvdHRvbSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKVxyXG4gICk7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMnJlbTtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAycmVtO1xyXG59XHJcblxyXG4ubGluayB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IDFyZW0gMHJlbTtcclxuICBwYWRkaW5nOiAxcmVtIDVyZW07XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmxpbmsgaDIge1xyXG4gIHBhZGRpbmc6IDByZW0gMnJlbTtcclxufVxyXG5cclxuLmZvcm0tZGl2IHtcclxuICBmbGV4OiAyO1xyXG59XHJcblxyXG4ucHJvIHAge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYWRtaW4taW1hZ2Uge1xyXG4gIGhlaWdodDogODBweDtcclxuICB3aWR0aDogODBweDtcclxuICBib3JkZXItcmFkaXVzOiA0MHJlbTtcclxufVxyXG5cclxuLyogR2FtZSBzZWN0aW9uICovXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4uc3RhdHVzIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMDAwMDAwIDAlLCAjNDE0MTQxIDc0JSk7XHJcbiAgY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMzBweDtcclxuICB3aWR0aDogNzAlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgLyogYm9yZGVyLXJhZGl1czogMXJlbTsgKi9cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAtMTI1cHgpO1xyXG59XHJcblxyXG4uc3RhdHVzIGlucHV0IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byByaWdodCBib3R0b20sXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCksXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSlcclxuICApO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB3aWR0aDogMjAlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMCUpO1xyXG4gIGhlaWdodDogNjVweDtcclxuICB3aWR0aDogODAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gcmlnaHQgYm90dG9tLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpXHJcbiAgKTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIG1hcmdpbjogMS44cmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBib3gtc2hhZG93OiA2cHggNnB4IDIwcHggcmdiYSgxMjIsIDEyMiwgMTIyLCAwLjUpO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4uY2FyZCBsYWJlbCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuLnZhbGlkYXRpb24ge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHJcbiAgd2lkdGg6IDUlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiAzLjRyZW0gMHJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbn1cclxuXHJcbi52aSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IDAuMnJlbTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwgLTEwcHgpO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG4uZm9ybS1kaXYgaW5wdXQ6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxufVxyXG5cclxuLmZvcm0tZGl2IGlucHV0OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogI2JiYjtcclxufVxyXG5cclxuLmN1c3RvbWVycy1saXN0IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xyXG4gIGNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzAwMDAwMCAwJSwgIzQxNDE0MSA3NCUpO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnBybzpob3ZlciB7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG4gIHdpZHRoOiA3MCU7XHJcblxyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG59XHJcbi5wcm8ge1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogODBweDtcclxuICB3aWR0aDogNjAlO1xyXG5cclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4uZm9ybS1kaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5mb3JtIGJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyNWE1MGI5O1xyXG4gIGNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBmb250LXNpemU6IDE5cHg7XHJcblxyXG4gIHBhZGRpbmc6IDJweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xyXG4gIC8qIG91dGxpbmU6IG5vbmU7ICovXHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5mb3JtIGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1OTQwOWI5O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "DamJ":
/*!****************************************!*\
  !*** ./src/app/models/coupon.model.ts ***!
  \****************************************/
/*! exports provided: Coupon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coupon", function() { return Coupon; });
class Coupon {
    constructor(couponId, company, category, title, description, startDate, endDate, amount, price, image) {
        this.couponId = couponId;
        this.company = company;
        this.category = category;
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.amount = amount;
        this.price = price;
        this.image = image;
    }
}


/***/ }),

/***/ "EFyh":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class LoginService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.BASE_URL_ROOT = '';
    }
    login(userEmail, userPass, clientType) {
        // let theHeaders = new HttpHeaders().set('ontent-Type', 'plain/text');
        // let OPTIONS = { headers: theHeaders };
        return this.httpClient.post(`${this.BASE_URL_ROOT}/api/login?userEmail=` +
            userEmail +
            '&userPass=' +
            userPass +
            '&clientType=' +
            clientType, { responseType: 'text' });
    }
    logout() {
        let theHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('token', localStorage.getItem('token'));
        let options = { headers: theHeaders, responseType: 'text' };
        return this.httpClient.get(`${this.BASE_URL_ROOT}/api/client/logout`, options);
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "EWcc":
/*!***************************************************************************************!*\
  !*** ./src/app/components/customer/apis/purchase-coupon/purchase-coupon.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PurchaseCouponComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseCouponComponent", function() { return PurchaseCouponComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/customer.service */ "0zL+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function PurchaseCouponComponent_section_9_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 7);
} }
function PurchaseCouponComponent_section_9_tr_30_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchaseCouponComponent_section_9_tr_30_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.purchaseCoupon(_r5.innerHTML); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Purcahse Coupon \uD83D\uDCB0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r4.couponId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r4.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r4.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r4.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r4.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r4.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", c_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PurchaseCouponComponent_section_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PurchaseCouponComponent_section_9_ng_template_2_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " All Our Coupons ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Start-Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "End-Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "----");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, PurchaseCouponComponent_section_9_tr_30_Template, 24, 9, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.allWebsiteCoupons);
} }
class PurchaseCouponComponent {
    constructor(customerService, router, snackBar) {
        this.customerService = customerService;
        this.router = router;
        this.snackBar = snackBar;
    }
    ngOnInit() {
        this.client_name = localStorage.getItem('Name');
        // show all coupons of the website to the client
        this.customerService.getWebsiteCoupons().subscribe((arrOfCoupons) => {
            if (arrOfCoupons.length == 0) {
                this.snackBar.open(`No coupons to show :(`, 'i got it', {
                    verticalPosition: 'top',
                    duration: 4000,
                });
            }
            this.allWebsiteCoupons = arrOfCoupons;
        }, (e) => {
            if (e.status === 401) {
                console.log(401);
                this.router.navigate(['unautorized']);
            }
            else {
                this.snackBar.open(`${e.error}`, 'i got it', {
                    verticalPosition: 'top',
                });
            }
            console.dir(e);
        });
    }
    purchaseCoupon(couponId) {
        //convert couponId to Number as the HTTP request in the server
        let id_as_number = Number(couponId);
        this.customerService.purchaseCoupon(id_as_number).subscribe((answer) => {
            this.snackBar.open(`Thank you ${this.client_name} for being a valued member - ${answer} ✅`, 'i got it', {
                verticalPosition: 'top',
            });
        }, (e) => {
            if (e.status === 401) {
                console.log(401);
                this.router.navigate(['unautorized']);
            }
            else {
                this.snackBar.open(`${e.error}`, 'i got it', {
                    verticalPosition: 'top',
                });
            }
            console.dir(e);
        });
    }
}
PurchaseCouponComponent.ɵfac = function PurchaseCouponComponent_Factory(t) { return new (t || PurchaseCouponComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
PurchaseCouponComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PurchaseCouponComponent, selectors: [["app-purchase-coupon"]], decls: 10, vars: 2, consts: [[1, "glass"], [1, "header"], ["behavior", "", "direction", ""], ["class", "container", 4, "ngIf"], [1, "container"], ["loading", ""], [4, "ngFor", "ngForOf"], ["src", "/assets/LoadingGif.gif", "alt", "loading"], [1, "ID-row"], ["idRow", ""], [3, "href"], ["src", "/assets/coupon-link.png", "alt", "image-link"], [1, "puchase-row"], [3, "click"]], template: function PurchaseCouponComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "marquee", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Which Coupon would you like to purchase ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PurchaseCouponComponent_section_9_Template, 31, 1, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" allright ", ctx.client_name, ", all our coupons are right below you \uD83D\uDC47\uD83C\uDFFB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allWebsiteCoupons);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["*[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n  font-size: 1.6rem;\r\n  opacity: 0.8;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  opacity: 0.8;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n  background-color: #fff293;\r\n  background-image: linear-gradient(315deg, #fff293 0%, #ffe884 74%);\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  min-height: 80vh;\r\n  min-width: 140vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.glass[_ngcontent-%COMP%] {\r\n  margin-top: 40px;\r\n  min-height: 40vh;\r\n  min-width: 95%;\r\n\r\n  padding-top: 40px;\r\n  border-radius: 2rem;\r\n  z-index: 2;\r\n  -webkit-backdrop-filter: blur(2rem);\r\n          backdrop-filter: blur(2rem);\r\n  display: flex;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.header[_ngcontent-%COMP%] {\r\n  font-size: 3rem;\r\n  height: 50%;\r\n  width: 100%;\r\n  box-sizing: content-box;\r\n  text-align: center;\r\n  padding-bottom: 30px;\r\n  color: rgba(0, 0, 0, 0.8);\r\n  font-weight: 700;\r\n  font-size: 3rem;\r\n  transform: translateY(2px);\r\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 4rem;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   marquee[_ngcontent-%COMP%] {\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.6),\r\n    rgba(255, 255, 255, 0.3)\r\n  );\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  transform: translateX(-8%);\r\n\r\n  margin-top: 5%;\r\n  margin-left: 15%;\r\n  padding-bottom: 5%;\r\n\r\n  min-width: 85%;\r\n  padding: 10px;\r\n  \r\n  box-sizing: content-box;\r\n  justify-content: space-around;\r\n  display: block;\r\n  border-radius: 2rem;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.6),\r\n    rgba(255, 255, 255, 0.3)\r\n  );\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  text-align: center;\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  font-weight: bold;\r\n  background-color: rgb(221, 221, 221);\r\n  font-size: 35px;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  color: rgb(221, 221, 221);\r\n  background-color: #485461;\r\n  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);\r\n  padding: 5px;\r\n  line-height: 2.3rem;\r\n  margin: auto;\r\n  width: 85%;\r\n\r\n  text-align: center;\r\n  border-radius: 0.7rem;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n  border: solid black 1px;\r\n  border-radius: 0.4rem;\r\n  font-size: 18px;\r\n  \r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n  background-color: #438b31b9;\r\n  border-radius: 0.3rem;\r\n  font-size: 22px;\r\n}\r\n\r\n.ID-row[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.puchase-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background: rgb(221, 221, 221);\r\n  color: linear-gradient(to top left, #28833f, #68d657);\r\n  position: relative;\r\n  height: 100%;\r\n  padding: 22px;\r\n  font-weight: 600;\r\n  font-size: 1rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.puchase-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background: linear-gradient(to top left, #28833f, #68d657);\r\n  color: rgb(221, 221, 221);\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin: auto;\r\n  width: 50px;\r\n}\r\n\r\n[_nghost-%COMP%] {\r\n  display: block;\r\n  height: 100%;\r\n  overflow: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1cmNoYXNlLWNvdXBvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFDQTs7RUFFRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtFQUFrRTtFQUNsRSxxREFBcUQ7RUFDckQsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7O0VBRWQsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsaURBQWlEO0VBQ2pELG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRTs7OztHQUlDO0FBQ0g7O0FBQ0EsNkVBQTZFOztBQUM3RSw2RUFBNkU7O0FBQzdFLDZFQUE2RTs7QUFDN0UsbUJBQW1COztBQUVuQjtFQUNFLGtCQUFrQjtFQUNsQiwwQkFBMEI7O0VBRTFCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCOztFQUVsQixjQUFjO0VBQ2QsYUFBYTtFQUNiOzhCQUM0QjtFQUM1Qix1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkI7Ozs7R0FJQztBQUNIOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxREFBcUQ7RUFDckQsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQyxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrRUFBa0U7RUFDbEUsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osVUFBVTs7RUFFVixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysd0VBQXdFO0FBQzFFOztBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHFEQUFxRDtFQUNyRCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSwwREFBMEQ7RUFDMUQseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGNBQWM7QUFDaEIiLCJmaWxlIjoicHVyY2hhc2UtY291cG9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDEuNnJlbTtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuaDIsXHJcbnAge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG5tYWluIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMjkzO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNmZmYyOTMgMCUsICNmZmU4ODQgNzQlKTtcclxuICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG4gIG1pbi1oZWlnaHQ6IDgwdmg7XHJcbiAgbWluLXdpZHRoOiAxNDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uZ2xhc3Mge1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgbWluLWhlaWdodDogNDB2aDtcclxuICBtaW4td2lkdGg6IDk1JTtcclxuXHJcbiAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5kaXYge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaGVhZGVyIHtcclxuICBmb250LXNpemU6IDNyZW07XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDNyZW07XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuLmhlYWRlciBzcGFuIHtcclxuICBmb250LXNpemU6IDRyZW07XHJcbn1cclxuLmhlYWRlciBtYXJxdWVlIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byByaWdodCBib3R0b20sXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMylcclxuICApO1xyXG59XHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi8qIFdlYnNpdGUgQ291cG9uICovXHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04JSk7XHJcblxyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgcGFkZGluZy1ib3R0b206IDUlO1xyXG5cclxuICBtaW4td2lkdGg6IDg1JTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIC8qIG1pbi13aWR0aDogODAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiBtaW4tY29udGVudDsgKi9cclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIHJpZ2h0IGJvdHRvbSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKVxyXG4gICk7XHJcbn1cclxuXHJcbi5jb250YWluZXIgaDEge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG59XHJcbnRhYmxlIHtcclxuICBjb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ODU0NjE7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzQ4NTQ2MSAwJSwgIzI4MzEzYiA3NCUpO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBsaW5lLWhlaWdodDogMi4zcmVtO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogODUlO1xyXG5cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xyXG59XHJcblxyXG50ZCB7XHJcbiAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjZmNlMDQzIDAlLCAjZmI3YmEyIDc0JSk7ICovXHJcbn1cclxudGgge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzhiMzFiOTtcclxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcbi5JRC1yb3cge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5wdWNoYXNlLXJvdyBidXR0b24ge1xyXG4gIGJhY2tncm91bmQ6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuICBjb2xvcjogbGluZWFyLWdyYWRpZW50KHRvIHRvcCBsZWZ0LCAjMjg4MzNmLCAjNjhkNjU3KTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDIycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5wdWNoYXNlLXJvdyBidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgbGVmdCwgIzI4ODMzZiwgIzY4ZDY1Nyk7XHJcbiAgY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxufVxyXG5cclxuaW1nIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "JzmT":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 6, vars: 0, template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Page NOT FOUND");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Something went wrong :(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "JzsN":
/*!*******************************************************************************!*\
  !*** ./src/app/components/customer/apis/all-coupons/all-coupons.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AllCouponsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllCouponsComponent", function() { return AllCouponsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/customer.service */ "0zL+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function AllCouponsComponent_section_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 4);
} }
function AllCouponsComponent_section_1_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r4.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r4.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r4.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r4.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r4.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", c_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AllCouponsComponent_section_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AllCouponsComponent_section_1_ng_template_2_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " All My Coupons ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Start-Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "End-Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AllCouponsComponent_section_1_tr_28_Template, 18, 8, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.coupons);
} }
class AllCouponsComponent {
    constructor(customerService, router, snackBar) {
        this.customerService = customerService;
        this.router = router;
        this.snackBar = snackBar;
    }
    ngOnInit() {
        this.customerService.getAllCoupons().subscribe((arrOfCoupons) => {
            if (arrOfCoupons.length == 0) {
                this.snackBar.open(`No coupons to show :(`, 'i got it', {
                    verticalPosition: 'top',
                    duration: 4000,
                });
            }
            this.coupons = arrOfCoupons;
        }, (e) => {
            if (e.status === 401) {
                console.log(401);
                this.router.navigate(['unautorized']);
            }
            else {
                this.snackBar.open(`${e.error}`, 'i got it', {
                    verticalPosition: 'top',
                });
            }
            console.dir(e);
        });
    }
}
AllCouponsComponent.ɵfac = function AllCouponsComponent_Factory(t) { return new (t || AllCouponsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
AllCouponsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllCouponsComponent, selectors: [["app-all-coupons"]], decls: 2, vars: 1, consts: [["class", "container", 4, "ngIf"], [1, "container"], ["loading", ""], [4, "ngFor", "ngForOf"], ["src", "/assets/LoadingGif.gif", "alt", "loading"], [3, "href"], ["src", "/assets/coupon-link.png", "alt", "image-link"]], template: function AllCouponsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllCouponsComponent_section_1_Template, 29, 1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.coupons);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["*[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n  background-color: #fff293;\r\n  background-image: linear-gradient(315deg, #fff293 0%, #ffe884 74%);\r\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n  min-height: 80vh;\r\n  min-width: 150vh;\r\n  display: flex;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  transform: translateX(-8%);\r\n\r\n  margin-top: 5%;\r\n  margin-left: 15%;\r\n  padding-bottom: 5%;\r\n\r\n  width: 85%;\r\n  padding: 10px;\r\n  \r\n  box-sizing: content-box;\r\n  justify-content: space-around;\r\n  display: block;\r\n  border-radius: 2rem;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.6),\r\n    rgba(255, 255, 255, 0.3)\r\n  );\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  text-align: center;\r\n\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  font-weight: bold;\r\n  background-color: rgb(221, 221, 221);\r\n  font-size: 35px;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  color: rgb(221, 221, 221);\r\n  background-color: #485461;\r\n  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);\r\n  padding: 5px;\r\n  line-height: 2.3rem;\r\n  margin: auto;\r\n  width: 85%;\r\n\r\n  text-align: center;\r\n  border-radius: 0.7rem;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n  border: solid black 1px;\r\n  border-radius: 0.4rem;\r\n  font-size: 18px;\r\n  \r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n  background-color: #438b31b9;\r\n  border-radius: 0.3rem;\r\n  font-size: 22px;\r\n}\r\n\r\n.ID-row[_ngcontent-%COMP%] {\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  font-style: italic;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n}\r\n\r\n\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin: auto;\r\n  width: 50px;\r\n}\r\n\r\n[_nghost-%COMP%] {\r\n  display: block;\r\n  height: 100%;\r\n  overflow: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbC1jb3Vwb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtFQUFrRTtFQUNsRSxpREFBaUQ7RUFDakQsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsMEJBQTBCOztFQUUxQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjs7RUFFbEIsVUFBVTtFQUNWLGFBQWE7RUFDYjs4QkFDNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3QixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25COzs7O0dBSUM7QUFDSDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7O0VBRWxCLHFEQUFxRDtFQUNyRCxpQkFBaUI7RUFDakIsb0NBQW9DO0VBQ3BDLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtFQUFrRTtFQUNsRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixVQUFVOztFQUVWLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZix3RUFBd0U7QUFDMUU7O0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxnREFBZ0Q7RUFDaEQsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUNBOzs7OztLQUtLOztBQUVMO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGNBQWM7QUFDaEIiLCJmaWxlIjoiYWxsLWNvdXBvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5tYWluIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMjkzO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNmZmYyOTMgMCUsICNmZmU4ODQgNzQlKTtcclxuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgbWluLWhlaWdodDogODB2aDtcclxuICBtaW4td2lkdGg6IDE1MHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTglKTtcclxuXHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcblxyXG4gIHdpZHRoOiA4NSU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICAvKiBtaW4td2lkdGg6IDgwMHB4O1xyXG4gICAgbWluLWhlaWdodDogbWluLWNvbnRlbnQ7ICovXHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byByaWdodCBib3R0b20sXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMylcclxuICApO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG59XHJcbnRhYmxlIHtcclxuICBjb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ODU0NjE7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzQ4NTQ2MSAwJSwgIzI4MzEzYiA3NCUpO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBsaW5lLWhlaWdodDogMi4zcmVtO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogODUlO1xyXG5cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xyXG59XHJcblxyXG50ZCB7XHJcbiAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjZmNlMDQzIDAlLCAjZmI3YmEyIDc0JSk7ICovXHJcbn1cclxudGgge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzhiMzFiOTtcclxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcbi5JRC1yb3cge1xyXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi8qIHRib2R5ID4gdHI6bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG4gIH1cclxuICB0Ym9keSA+IHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JhbDtcclxuICB9ICovXHJcblxyXG5pbWcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogNTBweDtcclxufVxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "All Rights Reserved \u00A9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["div[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  height: 100%;\r\n  padding: 0%;\r\n  margin: 0;\r\n  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);\r\n}\r\np[_ngcontent-%COMP%] {\r\n  color: rgb(221, 221, 221);\r\n  margin: 0;\r\n  position: relative;\r\n  top: 50%;\r\n  transform: translate(0, -50%);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsU0FBUztFQUNULGtFQUFrRTtBQUNwRTtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAwJTtcclxuICBtYXJnaW46IDA7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzAwMDAwMCAwJSwgIzQxNDE0MSA3NCUpO1xyXG59XHJcbnAge1xyXG4gIGNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "Oc7n":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/company/apis/get-coupons-by-limit-price/get-coupons-by-limit-price.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: GetCouponsByLimitPriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCouponsByLimitPriceComponent", function() { return GetCouponsByLimitPriceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/company.service */ "ZtWP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function GetCouponsByLimitPriceComponent_img_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 9);
} }
function GetCouponsByLimitPriceComponent_section_16_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 13);
} }
function GetCouponsByLimitPriceComponent_section_16_tr_32_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r7.company.id);
} }
function GetCouponsByLimitPriceComponent_section_16_tr_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GetCouponsByLimitPriceComponent_section_16_tr_32_td_3_Template, 2, 1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r7.couponId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r7.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r7.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r7.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r7.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r7.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r7.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r7.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", c_r7.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function GetCouponsByLimitPriceComponent_section_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GetCouponsByLimitPriceComponent_section_16_ng_template_2_Template, 1, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Coupons By Category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Company id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Start-Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "End-Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, GetCouponsByLimitPriceComponent_section_16_tr_32_Template, 21, 10, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.coupons);
} }
class GetCouponsByLimitPriceComponent {
    constructor(companyService, router, snackBar) {
        this.companyService = companyService;
        this.router = router;
        this.snackBar = snackBar;
    }
    ngOnInit() { }
    getCouponsByLimitPrice() {
        console.log(`
    limit: ${this.maxPrice}
    `);
        this.companyService.getCouponsByMaxPrice(this.maxPrice).subscribe((arrOfCoupons) => {
            if (arrOfCoupons.length == 0) {
                this.snackBar.open(`No coupons to show :(`, 'i got it', {
                    verticalPosition: 'top',
                    duration: 4000,
                });
            }
            this.coupons = arrOfCoupons;
        }, (e) => {
            if (e.status === 401) {
                console.log(401);
                this.router.navigate(['unautorized']);
            }
            else {
                this.snackBar.open(`${e.error}`, 'i got it', {
                    verticalPosition: 'top',
                });
            }
            console.dir(e);
        });
    }
}
GetCouponsByLimitPriceComponent.ɵfac = function GetCouponsByLimitPriceComponent_Factory(t) { return new (t || GetCouponsByLimitPriceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_company_service__WEBPACK_IMPORTED_MODULE_1__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
GetCouponsByLimitPriceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GetCouponsByLimitPriceComponent, selectors: [["app-get-coupons-by-limit-price"]], decls: 17, vars: 4, consts: [[1, "form-div"], ["formInfo", "ngForm"], [1, "header"], [1, "card"], ["class", "vi", "src", "/assets/validImage.png", "alt", "", 4, "ngIf"], ["name", "price", "type", "number", "placeholder", "Insert Max Price", "required", "", 3, "ngModel", "ngModelChange"], ["priceInfo", "ngModel"], ["type", "submit", "value", "Get By Limit Price", 3, "disabled", "click"], ["class", "container", 4, "ngIf"], ["src", "/assets/validImage.png", "alt", "", 1, "vi"], [1, "container"], ["loading", ""], [4, "ngFor", "ngForOf"], ["src", "/assets/LoadingGif.gif", "alt", "loading"], [1, "ID-row"], [4, "ngIf"], [3, "href"], ["src", "/assets/coupon-link.png", "alt", "image-link"]], template: function GetCouponsByLimitPriceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Which Coupon's Limit Price ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " would you like ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GetCouponsByLimitPriceComponent_img_10_Template, 1, 0, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GetCouponsByLimitPriceComponent_Template_input_ngModelChange_11_listener($event) { return ctx.maxPrice = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GetCouponsByLimitPriceComponent_Template_button_click_14_listener() { return ctx.getCouponsByLimitPrice(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Check ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, GetCouponsByLimitPriceComponent_section_16_Template, 33, 1, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.maxPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.form.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.coupons);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["*[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n  background-color: #378b29;\r\n  background-image: linear-gradient(315deg, #378b29 0%, #74d680 74%);\r\n\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  min-height: 80vh;\r\n  min-width: 150vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  text-align: center;\r\n  overflow-y: auto;\r\n}\r\n\r\n.header[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  text-align: center;\r\n\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  font-weight: bold;\r\n  color: rgb(221, 221, 221);\r\n  font-size: 35px;\r\n}\r\n\r\n.form-div[_ngcontent-%COMP%] {\r\n  background-color: #000000;\r\n  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);\r\n  \r\n  position: relative;\r\n  height: 30%;\r\n  width: 50%;\r\n  padding: 10px;\r\n  margin-top: 50px;\r\n  box-sizing: content-box;\r\n\r\n  border-radius: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  flex: 2;\r\n  position: relative;\r\n  transform: translateX(-8%);\r\n  min-height: 20vh;\r\n  margin-top: 40px;\r\n  margin-bottom: 40px;\r\n  margin-left: 15%;\r\n  padding-bottom: 5%;\r\n\r\n  width: 85%;\r\n  padding: 10px;\r\n  \r\n  box-sizing: content-box;\r\n  justify-content: space-around;\r\n  display: block;\r\n  border-radius: 2rem;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.5),\r\n    rgba(255, 255, 255, 0.1)\r\n  );\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  transform: translateX(20%);\r\n  height: 65px;\r\n  width: 100px;\r\n  min-width: 60%;\r\n  display: flex;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.8),\r\n    rgba(255, 255, 255, 0.5)\r\n  );\r\n  border-radius: 1rem;\r\n  margin: 1.8rem;\r\n  padding: 0.5rem;\r\n  justify-content: space-between;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  text-align: center;\r\n\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  font-weight: bold;\r\n  background-color: rgb(221, 221, 221);\r\n  font-size: 35px;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  background-color: #485461;\r\n  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);\r\n  padding: 5px;\r\n  line-height: 2.3rem;\r\n  margin: auto;\r\n  width: 85%;\r\n\r\n  text-align: center;\r\n  border-radius: 0.7rem;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n  color: rgb(221, 221, 221);\r\n  border: solid black 1px;\r\n  border-radius: 0.4rem;\r\n  font-size: 18px;\r\n  \r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n  background-color: #438b31b9;\r\n  border-radius: 0.3rem;\r\n  font-size: 22px;\r\n}\r\n\r\n.ID-row[_ngcontent-%COMP%] {\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  font-style: italic;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n}\r\n\r\n.vi[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin-top: 0.2rem;\r\n  height: 60px;\r\n  width: 60px;\r\n  transform: translate(-5px, -10px);\r\n}\r\n\r\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background-color: #525a50b9;\r\n  color: rgb(221, 221, 221);\r\n  font-weight: bolder;\r\n  font-size: 19px;\r\n\r\n  padding: 2px;\r\n  height: 100%;\r\n  width: 100%;\r\n  position: relative;\r\n\r\n  cursor: pointer;\r\n  border-radius: 0.7rem;\r\n  \r\n  \r\n}\r\n\r\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background-color: #fff293;\r\n  background-image: linear-gradient(315deg, #fff293 0%, #ffe884 74%);\r\n  border-radius: 1rem;\r\n  text-align: center;\r\n  font-size: 22px;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\r\n  font-size: 22px;\r\n  padding-inline-start: 30px;\r\n}\r\n\r\nspan[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  font-weight: bold;\r\n  letter-spacing: 1px;\r\n  transform: translateY(10px);\r\n}\r\n\r\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background-color: #57854bb9;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin: auto;\r\n  width: 50px;\r\n}\r\n\r\n[_nghost-%COMP%] {\r\n  display: block;\r\n  height: 100%;\r\n  overflow: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldC1jb3Vwb25zLWJ5LWxpbWl0LXByaWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtFQUFrRTs7RUFFbEUscURBQXFEO0VBQ3JELGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCOztFQUVsQixxREFBcUQ7RUFDckQsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGtFQUFrRTtFQUNsRSwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQix1QkFBdUI7O0VBRXZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsT0FBTztFQUNQLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjs7RUFFbEIsVUFBVTtFQUNWLGFBQWE7RUFDYjtnQ0FDOEI7RUFDOUIsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3QixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25COzs7O0dBSUM7QUFDSDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0VBQ2QsYUFBYTtFQUNiOzs7O0dBSUM7RUFDRCxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQWU7RUFDZiw4QkFBOEI7QUFDaEM7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCOztFQUVsQixxREFBcUQ7RUFDckQsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQyxlQUFlO0FBQ2pCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixrRUFBa0U7RUFDbEUsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osVUFBVTs7RUFFVixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLHdFQUF3RTtBQUMxRTs7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGdEQUFnRDtFQUNoRCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUNBQWlDO0FBQ25DOztBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZUFBZTs7RUFFZixZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7O0VBRWxCLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0VBQWtFO0VBQ2xFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7QUFDNUI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIscURBQXFEO0VBQ3JELGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCOztBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGNBQWM7QUFDaEIiLCJmaWxlIjoiZ2V0LWNvdXBvbnMtYnktbGltaXQtcHJpY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5tYWluIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc4YjI5O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICMzNzhiMjkgMCUsICM3NGQ2ODAgNzQlKTtcclxuXHJcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcclxuICBtaW4taGVpZ2h0OiA4MHZoO1xyXG4gIG1pbi13aWR0aDogMTUwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuLmhlYWRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxufVxyXG4uZm9ybS1kaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzAwMDAwMCAwJSwgIzQxNDE0MSA3NCUpO1xyXG4gIC8qIGNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7ICovXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMzAlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG5cclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgZmxleDogMjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04JSk7XHJcbiAgbWluLWhlaWdodDogMjB2aDtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcblxyXG4gIHdpZHRoOiA4NSU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICAvKiBtaW4td2lkdGg6IDgwMHB4O1xyXG4gICAgICBtaW4taGVpZ2h0OiBtaW4tY29udGVudDsgKi9cclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIHJpZ2h0IGJvdHRvbSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKVxyXG4gICk7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwJSk7XHJcbiAgaGVpZ2h0OiA2NXB4O1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBtaW4td2lkdGg6IDYwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIHJpZ2h0IGJvdHRvbSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KVxyXG4gICk7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBtYXJnaW46IDEuOHJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbmgxIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbn1cclxudGFibGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDg1NDYxO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM0ODU0NjEgMCUsICMyODMxM2IgNzQlKTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIuM3JlbTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDg1JTtcclxuXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcclxufVxyXG5cclxudGQge1xyXG4gIGNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbiAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjZmNlMDQzIDAlLCAjZmI3YmEyIDc0JSk7ICovXHJcbn1cclxudGgge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzhiMzFiOTtcclxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcbi5JRC1yb3cge1xyXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi52aSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IDAuMnJlbTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwgLTEwcHgpO1xyXG59XHJcbmZvcm0gYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI1YTUwYjk7XHJcbiAgY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxuXHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAwLjdyZW07XHJcbiAgLyogb3V0bGluZTogbm9uZTsgKi9cclxuICAvKiB0cmFuc2l0aW9uOiAwLjNzOyAqL1xyXG59XHJcbmZvcm0gaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYyOTM7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2ZmZjI5MyAwJSwgI2ZmZTg4NCA3NCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5mb3JtIG9wdGlvbiB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAzMHB4O1xyXG59XHJcbnNwYW4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xyXG59XHJcbmZvcm0gYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTc4NTRiYjk7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "QFf0":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/company/apis/get-coupons-by-category/get-coupons-by-category.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: GetCouponsByCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCouponsByCategoryComponent", function() { return GetCouponsByCategoryComponent; });
/* harmony import */ var src_app_models_category_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/category.model */ "iAog");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/company.service */ "ZtWP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function GetCouponsByCategoryComponent_img_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 10);
} }
function GetCouponsByCategoryComponent_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", category_r5, " ");
} }
function GetCouponsByCategoryComponent_section_17_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 13);
} }
function GetCouponsByCategoryComponent_section_17_tr_32_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r9.company.id);
} }
function GetCouponsByCategoryComponent_section_17_tr_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, GetCouponsByCategoryComponent_section_17_tr_32_td_3_Template, 2, 1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r9.couponId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", c_r9.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r9.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r9.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r9.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r9.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r9.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r9.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r9.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", c_r9.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function GetCouponsByCategoryComponent_section_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, GetCouponsByCategoryComponent_section_17_ng_template_2_Template, 1, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Coupons By Category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Company id");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Start-Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "End-Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, GetCouponsByCategoryComponent_section_17_tr_32_Template, 21, 10, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.coupons);
} }
class GetCouponsByCategoryComponent {
    constructor(companyService, router, snackBar) {
        this.companyService = companyService;
        this.router = router;
        this.snackBar = snackBar;
        this.categories = [
            src_app_models_category_model__WEBPACK_IMPORTED_MODULE_0__["Category"].Electricity,
            src_app_models_category_model__WEBPACK_IMPORTED_MODULE_0__["Category"].Food,
            src_app_models_category_model__WEBPACK_IMPORTED_MODULE_0__["Category"].Restaurant,
            src_app_models_category_model__WEBPACK_IMPORTED_MODULE_0__["Category"].Sport,
            src_app_models_category_model__WEBPACK_IMPORTED_MODULE_0__["Category"].Vacation,
        ];
    }
    ngOnInit() { }
    getCouponsByCategory() {
        console.log(`
    category: ${this.category}
    `);
        this.companyService.getCouponsByCategory(this.category).subscribe((arrOfCoupons) => {
            if (arrOfCoupons.length == 0) {
                this.snackBar.open(`No coupons to show :(`, 'i got it', {
                    verticalPosition: 'top',
                    duration: 4000,
                });
            }
            this.coupons = arrOfCoupons;
        }, (e) => {
            if (e.status === 401) {
                console.log(401);
                this.router.navigate(['unautorized']);
            }
            else {
                this.snackBar.open(`${e.error}`, 'i got it', {
                    verticalPosition: 'top',
                });
            }
            console.dir(e);
        });
    }
}
GetCouponsByCategoryComponent.ɵfac = function GetCouponsByCategoryComponent_Factory(t) { return new (t || GetCouponsByCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
GetCouponsByCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GetCouponsByCategoryComponent, selectors: [["app-get-coupons-by-category"]], decls: 18, vars: 5, consts: [[1, "form-div"], ["formInfo", "ngForm"], [1, "header"], [1, "card"], ["class", "vi", "src", "/assets/validImage.png", "alt", "", 4, "ngIf"], ["name", "categoryType", "required", "", 3, "ngModel", "ngModelChange"], ["categoryInfo", "ngModel"], [4, "ngFor", "ngForOf"], ["type", "submit", "value", "Get By Category", 3, "disabled", "click"], ["class", "container", 4, "ngIf"], ["src", "/assets/validImage.png", "alt", "", 1, "vi"], [1, "container"], ["loading", ""], ["src", "/assets/LoadingGif.gif", "alt", "loading"], [1, "ID-row"], [4, "ngIf"], [3, "href"], ["src", "/assets/coupon-link.png", "alt", "image-link"]], template: function GetCouponsByCategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Which Coupon's Category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " would you like ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, GetCouponsByCategoryComponent_img_10_Template, 1, 0, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "select", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function GetCouponsByCategoryComponent_Template_select_ngModelChange_11_listener($event) { return ctx.category = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, GetCouponsByCategoryComponent_option_13_Template, 2, 1, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GetCouponsByCategoryComponent_Template_button_click_15_listener() { return ctx.getCouponsByCategory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Check ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, GetCouponsByCategoryComponent_section_17_Template, 33, 1, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r2.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r0.form.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.coupons);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_z"]], styles: ["*[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n  background-color: #378b29;\r\n  background-image: linear-gradient(315deg, #378b29 0%, #74d680 74%);\r\n\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  min-height: 80vh;\r\n  min-width: 150vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  text-align: center;\r\n  overflow-y: auto;\r\n}\r\n\r\n.header[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  text-align: center;\r\n\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  font-weight: bold;\r\n  color: rgb(221, 221, 221);\r\n  font-size: 35px;\r\n}\r\n\r\n.form-div[_ngcontent-%COMP%] {\r\n  background-color: #000000;\r\n  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);\r\n  \r\n  position: relative;\r\n  height: 30%;\r\n  width: 50%;\r\n  padding: 10px;\r\n  margin-top: 50px;\r\n  box-sizing: content-box;\r\n\r\n  border-radius: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  flex: 2;\r\n  position: relative;\r\n  transform: translateX(-8%);\r\n  min-height: 20vh;\r\n  margin-top: 40px;\r\n  margin-bottom: 40px;\r\n  margin-left: 15%;\r\n  padding-bottom: 5%;\r\n\r\n  width: 85%;\r\n  padding: 10px;\r\n  \r\n  box-sizing: content-box;\r\n  justify-content: space-around;\r\n  display: block;\r\n  border-radius: 2rem;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.5),\r\n    rgba(255, 255, 255, 0.1)\r\n  );\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  transform: translateX(20%);\r\n  height: 65px;\r\n  width: 100px;\r\n  min-width: 60%;\r\n  display: flex;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.8),\r\n    rgba(255, 255, 255, 0.5)\r\n  );\r\n  border-radius: 1rem;\r\n  margin: 1.8rem;\r\n  padding: 0.5rem;\r\n  justify-content: space-between;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  text-align: center;\r\n\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  font-weight: bold;\r\n  background-color: rgb(221, 221, 221);\r\n  font-size: 35px;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  background-color: #485461;\r\n  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);\r\n  padding: 5px;\r\n  line-height: 2.3rem;\r\n  margin: auto;\r\n  width: 85%;\r\n\r\n  text-align: center;\r\n  border-radius: 0.7rem;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n  color: rgb(221, 221, 221);\r\n  border: solid black 1px;\r\n  border-radius: 0.4rem;\r\n  font-size: 18px;\r\n  \r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n  background-color: #438b31b9;\r\n  border-radius: 0.3rem;\r\n  font-size: 22px;\r\n}\r\n\r\n.ID-row[_ngcontent-%COMP%] {\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  font-style: italic;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n}\r\n\r\n.vi[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin-top: 0.2rem;\r\n  height: 60px;\r\n  width: 60px;\r\n  transform: translate(-5px, -10px);\r\n}\r\n\r\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background-color: #525a50b9;\r\n  color: rgb(221, 221, 221);\r\n  font-weight: bolder;\r\n  font-size: 19px;\r\n\r\n  padding: 2px;\r\n  height: 100%;\r\n  width: 100%;\r\n  position: relative;\r\n\r\n  cursor: pointer;\r\n  border-radius: 0.7rem;\r\n  \r\n  \r\n}\r\n\r\nform[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background-color: #fff293;\r\n  background-image: linear-gradient(315deg, #fff293 0%, #ffe884 74%);\r\n  border-radius: 1rem;\r\n  text-align: center;\r\n  font-size: 22px;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\r\n  font-size: 22px;\r\n  padding-inline-start: 30px;\r\n}\r\n\r\nspan[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  font-weight: bold;\r\n  letter-spacing: 1px;\r\n  transform: translateY(10px);\r\n}\r\n\r\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background-color: #57854bb9;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin: auto;\r\n  width: 50px;\r\n}\r\n\r\n[_nghost-%COMP%] {\r\n  display: block;\r\n  height: 100%;\r\n  overflow: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldC1jb3Vwb25zLWJ5LWNhdGVnb3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtFQUFrRTs7RUFFbEUscURBQXFEO0VBQ3JELGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCOztFQUVsQixxREFBcUQ7RUFDckQsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGtFQUFrRTtFQUNsRSwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQix1QkFBdUI7O0VBRXZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsT0FBTztFQUNQLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjs7RUFFbEIsVUFBVTtFQUNWLGFBQWE7RUFDYjs4QkFDNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3QixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25COzs7O0dBSUM7QUFDSDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0VBQ2QsYUFBYTtFQUNiOzs7O0dBSUM7RUFDRCxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQWU7RUFDZiw4QkFBOEI7QUFDaEM7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCOztFQUVsQixxREFBcUQ7RUFDckQsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQyxlQUFlO0FBQ2pCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixrRUFBa0U7RUFDbEUsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osVUFBVTs7RUFFVixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLHdFQUF3RTtBQUMxRTs7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGdEQUFnRDtFQUNoRCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUNBQWlDO0FBQ25DOztBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZUFBZTs7RUFFZixZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7O0VBRWxCLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0VBQWtFO0VBQ2xFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7QUFDNUI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIscURBQXFEO0VBQ3JELGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCOztBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGNBQWM7QUFDaEIiLCJmaWxlIjoiZ2V0LWNvdXBvbnMtYnktY2F0ZWdvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5tYWluIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc4YjI5O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICMzNzhiMjkgMCUsICM3NGQ2ODAgNzQlKTtcclxuXHJcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcclxuICBtaW4taGVpZ2h0OiA4MHZoO1xyXG4gIG1pbi13aWR0aDogMTUwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuLmhlYWRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxufVxyXG4uZm9ybS1kaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzAwMDAwMCAwJSwgIzQxNDE0MSA3NCUpO1xyXG4gIC8qIGNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7ICovXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMzAlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG5cclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgZmxleDogMjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04JSk7XHJcbiAgbWluLWhlaWdodDogMjB2aDtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcblxyXG4gIHdpZHRoOiA4NSU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICAvKiBtaW4td2lkdGg6IDgwMHB4O1xyXG4gICAgbWluLWhlaWdodDogbWluLWNvbnRlbnQ7ICovXHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byByaWdodCBib3R0b20sXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSlcclxuICApO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMCUpO1xyXG4gIGhlaWdodDogNjVweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgbWluLXdpZHRoOiA2MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byByaWdodCBib3R0b20sXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCksXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSlcclxuICApO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgbWFyZ2luOiAxLjhyZW07XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5oMSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG59XHJcbnRhYmxlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4NTQ2MTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjNDg1NDYxIDAlLCAjMjgzMTNiIDc0JSk7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyLjNyZW07XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiA4NSU7XHJcblxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAwLjdyZW07XHJcbn1cclxuXHJcbnRkIHtcclxuICBjb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG4gIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2ZjZTA0MyAwJSwgI2ZiN2JhMiA3NCUpOyAqL1xyXG59XHJcbnRoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM4YjMxYjk7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG4uSUQtcm93IHtcclxuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4udmkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wOiAwLjJyZW07XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIC0xMHB4KTtcclxufVxyXG5mb3JtIGJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyNWE1MGI5O1xyXG4gIGNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBmb250LXNpemU6IDE5cHg7XHJcblxyXG4gIHBhZGRpbmc6IDJweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xyXG4gIC8qIG91dGxpbmU6IG5vbmU7ICovXHJcbiAgLyogdHJhbnNpdGlvbjogMC4zczsgKi9cclxufVxyXG5mb3JtIHNlbGVjdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjI5MztcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjZmZmMjkzIDAlLCAjZmZlODg0IDc0JSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcbmZvcm0gb3B0aW9uIHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDMwcHg7XHJcbn1cclxuc3BhbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XHJcbn1cclxuZm9ybSBidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1Nzg1NGJiOTtcclxufVxyXG5cclxuaW1nIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "RVg/":
/*!************************************************************************************!*\
  !*** ./src/app/components/admin/apis/get-one-company/get-one-company.component.ts ***!
  \************************************************************************************/
/*! exports provided: GetOneCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOneCompanyComponent", function() { return GetOneCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/admin.service */ "AJ6+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function GetOneCompanyComponent_img_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
} }
function GetOneCompanyComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span");
} }
function GetOneCompanyComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12);
} }
function GetOneCompanyComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Results ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.company.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.company.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.company.email);
} }
class GetOneCompanyComponent {
    constructor(adminService, router, snackBar) {
        this.adminService = adminService;
        this.router = router;
        this.snackBar = snackBar;
    }
    ngOnInit() {
        this.isSubmitClicked = false;
    }
    getOneCompany() {
        console.log(`
    ID: ${this.company_id}
    `);
        this.adminService.getOneCompany(this.company_id).subscribe((companyFromDB) => {
            this.company = companyFromDB;
        }, (e) => {
            if (e.status === 401) {
                console.log(401);
                this.router.navigate(['unautorized']);
            }
            else {
                this.snackBar.open(`${e.error}`, 'i got it', {
                    verticalPosition: 'top',
                });
            }
            console.dir(e);
        });
    }
}
GetOneCompanyComponent.ɵfac = function GetOneCompanyComponent_Factory(t) { return new (t || GetOneCompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
GetOneCompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GetOneCompanyComponent, selectors: [["app-get-one-company"]], decls: 21, vars: 5, consts: [[1, "form-div"], ["formInfo", "ngForm"], [1, "header"], [1, "card"], ["class", "vi", "src", "/assets/validImage.png", "alt", "", 4, "ngIf"], ["name", "company id", "type", "number", "placeholder", "", "required", "", 3, "ngModel", "ngModelChange"], ["idInfo", "ngModel"], ["type", "submit", "value", "Get One Company", 3, "disabled", "click"], [4, "ngIf", "ngIfThen"], ["loading", ""], ["resultExists", ""], ["src", "/assets/validImage.png", "alt", "", 1, "vi"], ["src", "/assets/LoadingGif.gif", "alt", "loading"], [1, "container"], [1, "ID-row"]], template: function GetOneCompanyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Which Company ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " would you like to search for ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GetOneCompanyComponent_img_10_Template, 1, 0, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GetOneCompanyComponent_Template_input_ngModelChange_11_listener($event) { return ctx.company_id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GetOneCompanyComponent_Template_button_click_14_listener() { return ctx.getOneCompany(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Check ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, GetOneCompanyComponent_span_16_Template, 1, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, GetOneCompanyComponent_ng_template_17_Template, 1, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, GetOneCompanyComponent_ng_template_19_Template, 23, 3, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.company_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.form.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.company)("ngIfThen", _r6);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["*[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n  background-image: linear-gradient(315deg, #fce043 0%, #fb7ba2 74%);\r\n\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  min-height: 80vh;\r\n  min-width: 150vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  text-align: center;\r\n  overflow-y: auto;\r\n}\r\n\r\n.header[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  text-align: center;\r\n\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  font-weight: bold;\r\n  color: rgb(221, 221, 221);\r\n  font-size: 35px;\r\n}\r\n\r\n.form-div[_ngcontent-%COMP%] {\r\n  background-color: #000000;\r\n  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);\r\n  \r\n  position: relative;\r\n  height: 30%;\r\n  width: 50%;\r\n  padding: 10px;\r\n  margin-top: 50px;\r\n  box-sizing: content-box;\r\n\r\n  border-radius: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  flex: 2;\r\n  position: relative;\r\n  transform: translateX(-8%);\r\n  min-height: 20vh;\r\n  margin-top: 40px;\r\n  margin-bottom: 40px;\r\n  margin-left: 15%;\r\n  padding-bottom: 5%;\r\n\r\n  width: 85%;\r\n  padding: 10px;\r\n  \r\n  box-sizing: content-box;\r\n  justify-content: space-around;\r\n  display: block;\r\n  border-radius: 2rem;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.5),\r\n    rgba(255, 255, 255, 0.1)\r\n  );\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  transform: translateX(20%);\r\n  height: 65px;\r\n  width: 100px;\r\n  min-width: 60%;\r\n  display: flex;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.8),\r\n    rgba(255, 255, 255, 0.5)\r\n  );\r\n  border-radius: 1rem;\r\n  margin: 1.8rem;\r\n  padding: 0.5rem;\r\n  justify-content: space-between;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  text-align: center;\r\n\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  font-weight: bold;\r\n  background-color: rgb(221, 221, 221);\r\n  font-size: 35px;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  background-color: #485461;\r\n  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);\r\n  padding: 5px;\r\n  line-height: 2.3rem;\r\n  margin: auto;\r\n  width: 85%;\r\n\r\n  text-align: center;\r\n  border-radius: 0.7rem;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n  color: rgb(221, 221, 221);\r\n  border: solid black 1px;\r\n  border-radius: 0.4rem;\r\n  font-size: 18px;\r\n  \r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n  background-color: #438b31b9;\r\n  border-radius: 0.3rem;\r\n  font-size: 22px;\r\n}\r\n\r\n.ID-row[_ngcontent-%COMP%] {\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  font-style: italic;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n}\r\n\r\n.vi[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin-top: 0.2rem;\r\n  height: 60px;\r\n  width: 60px;\r\n  transform: translate(-5px, -10px);\r\n}\r\n\r\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background-color: #525a50b9;\r\n  color: rgb(221, 221, 221);\r\n  font-weight: bolder;\r\n  font-size: 19px;\r\n\r\n  padding: 2px;\r\n  height: 100%;\r\n  width: 100%;\r\n  position: relative;\r\n\r\n  cursor: pointer;\r\n  border-radius: 0.7rem;\r\n  \r\n  \r\n}\r\n\r\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background-color: #fff293;\r\n  background-image: linear-gradient(315deg, #fff293 0%, #ffe884 74%);\r\n  border-radius: 1rem;\r\n  text-align: center;\r\n  font-size: 22px;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\r\n  font-size: 22px;\r\n  padding-inline-start: 30px;\r\n}\r\n\r\nspan[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  font-weight: bold;\r\n  letter-spacing: 1px;\r\n  transform: translateY(10px);\r\n}\r\n\r\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background-color: #57854bb9;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin: auto;\r\n  width: 50px;\r\n}\r\n\r\n[_nghost-%COMP%] {\r\n  display: block;\r\n  height: 100%;\r\n  overflow: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldC1vbmUtY29tcGFueS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtFQUFrRTs7RUFFbEUscURBQXFEO0VBQ3JELGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCOztFQUVsQixxREFBcUQ7RUFDckQsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGtFQUFrRTtFQUNsRSwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQix1QkFBdUI7O0VBRXZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsT0FBTztFQUNQLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjs7RUFFbEIsVUFBVTtFQUNWLGFBQWE7RUFDYjtrQ0FDZ0M7RUFDaEMsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3QixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25COzs7O0dBSUM7QUFDSDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0VBQ2QsYUFBYTtFQUNiOzs7O0dBSUM7RUFDRCxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQWU7RUFDZiw4QkFBOEI7QUFDaEM7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCOztFQUVsQixxREFBcUQ7RUFDckQsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQyxlQUFlO0FBQ2pCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixrRUFBa0U7RUFDbEUsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osVUFBVTs7RUFFVixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLHdFQUF3RTtBQUMxRTs7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGdEQUFnRDtFQUNoRCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUNBQWlDO0FBQ25DOztBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZUFBZTs7RUFFZixZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7O0VBRWxCLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0VBQWtFO0VBQ2xFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7QUFDNUI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIscURBQXFEO0VBQ3JELGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCOztBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGNBQWM7QUFDaEIiLCJmaWxlIjoiZ2V0LW9uZS1jb21wYW55LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2ZjZTA0MyAwJSwgI2ZiN2JhMiA3NCUpO1xyXG5cclxuICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG4gIG1pbi1oZWlnaHQ6IDgwdmg7XHJcbiAgbWluLXdpZHRoOiAxNTB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG4uaGVhZGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG59XHJcbi5mb3JtLWRpdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMDAwMDAwIDAlLCAjNDE0MTQxIDc0JSk7XHJcbiAgLyogY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTsgKi9cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAzMCU7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBmbGV4OiAyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTglKTtcclxuICBtaW4taGVpZ2h0OiAyMHZoO1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1JTtcclxuXHJcbiAgd2lkdGg6IDg1JTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIC8qIG1pbi13aWR0aDogODAwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogbWluLWNvbnRlbnQ7ICovXHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byByaWdodCBib3R0b20sXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSlcclxuICApO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMCUpO1xyXG4gIGhlaWdodDogNjVweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgbWluLXdpZHRoOiA2MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byByaWdodCBib3R0b20sXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCksXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSlcclxuICApO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgbWFyZ2luOiAxLjhyZW07XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5oMSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG59XHJcbnRhYmxlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4NTQ2MTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjNDg1NDYxIDAlLCAjMjgzMTNiIDc0JSk7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyLjNyZW07XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiA4NSU7XHJcblxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAwLjdyZW07XHJcbn1cclxuXHJcbnRkIHtcclxuICBjb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG4gIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2ZjZTA0MyAwJSwgI2ZiN2JhMiA3NCUpOyAqL1xyXG59XHJcbnRoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM4YjMxYjk7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG4uSUQtcm93IHtcclxuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4udmkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wOiAwLjJyZW07XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIC0xMHB4KTtcclxufVxyXG5mb3JtIGJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyNWE1MGI5O1xyXG4gIGNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBmb250LXNpemU6IDE5cHg7XHJcblxyXG4gIHBhZGRpbmc6IDJweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xyXG4gIC8qIG91dGxpbmU6IG5vbmU7ICovXHJcbiAgLyogdHJhbnNpdGlvbjogMC4zczsgKi9cclxufVxyXG5mb3JtIGlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMjkzO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNmZmYyOTMgMCUsICNmZmU4ODQgNzQlKTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuZm9ybSBvcHRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBwYWRkaW5nLWlubGluZS1zdGFydDogMzBweDtcclxufVxyXG5zcGFuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcclxufVxyXG5mb3JtIGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU3ODU0YmI5O1xyXG59XHJcblxyXG5pbWcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogNTBweDtcclxufVxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Rx2m":
/*!****************************************************************************!*\
  !*** ./src/app/components/admin/apis/add-company/add-company.component.ts ***!
  \****************************************************************************/
/*! exports provided: AddCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCompanyComponent", function() { return AddCompanyComponent; });
/* harmony import */ var src_app_models_company_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/company.model */ "j+be");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ "AJ6+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function AddCompanyComponent_img_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 27);
} }
function AddCompanyComponent_img_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 27);
} }
function AddCompanyComponent_img_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 27);
} }
class AddCompanyComponent {
    constructor(adminService, router, snackBar) {
        this.adminService = adminService;
        this.router = router;
        this.snackBar = snackBar;
        this.company = new src_app_models_company_model__WEBPACK_IMPORTED_MODULE_0__["Company"]();
    }
    ngOnInit() { }
    addCompany() {
        console.log(`company name: ${this.company.name}`);
        this.adminService.addCompany(this.company).subscribe((addedCompany) => {
            this.snackBar.open(`You have just added a new company with ID: ${addedCompany.id} Successfully✅`, 'i got it', {
                verticalPosition: 'top',
            });
        }, (e) => {
            if (e.status === 401) {
                console.log(401);
                this.router.navigate(['unautorized']);
            }
            else {
                this.snackBar.open(`${e.error}`, 'i got it', {
                    verticalPosition: 'top',
                });
            }
            console.dir(e);
        });
    }
}
AddCompanyComponent.ɵfac = function AddCompanyComponent_Factory(t) { return new (t || AddCompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
AddCompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddCompanyComponent, selectors: [["app-add-company"]], decls: 48, vars: 7, consts: [[1, "glass"], [1, "dashboard"], [1, "user"], ["src", "/assets/adminImage2.png", "alt", "", 1, "admin-image"], [1, "member"], [1, "links"], [1, "link"], ["routerLink", "../get-all-companies", "routerLinkActive", "active-link", 1, "customers-list"], [1, "form-div"], [1, "validation"], ["formInfo", "ngForm"], [1, "status"], [1, "cards"], [1, "card"], ["class", "vi", "src", "/assets/validImage.png", "alt", "", 4, "ngIf"], ["for", "name"], ["name", "name", "type", "text", "placeholder", "Insert Name...", "required", "", 3, "ngModel", "ngModelChange"], ["nameInfo", "ngModel"], ["for", "email"], ["name", "email", "type", "text", "placeholder", "Insert Email...", "pattern", "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$", "required", "", 3, "ngModel", "ngModelChange"], ["emailInfo", "ngModel"], ["for", "password"], ["name", "password", "type", "password", "placeholder", "Choose Password", "required", "", 3, "ngModel", "ngModelChange"], ["passwordInfo", "ngModel"], ["type", "submit", "value", "Add new Company", 3, "disabled", "click"], [1, "circle1"], [1, "circle2"], ["src", "/assets/validImage.png", "alt", "", 1, "vi"]], template: function AddCompanyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Welcome Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Add A New Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " To ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Companies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "form", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Add Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, AddCompanyComponent_img_26_Template, 1, 0, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_Template_input_ngModelChange_29_listener($event) { return ctx.company.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, AddCompanyComponent_img_32_Template, 1, 0, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_Template_input_ngModelChange_35_listener($event) { return ctx.company.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, AddCompanyComponent_img_38_Template, 1, 0, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_Template_input_ngModelChange_41_listener($event) { return ctx.company.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddCompanyComponent_Template_button_click_44_listener() { return ctx.addCompany(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " Add new Company ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](30);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](36);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r2.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.company.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r4.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.company.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r6.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.company.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r0.form.invalid);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["PatternValidator"]], styles: ["*[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  font-size: 2rem;\r\n  opacity: 0.8;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\r\n  \r\n  font-weight: 600;\r\n  opacity: 0.8;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n  background-image: linear-gradient(315deg, #fce043 0%, #fb7ba2 74%);\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  min-height: 80vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.glass[_ngcontent-%COMP%] {\r\n  background: white;\r\n  max-height: 74vh;\r\n  min-width: 550px;\r\n  width: 65%;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.5),\r\n    rgba(255, 255, 255, 0.1)\r\n  );\r\n\r\n  border-radius: 2rem;\r\n  z-index: 2;\r\n  -webkit-backdrop-filter: blur(2rem);\r\n          backdrop-filter: blur(2rem);\r\n  display: flex;\r\n}\r\n\r\n.circle1[_ngcontent-%COMP%], .circle2[_ngcontent-%COMP%] {\r\n  background: white;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.01),\r\n    rgba(255, 255, 255, 2)\r\n  );\r\n  height: 13rem;\r\n  width: 13rem;\r\n  position: absolute;\r\n  border-radius: 50%;\r\n}\r\n\r\n.circle1[_ngcontent-%COMP%] {\r\n  top: 13%;\r\n  right: 12%;\r\n  z-index: 0.2;\r\n}\r\n\r\n.circle2[_ngcontent-%COMP%] {\r\n  bottom: 9%;\r\n  left: 12%;\r\n  z-index: 0.2;\r\n}\r\n\r\n.member[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.dashboard[_ngcontent-%COMP%] {\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  min-height: 74vh;\r\n  \r\n  width: 30%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  text-align: center;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.7),\r\n    rgba(255, 255, 255, 0.3)\r\n  );\r\n  border-top-left-radius: 2rem;\r\n  border-bottom-left-radius: 2rem;\r\n}\r\n\r\n.link[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin: 1rem 0rem;\r\n  padding: 1rem 5rem;\r\n  align-items: center;\r\n}\r\n\r\n.link[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  padding: 0rem 2rem;\r\n}\r\n\r\n.form-div[_ngcontent-%COMP%] {\r\n  flex: 2;\r\n}\r\n\r\n.pro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  justify-content: center;\r\n  text-align: center;\r\n\r\n  color: white;\r\n}\r\n\r\n.admin-image[_ngcontent-%COMP%] {\r\n  height: 80px;\r\n  width: 80px;\r\n  border-radius: 40rem;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.status[_ngcontent-%COMP%] {\r\n  background: linear-gradient(315deg, #000000 0%, #414141 74%);\r\n  color: rgb(221, 221, 221);\r\n  text-align: center;\r\n  height: 100px;\r\n  width: 70%;\r\n  z-index: 2;\r\n  padding-top: 30px;\r\n  position: absolute;\r\n  transform: translate(1px, -125px);\r\n}\r\n\r\n.games[_ngcontent-%COMP%] {\r\n  margin: 0.5rem;\r\n\r\n  box-sizing: content-box;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  transform: translateY(-20%);\r\n  transform: translateX(10%);\r\n  height: 65px;\r\n  width: 80%;\r\n  display: flex;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.8),\r\n    rgba(255, 255, 255, 0.5)\r\n  );\r\n  border-radius: 1rem;\r\n  margin: 1.8rem;\r\n  padding: 0.5rem;\r\n  box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.5);\r\n  justify-content: space-between;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  font-size: 17px;\r\n}\r\n\r\n.validation[_ngcontent-%COMP%] {\r\n  justify-content: flex-start;\r\n\r\n  width: 5%;\r\n  flex-direction: column;\r\n  margin: 3.4rem 0rem;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.vi[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin-top: 0.2rem;\r\n  height: 60px;\r\n  width: 60px;\r\n  transform: translate(-5px, -10px);\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  margin-top: 8px;\r\n  height: 35px;\r\n  border-radius: 0.5rem;\r\n  width: 70%;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\n.customers-list[_ngcontent-%COMP%] {\r\n  height: 80px;\r\n  width: 60%;\r\n  text-align: center;\r\n  border-radius: 1.5rem;\r\n  color: rgb(221, 221, 221);\r\n  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);\r\n  font-size: 15px;\r\n  cursor: pointer;\r\n}\r\n\r\n.customers-list[_ngcontent-%COMP%]:hover {\r\n  width: 80%;\r\n  transform: translate(2px, 3px);\r\n\r\n  transition: all 0.3s ease-out;\r\n}\r\n\r\n.form-div[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background-color: #525a50b9;\r\n  color: rgb(221, 221, 221);\r\n  font-weight: bolder;\r\n  font-size: 19px;\r\n\r\n  padding: 2px;\r\n  height: 100%;\r\n  width: 100%;\r\n  position: relative;\r\n\r\n  cursor: pointer;\r\n  border-radius: 0.7rem;\r\n  \r\n  transition: 0.3s;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background-color: #259409b9;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jb21wYW55LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUNBOztFQUVFLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0VBQWtFO0VBQ2xFLHFEQUFxRDtFQUNyRCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Y7Ozs7R0FJQzs7RUFFRCxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IsYUFBYTtBQUNmOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQjs7OztHQUlDO0VBQ0QsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsUUFBUTtFQUNSLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzRUFBc0U7RUFDdEUsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsMkJBQW1CO0VBQW5CLHdCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQjs7OztHQUlDO0VBQ0QsNEJBQTRCO0VBQzVCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7O0VBRWxCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsb0JBQW9CO0FBQ3RCOztBQUVBLGlCQUFpQjs7QUFDakIsd0NBQXdDOztBQUN4Qyx3Q0FBd0M7O0FBRXhDO0VBQ0UsNERBQTREO0VBQzVELHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFVBQVU7RUFDVixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxjQUFjOztFQUVkLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLFVBQVU7RUFDVixhQUFhO0VBQ2I7Ozs7R0FJQztFQUNELG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGlEQUFpRDtFQUNqRCw4QkFBOEI7QUFDaEM7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLDJCQUEyQjs7RUFFM0IsU0FBUztFQUNULHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUNBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixrRUFBa0U7RUFDbEUsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsOEJBQThCOztFQUU5Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixlQUFlOztFQUVmLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjs7RUFFbEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCIiwiZmlsZSI6ImFkZC1jb21wYW55LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcbmgyLFxyXG5wIHtcclxuICAvKiBjb2xvcjogIzQyNjY5NjsgKi9cclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2ZjZTA0MyAwJSwgI2ZiN2JhMiA3NCUpO1xyXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XHJcbiAgbWluLWhlaWdodDogODB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmdsYXNzIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBtYXgtaGVpZ2h0OiA3NHZoO1xyXG4gIG1pbi13aWR0aDogNTUwcHg7XHJcbiAgd2lkdGg6IDY1JTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byByaWdodCBib3R0b20sXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSlcclxuICApO1xyXG5cclxuICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5jaXJjbGUxLFxyXG4uY2lyY2xlMiB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gcmlnaHQgYm90dG9tLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAxKSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMilcclxuICApO1xyXG4gIGhlaWdodDogMTNyZW07XHJcbiAgd2lkdGg6IDEzcmVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5jaXJjbGUxIHtcclxuICB0b3A6IDEzJTtcclxuICByaWdodDogMTIlO1xyXG4gIHotaW5kZXg6IDAuMjtcclxufVxyXG5cclxuLmNpcmNsZTIge1xyXG4gIGJvdHRvbTogOSU7XHJcbiAgbGVmdDogMTIlO1xyXG4gIHotaW5kZXg6IDAuMjtcclxufVxyXG5cclxuLm1lbWJlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsIFwiQXJpYWwgTmFycm93IEJvbGRcIiwgc2Fucy1zZXJpZjtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG4uZGFzaGJvYXJkIHtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIG1pbi1oZWlnaHQ6IDc0dmg7XHJcbiAgLyogaGVpZ2h0OiAxMDAlOyAqL1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIHJpZ2h0IGJvdHRvbSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKVxyXG4gICk7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMnJlbTtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAycmVtO1xyXG59XHJcblxyXG4ubGluayB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IDFyZW0gMHJlbTtcclxuICBwYWRkaW5nOiAxcmVtIDVyZW07XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmxpbmsgaDIge1xyXG4gIHBhZGRpbmc6IDByZW0gMnJlbTtcclxufVxyXG5cclxuLmZvcm0tZGl2IHtcclxuICBmbGV4OiAyO1xyXG59XHJcblxyXG4ucHJvIHAge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYWRtaW4taW1hZ2Uge1xyXG4gIGhlaWdodDogODBweDtcclxuICB3aWR0aDogODBweDtcclxuICBib3JkZXItcmFkaXVzOiA0MHJlbTtcclxufVxyXG5cclxuLyogR2FtZSBzZWN0aW9uICovXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4uc3RhdHVzIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMDAwMDAwIDAlLCAjNDE0MTQxIDc0JSk7XHJcbiAgY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB3aWR0aDogNzAlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgLTEyNXB4KTtcclxufVxyXG5cclxuLmdhbWVzIHtcclxuICBtYXJnaW46IDAuNXJlbTtcclxuXHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMCUpO1xyXG4gIGhlaWdodDogNjVweDtcclxuICB3aWR0aDogODAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gcmlnaHQgYm90dG9tLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpXHJcbiAgKTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIG1hcmdpbjogMS44cmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBib3gtc2hhZG93OiA2cHggNnB4IDIwcHggcmdiYSgxMjIsIDEyMiwgMTIyLCAwLjUpO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4uY2FyZCBsYWJlbCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuLnZhbGlkYXRpb24ge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHJcbiAgd2lkdGg6IDUlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiAzLjRyZW0gMHJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbn1cclxuXHJcbi52aSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IDAuMnJlbTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwgLTEwcHgpO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5jdXN0b21lcnMtbGlzdCB7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcclxuICBjb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICMwMDAwMDAgMCUsICM0MTQxNDEgNzQlKTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jdXN0b21lcnMtbGlzdDpob3ZlciB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDNweCk7XHJcblxyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uZm9ybS1kaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5mb3JtIGJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyNWE1MGI5O1xyXG4gIGNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBmb250LXNpemU6IDE5cHg7XHJcblxyXG4gIHBhZGRpbmc6IDJweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xyXG4gIC8qIG91dGxpbmU6IG5vbmU7ICovXHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5mb3JtIGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1OTQwOWI5O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



function AppComponent_pre_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ng generate component xyz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_pre_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ng add @angular/material");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_pre_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ng add @angular/pwa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_pre_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ng add _____");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_pre_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ng test");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_pre_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ng build --prod");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor() {
        this.title = 'coupons-website-demo';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 140, vars: 7, consts: [["role", "banner", 1, "toolbar"], ["width", "40", "alt", "Angular Logo", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="], [1, "spacer"], ["aria-label", "Angular on twitter", "target", "_blank", "rel", "noopener", "href", "https://twitter.com/angular", "title", "Twitter"], ["id", "twitter-logo", "height", "24", "data-name", "Logo", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 400 400"], ["width", "400", "height", "400", "fill", "none"], ["d", "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23", "fill", "#fff"], ["aria-label", "Angular on YouTube", "target", "_blank", "rel", "noopener", "href", "https://youtube.com/angular", "title", "YouTube"], ["id", "youtube-logo", "height", "24", "width", "24", "data-name", "Logo", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "#fff"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"], ["role", "main", 1, "content"], [1, "card", "highlight-card", "card-small"], ["id", "rocket", "alt", "Rocket Ship", "xmlns", "http://www.w3.org/2000/svg", "width", "101.678", "height", "101.678", "viewBox", "0 0 101.678 101.678"], ["id", "Group_83", "data-name", "Group 83", "transform", "translate(-141 -696)"], ["id", "Ellipse_8", "data-name", "Ellipse 8", "cx", "50.839", "cy", "50.839", "r", "50.839", "transform", "translate(141 696)", "fill", "#dd0031"], ["id", "Group_47", "data-name", "Group 47", "transform", "translate(165.185 720.185)"], ["id", "Path_33", "data-name", "Path 33", "d", "M3.4,42.615a3.084,3.084,0,0,0,3.553,3.553,21.419,21.419,0,0,0,12.215-6.107L9.511,30.4A21.419,21.419,0,0,0,3.4,42.615Z", "transform", "translate(0.371 3.363)", "fill", "#fff"], ["id", "Path_34", "data-name", "Path 34", "d", "M53.3,3.221A3.09,3.09,0,0,0,50.081,0,48.227,48.227,0,0,0,18.322,13.437c-6-1.666-14.991-1.221-18.322,7.218A33.892,33.892,0,0,1,9.439,25.1l-.333.666a3.013,3.013,0,0,0,.555,3.553L23.985,43.641a2.9,2.9,0,0,0,3.553.555l.666-.333A33.892,33.892,0,0,1,32.647,53.3c8.55-3.664,8.884-12.326,7.218-18.322A48.227,48.227,0,0,0,53.3,3.221ZM34.424,9.772a6.439,6.439,0,1,1,9.106,9.106,6.368,6.368,0,0,1-9.106,0A6.467,6.467,0,0,1,34.424,9.772Z", "transform", "translate(0 0.005)", "fill", "#fff"], ["id", "rocket-smoke", "alt", "Rocket Ship Smoke", "xmlns", "http://www.w3.org/2000/svg", "width", "516.119", "height", "1083.632", "viewBox", "0 0 516.119 1083.632"], ["id", "Path_40", "data-name", "Path 40", "d", "M644.6,141S143.02,215.537,147.049,870.207s342.774,201.755,342.774,201.755S404.659,847.213,388.815,762.2c-27.116-145.51-11.551-384.124,271.9-609.1C671.15,139.365,644.6,141,644.6,141Z", "transform", "translate(-147.025 -140.939)", "fill", "#f5f5f5"], [1, "card-container"], ["target", "_blank", "rel", "noopener", "href", "https://angular.io/tutorial", 1, "card"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", 1, "material-icons"], ["d", "M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"], ["target", "_blank", "rel", "noopener", "href", "https://angular.io/cli", 1, "card"], ["d", "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"], ["target", "_blank", "rel", "noopener", "href", "https://blog.angular.io/", 1, "card"], ["d", "M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"], ["type", "hidden"], ["selection", ""], ["tabindex", "0", 1, "card", "card-small", 3, "click"], ["d", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"], [1, "terminal", 3, "ngSwitch"], [4, "ngSwitchDefault"], [4, "ngSwitchCase"], ["title", "Animations", "href", "https://angular.io/guide/animations", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["id", "Group_20", "data-name", "Group 20", "xmlns", "http://www.w3.org/2000/svg", "width", "21.813", "height", "23.453", "viewBox", "0 0 21.813 23.453"], ["id", "Path_15", "data-name", "Path 15", "d", "M4099.584,972.736h0l-10.882,3.9,1.637,14.4,9.245,5.153,9.245-5.153,1.686-14.4Z", "transform", "translate(-4088.702 -972.736)", "fill", "#ffa726"], ["id", "Path_16", "data-name", "Path 16", "d", "M4181.516,972.736v23.453l9.245-5.153,1.686-14.4Z", "transform", "translate(-4170.633 -972.736)", "fill", "#fb8c00"], ["id", "Path_17", "data-name", "Path 17", "d", "M4137.529,1076.127l-7.7-3.723,4.417-2.721,7.753,3.723Z", "transform", "translate(-4125.003 -1058.315)", "fill", "#ffe0b2"], ["id", "Path_18", "data-name", "Path 18", "d", "M4137.529,1051.705l-7.7-3.723,4.417-2.721,7.753,3.723Z", "transform", "translate(-4125.003 -1036.757)", "fill", "#fff3e0"], ["id", "Path_19", "data-name", "Path 19", "d", "M4137.529,1027.283l-7.7-3.723,4.417-2.721,7.753,3.723Z", "transform", "translate(-4125.003 -1015.199)", "fill", "#fff"], ["title", "CLI", "href", "https://cli.angular.io/", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["alt", "Angular CLI Logo", "xmlns", "http://www.w3.org/2000/svg", "width", "21.762", "height", "23.447", "viewBox", "0 0 21.762 23.447"], ["id", "Group_21", "data-name", "Group 21", "transform", "translate(0)"], ["id", "Path_20", "data-name", "Path 20", "d", "M2660.313,313.618h0l-10.833,3.9,1.637,14.4,9.2,5.152,9.244-5.152,1.685-14.4Z", "transform", "translate(-2649.48 -313.618)", "fill", "#37474f"], ["id", "Path_21", "data-name", "Path 21", "d", "M2741.883,313.618v23.447l9.244-5.152,1.685-14.4Z", "transform", "translate(-2731.05 -313.618)", "fill", "#263238"], ["id", "Path_22", "data-name", "Path 22", "d", "M2692.293,379.169h11.724V368.618h-11.724Zm11.159-.6h-10.608v-9.345h10.621v9.345Z", "transform", "translate(-2687.274 -362.17)", "fill", "#fff"], ["id", "Path_23", "data-name", "Path 23", "d", "M2709.331,393.688l.4.416,2.265-2.28-2.294-2.294-.4.4,1.893,1.893Z", "transform", "translate(-2702.289 -380.631)", "fill", "#fff"], ["id", "Rectangle_12", "data-name", "Rectangle 12", "width", "3.517", "height", "0.469", "transform", "translate(9.709 13.744)", "fill", "#fff"], ["title", "Protractor", "href", "https://www.protractortest.org/", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["alt", "Angular Protractor Logo", "xmlns", "http://www.w3.org/2000/svg", "width", "21.81", "height", "23.447", "viewBox", "0 0 21.81 23.447"], ["id", "Group_26", "data-name", "Group 26", "transform", "translate(0)"], ["id", "Path_28", "data-name", "Path 28", "d", "M4620.155,311.417h0l-10.881,3.9,1.637,14.4,9.244,5.152,9.244-5.152,1.685-14.4Z", "transform", "translate(-4609.274 -311.417)", "fill", "#e13439"], ["id", "Path_29", "data-name", "Path 29", "d", "M4702.088,311.417v23.447l9.244-5.152,1.685-14.4Z", "transform", "translate(-4691.207 -311.417)", "fill", "#b52f32"], ["id", "Path_30", "data-name", "Path 30", "d", "M4651.044,369.58v-.421h1.483a7.6,7.6,0,0,0-2.106-5.052l-1.123,1.123-.3-.3,1.122-1.121a7.588,7.588,0,0,0-4.946-2.055v1.482h-.421v-1.485a7.589,7.589,0,0,0-5.051,2.058l1.122,1.121-.3.3-1.123-1.123a7.591,7.591,0,0,0-2.106,5.052h1.482v.421h-1.489v1.734h15.241V369.58Zm-10.966-.263a4.835,4.835,0,0,1,9.67,0Z", "transform", "translate(-4634.008 -355.852)", "fill", "#fff"], ["title", "Find a Local Meetup", "href", "https://www.meetup.com/find/?keywords=angular", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["alt", "Meetup Logo", "xmlns", "http://www.w3.org/2000/svg", "width", "24.607", "height", "23.447", "viewBox", "0 0 24.607 23.447"], ["id", "logo--mSwarm", "d", "M21.221,14.95A4.393,4.393,0,0,1,17.6,19.281a4.452,4.452,0,0,1-.8.069c-.09,0-.125.035-.154.117a2.939,2.939,0,0,1-2.506,2.091,2.868,2.868,0,0,1-2.248-.624.168.168,0,0,0-.245-.005,3.926,3.926,0,0,1-2.589.741,4.015,4.015,0,0,1-3.7-3.347,2.7,2.7,0,0,1-.043-.38c0-.106-.042-.146-.143-.166a3.524,3.524,0,0,1-1.516-.69A3.623,3.623,0,0,1,2.23,14.557a3.66,3.66,0,0,1,1.077-3.085.138.138,0,0,0,.026-.2,3.348,3.348,0,0,1-.451-1.821,3.46,3.46,0,0,1,2.749-3.28.44.44,0,0,0,.355-.281,5.072,5.072,0,0,1,3.863-3,5.028,5.028,0,0,1,3.555.666.31.31,0,0,0,.271.03A4.5,4.5,0,0,1,18.3,4.7a4.4,4.4,0,0,1,1.334,2.751,3.658,3.658,0,0,1,.022.706.131.131,0,0,0,.1.157,2.432,2.432,0,0,1,1.574,1.645,2.464,2.464,0,0,1-.7,2.616c-.065.064-.051.1-.014.166A4.321,4.321,0,0,1,21.221,14.95ZM13.4,14.607a2.09,2.09,0,0,0,1.409,1.982,4.7,4.7,0,0,0,1.275.221,1.807,1.807,0,0,0,.9-.151.542.542,0,0,0,.321-.545.558.558,0,0,0-.359-.534,1.2,1.2,0,0,0-.254-.078c-.262-.047-.526-.086-.787-.138a.674.674,0,0,1-.617-.75,3.394,3.394,0,0,1,.218-1.109c.217-.658.509-1.286.79-1.918a15.609,15.609,0,0,0,.745-1.86,1.95,1.95,0,0,0,.06-1.073,1.286,1.286,0,0,0-1.051-1.033,1.977,1.977,0,0,0-1.521.2.339.339,0,0,1-.446-.042c-.1-.092-.2-.189-.307-.284a1.214,1.214,0,0,0-1.643-.061,7.563,7.563,0,0,1-.614.512A.588.588,0,0,1,10.883,8c-.215-.115-.437-.215-.659-.316a2.153,2.153,0,0,0-.695-.248A2.091,2.091,0,0,0,7.541,8.562a9.915,9.915,0,0,0-.405.986c-.559,1.545-1.015,3.123-1.487,4.7a1.528,1.528,0,0,0,.634,1.777,1.755,1.755,0,0,0,1.5.211,1.35,1.35,0,0,0,.824-.858c.543-1.281,1.032-2.584,1.55-3.875.142-.355.28-.712.432-1.064a.548.548,0,0,1,.851-.24.622.622,0,0,1,.185.539,2.161,2.161,0,0,1-.181.621c-.337.852-.68,1.7-1.018,2.552a2.564,2.564,0,0,0-.173.528.624.624,0,0,0,.333.71,1.073,1.073,0,0,0,.814.034,1.22,1.22,0,0,0,.657-.655q.758-1.488,1.511-2.978.35-.687.709-1.37a1.073,1.073,0,0,1,.357-.434.43.43,0,0,1,.463-.016.373.373,0,0,1,.153.387.7.7,0,0,1-.057.236c-.065.157-.127.316-.2.469-.42.883-.846,1.763-1.262,2.648A2.463,2.463,0,0,0,13.4,14.607Zm5.888,6.508a1.09,1.09,0,0,0-2.179.006,1.09,1.09,0,0,0,2.179-.006ZM1.028,12.139a1.038,1.038,0,1,0,.01-2.075,1.038,1.038,0,0,0-.01,2.075ZM13.782.528a1.027,1.027,0,1,0-.011,2.055A1.027,1.027,0,0,0,13.782.528ZM22.21,6.95a.882.882,0,0,0-1.763.011A.882.882,0,0,0,22.21,6.95ZM4.153,4.439a.785.785,0,1,0,.787-.78A.766.766,0,0,0,4.153,4.439Zm8.221,18.22a.676.676,0,1,0-.677.666A.671.671,0,0,0,12.374,22.658ZM22.872,12.2a.674.674,0,0,0-.665.665.656.656,0,0,0,.655.643.634.634,0,0,0,.655-.644A.654.654,0,0,0,22.872,12.2ZM7.171-.123A.546.546,0,0,0,6.613.43a.553.553,0,1,0,1.106,0A.539.539,0,0,0,7.171-.123ZM24.119,9.234a.507.507,0,0,0-.493.488.494.494,0,0,0,.494.494.48.48,0,0,0,.487-.483A.491.491,0,0,0,24.119,9.234Zm-19.454,9.7a.5.5,0,0,0-.488-.488.491.491,0,0,0-.487.5.483.483,0,0,0,.491.479A.49.49,0,0,0,4.665,18.936Z", "transform", "translate(0 0.123)", "fill", "#f64060"], ["title", "Join the Conversation on Discord", "href", "https://discord.gg/angular", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["alt", "Discord Logo", "xmlns", "http://www.w3.org/2000/svg", "width", "26", "height", "26", "viewBox", "0 0 245 240"], ["d", "M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"], ["d", "M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"], ["href", "https://github.com/angular/angular", "target", "_blank", "rel", "noopener"], [1, "github-star-badge"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z", "fill", "#1976d2"], ["id", "clouds", "alt", "Gray Clouds Background", "xmlns", "http://www.w3.org/2000/svg", "width", "2611.084", "height", "485.677", "viewBox", "0 0 2611.084 485.677"], ["id", "Path_39", "data-name", "Path 39", "d", "M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z", "transform", "translate(142.69 -634.312)", "fill", "#eee"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "rect", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "g", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "circle", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "g", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Here are some links to help you get started:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Learn Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "CLI Documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Angular Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Next Steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "What do you want to do next with your app?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_58_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](56); return _r0.value = "component"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "New Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_63_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](56); return _r0.value = "material"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Angular Material");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_68_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](56); return _r0.value = "pwa"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Add PWA Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_73_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](56); return _r0.value = "dependency"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Add Dependency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_78_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](56); return _r0.value = "test"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Run and Watch Tests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_83_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](56); return _r0.value = "build"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Build for Production");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, AppComponent_pre_89_Template, 2, 0, "pre", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, AppComponent_pre_90_Template, 2, 0, "pre", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, AppComponent_pre_91_Template, 2, 0, "pre", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, AppComponent_pre_92_Template, 2, 0, "pre", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, AppComponent_pre_93_Template, 2, 0, "pre", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, AppComponent_pre_94_Template, 2, 0, "pre", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "svg", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "path", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "path", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "svg", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "g", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "path", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "path", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "path", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "path", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "rect", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "svg", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "g", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "path", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "path", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "path", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "svg", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "path", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "svg", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "path", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " Love Angular?\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " Give our repo a star. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "path", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "path", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " Star ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "path", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "path", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "svg", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "path", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "router-outlet");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.title, " app is running!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", _r0.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "material");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "pwa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "dependency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "build");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */", "[_nghost-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n    margin: 8px 0;\n  }\n\n  p[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .spacer[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n\n  .toolbar[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 60px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 0 16px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n    height: 40px;\n    margin: 0 8px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #youtube-logo[_ngcontent-%COMP%] {\n    height: 40px;\n    margin-left: 16px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover, .toolbar[_ngcontent-%COMP%]   #youtube-logo[_ngcontent-%COMP%]:hover {\n    opacity: 0.8;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    display: flex;\n    margin: 82px auto 32px;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%] {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: #888;\n  }\n\n  .card-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card[_ngcontent-%COMP%] {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 60px;\n  }\n\n  svg#rocket[_ngcontent-%COMP%] {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    height: calc(100vh - 95px);\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a[_ngcontent-%COMP%]:hover {\n    color: #125699;\n  }\n\n  .terminal[_ngcontent-%COMP%] {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal[_ngcontent-%COMP%]::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link[_ngcontent-%COMP%]:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer[_ngcontent-%COMP%] {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%] {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27,31,35,.2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]:hover {\n    background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\n    border-color: rgba(27,31,35,.35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n\n  \n  @media screen and (max-width: 767px) {\n\n    .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n\n    .card[_ngcontent-%COMP%]:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      display: none;\n      visibility: hidden;\n    }\n  }"] });


/***/ }),

/***/ "VM3D":
/*!****************************************************************************************!*\
  !*** ./src/app/components/admin/apis/get-all-customers/get-all-customers.component.ts ***!
  \****************************************************************************************/
/*! exports provided: GetAllCustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllCustomersComponent", function() { return GetAllCustomersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/admin.service */ "AJ6+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function GetAllCustomersComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 3);
} }
function GetAllCustomersComponent_table_9_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cus_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cus_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cus_r4.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cus_r4.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cus_r4.email);
} }
function GetAllCustomersComponent_table_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, GetAllCustomersComponent_table_9_tr_12_Template, 9, 4, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.customers);
} }
class GetAllCustomersComponent {
    constructor(adminService, router, snackBar) {
        this.adminService = adminService;
        this.router = router;
        this.snackBar = snackBar;
    }
    ngOnInit() {
        this.adminService.getAllCustomers().subscribe((arrOfCustomers) => {
            if (arrOfCustomers.length == 0) {
                this.snackBar.open(`No customers to show :(`, 'i got it', {
                    verticalPosition: 'top',
                    duration: 4000,
                });
            }
            this.customers = arrOfCustomers;
        }, (e) => {
            if (e.status === 401) {
                console.log(401);
                this.router.navigate(['unautorized']);
            }
            else {
                this.snackBar.open(`${e.error}`, 'i got it', {
                    verticalPosition: 'top',
                });
            }
            console.dir(e);
        });
    }
}
GetAllCustomersComponent.ɵfac = function GetAllCustomersComponent_Factory(t) { return new (t || GetAllCustomersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
GetAllCustomersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GetAllCustomersComponent, selectors: [["app-get-all-customers"]], decls: 10, vars: 2, consts: [[1, "container"], ["loading", ""], [4, "ngIf", "ngIfElse"], ["src", "/assets/LoadingGif.gif", "alt", "loading"], [4, "ngFor", "ngForOf"], [1, "ID-row"]], template: function GetAllCustomersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GetAllCustomersComponent_ng_template_3_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " All Customers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GetAllCustomersComponent_table_9_Template, 13, 1, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customers)("ngIfElse", _r0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["*[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n  background-color: #007ea7;\r\n  background-image: linear-gradient(315deg, #007ea7 0%, #80ced7 74%);\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  min-height: 80vh;\r\n  display: flex;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  margin-top: 5%;\r\n  margin-left: 15%;\r\n  padding-bottom: 5%;\r\n  width: 75%;\r\n  box-sizing: border-box;\r\n  justify-content: space-around;\r\n  display: block;\r\n  border-radius: 2rem;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.5),\r\n    rgba(255, 255, 255, 0.1)\r\n  );\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  text-align: center;\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  font-weight: bold;\r\n  background-color: rgb(221, 221, 221);\r\n  font-size: 35px;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  background-color: #485461;\r\n  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);\r\n  color: rgb(221, 221, 221);\r\n  padding: 5px;\r\n  line-height: 3rem;\r\n  margin: auto;\r\n  width: 85%;\r\n  text-align: center;\r\n  border-radius: 0.7rem;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n  border: solid black 1px;\r\n  border-radius: 0.4rem;\r\n  font-size: 18px;\r\n  \r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n  background-color: #438b31b9;\r\n  border-radius: 0.3rem;\r\n  font-size: 22px;\r\n}\r\n\r\n.ID-row[_ngcontent-%COMP%] {\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  font-style: italic;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n}\r\n\r\n\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin: auto;\r\n  width: 50px;\r\n}\r\n\r\n[_nghost-%COMP%] {\r\n  display: block;\r\n  height: 100%;\r\n  overflow: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldC1hbGwtY3VzdG9tZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtFQUFrRTtFQUNsRSxxREFBcUQ7RUFDckQsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkI7Ozs7R0FJQztBQUNIOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxREFBcUQ7RUFDckQsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQyxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGtFQUFrRTtFQUNsRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZix3RUFBd0U7QUFDMUU7O0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxnREFBZ0Q7RUFDaEQsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUNBOzs7OztHQUtHOztBQUVIO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGNBQWM7QUFDaEIiLCJmaWxlIjoiZ2V0LWFsbC1jdXN0b21lcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5tYWluIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3ZWE3O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICMwMDdlYTcgMCUsICM4MGNlZDcgNzQlKTtcclxuICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG4gIG1pbi1oZWlnaHQ6IDgwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1JTtcclxuICB3aWR0aDogNzUlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byByaWdodCBib3R0b20sXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSlcclxuICApO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbn1cclxudGFibGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ODU0NjE7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzQ4NTQ2MSAwJSwgIzI4MzEzYiA3NCUpO1xyXG4gIGNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzcmVtO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogODUlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAwLjdyZW07XHJcbn1cclxuXHJcbnRkIHtcclxuICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcclxuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNmY2UwNDMgMCUsICNmYjdiYTIgNzQlKTsgKi9cclxufVxyXG50aCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzOGIzMWI5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuLklELXJvdyB7XHJcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLyogdGJvZHkgPiB0cjpudGgtY2hpbGQob2RkKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG59XHJcbnRib2R5ID4gdHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JhbDtcclxufSAqL1xyXG5cclxuaW1nIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "VT+M":
/*!***********************************************************!*\
  !*** ./src/app/components/customer/customer.component.ts ***!
  \***********************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _client_header_client_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client-header/client-header.component */ "gsY+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ "LmEr");




class CustomerComponent {
    constructor() { }
    ngOnInit() {
    }
}
CustomerComponent.ɵfac = function CustomerComponent_Factory(t) { return new (t || CustomerComponent)(); };
CustomerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerComponent, selectors: [["app-customer"]], decls: 7, vars: 0, consts: [[1, "container"]], template: function CustomerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-client-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_client_header_client_header_component__WEBPACK_IMPORTED_MODULE_1__["ClientHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100vh;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  display: grid;\r\n  grid-template-rows: 12% 80% 8%;\r\n  grid-template-columns: 100%;\r\n  font-family: sans-serif;\r\n  color: #333;\r\n  line-height: 1.5;\r\n  justify-content: center;\r\n  background-image: url(\"/assets/lifeStyle3.jpg\");\r\n  background-size: cover;\r\n  overflow-x: hidden;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QiwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLCtDQUErQztFQUMvQyxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImN1c3RvbWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG1hcmdpbjogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMiUgODAlIDglO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzMzMztcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvbGlmZVN0eWxlMy5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var src_app_models_client_type_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/client-type.model */ "va99");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "EFyh");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.component */ "2MiI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../footer/footer.component */ "LmEr");








function LoginComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "* Email is missing *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*'@' is missing *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "* password is missing *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](type_r13);
} }
function LoginComponent_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span");
} }
function LoginComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_ng_template_33_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Sign in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_ng_template_35_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Sign in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r0.form.invalid);
} }
class LoginComponent {
    constructor(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.clientTypes = [
            src_app_models_client_type_model__WEBPACK_IMPORTED_MODULE_0__["ClientType"].Customer,
            src_app_models_client_type_model__WEBPACK_IMPORTED_MODULE_0__["ClientType"].Company,
            src_app_models_client_type_model__WEBPACK_IMPORTED_MODULE_0__["ClientType"].Administrator,
        ];
    }
    ngOnInit() { }
    login() {
        // this.userClientType = this.selectedValue;
        console.log(`
    user email: ${this.userEmail}
    user password: ${this.userPassword}
    user Type: ${this.userClientType}
    
    `);
        this.loginService
            .login(this.userEmail, this.userPassword, this.userClientType)
            .subscribe((loginItem) => {
            console.log('=====================================');
            console.log(loginItem.token);
            let theToken = loginItem.token;
            localStorage.setItem('token', theToken);
            localStorage.setItem('is_login', 'true');
            console.log('======================================');
            switch (this.userClientType) {
                case src_app_models_client_type_model__WEBPACK_IMPORTED_MODULE_0__["ClientType"].Administrator:
                    localStorage.setItem('client_type', 'Administrator');
                    this.router.navigate(['admin/admin-layout']);
                    alert(`Welcome ${loginItem.clientName} You have logged in Successfully :) `);
                    break;
                case src_app_models_client_type_model__WEBPACK_IMPORTED_MODULE_0__["ClientType"].Company:
                    localStorage.setItem('client_type', 'Company');
                    this.router.navigate(['company/company-menu']);
                    alert(`Welcome ${loginItem.clientName} You have logged in Successfully :) `);
                    break;
                case src_app_models_client_type_model__WEBPACK_IMPORTED_MODULE_0__["ClientType"].Customer:
                    localStorage.setItem('client_type', 'Customer');
                    this.router.navigate(['customer/customer-menu']);
                    alert(`Welcome ${loginItem.clientName} You have logged in Successfully :) `);
                    break;
                default:
                    break;
            }
            localStorage.setItem('Name', loginItem.clientName);
        }, (e) => {
            alert(e.error.message);
        });
    }
    closeModal() {
        var _a, _b;
        (_a = document.querySelector('.modal')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
        (_b = document.querySelector('.overlay')) === null || _b === void 0 ? void 0 : _b.classList.add('hidden');
    }
    openModal() {
        var _a, _b;
        (_a = document.querySelector('.modal')) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
        (_b = document.querySelector('.overlay')) === null || _b === void 0 ? void 0 : _b.classList.remove('hidden');
    }
    navHome() {
        this.router.navigate(['home']);
    }
    navAdmin() {
        this.router.navigate(['admin-layout']);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 40, vars: 10, consts: [[1, "container"], [1, "login-window"], [1, "close-modal", 3, "click"], [1, "image-div"], ["src", "assets/userImage.jpg", "alt", ""], [1, "sign-header"], [1, "form-div"], ["action", ""], ["formInfo", "ngForm"], ["class", "email-span", 4, "ngIf"], ["class", "pass-span", 4, "ngIf"], ["for", "email"], ["name", "userEmail", "type", "text", "placeholder", "Enter your email...", "required", "", "pattern", "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$", 3, "ngModel", "ngModelChange"], ["userEmailInfo", "ngModel"], ["for", "password"], ["name", "userPass", "type", "password", "placeholder", "Enter your password...", "required", "", 3, "ngModel", "ngModelChange"], ["userPassInfo", "ngModel"], ["for", "clientType"], ["name", "clientType", "required", "", 3, "ngModel", "ngModelChange"], ["userTypeInput", "ngModel"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["able", ""], ["disable", ""], [1, "overlay-hidden"], [1, "email-span"], [1, "pass-span"], ["type", "submit", "value", "Sign in", 1, "login-button-able", 3, "click"], ["type", "submit", "value", "Sign in", 3, "disabled", "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_5_listener() { return ctx.navHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, LoginComponent_span_16_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, LoginComponent_span_17_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, LoginComponent_span_18_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u2709\uFE0F Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_21_listener($event) { return ctx.userEmail = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\uD83D\uDD12 Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_25_listener($event) { return ctx.userPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\uD83D\uDC65 Client Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "select", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_select_ngModelChange_29_listener($event) { return ctx.userClientType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, LoginComponent_option_31_Template, 2, 1, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, LoginComponent_span_32_Template, 1, 0, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, LoginComponent_ng_template_33_Template, 2, 0, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, LoginComponent_ng_template_35_Template, 2, 1, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "div", 24);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](26);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](34);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (_r4.errors == null ? null : _r4.errors.required) && _r4.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (_r4.errors == null ? null : _r4.errors.pattern) && _r4.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (_r5.errors == null ? null : _r5.errors.required) && _r5.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.userEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.userPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.userClientType);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.clientTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r0.form.invalid)("ngIfThen", _r11)("ngIfElse", _r9);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_z"]], styles: [".container[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n\r\n  width: 100%;\r\n  grid-template-rows: 12% 80% 8%;\r\n  grid-template-columns: 100%;\r\n  margin: 0%;\r\n  padding: 0%;\r\n  box-sizing: border-box;\r\n  display: grid;\r\n  font-family: sans-serif;\r\n  color: #333;\r\n  line-height: 1.5;\r\n  justify-content: center;\r\n  background-image: url(\"/assets/backImage2.jpg\");\r\n  background-size: cover;\r\n  overflow: hidden;\r\n}\r\n\r\n.overlay-hidden[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  min-height: 100vh;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n  -webkit-backdrop-filter: blur(2px);\r\n          backdrop-filter: blur(2px);\r\n  z-index: 5;\r\n}\r\n\r\n.close-modal[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0.3rem;\r\n  right: 1.5rem;\r\n  font-size: 4.5rem;\r\n  color: #333;\r\n  cursor: pointer;\r\n  border: none;\r\n  background: none;\r\n}\r\n\r\n.close-modal[_ngcontent-%COMP%]:hover {\r\n  color: rgba(248, 1, 1, 0.822);\r\n}\r\n\r\n.sign-header[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  text-align: center;\r\n  font-size: 2.4rem;\r\n  color: black;\r\n  transform: translateY(48%);\r\n  font-weight: bold;\r\n  letter-spacing: 1px;\r\n  font-family: New Century Schoolbook, serif;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  \r\n  transform: translateX(-4px);\r\n  font-size: 1.1rem;\r\n  padding: 6px;\r\n  font-weight: lighter;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.hidden[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.login-window[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  top: 52%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 340px;\r\n  height: 480px;\r\n  background-color: rgb(221, 221, 221);\r\n  padding: 3.2rem;\r\n  border-radius: 1rem;\r\n  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);\r\n  z-index: 10;\r\n  flex-direction: column;\r\n}\r\n\r\n.form-div[_ngcontent-%COMP%] {\r\n  transform: translateY(11%);\r\n  align-items: center;\r\n  height: 400px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\r\n  border: none;\r\n  border-radius: 0.6rem;\r\n  padding: 10px;\r\n  margin: 2px;\r\n  height: 10%;\r\n  width: 315px;\r\n  font-size: medium;\r\n}\r\n\r\nselect[_ngcontent-%COMP%] {\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-weight: bold;\r\n  width: 335px;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background-color: #525a50b9;\r\n  color: rgb(221, 221, 221);\r\n  font-weight: bolder;\r\n  font-size: 19px;\r\n  padding: 10px;\r\n  margin: 2px;\r\n  height: 10%;\r\n  width: 100%;\r\n  position: relative;\r\n  transform: translateY(50%);\r\n  border-radius: 1rem;\r\n  border: none;\r\n}\r\n\r\n.login-button-able[_ngcontent-%COMP%]:hover {\r\n  padding-top: 16px;\r\n  padding-bottom: 16px;\r\n  background-color: #259409b9;\r\n  transition: all 0.3s ease-in;\r\n  cursor: pointer;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  transform: translateY(-45%);\r\n  height: 5rem;\r\n  width: 5rem;\r\n  border-radius: 4rem;\r\n}\r\n\r\n.image-div[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: 15px;\r\n}\r\n\r\n.chooseType[_ngcontent-%COMP%] {\r\n  font-weight: lighter;\r\n  font-style: italic;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  background-color: rgba(179, 54, 54, 0.603);\r\n  color: rgba(248, 1, 1, 0.822);\r\n  border: solid rgba(248, 1, 1, 0.822) 1px;\r\n  font-size: 19px;\r\n  padding: 5px;\r\n  width: 325px;\r\n  text-align: center;\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n.email-span[_ngcontent-%COMP%] {\r\n  top: -21%;\r\n}\r\n\r\n.pass-span[_ngcontent-%COMP%] {\r\n  top: -10%;\r\n}\r\n\r\n.form-div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n  border: solid black 2px;\r\n  border: 1px solid #ccc;\r\n}\r\n\r\n.form-div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:placeholder {\r\n  color: #bbb;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZOztFQUVaLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLFVBQVU7RUFDVixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsK0NBQStDO0VBQy9DLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsa0NBQTBCO1VBQTFCLDBCQUEwQjtFQUMxQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBQ0EsK0JBQStCOztBQUMvQiwrQkFBK0I7O0FBQy9CO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsMENBQTBDO0VBQzFDLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFDQTs7RUFFRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixhQUFhO0VBQ2IsV0FBVztFQUNYLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQiwwQ0FBMEM7RUFDMUMsNkJBQTZCO0VBQzdCLHdDQUF3QztFQUN4QyxlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUNBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEyJSA4MCUgOCU7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xyXG4gIG1hcmdpbjogMCU7XHJcbiAgcGFkZGluZzogMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9iYWNrSW1hZ2UyLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5vdmVybGF5LWhpZGRlbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XHJcbiAgei1pbmRleDogNTtcclxufVxyXG5cclxuLmNsb3NlLW1vZGFsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwLjNyZW07XHJcbiAgcmlnaHQ6IDEuNXJlbTtcclxuICBmb250LXNpemU6IDQuNXJlbTtcclxuICBjb2xvcjogIzMzMztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuLmNsb3NlLW1vZGFsOmhvdmVyIHtcclxuICBjb2xvcjogcmdiYSgyNDgsIDEsIDEsIDAuODIyKTtcclxufVxyXG5cclxuLnNpZ24taGVhZGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMi40cmVtO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDglKTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBOZXcgQ2VudHVyeSBTY2hvb2xib29rLCBzZXJpZjtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIC8qIGZvbnQtc3R5bGU6IG9ibGlxdWU7ICovXHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00cHgpO1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIHBhZGRpbmc6IDZweDtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxufVxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4vKiBDTEFTU0VTIFRPIE1BS0UgTU9EQUwgV09SSyAqL1xyXG4uaGlkZGVuIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ubG9naW4td2luZG93IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA1MiU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHdpZHRoOiAzNDBweDtcclxuICBoZWlnaHQ6IDQ4MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuICBwYWRkaW5nOiAzLjJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBib3gtc2hhZG93OiAwIDNyZW0gNXJlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4uZm9ybS1kaXYge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMSUpO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxufVxyXG5pbnB1dCxcclxuc2VsZWN0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMC42cmVtO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiAycHg7XHJcbiAgaGVpZ2h0OiAxMCU7XHJcbiAgd2lkdGg6IDMxNXB4O1xyXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG59XHJcbnNlbGVjdCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHdpZHRoOiAzMzVweDtcclxufVxyXG5cclxuZm9ybSBidXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MjVhNTBiOTtcclxuICBjb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgZm9udC1zaXplOiAxOXB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiAycHg7XHJcbiAgaGVpZ2h0OiAxMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5sb2dpbi1idXR0b24tYWJsZTpob3ZlciB7XHJcbiAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1OTQwOWI5O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQ1JSk7XHJcbiAgaGVpZ2h0OiA1cmVtO1xyXG4gIHdpZHRoOiA1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRyZW07XHJcbn1cclxuLmltYWdlLWRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IDE1cHg7XHJcbn1cclxuLmNob29zZVR5cGUge1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuZm9ybSBzcGFuLFxyXG5mb3JtIGRpdiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc5LCA1NCwgNTQsIDAuNjAzKTtcclxuICBjb2xvcjogcmdiYSgyNDgsIDEsIDEsIDAuODIyKTtcclxuICBib3JkZXI6IHNvbGlkIHJnYmEoMjQ4LCAxLCAxLCAwLjgyMikgMXB4O1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgd2lkdGg6IDMyNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbn1cclxuXHJcbi5lbWFpbC1zcGFuIHtcclxuICB0b3A6IC0yMSU7XHJcbn1cclxuLnBhc3Mtc3BhbiB7XHJcbiAgdG9wOiAtMTAlO1xyXG59XHJcblxyXG4uZm9ybS1kaXYgaW5wdXQ6Zm9jdXMge1xyXG4gIGJvcmRlcjogc29saWQgYmxhY2sgMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbn1cclxuXHJcbi5mb3JtLWRpdiBpbnB1dDpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICNiYmI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "YFan":
/*!*********************************************************************!*\
  !*** ./src/app/components/admin/admin-menu/admin-menu.component.ts ***!
  \*********************************************************************/
/*! exports provided: AdminMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMenuComponent", function() { return AdminMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _client_header_client_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client-header/client-header.component */ "gsY+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../footer/footer.component */ "LmEr");




class AdminMenuComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdminMenuComponent.ɵfac = function AdminMenuComponent_Factory(t) { return new (t || AdminMenuComponent)(); };
AdminMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminMenuComponent, selectors: [["app-admin-menu"]], decls: 7, vars: 0, consts: [[1, "container"]], template: function AdminMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-client-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_client_header_client_header_component__WEBPACK_IMPORTED_MODULE_1__["ClientHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100vh;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  display: grid;\r\n  grid-template-rows: 12% 80% 8%;\r\n  grid-template-columns: 100%;\r\n  font-family: sans-serif;\r\n  color: #333;\r\n  line-height: 1.5;\r\n  justify-content: center;\r\n  background-image: url(\"/assets/natureView.jpg\");\r\n  background-size: cover;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsU0FBUztFQUNULHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsK0NBQStDO0VBQy9DLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJhZG1pbi1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG1hcmdpbjogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMiUgODAlIDglO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzMzMztcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvbmF0dXJlVmlldy5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "YJcO":
/*!*******************************************************************************!*\
  !*** ./src/app/components/unautorized-client/unautorized-client.component.ts ***!
  \*******************************************************************************/
/*! exports provided: UnautorizedClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnautorizedClientComponent", function() { return UnautorizedClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ "2MiI");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ "LmEr");




class UnautorizedClientComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        localStorage.clear();
    }
    navHome() {
        this.router.navigate(['home']);
    }
    navLogin() {
        this.router.navigate(['login']);
    }
}
UnautorizedClientComponent.ɵfac = function UnautorizedClientComponent_Factory(t) { return new (t || UnautorizedClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
UnautorizedClientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnautorizedClientComponent, selectors: [["app-unautorized-client"]], decls: 22, vars: 0, consts: [[1, "container"], [1, "logout-window"], [1, "close-modal", 3, "click"], [1, "form-div"], ["type", "submit", "value", "home", "routerLink", "../home", "routerLinkActive", "active-link", 1, "home-button"], ["type", "submit", "value", "login", "routerLink", "../login", "routerLinkActive", "active-link", 1, "login-button"], [1, "overlay-hidden"]], template: function UnautorizedClientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnautorizedClientComponent_Template_button_click_5_listener() { return ctx.navHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "You were disconnected for some reason \u00AF\\_(\u30C4)_/\u00AF ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Take me to Home Page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 6);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n  height: 100vh;\r\n  width: 100%;\r\n  grid-template-rows: 12% 80% 8%;\r\n  grid-template-columns: 100%;\r\n  margin: 0%;\r\n  padding: 0%;\r\n  box-sizing: border-box;\r\n  display: grid;\r\n  font-family: sans-serif;\r\n  color: #333;\r\n  line-height: 1.5;\r\n  justify-content: center;\r\n  background-image: url(\"/assets/backImage2.jpg\");\r\n  background-size: cover;\r\n  overflow: hidden;\r\n}\r\n\r\n.overlay-hidden[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n  -webkit-backdrop-filter: blur(2px);\r\n          backdrop-filter: blur(2px);\r\n  z-index: 5;\r\n}\r\n\r\n.form-div[_ngcontent-%COMP%] {\r\n  transform: translateY(-50px);\r\n}\r\n\r\n.close-modal[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0.3rem;\r\n  right: 1.5rem;\r\n  font-size: 4.5rem;\r\n  color: #333;\r\n  cursor: pointer;\r\n  border: none;\r\n  background: none;\r\n}\r\n\r\n.close-modal[_ngcontent-%COMP%]:hover {\r\n  color: rgba(248, 1, 1, 0.822);\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n  line-height: 2.3rem;\r\n  font-size: 2.2rem;\r\n  font-weight: lighter;\r\n  position: relative;\r\n  text-align: center;\r\n  padding: 1rem;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.hidden[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.logout-window[_ngcontent-%COMP%] {\r\n  font-family: \"Poppins\", sans-serif;\r\n  position: absolute;\r\n  top: 52%;\r\n  left: 50%;\r\n  font-size: 24px;\r\n  transform: translate(-50%, -50%);\r\n  width: 420px;\r\n  height: 400px;\r\n  background-color: rgb(221, 221, 221);\r\n  padding: 3.2rem;\r\n  border-radius: 1rem;\r\n  display: flex;\r\n  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);\r\n  z-index: 10;\r\n  flex-direction: column;\r\n}\r\n\r\n.form-div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  text-align: center;\r\n  color: rgb(221, 221, 221);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  font-weight: 700;\r\n  font-size: 18px;\r\n  align-items: center;\r\n  padding: 1.2rem;\r\n  margin: 18px;\r\n  width: 100%;\r\n  cursor: pointer;\r\n  border-radius: 0.7rem;\r\n  font-family: Georgia, Times, \"Times New Roman\", serif;\r\n  transition: 0.1s;\r\n}\r\n\r\n.form-div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background-color: #485461;\r\n  background-image: linear-gradient(to top left, #28b487, #7dd56f);\r\n}\r\n\r\n.login-button[_ngcontent-%COMP%] {\r\n  transform: translate(-4%, 10%);\r\n  background-color: #485461;\r\n  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);\r\n}\r\n\r\n.home-button[_ngcontent-%COMP%] {\r\n  transform: translate(-4%, 10%);\r\n  background-color: #485461;\r\n  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuYXV0b3JpemVkLWNsaWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLFVBQVU7RUFDVixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsK0NBQStDO0VBQy9DLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxrQ0FBMEI7VUFBMUIsMEJBQTBCO0VBQzFCLFVBQVU7QUFDWjs7QUFDQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQSwrQkFBK0I7O0FBQy9CLCtCQUErQjs7QUFDL0I7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZUFBZTtFQUNmLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiwwQ0FBMEM7RUFDMUMsV0FBVztFQUNYLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixxQkFBcUI7RUFDckIscURBQXFEO0VBQ3JELGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixnRUFBZ0U7QUFDbEU7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIseUJBQXlCO0VBQ3pCLGtFQUFrRTtBQUNwRTs7QUFDQTtFQUNFLDhCQUE4QjtFQUM5Qix5QkFBeUI7RUFDekIsa0VBQWtFO0FBQ3BFIiwiZmlsZSI6InVuYXV0b3JpemVkLWNsaWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEyJSA4MCUgOCU7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xyXG4gIG1hcmdpbjogMCU7XHJcbiAgcGFkZGluZzogMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9iYWNrSW1hZ2UyLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5vdmVybGF5LWhpZGRlbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XHJcbiAgei1pbmRleDogNTtcclxufVxyXG4uZm9ybS1kaXYge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XHJcbn1cclxuXHJcbi5jbG9zZS1tb2RhbCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMC4zcmVtO1xyXG4gIHJpZ2h0OiAxLjVyZW07XHJcbiAgZm9udC1zaXplOiA0LjVyZW07XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcbi5jbG9zZS1tb2RhbDpob3ZlciB7XHJcbiAgY29sb3I6IHJnYmEoMjQ4LCAxLCAxLCAwLjgyMik7XHJcbn1cclxuXHJcbmgzIHtcclxuICBsaW5lLWhlaWdodDogMi4zcmVtO1xyXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLyogQ0xBU1NFUyBUTyBNQUtFIE1PREFMIFdPUksgKi9cclxuLmhpZGRlbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmxvZ291dC13aW5kb3cge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MiU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB3aWR0aDogNDIwcHg7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbiAgcGFkZGluZzogMy4ycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3gtc2hhZG93OiAwIDNyZW0gNXJlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmZvcm0tZGl2IGJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEuMnJlbTtcclxuICBtYXJnaW46IDE4cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcclxuICBmb250LWZhbWlseTogR2VvcmdpYSwgVGltZXMsIFwiVGltZXMgTmV3IFJvbWFuXCIsIHNlcmlmO1xyXG4gIHRyYW5zaXRpb246IDAuMXM7XHJcbn1cclxuLmZvcm0tZGl2IGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4NTQ2MTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIGxlZnQsICMyOGI0ODcsICM3ZGQ1NmYpO1xyXG59XHJcblxyXG4ubG9naW4tYnV0dG9uIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNCUsIDEwJSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4NTQ2MTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjNDg1NDYxIDAlLCAjMjgzMTNiIDc0JSk7XHJcbn1cclxuLmhvbWUtYnV0dG9uIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNCUsIDEwJSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4NTQ2MTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjNDg1NDYxIDAlLCAjMjgzMTNiIDc0JSk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/about/about.component */ "+DhY");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/layout/layout.component */ "9KET");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "JzmT");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _components_admin_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/admin/admin-layout/admin-layout.component */ "iKn7");
/* harmony import */ var _components_admin_admin_menu_admin_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/admin/admin-menu/admin-menu.component */ "YFan");
/* harmony import */ var _components_admin_apis_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/admin/apis/add-company/add-company.component */ "Rx2m");
/* harmony import */ var _components_admin_apis_update_company_update_company_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/admin/apis/update-company/update-company.component */ "cTFH");
/* harmony import */ var _components_admin_apis_delete_company_delete_company_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/admin/apis/delete-company/delete-company.component */ "eJN5");
/* harmony import */ var _components_admin_apis_get_one_company_get_one_company_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/admin/apis/get-one-company/get-one-company.component */ "RVg/");
/* harmony import */ var _components_admin_apis_get_all_companies_get_all_companies_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/admin/apis/get-all-companies/get-all-companies.component */ "sN4w");
/* harmony import */ var _components_admin_apis_get_all_customers_get_all_customers_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/admin/apis/get-all-customers/get-all-customers.component */ "VM3D");
/* harmony import */ var _components_admin_apis_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/admin/apis/add-customer/add-customer.component */ "kjhH");
/* harmony import */ var _components_admin_apis_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/admin/apis/update-customer/update-customer.component */ "s8ks");
/* harmony import */ var _components_admin_apis_delete_customer_delete_customer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/admin/apis/delete-customer/delete-customer.component */ "jqPe");
/* harmony import */ var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/logout/logout.component */ "aer8");
/* harmony import */ var _components_client_header_client_header_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/client-header/client-header.component */ "gsY+");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/admin/admin.component */ "cCTE");
/* harmony import */ var _components_company_company_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/company/company.component */ "pPPa");
/* harmony import */ var _components_company_apis_add_coupon_add_coupon_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/company/apis/add-coupon/add-coupon.component */ "3AUa");
/* harmony import */ var _components_company_apis_update_coupon_update_coupon_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/company/apis/update-coupon/update-coupon.component */ "C6Rq");
/* harmony import */ var _components_company_apis_delete_coupon_delete_coupon_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/company/apis/delete-coupon/delete-coupon.component */ "wvD/");
/* harmony import */ var _components_company_apis_get_all_couponsn_get_all_couponsn_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/company/apis/get-all-couponsn/get-all-couponsn.component */ "6ap7");
/* harmony import */ var _components_company_apis_get_coupons_by_category_get_coupons_by_category_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/company/apis/get-coupons-by-category/get-coupons-by-category.component */ "QFf0");
/* harmony import */ var _components_company_apis_get_coupons_by_limit_price_get_coupons_by_limit_price_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/company/apis/get-coupons-by-limit-price/get-coupons-by-limit-price.component */ "Oc7n");
/* harmony import */ var _components_company_apis_get_com_details_get_com_details_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/company/apis/get-com-details/get-com-details.component */ "7gEU");
/* harmony import */ var _components_company_company_menu_company_menu_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/company/company-menu/company-menu.component */ "p1Gj");
/* harmony import */ var _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/customer/customer.component */ "VT+M");
/* harmony import */ var _components_customer_apis_purchase_coupon_purchase_coupon_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/customer/apis/purchase-coupon/purchase-coupon.component */ "EWcc");
/* harmony import */ var _components_customer_apis_all_coupons_all_coupons_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/customer/apis/all-coupons/all-coupons.component */ "JzsN");
/* harmony import */ var _components_customer_apis_coupons_by_category_coupons_by_category_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/customer/apis/coupons-by-category/coupons-by-category.component */ "x5d/");
/* harmony import */ var _components_customer_apis_coupons_by_limit_pricey_coupons_by_limit_pricey_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/customer/apis/coupons-by-limit-pricey/coupons-by-limit-pricey.component */ "hTgH");
/* harmony import */ var _components_customer_apis_get_cus_details_get_cus_details_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/customer/apis/get-cus-details/get-cus-details.component */ "xAX9");
/* harmony import */ var _components_admin_apis_get_one_customer_get_one_customer_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/admin/apis/get-one-customer/get-one-customer.component */ "olF0");
/* harmony import */ var _components_unautorized_client_unautorized_client_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/unautorized-client/unautorized-client.component */ "YJcO");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _components_customer_customer_menu_customer_menu_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/customer/customer-menu/customer-menu.component */ "jaen");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/core */ "fXoL");











































// ==================================Angular Materials===================================





// ==============================================================
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_43__["BrowserAnimationsModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_44__["MatSnackBarModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_45__["MatSliderModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
        _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"],
        _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
        _components_admin_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_12__["AdminLayoutComponent"],
        _components_admin_admin_menu_admin_menu_component__WEBPACK_IMPORTED_MODULE_13__["AdminMenuComponent"],
        _components_admin_apis_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_14__["AddCompanyComponent"],
        _components_admin_apis_update_company_update_company_component__WEBPACK_IMPORTED_MODULE_15__["UpdateCompanyComponent"],
        _components_admin_apis_delete_company_delete_company_component__WEBPACK_IMPORTED_MODULE_16__["DeleteCompanyComponent"],
        _components_admin_apis_get_one_company_get_one_company_component__WEBPACK_IMPORTED_MODULE_17__["GetOneCompanyComponent"],
        _components_admin_apis_get_all_companies_get_all_companies_component__WEBPACK_IMPORTED_MODULE_18__["GetAllCompaniesComponent"],
        _components_admin_apis_get_all_customers_get_all_customers_component__WEBPACK_IMPORTED_MODULE_19__["GetAllCustomersComponent"],
        _components_admin_apis_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_20__["AddCustomerComponent"],
        _components_admin_apis_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_21__["UpdateCustomerComponent"],
        _components_admin_apis_delete_customer_delete_customer_component__WEBPACK_IMPORTED_MODULE_22__["DeleteCustomerComponent"],
        _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_23__["LogoutComponent"],
        _components_client_header_client_header_component__WEBPACK_IMPORTED_MODULE_24__["ClientHeaderComponent"],
        _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_25__["AdminComponent"],
        _components_company_company_component__WEBPACK_IMPORTED_MODULE_26__["CompanyComponent"],
        _components_company_apis_add_coupon_add_coupon_component__WEBPACK_IMPORTED_MODULE_27__["AddCouponComponent"],
        _components_company_apis_update_coupon_update_coupon_component__WEBPACK_IMPORTED_MODULE_28__["UpdateCouponComponent"],
        _components_company_apis_delete_coupon_delete_coupon_component__WEBPACK_IMPORTED_MODULE_29__["DeleteCouponComponent"],
        _components_company_apis_get_all_couponsn_get_all_couponsn_component__WEBPACK_IMPORTED_MODULE_30__["GetAllCouponsnComponent"],
        _components_company_apis_get_coupons_by_category_get_coupons_by_category_component__WEBPACK_IMPORTED_MODULE_31__["GetCouponsByCategoryComponent"],
        _components_company_apis_get_coupons_by_limit_price_get_coupons_by_limit_price_component__WEBPACK_IMPORTED_MODULE_32__["GetCouponsByLimitPriceComponent"],
        _components_company_apis_get_com_details_get_com_details_component__WEBPACK_IMPORTED_MODULE_33__["GetComDetailsComponent"],
        _components_company_company_menu_company_menu_component__WEBPACK_IMPORTED_MODULE_34__["CompanyMenuComponent"],
        _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_35__["CustomerComponent"],
        _components_customer_apis_purchase_coupon_purchase_coupon_component__WEBPACK_IMPORTED_MODULE_36__["PurchaseCouponComponent"],
        _components_customer_apis_all_coupons_all_coupons_component__WEBPACK_IMPORTED_MODULE_37__["AllCouponsComponent"],
        _components_customer_apis_coupons_by_category_coupons_by_category_component__WEBPACK_IMPORTED_MODULE_38__["CouponsByCategoryComponent"],
        _components_customer_apis_coupons_by_limit_pricey_coupons_by_limit_pricey_component__WEBPACK_IMPORTED_MODULE_39__["CouponsByLimitPriceyComponent"],
        _components_customer_apis_get_cus_details_get_cus_details_component__WEBPACK_IMPORTED_MODULE_40__["GetCusDetailsComponent"],
        _components_admin_apis_get_one_customer_get_one_customer_component__WEBPACK_IMPORTED_MODULE_41__["GetOneCustomerComponent"],
        _components_unautorized_client_unautorized_client_component__WEBPACK_IMPORTED_MODULE_42__["UnautorizedClientComponent"],
        _components_customer_customer_menu_customer_menu_component__WEBPACK_IMPORTED_MODULE_46__["CustomerMenuComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_43__["BrowserAnimationsModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_44__["MatSnackBarModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_45__["MatSliderModule"]] }); })();


/***/ }),

/***/ "ZtWP":
/*!*********************************************!*\
  !*** ./src/app/services/company.service.ts ***!
  \*********************************************/
/*! exports provided: CompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return CompanyService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class CompanyService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.BASE_URL = '';
    }
    addCoupon(coupon) {
        //===========================================================
        let theToken = localStorage.getItem('token');
        let theHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('token', theToken);
        let options = { headers: theHeaders, responseType: 'text' };
        //===========================================================
        return this.httpClient.post(`${this.BASE_URL}/api/company/add`, coupon, options);
    }
    updateCoupon(coupon, couponId) {
        //===========================================================
        let theHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('token', localStorage.getItem('token'));
        let options = { headers: theHeaders, responseType: 'text' };
        //===========================================================
        return this.httpClient.put(`${this.BASE_URL}/api/company/update/coupon/` + couponId, coupon, options);
    }
    deleteCoupon(couponId) {
        //===========================================================
        let theHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('token', localStorage.getItem('token'));
        let options = { headers: theHeaders, responseType: 'text' };
        //===========================================================
        return this.httpClient.delete(`${this.BASE_URL}/api/company/delete?couponId=` + couponId, options);
    }
    getAllCoupons() {
        //===========================================================
        let theHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('token', localStorage.getItem('token'));
        let options = { headers: theHeaders };
        //===========================================================
        return this.httpClient.get(`${this.BASE_URL}/api/company/get/all`, options);
    }
    getCouponsByCategory(category) {
        //===========================================================
        let theHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('token', localStorage.getItem('token'));
        let options = { headers: theHeaders };
        //===========================================================
        return this.httpClient.get(`${this.BASE_URL}/api/company/get/byCategory?category=` + category, options);
    }
    getCouponsByMaxPrice(maxPrice) {
        //===========================================================
        let theHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('token', localStorage.getItem('token'));
        let options = { headers: theHeaders };
        //===========================================================
        return this.httpClient.get(`${this.BASE_URL}/api/company/get/byMaxPrice?maxPrice=` + maxPrice, options);
    }
    getDetails() {
        //===========================================================
        let theHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('token', localStorage.getItem('token'));
        let options = { headers: theHeaders };
        //===========================================================
        return this.httpClient.get(`${this.BASE_URL}/api/company/getDetails`, options);
    }
}
CompanyService.ɵfac = function CompanyService_Factory(t) { return new (t || CompanyService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
CompanyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CompanyService, factory: CompanyService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "aer8":
/*!*******************************************************!*\
  !*** ./src/app/components/logout/logout.component.ts ***!
  \*******************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login.service */ "EFyh");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ "2MiI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/footer.component */ "LmEr");






class LogoutComponent {
    // private logoutItem = new LogoutItem();
    constructor(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    logout() {
        console.log(`
    user token: ${localStorage.getItem('token')}
    
    
    `);
        this.loginService.logout().subscribe((logoutItem) => {
            //take client to HOME page and clear the data of user
            localStorage.clear();
            this.router.navigate(['home']);
            alert(`${logoutItem}`);
            // alert(`${logoutItem.answer}`);
        }, (e) => {
            console.dir(e);
            localStorage.clear();
            this.router.navigate(['home']);
        });
    }
    ngOnInit() { }
    closeModal() {
        var _a, _b;
        (_a = document.querySelector('.modal')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
        (_b = document.querySelector('.overlay')) === null || _b === void 0 ? void 0 : _b.classList.add('hidden');
    }
    openModal() {
        var _a, _b;
        (_a = document.querySelector('.modal')) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
        (_b = document.querySelector('.overlay')) === null || _b === void 0 ? void 0 : _b.classList.remove('hidden');
    }
    navHome() {
        this.router.navigate(['home']);
    }
}
LogoutComponent.ɵfac = function LogoutComponent_Factory(t) { return new (t || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"])); };
LogoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoutComponent, selectors: [["app-logout"]], decls: 27, vars: 0, consts: [[1, "container"], [1, "logout-window"], [1, "close-modal", 3, "click"], [1, "image-div"], ["src", "assets/logout2.png", "alt", ""], [1, "sign-out-header"], [1, "form-div"], ["action", ""], ["formInfo", "ngForm"], ["for", "logout"], ["type", "submit", "value", "Sign in", 1, "no-button", 3, "click"], ["type", "submit", "value", "Sign out", 1, "submit-button", 3, "click"], [1, "overlay-hidden"]], template: function LogoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogoutComponent_Template_button_click_5_listener() { return ctx.navHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Sign out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Are you sure you want to logout?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogoutComponent_Template_button_click_20_listener() { return ctx.navHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " NO, go back to Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogoutComponent_Template_button_click_22_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Sign Out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 12);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n  height: 100vh;\r\n  width: 100%;\r\n  grid-template-rows: 12% 80% 8%;\r\n  grid-template-columns: 100%;\r\n  margin: 0%;\r\n  padding: 0%;\r\n  box-sizing: border-box;\r\n  display: grid;\r\n  font-family: sans-serif;\r\n  color: #333;\r\n  line-height: 1.5;\r\n  justify-content: center;\r\n  background-image: url(\"/assets/backImage2.jpg\");\r\n  background-size: cover;\r\n  overflow: hidden;\r\n}\r\n\r\n.overlay-hidden[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n  -webkit-backdrop-filter: blur(2px);\r\n          backdrop-filter: blur(2px);\r\n  z-index: 5;\r\n}\r\n\r\n.close-modal[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0.3rem;\r\n  right: 1.5rem;\r\n  font-size: 4.5rem;\r\n  color: #333;\r\n  cursor: pointer;\r\n  border: none;\r\n  background: none;\r\n}\r\n\r\n.close-modal[_ngcontent-%COMP%]:hover {\r\n  color: rgba(248, 1, 1, 0.822);\r\n}\r\n\r\n.sign-out-header[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  text-align: center;\r\n  font-size: 2.4rem;\r\n  color: black;\r\n  transform: translateY(62%);\r\n  font-weight: bold;\r\n  letter-spacing: 1px;\r\n  font-family: New Century Schoolbook, serif;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\r\n  font-size: 30px;\r\n  letter-spacing: 1px;\r\n  text-align: center;\r\n  padding: 0px;\r\n  font-weight: bolder;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.hidden[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.logout-window[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 52%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 420px;\r\n  height: 420px;\r\n  background-color: rgb(221, 221, 221);\r\n  padding: 3.2rem;\r\n  border-radius: 1rem;\r\n  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);\r\n  z-index: 10;\r\n  flex-direction: column;\r\n}\r\n\r\n.form-div[_ngcontent-%COMP%] {\r\n  transform: translateY(2%);\r\n  text-align: center;\r\n  box-sizing: content-box;\r\n  height: 100%;\r\n\r\n  \r\n}\r\n\r\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  color: rgb(221, 221, 221);\r\n\r\n  justify-content: space-around;\r\n  font-weight: bolder;\r\n  font-size: 19px;\r\n  padding: 15px;\r\n  margin: 12px;\r\n  height: 12%;\r\n  width: 100%;\r\n  cursor: pointer;\r\n  border-radius: 0.7rem;\r\n  font-family: Georgia, Times, \"Times New Roman\", serif;\r\n  transition: 0.1s;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  transform: translateY(2px);\r\n  \r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  transform: translateY(-45%);\r\n  height: 6rem;\r\n  width: 6rem;\r\n  border-radius: 4rem;\r\n}\r\n\r\n.image-div[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: 15px;\r\n}\r\n\r\n.no-button[_ngcontent-%COMP%] {\r\n  transform: translate(-4%, 10%);\r\n  background-color: #485461;\r\n  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);\r\n}\r\n\r\n.submit-button[_ngcontent-%COMP%] {\r\n  transform: translate(-4%, 10%);\r\n  background-color: #1b8b00;\r\n  background-image: linear-gradient(314deg, #1b8b00 0%, #a2d240 74%);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ291dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLFVBQVU7RUFDVixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsK0NBQStDO0VBQy9DLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxrQ0FBMEI7VUFBMUIsMEJBQTBCO0VBQzFCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0Usc0VBQXNFO0VBQ3RFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBQ0EsK0JBQStCOztBQUMvQiwrQkFBK0I7O0FBQy9CO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsMENBQTBDO0VBQzFDLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixZQUFZOztFQUVaLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7O0VBRXpCLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLHFEQUFxRDtFQUNyRCxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixrRUFBa0U7QUFDcEU7O0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIseUJBQXlCO0VBQ3pCLGtFQUFrRTtBQUNwRSIsImZpbGUiOiJsb2dvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMiUgODAlIDglO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcclxuICBtYXJnaW46IDAlO1xyXG4gIHBhZGRpbmc6IDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzMzMztcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvYmFja0ltYWdlMi5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ub3ZlcmxheS1oaWRkZW4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xyXG4gIHotaW5kZXg6IDU7XHJcbn1cclxuXHJcbi5jbG9zZS1tb2RhbCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMC4zcmVtO1xyXG4gIHJpZ2h0OiAxLjVyZW07XHJcbiAgZm9udC1zaXplOiA0LjVyZW07XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcbi5jbG9zZS1tb2RhbDpob3ZlciB7XHJcbiAgY29sb3I6IHJnYmEoMjQ4LCAxLCAxLCAwLjgyMik7XHJcbn1cclxuXHJcbi5zaWduLW91dC1oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyLjRyZW07XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg2MiUpO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgZm9udC1mYW1pbHk6IE5ldyBDZW50dXJ5IFNjaG9vbGJvb2ssIHNlcmlmO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsIFwiVGltZXMgTmV3IFJvbWFuXCIsIHNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4vKiBDTEFTU0VTIFRPIE1BS0UgTU9EQUwgV09SSyAqL1xyXG4uaGlkZGVuIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ubG9nb3V0LXdpbmRvdyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTIlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB3aWR0aDogNDIwcHg7XHJcbiAgaGVpZ2h0OiA0MjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbiAgcGFkZGluZzogMy4ycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgYm94LXNoYWRvdzogMCAzcmVtIDVyZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLmZvcm0tZGl2IHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMiUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTcsIDE1LCAxNSwgMC41NDgpOyAqL1xyXG59XHJcblxyXG5mb3JtIGJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcblxyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgZm9udC1zaXplOiAxOXB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luOiAxMnB4O1xyXG4gIGhlaWdodDogMTIlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAwLjdyZW07XHJcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFRpbWVzLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZjtcclxuICB0cmFuc2l0aW9uOiAwLjFzO1xyXG59XHJcbmZvcm0gYnV0dG9uOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcclxuICAvKiBwYWRkaW5nOiAxOHB4OyAqL1xyXG59XHJcbmltZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDUlKTtcclxuICBoZWlnaHQ6IDZyZW07XHJcbiAgd2lkdGg6IDZyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcclxufVxyXG4uaW1hZ2UtZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogMTVweDtcclxufVxyXG5cclxuLm5vLWJ1dHRvbiB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQlLCAxMCUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ODU0NjE7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzQ4NTQ2MSAwJSwgIzI4MzEzYiA3NCUpO1xyXG59XHJcbi5zdWJtaXQtYnV0dG9uIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNCUsIDEwJSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiOGIwMDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE0ZGVnLCAjMWI4YjAwIDAlLCAjYTJkMjQwIDc0JSk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "bP22":
/*!**************************************!*\
  !*** ./src/app/guards/menu.guard.ts ***!
  \**************************************/
/*! exports provided: MenuGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuGuard", function() { return MenuGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class MenuGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        this.theToken = localStorage.getItem('token');
        if (this.theToken != null) {
            return true;
        }
        else {
            this.router.navigate(['home']);
            return false;
        }
    }
    canActivateChild(childRoute, state) {
        if (this.theToken != null) {
            return true;
        }
        else {
            this.router.navigate(['home']);
            return false;
        }
    }
    canDeactivate(component, currentRoute, currentState, nextState) {
        return true;
    }
    canLoad(route, segments) {
        return true;
    }
}
MenuGuard.ɵfac = function MenuGuard_Factory(t) { return new (t || MenuGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
MenuGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MenuGuard, factory: MenuGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "cCTE":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _client_header_client_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client-header/client-header.component */ "gsY+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ "LmEr");




class AdminComponent {
    constructor() { }
    ngOnInit() { }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 7, vars: 0, consts: [[1, "container"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-client-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_client_header_client_header_component__WEBPACK_IMPORTED_MODULE_1__["ClientHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100vh;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  display: grid;\r\n  grid-template-rows: 12% 80% 8%;\r\n  grid-template-columns: 100%;\r\n  font-family: sans-serif;\r\n  color: #333;\r\n  line-height: 1.5;\r\n  justify-content: center;\r\n\r\n  overflow-x: hidden;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QiwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsdUJBQXVCOztFQUV2QixrQkFBa0I7QUFDcEIiLCJmaWxlIjoiYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEyJSA4MCUgOCU7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "cTFH":
/*!**********************************************************************************!*\
  !*** ./src/app/components/admin/apis/update-company/update-company.component.ts ***!
  \**********************************************************************************/
/*! exports provided: UpdateCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCompanyComponent", function() { return UpdateCompanyComponent; });
/* harmony import */ var src_app_models_company_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/company.model */ "j+be");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ "AJ6+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function UpdateCompanyComponent_img_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 26);
} }
function UpdateCompanyComponent_img_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 26);
} }
class UpdateCompanyComponent {
    constructor(adminService, router, snackBar) {
        this.adminService = adminService;
        this.router = router;
        this.snackBar = snackBar;
        this.company = new src_app_models_company_model__WEBPACK_IMPORTED_MODULE_0__["Company"]();
    }
    ngOnInit() { }
    updateCompany() {
        console.log(`
    company  name: ${this.company.name}
    company email: ${this.company.email}
    company password: ${this.company.password}
    
    `);
        this.adminService.updateCompany(this.companyId, this.company).subscribe((answer) => {
            this.snackBar.open(`${answer.concat('✅')}`, 'OK', {
                verticalPosition: 'top',
            });
        }, (e) => {
            if (e.status === 401) {
                console.log(401);
                this.router.navigate(['unautorized']);
            }
            else {
                this.snackBar.open(`${e.error}`, 'i got it', {
                    verticalPosition: 'top',
                });
            }
            console.dir(e);
        });
    }
}
UpdateCompanyComponent.ɵfac = function UpdateCompanyComponent_Factory(t) { return new (t || UpdateCompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
UpdateCompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UpdateCompanyComponent, selectors: [["app-update-company"]], decls: 47, vars: 6, consts: [[1, "glass"], [1, "dashboard"], [1, "user"], ["src", "/assets/adminImage2.png", "alt", "", 1, "admin-image"], [1, "member"], [1, "links"], [1, "link"], [1, "pro"], ["routerLink", "../get-all-companies", "routerLinkActive", "active-link", 1, "customers-list"], [1, "form-div"], [1, "validation"], ["formInfo", "ngForm"], [1, "status"], ["for", "ID"], ["name", "id", "type", "number", "placeholder", "", "required", "", 3, "ngModel", "ngModelChange"], ["idInfo", "ngModel"], [1, "cards"], [1, "card"], ["class", "vi", "src", "/assets/validImage.png", "alt", "", 4, "ngIf"], ["for", "email"], ["name", "email", "type", "text", "placeholder", "Insert Email...", "pattern", "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$", "required", "", 3, "ngModel", "ngModelChange"], ["emailInfo", "ngModel"], ["for", "password"], ["name", "password", "type", "password", "placeholder", "Choose Password", "required", "", 3, "ngModel", "ngModelChange"], ["passwordInfo", "ngModel"], ["type", "submit", "value", "update Customer", 3, "disabled", "click"], ["src", "/assets/validImage.png", "alt", "", 1, "vi"]], template: function UpdateCompanyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Welcome Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Update Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " To ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Companies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "form", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Which Company ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Do you wish to update ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " ID : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UpdateCompanyComponent_Template_input_ngModelChange_29_listener($event) { return ctx.companyId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, UpdateCompanyComponent_img_33_Template, 1, 0, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UpdateCompanyComponent_Template_input_ngModelChange_36_listener($event) { return ctx.company.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, UpdateCompanyComponent_img_39_Template, 1, 0, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UpdateCompanyComponent_Template_input_ngModelChange_42_listener($event) { return ctx.company.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UpdateCompanyComponent_Template_button_click_45_listener() { return ctx.updateCompany(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " Update Company ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](37);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.companyId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r3.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.company.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r5.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.company.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r0.form.invalid);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["PatternValidator"]], styles: ["*[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n  font-size: 1.4rem;\r\n  opacity: 0.8;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  opacity: 0.8;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n  background-image: linear-gradient(315deg, #fce043 0%, #fb7ba2 74%);\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  min-height: 80vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.glass[_ngcontent-%COMP%] {\r\n  background: white;\r\n  max-height: 74vh;\r\n  min-width: 550px;\r\n  width: 65%;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.5),\r\n    rgba(255, 255, 255, 0.1)\r\n  );\r\n\r\n  border-radius: 2rem;\r\n  z-index: 2;\r\n  -webkit-backdrop-filter: blur(2rem);\r\n          backdrop-filter: blur(2rem);\r\n  display: flex;\r\n}\r\n\r\n.circle1[_ngcontent-%COMP%], .circle2[_ngcontent-%COMP%] {\r\n  background: white;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.01),\r\n    rgba(255, 255, 255, 2)\r\n  );\r\n  height: 13rem;\r\n  width: 13rem;\r\n  position: absolute;\r\n  border-radius: 50%;\r\n}\r\n\r\n.circle1[_ngcontent-%COMP%] {\r\n  top: 13%;\r\n  right: 12%;\r\n  z-index: 0.2;\r\n}\r\n\r\n.circle2[_ngcontent-%COMP%] {\r\n  bottom: 9%;\r\n  left: 12%;\r\n  z-index: 0.2;\r\n}\r\n\r\n.member[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.dashboard[_ngcontent-%COMP%] {\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  min-height: 74vh;\r\n  \r\n  width: 30%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  text-align: center;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.7),\r\n    rgba(255, 255, 255, 0.3)\r\n  );\r\n  border-top-left-radius: 2rem;\r\n  border-bottom-left-radius: 2rem;\r\n}\r\n\r\n.link[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin: 1rem 0rem;\r\n  padding: 1rem 5rem;\r\n  align-items: center;\r\n}\r\n\r\n.link[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  padding: 0rem 2rem;\r\n}\r\n\r\n.form-div[_ngcontent-%COMP%] {\r\n  flex: 2;\r\n}\r\n\r\n.pro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  justify-content: center;\r\n  text-align: center;\r\n\r\n  color: white;\r\n}\r\n\r\n.admin-image[_ngcontent-%COMP%] {\r\n  height: 80px;\r\n  width: 80px;\r\n  border-radius: 40rem;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.status[_ngcontent-%COMP%] {\r\n  background: linear-gradient(315deg, #000000 0%, #414141 74%);\r\n  color: rgb(221, 221, 221);\r\n  text-align: center;\r\n  height: 130px;\r\n  width: 70%;\r\n  z-index: 2;\r\n  \r\n  position: absolute;\r\n  transform: translate(1px, -125px);\r\n}\r\n\r\n.status[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.8),\r\n    rgba(255, 255, 255, 0.5)\r\n  );\r\n  border: none;\r\n  width: 20%;\r\n  height: 40px;\r\n  padding: 0.5rem;\r\n  border-radius: 1rem;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  text-align: center;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  transform: translateY(-20%);\r\n  transform: translateX(10%);\r\n  height: 65px;\r\n  width: 80%;\r\n  display: flex;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.8),\r\n    rgba(255, 255, 255, 0.5)\r\n  );\r\n  border-radius: 1rem;\r\n  margin: 1.8rem;\r\n  padding: 0.5rem;\r\n  box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.5);\r\n  justify-content: space-between;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  font-size: 17px;\r\n}\r\n\r\n.validation[_ngcontent-%COMP%] {\r\n  justify-content: flex-start;\r\n\r\n  width: 5%;\r\n  flex-direction: column;\r\n  margin: 3.4rem 0rem;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.vi[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin-top: 0.2rem;\r\n  height: 60px;\r\n  width: 60px;\r\n  transform: translate(-5px, -10px);\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  margin-top: 8px;\r\n  height: 35px;\r\n  border-radius: 0.5rem;\r\n  width: 70%;\r\n}\r\n\r\n.customers-list[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 100%;\r\n  border-radius: 1.5rem;\r\n  color: rgb(221, 221, 221);\r\n  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);\r\n  font-size: 16px;\r\n}\r\n\r\n.pro[_ngcontent-%COMP%]:hover {\r\n  height: 90px;\r\n  width: 70%;\r\n\r\n  transition: all 0.2s;\r\n}\r\n\r\n.pro[_ngcontent-%COMP%] {\r\n  font-weight: normal;\r\n  position: relative;\r\n  height: 80px;\r\n  width: 60%;\r\n\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.form-div[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background-color: #525a50b9;\r\n  color: rgb(221, 221, 221);\r\n  font-weight: bolder;\r\n  font-size: 19px;\r\n\r\n  padding: 2px;\r\n  height: 100%;\r\n  width: 100%;\r\n  position: relative;\r\n\r\n  cursor: pointer;\r\n  border-radius: 0.7rem;\r\n  \r\n  transition: 0.3s;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background-color: #259409b9;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1jb21wYW55LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUNBOztFQUVFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrRUFBa0U7RUFDbEUscURBQXFEO0VBQ3JELGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVjs7OztHQUlDOztFQUVELG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCOzs7O0dBSUM7RUFDRCxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNFQUFzRTtFQUN0RSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwyQkFBbUI7RUFBbkIsd0JBQW1CO0VBQW5CLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCOzs7O0dBSUM7RUFDRCw0QkFBNEI7RUFDNUIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjs7RUFFbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7O0FBRUEsaUJBQWlCOztBQUNqQix3Q0FBd0M7O0FBQ3hDLHdDQUF3Qzs7QUFFeEM7RUFDRSw0REFBNEQ7RUFDNUQseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsVUFBVTtFQUNWLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFOzs7O0dBSUM7RUFDRCxZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osVUFBVTtFQUNWLGFBQWE7RUFDYjs7OztHQUlDO0VBQ0QsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaURBQWlEO0VBQ2pELDhCQUE4QjtBQUNoQzs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsMkJBQTJCOztFQUUzQixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixrRUFBa0U7RUFDbEUsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLFlBQVk7RUFDWixVQUFVOztFQUVWLG9CQUFvQjtBQUN0Qjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFVBQVU7O0VBRVYsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZUFBZTs7RUFFZixZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7O0VBRWxCLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QiIsImZpbGUiOiJ1cGRhdGUtY29tcGFueS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaDEge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcbmgyLFxyXG5wIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2ZjZTA0MyAwJSwgI2ZiN2JhMiA3NCUpO1xyXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XHJcbiAgbWluLWhlaWdodDogODB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmdsYXNzIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBtYXgtaGVpZ2h0OiA3NHZoO1xyXG4gIG1pbi13aWR0aDogNTUwcHg7XHJcbiAgd2lkdGg6IDY1JTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byByaWdodCBib3R0b20sXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSlcclxuICApO1xyXG5cclxuICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5jaXJjbGUxLFxyXG4uY2lyY2xlMiB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gcmlnaHQgYm90dG9tLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAxKSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMilcclxuICApO1xyXG4gIGhlaWdodDogMTNyZW07XHJcbiAgd2lkdGg6IDEzcmVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5jaXJjbGUxIHtcclxuICB0b3A6IDEzJTtcclxuICByaWdodDogMTIlO1xyXG4gIHotaW5kZXg6IDAuMjtcclxufVxyXG5cclxuLmNpcmNsZTIge1xyXG4gIGJvdHRvbTogOSU7XHJcbiAgbGVmdDogMTIlO1xyXG4gIHotaW5kZXg6IDAuMjtcclxufVxyXG5cclxuLm1lbWJlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsIFwiQXJpYWwgTmFycm93IEJvbGRcIiwgc2Fucy1zZXJpZjtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG4uZGFzaGJvYXJkIHtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIG1pbi1oZWlnaHQ6IDc0dmg7XHJcbiAgLyogaGVpZ2h0OiAxMDAlOyAqL1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIHJpZ2h0IGJvdHRvbSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKVxyXG4gICk7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMnJlbTtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAycmVtO1xyXG59XHJcblxyXG4ubGluayB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IDFyZW0gMHJlbTtcclxuICBwYWRkaW5nOiAxcmVtIDVyZW07XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmxpbmsgaDIge1xyXG4gIHBhZGRpbmc6IDByZW0gMnJlbTtcclxufVxyXG5cclxuLmZvcm0tZGl2IHtcclxuICBmbGV4OiAyO1xyXG59XHJcblxyXG4ucHJvIHAge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYWRtaW4taW1hZ2Uge1xyXG4gIGhlaWdodDogODBweDtcclxuICB3aWR0aDogODBweDtcclxuICBib3JkZXItcmFkaXVzOiA0MHJlbTtcclxufVxyXG5cclxuLyogR2FtZSBzZWN0aW9uICovXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4uc3RhdHVzIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMDAwMDAwIDAlLCAjNDE0MTQxIDc0JSk7XHJcbiAgY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMzBweDtcclxuICB3aWR0aDogNzAlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgLyogYm9yZGVyLXJhZGl1czogMXJlbTsgKi9cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAtMTI1cHgpO1xyXG59XHJcblxyXG4uc3RhdHVzIGlucHV0IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byByaWdodCBib3R0b20sXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCksXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSlcclxuICApO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB3aWR0aDogMjAlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMCUpO1xyXG4gIGhlaWdodDogNjVweDtcclxuICB3aWR0aDogODAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gcmlnaHQgYm90dG9tLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpXHJcbiAgKTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIG1hcmdpbjogMS44cmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBib3gtc2hhZG93OiA2cHggNnB4IDIwcHggcmdiYSgxMjIsIDEyMiwgMTIyLCAwLjUpO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4uY2FyZCBsYWJlbCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuLnZhbGlkYXRpb24ge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHJcbiAgd2lkdGg6IDUlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiAzLjRyZW0gMHJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbn1cclxuXHJcbi52aSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IDAuMnJlbTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwgLTEwcHgpO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuLmN1c3RvbWVycy1saXN0IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xyXG4gIGNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzAwMDAwMCAwJSwgIzQxNDE0MSA3NCUpO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4ucHJvOmhvdmVyIHtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbiAgd2lkdGg6IDcwJTtcclxuXHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbn1cclxuLnBybyB7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHdpZHRoOiA2MCU7XHJcblxyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi5mb3JtLWRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcbmZvcm0gYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI1YTUwYjk7XHJcbiAgY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxuXHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAwLjdyZW07XHJcbiAgLyogb3V0bGluZTogbm9uZTsgKi9cclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcbmZvcm0gYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjU5NDA5Yjk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "eJN5":
/*!**********************************************************************************!*\
  !*** ./src/app/components/admin/apis/delete-company/delete-company.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DeleteCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCompanyComponent", function() { return DeleteCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/admin.service */ "AJ6+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function DeleteCompanyComponent_img_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 21);
} }
class DeleteCompanyComponent {
    constructor(adminService, router, snackBar) {
        this.adminService = adminService;
        this.router = router;
        this.snackBar = snackBar;
    }
    ngOnInit() {
        console.log(localStorage.getItem('token'));
    }
    deleteCompany() {
        console.log(`
    company Id: ${this.company_id} `);
        this.adminService.deleteCompany(this.company_id).subscribe((answer) => {
            this.snackBar.open(`${answer.concat('✅')}`, 'i got it', {
                verticalPosition: 'top',
            });
        }, (e) => {
            if (e.status === 401) {
                console.log(401);
                this.router.navigate(['unautorized']);
            }
            else {
                this.snackBar.open(`${e.error}`, 'i got it', {
                    verticalPosition: 'top',
                });
            }
            console.dir(e);
        });
    }
}
DeleteCompanyComponent.ɵfac = function DeleteCompanyComponent_Factory(t) { return new (t || DeleteCompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
DeleteCompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteCompanyComponent, selectors: [["app-delete-company"]], decls: 37, vars: 3, consts: [[1, "glass"], [1, "dashboard"], [1, "user"], ["src", "/assets/adminImage2.png", "alt", "", 1, "admin-image"], [1, "member"], [1, "links"], [1, "link"], [1, "pro"], ["routerLink", "../get-all-companies", "routerLinkActive", "active-link", 1, "customers-list"], [1, "form-div"], ["formInfo", "ngForm"], [1, "status"], ["for", "ID"], ["name", "id", "type", "number", "placeholder", "Choose Company to Delete...", "required", "", 3, "ngModel", "ngModelChange"], ["idInfo", "ngModel"], ["class", "vi", "src", "/assets/validImage.png", "alt", "", 4, "ngIf"], [1, "cards"], [1, "card"], ["type", "submit", "value", "delete Company", 3, "disabled", "click"], [1, "circle1"], [1, "circle2"], ["src", "/assets/validImage.png", "alt", "", 1, "vi"]], template: function DeleteCompanyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Welcome Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Delete Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Companies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Which Company ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Do you wish to Delete ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "ID : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeleteCompanyComponent_Template_input_ngModelChange_28_listener($event) { return ctx.company_id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, DeleteCompanyComponent_img_30_Template, 1, 0, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteCompanyComponent_Template_button_click_33_listener() { return ctx.deleteCompany(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Delete Company ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.company_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.form.invalid);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["*[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n  font-size: 1.6rem;\r\n  opacity: 0.8;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  opacity: 0.8;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n  background-image: linear-gradient(315deg, #fce043 0%, #fb7ba2 74%);\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  min-height: 80vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.glass[_ngcontent-%COMP%] {\r\n  background: white;\r\n  max-height: 64vh;\r\n  min-width: 550px;\r\n  width: 65%;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.5),\r\n    rgba(255, 255, 255, 0.1)\r\n  );\r\n\r\n  border-radius: 2rem;\r\n  z-index: 2;\r\n  -webkit-backdrop-filter: blur(2rem);\r\n          backdrop-filter: blur(2rem);\r\n  display: flex;\r\n}\r\n\r\n.circle1[_ngcontent-%COMP%], .circle2[_ngcontent-%COMP%] {\r\n  background: white;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.01),\r\n    rgba(255, 255, 255, 2)\r\n  );\r\n  height: 13rem;\r\n  width: 13rem;\r\n  position: absolute;\r\n  border-radius: 50%;\r\n}\r\n\r\n.circle1[_ngcontent-%COMP%] {\r\n  top: 13%;\r\n  right: 12%;\r\n  z-index: 0.2;\r\n}\r\n\r\n.circle2[_ngcontent-%COMP%] {\r\n  bottom: 9%;\r\n  left: 12%;\r\n  z-index: 0.2;\r\n}\r\n\r\n.member[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.dashboard[_ngcontent-%COMP%] {\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  min-height: 64vh;\r\n  \r\n  width: 30%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  text-align: center;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.7),\r\n    rgba(255, 255, 255, 0.3)\r\n  );\r\n  border-top-left-radius: 2rem;\r\n  border-bottom-left-radius: 2rem;\r\n}\r\n\r\n.link[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin: 1rem 0rem;\r\n  padding: 1rem 5rem;\r\n  align-items: center;\r\n}\r\n\r\n.link[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  padding: 0rem 2rem;\r\n}\r\n\r\n.form-div[_ngcontent-%COMP%] {\r\n  flex: 2;\r\n}\r\n\r\n.pro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  justify-content: center;\r\n  text-align: center;\r\n\r\n  color: white;\r\n}\r\n\r\n.admin-image[_ngcontent-%COMP%] {\r\n  height: 80px;\r\n  width: 80px;\r\n  border-radius: 40rem;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.status[_ngcontent-%COMP%] {\r\n  padding-top: 20px;\r\n  background: linear-gradient(315deg, #000000 0%, #414141 74%);\r\n  color: rgb(221, 221, 221);\r\n  text-align: center;\r\n  height: 200px;\r\n  width: 70%;\r\n  z-index: 2;\r\n  border-top-right-radius: 2rem;\r\n  position: absolute;\r\n  \r\n}\r\n\r\n.status[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.8),\r\n    rgba(255, 255, 255, 0.5)\r\n  );\r\n  margin-top: 1rem;\r\n  text-align: center;\r\n  border: none;\r\n  width: 100px;\r\n  height: 50px;\r\n  font-size: 25px;\r\n  font-weight: bold;\r\n  padding: 0.5rem;\r\n  border-radius: 2rem;\r\n}\r\n\r\n.cards[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  height: 40%;\r\n  width: 40%;\r\n\r\n  z-index: 3;\r\n  transform: translate(25%, 255px);\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  height: 85px;\r\n  width: 100%;\r\n  display: flex;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.8),\r\n    rgba(255, 255, 255, 0.5)\r\n  );\r\n  border-radius: 1rem;\r\n  margin: 1.8rem;\r\n  padding: 0.5rem;\r\n  box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.5);\r\n  justify-content: space-between;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.vi[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n\r\n  height: 60px;\r\n  width: 60px;\r\n  transform: translate(90%, 107px);\r\n  z-index: 2;\r\n}\r\n\r\n.customers-list[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 100%;\r\n  border-radius: 1.5rem;\r\n  color: rgb(221, 221, 221);\r\n  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n}\r\n\r\n.pro[_ngcontent-%COMP%]:hover {\r\n  height: 90px;\r\n  width: 70%;\r\n  transition: all 0.2s;\r\n}\r\n\r\n.pro[_ngcontent-%COMP%] {\r\n  font-weight: normal;\r\n  position: relative;\r\n  height: 80px;\r\n  width: 60%;\r\n\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.form-div[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background-color: #525a50b9;\r\n  color: rgb(221, 221, 221);\r\n  font-weight: bolder;\r\n  font-size: 19px;\r\n\r\n  padding: 2px;\r\n  height: 100%;\r\n  width: 100%;\r\n  position: relative;\r\n\r\n  cursor: pointer;\r\n  border-radius: 0.7rem;\r\n  \r\n  transition: 0.3s;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background-color: #259409b9;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGV0ZS1jb21wYW55LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUNBOztFQUVFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrRUFBa0U7RUFDbEUscURBQXFEO0VBQ3JELGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVjs7OztHQUlDOztFQUVELG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCOzs7O0dBSUM7RUFDRCxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNFQUFzRTtFQUN0RSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwyQkFBbUI7RUFBbkIsd0JBQW1CO0VBQW5CLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCOzs7O0dBSUM7RUFDRCw0QkFBNEI7RUFDNUIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjs7RUFFbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7O0FBRUEsaUJBQWlCOztBQUNqQix3Q0FBd0M7O0FBQ3hDLHdDQUF3Qzs7QUFFeEM7RUFDRSxpQkFBaUI7RUFDakIsNERBQTREO0VBQzVELHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFVBQVU7RUFDVixVQUFVO0VBQ1YsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRTs7OztHQUlDO0VBQ0QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7O0VBRVYsVUFBVTtFQUNWLGdDQUFnQztBQUNsQzs7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiOzs7O0dBSUM7RUFDRCxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQWU7RUFDZixpREFBaUQ7RUFDakQsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0Usa0JBQWtCOztFQUVsQixZQUFZO0VBQ1osV0FBVztFQUNYLGdDQUFnQztFQUNoQyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsa0VBQWtFO0VBQ2xFLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVOztFQUVWLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGVBQWU7O0VBRWYsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCOztFQUVsQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0IiLCJmaWxlIjoiZGVsZXRlLWNvbXBhbnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5oMixcclxucCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNmY2UwNDMgMCUsICNmYjdiYTIgNzQlKTtcclxuICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG4gIG1pbi1oZWlnaHQ6IDgwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5nbGFzcyB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgbWF4LWhlaWdodDogNjR2aDtcclxuICBtaW4td2lkdGg6IDU1MHB4O1xyXG4gIHdpZHRoOiA2NSU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gcmlnaHQgYm90dG9tLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpXHJcbiAgKTtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uY2lyY2xlMSxcclxuLmNpcmNsZTIge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIHJpZ2h0IGJvdHRvbSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMSksXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDIpXHJcbiAgKTtcclxuICBoZWlnaHQ6IDEzcmVtO1xyXG4gIHdpZHRoOiAxM3JlbTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uY2lyY2xlMSB7XHJcbiAgdG9wOiAxMyU7XHJcbiAgcmlnaHQ6IDEyJTtcclxuICB6LWluZGV4OiAwLjI7XHJcbn1cclxuXHJcbi5jaXJjbGUyIHtcclxuICBib3R0b206IDklO1xyXG4gIGxlZnQ6IDEyJTtcclxuICB6LWluZGV4OiAwLjI7XHJcbn1cclxuXHJcbi5tZW1iZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCBcIkFyaWFsIE5hcnJvdyBCb2xkXCIsIHNhbnMtc2VyaWY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5cclxuLmRhc2hib2FyZCB7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBtaW4taGVpZ2h0OiA2NHZoO1xyXG4gIC8qIGhlaWdodDogMTAwJTsgKi9cclxuICB3aWR0aDogMzAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byByaWdodCBib3R0b20sXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyksXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMylcclxuICApO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDJyZW07XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMnJlbTtcclxufVxyXG5cclxuLmxpbmsge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiAxcmVtIDByZW07XHJcbiAgcGFkZGluZzogMXJlbSA1cmVtO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5saW5rIGgyIHtcclxuICBwYWRkaW5nOiAwcmVtIDJyZW07XHJcbn1cclxuXHJcbi5mb3JtLWRpdiB7XHJcbiAgZmxleDogMjtcclxufVxyXG5cclxuLnBybyBwIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmFkbWluLWltYWdlIHtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNDByZW07XHJcbn1cclxuXHJcbi8qIEdhbWUgc2VjdGlvbiAqL1xyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLnN0YXR1cyB7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzAwMDAwMCAwJSwgIzQxNDE0MSA3NCUpO1xyXG4gIGNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgd2lkdGg6IDcwJTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycmVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIC0yNXB4KTsgKi9cclxufVxyXG5cclxuLnN0YXR1cyBpbnB1dCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gcmlnaHQgYm90dG9tLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpXHJcbiAgKTtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbn1cclxuXHJcbi5jYXJkcyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogNDAlO1xyXG4gIHdpZHRoOiA0MCU7XHJcblxyXG4gIHotaW5kZXg6IDM7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjUlLCAyNTVweCk7XHJcbn1cclxuLmNhcmQge1xyXG4gIGhlaWdodDogODVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIHJpZ2h0IGJvdHRvbSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KVxyXG4gICk7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBtYXJnaW46IDEuOHJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgYm94LXNoYWRvdzogNnB4IDZweCAyMHB4IHJnYmEoMTIyLCAxMjIsIDEyMiwgMC41KTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5jYXJkIGJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi52aSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoOTAlLCAxMDdweCk7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmN1c3RvbWVycy1saXN0IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xyXG4gIGNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzAwMDAwMCAwJSwgIzQxNDE0MSA3NCUpO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnBybzpob3ZlciB7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbn1cclxuLnBybyB7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHdpZHRoOiA2MCU7XHJcblxyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi5mb3JtLWRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcbmZvcm0gYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI1YTUwYjk7XHJcbiAgY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxuXHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAwLjdyZW07XHJcbiAgLyogb3V0bGluZTogbm9uZTsgKi9cclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcbmZvcm0gYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjU5NDA5Yjk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "gsY+":
/*!*********************************************************************!*\
  !*** ./src/app/components/client-header/client-header.component.ts ***!
  \*********************************************************************/
/*! exports provided: ClientHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientHeaderComponent", function() { return ClientHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ClientHeaderComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function ClientHeaderComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function ClientHeaderComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function ClientHeaderComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientHeaderComponent_ng_template_8_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.onLinksLiClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Manage Companies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add Company ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Update Compnay");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Delete Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Find Company By ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "All Companies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientHeaderComponent_ng_template_8_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.onLinksLiClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Manage Customers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Add Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Update Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Delete Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Find Customer By ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "All Customers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClientHeaderComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientHeaderComponent_ng_template_10_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.onLinksLiClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Manage Coupons");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add Coupon ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Update Coupon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Delete Coupon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Get All Coupons");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Get By Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Get By Limit-Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientHeaderComponent_ng_template_10_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.onLinksLiClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \u25B6 My Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClientHeaderComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientHeaderComponent_ng_template_12_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.onLinksLiClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Manage Coupons");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Purchase Coupon ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Get All Coupons");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Get Coupons By Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Get Coupons By Limit-Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientHeaderComponent_ng_template_12_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.onLinksLiClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u25B6 My Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClientHeaderComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function ClientHeaderComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientHeaderComponent_ng_template_19_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.userSpaceNavigate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " My Space");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClientHeaderComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function ClientHeaderComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientHeaderComponent_ng_template_28_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.navSlide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClientHeaderComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientHeaderComponent_ng_template_30_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.navSlide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ClientHeaderComponent {
    constructor(router) {
        this.router = router;
        this.isLoggedIn = localStorage.getItem('is_login');
        this.theClientType = localStorage.getItem('client_type');
    }
    ngOnInit() {
        this.navClicked = false;
        // localStorage.clear();
        console.log(localStorage.getItem('token'));
        console.log(localStorage.getItem('is_login'));
    }
    userSpaceNavigate() {
        let type = localStorage.getItem('client_type');
        console.log(type);
        switch (type) {
            case 'Administrator':
                this.router.navigate(['admin/admin-layout']);
                break;
            case 'Company':
                this.router.navigate(['company/company-menu']);
                break;
            case 'Customer':
                this.router.navigate(['customer/customer-menu']);
                break;
            default:
                break;
        }
    }
    onLinksLiClick() {
        if (this.navClicked) {
            this.navSlide();
        }
    }
    navSlide() {
        var _a, _b;
        (_a = document.querySelector('.nav-links')) === null || _a === void 0 ? void 0 : _a.classList.toggle('nav-active');
        (_b = document.querySelector('.burger')) === null || _b === void 0 ? void 0 : _b.classList.toggle('toggle');
        if (this.navClicked) {
            this.navClicked = false;
        }
        else {
            this.navClicked = true;
        }
    }
}
ClientHeaderComponent.ɵfac = function ClientHeaderComponent_Factory(t) { return new (t || ClientHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ClientHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientHeaderComponent, selectors: [["app-client-header"]], decls: 36, vars: 11, consts: [["routerLink", "/", "routerLinkActive", "active-link", 1, "links-a-home", 3, "click"], [4, "ngIf", "ngIfThen"], ["admin_menu", ""], ["company_menu", ""], ["customer_menu", ""], [1, "nav-links"], ["routerLink", "/", "routerLinkActive", "active-link", 3, "click"], ["ClientExistsAside", ""], ["routerLink", "/about", "routerLinkActive", "active-link", 3, "click"], ["href", "https://www.google.com", "target", "_blank", 3, "click"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["loginTemplate", ""], ["logoutTemplate", ""], [1, "burger", 3, "click"], [1, "line1"], [1, "line2"], [1, "line3"], [1, "dropdown"], [1, "manage-companies"], [3, "click"], ["routerLink", "/admin/add-company", "routerLinkActive", "active-link"], ["routerLink", "/admin/update-company", "routerLinkActive", "active-link"], ["routerLink", "/admin/delete-company", "routerLinkActive", "active-link"], ["routerLink", "/admin/get-one-company", "routerLinkActive", "active-link"], ["routerLink", "/admin/get-all-companies", "routerLinkActive", "active-link"], [1, "manage-customers"], ["routerLink", "/admin/add-customer", "routerLinkActive", "active-link"], ["routerLink", "/admin/update-customer", "routerLinkActive", "active-link"], ["routerLink", "/admin/delete-customer", "routerLinkActive", "active-link"], ["routerLink", "/admin/get-one-customer", "routerLinkActive", "active-link"], ["routerLink", "/admin/get-all-customers", "routerLinkActive", "active-link"], ["routerLink", "/company/add-coupon", "routerLinkActive", "active-link"], ["routerLink", "/company/update-coupon", "routerLinkActive", "active-link"], ["routerLink", "/company/delete-coupon", "routerLinkActive", "active-link"], ["routerLink", "/company/get-all-coupons", "routerLinkActive", "active-link"], ["routerLink", "/company/get-coupons-by-category", "routerLinkActive", "active-link", "routerLinkActive", "active-link"], ["routerLink", "/company/get-coupons-by-limitprice", "routerLinkActive", "active-link", "routerLinkActive", "active-link"], ["routerLink", "/company/get-com-details", "routerLinkActive", "active-link", 3, "click"], ["routerLink", "/customer/purchase-coupon", "routerLinkActive", "active-link"], ["routerLink", "/customer/all-coupons", "routerLinkActive", "active-link"], ["routerLink", "/customer/coupons-by-category", "routerLinkActive", "active-link"], ["routerLink", "/customer/coupons-by-limit-price", "routerLinkActive", "active-link"], ["routerLink", "/customer/get-cus-details", "routerLinkActive", "active-link", 3, "click"], [1, "links-a", 3, "click"], ["routerLink", "/login", "routerLinkActive", "active-link", 3, "click"], ["routerLink", "/logout", "routerLinkActive", "active-link", 3, "click"]], template: function ClientHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientHeaderComponent_Template_a_click_3_listener() { return ctx.onLinksLiClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ClientHeaderComponent_div_5_Template, 1, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ClientHeaderComponent_div_6_Template, 1, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ClientHeaderComponent_div_7_Template, 1, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ClientHeaderComponent_ng_template_8_Template, 39, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ClientHeaderComponent_ng_template_10_Template, 26, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ClientHeaderComponent_ng_template_12_Template, 20, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientHeaderComponent_Template_a_click_16_listener() { return ctx.navSlide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ClientHeaderComponent_div_18_Template, 1, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ClientHeaderComponent_ng_template_19_Template, 3, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientHeaderComponent_Template_a_click_22_listener() { return ctx.navSlide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientHeaderComponent_Template_a_click_25_listener() { return ctx.navSlide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\uD83D\uDD0D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ClientHeaderComponent_div_27_Template, 1, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ClientHeaderComponent_ng_template_28_Template, 3, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ClientHeaderComponent_ng_template_30_Template, 3, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientHeaderComponent_Template_div_click_32_listener() { return ctx.navSlide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.theClientType == "Administrator")("ngIfThen", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.theClientType == "Company")("ngIfThen", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.theClientType == "Customer")("ngIfThen", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn)("ngIfThen", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn)("ngIfThen", _r15)("ngIfElse", _r13);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["*[_ngcontent-%COMP%] {\r\n  margin: 0px;\r\n  padding: 0px;\r\n  box-sizing: border-box;\r\n}\r\nsection[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  position: relative;\r\n  display: grid;\r\n  font-size: medium;\r\n  padding: 0px;\r\n}\r\nnav[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  min-height: 8vh;\r\n  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n.nav-links[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  width: 60%;\r\n}\r\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: rgb(7, 7, 7);\r\n  text-decoration: none;\r\n  letter-spacing: 1px;\r\n  font-weight: bolder;\r\n  font-size: 26px;\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  display: none;\r\n}\r\n.nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  border-bottom: black solid 1.5px;\r\n  padding-top: 5vh;\r\n  justify-content: center;\r\n  text-align: center;\r\n  height: 100%;\r\n  width: 100%;\r\n  list-style: none;\r\n}\r\n.nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n  background-color: #f9ff60;\r\n  background-image: linear-gradient(315deg, #f9ff60 0%, #ffef77 74%);\r\n}\r\n.burger[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-block;\r\n  cursor: pointer;\r\n  left: 60px;\r\n  justify-content: space-around;\r\n}\r\n.burger[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  width: 45px;\r\n  height: 3px;\r\n  background-color: rgb(221, 221, 221);\r\n  margin: 5px;\r\n  position: relative;\r\n  right: 120%;\r\n  transition: all 0.5s ease;\r\n}\r\n.toggle[_ngcontent-%COMP%]   .line1[_ngcontent-%COMP%] {\r\n  transform: rotate(-45deg) translate(-5px, 6px);\r\n}\r\n.toggle[_ngcontent-%COMP%]   .line2[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n}\r\n.toggle[_ngcontent-%COMP%]   .line3[_ngcontent-%COMP%] {\r\n  transform: rotate(45deg) translate(-5px, -6px);\r\n}\r\n@media screen and (max-width: 768px) {\r\n  .nav-links[_ngcontent-%COMP%] {\r\n    width: 65%;\r\n  }\r\n}\r\n@media screen and (max-width: 2048px) {\r\n  body[_ngcontent-%COMP%] {\r\n    overflow-x: hidden;\r\n  }\r\n  .nav-links[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 0px;\r\n    height: 80vh;\r\n    top: 12vh;\r\n    background-color: #485461;\r\n    background-image: linear-gradient(to top left, #28b487, #7dd56f);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 30%;\r\n    transform: translateX(100%);\r\n    transition: 0.4s ease-in;\r\n    z-index: 20;\r\n  }\r\n  .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    \r\n    \r\n    opacity: 1;\r\n  }\r\n  .nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    \r\n    \r\n    display: contents;\r\n  }\r\n  .burger[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n}\r\n.nav-active[_ngcontent-%COMP%] {\r\n  transform: translateX(0%);\r\n  transition: 0.4s ease-in;\r\n}\r\n@keyframes navLinkFade {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateX(50px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateX(0px);\r\n  }\r\n}\r\n.search-link[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  position: relative;\r\n  width: 25px;\r\n  height: 25px;\r\n  right: 0%;\r\n  top: 3px;\r\n}\r\n.login-img[_ngcontent-%COMP%] {\r\n  display: flexbox;\r\n  position: relative;\r\n  width: 28px;\r\n  height: 27px;\r\n  right: 3px;\r\n  transform: translate(-10%, 20%);\r\n  border-radius: 1.5px;\r\n}\r\n.links-a-home[_ngcontent-%COMP%] {\r\n  color: rgb(221, 221, 221);\r\n  text-transform: uppercase;\r\n  text-decoration: none;\r\n  font-size: 25px;\r\n  letter-spacing: 3px;\r\n  margin: 0%;\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-weight: normal;\r\n}\r\n.links-a[_ngcontent-%COMP%] {\r\n  color: rgb(221, 221, 221);\r\n  text-decoration: none;\r\n  font-size: 25px;\r\n  letter-spacing: 2px;\r\n  margin: 3px;\r\n  font-family: \"Poppins\", sans-serif;\r\n  cursor: pointer;\r\n  font-weight: lighter;\r\n}\r\n.nav-links-hidden[_ngcontent-%COMP%] {\r\n  transform: translateX(100%);\r\n}\r\n.active-link[_ngcontent-%COMP%] {\r\n  font-weight: bolder;\r\n}\r\n\r\n\r\n\r\n\r\n.dropdown[_ngcontent-%COMP%] {\r\n  display: contents;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n.manage-companies[_ngcontent-%COMP%], .manage-customers[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  \r\n}\r\n.manage-companies[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .manage-customers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  background: white;\r\n  margin-top: 5%;\r\n  height: 320px;\r\n  width: 120%;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  list-style: none;\r\n  border-radius: 8px;\r\n  opacity: 0;\r\n  pointer-events: none;\r\n  left: -18px;\r\n  z-index: 20;\r\n  transform: translateY(40px);\r\n  transition: all 0.5s ease;\r\n}\r\n.manage-companies[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .manage-customers[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: black;\r\n  text-decoration: none;\r\n  text-align: center;\r\n}\r\n.manage-companies[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, .manage-customers[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n  background-color: #485461;\r\n  background-image: linear-gradient(to top left, #28b487, #7dd56f);\r\n  border-radius: 8px;\r\n  pointer-events: all;\r\n}\r\n.manage-companies[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .manage-customers[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-image: rgb(221, 221, 221);\r\n  cursor: pointer;\r\n}\r\n.dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background: none;\r\n  border: none;\r\n  color: rgb(221, 221, 221);\r\n  text-decoration: none;\r\n  font-size: x-large;\r\n  cursor: pointer;\r\n}\r\n.dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  color: black;\r\n}\r\n.manage-companies[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus    + ul[_ngcontent-%COMP%], .manage-customers[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus    + ul[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  pointer-events: all;\r\n  transform: translateY(18px);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC1oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsWUFBWTtBQUNkO0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysa0VBQWtFO0VBQ2xFLGtDQUFrQztBQUNwQztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixVQUFVO0FBQ1o7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YscURBQXFEO0VBQ3JELGFBQWE7QUFDZjtBQUNBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsa0VBQWtFO0FBQ3BFO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixVQUFVO0VBQ1YsNkJBQTZCO0FBQy9CO0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLG9DQUFvQztFQUNwQyxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLDhDQUE4QztBQUNoRDtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSw4Q0FBOEM7QUFDaEQ7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7QUFDQTtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixTQUFTO0lBQ1QseUJBQXlCO0lBQ3pCLGdFQUFnRTtJQUNoRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4QixXQUFXO0VBQ2I7RUFDQTtJQUNFLG1EQUFtRDtJQUNuRCxtREFBbUQ7SUFDbkQsVUFBVTtFQUNaO0VBQ0E7SUFDRSxvQ0FBb0M7SUFDcEMsb0NBQW9DO0lBQ3BDLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtBQUNGO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsd0JBQXdCO0FBQzFCO0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDViwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLFVBQVU7SUFDViwwQkFBMEI7RUFDNUI7QUFDRjtBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFDVCxRQUFRO0FBQ1Y7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1YsK0JBQStCO0VBQy9CLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1Ysa0NBQWtDO0VBQ2xDLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFDQSxxREFBcUQ7QUFDckQscURBQXFEO0FBQ3JELHFEQUFxRDtBQUNyRCxxREFBcUQ7QUFFckQ7RUFDRSxpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7O0VBRUUsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2QjtBQUNBOztFQUVFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGFBQWE7RUFDYixXQUFXO0VBQ1gsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsV0FBVztFQUNYLDJCQUEyQjtFQUMzQix5QkFBeUI7QUFDM0I7QUFDQTs7RUFFRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjtBQUNBOztFQUVFLHlCQUF5QjtFQUN6QixnRUFBZ0U7RUFDaEUsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLGVBQWU7QUFDakI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7O0VBRUUsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQiwyQkFBMkI7QUFDN0IiLCJmaWxlIjoiY2xpZW50LWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuc2VjdGlvbiB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxubmF2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogOHZoO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICMwMDAwMDAgMCUsICM0MTQxNDEgNzQlKTtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5uYXYtbGlua3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgd2lkdGg6IDYwJTtcclxufVxyXG4ubmF2LWxpbmtzIGEge1xyXG4gIGNvbG9yOiByZ2IoNywgNywgNyk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5uYXYtbGlua3MgbGkge1xyXG4gIGJvcmRlci1ib3R0b206IGJsYWNrIHNvbGlkIDEuNXB4O1xyXG4gIHBhZGRpbmctdG9wOiA1dmg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi5uYXYtbGlua3MgbGk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWZmNjA7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2Y5ZmY2MCAwJSwgI2ZmZWY3NyA3NCUpO1xyXG59XHJcblxyXG4uYnVyZ2VyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBsZWZ0OiA2MHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4uYnVyZ2VyIGRpdiB7XHJcbiAgd2lkdGg6IDQ1cHg7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICByaWdodDogMTIwJTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG59XHJcbi50b2dnbGUgLmxpbmUxIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtNXB4LCA2cHgpO1xyXG59XHJcbi50b2dnbGUgLmxpbmUyIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbi50b2dnbGUgLmxpbmUzIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC01cHgsIC02cHgpO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5uYXYtbGlua3Mge1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjA0OHB4KSB7XHJcbiAgYm9keSB7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgfVxyXG4gIC5uYXYtbGlua3Mge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIGhlaWdodDogODB2aDtcclxuICAgIHRvcDogMTJ2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ODU0NjE7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIGxlZnQsICMyOGI0ODcsICM3ZGQ1NmYpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbjtcclxuICAgIHotaW5kZXg6IDIwO1xyXG4gIH1cclxuICAubmF2LWxpbmtzIGxpIHtcclxuICAgIC8qIHR1cm4gdG8gMCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuICAgIC8qIHR1cm4gdG8gMCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIC5uYXYtbGlua3MgYSB7XHJcbiAgICAvKiBvcHRpb25hbD09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbiAgICAvKiBvcHRpb25hbD09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbiAgICBkaXNwbGF5OiBjb250ZW50cztcclxuICB9XHJcbiAgLmJ1cmdlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbi5uYXYtYWN0aXZlIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbjtcclxufVxyXG5cclxuQGtleWZyYW1lcyBuYXZMaW5rRmFkZSB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwcHgpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VhcmNoLWxpbmsge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICByaWdodDogMCU7XHJcbiAgdG9wOiAzcHg7XHJcbn1cclxuLmxvZ2luLWltZyB7XHJcbiAgZGlzcGxheTogZmxleGJveDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDI4cHg7XHJcbiAgaGVpZ2h0OiAyN3B4O1xyXG4gIHJpZ2h0OiAzcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwJSwgMjAlKTtcclxuICBib3JkZXItcmFkaXVzOiAxLjVweDtcclxufVxyXG5cclxuLmxpbmtzLWEtaG9tZSB7XHJcbiAgY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICBtYXJnaW46IDAlO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcbi5saW5rcy1hIHtcclxuICBjb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICBtYXJnaW46IDNweDtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG59XHJcblxyXG4ubmF2LWxpbmtzLWhpZGRlbiB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG59XHJcblxyXG4uYWN0aXZlLWxpbmsge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4uZHJvcGRvd24ge1xyXG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5tYW5hZ2UtY29tcGFuaWVzLFxyXG4ubWFuYWdlLWN1c3RvbWVycyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8qIG1hcmdpbi10b3A6IDBweDsgKi9cclxufVxyXG4ubWFuYWdlLWNvbXBhbmllcyB1bCxcclxuLm1hbmFnZS1jdXN0b21lcnMgdWwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBoZWlnaHQ6IDMyMHB4O1xyXG4gIHdpZHRoOiAxMjAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgbGVmdDogLTE4cHg7XHJcbiAgei1pbmRleDogMjA7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQwcHgpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbn1cclxuLm1hbmFnZS1jb21wYW5pZXMgYSxcclxuLm1hbmFnZS1jdXN0b21lcnMgYSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm1hbmFnZS1jb21wYW5pZXMgbGk6aG92ZXIsXHJcbi5tYW5hZ2UtY3VzdG9tZXJzIGxpOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDg1NDYxO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgbGVmdCwgIzI4YjQ4NywgIzdkZDU2Zik7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbn1cclxuLm1hbmFnZS1jb21wYW5pZXMgbGksXHJcbi5tYW5hZ2UtY3VzdG9tZXJzIGxpIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmRyb3Bkb3duIGJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZHJvcGRvd24gYnV0dG9uOmhvdmVyIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5tYW5hZ2UtY29tcGFuaWVzIGJ1dHRvbjpmb2N1cyArIHVsLFxyXG4ubWFuYWdlLWN1c3RvbWVycyBidXR0b246Zm9jdXMgKyB1bCB7XHJcbiAgb3BhY2l0eTogMTtcclxuICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxOHB4KTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "hTgH":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/customer/apis/coupons-by-limit-pricey/coupons-by-limit-pricey.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: CouponsByLimitPriceyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponsByLimitPriceyComponent", function() { return CouponsByLimitPriceyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/customer.service */ "0zL+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function CouponsByLimitPriceyComponent_img_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 9);
} }
function CouponsByLimitPriceyComponent_section_16_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 13);
} }
function CouponsByLimitPriceyComponent_section_16_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r7.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r7.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r7.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r7.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r7.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r7.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", c_r7.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CouponsByLimitPriceyComponent_section_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CouponsByLimitPriceyComponent_section_16_ng_template_2_Template, 1, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Coupons By Limit Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Start-Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "End-Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, CouponsByLimitPriceyComponent_section_16_tr_28_Template, 18, 8, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.coupons);
} }
class CouponsByLimitPriceyComponent {
    constructor(customerService, router, snackBar) {
        this.customerService = customerService;
        this.router = router;
        this.snackBar = snackBar;
    }
    ngOnInit() {
        // this.products = this.ProductsService.getAllProducts
    }
    getCouponsByLimitPrice() {
        console.log(`
    limit: ${this.maxPrice}
    `);
        this.customerService.getCouponsByMaxPrice(this.maxPrice).subscribe((arrOfCoupons) => {
            if (arrOfCoupons.length == 0) {
                this.snackBar.open(`No coupons to show :(`, 'i got it', {
                    verticalPosition: 'top',
                    duration: 4000,
                });
            }
            this.coupons = arrOfCoupons;
        }, (e) => {
            if (e.status === 401) {
                console.log(401);
                this.router.navigate(['unautorized']);
            }
            else {
                this.snackBar.open(`${e.error}`, 'i got it', {
                    verticalPosition: 'top',
                });
            }
            console.dir(e);
        });
    }
}
CouponsByLimitPriceyComponent.ɵfac = function CouponsByLimitPriceyComponent_Factory(t) { return new (t || CouponsByLimitPriceyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
CouponsByLimitPriceyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CouponsByLimitPriceyComponent, selectors: [["app-coupons-by-limit-pricey"]], decls: 17, vars: 4, consts: [[1, "form-div"], ["formInfo", "ngForm"], [1, "header"], [1, "card"], ["class", "vi", "src", "/assets/validImage.png", "alt", "", 4, "ngIf"], ["name", "price", "type", "number", "placeholder", "Insert Max Price", "required", "", 3, "ngModel", "ngModelChange"], ["priceInfo", "ngModel"], ["type", "submit", "value", "Get By Limit Price", 3, "disabled", "click"], ["class", "container", 4, "ngIf"], ["src", "/assets/validImage.png", "alt", "", 1, "vi"], [1, "container"], ["loading", ""], [4, "ngFor", "ngForOf"], ["src", "/assets/LoadingGif.gif", "alt", "loading"], [3, "href"], ["src", "/assets/coupon-link.png", "alt", "image-link"]], template: function CouponsByLimitPriceyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Which Coupon's Limit Price ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " would you like ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CouponsByLimitPriceyComponent_img_10_Template, 1, 0, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CouponsByLimitPriceyComponent_Template_input_ngModelChange_11_listener($event) { return ctx.maxPrice = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CouponsByLimitPriceyComponent_Template_button_click_14_listener() { return ctx.getCouponsByLimitPrice(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Check ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CouponsByLimitPriceyComponent_section_16_Template, 29, 1, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.maxPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.form.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.coupons);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["*[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n  background-color: #fff293;\r\n  background-image: linear-gradient(315deg, #fff293 0%, #ffe884 74%);\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  min-height: 80vh;\r\n  min-width: 150vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  text-align: center;\r\n  overflow-y: auto;\r\n}\r\n\r\n.header[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  text-align: center;\r\n\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  font-weight: bold;\r\n  color: rgb(221, 221, 221);\r\n  font-size: 35px;\r\n}\r\n\r\n.form-div[_ngcontent-%COMP%] {\r\n  background-color: #000000;\r\n  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);\r\n  \r\n  position: relative;\r\n  height: 30%;\r\n  width: 50%;\r\n  padding: 10px;\r\n  margin-top: 50px;\r\n  box-sizing: content-box;\r\n\r\n  border-radius: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  flex: 2;\r\n  position: relative;\r\n  transform: translateX(-8%);\r\n  min-height: 20vh;\r\n  margin-top: 40px;\r\n  margin-bottom: 40px;\r\n  margin-left: 15%;\r\n  padding-bottom: 5%;\r\n\r\n  width: 85%;\r\n  padding: 10px;\r\n  \r\n  box-sizing: content-box;\r\n  justify-content: space-around;\r\n  display: block;\r\n  border-radius: 2rem;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.5),\r\n    rgba(255, 255, 255, 0.1)\r\n  );\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  transform: translateX(20%);\r\n  height: 65px;\r\n  width: 100px;\r\n  min-width: 60%;\r\n  display: flex;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.8),\r\n    rgba(255, 255, 255, 0.5)\r\n  );\r\n  border-radius: 1rem;\r\n  margin: 1.8rem;\r\n  padding: 0.5rem;\r\n  justify-content: space-between;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  text-align: center;\r\n\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  font-weight: bold;\r\n  background-color: rgb(221, 221, 221);\r\n  font-size: 35px;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  background-color: #485461;\r\n  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);\r\n  padding: 5px;\r\n  line-height: 2.3rem;\r\n  margin: auto;\r\n  width: 85%;\r\n\r\n  text-align: center;\r\n  border-radius: 0.7rem;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n  color: rgb(221, 221, 221);\r\n  border: solid black 1px;\r\n  border-radius: 0.4rem;\r\n  font-size: 18px;\r\n  \r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n  background-color: #438b31b9;\r\n  border-radius: 0.3rem;\r\n  font-size: 22px;\r\n}\r\n\r\n.ID-row[_ngcontent-%COMP%] {\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  font-style: italic;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n}\r\n\r\n.vi[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin-top: 0.2rem;\r\n  height: 60px;\r\n  width: 60px;\r\n  transform: translate(-5px, -10px);\r\n}\r\n\r\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background-color: #525a50b9;\r\n  color: rgb(221, 221, 221);\r\n  font-weight: bolder;\r\n  font-size: 19px;\r\n\r\n  padding: 2px;\r\n  height: 100%;\r\n  width: 100%;\r\n  position: relative;\r\n\r\n  cursor: pointer;\r\n  border-radius: 0.7rem;\r\n  \r\n  \r\n}\r\n\r\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background-color: #fff293;\r\n  background-image: linear-gradient(315deg, #fff293 0%, #ffe884 74%);\r\n  border-radius: 1rem;\r\n  text-align: center;\r\n  font-size: 22px;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\r\n  font-size: 22px;\r\n  padding-inline-start: 30px;\r\n}\r\n\r\nspan[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  font-weight: bold;\r\n  letter-spacing: 1px;\r\n  transform: translateY(10px);\r\n}\r\n\r\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background-color: #57854bb9;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin: auto;\r\n  width: 50px;\r\n}\r\n\r\n[_nghost-%COMP%] {\r\n  display: block;\r\n  height: 100%;\r\n  overflow: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXBvbnMtYnktbGltaXQtcHJpY2V5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtFQUFrRTtFQUNsRSxxREFBcUQ7RUFDckQsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7O0VBRWxCLHFEQUFxRDtFQUNyRCxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsa0VBQWtFO0VBQ2xFLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDVixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHVCQUF1Qjs7RUFFdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCOztFQUVsQixVQUFVO0VBQ1YsYUFBYTtFQUNiO2tDQUNnQztFQUNoQyx1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkI7Ozs7R0FJQztBQUNIOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osWUFBWTtFQUNaLGNBQWM7RUFDZCxhQUFhO0VBQ2I7Ozs7R0FJQztFQUNELG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZUFBZTtFQUNmLDhCQUE4QjtBQUNoQzs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7O0VBRWxCLHFEQUFxRDtFQUNyRCxpQkFBaUI7RUFDakIsb0NBQW9DO0VBQ3BDLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGtFQUFrRTtFQUNsRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixVQUFVOztFQUVWLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysd0VBQXdFO0FBQzFFOztBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsZ0RBQWdEO0VBQ2hELGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQ0FBaUM7QUFDbkM7O0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixlQUFlOztFQUVmLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjs7RUFFbEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrRUFBa0U7RUFDbEUsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLDBCQUEwQjtBQUM1Qjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixxREFBcUQ7RUFDckQsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQiwyQkFBMkI7QUFDN0I7O0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osY0FBYztBQUNoQiIsImZpbGUiOiJjb3Vwb25zLWJ5LWxpbWl0LXByaWNleS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYyOTM7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2ZmZjI5MyAwJSwgI2ZmZTg4NCA3NCUpO1xyXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XHJcbiAgbWluLWhlaWdodDogODB2aDtcclxuICBtaW4td2lkdGg6IDE1MHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcbi5oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbn1cclxuLmZvcm0tZGl2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICMwMDAwMDAgMCUsICM0MTQxNDEgNzQlKTtcclxuICAvKiBjb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpOyAqL1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDMwJTtcclxuICB3aWR0aDogNTAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGZsZXg6IDI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtOCUpO1xyXG4gIG1pbi1oZWlnaHQ6IDIwdmg7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgcGFkZGluZy1ib3R0b206IDUlO1xyXG5cclxuICB3aWR0aDogODUlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgLyogbWluLXdpZHRoOiA4MDBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiBtaW4tY29udGVudDsgKi9cclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIHJpZ2h0IGJvdHRvbSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKVxyXG4gICk7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwJSk7XHJcbiAgaGVpZ2h0OiA2NXB4O1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBtaW4td2lkdGg6IDYwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIHJpZ2h0IGJvdHRvbSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KVxyXG4gICk7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBtYXJnaW46IDEuOHJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbmgxIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbn1cclxudGFibGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDg1NDYxO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM0ODU0NjEgMCUsICMyODMxM2IgNzQlKTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIuM3JlbTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDg1JTtcclxuXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcclxufVxyXG5cclxudGQge1xyXG4gIGNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbiAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjZmNlMDQzIDAlLCAjZmI3YmEyIDc0JSk7ICovXHJcbn1cclxudGgge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzhiMzFiOTtcclxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcbi5JRC1yb3cge1xyXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi52aSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IDAuMnJlbTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwgLTEwcHgpO1xyXG59XHJcbmZvcm0gYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI1YTUwYjk7XHJcbiAgY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxuXHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAwLjdyZW07XHJcbiAgLyogb3V0bGluZTogbm9uZTsgKi9cclxuICAvKiB0cmFuc2l0aW9uOiAwLjNzOyAqL1xyXG59XHJcbmZvcm0gaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYyOTM7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2ZmZjI5MyAwJSwgI2ZmZTg4NCA3NCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5mb3JtIG9wdGlvbiB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAzMHB4O1xyXG59XHJcbnNwYW4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xyXG59XHJcbmZvcm0gYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTc4NTRiYjk7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "iAog":
/*!******************************************!*\
  !*** ./src/app/models/category.model.ts ***!
  \******************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
var Category;
(function (Category) {
    Category["Food"] = "Food";
    Category["Electricity"] = "Electricity";
    Category["Restaurant"] = "Restaurant";
    Category["Vacation"] = "Vacation";
    Category["Sport"] = "Sport";
})(Category || (Category = {}));


/***/ }),

/***/ "iKn7":
/*!*************************************************************************!*\
  !*** ./src/app/components/admin/admin-layout/admin-layout.component.ts ***!
  \*************************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AdminLayoutComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
}
AdminLayoutComponent.ɵfac = function AdminLayoutComponent_Factory(t) { return new (t || AdminLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AdminLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminLayoutComponent, selectors: [["app-admin-layout"]], decls: 11, vars: 0, consts: [[1, "container"], [1, "header"], [1, "about-us"], ["beha", "", "vior", "", "direction", ""]], template: function AdminLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Welcom Admin ! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " We are happy to have you back :) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "marquee", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " all the operations you need is on the nav bar \u261D\uD83C\uDFFB right above you, contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  display: grid;\r\n  grid-template-rows: 12% 80% 8%;\r\n  grid-template-columns: 100%;\r\n  font-family: sans-serif;\r\n  color: #333;\r\n  line-height: 1.5;\r\n  justify-content: center;\r\n  background-color: #fce043;\r\n  background-image: linear-gradient(315deg, #fce043 0%, #fb7ba2 74%);\r\n  overflow-x: hidden;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.header[_ngcontent-%COMP%] {\r\n  font-style: normal;\r\n  font-size: 4rem;\r\n  font-weight: 600;\r\n  background: rgba(0, 0, 0, 0.6);\r\n  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);\r\n  color: rgb(221, 221, 221);\r\n}\r\n\r\n.about-us[_ngcontent-%COMP%] {\r\n  font-family: \"Poppins\", sans-serif;\r\n  color: rgb(221, 221, 221);\r\n  font-size: medium;\r\n  font-size: 2rem;\r\n  font-weight: 100;\r\n  padding: 1.25rem 1.5rem;\r\n  margin: 0;\r\n  border: solid #5d4954 4px;\r\n  \r\n  background: rgba(0, 0, 0, 0.5);\r\n  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);\r\n  border-radius: 10rem;\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWxheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsa0VBQWtFO0VBQ2xFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtFQUM5QiwwQ0FBMEM7RUFDMUMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsU0FBUztFQUNULHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLDBDQUEwQztFQUMxQyxvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQiIsImZpbGUiOiJhZG1pbi1sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTIlIDgwJSA4JTtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNlMDQzO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNmY2UwNDMgMCUsICNmYjdiYTIgNzQlKTtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5oZWFkZXIge1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDRyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgYm94LXNoYWRvdzogMCAzcmVtIDVyZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIGNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbn1cclxuXHJcbi5hYm91dC11cyB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbiAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgcGFkZGluZzogMS4yNXJlbSAxLjVyZW07XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJvcmRlcjogc29saWQgIzVkNDk1NCA0cHg7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgKi9cclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcmVtIDVyZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "j+be":
/*!*****************************************!*\
  !*** ./src/app/models/company.model.ts ***!
  \*****************************************/
/*! exports provided: Company */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Company", function() { return Company; });
class Company {
    constructor(id, name, email, password, couponsList) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.couponsList = couponsList;
    }
}


/***/ }),

/***/ "jaen":
/*!******************************************************************************!*\
  !*** ./src/app/components/customer/customer-menu/customer-menu.component.ts ***!
  \******************************************************************************/
/*! exports provided: CustomerMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerMenuComponent", function() { return CustomerMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CustomerMenuComponent {
    constructor() {
        this.currentDate = new Date();
    }
    ngOnInit() {
        this.initWelcome();
    }
    initWelcome() {
        let clientName = localStorage.getItem('Name');
        let welcome;
        if (this.currentDate.getHours() >= 6 && this.currentDate.getHours() < 12) {
            welcome = 'Good Morning';
        }
        else if (this.currentDate.getHours() >= 12 &&
            this.currentDate.getHours() <= 20) {
            welcome = 'Good Afternoon';
        }
        else {
            welcome = 'Good Night';
        }
        this.welcomeStatment = `${welcome}, ${clientName} `;
        console.log(this.welcomeStatment);
    }
}
CustomerMenuComponent.ɵfac = function CustomerMenuComponent_Factory(t) { return new (t || CustomerMenuComponent)(); };
CustomerMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerMenuComponent, selectors: [["app-customer-menu"]], decls: 9, vars: 1, consts: [[1, "container"], [1, "header"], [1, "about-us"], ["beha", "", "vior", "", "direction", ""]], template: function CustomerMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "marquee", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " we are happy to have you! all the operations you need is on the nav bar \u261D\uD83C\uDFFB right above you, contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.welcomeStatment, " ");
    } }, styles: [".container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  display: grid;\r\n  grid-template-rows: 12% 80% 8%;\r\n  grid-template-columns: 100%;\r\n  font-family: sans-serif;\r\n  color: #333;\r\n  line-height: 1.5;\r\n  justify-content: center;\r\n  background-color: #fff293;\r\n  background-image: linear-gradient(315deg, #fff293 0%, #ffe884 74%);\r\n  overflow-x: hidden;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.header[_ngcontent-%COMP%] {\r\n  font-style: normal;\r\n  font-size: 4rem;\r\n  font-weight: 600;\r\n  background: rgba(0, 0, 0, 0.6);\r\n  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);\r\n  color: rgb(221, 221, 221);\r\n}\r\n\r\n.about-us[_ngcontent-%COMP%] {\r\n  font-family: \"Poppins\", sans-serif;\r\n  color: rgb(221, 221, 221);\r\n  font-size: medium;\r\n  font-size: 2rem;\r\n  font-weight: 100;\r\n  padding: 1.25rem 1.5rem;\r\n  margin: 0;\r\n  border: solid #5d4954 4px;\r\n  \r\n  background: rgba(0, 0, 0, 0.5);\r\n  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);\r\n  border-radius: 10rem;\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztFQUNULHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGtFQUFrRTtFQUNsRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsMENBQTBDO0VBQzFDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLDhCQUE4QjtFQUM5QiwwQ0FBMEM7RUFDMUMsb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakIiLCJmaWxlIjoiY3VzdG9tZXItbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMiUgODAlIDglO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzMzMztcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYyOTM7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2ZmZjI5MyAwJSwgI2ZmZTg4NCA3NCUpO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuZGl2IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmhlYWRlciB7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogNHJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICBib3gtc2hhZG93OiAwIDNyZW0gNXJlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxufVxyXG5cclxuLmFib3V0LXVzIHtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuICBmb250LXNpemU6IG1lZGl1bTtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICBwYWRkaW5nOiAxLjI1cmVtIDEuNXJlbTtcclxuICBtYXJnaW46IDA7XHJcbiAgYm9yZGVyOiBzb2xpZCAjNWQ0OTU0IDRweDtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAqL1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBib3gtc2hhZG93OiAwIDNyZW0gNXJlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTByZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "jqPe":
/*!************************************************************************************!*\
  !*** ./src/app/components/admin/apis/delete-customer/delete-customer.component.ts ***!
  \************************************************************************************/
/*! exports provided: DeleteCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCustomerComponent", function() { return DeleteCustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/admin.service */ "AJ6+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function DeleteCustomerComponent_img_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 21);
} }
class DeleteCustomerComponent {
    constructor(adminService, router, snackBar) {
        this.adminService = adminService;
        this.router = router;
        this.snackBar = snackBar;
    }
    ngOnInit() { }
    deleteCustomer() {
        console.log(localStorage.getItem('token'));
        console.log(`customer ID: ${this.customerId}`);
        this.adminService.deleteCustomer(this.customerId).subscribe((answer) => {
            this.snackBar.open(`${answer.concat('✅')}`, 'i got it', {
                verticalPosition: 'top',
            });
        }, (e) => {
            if (e.status === 401) {
                console.log(401);
                this.router.navigate(['unautorized']);
            }
            else {
                this.snackBar.open(`${e.error}`, 'i got it', {
                    verticalPosition: 'top',
                });
            }
            console.dir(e);
        });
    }
}
DeleteCustomerComponent.ɵfac = function DeleteCustomerComponent_Factory(t) { return new (t || DeleteCustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
DeleteCustomerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteCustomerComponent, selectors: [["app-delete-customer"]], decls: 37, vars: 3, consts: [[1, "glass"], [1, "dashboard"], [1, "user"], ["src", "/assets/adminImage2.png", "alt", "", 1, "admin-image"], [1, "member"], [1, "links"], [1, "link"], [1, "pro"], ["routerLink", "../get-all-customers", "routerLinkActive", "active-link", 1, "customers-list"], [1, "form-div"], ["formInfo", "ngForm"], [1, "status"], ["for", "ID"], ["name", "id", "type", "number", "placeholder", "Choose Customer to Delete...", "required", "", 3, "ngModel", "ngModelChange"], ["idInfo", "ngModel"], ["class", "vi", "src", "/assets/validImage.png", "alt", "", 4, "ngIf"], [1, "cards"], [1, "card"], ["type", "submit", "value", "update Customer", 3, "disabled", "click"], [1, "circle1"], [1, "circle2"], ["src", "/assets/validImage.png", "alt", "", 1, "vi"]], template: function DeleteCustomerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Welcome Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Delete Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " To ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Customers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Which Customer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Do you wish to Delete ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "ID : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeleteCustomerComponent_Template_input_ngModelChange_28_listener($event) { return ctx.customerId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, DeleteCustomerComponent_img_30_Template, 1, 0, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteCustomerComponent_Template_button_click_33_listener() { return ctx.deleteCustomer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Delete Customer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.customerId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.form.invalid);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["*[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n  font-size: 1.6rem;\r\n  opacity: 0.8;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  opacity: 0.8;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n  background-color: #007ea7;\r\n  background-image: linear-gradient(315deg, #007ea7 0%, #80ced7 74%);\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  min-height: 80vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.glass[_ngcontent-%COMP%] {\r\n  background: white;\r\n  max-height: 64vh;\r\n  min-width: 550px;\r\n  width: 65%;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.5),\r\n    rgba(255, 255, 255, 0.1)\r\n  );\r\n\r\n  border-radius: 2rem;\r\n  z-index: 2;\r\n  -webkit-backdrop-filter: blur(2rem);\r\n          backdrop-filter: blur(2rem);\r\n  display: flex;\r\n}\r\n\r\n.circle1[_ngcontent-%COMP%], .circle2[_ngcontent-%COMP%] {\r\n  background: white;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.01),\r\n    rgba(255, 255, 255, 2)\r\n  );\r\n  height: 13rem;\r\n  width: 13rem;\r\n  position: absolute;\r\n  border-radius: 50%;\r\n}\r\n\r\n.circle1[_ngcontent-%COMP%] {\r\n  top: 13%;\r\n  right: 12%;\r\n  z-index: 0.2;\r\n}\r\n\r\n.circle2[_ngcontent-%COMP%] {\r\n  bottom: 9%;\r\n  left: 12%;\r\n  z-index: 0.2;\r\n}\r\n\r\n.member[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.dashboard[_ngcontent-%COMP%] {\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  min-height: 64vh;\r\n  \r\n  width: 30%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  text-align: center;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.7),\r\n    rgba(255, 255, 255, 0.3)\r\n  );\r\n  border-top-left-radius: 2rem;\r\n  border-bottom-left-radius: 2rem;\r\n}\r\n\r\n.link[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin: 1rem 0rem;\r\n  padding: 1rem 5rem;\r\n  align-items: center;\r\n}\r\n\r\n.link[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  padding: 0rem 2rem;\r\n}\r\n\r\n.form-div[_ngcontent-%COMP%] {\r\n  flex: 2;\r\n}\r\n\r\n.pro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  justify-content: center;\r\n  text-align: center;\r\n\r\n  color: white;\r\n}\r\n\r\n.admin-image[_ngcontent-%COMP%] {\r\n  height: 80px;\r\n  width: 80px;\r\n  border-radius: 40rem;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.status[_ngcontent-%COMP%] {\r\n  padding-top: 20px;\r\n  background: linear-gradient(315deg, #000000 0%, #414141 74%);\r\n  color: rgb(221, 221, 221);\r\n  text-align: center;\r\n  height: 200px;\r\n  width: 70%;\r\n  z-index: 2;\r\n  border-top-right-radius: 2rem;\r\n  position: absolute;\r\n  \r\n}\r\n\r\n.status[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.8),\r\n    rgba(255, 255, 255, 0.5)\r\n  );\r\n  margin-top: 1rem;\r\n  text-align: center;\r\n  border: none;\r\n  width: 100px;\r\n  height: 50px;\r\n  font-size: 25px;\r\n  font-weight: bold;\r\n  padding: 0.5rem;\r\n  border-radius: 2rem;\r\n}\r\n\r\n.cards[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  height: 40%;\r\n  width: 40%;\r\n\r\n  z-index: 3;\r\n  transform: translate(25%, 255px);\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  height: 85px;\r\n  width: 100%;\r\n  display: flex;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.8),\r\n    rgba(255, 255, 255, 0.5)\r\n  );\r\n  border-radius: 1rem;\r\n  margin: 1.8rem;\r\n  padding: 0.5rem;\r\n  box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.5);\r\n  justify-content: space-between;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.vi[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  margin-top: 0.2rem;\r\n  height: 60px;\r\n  width: 60px;\r\n  transform: translate(100%, 103px);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n\r\n.customers-list[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 100%;\r\n  border-radius: 1.5rem;\r\n  color: rgb(221, 221, 221);\r\n  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n}\r\n\r\n.pro[_ngcontent-%COMP%]:hover {\r\n  height: 90px;\r\n  width: 70%;\r\n\r\n  transition: all 0.2s;\r\n}\r\n\r\n.pro[_ngcontent-%COMP%] {\r\n  font-weight: normal;\r\n  position: relative;\r\n  height: 80px;\r\n  width: 60%;\r\n\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.form-div[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background-color: #525a50b9;\r\n  color: rgb(221, 221, 221);\r\n  font-weight: bolder;\r\n  font-size: 19px;\r\n\r\n  padding: 2px;\r\n  height: 100%;\r\n  width: 100%;\r\n  position: relative;\r\n\r\n  cursor: pointer;\r\n  border-radius: 0.7rem;\r\n  \r\n  transition: 0.3s;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background-color: #259409b9;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGV0ZS1jdXN0b21lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFDQTs7RUFFRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtFQUFrRTtFQUNsRSxxREFBcUQ7RUFDckQsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWOzs7O0dBSUM7O0VBRUQsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakI7Ozs7R0FJQztFQUNELGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFFBQVE7RUFDUixVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0VBQXNFO0VBQ3RFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDJCQUFtQjtFQUFuQix3QkFBbUI7RUFBbkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEI7Ozs7R0FJQztFQUNELDRCQUE0QjtFQUM1QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCOztFQUVsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLG9CQUFvQjtBQUN0Qjs7QUFFQSxpQkFBaUI7O0FBQ2pCLHdDQUF3Qzs7QUFDeEMsd0NBQXdDOztBQUV4QztFQUNFLGlCQUFpQjtFQUNqQiw0REFBNEQ7RUFDNUQseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsVUFBVTtFQUNWLFVBQVU7RUFDViw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFOzs7O0dBSUM7RUFDRCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTs7RUFFVixVQUFVO0VBQ1YsZ0NBQWdDO0FBQ2xDOztBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2I7Ozs7R0FJQztFQUNELG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGlEQUFpRDtFQUNqRCw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUNBQWlDO0VBQ2pDLFVBQVU7QUFDWjs7QUFFQTs7Ozs7R0FLRzs7QUFFSDtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixrRUFBa0U7RUFDbEUsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osVUFBVTs7RUFFVixvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVOztFQUVWLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGVBQWU7O0VBRWYsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCOztFQUVsQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0IiLCJmaWxlIjoiZGVsZXRlLWN1c3RvbWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDEuNnJlbTtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuaDIsXHJcbnAge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG5tYWluIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3ZWE3O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICMwMDdlYTcgMCUsICM4MGNlZDcgNzQlKTtcclxuICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG4gIG1pbi1oZWlnaHQ6IDgwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5nbGFzcyB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgbWF4LWhlaWdodDogNjR2aDtcclxuICBtaW4td2lkdGg6IDU1MHB4O1xyXG4gIHdpZHRoOiA2NSU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gcmlnaHQgYm90dG9tLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpXHJcbiAgKTtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uY2lyY2xlMSxcclxuLmNpcmNsZTIge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIHJpZ2h0IGJvdHRvbSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMSksXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDIpXHJcbiAgKTtcclxuICBoZWlnaHQ6IDEzcmVtO1xyXG4gIHdpZHRoOiAxM3JlbTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uY2lyY2xlMSB7XHJcbiAgdG9wOiAxMyU7XHJcbiAgcmlnaHQ6IDEyJTtcclxuICB6LWluZGV4OiAwLjI7XHJcbn1cclxuXHJcbi5jaXJjbGUyIHtcclxuICBib3R0b206IDklO1xyXG4gIGxlZnQ6IDEyJTtcclxuICB6LWluZGV4OiAwLjI7XHJcbn1cclxuXHJcbi5tZW1iZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCBcIkFyaWFsIE5hcnJvdyBCb2xkXCIsIHNhbnMtc2VyaWY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5cclxuLmRhc2hib2FyZCB7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBtaW4taGVpZ2h0OiA2NHZoO1xyXG4gIC8qIGhlaWdodDogMTAwJTsgKi9cclxuICB3aWR0aDogMzAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byByaWdodCBib3R0b20sXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyksXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMylcclxuICApO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDJyZW07XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMnJlbTtcclxufVxyXG5cclxuLmxpbmsge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiAxcmVtIDByZW07XHJcbiAgcGFkZGluZzogMXJlbSA1cmVtO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5saW5rIGgyIHtcclxuICBwYWRkaW5nOiAwcmVtIDJyZW07XHJcbn1cclxuXHJcbi5mb3JtLWRpdiB7XHJcbiAgZmxleDogMjtcclxufVxyXG5cclxuLnBybyBwIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmFkbWluLWltYWdlIHtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNDByZW07XHJcbn1cclxuXHJcbi8qIEdhbWUgc2VjdGlvbiAqL1xyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLnN0YXR1cyB7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzAwMDAwMCAwJSwgIzQxNDE0MSA3NCUpO1xyXG4gIGNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgd2lkdGg6IDcwJTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycmVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIC0yNXB4KTsgKi9cclxufVxyXG5cclxuLnN0YXR1cyBpbnB1dCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gcmlnaHQgYm90dG9tLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpXHJcbiAgKTtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbn1cclxuXHJcbi5jYXJkcyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogNDAlO1xyXG4gIHdpZHRoOiA0MCU7XHJcblxyXG4gIHotaW5kZXg6IDM7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjUlLCAyNTVweCk7XHJcbn1cclxuLmNhcmQge1xyXG4gIGhlaWdodDogODVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIHJpZ2h0IGJvdHRvbSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KVxyXG4gICk7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBtYXJnaW46IDEuOHJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgYm94LXNoYWRvdzogNnB4IDZweCAyMHB4IHJnYmEoMTIyLCAxMjIsIDEyMiwgMC41KTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5jYXJkIGJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi52aSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IDAuMnJlbTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSwgMTAzcHgpO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi8qIGlucHV0IHtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICB3aWR0aDogNzAlO1xyXG59ICovXHJcblxyXG4uY3VzdG9tZXJzLWxpc3Qge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XHJcbiAgY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMDAwMDAwIDAlLCAjNDE0MTQxIDc0JSk7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucHJvOmhvdmVyIHtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbiAgd2lkdGg6IDcwJTtcclxuXHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbn1cclxuLnBybyB7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHdpZHRoOiA2MCU7XHJcblxyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi5mb3JtLWRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcbmZvcm0gYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI1YTUwYjk7XHJcbiAgY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxuXHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAwLjdyZW07XHJcbiAgLyogb3V0bGluZTogbm9uZTsgKi9cclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcbmZvcm0gYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjU5NDA5Yjk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "kjhH":
/*!******************************************************************************!*\
  !*** ./src/app/components/admin/apis/add-customer/add-customer.component.ts ***!
  \******************************************************************************/
/*! exports provided: AddCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCustomerComponent", function() { return AddCustomerComponent; });
/* harmony import */ var src_app_models_customer_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/customer.model */ "rjWM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ "AJ6+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function AddCustomerComponent_img_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 30);
} }
function AddCustomerComponent_img_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 30);
} }
function AddCustomerComponent_img_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 30);
} }
function AddCustomerComponent_img_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 30);
} }
class AddCustomerComponent {
    constructor(adminService, router, snackBar) {
        this.adminService = adminService;
        this.router = router;
        this.snackBar = snackBar;
        this.customer = new src_app_models_customer_model__WEBPACK_IMPORTED_MODULE_0__["Customer"]();
    }
    ngOnInit() { }
    addCustomer() {
        console.log(`
    company first name: ${this.customer.firstName}`);
        this.adminService.addCustomer(this.customer).subscribe((addedCustomer) => {
            this.snackBar.open(`You have just added a new Customer with ID: ${addedCustomer.id} Successfully✅`, 'i got it', {
                verticalPosition: 'top',
            });
        }, (e) => {
            if (e.status === 401) {
                console.log(401);
                this.router.navigate(['unautorized']);
            }
            else {
                this.snackBar.open(`${e.error}`, 'i got it', {
                    verticalPosition: 'top',
                });
            }
            console.dir(e);
        });
    }
}
AddCustomerComponent.ɵfac = function AddCustomerComponent_Factory(t) { return new (t || AddCustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
AddCustomerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddCustomerComponent, selectors: [["app-add-customer"]], decls: 54, vars: 9, consts: [[1, "glass"], [1, "dashboard"], [1, "user"], ["src", "/assets/adminImage2.png", "alt", "", 1, "admin-image"], [1, "member"], [1, "links"], [1, "link"], ["routerLink", "../get-all-customers", "routerLinkActive", "active-link", 1, "customers-list"], [1, "form-div"], [1, "validation"], ["formInfo", "ngForm"], [1, "status"], [1, "cards"], [1, "card"], ["class", "vi", "src", "/assets/validImage.png", "alt", "", 4, "ngIf"], ["for", "firstname"], ["name", "firstname", "type", "text", "placeholder", "Insert first Name...", "required", "", 3, "ngModel", "ngModelChange"], ["firstNameInfo", "ngModel"], ["for", "lastname"], ["name", "lastname", "type", "text", "placeholder", "Insert last Name...", "required", "", 3, "ngModel", "ngModelChange"], ["lastNameInfo", "ngModel"], ["for", "email"], ["name", "email", "type", "text", "placeholder", "Insert Email...", "pattern", "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$", "required", "", 3, "ngModel", "ngModelChange"], ["emailInfo", "ngModel"], ["for", "password"], ["name", "password", "type", "password", "placeholder", "Choose Password", "required", "", 3, "ngModel", "ngModelChange"], ["passwordInfo", "ngModel"], ["type", "submit", "value", "Add new Customer", 3, "disabled", "click"], [1, "circle1"], [1, "circle2"], ["src", "/assets/validImage.png", "alt", "", 1, "vi"]], template: function AddCustomerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Welcome Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Add A New Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " To ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "form", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Add Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, AddCustomerComponent_img_26_Template, 1, 0, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddCustomerComponent_Template_input_ngModelChange_29_listener($event) { return ctx.customer.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, AddCustomerComponent_img_32_Template, 1, 0, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddCustomerComponent_Template_input_ngModelChange_35_listener($event) { return ctx.customer.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, AddCustomerComponent_img_38_Template, 1, 0, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddCustomerComponent_Template_input_ngModelChange_41_listener($event) { return ctx.customer.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, AddCustomerComponent_img_44_Template, 1, 0, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "input", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddCustomerComponent_Template_input_ngModelChange_47_listener($event) { return ctx.customer.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddCustomerComponent_Template_button_click_50_listener() { return ctx.addCustomer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " Add new Customer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](30);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](36);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](42);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r2.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.customer.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r4.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.customer.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r6.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.customer.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r8.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.customer.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r0.form.invalid);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["PatternValidator"]], styles: ["*[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  font-size: 2rem;\r\n  opacity: 0.8;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  opacity: 0.8;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n  background-color: #007ea7;\r\n  background-image: linear-gradient(315deg, #007ea7 0%, #80ced7 74%);\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  min-height: 80vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.glass[_ngcontent-%COMP%] {\r\n  background: white;\r\n  max-height: 74vh;\r\n  min-width: 550px;\r\n  width: 65%;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.5),\r\n    rgba(255, 255, 255, 0.1)\r\n  );\r\n\r\n  border-radius: 2rem;\r\n  z-index: 2;\r\n  -webkit-backdrop-filter: blur(2rem);\r\n          backdrop-filter: blur(2rem);\r\n  display: flex;\r\n}\r\n\r\n.circle1[_ngcontent-%COMP%], .circle2[_ngcontent-%COMP%] {\r\n  background: white;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.01),\r\n    rgba(255, 255, 255, 2)\r\n  );\r\n  height: 13rem;\r\n  width: 13rem;\r\n  position: absolute;\r\n  border-radius: 50%;\r\n}\r\n\r\n.circle1[_ngcontent-%COMP%] {\r\n  top: 13%;\r\n  right: 12%;\r\n  z-index: 0.2;\r\n}\r\n\r\n.circle2[_ngcontent-%COMP%] {\r\n  bottom: 9%;\r\n  left: 12%;\r\n  z-index: 0.2;\r\n}\r\n\r\n.member[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.dashboard[_ngcontent-%COMP%] {\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  min-height: 74vh;\r\n  \r\n  width: 30%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  text-align: center;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.7),\r\n    rgba(255, 255, 255, 0.3)\r\n  );\r\n  border-top-left-radius: 2rem;\r\n  border-bottom-left-radius: 2rem;\r\n}\r\n\r\n.link[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin: 1rem 0rem;\r\n  padding: 1rem 5rem;\r\n  align-items: center;\r\n}\r\n\r\n.link[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  padding: 0rem 2rem;\r\n}\r\n\r\n.form-div[_ngcontent-%COMP%] {\r\n  flex: 2;\r\n}\r\n\r\n.pro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  justify-content: center;\r\n  text-align: center;\r\n\r\n  color: white;\r\n}\r\n\r\n.admin-image[_ngcontent-%COMP%] {\r\n  height: 80px;\r\n  width: 80px;\r\n  border-radius: 40rem;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.status[_ngcontent-%COMP%] {\r\n  background: linear-gradient(315deg, #000000 0%, #414141 74%);\r\n  color: rgb(221, 221, 221);\r\n  text-align: center;\r\n  height: 100px;\r\n  width: 70%;\r\n  z-index: 2;\r\n  padding-top: 30px;\r\n  position: absolute;\r\n  transform: translate(1px, -125px);\r\n}\r\n\r\n.status[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.8),\r\n    rgba(255, 255, 255, 0.5)\r\n  );\r\n  border: none;\r\n  width: 50%;\r\n  padding: 0.5rem;\r\n  border-radius: 2rem;\r\n}\r\n\r\n.games[_ngcontent-%COMP%] {\r\n  margin: 0.5rem;\r\n\r\n  box-sizing: content-box;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  transform: translateY(-20%);\r\n  transform: translateX(10%);\r\n  height: 65px;\r\n  width: 80%;\r\n  display: flex;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.8),\r\n    rgba(255, 255, 255, 0.5)\r\n  );\r\n  border-radius: 1rem;\r\n  margin: 1.8rem;\r\n  padding: 0.5rem;\r\n  box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.5);\r\n  justify-content: space-between;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  font-size: 17px;\r\n}\r\n\r\n.validation[_ngcontent-%COMP%] {\r\n  justify-content: flex-start;\r\n\r\n  width: 5%;\r\n  flex-direction: column;\r\n  margin: 3.4rem 0rem;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.vi[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin-top: 0.2rem;\r\n  height: 60px;\r\n  width: 60px;\r\n  transform: translate(-5px, -10px);\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  margin-top: 8px;\r\n  height: 35px;\r\n  border-radius: 0.5rem;\r\n  width: 70%;\r\n}\r\n\r\n.customers-list[_ngcontent-%COMP%] {\r\n  height: 80px;\r\n  width: 60%;\r\n  text-align: center;\r\n  border-radius: 1.5rem;\r\n  color: rgb(221, 221, 221);\r\n  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);\r\n  font-size: 15px;\r\n  cursor: pointer;\r\n}\r\n\r\n.customers-list[_ngcontent-%COMP%]:hover {\r\n  width: 80%;\r\n  transform: translate(2px, 3px);\r\n\r\n  transition: all 0.3s ease-out;\r\n}\r\n\r\n.form-div[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background-color: #525a50b9;\r\n  color: rgb(221, 221, 221);\r\n  font-weight: bolder;\r\n  font-size: 19px;\r\n\r\n  padding: 2px;\r\n  height: 100%;\r\n  width: 100%;\r\n  position: relative;\r\n\r\n  cursor: pointer;\r\n  border-radius: 0.7rem;\r\n  \r\n  transition: 0.3s;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background-color: #259409b9;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jdXN0b21lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFDQTs7RUFFRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtFQUFrRTtFQUNsRSxxREFBcUQ7RUFDckQsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWOzs7O0dBSUM7O0VBRUQsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakI7Ozs7R0FJQztFQUNELGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFFBQVE7RUFDUixVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0VBQXNFO0VBQ3RFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDJCQUFtQjtFQUFuQix3QkFBbUI7RUFBbkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEI7Ozs7R0FJQztFQUNELDRCQUE0QjtFQUM1QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCOztFQUVsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLG9CQUFvQjtBQUN0Qjs7QUFFQSxpQkFBaUI7O0FBQ2pCLHdDQUF3Qzs7QUFDeEMsd0NBQXdDOztBQUV4QztFQUNFLDREQUE0RDtFQUM1RCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixVQUFVO0VBQ1YsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0U7Ozs7R0FJQztFQUNELFlBQVk7RUFDWixVQUFVO0VBQ1YsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7O0VBRWQsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osVUFBVTtFQUNWLGFBQWE7RUFDYjs7OztHQUlDO0VBQ0QsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaURBQWlEO0VBQ2pELDhCQUE4QjtBQUNoQzs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsMkJBQTJCOztFQUUzQixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsa0VBQWtFO0VBQ2xFLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLDhCQUE4Qjs7RUFFOUIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZUFBZTs7RUFFZixZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7O0VBRWxCLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QiIsImZpbGUiOiJhZGQtY3VzdG9tZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuaDIsXHJcbnAge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG5tYWluIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3ZWE3O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICMwMDdlYTcgMCUsICM4MGNlZDcgNzQlKTtcclxuICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG4gIG1pbi1oZWlnaHQ6IDgwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5nbGFzcyB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgbWF4LWhlaWdodDogNzR2aDtcclxuICBtaW4td2lkdGg6IDU1MHB4O1xyXG4gIHdpZHRoOiA2NSU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gcmlnaHQgYm90dG9tLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpXHJcbiAgKTtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uY2lyY2xlMSxcclxuLmNpcmNsZTIge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIHJpZ2h0IGJvdHRvbSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMSksXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDIpXHJcbiAgKTtcclxuICBoZWlnaHQ6IDEzcmVtO1xyXG4gIHdpZHRoOiAxM3JlbTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uY2lyY2xlMSB7XHJcbiAgdG9wOiAxMyU7XHJcbiAgcmlnaHQ6IDEyJTtcclxuICB6LWluZGV4OiAwLjI7XHJcbn1cclxuXHJcbi5jaXJjbGUyIHtcclxuICBib3R0b206IDklO1xyXG4gIGxlZnQ6IDEyJTtcclxuICB6LWluZGV4OiAwLjI7XHJcbn1cclxuXHJcbi5tZW1iZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCBcIkFyaWFsIE5hcnJvdyBCb2xkXCIsIHNhbnMtc2VyaWY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5cclxuLmRhc2hib2FyZCB7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBtaW4taGVpZ2h0OiA3NHZoO1xyXG4gIC8qIGhlaWdodDogMTAwJTsgKi9cclxuICB3aWR0aDogMzAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byByaWdodCBib3R0b20sXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyksXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMylcclxuICApO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDJyZW07XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMnJlbTtcclxufVxyXG5cclxuLmxpbmsge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiAxcmVtIDByZW07XHJcbiAgcGFkZGluZzogMXJlbSA1cmVtO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5saW5rIGgyIHtcclxuICBwYWRkaW5nOiAwcmVtIDJyZW07XHJcbn1cclxuXHJcbi5mb3JtLWRpdiB7XHJcbiAgZmxleDogMjtcclxufVxyXG5cclxuLnBybyBwIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmFkbWluLWltYWdlIHtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNDByZW07XHJcbn1cclxuXHJcbi8qIEdhbWUgc2VjdGlvbiAqL1xyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLnN0YXR1cyB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzAwMDAwMCAwJSwgIzQxNDE0MSA3NCUpO1xyXG4gIGNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgd2lkdGg6IDcwJTtcclxuICB6LWluZGV4OiAyO1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIC0xMjVweCk7XHJcbn1cclxuXHJcbi5zdGF0dXMgaW5wdXQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIHJpZ2h0IGJvdHRvbSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KVxyXG4gICk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbn1cclxuXHJcbi5nYW1lcyB7XHJcbiAgbWFyZ2luOiAwLjVyZW07XHJcblxyXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAlKTtcclxuICBoZWlnaHQ6IDY1cHg7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIHJpZ2h0IGJvdHRvbSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KVxyXG4gICk7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBtYXJnaW46IDEuOHJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgYm94LXNoYWRvdzogNnB4IDZweCAyMHB4IHJnYmEoMTIyLCAxMjIsIDEyMiwgMC41KTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmNhcmQgbGFiZWwge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcbi52YWxpZGF0aW9uIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblxyXG4gIHdpZHRoOiA1JTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogMy40cmVtIDByZW07XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG59XHJcblxyXG4udmkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wOiAwLjJyZW07XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIC0xMHB4KTtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbi5jdXN0b21lcnMtbGlzdCB7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcclxuICBjb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICMwMDAwMDAgMCUsICM0MTQxNDEgNzQlKTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jdXN0b21lcnMtbGlzdDpob3ZlciB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDNweCk7XHJcblxyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uZm9ybS1kaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5mb3JtIGJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyNWE1MGI5O1xyXG4gIGNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBmb250LXNpemU6IDE5cHg7XHJcblxyXG4gIHBhZGRpbmc6IDJweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xyXG4gIC8qIG91dGxpbmU6IG5vbmU7ICovXHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5mb3JtIGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1OTQwOWI5O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "olF0":
/*!**************************************************************************************!*\
  !*** ./src/app/components/admin/apis/get-one-customer/get-one-customer.component.ts ***!
  \**************************************************************************************/
/*! exports provided: GetOneCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOneCustomerComponent", function() { return GetOneCustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/admin.service */ "AJ6+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function GetOneCustomerComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function GetOneCustomerComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
} }
function GetOneCustomerComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Results ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.customer.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.customer.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.customer.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.customer.email);
} }
class GetOneCustomerComponent {
    constructor(adminService, router, snackBar) {
        this.adminService = adminService;
        this.router = router;
        this.snackBar = snackBar;
    }
    ngOnInit() { }
    getOneCustomer() {
        console.log(`
    ID: ${this.customer_id}
    `);
        this.adminService.getOneCustomer(this.customer_id).subscribe((customerFromDB) => {
            this.customer = customerFromDB;
        }, (e) => {
            if (e.status === 401) {
                console.log(401);
                this.router.navigate(['unautorized']);
            }
            else {
                this.snackBar.open(`${e.error}`, 'i got it', {
                    verticalPosition: 'top',
                });
            }
            console.dir(e);
        });
    }
}
GetOneCustomerComponent.ɵfac = function GetOneCustomerComponent_Factory(t) { return new (t || GetOneCustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
GetOneCustomerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GetOneCustomerComponent, selectors: [["app-get-one-customer"]], decls: 20, vars: 4, consts: [[1, "form-div"], ["formInfo", "ngForm"], [1, "header"], [1, "card"], ["name", "customer id", "type", "number", "placeholder", "", "required", "", 3, "ngModel", "ngModelChange"], ["idsInfo", "ngModel"], ["type", "submit", "value", "Get One Customer", 3, "disabled", "click"], [4, "ngIf", "ngIfThen"], ["loadingTemp", ""], ["resultsExists", ""], ["src", "/assets/LoadingGif.gif", "alt", "loading"], [1, "container"], [1, "ID-row"]], template: function GetOneCustomerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Which Customer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " would you like to search for ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GetOneCustomerComponent_Template_input_ngModelChange_10_listener($event) { return ctx.customer_id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GetOneCustomerComponent_Template_button_click_13_listener() { return ctx.getOneCustomer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Check ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, GetOneCustomerComponent_div_15_Template, 1, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, GetOneCustomerComponent_ng_template_16_Template, 1, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, GetOneCustomerComponent_ng_template_18_Template, 27, 4, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.customer_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.form.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customer)("ngIfThen", _r5);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["*[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n  background-color: #007ea7;\r\n  background-image: linear-gradient(315deg, #007ea7 0%, #80ced7 74%);\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  min-height: 80vh;\r\n  min-width: 150vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  text-align: center;\r\n  overflow-y: auto;\r\n}\r\n\r\n.header[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  text-align: center;\r\n\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  font-weight: bold;\r\n  color: rgb(221, 221, 221);\r\n  font-size: 35px;\r\n}\r\n\r\n.form-div[_ngcontent-%COMP%] {\r\n  background-color: #000000;\r\n  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);\r\n  \r\n  position: relative;\r\n  height: 30%;\r\n  width: 50%;\r\n  padding: 10px;\r\n  margin-top: 50px;\r\n  box-sizing: content-box;\r\n\r\n  border-radius: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  flex: 2;\r\n  position: relative;\r\n  \r\n  min-height: 20vh;\r\n  margin-top: 40px;\r\n  margin-bottom: 40px;\r\n  \r\n  padding-bottom: 5%;\r\n  width: 85%;\r\n  padding: 10px;\r\n  box-sizing: content-box;\r\n  justify-content: space-around;\r\n  display: block;\r\n  border-radius: 2rem;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.5),\r\n    rgba(255, 255, 255, 0.1)\r\n  );\r\n}\r\n\r\n.no-results[_ngcontent-%COMP%] {\r\n  flex: 2;\r\n  position: relative;\r\n  min-height: 32vh;\r\n  margin-top: 40px;\r\n  margin-bottom: 40px;\r\n  padding-bottom: 5%;\r\n\r\n  width: 55%;\r\n  padding: 10px;\r\n  \r\n  box-sizing: content-box;\r\n  justify-content: space-around;\r\n  display: block;\r\n  border-radius: 2rem;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.5),\r\n    rgba(255, 255, 255, 0.1)\r\n  );\r\n  \r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  transform: translateX(20%);\r\n  height: 65px;\r\n  width: 100px;\r\n  min-width: 60%;\r\n  display: flex;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.8),\r\n    rgba(255, 255, 255, 0.5)\r\n  );\r\n  border-radius: 1rem;\r\n  margin: 1.8rem;\r\n  padding: 0.5rem;\r\n  justify-content: space-between;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  text-align: center;\r\n\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  font-weight: bold;\r\n  background-color: rgb(221, 221, 221);\r\n  font-size: 35px;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  background-color: #485461;\r\n  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);\r\n  padding: 5px;\r\n  line-height: 2.3rem;\r\n  margin: auto;\r\n  width: 85%;\r\n\r\n  text-align: center;\r\n  border-radius: 0.7rem;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n  color: rgb(221, 221, 221);\r\n  border: solid black 1px;\r\n  border-radius: 0.4rem;\r\n  font-size: 18px;\r\n  \r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n  background-color: #438b31b9;\r\n  border-radius: 0.3rem;\r\n  font-size: 22px;\r\n}\r\n\r\n.ID-row[_ngcontent-%COMP%] {\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  font-style: italic;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n}\r\n\r\n.vi[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin-top: 0.2rem;\r\n  height: 60px;\r\n  width: 60px;\r\n  transform: translate(-5px, -10px);\r\n}\r\n\r\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background-color: #525a50b9;\r\n  color: rgb(221, 221, 221);\r\n  font-weight: bolder;\r\n  font-size: 19px;\r\n\r\n  padding: 2px;\r\n  height: 100%;\r\n  width: 100%;\r\n  position: relative;\r\n\r\n  cursor: pointer;\r\n  border-radius: 0.7rem;\r\n  \r\n  \r\n}\r\n\r\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background-color: #fff293;\r\n  background-image: linear-gradient(315deg, #fff293 0%, #ffe884 74%);\r\n  border-radius: 1rem;\r\n  text-align: center;\r\n  font-size: 22px;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\r\n  font-size: 22px;\r\n  padding-inline-start: 30px;\r\n}\r\n\r\nspan[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  font-weight: bold;\r\n  letter-spacing: 1px;\r\n  transform: translateY(10px);\r\n}\r\n\r\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background-color: #57854bb9;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin: auto;\r\n  width: 50px;\r\n}\r\n\r\n[_nghost-%COMP%] {\r\n  display: block;\r\n  height: 100%;\r\n  overflow: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldC1vbmUtY3VzdG9tZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0VBQWtFO0VBQ2xFLHFEQUFxRDtFQUNyRCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjs7RUFFbEIscURBQXFEO0VBQ3JELGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixrRUFBa0U7RUFDbEUsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsdUJBQXVCOztFQUV2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkI7Ozs7R0FJQztBQUNIOztBQUVBO0VBQ0UsT0FBTztFQUNQLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7O0VBRWxCLFVBQVU7RUFDVixhQUFhO0VBQ2I7b0NBQ2tDO0VBQ2xDLHVCQUF1QjtFQUN2Qiw2QkFBNkI7RUFDN0IsY0FBYztFQUNkLG1CQUFtQjtFQUNuQjs7OztHQUlDO0VBQ0QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osWUFBWTtFQUNaLGNBQWM7RUFDZCxhQUFhO0VBQ2I7Ozs7R0FJQztFQUNELG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZUFBZTtFQUNmLDhCQUE4QjtBQUNoQzs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7O0VBRWxCLHFEQUFxRDtFQUNyRCxpQkFBaUI7RUFDakIsb0NBQW9DO0VBQ3BDLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGtFQUFrRTtFQUNsRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixVQUFVOztFQUVWLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysd0VBQXdFO0FBQzFFOztBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsZ0RBQWdEO0VBQ2hELGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQ0FBaUM7QUFDbkM7O0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixlQUFlOztFQUVmLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjs7RUFFbEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrRUFBa0U7RUFDbEUsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLDBCQUEwQjtBQUM1Qjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixxREFBcUQ7RUFDckQsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQiwyQkFBMkI7QUFDN0I7O0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osY0FBYztBQUNoQiIsImZpbGUiOiJnZXQtb25lLWN1c3RvbWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2VhNztcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMDA3ZWE3IDAlLCAjODBjZWQ3IDc0JSk7XHJcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcclxuICBtaW4taGVpZ2h0OiA4MHZoO1xyXG4gIG1pbi13aWR0aDogMTUwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuLmhlYWRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxufVxyXG4uZm9ybS1kaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzAwMDAwMCAwJSwgIzQxNDE0MSA3NCUpO1xyXG4gIC8qIGNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7ICovXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMzAlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG5cclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgZmxleDogMjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04JSk7ICovXHJcbiAgbWluLWhlaWdodDogMjB2aDtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgLyogbWFyZ2luLWxlZnQ6IDE1JTsgKi9cclxuICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gcmlnaHQgYm90dG9tLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpXHJcbiAgKTtcclxufVxyXG5cclxuLm5vLXJlc3VsdHMge1xyXG4gIGZsZXg6IDI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1pbi1oZWlnaHQ6IDMydmg7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1JTtcclxuXHJcbiAgd2lkdGg6IDU1JTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIC8qIG1pbi13aWR0aDogODAwcHg7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiBtaW4tY29udGVudDsgKi9cclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIHJpZ2h0IGJvdHRvbSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKVxyXG4gICk7XHJcbiAgLyogb3BhY2l0eTogMDsgKi9cclxufVxyXG5cclxuLmNhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAlKTtcclxuICBoZWlnaHQ6IDY1cHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIG1pbi13aWR0aDogNjAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gcmlnaHQgYm90dG9tLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpXHJcbiAgKTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIG1hcmdpbjogMS44cmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuaDEge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxufVxyXG50YWJsZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ODU0NjE7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzQ4NTQ2MSAwJSwgIzI4MzEzYiA3NCUpO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBsaW5lLWhlaWdodDogMi4zcmVtO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogODUlO1xyXG5cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xyXG59XHJcblxyXG50ZCB7XHJcbiAgY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcclxuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNmY2UwNDMgMCUsICNmYjdiYTIgNzQlKTsgKi9cclxufVxyXG50aCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzOGIzMWI5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuLklELXJvdyB7XHJcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLnZpIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogMC4ycmVtO1xyXG4gIGhlaWdodDogNjBweDtcclxuICB3aWR0aDogNjBweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4LCAtMTBweCk7XHJcbn1cclxuZm9ybSBidXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MjVhNTBiOTtcclxuICBjb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgZm9udC1zaXplOiAxOXB4O1xyXG5cclxuICBwYWRkaW5nOiAycHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcclxuICAvKiBvdXRsaW5lOiBub25lOyAqL1xyXG4gIC8qIHRyYW5zaXRpb246IDAuM3M7ICovXHJcbn1cclxuZm9ybSBpbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjI5MztcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjZmZmMjkzIDAlLCAjZmZlODg0IDc0JSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcbmZvcm0gb3B0aW9uIHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDMwcHg7XHJcbn1cclxuc3BhbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XHJcbn1cclxuZm9ybSBidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1Nzg1NGJiOTtcclxufVxyXG5cclxuaW1nIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "p1Gj":
/*!***************************************************************************!*\
  !*** ./src/app/components/company/company-menu/company-menu.component.ts ***!
  \***************************************************************************/
/*! exports provided: CompanyMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyMenuComponent", function() { return CompanyMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CompanyMenuComponent {
    constructor() {
        this.currentDate = new Date();
    }
    ngOnInit() {
        this.initWelcome();
    }
    initWelcome() {
        let clientName = localStorage.getItem('Name');
        let welcome;
        if (this.currentDate.getHours() >= 6 && this.currentDate.getHours() < 12) {
            welcome = 'Good Morning';
        }
        else if (this.currentDate.getHours() >= 12 &&
            this.currentDate.getHours() <= 20) {
            welcome = 'Good Afternoon';
        }
        else {
            welcome = 'Good Night';
        }
        this.welcomeStatment = `${welcome}, ${clientName} `;
        console.log(this.welcomeStatment);
    }
}
CompanyMenuComponent.ɵfac = function CompanyMenuComponent_Factory(t) { return new (t || CompanyMenuComponent)(); };
CompanyMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompanyMenuComponent, selectors: [["app-company-menu"]], decls: 9, vars: 1, consts: [[1, "container"], [1, "header"], [1, "about-us"], ["beha", "", "vior", "", "direction", ""]], template: function CompanyMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "marquee", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " we are happy to have you! all the operations you need is on the nav bar \u261D\uD83C\uDFFB right above you, contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.welcomeStatment, " ");
    } }, styles: [".container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  display: grid;\r\n  grid-template-rows: 12% 80% 8%;\r\n  grid-template-columns: 100%;\r\n  font-family: sans-serif;\r\n  color: #333;\r\n  line-height: 1.5;\r\n  justify-content: center;\r\n  background-color: #378b29;\r\n  background-image: linear-gradient(315deg, #a5e79a 0%, #74d680 74%);\r\n  overflow-x: hidden;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.header[_ngcontent-%COMP%] {\r\n  font-style: normal;\r\n  font-size: 4rem;\r\n  font-weight: 600;\r\n  background: rgba(0, 0, 0, 0.6);\r\n  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);\r\n  color: rgb(221, 221, 221);\r\n}\r\n\r\n.about-us[_ngcontent-%COMP%] {\r\n  font-family: \"Poppins\", sans-serif;\r\n  color: rgb(221, 221, 221);\r\n  font-size: medium;\r\n  font-size: 2rem;\r\n  font-weight: 100;\r\n  padding: 1.25rem 1.5rem;\r\n  margin: 0;\r\n  border: solid #5d4954 4px;\r\n  \r\n  background: rgba(0, 0, 0, 0.5);\r\n  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);\r\n  border-radius: 10rem;\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBhbnktbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsa0VBQWtFO0VBQ2xFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtFQUM5QiwwQ0FBMEM7RUFDMUMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsU0FBUztFQUNULHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLDBDQUEwQztFQUMxQyxvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQiIsImZpbGUiOiJjb21wYW55LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTIlIDgwJSA4JTtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc4YjI5O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNhNWU3OWEgMCUsICM3NGQ2ODAgNzQlKTtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5oZWFkZXIge1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDRyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgYm94LXNoYWRvdzogMCAzcmVtIDVyZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIGNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbn1cclxuXHJcbi5hYm91dC11cyB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbiAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgcGFkZGluZzogMS4yNXJlbSAxLjVyZW07XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJvcmRlcjogc29saWQgIzVkNDk1NCA0cHg7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgKi9cclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcmVtIDVyZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "pPPa":
/*!*********************************************************!*\
  !*** ./src/app/components/company/company.component.ts ***!
  \*********************************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _client_header_client_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client-header/client-header.component */ "gsY+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ "LmEr");




class CompanyComponent {
    constructor() { }
    ngOnInit() {
    }
}
CompanyComponent.ɵfac = function CompanyComponent_Factory(t) { return new (t || CompanyComponent)(); };
CompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompanyComponent, selectors: [["app-company"]], decls: 7, vars: 0, consts: [[1, "container"]], template: function CompanyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-client-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_client_header_client_header_component__WEBPACK_IMPORTED_MODULE_1__["ClientHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100vh;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  display: grid;\r\n  grid-template-rows: 12% 80% 8%;\r\n  grid-template-columns: 100%;\r\n  font-family: sans-serif;\r\n  color: #333;\r\n  line-height: 1.5;\r\n  justify-content: center;\r\n  background-image: url(\"/assets/ocean6.jpg\");\r\n  background-size: cover;\r\n\r\n  overflow-x: hidden;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBhbnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsU0FBUztFQUNULHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsMkNBQTJDO0VBQzNDLHNCQUFzQjs7RUFFdEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImNvbXBhbnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEyJSA4MCUgOCU7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9vY2VhbjYuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblxyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "rjWM":
/*!******************************************!*\
  !*** ./src/app/models/customer.model.ts ***!
  \******************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
class Customer {
    constructor(id, firstName, lastName, email, password // public couponsList?: Coupon[]
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}


/***/ }),

/***/ "s8ks":
/*!************************************************************************************!*\
  !*** ./src/app/components/admin/apis/update-customer/update-customer.component.ts ***!
  \************************************************************************************/
/*! exports provided: UpdateCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCustomerComponent", function() { return UpdateCustomerComponent; });
/* harmony import */ var src_app_models_customer_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/customer.model */ "rjWM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ "AJ6+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function UpdateCustomerComponent_img_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 32);
} }
function UpdateCustomerComponent_img_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 32);
} }
function UpdateCustomerComponent_img_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 32);
} }
function UpdateCustomerComponent_img_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 32);
} }
class UpdateCustomerComponent {
    constructor(adminService, router, snackBar) {
        this.adminService = adminService;
        this.router = router;
        this.snackBar = snackBar;
        this.customer = new src_app_models_customer_model__WEBPACK_IMPORTED_MODULE_0__["Customer"]();
    }
    ngOnInit() { }
    updateCustomer() {
        console.log(`
    company first name: ${this.customer.firstName}
    company last name: ${this.customer.lastName}
    company email: ${this.customer.email}
    company password: ${this.customer.password}
    
    `);
        this.adminService.updateCustomer(this.customer_id, this.customer).subscribe((answer) => {
            this.snackBar.open(`${answer.concat('✅')}`, 'OK', {
                verticalPosition: 'top',
            });
        }, (e) => {
            if (e.status === 401) {
                console.log(401);
                this.router.navigate(['unautorized']);
            }
            else {
                this.snackBar.open(`${e.error}`, 'i got it', {
                    verticalPosition: 'top',
                });
            }
            console.dir(e);
        });
    }
}
UpdateCustomerComponent.ɵfac = function UpdateCustomerComponent_Factory(t) { return new (t || UpdateCustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
UpdateCustomerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UpdateCustomerComponent, selectors: [["app-update-customer"]], decls: 59, vars: 10, consts: [[1, "glass"], [1, "dashboard"], [1, "user"], ["src", "/assets/adminImage2.png", "alt", "", 1, "admin-image"], [1, "member"], [1, "links"], [1, "link"], [1, "pro"], ["routerLink", "../get-all-customers", "routerLinkActive", "active-link", 1, "customers-list"], [1, "form-div"], [1, "validation"], ["formInfo", "ngForm"], [1, "status"], ["for", "ID"], ["name", "id", "type", "number", "placeholder", "", "required", "", 3, "ngModel", "ngModelChange"], ["idInfo", "ngModel"], [1, "cards"], [1, "card"], ["class", "vi", "src", "/assets/validImage.png", "alt", "", 4, "ngIf"], ["for", "firstname"], ["name", "firstname", "type", "text", "placeholder", "Insert new first Name...", "required", "", 3, "ngModel", "ngModelChange"], ["firstNameInfo", "ngModel"], ["for", "lastname"], ["name", "lastname", "type", "text", "placeholder", "Insert new last Name...", "required", "", 3, "ngModel", "ngModelChange"], ["lastNameInfo", "ngModel"], ["for", "email"], ["name", "email", "type", "text", "placeholder", "Insert Email...", "pattern", "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$", "required", "", 3, "ngModel", "ngModelChange"], ["emailInfo", "ngModel"], ["for", "password"], ["name", "password", "type", "password", "placeholder", "Choose Password", "required", "", 3, "ngModel", "ngModelChange"], ["passwordInfo", "ngModel"], ["type", "submit", "value", "update Customer", 3, "disabled", "click"], ["src", "/assets/validImage.png", "alt", "", 1, "vi"]], template: function UpdateCustomerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Welcome Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Update Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " To ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "form", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Which Customer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Do you wish to update ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " ID : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UpdateCustomerComponent_Template_input_ngModelChange_29_listener($event) { return ctx.customer_id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, UpdateCustomerComponent_img_33_Template, 1, 0, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UpdateCustomerComponent_Template_input_ngModelChange_36_listener($event) { return ctx.customer.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, UpdateCustomerComponent_img_39_Template, 1, 0, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UpdateCustomerComponent_Template_input_ngModelChange_42_listener($event) { return ctx.customer.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, UpdateCustomerComponent_img_45_Template, 1, 0, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "input", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UpdateCustomerComponent_Template_input_ngModelChange_48_listener($event) { return ctx.customer.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, UpdateCustomerComponent_img_51_Template, 1, 0, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "input", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UpdateCustomerComponent_Template_input_ngModelChange_54_listener($event) { return ctx.customer.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UpdateCustomerComponent_Template_button_click_57_listener() { return ctx.updateCustomer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " Update Customer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](37);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](43);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](49);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.customer_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r3.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.customer.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r5.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.customer.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r7.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.customer.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r9.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.customer.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r0.form.invalid);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["PatternValidator"]], styles: ["*[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n  font-size: 1.4rem;\r\n  opacity: 0.8;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  opacity: 0.8;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n  background-color: #007ea7;\r\n  background-image: linear-gradient(315deg, #007ea7 0%, #80ced7 74%);\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  min-height: 80vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.glass[_ngcontent-%COMP%] {\r\n  background: white;\r\n  max-height: 74vh;\r\n  min-width: 550px;\r\n  width: 65%;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.5),\r\n    rgba(255, 255, 255, 0.1)\r\n  );\r\n\r\n  border-radius: 2rem;\r\n  z-index: 2;\r\n  -webkit-backdrop-filter: blur(2rem);\r\n          backdrop-filter: blur(2rem);\r\n  display: flex;\r\n}\r\n\r\n.circle1[_ngcontent-%COMP%], .circle2[_ngcontent-%COMP%] {\r\n  background: white;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.01),\r\n    rgba(255, 255, 255, 2)\r\n  );\r\n  height: 13rem;\r\n  width: 13rem;\r\n  position: absolute;\r\n  border-radius: 50%;\r\n}\r\n\r\n.circle1[_ngcontent-%COMP%] {\r\n  top: 13%;\r\n  right: 12%;\r\n  z-index: 0.2;\r\n}\r\n\r\n.circle2[_ngcontent-%COMP%] {\r\n  bottom: 9%;\r\n  left: 12%;\r\n  z-index: 0.2;\r\n}\r\n\r\n.member[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.dashboard[_ngcontent-%COMP%] {\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  min-height: 74vh;\r\n  \r\n  width: 30%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  text-align: center;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.7),\r\n    rgba(255, 255, 255, 0.3)\r\n  );\r\n  border-top-left-radius: 2rem;\r\n  border-bottom-left-radius: 2rem;\r\n}\r\n\r\n.link[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin: 1rem 0rem;\r\n  padding: 1rem 5rem;\r\n  align-items: center;\r\n}\r\n\r\n.link[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  padding: 0rem 2rem;\r\n}\r\n\r\n.form-div[_ngcontent-%COMP%] {\r\n  flex: 2;\r\n}\r\n\r\n.pro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  justify-content: center;\r\n  text-align: center;\r\n\r\n  color: white;\r\n}\r\n\r\n.admin-image[_ngcontent-%COMP%] {\r\n  height: 80px;\r\n  width: 80px;\r\n  border-radius: 40rem;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.status[_ngcontent-%COMP%] {\r\n  background: linear-gradient(315deg, #000000 0%, #414141 74%);\r\n  color: rgb(221, 221, 221);\r\n  text-align: center;\r\n  height: 130px;\r\n  width: 70%;\r\n  z-index: 2;\r\n  \r\n  position: absolute;\r\n  transform: translate(1px, -125px);\r\n}\r\n\r\n.status[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.8),\r\n    rgba(255, 255, 255, 0.5)\r\n  );\r\n  border: none;\r\n  width: 20%;\r\n  height: 40px;\r\n  padding: 0.5rem;\r\n  border-radius: 1rem;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  text-align: center;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  transform: translateY(-20%);\r\n  transform: translateX(10%);\r\n  height: 65px;\r\n  width: 80%;\r\n  display: flex;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.8),\r\n    rgba(255, 255, 255, 0.5)\r\n  );\r\n  border-radius: 1rem;\r\n  margin: 1.8rem;\r\n  padding: 0.5rem;\r\n  box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.5);\r\n  justify-content: space-between;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  font-size: 17px;\r\n}\r\n\r\n.validation[_ngcontent-%COMP%] {\r\n  justify-content: flex-start;\r\n\r\n  width: 5%;\r\n  flex-direction: column;\r\n  margin: 3.4rem 0rem;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.vi[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin-top: 0.2rem;\r\n  height: 60px;\r\n  width: 60px;\r\n  transform: translate(-5px, -10px);\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  margin-top: 8px;\r\n  height: 35px;\r\n  border-radius: 0.5rem;\r\n  width: 70%;\r\n}\r\n\r\n.customers-list[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 100%;\r\n  border-radius: 1.5rem;\r\n  color: rgb(221, 221, 221);\r\n  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);\r\n  font-size: 16px;\r\n}\r\n\r\n.pro[_ngcontent-%COMP%]:hover {\r\n  height: 90px;\r\n  width: 70%;\r\n\r\n  transition: all 0.2s;\r\n}\r\n\r\n.pro[_ngcontent-%COMP%] {\r\n  font-weight: normal;\r\n  position: relative;\r\n  height: 80px;\r\n  width: 60%;\r\n\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.form-div[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background-color: #525a50b9;\r\n  color: rgb(221, 221, 221);\r\n  font-weight: bolder;\r\n  font-size: 19px;\r\n\r\n  padding: 2px;\r\n  height: 100%;\r\n  width: 100%;\r\n  position: relative;\r\n\r\n  cursor: pointer;\r\n  border-radius: 0.7rem;\r\n  \r\n  transition: 0.3s;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background-color: #259409b9;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1jdXN0b21lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFDQTs7RUFFRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtFQUFrRTtFQUNsRSxxREFBcUQ7RUFDckQsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWOzs7O0dBSUM7O0VBRUQsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakI7Ozs7R0FJQztFQUNELGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFFBQVE7RUFDUixVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0VBQXNFO0VBQ3RFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDJCQUFtQjtFQUFuQix3QkFBbUI7RUFBbkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEI7Ozs7R0FJQztFQUNELDRCQUE0QjtFQUM1QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCOztFQUVsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLG9CQUFvQjtBQUN0Qjs7QUFFQSxpQkFBaUI7O0FBQ2pCLHdDQUF3Qzs7QUFDeEMsd0NBQXdDOztBQUV4QztFQUNFLDREQUE0RDtFQUM1RCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixVQUFVO0VBQ1YsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0U7Ozs7R0FJQztFQUNELFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixVQUFVO0VBQ1YsYUFBYTtFQUNiOzs7O0dBSUM7RUFDRCxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQWU7RUFDZixpREFBaUQ7RUFDakQsOEJBQThCO0FBQ2hDOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSwyQkFBMkI7O0VBRTNCLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGtFQUFrRTtFQUNsRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7O0VBRVYsb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTs7RUFFVixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixlQUFlOztFQUVmLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjs7RUFFbEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCIiwiZmlsZSI6InVwZGF0ZS1jdXN0b21lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaDEge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcbmgyLFxyXG5wIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2VhNztcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMDA3ZWE3IDAlLCAjODBjZWQ3IDc0JSk7XHJcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcclxuICBtaW4taGVpZ2h0OiA4MHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uZ2xhc3Mge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIG1heC1oZWlnaHQ6IDc0dmg7XHJcbiAgbWluLXdpZHRoOiA1NTBweDtcclxuICB3aWR0aDogNjUlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIHJpZ2h0IGJvdHRvbSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKVxyXG4gICk7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgei1pbmRleDogMjtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmNpcmNsZTEsXHJcbi5jaXJjbGUyIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byByaWdodCBib3R0b20sXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDEpLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAyKVxyXG4gICk7XHJcbiAgaGVpZ2h0OiAxM3JlbTtcclxuICB3aWR0aDogMTNyZW07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmNpcmNsZTEge1xyXG4gIHRvcDogMTMlO1xyXG4gIHJpZ2h0OiAxMiU7XHJcbiAgei1pbmRleDogMC4yO1xyXG59XHJcblxyXG4uY2lyY2xlMiB7XHJcbiAgYm90dG9tOiA5JTtcclxuICBsZWZ0OiAxMiU7XHJcbiAgei1pbmRleDogMC4yO1xyXG59XHJcblxyXG4ubWVtYmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1mYW1pbHk6IEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgXCJBcmlhbCBOYXJyb3cgQm9sZFwiLCBzYW5zLXNlcmlmO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQge1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgbWluLWhlaWdodDogNzR2aDtcclxuICAvKiBoZWlnaHQ6IDEwMCU7ICovXHJcbiAgd2lkdGg6IDMwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gcmlnaHQgYm90dG9tLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpXHJcbiAgKTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAycmVtO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDJyZW07XHJcbn1cclxuXHJcbi5saW5rIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogMXJlbSAwcmVtO1xyXG4gIHBhZGRpbmc6IDFyZW0gNXJlbTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubGluayBoMiB7XHJcbiAgcGFkZGluZzogMHJlbSAycmVtO1xyXG59XHJcblxyXG4uZm9ybS1kaXYge1xyXG4gIGZsZXg6IDI7XHJcbn1cclxuXHJcbi5wcm8gcCB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5hZG1pbi1pbWFnZSB7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcmVtO1xyXG59XHJcblxyXG4vKiBHYW1lIHNlY3Rpb24gKi9cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5zdGF0dXMge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICMwMDAwMDAgMCUsICM0MTQxNDEgNzQlKTtcclxuICBjb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEzMHB4O1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgei1pbmRleDogMjtcclxuICAvKiBib3JkZXItcmFkaXVzOiAxcmVtOyAqL1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIC0xMjVweCk7XHJcbn1cclxuXHJcbi5zdGF0dXMgaW5wdXQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIHJpZ2h0IGJvdHRvbSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KVxyXG4gICk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwJSk7XHJcbiAgaGVpZ2h0OiA2NXB4O1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byByaWdodCBib3R0b20sXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCksXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSlcclxuICApO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgbWFyZ2luOiAxLjhyZW07XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGJveC1zaGFkb3c6IDZweCA2cHggMjBweCByZ2JhKDEyMiwgMTIyLCAxMjIsIDAuNSk7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5jYXJkIGxhYmVsIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG4udmFsaWRhdGlvbiB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cclxuICB3aWR0aDogNSU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW46IDMuNHJlbSAwcmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxufVxyXG5cclxuLnZpIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogMC4ycmVtO1xyXG4gIGhlaWdodDogNjBweDtcclxuICB3aWR0aDogNjBweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4LCAtMTBweCk7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4uY3VzdG9tZXJzLWxpc3Qge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XHJcbiAgY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMDAwMDAwIDAlLCAjNDE0MTQxIDc0JSk7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5wcm86aG92ZXIge1xyXG4gIGhlaWdodDogOTBweDtcclxuICB3aWR0aDogNzAlO1xyXG5cclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxufVxyXG4ucHJvIHtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgd2lkdGg6IDYwJTtcclxuXHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLmZvcm0tZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuZm9ybSBidXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MjVhNTBiOTtcclxuICBjb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgZm9udC1zaXplOiAxOXB4O1xyXG5cclxuICBwYWRkaW5nOiAycHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcclxuICAvKiBvdXRsaW5lOiBub25lOyAqL1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuZm9ybSBidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTk0MDliOTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "sN4w":
/*!****************************************************************************************!*\
  !*** ./src/app/components/admin/apis/get-all-companies/get-all-companies.component.ts ***!
  \****************************************************************************************/
/*! exports provided: GetAllCompaniesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllCompaniesComponent", function() { return GetAllCompaniesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/admin.service */ "AJ6+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function GetAllCompaniesComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 3);
} }
function GetAllCompaniesComponent_table_9_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const com_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](com_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](com_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](com_r4.email);
} }
function GetAllCompaniesComponent_table_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GetAllCompaniesComponent_table_9_tr_10_Template, 8, 3, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.companies);
} }
class GetAllCompaniesComponent {
    constructor(adminService, router, snackBar) {
        this.adminService = adminService;
        this.router = router;
        this.snackBar = snackBar;
    }
    ngOnInit() {
        // this.products = this.ProductsService.getAllProducts
        this.adminService.getAllCompanies().subscribe((arrOfCompanies) => {
            if (arrOfCompanies.length == 0) {
                this.snackBar.open(`No companies to show :(`, 'i got it', {
                    verticalPosition: 'top',
                    duration: 4000,
                });
            }
            this.companies = arrOfCompanies;
        }, (e) => {
            if (e.status === 401) {
                console.log(401);
                this.router.navigate(['unautorized']);
            }
            else {
                this.snackBar.open(`${e.error}`, 'i got it', {
                    verticalPosition: 'top',
                });
            }
            console.dir(e);
        });
    }
}
GetAllCompaniesComponent.ɵfac = function GetAllCompaniesComponent_Factory(t) { return new (t || GetAllCompaniesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
GetAllCompaniesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GetAllCompaniesComponent, selectors: [["app-get-all-companies"]], decls: 10, vars: 2, consts: [[1, "container"], ["loading", ""], [4, "ngIf", "ngIfElse"], ["src", "/assets/LoadingGif.gif", "alt", "loading"], [4, "ngFor", "ngForOf"], ["type", "number", 1, "ID-row"], ["toDelete", ""]], template: function GetAllCompaniesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GetAllCompaniesComponent_ng_template_3_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " All Companies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GetAllCompaniesComponent_table_9_Template, 11, 1, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.companies)("ngIfElse", _r0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["*[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n  background-image: linear-gradient(315deg, #fce043 0%, #fb7ba2 74%);\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  min-height: 80vh;\r\n  display: flex;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  margin-top: 5%;\r\n  margin-left: 12%;\r\n  padding-bottom: 5%;\r\n  width: 75%;\r\n\r\n  box-sizing: border-box;\r\n  justify-content: space-around;\r\n  display: block;\r\n  border-radius: 2rem;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.5),\r\n    rgba(255, 255, 255, 0.1)\r\n  );\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  text-align: center;\r\n\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  font-weight: bold;\r\n  background-color: rgb(221, 221, 221);\r\n  font-size: 35px;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  background-color: #485461;\r\n  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);\r\n  color: rgb(221, 221, 221);\r\n  padding: 5px;\r\n  line-height: 3rem;\r\n  margin: auto;\r\n  width: 85%;\r\n  text-align: center;\r\n  border-radius: 0.7rem;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n  border: solid black 1px;\r\n  border-radius: 0.4rem;\r\n  font-size: 18px;\r\n  \r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n  background-color: #438b31b9;\r\n  border-radius: 0.3rem;\r\n  font-size: 22px;\r\n}\r\n\r\n.ID-row[_ngcontent-%COMP%] {\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  font-style: italic;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n}\r\n\r\n\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin: auto;\r\n  width: 50px;\r\n}\r\n\r\n[_nghost-%COMP%] {\r\n  display: block;\r\n  height: 100%;\r\n  overflow: auto;\r\n}\r\n\r\n.delete-td[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.delete-button[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding-block: 15%;\r\n  min-height: 48px;\r\n  border-radius: 0.4rem;\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldC1hbGwtY29tcGFuaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0VBQWtFO0VBQ2xFLHFEQUFxRDtFQUNyRCxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTs7RUFFVixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkI7Ozs7R0FJQztBQUNIOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjs7RUFFbEIscURBQXFEO0VBQ3JELGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixrRUFBa0U7RUFDbEUseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysd0VBQXdFO0FBQzFFOztBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsZ0RBQWdEO0VBQ2hELGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFDQTs7Ozs7R0FLRzs7QUFFSDtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUNBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixlQUFlO0FBQ2pCIiwiZmlsZSI6ImdldC1hbGwtY29tcGFuaWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2ZjZTA0MyAwJSwgI2ZiN2JhMiA3NCUpO1xyXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XHJcbiAgbWluLWhlaWdodDogODB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMiU7XHJcbiAgcGFkZGluZy1ib3R0b206IDUlO1xyXG4gIHdpZHRoOiA3NSU7XHJcblxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byByaWdodCBib3R0b20sXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSlcclxuICApO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG59XHJcbnRhYmxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDg1NDYxO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM0ODU0NjEgMCUsICMyODMxM2IgNzQlKTtcclxuICBjb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBsaW5lLWhlaWdodDogM3JlbTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDg1JTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xyXG59XHJcblxyXG50ZCB7XHJcbiAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjZmNlMDQzIDAlLCAjZmI3YmEyIDc0JSk7ICovXHJcbn1cclxudGgge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzhiMzFiOTtcclxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcbi5JRC1yb3cge1xyXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi8qIHRib2R5ID4gdHI6bnRoLWNoaWxkKG9kZCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxufVxyXG50Ym9keSA+IHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY29yYWw7XHJcbn0gKi9cclxuXHJcbmltZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLmRlbGV0ZS10ZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5kZWxldGUtYnV0dG9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLWJsb2NrOiAxNSU7XHJcbiAgbWluLWhlaWdodDogNDhweDtcclxuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/about/about.component */ "+DhY");
/* harmony import */ var _components_admin_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/admin/admin-layout/admin-layout.component */ "iKn7");
/* harmony import */ var _components_admin_apis_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/admin/apis/add-company/add-company.component */ "Rx2m");
/* harmony import */ var _components_admin_apis_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/admin/apis/add-customer/add-customer.component */ "kjhH");
/* harmony import */ var _components_admin_apis_delete_company_delete_company_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/admin/apis/delete-company/delete-company.component */ "eJN5");
/* harmony import */ var _components_admin_apis_delete_customer_delete_customer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/admin/apis/delete-customer/delete-customer.component */ "jqPe");
/* harmony import */ var _components_admin_apis_get_all_companies_get_all_companies_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/admin/apis/get-all-companies/get-all-companies.component */ "sN4w");
/* harmony import */ var _components_admin_apis_get_all_customers_get_all_customers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/admin/apis/get-all-customers/get-all-customers.component */ "VM3D");
/* harmony import */ var _components_admin_apis_get_one_company_get_one_company_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/admin/apis/get-one-company/get-one-company.component */ "RVg/");
/* harmony import */ var _components_admin_apis_get_one_customer_get_one_customer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/admin/apis/get-one-customer/get-one-customer.component */ "olF0");
/* harmony import */ var _components_admin_apis_update_company_update_company_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/admin/apis/update-company/update-company.component */ "cTFH");
/* harmony import */ var _components_admin_apis_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/admin/apis/update-customer/update-customer.component */ "s8ks");
/* harmony import */ var _components_company_apis_add_coupon_add_coupon_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/company/apis/add-coupon/add-coupon.component */ "3AUa");
/* harmony import */ var _components_company_apis_delete_coupon_delete_coupon_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/company/apis/delete-coupon/delete-coupon.component */ "wvD/");
/* harmony import */ var _components_company_apis_get_all_couponsn_get_all_couponsn_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/company/apis/get-all-couponsn/get-all-couponsn.component */ "6ap7");
/* harmony import */ var _components_company_apis_get_com_details_get_com_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/company/apis/get-com-details/get-com-details.component */ "7gEU");
/* harmony import */ var _components_company_apis_get_coupons_by_category_get_coupons_by_category_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/company/apis/get-coupons-by-category/get-coupons-by-category.component */ "QFf0");
/* harmony import */ var _components_company_apis_get_coupons_by_limit_price_get_coupons_by_limit_price_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/company/apis/get-coupons-by-limit-price/get-coupons-by-limit-price.component */ "Oc7n");
/* harmony import */ var _components_company_apis_update_coupon_update_coupon_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/company/apis/update-coupon/update-coupon.component */ "C6Rq");
/* harmony import */ var _components_company_company_menu_company_menu_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/company/company-menu/company-menu.component */ "p1Gj");
/* harmony import */ var _components_customer_apis_all_coupons_all_coupons_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/customer/apis/all-coupons/all-coupons.component */ "JzsN");
/* harmony import */ var _components_customer_apis_coupons_by_category_coupons_by_category_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/customer/apis/coupons-by-category/coupons-by-category.component */ "x5d/");
/* harmony import */ var _components_customer_apis_coupons_by_limit_pricey_coupons_by_limit_pricey_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/customer/apis/coupons-by-limit-pricey/coupons-by-limit-pricey.component */ "hTgH");
/* harmony import */ var _components_customer_apis_get_cus_details_get_cus_details_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/customer/apis/get-cus-details/get-cus-details.component */ "xAX9");
/* harmony import */ var _components_customer_apis_purchase_coupon_purchase_coupon_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/customer/apis/purchase-coupon/purchase-coupon.component */ "EWcc");
/* harmony import */ var _components_customer_customer_menu_customer_menu_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/customer/customer-menu/customer-menu.component */ "jaen");
/* harmony import */ var _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/customer/customer.component */ "VT+M");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/logout/logout.component */ "aer8");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "JzmT");
/* harmony import */ var _components_unautorized_client_unautorized_client_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/unautorized-client/unautorized-client.component */ "YJcO");
/* harmony import */ var _guards_menu_guard__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./guards/menu.guard */ "bP22");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/core */ "fXoL");




































const routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_28__["HomeComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_29__["LoginComponent"] },
    { path: 'logout', component: _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_30__["LogoutComponent"] },
    { path: 'unautorized', component: _components_unautorized_client_unautorized_client_component__WEBPACK_IMPORTED_MODULE_32__["UnautorizedClientComponent"] },
    // { path: 'admin-layout/add-company', component: AddCompanyComponent },
    {
        path: 'admin',
        component: _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_27__["CustomerComponent"],
        canActivate: [_guards_menu_guard__WEBPACK_IMPORTED_MODULE_33__["MenuGuard"]],
        canActivateChild: [_guards_menu_guard__WEBPACK_IMPORTED_MODULE_33__["MenuGuard"]],
        children: [
            { path: 'admin-layout', component: _components_admin_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_2__["AdminLayoutComponent"] },
            { path: 'add-company', component: _components_admin_apis_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_3__["AddCompanyComponent"] },
            { path: 'update-company', component: _components_admin_apis_update_company_update_company_component__WEBPACK_IMPORTED_MODULE_11__["UpdateCompanyComponent"] },
            { path: 'delete-company', component: _components_admin_apis_delete_company_delete_company_component__WEBPACK_IMPORTED_MODULE_5__["DeleteCompanyComponent"] },
            { path: 'get-one-company', component: _components_admin_apis_get_one_company_get_one_company_component__WEBPACK_IMPORTED_MODULE_9__["GetOneCompanyComponent"] },
            { path: 'get-all-companies', component: _components_admin_apis_get_all_companies_get_all_companies_component__WEBPACK_IMPORTED_MODULE_7__["GetAllCompaniesComponent"] },
            { path: 'add-customer', component: _components_admin_apis_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_4__["AddCustomerComponent"] },
            { path: 'update-customer', component: _components_admin_apis_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_12__["UpdateCustomerComponent"] },
            { path: 'delete-customer', component: _components_admin_apis_delete_customer_delete_customer_component__WEBPACK_IMPORTED_MODULE_6__["DeleteCustomerComponent"] },
            { path: 'get-one-customer', component: _components_admin_apis_get_one_customer_get_one_customer_component__WEBPACK_IMPORTED_MODULE_10__["GetOneCustomerComponent"] },
            { path: 'get-all-customers', component: _components_admin_apis_get_all_customers_get_all_customers_component__WEBPACK_IMPORTED_MODULE_8__["GetAllCustomersComponent"] },
        ],
    },
    {
        path: 'company',
        component: _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_27__["CustomerComponent"],
        canActivate: [_guards_menu_guard__WEBPACK_IMPORTED_MODULE_33__["MenuGuard"]],
        canActivateChild: [_guards_menu_guard__WEBPACK_IMPORTED_MODULE_33__["MenuGuard"]],
        children: [
            { path: 'company-menu', component: _components_company_company_menu_company_menu_component__WEBPACK_IMPORTED_MODULE_20__["CompanyMenuComponent"] },
            { path: 'add-coupon', component: _components_company_apis_add_coupon_add_coupon_component__WEBPACK_IMPORTED_MODULE_13__["AddCouponComponent"] },
            { path: 'update-coupon', component: _components_company_apis_update_coupon_update_coupon_component__WEBPACK_IMPORTED_MODULE_19__["UpdateCouponComponent"] },
            { path: 'delete-coupon', component: _components_company_apis_delete_coupon_delete_coupon_component__WEBPACK_IMPORTED_MODULE_14__["DeleteCouponComponent"] },
            { path: 'get-all-coupons', component: _components_company_apis_get_all_couponsn_get_all_couponsn_component__WEBPACK_IMPORTED_MODULE_15__["GetAllCouponsnComponent"] },
            {
                path: 'get-coupons-by-category',
                component: _components_company_apis_get_coupons_by_category_get_coupons_by_category_component__WEBPACK_IMPORTED_MODULE_17__["GetCouponsByCategoryComponent"],
            },
            {
                path: 'get-coupons-by-limitprice',
                component: _components_company_apis_get_coupons_by_limit_price_get_coupons_by_limit_price_component__WEBPACK_IMPORTED_MODULE_18__["GetCouponsByLimitPriceComponent"],
            },
            { path: 'get-com-details', component: _components_company_apis_get_com_details_get_com_details_component__WEBPACK_IMPORTED_MODULE_16__["GetComDetailsComponent"] },
        ],
    },
    {
        path: 'customer',
        component: _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_27__["CustomerComponent"],
        canActivate: [_guards_menu_guard__WEBPACK_IMPORTED_MODULE_33__["MenuGuard"]],
        canActivateChild: [_guards_menu_guard__WEBPACK_IMPORTED_MODULE_33__["MenuGuard"]],
        children: [
            { path: 'customer-menu', component: _components_customer_customer_menu_customer_menu_component__WEBPACK_IMPORTED_MODULE_26__["CustomerMenuComponent"] },
            { path: 'purchase-coupon', component: _components_customer_apis_purchase_coupon_purchase_coupon_component__WEBPACK_IMPORTED_MODULE_25__["PurchaseCouponComponent"] },
            { path: 'all-coupons', component: _components_customer_apis_all_coupons_all_coupons_component__WEBPACK_IMPORTED_MODULE_21__["AllCouponsComponent"] },
            { path: 'coupons-by-category', component: _components_customer_apis_coupons_by_category_coupons_by_category_component__WEBPACK_IMPORTED_MODULE_22__["CouponsByCategoryComponent"] },
            {
                path: 'coupons-by-limit-price',
                component: _components_customer_apis_coupons_by_limit_pricey_coupons_by_limit_pricey_component__WEBPACK_IMPORTED_MODULE_23__["CouponsByLimitPriceyComponent"],
            },
            { path: 'get-cus-details', component: _components_customer_apis_get_cus_details_get_cus_details_component__WEBPACK_IMPORTED_MODULE_24__["GetCusDetailsComponent"] },
        ],
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_31__["PageNotFoundComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "va99":
/*!*********************************************!*\
  !*** ./src/app/models/client-type.model.ts ***!
  \*********************************************/
/*! exports provided: ClientType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientType", function() { return ClientType; });
var ClientType;
(function (ClientType) {
    ClientType["Administrator"] = "Administrator";
    ClientType["Company"] = "Company";
    ClientType["Customer"] = "Customer";
})(ClientType || (ClientType = {}));


/***/ }),

/***/ "wvD/":
/*!**********************************************************************************!*\
  !*** ./src/app/components/company/apis/delete-coupon/delete-coupon.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DeleteCouponComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCouponComponent", function() { return DeleteCouponComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/company.service */ "ZtWP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function DeleteCouponComponent_img_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 21);
} }
class DeleteCouponComponent {
    constructor(companyService, router, snackBar) {
        this.companyService = companyService;
        this.router = router;
        this.snackBar = snackBar;
    }
    ngOnInit() { }
    deleteCoupon() {
        console.log(`
    customer ID: ${this.coupon_id}
    
    `);
        this.companyService.deleteCoupon(this.coupon_id).subscribe((answer) => {
            this.snackBar.open(`${answer.concat('✅')} `, 'i got it', {
                verticalPosition: 'top',
            });
        }, (e) => {
            if (e.status === 401) {
                console.log(401);
                this.router.navigate(['unautorized']);
            }
            else {
                this.snackBar.open(`${e.error}`, 'i got it', {
                    verticalPosition: 'top',
                });
            }
            console.dir(e);
        });
    }
}
DeleteCouponComponent.ɵfac = function DeleteCouponComponent_Factory(t) { return new (t || DeleteCouponComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_company_service__WEBPACK_IMPORTED_MODULE_1__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
DeleteCouponComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteCouponComponent, selectors: [["app-delete-coupon"]], decls: 37, vars: 3, consts: [[1, "glass"], [1, "dashboard"], [1, "user"], ["src", "/assets/adminImage2.png", "alt", "", 1, "admin-image"], [1, "member"], [1, "links"], [1, "link"], [1, "pro"], ["routerLink", "../get-all-coupons", "routerLinkActive", "active-link", 1, "customers-list"], [1, "form-div"], ["formInfo", "ngForm"], [1, "status"], ["for", "ID"], ["name", "id", "type", "number", "placeholder", "Choose Coupon to Delete...", "required", "", 3, "ngModel", "ngModelChange"], ["idInfo", "ngModel"], ["class", "vi", "src", "/assets/validImage.png", "alt", "", 4, "ngIf"], [1, "cards"], [1, "card"], ["type", "submit", "value", "update Customer", 3, "disabled", "click"], [1, "circle1"], [1, "circle2"], ["src", "/assets/validImage.png", "alt", "", 1, "vi"]], template: function DeleteCouponComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Welcome Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Delete Coupon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " coupons ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " list ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Which Coupon ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Do you wish to Delete ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "ID : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeleteCouponComponent_Template_input_ngModelChange_28_listener($event) { return ctx.coupon_id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, DeleteCouponComponent_img_30_Template, 1, 0, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteCouponComponent_Template_button_click_33_listener() { return ctx.deleteCoupon(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Delete Coupon ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.coupon_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.form.invalid);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["*[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n  font-size: 1.6rem;\r\n  opacity: 0.8;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  opacity: 0.8;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n  background-color: #378b29;\r\n  background-image: linear-gradient(315deg, #a5e79a 0%, #74d680 74%);\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  min-height: 80vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.glass[_ngcontent-%COMP%] {\r\n  background: white;\r\n  max-height: 64vh;\r\n  min-width: 550px;\r\n  width: 65%;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.5),\r\n    rgba(255, 255, 255, 0.1)\r\n  );\r\n\r\n  border-radius: 2rem;\r\n  z-index: 2;\r\n  -webkit-backdrop-filter: blur(2rem);\r\n          backdrop-filter: blur(2rem);\r\n  display: flex;\r\n}\r\n\r\n.circle1[_ngcontent-%COMP%], .circle2[_ngcontent-%COMP%] {\r\n  background: white;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.01),\r\n    rgba(255, 255, 255, 2)\r\n  );\r\n  height: 13rem;\r\n  width: 13rem;\r\n  position: absolute;\r\n  border-radius: 50%;\r\n}\r\n\r\n.circle1[_ngcontent-%COMP%] {\r\n  top: 13%;\r\n  right: 12%;\r\n  z-index: 0.2;\r\n}\r\n\r\n.circle2[_ngcontent-%COMP%] {\r\n  bottom: 9%;\r\n  left: 12%;\r\n  z-index: 0.2;\r\n}\r\n\r\n.member[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.dashboard[_ngcontent-%COMP%] {\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  min-height: 64vh;\r\n  \r\n  width: 30%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  text-align: center;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.7),\r\n    rgba(255, 255, 255, 0.3)\r\n  );\r\n  border-top-left-radius: 2rem;\r\n  border-bottom-left-radius: 2rem;\r\n}\r\n\r\n.link[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin: 1rem 0rem;\r\n  padding: 1rem 5rem;\r\n  align-items: center;\r\n}\r\n\r\n.link[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  padding: 0rem 2rem;\r\n}\r\n\r\n.form-div[_ngcontent-%COMP%] {\r\n  flex: 2;\r\n}\r\n\r\n.pro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  justify-content: center;\r\n  text-align: center;\r\n\r\n  color: white;\r\n}\r\n\r\n.admin-image[_ngcontent-%COMP%] {\r\n  height: 80px;\r\n  width: 80px;\r\n  border-radius: 40rem;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.status[_ngcontent-%COMP%] {\r\n  padding-top: 20px;\r\n  background: linear-gradient(315deg, #000000 0%, #414141 74%);\r\n  color: rgb(221, 221, 221);\r\n  text-align: center;\r\n  height: 200px;\r\n  width: 70%;\r\n  z-index: 2;\r\n  border-top-right-radius: 2rem;\r\n  position: absolute;\r\n  \r\n}\r\n\r\n.status[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.8),\r\n    rgba(255, 255, 255, 0.5)\r\n  );\r\n  margin-top: 1rem;\r\n  text-align: center;\r\n  border: none;\r\n  width: 100px;\r\n  height: 50px;\r\n  font-size: 25px;\r\n  font-weight: bold;\r\n  padding: 0.5rem;\r\n  border-radius: 2rem;\r\n}\r\n\r\n.cards[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  height: 40%;\r\n  width: 40%;\r\n\r\n  z-index: 3;\r\n  transform: translate(25%, 255px);\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  height: 85px;\r\n  width: 100%;\r\n  display: flex;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.8),\r\n    rgba(255, 255, 255, 0.5)\r\n  );\r\n  border-radius: 1rem;\r\n  margin: 1.8rem;\r\n  padding: 0.5rem;\r\n  box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.5);\r\n  justify-content: space-between;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.vi[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  margin-top: 0.2rem;\r\n  height: 60px;\r\n  width: 60px;\r\n  transform: translate(100%, 103px);\r\n  z-index: 2;\r\n}\r\n\r\n.customers-list[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 100%;\r\n  border-radius: 1.5rem;\r\n  color: rgb(221, 221, 221);\r\n  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n}\r\n\r\n.pro[_ngcontent-%COMP%]:hover {\r\n  height: 90px;\r\n  width: 70%;\r\n  transition: all 0.2s;\r\n}\r\n\r\n.pro[_ngcontent-%COMP%] {\r\n  font-weight: normal;\r\n  position: relative;\r\n  height: 80px;\r\n  width: 60%;\r\n\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.form-div[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.form-div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n  border: 1px solid #ccc;\r\n}\r\n\r\n.form-div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:placeholder {\r\n  color: #bbb;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background-color: #525a50b9;\r\n  color: rgb(221, 221, 221);\r\n  font-weight: bolder;\r\n  font-size: 19px;\r\n\r\n  padding: 2px;\r\n  height: 100%;\r\n  width: 100%;\r\n  position: relative;\r\n\r\n  cursor: pointer;\r\n  border-radius: 0.7rem;\r\n  \r\n  transition: 0.3s;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background-color: #259409b9;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGV0ZS1jb3Vwb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBQ0E7O0VBRUUsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrRUFBa0U7RUFDbEUscURBQXFEO0VBQ3JELGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVjs7OztHQUlDOztFQUVELG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCOzs7O0dBSUM7RUFDRCxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNFQUFzRTtFQUN0RSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwyQkFBbUI7RUFBbkIsd0JBQW1CO0VBQW5CLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCOzs7O0dBSUM7RUFDRCw0QkFBNEI7RUFDNUIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjs7RUFFbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7O0FBRUEsaUJBQWlCOztBQUNqQix3Q0FBd0M7O0FBQ3hDLHdDQUF3Qzs7QUFFeEM7RUFDRSxpQkFBaUI7RUFDakIsNERBQTREO0VBQzVELHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFVBQVU7RUFDVixVQUFVO0VBQ1YsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRTs7OztHQUlDO0VBQ0QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7O0VBRVYsVUFBVTtFQUNWLGdDQUFnQztBQUNsQzs7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiOzs7O0dBSUM7RUFDRCxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQWU7RUFDZixpREFBaUQ7RUFDakQsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLGlDQUFpQztFQUNqQyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsa0VBQWtFO0VBQ2xFLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVOztFQUVWLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixlQUFlOztFQUVmLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjs7RUFFbEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCIiwiZmlsZSI6ImRlbGV0ZS1jb3Vwb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5oMixcclxucCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzhiMjk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2E1ZTc5YSAwJSwgIzc0ZDY4MCA3NCUpO1xyXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XHJcbiAgbWluLWhlaWdodDogODB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmdsYXNzIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBtYXgtaGVpZ2h0OiA2NHZoO1xyXG4gIG1pbi13aWR0aDogNTUwcHg7XHJcbiAgd2lkdGg6IDY1JTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byByaWdodCBib3R0b20sXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSlcclxuICApO1xyXG5cclxuICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5jaXJjbGUxLFxyXG4uY2lyY2xlMiB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gcmlnaHQgYm90dG9tLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAxKSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMilcclxuICApO1xyXG4gIGhlaWdodDogMTNyZW07XHJcbiAgd2lkdGg6IDEzcmVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5jaXJjbGUxIHtcclxuICB0b3A6IDEzJTtcclxuICByaWdodDogMTIlO1xyXG4gIHotaW5kZXg6IDAuMjtcclxufVxyXG5cclxuLmNpcmNsZTIge1xyXG4gIGJvdHRvbTogOSU7XHJcbiAgbGVmdDogMTIlO1xyXG4gIHotaW5kZXg6IDAuMjtcclxufVxyXG5cclxuLm1lbWJlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsIFwiQXJpYWwgTmFycm93IEJvbGRcIiwgc2Fucy1zZXJpZjtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG4uZGFzaGJvYXJkIHtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIG1pbi1oZWlnaHQ6IDY0dmg7XHJcbiAgLyogaGVpZ2h0OiAxMDAlOyAqL1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIHJpZ2h0IGJvdHRvbSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKVxyXG4gICk7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMnJlbTtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAycmVtO1xyXG59XHJcblxyXG4ubGluayB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IDFyZW0gMHJlbTtcclxuICBwYWRkaW5nOiAxcmVtIDVyZW07XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmxpbmsgaDIge1xyXG4gIHBhZGRpbmc6IDByZW0gMnJlbTtcclxufVxyXG5cclxuLmZvcm0tZGl2IHtcclxuICBmbGV4OiAyO1xyXG59XHJcblxyXG4ucHJvIHAge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYWRtaW4taW1hZ2Uge1xyXG4gIGhlaWdodDogODBweDtcclxuICB3aWR0aDogODBweDtcclxuICBib3JkZXItcmFkaXVzOiA0MHJlbTtcclxufVxyXG5cclxuLyogR2FtZSBzZWN0aW9uICovXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4uc3RhdHVzIHtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMDAwMDAwIDAlLCAjNDE0MTQxIDc0JSk7XHJcbiAgY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICB3aWR0aDogNzAlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDJyZW07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgLTI1cHgpOyAqL1xyXG59XHJcblxyXG4uc3RhdHVzIGlucHV0IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byByaWdodCBib3R0b20sXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCksXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSlcclxuICApO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxufVxyXG5cclxuLmNhcmRzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiA0MCU7XHJcbiAgd2lkdGg6IDQwJTtcclxuXHJcbiAgei1pbmRleDogMztcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNSUsIDI1NXB4KTtcclxufVxyXG4uY2FyZCB7XHJcbiAgaGVpZ2h0OiA4NXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gcmlnaHQgYm90dG9tLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpXHJcbiAgKTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIG1hcmdpbjogMS44cmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBib3gtc2hhZG93OiA2cHggNnB4IDIwcHggcmdiYSgxMjIsIDEyMiwgMTIyLCAwLjUpO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmNhcmQgYnV0dG9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnZpIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogMC4ycmVtO1xyXG4gIGhlaWdodDogNjBweDtcclxuICB3aWR0aDogNjBweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlLCAxMDNweCk7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmN1c3RvbWVycy1saXN0IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xyXG4gIGNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzAwMDAwMCAwJSwgIzQxNDE0MSA3NCUpO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnBybzpob3ZlciB7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbn1cclxuLnBybyB7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHdpZHRoOiA2MCU7XHJcblxyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi5mb3JtLWRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcbi5mb3JtLWRpdiBpbnB1dDpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG59XHJcblxyXG4uZm9ybS1kaXYgaW5wdXQ6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjYmJiO1xyXG59XHJcblxyXG5mb3JtIGJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyNWE1MGI5O1xyXG4gIGNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBmb250LXNpemU6IDE5cHg7XHJcblxyXG4gIHBhZGRpbmc6IDJweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xyXG4gIC8qIG91dGxpbmU6IG5vbmU7ICovXHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5mb3JtIGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1OTQwOWI5O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "x5d/":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/customer/apis/coupons-by-category/coupons-by-category.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: CouponsByCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponsByCategoryComponent", function() { return CouponsByCategoryComponent; });
/* harmony import */ var src_app_models_category_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/category.model */ "iAog");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/customer.service */ "0zL+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function CouponsByCategoryComponent_img_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 10);
} }
function CouponsByCategoryComponent_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", category_r5, " ");
} }
function CouponsByCategoryComponent_section_17_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 13);
} }
function CouponsByCategoryComponent_section_17_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r9.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r9.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r9.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r9.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r9.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r9.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r9.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", c_r9.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CouponsByCategoryComponent_section_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CouponsByCategoryComponent_section_17_ng_template_2_Template, 1, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Coupons By Category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Start-Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "End-Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, CouponsByCategoryComponent_section_17_tr_28_Template, 18, 8, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.coupons);
} }
class CouponsByCategoryComponent {
    constructor(customerService, router, snackBar) {
        this.customerService = customerService;
        this.router = router;
        this.snackBar = snackBar;
        this.categories = [
            src_app_models_category_model__WEBPACK_IMPORTED_MODULE_0__["Category"].Electricity,
            src_app_models_category_model__WEBPACK_IMPORTED_MODULE_0__["Category"].Food,
            src_app_models_category_model__WEBPACK_IMPORTED_MODULE_0__["Category"].Restaurant,
            src_app_models_category_model__WEBPACK_IMPORTED_MODULE_0__["Category"].Sport,
            src_app_models_category_model__WEBPACK_IMPORTED_MODULE_0__["Category"].Vacation,
        ];
    }
    ngOnInit() { }
    getCouponsByCategory() {
        console.log(`
    category: ${this.category}
    `);
        this.customerService.getCouponsByCategory(this.category).subscribe((arrOfCoupons) => {
            if (arrOfCoupons.length == 0) {
                this.snackBar.open(`No coupons to show :(`, 'i got it', {
                    verticalPosition: 'top',
                    duration: 4000,
                });
            }
            this.coupons = arrOfCoupons;
        }, (e) => {
            if (e.status === 401) {
                console.log(401);
                this.router.navigate(['unautorized']);
            }
            else {
                this.snackBar.open(`${e.error}`, 'i got it', {
                    verticalPosition: 'top',
                });
            }
            console.dir(e);
        });
    }
}
CouponsByCategoryComponent.ɵfac = function CouponsByCategoryComponent_Factory(t) { return new (t || CouponsByCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
CouponsByCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CouponsByCategoryComponent, selectors: [["app-coupons-by-category"]], decls: 18, vars: 5, consts: [[1, "form-div"], ["formInfo", "ngForm"], [1, "header"], [1, "card"], ["class", "vi", "src", "/assets/validImage.png", "alt", "", 4, "ngIf"], ["name", "categoryType", "required", "", 3, "ngModel", "ngModelChange"], ["categoryInfo", "ngModel"], [4, "ngFor", "ngForOf"], ["type", "submit", "value", "Get By Category", 3, "disabled", "click"], ["class", "container", 4, "ngIf"], ["src", "/assets/validImage.png", "alt", "", 1, "vi"], [1, "container"], ["loading", ""], ["src", "/assets/LoadingGif.gif", "alt", "loading"], [3, "href"], ["src", "/assets/coupon-link.png", "alt", "image-link"]], template: function CouponsByCategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Which Coupon's Category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " would you like ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CouponsByCategoryComponent_img_10_Template, 1, 0, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "select", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CouponsByCategoryComponent_Template_select_ngModelChange_11_listener($event) { return ctx.category = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, CouponsByCategoryComponent_option_13_Template, 2, 1, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CouponsByCategoryComponent_Template_button_click_15_listener() { return ctx.getCouponsByCategory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Check ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CouponsByCategoryComponent_section_17_Template, 29, 1, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r2.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r0.form.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.coupons);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_z"]], styles: ["*[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n  background-color: #fff293;\r\n  background-image: linear-gradient(315deg, #fff293 0%, #ffe884 74%);\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  min-height: 80vh;\r\n  min-width: 150vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  text-align: center;\r\n  overflow-y: auto;\r\n}\r\n\r\n.header[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  text-align: center;\r\n\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  font-weight: bold;\r\n  color: rgb(221, 221, 221);\r\n  font-size: 35px;\r\n}\r\n\r\n.form-div[_ngcontent-%COMP%] {\r\n  background-color: #000000;\r\n  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);\r\n  \r\n  position: relative;\r\n  height: 30%;\r\n  width: 50%;\r\n  padding: 10px;\r\n  margin-top: 50px;\r\n  box-sizing: content-box;\r\n\r\n  border-radius: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  flex: 2;\r\n  position: relative;\r\n  transform: translateX(-8%);\r\n  min-height: 20vh;\r\n  margin-top: 40px;\r\n  margin-bottom: 40px;\r\n  margin-left: 15%;\r\n  padding-bottom: 5%;\r\n\r\n  width: 85%;\r\n  padding: 10px;\r\n  \r\n  box-sizing: content-box;\r\n  justify-content: space-around;\r\n  display: block;\r\n  border-radius: 2rem;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.5),\r\n    rgba(255, 255, 255, 0.1)\r\n  );\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  transform: translateX(20%);\r\n  height: 65px;\r\n  width: 100px;\r\n  min-width: 60%;\r\n  display: flex;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.8),\r\n    rgba(255, 255, 255, 0.5)\r\n  );\r\n  border-radius: 1rem;\r\n  margin: 1.8rem;\r\n  padding: 0.5rem;\r\n  justify-content: space-between;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  text-align: center;\r\n\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  font-weight: bold;\r\n  background-color: rgb(221, 221, 221);\r\n  font-size: 35px;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  background-color: #485461;\r\n  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);\r\n  padding: 5px;\r\n  line-height: 2.3rem;\r\n  margin: auto;\r\n  width: 85%;\r\n\r\n  text-align: center;\r\n  border-radius: 0.7rem;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n  color: rgb(221, 221, 221);\r\n  border: solid black 1px;\r\n  border-radius: 0.4rem;\r\n  font-size: 18px;\r\n  \r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n  background-color: #438b31b9;\r\n  border-radius: 0.3rem;\r\n  font-size: 22px;\r\n}\r\n\r\n.ID-row[_ngcontent-%COMP%] {\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  font-style: italic;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n}\r\n\r\n.vi[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin-top: 0.2rem;\r\n  height: 60px;\r\n  width: 60px;\r\n  transform: translate(-5px, -10px);\r\n}\r\n\r\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background-color: #525a50b9;\r\n  color: rgb(221, 221, 221);\r\n  font-weight: bolder;\r\n  font-size: 19px;\r\n\r\n  padding: 2px;\r\n  height: 100%;\r\n  width: 100%;\r\n  position: relative;\r\n\r\n  cursor: pointer;\r\n  border-radius: 0.7rem;\r\n  \r\n  \r\n}\r\n\r\nform[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background-color: #fff293;\r\n  background-image: linear-gradient(315deg, #fff293 0%, #ffe884 74%);\r\n  border-radius: 1rem;\r\n  text-align: center;\r\n  font-size: 22px;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\r\n  font-size: 22px;\r\n  padding-inline-start: 30px;\r\n}\r\n\r\nspan[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  font-weight: bold;\r\n  letter-spacing: 1px;\r\n  transform: translateY(10px);\r\n}\r\n\r\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background-color: #57854bb9;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin: auto;\r\n  width: 50px;\r\n}\r\n\r\n[_nghost-%COMP%] {\r\n  display: block;\r\n  height: 100%;\r\n  overflow: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXBvbnMtYnktY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0VBQWtFO0VBQ2xFLHFEQUFxRDtFQUNyRCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjs7RUFFbEIscURBQXFEO0VBQ3JELGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixrRUFBa0U7RUFDbEUsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsdUJBQXVCOztFQUV2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7O0VBRWxCLFVBQVU7RUFDVixhQUFhO0VBQ2I7Z0NBQzhCO0VBQzlCLHVCQUF1QjtFQUN2Qiw2QkFBNkI7RUFDN0IsY0FBYztFQUNkLG1CQUFtQjtFQUNuQjs7OztHQUlDO0FBQ0g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixZQUFZO0VBQ1osY0FBYztFQUNkLGFBQWE7RUFDYjs7OztHQUlDO0VBQ0QsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxlQUFlO0VBQ2YsOEJBQThCO0FBQ2hDOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjs7RUFFbEIscURBQXFEO0VBQ3JELGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0VBQWtFO0VBQ2xFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFVBQVU7O0VBRVYsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZix3RUFBd0U7QUFDMUU7O0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxnREFBZ0Q7RUFDaEQsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLGlDQUFpQztBQUNuQzs7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGVBQWU7O0VBRWYsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCOztFQUVsQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGtFQUFrRTtFQUNsRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsMEJBQTBCO0FBQzVCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFEQUFxRDtFQUNyRCxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLDJCQUEyQjtBQUM3Qjs7QUFDQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUNBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixjQUFjO0FBQ2hCIiwiZmlsZSI6ImNvdXBvbnMtYnktY2F0ZWdvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5tYWluIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMjkzO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNmZmYyOTMgMCUsICNmZmU4ODQgNzQlKTtcclxuICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG4gIG1pbi1oZWlnaHQ6IDgwdmg7XHJcbiAgbWluLXdpZHRoOiAxNTB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG4uaGVhZGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG59XHJcbi5mb3JtLWRpdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMDAwMDAwIDAlLCAjNDE0MTQxIDc0JSk7XHJcbiAgLyogY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTsgKi9cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAzMCU7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBmbGV4OiAyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTglKTtcclxuICBtaW4taGVpZ2h0OiAyMHZoO1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1JTtcclxuXHJcbiAgd2lkdGg6IDg1JTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIC8qIG1pbi13aWR0aDogODAwcHg7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IG1pbi1jb250ZW50OyAqL1xyXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gcmlnaHQgYm90dG9tLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpXHJcbiAgKTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAlKTtcclxuICBoZWlnaHQ6IDY1cHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIG1pbi13aWR0aDogNjAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gcmlnaHQgYm90dG9tLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpXHJcbiAgKTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIG1hcmdpbjogMS44cmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuaDEge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxufVxyXG50YWJsZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ODU0NjE7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzQ4NTQ2MSAwJSwgIzI4MzEzYiA3NCUpO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBsaW5lLWhlaWdodDogMi4zcmVtO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogODUlO1xyXG5cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xyXG59XHJcblxyXG50ZCB7XHJcbiAgY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcclxuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNmY2UwNDMgMCUsICNmYjdiYTIgNzQlKTsgKi9cclxufVxyXG50aCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzOGIzMWI5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuLklELXJvdyB7XHJcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLnZpIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogMC4ycmVtO1xyXG4gIGhlaWdodDogNjBweDtcclxuICB3aWR0aDogNjBweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4LCAtMTBweCk7XHJcbn1cclxuZm9ybSBidXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MjVhNTBiOTtcclxuICBjb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgZm9udC1zaXplOiAxOXB4O1xyXG5cclxuICBwYWRkaW5nOiAycHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcclxuICAvKiBvdXRsaW5lOiBub25lOyAqL1xyXG4gIC8qIHRyYW5zaXRpb246IDAuM3M7ICovXHJcbn1cclxuZm9ybSBzZWxlY3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYyOTM7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2ZmZjI5MyAwJSwgI2ZmZTg4NCA3NCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5mb3JtIG9wdGlvbiB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAzMHB4O1xyXG59XHJcbnNwYW4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xyXG59XHJcbmZvcm0gYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTc4NTRiYjk7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "xAX9":
/*!***************************************************************************************!*\
  !*** ./src/app/components/customer/apis/get-cus-details/get-cus-details.component.ts ***!
  \***************************************************************************************/
/*! exports provided: GetCusDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCusDetailsComponent", function() { return GetCusDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/customer.service */ "0zL+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function GetCusDetailsComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 3);
} }
function GetCusDetailsComponent_table_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.customer.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.customer.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.customer.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.customer.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.customer.password);
} }
class GetCusDetailsComponent {
    constructor(customerService, router, snackBar) {
        this.customerService = customerService;
        this.router = router;
        this.snackBar = snackBar;
    }
    ngOnInit() {
        // this.products = this.ProductsService.getAllProducts
        this.customerService.getDetails().subscribe((customerFromDB) => {
            this.customer = customerFromDB;
        }, (e) => {
            if (e.status === 401) {
                console.log(401);
                this.router.navigate(['unautorized']);
            }
            else {
                this.snackBar.open(`${e.error}`, 'i got it', {
                    verticalPosition: 'top',
                });
            }
            console.dir(e);
        });
    }
}
GetCusDetailsComponent.ɵfac = function GetCusDetailsComponent_Factory(t) { return new (t || GetCusDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
GetCusDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GetCusDetailsComponent, selectors: [["app-get-cus-details"]], decls: 10, vars: 2, consts: [[1, "container"], ["loading", ""], [4, "ngIf", "ngIfElse"], ["src", "/assets/LoadingGif.gif", "alt", "loading"], [1, "ID-row"]], template: function GetCusDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GetCusDetailsComponent_ng_template_3_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Your Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GetCusDetailsComponent_table_9_Template, 25, 5, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customer)("ngIfElse", _r0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["*[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n  background-color: #fff293;\r\n  background-image: linear-gradient(315deg, #fff293 0%, #ffe884 74%);\r\n\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  min-height: 80vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  transform: translate(-8%, -110px);\r\n\r\n  margin-left: 15%;\r\n  padding-bottom: 5%;\r\n\r\n  width: 85%;\r\n  min-width: 500px;\r\n\r\n  box-sizing: border-box;\r\n  justify-content: space-around;\r\n  display: block;\r\n  border-radius: 2rem;\r\n  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  text-align: center;\r\n\r\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\r\n  font-weight: bold;\r\n  background-color: rgb(221, 221, 221);\r\n  font-size: 35px;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  background-image: linear-gradient(315deg, #fce043 0%, #fb7ba2 74%);\r\n  padding: 5px;\r\n  line-height: 3rem;\r\n  margin: auto;\r\n  width: 85%;\r\n  text-align: center;\r\n  border-radius: 0.7rem;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n  border: solid black 1px;\r\n  border-radius: 0.4rem;\r\n  font-size: 18px;\r\n  \r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n  background-color: #438b31b9;\r\n  border-radius: 0.3rem;\r\n  font-size: 22px;\r\n}\r\n\r\n.ID-row[_ngcontent-%COMP%] {\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  font-style: italic;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n}\r\n\r\n\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin: auto;\r\n  width: 50px;\r\n}\r\n\r\n[_nghost-%COMP%] {\r\n  display: block;\r\n  height: 100%;\r\n  overflow: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldC1jdXMtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrRUFBa0U7O0VBRWxFLHFEQUFxRDtFQUNyRCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUNBQWlDOztFQUVqQyxnQkFBZ0I7RUFDaEIsa0JBQWtCOztFQUVsQixVQUFVO0VBQ1YsZ0JBQWdCOztFQUVoQixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsa0VBQWtFO0FBQ3BFOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjs7RUFFbEIsNkVBQTZFO0VBQzdFLGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGtFQUFrRTtFQUNsRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLHdFQUF3RTtBQUMxRTs7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGdEQUFnRDtFQUNoRCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBQ0E7Ozs7O0tBS0s7O0FBRUw7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osY0FBYztBQUNoQiIsImZpbGUiOiJnZXQtY3VzLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5tYWluIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMjkzO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNmZmYyOTMgMCUsICNmZmU4ODQgNzQlKTtcclxuXHJcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcclxuICBtaW4taGVpZ2h0OiA4MHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC04JSwgLTExMHB4KTtcclxuXHJcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcblxyXG4gIHdpZHRoOiA4NSU7XHJcbiAgbWluLXdpZHRoOiA1MDBweDtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICMwMDAwMDAgMCUsICM0MTQxNDEgNzQlKTtcclxufVxyXG5cclxuaDEge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIGZvbnQtZmFtaWx5OiBcIkdpbGwgU2Fuc1wiLCBcIkdpbGwgU2FucyBNVFwiLCBDYWxpYnJpLCBcIlRyZWJ1Y2hldCBNU1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbn1cclxudGFibGUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNmY2UwNDMgMCUsICNmYjdiYTIgNzQlKTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDNyZW07XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcclxufVxyXG5cclxudGQge1xyXG4gIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2ZjZTA0MyAwJSwgI2ZiN2JhMiA3NCUpOyAqL1xyXG59XHJcbnRoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM4YjMxYjk7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG4uSUQtcm93IHtcclxuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4vKiB0Ym9keSA+IHRyOm50aC1jaGlsZChvZGQpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxuICB9XHJcbiAgdGJvZHkgPiB0cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29yYWw7XHJcbiAgfSAqL1xyXG5cclxuaW1nIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map