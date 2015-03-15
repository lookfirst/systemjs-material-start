import angular from 'angular';

import appModule from 'app/app';

// Load the Angular Material CSS associated with ngMaterial
// then load the main.css to provide overrides, etc.
import 'angular-material/angular-material.css!';
import 'app/app.css!';

// Load custom application modules; currently it is only the 'users' module
import users from 'app/users/Users';

export default angular.module('starter-app', [appModule.name, users.name]);
