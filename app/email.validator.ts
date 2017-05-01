import {Control} from 'angular2/common';

export class EmailValidator{
	static checkEmail(control: Control){
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;
		if(!re.test(control.value)){
			return {checkEmail: true};
		}else{
			return null;
		}
	}
}