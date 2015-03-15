import angular from 'angular';

import 'angular-material';
import 'angular-aria';
import 'angular-animate';

const URL_AVATAR_ICONS = 'app/assets/svg/avatars.svg';
const URL_ICON_MENU = 'app/assets/svg/menu.svg';
const URL_ICON_SHARE = 'app/assets/svg/share.svg';

// This module must be declared in app.js, but we try to keep that file pretty clean
// so I've abstracted the meat into this file instead. It is important to also declare
// the theme here too or material doesn't pick it up if it is done later in the loading
// process.
export default angular.module('materialModule', ['ngMaterial'])
	.config(($mdIconProvider, $mdThemingProvider) => {
		// Register `dashboard` iconset for $mdIcon service lookups
		// Register icon datasources for future lookups
		$mdIconProvider
			.defaultIconSet(URL_AVATAR_ICONS, 128)
			.icon('menu', URL_ICON_MENU, 24)
			.icon('share', URL_ICON_SHARE, 24);

		$mdThemingProvider
			.theme('default')
			.primaryPalette('brown');
	});

