(function (){
	angular.module("lunchApp")
		.controller('RestaurantDetailCtrl', ["Restaurant", "$stateParams", function (Restaurant, $stateParams){
			var id = $stateParams._id;
			this.restaurant = Restaurant.get({ restaurantId: id });

		}]);
})();