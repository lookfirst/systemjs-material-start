import angular from 'angular';

// Load the custom app ES6 modules
import UsersController from 'app/users/UsersController';
import UsersService from 'app/users/UsersDataservice';

import browserUsersTpl from 'app/users/browserUsers.tpl';
import contactSheetTpl from 'app/users/contactSheet.tpl';

// Define the Angular 'users' module

export default angular
	.module('users', [browserUsersTpl.name, contactSheetTpl.name])
	.service('usersService', UsersService)
	.config(($stateProvider) => {

		$stateProvider
			.state('users', {
				url: '/',
				templateUrl: browserUsersTpl.name,
				controller: UsersController,
				controllerAs: 'ul'
			});
	});
