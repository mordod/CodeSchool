(function () {
	angular.module("lunchApp")
		.controller("RestaurantsCtrl",["Restaurant", "$scope", "$state", function (Restaurant, $scope, $state){
			this.restaurants = Restaurant.query();

			this.searchKeyword = '';
			this.searchRestaurants = function () {
				this.restaurants = Restaurant.query({search: this.searchKeyword });
			};
			this.pickRandomRestaurant = function () {
				var i = Math.floor(Math.random() * this.restaurants.length);
				var restaurant = this.restaurants[i];
				$state.go("restaurantDetail", restaurant);
			};
			var ctrl = this;
			$scope.$on("restaurantCreated", function (event, restaurant){
				ctrl.restaurants.push(restaurant);
			});
		}]);
})();