(function () {
	angular.module("lunchApp")
		.controller("RestaurantNewCtrl",["Restaurant", "$rootScope", "$state", function (Restaurant, $rootScope, $state){
			this.restaurant = new Restaurant();

			this.saveRestaurant = function () {
				this.restaurant.$save(function (saveRestaurant) {
					$rootScope.$broadcast('restaurantCreated', saveRestaurant);
					$state.go("restaurantDetail", saveRestaurant);
				});
				


			};
				
		}]);
})();