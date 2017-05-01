import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {UsersComponent} from './users.component';
import {PostsComponent} from './posts.component';


@RouteConfig([
		
		{path: '/users', name: 'Users', component: UsersComponent, useAsDefault: true},
		{path: '/posts', name: 'Posts', component: PostsComponent},
		{path: '*other', name: 'Other', redirectTo: ['Users']}
	])
@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
}