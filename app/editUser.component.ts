import {Component} from 'angular2/core';
import {GetUsersService} from './getusersHere.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {EmailValidator} from './email.validator';
import {FormBuilder, ControlGroup, Validators, Control} from 'angular2/common';
import {RouteParams, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {User} from './user';

@Component({
	templateUrl: '/app/editUser.component.html',
	providers: [HTTP_PROVIDERS, GetUsersService],
	directives: [ROUTER_DIRECTIVES]
})

export class EditUserComponent{
	editUser;
	user = new User();
	constructor(
		private _getUsers: GetUsersService, 
		private _routeParams: RouteParams,
		private _router: Router,
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
		var id = this._routeParams.get('id');

			this._getUsers.getUserById(id)
						.subscribe((x) => {
							this.user = x;
						}, (res) => {
							if(res.status == 404){
								this._router.navigate(['NotFound']);
							}
						});
		
		
							
							// if(!(id.match(/[0-10]/))){
							// 	alert('');
							// 	this._router.navigate(['NotFoundComponent'])
							// }	
						

	}
	/*onSubmit(){
		this._getUsers.updateUser()
						.subscribe((x) => {
							console.log(x);
							
						});
	}*/
}