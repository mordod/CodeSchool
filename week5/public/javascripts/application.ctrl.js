(function () {
	angular.module("lunchApp")
		.controller("RestaurantsCtrl",["Restaurant", function (Restaurant){
			this.hello = "HERRO? WORLD?";
			this.restaurants = Restaurant.query()
				
		}]);
})();