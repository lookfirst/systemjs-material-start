import angular from 'angular';

import materialModule from 'app/materialModule';

import router from 'oclazyload-systemjs-router';
import futureRoutes from 'app/routes.json!';

var appModule = angular.module('app', [materialModule.name]);

appModule.config(router(appModule, futureRoutes));

appModule.config(function($locationProvider, $httpProvider, $urlRouterProvider) {
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
	$httpProvider.useApplyAsync(true);
	return $urlRouterProvider.otherwise('/');
});

angular.element(document).ready(function() {
	return angular.bootstrap(document.body, [appModule.name], {
		strictDi: true
	});
});

export default appModule;
