import angular from 'angular';

import appModule from 'app/app';

// Load custom application modules; currently it is only the 'users' module
import users from 'app/users/Users';

export default angular.module('starter-app', [appModule.name, users.name]);
