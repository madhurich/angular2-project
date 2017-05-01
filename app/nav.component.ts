import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
	selector: 'customnav',
	template: `
		<nav class="navbar navbar-default">
		  <div class="container-fluid">
		    <div class="navbar-header">
		      <a class="navbar-brand" href="#">ngRoute</a>
		    </div>
		    <ul class="nav navbar-nav">
		      <li><a [routerLink]="['Users']">Users</a></li>
		      <li><a [routerLink]="['Posts']">Posts</a></li>
		    </ul>
		  </div>
		</nav> 
		

	`,
	styles: [`
		li > a.router-link-active{
			background-color: black;
		}
	`],
	directives: [ROUTER_DIRECTIVES]
})

export class NavComponent{

}