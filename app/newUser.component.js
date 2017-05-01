System.register(['angular2/core', 'angular2/common', './email.validator', 'angular2/router', 'angular2/http', './getusersHere.service'], function(exports_1, context_1) {
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
    var core_1, common_1, email_validator_1, router_1, http_1, getusersHere_service_1;
    var NewUserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (email_validator_1_1) {
                email_validator_1 = email_validator_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (getusersHere_service_1_1) {
                getusersHere_service_1 = getusersHere_service_1_1;
            }],
        execute: function() {
            NewUserComponent = (function () {
                function NewUserComponent(fb, _http, _getUsers, _router) {
                    this.fb = fb;
                    this._http = _http;
                    this._getUsers = _getUsers;
                    this._router = _router;
                    this.newUser = fb.group({
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
                NewUserComponent.prototype.routerCanDeactivate = function (next, props) {
                    return confirm('Are you sure?');
                };
                NewUserComponent.prototype.onSubmit = function () {
                    // var userDetails = this.newUser.controls;
                    // console.log(this.newUser);
                    // var newUserObj = {
                    // 	name: userDetails.name,
                    // 	email: userDetails.email,
                    // 	phone: userDetails.phone,
                    // 	city: userDetails.Address.city,
                    // 	street: userDetails.Address.street,
                    // 	suite: userDetails.Address.suite,
                    // 	zipcode: userDetails.Address.zipcode,
                    // }
                    var _this = this;
                    this._getUsers.postUser(this.newUser.value)
                        .subscribe(function (x) {
                        console.log(x);
                        _this._router.navigate(['UsersComponent']);
                    });
                };
                NewUserComponent = __decorate([
                    core_1.Component({
                        selector: 'newUser',
                        templateUrl: '/app/newUser.component.html',
                        styles: ["\n\t\tform{\n\t\t\twidth: 30%;\n\t\t\tmargin-left: 5%; \n\t\t}\n\t\t.alert-danger{\n\t\t\tbackground-color: red;\n\t\t\tcolor: white;\n\t\t}\n\t"],
                        providers: [http_1.HTTP_PROVIDERS, getusersHere_service_1.GetUsersService],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, http_1.Http, getusersHere_service_1.GetUsersService, router_1.Router])
                ], NewUserComponent);
                return NewUserComponent;
            }());
            exports_1("NewUserComponent", NewUserComponent);
        }
    }
});
//# sourceMappingURL=newUser.component.js.map