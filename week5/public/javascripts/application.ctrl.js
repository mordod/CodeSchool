(function () {
	angular.module("lunchApp")
		.controller("RestaurantsCtrl",["Restaurant", "$scope", function (Restaurant, $scope){
			this.restaurants = Restaurant.query();

			var ctrl = this;

			$scope.$on("restaurantCreated", function (event, restaurant){
				ctrl.restaurants.push(restaurant);
			});
				
		}]);
})();