webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/add-goal/add-goal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-goal/add-goal.component.html":
/***/ (function(module, exports) {

module.exports = "      <div style=\"background-color: lightgreen; padding: 35px; text-align: center; margin: 0\">\n      <h2 style=\"color: blue\">Add Goal</h2> \n      \n      <textarea [(ngModel)]= \"input.goals\" style=\"text-align: center; width: 350px\"  placeholder=\"Enter goal here\"></textarea><br/> \n      <select [(ngModel)]= \"input.scrumy_status_id\"  style=\"text-align: center; width: 250px\">\n\t\t\t<option *ngFor = \"let statu of status\"   [value]=\"statu.id\">\n\t\t\t\t\t{{statu.name}}\n\t\t\t</option>\n\t</select>\n      <br/>\n\n      <button (click)=\"addGoal()\">Add Goal</button>\n      \n      </div>  \n    \n"

/***/ }),

/***/ "../../../../../src/app/add-goal/add-goal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddGoalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddGoalComponent = /** @class */ (function () {
    function AddGoalComponent(httpClient, data, route, router) {
        var _this = this;
        this.httpClient = httpClient;
        this.data = data;
        this.route = route;
        this.router = router;
        this.status = '';
        this.route.params.subscribe(function (params) { return _this.scrumy_story = params.id; });
    }
    AddGoalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.input = {
            goals: 'ggdfgdg',
            scrumy_user_id: this.scrumy_story,
            scrumy_status_id: '1'
        };
        this.data.getStatus()
            .subscribe(function (data) { return _this.status = data; });
        this.scrumy_status_id = 1;
    };
    AddGoalComponent.prototype.addGoal = function () {
        var _this = this;
        console.log(this.input.goals);
        console.log(this.input.scrumy_status);
        console.log(this.input.scrumy_story);
        this.data.addNewGoal(this.input)
            .subscribe(function (data) {
            _this.router.navigate(['']);
            console.log(data);
        });
    };
    AddGoalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-goal',
            template: __webpack_require__("../../../../../src/app/add-goal/add-goal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-goal/add-goal.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AddGoalComponent);
    return AddGoalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/add-story/add-story.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-story/add-story.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div style=\"background-color: lightgreen; padding: 35px; text-align: center; margin: 0\">\n<h1 style=\"text-align: center;\">New Users</h1>\n\n<input type=\"text\"  [(ngModel)]= \"register.story\" placeholder=\"Enter your story here\" style=\"text-align: center; width: 250px\"><br/>\n\n\n\n<button (click)=\"addStory()\">Add New Story</button> \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/add-story/add-story.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddStoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddStoryComponent = /** @class */ (function () {
    function AddStoryComponent(data, httpClient, router) {
        this.data = data;
        this.httpClient = httpClient;
        this.router = router;
        this.userName = '';
    }
    AddStoryComponent.prototype.ngOnInit = function () {
        this.register = {
            story: '',
        };
    };
    AddStoryComponent.prototype.addStory = function () {
        var _this = this;
        this.data.addNewStory(this.register).subscribe(function (response) {
            _this.router.navigate(['']);
        }, function (error) { return console.log('error', error); });
    };
    AddStoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-story',
            template: __webpack_require__("../../../../../src/app/add-story/add-story.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-story/add-story.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AddStoryComponent);
    return AddStoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div  style=\"overflow-x:auto;\">\n<table>\n  <tr>\n    <th style=\" width: 10px;\">Username</th>\n    <th style=\"background-color: lightgrey\"></th>\n    <th>Weekly Target</th>\n    <th>Daily Target</th>\n    <th>Verified</th>\n    <th>Done</th>\n  </tr>\n\n  <tr *ngFor = \"let user of users\">\n    <td style=\" padding:20px;\"><p>{{ user.username }}</p></td>\n    <td style=\"width: 5px; background-color:  #f5f5f0\" >\n\n      <button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content, user?.id)\">+</button>      \n\n    </td>\n    <td>\n      <div id=\"1\" >\n        <div style=\"display: inline-flex;\"  *ngFor = \"let goal of user.scrumy_goals\" [attr.data-id]= \"goal.id\">\n          <div class=\"list_div\" *ngIf =\"goal.scrumy_status_id == 1\">\n            {{goal.id}}<br>{{goal.goals}}<br><div class=\"bottom\">Weekly</div>\n          </div>\n        </div>\n      </div> \n    </td>\n\n    <td style=\"background-color:  #f5f5f0\">\n      <div [dragula]='\"bag-weekly\"' id=\"2\">\n        <div style=\"display: inline-flex;\"  *ngFor = \"let goal of user.scrumy_goals\" [attr.data-id]= \"goal.id\">\n          <div class=\"list_div\" *ngIf =\"goal.scrumy_status_id == 2\">\n            {{goal.id}}<br>{{goal.goals}}<br><div class=\"bottom\">Daily</div>\n          </div>\n        </div>\n      </div> \n    </td>\n\n    <td>\n      <div [dragula]='\"bag-weekly\"' id=\"3\">\n        <div style=\"display: inline-flex;\"  *ngFor = \"let goal of user.scrumy_goals\" [attr.data-id]= goal.id>\n          <div class=\"list_div\" *ngIf =\"goal.scrumy_status_id == 3\">\n           {{goal.id}}<br> {{goal.goals}}<div class=\"bottom\">Verified</div>\n          </div>\n        </div>\n      </div> \n    </td>\n\n    <td style=\"background-color:  #f5f5f0\">\n      <div id=\"4\">\n        <div style=\"display: inline-flex;\"  *ngFor = \"let goal of user.scrumy_goals\" [attr.data-id]= \"goal.id\">\n          <div class=\"list_div\" *ngIf =\"goal.scrumy_status_id == 4\">\n            {{goal.id}}<br>{{goal.goals}}<br><div class=\"bottom\">Done</div>\n          </div>\n        </div> \n      </div>\n    </td>\n\n  </tr>\n\n</table>\n\n\n\n\n\n\n\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Profile update</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n\n\n    \n      <div style=\"background-color: lightgreen; padding: 35px; text-align: center; margin: 0\">\n      <h2 style=\"color: blue\">Add Goal</h2> \n      <p>{{inputStatusMsg}}</p>\n      \n      <textarea [(ngModel)]= \"goal\" style=\"text-align: center; width: 350px\"  placeholder=\"Enter goal here\"></textarea><br/> \n      <select [(ngModel)]= \"scrumy_status\"  style=\"text-align: center; width: 250px\">\n      <option *ngFor = \"let statu of status\"   [value]=\"statu.id\">\n          {{statu.name}}\n      </option>\n  </select>\n      <br/>\n\n      <button (click)=\"postGoal()\">Add Goal</button>\n      <h1>{{newUser}}</h1>\n      \n      </div>  \n    \n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Close</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/ng2-dragula.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({
        Authorization: 'Token ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
    })
};
var AdminComponent = /** @class */ (function () {
    function AdminComponent(dragulaService, httpClient, data, modalService, router, route) {
        var _this = this;
        this.dragulaService = dragulaService;
        this.httpClient = httpClient;
        this.data = data;
        this.modalService = modalService;
        this.router = router;
        this.route = route;
        this.name = '';
        this.goal = '';
        this.status = '';
        this.inputStatusMsg = '';
        dragulaService.drag.subscribe(function (value) {
            console.log("drag: " + value[0]);
            _this.onDrop(value.slice(1));
        });
        this.route.params.subscribe(function (params) { return _this.scrumy_owner = params.id; });
        // dragulaService.setOptions('bag-weekly',{
        //  move:true
        // })
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getUsers()
            .subscribe(function (data) { return _this.users = data; });
        this.data.getStatus()
            .subscribe(function (data) { return _this.status = data; });
        this.scrumy_status = 1;
        this.goal = '';
    };
    AdminComponent.prototype.onDrop = function (args) {
        var _this = this;
        var e = args[0], el = args[1];
        // do something
        this.dragulaService.drop.subscribe(function (value) {
            //Bag  
            console.log("bag: " + value[0]);
            // What is moved
            console.log("Content: " + value[1].innerHTML);
            // Destination
            console.log("Destination: " + value[2]['id']);
            // Origin
            console.log("origin: " + value[3]['id']);
            console.log(value[1].dataset.id);
            _this.httpClient.patch('http://127.0.0.1:8000/goals/' + value[1].dataset.id + '/', {
                scrumy_status_id: value[2]['id']
            }, httpOptions).subscribe(function (data) {
                console.log(data);
            });
            console.log("drag2: " + value[1].dataset.id);
            console.log("drag: " + value[2]['id']);
        });
    };
    AdminComponent.prototype.open = function (content, id) {
        var _this = this;
        console.log(id);
        this.scrumy_owner = id;
        this.modalService.open(content, { size: 'lg' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    AdminComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    AdminComponent.prototype.postGoal = function () {
        var _this = this;
        console.log(this.scrumy_status);
        console.log(this.scrumy_owner);
        // this.httpClient.post('http://localhost:8000/goals/', 
        // {
        //     goals: this.goal,
        //     scrumy_user: this.scrumy_user,
        //     scrumy_status: this.scrumy_status
        //   })
        this.data.addNewGoal({
            goals: this.goal,
            scrumy_user_id: this.scrumy_owner,
            scrumy_status_id: this.scrumy_status
        })
            .subscribe(function (data) {
            _this.router.navigate(['']);
            console.log(data);
            _this.goal = '';
            _this.scrumy_owner = null;
            _this.scrumy_status = 1;
            _this.inputStatusMsg = 'Goal added successfully';
            _this.usersVar = _this.data.getUsers()
                .subscribe(function (data) { return _this.users = data; });
        });
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__("../../../../../src/app/admin/admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__["DragulaService"], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__goals_goals_component__ = __webpack_require__("../../../../../src/app/goals/goals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_goal_add_goal_component__ = __webpack_require__("../../../../../src/app/add-goal/add-goal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__story_story_component__ = __webpack_require__("../../../../../src/app/story/story.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__developer_developer_component__ = __webpack_require__("../../../../../src/app/developer/developer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__qa_qa_component__ = __webpack_require__("../../../../../src/app/qa/qa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__owner_owner_component__ = __webpack_require__("../../../../../src/app/owner/owner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_7__story_story_component__["a" /* StoryComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_12__auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'app',
        component: __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_12__auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'goals/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__goals_goals_component__["a" /* GoalsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_12__auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'signup',
        component: __WEBPACK_IMPORTED_MODULE_5__sign_up_sign_up_component__["a" /* SignUpComponent */]
    },
    {
        path: 'addgoal/:id',
        component: __WEBPACK_IMPORTED_MODULE_6__add_goal_add_goal_component__["a" /* AddGoalComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_12__auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'story',
        component: __WEBPACK_IMPORTED_MODULE_7__story_story_component__["a" /* StoryComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_12__auth_guard__["a" /* AuthGuard */]]
    }, {
        path: 'developer',
        component: __WEBPACK_IMPORTED_MODULE_8__developer_developer_component__["a" /* DeveloperComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_12__auth_guard__["a" /* AuthGuard */]]
    }, {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_9__admin_admin_component__["a" /* AdminComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_12__auth_guard__["a" /* AuthGuard */]]
    }, {
        path: 'qa',
        component: __WEBPACK_IMPORTED_MODULE_10__qa_qa_component__["a" /* QaComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_12__auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'owner',
        component: __WEBPACK_IMPORTED_MODULE_11__owner_owner_component__["a" /* OwnerComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_12__auth_guard__["a" /* AuthGuard */]]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "      <button (click)=\"data.logOutUser()\">Log Out</button> \n      <div id=\"myModal\" >\n        <router-outlet></router-outlet>\n      </div>\n\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Profile update</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n\n    \n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Save</button>\n  </div>\n</ng-template>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(data, router, modalService) {
        this.data = data;
        this.router = router;
        this.modalService = modalService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(localStorage.getItem('token'));
        console.log('newjj');
        this.data.getUsers()
            .subscribe(function (data) { return _this.stories = data; });
    };
    AppComponent.prototype.toBoard = function () {
        var _this = this;
        this.data.getUsers()
            .subscribe(function (response) {
            console.log('appComp' + localStorage.getItem('token'));
            _this.router.navigate(['']);
        }, function (error) { return console.log('error', error); });
    };
    AppComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    AppComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__goals_goals_component__ = __webpack_require__("../../../../../src/app/goals/goals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__token_interceptor_service__ = __webpack_require__("../../../../../src/app/token-interceptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__add_goal_add_goal_component__ = __webpack_require__("../../../../../src/app/add-goal/add-goal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__story_story_component__ = __webpack_require__("../../../../../src/app/story/story.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__add_story_add_story_component__ = __webpack_require__("../../../../../src/app/add-story/add-story.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__auth_auth_module__ = __webpack_require__("../../../../../src/app/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__main_main_module__ = __webpack_require__("../../../../../src/app/main/main.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__developer_developer_component__ = __webpack_require__("../../../../../src/app/developer/developer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__qa_qa_component__ = __webpack_require__("../../../../../src/app/qa/qa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__owner_owner_component__ = __webpack_require__("../../../../../src/app/owner/owner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__modal_basic__ = __webpack_require__("../../../../../src/app/modal-basic.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__goals_goals_component__["a" /* GoalsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_15__sign_up_sign_up_component__["a" /* SignUpComponent */],
                __WEBPACK_IMPORTED_MODULE_16__add_goal_add_goal_component__["a" /* AddGoalComponent */],
                __WEBPACK_IMPORTED_MODULE_17__story_story_component__["a" /* StoryComponent */],
                __WEBPACK_IMPORTED_MODULE_18__add_story_add_story_component__["a" /* AddStoryComponent */],
                __WEBPACK_IMPORTED_MODULE_21__developer_developer_component__["a" /* DeveloperComponent */],
                __WEBPACK_IMPORTED_MODULE_22__admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_23__qa_qa_component__["a" /* QaComponent */],
                __WEBPACK_IMPORTED_MODULE_24__owner_owner_component__["a" /* OwnerComponent */],
                __WEBPACK_IMPORTED_MODULE_25__modal_basic__["a" /* NgbdModalBasic */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8_ng2_dragula__["DragulaModule"],
                __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_19__auth_auth_module__["a" /* AuthModule */],
                __WEBPACK_IMPORTED_MODULE_20__main_main_module__["a" /* MainModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_12__auth_guard__["a" /* AuthGuard */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_14__token_interceptor_service__["a" /* TokenInterceptorService */],
                    multi: true
                }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(data, router) {
        this.data = data;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.data.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: []
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/ng2-dragula.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({
        Authorization: 'Token ' + localStorage.getItem('token')
        // 'Content-Type' : 'application/json',
    })
};
var DataService = /** @class */ (function () {
    function DataService(dragulaService, httpClient, router) {
        this.dragulaService = dragulaService;
        this.httpClient = httpClient;
        this.router = router;
        this.name = '';
    }
    DataService.prototype.getUsers = function () {
        return this.httpClient.get('http://localhost:8000/scrumy/v1/users', httpOptions);
    };
    DataService.prototype.registerNewUser = function (userdata) {
        return this.httpClient.post('http://localhost:8000/scrumy/v1/rest-auth/registration/', userdata);
    };
    DataService.prototype.loginUser = function (userdata) {
        return this.httpClient.post('http://localhost:8000/scrumy/v1/rest-auth/login/', userdata);
    };
    DataService.prototype.getStatus = function () {
        return this.httpClient.get('http://localhost:8000/status/?format=json');
    };
    DataService.prototype.getStories = function () {
        return this.httpClient.get('http://localhost:8000/story/?format=json');
    };
    DataService.prototype.changeStatus = function () {
        var _this = this;
        this.dragulaService.drop.subscribe(function (value) {
            return _this.httpClient.patch('http://127.0.0.1:8000/goalsjs/' + value[1].dataset.id + '/', {
                scrumy_status: 1
            }, httpOptions);
        });
    };
    DataService.prototype.loggedIn = function () {
        return !!localStorage.getItem('token');
    };
    DataService.prototype.logOutUser = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        location.reload();
    };
    DataService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    DataService.prototype.removeToken = function () {
        return localStorage.removeItem('token');
    };
    DataService.prototype.addNewStory = function (storydata) {
        return this.httpClient.post('http://localhost:8000/story/', storydata);
    };
    DataService.prototype.addNewGoal = function (goaldata) {
        return this.httpClient.post('http://localhost:8000/goals/', goaldata, httpOptions);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula__["DragulaService"], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/developer/developer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/developer/developer.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div  style=\"overflow-x:auto;\">\n<table>\n  <tr>\n    <th style=\" width: 10px;\">Username</th>\n    <th style=\"background-color: lightgrey\"></th>\n    <th>Weekly Target</th>\n    <th>Daily Target</th>\n    <th>Verified</th>\n    <th>Done</th>\n  </tr>\n\n  <tr *ngFor = \"let user of users\">\n    <td style=\" padding:20px;\"><p>{{ user.username }}</p></td>\n    <td style=\"width: 5px; background-color:  #f5f5f0\" >\n\n      <button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content, user?.id)\">+</button>      \n\n    </td>\n    <td>\n      <div  [dragula]='\"bag-weekly\"' id=\"1\" >\n        <div style=\"display: inline-flex;\"  *ngFor = \"let goal of user.scrumy_goals\" [attr.data-id]= \"goal.id\">\n          <div class=\"list_div\" *ngIf =\"goal.scrumy_status_id == 1\">\n            {{goal.id}}<br>{{goal.goals}}<br><div class=\"bottom\">Weekly</div>\n          </div>\n        </div>\n      </div> \n    </td>\n\n    <td style=\"background-color:  #f5f5f0\">\n      <div  [dragula]='\"bag-weekly\"' id=\"2\">\n        <div style=\"display: inline-flex;\"  *ngFor = \"let goal of user.scrumy_goals\" [attr.data-id]= \"goal.id\">\n          <div class=\"list_div\" *ngIf =\"goal.scrumy_status_id == 2\">\n            {{goal.id}}<br>{{goal.goals}}<br><div class=\"bottom\">Daily</div>\n          </div>\n        </div>\n      </div> \n    </td>\n\n    <td>\n      <div  id=\"3\">\n        <div style=\"display: inline-flex;\"  *ngFor = \"let goal of user.scrumy_goals\" [attr.data-id]= goal.id>\n          <div class=\"list_div\" *ngIf =\"goal.scrumy_status_id == 3\">\n           {{goal.id}}<br> {{goal.goals}}<div class=\"bottom\">Verified</div>\n          </div>\n        </div>\n      </div> \n    </td>\n\n    <td style=\"background-color:  #f5f5f0\">\n      <div  id=\"4\">\n        <div style=\"display: inline-flex;\"  *ngFor = \"let goal of user.scrumy_goals\" [attr.data-id]= \"goal.id\">\n          <div class=\"list_div\" *ngIf =\"goal.scrumy_status_id == 4\">\n            {{goal.id}}<br>{{goal.goals}}<br><div class=\"bottom\">Done</div>\n          </div>\n        </div> \n      </div>\n    </td>\n\n  </tr>\n\n\n</table>\n\n\n\n\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Profile update</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n\n    \n      <div style=\"background-color: lightgreen; padding: 35px; text-align: center; margin: 0\">\n      <h2 style=\"color: blue\">Add Goal</h2> \n      <p>{{inputStatusMsg}}</p>\n      \n      <textarea [(ngModel)]= \"goal\" style=\"text-align: center; width: 350px\"  placeholder=\"Enter goal here\"></textarea><br/> \n      <select [(ngModel)]= \"scrumy_status\"  style=\"text-align: center; width: 250px\">\n      <option *ngFor = \"let statu of status\"   [value]=\"statu.id\">\n          {{statu.name}}\n      </option>\n  </select>\n      <br/>\n\n      <button (click)=\"postGoal()\">Add Goal</button>\n      <h1>{{newUser}}</h1>\n      \n      </div>  \n\n    \n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Close</button>\n  </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/developer/developer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeveloperComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/ng2-dragula.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({
        Authorization: 'Token ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
    })
};
var DeveloperComponent = /** @class */ (function () {
    function DeveloperComponent(dragulaService, httpClient, data, modalService, router, route) {
        var _this = this;
        this.dragulaService = dragulaService;
        this.httpClient = httpClient;
        this.data = data;
        this.modalService = modalService;
        this.router = router;
        this.route = route;
        this.name = '';
        this.goal = '';
        this.status = '';
        this.inputStatusMsg = '';
        dragulaService.drag.subscribe(function (value) {
            console.log("drag: " + value[0]);
            _this.onDrop(value.slice(1));
        });
        this.route.params.subscribe(function (params) { return _this.scrumy_owner = params.id; });
        // dragulaService.setOptions('bag-weekly',{
        // 	move:true
        // })
    }
    DeveloperComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getUsers()
            .subscribe(function (data) { return _this.users = data; });
        this.data.getStatus()
            .subscribe(function (data) { return _this.status = data; });
        this.scrumy_status = 1;
        this.goal = '';
    };
    DeveloperComponent.prototype.onDrop = function (args) {
        var _this = this;
        var e = args[0], el = args[1];
        // do something
        this.dragulaService.drop.subscribe(function (value) {
            //Bag  
            console.log("bag: " + value[0]);
            // What is moved
            console.log("Content: " + value[1].innerHTML);
            // Destination
            console.log("Destination: " + value[2]['id']);
            // Origin
            console.log("origin: " + value[3]['id']);
            console.log(value[1].dataset.id);
            _this.httpClient.patch('http://127.0.0.1:8000/goals/' + value[1].dataset.id + '/', {
                scrumy_status_id: value[2]['id']
            }, httpOptions).subscribe(function (data) {
                console.log(data);
            });
            console.log("drag2: " + value[1].dataset.id);
            console.log("drag: " + value[2]['id']);
        });
    };
    DeveloperComponent.prototype.open = function (content, id) {
        var _this = this;
        console.log(id);
        this.scrumy_owner = id;
        this.modalService.open(content, { size: 'lg' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    DeveloperComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    DeveloperComponent.prototype.postGoal = function () {
        var _this = this;
        console.log(this.scrumy_status);
        console.log(this.scrumy_owner);
        // this.httpClient.post('http://localhost:8000/goals/', 
        // {
        //     goals: this.goal,
        //     scrumy_user: this.scrumy_user,
        //     scrumy_status: this.scrumy_status
        //   })
        this.data.addNewGoal({
            goals: this.goal,
            scrumy_user_id: this.scrumy_owner,
            scrumy_status_id: this.scrumy_status
        })
            .subscribe(function (data) {
            _this.router.navigate(['']);
            console.log(data);
            _this.goal = '';
            _this.scrumy_owner = null;
            _this.scrumy_status = 1;
            _this.inputStatusMsg = 'Goal added successfully';
            _this.usersVar = _this.data.getUsers()
                .subscribe(function (data) { return _this.users = data; });
        });
    };
    DeveloperComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-developer',
            template: __webpack_require__("../../../../../src/app/developer/developer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/developer/developer.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__["DragulaService"], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], DeveloperComponent);
    return DeveloperComponent;
}());



/***/ }),

/***/ "../../../../../src/app/goals/goals.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/goals/goals.component.html":
/***/ (function(module, exports) {

module.exports = "      <div style=\"background-color: lightgreen; padding: 35px; text-align: center; margin: 0\">\n      <h2 style=\"color: blue\">Add Goal</h2> \n      \n      <textarea [(ngModel)]= \"goal\" style=\"text-align: center; width: 350px\"  placeholder=\"Enter goal here\"></textarea><br/> \n      <select [(ngModel)]= \"scrumy_status\"  style=\"text-align: center; width: 250px\">\n\t\t\t<option *ngFor = \"let statu of status\"   [value]=\"statu.id\">\n\t\t\t\t\t{{statu.name}}\n\t\t\t</option>\n\t</select>\n      <br/>\n\n      <button (click)=\"postGoal()\">Add Goal</button>\n      \n      </div>  \n    \n"

/***/ }),

/***/ "../../../../../src/app/goals/goals.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoalsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({
        Authorization: 'Tokens ' + localStorage.getItem('token')
        // 'Content-Type' : 'application/json',
    })
};
var GoalsComponent = /** @class */ (function () {
    function GoalsComponent(httpClient, data, route, router) {
        var _this = this;
        this.httpClient = httpClient;
        this.data = data;
        this.route = route;
        this.router = router;
        this.status = '';
        this.route.params.subscribe(function (params) { return _this.scrumy_user = params.id; });
    }
    GoalsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getStatus()
            .subscribe(function (data) { return _this.status = data; });
        this.scrumy_status = 1;
        this.goal = '';
    };
    GoalsComponent.prototype.postGoal = function () {
        var _this = this;
        console.log(this.scrumy_status);
        // this.httpClient.post('http://localhost:8000/goals/', 
        // {
        //  		goals: this.goal,
        //  		scrumy_user: this.scrumy_user,
        //  		scrumy_status: this.scrumy_status
        //  	})
        this.data.addNewGoal({
            goals: this.goal,
            scrumy_user_id: this.scrumy_user,
            scrumy_status_id: this.scrumy_status
        })
            .subscribe(function (data) {
            _this.router.navigate(['']);
            console.log(data);
        });
    };
    GoalsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-goals',
            template: __webpack_require__("../../../../../src/app/goals/goals.component.html"),
            styles: [__webpack_require__("../../../../../src/app/goals/goals.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], GoalsComponent);
    return GoalsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div{\r\n\tborder-top: 15px;\r\n\tborder: 5px solid #000033;\r\n\tpadding: 50px;\r\n\ttext-align: center;\r\n\tmargin: 0\r\n}\r\n\r\na{\r\n\tbackground-color: #000033;\r\n\tcolor:  white;\r\n\tpadding: 10px;\r\n}\r\n\r\na:hover{\r\n\tbackground-color: white;\r\n\tcolor: #000033;\r\n\tpadding: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<p>Not Yet Registered?  <a href=\"/signup\" style=\"background-color: blue; color: \"><strong>REGISTER</strong></a></p>\n<h1 style=\"text-align: center;\">Login Account</h1>\n\n<input type=\"text\"  [(ngModel)]= \"input.username\" placeholder=\"Username\" style=\"text-align: center; width: 250px\"><br/>\n<input type=\"password\"  [(ngModel)]= \"input.password\" placeholder=\"password\"  style=\"text-align: center; width: 250px\"><br/>\n\n\n<button (click)=\"login()\">Log In</button> \n<!-- <button *ngIf=\"data.loggedIn()\" (click)=\"data.logOutUser()\">Log Out</button>  -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
var LoginComponent = /** @class */ (function () {
    function LoginComponent(data, httpClient, router) {
        this.data = data;
        this.httpClient = httpClient;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.input = {
            username: '',
            password: ''
        };
    };
    // login(){
    // 	this.data.loginUser(this.input).subscribe(
    // 		response => {
    // 			console.log(response.key)
    // 			localStorage.setItem('token', response.key)
    //   			this.router.navigate([''])	
    // 		},
    // 			error => console.log('error', error)
    // 		);
    // }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.httpClient.post('http://localhost:8000/scrumy/v1/rest-auth/login/', this.input)
            .subscribe(function (response) {
            localStorage.setItem('token', response['key']);
            localStorage.setItem('role', response['role']);
            // this.router.navigate([''])
            if (response['role'] == 'Developer') {
                _this.router.navigate(['/developer']);
            }
            else if (response['role'] == 'Admin') {
                _this.router.navigate(['/admin']);
            }
            else if (response['role'] == 'Quality Assurance') {
                _this.router.navigate(['/qa']);
            }
            else if (response['role'] == 'Owner') {
                _this.router.navigate(['/owner']);
            }
            else {
                _this.router.navigate(['/story']);
            }
        }, function (error) { return console.log('error', error); });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/main.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */]
            ],
            declarations: []
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "../../../../../src/app/modal-basic.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Profile update</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <label for=\"dateOfBirth\">Date of birth</label>\r\n        <div class=\"input-group\">\r\n          <input id=\"dateOfBirth\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" ngbDatepicker #dp=\"ngbDatepicker\">\r\n          <div class=\"input-group-append\">\r\n            <button class=\"btn btn-outline-secondary\" (click)=\"dp.toggle()\" type=\"button\">\r\n              <img src=\"img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"/>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Save</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content)\">Launch demo modal</button>\r\n\r\n<hr>\r\n\r\n<pre>{{closeResult}}</pre>"

/***/ }),

/***/ "../../../../../src/app/modal-basic.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbdModalBasic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdModalBasic = /** @class */ (function () {
    function NgbdModalBasic(modalService) {
        this.modalService = modalService;
    }
    NgbdModalBasic.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    NgbdModalBasic.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NgbdModalBasic = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngbd-modal-basic',
            template: __webpack_require__("../../../../../src/app/modal-basic.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], NgbdModalBasic);
    return NgbdModalBasic;
}());



/***/ }),

/***/ "../../../../../src/app/owner/owner.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/owner/owner.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div  style=\"overflow-x:auto;\">\n<table>\n  <tr>\n    <th style=\" width: 10px;\">Username</th>\n    <th style=\"background-color: lightgrey\"></th>\n    <th>Weekly Target</th>\n    <th>Daily Target</th>\n    <th>Verified</th>\n    <th>Done</th>\n  </tr>\n\n  <tr *ngFor = \"let user of users\">\n    <td style=\" padding:20px;\"><p>{{ user.username }}</p></td>\n    <td style=\"width: 5px; background-color:  #f5f5f0\" >\n      <button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content, user?.id)\">+</button>      \n\n    </td>\n    <td>\n      <div [dragula]='\"bag-weekly\"' id=\"1\" >\n        <div style=\"display: inline-flex;\"  *ngFor = \"let goal of user.scrumy_goals\" [attr.data-id]= \"goal.id\">\n          <div class=\"list_div\" *ngIf =\"goal.scrumy_status_id == 1\">\n            {{goal.id}}<br>{{goal.goals}}<br><div class=\"bottom\">Weekly</div>\n          </div>\n        </div>\n      </div> \n    </td>\n\n    <td style=\"background-color:  #f5f5f0\">\n      <div [dragula]='\"bag-weekly\"' id=\"2\">\n        <div style=\"display: inline-flex;\"  *ngFor = \"let goal of user.scrumy_goals\" [attr.data-id]= \"goal.id\">\n          <div class=\"list_div\" *ngIf =\"goal.scrumy_status_id == 2\">\n            {{goal.id}}<br>{{goal.goals}}<br><div class=\"bottom\">Daily</div>\n          </div>\n        </div>\n      </div> \n    </td>\n\n    <td>\n      <div [dragula]='\"bag-weekly\"' id=\"3\">\n        <div style=\"display: inline-flex;\"  *ngFor = \"let goal of user.scrumy_goals\" [attr.data-id]= goal.id>\n          <div class=\"list_div\" *ngIf =\"goal.scrumy_status_id == 3\">\n           {{goal.id}}<br> {{goal.goals}}<div class=\"bottom\">Verified</div>\n          </div>\n        </div>\n      </div> \n    </td>\n\n    <td style=\"background-color:  #f5f5f0\">\n      <div [dragula]='\"bag-weekly\"' id=\"4\">\n        <div style=\"display: inline-flex;\"  *ngFor = \"let goal of user.scrumy_goals\" [attr.data-id]= \"goal.id\">\n          <div class=\"list_div\" *ngIf =\"goal.scrumy_status_id == 4\">\n            {{goal.id}}<br>{{goal.goals}}<br><div class=\"bottom\">Done</div>\n          </div>\n        </div> \n      </div>\n    </td>\n\n  </tr>\n\n\n</table>\n\n\n\n\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Profile update</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n\n\n    \n      <div style=\"background-color: lightgreen; padding: 35px; text-align: center; margin: 0\">\n      <h2 style=\"color: blue\">Add Goal</h2> \n      <p>{{inputStatusMsg}}</p>\n      \n      <textarea [(ngModel)]= \"goal\" style=\"text-align: center; width: 350px\"  placeholder=\"Enter goal here\"></textarea><br/> \n      <select [(ngModel)]= \"scrumy_status\"  style=\"text-align: center; width: 250px\">\n      <option *ngFor = \"let statu of status\"   [value]=\"statu.id\">\n          {{statu.name}}\n      </option>\n  </select>\n      <br/>\n\n      <button (click)=\"postGoal()\">Add Goal</button>\n      <h1>{{newUser}}</h1>\n      \n      </div>  \n\n    \n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Close</button>\n  </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/owner/owner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OwnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/ng2-dragula.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({
        Authorization: 'Token ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
    })
};
var OwnerComponent = /** @class */ (function () {
    function OwnerComponent(dragulaService, httpClient, data, modalService, router, route) {
        var _this = this;
        this.dragulaService = dragulaService;
        this.httpClient = httpClient;
        this.data = data;
        this.modalService = modalService;
        this.router = router;
        this.route = route;
        this.name = '';
        this.goal = '';
        this.status = '';
        this.inputStatusMsg = '';
        dragulaService.drag.subscribe(function (value) {
            console.log("drag: " + value[0]);
            _this.onDrop(value.slice(1));
        });
        this.route.params.subscribe(function (params) { return _this.scrumy_owner = params.id; });
        // dragulaService.setOptions('bag-weekly',{
        //  move:true
        // })
    }
    OwnerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getUsers()
            .subscribe(function (data) { return _this.users = data; });
        this.data.getStatus()
            .subscribe(function (data) { return _this.status = data; });
        this.scrumy_status = 1;
        this.goal = '';
    };
    OwnerComponent.prototype.onDrop = function (args) {
        var _this = this;
        var e = args[0], el = args[1];
        // do something
        this.dragulaService.drop.subscribe(function (value) {
            //Bag  
            console.log("bag: " + value[0]);
            // What is moved
            console.log("Content: " + value[1].innerHTML);
            // Destination
            console.log("Destination: " + value[2]['id']);
            // Origin
            console.log("origin: " + value[3]['id']);
            console.log(value[1].dataset.id);
            _this.httpClient.patch('http://127.0.0.1:8000/goals/' + value[1].dataset.id + '/', {
                scrumy_status_id: value[2]['id']
            }, httpOptions).subscribe(function (data) {
                console.log(data);
            });
            console.log("drag2: " + value[1].dataset.id);
            console.log("drag: " + value[2]['id']);
        });
    };
    OwnerComponent.prototype.open = function (content, id) {
        var _this = this;
        console.log(id);
        this.scrumy_owner = id;
        this.modalService.open(content, { size: 'lg' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    OwnerComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    OwnerComponent.prototype.postGoal = function () {
        var _this = this;
        console.log(this.scrumy_status);
        console.log(this.scrumy_owner);
        // this.httpClient.post('http://localhost:8000/goals/', 
        // {
        //     goals: this.goal,
        //     scrumy_user: this.scrumy_user,
        //     scrumy_status: this.scrumy_status
        //   })
        this.data.addNewGoal({
            goals: this.goal,
            scrumy_user_id: this.scrumy_owner,
            scrumy_status_id: this.scrumy_status
        })
            .subscribe(function (data) {
            _this.router.navigate(['']);
            console.log(data);
            _this.goal = '';
            _this.scrumy_owner = null;
            _this.scrumy_status = 1;
            _this.inputStatusMsg = 'Goal added successfully';
            _this.usersVar = _this.data.getUsers()
                .subscribe(function (data) { return _this.users = data; });
        });
    };
    OwnerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-owner',
            template: __webpack_require__("../../../../../src/app/owner/owner.component.html"),
            styles: [__webpack_require__("../../../../../src/app/owner/owner.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__["DragulaService"], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], OwnerComponent);
    return OwnerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/qa/qa.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/qa/qa.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div  style=\"overflow-x:auto;\">\n<table>\n  <tr>\n    <th style=\" width: 10px;\">Username</th>\n    <th style=\"background-color: lightgrey\"></th>\n    <th>Weekly Target</th>\n    <th>Daily Target</th>\n    <th>Verified</th>\n    <th>Done</th>\n  </tr>\n\n  <tr *ngFor = \"let user of users\">\n    <td style=\" padding:20px;\"><p>{{ user.username }}</p></td>\n    <td style=\"width: 5px; background-color:  #f5f5f0\" >\n<!--       <a class=\"hover-cursor\" routerLink=\"/goals/{{ user.id }}\" style=\"font-size: 25px\" href=\"#myModal\">\n         +\n      </a> -->\n      <button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content, user?.id)\">+</button>      \n\n    </td>\n    <td>\n      <div id=\"1\" >\n        <div style=\"display: inline-flex;\"  *ngFor = \"let goal of user.scrumy_goals\" [attr.data-id]= \"goal.id\">\n          <div class=\"list_div\" *ngIf =\"goal.scrumy_status_id == 1\">\n            {{goal.id}}<br>{{goal.goals}}<br><div class=\"bottom\">Weekly</div>\n          </div>\n        </div>\n      </div> \n    </td>\n\n    <td style=\"background-color:  #f5f5f0\">\n      <div id=\"2\">\n        <div style=\"display: inline-flex;\"  *ngFor = \"let goal of user.scrumy_goals\" [attr.data-id]= \"goal.id\">\n          <div class=\"list_div\" *ngIf =\"goal.scrumy_status_id == 2\">\n            {{goal.id}}<br>{{goal.goals}}<br><div class=\"bottom\">Daily</div>\n          </div>\n        </div>\n      </div> \n    </td>\n\n    <td>\n      <div  [dragula]='\"bag-weekly\"' id=\"3\">\n        <div style=\"display: inline-flex;\"  *ngFor = \"let goal of user.scrumy_goals\" [attr.data-id]= goal.id>\n          <div class=\"list_div\" *ngIf =\"goal.scrumy_status_id == 3\">\n           {{goal.id}}<br> {{goal.goals}}<div class=\"bottom\">Verified</div>\n          </div>\n        </div>\n      </div> \n    </td>\n\n    <td style=\"background-color:  #f5f5f0\">\n      <div  [dragula]='\"bag-weekly\"' id=\"4\">\n        <div style=\"display: inline-flex;\"  *ngFor = \"let goal of user.scrumy_goals\" [attr.data-id]= \"goal.id\">\n          <div class=\"list_div\" *ngIf =\"goal.scrumy_status_id == 4\">\n            {{goal.id}}<br>{{goal.goals}}<br><div class=\"bottom\">Done</div>\n          </div>\n        </div> \n      </div>\n    </td>\n\n  </tr>\n\n\n</table>\n\n\n\n\n\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Profile update</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n\n    \n      <div style=\"background-color: lightgreen; padding: 35px; text-align: center; margin: 0\">\n      <h2 style=\"color: blue\">Add Goal</h2> \n      <p>{{inputStatusMsg}}</p>\n      \n      <textarea [(ngModel)]= \"goal\" style=\"text-align: center; width: 350px\"  placeholder=\"Enter goal here\"></textarea><br/> \n      <select [(ngModel)]= \"scrumy_status\"  style=\"text-align: center; width: 250px\">\n      <option *ngFor = \"let statu of status\"   [value]=\"statu.id\">\n          {{statu.name}}\n      </option>\n  </select>\n      <br/>\n\n      <button (click)=\"postGoal()\">Add Goal</button>\n      <h1>{{newUser}}</h1>\n      \n      </div>  \n\n\n    \n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Close</button>\n  </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/qa/qa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/ng2-dragula.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({
        Authorization: 'Token ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
    })
};
var QaComponent = /** @class */ (function () {
    function QaComponent(dragulaService, httpClient, data, modalService, router, route) {
        var _this = this;
        this.dragulaService = dragulaService;
        this.httpClient = httpClient;
        this.data = data;
        this.modalService = modalService;
        this.router = router;
        this.route = route;
        this.name = '';
        this.goal = '';
        this.status = '';
        this.inputStatusMsg = '';
        dragulaService.drag.subscribe(function (value) {
            console.log("drag: " + value[0]);
            _this.onDrop(value.slice(1));
        });
        this.route.params.subscribe(function (params) { return _this.scrumy_owner = params.id; });
        // dragulaService.setOptions('bag-weekly',{
        //  move:true
        // })
    }
    QaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getUsers()
            .subscribe(function (data) { return _this.users = data; });
        this.data.getStatus()
            .subscribe(function (data) { return _this.status = data; });
        this.scrumy_status = 1;
        this.goal = '';
    };
    QaComponent.prototype.onDrop = function (args) {
        var _this = this;
        var e = args[0], el = args[1];
        // do something
        this.dragulaService.drop.subscribe(function (value) {
            //Bag  
            console.log("bag: " + value[0]);
            // What is moved
            console.log("Content: " + value[1].innerHTML);
            // Destination
            console.log("Destination: " + value[2]['id']);
            // Origin
            console.log("origin: " + value[3]['id']);
            console.log(value[1].dataset.id);
            _this.httpClient.patch('http://127.0.0.1:8000/goals/' + value[1].dataset.id + '/', {
                scrumy_status_id: value[2]['id']
            }, httpOptions).subscribe(function (data) {
                console.log(data);
            });
            console.log("drag2: " + value[1].dataset.id);
            console.log("drag: " + value[2]['id']);
        });
    };
    QaComponent.prototype.open = function (content, id) {
        var _this = this;
        console.log(id);
        this.scrumy_owner = id;
        this.modalService.open(content, { size: 'lg' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    QaComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    QaComponent.prototype.postGoal = function () {
        var _this = this;
        console.log(this.scrumy_status);
        console.log(this.scrumy_owner);
        // this.httpClient.post('http://localhost:8000/goals/', 
        // {
        //     goals: this.goal,
        //     scrumy_user: this.scrumy_user,
        //     scrumy_status: this.scrumy_status
        //   })
        this.data.addNewGoal({
            goals: this.goal,
            scrumy_user_id: this.scrumy_owner,
            scrumy_status_id: this.scrumy_status
        })
            .subscribe(function (data) {
            _this.router.navigate(['']);
            console.log(data);
            _this.goal = '';
            _this.scrumy_owner = null;
            _this.scrumy_status = 1;
            _this.inputStatusMsg = 'Goal added successfully';
            _this.usersVar = _this.data.getUsers()
                .subscribe(function (data) { return _this.users = data; });
        });
    };
    QaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-qa',
            template: __webpack_require__("../../../../../src/app/qa/qa.component.html"),
            styles: [__webpack_require__("../../../../../src/app/qa/qa.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__["DragulaService"], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], QaComponent);
    return QaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sign-up/sign-up.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div{\r\n\tborder-top: 15px;\r\n\tborder: 5px solid #000033;\r\n\tpadding: 50px;\r\n\ttext-align: center;\r\n\tmargin: 0\r\n}\r\n\r\n\r\na{\r\n\tbackground-color: #000033;\r\n\tcolor:  white;\r\n\tpadding: 10px;\r\n}\r\n\r\n\r\na:hover{\r\n\tbackground-color: white;\r\n\tcolor: #000033;\r\n\tpadding: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\t<p>Already Registered?  <a href=\"/login\" style=\"background-color: blue; color: \"><strong>LOGIN</strong></a></p>\n<h1 style=\"text-align: center;\">New Users</h1>\n\n<input type=\"text\"  [(ngModel)]= \"register.username\" placeholder=\"User Name\" style=\"text-align: center; width: 250px\"><br/>\n<input type=\"text\"  [(ngModel)]= \"register.email\" placeholder=\"Email\" style=\"text-align: center; width: 250px\"><br/>\n<input type=\"password\"  [(ngModel)]= \"register.password1\" placeholder=\"Password\"  style=\"text-align: center; width: 250px\"><br/>\n<input type=\"password\"  [(ngModel)]= \"register.password2\" placeholder=\"Verify Password\"  style=\"text-align: center; width: 250px\"><br/>\n\n\n<button (click)=\"registerUser()\">Register</button> \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/sign-up/sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(data, httpClient, router) {
        this.data = data;
        this.httpClient = httpClient;
        this.router = router;
        this.userName = '';
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.register = {
            username: '',
            email: '',
            password1: '',
            password2: '',
        };
    };
    // registerUser(){
    // 	this.data.registerNewUser(this.register).subscribe(
    // 		response => {
    // 			localStorage.setItem('token', response.key)
    //   			this.router.navigate([''])				
    // 		},
    // 			error => console.log('error', error)
    // 		);
    // }
    SignUpComponent.prototype.registerUser = function () {
        var _this = this;
        this.httpClient.post('http://localhost:8000/scrumy/v1/rest-auth/registration/', this.register)
            .subscribe(function (response) {
            localStorage.setItem('token', response['key']);
            alert('Registration successful!!!');
            _this.router.navigate(['login']);
        }, function (error) { return console.log('error', error); });
    };
    SignUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__("../../../../../src/app/sign-up/sign-up.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/story/story.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/story/story.component.html":
/***/ (function(module, exports) {

module.exports = "    <div id=\"myModal\" >\n        <router-outlet></router-outlet>\n      </div>\n<div  style=\"overflow-x:auto;\">\n<table>\n  <tr>\n    <th style=\" width: 10px;\">Username</th>\n    <th style=\"background-color: lightgrey\"></th>\n    <th>Weekly Target</th>\n    <th>Daily Target</th>\n    <th>Verified</th>\n    <th>Done</th>\n  </tr>\n\n  <tr *ngFor = \"let user of users\">\n    <td style=\" padding:20px;\"><p>{{ user.username }}</p></td>\n    <td style=\"width: 5px; background-color:  #f5f5f0\" >\n\n<button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content, user?.id)\">+</button>      \n\n    </td>\n    <td>\n      <div id=\"1\" >\n        <div style=\"display: inline-flex;\"  *ngFor = \"let goal of user.scrumy_goals\" [attr.data-id]= \"goal.id\">\n          <div class=\"list_div\" *ngIf =\"goal.scrumy_status_id == 1\">\n            {{goal.id}}<br>{{goal.goals}}<br><div class=\"bottom\">Weekly</div>\n          </div>\n        </div>\n      </div> \n    </td>\n\n    <td style=\"background-color:  #f5f5f0\">\n      <div id=\"2\">\n        <div style=\"display: inline-flex;\"  *ngFor = \"let goal of user.scrumy_goals\" [attr.data-id]= \"goal.id\">\n          <div class=\"list_div\" *ngIf =\"goal.scrumy_status_id == 2\">\n            {{goal.id}}<br>{{goal.goals}}<br><div class=\"bottom\">Daily</div>\n          </div>\n        </div>\n      </div> \n    </td>\n\n    <td>\n      <div id=\"3\">\n        <div style=\"display: inline-flex;\"  *ngFor = \"let goal of user.scrumy_goals\" [attr.data-id]= goal.id>\n          <div class=\"list_div\" *ngIf =\"goal.scrumy_status_id == 3\">\n           {{goal.id}}<br> {{goal.goals}}<div class=\"bottom\">Verified</div>\n          </div>\n        </div>\n      </div> \n    </td>\n\n    <td style=\"background-color:  #f5f5f0\">\n      <div id=\"4\">\n        <div style=\"display: inline-flex;\"  *ngFor = \"let goal of user.scrumy_goals\" [attr.data-id]= \"goal.id\">\n          <div class=\"list_div\" *ngIf =\"goal.scrumy_status_id == 4\">\n            {{goal.id}}<br>{{goal.goals}}<br><div class=\"bottom\">Done</div>\n          </div>\n        </div> \n      </div>\n    </td>\n\n  </tr>\n\n\n\n</table>\n\n\n\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\" >\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Profile update</h4>\n    <button type=\"button\"  #btnClose class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n\n\n      <div style=\"background-color: lightgreen; padding: 35px; text-align: center; margin: 0\">\n      <h2 style=\"color: blue\">Add Goal</h2> \n      <p>{{inputStatusMsg}}</p>\n      \n      <textarea [(ngModel)]= \"goal\" style=\"text-align: center; width: 350px\"  placeholder=\"Enter goal here\"></textarea><br/> \n      <select [(ngModel)]= \"scrumy_status\"  style=\"text-align: center; width: 250px\">\n      <option *ngFor = \"let statu of status\"   [value]=\"statu.id\">\n          {{statu.name}}\n      </option>\n  </select>\n      <br/>\n\n      <button (click)=\"postGoal()\">Add Goal</button>\n      <h1>{{newUser}}</h1>\n      \n      </div>   \n\n\n\n\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Close</button>\n  </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/story/story.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/ng2-dragula.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({
        Authorization: 'Token ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
    })
};
var StoryComponent = /** @class */ (function () {
    function StoryComponent(modalService, dragulaService, httpClient, data, router, route) {
        var _this = this;
        this.modalService = modalService;
        this.dragulaService = dragulaService;
        this.httpClient = httpClient;
        this.data = data;
        this.router = router;
        this.route = route;
        this.name = '';
        this.goal = '';
        this.status = '';
        this.inputStatusMsg = '';
        dragulaService.drag.subscribe(function (value) {
            console.log("drag: " + value[0]);
            _this.onDrop(value.slice(1));
        });
        this.route.params.subscribe(function (params) { return _this.scrumy_owner = params.id; });
        // dragulaService.setOptions('bag-weekly',{
        // 	move:true
        // })
    }
    StoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getUsers()
            .subscribe(function (data) { return _this.users = data; });
        this.data.getStatus()
            .subscribe(function (data) { return _this.status = data; });
        this.scrumy_status = 1;
        this.goal = '';
    };
    StoryComponent.prototype.onDrop = function (args) {
        var _this = this;
        var e = args[0], el = args[1];
        // do something
        this.dragulaService.drop.subscribe(function (value) {
            //Bag  
            console.log("bag: " + value[0]);
            // What is moved
            console.log("Content: " + value[1].innerHTML);
            // Destination
            console.log("Destination: " + value[2]['id']);
            // Origin
            console.log("origin: " + value[3]['id']);
            console.log(value[1].dataset.id);
            _this.httpClient.patch('http://127.0.0.1:8000/goals/' + value[1].dataset.id + '/', {
                scrumy_status_id: value[2]['id']
            }, httpOptions).subscribe(function (data) {
                console.log(data);
            });
            console.log("drag2: " + value[1].dataset.id);
            console.log("drag: " + value[2]['id']);
        });
    };
    StoryComponent.prototype.open = function (content, id) {
        var _this = this;
        console.log(id);
        this.scrumy_owner = id;
        this.modalService.open(content, { size: 'lg' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    StoryComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    StoryComponent.prototype.postGoal = function () {
        var _this = this;
        console.log(this.scrumy_status);
        console.log(this.scrumy_owner);
        // this.httpClient.post('http://localhost:8000/goals/', 
        // {
        //     goals: this.goal,
        //     scrumy_user: this.scrumy_user,
        //     scrumy_status: this.scrumy_status
        //   })
        this.data.addNewGoal({
            goals: this.goal,
            scrumy_user_id: this.scrumy_owner,
            scrumy_status_id: this.scrumy_status
        })
            .subscribe(function (data) {
            _this.router.navigate(['']);
            console.log(data);
            _this.goal = '';
            _this.scrumy_owner = null;
            _this.scrumy_status = 1;
            _this.inputStatusMsg = 'Goal added successfully';
            _this.usersVar = _this.data.getUsers()
                .subscribe(function (data) { return _this.users = data; });
        });
    };
    StoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-story',
            template: __webpack_require__("../../../../../src/app/story/story.component.html"),
            styles: [__webpack_require__("../../../../../src/app/story/story.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */], __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__["DragulaService"], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]])
    ], StoryComponent);
    return StoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/token-interceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
// import { Injectable, Injector } from '@angular/core';
// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent,} from '@angular/common/http';
// import { DataService } from './data.service';
// import { Observable } from 'rxjs/Observable';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// @Injectable()
// export class TokenInterceptorService implements HttpInterceptor {
//   constructor(private data: DataService) { }
//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>	{
//   	let tokenizedReq = request.clone({
//   		setHeaders: {
//   			Authorization: 'token 520da4fa70378c0418efe02b61293e88e08eb2de'
//   		}
//   	});
//   	return next.handle(tokenizedReq);
//   }
// }


var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(injector, data) {
        this.injector = injector;
        this.data = data;
    }
    TokenInterceptorService.prototype.intercept = function (req, next) {
        // let dataService = this.injector.get(DataService)
        if (req.url === '' || req.url === '/story' || req.url === 'goals/:id' || req.url === '/addgoal/:id' || req.url === '/addstory') {
            // if (localStorage.getItem('token') == this.tokenString){
            var tokenizedReq = req.clone({
                setHeaders: {}
            });
            return next.handle(tokenizedReq);
        }
        else {
            var tokenizedReq = req.clone({});
            return next.handle(tokenizedReq);
        }
    };
    TokenInterceptorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "../../../../../src/app/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div style=\"background-color: lightgreen; padding: 35px; text-align: center; margin: 0\">\n<h1 style=\"text-align: center;\">New Users</h1>\n\n<input type=\"text\"  [(ngModel)]= \"register.username\" placeholder=\"User Name\" style=\"text-align: center; width: 250px\"><br/>\n<input type=\"text\"  [(ngModel)]= \"register.email\" placeholder=\"Email\" style=\"text-align: center; width: 250px\"><br/>\n<input type=\"password\"  [(ngModel)]= \"register.password1\" placeholder=\"password1\"  style=\"text-align: center; width: 250px\"><br/>\n<input type=\"password\"  [(ngModel)]= \"register.password2\" placeholder=\"password2\"  style=\"text-align: center; width: 250px\"><br/>\n\n\n<button (click)=\"postUser()\">Post User</button> \n<button (click)=\"registerUser()\">Register</button> \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersComponent = /** @class */ (function () {
    function UsersComponent(data, httpClient, router) {
        this.data = data;
        this.httpClient = httpClient;
        this.router = router;
        this.userName = '';
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.register = {
            username: '',
            email: '',
            password: ''
        };
    };
    UsersComponent.prototype.postUser = function () {
        var _this = this;
        console.log(this.userName);
        this.httpClient.post('http://127.0.0.1:8000/usersjs/', {
            username: this.userName
        })
            .subscribe(function (data) {
            console.log(data);
            _this.data.getUsers();
        });
    };
    UsersComponent.prototype.registerUser = function () {
        var _this = this;
        this.data.registerNewUser(this.register).subscribe(function (response) {
            _this.router.navigate(['']);
        }, function (error) { return console.log('error', error); });
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-users',
            template: __webpack_require__("../../../../../src/app/users/users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/users/users.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map