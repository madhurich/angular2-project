import {Component, OnInit} from 'angular2/core';
import {GetUsersService} from './getusersHere.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
	selector: 'users',
	templateUrl: '/app/users.component.html',
	providers: [GetUsersService, HTTP_PROVIDERS],
	directives: [ROUTER_DIRECTIVES]
})

export class UsersComponent implements OnInit{
	users;
	constructor(private _getUsersService: GetUsersService){
		


	}

	ngOnInit(){
		this._getUsersService.getUsers()
				.subscribe((x) => {
					console.log(x);
					this.users = x;
				});
	}
	
}