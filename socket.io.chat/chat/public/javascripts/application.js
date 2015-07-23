(function () {
	angular.module('space', ["ngResource", 'ui.router'])
		.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise("/all");
			$stateProvider
				.state('position', {
					url : '/all',
					controller: "PositionCtrl",
					controllerAs: "position",
					templateUrl: "templates/position.html"
				})
				.state('scanner', {
					url : '/scanner',
					controller: "ScannerCtrl",
					controllerAs: "scanner",
					templateUrl: "templates/scanner.html"
				})
				.state('monitor', {
					url : '/monitor',
					controller: "MonitorCtrl",
					controllerAs: "monitor",
					templateUrl: "templates/monitor.html"
				})
				.state('captain', {
					url : '/captain',
					controller: "CaptainCtrl",
					controllerAs: "captain",
					templateUrl: "templates/captain.html"
				})
				.state('leftWing', {
					url : '/leftWing',
					controller: "LeftWingCtrl",
					controllerAs: "leftWing",
					templateUrl: "templates/leftWing.html"
				})
				.state('rightWing', {
					url : '/rightWing',
					controller: "RightWingCtrl",
					controllerAs: "RightWing",
					templateUrl: "templates/rightWing.html"
				})
				

		}]);
})();