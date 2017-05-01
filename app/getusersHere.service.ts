import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
//import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class GetUsersService{
	private url = 'https://jsonplaceholder.typicode.com/users';
	constructor(private _http: Http){

	}

	getUsers(){
		return this._http.get(this.url)
							.map((res) => res.json());
	}

	postUser(newUser){
		return this._http.post(this.url, JSON.stringify(newUser))
							.map((res) => res.json())
	}
}