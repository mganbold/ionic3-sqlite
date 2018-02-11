webpackJsonp([0],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDataPageModule", function() { return EditDataPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_data__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditDataPageModule = (function () {
    function EditDataPageModule() {
    }
    EditDataPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_data__["a" /* EditDataPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_data__["a" /* EditDataPage */]),
            ],
        })
    ], EditDataPageModule);
    return EditDataPageModule;
}());

//# sourceMappingURL=edit-data.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditDataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditDataPage = (function () {
    function EditDataPage(navCtrl, navParams, sqlite, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sqlite = sqlite;
        this.toast = toast;
        this.data = { rowid: 0, date: "", type: "", description: "", amount: 0 };
        this.getCurrentData(navParams.get("rowid"));
    }
    EditDataPage.prototype.getCurrentData = function (rowid) {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('SELECT * FROM expense WHERE rowid=?', [rowid])
                .then(function (res) {
                if (res.rows.length > 0) {
                    _this.data.rowid = res.rows.item(0).rowid;
                    _this.data.date = res.rows.item(0).date;
                    _this.data.type = res.rows.item(0).type;
                    _this.data.description = res.rows.item(0).description;
                    _this.data.amount = res.rows.item(0).amount;
                }
            })
                .catch(function (e) {
                console.log(e);
                _this.toast.show(e, '5000', 'center').subscribe(function (toast) {
                    console.log(toast);
                });
            });
        }).catch(function (e) {
            console.log(e);
            _this.toast.show(e, '5000', 'center').subscribe(function (toast) {
                console.log(toast);
            });
        });
    };
    EditDataPage.prototype.updateData = function () {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('UPDATE expense SET date=?,type=?,description=?,amount=? WHERE rowid=?', [_this.data.date, _this.data.type, _this.data.description, _this.data.amount, _this.data.rowid])
                .then(function (res) {
                console.log(res);
                _this.toast.show('Data updated', '5000', 'center').subscribe(function (toast) {
                    _this.navCtrl.popToRoot();
                });
            })
                .catch(function (e) {
                console.log(e);
                _this.toast.show(e, '5000', 'center').subscribe(function (toast) {
                    console.log(toast);
                });
            });
        }).catch(function (e) {
            console.log(e);
            _this.toast.show(e, '5000', 'center').subscribe(function (toast) {
                console.log(toast);
            });
        });
    };
    EditDataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-data',template:/*ion-inline-start:"/Users/Mandah/Documents/Github/ionic3-sqlite/src/pages/edit-data/edit-data.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>My Expense</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <h2>Edit Data</h2>\n  <form (ngSubmit)="updateData()">\n    <ion-item>\n      <ion-label>Date</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="data.date" name="date" required=""></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label>Type</ion-label>\n      <ion-select [(ngModel)]="data.type" name="type" required="">\n        <ion-option value="Income">Income</ion-option>\n        <ion-option value="Expense">Expense</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Description</ion-label>\n      <ion-input type="text" placeholder="Description" [(ngModel)]="data.description" name="description" required="" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Amount</ion-label>\n      <ion-input type="number" placeholder="Amount" [(ngModel)]="data.amount" name="amount" required="" ></ion-input>\n    </ion-item>\n    <ion-input type="hidden" [(ngModel)]="data.rowid" name="rowid"></ion-input>\n    <button ion-button type="submit" block>Update Data</button>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/Mandah/Documents/Github/ionic3-sqlite/src/pages/edit-data/edit-data.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__["a" /* Toast */]])
    ], EditDataPage);
    return EditDataPage;
}());

//# sourceMappingURL=edit-data.js.map

/***/ })

});
//# sourceMappingURL=0.js.map