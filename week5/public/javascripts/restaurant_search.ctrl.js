(function () {
	angular.module("lunchApp")
		.controller("RestaurantSearchCtrl",["Restaurant", "$rootScope", "$state", function (Restaurant, $rootScope, $state){
			this.searchRestaurant = function(){
				console.log("DOES THIS DO ANYTHING?");
			};
		}]);
})();