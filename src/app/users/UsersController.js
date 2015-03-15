import contactSheetTpl from 'app/users/contactSheet.tpl';

/**
 * Main App Controller for the Angular Material Starter App
 * @param $scope
 * @param $mdSidenav
 * @param avatarsService
 * @constructor
 */
function AppController(usersService, $mdSidenav, $mdBottomSheet, $scope, $log) {
	var self = this;

	self.selected = null;
	self.users = [];

	// Load all registered users

	usersService
		.loadAll()
		.then(function(users) {
			self.users = [].concat(users);
			self.selected = users[0];
		});

	// *********************************
	// Internal methods
	// *********************************

	/**
	 * Hide or Show the 'left' sideNav area
	 */
	function toggleUsersList() {
		$mdSidenav('left').toggle();
	}

	/**
	 * Select the current avatars
	 * @param menuId
	 */
	function selectUser(user) {
		self.selected = angular.isNumber(user) ? $scope.users[user] : user;
		self.toggleList();
	}

	/**
	 * Show the bottom sheet
	 */
	function share($event) {
		var user = self.selected;

		/**
		 * Bottom Sheet controller for the Avatar Actions
		 */
		function UserSheetController($mdBottomSheet) {
			this.user = user;
			this.items = [
				{name: 'Phone', icon: 'phone', icon_url: 'app/assets/svg/phone.svg'},
				{name: 'Twitter', icon: 'twitter', icon_url: 'app/assets/svg/twitter.svg'},
				{name: 'Google+', icon: 'google_plus', icon_url: 'app/assets/svg/google_plus.svg'},
				{name: 'Hangout', icon: 'hangouts', icon_url: 'app/assets/svg/hangouts.svg'}
			];
			this.performAction = function(action) {
				$mdBottomSheet.hide(action);
			};
		}

		$mdBottomSheet.show({
			parent: angular.element(document.getElementById('content')),
			templateUrl: contactSheetTpl.name,
			controller: ['$mdBottomSheet', UserSheetController],
			controllerAs: 'vm',
			bindToController: true,
			targetEvent: $event
		}).then(function(clickedItem) {
			$log.debug(clickedItem.name + ' clicked!');
		});
	}

	self.selectUser = selectUser;
	self.toggleList = toggleUsersList;
	self.share = share;
}

export default [
	'usersService', '$mdSidenav', '$mdBottomSheet', '$scope', '$log',
	AppController
];
