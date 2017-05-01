import {Component} from 'angular2/core';
import {GetUsersService} from './getusersHere.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {EmailValidator} from './email.validator';
import {FormBuilder, ControlGroup, Validators, Control} from 'angular2/common';
import {RouteParams} from 'angular2/router';

@Component({
	templateUrl: '/app/editUser.component.html',
	providers: [HTTP_PROVIDERS, GetUsersService]
})

export class EditUserComponent{
	editUser;
	user = {
		address: {}
	};
	constructor(
		private _getUsers: GetUsersService, 
		private _routeParams: RouteParams,
		fb: FormBuilder){
			this.editUser = fb.group({
			name: ['', Validators.required],
			email: ['', Validators.compose([Validators.required, EmailValidator.checkEmail])],
			phone: [],
			Address: fb.group({
				street: [],
				suite: [],
				city: [],
				zipcode: []
			})
		})

	}

	ngOnInit(){
		this._getUsers.getUsers()
						.subscribe((x) => {
							console.log(x);
							this.user = x[this._routeParams.get('id')];
						});

	}
}