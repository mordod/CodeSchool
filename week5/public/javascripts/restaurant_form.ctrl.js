(function () {
	angular.module("lunchApp")
		.controller("RestaurantFormCtrl",["Restaurant", function (Restaurant){
			this.newRestaurant = new Restaurant();

			this.addRestaurant = function () {
				this.newRestaurant.$save();

			};
				
		}]);
})();