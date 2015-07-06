(function (){
	angular.module("lunchApp")
		.factory("Restaurant", ["$resource",function($resource){
			return $resource("/restaurants/:restaurant_id.json");
		}]);
})();