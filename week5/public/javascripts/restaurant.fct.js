(function (){
	angular.module("lunchApp")
		.factory("Restaurant", ["$resource",function($resource){
			return $resource("/restaurants/:restaurantId.json", null, {
				update: {method: "PUT"}
			
			});
		}]);
})();