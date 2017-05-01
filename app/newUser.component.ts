import {Component} from 'angular2/core';
import {FormBuilder, ControlGroup, Validators, Control} from 'angular2/common';
import {EmailValidator} from './email.validator';
import {CanDeactivate, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {GetUsersService} from './getusersHere.service';


@Component({
	selector: 'newUser',
	templateUrl: '/app/newUser.component.html',
	styles: [`
		form{
			width: 30%;
			margin-left: 5%; 
		}
		.alert-danger{
			background-color: red;
			color: white;
		}
	`],
	providers: [HTTP_PROVIDERS, GetUsersService],
	directives: [ROUTER_DIRECTIVES]
})

export class NewUserComponent implements CanDeactivate{

	newUser;
	constructor(private fb: FormBuilder, 
				private _http: Http, 
				private _getUsers: GetUsersService,
				private _router: Router){
		this.newUser = fb.group({
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

	routerCanDeactivate(next, props){
		return confirm('Are you sure?');
	}

	onSubmit(){
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

		this._getUsers.postUser(this.newUser.value)
						.subscribe((x) => {
							console.log(x)
								this._router.navigate(['UsersComponent']);
							});

						
		

	}

}