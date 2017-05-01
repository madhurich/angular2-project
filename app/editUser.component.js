System.register(['angular2/core', './getusersHere.service', 'angular2/http', './email.validator', 'angular2/common', 'angular2/router', './user'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, getusersHere_service_1, http_1, email_validator_1, common_1, router_1, user_1;
    var EditUserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (getusersHere_service_1_1) {
                getusersHere_service_1 = getusersHere_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (email_validator_1_1) {
                email_validator_1 = email_validator_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            EditUserComponent = (function () {
                function EditUserComponent(_getUsers, _routeParams, fb, _router) {
                    this._getUsers = _getUsers;
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this.user = new user_1.User();
                    this.editUser = fb.group({
                        name: ['', common_1.Validators.required],
                        email: ['', common_1.Validators.compose([common_1.Validators.required, email_validator_1.EmailValidator.checkEmail])],
                        phone: [],
                        Address: fb.group({
                            street: [],
                            suite: [],
                            city: [],
                            zipcode: []
                        })
                    });
                }
                EditUserComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._getUsers.getUsers()
                        .subscribe(function (x) {
                        var id = _this._routeParams.get('id');
                        console.log(x);
                        _this.user = x[id];
                        console.log(typeof id);
                        // if(!(id.match(/[0-10]/))){
                        // 	alert('');
                        // 	this._router.navigate(['NotFoundComponent'])
                        // }	
                    });
                };
                EditUserComponent = __decorate([
                    core_1.Component({
                        templateUrl: '/app/editUser.component.html',
                        providers: [http_1.HTTP_PROVIDERS, getusersHere_service_1.GetUsersService],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [getusersHere_service_1.GetUsersService, router_1.RouteParams, common_1.FormBuilder, router_1.Router])
                ], EditUserComponent);
                return EditUserComponent;
            }());
            exports_1("EditUserComponent", EditUserComponent);
        }
    }
});
//# sourceMappingURL=editUser.component.js.map