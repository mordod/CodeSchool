(function () {
	angular.module('lunchApp', ["ngResource", 'ui.router'])
		.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise("/all");
			$stateProvider
				.state('restaurantList', {
					url : '/all',
					controller: "RestaurantsCtrl",
					controllerAs: "restaurantsCtrl",
					templateUrl: "templates/restaurant.html"
				})
				.state('restaurantNew', {
					url : '/new',
					controller: "RestaurantNewCtrl",
					controllerAs: "formCtrl",
					templateUrl: "templates/restaurant_form.html"
				})
				.state('restaurantDetail', {
					url : '/detail/:_id',
					controller: "RestaurantDetailCtrl",
					controllerAs: "detailCtrl",
					templateUrl: "templates/restaurant_detail.html"
				})
				.state('restaurantEdit', {
					url : '/edit/:_id',
					controller: "RestaurantEditCtrl",
					controllerAs: "formCtrl",
					templateUrl: "templates/restaurant_form.html"
				})
				.state('restaurantSearch', {
					url : '/all',
					controller: "RestaurantSearchCtrl",
					controllerAs: "SearchCtrl",
					templateUrl: "templates/restaurant.html"
				})

		}]);
})();